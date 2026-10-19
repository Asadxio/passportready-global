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

// 3. Country Rule Packs Schema & Integrity for 27 Verified Nations
runTest('data/country-rules.json conforms to rule schema standards for all 27 verified nations', () => {
  const rulesPath = path.join(__dirname, '..', 'data', 'country-rules.json');
  assert(fs.existsSync(rulesPath), 'country-rules.json must exist');
  const rulePacks = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

  const expectedPacks = [
    'IN', 'US', 'GB', 'CA', 'AU', 'PK', 'BD',
    'DE', 'AE', 'PH', 'FR', 'SA',
    'JP', 'MX', 'BR', 'ZA', 'NG', 'IT',
    'ID', 'IE', 'KE', 'MY', 'NP', 'NZ', 'SG', 'ES', 'LK'
  ];

  assert.strictEqual(Object.keys(rulePacks).length, 27, 'Must have exactly 27 verified country packs');

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

  assert.strictEqual(verifiedCount, 27, 'Exactly 27 verified country packs');
  assert.strictEqual(linkedCount, 0, 'Exactly 0 portal linked unverified countries');
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

// 9. Japan Statutory Post-July 2026 Domestic Fees & Channel Differentiation
runTest('Japan (JP) rule pack models post-July 2026 domestic fees by channel (Online ¥8,900 / Counter ¥9,300 for adults; Online ¥4,400 / Counter ¥4,800 for minors) without applying domestic fees abroad', () => {
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const jp = rulePacks.JP;
  assert(jp, 'JP rule pack must exist');
  assert.strictEqual(jp.country_code, 'JP');
  
  const fees = jp.services.first_passport.fees;
  assert.strictEqual(fees.currency, 'JPY');
  assert.strictEqual(fees.domestic_fees.adult_18_and_over.validity_10_year.online, 8900, 'Adult 10-year online fee must be 8,900 JPY');
  assert.strictEqual(fees.domestic_fees.adult_18_and_over.validity_10_year.counter, 9300, 'Adult 10-year counter fee must be 9,300 JPY');
  assert.strictEqual(fees.domestic_fees.minor_under_18.validity_5_year.online, 4400, 'Minor under 18 online fee must be 4,400 JPY');
  assert.strictEqual(fees.domestic_fees.minor_under_18.validity_5_year.counter, 4800, 'Minor under 18 counter fee must be 4,800 JPY');
  assert.strictEqual(fees.domestic_fees.adult_18_and_over.adult_5_year_discontinued_date, '2026-07-01', 'Adult 5-year discontinued date must be 2026-07-01');
  
  // Consular separation: Domestic fees must NOT be applied to overseas applications
  assert(fees.consular_overseas && fees.consular_overseas.guidance, 'Must have consular fee guidance for JP');
  assert(!fees.consular_overseas.online, 'Domestic online fees must not be placed in consular overseas');
  assert(!fees.consular_overseas.counter, 'Domestic counter fees must not be placed in consular overseas');
  
  // Sources verification
  const sources = jp.services.first_passport.sources || jp.sources;
  assert(sources.some(s => s.url.includes('page22_003986.html') || s.url.includes('pagew_000001_02493.html')), 'Must link official MOFA fee revision notices');
});

// 10. Mexico Statutory 2026 Domestic and Consular Fee Schedule Validation
runTest('Mexico (MX) rule pack reflects official 2026 SRE domestic standard, discounted (900 MXN for 3-yr), and consular USD fees (44, 101, 137, 209 USD)', () => {
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const mx = rulePacks.MX;
  assert(mx, 'MX rule pack must exist');
  
  const fees = mx.services.first_passport.fees;
  assert.strictEqual(fees.currency, 'MXN');
  assert.strictEqual(fees.fiscal_year, 2026);
  
  // Domestic standard fees
  assert.strictEqual(fees.standard_domestic_mxn.validity_1_year, 920, 'Domestic 1-year must be 920 MXN');
  assert.strictEqual(fees.standard_domestic_mxn.validity_3_year, 1795, 'Domestic 3-year must be 1,795 MXN');
  assert.strictEqual(fees.standard_domestic_mxn.validity_6_year, 2440, 'Domestic 6-year must be 2,440 MXN');
  assert.strictEqual(fees.standard_domestic_mxn.validity_10_year, 4280, 'Domestic 10-year must be 4,280 MXN');
  
  // Domestic discounted fees (50%)
  assert.strictEqual(fees.discounted_domestic_mxn.validity_1_year, 460, 'Domestic discounted 1-year must be 460 MXN');
  assert.strictEqual(fees.discounted_domestic_mxn.validity_3_year, 900, 'Domestic discounted 3-year must be 900 MXN (NOT 895)');
  assert.strictEqual(fees.discounted_domestic_mxn.validity_6_year, 1220, 'Domestic discounted 6-year must be 1,220 MXN');
  assert.strictEqual(fees.discounted_domestic_mxn.validity_10_year, 2140, 'Domestic discounted 10-year must be 2,140 MXN');
  
  // Consular overseas USD fees (Standard)
  assert.strictEqual(fees.consular_overseas_usd.standard.validity_1_year, 44, 'Consular 1-year must be $44 USD (NOT $43)');
  assert.strictEqual(fees.consular_overseas_usd.standard.validity_3_year, 101, 'Consular 3-year must be $101 USD (NOT $99)');
  assert.strictEqual(fees.consular_overseas_usd.standard.validity_6_year, 137, 'Consular 6-year must be $137 USD (NOT $135)');
  assert.strictEqual(fees.consular_overseas_usd.standard.validity_10_year, 209, 'Consular 10-year must be $209 USD (NOT $208)');
  
  // Consular overseas USD fees (Discounted 50%)
  assert.strictEqual(fees.consular_overseas_usd.discounted_50_percent.validity_1_year, 22, 'Consular discounted 1-year must be $22 USD');
  assert.strictEqual(fees.consular_overseas_usd.discounted_50_percent.validity_3_year, 50.5, 'Consular discounted 3-year must be $50.50 USD');
  assert.strictEqual(fees.consular_overseas_usd.discounted_50_percent.validity_6_year, 68.5, 'Consular discounted 6-year must be $68.50 USD');
  assert.strictEqual(fees.consular_overseas_usd.discounted_50_percent.validity_10_year, 104.5, 'Consular discounted 10-year must be $104.50 USD');
  
  // Consular overseas USD emergency surcharge schedule (Art. 20 LFD - 30% statutory surcharge)
  assert.strictEqual(fees.consular_overseas_usd.emergency_surcharge_schedule.validity_1_year.base_amount, 44);
  assert.strictEqual(fees.consular_overseas_usd.emergency_surcharge_schedule.validity_1_year.emergency_surcharge, 13);
  assert.strictEqual(fees.consular_overseas_usd.emergency_surcharge_schedule.validity_1_year.total_payable, 57, 'Consular emergency 1-year total must be $57 USD');
  
  assert.strictEqual(fees.consular_overseas_usd.emergency_surcharge_schedule.validity_3_year.base_amount, 101);
  assert.strictEqual(fees.consular_overseas_usd.emergency_surcharge_schedule.validity_3_year.emergency_surcharge, 30);
  assert.strictEqual(fees.consular_overseas_usd.emergency_surcharge_schedule.validity_3_year.total_payable, 131, 'Consular emergency 3-year total must be $131 USD');
  
  assert.strictEqual(fees.consular_overseas_usd.emergency_surcharge_schedule.validity_6_year.base_amount, 137);
  assert.strictEqual(fees.consular_overseas_usd.emergency_surcharge_schedule.validity_6_year.emergency_surcharge, 41);
  assert.strictEqual(fees.consular_overseas_usd.emergency_surcharge_schedule.validity_6_year.total_payable, 178, 'Consular emergency 6-year total must be $178 USD');
  
  assert.strictEqual(fees.consular_overseas_usd.emergency_surcharge_schedule.validity_10_year.base_amount, 209);
  assert.strictEqual(fees.consular_overseas_usd.emergency_surcharge_schedule.validity_10_year.emergency_surcharge, 63);
  assert.strictEqual(fees.consular_overseas_usd.emergency_surcharge_schedule.validity_10_year.total_payable, 272, 'Consular emergency 10-year total must be $272 USD');

  // Consular overseas USD discounted emergency schedule (50% discount + 30% surcharge)
  assert.strictEqual(fees.consular_overseas_usd.discounted_emergency_schedule.validity_1_year.total_payable, 28.5, 'Discounted emergency 1-year total must be $28.50 USD');
  assert.strictEqual(fees.consular_overseas_usd.discounted_emergency_schedule.validity_3_year.total_payable, 65.5, 'Discounted emergency 3-year total must be $65.50 USD');
  assert.strictEqual(fees.consular_overseas_usd.discounted_emergency_schedule.validity_6_year.total_payable, 89, 'Discounted emergency 6-year total must be $89.00 USD');
  assert.strictEqual(fees.consular_overseas_usd.discounted_emergency_schedule.validity_10_year.total_payable, 136, 'Discounted emergency 10-year total must be $136.00 USD');
  
  // Eligibility conditions
  assert(fees.eligibility_conditions.validity_1_year.includes('under three years of age'), '1-year must note issuance restricted to children under 3');
  assert(!fees.eligibility_conditions.validity_1_year.toLowerCase().includes('in emergency cases') && !fees.eligibility_conditions.validity_1_year.toLowerCase().includes('or in emergency'), '1-year validity must not be conflated with emergency appointments');
  assert(fees.eligibility_conditions.emergency_appointments.includes('Article 20 of the Ley Federal de Derechos'), 'Emergency appointment policy must cite Art. 20 LFD');
  assert(fees.eligibility_conditions.emergency_appointments.includes('statutory rounded surcharge (30%)'), 'Emergency appointment policy must document 30% statutory rounded surcharge');
  assert(fees.eligibility_conditions.agricultural_worker_restriction.includes('NOT eligible for the discount on the 10-year passport'), 'Must document agricultural workers excluded from 10-year discount');

  // Phase 3.4 Consular Emergency & Type E Logic Validation
  assert(mx.services.lost_stolen && mx.services.lost_stolen.availability_status === 'available', 'MX must have lost_stolen service');
  assert(mx.services.emergency_passport && mx.services.emergency_passport.availability_status === 'limited', 'MX must have emergency_passport service');
  assert(fees.eligibility_conditions.emergency_appointments.includes('Emergency Type E Passport'), 'Must document Emergency Type E Passport option');
  assert(!fees.eligibility_conditions.emergency_appointments.toLowerCase().includes('only if biometric printing systems are physically unavailable') && !fees.eligibility_conditions.emergency_appointments.toLowerCase().includes('issued only if biometric'), 'Must not claim emergency passports are issued only for technical downtime');
  assert(mx.sources.some(s => s.url.includes('consular-menu/pasaportes')), 'Must link official Embamex consular menu source');
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

// 12. Granular Fee Record Schema & Stale-Rules Prevention Mechanism
runTest('Country rule packs store individual fee records with complete metadata (stale-rules prevention)', () => {
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const testCountries = ['JP', 'MX', 'NG', 'ID', 'IE', 'KE', 'MY', 'NP', 'NZ', 'SG', 'ES', 'LK'];
  
  testCountries.forEach(code => {
    const pack = rulePacks[code];
    const fees = pack.services.first_passport.fees;
    assert(Array.isArray(fees.fee_records) && fees.fee_records.length > 0, `Fee records array required for ${code}`);
    
    fees.fee_records.forEach(rec => {
      assert(rec.currency, `Record must have currency in ${code}`);
      assert((typeof rec.amount === 'number' && rec.amount >= 0) || (typeof rec.total_payable === 'number' && rec.total_payable >= 0), `Record must have non-negative numeric amount in ${code}`);
      assert(rec.applicant_category, `Record must have applicant_category in ${code}`);
      assert(rec.application_channel, `Record must have application_channel in ${code}`);
      assert(rec.validity_period, `Record must have validity_period in ${code}`);
      assert(rec.applicable_conditions, `Record must have applicable_conditions in ${code}`);
      assert(rec.official_source_url && rec.official_source_url.startsWith('http'), `Record must have official source URL in ${code}`);
      assert(/^\d{4}-\d{2}-\d{2}$/.test(rec.date_checked), `Record date_checked must be ISO date in ${code}`);
      assert(rec.verification_status, `Record must have verification_status in ${code}`);

      if (code === 'MX') {
        assert(typeof rec.base_amount === 'number' && rec.base_amount > 0, 'MX record must have base_amount');
        assert(typeof rec.emergency_surcharge === 'number' && rec.emergency_surcharge >= 0, 'MX record must have emergency_surcharge');
        assert(typeof rec.total_payable === 'number' && rec.total_payable > 0, 'MX record must have total_payable');
        assert(rec.discount_eligibility, 'MX record must document discount_eligibility');
        assert(rec.effective_date, 'MX record must specify effective_date');
        assert(rec.verification_date, 'MX record must specify verification_date');
      }
    });
  });
});

// 13. Rules Engine Dynamic Fee Guidance & Channel Resolution
runTest('PassportRulesEngine outputs accurate channel, location, and age fee guidance', () => {
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const engine = new PassportRulesEngine(rulePacks);
  
  // Japan Adult Inside
  const jpAdultRes = engine.evaluate({
    countryCode: 'JP',
    countryName: 'Japan',
    location: 'inside',
    service: 'first_passport',
    age: 'adult'
  });
  const jpAdultFee = jpAdultRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(jpAdultFee.details.includes('¥8,900') && jpAdultFee.details.includes('¥9,300'), 'Japan adult fee must state ¥8,900 online and ¥9,300 counter');
  
  // Japan Minor Inside
  const jpMinorRes = engine.evaluate({
    countryCode: 'JP',
    countryName: 'Japan',
    location: 'inside',
    service: 'first_passport',
    age: 'minor'
  });
  const jpMinorFee = jpMinorRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(jpMinorFee.details.includes('¥4,400') && jpMinorFee.details.includes('¥4,800'), 'Japan minor fee must state ¥4,400 online and ¥4,800 counter');
  
  // Japan Abroad Consular
  const jpAbroadRes = engine.evaluate({
    countryCode: 'JP',
    countryName: 'Japan',
    location: 'abroad',
    service: 'first_passport',
    age: 'adult'
  });
  const jpAbroadFee = jpAbroadRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(jpAbroadFee.details.includes('local host currency') && !jpAbroadFee.details.includes('¥8,900'), 'Japan overseas fee must not substitute domestic amounts');
  
  // Mexico Senior Inside (50% Discount)
  const mxSeniorRes = engine.evaluate({
    countryCode: 'MX',
    countryName: 'Mexico',
    location: 'inside',
    service: 'first_passport',
    age: 'senior'
  });
  const mxSeniorFee = mxSeniorRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(mxSeniorFee.details.includes('MXN 900'), 'Mexico senior discounted fee must include MXN 900 (NOT 895)');
  assert(mxSeniorFee.details.includes('MXN 2,140'), 'Mexico senior discounted fee must include MXN 2,140');
  
  // Mexico Abroad Consular USD
  const mxAbroadRes = engine.evaluate({
    countryCode: 'MX',
    countryName: 'Mexico',
    location: 'abroad',
    service: 'first_passport',
    age: 'adult'
  });
  const mxAbroadFee = mxAbroadRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(mxAbroadFee.details.includes('USD 101') && mxAbroadFee.details.includes('USD 209'), 'Mexico consular fee must state USD 101 and USD 209');
  assert(mxAbroadFee.details.includes('USD 44'), 'Mexico consular fee must state USD 44 for 1-year');
  
  // Mexico Abroad Urgent / Emergency Consular USD Evaluation
  const mxAbroadUrgentRes = engine.evaluate({
    countryCode: 'MX',
    countryName: 'Mexico',
    location: 'abroad',
    service: 'first_passport',
    age: 'adult',
    urgency: 'urgent'
  });
  const mxAbroadUrgentFee = mxAbroadUrgentRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(mxAbroadUrgentFee.details.includes('Total USD 131'), 'Mexico emergency consular fee must state Total USD 131 for 3-year');
  assert(mxAbroadUrgentFee.details.includes('Total USD 178'), 'Mexico emergency consular fee must state Total USD 178 for 6-year');
  assert(mxAbroadUrgentFee.details.includes('Total USD 272'), 'Mexico emergency consular fee must state Total USD 272 for 10-year');
  assert(mxAbroadUrgentFee.details.includes('Total USD 57'), 'Mexico emergency consular fee must state Total USD 57 for 1-year');

  // Mexico Emergency Policy Flag on emergency urgency
  const mxEmergencyRes = engine.evaluate({
    countryCode: 'MX',
    countryName: 'Mexico',
    location: 'abroad',
    service: 'first_passport',
    age: 'adult',
    urgency: 'emergency'
  });
  assert(mxEmergencyRes.flags.some(f => f.code === 'MEXICO_EMERGENCY_APPOINTMENT_POLICY'), 'Must flag MEXICO_EMERGENCY_APPOINTMENT_POLICY for Mexico emergency appointments');

  // Phase 4 & Phase 4.1 Country Evaluations
  // Indonesia Adult Inside Normal
  const idAdultRes = engine.evaluate({
    countryCode: 'ID',
    countryName: 'Indonesia',
    location: 'inside',
    service: 'first_passport',
    age: 'adult'
  });
  const idAdultFee = idAdultRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(idAdultFee.details.includes('IDR 350,000') && idAdultFee.details.includes('IDR 650,000') && idAdultFee.details.includes('IDR 950,000'), 'Indonesia adult fee must mention IDR 350,000, IDR 650,000, and IDR 950,000');
  assert(idAdultFee.details.includes('17+'), 'Indonesia fee must document 17+ validity threshold');

  // Ireland Adult Inside Normal
  const ieAdultRes = engine.evaluate({
    countryCode: 'IE',
    countryName: 'Ireland',
    location: 'inside',
    service: 'first_passport',
    age: 'adult'
  });
  const ieAdultFee = ieAdultRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(ieAdultFee.details.includes('€75') && ieAdultFee.details.includes('€100'), 'Ireland adult fee must mention €75 standard and €100 bundle');

  // Kenya Adult Inside Normal (Phase 4.1 Audited Fees)
  const keAdultRes = engine.evaluate({
    countryCode: 'KE',
    countryName: 'Kenya',
    location: 'inside',
    service: 'first_passport',
    age: 'adult'
  });
  const keAdultFee = keAdultRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(keAdultFee.details.includes('KES 7,550') && keAdultFee.details.includes('KES 9,550') && keAdultFee.details.includes('KES 12,050'), 'Kenya fee must mention Series A KES 7,550, Series B KES 9,550, and Series C KES 12,050');
  assert(keAdultFee.details.includes('KES 20,050'), 'Kenya fee must mention KES 20,050 replacement fee');

  // Malaysia Senior Inside (Concession 5-year & 10-year)
  const mySeniorRes = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'first_passport',
    age: 'senior'
  });
  const mySeniorFee = mySeniorRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(mySeniorFee.details.includes('RM 100') && mySeniorFee.details.includes('RM 175'), 'Malaysia senior fee must mention RM 100 (5-yr) and RM 175 (10-yr) concession');

  // Malaysia Adult Inside Normal (5-year & 10-year options)
  const myAdultRes = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'first_passport',
    age: 'adult'
  });
  const myAdultFee = myAdultRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(myAdultFee.details.includes('RM 200') && myAdultFee.details.includes('RM 350'), 'Malaysia adult fee must mention RM 200 (5-yr) and RM 350 (10-yr)');
  assert(myAdultFee.details.includes('OKU') && myAdultFee.details.includes('RM 0'), 'Malaysia adult fee must document OKU 100% exemption');

  // Nepal Adult Inside Urgent (DoP)
  const npUrgentRes = engine.evaluate({
    countryCode: 'NP',
    countryName: 'Nepal',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'urgent'
  });
  const npUrgentFee = npUrgentRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(npUrgentFee.details.includes('NPR 12,000') && npUrgentFee.details.includes('NPR 5,000'), 'Nepal urgent fee must mention NPR 12,000 DoP urgent and NPR 5,000 standard');

  // New Zealand Adult Inside Urgent (Phase 4.1 Audited Fees)
  const nzUrgentRes = engine.evaluate({
    countryCode: 'NZ',
    countryName: 'New Zealand',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'urgent'
  });
  const nzUrgentFee = nzUrgentRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(nzUrgentFee.details.includes('NZD 494') && nzUrgentFee.details.includes('NZD 247'), 'NZ urgent fee must mention NZD 494 total and NZD 247 standard');
  assert(nzUrgentFee.details.includes('Courier delivery is an additional cost'), 'NZ fee must note courier delivery is an additional cost');

  // New Zealand Emergency After-Hours Callout
  const nzCalloutRes = engine.evaluate({
    countryCode: 'NZ',
    countryName: 'New Zealand',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'emergency'
  });
  const nzCalloutFee = nzCalloutRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(nzCalloutFee.details.includes('NZD 1,001') && nzCalloutFee.details.includes('NZD 898'), 'NZ callout fee must mention NZD 1,001 adult and NZD 898 child');

  // Singapore Adult Inside Normal
  const sgAdultRes = engine.evaluate({
    countryCode: 'SG',
    countryName: 'Singapore',
    location: 'inside',
    service: 'first_passport',
    age: 'adult'
  });
  const sgAdultFee = sgAdultRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(sgAdultFee.details.includes('SGD 70') && sgAdultFee.details.includes('SGD 80'), 'Singapore fee must mention SGD 70 online and SGD 80 counter');

  // Spain Adult Inside Normal
  const esAdultRes = engine.evaluate({
    countryCode: 'ES',
    countryName: 'Spain',
    location: 'inside',
    service: 'first_passport',
    age: 'adult'
  });
  const esAdultFee = esAdultRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(esAdultFee.details.includes('€30.00') && esAdultFee.details.includes('Familias Numerosas'), 'Spain fee must mention €30.00 and Familias Numerosas exemption');

  // Sri Lanka Minor Child Urgent (Phase 4.1 Audited Fee LKR 9,000)
  const lkMinorUrgentRes = engine.evaluate({
    countryCode: 'LK',
    countryName: 'Sri Lanka',
    location: 'inside',
    service: 'first_passport',
    age: 'minor',
    urgency: 'urgent'
  });
  const lkMinorUrgentFee = lkMinorUrgentRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(lkMinorUrgentFee.details.includes('LKR 9,000') && lkMinorUrgentFee.details.includes('LKR 3,000'), 'Sri Lanka minor urgent fee must state LKR 9,000 (NOT 6,000) and LKR 3,000 normal');

  // Sri Lanka Adult Inside Urgent
  const lkUrgentRes = engine.evaluate({
    countryCode: 'LK',
    countryName: 'Sri Lanka',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'urgent'
  });
  const lkUrgentFee = lkUrgentRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(lkUrgentFee.details.includes('LKR 20,000') && lkUrgentFee.details.includes('LKR 10,000'), 'Sri Lanka urgent fee must mention LKR 20,000 one-day and LKR 10,000 normal');
  assert(lkUrgentFee.details.includes('LKR 9,000'), 'Sri Lanka adult urgent text must mention LKR 9,000 for child option');

  // Unverified Country Warning
  const unverifiedRes = engine.evaluate({
    countryCode: 'AF',
    countryName: 'Afghanistan',
    location: 'inside',
    service: 'first_passport',
    age: 'adult'
  });
  const unverifiedFee = unverifiedRes.checklist.find(c => c.id === 'official_fee_payment');
  assert(unverifiedFee.details.includes('Fee Confirmation Required'), 'Unverified country must display Fee Confirmation Required warning');
});

