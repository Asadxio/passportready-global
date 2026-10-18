const fs = require('fs');

const countries = JSON.parse(fs.readFileSync('countries.json', 'utf8'));
const rules = JSON.parse(fs.readFileSync('data/country-rules.json', 'utf8'));

console.log('=== COUNTRIES.JSON ANALYSIS ===');
const verifiedList = countries.filter(c => c.portal_status === 'verified').map(c => `${c.name} (${c.alpha2})`);
const linkedList = countries.filter(c => c.portal_status === 'official_portal_linked_rules_not_fully_audited').map(c => `${c.name} (${c.alpha2}): ${c.authority_url}`);
const researchList = countries.filter(c => c.portal_status === 'official_source_needs_research');

console.log('Verified Rule Packs (in countries.json):', verifiedList.length);
console.log(verifiedList.join(', '));

console.log('\nPortal Linked Only (Unverified Rules):', linkedList.length);
linkedList.forEach(l => console.log(' - ' + l));

console.log('\nAwaiting Research:', researchList.length);
console.log('Total:', verifiedList.length + linkedList.length + researchList.length);

console.log('\n=== CSV INTEGRITY CHECK ===');
const csvLines = fs.readFileSync('country-coverage-tracker.csv', 'utf8').trim().split('\n');

function parseCsvLine(text) {
  const p = [];
  let cur = '';
  let inQ = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      inQ = !inQ;
    } else if (ch === ',' && !inQ) {
      p.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  p.push(cur);
  return p;
}

let csvMalformedRows = 0;
for (let i = 1; i < csvLines.length; i++) {
  const row = parseCsvLine(csvLines[i]);
  if (row.length !== 12) {
    console.log(`Row ${i} has ${row.length} columns (expected 12):`, csvLines[i]);
    csvMalformedRows++;
  }
}
console.log('Malformed CSV rows count:', csvMalformedRows);
