// Sync data/country-rules.json → data/rule-packs.js
// Mirrors the pattern used in scripts/add-verified-countries.js and scripts/add-phase3-countries.js
const fs = require('fs');
const path = require('path');

const rulesPath = path.join(__dirname, '..', 'data', 'country-rules.json');
const rulePacksPath = path.join(__dirname, '..', 'data', 'rule-packs.js');

const rulePacks = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

const rulePacksJs = `// Generated rule packs bundle for PassportReady — do not edit directly
// Source of truth: data/country-rules.json
// Last generated: ${new Date().toISOString()}
window.RULE_PACKS = ${JSON.stringify(rulePacks, null, 2)};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RULE_PACKS: window.RULE_PACKS };
}
`;

fs.writeFileSync(rulePacksPath, rulePacksJs, 'utf8');
console.log('✅ Synced data/rule-packs.js from data/country-rules.json');
console.log('   Packs:', Object.keys(rulePacks).length);