// 14. Asset Cache-Busting Verification in index.html
runTest('index.html applies cache-busting query strings (?v=...) to all local scripts and stylesheets', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  
  // Stylesheet check
  const styleMatch = html.match(/<link\s+rel="stylesheet"\s+href="([^"]+)"/);
  assert(styleMatch, 'Stylesheet link must exist');
  assert(styleMatch[1].includes('?v=20261019_9'), `Stylesheet href must contain ?v=20261019_9 (got ${styleMatch[1]})`);
  
  // Scripts check
  const scriptTags = html.match(/<script\s+src="([^"]+)"/g) || [];
  assert(scriptTags.length >= 7, 'Must have at least 7 script tags');
  scriptTags.forEach(tag => {
    const srcMatch = tag.match(/src="([^"]+)"/);
    if (srcMatch && !srcMatch[1].startsWith('http')) {
      assert(srcMatch[1].includes('?v=20261019_9'), `Local script ${srcMatch[1]} must contain ?v=20261019_9 cache-busting query string`);
    }
  });
});

// 15. Elimination of Misleading & Unverified Claims Across Codebase
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

// 16. Dedicated Phase 4.1 Audited Rule Pack Standards (NZ, KE, ID, MY, LK statutory fee & eligibility assertions)
runTest('Dedicated Phase 4.1 Audited Rule Pack Standards (NZ, KE, ID, MY, LK statutory fee & eligibility assertions)', () => {
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  
  // 1. New Zealand (NZ)
  const nz = rulePacks.NZ;
  assert(nz, 'NZ rule pack must exist');
  const nzFees = nz.services.first_passport.fees;
  assert.strictEqual(nzFees.currency, 'NZD');
  assert.strictEqual(nzFees.standard_service_nzd.adult_10_year, 247, 'NZ standard adult must be NZD 247');
  assert.strictEqual(nzFees.standard_service_nzd.child_5_year, 144, 'NZ standard child must be NZD 144');
  assert.strictEqual(nzFees.urgent_service_nzd.adult_10_year, 494, 'NZ urgent adult total must be NZD 494');
  assert.strictEqual(nzFees.urgent_service_nzd.child_5_year, 391, 'NZ urgent child total must be NZD 391');
  assert.strictEqual(nzFees.after_hours_callout_service_nzd.adult_10_year, 1001, 'NZ after-hours callout adult must be NZD 1,001');
  assert.strictEqual(nzFees.after_hours_callout_service_nzd.child_5_year, 898, 'NZ after-hours callout child must be NZD 898');
  assert(nzFees.courier_delivery_cost_note.includes('additional cost'), 'NZ must document courier delivery is an additional cost');

  // 2. Kenya (KE)
  const ke = rulePacks.KE;
  assert(ke, 'KE rule pack must exist');
  assert.strictEqual(ke.official_portal_url, 'https://immigration.go.ke/', 'KE official portal must be https://immigration.go.ke/');
  const keFees = ke.services.first_passport.fees;
  assert.strictEqual(keFees.currency, 'KES');
  assert.strictEqual(keFees.standard_domestic_kes.ordinary_a_series_34_pages, 7550, 'KE Series A must be KES 7,550');
  assert.strictEqual(keFees.standard_domestic_kes.ordinary_b_series_50_pages, 9550, 'KE Series B must be KES 9,550');
  assert.strictEqual(keFees.standard_domestic_kes.ordinary_c_series_66_pages, 12050, 'KE Series C must be KES 12,050');
  assert.strictEqual(keFees.standard_domestic_kes.replacement_lost_passport, 20050, 'KE lost replacement must be KES 20,050');
  assert.strictEqual(keFees.standard_domestic_kes.replacement_mutilated_passport, 20050, 'KE mutilated replacement must be KES 20,050');

  // 3. Indonesia (ID)
  const id = rulePacks.ID;
  assert(id, 'ID rule pack must exist');
  assert.strictEqual(id.age_bands.adult_minimum_age, 17, 'ID adult minimum age threshold must be 17 (NOT 21)');
  const idFees = id.services.first_passport.fees;
  assert.strictEqual(idFees.currency, 'IDR');
  assert.strictEqual(idFees.passport_fees_by_product_and_validity_idr.paspor_biasa_non_elektronik_5_tahun, 350000, 'ID non-elec 5-yr must be IDR 350,000');
  assert.strictEqual(idFees.passport_fees_by_product_and_validity_idr.paspor_biasa_non_elektronik_10_tahun, 650000, 'ID non-elec 10-yr must be IDR 650,000');
  assert.strictEqual(idFees.passport_fees_by_product_and_validity_idr.paspor_biasa_elektronik_5_tahun, 650000, 'ID electronic 5-yr must be IDR 650,000');
  assert.strictEqual(idFees.passport_fees_by_product_and_validity_idr.paspor_biasa_elektronik_10_tahun, 950000, 'ID electronic 10-yr must be IDR 950,000');
  assert.strictEqual(idFees.express_same_day_surcharge, 1000000, 'ID express surcharge must be IDR 1,000,000');
  assert.strictEqual(idFees.lost_passport_fine, 1000000, 'ID lost fine must be IDR 1,000,000');
  assert.strictEqual(idFees.damaged_passport_fine, 500000, 'ID damaged fine must be IDR 500,000');

  // 4. Malaysia (MY)
  const my = rulePacks.MY;
  assert(my, 'MY rule pack must exist');
  const myFees = my.services.first_passport.fees;
  assert.strictEqual(myFees.currency, 'MYR');
  assert.strictEqual(myFees.fee_schedule_by_category.adult_18_to_59_years.validity_5_year.amount, 200, 'MY adult 5-yr must be RM 200');
  assert.strictEqual(myFees.fee_schedule_by_category.adult_18_to_59_years.validity_10_year.amount, 350, 'MY adult 10-yr must be RM 350');
  assert.strictEqual(myFees.fee_schedule_by_category.senior_citizens_60_and_older.validity_5_year.amount, 100, 'MY senior 5-yr must be RM 100');
  assert.strictEqual(myFees.fee_schedule_by_category.senior_citizens_60_and_older.validity_10_year.amount, 175, 'MY senior 10-yr must be RM 175');
  assert.strictEqual(myFees.fee_schedule_by_category.children_under_12_years.validity_5_year.amount, 100, 'MY child under 12 must be RM 100');
  assert.strictEqual(myFees.fee_schedule_by_category.oku_18_and_older.validity_10_year.amount, 0, 'MY OKU 18+ must be 100% exempt (RM 0)');
  assert.strictEqual(myFees.lost_and_damaged_replacement_schedule.validity_5_year.adult_18_to_59_years.first_loss, 400, 'MY adult 1st loss fine must be RM 400');
  assert.strictEqual(myFees.lost_and_damaged_replacement_schedule.validity_5_year.children_under_12_years.first_loss, 300, 'MY child 1st loss fine must be RM 300');

  // 5. Sri Lanka (LK)
  const lk = rulePacks.LK;
  assert(lk, 'LK rule pack must exist');
  const lkFees = lk.services.first_passport.fees;
  assert.strictEqual(lkFees.currency, 'LKR');
  assert.strictEqual(lkFees.standard_domestic_lkr.all_countries_normal, 10000, 'LK normal must be LKR 10,000');
  assert.strictEqual(lkFees.standard_domestic_lkr.all_countries_urgent_one_day, 20000, 'LK urgent one-day must be LKR 20,000');
  assert.strictEqual(lkFees.standard_domestic_lkr.child_under_16_three_year_normal, 3000, 'LK child 3-yr normal must be LKR 3,000');
  assert.strictEqual(lkFees.standard_domestic_lkr.child_under_16_three_year_urgent_one_day, 9000, 'LK child 3-yr urgent must be LKR 9,000 (NOT 6,000)');
  assert.strictEqual(lkFees.lost_passport_conditional_penalties_lkr.lost_within_1_year_of_issue, 20000, 'LK lost within 1 yr penalty must be LKR 20,000');
  assert.strictEqual(lkFees.lost_passport_conditional_penalties_lkr.lost_after_1_year_with_validity_remaining, 15000, 'LK lost after 1 yr penalty must be LKR 15,000');
  assert.strictEqual(lkFees.lost_passport_conditional_penalties_lkr.lost_after_validity_expired, 0, 'LK lost after expiry penalty must be LKR 0');

  // 6. Reconciliation of All 27 Rule Pack Keys
  const actualKeys = Object.keys(rulePacks).sort();
  const expectedKeys = ['AE', 'AU', 'BD', 'BR', 'CA', 'DE', 'ES', 'FR', 'GB', 'ID', 'IE', 'IN', 'IT', 'JP', 'KE', 'LK', 'MX', 'MY', 'NG', 'NP', 'NZ', 'PH', 'PK', 'SA', 'SG', 'US', 'ZA'].sort();
  assert.deepStrictEqual(actualKeys, expectedKeys, 'Rule pack keys must strictly match AE, BD, BR (not TR, UA, VN)');
});

