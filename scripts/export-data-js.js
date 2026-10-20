const fs = require('fs');
const path = require('path');

const countries = fs.readFileSync(path.join(__dirname, '..', 'countries.json'), 'utf8');
const rules = fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8');

const countryJs = `if (typeof window === 'undefined') {\n  var window = {};\n}\n\nwindow.PASSPORT_COUNTRIES = ${countries};\nwindow.COUNTRY_DATA = window.PASSPORT_COUNTRIES;\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = { COUNTRY_DATA: window.COUNTRY_DATA, PASSPORT_COUNTRIES: window.PASSPORT_COUNTRIES };\n}\n`;
const rulesJs = `if (typeof window === 'undefined') {\n  var window = {};\n}\n\nwindow.RULE_PACKS = ${rules};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = { RULE_PACKS: window.RULE_PACKS };\n}\n`;

fs.writeFileSync(path.join(__dirname, '..', 'data', 'country-data.js'), countryJs, 'utf8');
fs.writeFileSync(path.join(__dirname, '..', 'data', 'rule-packs.js'), rulesJs, 'utf8');
console.log('Successfully generated data/country-data.js and data/rule-packs.js');
