const https = require('https');
const vm = require('vm');
const assert = require('assert');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function verifyLive() {
  console.log('--- 1. Checking Live https://passport.myoss.in/ ---');
  const index = await fetchUrl('https://passport.myoss.in/?cachebust=' + Date.now());
  console.log('HTTP Status:', index.status);
  assert.strictEqual(index.status, 200, 'Must return HTTP 200');
  
  const hasDemoOnly = index.body.includes('DEMONSTRATION ONLY');
  console.log('Has "DEMONSTRATION ONLY":', hasDemoOnly);
  assert(hasDemoOnly, 'Must display DEMONSTRATION ONLY');
  
  const hasLivePreview = index.body.includes('LIVE PREVIEW');
  console.log('Has "LIVE PREVIEW":', hasLivePreview);
  assert(!hasLivePreview, 'Must NOT contain LIVE PREVIEW');
  
  const scriptsWithV = (index.body.match(/src="[^"]+\?v=20261019_10"/g) || []);
  console.log('Scripts with ?v=20261019_10:', scriptsWithV.length);
  assert(scriptsWithV.length >= 7, 'Must have at least 7 scripts with v=20261019_10');
  
  const cssWithV = (index.body.match(/href="css\/styles\.css\?v=20261019_10"/g) || []);
  console.log('CSS with ?v=20261019_10:', cssWithV.length);
  assert(cssWithV.length >= 1, 'CSS must have v=20261019_10');

  // Directory filter pills checks
  assert(!index.body.includes('Verified Rules (18)'), 'Live HTML must NOT contain stale "Verified Rules (18)"');
  assert(!index.body.includes('Portal Linked (9)'), 'Live HTML must NOT contain stale "Portal Linked (9)"');
  assert(!index.body.includes('All (249)'), 'Live HTML filter button must NOT hardcode count inside button text');
  assert(!index.body.includes('Awaiting Research (222)'), 'Live HTML filter button must NOT hardcode count inside button text');
  assert(index.body.includes('data-dir-filter="all"'), 'Live HTML must contain data-dir-filter="all"');
  assert(index.body.includes('data-dir-filter="verified"'), 'Live HTML must contain data-dir-filter="verified"');
  assert(index.body.includes('data-dir-filter="linked"'), 'Live HTML must contain data-dir-filter="linked"');
  assert(index.body.includes('data-dir-filter="needs_research"'), 'Live HTML must contain data-dir-filter="needs_research"');
  assert(index.body.includes('dir-filter-count'), 'Live HTML must contain dir-filter-count spans');

  const hasFaqFix = index.body.includes("routine marriage-related surname changes require only a self-declaration (Annexure 'E')");
  console.log('Has India Annexure E FAQ Fix:', hasFaqFix);
  assert(hasFaqFix, 'Must contain India Annexure E FAQ fix');

  console.log('\n--- 2. Checking Live country-data.js ---');
  const countryDataRes = await fetchUrl('https://passport.myoss.in/data/country-data.js?v=20261019_10');
  console.log('Country data HTTP Status:', countryDataRes.status);
  assert.strictEqual(countryDataRes.status, 200, 'Country data must return HTTP 200');

  const cdSandbox = { window: {}, module: {} };
  vm.runInNewContext(countryDataRes.body, cdSandbox);
  const cd = cdSandbox.window.PASSPORT_COUNTRIES || cdSandbox.PASSPORT_COUNTRIES;
  assert(Array.isArray(cd), 'PASSPORT_COUNTRIES must be an array');
  assert.strictEqual(cd.length, 249, 'Must have 249 total countries');
  const cdVerified = cd.filter(c => c.portal_status === 'verified').length;
  const cdLinked = cd.filter(c => c.portal_status === 'official_portal_linked_rules_not_fully_audited').length;
  const cdResearch = cd.filter(c => c.portal_status === 'official_source_needs_research').length;
  console.log(`Live Country Data Counts: ${cdVerified} verified, ${cdLinked} linked, ${cdResearch} research (Total: ${cd.length})`);
  assert.strictEqual(cdVerified, 27, 'Must have 27 verified countries in live country data');
  assert.strictEqual(cdLinked, 0, 'Must have 0 linked unverified countries');
  assert.strictEqual(cdResearch, 222, 'Must have 222 awaiting research');

  console.log('\n--- 3. Checking Live rule-packs.js ---');
  const rulePacks = await fetchUrl('https://passport.myoss.in/data/rule-packs.js?v=20261019_10');
  console.log('Rule packs HTTP Status:', rulePacks.status);
  assert.strictEqual(rulePacks.status, 200, 'Rule packs must return HTTP 200');

  // Evaluate rule packs
  const sandbox = { window: {}, module: {} };
  vm.runInNewContext(rulePacks.body, sandbox);
  const rp = sandbox.window.RULE_PACKS || sandbox.RULE_PACKS;
  
  console.log('Verified Rule Packs count:', Object.keys(rp).length);
  assert.strictEqual(Object.keys(rp).length, 27, 'Must have 27 verified rule packs');
  
  // JP Check
  console.log('\n[JP Check - Post-July 2026 Fees]');
  const jpFees = rp.JP.services.first_passport.fees;
  assert.strictEqual(jpFees.domestic_fees.adult_18_and_over.validity_10_year.online, 8900);
  assert.strictEqual(jpFees.domestic_fees.adult_18_and_over.validity_10_year.counter, 9300);
  assert.strictEqual(jpFees.domestic_fees.minor_under_18.validity_5_year.online, 4400);
  assert.strictEqual(jpFees.domestic_fees.minor_under_18.validity_5_year.counter, 4800);
  assert.strictEqual(jpFees.domestic_fees.adult_18_and_over.adult_5_year_discontinued_date, '2026-07-01');
  
  // MX Check - Phase 3.4 Consular Emergency & Type E Logic
  console.log('\n[MX Check - 2026 SRE Fees & Consular Emergency Type E Logic]');
  const mxFees = rp.MX.services.first_passport.fees;
  assert.strictEqual(mxFees.standard_domestic_mxn.validity_1_year, 920);
  assert.strictEqual(mxFees.standard_domestic_mxn.validity_3_year, 1795);
  assert.strictEqual(mxFees.standard_domestic_mxn.validity_6_year, 2440);
  assert.strictEqual(mxFees.standard_domestic_mxn.validity_10_year, 4280);
  assert.strictEqual(mxFees.consular_overseas_usd.standard.validity_1_year, 44);
  assert.strictEqual(mxFees.consular_overseas_usd.standard.validity_3_year, 101);
  assert.strictEqual(mxFees.consular_overseas_usd.standard.validity_6_year, 137);
  assert.strictEqual(mxFees.consular_overseas_usd.standard.validity_10_year, 209);
  assert.strictEqual(mxFees.consular_overseas_usd.emergency_surcharge_schedule.validity_3_year.total_payable, 131);
  assert.strictEqual(mxFees.consular_overseas_usd.emergency_surcharge_schedule.validity_10_year.total_payable, 272);

  // Mexico Phase 3.4 assertions
  assert(!mxFees.eligibility_conditions.validity_1_year.toLowerCase().includes('in emergency cases'), '1-year validity must not conflate with emergency cases');
  assert(mxFees.eligibility_conditions.emergency_appointments.includes('Article 20 of the Ley Federal de Derechos'), 'Must detail Art. 20 LFD');
  assert(mxFees.eligibility_conditions.emergency_appointments.includes('Emergency Type E Passport'), 'Must mention Emergency Type E Passport');
  assert(!mxFees.eligibility_conditions.emergency_appointments.toLowerCase().includes('only if biometric printing systems are physically unavailable') && !mxFees.eligibility_conditions.emergency_appointments.toLowerCase().includes('issued only if biometric'), 'Must not claim emergency passports are issued only for technical downtime');
  assert(rp.MX.services.lost_stolen && rp.MX.services.lost_stolen.availability_status === 'available', 'MX must have lost_stolen service');
  assert(rp.MX.services.emergency_passport && rp.MX.services.emergency_passport.availability_status === 'limited', 'MX must have emergency_passport service');
  assert(rp.MX.sources.some(s => s.url.includes('consular-menu/pasaportes')), 'Must link official Embamex consular menu source');

  // NG Check
  console.log('\n[NG Check - Preserved Verified NIS Fees]');
  const ngFees = rp.NG.services.first_passport.fees;
  assert.strictEqual(ngFees.booklet_32_pages_5_year, 100000);
  assert.strictEqual(ngFees.booklet_64_pages_10_year, 200000);
  assert.strictEqual(ngFees.diaspora_overseas_usd.booklet_32_pages_5_year, 150);
  assert.strictEqual(ngFees.diaspora_overseas_usd.booklet_64_pages_10_year, 230);

  // Phase 4 & 4.1 Country Verification
  console.log('\n--- 4. Checking Live Phase 4 & Phase 4.1 Rule Packs (9 Countries) ---');
  
  // 1. Indonesia (ID - Phase 4.1 & Phase 4.2 Audited)
  console.log('[ID Check]');
  assert.strictEqual(rp.ID.age_bands.adult_minimum_age, 17, 'ID adult min age must be 17 (NOT 21)');
  assert(Array.isArray(rp.ID.age_bands.statutory_exceptions) && rp.ID.age_bands.statutory_exceptions.some(e => e.code === 'LEGAL_MARRIAGE_UNDER_17'), 'ID must have LEGAL_MARRIAGE_UNDER_17 statutory exception');
  assert(rp.ID.age_bands.statutory_exceptions.some(e => e.citation.includes('Permenkumham No. 18/2022 Pasal 2A')), 'ID exception must cite Permenkumham No. 18/2022 Pasal 2A');
  const idFees = rp.ID.services.first_passport.fees;
  assert.strictEqual(idFees.passport_fees_by_product_and_validity_idr.paspor_biasa_non_elektronik_5_tahun, 350000);
  assert.strictEqual(idFees.passport_fees_by_product_and_validity_idr.paspor_biasa_non_elektronik_10_tahun, 650000);
  assert.strictEqual(idFees.passport_fees_by_product_and_validity_idr.paspor_biasa_elektronik_5_tahun, 650000);
  assert.strictEqual(idFees.passport_fees_by_product_and_validity_idr.paspor_biasa_elektronik_10_tahun, 950000);
  assert.strictEqual(idFees.express_same_day_surcharge, 1000000);
  assert.strictEqual(idFees.lost_passport_fine, 1000000);
  assert.strictEqual(idFees.damaged_passport_fine, 500000);
  assert(rp.ID.services.first_passport.steps.some(s => s.step.includes('M-Paspor')), 'ID must require M-Paspor app');

  // 2. Ireland (IE)
  console.log('[IE Check]');
  const ieFees = rp.IE.services.first_passport.fees;
  assert.strictEqual(ieFees.standard_online_eur.adult_standard_34_pages, 75);
  assert.strictEqual(ieFees.standard_online_eur.adult_bundle_booklet_and_card, 100);
  assert.strictEqual(ieFees.urgent_appointment_service_eur.same_day_renewal, 150);
  assert(rp.IE.sources.some(s => s.url.includes('dfa.ie/passports')), 'IE must link DFA source');

  // 3. Kenya (KE - Phase 4.1 Audited)
  console.log('[KE Check]');
  assert.strictEqual(rp.KE.official_portal_url, 'https://immigration.go.ke/', 'KE official portal must be https://immigration.go.ke/');
  const keFees = rp.KE.services.first_passport.fees;
  assert.strictEqual(keFees.standard_domestic_kes.ordinary_a_series_34_pages, 7550);
  assert.strictEqual(keFees.standard_domestic_kes.ordinary_b_series_50_pages, 9550);
  assert.strictEqual(keFees.standard_domestic_kes.ordinary_c_series_66_pages, 12050);
  assert.strictEqual(keFees.standard_domestic_kes.replacement_lost_passport, 20050);
  assert.strictEqual(keFees.standard_domestic_kes.replacement_mutilated_passport, 20050);

  // 4. Malaysia (MY - Phase 4.2 & 4.3 Audited)
  console.log('[MY Check]');
  const myFees = rp.MY.services.first_passport.fees;
  assert.strictEqual(myFees.fee_schedule_by_category.adult_18_to_59_years.validity_5_year.amount, 200);
  assert.strictEqual(myFees.fee_schedule_by_category.adult_18_to_59_years.validity_10_year.amount, 350);
  assert.strictEqual(myFees.fee_schedule_by_category.senior_citizens_60_and_older.validity_5_year.amount, 100);
  assert.strictEqual(myFees.fee_schedule_by_category.senior_citizens_60_and_older.validity_10_year.amount, 175);
  assert.strictEqual(myFees.fee_schedule_by_category.children_under_12_years.validity_5_year.amount, 100);
  assert.strictEqual(myFees.fee_schedule_by_category.oku_18_and_older.validity_10_year.amount, 0);
  // Phase 4.3.1: Staff 5-year is NOT eligible — amount must be null, status not_eligible
  assert.strictEqual(myFees.fee_schedule_by_category.immigration_officers_staff.validity_5_year.status, 'not_eligible', 'Live data: MY staff 5yr must be not_eligible');
  assert.strictEqual(myFees.fee_schedule_by_category.immigration_officers_staff.validity_5_year.amount, null, 'Live data: MY staff 5yr amount must be null');
  assert.strictEqual(myFees.fee_schedule_by_category.pmd_pmr_diplomatic_official.validity_10_year.amount, 0);
  assert.strictEqual(myFees.fee_schedule_by_category.pma_dependents.validity_5_year.amount, 0);
  assert.strictEqual(myFees.lost_and_damaged_replacement_schedule.validity_5_year.adult_18_to_59_years.first_loss, 400);
  assert.strictEqual(myFees.lost_and_damaged_replacement_schedule.validity_5_year.children_under_12_years.first_loss, 300);
  // Phase 4.3.1: Staff 5-year replacement is NOT eligible
  assert.strictEqual(myFees.lost_and_damaged_replacement_schedule.validity_5_year.immigration_officers_staff.status, 'not_eligible', 'Live data: MY staff 5yr rep must be not_eligible');
  assert.strictEqual(myFees.lost_and_damaged_replacement_schedule.validity_5_year.pmd_pmr_diplomatic_official.first_loss, 0);

  // 5. Nepal (NP)
  console.log('[NP Check]');
  const npFees = rp.NP.services.first_passport.fees;
  assert.strictEqual(npFees.standard_domestic_npr.standard_34_pages_dao, 5000);
  assert.strictEqual(npFees.standard_domestic_npr.urgent_34_pages_dop_kathmandu, 12000);
  assert(rp.NP.services.first_passport.documents.some(d => d.document_name.includes('National Identity Card (NID)')), 'NP must document NID mandate');

  // 6. New Zealand (NZ - Phase 4.1 Audited)
  console.log('[NZ Check]');
  const nzFees = rp.NZ.services.first_passport.fees;
  assert.strictEqual(nzFees.standard_service_nzd.adult_10_year, 247);
  assert.strictEqual(nzFees.standard_service_nzd.child_5_year, 144);
  assert.strictEqual(nzFees.urgent_service_nzd.adult_10_year, 494);
  assert.strictEqual(nzFees.urgent_service_nzd.child_5_year, 391);
  assert.strictEqual(nzFees.after_hours_callout_service_nzd.adult_10_year, 1001);
  assert.strictEqual(nzFees.after_hours_callout_service_nzd.child_5_year, 898);
  assert(nzFees.courier_delivery_cost_note.includes('additional cost'));

  // 7. Singapore (SG)
  console.log('[SG Check]');
  const sgFees = rp.SG.services.first_passport.fees;
  assert.strictEqual(sgFees.standard_online_sgd, 70);
  assert.strictEqual(sgFees.counter_in_person_sgd, 80);
  assert.strictEqual(sgFees.lost_passport_penalty_fees_sgd.first_loss, 50);

  // 8. Spain (ES)
  console.log('[ES Check]');
  const esFees = rp.ES.services.first_passport.fees;
  assert.strictEqual(esFees.standard_domestic_eur, 30.0);
  assert.strictEqual(esFees.large_family_exemption_eur, 0.0);
  assert(rp.ES.services.first_passport.steps.some(s => s.step.includes('DNI')), 'ES must require valid DNI');

  // 9. Sri Lanka (LK - Phase 4.1 Audited)
  console.log('[LK Check]');
  const lkFees = rp.LK.services.first_passport.fees;
  assert.strictEqual(lkFees.standard_domestic_lkr.all_countries_normal, 10000);
  assert.strictEqual(lkFees.standard_domestic_lkr.all_countries_urgent_one_day, 20000);
  assert.strictEqual(lkFees.standard_domestic_lkr.child_under_16_three_year_normal, 3000);
  assert.strictEqual(lkFees.standard_domestic_lkr.child_under_16_three_year_urgent_one_day, 9000);
  assert.strictEqual(lkFees.lost_passport_conditional_penalties_lkr.lost_within_1_year_of_issue, 20000);
  assert.strictEqual(lkFees.lost_passport_conditional_penalties_lkr.lost_after_1_year_with_validity_remaining, 15000);
  assert.strictEqual(lkFees.lost_passport_conditional_penalties_lkr.lost_after_validity_expired, 0);

  console.log('\n--- 5. Checking Live rules-engine.js & Runtime Evaluation ---');
  const rulesEngineRes = await fetchUrl('https://passport.myoss.in/js/rules-engine.js?v=20261019_10');
  console.log('Rules engine HTTP Status:', rulesEngineRes.status);
  assert.strictEqual(rulesEngineRes.status, 200, 'Rules engine must return HTTP 200');

  const reSandbox = { window: {}, module: { exports: {} }, require: () => {} };
  vm.runInNewContext(rulesEngineRes.body, reSandbox);
  const PassportRulesEngine = reSandbox.module.exports?.PassportRulesEngine || reSandbox.PassportRulesEngine || reSandbox.window.PassportRulesEngine;
  assert(PassportRulesEngine, 'PassportRulesEngine must be defined in live script');

  const liveEngine = new PassportRulesEngine(rp);

  // 5.1 Malaysia Statutory Categories (JIM)
  const liveMyImm = liveEngine.evaluate({
    countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport',
    applicantCategory: 'immigration_officers_staff', validity: '5_year'
  });
  // Phase 4.3.1: Staff 5-year must return not_eligible (not RM 0)
  const liveMyImmFeeItem = liveMyImm.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(liveMyImmFeeItem.feeStatus, 'not_eligible', 'LIVE: MY immigration staff 5-yr must return not_eligible (Phase 4.3.1)');
  assert.strictEqual(liveMyImmFeeItem.feeRecord.amount, null, 'LIVE: MY immigration staff 5-yr feeRecord.amount must be null');

  const liveMyImmRep = liveEngine.evaluate({
    countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'lost_stolen',
    applicantCategory: 'immigration_officers_staff', validity: '5_year', lossTier: 'first_loss'
  });
  // Phase 4.3.1: Staff 5-year replacement must return not_eligible
  const liveMyImmRepFeeItem = liveMyImmRep.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(liveMyImmRepFeeItem.feeStatus, 'not_eligible', 'LIVE: MY immigration staff 5-yr replacement must return not_eligible (Phase 4.3.1)');
  assert.strictEqual(liveMyImmRepFeeItem.feeRecord.status, 'not_eligible', 'LIVE: MY immigration staff 5-yr replacement feeRecord.status must be not_eligible');
  assert(liveMyImmRepFeeItem.details.includes('NOT eligible') && (liveMyImmRepFeeItem.details.includes('10-year') || liveMyImmRepFeeItem.details.includes('10-year validity')), 'LIVE: MY immigration staff 5-yr replacement details must state 10-year-only restriction');

  // Phase 4.3.1: Staff 10-year original must return eligible_free RM 0 with no replacement fees attached
  const liveMyImm10 = liveEngine.evaluate({
    countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport',
    applicantCategory: 'immigration_officers_staff', validity: '10_year'
  });
  const liveMyImm10Fee = liveMyImm10.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(liveMyImm10Fee.feeStatus, 'verified_statutory', 'LIVE: MY immigration staff 10-yr must return feeStatus verified_statutory');
  assert.strictEqual(liveMyImm10Fee.feeRecord.status, 'eligible_free', 'LIVE: MY immigration staff 10-yr status must be eligible_free');
  assert.strictEqual(liveMyImm10Fee.feeRecord.amount, 0, 'LIVE: MY immigration staff 10-yr must be RM 0');
  assert.strictEqual(liveMyImm10Fee.feeRecord.total_replacement_fee, undefined, 'LIVE: Original issuance must not present replacement fee');
  assert.strictEqual(liveMyImm10Fee.feeRecord.official_replacement_amount, undefined, 'LIVE: Original issuance must not present replacement amount');
  assert.strictEqual(liveMyImm10Fee.feeRecord.statutory_penalty, undefined, 'LIVE: Original issuance must not present statutory penalty');
  assert(!liveMyImm10Fee.details.toLowerCase().includes('replacement'), 'LIVE: Original issuance details must not describe replacement fees');

  // Phase 4.3.1: Staff 10-year replacement at all three tiers = official schedule
  // Tier 1: First loss = RM 200
  const liveMyImm10Rep1 = liveEngine.evaluate({
    countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'lost_stolen',
    applicantCategory: 'immigration_officers_staff', validity: '10_year', lossTier: 'first_loss'
  });
  const liveMyImm10RepFee1 = liveMyImm10Rep1.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(liveMyImm10RepFee1.feeStatus, 'verified_statutory', 'LIVE: MY immigration staff 10-yr 1st loss must be verified_statutory');
  assert.strictEqual(liveMyImm10RepFee1.feeRecord.total_replacement_fee, 200, 'LIVE: MY immigration staff 10-yr 1st loss must be RM 200');
  assert.strictEqual(liveMyImm10RepFee1.feeRecord.official_replacement_amount, 200, 'LIVE: MY immigration staff 10-yr feeRecord must have official_replacement_amount 200');
  assert(liveMyImm10RepFee1.details.includes('RM 200'), 'LIVE: MY immigration staff 10-yr 1st loss details must mention RM 200');
  assert(!liveMyImm10RepFee1.details.includes('calculated difference'), 'LIVE: MY immigration staff 10-yr 1st loss details must NOT use calculated difference language');

  // Tier 2: Second loss = RM 500
  const liveMyImm10Rep2 = liveEngine.evaluate({
    countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'lost_stolen',
    applicantCategory: 'immigration_officers_staff', validity: '10_year', lossTier: 'second_loss'
  });
  const liveMyImm10RepFee2 = liveMyImm10Rep2.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(liveMyImm10RepFee2.feeStatus, 'verified_statutory', 'LIVE: MY immigration staff 10-yr 2nd loss must be verified_statutory');
  assert.strictEqual(liveMyImm10RepFee2.feeRecord.total_replacement_fee, 500, 'LIVE: MY immigration staff 10-yr 2nd loss must be RM 500');
  assert.strictEqual(liveMyImm10RepFee2.feeRecord.official_replacement_amount, 500, 'LIVE: MY immigration staff 10-yr 2nd loss feeRecord must have official_replacement_amount 500');
  assert(liveMyImm10RepFee2.details.includes('RM 500'), 'LIVE: MY immigration staff 10-yr 2nd loss details must mention RM 500');
  assert(!liveMyImm10RepFee2.details.includes('calculated difference'), 'LIVE: MY immigration staff 10-yr 2nd loss details must NOT use calculated difference language');

  // Tier 3: Third or subsequent loss = RM 1,000
  const liveMyImm10Rep3 = liveEngine.evaluate({
    countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'lost_stolen',
    applicantCategory: 'immigration_officers_staff', validity: '10_year', lossTier: 'third_loss'
  });
  const liveMyImm10RepFee3 = liveMyImm10Rep3.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(liveMyImm10RepFee3.feeStatus, 'verified_statutory', 'LIVE: MY immigration staff 10-yr 3rd loss must be verified_statutory');
  assert.strictEqual(liveMyImm10RepFee3.feeRecord.total_replacement_fee, 1000, 'LIVE: MY immigration staff 10-yr 3rd loss must be RM 1,000');
  assert.strictEqual(liveMyImm10RepFee3.feeRecord.official_replacement_amount, 1000, 'LIVE: MY immigration staff 10-yr 3rd loss feeRecord must have official_replacement_amount 1000');
  assert(liveMyImm10RepFee3.details.includes('RM 1000') || liveMyImm10RepFee3.details.includes('RM 1,000'), 'LIVE: MY immigration staff 10-yr 3rd loss details must mention RM 1000');
  assert(!liveMyImm10RepFee3.details.includes('calculated difference'), 'LIVE: MY immigration staff 10-yr 3rd loss details must NOT use calculated difference language');

  const liveMyPmd = liveEngine.evaluate({
    countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport',
    applicantCategory: 'pmd_pmr_diplomatic_official', validity: '10_year'
  });
  assert.strictEqual(liveMyPmd.checklist.find(c => c.id === 'official_fee_payment').feeRecord.amount, 0, 'Live MY PMD/PMR 10-yr must be RM 0');

  const liveMyPma = liveEngine.evaluate({
    countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport',
    applicantCategory: 'pma_dependents', validity: '5_year'
  });
  assert.strictEqual(liveMyPma.checklist.find(c => c.id === 'official_fee_payment').feeRecord.amount, 0, 'Live MY PMA dependents must be RM 0');

  // 5.2 Indonesia Unknown Marital Status Verification State
  const liveIdUnknown = liveEngine.evaluate({
    countryCode: 'ID', countryName: 'Indonesia', location: 'inside', service: 'first_passport',
    ageExact: 16
  });
  const liveIdFee = liveIdUnknown.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(liveIdUnknown.country.isVerified, true, 'Live ID country pack must be verified');
  assert.strictEqual(liveIdFee.feeStatus, 'confirmation_required', 'Live ID minor unknown marital status must return confirmation_required');
  assert.strictEqual(liveIdFee.feeRecord.status, 'confirmation_required', 'Live ID feeRecord must be confirmation_required');
  assert(liveIdUnknown.flags.some(f => f.code === 'INDONESIA_MARITAL_STATUS_CONFIRMATION'), 'Live ID must include INDONESIA_MARITAL_STATUS_CONFIRMATION flag');

  // 5.3 Exact Age Precedence and Boundaries
  const liveAgeOverride = liveEngine.evaluate({
    countryCode: 'US', countryName: 'United States', location: 'inside', service: 'first_passport',
    age: 'adult', ageExact: 15
  });
  assert.strictEqual(liveAgeOverride.applicant.isMinor, true, 'Live exact age 15 must override adult radio');
  assert(liveAgeOverride.flags.some(f => f.code === 'MINOR_PARENTAL_CONSENT'), 'Live exact age 15 must trigger parental consent flag');

  const liveNz15 = liveEngine.evaluate({ countryCode: 'NZ', countryName: 'New Zealand', location: 'inside', service: 'first_passport', ageExact: 15 });
  assert(liveNz15.checklist.find(c => c.id === 'official_fee_payment').details.includes('NZD 144'), 'Live NZ age 15 must be child fee NZD 144');

  const liveNz16 = liveEngine.evaluate({ countryCode: 'NZ', countryName: 'New Zealand', location: 'inside', service: 'first_passport', ageExact: 16 });
  assert(liveNz16.checklist.find(c => c.id === 'official_fee_payment').details.includes('NZD 247'), 'Live NZ age 16 must be adult fee NZD 247');

  const liveLk15 = liveEngine.evaluate({ countryCode: 'LK', countryName: 'Sri Lanka', location: 'inside', service: 'first_passport', ageExact: 15 });
  assert(liveLk15.checklist.find(c => c.id === 'official_fee_payment').details.includes('LKR 3,000'), 'Live LK age 15 must be child fee LKR 3,000');

  const liveLk16 = liveEngine.evaluate({ countryCode: 'LK', countryName: 'Sri Lanka', location: 'inside', service: 'first_passport', ageExact: 16 });
  assert(liveLk16.checklist.find(c => c.id === 'official_fee_payment').details.includes('LKR 10,000'), 'Live LK age 16 must be adult fee LKR 10,000');

  const liveMy11 = liveEngine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', ageExact: 11, validity: '5_year' });
  assert.strictEqual(liveMy11.checklist.find(c => c.id === 'official_fee_payment').feeRecord.amount, 100, 'Live MY age 11 must be RM 100');

  const liveMy12 = liveEngine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', ageExact: 12, validity: '5_year' });
  assert.strictEqual(liveMy12.checklist.find(c => c.id === 'official_fee_payment').feeRecord.amount, 200, 'Live MY age 12 must be RM 200');

  const liveMy60 = liveEngine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', ageExact: 60, validity: '5_year' });
  assert.strictEqual(liveMy60.checklist.find(c => c.id === 'official_fee_payment').feeRecord.amount, 100, 'Live MY age 60 must be RM 100');

  console.log('\n--- 6. Checking Live app.js & Dynamic Directory Filtering ---');
  const appJsRes = await fetchUrl('https://passport.myoss.in/js/app.js?v=20261019_10');
  console.log('app.js HTTP Status:', appJsRes.status);
  assert.strictEqual(appJsRes.status, 200, 'app.js must return HTTP 200');

  const appSandbox = {
    PassportRulesEngine: class { constructor() {} },
    window: {
      PASSPORT_COUNTRIES: cd,
      COUNTRY_DATA: cd,
      addEventListener: () => {}
    },
    document: {
      getElementById: () => null,
      querySelector: () => null,
      querySelectorAll: () => [],
      addEventListener: () => {},
      readyState: 'complete'
    },
    localStorage: { getItem: () => null, setItem: () => {} }
  };
  vm.runInNewContext(appJsRes.body, appSandbox);
  assert(appSandbox.window.PassportApp, 'Live window.PassportApp must exist');
  assert(typeof appSandbox.window.PassportApp.getDirectoryCounts === 'function', 'Live PassportApp.getDirectoryCounts must be a function');
  const liveCounts = appSandbox.window.PassportApp.getDirectoryCounts();
  console.log('Live PassportApp computed directory counts:', liveCounts);
  assert.strictEqual(liveCounts.all, 249, 'Live all count must be 249');
  assert.strictEqual(liveCounts.verified, 27, 'Live verified count must be 27');
  assert.strictEqual(liveCounts.linked, 0, 'Live linked count must be 0');
  assert.strictEqual(liveCounts.needs_research, 222, 'Live needs_research count must be 222');

  console.log('\n>>> ALL PHASE 3.4, PHASE 4, PHASE 4.1, PHASE 4.2, PHASE 4.3, PHASE 4.3.1 & PHASE 4.3.2 LIVE CHECKS ASSERTED SUCCESSFULLY <<<');
}

verifyLive().catch(err => {
  console.error('✗ Live verification failed:', err);
  process.exit(1);
});
