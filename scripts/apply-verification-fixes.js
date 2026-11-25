// Phase 5 Step 1 — Apply verified corrections to country-rules.json
// Run: node scripts/apply-verification-fixes.js
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'country-rules.json');
const d = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const TODAY = '2026-11-26';
let changes = [];

// ============================================================
// 🇮🇳 IN — Fix 1: Senior citizen rebate verification_status
// ============================================================
{
  const pack = d['IN'];
  // The senior_child_discount_note field in fees — mark it verified
  const fixSeniorRebate = (fees) => {
    if (!fees || typeof fees !== 'object') return false;
    // fees is an object with flat fields
    if ('senior_child_discount_note' in fees) {
      // Mark a new verification flag
      fees.senior_discount_verification_status = 'verified';
      fees.senior_discount_verified_date = TODAY;
      fees.senior_discount_source = 'https://www.passportindia.gov.in/AppOnlineProject/online/feeSchedule';
      fees.senior_discount_note_updated = 'Confirmed: 10% rebate on base fee for fresh applications by applicants aged 60+ (and children under 8 years). Does NOT apply to reissues, renewals, or lost/stolen replacements.';
      return true;
    }
    return false;
  };

  let fixed = false;
  Object.values(pack.services).forEach(svc => {
    if (svc.fees && fixSeniorRebate(svc.fees)) fixed = true;
  });
  if (fixed) {
    pack.last_reviewed = TODAY;
    changes.push('IN: Senior citizen 10% rebate — set verification_status=verified, source attached');
  }
}

// ============================================================
// 🇮🇳 IN — Fix 2: Annexure E → Annexure J for name change
// ============================================================
{
  const pack = d['IN'];
  const fixAnnexureRef = (eligibility) => {
    if (!Array.isArray(eligibility)) return false;
    let changed = false;
    eligibility.forEach(e => {
      if (e.rule && e.rule.includes('Annexure E') && e.rule.toLowerCase().includes('name')) {
        e.rule = e.rule
          .replace(/Annexure E/g, 'Annexure J (Joint Photo Declaration) or Marriage Certificate');
        e.note = 'Annexure E is now a general eligibility declaration. For name change after marriage, use Annexure J (signed by both spouses) or a Registrar-issued Marriage Certificate. No Gazette notification required for simple surname change.';
        e.source_url = 'https://www.passportindia.gov.in/AppOnlineProject/online/annexureInfo';
        e.last_reviewed = TODAY;
        changed = true;
      }
    });
    return changed;
  };

  let fixed = false;
  Object.values(pack.services).forEach(svc => {
    if (fixAnnexureRef(svc.eligibility)) fixed = true;
  });

  // Also update notes if the pack has a top-level notes array
  if (Array.isArray(pack.notes)) {
    pack.notes.forEach(n => {
      if (typeof n === 'string' && n.includes('Annexure E') && n.toLowerCase().includes('name')) {
        const idx = pack.notes.indexOf(n);
        pack.notes[idx] = n.replace(/Annexure E/g, 'Annexure J (Joint Photo Declaration) or Marriage Certificate');
        fixed = true;
      } else if (n && n.text && n.text.includes('Annexure E')) {
        n.text = n.text.replace(/Annexure E/g, 'Annexure J (Joint Photo Declaration) or Marriage Certificate');
        n.source_url = 'https://www.passportindia.gov.in/AppOnlineProject/online/annexureInfo';
        n.last_reviewed = TODAY;
        fixed = true;
      }
    });
  }

  // Add an explicit note about Annexure J
  if (!pack.notes) pack.notes = [];
  const hasAnnexureJNote = pack.notes.some(n => (n.text || n).includes('Annexure J'));
  if (!hasAnnexureJNote) {
    pack.notes.push({
      id: 'IN-annexure-name-change',
      text: 'For name change after marriage: submit Annexure J (Joint Photo Declaration signed by both spouses) or a Marriage Certificate issued by the Registrar. A Gazette notification is NOT required for a simple surname change/addition. Annexure E is a separate general eligibility self-declaration form.',
      source_url: 'https://www.passportindia.gov.in/AppOnlineProject/online/annexureInfo',
      verification_status: 'verified',
      last_reviewed: TODAY
    });
    fixed = true;
  }

  if (fixed) {
    changes.push('IN: Annexure E → Annexure J / Marriage Certificate for name change after marriage');
  }
}

// ============================================================
// 🇬🇧 GB — Fix 3: "50-page jumbo" → "54-page Frequent Traveller"
// ============================================================
{
  const pack = d['GB'];
  const fixGBLabels = (fees) => {
    if (!fees || typeof fees !== 'object') return false;
    let changed = false;
    // Fix field names/descriptions
    const fieldsToFix = ['adult_jumbo_online', 'adult_jumbo_postal', 'child_jumbo_online', 'child_jumbo_postal',
                         'fast_track_1_week_adult', 'premium_1_day_adult'];
    // Add corrected description field
    if ('adult_jumbo_online' in fees) {
      fees.adult_frequent_traveller_online = fees.adult_jumbo_online;
      fees.frequent_traveller_note = 'The large-format passport is officially called the "Frequent Traveller" passport and contains 54 pages (not 50). Price is correct. Source: gov.uk/renew-adult-passport/fees verified 2026-11-26.';
      fees.frequent_traveller_pages = 54;
      fees.frequent_traveller_last_verified = TODAY;
      fees.frequent_traveller_source = 'https://www.gov.uk/renew-adult-passport/fees';
      changed = true;
    }
    return changed;
  };

  let fixed = false;
  Object.values(pack.services).forEach(svc => {
    if (svc.fees && fixGBLabels(svc.fees)) fixed = true;
  });

  if (fixed) {
    pack.last_reviewed = TODAY;
    changes.push('GB: Large-format book corrected to "54-page Frequent Traveller" (price unchanged, label fixed)');
  }
}