// 17. Phase 4.2 Comprehensive Statutory Accuracy: Malaysia 16-Case Audit, Indonesia Legal-Marriage Exception, and Multi-Jurisdiction Regressions
runTest('Phase 4.2 Comprehensive Statutory Accuracy: Malaysia 16-Case Audit, Indonesia Legal-Marriage Exception, and Multi-Jurisdiction Regressions', () => {
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const engine = new PassportRulesEngine(rulePacks);

  // ================= MALAYSIA 16-CASE AUDIT =================
  // Case 1: Adult (18-59) 5-year validity -> RM 200
  const c1 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', age: 'adult', validity: '5_year' });
  const f1 = c1.checklist.find(c => c.id === 'official_fee_payment');
  assert(f1.details.includes('RM 200') && !f1.details.includes('RM 350'), 'C1: MY Adult 5-yr must be RM 200');

  // Case 2: Adult (18-59) 10-year validity -> RM 350
  const c2 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', age: 'adult', validity: '10_year' });
  const f2 = c2.checklist.find(c => c.id === 'official_fee_payment');
  assert(f2.details.includes('RM 350') && !f2.details.includes('RM 200'), 'C2: MY Adult 10-yr must be RM 350');

  // Case 3: Child under 12 (age 11) -> 5-yr RM 100 eligible; 10-yr not_eligible
  const c3_5 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', ageExact: 11, validity: '5_year' });
  const f3_5 = c3_5.checklist.find(c => c.id === 'official_fee_payment');
  assert(f3_5.details.includes('RM 100'), 'C3: MY child under 12 5-yr must be RM 100');
  const c3_10 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', ageExact: 11, validity: '10_year' });
  const f3_10 = c3_10.checklist.find(c => c.id === 'official_fee_payment');
  assert(f3_10.details.toLowerCase().includes('not eligible') || f3_10.feeStatus === 'not_eligible', 'C3: MY child under 12 10-yr must be NOT ELIGIBLE');
  assert(c3_10.flags.some(fl => fl.code === 'MALAYSIA_VALIDITY_INELIGIBLE'), 'C3: Must flag MALAYSIA_VALIDITY_INELIGIBLE');

  // Case 4: Age 12 minor -> 5-yr RM 200 eligible; 10-yr not_eligible (statutory transition)
  const c4_5 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', ageExact: 12, validity: '5_year' });
  const f4_5 = c4_5.checklist.find(c => c.id === 'official_fee_payment');
  assert(f4_5.details.includes('RM 200'), 'C4: MY age 12 5-yr must be RM 200 (NOT RM 100)');
  const c4_10 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', ageExact: 12, validity: '10_year' });
  const f4_10 = c4_10.checklist.find(c => c.id === 'official_fee_payment');
  assert(f4_10.details.toLowerCase().includes('not eligible') || f4_10.feeStatus === 'not_eligible', 'C4: MY age 12 10-yr must be NOT ELIGIBLE');

  // Case 5: Minor 13-17 -> 5-yr RM 200 eligible; 10-yr not_eligible
  const c5_5 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', age: 'minor', ageExact: 16, validity: '5_year' });
  const f5_5 = c5_5.checklist.find(c => c.id === 'official_fee_payment');
  assert(f5_5.details.includes('RM 200'), 'C5: MY minor 13-17 5-yr must be RM 200');
  const c5_10 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', age: 'minor', validity: '10_year' });
  const f5_10 = c5_10.checklist.find(c => c.id === 'official_fee_payment');
  assert(f5_10.details.toLowerCase().includes('not eligible') || f5_10.feeStatus === 'not_eligible', 'C5: MY minor 10-yr must be NOT ELIGIBLE');

  // Case 6: Senior (60+) 5-year validity -> RM 100
  const c6 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', age: 'senior', validity: '5_year' });
  const f6 = c6.checklist.find(c => c.id === 'official_fee_payment');
  assert(f6.details.includes('RM 100') && !f6.details.includes('RM 175'), 'C6: MY Senior 5-yr must be RM 100');

  // Case 7: Senior (60+) 10-year validity -> RM 175
  const c7 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', age: 'senior', validity: '10_year' });
  const f7 = c7.checklist.find(c => c.id === 'official_fee_payment');
  assert(f7.details.includes('RM 175') && !f7.details.includes('RM 100'), 'C7: MY Senior 10-yr must be RM 175');

  // Case 8: OKU under 18 -> 5-yr Free (RM 0); 10-yr not_eligible
  const c8_5 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', applicantCategory: 'oku_under_18', validity: '5_year' });
  const f8_5 = c8_5.checklist.find(c => c.id === 'official_fee_payment');
  assert(f8_5.details.includes('RM 0 (Free)') || f8_5.details.includes('RM 0'), 'C8: MY OKU under 18 5-yr must be RM 0');
  const c8_10 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', applicantCategory: 'oku_under_18', validity: '10_year' });
  const f8_10 = c8_10.checklist.find(c => c.id === 'official_fee_payment');
  assert(f8_10.details.toLowerCase().includes('not eligible') || f8_10.feeStatus === 'not_eligible', 'C8: MY OKU under 18 10-yr must be NOT ELIGIBLE');

  // Case 9: OKU 18+ -> 10-yr Free (RM 0); 5-yr not_eligible
  const c9_10 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', applicantCategory: 'oku_18_plus', validity: '10_year' });
  const f9_10 = c9_10.checklist.find(c => c.id === 'official_fee_payment');
  assert(f9_10.details.includes('RM 0 (Free)') || f9_10.details.includes('RM 0'), 'C9: MY OKU 18+ 10-yr must be RM 0');
  const c9_5 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', applicantCategory: 'oku_18_plus', validity: '5_year' });
  const f9_5 = c9_5.checklist.find(c => c.id === 'official_fee_payment');
  assert(f9_5.details.toLowerCase().includes('not eligible') || f9_5.feeStatus === 'not_eligible', 'C9: MY OKU 18+ 5-yr must be NOT ELIGIBLE');

  // Case 10: Overseas degree student under 21 -> 5-yr RM 100; 10-yr not_eligible
  const c10_5 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', applicantCategory: 'students_under_21_degree_abroad', validity: '5_year' });
  const f10_5 = c10_5.checklist.find(c => c.id === 'official_fee_payment');
  assert(f10_5.details.includes('RM 100'), 'C10: MY overseas student 5-yr must be RM 100');
  const c10_10 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', applicantCategory: 'students_under_21_degree_abroad', validity: '10_year' });
  const f10_10 = c10_10.checklist.find(c => c.id === 'official_fee_payment');
  assert(f10_10.details.toLowerCase().includes('not eligible') || f10_10.feeStatus === 'not_eligible', 'C10: MY overseas student 10-yr must be NOT ELIGIBLE');

  // Case 11: Hajj pilgrims -> 5-yr RM 100; 10-yr not_eligible
  const c11_5 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', applicantCategory: 'hajj_pilgrims', validity: '5_year' });
  const f11_5 = c11_5.checklist.find(c => c.id === 'official_fee_payment');
  assert(f11_5.details.includes('RM 100'), 'C11: MY Hajj pilgrim 5-yr must be RM 100');
  const c11_10 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', applicantCategory: 'hajj_pilgrims', validity: '10_year' });
  const f11_10 = c11_10.checklist.find(c => c.id === 'official_fee_payment');
  assert(f11_10.details.toLowerCase().includes('not eligible') || f11_10.feeStatus === 'not_eligible', 'C11: MY Hajj pilgrim 10-yr must be NOT ELIGIBLE');

  // Case 12: Lost 5-year replacement schedule across all tiers
  const mySched5 = rulePacks.MY.services.first_passport.fees.lost_and_damaged_replacement_schedule.validity_5_year;
  assert.strictEqual(mySched5.adult_18_to_59_years.first_loss, 400);
  assert.strictEqual(mySched5.adult_18_to_59_years.second_loss, 700);
  assert.strictEqual(mySched5.adult_18_to_59_years.third_loss, 1200);
  assert.strictEqual(mySched5.children_under_12_years.first_loss, 300);
  assert.strictEqual(mySched5.children_under_12_years.second_loss, 600);
  assert.strictEqual(mySched5.children_under_12_years.third_loss, 1100);
  assert.strictEqual(mySched5.senior_citizens_60_and_older.first_loss, 300);
  assert.strictEqual(mySched5.senior_citizens_60_and_older.second_loss, 600);
  assert.strictEqual(mySched5.senior_citizens_60_and_older.third_loss, 1100);
  assert.strictEqual(mySched5.oku_under_18.first_loss, 200);
  assert.strictEqual(mySched5.oku_under_18.second_loss, 500);
  assert.strictEqual(mySched5.oku_under_18.third_loss, 1000);

  // Case 13: Lost 10-year replacement schedule across all tiers
  const mySched10 = rulePacks.MY.services.first_passport.fees.lost_and_damaged_replacement_schedule.validity_10_year;
  assert.strictEqual(mySched10.adult_18_to_59_years.first_loss, 550);
  assert.strictEqual(mySched10.adult_18_to_59_years.second_loss, 850);
  assert.strictEqual(mySched10.adult_18_to_59_years.third_loss, 1350);
  assert.strictEqual(mySched10.senior_citizens_60_and_older.first_loss, 375);
  assert.strictEqual(mySched10.senior_citizens_60_and_older.second_loss, 675);
  assert.strictEqual(mySched10.senior_citizens_60_and_older.third_loss, 1175);
  assert.strictEqual(mySched10.oku_18_and_older.first_loss, 200);
  assert.strictEqual(mySched10.oku_18_and_older.second_loss, 500);
  assert.strictEqual(mySched10.oku_18_and_older.third_loss, 1000);

  // Case 14: Missing validity on replacement passport requires confirmation, does not silently guess
  const c14 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'lost_stolen', age: 'adult' });
  const f14 = c14.checklist.find(c => c.id === 'official_fee_payment');
  assert(f14.details.includes('Validity Confirmation Required') || f14.details.includes('RM 400') && f14.details.includes('RM 550'), 'C14: Replacement without validity selection must outline both schedules and demand confirmation');
  assert(c14.flags.some(fl => fl.code === 'MALAYSIA_REPLACEMENT_VALIDITY_REQUIRED'), 'C14: Must flag MALAYSIA_REPLACEMENT_VALIDITY_REQUIRED');

  // Case 15: Ineligible combinations marked not_eligible with guidance
  const c15 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', age: 'minor', validity: '10_year' });
  assert(c15.flags.some(fl => fl.code === 'MALAYSIA_VALIDITY_INELIGIBLE'), 'C15: Must flag MALAYSIA_VALIDITY_INELIGIBLE for minor 10-year request');

  // Case 16: Replacement fee is NEVER presented as original passport fee
  const c16_fresh = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', age: 'adult', validity: '5_year' });
  const f16_fresh = c16_fresh.checklist.find(c => c.id === 'official_fee_payment');
  assert(!f16_fresh.details.includes('Replacement Penalty') && !f16_fresh.details.includes('RM 400'), 'C16: Fresh passport fee must not include replacement penalty');
  const c16_lost = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'lost_stolen', age: 'adult', validity: '5_year', lossTier: 'first_loss' });
  const f16_lost = c16_lost.checklist.find(c => c.id === 'official_fee_payment');
  assert(f16_lost.details.includes('RM 400') && f16_lost.details.includes('RM 200 base fee + RM 200 statutory penalty'), 'C16: Replacement fee breakdown must distinguish base fee from statutory penalty');

  // ================= INDONESIA MARRIAGE EXCEPTION & REGRESSIONS =================
  // Case 17: Indonesia 4 product-validity combinations in data model
  const idFees = rulePacks.ID.services.first_passport.fees.passport_fees_by_product_and_validity_idr;
  assert.strictEqual(idFees.paspor_biasa_non_elektronik_5_tahun, 350000);
  assert.strictEqual(idFees.paspor_biasa_non_elektronik_10_tahun, 650000);
  assert.strictEqual(idFees.paspor_biasa_elektronik_5_tahun, 650000);
  assert.strictEqual(idFees.paspor_biasa_elektronik_10_tahun, 950000);

  // Case 18: Indonesia unmarried minor -> 5-year validity only
  const c18 = engine.evaluate({ countryCode: 'ID', countryName: 'Indonesia', location: 'inside', service: 'first_passport', age: 'minor', maritalStatus: 'unmarried' });
  const f18 = c18.checklist.find(c => c.id === 'official_fee_payment');
  assert(f18.details.toLowerCase().includes('5-year validity') && !f18.details.includes('10-year validity IDR 650,000'), 'C18: Unmarried Indonesian minor must only be given 5-year validity options');

  // Case 19: Indonesia legally married minor -> 10-year exception + marriage certificate requirement
  const c19 = engine.evaluate({ countryCode: 'ID', countryName: 'Indonesia', location: 'inside', service: 'first_passport', age: 'minor', maritalStatus: 'married' });
  const f19 = c19.checklist.find(c => c.id === 'official_fee_payment');
  assert(f19.details.toLowerCase().includes('10-year validity') && f19.details.includes('Permenkumham No. 18/2022 Pasal 2A'), 'C19: Married minor must receive 10-year validity option citing Pasal 2A');
  assert(c19.flags.some(fl => fl.code === 'INDONESIA_MARRIED_MINOR_EXCEPTION'), 'C19: Must flag INDONESIA_MARRIED_MINOR_EXCEPTION');
  assert(c19.checklist.some(ch => ch.id === 'id_marriage_proof_under_17'), 'C19: Checklist must include marriage certificate item for under-17 married minor');

  // Case 20: Indonesia minor with unknown marital status -> conditional warning, never assumes marriage
  const c20 = engine.evaluate({ countryCode: 'ID', countryName: 'Indonesia', location: 'inside', service: 'first_passport', age: 'minor' });
  assert(c20.flags.some(fl => fl.code === 'INDONESIA_MARITAL_STATUS_CONFIRMATION'), 'C20: Unknown marital status must trigger confirmation flag');

  // Case 21: Indonesia express same-day surcharge (+IDR 1,000,000) kept distinct from booklet fee
  const c21 = engine.evaluate({ countryCode: 'ID', countryName: 'Indonesia', location: 'inside', service: 'first_passport', age: 'adult', urgency: 'urgent' });
  const f21 = c21.checklist.find(c => c.id === 'official_fee_payment');
  assert(f21.details.includes('+IDR 1,000,000') && f21.details.includes('kept separate from booklet fee'), 'C21: Express surcharge must be listed as separate surcharge');

  // Case 22: Regressions for NZ, KE, LK
  // NZ
  const nzFees = rulePacks.NZ.services.first_passport.fees;
  assert.strictEqual(nzFees.standard_service_nzd.adult_10_year, 247);
  assert.strictEqual(nzFees.standard_service_nzd.child_5_year, 144);
  assert.strictEqual(nzFees.urgent_service_nzd.adult_10_year, 494);
  assert.strictEqual(nzFees.urgent_service_nzd.child_5_year, 391);
  assert.strictEqual(nzFees.after_hours_callout_service_nzd.adult_10_year, 1001);
  assert.strictEqual(nzFees.after_hours_callout_service_nzd.child_5_year, 898);
  // KE
  const keFees = rulePacks.KE.services.first_passport.fees.standard_domestic_kes;
  assert.strictEqual(keFees.ordinary_a_series_34_pages, 7550);
  assert.strictEqual(keFees.ordinary_b_series_50_pages, 9550);
  assert.strictEqual(keFees.ordinary_c_series_66_pages, 12050);
  assert.strictEqual(keFees.replacement_lost_passport, 20050);
  // LK
  const lkFees = rulePacks.LK.services.first_passport.fees;
  assert.strictEqual(lkFees.standard_domestic_lkr.all_countries_normal, 10000);
  assert.strictEqual(lkFees.standard_domestic_lkr.all_countries_urgent_one_day, 20000);
  assert.strictEqual(lkFees.standard_domestic_lkr.child_under_16_three_year_normal, 3000);
  assert.strictEqual(lkFees.standard_domestic_lkr.child_under_16_three_year_urgent_one_day, 9000);
  assert.strictEqual(lkFees.lost_passport_conditional_penalties_lkr.lost_within_1_year_of_issue, 20000);
  assert.strictEqual(lkFees.lost_passport_conditional_penalties_lkr.lost_after_1_year_with_validity_remaining, 15000);
  assert.strictEqual(lkFees.lost_passport_conditional_penalties_lkr.lost_after_validity_expired, 0);
});

