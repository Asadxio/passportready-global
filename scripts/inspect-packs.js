// Inspection helper for Phase 5 Step 1
const fs = require('fs');
const d = JSON.parse(fs.readFileSync('data/country-rules.json', 'utf8'));

const countries = ['IN', 'GB', 'US', 'CA', 'AU', 'AE'];
countries.forEach(cc => {
  const p = d[cc];
  if (!p) { console.log(cc, 'NOT FOUND'); return; }
  console.log(`\n=== ${cc} | last_reviewed=${p.last_reviewed} | status=${p.rule_pack_status} ===`);
  console.log(`  portal: ${p.official_portal_url}`);

  const sv = p.services;
  const serviceKeys = Object.keys(sv);
  serviceKeys.forEach(sk => {
    const svc = sv[sk];
    console.log(`  SERVICE: ${sk}`);

    // Fees
    const fees = svc.fees;
    if (Array.isArray(fees)) {
      fees.forEach(f => {
        console.log(`    FEE cat=${f.applicant_category} ${f.currency}${f.amount} status=${f.verification_status}`);
      });
    } else if (fees && typeof fees === 'object') {
      Object.keys(fees).forEach(fk => {
        const f = fees[fk];
        console.log(`    FEE[${fk}]: ${JSON.stringify(f).substring(0, 120)}`);
      });
    }

    // Photo
    const photo = svc.photo_requirements;
    if (photo) {
      console.log(`    PHOTO: ${JSON.stringify(photo).substring(0, 300)}`);
    }
  });
});
