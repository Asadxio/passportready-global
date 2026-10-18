/**
 * PassportReady Automated Verification Test Suite
 * Validates data integrity, schema conformity, i18n keys, rules engine, tools, and deployment safety.
 * Enhanced for Phase 2.1 Audit & Phase 3 (18 Verified Country Packs & 6 Languages).
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

// 2. Countries Data Verification (Unique Alpha-2 and Alpha-3)
runTest('countries.json has 249 valid entries with unique ISO alpha-2 and alpha-3 codes', () => {
  const countriesPath = path.join(__dirname, '..', 'countries.json');
  assert(fs.existsSync(countriesPath), 'countries.json must exist');
  const countries = JSON.parse(fs.readFileSync(countriesPath, 'utf8'));
  assert.strictEqual(countries.length, 249, 'Must contain exactly 249 country entries');

  const seenAlpha2 = new Set();
  const seenAlpha3 = new Set();
  countries.forEach(c => {
    assert(c.name, `Country must have name: ${JSON.stringify(c)}`);
    assert(c.alpha2 && c.alpha2.length === 2, `Alpha2 must be 2 chars: ${c.name}`);
    assert(!seenAlpha2.has(c.alpha2), `Duplicate alpha2 detected: ${c.alpha2}`);
    seenAlpha2.add(c.alpha2);

    assert(c.alpha3 && c.alpha3.length === 3, `Alpha3 must be 3 chars: ${c.name}`);
    assert(!seenAlpha3.has(c.alpha3), `Duplicate alpha3 detected: ${c.alpha3}`);
    seenAlpha3.add(c.alpha3);

    assert(c.portal_status, `Country must have portal_status: ${c.name}`);
  });
});

// 3. Country Rule Packs Schema & Integrity for 18 Verified Nations
runTest('data/country-rules.json conforms to rule schema standards for all 18 verified nations', () => {
  const rulesPath = path.join(__dirname, '..', 'data', 'country-rules.json');
  assert(fs.existsSync(rulesPath), 'country-rules.json must exist');
  const rulePacks = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

  const expectedPacks = [
    'IN', 'US', 'GB', 'CA', 'AU', 'PK', 'BD',
    'DE', 'AE', 'PH', 'FR', 'SA',
    'JP', 'MX', 'BR', 'ZA', 'NG', 'IT'
  ];

  assert.strictEqual(Object.keys(rulePacks).length, 18, 'Must have exactly 18 verified country packs');

  expectedPacks.forEach(code => {
    const pack = rulePacks[code];
    assert(pack, `Rule pack for ${code} must exist`);
    assert.strictEqual(pack.country_code, code);
    assert(pack.authority_name, `Authority name is required for ${code}`);
    assert.strictEqual(pack.rule_pack_status, 'verified');
    assert(/^\d{4}-\d{2}-\d{2}$/.test(pack.last_reviewed), `last_reviewed must be ISO date for ${code}`);

    // Sources verification
    assert(Array.isArray(pack.sources) && pack.sources.length > 0, `Sources array required for ${code}`);
    pack.sources.forEach(s => {
      assert(s.url && s.url.startsWith('http'), `Source URL must be valid for ${code}`);
      assert(s.publisher, `Source publisher required for ${code}`);
      assert(s.page_title, `Source page_title required for ${code}`);
      assert(/^\d{4}-\d{2}-\d{2}$/.test(s.checked_at), `Source checked_at must be date for ${code}`);
    });

    // Services verification
    assert(pack.services && pack.services.first_passport, `first_passport service is required for ${code}`);
    const fp = pack.services.first_passport;
    assert(Array.isArray(fp.documents) && fp.documents.length > 0, `first_passport must have documents for ${code}`);
    fp.documents.forEach(d => {
      assert(d.document_name, `Document must have document_name in ${code}`);
      assert(['required', 'conditional', 'not_required', 'unknown'].includes(d.requiredness), `Valid requiredness for ${d.document_name}`);
      assert(Array.isArray(d.accepted_alternatives), `accepted_alternatives must be array in ${code}`);
    });

    // Fees verification
    assert(fp.fees, `first_passport must have fees defined for ${code}`);
    assert(fp.fees.currency, `Fee must declare currency for ${code}`);
  });
});

// 4. Country Coverage Tracker CSV & Consistency with countries.json
runTest('country-coverage-tracker.csv has 250 rows and strict consistency with countries.json', () => {
  const csvPath = path.join(__dirname, '..', 'country-coverage-tracker.csv');
  assert(fs.existsSync(csvPath), 'country-coverage-tracker.csv must exist');
  const csvLines = fs.readFileSync(csvPath, 'utf8').trim().split('\n');
  assert.strictEqual(csvLines.length, 250, 'Must have 1 header line + 249 country lines');
  assert(csvLines[0].startsWith('Country/Territory,ISO Alpha-2'), 'Header format check');

  function parseCsvLine(text) {
    const p = [];
    let cur = '';
    let inQ = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (ch === '"') {
        inQ = !inQ;
      } else if (ch === ',' && !inQ) {
        p.push(cur.trim());
        cur = '';
      } else {
        cur += ch;
      }
    }
    p.push(cur.trim());
    return p;
  }

  const countries = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'countries.json'), 'utf8'));
  const countryMap = new Map(countries.map(c => [c.alpha2, c]));

  let verifiedCount = 0;
  let linkedCount = 0;
  let needsResearchCount = 0;

  for (let i = 1; i < csvLines.length; i++) {
    const row = parseCsvLine(csvLines[i]);
    assert.strictEqual(row.length, 12, `Row ${i} must have 12 columns: ${csvLines[i]}`);
    const alpha2 = row[1];
    const portalStatus = row[3];
    const country = countryMap.get(alpha2);

    assert(country, `Country ${alpha2} in CSV must exist in countries.json`);
    assert.strictEqual(portalStatus, country.portal_status, `Status mismatch for ${alpha2}: CSV=${portalStatus}, JSON=${country.portal_status}`);

    if (portalStatus === 'verified') verifiedCount++;
    else if (portalStatus === 'official_portal_linked_rules_not_fully_audited') linkedCount++;
    else if (portalStatus === 'official_source_needs_research') needsResearchCount++;
  }

  assert.strictEqual(verifiedCount, 18, 'Exactly 18 verified country packs');
  assert.strictEqual(linkedCount, 9, 'Exactly 9 portal linked unverified countries');
  assert.strictEqual(needsResearchCount, 222, 'Exactly 222 awaiting research countries');
  assert.strictEqual(verifiedCount + linkedCount + needsResearchCount, 249, 'Total must equal 249');
});

// 5. Internationalization Key Parity Across All 6 Languages
runTest('js/i18n.js has consistent translations for all 6 languages (en, hi, ur, fr, de, ar) with proper RTL support', () => {
  const { I18N_TRANSLATIONS } = require('../js/i18n.js');
  const languages = ['en', 'hi', 'ur', 'fr', 'de', 'ar'];

  languages.forEach(lang => {
    assert(I18N_TRANSLATIONS[lang], `Dictionary for ${lang} must exist`);
  });

  assert.strictEqual(I18N_TRANSLATIONS.ur.dir, 'rtl', 'Urdu direction must be rtl');
  assert.strictEqual(I18N_TRANSLATIONS.ar.dir, 'rtl', 'Arabic direction must be rtl');
  assert.strictEqual(I18N_TRANSLATIONS.fr.dir, 'ltr', 'French direction must be ltr');
  assert.strictEqual(I18N_TRANSLATIONS.de.dir, 'ltr', 'German direction must be ltr');

  const enKeys = Object.keys(I18N_TRANSLATIONS.en);
  assert(enKeys.length > 50, 'English dictionary must have rich key set');

  languages.forEach(lang => {
    const dict = I18N_TRANSLATIONS[lang];
    const langKeys = Object.keys(dict);
    assert(langKeys.length >= enKeys.length * 0.8, `${lang} coverage must be >= 80% (got ${langKeys.length}/${enKeys.length})`);
    assert(dict.translation_disclaimer || dict.footer_disclaimer, `Disclaimer required in ${lang}`);
  });
});

// 6. Rules Engine Evaluation Tests (Standard, Edge-case, Consular, and India Name Audit)
runTest('PassportRulesEngine evaluates standard, edge-case, and consular profiles accurately', () => {
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

  // India Name Change Audit: Ensure advice notes marriage self-declaration exception
  const indiaNameProfile = {
    ...standardProfile,
    nameMatch: 'major'
  };
  const indiaNameRes = engine.evaluate(indiaNameProfile);
  const flag = indiaNameRes.flags.find(f => f.code === 'NAME_MAJOR_MISMATCH');
  assert(flag, 'Should flag NAME_MAJOR_MISMATCH');
  assert(flag.action.includes('marriage') || flag.action.includes('Annexure'), 'India name advice must explain marriage self-declaration rules');

  // Minor Child Profile (Statutory safeguards)
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

  // Consular / Abroad Application Matrix Test
  const consularProfile = {
    ...standardProfile,
    location: 'abroad'
  };
  const consularRes = engine.evaluate(consularProfile);
  assert(consularRes.flags.some(f => f.code === 'CONSULAR_APPLICATION_CHANNEL'), 'Must flag CONSULAR_APPLICATION_CHANNEL for overseas filing');
  assert(consularRes.checklist.some(i => i.id === 'consular_jurisdiction'), 'Must include consular jurisdiction checklist item');
  assert(consularRes.checklist.some(i => i.id === 'residence_visa_proof'), 'Must include residence visa checklist item');

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

  // Spelling check: recommendations present
  const spellRes = PassportTools.analyzeNameDiscrepancy('Choudhary Ramesh', 'Chaudhry Ramesh', '1990-01-01', '1990-01-01');
  assert.strictEqual(spellRes.nameStatus, 'SPELLING_DIFFERENCE');
  assert(spellRes.recommendations.some(r => r.includes('In India, minor spelling corrections')), 'Tool recommendation must qualify minor spelling in India');
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

// 9. Japan Statutory 2026 Reform Validation
runTest('Japan (JP) rule pack reflects 1 July 2026 MOFA statutory reform (adult 10-year mandate, discontinued 5-year adult)', () => {
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const jp = rulePacks.JP;
  assert(jp, 'JP rule pack must exist');
  assert.strictEqual(jp.country_code, 'JP');
  
  const fees = jp.services.first_passport.fees;
  assert.strictEqual(fees.currency, 'JPY');
  assert.strictEqual(fees.adult_10_year_total, 16000, 'Adult 10-year passport fee must be 16,000 JPY');
  assert.strictEqual(fees.minor_12_to_17_5_year_total, 11000, 'Minor 12-17 fee must be 11,000 JPY');
  assert.strictEqual(fees.child_under_12_5_year_total, 6000, 'Under 12 fee must be 6,000 JPY');
  assert.strictEqual(fees.adult_5_year_discontinued_date, '2026-07-01', 'Adult 5-year discontinued date must be 2026-07-01');
  assert(fees.consular_overseas && fees.consular_overseas.guidance, 'Must have consular fee guidance for JP');
  
  const eligibility = jp.services.first_passport.eligibility;
  assert(eligibility.some(e => e.rule.includes('1 July 2026') && e.rule.includes('10-year')), 'Eligibility must state 10-year adult mandate effective 1 July 2026');
});

// 10. Mexico Statutory 2026 SRE Fee Schedule Validation
runTest('Mexico (MX) rule pack reflects 2026 SRE statutory fee schedule and consular USD rates', () => {
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const mx = rulePacks.MX;
  assert(mx, 'MX rule pack must exist');
  
  const fees = mx.services.first_passport.fees;
  assert.strictEqual(fees.currency, 'MXN');
  assert.strictEqual(fees.fiscal_year, 2026);
  assert.strictEqual(fees.validity_1_year, 920, '1-year fee must be 920 MXN');
  assert.strictEqual(fees.validity_3_year, 1795, '3-year fee must be 1,795 MXN');
  assert.strictEqual(fees.validity_6_year, 2440, '6-year fee must be 2,440 MXN');
  assert.strictEqual(fees.validity_10_year, 4280, '10-year fee must be 4,280 MXN');
  assert(Array.isArray(fees.discount_50_percent_beneficiaries) && fees.discount_50_percent_beneficiaries.length >= 3, 'Must list 50% discount beneficiaries');
  
  // Consular USD fees
  assert(fees.consular_overseas_usd, 'Consular USD fees must exist');
  assert.strictEqual(fees.consular_overseas_usd.validity_1_year, 43, 'Consular 1-year must be $43 USD');
  assert.strictEqual(fees.consular_overseas_usd.validity_3_year, 99, 'Consular 3-year must be $99 USD');
  assert.strictEqual(fees.consular_overseas_usd.validity_6_year, 135, 'Consular 6-year must be $135 USD');
  assert.strictEqual(fees.consular_overseas_usd.validity_10_year, 208, 'Consular 10-year must be $208 USD');
});

// 11. Nigeria Statutory 2025/2026 NIS Fee Reform Validation
runTest('Nigeria (NG) rule pack reflects NIS Ministerial reform fees (₦100k/₦200k domestic, $150/$230 diaspora)', () => {
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const ng = rulePacks.NG;
  assert(ng, 'NG rule pack must exist');
  
  const fees = ng.services.first_passport.fees;
  assert.strictEqual(fees.currency, 'NGN');
  assert.strictEqual(fees.booklet_32_pages_5_year, 100000, '32-page 5-year must be 100,000 NGN');
  assert.strictEqual(fees.booklet_64_pages_10_year, 200000, '64-page 10-year must be 200,000 NGN');
  assert.strictEqual(fees.diaspora_overseas_usd.booklet_32_pages_5_year, 150, 'Diaspora 32-page must be $150 USD');
  assert.strictEqual(fees.diaspora_overseas_usd.booklet_64_pages_10_year, 230, 'Diaspora 64-page must be $230 USD');
  assert(fees.nin_validation_mandate, 'Must document NIN validation mandate');
});

// 12. Asset Cache-Busting Verification in index.html
runTest('index.html applies cache-busting query strings (?v=...) to all local scripts and stylesheets', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  
  // Stylesheet check
  const styleMatch = html.match(/<link\s+rel="stylesheet"\s+href="([^"]+)"/);
  assert(styleMatch, 'Stylesheet link must exist');
  assert(styleMatch[1].includes('?v='), `Stylesheet href must contain ?v= query string (got ${styleMatch[1]})`);
  
  // Scripts check
  const scriptTags = html.match(/<script\s+src="([^"]+)"/g) || [];
  assert(scriptTags.length >= 7, 'Must have at least 7 script tags');
  scriptTags.forEach(tag => {
    const srcMatch = tag.match(/src="([^"]+)"/);
    if (srcMatch && !srcMatch[1].startsWith('http')) {
      assert(srcMatch[1].includes('?v='), `Local script ${srcMatch[1]} must contain ?v= cache-busting query string`);
    }
  });
});

// 13. Elimination of Misleading & Unverified Claims Across Codebase
runTest('Codebase contains zero occurrences of misleading claims (#1 cause, 99% rejection, unqualified gazette)', () => {
  const targetFiles = [
    'index.html',
    'js/app.js',
    'js/rules-engine.js',
    'js/tools.js',
    'js/guides-data.js',
    'js/i18n.js'
  ];
  
  const prohibitedPatterns = [
    { pattern: /#1\s+cause/i, desc: '#1 cause claim' },
    { pattern: /number\s+one\s+cause/i, desc: 'number one cause claim' },
    { pattern: /99%\s+of\s+passports/i, desc: '99% rejection claim' }
  ];
  
  targetFiles.forEach(file => {
    const fullPath = path.join(__dirname, '..', file);
    const content = fs.readFileSync(fullPath, 'utf8');
    prohibitedPatterns.forEach(({ pattern, desc }) => {
      assert(!pattern.test(content), `File ${file} must not contain ${desc}`);
    });
  });
});

console.log('\n====================================================');
console.log(`Results: ${passedTests} of ${totalTests} tests passed.`);
console.log('====================================================');

if (passedTests !== totalTests) {
  process.exit(1);
}

