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
  
  const scriptsWithV = (index.body.match(/src="[^"]+\?v=20261019_4"/g) || []);
  console.log('Scripts with ?v=20261019_4:', scriptsWithV.length);
  assert(scriptsWithV.length >= 7, 'Must have at least 7 scripts with v=20261019_4');
  
  const cssWithV = (index.body.match(/href="css\/styles\.css\?v=20261019_4"/g) || []);
  console.log('CSS with ?v=20261019_4:', cssWithV.length);
  assert(cssWithV.length >= 1, 'CSS must have v=20261019_4');

  const hasFaqFix = index.body.includes("routine marriage-related surname changes require only a self-declaration (Annexure 'E')");
  console.log('Has India Annexure E FAQ Fix:', hasFaqFix);
  assert(hasFaqFix, 'Must contain India Annexure E FAQ fix');

  console.log('\n--- 2. Checking Live rule-packs.js ---');
  const rulePacks = await fetchUrl('https://passport.myoss.in/data/rule-packs.js?v=20261019_4');
  console.log('Rule packs HTTP Status:', rulePacks.status);
  assert.strictEqual(rulePacks.status, 200, 'Rule packs must return HTTP 200');

  // Evaluate rule packs
  const sandbox = { window: {}, module: {} };
  vm.runInNewContext(rulePacks.body, sandbox);
  const rp = sandbox.window.RULE_PACKS || sandbox.RULE_PACKS;
  
  console.log('Verified Rule Packs count:', Object.keys(rp).length);
  assert.strictEqual(Object.keys(rp).length, 18, 'Must have 18 verified rule packs');
  
  // JP Check
  console.log('\n[JP Check - Post-July 2026 Fees]');
  const jpFees = rp.JP.services.first_passport.fees;
  console.log('JP adult 10-yr (online / counter):', [
    jpFees.domestic_fees.adult_18_and_over.validity_10_year.online,
    jpFees.domestic_fees.adult_18_and_over.validity_10_year.counter
  ]);
  assert.strictEqual(jpFees.domestic_fees.adult_18_and_over.validity_10_year.online, 8900);
  assert.strictEqual(jpFees.domestic_fees.adult_18_and_over.validity_10_year.counter, 9300);
  console.log('JP minor 5-yr (online / counter):', [
    jpFees.domestic_fees.minor_under_18.validity_5_year.online,
    jpFees.domestic_fees.minor_under_18.validity_5_year.counter
  ]);
  assert.strictEqual(jpFees.domestic_fees.minor_under_18.validity_5_year.online, 4400);
  assert.strictEqual(jpFees.domestic_fees.minor_under_18.validity_5_year.counter, 4800);
  console.log('JP discontinued date:', jpFees.domestic_fees.adult_18_and_over.adult_5_year_discontinued_date);
  assert.strictEqual(jpFees.domestic_fees.adult_18_and_over.adult_5_year_discontinued_date, '2026-07-01');
  
  // MX Check
  console.log('\n[MX Check - 2026 Fees]');
  const mxFees = rp.MX.services.first_passport.fees;
  console.log('MX 2026 standard domestic (1,3,6,10):', [
    mxFees.standard_domestic_mxn.validity_1_year,
    mxFees.standard_domestic_mxn.validity_3_year,
    mxFees.standard_domestic_mxn.validity_6_year,
    mxFees.standard_domestic_mxn.validity_10_year
  ]);
  assert.strictEqual(mxFees.standard_domestic_mxn.validity_1_year, 920);
  assert.strictEqual(mxFees.standard_domestic_mxn.validity_3_year, 1795);
  assert.strictEqual(mxFees.standard_domestic_mxn.validity_6_year, 2440);
  assert.strictEqual(mxFees.standard_domestic_mxn.validity_10_year, 4280);

  console.log('MX 2026 discounted domestic (1,3,6,10):', [
    mxFees.discounted_domestic_mxn.validity_1_year,
    mxFees.discounted_domestic_mxn.validity_3_year,
    mxFees.discounted_domestic_mxn.validity_6_year,
    mxFees.discounted_domestic_mxn.validity_10_year
  ]);
  assert.strictEqual(mxFees.discounted_domestic_mxn.validity_1_year, 460);
  assert.strictEqual(mxFees.discounted_domestic_mxn.validity_3_year, 900);
  assert.strictEqual(mxFees.discounted_domestic_mxn.validity_6_year, 1220);
  assert.strictEqual(mxFees.discounted_domestic_mxn.validity_10_year, 2140);

  console.log('MX Consular USD standard (1,3,6,10):', [
    mxFees.consular_overseas_usd.standard.validity_1_year,
    mxFees.consular_overseas_usd.standard.validity_3_year,
    mxFees.consular_overseas_usd.standard.validity_6_year,
    mxFees.consular_overseas_usd.standard.validity_10_year
  ]);
  assert.strictEqual(mxFees.consular_overseas_usd.standard.validity_1_year, 44);
  assert.strictEqual(mxFees.consular_overseas_usd.standard.validity_3_year, 101);
  assert.strictEqual(mxFees.consular_overseas_usd.standard.validity_6_year, 137);
  assert.strictEqual(mxFees.consular_overseas_usd.standard.validity_10_year, 209);

  console.log('MX Consular USD discounted (1,3,6,10):', [
    mxFees.consular_overseas_usd.discounted_50_percent.validity_1_year,
    mxFees.consular_overseas_usd.discounted_50_percent.validity_3_year,
    mxFees.consular_overseas_usd.discounted_50_percent.validity_6_year,
    mxFees.consular_overseas_usd.discounted_50_percent.validity_10_year
  ]);
  assert.strictEqual(mxFees.consular_overseas_usd.discounted_50_percent.validity_1_year, 22);
  assert.strictEqual(mxFees.consular_overseas_usd.discounted_50_percent.validity_3_year, 50.5);
  assert.strictEqual(mxFees.consular_overseas_usd.discounted_50_percent.validity_6_year, 68.5);
  assert.strictEqual(mxFees.consular_overseas_usd.discounted_50_percent.validity_10_year, 104.5);

  console.log('MX Emergency Consular USD totals (1,3,6,10):', [
    mxFees.consular_overseas_usd.emergency_surcharge_schedule.validity_1_year.total_payable,
    mxFees.consular_overseas_usd.emergency_surcharge_schedule.validity_3_year.total_payable,
    mxFees.consular_overseas_usd.emergency_surcharge_schedule.validity_6_year.total_payable,
    mxFees.consular_overseas_usd.emergency_surcharge_schedule.validity_10_year.total_payable
  ]);
  assert.strictEqual(mxFees.consular_overseas_usd.emergency_surcharge_schedule.validity_1_year.total_payable, 57);
  assert.strictEqual(mxFees.consular_overseas_usd.emergency_surcharge_schedule.validity_3_year.total_payable, 131);
  assert.strictEqual(mxFees.consular_overseas_usd.emergency_surcharge_schedule.validity_6_year.total_payable, 178);
  assert.strictEqual(mxFees.consular_overseas_usd.emergency_surcharge_schedule.validity_10_year.total_payable, 272);

  console.log('MX Discounted Emergency Consular USD totals (1,3,6,10):', [
    mxFees.consular_overseas_usd.discounted_emergency_schedule.validity_1_year.total_payable,
    mxFees.consular_overseas_usd.discounted_emergency_schedule.validity_3_year.total_payable,
    mxFees.consular_overseas_usd.discounted_emergency_schedule.validity_6_year.total_payable,
    mxFees.consular_overseas_usd.discounted_emergency_schedule.validity_10_year.total_payable
  ]);
  assert.strictEqual(mxFees.consular_overseas_usd.discounted_emergency_schedule.validity_1_year.total_payable, 28.5);
  assert.strictEqual(mxFees.consular_overseas_usd.discounted_emergency_schedule.validity_3_year.total_payable, 65.5);
  assert.strictEqual(mxFees.consular_overseas_usd.discounted_emergency_schedule.validity_6_year.total_payable, 89);
  assert.strictEqual(mxFees.consular_overseas_usd.discounted_emergency_schedule.validity_10_year.total_payable, 136);

  assert(!mxFees.eligibility_conditions.validity_1_year.toLowerCase().includes('in emergency cases'), '1-year validity must not conflate with emergency cases');
  assert(mxFees.eligibility_conditions.emergency_appointments.includes('Article 20 of the Ley Federal de Derechos'), 'Must detail Art. 20 LFD');

  // NG Check
  console.log('\n[NG Check - Preserved Verified NIS Fees]');
  const ngFees = rp.NG.services.first_passport.fees;
  console.log('NG domestic fees (32p, 64p):', [
    ngFees.booklet_32_pages_5_year,
    ngFees.booklet_64_pages_10_year
  ]);
  assert.strictEqual(ngFees.booklet_32_pages_5_year, 100000);
  assert.strictEqual(ngFees.booklet_64_pages_10_year, 200000);

  console.log('NG diaspora fees USD (32p, 64p):', [
    ngFees.diaspora_overseas_usd.booklet_32_pages_5_year,
    ngFees.diaspora_overseas_usd.booklet_64_pages_10_year
  ]);
  assert.strictEqual(ngFees.diaspora_overseas_usd.booklet_32_pages_5_year, 150);
  assert.strictEqual(ngFees.diaspora_overseas_usd.booklet_64_pages_10_year, 230);

  console.log('\n>>> ALL PHASE 3.3 LIVE CHECKS COMPLETED AND ASSERTED SUCCESSFULLY <<<');
}

verifyLive().catch(err => {
  console.error('✗ Live verification failed:', err);
  process.exit(1);
});
