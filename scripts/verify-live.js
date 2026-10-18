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
  
  const scriptsWithV = (index.body.match(/src="[^"]+\?v=20261019_5"/g) || []);
  console.log('Scripts with ?v=20261019_5:', scriptsWithV.length);
  assert(scriptsWithV.length >= 7, 'Must have at least 7 scripts with v=20261019_5');
  
  const cssWithV = (index.body.match(/href="css\/styles\.css\?v=20261019_5"/g) || []);
  console.log('CSS with ?v=20261019_5:', cssWithV.length);
  assert(cssWithV.length >= 1, 'CSS must have v=20261019_5');

  const hasFaqFix = index.body.includes("routine marriage-related surname changes require only a self-declaration (Annexure 'E')");
  console.log('Has India Annexure E FAQ Fix:', hasFaqFix);
  assert(hasFaqFix, 'Must contain India Annexure E FAQ fix');

  console.log('\n--- 2. Checking Live country-data.js ---');
  const countryDataRes = await fetchUrl('https://passport.myoss.in/data/country-data.js?v=20261019_5');
  console.log('Country data HTTP Status:', countryDataRes.status);
  assert.strictEqual(countryDataRes.status, 200, 'Country data must return HTTP 200');

  const cdSandbox = { window: {} };
  vm.runInNewContext(countryDataRes.body, cdSandbox);
  const cd = cdSandbox.window.COUNTRIES_DATA;
  assert(Array.isArray(cd), 'COUNTRIES_DATA must be an array');
  assert.strictEqual(cd.length, 249, 'Must have 249 total countries');
  const cdVerified = cd.filter(c => c.rule_pack_status === 'verified').length;
  const cdLinked = cd.filter(c => c.rule_pack_status === 'official_portal_linked_rules_not_fully_audited').length;
  const cdResearch = cd.filter(c => c.rule_pack_status === 'general_guidance_awaiting_research').length;
  console.log(`Live Country Data Counts: ${cdVerified} verified, ${cdLinked} linked, ${cdResearch} research (Total: ${cd.length})`);
  assert.strictEqual(cdVerified, 27, 'Must have 27 verified countries in live country data');
  assert.strictEqual(cdLinked, 0, 'Must have 0 linked unverified countries');
  assert.strictEqual(cdResearch, 222, 'Must have 222 awaiting research');

  console.log('\n--- 3. Checking Live rule-packs.js ---');
  const rulePacks = await fetchUrl('https://passport.myoss.in/data/rule-packs.js?v=20261019_5');
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

  // Phase 4 Country Verification
  console.log('\n--- 4. Checking Live Phase 4 Rule Packs (9 Countries) ---');
  
  // 1. Indonesia (ID)
  console.log('[ID Check]');
  const idFees = rp.ID.services.first_passport.fees;
  assert.strictEqual(idFees.standard_non_electronic_idr, 350000);
  assert.strictEqual(idFees.standard_electronic_idr, 650000);
  assert.strictEqual(idFees.same_day_express_surcharge, 1000000);
  assert(rp.ID.services.first_passport.steps.some(s => s.step.includes('M-Paspor')), 'ID must require M-Paspor app');

  // 2. Ireland (IE)
  console.log('[IE Check]');
  const ieFees = rp.IE.services.first_passport.fees;
  assert.strictEqual(ieFees.passport_online_eur.adult_standard_booklet, 75);
  assert.strictEqual(ieFees.passport_online_eur.bundle_booklet_plus_card, 100);
  assert.strictEqual(ieFees.passport_online_eur.urgent_same_day_appointment, 150);
  assert(rp.IE.sources.some(s => s.url.includes('dfa.ie/passports')), 'IE must link DFA source');

  // 3. Kenya (KE)
  console.log('[KE Check]');
  const keFees = rp.KE.services.first_passport.fees;
  assert.strictEqual(keFees.e_passport_series_a_34_pages, 7500);
  assert.strictEqual(keFees.e_passport_series_b_50_pages, 9500);
  assert.strictEqual(keFees.e_passport_series_c_66_pages, 12500);
  assert.strictEqual(keFees.lost_passport_replacement, 20000);

  // 4. Malaysia (MY)
  console.log('[MY Check]');
  const myFees = rp.MY.services.first_passport.fees;
  assert.strictEqual(myFees.standard_adult_5_year, 200);
  assert.strictEqual(myFees.child_under_13_5_year, 100);
  assert.strictEqual(myFees.senior_concession_60_plus, 100);
  assert.strictEqual(myFees.persons_with_disabilities_oku, 0);
  assert.strictEqual(myFees.lost_passport_replacement_penalties.first_loss, 400);

  // 5. Nepal (NP)
  console.log('[NP Check]');
  const npFees = rp.NP.services.first_passport.fees;
  assert.strictEqual(npFees.standard_dao_34_pages, 5000);
  assert.strictEqual(npFees.fast_track_dop_kathmandu_34_pages, 12000);
  assert(npFees.national_identity_card_mandate, 'NP must document NID mandate');

  // 6. New Zealand (NZ)
  console.log('[NZ Check]');
  const nzFees = rp.NZ.services.first_passport.fees;
  assert.strictEqual(nzFees.adult_10_year_online, 215);
  assert.strictEqual(nzFees.child_5_year_online, 125);
  assert.strictEqual(nzFees.urgent_service_surcharge, 230);
  assert.strictEqual(nzFees.urgent_adult_total, 445);

  // 7. Singapore (SG)
  console.log('[SG Check]');
  const sgFees = rp.SG.services.first_passport.fees;
  assert.strictEqual(sgFees.online_application_sgd, 70);
  assert.strictEqual(sgFees.in_person_counter_sgd, 80);
  assert.strictEqual(sgFees.lost_passport_replacement_penalty.first_loss, 50);

  // 8. Spain (ES)
  console.log('[ES Check]');
  const esFees = rp.ES.services.first_passport.fees;
  assert.strictEqual(esFees.standard_issuance_renewal_eur, 30.0);
  assert.strictEqual(esFees.familia_numerosa_exemption, 0.0);
  assert(rp.ES.services.first_passport.steps.some(s => s.step.includes('DNI')), 'ES must require valid DNI');

  // 9. Sri Lanka (LK)
  console.log('[LK Check]');
  const lkFees = rp.LK.services.first_passport.fees;
  assert.strictEqual(lkFees.all_countries_normal, 10000);
  assert.strictEqual(lkFees.all_countries_urgent_one_day, 20000);
  assert.strictEqual(lkFees.child_under_16_three_year_normal, 3000);

  console.log('\n>>> ALL PHASE 3.4 & PHASE 4 LIVE CHECKS ASSERTED SUCCESSFULLY <<<');
}

verifyLive().catch(err => {
  console.error('✗ Live verification failed:', err);
  process.exit(1);
});
