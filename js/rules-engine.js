/**
 * PassportReady Rules Engine
 * Evaluates applicant preparation against verified official country rule packs or international baseline standards.
 * Designed with transparent status tiers: Verified Rule Pack vs. Awaiting Official Research.
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
    let preparationScore = 100;

    // 0. Country Verification Status Guardrail
    if (!isVerifiedPack) {
      // Unverified country data cannot silently produce a 100% prepared result
      preparationScore = Math.min(preparationScore, 70);
      flags.push({
        severity: 'info',
        code: 'UNVERIFIED_COUNTRY_PROCEDURAL_PACK',
        title: `Preliminary Guidance for ${countryName}`,
        message: `Detailed scenario rules for ${countryName} are undergoing official research. This checklist reflects baseline international preparation standards (ICAO Doc 9303).`,
        action: `Confirm specific accepted document alternatives, forms, and fees directly with the official authority of ${countryName} before applying.`
      });
    }

    // 1. Mismatch & Identity Consistency Evaluation
    if (nameMatch === 'major') {
      preparationScore -= 30;
      let nameSpecificAdvice = "Securing legal name change documentation is required prior to filing. In India, for marriage-related surname changes or adding spouse name, a simple self-declaration (Annexure 'E') suffices and NO Gazette publication is needed; only complete major name replacements require Gazette publication and two newspaper ads. In the US, a certified court order or marriage certificate is required (22 CFR § 51.25). In the UK, an enrolled or unenrolled deed poll is required by HMPO. In the Philippines, an annotated PSA civil entry or court decree is mandatory.";
      if (countryCode === 'IN') {
        nameSpecificAdvice = "Under Indian MEA Passport Manual rules: if changing surname due to marriage or adding spouse name, a simple self-declaration (Annexure 'E') is sufficient and NO Gazette notification or marriage certificate is required. If undergoing a complete major change of given/family name unrelated to marriage, an Affidavit (Annexure 'E'), advertisements in two daily newspapers, and publication in the Gazette of India are mandatory. For minor spelling differences, two statutory public IDs are accepted without Gazette publication.";
      } else if (countryCode === 'US') {
        nameSpecificAdvice = "Under US Department of State rules (22 CFR § 51.25), legal name changes require an original certified court order or government marriage certificate.";
      } else if (countryCode === 'GB') {
        nameSpecificAdvice = "Under HMPO guidance, an enrolled or unenrolled deed poll accompanied by evidence of the new name in official use is required.";
      } else if (countryCode === 'PH') {
        nameSpecificAdvice = "Under Philippine DFA regulations, an annotated PSA civil registry record or court order is required pursuant to RA 9048/10172.";
      } else if (countryCode === 'JP') {
        nameSpecificAdvice = "Under Japanese MOFA rules, legal name changes require a certified Family Register (戸籍謄本 - Koseki Tohon) issued within the last 6 months reflecting the new civil registration entry.";
      } else if (countryCode === 'MX') {
        nameSpecificAdvice = "Under Mexican SRE regulations, legal name changes require an amended birth certificate issued by the Civil Registry (Registro Civil) with marginal notes or judicial decree.";
      } else if (countryCode === 'BR') {
        nameSpecificAdvice = "Under Brazilian Polícia Federal rules, name changes require an updated civil registry certificate (Certidão de Casamento ou Nascimento com averbação) and prior update of your CPF with Receita Federal.";
      } else if (countryCode === 'ZA') {
        nameSpecificAdvice = "Under South African DHA rules, name changes must first be updated on the National Population Register, and an updated Smart ID Card must be issued prior to passport processing.";
      } else if (countryCode === 'NG') {
        nameSpecificAdvice = "Under Nigeria Immigration Service rules, biographical data must first be amended in the NIMC database; passport issuance requires an updated NIN slip matching character-for-character.";
      } else if (countryCode === 'IT') {
        nameSpecificAdvice = "Under Italian law, name or surname changes require official registration with the Comune of civil registration (estratto per riassunto dell'atto di nascita con annotazioni marginali).";
      }

      flags.push({
        severity: 'critical',
        code: 'NAME_MAJOR_MISMATCH',
        title: 'Significant Legal Name Difference Detected',
        message: 'Your name differs substantially across records. Submitting without statutory name change proof will result in processing suspension or rejection.',
        action: nameSpecificAdvice
      });
      checklist.push({
        id: 'name_correction_evidence',
        title: 'Secure Statutory Proof of Legal Name Change',
        details: isVerifiedPack ? `Obtain official evidence conforming to ${countryName} legal requirements.` : 'Obtain certified court order, marriage certificate, or official government gazette / deed poll matching your jurisdiction.',
        mandatory: true,
        status: 'pending',
        category: 'identity'
      });
    } else if (nameMatch === 'minor') {
      preparationScore -= 15;
      flags.push({
        severity: 'warning',
        code: 'NAME_MINOR_MISMATCH',
        title: 'Spelling or Initial Inconsistency',
        message: 'A difference in spelling, initials, or name order was reported. Authorities require proof that both names belong to the same person.',
        action: 'Ensure your application form separates Given Name and Family Name exactly as assigned on your primary citizenship certificate.'
      });
      checklist.push({
        id: 'name_split_check',
        title: 'Reconcile Given Name vs. Family Name Allocation',
        details: 'Ensure your application form separates Given Name and Surname exactly as they appear in your primary civil registration.',
        mandatory: true,
        status: 'pending',
        category: 'identity'
      });
    }

    if (dobMatch === 'mismatch') {
      preparationScore -= 35;
      flags.push({
        severity: 'critical',
        code: 'DOB_MISMATCH',
        title: 'Date-of-Birth Discrepancy Across Documents',
        message: 'Date of birth differences are strictly audited by passport authorities. The date recorded on your primary civil birth certificate or first citizenship grant legally supersedes dates on secondary cards.',
        action: 'If an educational certificate or national ID has an incorrect birth date, reconcile the discrepancy with the issuing civil authority before submitting your passport application.'
      });
      checklist.push({
        id: 'resolve_dob_discrepancy',
        title: 'Verify Primary Civil Birth Record for DOB Precedence',
        details: 'Ensure the application form reflects the exact birth date established in your primary civil registration.',
        mandatory: true,
        status: 'pending',
        category: 'identity'
      });
    }

    // 2. Missing Documents & Alternative Flows
    if (birthProof === 'missing') {
      preparationScore -= 25;
      let altList = [];
      if (countryCode === 'IN') {
        altList = ['Aadhaar Card with full DOB', 'PAN Card issued by IT Dept', 'School Leaving / Matriculation Certificate', 'Policy Bond issued by LIC'];
      } else if (countryCode === 'US') {
        altList = ['Early public records (baptismal certificate, hospital birth record)', 'Early census records', 'Form DS-10 (Birth Affidavit signed by close relative)'];
      } else if (countryCode === 'GB') {
        altList = ['Certificate of Naturalisation / Registration as British Citizen', 'Parents’ full UK birth certificates + marriage proof'];
      } else if (countryCode === 'PK') {
        altList = ['NADRA Smart National ID Card (SNIC)', 'NADRA Child Registration Certificate (CRC / Form-B)'];
      } else if (countryCode === 'BD') {
        altList = ['Smart National ID Card (NID)', '17-digit digital Birth Registration Certificate (BRC) verified on bdris.gov.bd'];
      } else if (countryCode === 'PH') {
        altList = ['PSA Birth Certificate on Security Paper (SECPA)', 'Certified True Copy from Local Civil Registrar (LCR) with PSA endorsement'];
      } else if (countryCode === 'DE') {
        altList = ['International Multilingual Birth Certificate (CIEC)', 'Auszug aus dem Heiratseintrag / Eheurkunde der Eltern'];
      } else if (countryCode === 'FR') {
        altList = ['Acte de naissance copie intégrale (less than 3 months old)', 'Valid Carte Nationale d’Identité (CNI)'];
      } else if (countryCode === 'AE') {
        altList = ['Digital Family Book record from ICP database', 'Emirates ID card'];
      } else if (countryCode === 'SA') {
        altList = ['Civil Affairs (Al-Ahwal Al-Madaniyya) digital birth registry on Absher'];
      } else {
        altList = ['Consult the issuing authority for officially accepted secondary age evidence.'];
      }

      flags.push({
        severity: 'warning',
        code: 'BIRTH_PROOF_MISSING',
        title: 'Primary Birth Proof Unavailable',
        message: `You indicated that primary civil birth documentation is missing.`,
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
      preparationScore -= 15;
      flags.push({
        severity: 'warning',
        code: 'ADDRESS_PROOF_MISSING',
        title: 'Current Residential Proof Needed',
        message: 'Passports require verifiable proof of your physical residence for territorial jurisdiction, background checks, and delivery.',
        action: 'Secure a registered residential agreement, continuous utility bills, or active bank passbook.'
      });
    }

    // 3. Service-Specific Rules
    if (service === 'first_passport') {
      checklist.push({
        id: 'citizenship_evidence',
        title: 'Proof of Citizenship / Nationality',
        details: isVerifiedPack && pack.services.first_passport
          ? pack.services.first_passport.documents.find(d => d.document_name.includes('Citizenship') || d.document_name.includes('Date of Birth') || d.document_name.includes('Birth Certificate'))?.conditions || `Provide original civil birth certificate or naturalization record demonstrating ${countryName} citizenship.`
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
        details: 'Documentation proving your residence at your present physical address.',
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
          details: 'If expired by more than 3 years, authorities in jurisdictions such as India and the US require fresh identity verification.',
          mandatory: false,
          status: 'pending',
          category: 'procedure'
        });
      }
    } else if (service === 'lost_stolen') {
      preparationScore -= 20;
      let lossNotice = "In India, Pakistan, Bangladesh, and the Philippines, an official Police FIR or Police Missing Certificate is legally required. In the US, Form DS-64 must be filed to permanently invalidate the travel document.";
      if (countryCode === 'US') lossNotice = "In the United States, file Form DS-64 immediately online or submit with Form DS-11; report theft to local police.";
      else if (countryCode === 'IN') lossNotice = "In India, lodge an FIR / Missing Certificate with local police, obtain official stamped copy, and submit Annexure F.";
      else if (countryCode === 'PH') lossNotice = "In the Philippines, an official Police Report (if valid lost passport) and notarized Affidavit of Loss are mandatory.";

      flags.push({
        severity: 'critical',
        code: 'LOST_STOLEN_MANDATORY_REPORT',
        title: 'Official Loss Declaration / Police Report Required',
        message: 'Lost travel documents must be officially declared to prevent identity theft and fraud.',
        action: lossNotice
      });
      checklist.push({
        id: 'police_loss_report',
        title: 'Official Police Report / Loss Declaration',
        details: lossNotice,
        mandatory: true,
        status: 'pending',
        category: 'procedure'
      });
      checklist.push({
        id: 'loss_circumstance_declaration',
        title: 'Formal Statement Explaining Circumstances of Loss',
        details: 'Formal written statement detailing the precise circumstances under which the passport was lost.',
        mandatory: true,
        status: 'pending',
        category: 'documents'
      });
    } else if (service === 'damaged') {
      checklist.push({
        id: 'damaged_booklet_surrender',
        title: 'Surrender Damaged Passport Booklet',
        details: 'Present the damaged passport. If biographical data or electronic chip is compromised, it may be processed under mutilated travel document rules.',
        mandatory: true,
        status: 'pending',
        category: 'documents'
      });
    }

    // 4. Age-Specific Safeguards
    if (age === 'infant' || age === 'minor') {
      let minorSafeguardText = "Under statutory child protection rules (e.g. US 22 CFR § 51.28, India Annexure D/C, UK parental responsibility, Germany gemeinsames Sorgerecht), parental consent must be legally proven.";
      if (countryCode === 'US') minorSafeguardText = "Under US 22 CFR § 51.28, both parents must appear with the child under 16, or the non-applying parent must provide notarized Form DS-3053.";
      else if (countryCode === 'IN') minorSafeguardText = "Under Indian MEA Passports Rules, minors under 18 require Annexure D signed by both parents, or Annexure C for single parents under defined statutory grounds.";
      else if (countryCode === 'PH') minorSafeguardText = "Under Philippine DFA regulations, the mother's presence or Special Power of Attorney (SPA) is required for illegitimate minors.";
      else if (countryCode === 'IT') minorSafeguardText = "Under Italian DL 69/2023, while adult applicants no longer require the other parent's consent for their own passport, issuance of a passport to a minor child strictly requires the formal consent (atto di assenso) of both parents.";
      else if (countryCode === 'MX') minorSafeguardText = "Under Mexican SRE rules, both parents or guardians must appear in person and execute Form OP-7, or grant consent at an SRE delegation/consulate beforehand.";
      else if (countryCode === 'BR') minorSafeguardText = "Under Brazilian CNJ Resolution 131, both parents must sign the authorization form (Formulário de Autorização de Passaporte para Menor) with notarized signatures.";
      else if (countryCode === 'ZA') minorSafeguardText = "Under South African DHA regulations, both parents must sign Section B of Form DHA-73 and present the child's Unabridged Birth Certificate.";
      else if (countryCode === 'NG') minorSafeguardText = "Under Nigeria Immigration Service rules, both parents must provide a signed Letter of Consent, valid passport data page copies, and the child's NPC birth certificate.";
      else if (countryCode === 'JP') minorSafeguardText = "Under Japanese MOFA regulations, the parent with statutory parental authority (親権者) must sign the application form and present a Koseki Tohon issued within 6 months.";

      flags.push({
        severity: 'info',
        code: 'MINOR_PARENTAL_CONSENT',
        title: 'Parental Consent & Custody Safeguards for Minors',
        message: minorSafeguardText,
        action: 'Ensure all required parents attend the appointment or provide statutory notarized consent.'
      });
      checklist.push({
        id: 'parental_consent_proof',
        title: 'Parental Consent & Relationship Proof',
        details: 'Full birth certificate naming parents, plus valid photo IDs of parents and formal statutory consent.',
        mandatory: true,
        status: 'pending',
        category: 'legal'
      });
    }

    // 5. Filing Channel: Domestic vs Consular / Abroad
    if (location === 'abroad') {
      flags.push({
        severity: 'info',
        code: 'CONSULAR_APPLICATION_CHANNEL',
        title: 'Consular Lodgement & Lodgement Matrix',
        message: `You are applying outside ${countryName}. Diplomatic missions enforce strict consular jurisdiction based on your place of residence in the host country.`,
        action: 'Check your embassy website to confirm whether applications are handled directly by the consular section (e.g. US, Japan, Germany, Brazil, Italy) or through an authorized service partner (e.g. VFS Global, BLS International, TLScontact in select countries).'
      });
      checklist.push({
        id: 'consular_jurisdiction',
        title: 'Confirm Consular Jurisdiction & Lodgement Method',
        details: `Verify which embassy, high commission, or authorized application center serves your current residential area. Do not assume a private intermediary is required without verifying your mission's direct guidance.`,
        mandatory: true,
        status: 'pending',
        category: 'procedure'
      });
      checklist.push({
        id: 'residence_visa_proof',
        title: 'Proof of Legal Residence in Host Country',
        details: 'Current valid residency visa, work permit, permanent resident card, or residence certificate showing lawful status in the host nation.',
        mandatory: true,
        status: 'pending',
        category: 'documents'
      });
      checklist.push({
        id: 'consular_fee_currency',
        title: 'Verify Consular Fee Surcharge & Payment Currency',
        details: 'Passports issued overseas frequently carry statutory consular surcharges and require payment in local host currency, debit card, or postal money order.',
        mandatory: true,
        status: 'pending',
        category: 'payment'
      });
    } else {
      checklist.push({
        id: 'domestic_appointment',
        title: 'Book Appointment at Authorized Domestic Center',
        details: isVerifiedPack && pack.official_portal_url
          ? `Schedule appointment through the verified portal: ${pack.official_portal_url}`
          : `Schedule appointment through the official passport authority of ${countryName}.`,
        mandatory: true,
        status: 'pending',
      });
    }

    // 6. Urgency & Processing Standards
    if (urgency === 'urgent') {
      checklist.push({
        id: 'expedited_fee_slot',
        title: 'Verify Expedited / Tatkaal Eligibility & Slots',
        details: 'Confirm whether your specific service qualifies for expedited processing. Certain cases (major name changes, lost passports without prior record) may be excluded from expedited streams.',
        mandatory: false,
        status: 'pending',
        category: 'procedure'
      });
    } else if (urgency === 'emergency') {
      flags.push({
        severity: 'warning',
        code: 'EMERGENCY_DOCUMENT_RESTRICTION',
        title: 'Emergency Travel Document Conditions',
        message: 'Emergency travel certificates or temporary passports usually have short validity (typically 30 days to 1 year) and are frequently valid ONLY for direct return travel to your country of citizenship.',
        action: 'Confirm destination acceptance before purchasing non-refundable transit or flight tickets.'
      });
    }

    // 7. General Photographic & Biometric Standards
    checklist.push({
      id: 'photo_spec_check',
      title: 'ICAO-Compliant Passport Photos or Live Capture',
      details: isVerifiedPack && pack.services[service]?.photo_rules
        ? `Specific rules for ${countryName}: ${JSON.stringify(pack.services[service].photo_rules)}`
        : 'Ensure photos follow standard ICAO 9303 guidelines: neutral expression, no glasses, mouth closed, compliant background colour.',
      mandatory: true,
      status: 'pending',
      category: 'photo'
    });

    // 8. Official Payment Channel & Statutory Fee Guidance
    let feeDetails = 'Always pay fees directly through the government portal, designated post office, or authorized bank challan. Never pay private agents claiming to guarantee approval.';
    let feeStatus = 'general_guidance';
    let specificFeeRecord = null;

    if (isVerifiedPack && pack.services && pack.services[service]?.fees) {
      const fees = pack.services[service].fees;
      if (countryCode === 'JP') {
        if (location === 'inside') {
          if (age === 'adult' || age === 'senior') {
            feeDetails = 'Official Japanese domestic statutory fees (effective 1 July 2026): Online application via Mynaportal: ¥8,900; Counter application: ¥9,300 (10-year validity). Note: The 5-year adult option was discontinued for new applications from 1 July 2026.';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'JPY', online: 8900, counter: 9300, validity: '10 years' };
          } else {
            feeDetails = 'Official Japanese domestic statutory fees (effective 1 July 2026): Online application via Mynaportal: ¥4,400; Counter application: ¥4,800 (5-year validity). Application must be signed by parent with parental authority (親権者).';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'JPY', online: 4400, counter: 4800, validity: '5 years' };
          }
        } else {
          feeDetails = 'Overseas consular fees are determined in local host currency under Japanese MOFA consular regulations. Do not use domestic fee amounts. Check your local Japanese Embassy or Consulate-General portal for current local currency payment instructions.';
          feeStatus = 'consular_local_currency';
          specificFeeRecord = { currency: 'Local currency', note: 'Determined by MOFA consular regulations' };
        }
      } else if (countryCode === 'MX') {
        if (location === 'inside') {
          if (age === 'infant') {
            feeDetails = 'Official Mexican domestic statutory fees (2026 SRE): 1-year validity (issued exclusively to children under 3 years old): MXN 920 (50% discount: MXN 460). Pay at authorized bank with SRE voucher.';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'MXN', standard: 920, discounted: 460, validity: '1 year' };
          } else if (age === 'senior') {
            feeDetails = 'Official Mexican domestic statutory fees (2026 SRE with 50% statutory senior discount for age 60+): 3-year: MXN 900; 6-year: MXN 1,220; 10-year: MXN 2,140. (Standard fees without discount: 3-yr MXN 1,795; 6-yr MXN 2,440; 10-yr MXN 4,280). Note: Agricultural workers under SAWP are excluded from the 10-year discount.';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'MXN', standard: [1795, 2440, 4280], discounted: [900, 1220, 2140], validity: '3, 6, 10 years' };
          } else {
            feeDetails = 'Official Mexican domestic statutory fees (2026 SRE): 3-year: MXN 1,795; 6-year: MXN 2,440; 10-year (adults only): MXN 4,280. 50% discount available for certified disabled, seniors 60+, and SAWP workers (3/6 yr): 3-yr MXN 900; 6-yr MXN 1,220; 10-yr MXN 2,140.';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'MXN', standard: [1795, 2440, 4280], discounted: [900, 1220, 2140], validity: '3, 6, 10 years' };
          }
        } else {
          // Overseas Consular USD
          if (age === 'infant') {
            feeDetails = 'Official Mexican consular fees in USD (2026 Ley Federal de Derechos): 1-year validity (children under 3 only): USD 44 (50% discount: USD 22). Paid at Mexican Consulate abroad.';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'USD', standard: 44, discounted: 22, validity: '1 year' };
          } else if (age === 'senior') {
            feeDetails = 'Official Mexican consular fees in USD (2026 with 50% discount for seniors 60+ and disabled): 3-year: USD 50.50; 6-year: USD 68.50; 10-year: USD 104.50. (Standard consular fees: 3-yr USD 101; 6-yr USD 137; 10-yr USD 209). Paid at Mexican Consulate abroad.';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'USD', standard: [101, 137, 209], discounted: [50.5, 68.5, 104.5], validity: '3, 6, 10 years' };
          } else {
            feeDetails = 'Official Mexican consular fees in USD (2026 Ley Federal de Derechos): 3-year: USD 101 (50% discount: USD 50.50); 6-year: USD 137 (50% discount: USD 68.50); 10-year (adults 18+ only): USD 209 (50% discount: USD 104.50). 1-year (under 3 only): USD 44 (discounted: USD 22). Paid at Mexican Consulate abroad.';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'USD', standard: [101, 137, 209], discounted: [50.5, 68.5, 104.5], validity: '3, 6, 10 years' };
          }
        }
      } else if (countryCode === 'NG') {
        if (location === 'inside') {
          feeDetails = 'Official Nigerian domestic statutory fees (NIS Ministry of Interior reform): 32-page 5-year booklet: ₦100,000; 64-page 10-year booklet: ₦200,000. Payment must be made strictly online via passport.immigration.gov.ng official gateway; cash payments at passport control offices are strictly prohibited. Verified NIN required.';
          feeStatus = 'verified_statutory';
          specificFeeRecord = { currency: 'NGN', booklet_32_5yr: 100000, booklet_64_10yr: 200000 };
        } else {
          feeDetails = 'Official Nigerian diaspora consular fees (NIS reform): 32-page 5-year booklet: USD 150; 64-page 10-year booklet: USD 230. National Identification Number (NIN) verification is mandatory prior to booking biometric enrollment abroad.';
          feeStatus = 'verified_statutory';
          specificFeeRecord = { currency: 'USD', booklet_32_5yr: 150, booklet_64_10yr: 230 };
        }
      }
    } else if (!isVerifiedPack) {
      feeDetails = `Fee Confirmation Required: Official statutory fees for ${countryName} have not been individually verified. Confirm the current statutory fee and official payment channel directly on the official government portal before making any payment.`;
      feeStatus = 'confirmation_required';
    }

    checklist.push({
      id: 'official_fee_payment',
      title: 'Pay Official Government Fee Directly',
      details: feeDetails,
      mandatory: true,
      status: 'pending',
      category: 'payment',
      feeStatus,
      feeRecord: specificFeeRecord
    });

    // Calculate final status and preparation completeness
    preparationScore = Math.max(10, Math.min(100, preparationScore));
    let statusLabel = 'PREPARED';

    if (!isVerifiedPack) {
      statusLabel = 'OFFICIAL_CONFIRMATION_RECOMMENDED';
    } else if (preparationScore < 50) {
      statusLabel = 'CRITICAL_ATTENTION_REQUIRED';
    } else if (preparationScore < 75) {
      statusLabel = 'NEEDS_ATTENTION';
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
      readinessScore: preparationScore,
      statusLabel,
      flags,
      alternatives,
      checklist,
      feeGuidance: {
        countryCode,
        location,
        feeStatus,
        details: feeDetails,
        specificRecord: specificFeeRecord
      },
      summary: {
        totalItems: checklist.length,
        mandatoryItems: checklist.filter(c => c.mandatory).length,
        criticalFlags: flags.filter(f => f.severity === 'critical').length,
        warningFlags: flags.filter(f => f.severity === 'warning').length,
        isDemonstration: false
      }
    };
  }
}

// Export for Node and browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PassportRulesEngine };
}
