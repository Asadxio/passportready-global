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
  
  const scriptsWithV = (index.body.match(/src="[^"]+\?v=20261019_17"/g) || []);
  console.log('Scripts with ?v=20261019_17:', scriptsWithV.length);
  assert(scriptsWithV.length >= 7, 'Must have at least 7 scripts with v=20261019_17');
  
  const cssWithV = (index.body.match(/href="css\/styles\.css\?v=20261019_17"/g) || []);
  console.log('CSS with ?v=20261019_17:', cssWithV.length);
  assert(cssWithV.length >= 1, 'CSS must have v=20261019_17');

  // Service coverage card check
  assert(index.body.includes('id="resServiceCoverageCard"'), 'Live HTML must contain resServiceCoverageCard container');
  assert(index.body.includes('Readiness score reflects document preparation completeness only'), 'Live HTML must contain readiness disclaimer');

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
  const countryDataRes = await fetchUrl('https://passport.myoss.in/data/country-data.js?v=20261019_17');
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
  const rulePacks = await fetchUrl('https://passport.myoss.in/data/rule-packs.js?v=20261019_17');
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
  const rulesEngineRes = await fetchUrl('https://passport.myoss.in/js/rules-engine.js?v=20261019_17');
  console.log('Rules engine HTTP Status:', rulesEngineRes.status);
  assert.strictEqual(rulesEngineRes.status, 200, 'Rules engine must return HTTP 200');

  const reSandbox = { window: {}, module: { exports: {} }, require: () => {}, URL: globalThis.URL };
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
  const appJsRes = await fetchUrl('https://passport.myoss.in/js/app.js?v=20261019_17');
  console.log('app.js HTTP Status:', appJsRes.status);
  assert.strictEqual(appJsRes.status, 200, 'app.js must return HTTP 200');

  // Verify Phase 4.3.4 & Phase 4.3.5 UI safeguards in live app.js
  assert(appJsRes.body.includes('resServiceCoverageCard'), 'Live app.js must render into resServiceCoverageCard');
  assert(appJsRes.body.includes('Multi-Dimensional Coverage') && appJsRes.body.includes('Service Verification Audit'), 'Live app.js must include Multi-Dimensional Coverage and Service Verification Audit');
  assert(appJsRes.body.includes('Official Evidence Linked'), 'Live app.js must include evidence linkage indicators');
  assert(appJsRes.body.includes('Readiness score reflects document preparation completeness only'), 'Live app.js must include issuance disclaimer');
  assert(appJsRes.body.includes("badgeEl.className = 'status-pill status-verified'"), 'Live app.js must restrict status-verified to PREPARED');

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

  console.log('\n--- 7. Checking Live Phase 4.3.3 Base Service Coverage Status, Score Caps, and Safe Badges ---');
  // 7.1 Verified country + verified service (IN first_passport)
  const liveInVerified = liveEngine.evaluate({
    countryCode: 'IN', countryName: 'India', location: 'inside', service: 'first_passport', age: 'adult'
  });
  assert(liveInVerified.serviceCoverage, 'Live IN result must contain serviceCoverage');
  assert.strictEqual(liveInVerified.serviceCoverage.status, 'verified', 'Live IN first_passport must be verified');
  assert.strictEqual(liveInVerified.serviceCoverage.isFullyVerified, true, 'Live IN first_passport isFullyVerified must be true');
  assert.strictEqual(liveInVerified.statusLabel, 'PREPARED', 'Live IN clean first_passport can achieve PREPARED');
  assert(liveInVerified.serviceCoverage.officialSourceUrl, 'Live IN verified service must have officialSourceUrl');
  assert(!liveInVerified.flags.some(f => f.code === 'SERVICE_GENERAL_GUIDANCE_ONLY' || f.code === 'SERVICE_AWAITING_RESEARCH'), 'Live IN verified service must not emit guidance flags');

  // 7.2 Verified country + uncodified service (US emergency_travel, GB name_correction, BD renewal_reissue)
  const liveUsEmergency = liveEngine.evaluate({
    countryCode: 'US', countryName: 'United States', location: 'inside', service: 'emergency_travel', age: 'adult'
  });
  assert.strictEqual(liveUsEmergency.serviceCoverage.status, 'general_guidance', 'Live US emergency_travel must be general_guidance');
  assert.strictEqual(liveUsEmergency.serviceCoverage.isFullyVerified, false, 'Live US emergency_travel is not fully verified');
  assert(liveUsEmergency.readinessScore <= 75, 'Live US emergency_travel score must be capped <= 75%');
  assert.strictEqual(liveUsEmergency.statusLabel, 'GENERAL_GUIDANCE_ONLY', 'Live US emergency_travel statusLabel must be GENERAL_GUIDANCE_ONLY');
  assert.notStrictEqual(liveUsEmergency.statusLabel, 'PREPARED', 'Live US emergency_travel must never be PREPARED');
  assert(liveUsEmergency.flags.some(f => f.code === 'SERVICE_GENERAL_GUIDANCE_ONLY'), 'Live US emergency_travel must emit SERVICE_GENERAL_GUIDANCE_ONLY flag');

  const liveGbName = liveEngine.evaluate({
    countryCode: 'GB', countryName: 'United Kingdom', location: 'inside', service: 'name_correction', age: 'adult'
  });
  assert.strictEqual(liveGbName.serviceCoverage.status, 'general_guidance', 'Live GB name_correction must be general_guidance');
  assert(liveGbName.readinessScore <= 75, 'Live GB name_correction score must be capped <= 75%');
  assert.strictEqual(liveGbName.statusLabel, 'GENERAL_GUIDANCE_ONLY', 'Live GB name_correction statusLabel must be GENERAL_GUIDANCE_ONLY');

  const liveBdRenewal = liveEngine.evaluate({
    countryCode: 'BD', countryName: 'Bangladesh', location: 'inside', service: 'renewal_reissue', age: 'adult'
  });
  assert.strictEqual(liveBdRenewal.serviceCoverage.status, 'general_guidance', 'Live BD renewal_reissue must be general_guidance');
  assert.notStrictEqual(liveBdRenewal.statusLabel, 'PREPARED', 'Live BD renewal_reissue must never be PREPARED');

  // 7.3 Partial service coverage (MX emergency_travel, US lost_stolen, NZ urgent_expedited)
  const liveMxEmergency = liveEngine.evaluate({
    countryCode: 'MX', countryName: 'Mexico', location: 'abroad', service: 'emergency_travel', age: 'adult'
  });
  assert.strictEqual(liveMxEmergency.serviceCoverage.status, 'partial', 'Live MX emergency_travel must be partial');
  assert.strictEqual(liveMxEmergency.serviceCoverage.rulePackKey, 'emergency_passport', 'Live MX emergency_travel must link to emergency_passport rulePackKey');
  assert(liveMxEmergency.readinessScore <= 80, 'Live MX emergency_travel score must be capped <= 80%');
  assert.strictEqual(liveMxEmergency.statusLabel, 'VERIFICATION_RECOMMENDED', 'Live MX emergency_travel statusLabel must be VERIFICATION_RECOMMENDED');
  assert.notStrictEqual(liveMxEmergency.statusLabel, 'PREPARED', 'Live MX emergency_travel must never be PREPARED');
  assert(liveMxEmergency.flags.some(f => f.code === 'SERVICE_COVERAGE_PARTIAL'), 'Live MX emergency_travel must emit SERVICE_COVERAGE_PARTIAL');

  const liveUsLost = liveEngine.evaluate({
    countryCode: 'US', countryName: 'United States', location: 'inside', service: 'lost_stolen', age: 'adult'
  });
  assert.strictEqual(liveUsLost.serviceCoverage.status, 'partial', 'Live US lost_stolen must be partial');
  assert(liveUsLost.readinessScore <= 80, 'Live US lost_stolen score must be capped <= 80%');
  assert.strictEqual(liveUsLost.statusLabel, 'VERIFICATION_RECOMMENDED');

  const liveNzUrgent = liveEngine.evaluate({
    countryCode: 'NZ', countryName: 'New Zealand', location: 'inside', service: 'urgent_expedited', age: 'adult'
  });
  assert.strictEqual(liveNzUrgent.serviceCoverage.status, 'partial', 'Live NZ urgent_expedited must be partial');
  assert(liveNzUrgent.readinessScore <= 80, 'Live NZ urgent_expedited score must be capped <= 80%');
  assert.strictEqual(liveNzUrgent.statusLabel, 'VERIFICATION_RECOMMENDED');

  // 7.4 Country awaiting research (AF first_passport, ZW renewal_reissue)
  const liveAfFirst = liveEngine.evaluate({
    countryCode: 'AF', countryName: 'Afghanistan', location: 'inside', service: 'first_passport', age: 'adult'
  });
  assert.strictEqual(liveAfFirst.serviceCoverage.status, 'awaiting_research', 'Live AF first_passport must be awaiting_research');
  assert.strictEqual(liveAfFirst.serviceCoverage.isFullyVerified, false, 'Live AF is not verified');
  assert(liveAfFirst.readinessScore <= 70, 'Live AF score must be capped <= 70%');
  assert.strictEqual(liveAfFirst.statusLabel, 'OFFICIAL_CONFIRMATION_RECOMMENDED', 'Live AF statusLabel must be OFFICIAL_CONFIRMATION_RECOMMENDED');
  assert.notStrictEqual(liveAfFirst.statusLabel, 'PREPARED', 'Live AF must never be PREPARED');
  assert(liveAfFirst.flags.some(f => f.code === 'SERVICE_AWAITING_RESEARCH'), 'Live AF must emit SERVICE_AWAITING_RESEARCH flag');

  const liveZwRenewal = liveEngine.evaluate({
    countryCode: 'ZW', countryName: 'Zimbabwe', location: 'inside', service: 'renewal_reissue', age: 'adult'
  });
  assert.strictEqual(liveZwRenewal.serviceCoverage.status, 'awaiting_research', 'Live ZW renewal must be awaiting_research');
  assert(liveZwRenewal.readinessScore <= 70, 'Live ZW renewal score must be capped <= 70%');
  assert.strictEqual(liveZwRenewal.statusLabel, 'OFFICIAL_CONFIRMATION_RECOMMENDED');

  // 7.5 Lost and damaged services with partial or general coverage
  const liveDeLost = liveEngine.evaluate({
    countryCode: 'DE', countryName: 'Germany', location: 'inside', service: 'lost_stolen', age: 'adult'
  });
  assert.strictEqual(liveDeLost.serviceCoverage.status, 'general_guidance', 'Live DE lost_stolen must be general_guidance');

  const liveMyDamaged = liveEngine.evaluate({
    countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'damaged', age: 'adult'
  });
  assert.strictEqual(liveMyDamaged.serviceCoverage.status, 'partial', 'Live MY damaged must be partial');
  assert(liveMyDamaged.serviceCoverage.supportedChecks.some(c => c.includes('replacement')), 'Live MY damaged supported checks must note replacement schedule');

  console.log('\n--- 8. Checking Live Phase 4.3.4 Multi-Dimensional Verification Coverage (Service, Urgency, Channel) ---');
  // 8.1 IN first_passport + standard + inside -> verified across all 3 dimensions
  const liveInFull = liveEngine.evaluate({
    countryCode: 'IN', countryName: 'India', location: 'inside', service: 'first_passport', age: 'adult', urgency: 'standard'
  });
  assert(liveInFull.serviceCoverage.dimensions, 'Live IN result must contain 3-dimension breakdown');
  assert.strictEqual(liveInFull.serviceCoverage.dimensions.service.status, 'verified', 'IN service must be verified');
  assert.strictEqual(liveInFull.serviceCoverage.dimensions.urgency.status, 'verified', 'IN standard route must be verified');
  assert.strictEqual(liveInFull.serviceCoverage.dimensions.channel.status, 'verified', 'IN inside channel must be verified');
  assert.strictEqual(liveInFull.serviceCoverage.status, 'verified', 'Effective status must be verified');
  assert.strictEqual(liveInFull.serviceCoverage.isFullyVerified, true, 'isFullyVerified must be true');
  assert.strictEqual(liveInFull.readinessScore, 100, 'Score must reach 100%');
  assert.strictEqual(liveInFull.statusLabel, 'PREPARED', 'Status must be PREPARED');

  // 8.2 IN first_passport + urgent + inside -> route partial (Tatkaal quotas/exclusions)
  const liveInTatkaal = liveEngine.evaluate({
    countryCode: 'IN', countryName: 'India', location: 'inside', service: 'first_passport', age: 'adult', urgency: 'urgent'
  });
  assert.strictEqual(liveInTatkaal.serviceCoverage.dimensions.service.status, 'verified');
  assert.strictEqual(liveInTatkaal.serviceCoverage.dimensions.urgency.status, 'partial', 'IN urgent route must be partial');
  assert.strictEqual(liveInTatkaal.serviceCoverage.dimensions.channel.status, 'verified');
  assert.strictEqual(liveInTatkaal.serviceCoverage.status, 'partial', 'Effective status must be partial');
  assert.strictEqual(liveInTatkaal.serviceCoverage.isFullyVerified, false);
  assert(liveInTatkaal.readinessScore <= 80, 'Score must be capped at <= 80%');
  assert.strictEqual(liveInTatkaal.statusLabel, 'VERIFICATION_RECOMMENDED');
  assert.notStrictEqual(liveInTatkaal.statusLabel, 'PREPARED');
  assert(liveInTatkaal.flags.some(f => f.code === 'ROUTE_COVERAGE_PARTIAL'), 'Must emit ROUTE_COVERAGE_PARTIAL flag');

  // 8.3 DE first_passport + urgent + inside -> route general_guidance
  const liveDeUrgent = liveEngine.evaluate({
    countryCode: 'DE', countryName: 'Germany', location: 'inside', service: 'first_passport', age: 'adult', urgency: 'urgent'
  });
  assert.strictEqual(liveDeUrgent.serviceCoverage.dimensions.service.status, 'verified');
  assert.strictEqual(liveDeUrgent.serviceCoverage.dimensions.urgency.status, 'general_guidance', 'DE urgent route must be general_guidance');
  assert.strictEqual(liveDeUrgent.serviceCoverage.dimensions.channel.status, 'verified');
  assert.strictEqual(liveDeUrgent.serviceCoverage.status, 'general_guidance');
  assert(liveDeUrgent.readinessScore <= 75, 'Score must be capped at <= 75%');
  assert.strictEqual(liveDeUrgent.statusLabel, 'GENERAL_GUIDANCE_ONLY');
  assert.notStrictEqual(liveDeUrgent.statusLabel, 'PREPARED');
  assert(liveDeUrgent.flags.some(f => f.code === 'ROUTE_GENERAL_GUIDANCE_ONLY'));

  // 8.4 US first_passport + emergency + inside -> route general_guidance
  const liveUsEmergencyUrgency = liveEngine.evaluate({
    countryCode: 'US', countryName: 'United States', location: 'inside', service: 'first_passport', age: 'adult', urgency: 'emergency'
  });
  assert.strictEqual(liveUsEmergencyUrgency.serviceCoverage.dimensions.service.status, 'verified');
  assert.strictEqual(liveUsEmergencyUrgency.serviceCoverage.dimensions.urgency.status, 'general_guidance', 'US emergency route must be general_guidance');
  assert.strictEqual(liveUsEmergencyUrgency.serviceCoverage.dimensions.channel.status, 'verified');
  assert.strictEqual(liveUsEmergencyUrgency.serviceCoverage.status, 'general_guidance');
  assert(liveUsEmergencyUrgency.readinessScore <= 75);
  assert.strictEqual(liveUsEmergencyUrgency.statusLabel, 'GENERAL_GUIDANCE_ONLY');
  assert.notStrictEqual(liveUsEmergencyUrgency.statusLabel, 'PREPARED');
  assert(liveUsEmergencyUrgency.flags.some(f => f.code === 'ROUTE_GENERAL_GUIDANCE_ONLY'));

  // 8.5 MX first_passport + standard + abroad -> channel verified (consular USD schedule codified)
  const liveMxAbroad = liveEngine.evaluate({
    countryCode: 'MX', countryName: 'Mexico', location: 'abroad', service: 'first_passport', age: 'adult', urgency: 'standard'
  });
  assert.strictEqual(liveMxAbroad.serviceCoverage.dimensions.service.status, 'verified');
  assert.strictEqual(liveMxAbroad.serviceCoverage.dimensions.urgency.status, 'verified');
  assert.strictEqual(liveMxAbroad.serviceCoverage.dimensions.channel.status, 'verified', 'MX consular channel is verified');
  assert.strictEqual(liveMxAbroad.serviceCoverage.status, 'verified');
  assert.strictEqual(liveMxAbroad.statusLabel, 'PREPARED');

  // 8.6 NG first_passport + standard + abroad -> channel verified (diaspora USD schedule codified)
  const liveNgAbroad = liveEngine.evaluate({
    countryCode: 'NG', countryName: 'Nigeria', location: 'abroad', service: 'first_passport', age: 'adult', urgency: 'standard'
  });
  assert.strictEqual(liveNgAbroad.serviceCoverage.dimensions.channel.status, 'verified', 'NG diaspora channel is verified');
  assert.strictEqual(liveNgAbroad.serviceCoverage.status, 'verified');
  assert.strictEqual(liveNgAbroad.statusLabel, 'PREPARED');

  // 8.7 JP first_passport + standard + abroad -> channel partial (MOFA local currency tariff)
  const liveJpAbroad = liveEngine.evaluate({
    countryCode: 'JP', countryName: 'Japan', location: 'abroad', service: 'first_passport', age: 'adult', urgency: 'standard'
  });
  assert.strictEqual(liveJpAbroad.serviceCoverage.dimensions.service.status, 'verified');
  assert.strictEqual(liveJpAbroad.serviceCoverage.dimensions.urgency.status, 'verified');
  assert.strictEqual(liveJpAbroad.serviceCoverage.dimensions.channel.status, 'partial', 'JP abroad channel must be partial');
  assert.strictEqual(liveJpAbroad.serviceCoverage.status, 'partial');
  assert(liveJpAbroad.readinessScore <= 80);
  assert.strictEqual(liveJpAbroad.statusLabel, 'VERIFICATION_RECOMMENDED');
  assert.notStrictEqual(liveJpAbroad.statusLabel, 'PREPARED');
  assert(liveJpAbroad.flags.some(f => f.code === 'CHANNEL_COVERAGE_PARTIAL'));

  // 8.8 US lost_stolen + emergency + inside -> combined status is general_guidance (most restrictive of partial & general_guidance)
  const liveUsLostEmergency = liveEngine.evaluate({
    countryCode: 'US', countryName: 'United States', location: 'inside', service: 'lost_stolen', age: 'adult', urgency: 'emergency'
  });
  assert.strictEqual(liveUsLostEmergency.serviceCoverage.dimensions.service.status, 'partial');
  assert.strictEqual(liveUsLostEmergency.serviceCoverage.dimensions.urgency.status, 'general_guidance');
  assert.strictEqual(liveUsLostEmergency.serviceCoverage.status, 'general_guidance', 'min(partial, general_guidance) must be general_guidance');
  assert(liveUsLostEmergency.readinessScore <= 75);
  assert.strictEqual(liveUsLostEmergency.statusLabel, 'GENERAL_GUIDANCE_ONLY');
  assert.notStrictEqual(liveUsLostEmergency.statusLabel, 'PREPARED');

  // 8.9 MX emergency_travel + emergency + abroad -> partial with Art. 20 LFD citation
  const liveMxEmergencyAbroad = liveEngine.evaluate({
    countryCode: 'MX', countryName: 'Mexico', location: 'abroad', service: 'emergency_travel', age: 'adult', urgency: 'emergency'
  });
  assert.strictEqual(liveMxEmergencyAbroad.serviceCoverage.dimensions.service.status, 'partial');
  assert.strictEqual(liveMxEmergencyAbroad.serviceCoverage.dimensions.urgency.status, 'partial');
  assert.strictEqual(liveMxEmergencyAbroad.serviceCoverage.dimensions.channel.status, 'verified');
  assert.strictEqual(liveMxEmergencyAbroad.serviceCoverage.status, 'partial');
  assert(liveMxEmergencyAbroad.serviceCoverage.summary.includes('Art. 20 LFD'));
  assert(liveMxEmergencyAbroad.flags.some(f => f.code === 'MEXICO_EMERGENCY_APPOINTMENT_POLICY'));

  // 8.10 Prohibition of PREPARED across all non-verified combinations
  [liveInTatkaal, liveDeUrgent, liveUsEmergencyUrgency, liveJpAbroad, liveUsLostEmergency, liveMxEmergencyAbroad].forEach(res => {
    assert.notStrictEqual(res.statusLabel, 'PREPARED', 'Incomplete effective coverage must never achieve PREPARED');
    assert(res.readinessScore <= 80, 'Incomplete effective coverage readinessScore must be capped at <= 80%');
  });

  console.log('\n--- 9. Checking Live Phase 4.3.5 & Phase 4.3.6 Evidence Integrity & Country-Allowlist Bypass Removal ---');
  // 9.1 India first passport standard inside -> full evidence link
  assert.strictEqual(liveInFull.serviceCoverage.evidence.hasSupportingEvidence, true, 'Live IN full coverage must have supporting evidence');
  assert.strictEqual(liveInFull.serviceCoverage.dimensions.service.evidence.hasSupportingEvidence, true, 'Live IN service must have supporting evidence');
  assert.strictEqual(liveInFull.serviceCoverage.dimensions.urgency.evidence.hasSupportingEvidence, true, 'Live IN route must have supporting evidence');
  assert.strictEqual(liveInFull.serviceCoverage.dimensions.channel.evidence.hasSupportingEvidence, true, 'Live IN channel must have supporting evidence');

  // 9.2 Isolated fixture: verified pack with missing first_passport service object
  const liveMalformedPack = { country_code: 'XX', country_name: 'Testland', rule_pack_status: 'verified', authority_name: 'Auth', services: {} };
  const liveFixtureEngine = new PassportRulesEngine({ XX: liveMalformedPack });
  const liveMissingService = liveFixtureEngine.evaluate({ countryCode: 'XX', service: 'first_passport' });
  assert.strictEqual(liveMissingService.serviceCoverage.dimensions.service.status, 'general_guidance', 'Live engine: Missing first_passport must receive general_guidance');
  assert.strictEqual(liveMissingService.serviceCoverage.dimensions.service.evidence.hasSupportingEvidence, false);
  assert.notStrictEqual(liveMissingService.statusLabel, 'PREPARED');
  assert(liveMissingService.readinessScore <= 75);

  // 9.3 Isolated fixture: standard route with no routine application steps or processing times
  const liveNoStepsPack = { country_code: 'YY', country_name: 'NoStepsLand', rule_pack_status: 'verified', authority_name: 'Auth', services: { first_passport: { availability_status: 'available', fees: { std: 50 }, documents: [{ document_name: 'Doc' }] } } };
  const liveYYEngine = new PassportRulesEngine({ YY: liveNoStepsPack });
  const liveNoSteps = liveYYEngine.evaluate({ countryCode: 'YY', service: 'first_passport', urgency: 'standard' });
  assert.strictEqual(liveNoSteps.serviceCoverage.dimensions.urgency.status, 'general_guidance', 'Live engine: Standard processing without routine steps or timeframe evidence must receive general_guidance');
  assert.strictEqual(liveNoSteps.serviceCoverage.dimensions.urgency.evidence.hasSupportingEvidence, false);
  assert.notStrictEqual(liveNoSteps.statusLabel, 'PREPARED');

  // 9.4 Isolated fixture: domestic channel without authority or fees
  const liveNoDomesticPack = { country_code: 'ZZ', country_name: 'NoDomesticLand', rule_pack_status: 'verified', services: { first_passport: { availability_status: 'available', fees: {}, documents: [] } } };
  const liveZZEngine = new PassportRulesEngine({ ZZ: liveNoDomesticPack });
  const liveNoDomestic = liveZZEngine.evaluate({ countryCode: 'ZZ', location: 'inside' });
  assert.strictEqual(liveNoDomestic.serviceCoverage.dimensions.channel.status, 'general_guidance', 'Live engine: Domestic channel without authority/fees must receive general_guidance');
  assert.strictEqual(liveNoDomestic.serviceCoverage.dimensions.channel.evidence.hasSupportingEvidence, false);

  // 9.5 Isolated fixture: overseas channel without consular guidance or jurisdiction
  const liveNoConsularPack = { country_code: 'WW', country_name: 'NoConsularLand', rule_pack_status: 'verified', authority_name: 'Auth', jurisdictions: [{ application_channel: 'domestic' }], services: { first_passport: { availability_status: 'available', fees: { std: 50 }, documents: [{ document_name: 'Doc' }], steps: [{ step: 'Step 1' }] } } };
  const liveWWEngine = new PassportRulesEngine({ WW: liveNoConsularPack });
  const liveNoConsular = liveWWEngine.evaluate({ countryCode: 'WW', location: 'abroad', service: 'first_passport' });
  assert.strictEqual(liveNoConsular.serviceCoverage.dimensions.channel.status, 'general_guidance', 'Live engine: Overseas without consular guidance must receive general_guidance');
  assert.strictEqual(liveNoConsular.serviceCoverage.dimensions.channel.evidence.hasSupportingEvidence, false);

  // 9.6 Live dimension-specific evidence safeguards
  assert.strictEqual(liveDeUrgent.serviceCoverage.dimensions.urgency.evidence.hasSupportingEvidence, false, 'DE urgent route has no dedicated evidence');
  assert.strictEqual(liveUsEmergencyUrgency.serviceCoverage.dimensions.urgency.evidence.hasSupportingEvidence, false, 'US emergency route has no dedicated evidence');
  assert.strictEqual(liveMxAbroad.serviceCoverage.dimensions.channel.evidence.hasSupportingEvidence, true, 'MX abroad channel has codified consular fee evidence');
  assert.strictEqual(liveNgAbroad.serviceCoverage.dimensions.channel.evidence.hasSupportingEvidence, true, 'NG abroad channel has codified diaspora fee evidence');
  assert.strictEqual(liveJpAbroad.serviceCoverage.dimensions.channel.evidence.isPartial, true, 'JP abroad channel has partial evidence');

  // 9.7 Phase 4.3.6 Scenario A: Live urgent-route bypass removal (IN fixture without urgent fee)
  const liveInNoUrgentPack = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    authority_name: 'Passport Seva',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ url: 'https://passportindia.gov.in', publisher: 'MEA' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'INR', standard: 1500 }, // tatkaal_surcharge deliberately removed!
        documents: [{ document_name: 'Aadhaar' }],
        eligibility: [{ rule: 'Citizen' }],
        steps: [{ step: 'Apply online' }]
      }
    }
  };
  const liveInNoUrgentEngine = new PassportRulesEngine({ IN: liveInNoUrgentPack });
  const liveInNoUrgentRes = liveInNoUrgentEngine.evaluate({
    countryCode: 'IN',
    location: 'inside',
    service: 'first_passport',
    urgency: 'urgent'
  });
  assert.strictEqual(
    liveInNoUrgentRes.serviceCoverage.dimensions.urgency.status,
    'general_guidance',
    'Live engine: IN fixture without urgent fee must yield general_guidance, NOT partial'
  );
  assert.strictEqual(liveInNoUrgentRes.serviceCoverage.dimensions.urgency.evidence.hasSupportingEvidence, false);

  // 9.8 Phase 4.3.6 Scenario B: Live overseas-fee bypass removal (MX, NG, NP with empty fees)
  ['MX', 'NG', 'NP'].forEach(cCode => {
    const emptyFeePack = {
      country_code: cCode,
      country_name: cCode,
      rule_pack_status: 'verified',
      authority_name: 'Auth',
      sources: [{ url: 'https://example.gov' }],
      jurisdictions: [{ application_channel: 'consular', name: 'Consulate' }],
      services: {
        first_passport: {
          availability_status: 'available',
          fees: {}, // EMPTY FEES
          documents: [{ document_name: 'Doc' }],
          eligibility: [{ rule: 'Citizen' }],
          steps: [{ step: 'Step' }]
        }
      }
    };
    const emptyFeeEngine = new PassportRulesEngine({ [cCode]: emptyFeePack });
    const emptyFeeRes = emptyFeeEngine.evaluate({
      countryCode: cCode,
      location: 'abroad',
      service: 'first_passport'
    });
    assert.notStrictEqual(
      emptyFeeRes.serviceCoverage.dimensions.channel.status,
      'verified',
      `Live engine: ${cCode} with empty fees must NEVER receive verified overseas channel`
    );
  });

  // 9.9 Phase 4.3.6 Scenario C: Live consular country-status bypass removal (IN and JP domestic-only)
  ['IN', 'JP'].forEach(cCode => {
    const domesticOnlyPack = {
      country_code: cCode,
      country_name: cCode,
      rule_pack_status: 'verified',
      authority_name: 'Domestic Auth',
      sources: [{ url: 'https://domestic.gov' }],
      jurisdictions: [{ application_channel: 'domestic', name: 'Domestic Office' }],
      services: {
        first_passport: {
          availability_status: 'available',
          fees: { currency: 'CUR', amount: 100 },
          documents: [{ document_name: 'Doc' }],
          eligibility: [{ rule: 'Citizen' }],
          steps: [{ step: 'Visit local counter' }]
        }
      }
    };
    const domEngine = new PassportRulesEngine({ [cCode]: domesticOnlyPack });
    const domRes = domEngine.evaluate({
      countryCode: cCode,
      location: 'abroad',
      service: 'first_passport'
    });
    assert.strictEqual(
      domRes.serviceCoverage.dimensions.channel.status,
      'general_guidance',
      `Live engine: ${cCode} without consular metadata must yield general_guidance, NOT partial`
    );
    assert.strictEqual(domRes.serviceCoverage.dimensions.channel.evidence.hasSupportingEvidence, false);
  });

  // 9.10 Phase 4.3.6 Scenario D: Live empty sources metadata validation
  const liveEmptySourcesPack = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    authority_name: 'Passport Authority',
    sources: [], // EMPTY
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        sources: [], // EMPTY
        fees: { currency: 'INR', amount: 1500 },
        documents: [{ document_name: 'Birth Certificate' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const liveEmptySourcesEngine = new PassportRulesEngine({ IN: liveEmptySourcesPack });
  const liveEmptySourcesRes = liveEmptySourcesEngine.evaluate({
    countryCode: 'IN',
    location: 'inside',
    service: 'first_passport'
  });
  assert.strictEqual(
    liveEmptySourcesRes.serviceCoverage.dimensions.service.status,
    'general_guidance',
    'Live engine: Object with empty sources must receive general_guidance'
  );
  assert.strictEqual(liveEmptySourcesRes.serviceCoverage.dimensions.service.evidence.hasSupportingEvidence, false);

  // 9.11 Phase 4.3.6 Scenario E: Live verifiedFields accuracy (no steps claimed when steps absent)
  const liveNoStepsServicePack = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    authority_name: 'Passport Seva',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ url: 'https://passportindia.gov.in', publisher: 'MEA' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        sources: [{ url: 'https://passportindia.gov.in/fees', publisher: 'MEA' }],
        fees: { currency: 'INR', standard: 1500 },
        documents: [{ document_name: 'Aadhaar' }],
        eligibility: [{ rule: 'Citizen' }]
        // NO steps
      }
    }
  };
  const liveNoStepsServiceEngine = new PassportRulesEngine({ IN: liveNoStepsServicePack });
  const liveNoStepsServiceRes = liveNoStepsServiceEngine.evaluate({
    countryCode: 'IN',
    location: 'inside',
    service: 'first_passport'
  });
  assert.strictEqual(liveNoStepsServiceRes.serviceCoverage.dimensions.service.status, 'verified');
  const liveVerifiedFields = liveNoStepsServiceRes.serviceCoverage.dimensions.service.evidence.verifiedFields;
  assert(!liveVerifiedFields.includes('steps'), 'Live engine: verifiedFields must NOT claim steps when steps are absent');
  assert(liveVerifiedFields.includes('eligibility') && liveVerifiedFields.includes('documents') && liveVerifiedFields.includes('fees'));

  // 9.12 Phase 4.3.6 Scenario F: Live emergency route fallback (MX and NZ with stripped emergency fees)
  const liveMxNoEmergPack = {
    country_code: 'MX',
    country_name: 'Mexico',
    rule_pack_status: 'verified',
    authority_name: 'SRE',
    sources: [{ url: 'https://sre.gob.mx' }],
    jurisdictions: [{ application_channel: 'consular' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'MXN', standard_domestic_mxn: { validity_3_years: 900 } }, // NO emergency surcharge schedule!
        documents: [{ document_name: 'Acta' }],
        eligibility: [{ rule: 'Mexicano' }]
      }
    }
  };
  const liveMxNoEmergEngine = new PassportRulesEngine({ MX: liveMxNoEmergPack });
  const liveMxNoEmergRes = liveMxNoEmergEngine.evaluate({
    countryCode: 'MX',
    location: 'abroad',
    service: 'emergency_travel',
    urgency: 'emergency'
  });
  assert.strictEqual(
    liveMxNoEmergRes.serviceCoverage.dimensions.urgency.status,
    'general_guidance',
    'Live engine: MX without emergency fee schedule must yield general_guidance'
  );

  const liveNzNoCalloutPack = {
    country_code: 'NZ',
    country_name: 'New Zealand',
    rule_pack_status: 'verified',
    authority_name: 'DIA',
    sources: [{ url: 'https://passports.govt.nz' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'NZD', standard_service_nzd: { adult_10_year: 247 } }, // NO callout fee!
        documents: [{ document_name: 'Birth Cert' }],
        eligibility: [{ rule: 'NZ Citizen' }]
      }
    }
  };
  const liveNzNoCalloutEngine = new PassportRulesEngine({ NZ: liveNzNoCalloutPack });
  const liveNzNoCalloutRes = liveNzNoCalloutEngine.evaluate({
    countryCode: 'NZ',
    location: 'inside',
    service: 'first_passport',
    urgency: 'emergency'
  });
  assert.strictEqual(
    liveNzNoCalloutRes.serviceCoverage.dimensions.urgency.status,
    'general_guidance',
    'Live engine: NZ without callout fee must yield general_guidance'
  );

  console.log('\n--- 10. Checking Live Phase 4.3.7 Source-to-Claim Binding & Strict Fee Schema Safeguards ---');

  // 10.1 Scenario A: Generic Pack Sources (Urgent Route Fallback)
  const liveGenericPack = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    authority_name: 'Passport Authority',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ url: 'https://passportindia.gov.in', page_title: 'National Passport Portal', checked_at: '2026-10-18', publisher: 'MEA' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        sources: [{ url: 'https://passportindia.gov.in', page_title: 'National Passport Portal' }],
        fees: { currency: 'INR', standard: 1500, tatkaal_surcharge: 2000 },
        documents: [{ document_name: 'Citizenship Evidence' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const liveGenericEngine = new PassportRulesEngine({ IN: liveGenericPack });
  const liveGenericRes = liveGenericEngine.evaluate({
    countryCode: 'IN',
    location: 'inside',
    service: 'first_passport',
    urgency: 'urgent'
  });
  assert.strictEqual(
    liveGenericRes.serviceCoverage.dimensions.urgency.status,
    'general_guidance',
    'Live engine: Generic pack URL without urgent/tatkaal source must fall back to general_guidance'
  );
  assert.strictEqual(liveGenericRes.serviceCoverage.dimensions.urgency.evidence.hasSupportingEvidence, false);
  assert(liveGenericRes.readinessScore <= 75, 'Live engine: Score must be capped <= 75 for general_guidance');
  assert.notStrictEqual(liveGenericRes.statusLabel, 'PREPARED');

  // 10.2 Scenario B: Missing Consular Sources (Overseas Channel Fallback)
  const liveNoConsularSourcesPack = {
    country_code: 'MX',
    country_name: 'Mexico',
    rule_pack_status: 'verified',
    authority_name: 'Passport Authority',
    official_portal_url: 'https://domestic.gov.mx',
    sources: [{ url: 'https://domestic.gov.mx', page_title: 'Domestic Service', checked_at: '2026-10-19', publisher: 'SRE' }],
    jurisdictions: [{ name: 'Consular Section', application_channel: 'consular' }], // Bare jurisdiction without source_url
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'USD', consular_overseas_usd: { standard: { validity_1_year: 44, validity_3_year: 101 } } },
        documents: [{ document_name: 'Birth Certificate' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const liveNoConsularEngine = new PassportRulesEngine({ MX: liveNoConsularSourcesPack });
  const liveNoConsularRes = liveNoConsularEngine.evaluate({
    countryCode: 'MX',
    location: 'abroad',
    service: 'first_passport'
  });
  assert.strictEqual(
    liveNoConsularRes.serviceCoverage.dimensions.channel.status,
    'general_guidance',
    'Live engine: Consular jurisdiction without traceable consular source must receive general_guidance'
  );
  assert.strictEqual(liveNoConsularRes.serviceCoverage.dimensions.channel.evidence.hasSupportingEvidence, false);

  // 10.3 Scenario C: Invalid Consular Fee Objects Rejected from Verified
  const liveInvalidConsularFees = [
    { desc: 'empty object', fees: { currency: 'USD', consular_overseas_usd: {} } },
    { desc: 'placeholder object', fees: { currency: 'USD', consular_overseas_usd: { status: 'pending' } } },
    { desc: 'string amounts', fees: { currency: 'USD', diaspora_overseas_usd: { booklet_32_pages_5_year: '150' } } },
    { desc: 'empty nested standard', fees: { currency: 'USD', consular_overseas_usd: { standard: {} } } }
  ];
  liveInvalidConsularFees.forEach(({ desc, fees }) => {
    const pack = {
      country_code: 'MX',
      country_name: 'Mexico',
      rule_pack_status: 'verified',
      authority_name: 'SRE',
      sources: [{ url: 'https://embamex.sre.gob.mx/consular', page_title: 'SRE Consular', checked_at: '2026-10-19', publisher: 'SRE' }],
      jurisdictions: [{ application_channel: 'consular', source_url: 'https://embamex.sre.gob.mx/consular' }],
      services: {
        first_passport: {
          availability_status: 'available',
          fees,
          documents: [{ document_name: 'Acta' }],
          eligibility: [{ rule: 'Mexicano' }]
        }
      }
    };
    const e = new PassportRulesEngine({ MX: pack });
    const res = e.evaluate({ countryCode: 'MX', location: 'abroad', service: 'first_passport' });
    assert.notStrictEqual(
      res.serviceCoverage.dimensions.channel.status,
      'verified',
      `Live engine: Consular channel must NOT be verified with ${desc}`
    );
  });

  // 10.4 Scenario D: Malformed Emergency Fee Objects Rejected
  const liveMxStringEmergPack = {
    country_code: 'MX',
    country_name: 'Mexico',
    rule_pack_status: 'verified',
    authority_name: 'SRE',
    sources: [{ url: 'https://embamex.sre.gob.mx/consular-emergency', page_title: 'Consular Emergency Type E', checked_at: '2026-10-19', publisher: 'SRE' }],
    jurisdictions: [{ application_channel: 'consular' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'USD', consular_overseas_usd: { emergency_surcharge_schedule: { validity_3_year: { total_payable: '131' } } } },
        documents: [{ document_name: 'Acta' }],
        eligibility: [{ rule: 'Mexicano' }]
      }
    }
  };
  const liveMxStringEmergRes = new PassportRulesEngine({ MX: liveMxStringEmergPack }).evaluate({
    countryCode: 'MX', location: 'abroad', service: 'emergency_travel', urgency: 'emergency'
  });
  assert.strictEqual(
    liveMxStringEmergRes.serviceCoverage.dimensions.urgency.status,
    'general_guidance',
    'Live engine: MX with non-numeric emergency surcharge must fall back to general_guidance'
  );

  const liveNzStringCalloutPack = {
    country_code: 'NZ',
    country_name: 'New Zealand',
    rule_pack_status: 'verified',
    authority_name: 'DIA',
    sources: [{ url: 'https://passports.govt.nz/passport-costs', page_title: 'After-Hours Emergency Callout Service', checked_at: '2026-10-19', publisher: 'DIA' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'NZD', after_hours_callout_service_nzd: { adult_10_year: '1001' } },
        documents: [{ document_name: 'Birth Cert' }],
        eligibility: [{ rule: 'NZ Citizen' }]
      }
    }
  };
  const liveNzStringCalloutRes = new PassportRulesEngine({ NZ: liveNzStringCalloutPack }).evaluate({
    countryCode: 'NZ', location: 'inside', service: 'first_passport', urgency: 'emergency'
  });
  assert.strictEqual(
    liveNzStringCalloutRes.serviceCoverage.dimensions.urgency.status,
    'general_guidance',
    'Live engine: NZ with string callout fee must fall back to general_guidance'
  );

  // 10.5 Scenario E: Source Metadata Integrity
  const liveNonUrlSourcesPack = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    authority_name: 'Passport Authority',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ page_title: 'Portal Without URL' }, 'Ministry string', { url: '' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        sources: [{ page_title: 'No URL' }, 'Not a URL', { url: '' }],
        fees: { currency: 'INR', standard: 1500 },
        documents: [{ document_name: 'Evidence' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const liveNonUrlRes = new PassportRulesEngine({ IN: liveNonUrlSourcesPack }).evaluate({
    countryCode: 'IN', location: 'inside', service: 'first_passport'
  });
  assert.strictEqual(
    liveNonUrlRes.serviceCoverage.dimensions.service.status,
    'general_guidance',
    'Live engine: Object with only invalid source entries must receive general_guidance'
  );
  assert.strictEqual(liveNonUrlRes.serviceCoverage.dimensions.service.evidence.sources.length, 0);

  // 10.6 Scenario F: Live dynamic verifiedFields (no steps claimed when steps absent)
  const liveNoStepsP437Pack = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    authority_name: 'Passport Seva',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ url: 'https://passportindia.gov.in', publisher: 'MEA', page_title: 'Passport Seva', checked_at: '2026-10-18' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'INR', standard: 1500 },
        documents: [{ document_name: 'Aadhaar' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const liveNoStepsP437Res = new PassportRulesEngine({ IN: liveNoStepsP437Pack }).evaluate({
    countryCode: 'IN', location: 'inside', service: 'first_passport'
  });
  assert.strictEqual(liveNoStepsP437Res.serviceCoverage.dimensions.service.status, 'verified');
  const liveVFields = liveNoStepsP437Res.serviceCoverage.dimensions.service.evidence.verifiedFields;
  assert(!liveVFields.includes('steps'), 'Live engine: verifiedFields must NOT claim steps when steps are absent');
  assert(liveVFields.includes('eligibility') && liveVFields.includes('documents') && liveVFields.includes('fees'));

  // 10.7 Scenario G: Live verified pack assertions with authentic claim-bound sources
  const liveInTatkaalReal = liveEngine.evaluate({
    countryCode: 'IN', location: 'inside', service: 'first_passport', urgency: 'urgent'
  });
  assert.strictEqual(liveInTatkaalReal.serviceCoverage.dimensions.urgency.status, 'partial', 'Live engine: IN Tatkaal must be partial');
  assert(liveInTatkaalReal.serviceCoverage.dimensions.urgency.evidence.sources.some(s => s.includes('tatkaalPassports')), 'Live engine: IN Tatkaal evidence must include tatkaalPassports URL');

  const liveMxEmergReal = liveEngine.evaluate({
    countryCode: 'MX', location: 'abroad', service: 'emergency_travel', urgency: 'emergency'
  });
  assert.strictEqual(liveMxEmergReal.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(liveMxEmergReal.serviceCoverage.dimensions.urgency.summary.includes('Art. 20 LFD'));

  const liveNzEmergReal = liveEngine.evaluate({
    countryCode: 'NZ', location: 'inside', service: 'first_passport', urgency: 'emergency'
  });
  assert.strictEqual(liveNzEmergReal.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(liveNzEmergReal.serviceCoverage.dimensions.urgency.summary.includes('after-hours callout'));

  // 10.8 Scenario H: Score Caps & PREPARED Prohibition
  [liveGenericRes, liveNoConsularRes, liveMxStringEmergRes, liveNzStringCalloutRes, liveNonUrlRes].forEach(res => {
    assert.notStrictEqual(res.statusLabel, 'PREPARED', 'Live engine: Non-verified status must NEVER be PREPARED');
    assert(res.readinessScore <= 80, 'Live engine: Non-verified status score must be capped <= 80%');
  });

  // 10.9 Scenario I: Statutory Preservations
  const liveMyStaffRepCheck = liveEngine.evaluate({
    countryCode: 'MY', location: 'inside', service: 'lost_stolen', applicantCategory: 'immigration_officers_staff', validity: '10_year', lossTier: 'first_loss'
  });
  assert.strictEqual(liveMyStaffRepCheck.checklist.find(c => c.id === 'official_fee_payment').feeRecord.total_replacement_fee, 200);

  const liveMyStaff5Check = liveEngine.evaluate({
    countryCode: 'MY', location: 'inside', service: 'lost_stolen', applicantCategory: 'immigration_officers_staff', validity: '5_year', lossTier: 'first_loss'
  });
  assert.strictEqual(liveMyStaff5Check.checklist.find(c => c.id === 'official_fee_payment').feeStatus, 'not_eligible');

  const liveMyStaffOrigCheck = liveEngine.evaluate({
    countryCode: 'MY', location: 'inside', service: 'first_passport', applicantCategory: 'immigration_officers_staff', validity: '10_year'
  });
  assert.strictEqual(liveMyStaffOrigCheck.checklist.find(c => c.id === 'official_fee_payment').feeRecord.amount, 0);

  // --- 11. Checking Live Phase 4.3.8 Official Source Trust, Strict Fee Schema Integrity & Claim-Level Evidence Audit ---
  console.log('\n--- 11. Checking Live Phase 4.3.8 Official Source Trust, Fee Schema Integrity & Claim-Level Audit ---');

  // 11.1 Fixture A: Domain Look-alike Rejection & Unapproved Domain Blocking
  console.log('[11.1 Live Fixture A: Domain Look-alike and Subdomain Integrity]');
  assert.strictEqual(liveEngine.isTrustedOfficialDomain('passportindia.gov.in.evil.com', 'IN'), false, 'Live engine must reject domain suffix look-alike');
  assert.strictEqual(liveEngine.isTrustedOfficialDomain('fakepassportindia.gov.in', 'IN'), false, 'Live engine must reject domain prefix look-alike');
  assert.strictEqual(liveEngine.isTrustedOfficialDomain('tatkaalpassports.com', 'IN'), false, 'Live engine must reject unapproved third-party commercial domain');
  assert.strictEqual(liveEngine.isTrustedOfficialDomain('passportindia.gov.in', 'IN'), true, 'Live engine must accept canonical official domain');
  assert.strictEqual(liveEngine.isTrustedOfficialDomain('portal2.passportindia.gov.in', 'IN'), true, 'Live engine must accept genuine official subdomain');

  // Pack with look-alike domain source URL must be rejected to general_guidance with no_trusted_source
  const liveEvilPack = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    authority_name: 'Passport Authority',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ url: 'https://passportindia.gov.in.evil.com/apply', page_title: 'Phishing Portal', publisher: 'Fake' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        sources: [{ url: 'https://passportindia.gov.in.evil.com/apply', page_title: 'Fake' }],
        fees: { currency: 'INR', standard: 1500 },
        documents: [{ document_name: 'Aadhaar' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const liveEvilRes = new PassportRulesEngine({ IN: liveEvilPack }).evaluate({
    countryCode: 'IN', location: 'inside', service: 'first_passport'
  });
  assert.strictEqual(liveEvilRes.serviceCoverage.dimensions.service.status, 'general_guidance', 'Live engine: Look-alike domain must be rejected to general_guidance');
  assert.strictEqual(liveEvilRes.serviceCoverage.dimensions.service.evidence.evidenceLevel, 'no_trusted_source', 'Live engine: Look-alike domain must yield no_trusted_source');
  assert(liveEvilRes.readinessScore <= 75, 'Live engine: Unsubstantiated pack score must cap <= 75');
  assert.notStrictEqual(liveEvilRes.statusLabel, 'PREPARED');

  // 11.2 Fixture B: Generic Authority Homepage Non-Substantiation for Specific Fee Claims
  console.log('[11.2 Live Fixture B: Generic Homepage Claim Separation]');
  assert.strictEqual(liveEngine.isGenericHomepageUrl('https://passportindia.gov.in/'), true);
  assert.strictEqual(liveEngine.isGenericHomepageUrl('https://passportindia.gov.in/index.html'), true);
  assert.strictEqual(liveEngine.isGenericHomepageUrl('https://passportindia.gov.in/landing'), true);
  assert.strictEqual(liveEngine.isGenericHomepageUrl('https://passportindia.gov.in/AppOnlineProject/online/feeSchedule'), false);

  const liveHomepagePack = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    authority_name: 'Passport Seva',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ url: 'https://passportindia.gov.in', page_title: 'National Passport Portal Home', claim_scope: 'portal_navigation' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'INR', standard: 1500 },
        documents: [{ document_name: 'Aadhaar Card' }],
        eligibility: [{ rule: 'Indian Citizen' }]
      }
    }
  };
  const liveHomepageRes = new PassportRulesEngine({ IN: liveHomepagePack }).evaluate({
    countryCode: 'IN', location: 'inside', service: 'first_passport'
  });
  assert.strictEqual(liveHomepageRes.serviceCoverage.dimensions.service.status, 'partial', 'Live engine: Generic homepage without fee schedule must yield partial status');
  assert(!liveHomepageRes.serviceCoverage.dimensions.service.evidence.verifiedFields.includes('fees'), 'Live engine: verifiedFields must NOT include fees when backed only by homepage');
  assert.strictEqual(liveHomepageRes.serviceCoverage.dimensions.service.evidence.evidenceLevel, 'partial_confirmation');
  assert(liveHomepageRes.readinessScore <= 80, 'Live engine: Score must be capped <= 80%');

  // 11.3 Fixture C: Legitimate Non-.gov Official Country Roots Preserved
  console.log('[11.3 Live Fixture C: Non-.gov Authoritative Official Roots]');
  assert.strictEqual(liveEngine.isTrustedOfficialDomain('dfa.ie', 'IE'), true, 'Live engine: dfa.ie must be trusted for IE');
  assert.strictEqual(liveEngine.isTrustedOfficialDomain('passports.gov.au', 'AU'), true, 'Live engine: passports.gov.au must be trusted for AU');
  assert.strictEqual(liveEngine.isTrustedOfficialDomain('passports.govt.nz', 'NZ'), true, 'Live engine: passports.govt.nz must be trusted for NZ');
  assert.strictEqual(liveEngine.isTrustedOfficialDomain('canada.ca', 'CA'), true, 'Live engine: canada.ca must be trusted for CA');
  assert.strictEqual(liveEngine.isTrustedOfficialDomain('bmi.bund.de', 'DE'), true, 'Live engine: bmi.bund.de must be trusted for DE');
  assert.strictEqual(liveEngine.isTrustedOfficialDomain('sre.gob.mx', 'MX'), true, 'Live engine: sre.gob.mx must be trusted for MX');
  assert.strictEqual(liveEngine.isTrustedOfficialDomain('gob.mx', 'MX'), true, 'Live engine: gob.mx must be trusted for MX');
  assert.strictEqual(liveEngine.isTrustedOfficialDomain('imigrasi.go.id', 'ID'), true, 'Live engine: imigrasi.go.id must be trusted for ID');
  assert.strictEqual(liveEngine.isTrustedOfficialDomain('imi.gov.my', 'MY'), true, 'Live engine: imi.gov.my must be trusted for MY');
  assert.strictEqual(liveEngine.isTrustedOfficialDomain('immigration.gov.lk', 'LK'), true, 'Live engine: immigration.gov.lk must be trusted for LK');

  // 11.4 Fixture D: Strict Fee Schema Validation
  console.log('[11.4 Live Fixture D: Strict Fee Schema Validation]');
  assert.strictEqual(liveEngine.hasActualConsularFeeSchedule({}), false, 'Live engine: empty fees must be rejected');
  assert.strictEqual(liveEngine.hasActualConsularFeeSchedule({ status: 'pending' }), false, 'Live engine: placeholder object must be rejected');
  assert.strictEqual(liveEngine.hasActualConsularFeeSchedule({ arbitrary_amount: 150 }), false, 'Live engine: arbitrary numeric key must be rejected');
  assert.strictEqual(liveEngine.hasActualConsularFeeSchedule({ consular_overseas_usd: { standard: { validity_1_year: '44' } } }), false, 'Live engine: string amounts must be rejected');
  assert.strictEqual(liveEngine.hasActualConsularFeeSchedule({
    consular_overseas_usd: { standard_validity: { validity_3_year: 101, validity_6_year: 137, validity_10_year: 209 } }
  }), true, 'Live engine: numeric Mexico consular schedule must be accepted');

  assert.strictEqual(liveEngine.hasUrgentFeeEvidence({ tatkaal_surcharge: '2000' }), false, 'Live engine: string urgent surcharge must be rejected');
  assert.strictEqual(liveEngine.hasUrgentFeeEvidence({ tatkaal_surcharge: NaN }), false, 'Live engine: NaN urgent surcharge must be rejected');
  assert.strictEqual(liveEngine.hasUrgentFeeEvidence({ tatkaal_surcharge: -500 }), false, 'Live engine: negative surcharge must be rejected');
  assert.strictEqual(liveEngine.hasUrgentFeeEvidence({ tatkaal_surcharge: 2000 }), true, 'Live engine: numeric surcharge must be accepted');

  // 11.5 Fixture E: Urgent and Emergency Route Source Relevance
  console.log('[11.5 Live Fixture E: Urgent and Emergency Source Relevance]');
  const livePackGenericUrgent = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ url: 'https://passportindia.gov.in', page_title: 'National Passport Portal Home', claim_scope: 'portal_navigation' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'INR', standard: 1500, tatkaal_surcharge: 2000 },
        documents: [{ document_name: 'Aadhaar' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const liveResGenUrg = new PassportRulesEngine({ IN: livePackGenericUrgent }).evaluate({
    countryCode: 'IN', location: 'inside', service: 'first_passport', urgency: 'urgent'
  });
  assert.strictEqual(liveResGenUrg.serviceCoverage.dimensions.urgency.status, 'general_guidance', 'Live engine: Generic portal source without urgent evidence must fall back to general_guidance');
  assert.strictEqual(liveResGenUrg.serviceCoverage.dimensions.urgency.evidence.evidenceLevel, 'valid_syntax_incomplete_claim');
  assert(liveResGenUrg.readinessScore <= 75, 'Live engine: Readiness score must cap <= 75 for general_guidance');

  // Unapproved domain matching keyword
  const livePackEvilTatkaal = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ url: 'https://tatkaalpassports.com/apply', page_title: 'Tatkaal Agent' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'INR', standard: 1500, tatkaal_surcharge: 2000 },
        documents: [{ document_name: 'Aadhaar' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const liveResEvilUrg = new PassportRulesEngine({ IN: livePackEvilTatkaal }).evaluate({
    countryCode: 'IN', location: 'inside', service: 'first_passport', urgency: 'urgent'
  });
  assert.strictEqual(liveResEvilUrg.serviceCoverage.dimensions.urgency.status, 'general_guidance', 'Live engine: Unapproved domain matching tatkaal keyword must be rejected');
  assert.strictEqual(liveResEvilUrg.serviceCoverage.dimensions.urgency.evidence.evidenceLevel, 'no_trusted_source');

  // 11.6 Fixture F: Mexico & NZ Emergency Preservation
  console.log('[11.6 Live Fixture F: Mexico and NZ Emergency Route Preservation]');
  const liveMxEmergP438 = liveEngine.evaluate({
    countryCode: 'MX', location: 'abroad', service: 'emergency_travel', urgency: 'emergency'
  });
  assert.strictEqual(liveMxEmergP438.serviceCoverage.dimensions.urgency.status, 'partial', 'Live engine: MX abroad emergency must be partial');
  assert.strictEqual(liveMxEmergP438.serviceCoverage.dimensions.urgency.evidence.evidenceLevel, 'partial_confirmation');
  assert(liveMxEmergP438.serviceCoverage.dimensions.urgency.summary.includes('Art. 20 LFD'));

  const liveNzEmergP438 = liveEngine.evaluate({
    countryCode: 'NZ', location: 'inside', service: 'first_passport', urgency: 'emergency'
  });
  assert.strictEqual(liveNzEmergP438.serviceCoverage.dimensions.urgency.status, 'partial', 'Live engine: NZ domestic emergency must be partial');
  assert.strictEqual(liveNzEmergP438.serviceCoverage.dimensions.urgency.evidence.evidenceLevel, 'partial_confirmation');
  assert(liveNzEmergP438.serviceCoverage.dimensions.urgency.summary.includes('after-hours callout'));

  // 11.7 Fixture G: Live Verified Rule Packs Domain Trust
  console.log('[11.7 Live Fixture G: Live Rule Pack Authoritative Source Audit]');
  Object.keys(rp).forEach(cc => {
    const pack = rp[cc];
    assert(Array.isArray(pack.trusted_domains) && pack.trusted_domains.length > 0, `Live pack ${cc} must define trusted_domains array`);
    assert(Array.isArray(pack.sources) && pack.sources.length > 0, `Live pack ${cc} must have sources array`);
    const hasAuthoritativeSource = pack.sources.some(s => {
      const url = typeof s === 'string' ? s : s.url;
      return url && liveEngine.isTrustedOfficialUrl(url, cc, pack);
    });
    assert(hasAuthoritativeSource, `Live pack ${cc} must contain at least one trusted official source URL`);
  });

  // 11.8 Fixture H: Evidence Badges in Live App
  console.log('[11.8 Live Fixture H: Live UI Evidence Level Badging]');
  assert(appJsRes.body.includes('renderEvidenceBadge'), 'Live app.js must include renderEvidenceBadge function');
  assert(appJsRes.body.includes('trusted_official'), 'Live app.js must handle trusted_official evidence level');
  assert(appJsRes.body.includes('valid_syntax_incomplete_claim'), 'Live app.js must handle valid_syntax_incomplete_claim evidence level');
  assert(appJsRes.body.includes('no_trusted_source'), 'Live app.js must handle no_trusted_source evidence level');
  assert(appJsRes.body.includes('awaiting_primary_research'), 'Live app.js must handle awaiting_primary_research evidence level');

  console.log('\n--- 12. Phase 4.3.9 Live VM Domain-Trust Independence & Claim-Evidence Auditing ---');
  // 12.1 Fixture A: Domain-trust independence from pack.trusted_domains
  console.log('[12.1 Live Fixture A: Official Domain Allowlist Independence]');
  const livePackAttacker = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    official_portal_url: 'https://attacker.example/portal',
    trusted_domains: ['attacker.example', 'passportindia.gov.in'],
    sources: [
      { url: 'https://attacker.example/fee', publisher: 'Attacker Authority', claim_scope: 'fee' }
    ],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        sources: [{ url: 'https://attacker.example/fee', claim_scope: 'fee' }],
        fees: { currency: 'INR', standard: 1500 },
        documents: [{ document_name: 'Aadhaar' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const liveTrustedForAttacker = PassportRulesEngine.getTrustedOfficialDomains('IN', livePackAttacker);
  assert(!liveTrustedForAttacker.includes('attacker.example'), 'Live engine: getTrustedOfficialDomains must not authorize unapproved attacker domain');
  assert.strictEqual(PassportRulesEngine.isTrustedOfficialDomain('attacker.example', 'IN', livePackAttacker), false, 'Live engine: isTrustedOfficialDomain must reject self-authorized domain');
  assert.strictEqual(PassportRulesEngine.isTrustedOfficialUrl('https://attacker.example/fee', 'IN', livePackAttacker), false, 'Live engine: isTrustedOfficialUrl must reject URL on unapproved domain');

  const liveEngineAttacker = new PassportRulesEngine({ IN: livePackAttacker });
  const liveResAttacker = liveEngineAttacker.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport' });
  assert.strictEqual(liveResAttacker.serviceCoverage.dimensions.service.status, 'general_guidance', 'Live engine: Self-authorized domain must fall back to general_guidance');
  assert.strictEqual(liveResAttacker.serviceCoverage.dimensions.service.evidence.evidenceLevel, 'no_trusted_source');
  assert(liveResAttacker.readinessScore <= 75, 'Live engine: Score must cap <= 75%');
  assert.notStrictEqual(liveResAttacker.statusLabel, 'PREPARED');

  // 12.2 Fixture B: Look-alike and Insecure HTTP Rejection
  console.log('[12.2 Live Fixture B: Look-alike and Insecure HTTP Rejection]');
  const liveLookalikes = [
    'passportindia.gov.in.evil.com',
    'fakepassportindia.gov.in',
    'expresspassportindia.com',
    'tatkaalpassports.com',
    'consular-services-online.org',
    'travel.state.gov.phishing.net'
  ];
  liveLookalikes.forEach(host => {
    assert.strictEqual(PassportRulesEngine.isTrustedOfficialDomain(host, 'IN'), false, `Live engine: Hostname ${host} must be rejected`);
    assert.strictEqual(PassportRulesEngine.isTrustedOfficialUrl(`https://${host}/fees`, 'IN'), false, `Live engine: URL https://${host}/fees must be rejected`);
  });
  assert.strictEqual(PassportRulesEngine.isTrustedOfficialUrl('http://passportindia.gov.in/feeSchedule', 'IN'), false, 'Live engine: HTTP must be rejected by default');

  // 12.3 Fixture C: Generic Homepage Fee-Record Disallowance
  console.log('[12.3 Live Fixture C: Generic Homepage Fee-Record Disallowance]');
  assert.strictEqual(liveEngine.isClaimRelevantSource({ url: 'https://passportindia.gov.in/', amount: 1500 }, 'fee'), false, 'Live engine: Root URL with amount must NOT substantiate fee');
  assert.strictEqual(liveEngine.isClaimRelevantSource({ url: 'https://passportindia.gov.in/', official_replacement_amount: 2000 }, 'fee'), false, 'Live engine: Root URL with official_replacement_amount must NOT substantiate fee');
  assert.strictEqual(liveEngine.isClaimRelevantSource({ url: 'https://passportindia.gov.in/', applicant_category: 'tatkaal' }, 'fee'), false, 'Live engine: Root URL with applicant_category must NOT substantiate fee');

  // 12.4 Fixture D: Generic Homepage Document-Record Disallowance
  console.log('[12.4 Live Fixture D: Generic Homepage Document-Record Disallowance]');
  assert.strictEqual(liveEngine.isClaimRelevantSource({ url: 'https://passportindia.gov.in/', document_name: 'Aadhaar' }, 'documents'), false, 'Live engine: Root URL with document_name must NOT substantiate documents');
  assert.strictEqual(liveEngine.isClaimRelevantSource({ url: 'https://passportindia.gov.in/index.html', document_name: 'Aadhaar' }, 'documents'), false, 'Live engine: /index.html with document_name must NOT substantiate documents');

  // 12.5 Fixture E: Cross-Claim Evidence Contamination Prevention
  console.log('[12.5 Live Fixture E: Cross-Claim Evidence Contamination Prevention]');
  const liveFeeOnlySource = {
    url: 'https://passportindia.gov.in/AppOnlineProject/online/feeSchedule',
    page_title: 'Fee Schedule'
  };
  assert.strictEqual(liveEngine.isClaimRelevantSource(liveFeeOnlySource, 'fee'), true, 'Live engine: Fee URL must substantiate fee');
  assert.strictEqual(liveEngine.isClaimRelevantSource(liveFeeOnlySource, 'eligibility'), false, 'Live engine: Fee URL must NOT substantiate eligibility');
  assert.strictEqual(liveEngine.isClaimRelevantSource(liveFeeOnlySource, 'documents'), false, 'Live engine: Fee URL must NOT substantiate documents');
  assert.strictEqual(liveEngine.isClaimRelevantSource(liveFeeOnlySource, 'steps'), false, 'Live engine: Fee URL must NOT substantiate steps');

  // 12.6 Fixture F: Explicit Wildcard 'all' Disallowance
  console.log('[12.6 Live Fixture F: Explicit Wildcard all Disallowance]');
  assert.strictEqual(liveEngine.isClaimRelevantSource({ url: 'https://passportindia.gov.in/', claims: ['all'] }, 'fee'), false, 'Live engine: claims: ["all"] on root must be rejected');
  assert.strictEqual(liveEngine.isClaimRelevantSource({ url: 'https://passportindia.gov.in/', claim_scope: 'all' }, 'documents'), false, 'Live engine: claim_scope: "all" on root must be rejected');
  assert.strictEqual(liveEngine.isClaimRelevantSource({ url: 'https://passportindia.gov.in/fees', claims: ['all'] }, 'documents'), false, 'Live engine: claims: ["all"] on /fees must NOT substantiate documents');

  // 12.7 Fixture G: Live Positive Controls
  console.log('[12.7 Live Fixture G: Live Positive Controls]');
  const liveInTatkaalP439 = liveEngine.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport', urgency: 'urgent' });
  assert.strictEqual(liveInTatkaalP439.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(liveInTatkaalP439.serviceCoverage.dimensions.urgency.evidence.sources.some(s => s.includes('tatkaalPassports')));

  const liveUsExpediteP439 = liveEngine.evaluate({ countryCode: 'US', location: 'inside', service: 'first_passport', urgency: 'urgent' });
  assert.strictEqual(liveUsExpediteP439.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(liveUsExpediteP439.serviceCoverage.dimensions.urgency.evidence.sources.some(s => s.includes('travel.state.gov')));

  // 12.8 Fixture H: Preservation Across Jurisdictions
  console.log('[12.8 Live Fixture H: Preservation Across Jurisdictions]');
  const liveMyStaffP439 = liveEngine.evaluate({ countryCode: 'MY', location: 'inside', service: 'lost_stolen', applicantCategory: 'immigration_officers_staff', validity: '10_year', lossTier: 'first_loss' });
  assert.strictEqual(liveMyStaffP439.checklist.find(c => c.id === 'official_fee_payment').feeRecord.total_replacement_fee, 200);

  const liveIdMinorP439 = liveEngine.evaluate({ countryCode: 'ID', location: 'inside', service: 'first_passport', ageExact: 16 });
  assert.strictEqual(liveIdMinorP439.checklist.find(c => c.id === 'official_fee_payment').feeStatus, 'confirmation_required');
  assert(liveIdMinorP439.flags.some(f => f.code === 'INDONESIA_MARITAL_STATUS_CONFIRMATION'));

  console.log('\n>>> ALL PHASE 3.4, PHASE 4, PHASE 4.1, PHASE 4.2, PHASE 4.3, PHASE 4.3.1, PHASE 4.3.2, PHASE 4.3.3, PHASE 4.3.4, PHASE 4.3.5, PHASE 4.3.6, PHASE 4.3.7, PHASE 4.3.8 & PHASE 4.3.9 LIVE CHECKS ASSERTED SUCCESSFULLY <<<');
}

verifyLive().catch(err => {
  console.error('✗ Live verification failed:', err);
  process.exit(1);
});
