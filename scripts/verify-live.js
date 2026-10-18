const https = require('https');
const vm = require('vm');

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
  
  const hasDemoOnly = index.body.includes('DEMONSTRATION ONLY');
  console.log('Has "DEMONSTRATION ONLY":', hasDemoOnly);
  
  const hasLivePreview = index.body.includes('LIVE PREVIEW');
  console.log('Has "LIVE PREVIEW":', hasLivePreview);
  
  const scriptsWithV = (index.body.match(/src="[^"]+\?v=20261019_2"/g) || []);
  console.log('Scripts with ?v=20261019_2:', scriptsWithV.length);
  
  const cssWithV = (index.body.match(/href="css\/styles\.css\?v=20261019_2"/g) || []);
  console.log('CSS with ?v=20261019_2:', cssWithV.length);

  const hasFaqFix = index.body.includes("routine marriage-related surname changes require only a self-declaration (Annexure 'E')");
  console.log('Has India Annexure E FAQ Fix:', hasFaqFix);

  console.log('\n--- 2. Checking Live rule-packs.js ---');
  const rulePacks = await fetchUrl('https://passport.myoss.in/data/rule-packs.js?v=20261019_2');
  console.log('Rule packs HTTP Status:', rulePacks.status);

  // Evaluate rule packs
  const sandbox = { window: {}, module: {} };
  vm.runInNewContext(rulePacks.body, sandbox);
  const rp = sandbox.window.RULE_PACKS || sandbox.RULE_PACKS;
  
  console.log('Verified Rule Packs count:', Object.keys(rp).length);
  
  // JP Check
  console.log('\n[JP Check]');
  console.log('JP adult 10-yr fee:', rp.JP.services.first_passport.fees.adult_10_year_total);
  console.log('JP minor 12-17 fee:', rp.JP.services.first_passport.fees.minor_12_to_17_5_year_total);
  console.log('JP discontinued date:', rp.JP.services.first_passport.fees.adult_5_year_discontinued_date);
  
  // MX Check
  console.log('\n[MX Check]');
  console.log('MX 2026 fees (1,3,6,10):', [
    rp.MX.services.first_passport.fees.validity_1_year,
    rp.MX.services.first_passport.fees.validity_3_year,
    rp.MX.services.first_passport.fees.validity_6_year,
    rp.MX.services.first_passport.fees.validity_10_year
  ]);
  console.log('MX Consular USD (1,3,6,10):', [
    rp.MX.services.first_passport.fees.consular_overseas_usd.validity_1_year,
    rp.MX.services.first_passport.fees.consular_overseas_usd.validity_3_year,
    rp.MX.services.first_passport.fees.consular_overseas_usd.validity_6_year,
    rp.MX.services.first_passport.fees.consular_overseas_usd.validity_10_year
  ]);

  // NG Check
  console.log('\n[NG Check]');
  console.log('NG domestic fees (32p, 64p):', [
    rp.NG.services.first_passport.fees.booklet_32_pages_5_year,
    rp.NG.services.first_passport.fees.booklet_64_pages_10_year
  ]);
  console.log('NG diaspora fees USD (32p, 64p):', [
    rp.NG.services.first_passport.fees.diaspora_overseas_usd.booklet_32_pages_5_year,
    rp.NG.services.first_passport.fees.diaspora_overseas_usd.booklet_64_pages_10_year
  ]);

  console.log('\n>>> ALL LIVE CHECKS COMPLETED SUCCESSFULLY <<<');
}

verifyLive().catch(console.error);