// 18. Phase 4.3 Comprehensive Canonical Age, JIM Categories, and ID Verification Status Audit
runTest('Phase 4.3 Comprehensive Canonical Age, JIM Categories, and ID Verification Status Audit', () => {
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const engine = new PassportRulesEngine(rulePacks);

  // 1. Malaysia New Official Statutory Categories (JIM)
  // 1.1 Immigration Officers and Staff (Pegawai dan Kakitangan JIM)
  // Phase 4.3.1: Staff are NOT eligible for 5-year passports. Only 10-year (Gratis / RM 0).

  // DATA-LEVEL integrity checks
  const myRulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const myStaff5yr = myRulePacks.MY.services.first_passport.fees.fee_schedule_by_category.immigration_officers_staff.validity_5_year;
  assert.strictEqual(myStaff5yr.status, 'not_eligible', 'Data: MY staff validity_5_year.status must be not_eligible (Phase 4.3.1)');
  assert.strictEqual(myStaff5yr.amount, null, 'Data: MY staff validity_5_year.amount must be null (Phase 4.3.1)');

  const myStaff5yrRep = myRulePacks.MY.services.first_passport.fees.lost_and_damaged_replacement_schedule.validity_5_year.immigration_officers_staff;
  assert.strictEqual(myStaff5yrRep.status, 'not_eligible', 'Data: MY staff 5yr replacement status must be not_eligible (Phase 4.3.1)');

  const myStaff10yrRep = myRulePacks.MY.services.first_passport.fees.lost_and_damaged_replacement_schedule.validity_10_year.immigration_officers_staff;
  assert.strictEqual(myStaff10yrRep.first_loss, 200, 'Data: MY staff 10yr rep first_loss must be 200');
  assert.strictEqual(myStaff10yrRep.second_loss, 500, 'Data: MY staff 10yr rep second_loss must be 500');
  assert.strictEqual(myStaff10yrRep.third_loss, 1000, 'Data: MY staff 10yr rep third_loss must be 1000');

  // ENGINE: Staff + 5-year = not_eligible
  const myImmigrationFresh = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'first_passport',
    applicantCategory: 'immigration_officers_staff',
    validity: '5_year'
  });
  const myImmFee = myImmigrationFresh.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(myImmFee.feeStatus, 'not_eligible', 'MY immigration staff 5-yr must return feeStatus not_eligible (Phase 4.3.1)');
  assert.strictEqual(myImmFee.feeRecord.status, 'not_eligible', 'MY immigration staff 5-yr feeRecord.status must be not_eligible');
  assert.strictEqual(myImmFee.feeRecord.amount, null, 'MY immigration staff 5-yr feeRecord.amount must be null');
  assert(myImmFee.details.includes('NOT eligible'), 'MY immigration staff 5-yr details must mention NOT eligible');
  assert(myImmigrationFresh.flags.some(f => f.code === 'MALAYSIA_VALIDITY_INELIGIBLE'), 'MY immigration staff 5-yr must emit MALAYSIA_VALIDITY_INELIGIBLE flag');

  // ENGINE: Staff + 10-year = eligible_free RM 0 (Gratis)
  const myImmigration10yr = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'first_passport',
    applicantCategory: 'immigration_officers_staff',
    validity: '10_year'
  });
  const myImmFee10 = myImmigration10yr.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(myImmFee10.feeStatus, 'verified_statutory', 'MY immigration staff 10-yr must return verified_statutory');
  assert.strictEqual(myImmFee10.feeRecord.amount, 0, 'MY immigration staff 10-yr feeRecord.amount must be 0 (Gratis)');

  // ENGINE: Staff 5-year replacement = not_eligible
  const myImmReplacement5yr = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'lost_stolen',
    applicantCategory: 'immigration_officers_staff',
    validity: '5_year',
    lossTier: 'first_loss'
  });
  const myImmRepFee5 = myImmReplacement5yr.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(myImmRepFee5.feeStatus, 'not_eligible', 'MY immigration staff 5-yr replacement must be not_eligible (Phase 4.3.1)');
  assert.strictEqual(myImmRepFee5.feeRecord.status, 'not_eligible', 'MY immigration staff 5-yr replacement feeRecord.status must be not_eligible');
  assert(myImmRepFee5.details.includes('NOT eligible'), 'MY immigration staff 5-yr replacement details must mention NOT eligible');

  // ENGINE: Staff 10-year replacement = official amounts (no "calculated difference" language)
  const myImmReplacement1 = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'lost_stolen',
    applicantCategory: 'immigration_officers_staff',
    validity: '10_year',
    lossTier: 'first_loss'
  });
  const myImmRepFee1 = myImmReplacement1.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(myImmRepFee1.feeStatus, 'verified_statutory', 'MY immigration staff 10-yr 1st loss must be verified_statutory');
  assert.strictEqual(myImmRepFee1.feeRecord.total_replacement_fee, 200, 'MY immigration staff 10-yr 1st loss must be RM 200');
  assert.strictEqual(myImmRepFee1.feeRecord.official_replacement_amount, 200, 'MY staff 10-yr feeRecord must use official_replacement_amount field');
  assert(myImmRepFee1.details.includes('RM 200'), 'MY immigration staff 10-yr 1st loss details must mention RM 200');
  assert(!myImmRepFee1.details.includes('calculated difference'), 'MY immigration staff 10-yr details must NOT use calculated difference language');

  const myImmReplacement2 = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'lost_stolen',
    applicantCategory: 'immigration_officers_staff',
    validity: '10_year',
    lossTier: 'second_loss'
  });
  assert.strictEqual(myImmReplacement2.checklist.find(c => c.id === 'official_fee_payment').feeRecord.total_replacement_fee, 500, 'MY immigration staff 10-yr 2nd loss must be RM 500');

  // 1.2 PMD / PMR Diplomatic & Official Passports (Gratis 5-yr, 10-yr, replacements)
  const myPmdFresh = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'first_passport',
    applicantCategory: 'pmd_pmr_diplomatic_official',
    validity: '10_year'
  });
  const myPmdFee = myPmdFresh.checklist.find(c => c.id === 'official_fee_payment');
  assert(myPmdFee.details.includes('100% EXEMPT (FREE / RM 0)') && myPmdFee.feeRecord.amount === 0, 'MY PMD/PMR 10-yr must be RM 0');

  const myPmdReplacement = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'lost_stolen',
    applicantCategory: 'pmd_pmr_diplomatic_official',
    validity: '5_year',
    lossTier: 'second_loss'
  });
  const myPmdRepFee = myPmdReplacement.checklist.find(c => c.id === 'official_fee_payment');
  assert(myPmdRepFee.details.includes('Gratis / RM 0 across all tiers') && myPmdRepFee.feeRecord.total_replacement_fee === 0, 'MY PMD/PMR replacement must be RM 0');

  // 1.3 PMA Dependents (Gratis 5-yr, 10-yr, replacements)
  const myPmaFresh = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'first_passport',
    applicantCategory: 'pma_dependents',
    validity: '5_year'
  });
  const myPmaFee = myPmaFresh.checklist.find(c => c.id === 'official_fee_payment');
  assert(myPmaFee.details.includes('100% EXEMPT (FREE / RM 0)') && myPmaFee.feeRecord.amount === 0, 'MY PMA dependents must be RM 0');

  // 2. Indonesia Unknown Marital Status Verification State
  const idUnknown = engine.evaluate({
    countryCode: 'ID',
    countryName: 'Indonesia',
    location: 'inside',
    service: 'first_passport',
    ageExact: 16
    // maritalStatus deliberately omitted
  });
  const idUnknownFee = idUnknown.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(idUnknown.country.isVerified, true, 'ID country pack must remain verified');
  assert.strictEqual(idUnknownFee.feeStatus, 'confirmation_required', 'ID minor with unconfirmed marital status must return feeStatus confirmation_required');
  assert.strictEqual(idUnknownFee.feeRecord.status, 'confirmation_required', 'ID fee record status must be confirmation_required');
  assert(idUnknown.flags.some(f => f.code === 'INDONESIA_MARITAL_STATUS_CONFIRMATION'), 'Must include INDONESIA_MARITAL_STATUS_CONFIRMATION flag');

  // 3. Exact Age Precedence Over Broad Radio Buttons
  // 3.1 Adult radio ('adult') overridden by exactAge 15 -> triggers minor parental consent in US
  const usMinorOverride = engine.evaluate({
    countryCode: 'US',
    countryName: 'United States',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    ageExact: 15
  });
  assert.strictEqual(usMinorOverride.applicant.isMinor, true, 'Exact age 15 must override adult radio to minor');
  assert(usMinorOverride.flags.some(f => f.code === 'MINOR_PARENTAL_CONSENT'), 'Exact age 15 must trigger parental consent flag');

  // 3.2 Minor radio ('minor') overridden by exactAge 18 -> treated as adult
  const usAdultOverride = engine.evaluate({
    countryCode: 'US',
    countryName: 'United States',
    location: 'inside',
    service: 'first_passport',
    age: 'minor',
    ageExact: 18
  });
  assert.strictEqual(usAdultOverride.applicant.isAdult, true, 'Exact age 18 must override minor radio to adult');
  assert(!usAdultOverride.flags.some(f => f.code === 'MINOR_PARENTAL_CONSENT'), 'Exact age 18 must NOT trigger parental consent flag');

  // 4. Age Boundary Verifications (NZ, LK, MY, ID)
  // NZ: under 16 is child (NZD 144 standard); 16+ is adult (NZD 247 standard)
  const nz15 = engine.evaluate({ countryCode: 'NZ', countryName: 'New Zealand', location: 'inside', service: 'first_passport', ageExact: 15 });
  const nz15Fee = nz15.checklist.find(c => c.id === 'official_fee_payment');
  assert(nz15Fee.details.includes('NZD 144'), 'NZ age 15 must receive child standard fee NZD 144');

  const nz16 = engine.evaluate({ countryCode: 'NZ', countryName: 'New Zealand', location: 'inside', service: 'first_passport', ageExact: 16 });
  const nz16Fee = nz16.checklist.find(c => c.id === 'official_fee_payment');
  assert(nz16Fee.details.includes('NZD 247'), 'NZ age 16 must receive adult standard fee NZD 247');

  // LK: under 16 is child (LKR 3,000 normal / 9,000 urgent); 16+ is adult (LKR 10,000 normal / 20,000 urgent)
  const lk15 = engine.evaluate({ countryCode: 'LK', countryName: 'Sri Lanka', location: 'inside', service: 'first_passport', ageExact: 15 });
  const lk15Fee = lk15.checklist.find(c => c.id === 'official_fee_payment');
  assert(lk15Fee.details.includes('LKR 3,000'), 'LK age 15 must receive child 3-yr normal fee LKR 3,000');

  const lk16 = engine.evaluate({ countryCode: 'LK', countryName: 'Sri Lanka', location: 'inside', service: 'first_passport', ageExact: 16 });
  const lk16Fee = lk16.checklist.find(c => c.id === 'official_fee_payment');
  assert(lk16Fee.details.includes('LKR 10,000'), 'LK age 16 must receive adult normal fee LKR 10,000');

  // ID: under 17 is minor; 17+ is adult
  const id16 = engine.evaluate({ countryCode: 'ID', countryName: 'Indonesia', location: 'inside', service: 'first_passport', ageExact: 16, maritalStatus: 'unmarried' });
  assert.strictEqual(id16.applicant.isMinor, true, 'ID age 16 must be minor');

  const id17 = engine.evaluate({ countryCode: 'ID', countryName: 'Indonesia', location: 'inside', service: 'first_passport', ageExact: 17 });
  assert.strictEqual(id17.applicant.isAdult, true, 'ID age 17 must be adult');
  assert.strictEqual(id17.applicant.isMinor, false, 'ID age 17 is not minor');

  // MY: exact age boundaries 11, 12, 17, 18, 59, 60
  const my11 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', ageExact: 11, validity: '5_year' });
  assert.strictEqual(my11.checklist.find(c => c.id === 'official_fee_payment').feeRecord.amount, 100, 'MY age 11 must be RM 100');

  const my12 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', ageExact: 12, validity: '5_year' });
  assert.strictEqual(my12.checklist.find(c => c.id === 'official_fee_payment').feeRecord.amount, 200, 'MY age 12 must be RM 200');

  const my17 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', ageExact: 17, validity: '5_year' });
  assert.strictEqual(my17.checklist.find(c => c.id === 'official_fee_payment').feeRecord.amount, 200, 'MY age 17 must be RM 200');

  const my18 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', ageExact: 18, validity: '10_year' });
  assert.strictEqual(my18.checklist.find(c => c.id === 'official_fee_payment').feeRecord.amount, 350, 'MY age 18 10-yr must be RM 350');

  const my59 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', ageExact: 59, validity: '5_year' });
  assert.strictEqual(my59.checklist.find(c => c.id === 'official_fee_payment').feeRecord.amount, 200, 'MY age 59 must be RM 200');

  const my60 = engine.evaluate({ countryCode: 'MY', countryName: 'Malaysia', location: 'inside', service: 'first_passport', ageExact: 60, validity: '5_year' });
  assert.strictEqual(my60.checklist.find(c => c.id === 'official_fee_payment').feeRecord.amount, 100, 'MY age 60 must be RM 100');
});

console.log('\n====================================================');
console.log(`Results: ${passedTests} of ${totalTests} tests passed.`);
console.log('====================================================');

if (passedTests !== totalTests) {
  process.exit(1);
}

