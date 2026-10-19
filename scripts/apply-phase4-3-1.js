/**
 * apply-phase4-3-1.js
 * Phase 4.3.1 hotfix: Correct Malaysian Immigration Department staff (JIM)
 * validity eligibility. Staff are restricted to 10-year passports only.
 * 5-year passports are NOT eligible for this category.
 *
 * Official source: https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/
 * Source review date: 2026-10-19
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');

const rulesPath = path.join(__dirname, '..', 'data', 'country-rules.json');
const rulePacksJsPath = path.join(__dirname, '..', 'data', 'rule-packs.js');

const rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));
const MY = rules.MY;
assert(MY, 'MY rule pack must exist');

const fees = MY.services.first_passport.fees;

// -----------------------------------------------------------------------
// FIX 1: Staff 5-year original passport → NOT ELIGIBLE
// The JIM official fee schedule restricts officers and staff to 10-year only.
// -----------------------------------------------------------------------
fees.fee_schedule_by_category.immigration_officers_staff = {
  category_label: 'Officers and Staff of the Immigration Department of Malaysia (Pegawai dan Kakitangan JIM)',
  validity_5_year: {
    status: 'not_eligible',
    amount: null,
    reason: 'Malaysian Immigration Department (JIM) fee schedule restricts officers and staff (Pegawai dan Kakitangan JIM) to 10-year validity only. Five-year passports are not issued to this category under the official JIM fee schedule.'
  },
  validity_10_year: {
    status: 'eligible_free',
    amount: 0,
    exemption: 'Official service allocation for immigration officers and staff — 10-year passport issued Gratis (RM 0) upon departmental verification.'
  }
};

// -----------------------------------------------------------------------
// FIX 2: Staff 5-year replacement → NOT ELIGIBLE
// Staff can only replace 10-year passports (the only validity they hold).
// -----------------------------------------------------------------------
const rep5 = fees.lost_and_damaged_replacement_schedule.validity_5_year;
rep5.immigration_officers_staff = {
  status: 'not_eligible',
  reason: 'Malaysian Immigration Department (JIM) staff are not eligible for 5-year passport replacement. Staff category is restricted to 10-year passports only under the official JIM fee schedule.'
};

// -----------------------------------------------------------------------
// FIX 3: Staff 10-year replacement → official replacement amounts (RM 200/500/1000)
// Label as official replacement amounts, NOT "calculated difference".
// -----------------------------------------------------------------------
const rep10 = fees.lost_and_damaged_replacement_schedule.validity_10_year;
rep10.immigration_officers_staff = {
  first_loss: 200,
  second_loss: 500,
  third_loss: 1000,
  note: 'Official replacement amounts per the JIM fee schedule. Departmental verification, police report (Borang IM.42c), and investigation approval by the Director General of Immigration are required.'
};

// -----------------------------------------------------------------------
// FIX 4: Update fee_records — remove any 5-year staff record since
// 5-year validity is not eligible for this category.
// -----------------------------------------------------------------------
const feeRecords = fees.fee_records;
fees.fee_records = feeRecords.filter(r => !(r.applicant_category === 'immigration_officers_staff' && r.validity_period === '5_years'));
console.log('Filtered out 5-year staff fee_record.');

// Update also the eligibility note for JIM staff to remove "5-year" mention
const myEligibility = MY.services.first_passport.eligibility;
const jimIdx = myEligibility.findIndex(e => e.rule && e.rule.includes('Pegawai dan Kakitangan JIM'));
if (jimIdx !== -1) {
  myEligibility[jimIdx].rule = 'Officers and Staff of the Immigration Department of Malaysia (Pegawai dan Kakitangan JIM) receive 100% statutory fee exemption (Gratis / RM 0) for 10-year passports only upon departmental verification. Five-year passports are NOT eligible for this category under the official JIM fee schedule.';
  myEligibility[jimIdx].last_reviewed = '2026-10-19';
  console.log('Updated JIM eligibility note.');
}

// Update verification date
fees.verification_date = '2026-10-19';

// -----------------------------------------------------------------------
// Pre-write assertions
// -----------------------------------------------------------------------
const staff5yr = fees.fee_schedule_by_category.immigration_officers_staff.validity_5_year;
const staff10yr = fees.fee_schedule_by_category.immigration_officers_staff.validity_10_year;
const rep5Staff = fees.lost_and_damaged_replacement_schedule.validity_5_year.immigration_officers_staff;
const rep10Staff = fees.lost_and_damaged_replacement_schedule.validity_10_year.immigration_officers_staff;

assert.strictEqual(staff5yr.status, 'not_eligible', 'Staff 5yr status must be not_eligible');
assert.strictEqual(staff5yr.amount, null, 'Staff 5yr amount must be null');
assert.strictEqual(staff10yr.status, 'eligible_free', 'Staff 10yr status must be eligible_free');
assert.strictEqual(staff10yr.amount, 0, 'Staff 10yr amount must be 0');
assert.strictEqual(rep5Staff.status, 'not_eligible', 'Rep 5yr staff status must be not_eligible');
assert.strictEqual(rep10Staff.first_loss, 200, 'Rep 10yr staff first_loss must be 200');
assert.strictEqual(rep10Staff.second_loss, 500, 'Rep 10yr staff second_loss must be 500');
assert.strictEqual(rep10Staff.third_loss, 1000, 'Rep 10yr staff third_loss must be 1000');

console.log('All pre-write assertions passed.');

// -----------------------------------------------------------------------
// Write files
// -----------------------------------------------------------------------
fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2) + '\n', 'utf8');
console.log('data/country-rules.json written successfully.');

const rulePacksJsContent = 'window.RULE_PACKS = ' + JSON.stringify(rules, null, 2) + ';\n' +
  'if (typeof module !== "undefined" && module.exports) {\n' +
  '  module.exports = { RULE_PACKS: window.RULE_PACKS };\n' +
  '}\n';
fs.writeFileSync(rulePacksJsPath, rulePacksJsContent, 'utf8');
console.log('data/rule-packs.js written successfully.');

console.log('\n=== Phase 4.3.1 apply-phase4-3-1.js COMPLETE ===');
