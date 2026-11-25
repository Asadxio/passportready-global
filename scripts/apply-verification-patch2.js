// Phase 5 Step 1 — Patch 2: Fix GB child 54-page fees + CA weekend surcharge
// GB child_jumbo_online: £76.50 → £80.50 (official gov.uk eff. 2026-04-08)
// GB child_jumbo_postal: £90.00 → £94.00 (official gov.uk eff. 2026-04-08)
// CA weekend_holiday_surcharge: missing → $383.50 (canada.ca eff. 2026-03-31)
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'country-rules.json');
const d = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const TODAY = '2026-11-26';

// === GB child 54-page fixes ===
{
  const GB = d['GB'];
  Object.values(GB.services).forEach(svc => {
    const f = svc.fees;
    if (!f || typeof f !== 'object') return;
    if ('child_jumbo_online' in f) {
      console.log('GB child_jumbo_online: was', f.child_jumbo_online, '→ 80.5');
      f.child_jumbo_online = 80.5;
      f.child_jumbo_online_source = 'https://www.gov.uk/renew-adult-passport/fees';
      f.child_jumbo_online_effective = '2026-04-08';
      f.child_jumbo_online_verified = TODAY;
    }
    if ('child_jumbo_postal' in f) {
      console.log('GB child_jumbo_postal: was', f.child_jumbo_postal, '→ 94');
      f.child_jumbo_postal = 94;
      f.child_jumbo_postal_source = 'https://www.gov.uk/renew-adult-passport/fees';
      f.child_jumbo_postal_effective = '2026-04-08';
      f.child_jumbo_postal_verified = TODAY;
    }
    // Fix fee_records too
    if (Array.isArray(f.fee_records)) {
      f.fee_records.forEach(r => {
        if (r.applicant_category === 'child_frequent_traveller_online' && r.amount === 76.5) {
          r.amount = 80.5; r.total_payable = 80.5; r.last_verified = TODAY;
        }
        if (r.applicant_category === 'child_frequent_traveller_postal' && r.amount === 90) {
          r.amount = 94; r.total_payable = 94; r.last_verified = TODAY;
        }
      });
    }
  });
  GB.last_reviewed = TODAY;
}

// === CA weekend/holiday surcharge ===
{
  const CA = d['CA'];
  Object.values(CA.services).forEach(svc => {
    const f = svc.fees;
    if (!f || typeof f !== 'object') return;
    if ('urgent_pickup_surcharge' in f && !('weekend_holiday_surcharge' in f)) {
      f.weekend_holiday_surcharge = 383.5;
      f.weekend_holiday_surcharge_note = 'Emergency weekend or statutory holiday service. Strictly for documented emergencies only. Added 2026-11-26.';
      f.weekend_holiday_surcharge_source = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/fees/fee-changes-passport.html';
      f.weekend_holiday_surcharge_effective = '2026-03-31';
      f.weekend_holiday_surcharge_verified = TODAY;
      console.log('CA: Added weekend_holiday_surcharge = $383.50');
    }
  });
  CA.last_reviewed = TODAY;
}

fs.writeFileSync(dataPath, JSON.stringify(d, null, 2), 'utf8');
console.log('✅ Patch 2 applied.');