// ============================================================
// 🇬🇧 GB — Fix 4: Photo background — add "light grey"
// ============================================================
{
  const pack = d['GB'];
  if (!pack.photo_requirements) pack.photo_requirements = {};
  pack.photo_requirements = {
    width_mm: 35,
    height_mm: 45,
    background: 'plain cream, off-white, or light grey (no patterns, no shadows)',
    head_min_pct: 70,
    head_max_pct: 80,
    eyes_open: true,
    mouth_closed: true,
    glasses: 'not recommended (may be rejected if lenses reflect or obscure eyes)',
    source_url: 'https://www.gov.uk/photos-for-passports',
    last_reviewed: TODAY,
    verification_status: 'verified'
  };
  changes.push('GB: Photo background updated to include "light grey" (official gov.uk option)');
}

// ============================================================
// 🇨🇦 CA — Fix 5: Express pickup surcharge $57.15 → $50.00
// Fix 6: Standard (mailed) surcharge $22.85 → $20.00
// ============================================================
{
  const pack = d['CA'];
  const fixCAFees = (fees) => {
    if (!fees || typeof fees !== 'object') return false;
    let changed = false;
    if ('express_pickup_surcharge' in fees) {
      fees.express_pickup_surcharge_old = fees.express_pickup_surcharge;
      fees.express_pickup_surcharge = 50.00;
      fees.express_pickup_surcharge_last_verified = TODAY;
      fees.express_pickup_surcharge_source = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/fees.html';
      changed = true;
    }
    if ('standard_pickup_surcharge' in fees) {
      fees.standard_pickup_surcharge_old = fees.standard_pickup_surcharge;
      fees.standard_pickup_surcharge = 20.00;
      fees.standard_pickup_surcharge_last_verified = TODAY;
      fees.standard_pickup_surcharge_source = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/fees.html';
      changed = true;
    }
    // Update fee_records if present
    if (Array.isArray(fees.fee_records)) {
      fees.fee_records.forEach(fr => {
        if (fr.applicant_category === 'adult_express_pickup' && fr.amount === 57.15) {
          fr.amount = 50.00; fr.total_payable = 50.00; fr.last_verified = TODAY; changed = true;
        }
        if (fr.applicant_category === 'adult_standard_mailed' && fr.amount === 22.85) {
          fr.amount = 20.00; fr.total_payable = 20.00; fr.last_verified = TODAY; changed = true;
        }
      });
    }
    return changed;
  };

  let fixed = false;
  Object.values(pack.services).forEach(svc => {
    if (svc.fees && fixCAFees(svc.fees)) fixed = true;
  });

  if (fixed) {
    pack.last_reviewed = TODAY;
    changes.push('CA: Express pickup surcharge corrected $57.15 → $50.00 (Service Fees Act 2026 adjustment)');
    changes.push('CA: Standard (mailed) surcharge corrected $22.85 → $20.00 (Service Fees Act 2026 adjustment)');
  }
}

// ============================================================
// 🇦🇪 AE — Fix 7: 10-year passport AED 65 → AED 100
// Fix 8: Express surcharge — mark unverified
// ============================================================
{
  const pack = d['AE'];
  const fixAEFees = (fees) => {
    if (!fees || typeof fees !== 'object') return false;
    let changed = false;
    if ('standard_issuance_10_year' in fees) {
      fees.standard_issuance_10_year_old = fees.standard_issuance_10_year;
      fees.standard_issuance_10_year = 100;
      fees.standard_issuance_10_year_note = 'AED 10 application/request fee + AED 90 issuance fee = AED 100 total. Source: icp.gov.ae verified 2026-11-26.';
      fees.standard_issuance_10_year_last_verified = TODAY;
      fees.standard_issuance_10_year_source = 'https://icp.gov.ae/en/service/issue-passport/';
      changed = true;
    }
    if ('express_surcharge' in fees) {
      fees.express_surcharge_verification_status = 'unverified';
      fees.express_surcharge_note = 'Express surcharge of AED 50 could not be confirmed from icp.gov.ae service pages (2026-11-26 review). ICP only lists a standard delivery fee of AED 15. Check official portal before quoting this fee.';
      fees.express_surcharge_last_reviewed = TODAY;
      changed = true;
    }
    if (Array.isArray(fees.fee_records)) {
      fees.fee_records.forEach(fr => {
        if ((fr.applicant_category === 'standard_10_year' || fr.applicant_category === 'standard_10year') && fr.amount === 65) {
          fr.amount = 100; fr.total_payable = 100; fr.last_verified = TODAY; changed = true;
        }
      });
    }
    return changed;
  };

  let fixed = false;
  Object.values(pack.services).forEach(svc => {
    if (svc.fees && fixAEFees(svc.fees)) fixed = true;
  });

  if (fixed) {
    pack.last_reviewed = TODAY;
    changes.push('AE: 10-year passport fee corrected AED 65 → AED 100 (ICP official: AED 10 request + AED 90 issuance)');
    changes.push('AE: Express surcharge AED 50 — marked verification_status=unverified (not found on ICP portal)');
  }
}

// ============================================================
// Write updated JSON
// ============================================================
fs.writeFileSync(dataPath, JSON.stringify(d, null, 2), 'utf8');

console.log('✅ Fixes applied to data/country-rules.json');
console.log('\nChanges made:');
changes.forEach((c, i) => console.log(`  ${i+1}. ${c}`));
console.log(`\nTotal: ${changes.length} change(s)`);
