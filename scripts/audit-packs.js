const fs = require('fs');

const rules = JSON.parse(fs.readFileSync('data/country-rules.json', 'utf8'));

console.log('=== AUDITING 12 CURRENT VERIFIED COUNTRY PACKS ===');
for (const [code, pack] of Object.entries(rules)) {
  console.log(`\n--- [${code}] ${pack.country_name} ---`);
  console.log(`Authority: ${pack.authority_name}`);
  console.log(`Official Portal: ${pack.official_portal_url}`);
  console.log(`Last Reviewed: ${pack.last_reviewed}`);
  console.log(`Sources (${pack.sources ? pack.sources.length : 0}):`);
  if (pack.sources) {
    pack.sources.forEach(s => console.log(`   * [${s.type}] ${s.title}: ${s.url} (Checked: ${s.date_checked || 'N/A'})`));
  }
  console.log('Services:');
  for (const [srvName, srv] of Object.entries(pack.services || {})) {
    console.log(`   - ${srvName}: standard fee: ${srv.fees?.standard || 'N/A'}, expedited: ${srv.fees?.expedited || 'N/A'}, time: ${srv.processing_time?.standard || 'N/A'}`);
  }
}
