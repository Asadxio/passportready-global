const fs = require('fs');
const path = require('path');

const countries = fs.readFileSync(path.join(__dirname, '..', 'countries.json'), 'utf8');
const rules = fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8');

const countryJs = `const COUNTRY_DATA = ${countries};\nif (typeof module !== 'undefined' && module.exports) { module.exports = { COUNTRY_DATA }; }\n`;
const rulesJs = `const RULE_PACKS = ${rules};\nif (typeof module !== 'undefined' && module.exports) { module.exports = { RULE_PACKS }; }\n`;

fs.writeFileSync(path.join(__dirname, '..', 'data', 'country-data.js'), countryJs, 'utf8');
fs.writeFileSync(path.join(__dirname, '..', 'data', 'rule-packs.js'), rulesJs, 'utf8');
console.log('Successfully generated data/country-data.js and data/rule-packs.js');
