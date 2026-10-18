/**
 * PassportReady Rules Engine
 * Evaluates user profile against verified official country rule packs or global baseline standards.
 */

class PassportRulesEngine {
  constructor(rulePacks = {}) {
    this.rulePacks = rulePacks;
  }

  evaluate(profile) {
    const {
      countryCode = 'IN',
      countryName = 'India',
      location = 'inside',
      service = 'first_passport',
      age = 'adult',
      urgency = 'standard',
      status = 'never',
      birthProof = 'have',
      addressProof = 'have',
      citizenshipProof = 'have',
      nameMatch = 'yes',
      dobMatch = 'yes',
      special = 'none',
      checkedGov = 'yes'
    } = profile;

    const pack = this.rulePacks[countryCode] || null;
    const isVerifiedPack = pack && pack.rule_pack_status === 'verified';

    const checklist = [];
    const flags = [];
    const alternatives = [];
    let readinessScore = 100;

    // 1. Mismatch & Identity Consistency Evaluation
    if (nameMatch === 'major') {
      readinessScore -= 30;
      flags.push({
        severity: 'critical',
        code: 'NAME_MAJOR_MISMATCH',
        title: 'Significant Name Discrepancy Detected',
        message: 'Your name differs significantly across primary records. In most jurisdictions, this requires legal proof (Official Gazette publication, Court Order, Deed Poll, or Marriage Certificate) before submitting.',
        action: 'Do not pay non-refundable fees until legal name documentation is secured.'
      });
      checklist.push({
        id: 'name_correction_evidence',
        title: 'Obtain Official Proof of Legal Name Change',
        details: isVerifiedPack ? 'Check country-specific name change requirements (e.g., Gazette notification or Registrar Marriage certificate).' : 'Obtain certified marriage certificate or official government Gazette publication.',
        mandatory: true,
        status: 'pending',
        category: 'identity'
      });
    } else if (nameMatch === 'minor') {
      readinessScore -= 15;
      flags.push({
        severity: 'warning',
        code: 'NAME_MINOR_MISMATCH',
        title: 'Minor Spelling or Initial Inconsistency',
        message: 'A difference in spelling, initials, or name order was reported. Authorities require proof that both names belong to the same person.',
        action: 'Bring at least two secondary photo identity cards reflecting the correct spelling.'
      });
      checklist.push({
        id: 'name_split_check',
        title: 'Reconcile Given Name vs Surname Split',
        details: 'Ensure your application form separates Given Name and Surname exactly as they appear in the primary citizenship record.',
        mandatory: true,
        status: 'pending',
        category: 'identity'
      });
    }

    if (dobMatch === 'mismatch') {
      readinessScore -= 35;
      flags.push({
        severity: 'critical',
        code: 'DOB_MISMATCH',
        title: 'Date of Birth Discrepancy Across Documents',
        message: 'Date of birth differences are strictly audited. The date on the primary civil birth certificate or first citizenship entry takes legal precedence in most jurisdictions.',
        action: 'If an educational certificate or national ID has an incorrect birth date, verify with the issuing authority whether a civil birth certificate supersedes it.'
      });
      checklist.push({
        id: 'resolve_dob_discrepancy',
        title: 'Verify Primary Civil Birth Record for DOB Precedence',
        details: 'Ensure the application matches the exact birth record recognized by the passport authority.',
        mandatory: true,
        status: 'pending',
        category: 'identity'
      });
    }

    // 2. Missing Documents & Alternative Flows
    if (birthProof === 'missing') {
      readinessScore -= 25;
      let altList = [];
      if (countryCode === 'IN') {
        altList = ['Aadhaar Card with full DOB', 'PAN Card issued by IT Dept', 'School Leaving / Matriculation Certificate', 'Policy Bond issued by LIC'];
      } else if (countryCode === 'US') {
        altList = ['Early public records (baptismal certificate, hospital birth record)', 'Early census records', 'Form DS-10 (Birth Affidavit signed by close relative)'];
      } else if (countryCode === 'GB') {
        altList = ['Official Certificate of Naturalisation / Registration as British Citizen', 'Parents’ full UK birth certificates + marriage proof'];
      } else if (countryCode === 'PK') {
        altList = ['NADRA Smart National ID Card (SNIC)', 'NADRA Child Registration Certificate (CRC / Form-B)'];
      } else if (countryCode === 'BD') {
        altList = ['Smart National ID Card (NID)', '17-digit digital Birth Registration Certificate (BRC) verified on bdris.gov.bd'];
      } else {
        altList = ['Consult the issuing authority for officially accepted secondary age evidence.'];
      }

      flags.push({
        severity: 'warning',
        code: 'BIRTH_PROOF_MISSING',
        title: 'Primary Birth Proof Unavailable',
        message: 'You indicated that primary birth documentation is missing.',
        action: `Verified alternatives for ${countryName}: ${altList.join(' · ')}`
      });
      alternatives.push({
        document: 'Proof of Date of Birth',
        accepted_options: altList
      });
      checklist.push({
        id: 'secure_birth_alt',
        title: 'Gather Secondary Date-of-Birth Evidence',
        details: `Acceptable alternatives for ${countryName}: ${altList.join(', ')}.`,
        mandatory: true,
        status: 'pending',
        category: 'documents'
      });
    }

    if (addressProof === 'missing') {
      readinessScore -= 15;
      flags.push({
        severity: 'warning',
        code: 'ADDRESS_PROOF_MISSING',
        title: 'Current Residential Proof Needed',
        message: 'Passports require verifiable proof of your physical residence for background checks and secure courier delivery.',
        action: 'Secure a registered rent agreement, continuous 1-year utility bills, or active bank account passbook.'
      });
    }

    // 3. Service-Specific Rules
    if (service === 'first_passport') {
      checklist.push({
        id: 'citizenship_evidence',
        title: 'Proof of Citizenship / Nationality',
        details: isVerifiedPack && pack.services.first_passport
          ? pack.services.first_passport.documents.find(d => d.document_name.includes('Citizenship') || d.document_name.includes('Date of Birth'))?.conditions || 'Provide original birth certificate or naturalization record.'
          : `Original document demonstrating ${countryName} citizenship.`,
        mandatory: true,
        status: birthProof === 'have' ? 'completed' : 'pending',
        category: 'documents'
      });
      checklist.push({
        id: 'identity_evidence',
        title: 'Official Photo Identification',
        details: 'Valid unexpired government-issued photo card (National ID, Driver’s Licence, State ID).',
        mandatory: true,
        status: 'completed',
        category: 'documents'
      });
      checklist.push({
        id: 'address_evidence',
        title: 'Current Proof of Residence / Address',
        details: 'Documentation proving your residence at your present address.',
        mandatory: true,
        status: addressProof === 'have' ? 'completed' : 'pending',
        category: 'documents'
      });
    } else if (service === 'renewal_reissue') {
      checklist.push({
        id: 'old_passport_surrender',
        title: 'Submit Existing Passport for Physical Cancellation',
        details: 'Original existing passport booklet must be presented. It will be physically cancelled and returned with the new passport.',
        mandatory: true,
        status: status === 'valid' || status === 'expired' ? 'completed' : 'pending',
        category: 'documents'
      });
      if (status === 'expired') {
        checklist.push({
          id: 'expired_validity_check',
          title: 'Confirm Expiry Interval Rules',
          details: 'If expired by more than 3 years, many authorities require fresh background or police verification.',
          mandatory: false,
          status: 'pending',
          category: 'procedure'
        });
      }
    } else if (service === 'lost_stolen') {
      readinessScore -= 20;
      flags.push({
        severity: 'critical',
        code: 'LOST_STOLEN_MANDATORY_REPORT',
        title: 'Mandatory Police Report / FIR Required',
        message: 'Authorities require an official police report or missing certificate for lost or stolen travel documents to prevent identity fraud.',
        action: 'Report the loss to your local police immediately and obtain an official stamped copy of the FIR / report.'
      });
      checklist.push({
        id: 'police_loss_report',
        title: 'Police FIR / Lost Passport Certificate',
        details: 'Official police report specifying passport number, date, and location where loss occurred.',
        mandatory: true,
        status: 'pending',
        category: 'procedure'
      });
      checklist.push({
        id: 'loss_circumstance_declaration',
        title: 'Sworn Declaration / Annexure of Loss',
        details: 'Formal written statement detailing the precise circumstances under which the passport was lost.',
        mandatory: true,
        status: 'pending',
        category: 'documents'
      });
    } else if (service === 'damaged') {
      checklist.push({
        id: 'damaged_booklet_surrender',
        title: 'Surrender Damaged Passport Booklet',
        details: 'Present the damaged passport. If key pages (biographical, numbers) are destroyed, it may be processed under lost/mutilated rules.',
        mandatory: true,
        status: 'pending',
        category: 'documents'
      });
    }

    // 4. Age-Specific Safeguards
    if (age === 'infant' || age === 'minor') {
      flags.push({
        severity: 'info',
        code: 'MINOR_PARENTAL_CONSENT',
        title: 'Parental Consent & Legal Guardianship Safeguards',
        message: 'Strict international anti-abduction laws apply to child passports. Both legal parents must consent, or formal custody documentation must be provided.',
        action: 'Ensure both parents attend the appointment or provide official notarized consent (e.g., US Form DS-3053, India Annexure D).'
      });
      checklist.push({
        id: 'parental_consent_proof',
        title: 'Parental Consent & Relationship Proof',
        details: 'Full birth certificate naming both parents, plus valid photo IDs of both parents and signed consent.',
        mandatory: true,
        status: 'pending',
        category: 'legal'
      });
    }

    // 5. Filing Channel: Domestic vs Consular / Abroad
    if (location === 'abroad') {
      checklist.push({
        id: 'consular_jurisdiction',
        title: 'Confirm Consular Jurisdiction & Authorized Channel',
        details: `Verify which embassy, high commission, consulate, or authorized agency (e.g., VFS / BLS) handles passport applications for your current city of residence.`,
        mandatory: true,
        status: 'pending',
        category: 'procedure'
      });
      checklist.push({
        id: 'residence_visa_proof',
        title: 'Proof of Legal Residence in Host Country',
        details: 'Current valid residency visa, work permit, green card, or residence card showing lawful status abroad.',
        mandatory: true,
        status: 'pending',
        category: 'documents'
      });
    } else {
      checklist.push({
        id: 'domestic_appointment',
        title: 'Book Appointment at Authorized Domestic Center',
        details: isVerifiedPack && pack.official_portal_url
          ? `Schedule appointment through the official portal: ${pack.official_portal_url}`
          : `Schedule appointment through the official passport authority of ${countryName}.`,
        mandatory: true,
        status: 'pending',
        category: 'procedure'
      });
    }

    // 6. Urgency & Processing Standards
    if (urgency === 'urgent') {
      checklist.push({
        id: 'expedited_fee_slot',
        title: 'Verify Expedited / Tatkaal Eligibility & Slots',
        details: 'Confirm whether your specific service qualifies for expedited processing. Certain cases (major name changes, lost passports without prior record) may be excluded from Tatkaal/Urgent streams.',
        mandatory: false,
        status: 'pending',
        category: 'procedure'
      });
    } else if (urgency === 'emergency') {
      flags.push({
        severity: 'warning',
        code: 'EMERGENCY_DOCUMENT_RESTRICTION',
        title: 'Emergency Travel Document Notice',
        message: 'Emergency travel certificates or temporary passports usually have short validity (e.g. 30 days to 1 year) and are often valid ONLY for direct return to your country of citizenship.',
        action: 'Confirm destination acceptance before purchasing non-refundable flight tickets.'
      });
    }

    // 7. General Photographic & Biometric Standards
    checklist.push({
      id: 'photo_spec_check',
      title: 'ICAO-Compliant Passport Photos or Live Capture',
      details: isVerifiedPack && pack.services[service]?.photo_rules
        ? JSON.stringify(pack.services[service].photo_rules)
        : 'Ensure photos follow standard ICAO 9303 guidelines: plain white/off-white background, neutral expression, no glasses, mouth closed.',
      mandatory: true,
      status: 'pending',
      category: 'photo'
    });

    // 8. Official Payment Channel
    checklist.push({
      id: 'official_fee_payment',
      title: 'Pay Official Government Fee Directly',
      details: 'Always pay fees directly through the government portal or authorized bank challan. Never pay private agents claiming to guarantee approval.',
      mandatory: true,
      status: 'pending',
      category: 'payment'
    });

    // Calculate final status
    readinessScore = Math.max(10, Math.min(100, readinessScore));
    let statusLabel = 'PREPARED';
    if (readinessScore < 50) {
      statusLabel = 'CRITICAL_ATTENTION_REQUIRED';
    } else if (readinessScore < 75) {
      statusLabel = 'NEEDS_ATTENTION';
    } else if (!isVerifiedPack) {
      statusLabel = 'OFFICIAL_CONFIRMATION_RECOMMENDED';
    }

    return {
      country: {
        code: countryCode,
        name: countryName,
        isVerified: isVerifiedPack,
        authorityName: pack ? pack.authority_name : null,
        officialPortalUrl: pack ? pack.official_portal_url : null,
        lastReviewed: pack ? pack.last_reviewed : null,
        statusNote: isVerifiedPack ? 'Verified Official Source Pack' : 'General Preparation Pack (Awaiting detailed official research)'
      },
      readinessScore,
      statusLabel,
      flags,
      alternatives,
      checklist,
      summary: {
        totalItems: checklist.length,
        mandatoryItems: checklist.filter(c => c.mandatory).length,
        criticalFlags: flags.filter(f => f.severity === 'critical').length,
        warningFlags: flags.filter(f => f.severity === 'warning').length
      }
    };
  }
}

// Export for Node and browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PassportRulesEngine };
}
