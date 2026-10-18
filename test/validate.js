/**
 * PassportReady Automated Verification Test Suite
 * Validates data integrity, schema conformity, i18n keys, rules engine, tools, and deployment safety.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

let passedTests = 0;
let totalTests = 0;

function runTest(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`✓ PASS: ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`✗ FAIL: ${name}`);
    console.error(err);
  }
}

console.log('====================================================');
console.log('Starting PassportReady Quality & Validation Suite');
console.log('====================================================\n');

// 1. CNAME File Verification
runTest('CNAME matches passport.myoss.in', () => {
  const cnamePath = path.join(__dirname, '..', 'CNAME');
  assert(fs.existsSync(cnamePath), 'CNAME file must exist');
  const cnameContent = fs.readFileSync(cnamePath, 'utf8').trim();
  assert.strictEqual(cnameContent, 'passport.myoss.in', 'CNAME must be passport.myoss.in');
});

// 2. Countries Data Verification
runTest('countries.json has 249 valid entries with unique ISO alpha-2 codes', () => {
  const countriesPath = path.join(__dirname, '..', 'countries.json');
  assert(fs.existsSync(countriesPath), 'countries.json must exist');
  const countries = JSON.parse(fs.readFileSync(countriesPath, 'utf8'));
  assert.strictEqual(countries.length, 249, 'Must contain exactly 249 country entries');

  const seenAlpha2 = new Set();
  countries.forEach(c => {
    assert(c.name, `Country must have name: ${JSON.stringify(c)}`);
    assert(c.alpha2 && c.alpha2.length === 2, `Alpha2 must be 2 chars: ${c.name}`);
    assert(!seenAlpha2.has(c.alpha2), `Duplicate alpha2 detected: ${c.alpha2}`);
    seenAlpha2.add(c.alpha2);
    assert(c.portal_status, `Country must have portal_status: ${c.name}`);
  });
});

// 3. Country Rule Packs Schema & Integrity
runTest('data/country-rules.json conforms to rule schema standards', () => {
  const rulesPath = path.join(__dirname, '..', 'data', 'country-rules.json');
  assert(fs.existsSync(rulesPath), 'country-rules.json must exist');
  const rulePacks = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

  const expectedPacks = ['IN', 'US', 'GB', 'CA', 'AU', 'PK', 'BD', 'DE', 'AE', 'PH', 'FR', 'SA'];
  expectedPacks.forEach(code => {
    const pack = rulePacks[code];
    assert(pack, `Rule pack for ${code} must exist`);
    assert.strictEqual(pack.country_code, code);
    assert(pack.authority_name, 'Authority name is required');
    assert.strictEqual(pack.rule_pack_status, 'verified');
    assert(pack.services && pack.services.first_passport, 'first_passport service is required');
    assert(pack.services.first_passport.documents.length > 0, 'first_passport must have documents');
    assert(pack.sources && pack.sources.length > 0, 'Sources array required');
  });
});

// 4. Country Coverage Tracker CSV
runTest('country-coverage-tracker.csv has 250 rows matching countries data', () => {
  const csvPath = path.join(__dirname, '..', 'country-coverage-tracker.csv');
  assert(fs.existsSync(csvPath), 'country-coverage-tracker.csv must exist');
  const lines = fs.readFileSync(csvPath, 'utf8').trim().split('\n');
  assert.strictEqual(lines.length, 250, 'Must have 1 header line + 249 country lines');
  assert(lines[0].startsWith('Country/Territory,ISO Alpha-2'), 'Header format check');
});

// 5. Internationalization Key Parity
runTest('js/i18n.js has consistent translations for en, hi, and ur', () => {
  const { I18N_TRANSLATIONS } = require('../js/i18n.js');
  assert(I18N_TRANSLATIONS.en, 'English dictionary required');
  assert(I18N_TRANSLATIONS.hi, 'Hindi dictionary required');
  assert(I18N_TRANSLATIONS.ur, 'Urdu dictionary required');

  const enKeys = Object.keys(I18N_TRANSLATIONS.en);
  const hiKeys = Object.keys(I18N_TRANSLATIONS.hi);
  const urKeys = Object.keys(I18N_TRANSLATIONS.ur);

  assert(enKeys.length > 40, 'Should have rich translation key set');
  assert(hiKeys.length >= enKeys.length * 0.8, 'Hindi dictionary coverage >= 80%');
  assert(urKeys.length >= enKeys.length * 0.8, 'Urdu dictionary coverage >= 80%');
  assert.strictEqual(I18N_TRANSLATIONS.ur.dir, 'rtl', 'Urdu direction must be rtl');
});

// 6. Rules Engine Evaluation Tests
runTest('PassportRulesEngine evaluates standard and edge-case profiles accurately', () => {
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const engine = new PassportRulesEngine(rulePacks);

  // Normal profile
  const standardProfile = {
    countryCode: 'IN',
    countryName: 'India',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'standard',
    status: 'never',
    birthProof: 'have',
    addressProof: 'have',
    citizenshipProof: 'have',
    nameMatch: 'yes',
    dobMatch: 'yes'
  };
  const standardRes = engine.evaluate(standardProfile);
  assert(standardRes.readinessScore >= 90, 'Standard profile should score high');
  assert.strictEqual(standardRes.statusLabel, 'PREPARED');
  assert.strictEqual(standardRes.flags.length, 0, 'No flags expected for clean profile');
  assert(standardRes.checklist.length >= 5, 'Checklist should have mandatory items');

  // Major Name Mismatch Profile
  const mismatchProfile = {
    ...standardProfile,
    nameMatch: 'major'
  };
  const mismatchRes = engine.evaluate(mismatchProfile);
  assert(mismatchRes.readinessScore < 80, 'Score should decrease on major mismatch');
  assert(mismatchRes.flags.some(f => f.code === 'NAME_MAJOR_MISMATCH'), 'Should flag NAME_MAJOR_MISMATCH');

  // Minor Child Profile
  const minorProfile = {
    ...standardProfile,
    age: 'minor'
  };
  const minorRes = engine.evaluate(minorProfile);
  assert(minorRes.flags.some(f => f.code === 'MINOR_PARENTAL_CONSENT'), 'Should flag MINOR_PARENTAL_CONSENT');

  // Lost Passport Profile
  const lostProfile = {
    ...standardProfile,
    service: 'lost_stolen',
    status: 'lost'
  };
  const lostRes = engine.evaluate(lostProfile);
  assert(lostRes.flags.some(f => f.code === 'LOST_STOLEN_MANDATORY_REPORT'), 'Should flag police report needed');

  // Unverified Country Profile (Guardrail test)
  const unverifiedProfile = {
    ...standardProfile,
    countryCode: 'AF',
    countryName: 'Afghanistan'
  };
  const unverifiedRes = engine.evaluate(unverifiedProfile);
  assert(unverifiedRes.readinessScore <= 70, 'Unverified country score must be capped at 70%');
  assert.strictEqual(unverifiedRes.statusLabel, 'OFFICIAL_CONFIRMATION_RECOMMENDED');
  assert(unverifiedRes.flags.some(f => f.code === 'UNVERIFIED_COUNTRY_PROCEDURAL_PACK'), 'Must flag UNVERIFIED_COUNTRY_PROCEDURAL_PACK');
});

// 7. Interactive Tools Unit Tests
runTest('PassportTools expiry and mismatch functions return accurate results', () => {
  const { PassportTools } = require('../js/tools.js');

  // Expiry check: 2 months validity remaining -> LESS_THAN_3_MONTHS
  const expRes1 = PassportTools.evaluateExpiry('2026-12-01', '2026-10-01');
  assert.strictEqual(expRes1.valid, false);
  assert.strictEqual(expRes1.status, 'LESS_THAN_3_MONTHS');

  // Expiry check: 1 year validity remaining -> SUFFICIENT_VALIDITY
  const expRes2 = PassportTools.evaluateExpiry('2027-10-01', '2026-10-01');
  assert.strictEqual(expRes2.valid, true);
  assert.strictEqual(expRes2.status, 'SUFFICIENT_VALIDITY');

  // Name mismatch check: Inverted names
  const nameRes = PassportTools.analyzeNameDiscrepancy('John Smith', 'Smith John', '1990-01-01', '1990-01-01');
  assert.strictEqual(nameRes.nameStatus, 'NAME_ORDER_INVERSION');
});

// 8. Physical Asset & Script Dependency Verification
runTest('All referenced scripts, styles, and assets exist on disk', () => {
  const files = [
    'css/styles.css',
    'data/country-data.js',
    'data/rule-packs.js',
    'data/country-rules.json',
    'js/i18n.js',
    'js/rules-engine.js',
    'js/tools.js',
    'js/guides-data.js',
    'js/app.js',
    'robots.txt',
    'sitemap.xml',
    'index.html',
    'CNAME'
  ];

  files.forEach(f => {
    const fullPath = path.join(__dirname, '..', f);
    assert(fs.existsSync(fullPath), `Asset ${f} must exist`);
  });
});

console.log('\n====================================================');
console.log(`Results: ${passedTests} of ${totalTests} tests passed.`);
console.log('====================================================');

if (passedTests !== totalTests) {
  process.exit(1);
}
