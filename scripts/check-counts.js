const fs = require('fs');

const rules = JSON.parse(fs.readFileSync('data/country-rules.json', 'utf8'));
const countries = JSON.parse(fs.readFileSync('countries.json', 'utf8'));
const csvLines = fs.readFileSync('country-coverage-tracker.csv', 'utf8').trim().split('\n');

console.log('Rule packs count:', Object.keys(rules).length);
console.log('countries.json total:', countries.length);

const cStatus = {};
countries.forEach(c => { cStatus[c.portal_status] = (cStatus[c.portal_status] || 0) + 1; });
console.log('countries.json status breakdown:', cStatus);

function parseCsvLine(text) {
  const p = [];
  let cur = '';
  let inQ = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') inQ = !inQ;
    else if (ch === ',' && !inQ) { p.push(cur.trim()); cur = ''; }
    else cur += ch;
  }
  p.push(cur.trim());
  return p;
}

let verified = 0, linked = 0, research = 0;
for (let i = 1; i < csvLines.length; i++) {
  const row = parseCsvLine(csvLines[i]);
  const s = row[3];
  if (s === 'verified') verified++;
  else if (s === 'official_portal_linked_rules_not_fully_audited') linked++;
  else if (s === 'official_source_needs_research') research++;
  else console.log('Unknown status row:', i, row[1], s);
}
console.log(`CSV status breakdown: verified=${verified}, linked=${linked}, research=${research}, total=${verified + linked + research}`);
