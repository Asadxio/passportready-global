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
  assert(styleMatch[1].includes('?v=20261020_01'), `Stylesheet href must contain ?v=20261020_01 (got ${styleMatch[1]})`);
  
  // Scripts check
  const scriptTags = html.match(/<script\s+src="([^"]+)"/g) || [];
  assert(scriptTags.length >= 7, 'Must have at least 7 script tags');
  scriptTags.forEach(tag => {
    const srcMatch = tag.match(/src="([^"]+)"/);
    if (srcMatch && !srcMatch[1].startsWith('http')) {
      assert(srcMatch[1].includes('?v=20261020_01'), `Local script ${srcMatch[1]} must contain ?v=20261020_01 cache-busting query string`);
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
  assert.strictEqual(myImmFee10.feeRecord.status, 'eligible_free', 'MY immigration staff 10-yr feeRecord.status must be eligible_free');
  // Verify no replacement amount or penalty is presented as an original passport fee
  assert.strictEqual(myImmFee10.feeRecord.total_replacement_fee, undefined, 'MY staff original passport feeRecord must not present total_replacement_fee');
  assert.strictEqual(myImmFee10.feeRecord.official_replacement_amount, undefined, 'MY staff original passport feeRecord must not present official_replacement_amount');
  assert.strictEqual(myImmFee10.feeRecord.statutory_penalty, undefined, 'MY staff original passport feeRecord must not present statutory_penalty');
  assert(!myImmFee10.details.toLowerCase().includes('replacement'), 'MY staff original passport details must not describe replacement fees');

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
  assert(myImmRepFee5.details.includes('NOT eligible') && (myImmRepFee5.details.includes('10-year') || myImmRepFee5.details.includes('10-year validity')), 'MY immigration staff 5-yr replacement details must state 10-year-only restriction');

  // ENGINE: Staff 10-year replacement at all three tiers = official amounts (no "calculated difference" language)
  // Tier 1: First loss = RM 200
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

  // Tier 2: Second loss = RM 500
  const myImmReplacement2 = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'lost_stolen',
    applicantCategory: 'immigration_officers_staff',
    validity: '10_year',
    lossTier: 'second_loss'
  });
  const myImmRepFee2 = myImmReplacement2.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(myImmRepFee2.feeStatus, 'verified_statutory', 'MY immigration staff 10-yr 2nd loss must be verified_statutory');
  assert.strictEqual(myImmRepFee2.feeRecord.total_replacement_fee, 500, 'MY immigration staff 10-yr 2nd loss must be RM 500');
  assert.strictEqual(myImmRepFee2.feeRecord.official_replacement_amount, 500, 'MY staff 10-yr 2nd loss feeRecord must use official_replacement_amount field');
  assert(myImmRepFee2.details.includes('RM 500'), 'MY immigration staff 10-yr 2nd loss details must mention RM 500');
  assert(!myImmRepFee2.details.includes('calculated difference'), 'MY immigration staff 10-yr 2nd loss details must NOT use calculated difference language');

  // Tier 3: Third or subsequent loss = RM 1,000
  const myImmReplacement3 = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'lost_stolen',
    applicantCategory: 'immigration_officers_staff',
    validity: '10_year',
    lossTier: 'third_loss'
  });
  const myImmRepFee3 = myImmReplacement3.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(myImmRepFee3.feeStatus, 'verified_statutory', 'MY immigration staff 10-yr 3rd loss must be verified_statutory');
  assert.strictEqual(myImmRepFee3.feeRecord.total_replacement_fee, 1000, 'MY immigration staff 10-yr 3rd loss must be RM 1,000');
  assert.strictEqual(myImmRepFee3.feeRecord.official_replacement_amount, 1000, 'MY staff 10-yr 3rd loss feeRecord must use official_replacement_amount field');
  assert(myImmRepFee3.details.includes('RM 1000') || myImmRepFee3.details.includes('RM 1,000'), 'MY immigration staff 10-yr 3rd loss details must mention RM 1000');
  assert(!myImmRepFee3.details.includes('calculated difference'), 'MY immigration staff 10-yr 3rd loss details must NOT use calculated difference language');

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

// 19. Phase 4.3.2 Country Directory Dynamic Filter Counts and Consistency Audit
runTest('Phase 4.3.2 Directory filter counts derive dynamically from country dataset without hardcoded stale counts', () => {
  const countryDataModule = require('../data/country-data.js');
  const countries = countryDataModule.PASSPORT_COUNTRIES;
  assert(Array.isArray(countries), 'PASSPORT_COUNTRIES must be an array');
  assert.strictEqual(countries.length, 249, 'Must have exactly 249 indexed countries/territories');

  // Compute expected counts directly from dataset
  const expectedTotal = countries.length;
  const expectedVerified = countries.filter(c => c.portal_status === 'verified').length;
  const expectedLinked = countries.filter(c => c.portal_status === 'official_portal_linked_rules_not_fully_audited').length;
  const expectedResearch = countries.filter(c => c.portal_status === 'official_source_needs_research').length;

  assert.strictEqual(expectedTotal, 249, 'Dataset must have 249 entries');
  assert.strictEqual(expectedVerified, 27, 'Dataset must have 27 verified countries');
  assert.strictEqual(expectedLinked, 0, 'Dataset must have 0 partially audited linked portals');
  assert.strictEqual(expectedResearch, 222, 'Dataset must have 222 awaiting research');
  assert.strictEqual(expectedVerified + expectedLinked + expectedResearch, expectedTotal, 'Status counts must partition all entries');

  // Assert index.html does not contain stale hardcoded counts
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(!html.includes('Verified Rules (18)'), 'index.html must NOT contain stale "Verified Rules (18)"');
  assert(!html.includes('Portal Linked (9)'), 'index.html must NOT contain stale "Portal Linked (9)"');
  assert(!html.includes('All (249)'), 'index.html filter button must NOT hardcode count inside button text');
  assert(!html.includes('Awaiting Research (222)'), 'index.html filter button must NOT hardcode count inside button text');

  // Assert filter buttons structure in index.html
  assert(html.includes('data-dir-filter="all"'), 'index.html must have data-dir-filter="all"');
  assert(html.includes('data-dir-filter="verified"'), 'index.html must have data-dir-filter="verified"');
  assert(html.includes('data-dir-filter="linked"'), 'index.html must have data-dir-filter="linked"');
  assert(html.includes('data-dir-filter="needs_research"'), 'index.html must have data-dir-filter="needs_research"');
  assert(html.includes('dir-filter-count'), 'index.html must provide dir-filter-count spans for dynamic insertion');

  // Test dynamic count calculation via app.js
  const vm = require('vm');
  const appJsCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');
  const sandbox = {
    PassportRulesEngine: class { constructor() {} },
    window: {
      PASSPORT_COUNTRIES: countries,
      COUNTRY_DATA: countries,
      addEventListener: () => {}
    },
    document: {
      getElementById: () => null,
      querySelector: () => null,
      querySelectorAll: () => [],
      addEventListener: () => {},
      readyState: 'complete'
    },
    localStorage: { getItem: () => null, setItem: () => {} }
  };
  vm.runInNewContext(appJsCode, sandbox);

  assert(sandbox.window.PassportApp, 'window.PassportApp must be exported');
  assert(typeof sandbox.window.PassportApp.getDirectoryCounts === 'function', 'getDirectoryCounts must be exported on PassportApp');
  const computedCounts = sandbox.window.PassportApp.getDirectoryCounts();
  assert.strictEqual(computedCounts.all, 249, 'Computed all count must be 249');
  assert.strictEqual(computedCounts.verified, 27, 'Computed verified count must be 27');
  assert.strictEqual(computedCounts.linked, 0, 'Computed linked count must be 0');
  assert.strictEqual(computedCounts.needs_research, 222, 'Computed needs_research count must be 222');

  // Verify getCountryByQuery works across name, alpha2, alpha3, official_name, search_terms
  const byName = sandbox.window.PassportApp.getCountryByQuery('Malaysia');
  assert(byName && byName.alpha2 === 'MY', 'getCountryByQuery must resolve by name');

  const byAlpha2 = sandbox.window.PassportApp.getCountryByQuery('MY');
  assert(byAlpha2 && byAlpha2.name === 'Malaysia', 'getCountryByQuery must resolve by alpha2');

  const byAlpha3 = sandbox.window.PassportApp.getCountryByQuery('MYS');
  assert(byAlpha3 && byAlpha3.name === 'Malaysia', 'getCountryByQuery must resolve by alpha3');

  const byOfficial = sandbox.window.PassportApp.getCountryByQuery('Republic of India');
  assert(byOfficial && byOfficial.alpha2 === 'IN', 'getCountryByQuery must resolve by official_name');

  const bySearchTerm = sandbox.window.PassportApp.getCountryByQuery('USA');
  assert(bySearchTerm && bySearchTerm.alpha2 === 'US', 'getCountryByQuery must resolve by search_terms alias USA');

  const bySearchTerm2 = sandbox.window.PassportApp.getCountryByQuery('UK');
  assert(bySearchTerm2 && bySearchTerm2.alpha2 === 'GB', 'getCountryByQuery must resolve by search_terms alias UK');
});

// 20. Phase 4.3.3 Explicit Service-Level Coverage Status, Service Mapping Audit, and Result Protection
runTest('Phase 4.3.3 Service-level coverage status, score protections, and safe badge assertions', () => {
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const engine = new PassportRulesEngine(rulePacks);

  // 1. Verified Country + Verified Service
  const inVerified = engine.evaluate({
    countryCode: 'IN',
    countryName: 'India',
    location: 'inside',
    service: 'first_passport',
    age: 'adult'
  });
  assert(inVerified.serviceCoverage, 'Result must contain serviceCoverage');
  assert.strictEqual(inVerified.serviceCoverage.status, 'verified', 'India first_passport must be verified');
  assert.strictEqual(inVerified.serviceCoverage.isFullyVerified, true, 'India first_passport must be fully verified');
  assert.strictEqual(inVerified.statusLabel, 'PREPARED', 'India clean first_passport can achieve PREPARED');
  assert(inVerified.serviceCoverage.officialSourceUrl, 'Verified service must provide official source URL');
  assert(!inVerified.flags.some(f => f.code === 'SERVICE_GENERAL_GUIDANCE_ONLY' || f.code === 'SERVICE_AWAITING_RESEARCH'), 'Verified service must not emit guidance warning flag');

  // 2. Verified Country + Uncodified Service (General Guidance)
  // US Emergency Travel
  const usEmergency = engine.evaluate({
    countryCode: 'US',
    countryName: 'United States',
    location: 'inside',
    service: 'emergency_travel',
    age: 'adult'
  });
  assert.strictEqual(usEmergency.serviceCoverage.status, 'general_guidance', 'US emergency_travel must be general_guidance');
  assert.strictEqual(usEmergency.serviceCoverage.isFullyVerified, false, 'US emergency_travel is not fully verified');
  assert(usEmergency.readinessScore <= 75, 'General guidance score must be capped <= 75%');
  assert.strictEqual(usEmergency.statusLabel, 'GENERAL_GUIDANCE_ONLY', 'General guidance must have statusLabel GENERAL_GUIDANCE_ONLY');
  assert.notStrictEqual(usEmergency.statusLabel, 'PREPARED', 'General guidance must never be PREPARED');
  assert(usEmergency.flags.some(f => f.code === 'SERVICE_GENERAL_GUIDANCE_ONLY'), 'Must emit SERVICE_GENERAL_GUIDANCE_ONLY flag');

  // GB Name Correction
  const gbName = engine.evaluate({
    countryCode: 'GB',
    countryName: 'United Kingdom',
    location: 'inside',
    service: 'name_correction',
    age: 'adult'
  });
  assert.strictEqual(gbName.serviceCoverage.status, 'general_guidance', 'GB name_correction must be general_guidance');
  assert(gbName.readinessScore <= 75, 'GB name_correction score must be capped <= 75%');
  assert.strictEqual(gbName.statusLabel, 'GENERAL_GUIDANCE_ONLY', 'GB name_correction statusLabel must be GENERAL_GUIDANCE_ONLY');

  // BD Renewal / Reissue (BD has no renewal_reissue in rule pack)
  const bdRenewal = engine.evaluate({
    countryCode: 'BD',
    countryName: 'Bangladesh',
    location: 'inside',
    service: 'renewal_reissue',
    age: 'adult'
  });
  assert.strictEqual(bdRenewal.serviceCoverage.status, 'general_guidance', 'BD renewal_reissue must be general_guidance');
  assert.notStrictEqual(bdRenewal.statusLabel, 'PREPARED', 'BD renewal must not be PREPARED');

  // 3. Partial Service Coverage
  // MX Emergency Travel (maps to emergency_passport with Art. 20 LFD surcharge)
  const mxEmergency = engine.evaluate({
    countryCode: 'MX',
    countryName: 'Mexico',
    location: 'abroad',
    service: 'emergency_travel',
    age: 'adult'
  });
  assert.strictEqual(mxEmergency.serviceCoverage.status, 'partial', 'MX emergency_travel must be partial');
  assert.strictEqual(mxEmergency.serviceCoverage.rulePackKey, 'emergency_passport', 'MX emergency_travel must link to emergency_passport rulePackKey');
  assert(mxEmergency.readinessScore <= 80, 'Partial service score must be capped <= 80%');
  assert.strictEqual(mxEmergency.statusLabel, 'VERIFICATION_RECOMMENDED', 'Partial service statusLabel must be VERIFICATION_RECOMMENDED');
  assert.notStrictEqual(mxEmergency.statusLabel, 'PREPARED', 'Partial service must never be PREPARED');
  assert(mxEmergency.flags.some(f => f.code === 'SERVICE_COVERAGE_PARTIAL'), 'Must emit SERVICE_COVERAGE_PARTIAL flag');
  assert(mxEmergency.serviceCoverage.summary.includes('Art. 20 LFD'), 'MX summary must cite Art. 20 LFD');

  // US Lost/Stolen
  const usLost = engine.evaluate({
    countryCode: 'US',
    countryName: 'United States',
    location: 'inside',
    service: 'lost_stolen',
    age: 'adult'
  });
  assert.strictEqual(usLost.serviceCoverage.status, 'partial', 'US lost_stolen must be partial');
  assert(usLost.readinessScore <= 80, 'US lost_stolen score must be capped <= 80%');
  assert.strictEqual(usLost.statusLabel, 'VERIFICATION_RECOMMENDED');

  // NZ Urgent Expedited
  const nzUrgent = engine.evaluate({
    countryCode: 'NZ',
    countryName: 'New Zealand',
    location: 'inside',
    service: 'urgent_expedited',
    age: 'adult'
  });
  assert.strictEqual(nzUrgent.serviceCoverage.status, 'partial', 'NZ urgent_expedited must be partial');
  assert(nzUrgent.readinessScore <= 80, 'NZ urgent_expedited score must be capped <= 80%');
  assert.strictEqual(nzUrgent.statusLabel, 'VERIFICATION_RECOMMENDED');

  // 4. Country Awaiting Research
  const afFirst = engine.evaluate({
    countryCode: 'AF',
    countryName: 'Afghanistan',
    location: 'inside',
    service: 'first_passport',
    age: 'adult'
  });
  assert.strictEqual(afFirst.serviceCoverage.status, 'awaiting_research', 'AF first_passport must be awaiting_research');
  assert.strictEqual(afFirst.serviceCoverage.isFullyVerified, false, 'AF is not verified');
  assert(afFirst.readinessScore <= 70, 'Awaiting research score must be capped <= 70%');
  assert.strictEqual(afFirst.statusLabel, 'OFFICIAL_CONFIRMATION_RECOMMENDED', 'AF statusLabel must be OFFICIAL_CONFIRMATION_RECOMMENDED');
  assert.notStrictEqual(afFirst.statusLabel, 'PREPARED', 'Awaiting research must never be PREPARED');
  assert(afFirst.flags.some(f => f.code === 'SERVICE_AWAITING_RESEARCH'), 'Must emit SERVICE_AWAITING_RESEARCH flag');

  const zwRenewal = engine.evaluate({
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    location: 'inside',
    service: 'renewal_reissue',
    age: 'adult'
  });
  assert.strictEqual(zwRenewal.serviceCoverage.status, 'awaiting_research', 'ZW renewal must be awaiting_research');
  assert(zwRenewal.readinessScore <= 70, 'ZW renewal score must be capped <= 70%');
  assert.strictEqual(zwRenewal.statusLabel, 'OFFICIAL_CONFIRMATION_RECOMMENDED');

  // 5. Lost / Damaged Services Not Fully Covered
  const deLost = engine.evaluate({
    countryCode: 'DE',
    countryName: 'Germany',
    location: 'inside',
    service: 'lost_stolen',
    age: 'adult'
  });
  assert.strictEqual(deLost.serviceCoverage.status, 'general_guidance', 'DE lost_stolen must be general_guidance');

  const myDamaged = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'damaged',
    age: 'adult'
  });
  assert.strictEqual(myDamaged.serviceCoverage.status, 'partial', 'MY damaged must be partial');
  assert(myDamaged.serviceCoverage.supportedChecks.some(c => c.includes('replacement')), 'MY damaged supported checks must note replacement schedule');

  // 6. Preservation of Preserved Statutory Findings (Malaysia JIM Staff & Indonesia Marital Status)
  const myStaff10Rep = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'lost_stolen',
    applicantCategory: 'immigration_officers_staff',
    validity: '10_year',
    lossTier: 'first_loss'
  });
  const myStaffFee = myStaff10Rep.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(myStaffFee.feeStatus, 'verified_statutory', 'MY staff replacement must remain verified_statutory');
  assert.strictEqual(myStaffFee.feeRecord.total_replacement_fee, 200, 'MY staff first loss must remain RM 200');

  const idMarital = engine.evaluate({
    countryCode: 'ID',
    countryName: 'Indonesia',
    location: 'inside',
    service: 'first_passport',
    ageExact: 16
  });
  assert.strictEqual(idMarital.checklist.find(c => c.id === 'official_fee_payment').feeStatus, 'confirmation_required', 'ID minor unknown marital status must remain confirmation_required');

  // 7. Check UI Coverage Card rendering via App
  const appJsCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');
  assert(appJsCode.includes('resServiceCoverageCard'), 'app.js must render into resServiceCoverageCard');
  assert(appJsCode.includes('Service Verification Audit'), 'app.js must include Service Verification Audit section title');
  assert(appJsCode.includes('Readiness score reflects document preparation completeness only'), 'app.js must include issuance disclaimer');
  assert(appJsCode.includes("badgeEl.className = 'status-pill status-verified'"), 'app.js must assign status-verified ONLY when statusLabel === PREPARED');
});

// 21. Phase 4.3.4 Multi-Dimensional Coverage (Base Service, Processing Urgency, Application Channel)
runTest('Phase 4.3.4 Three-dimensional coverage audit, processing urgency and application channel safeguards', () => {
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const engine = new PassportRulesEngine(rulePacks);

  // 1. Verified base service + standard processing + domestic application
  // (India first passport + standard + inside)
  const inStd = engine.evaluate({
    countryCode: 'IN',
    countryName: 'India',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'standard'
  });
  assert.strictEqual(inStd.serviceCoverage.status, 'verified', 'IN first_passport + standard + inside must be verified');
  assert.strictEqual(inStd.serviceCoverage.isFullyVerified, true, 'isFullyVerified must be true');
  assert.strictEqual(inStd.serviceCoverage.dimensions.service.status, 'verified');
  assert.strictEqual(inStd.serviceCoverage.dimensions.urgency.status, 'verified');
  assert.strictEqual(inStd.serviceCoverage.dimensions.channel.status, 'verified');
  assert.strictEqual(inStd.statusLabel, 'PREPARED', 'Clean verified profile must reach PREPARED');
  assert.strictEqual(inStd.readinessScore, 100, 'Clean verified profile can reach 100%');

  // 2. Verified base service + partially covered urgent processing
  // (India first passport + urgent/Tatkaal + inside)
  const inTatkaal = engine.evaluate({
    countryCode: 'IN',
    countryName: 'India',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'urgent'
  });
  assert.strictEqual(inTatkaal.serviceCoverage.dimensions.service.status, 'verified');
  assert.strictEqual(inTatkaal.serviceCoverage.dimensions.urgency.status, 'partial', 'IN urgent processing must be partial (Tatkaal quotas/exclusions vary)');
  assert.strictEqual(inTatkaal.serviceCoverage.dimensions.channel.status, 'verified');
  assert.strictEqual(inTatkaal.serviceCoverage.status, 'partial', 'Combined status must be partial when route is partial');
  assert.strictEqual(inTatkaal.serviceCoverage.isFullyVerified, false, 'isFullyVerified must be false for partial route');
  assert(inTatkaal.readinessScore <= 80, 'Score must be capped at <= 80% for partial coverage');
  assert.strictEqual(inTatkaal.statusLabel, 'VERIFICATION_RECOMMENDED', 'Status must be VERIFICATION_RECOMMENDED');
  assert.notStrictEqual(inTatkaal.statusLabel, 'PREPARED', 'Must NEVER be PREPARED for partial route');
  assert(inTatkaal.flags.some(f => f.code === 'ROUTE_COVERAGE_PARTIAL'), 'Must emit ROUTE_COVERAGE_PARTIAL flag');

  // NZ Urgent (NZD 494/391 fee verified, but booking/courier depends on post)
  const nzUrgentRoute = engine.evaluate({
    countryCode: 'NZ',
    countryName: 'New Zealand',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'urgent'
  });
  assert.strictEqual(nzUrgentRoute.serviceCoverage.dimensions.urgency.status, 'partial');
  assert.strictEqual(nzUrgentRoute.serviceCoverage.status, 'partial');
  assert(nzUrgentRoute.readinessScore <= 80);

  // 3. Verified base service + unsupported emergency processing
  // (Germany + first passport + urgent/emergency processing where dedicated coverage is not present)
  const deUrgent = engine.evaluate({
    countryCode: 'DE',
    countryName: 'Germany',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'urgent'
  });
  assert.strictEqual(deUrgent.serviceCoverage.dimensions.service.status, 'verified');
  assert.strictEqual(deUrgent.serviceCoverage.dimensions.urgency.status, 'general_guidance', 'DE urgent processing must be general_guidance');
  assert.strictEqual(deUrgent.serviceCoverage.status, 'general_guidance', 'Combined status must be general_guidance');
  assert(deUrgent.readinessScore <= 75, 'Score must be capped at <= 75%');
  assert.strictEqual(deUrgent.statusLabel, 'GENERAL_GUIDANCE_ONLY');
  assert.notStrictEqual(deUrgent.statusLabel, 'PREPARED');
  assert(deUrgent.flags.some(f => f.code === 'ROUTE_GENERAL_GUIDANCE_ONLY'), 'Must emit ROUTE_GENERAL_GUIDANCE_ONLY');

  // (United States + first passport + emergency urgency)
  const usEmergencyUrgency = engine.evaluate({
    countryCode: 'US',
    countryName: 'United States',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'emergency'
  });
  assert.strictEqual(usEmergencyUrgency.serviceCoverage.dimensions.service.status, 'verified');
  assert.strictEqual(usEmergencyUrgency.serviceCoverage.dimensions.urgency.status, 'general_guidance', 'US emergency route must be general_guidance');
  assert.strictEqual(usEmergencyUrgency.serviceCoverage.status, 'general_guidance');
  assert(usEmergencyUrgency.readinessScore <= 75);
  assert.strictEqual(usEmergencyUrgency.statusLabel, 'GENERAL_GUIDANCE_ONLY');
  assert.notStrictEqual(usEmergencyUrgency.statusLabel, 'PREPARED');
  assert(usEmergencyUrgency.flags.some(f => f.code === 'ROUTE_GENERAL_GUIDANCE_ONLY'));

  // 4. Verified service + domestic application
  const usDomestic = engine.evaluate({
    countryCode: 'US',
    countryName: 'United States',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'standard'
  });
  assert.strictEqual(usDomestic.serviceCoverage.dimensions.channel.status, 'verified', 'Domestic channel must be verified');
  assert.strictEqual(usDomestic.serviceCoverage.status, 'verified');
  assert.strictEqual(usDomestic.statusLabel, 'PREPARED');

  // 5. Verified service + overseas application where the channel is supported
  // (Mexico overseas consular USD schedule is fully codified)
  const mxAbroadStandard = engine.evaluate({
    countryCode: 'MX',
    countryName: 'Mexico',
    location: 'abroad',
    service: 'first_passport',
    age: 'adult',
    urgency: 'standard'
  });
  assert.strictEqual(mxAbroadStandard.serviceCoverage.dimensions.service.status, 'verified');
  assert.strictEqual(mxAbroadStandard.serviceCoverage.dimensions.urgency.status, 'verified');
  assert.strictEqual(mxAbroadStandard.serviceCoverage.dimensions.channel.status, 'verified', 'MX consular channel is fully verified');
  assert.strictEqual(mxAbroadStandard.serviceCoverage.status, 'verified', 'MX first_passport abroad standard must be verified');
  assert.strictEqual(mxAbroadStandard.statusLabel, 'PREPARED');

  // (Nigeria diaspora overseas USD schedule is fully codified)
  const ngAbroadStandard = engine.evaluate({
    countryCode: 'NG',
    countryName: 'Nigeria',
    location: 'abroad',
    service: 'first_passport',
    age: 'adult',
    urgency: 'standard'
  });
  assert.strictEqual(ngAbroadStandard.serviceCoverage.dimensions.channel.status, 'verified', 'NG diaspora channel is fully verified');
  assert.strictEqual(ngAbroadStandard.serviceCoverage.status, 'verified');
  assert.strictEqual(ngAbroadStandard.statusLabel, 'PREPARED');

  // 6. Selected application channel whose specific rules are not fully modelled
  // (Japan overseas: consular fees in local currency under MOFA regulations; domestic ¥8,900/¥9,300 do not apply abroad)
  const jpAbroad = engine.evaluate({
    countryCode: 'JP',
    countryName: 'Japan',
    location: 'abroad',
    service: 'first_passport',
    age: 'adult',
    urgency: 'standard'
  });
  assert.strictEqual(jpAbroad.serviceCoverage.dimensions.service.status, 'verified');
  assert.strictEqual(jpAbroad.serviceCoverage.dimensions.urgency.status, 'verified');
  assert.strictEqual(jpAbroad.serviceCoverage.dimensions.channel.status, 'partial', 'JP overseas channel must be partial (local currency under MOFA)');
  assert.strictEqual(jpAbroad.serviceCoverage.status, 'partial', 'Combined status must be partial when channel is partial');
  assert(jpAbroad.readinessScore <= 80, 'Score must be capped at <= 80%');
  assert.strictEqual(jpAbroad.statusLabel, 'VERIFICATION_RECOMMENDED');
  assert.notStrictEqual(jpAbroad.statusLabel, 'PREPARED');
  assert(jpAbroad.flags.some(f => f.code === 'CHANNEL_COVERAGE_PARTIAL'), 'Must emit CHANNEL_COVERAGE_PARTIAL');

  // (India overseas: VFS/BLS consular with ICWF surcharges not codified in INR tables)
  const inAbroad = engine.evaluate({
    countryCode: 'IN',
    countryName: 'India',
    location: 'abroad',
    service: 'first_passport',
    age: 'adult',
    urgency: 'standard'
  });
  assert.strictEqual(inAbroad.serviceCoverage.dimensions.channel.status, 'partial');
  assert.strictEqual(inAbroad.serviceCoverage.status, 'partial');
  assert(inAbroad.readinessScore <= 80);

  // 7. Combined service, processing-route, and channel coverage using most restrictive applicable status
  // Service: partial (US lost_stolen), Route: general_guidance (emergency), Channel: verified (inside)
  // Most restrictive = general_guidance
  const usLostEmergency = engine.evaluate({
    countryCode: 'US',
    countryName: 'United States',
    location: 'inside',
    service: 'lost_stolen',
    age: 'adult',
    urgency: 'emergency'
  });
  assert.strictEqual(usLostEmergency.serviceCoverage.dimensions.service.status, 'partial');
  assert.strictEqual(usLostEmergency.serviceCoverage.dimensions.urgency.status, 'general_guidance');
  assert.strictEqual(usLostEmergency.serviceCoverage.status, 'general_guidance', 'min(partial, general_guidance) must be general_guidance');
  assert(usLostEmergency.readinessScore <= 75);

  // Mexico emergency travel: preserving Art. 20 LFD 30% surcharge assertions
  const mxEmergencyTravel = engine.evaluate({
    countryCode: 'MX',
    countryName: 'Mexico',
    location: 'abroad',
    service: 'emergency_travel',
    age: 'adult',
    urgency: 'emergency'
  });
  assert.strictEqual(mxEmergencyTravel.serviceCoverage.dimensions.service.status, 'partial');
  assert.strictEqual(mxEmergencyTravel.serviceCoverage.dimensions.urgency.status, 'partial');
  assert.strictEqual(mxEmergencyTravel.serviceCoverage.dimensions.channel.status, 'verified');
  assert.strictEqual(mxEmergencyTravel.serviceCoverage.status, 'partial');
  assert(mxEmergencyTravel.serviceCoverage.summary.includes('Art. 20 LFD'));
  assert(mxEmergencyTravel.flags.some(f => f.code === 'MEXICO_EMERGENCY_APPOINTMENT_POLICY'));

  // 8. Score caps and prohibition of PREPARED for incomplete effective coverage
  [inTatkaal, deUrgent, usEmergencyUrgency, jpAbroad, usLostEmergency].forEach(res => {
    assert.notStrictEqual(res.statusLabel, 'PREPARED', 'Incomplete effective coverage must never be PREPARED');
    assert(res.readinessScore <= 80, 'Incomplete effective coverage score must be <= 80%');
  });

  // 9. Existing 27-country service mappings and representative unverified-country cases
  const afRes = engine.evaluate({
    countryCode: 'AF',
    countryName: 'Afghanistan',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'urgent'
  });
  assert.strictEqual(afRes.serviceCoverage.status, 'awaiting_research');
  assert.strictEqual(afRes.serviceCoverage.dimensions.service.status, 'awaiting_research');
  assert.strictEqual(afRes.serviceCoverage.dimensions.urgency.status, 'awaiting_research');
  assert.strictEqual(afRes.serviceCoverage.dimensions.channel.status, 'awaiting_research');
  assert(afRes.readinessScore <= 70);

  // 10. Preservation of Malaysia RM 200 / RM 500 / RM 1,000 replacement assertions
  const myStaff10 = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'lost_stolen',
    applicantCategory: 'immigration_officers_staff',
    validity: '10_year',
    lossTier: 'first_loss'
  });
  const myStaffFee = myStaff10.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(myStaffFee.feeStatus, 'verified_statutory');
  assert.strictEqual(myStaffFee.feeRecord.total_replacement_fee, 200);

  // 11. Preservation of Indonesia confirmation_required marital-status behaviour
  const idUnmarried = engine.evaluate({
    countryCode: 'ID',
    countryName: 'Indonesia',
    location: 'inside',
    service: 'first_passport',
    ageExact: 16
  });
  assert.strictEqual(idUnmarried.checklist.find(c => c.id === 'official_fee_payment').feeStatus, 'confirmation_required');

  // 12. Preservation of all Phase 4.3.2 dynamic country-directory counts
  const countryDataModule = require('../data/country-data.js');
  const countries = countryDataModule.PASSPORT_COUNTRIES;
  assert.strictEqual(countries.length, 249);
  assert.strictEqual(countries.filter(c => c.portal_status === 'verified').length, 27);
  assert.strictEqual(countries.filter(c => c.portal_status === 'official_source_needs_research').length, 222);
});

// 22. Phase 4.3.5 Evidence-Linked Coverage Audit across Base Service, Processing Urgency, and Application Channel
runTest('Phase 4.3.5 Evidence-Linked Coverage Audit across Base Service, Processing Urgency, and Application Channel', () => {
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const engine = new PassportRulesEngine(rulePacks);

  // 1. A verified country pack containing first_passport with complete evidence
  const inVerified = engine.evaluate({
    countryCode: 'IN',
    countryName: 'India',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'standard'
  });
  assert.strictEqual(inVerified.serviceCoverage.dimensions.service.status, 'verified');
  assert.strictEqual(inVerified.serviceCoverage.dimensions.service.evidence.hasSupportingEvidence, true);
  assert.strictEqual(inVerified.serviceCoverage.dimensions.service.missingChecks.length, 0);

  // 2. A verified country pack with the required first_passport object missing (isolated fixture)
  const malformedPack = {
    country_code: 'XX',
    country_name: 'Testland',
    rule_pack_status: 'verified',
    authority_name: 'Testland Passport Bureau',
    official_portal_url: 'https://testland.gov/passports',
    services: {} // missing first_passport object
  };
  const engineFixture = new PassportRulesEngine({ XX: malformedPack });
  const resMissingService = engineFixture.evaluate({
    countryCode: 'XX',
    countryName: 'Testland',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'standard'
  });
  assert.strictEqual(resMissingService.serviceCoverage.dimensions.service.status, 'general_guidance', 'Missing first_passport service object must not receive verified');
  assert.strictEqual(resMissingService.serviceCoverage.dimensions.service.evidence.hasSupportingEvidence, false);
  assert(resMissingService.serviceCoverage.dimensions.service.missingChecks.length > 0, 'Must document missing evidence');
  assert(resMissingService.readinessScore <= 75, 'Readiness score must be capped <= 75% for missing service object');
  assert.notStrictEqual(resMissingService.statusLabel, 'PREPARED', 'Must never achieve PREPARED with missing service object');

  // 3. A verified base service with insufficient evidence for standard processing claims (isolated fixture)
  const noStepsPack = {
    country_code: 'YY',
    country_name: 'NoStepsLand',
    rule_pack_status: 'verified',
    authority_name: 'Authority YY',
    official_portal_url: 'https://yy.gov/passports',
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'YYD', standard: 100 },
        documents: [{ document_name: 'Civil Birth Certificate' }],
        eligibility: [{ rule: 'Must be citizen' }]
        // NO steps and NO processing_times
      }
    }
  };
  const engineYY = new PassportRulesEngine({ YY: noStepsPack });
  const resNoSteps = engineYY.evaluate({
    countryCode: 'YY',
    countryName: 'NoStepsLand',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'standard'
  });
  assert.strictEqual(resNoSteps.serviceCoverage.dimensions.urgency.status, 'general_guidance', 'Standard processing without routine steps or timeframe evidence must receive general_guidance');
  assert.strictEqual(resNoSteps.serviceCoverage.dimensions.urgency.evidence.hasSupportingEvidence, false);
  assert.strictEqual(resNoSteps.serviceCoverage.status, 'general_guidance', 'Combined effective status must be general_guidance');
  assert(resNoSteps.readinessScore <= 75);
  assert.notStrictEqual(resNoSteps.statusLabel, 'PREPARED');

  // 4. Urgent and emergency routes without dedicated supporting evidence
  // Germany urgent
  const deUrgent = engine.evaluate({
    countryCode: 'DE',
    countryName: 'Germany',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'urgent'
  });
  assert.strictEqual(deUrgent.serviceCoverage.dimensions.urgency.status, 'general_guidance');
  assert.strictEqual(deUrgent.serviceCoverage.dimensions.urgency.evidence.hasSupportingEvidence, false);
  assert.strictEqual(deUrgent.statusLabel, 'GENERAL_GUIDANCE_ONLY');
  assert.notStrictEqual(deUrgent.statusLabel, 'PREPARED');

  // US emergency
  const usEmergency = engine.evaluate({
    countryCode: 'US',
    countryName: 'United States',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'emergency'
  });
  assert.strictEqual(usEmergency.serviceCoverage.dimensions.urgency.status, 'general_guidance');
  assert.strictEqual(usEmergency.serviceCoverage.dimensions.urgency.evidence.hasSupportingEvidence, false);
  assert.strictEqual(usEmergency.statusLabel, 'GENERAL_GUIDANCE_ONLY');

  // 5. Domestic channel coverage without sufficient domestic-channel evidence (isolated fixture)
  const noDomesticPack = {
    country_code: 'ZZ',
    country_name: 'NoDomesticLand',
    rule_pack_status: 'verified',
    // Missing authority_name, no domestic fees, no steps
    services: {
      first_passport: {
        availability_status: 'available',
        fees: {},
        documents: []
      }
    }
  };
  const engineZZ = new PassportRulesEngine({ ZZ: noDomesticPack });
  const resNoDomestic = engineZZ.evaluate({
    countryCode: 'ZZ',
    countryName: 'NoDomesticLand',
    location: 'inside',
    service: 'first_passport',
    age: 'adult'
  });
  assert.strictEqual(resNoDomestic.serviceCoverage.dimensions.channel.status, 'general_guidance', 'Domestic channel without authority or fee evidence must receive general_guidance');
  assert.strictEqual(resNoDomestic.serviceCoverage.dimensions.channel.evidence.hasSupportingEvidence, false);
  assert.notStrictEqual(resNoDomestic.statusLabel, 'PREPARED');

  // 6. Overseas channel coverage with and without the relevant consular evidence
  // With codified consular USD schedule (Mexico, Nigeria, Nepal)
  const mxAbroad = engine.evaluate({ countryCode: 'MX', countryName: 'Mexico', location: 'abroad', service: 'first_passport', urgency: 'standard' });
  assert.strictEqual(mxAbroad.serviceCoverage.dimensions.channel.status, 'verified');
  assert.strictEqual(mxAbroad.serviceCoverage.dimensions.channel.evidence.hasSupportingEvidence, true);
  assert.strictEqual(mxAbroad.serviceCoverage.status, 'verified');
  assert.strictEqual(mxAbroad.statusLabel, 'PREPARED');

  const ngAbroad = engine.evaluate({ countryCode: 'NG', countryName: 'Nigeria', location: 'abroad', service: 'first_passport', urgency: 'standard' });
  assert.strictEqual(ngAbroad.serviceCoverage.dimensions.channel.status, 'verified');
  assert.strictEqual(ngAbroad.serviceCoverage.dimensions.channel.evidence.hasSupportingEvidence, true);
  assert.strictEqual(ngAbroad.statusLabel, 'PREPARED');

  // Consular guidance but uncodified host-currency tariffs (Japan overseas)
  const jpAbroad = engine.evaluate({ countryCode: 'JP', countryName: 'Japan', location: 'abroad', service: 'first_passport', urgency: 'standard' });
  assert.strictEqual(jpAbroad.serviceCoverage.dimensions.channel.status, 'partial');
  assert.strictEqual(jpAbroad.serviceCoverage.dimensions.channel.evidence.isPartial, true);
  assert.strictEqual(jpAbroad.serviceCoverage.status, 'partial');
  assert(jpAbroad.readinessScore <= 80);
  assert.strictEqual(jpAbroad.statusLabel, 'VERIFICATION_RECOMMENDED');
  assert.notStrictEqual(jpAbroad.statusLabel, 'PREPARED');

  // Isolated fixture with NO consular guidance or jurisdiction
  const noConsularPack = {
    country_code: 'WW',
    country_name: 'NoConsularLand',
    rule_pack_status: 'verified',
    authority_name: 'WW Domestic Passport Authority',
    official_portal_url: 'https://ww.gov/passports',
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'WWD', standard: 50 },
        documents: [{ document_name: 'Birth Certificate' }],
        steps: [{ step: 'Visit local office' }]
      }
    }
  };
  const engineWW = new PassportRulesEngine({ WW: noConsularPack });
  const resNoConsular = engineWW.evaluate({ countryCode: 'WW', countryName: 'NoConsularLand', location: 'abroad', service: 'first_passport' });
  assert.strictEqual(resNoConsular.serviceCoverage.dimensions.channel.status, 'general_guidance', 'Overseas without consular evidence or jurisdiction must be general_guidance');
  assert.strictEqual(resNoConsular.serviceCoverage.dimensions.channel.evidence.hasSupportingEvidence, false);

  // 7. India first passport, standard processing, inside India -> fully verified
  assert.strictEqual(inVerified.serviceCoverage.status, 'verified');
  assert.strictEqual(inVerified.serviceCoverage.evidence.hasSupportingEvidence, true);
  assert.strictEqual(inVerified.readinessScore, 100);
  assert.strictEqual(inVerified.statusLabel, 'PREPARED');

  // 8. India first passport, urgent/Tatkaal, inside India -> partial route
  const inTatkaal = engine.evaluate({ countryCode: 'IN', countryName: 'India', location: 'inside', service: 'first_passport', urgency: 'urgent' });
  assert.strictEqual(inTatkaal.serviceCoverage.dimensions.urgency.status, 'partial');
  assert.strictEqual(inTatkaal.serviceCoverage.status, 'partial');
  assert(inTatkaal.readinessScore <= 80);
  assert.strictEqual(inTatkaal.statusLabel, 'VERIFICATION_RECOMMENDED');
  assert.notStrictEqual(inTatkaal.statusLabel, 'PREPARED');
  assert(inTatkaal.flags.some(f => f.code === 'ROUTE_COVERAGE_PARTIAL'));

  // 9. Mexico emergency processing preserving Emergency Type E and Art. 20 LFD +30% logic
  const mxEmergency = engine.evaluate({ countryCode: 'MX', countryName: 'Mexico', location: 'abroad', service: 'emergency_travel', urgency: 'emergency' });
  assert.strictEqual(mxEmergency.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(mxEmergency.serviceCoverage.dimensions.urgency.summary.includes('Art. 20 LFD'));
  assert(mxEmergency.flags.some(f => f.code === 'MEXICO_EMERGENCY_APPOINTMENT_POLICY'));

  // 10. Malaysia Immigration Department staff eligibility and replacement fees
  const myStaff10yrRep = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'lost_stolen',
    applicantCategory: 'immigration_officers_staff',
    validity: '10_year',
    lossTier: 'first_loss'
  });
  const myStaffRepFee = myStaff10yrRep.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(myStaffRepFee.feeStatus, 'verified_statutory');
  assert.strictEqual(myStaffRepFee.feeRecord.total_replacement_fee, 200);

  const myStaff5yrOriginal = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'first_passport',
    applicantCategory: 'immigration_officers_staff',
    validity: '5_year'
  });
  assert.strictEqual(myStaff5yrOriginal.checklist.find(c => c.id === 'official_fee_payment').feeStatus, 'not_eligible');

  const myStaff10yrOriginal = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'first_passport',
    applicantCategory: 'immigration_officers_staff',
    validity: '10_year'
  });
  const myStaff10OrigFee = myStaff10yrOriginal.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(myStaff10OrigFee.feeStatus, 'verified_statutory');
  assert.strictEqual(myStaff10OrigFee.feeRecord.amount, 0);

  // 11. Indonesia under-17 marital-status confirmation
  const idMinorUnknown = engine.evaluate({ countryCode: 'ID', countryName: 'Indonesia', location: 'inside', service: 'first_passport', ageExact: 16 });
  assert.strictEqual(idMinorUnknown.checklist.find(c => c.id === 'official_fee_payment').feeStatus, 'confirmation_required');
  assert(idMinorUnknown.flags.some(f => f.code === 'INDONESIA_MARITAL_STATUS_CONFIRMATION'));

  // 12. Effective status precedence, score caps, flags, and PREPARED prohibition
  [resMissingService, resNoSteps, deUrgent, usEmergency, resNoDomestic, jpAbroad, inTatkaal].forEach(res => {
    assert.notStrictEqual(res.statusLabel, 'PREPARED', 'Non-verified effective status must never be PREPARED');
    assert(res.readinessScore <= 80, 'Non-verified effective status must be score-capped <= 80%');
  });
});

// 23. Phase 4.3.6 Evidence Integrity, Country-Allowlist Bypass Removal, and Regression Hardening (Fixtures A–H)
runTest('Phase 4.3.6 Evidence Integrity, Country-Allowlist Bypass Removal, and Regression Hardening (Fixtures A–H)', () => {
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const engine = new PassportRulesEngine(rulePacks);

  // --- SCENARIO A: Urgent-route bypass removal (Country code: IN) ---
  // IN pack with verified base service, but tatkaal_surcharge deliberately stripped
  const inWithoutUrgentFee = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    authority_name: 'Passport Seva / PSP Division, MEA',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ url: 'https://passportindia.gov.in', publisher: 'MEA' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: {
          currency: 'INR',
          standard: 1500
          // NOTE: tatkaal_surcharge deliberately removed!
        },
        documents: [{ document_name: 'Aadhaar Card' }],
        eligibility: [{ rule: 'Must be Indian Citizen' }],
        steps: [{ step: 'Apply online and book slot at PSK' }]
      }
    }
  };
  const engineInNoUrgent = new PassportRulesEngine({ IN: inWithoutUrgentFee });
  const resInNoUrgent = engineInNoUrgent.evaluate({
    countryCode: 'IN',
    countryName: 'India',
    location: 'inside',
    service: 'first_passport',
    urgency: 'urgent'
  });
  // Must NOT retain 'partial' solely because country code is IN
  assert.strictEqual(
    resInNoUrgent.serviceCoverage.dimensions.urgency.status,
    'general_guidance',
    'Scenario A: Stripped urgent fee for IN must yield general_guidance, NOT partial'
  );
  assert.strictEqual(resInNoUrgent.serviceCoverage.dimensions.urgency.evidence.hasSupportingEvidence, false);
  assert.strictEqual(resInNoUrgent.serviceCoverage.status, 'general_guidance');
  assert.notStrictEqual(resInNoUrgent.statusLabel, 'PREPARED');
  assert(resInNoUrgent.readinessScore <= 75);

  // --- SCENARIO B: Overseas-fee bypass removal (Country codes: MX, NG, NP with empty fees) ---
  // MX with fees: {}
  const mxEmptyFees = {
    country_code: 'MX',
    country_name: 'Mexico',
    rule_pack_status: 'verified',
    authority_name: 'Secretaría de Relaciones Exteriores (SRE)',
    official_portal_url: 'https://sre.gob.mx',
    sources: [{ url: 'https://embamex.sre.gob.mx', publisher: 'SRE' }],
    jurisdictions: [{ application_channel: 'consular', name: 'SRE Secciones Consulares' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: {}, // EMPTY FEES OBJECT
        documents: [{ document_name: 'Copia Certificada de Acta de Nacimiento' }],
        eligibility: [{ rule: 'Acreditar nacionalidad mexicana' }],
        steps: [{ step: 'Agendar cita en consulado' }]
      }
    }
  };
  const engineMxEmpty = new PassportRulesEngine({ MX: mxEmptyFees });
  const resMxEmpty = engineMxEmpty.evaluate({
    countryCode: 'MX',
    countryName: 'Mexico',
    location: 'abroad',
    service: 'first_passport',
    urgency: 'standard'
  });
  assert.notStrictEqual(
    resMxEmpty.serviceCoverage.dimensions.channel.status,
    'verified',
    'Scenario B: Empty fees for MX must NEVER receive verified overseas channel'
  );

  // NG with fees: {}
  const ngEmptyFees = {
    country_code: 'NG',
    country_name: 'Nigeria',
    rule_pack_status: 'verified',
    authority_name: 'Nigeria Immigration Service (NIS)',
    official_portal_url: 'https://immigration.gov.ng',
    sources: [{ url: 'https://immigration.gov.ng', publisher: 'NIS' }],
    jurisdictions: [{ application_channel: 'consular', name: 'Nigerian Diplomatic Missions' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: {}, // EMPTY FEES OBJECT
        documents: [{ document_name: 'National Identity Number (NIN)' }],
        eligibility: [{ rule: 'Nigerian citizen by birth, naturalisation or registration' }],
        steps: [{ step: 'Complete online application on portal' }]
      }
    }
  };
  const engineNgEmpty = new PassportRulesEngine({ NG: ngEmptyFees });
  const resNgEmpty = engineNgEmpty.evaluate({
    countryCode: 'NG',
    countryName: 'Nigeria',
    location: 'abroad',
    service: 'first_passport',
    urgency: 'standard'
  });
  assert.notStrictEqual(
    resNgEmpty.serviceCoverage.dimensions.channel.status,
    'verified',
    'Scenario B: Empty fees for NG must NEVER receive verified overseas channel'
  );

  // NP with fees: {}
  const npEmptyFees = {
    country_code: 'NP',
    country_name: 'Nepal',
    rule_pack_status: 'verified',
    authority_name: 'Department of Passports, MoFA Nepal',
    official_portal_url: 'https://nepalpassport.gov.np',
    sources: [{ url: 'https://nepalpassport.gov.np', publisher: 'DoP' }],
    jurisdictions: [{ application_channel: 'consular', name: 'Nepali Diplomatic Missions Abroad' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: {}, // EMPTY FEES OBJECT
        documents: [{ document_name: 'Citizenship Certificate' }],
        eligibility: [{ rule: 'Nepali citizen' }],
        steps: [{ step: 'Complete online pre-enrollment form' }]
      }
    }
  };
  const engineNpEmpty = new PassportRulesEngine({ NP: npEmptyFees });
  const resNpEmpty = engineNpEmpty.evaluate({
    countryCode: 'NP',
    countryName: 'Nepal',
    location: 'abroad',
    service: 'first_passport',
    urgency: 'standard'
  });
  assert.notStrictEqual(
    resNpEmpty.serviceCoverage.dimensions.channel.status,
    'verified',
    'Scenario B: Empty fees for NP must NEVER receive verified overseas channel'
  );

  // --- SCENARIO C: Consular country-status bypass removal (Normally verified country codes: IN and JP) ---
  // IN with verified status, but consular jurisdictions, consular steps, and consular sources stripped
  const inDomesticOnly = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    authority_name: 'Passport Seva',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ url: 'https://passportindia.gov.in', publisher: 'MEA' }],
    jurisdictions: [{ application_channel: 'domestic', name: 'Regional Passport Office' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'INR', standard: 1500 },
        documents: [{ document_name: 'Aadhaar Card' }],
        eligibility: [{ rule: 'Indian Citizen' }],
        steps: [{ step: 'Visit local PSK counter' }]
      }
    }
  };
  const engineInDomestic = new PassportRulesEngine({ IN: inDomesticOnly });
  const resInDomesticAbroad = engineInDomestic.evaluate({
    countryCode: 'IN',
    countryName: 'India',
    location: 'abroad',
    service: 'first_passport'
  });
  assert.strictEqual(
    resInDomesticAbroad.serviceCoverage.dimensions.channel.status,
    'general_guidance',
    'Scenario C: IN without consular metadata must yield general_guidance, NOT partial or verified'
  );
  assert.strictEqual(resInDomesticAbroad.serviceCoverage.dimensions.channel.evidence.hasSupportingEvidence, false);

  // JP with verified status, but consular jurisdictions, consular steps, and consular sources stripped
  const jpDomesticOnly = {
    country_code: 'JP',
    country_name: 'Japan',
    rule_pack_status: 'verified',
    authority_name: 'Ministry of Foreign Affairs (MOFA)',
    official_portal_url: 'https://www.mofa.go.jp',
    sources: [{ url: 'https://www.mofa.go.jp/domestic', publisher: 'MOFA' }],
    jurisdictions: [{ application_channel: 'domestic', name: 'Prefectural Passport Center' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'JPY', online_adult_10yr: 8900 },
        documents: [{ document_name: 'Koseki Tohon' }],
        eligibility: [{ rule: 'Japanese national' }],
        steps: [{ step: 'Visit prefectural passport counter' }]
      }
    }
  };
  const engineJpDomestic = new PassportRulesEngine({ JP: jpDomesticOnly });
  const resJpDomesticAbroad = engineJpDomestic.evaluate({
    countryCode: 'JP',
    countryName: 'Japan',
    location: 'abroad',
    service: 'first_passport'
  });
  assert.strictEqual(
    resJpDomesticAbroad.serviceCoverage.dimensions.channel.status,
    'general_guidance',
    'Scenario C: JP without consular metadata must yield general_guidance, NOT partial or verified'
  );
  assert.strictEqual(resJpDomesticAbroad.serviceCoverage.dimensions.channel.evidence.hasSupportingEvidence, false);

  // --- SCENARIO D: Empty source metadata ---
  // Structurally valid service object with fees and documents but empty sources array and no pack sources
  const packNoSources = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    authority_name: 'Passport Authority',
    official_portal_url: 'https://example.gov',
    sources: [], // EMPTY SOURCES
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        sources: [], // EMPTY SERVICE SOURCES
        fees: { currency: 'INR', amount: 1500 },
        documents: [{ document_name: 'Civil Birth Certificate' }],
        eligibility: [{ rule: 'Citizen' }],
        steps: [{ step: 'Step 1' }]
      }
    }
  };
  const engineNoSources = new PassportRulesEngine({ IN: packNoSources });
  const resNoSources = engineNoSources.evaluate({
    countryCode: 'IN',
    countryName: 'India',
    location: 'inside',
    service: 'first_passport'
  });
  assert.strictEqual(
    resNoSources.serviceCoverage.dimensions.service.status,
    'general_guidance',
    'Scenario D: Structurally valid object with empty sources must receive general_guidance'
  );
  assert.strictEqual(resNoSources.serviceCoverage.dimensions.service.evidence.hasSupportingEvidence, false);
  assert(resNoSources.serviceCoverage.dimensions.service.evidence.missingEvidence.some(m => m.includes('source')));

  // --- SCENARIO E: Misleading verified fields ---
  // Service object with eligibility, documents, fees, but NO steps
  const packWithoutSteps = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    authority_name: 'Passport Seva',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ url: 'https://passportindia.gov.in', publisher: 'MEA', claim_scope: 'portal_navigation' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        sources: [
          { url: 'https://www.passportindia.gov.in/AppOnlineProject/online/feeSchedule', claim_scope: 'fee', publisher: 'MEA' },
          { url: 'https://www.passportindia.gov.in/AppOnlineProject/online/documentAdvisor', claim_scope: 'documents', publisher: 'MEA' },
          { url: 'https://www.passportindia.gov.in/AppOnlineProject/online/citizenshipNorms', claim_scope: 'eligibility', publisher: 'MEA' }
        ],
        fees: { currency: 'INR', standard: 1500 },
        documents: [{ document_name: 'Aadhaar Card', source_url: 'https://www.passportindia.gov.in/AppOnlineProject/online/documentAdvisor' }],
        eligibility: [{ rule: 'Indian Citizen', source_url: 'https://www.passportindia.gov.in/AppOnlineProject/online/citizenshipNorms' }]
        // NO steps!
      }
    }
  };
  const engineNoSteps = new PassportRulesEngine({ IN: packWithoutSteps });
  const resVerifiedNoSteps = engineNoSteps.evaluate({
    countryCode: 'IN',
    countryName: 'India',
    location: 'inside',
    service: 'first_passport'
  });
  assert.strictEqual(resVerifiedNoSteps.serviceCoverage.dimensions.service.status, 'verified');
  const verifiedFields = resVerifiedNoSteps.serviceCoverage.dimensions.service.evidence.verifiedFields;
  assert(Array.isArray(verifiedFields), 'verifiedFields must be an array');
  assert(!verifiedFields.includes('steps'), 'Scenario E: verifiedFields must NOT include steps when steps are absent');
  assert(verifiedFields.includes('eligibility'), 'verifiedFields must include eligibility');
  assert(verifiedFields.includes('documents'), 'verifiedFields must include documents');
  assert(verifiedFields.includes('fees'), 'verifiedFields must include fees');

  // --- SCENARIO F: Emergency-route fallback (MX and NZ fixtures with stripped emergency evidence) ---
  // MX fixture with emergency fee schedule removed
  const mxNoEmergencyFees = {
    country_code: 'MX',
    country_name: 'Mexico',
    rule_pack_status: 'verified',
    authority_name: 'SRE',
    official_portal_url: 'https://sre.gob.mx',
    sources: [{ url: 'https://sre.gob.mx', publisher: 'SRE' }],
    jurisdictions: [{ application_channel: 'consular' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: {
          currency: 'MXN',
          standard_domestic_mxn: { validity_3_years: 900 }
          // NO emergency_surcharge_schedule and NO fee_records with emergency_surcharge!
        },
        documents: [{ document_name: 'Acta de Nacimiento' }],
        eligibility: [{ rule: 'Nacionalidad Mexicana' }],
        steps: [{ step: 'Cita consular' }]
      }
    }
  };
  const engineMxNoEmerg = new PassportRulesEngine({ MX: mxNoEmergencyFees });
  const resMxNoEmerg = engineMxNoEmerg.evaluate({
    countryCode: 'MX',
    countryName: 'Mexico',
    location: 'abroad',
    service: 'emergency_travel',
    urgency: 'emergency'
  });
  assert.strictEqual(
    resMxNoEmerg.serviceCoverage.dimensions.urgency.status,
    'general_guidance',
    'Scenario F: MX with stripped emergency fee schedule must yield general_guidance'
  );
  assert.strictEqual(resMxNoEmerg.serviceCoverage.dimensions.urgency.evidence.hasSupportingEvidence, false);

  // NZ fixture with after-hours callout fee removed
  const nzNoCallout = {
    country_code: 'NZ',
    country_name: 'New Zealand',
    rule_pack_status: 'verified',
    authority_name: 'DIA',
    official_portal_url: 'https://passports.govt.nz',
    sources: [{ url: 'https://passports.govt.nz', publisher: 'DIA' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: {
          currency: 'NZD',
          standard_service_nzd: { adult_10_year: 247 }
          // NO after_hours_callout_service_nzd!
        },
        documents: [{ document_name: 'Birth Certificate' }],
        eligibility: [{ rule: 'NZ Citizen' }],
        steps: [{ step: 'Online DIA portal' }]
      }
    }
  };
  const engineNzNoEmerg = new PassportRulesEngine({ NZ: nzNoCallout });
  const resNzNoEmerg = engineNzNoEmerg.evaluate({
    countryCode: 'NZ',
    countryName: 'New Zealand',
    location: 'inside',
    service: 'first_passport',
    urgency: 'emergency'
  });
  assert.strictEqual(
    resNzNoEmerg.serviceCoverage.dimensions.urgency.status,
    'general_guidance',
    'Scenario F: NZ with stripped callout fee must yield general_guidance'
  );
  assert.strictEqual(resNzNoEmerg.serviceCoverage.dimensions.urgency.evidence.hasSupportingEvidence, false);

  // Production complete packs for MX and NZ retain verified partial emergency coverage
  const prodMxEmerg = engine.evaluate({
    countryCode: 'MX',
    countryName: 'Mexico',
    location: 'abroad',
    service: 'emergency_travel',
    urgency: 'emergency'
  });
  assert.strictEqual(prodMxEmerg.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(prodMxEmerg.serviceCoverage.dimensions.urgency.summary.includes('Art. 20 LFD'));

  const prodNzEmerg = engine.evaluate({
    countryCode: 'NZ',
    countryName: 'New Zealand',
    location: 'inside',
    service: 'first_passport',
    urgency: 'emergency'
  });
  assert.strictEqual(prodNzEmerg.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(prodNzEmerg.serviceCoverage.dimensions.urgency.summary.includes('after-hours callout'));
  assert(prodNzEmerg.serviceCoverage.dimensions.urgency.evidence.citation.includes('passports.govt.nz'));

  // --- SCENARIO G: Combined readiness, score caps, and PREPARED prohibition ---
  const resPartialUrgent = engine.evaluate({ countryCode: 'IN', countryName: 'India', location: 'inside', service: 'first_passport', urgency: 'urgent' });
  assert.strictEqual(resPartialUrgent.serviceCoverage.dimensions.service.status, 'verified');
  assert.strictEqual(resPartialUrgent.serviceCoverage.dimensions.urgency.status, 'partial');
  assert.strictEqual(resPartialUrgent.serviceCoverage.dimensions.channel.status, 'verified');
  assert.strictEqual(resPartialUrgent.serviceCoverage.status, 'partial', 'Combined status must equal most restrictive (partial)');
  assert(resPartialUrgent.readinessScore <= 80, 'Score must be capped at <= 80 for partial');
  assert.notStrictEqual(resPartialUrgent.statusLabel, 'PREPARED');
  assert(resPartialUrgent.flags.some(f => f.code === 'ROUTE_COVERAGE_PARTIAL'));

  const resGenGuidance = engine.evaluate({ countryCode: 'DE', countryName: 'Germany', location: 'inside', service: 'first_passport', urgency: 'urgent' });
  assert.strictEqual(resGenGuidance.serviceCoverage.status, 'general_guidance');
  assert(resGenGuidance.readinessScore <= 75, 'Score must be capped at <= 75 for general_guidance');
  assert.notStrictEqual(resGenGuidance.statusLabel, 'PREPARED');
  assert(resGenGuidance.flags.some(f => f.code === 'ROUTE_GENERAL_GUIDANCE_ONLY'));

  // --- SCENARIO H: Preservation tests ---
  // Malaysia Immigration Department staff: 10-year replacement fees across 3 tiers
  const myStaffTiers = [
    { tier: 'first_loss', amount: 200 },
    { tier: 'second_loss', amount: 500 },
    { tier: 'third_loss', amount: 1000 }
  ];
  myStaffTiers.forEach(({ tier, amount }) => {
    const res = engine.evaluate({
      countryCode: 'MY',
      countryName: 'Malaysia',
      location: 'inside',
      service: 'lost_stolen',
      applicantCategory: 'immigration_officers_staff',
      validity: '10_year',
      lossTier: tier
    });
    const feeItem = res.checklist.find(c => c.id === 'official_fee_payment');
    assert.strictEqual(feeItem.feeStatus, 'verified_statutory');
    assert.strictEqual(feeItem.feeRecord.total_replacement_fee, amount);
    assert(feeItem.details.includes(`RM ${amount}`));
    assert(!feeItem.details.includes('calculated difference'));
  });

  // Malaysia JIM staff 5-year replacement -> not_eligible
  const myStaff5yrRep = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'lost_stolen',
    applicantCategory: 'immigration_officers_staff',
    validity: '5_year',
    lossTier: 'first_loss'
  });
  const myStaff5yrFee = myStaff5yrRep.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(myStaff5yrFee.feeStatus, 'not_eligible');
  assert.strictEqual(myStaff5yrFee.feeRecord.status, 'not_eligible');

  // Malaysia JIM staff 10-year original issuance -> RM 0
  const myStaff10yrOrig = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'first_passport',
    applicantCategory: 'immigration_officers_staff',
    validity: '10_year'
  });
  const myStaff10OrigFee = myStaff10yrOrig.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(myStaff10OrigFee.feeStatus, 'verified_statutory');
  assert.strictEqual(myStaff10OrigFee.feeRecord.amount, 0);

  // Indonesia minor-under-17 marital status confirmation
  const idMinorUnknown = engine.evaluate({
    countryCode: 'ID',
    countryName: 'Indonesia',
    location: 'inside',
    service: 'first_passport',
    ageExact: 16
  });
  assert.strictEqual(idMinorUnknown.checklist.find(c => c.id === 'official_fee_payment').feeStatus, 'confirmation_required');
  assert(idMinorUnknown.flags.some(f => f.code === 'INDONESIA_MARITAL_STATUS_CONFIRMATION'));

  // All 249 directory entries & dynamic counts (27 verified / 0 linked / 222 needs research)
  const countries = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'countries.json'), 'utf8'));
  assert.strictEqual(countries.length, 249);
  assert.strictEqual(countries.filter(c => c.portal_status === 'verified').length, 27);
  assert.strictEqual(countries.filter(c => c.portal_status === 'official_portal_linked_rules_not_fully_audited').length, 0);
  assert.strictEqual(countries.filter(c => c.portal_status === 'official_source_needs_research').length, 222);
});

// 24. Phase 4.3.7 Source-to-Claim Evidence Binding & Strict Fee Schema Validation (Fixtures A–I)
runTest('Phase 4.3.7 Source-to-Claim Evidence Binding & Strict Fee Schema Validation (Fixtures A–I)', () => {
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const engine = new PassportRulesEngine(rulePacks);

  // --- SCENARIO A: Generic Pack Sources (Urgent Route Fallback) ---
  // Pack with valid base first_passport, urgent fee defined (tatkaal_surcharge: 2000),
  // but ONLY generic pack URL (no urgent/tatkaal keyword in URL or title, no urgent source URL)
  const packGenericOnly = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    authority_name: 'Passport Authority',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ url: 'https://passportindia.gov.in', page_title: 'National Passport Portal', checked_at: '2026-10-18', publisher: 'MEA' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        sources: [{ url: 'https://passportindia.gov.in', page_title: 'National Passport Portal' }],
        fees: {
          currency: 'INR',
          standard: 1500,
          tatkaal_surcharge: 2000 // urgent surcharge present
        },
        documents: [{ document_name: 'Proof of Citizenship' }],
        eligibility: [{ rule: 'Citizen' }],
        steps: [{ step: 'Visit center' }]
      }
    }
  };
  const engineGenericOnly = new PassportRulesEngine({ IN: packGenericOnly });
  const resGenericUrgent = engineGenericOnly.evaluate({
    countryCode: 'IN',
    countryName: 'India',
    location: 'inside',
    service: 'first_passport',
    urgency: 'urgent'
  });
  assert.strictEqual(
    resGenericUrgent.serviceCoverage.dimensions.urgency.status,
    'general_guidance',
    'Scenario A: Pack with only generic authority URL and no urgent source must fall back to general_guidance'
  );
  assert.strictEqual(resGenericUrgent.serviceCoverage.dimensions.urgency.evidence.hasSupportingEvidence, false);
  assert.strictEqual(resGenericUrgent.serviceCoverage.status, 'general_guidance');
  assert(resGenericUrgent.readinessScore <= 75, 'Score must be capped <= 75 for general_guidance');
  assert.notStrictEqual(resGenericUrgent.statusLabel, 'PREPARED');

  // --- SCENARIO B: Missing Consular Sources ---
  // Pack with consular jurisdiction entry, but stripped consular sources (only domestic URL)
  const noConsularSourcesPack = {
    country_code: 'MX',
    country_name: 'Mexico',
    rule_pack_status: 'verified',
    authority_name: 'Passport Authority',
    official_portal_url: 'https://domestic.gov.mx',
    sources: [{ url: 'https://domestic.gov.mx', page_title: 'Domestic Passport Service', checked_at: '2026-10-19', publisher: 'SRE' }],
    jurisdictions: [
      { name: 'Consular Section Overseas', application_channel: 'consular' } // BARE JURISDICTION WITHOUT SOURCE URL
    ],
    services: {
      first_passport: {
        availability_status: 'available',
        sources: [{ url: 'https://domestic.gov.mx', page_title: 'Domestic Passport Service' }],
        fees: {
          currency: 'USD',
          consular_overseas_usd: { standard: { validity_1_year: 44, validity_3_year: 101 } }
        },
        documents: [{ document_name: 'Birth Certificate' }],
        eligibility: [{ rule: 'Citizen' }],
        steps: [{ step: 'Visit domestic office' }]
      }
    }
  };
  const engineNoConsularSources = new PassportRulesEngine({ MX: noConsularSourcesPack });
  const resNoConsularSources = engineNoConsularSources.evaluate({
    countryCode: 'MX',
    countryName: 'Mexico',
    location: 'abroad',
    service: 'first_passport',
    urgency: 'standard'
  });
  assert.strictEqual(
    resNoConsularSources.serviceCoverage.dimensions.channel.status,
    'general_guidance',
    'Scenario B: Consular jurisdiction without traceable consular source must receive general_guidance'
  );
  assert.strictEqual(resNoConsularSources.serviceCoverage.dimensions.channel.evidence.hasSupportingEvidence, false);

  // --- SCENARIO C: Invalid Consular Fee Objects ---
  // Must reject: 1) empty {}, 2) placeholder { status: 'pending' }, 3) string amounts, 4) empty nested { standard: {} }
  const invalidConsularCases = [
    { desc: 'empty object', fees: { currency: 'USD', consular_overseas_usd: {} } },
    { desc: 'placeholder object', fees: { currency: 'USD', consular_overseas_usd: { status: 'pending' } } },
    { desc: 'string amounts', fees: { currency: 'USD', diaspora_overseas_usd: { booklet_32_pages_5_year: '150' } } },
    { desc: 'empty nested standard', fees: { currency: 'USD', consular_overseas_usd: { standard: {} } } }
  ];

  invalidConsularCases.forEach(({ desc, fees }) => {
    const pack = {
      country_code: 'MX',
      country_name: 'Mexico',
      rule_pack_status: 'verified',
      authority_name: 'SRE',
      official_portal_url: 'https://embamex.sre.gob.mx/consular',
      sources: [{ url: 'https://embamex.sre.gob.mx/consular', page_title: 'SRE Consular Services', checked_at: '2026-10-19', publisher: 'SRE' }],
      jurisdictions: [{ application_channel: 'consular', name: 'Consular Missions', source_url: 'https://embamex.sre.gob.mx/consular' }],
      services: {
        first_passport: {
          availability_status: 'available',
          sources: [{ url: 'https://embamex.sre.gob.mx/consular', page_title: 'SRE Consular Services' }],
          fees,
          documents: [{ document_name: 'Acta' }],
          eligibility: [{ rule: 'Mexicano' }],
          steps: [{ step: 'Cita consular' }]
        }
      }
    };
    const e = new PassportRulesEngine({ MX: pack });
    const res = e.evaluate({ countryCode: 'MX', location: 'abroad', service: 'first_passport' });
    assert.notStrictEqual(
      res.serviceCoverage.dimensions.channel.status,
      'verified',
      `Scenario C: Consular channel must NOT be verified with ${desc}`
    );
  });

  // --- SCENARIO D: Malformed Emergency Fees ---
  // MX with non-numeric surcharge schedule e.g. { validity_3_year: { total_payable: "131" } }
  const mxMalformedEmergPack = {
    country_code: 'MX',
    country_name: 'Mexico',
    rule_pack_status: 'verified',
    authority_name: 'SRE',
    sources: [{ url: 'https://embamex.sre.gob.mx/consular-emergency', page_title: 'Consular Emergency Type E', checked_at: '2026-10-19', publisher: 'SRE' }],
    jurisdictions: [{ application_channel: 'consular' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: {
          currency: 'USD',
          consular_overseas_usd: {
            emergency_surcharge_schedule: {
              validity_3_year: { total_payable: '131' } // STRING INSTEAD OF NUMBER
            }
          }
        },
        documents: [{ document_name: 'Acta' }],
        eligibility: [{ rule: 'Mexicano' }]
      }
    }
  };
  const engineMxMalformed = new PassportRulesEngine({ MX: mxMalformedEmergPack });
  const resMxMalformed = engineMxMalformed.evaluate({
    countryCode: 'MX',
    location: 'abroad',
    service: 'emergency_travel',
    urgency: 'emergency'
  });
  assert.strictEqual(
    resMxMalformed.serviceCoverage.dimensions.urgency.status,
    'general_guidance',
    'Scenario D: MX with non-numeric emergency surcharge must fall back to general_guidance'
  );
  assert.strictEqual(resMxMalformed.serviceCoverage.dimensions.urgency.evidence.hasSupportingEvidence, false);

  // NZ with string callout fee e.g. { adult_10_year: "1001" }
  const nzMalformedCalloutPack = {
    country_code: 'NZ',
    country_name: 'New Zealand',
    rule_pack_status: 'verified',
    authority_name: 'DIA',
    sources: [{ url: 'https://passports.govt.nz/passport-costs', page_title: 'After-Hours Emergency Callout Service', checked_at: '2026-10-19', publisher: 'DIA' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: {
          currency: 'NZD',
          after_hours_callout_service_nzd: {
            adult_10_year: '1001' // STRING INSTEAD OF NUMBER
          }
        },
        documents: [{ document_name: 'Birth Cert' }],
        eligibility: [{ rule: 'NZ Citizen' }]
      }
    }
  };
  const engineNzMalformed = new PassportRulesEngine({ NZ: nzMalformedCalloutPack });
  const resNzMalformed = engineNzMalformed.evaluate({
    countryCode: 'NZ',
    location: 'inside',
    service: 'first_passport',
    urgency: 'emergency'
  });
  assert.strictEqual(
    resNzMalformed.serviceCoverage.dimensions.urgency.status,
    'general_guidance',
    'Scenario D: NZ with string callout fee must fall back to general_guidance'
  );
  assert.strictEqual(resNzMalformed.serviceCoverage.dimensions.urgency.evidence.hasSupportingEvidence, false);

  // --- SCENARIO E: Source Metadata Integrity ---
  // Pack with empty URL "", title without URL, non-URL strings
  const invalidSourcesPack = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    authority_name: 'Passport Authority',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [
      { page_title: 'Official Portal Without URL' },
      'Ministry of External Affairs',
      { url: '' }
    ],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        sources: [
          { page_title: 'Portal Without URL' },
          'Not A Valid URL',
          { url: '' }
        ],
        fees: { currency: 'INR', standard: 1500 },
        documents: [{ document_name: 'Citizenship Evidence' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const engineInvalidSources = new PassportRulesEngine({ IN: invalidSourcesPack });
  const resInvalidSources = engineInvalidSources.evaluate({
    countryCode: 'IN',
    location: 'inside',
    service: 'first_passport'
  });
  assert.strictEqual(
    resInvalidSources.serviceCoverage.dimensions.service.status,
    'general_guidance',
    'Scenario E: Object with only invalid/placeholder sources must receive general_guidance'
  );
  assert.strictEqual(resInvalidSources.serviceCoverage.dimensions.service.evidence.hasSupportingEvidence, false);
  assert(resInvalidSources.serviceCoverage.dimensions.service.evidence.sources.length === 0, 'No invalid sources should be returned');

  // --- SCENARIO F: Dynamic verifiedFields Accuracy ---
  const noStepsServicePack = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    authority_name: 'Passport Seva',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [
      { url: 'https://www.passportindia.gov.in/AppOnlineProject/online/feeSchedule', claim_scope: 'fee', publisher: 'MEA', page_title: 'Fee Schedule', checked_at: '2026-10-18' },
      { url: 'https://www.passportindia.gov.in/AppOnlineProject/online/documentAdvisor', claim_scope: 'documents', publisher: 'MEA', page_title: 'Document Advisor', checked_at: '2026-10-18' },
      { url: 'https://www.passportindia.gov.in/AppOnlineProject/online/citizenshipNorms', claim_scope: 'eligibility', publisher: 'MEA', page_title: 'Citizenship Norms', checked_at: '2026-10-18' }
    ],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'INR', standard: 1500 },
        documents: [{ document_name: 'Aadhaar', source_url: 'https://www.passportindia.gov.in/AppOnlineProject/online/documentAdvisor' }],
        eligibility: [{ rule: 'Citizen', source_url: 'https://www.passportindia.gov.in/AppOnlineProject/online/citizenshipNorms' }]
        // NO steps!
      }
    }
  };
  const engineNoSteps = new PassportRulesEngine({ IN: noStepsServicePack });
  const resNoSteps = engineNoSteps.evaluate({
    countryCode: 'IN',
    location: 'inside',
    service: 'first_passport'
  });
  assert.strictEqual(resNoSteps.serviceCoverage.dimensions.service.status, 'verified');
  const vFields = resNoSteps.serviceCoverage.dimensions.service.evidence.verifiedFields;
  assert(!vFields.includes('steps'), 'Scenario F: verifiedFields must NOT include steps when steps are absent');
  assert(vFields.includes('eligibility') && vFields.includes('documents') && vFields.includes('fees'));

  // --- SCENARIO G: Preserve Previous Phase 4.3.6 Bypass Tests ---
  // Production India with Tatkaal evaluates to partial route
  const prodInTatkaal = engine.evaluate({
    countryCode: 'IN',
    countryName: 'India',
    location: 'inside',
    service: 'first_passport',
    urgency: 'urgent'
  });
  assert.strictEqual(prodInTatkaal.serviceCoverage.dimensions.urgency.status, 'partial', 'IN urgent route must be partial with authentic Tatkaal source');
  assert(prodInTatkaal.serviceCoverage.dimensions.urgency.evidence.sources.some(s => s.includes('tatkaalPassports')), 'Must include Tatkaal source URL');

  // Production Mexico emergency evaluates to partial route with Art. 20 LFD
  const prodMxEmerg = engine.evaluate({
    countryCode: 'MX',
    countryName: 'Mexico',
    location: 'abroad',
    service: 'emergency_travel',
    urgency: 'emergency'
  });
  assert.strictEqual(prodMxEmerg.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(prodMxEmerg.serviceCoverage.dimensions.urgency.summary.includes('Art. 20 LFD'));

  // Production New Zealand emergency evaluates to partial route with callout citation
  const prodNzEmerg = engine.evaluate({
    countryCode: 'NZ',
    countryName: 'New Zealand',
    location: 'inside',
    service: 'first_passport',
    urgency: 'emergency'
  });
  assert.strictEqual(prodNzEmerg.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(prodNzEmerg.serviceCoverage.dimensions.urgency.summary.includes('after-hours callout'));

  // --- SCENARIO H: Score Caps & PREPARED Prohibition ---
  [resGenericUrgent, resNoConsularSources, resMxMalformed, resNzMalformed, resInvalidSources].forEach(res => {
    assert.notStrictEqual(res.statusLabel, 'PREPARED', 'Non-verified status must NEVER be PREPARED');
    assert(res.readinessScore <= 80, 'Non-verified status score must be capped <= 80%');
  });

  // --- SCENARIO I: Statutory Preservations ---
  // Malaysia Immigration Department staff: 10-year replacement fees RM 200 / RM 500 / RM 1,000
  const myStaffTiers = [
    { tier: 'first_loss', amount: 200 },
    { tier: 'second_loss', amount: 500 },
    { tier: 'third_loss', amount: 1000 }
  ];
  myStaffTiers.forEach(({ tier, amount }) => {
    const res = engine.evaluate({
      countryCode: 'MY',
      countryName: 'Malaysia',
      location: 'inside',
      service: 'lost_stolen',
      applicantCategory: 'immigration_officers_staff',
      validity: '10_year',
      lossTier: tier
    });
    const feeItem = res.checklist.find(c => c.id === 'official_fee_payment');
    assert.strictEqual(feeItem.feeStatus, 'verified_statutory');
    assert.strictEqual(feeItem.feeRecord.total_replacement_fee, amount);
    assert(feeItem.details.includes(`RM ${amount}`));
    assert(!feeItem.details.includes('calculated difference'));
  });

  // Malaysia JIM staff 5-year replacement -> not_eligible
  const myStaff5yrRep = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'lost_stolen',
    applicantCategory: 'immigration_officers_staff',
    validity: '5_year',
    lossTier: 'first_loss'
  });
  const myStaff5yrFee = myStaff5yrRep.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(myStaff5yrFee.feeStatus, 'not_eligible');
  assert.strictEqual(myStaff5yrFee.feeRecord.status, 'not_eligible');

  // Malaysia JIM staff 10-year original issuance -> RM 0
  const myStaff10yrOrig = engine.evaluate({
    countryCode: 'MY',
    countryName: 'Malaysia',
    location: 'inside',
    service: 'first_passport',
    applicantCategory: 'immigration_officers_staff',
    validity: '10_year'
  });
  const myStaff10OrigFee = myStaff10yrOrig.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(myStaff10OrigFee.feeStatus, 'verified_statutory');
  assert.strictEqual(myStaff10OrigFee.feeRecord.amount, 0);

  // Indonesia minor-under-17 marital status confirmation
  const idMinorUnknown = engine.evaluate({
    countryCode: 'ID',
    countryName: 'Indonesia',
    location: 'inside',
    service: 'first_passport',
    ageExact: 16
  });
  assert.strictEqual(idMinorUnknown.checklist.find(c => c.id === 'official_fee_payment').feeStatus, 'confirmation_required');
  assert(idMinorUnknown.flags.some(f => f.code === 'INDONESIA_MARITAL_STATUS_CONFIRMATION'));

  // All 249 directory entries & dynamic counts (27 verified / 0 linked / 222 needs research)
  const countriesFinal = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'countries.json'), 'utf8'));
  assert.strictEqual(countriesFinal.length, 249);
  assert.strictEqual(countriesFinal.filter(c => c.portal_status === 'verified').length, 27);
  assert.strictEqual(countriesFinal.filter(c => c.portal_status === 'official_portal_linked_rules_not_fully_audited').length, 0);
  assert.strictEqual(countriesFinal.filter(c => c.portal_status === 'official_source_needs_research').length, 222);
});

// 25. Phase 4.3.8 Official Source Trust, Fee Schema Integrity & Claim-Level Evidence Audit (Fixtures A–H)
runTest('Phase 4.3.8 Official Source Trust, Fee Schema Integrity & Claim-Level Evidence Audit (Fixtures A–H)', () => {
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const engine = new PassportRulesEngine(rulePacks);

  // --- FIXTURE A: Trusted Official Domain (Independent Syntax & Trust Evaluation) ---
  const validOfficialUrl = 'https://www.passportindia.gov.in/AppOnlineProject/online/feeSchedule';
  const validExternalUrl = 'https://www.example.com/passport-guide';
  assert.strictEqual(engine.isValidSourceUrl(validOfficialUrl), true, 'Official URL must have valid syntax');
  assert.strictEqual(engine.isValidSourceUrl(validExternalUrl), true, 'External URL also has valid syntax');
  assert.strictEqual(engine.isTrustedOfficialDomain('passportindia.gov.in', 'IN'), true, 'passportindia.gov.in is trusted for IN');
  assert.strictEqual(engine.isTrustedOfficialDomain('www.passportindia.gov.in', 'IN'), true, 'www subdomain is trusted for IN');
  assert.strictEqual(engine.isTrustedOfficialDomain('example.com', 'IN'), false, 'example.com is untrusted');
  assert.strictEqual(engine.isTrustedOfficialUrl(validOfficialUrl, 'IN'), true, 'Official URL is trusted');
  assert.strictEqual(engine.isTrustedOfficialUrl(validExternalUrl, 'IN'), false, 'Valid syntax URL on unapproved domain must be rejected');

  // Non-.gov trusted domains across jurisdictions
  assert.strictEqual(engine.isTrustedOfficialDomain('dfa.ie', 'IE'), true, 'dfa.ie (.ie) trusted for Ireland');
  assert.strictEqual(engine.isTrustedOfficialDomain('canada.ca', 'CA'), true, 'canada.ca (.ca) trusted for Canada');
  assert.strictEqual(engine.isTrustedOfficialDomain('absher.sa', 'SA'), true, 'absher.sa (.sa) trusted for Saudi Arabia');
  assert.strictEqual(engine.isTrustedOfficialDomain('auswaertiges-amt.de', 'DE'), true, 'auswaertiges-amt.de (.de) trusted for Germany');
  assert.strictEqual(engine.isTrustedOfficialDomain('poliziadistato.it', 'IT'), true, 'poliziadistato.it (.it) trusted for Italy');

  // --- FIXTURE B: Look-alike and Unapproved Domains ---
  const lookalikeUrls = [
    'https://passportindia.gov.in.example.com/fees',
    'https://fakepassportindia.gov.in/fees',
    'https://expresspassportindia.com/tatkaal',
    'https://tatkaalpassports.com/apply',
    'https://consular-services-online.org/fees',
    'https://travel.state.gov.phishing.net/apply'
  ];
  lookalikeUrls.forEach(url => {
    assert.strictEqual(engine.isTrustedOfficialUrl(url, 'IN'), false, `Must reject look-alike or unapproved URL: ${url}`);
  });

  // --- FIXTURE C: Generic Homepage Source (Does Not Substantiate Claim-Specific Fields) ---
  const genericHomeUrl = 'https://passportindia.gov.in/';
  assert.strictEqual(engine.isGenericHomepageUrl(genericHomeUrl), true, 'Root path is generic homepage');
  assert.strictEqual(engine.isGenericHomepageUrl('https://passportindia.gov.in/index.html'), true, 'index.html is generic homepage');
  assert.strictEqual(engine.isGenericHomepageUrl('https://passportindia.gov.in/landing'), true, 'landing is generic homepage');
  assert.strictEqual(engine.isGenericHomepageUrl('https://passportindia.gov.in/fees.html'), false, 'Specific fees path is not generic homepage');

  const genericSourceObj = {
    url: 'https://passportindia.gov.in/',
    page_title: 'National Passport Portal Home',
    claim_scope: 'portal_navigation'
  };
  assert.strictEqual(engine.isClaimRelevantSource(genericSourceObj, 'fee'), false, 'Homepage must not substantiate fee claim');
  assert.strictEqual(engine.isClaimRelevantSource(genericSourceObj, 'urgent'), false, 'Homepage must not substantiate urgent claim');
  assert.strictEqual(engine.isClaimRelevantSource(genericSourceObj, 'emergency'), false, 'Homepage must not substantiate emergency claim');
  assert.strictEqual(engine.isClaimRelevantSource(genericSourceObj, 'consular'), false, 'Homepage must not substantiate consular claim');

  // --- FIXTURE D: Malformed Consular Fee Schemas ---
  // Reject empty, placeholder, unrelated numeric keys, string amounts, incomplete tiers
  assert.strictEqual(engine.hasActualConsularFeeSchedule({}), false, 'Reject empty object');
  assert.strictEqual(engine.hasActualConsularFeeSchedule({ status: 'pending', note: 'to be updated' }), false, 'Reject placeholder object');
  assert.strictEqual(engine.hasActualConsularFeeSchedule({ random_key: 500, counter_id: 12 }), false, 'Reject unrelated numeric keys');
  assert.strictEqual(engine.hasActualConsularFeeSchedule({ consular_overseas_usd: { standard_validity: { validity_10_year: '209' } } }), false, 'Reject string amount');
  assert.strictEqual(engine.hasActualConsularFeeSchedule({ consular_overseas_usd: { standard_validity: { validity_1_year: 44 } } }), false, 'Reject incomplete expected validity tiers');
  // Valid Mexico consular schedule
  assert.strictEqual(engine.hasActualConsularFeeSchedule({
    consular_overseas_usd: { standard_validity: { validity_3_year: 101, validity_6_year: 137, validity_10_year: 209 } }
  }), true, 'Accept complete numeric Mexico consular schedule');

  // --- FIXTURE E: Urgent and Emergency Source Relevance ---
  // Pack with valid fee data but generic source -> urgent falls back to general_guidance
  const packGenericUrgent = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ url: 'https://passportindia.gov.in', page_title: 'National Passport Portal Home', claim_scope: 'portal_navigation' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'INR', standard: 1500, tatkaal_surcharge: 2000 },
        documents: [{ document_name: 'Aadhaar' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const resGenUrg = new PassportRulesEngine({ IN: packGenericUrgent }).evaluate({
    countryCode: 'IN', location: 'inside', service: 'first_passport', urgency: 'urgent'
  });
  assert.strictEqual(resGenUrg.serviceCoverage.dimensions.urgency.status, 'general_guidance', 'Generic portal source without urgent evidence must fall back to general_guidance');
  assert.strictEqual(resGenUrg.serviceCoverage.dimensions.urgency.evidence.evidenceLevel, 'valid_syntax_incomplete_claim');
  assert(resGenUrg.readinessScore <= 75, 'Readiness score must be capped <= 75 for general_guidance');

  // Keyword match on unapproved domain must be rejected
  const packEvilTatkaal = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ url: 'https://tatkaalpassports.com/apply', page_title: 'Tatkaal Agent' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'INR', standard: 1500, tatkaal_surcharge: 2000 },
        documents: [{ document_name: 'Aadhaar' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const resEvilUrg = new PassportRulesEngine({ IN: packEvilTatkaal }).evaluate({
    countryCode: 'IN', location: 'inside', service: 'first_passport', urgency: 'urgent'
  });
  assert.strictEqual(resEvilUrg.serviceCoverage.dimensions.urgency.status, 'general_guidance', 'Unapproved domain matching tatkaal keyword must be rejected');
  assert.strictEqual(resEvilUrg.serviceCoverage.dimensions.urgency.evidence.evidenceLevel, 'no_trusted_source');

  // --- FIXTURE F: Base-Service Field-Level Evidence ---
  // F1: Eligibility and documents present with doc source, but generic homepage with NO fee source
  const packDocsOnly = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ url: 'https://passportindia.gov.in', page_title: 'Portal Homepage', claim_scope: 'portal_navigation' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'INR', standard: 1500 },
        documents: [{ document_name: 'Proof of Identity', official_source_url: 'https://passportindia.gov.in/documents/checklist' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const resDocsOnly = new PassportRulesEngine({ IN: packDocsOnly }).evaluate({
    countryCode: 'IN', location: 'inside', service: 'first_passport'
  });
  assert.strictEqual(resDocsOnly.serviceCoverage.dimensions.service.status, 'partial', 'Missing fee source must yield partial service coverage');
  assert.strictEqual(resDocsOnly.serviceCoverage.dimensions.service.evidence.evidenceLevel, 'partial_confirmation');
  assert(resDocsOnly.serviceCoverage.dimensions.service.evidence.verifiedFields.includes('documents'), 'Documents verified');
  assert(!resDocsOnly.serviceCoverage.dimensions.service.evidence.verifiedFields.includes('fees'), 'Fees unverified without fee source');

  // F2: Fees present with fee source, but required documents present with NO doc source
  const packFeesOnly = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [{ url: 'https://passportindia.gov.in/feeSchedule', page_title: 'Fee Schedule', claim_scope: 'fee' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'INR', standard: 1500 },
        documents: [{ document_name: 'Proof of Identity' }], // No doc source URL
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const resFeesOnly = new PassportRulesEngine({ IN: packFeesOnly }).evaluate({
    countryCode: 'IN', location: 'inside', service: 'first_passport'
  });
  assert.strictEqual(resFeesOnly.serviceCoverage.dimensions.service.status, 'partial', 'Missing doc source must yield partial service coverage');
  assert(resFeesOnly.serviceCoverage.dimensions.service.evidence.verifiedFields.includes('fees'), 'Fees verified');
  assert(!resFeesOnly.serviceCoverage.dimensions.service.evidence.verifiedFields.includes('documents'), 'Documents unverified without doc source');

  // --- FIXTURE G: Preservation Assertions ---
  // India Tatkaal official-source & surcharge assertions
  const liveInTatkaal = engine.evaluate({
    countryCode: 'IN', location: 'inside', service: 'first_passport', urgency: 'urgent'
  });
  assert.strictEqual(liveInTatkaal.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(liveInTatkaal.serviceCoverage.dimensions.urgency.evidence.sources.some(s => s.includes('tatkaalPassports')));

  // United States expedited-service source
  const liveUsExpedite = engine.evaluate({
    countryCode: 'US', location: 'inside', service: 'first_passport', urgency: 'urgent'
  });
  assert.strictEqual(liveUsExpedite.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(liveUsExpedite.serviceCoverage.dimensions.urgency.evidence.sources.some(s => s.includes('travel.state.gov')));

  // Mexico emergency & consular schedule
  const liveMxEmerg = engine.evaluate({
    countryCode: 'MX', location: 'abroad', service: 'emergency_travel', urgency: 'emergency'
  });
  assert.strictEqual(liveMxEmerg.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(liveMxEmerg.serviceCoverage.dimensions.urgency.summary.includes('Art. 20 LFD'));

  // New Zealand callout fees
  const liveNzEmerg = engine.evaluate({
    countryCode: 'NZ', location: 'inside', service: 'first_passport', urgency: 'emergency'
  });
  assert.strictEqual(liveNzEmerg.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(liveNzEmerg.serviceCoverage.dimensions.urgency.summary.includes('after-hours callout'));

  // Malaysia staff eligibility and replacement fees
  const myStaff1 = engine.evaluate({
    countryCode: 'MY', location: 'inside', service: 'lost_stolen', applicantCategory: 'immigration_officers_staff', validity: '10_year', lossTier: 'first_loss'
  });
  assert.strictEqual(myStaff1.checklist.find(c => c.id === 'official_fee_payment').feeRecord.total_replacement_fee, 200);

  const myStaff2 = engine.evaluate({
    countryCode: 'MY', location: 'inside', service: 'lost_stolen', applicantCategory: 'immigration_officers_staff', validity: '10_year', lossTier: 'second_loss'
  });
  assert.strictEqual(myStaff2.checklist.find(c => c.id === 'official_fee_payment').feeRecord.total_replacement_fee, 500);

  const myStaff3 = engine.evaluate({
    countryCode: 'MY', location: 'inside', service: 'lost_stolen', applicantCategory: 'immigration_officers_staff', validity: '10_year', lossTier: 'third_loss'
  });
  assert.strictEqual(myStaff3.checklist.find(c => c.id === 'official_fee_payment').feeRecord.total_replacement_fee, 1000);

  const myStaff5yr = engine.evaluate({
    countryCode: 'MY', location: 'inside', service: 'lost_stolen', applicantCategory: 'immigration_officers_staff', validity: '5_year', lossTier: 'first_loss'
  });
  assert.strictEqual(myStaff5yr.checklist.find(c => c.id === 'official_fee_payment').feeStatus, 'not_eligible');

  const myStaffOrig = engine.evaluate({
    countryCode: 'MY', location: 'inside', service: 'first_passport', applicantCategory: 'immigration_officers_staff', validity: '10_year'
  });
  assert.strictEqual(myStaffOrig.checklist.find(c => c.id === 'official_fee_payment').feeRecord.amount, 0);

  // Indonesia under-17 marital status confirmation
  const idMinor = engine.evaluate({
    countryCode: 'ID', location: 'inside', service: 'first_passport', ageExact: 16
  });
  assert.strictEqual(idMinor.checklist.find(c => c.id === 'official_fee_payment').feeStatus, 'confirmation_required');
  assert(idMinor.flags.some(f => f.code === 'INDONESIA_MARITAL_STATUS_CONFIRMATION'));

  // Directory counts: 249 total, 27 verified, 0 linked, 222 research
  const allCountries = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'countries.json'), 'utf8'));
  assert.strictEqual(allCountries.length, 249);
  assert.strictEqual(allCountries.filter(c => c.portal_status === 'verified').length, 27);
  assert.strictEqual(allCountries.filter(c => c.portal_status === 'official_portal_linked_rules_not_fully_audited').length, 0);
  assert.strictEqual(allCountries.filter(c => c.portal_status === 'official_source_needs_research').length, 222);

  // --- FIXTURE H: Readiness Protection ---
  [resGenUrg, resEvilUrg, resDocsOnly, resFeesOnly].forEach(res => {
    assert.notStrictEqual(res.statusLabel, 'PREPARED', 'Non-verified evaluation must NEVER be marked PREPARED');
    assert(res.readinessScore <= 80, 'Score must be capped <= 80%');
  });
});

// 26. Phase 4.3.9 Official Domain-Trust Independence, Generic-Homepage Disallowance & Claim-Evidence Binding (Fixtures A–H)
runTest('Phase 4.3.9 Official Domain-Trust Independence, Generic-Homepage Disallowance & Claim-Evidence Binding (Fixtures A–H)', () => {
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const engine = new PassportRulesEngine(rulePacks);

  // --- FIXTURE A: Self-authorized trusted domain ---
  // A pack cannot self-authorize a new unapproved domain in pack.trusted_domains
  const packWithAttacker = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    official_portal_url: 'https://attacker.example/portal',
    trusted_domains: ['attacker.example', 'passportindia.gov.in'],
    sources: [
      { url: 'https://attacker.example/fee', publisher: 'Attacker Authority', claim_scope: 'fee' },
      { url: 'https://attacker.example/docs', publisher: 'Attacker Authority', claim_scope: 'documents' },
      { url: 'https://attacker.example/elig', publisher: 'Attacker Authority', claim_scope: 'eligibility' }
    ],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        sources: [
          { url: 'https://attacker.example/fee', claim_scope: 'fee' },
          { url: 'https://attacker.example/docs', claim_scope: 'documents' },
          { url: 'https://attacker.example/elig', claim_scope: 'eligibility' }
        ],
        fees: { currency: 'INR', standard: 1500 },
        documents: [{ document_name: 'Aadhaar' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const trustedDomains = PassportRulesEngine.getTrustedOfficialDomains('IN', packWithAttacker);
  assert(!trustedDomains.includes('attacker.example'), 'Fixture A: attacker.example must not be authorized in getTrustedOfficialDomains');
  assert.strictEqual(PassportRulesEngine.isTrustedOfficialDomain('attacker.example', 'IN', packWithAttacker), false, 'Fixture A: isTrustedOfficialDomain must reject self-authorized domain');
  assert.strictEqual(PassportRulesEngine.isTrustedOfficialUrl('https://attacker.example/fee', 'IN', packWithAttacker), false, 'Fixture A: isTrustedOfficialUrl must reject URL from self-authorized domain');

  const engineAttacker = new PassportRulesEngine({ IN: packWithAttacker });
  const resAttacker = engineAttacker.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport' });
  assert.strictEqual(resAttacker.serviceCoverage.dimensions.service.status, 'general_guidance', 'Fixture A: Self-authorized domain pack must fall back to general_guidance');
  assert.strictEqual(resAttacker.serviceCoverage.dimensions.service.evidence.evidenceLevel, 'no_trusted_source');
  assert(resAttacker.readinessScore <= 75, 'Fixture A: Score must be capped <= 75%');
  assert.notStrictEqual(resAttacker.statusLabel, 'PREPARED', 'Fixture A: Readiness label must NOT be PREPARED');

  // --- FIXTURE B: Look-alike and Unapproved Domains ---
  const lookalikes = [
    'passportindia.gov.in.evil.com',
    'fakepassportindia.gov.in',
    'expresspassportindia.com',
    'tatkaalpassports.com',
    'consular-services-online.org',
    'travel.state.gov.phishing.net',
    'www.passportindia.gov.in.attacker.org'
  ];
  lookalikes.forEach(host => {
    assert.strictEqual(PassportRulesEngine.isTrustedOfficialDomain(host, 'IN'), false, `Fixture B: Hostname ${host} must be rejected`);
    assert.strictEqual(PassportRulesEngine.isTrustedOfficialUrl(`https://${host}/passport`, 'IN'), false, `Fixture B: URL https://${host}/passport must be rejected`);
  });
  // Approved subdomains must still succeed
  assert.strictEqual(PassportRulesEngine.isTrustedOfficialDomain('portal2.passportindia.gov.in', 'IN'), true, 'Approved dot-rooted subdomain must pass');
  assert.strictEqual(PassportRulesEngine.isTrustedOfficialDomain('passportindia.gov.in', 'IN'), true, 'Approved root domain must pass');

  // Reject insecure HTTP by default; source-level allow_insecure_http metadata CANNOT self-authorize
  assert.strictEqual(PassportRulesEngine.isTrustedOfficialUrl('http://passportindia.gov.in/feeSchedule', 'IN'), false, 'Fixture B: Insecure HTTP must be rejected by default');
  const unapprovedHttpSource = {
    url: 'http://passportindia.gov.in/feeSchedule',
    allow_insecure_http: true,
    review_rationale: 'Legacy government portal gateway claimed in 2026'
  };
  assert.strictEqual(PassportRulesEngine.isTrustedOfficialUrl('http://passportindia.gov.in/feeSchedule', 'IN', null, unapprovedHttpSource), false, 'Fixture B: Unapproved HTTP source with metadata must be rejected');

  // --- FIXTURE C: Generic Homepage Fee-Record Bypass ---
  // A trusted official root URL with fee record metadata (amount, official_replacement_amount, applicant_category)
  const genericSourceWithAmount = {
    url: 'https://passportindia.gov.in/',
    amount: 1500
  };
  const genericSourceWithReplacement = {
    url: 'https://passportindia.gov.in/',
    official_replacement_amount: 2000
  };
  const genericSourceWithCategory = {
    url: 'https://passportindia.gov.in/',
    applicant_category: 'tatkaal'
  };
  assert.strictEqual(engine.isClaimRelevantSource(genericSourceWithAmount, 'fee'), false, 'Fixture C: Root URL with amount must NOT substantiate fee claim');
  assert.strictEqual(engine.isClaimRelevantSource(genericSourceWithReplacement, 'fee'), false, 'Fixture C: Root URL with official_replacement_amount must NOT substantiate fee claim');
  assert.strictEqual(engine.isClaimRelevantSource(genericSourceWithCategory, 'fee'), false, 'Fixture C: Root URL with applicant_category must NOT substantiate fee claim');

  // Pack with only generic root source + fee data
  const packRootOnly = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    official_portal_url: 'https://passportindia.gov.in/',
    sources: [{ url: 'https://passportindia.gov.in/', page_title: 'Official Portal' }],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        fees: { currency: 'INR', standard: 1500, fee_records: [{ amount: 1500, url: 'https://passportindia.gov.in/' }] },
        documents: [{ document_name: 'Aadhaar' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const resRootOnly = new PassportRulesEngine({ IN: packRootOnly }).evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport' });
  assert.strictEqual(resRootOnly.serviceCoverage.dimensions.service.status, 'general_guidance', 'Fixture C: Root only pack must be general_guidance');
  assert(!resRootOnly.serviceCoverage.dimensions.service.evidence.verifiedFields.includes('fees'), 'Fixture C: Fees must NOT be verified from root URL');
  assert(resRootOnly.readinessScore <= 75, 'Fixture C: Score must cap <= 75%');
  assert.notStrictEqual(resRootOnly.statusLabel, 'PREPARED', 'Fixture C: Status must NOT be PREPARED');

  // --- FIXTURE D: Generic Homepage Document-Record Bypass ---
  const docOnRoot = {
    document_name: 'Birth Certificate',
    url: 'https://passportindia.gov.in/'
  };
  const docOnIndexPath = {
    document_name: 'Citizenship Evidence',
    url: 'https://passportindia.gov.in/index.html'
  };
  assert.strictEqual(engine.isClaimRelevantSource(docOnRoot, 'documents'), false, 'Fixture D: Document on root URL must NOT substantiate documents claim');
  assert.strictEqual(engine.isClaimRelevantSource(docOnIndexPath, 'documents'), false, 'Fixture D: Document on /index.html must NOT substantiate documents claim');

  // --- FIXTURE E: Cross-Claim Evidence Contamination ---
  // Pack with ONLY a fee-specific URL: Fee evidence cannot automatically verify eligibility or steps
  const feeOnlySource = {
    url: 'https://passportindia.gov.in/AppOnlineProject/online/feeSchedule',
    page_title: 'Passport Fee Structure and Payment Guidelines'
  };
  assert.strictEqual(engine.isClaimRelevantSource(feeOnlySource, 'fee'), true, 'Fixture E: Fee schedule URL must substantiate fee');
  assert.strictEqual(engine.isClaimRelevantSource(feeOnlySource, 'eligibility'), false, 'Fixture E: Fee schedule URL must NOT substantiate eligibility');
  assert.strictEqual(engine.isClaimRelevantSource(feeOnlySource, 'steps'), false, 'Fixture E: Fee schedule URL must NOT substantiate steps');
  assert.strictEqual(engine.isClaimRelevantSource(feeOnlySource, 'documents'), false, 'Fixture E: Fee schedule URL must NOT substantiate documents');

  const packFeeOnlyCross = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    official_portal_url: 'https://passportindia.gov.in',
    sources: [feeOnlySource],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        sources: [feeOnlySource],
        fees: { currency: 'INR', standard: 1500 },
        documents: [{ document_name: 'Aadhaar' }],
        eligibility: [{ rule: 'Citizen' }],
        steps: [{ step: 'Apply online' }]
      }
    }
  };
  const resFeeCross = new PassportRulesEngine({ IN: packFeeOnlyCross }).evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport' });
  assert.strictEqual(resFeeCross.serviceCoverage.dimensions.service.status, 'partial', 'Fixture E: Fee-only evidence must yield partial coverage');
  assert(resFeeCross.serviceCoverage.dimensions.service.evidence.verifiedFields.includes('fees'), 'Fixture E: verifiedFields must include fees');
  assert(!resFeeCross.serviceCoverage.dimensions.service.evidence.verifiedFields.includes('eligibility'), 'Fixture E: verifiedFields must NOT include eligibility');
  assert(!resFeeCross.serviceCoverage.dimensions.service.evidence.verifiedFields.includes('documents'), 'Fixture E: verifiedFields must NOT include documents');
  assert(!resFeeCross.serviceCoverage.dimensions.service.evidence.verifiedFields.includes('steps'), 'Fixture E: verifiedFields must NOT include steps');
  assert(resFeeCross.readinessScore <= 80, 'Fixture E: Readiness score must cap <= 80% for partial');
  assert.notStrictEqual(resFeeCross.statusLabel, 'PREPARED', 'Fixture E: Status must NOT be PREPARED');

  // --- FIXTURE F: Explicit Metadata Bypass ---
  // Broad wildcard 'all' cannot bypass claim-specific evidence checks
  const wildcardAllClaims = {
    url: 'https://passportindia.gov.in/',
    claims: ['all']
  };
  const wildcardAllScope = {
    url: 'https://passportindia.gov.in/',
    claim_scope: 'all'
  };
  const nonHomeWildcard = {
    url: 'https://passportindia.gov.in/fees',
    claims: ['all']
  };
  assert.strictEqual(engine.isClaimRelevantSource(wildcardAllClaims, 'fee'), false, 'Fixture F: claims: ["all"] on root must be rejected');
  assert.strictEqual(engine.isClaimRelevantSource(wildcardAllScope, 'documents'), false, 'Fixture F: claim_scope: "all" on root must be rejected');
  assert.strictEqual(engine.isClaimRelevantSource(nonHomeWildcard, 'documents'), false, 'Fixture F: claims: ["all"] on /fees must not substantiate documents');

  // --- FIXTURE G: Positive Controls ---
  // India Tatkaal retains partial route status with trusted source
  const inTatkaalPos = engine.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport', urgency: 'urgent' });
  assert.strictEqual(inTatkaalPos.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(inTatkaalPos.serviceCoverage.dimensions.urgency.evidence.sources.some(s => s.includes('tatkaalPassports')));

  // US Expedited retains partial route status with trusted source
  const usExpeditePos = engine.evaluate({ countryCode: 'US', location: 'inside', service: 'first_passport', urgency: 'urgent' });
  assert.strictEqual(usExpeditePos.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(usExpeditePos.serviceCoverage.dimensions.urgency.evidence.sources.some(s => s.includes('travel.state.gov')));

  // Mexico consular & emergency schedule with Art. 20 LFD retains partial route status
  const mxEmergPos = engine.evaluate({ countryCode: 'MX', location: 'abroad', service: 'emergency_travel', urgency: 'emergency' });
  assert.strictEqual(mxEmergPos.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(mxEmergPos.serviceCoverage.dimensions.urgency.summary.includes('Art. 20 LFD'));

  // New Zealand after-hours callout retains partial route status
  const nzEmergPos = engine.evaluate({ countryCode: 'NZ', location: 'inside', service: 'first_passport', urgency: 'emergency' });
  assert.strictEqual(nzEmergPos.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(nzEmergPos.serviceCoverage.dimensions.urgency.summary.includes('after-hours callout'));

  // --- FIXTURE H: Preservation ---
  // Malaysia JIM staff eligibility and replacement fee tiers
  const myStaff1 = engine.evaluate({ countryCode: 'MY', location: 'inside', service: 'lost_stolen', applicantCategory: 'immigration_officers_staff', validity: '10_year', lossTier: 'first_loss' });
  assert.strictEqual(myStaff1.checklist.find(c => c.id === 'official_fee_payment').feeRecord.total_replacement_fee, 200);

  const myStaff2 = engine.evaluate({ countryCode: 'MY', location: 'inside', service: 'lost_stolen', applicantCategory: 'immigration_officers_staff', validity: '10_year', lossTier: 'second_loss' });
  assert.strictEqual(myStaff2.checklist.find(c => c.id === 'official_fee_payment').feeRecord.total_replacement_fee, 500);

  const myStaff3 = engine.evaluate({ countryCode: 'MY', location: 'inside', service: 'lost_stolen', applicantCategory: 'immigration_officers_staff', validity: '10_year', lossTier: 'third_loss' });
  assert.strictEqual(myStaff3.checklist.find(c => c.id === 'official_fee_payment').feeRecord.total_replacement_fee, 1000);

  const myStaff5yr = engine.evaluate({ countryCode: 'MY', location: 'inside', service: 'lost_stolen', applicantCategory: 'immigration_officers_staff', validity: '5_year', lossTier: 'first_loss' });
  assert.strictEqual(myStaff5yr.checklist.find(c => c.id === 'official_fee_payment').feeStatus, 'not_eligible');

  const myStaffOrig = engine.evaluate({ countryCode: 'MY', location: 'inside', service: 'first_passport', applicantCategory: 'immigration_officers_staff', validity: '10_year' });
  assert.strictEqual(myStaffOrig.checklist.find(c => c.id === 'official_fee_payment').feeRecord.amount, 0);

  // Indonesia under-17 marital-status confirmation
  const idMinor = engine.evaluate({ countryCode: 'ID', location: 'inside', service: 'first_passport', ageExact: 16 });
  assert.strictEqual(idMinor.checklist.find(c => c.id === 'official_fee_payment').feeStatus, 'confirmation_required');
  assert(idMinor.flags.some(f => f.code === 'INDONESIA_MARITAL_STATUS_CONFIRMATION'));

  // Mexico Emergency Type E & Art. 20 LFD +30%
  const mxEmergencyPolicy = engine.evaluate({ countryCode: 'MX', location: 'abroad', service: 'first_passport', age: 'adult', urgency: 'emergency' });
  assert(mxEmergencyPolicy.flags.some(f => f.code === 'MEXICO_EMERGENCY_APPOINTMENT_POLICY'));

  // 249 Directory counts: 27 verified / 0 linked / 222 research
  const allCountries = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'countries.json'), 'utf8'));
  assert.strictEqual(allCountries.length, 249);
  assert.strictEqual(allCountries.filter(c => c.portal_status === 'verified').length, 27);
  assert.strictEqual(allCountries.filter(c => c.portal_status === 'official_portal_linked_rules_not_fully_audited').length, 0);
  assert.strictEqual(allCountries.filter(c => c.portal_status === 'official_source_needs_research').length, 222);

  // Negative fixtures readiness score cap and PREPARED label protection
  [resAttacker, resRootOnly, resFeeCross].forEach(res => {
    assert.notStrictEqual(res.statusLabel, 'PREPARED', 'Negative fixture must NEVER be marked PREPARED');
    assert(res.readinessScore <= 80, 'Negative fixture score must be capped <= 80%');
  });
});

// 27. Phase 4.3.10 Exception Authorization Hardening & Final Evidence Integrity Audit (Fixtures 1–10)
runTest('Phase 4.3.10 Exception Authorization Hardening & Final Evidence Integrity Audit (Fixtures 1–10)', () => {
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const engine = new PassportRulesEngine(rulePacks);

  // --- FIXTURE 1: Fake homepage_claim_exception on unapproved homepage ---
  // A generic homepage with self-authorizing metadata must be rejected
  const fakeHomepageSource = {
    url: 'https://passportindia.gov.in/',
    homepage_claim_exception: true,
    exception_rationale: 'Primary official portal for statutory passport checklists and fee schedules'
  };
  ['fee', 'documents', 'eligibility', 'steps', 'urgent', 'consular', 'emergency'].forEach(claim => {
    assert.strictEqual(
      engine.isClaimRelevantSource(fakeHomepageSource, claim, 'IN'),
      false,
      `Fixture 1: Fake homepage exception on root must reject claim '${claim}'`
    );
  });
  // Pack relying solely on fake homepage exception must fall back to general_guidance
  const packFakeHome = {
    country_code: 'IN',
    country_name: 'India',
    rule_pack_status: 'verified',
    official_portal_url: 'https://passportindia.gov.in/',
    sources: [fakeHomepageSource],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        sources: [fakeHomepageSource],
        fees: { currency: 'INR', standard: 1500 },
        documents: [{ document_name: 'Aadhaar' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const resFakeHome = new PassportRulesEngine({ IN: packFakeHome }).evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport' });
  assert.strictEqual(resFakeHome.serviceCoverage.dimensions.service.status, 'general_guidance', 'Fixture 1: Fake homepage exception pack must be general_guidance');
  assert(resFakeHome.readinessScore <= 75, 'Fixture 1: Score must cap <= 75%');
  assert.notStrictEqual(resFakeHome.statusLabel, 'PREPARED', 'Fixture 1: Must not be PREPARED');

  // --- FIXTURE 2: Approved central homepage exception for the wrong claim ---
  // NZ portal https://www.passports.govt.nz/ is approved for documents, eligibility, steps - NOT for fee!
  const nzApprovedHome = {
    url: 'https://www.passports.govt.nz/'
  };
  assert.strictEqual(
    engine.isClaimRelevantSource(nzApprovedHome, 'fee', 'NZ'),
    false,
    'Fixture 2: Approved NZ homepage exception must be rejected for fee claim'
  );
  assert.strictEqual(
    engine.isClaimRelevantSource(nzApprovedHome, 'urgent', 'NZ'),
    false,
    'Fixture 2: Approved NZ homepage exception must be rejected for urgent claim'
  );
  assert.strictEqual(
    engine.isClaimRelevantSource(nzApprovedHome, 'emergency', 'NZ'),
    false,
    'Fixture 2: Approved NZ homepage exception must be rejected for emergency claim'
  );

  // --- FIXTURE 3: Approved central homepage exception for exact permitted claims ---
  assert.strictEqual(
    engine.isClaimRelevantSource(nzApprovedHome, 'documents', 'NZ'),
    true,
    'Fixture 3: Approved NZ homepage exception must be accepted for documents claim'
  );
  assert.strictEqual(
    engine.isClaimRelevantSource(nzApprovedHome, 'eligibility', 'NZ'),
    true,
    'Fixture 3: Approved NZ homepage exception must be accepted for eligibility claim'
  );
  assert.strictEqual(
    engine.isClaimRelevantSource(nzApprovedHome, 'steps', 'NZ'),
    true,
    'Fixture 3: Approved NZ homepage exception must be accepted for steps claim'
  );

  // AU portal https://www.passports.gov.au/ is approved for fee, documents, eligibility, steps
  const auApprovedHome = { url: 'https://www.passports.gov.au/' };
  assert.strictEqual(engine.isClaimRelevantSource(auApprovedHome, 'fee', 'AU'), true, 'Fixture 3: AU approved homepage accepted for fee');
  assert.strictEqual(engine.isClaimRelevantSource(auApprovedHome, 'documents', 'AU'), true, 'Fixture 3: AU approved homepage accepted for documents');
  assert.strictEqual(engine.isClaimRelevantSource(auApprovedHome, 'urgent', 'AU'), false, 'Fixture 3: AU approved homepage rejected for unapproved urgent claim');

  // --- FIXTURE 4: HTTP source with source-object allow_insecure_http: true and fake rationale ---
  const fakeHttpSource = {
    url: 'http://passportindia.gov.in/feeSchedule',
    allow_insecure_http: true,
    review_rationale: 'Legacy portal claimed verified in 2026'
  };
  assert.strictEqual(
    PassportRulesEngine.isTrustedOfficialUrl(fakeHttpSource.url, 'IN', null, fakeHttpSource),
    false,
    'Fixture 4: HTTP source with metadata allow_insecure_http must be rejected'
  );
  assert.strictEqual(
    engine.isClaimRelevantSource(fakeHttpSource, 'fee', 'IN'),
    false,
    'Fixture 4: Insecure HTTP source must not substantiate claims'
  );

  // URL Credentials and Non-Standard Port Rejection
  assert.strictEqual(
    PassportRulesEngine.isTrustedOfficialUrl('https://admin:secret@travel.state.gov/passports', 'US'),
    false,
    'Fixture 4: URL with userinfo/credentials must be rejected'
  );
  assert.strictEqual(
    PassportRulesEngine.isTrustedOfficialUrl('https://travel.state.gov:8443/passports', 'US'),
    false,
    'Fixture 4: URL with non-standard port 8443 must be rejected'
  );
  assert.strictEqual(
    PassportRulesEngine.isTrustedOfficialUrl('https://travel.state.gov:443/passports', 'US'),
    true,
    'Fixture 4: Standard HTTPS port 443 must be accepted'
  );

  // --- FIXTURE 5: HTTP source with centrally approved exception ---
  const approvedHttpUrl = 'http://www.immigration.gov.lk/legacy-fee-bulletin';
  assert.strictEqual(
    PassportRulesEngine.isTrustedOfficialUrl(approvedHttpUrl, 'LK', null, null, 'fee'),
    true,
    'Fixture 5: Centrally approved HTTP exception must be accepted for fee claim'
  );
  assert.strictEqual(
    PassportRulesEngine.isTrustedOfficialUrl(approvedHttpUrl, 'LK', null, null, 'documents'),
    false,
    'Fixture 5: Centrally approved HTTP exception must be rejected for outside scope claim (documents)'
  );
  assert.strictEqual(
    PassportRulesEngine.isTrustedOfficialUrl(approvedHttpUrl, 'IN', null, null, 'fee'),
    false,
    'Fixture 5: Centrally approved HTTP exception must be rejected for different country'
  );

  // --- FIXTURE 6: Unapproved HTTPS hostname added to pack.trusted_domains ---
  const packAttacker = {
    country_code: 'IN',
    trusted_domains: ['attacker-portal.org', 'passportindia.gov.in']
  };
  const trustedForAttacker = PassportRulesEngine.getTrustedOfficialDomains('IN', packAttacker);
  assert(!trustedForAttacker.includes('attacker-portal.org'), 'Fixture 6: pack.trusted_domains must not inject unapproved root');
  assert.strictEqual(PassportRulesEngine.isTrustedOfficialDomain('attacker-portal.org', 'IN', packAttacker), false);
  assert.strictEqual(PassportRulesEngine.isTrustedOfficialUrl('https://attacker-portal.org/fees', 'IN', packAttacker), false);

  // --- FIXTURE 7: Attempted runtime mutation of authoritative domain map ---
  const initialInDomains = [...PassportRulesEngine.getTrustedOfficialDomains('IN')];
  try {
    PassportRulesEngine.AUTHORITATIVE_OFFICIAL_DOMAINS.IN.push('mutated-domain.com');
  } catch (e) {
    // Expected in strict mode / frozen object
  }
  try {
    PassportRulesEngine.AUTHORITATIVE_OFFICIAL_DOMAINS.ATTACKER = ['attacker.com'];
  } catch (e) {
    // Expected in strict mode / frozen object
  }
  try {
    delete PassportRulesEngine.AUTHORITATIVE_OFFICIAL_DOMAINS.IN;
  } catch (e) {
    // Expected in strict mode / frozen object
  }
  assert.deepStrictEqual(PassportRulesEngine.getTrustedOfficialDomains('IN'), initialInDomains, 'Fixture 7: AUTHORITATIVE_OFFICIAL_DOMAINS must remain immutable');
  assert.strictEqual(PassportRulesEngine.isTrustedOfficialDomain('mutated-domain.com', 'IN'), false, 'Fixture 7: Mutated domain must not be trusted');
  assert.deepStrictEqual(PassportRulesEngine.getTrustedOfficialDomains('ATTACKER'), [], 'Fixture 7: Injected country must not exist');

  // --- FIXTURE 8: Official but unrelated endpoint incorrectly labeled ---
  const unrelatedLegalWarning = {
    url: 'https://travel.state.gov/content/travel/en/legal/travel-warnings.html',
    claims: ['fee', 'documents', 'eligibility', 'urgent', 'consular', 'emergency'],
    claim_scope: 'fee',
    page_title: 'Travel Advisories and Legal Warnings'
  };
  const unrelatedPrivacy = {
    url: 'https://passportindia.gov.in/AppOnlineProject/online/privacyPolicy.html',
    claims: ['fee', 'documents', 'eligibility', 'urgent', 'consular', 'emergency'],
    claim_scope: 'fee',
    page_title: 'Portal Privacy Policy'
  };
  const unrelatedTraffic = {
    url: 'https://www.gov.uk/browse/driving/highway-code-penalties',
    claims: ['fee'],
    claim_scope: 'fee',
    page_title: 'Highway Code Penalties'
  };

  ['fee', 'documents', 'eligibility', 'urgent', 'consular', 'emergency'].forEach(c => {
    assert.strictEqual(engine.isClaimRelevantSource(unrelatedLegalWarning, c, 'US'), false, `Fixture 8: Unrelated legal warning must not receive '${c}' claim`);
    assert.strictEqual(engine.isClaimRelevantSource(unrelatedPrivacy, c, 'IN'), false, `Fixture 8: Unrelated privacy policy must not receive '${c}' claim`);
  });
  assert.strictEqual(engine.isClaimRelevantSource(unrelatedTraffic, 'fee', 'GB'), false, 'Fixture 8: Traffic penalties must not receive fee claim');

  // Pack with only unrelated endpoints must receive general_guidance and capped score
  const packUnrelatedOnly = {
    country_code: 'US',
    country_name: 'United States',
    rule_pack_status: 'verified',
    official_portal_url: 'https://travel.state.gov/passports',
    sources: [unrelatedLegalWarning],
    jurisdictions: [{ application_channel: 'domestic' }],
    services: {
      first_passport: {
        availability_status: 'available',
        sources: [unrelatedLegalWarning],
        fees: { currency: 'USD', standard: 130 },
        documents: [{ document_name: 'Birth Certificate' }],
        eligibility: [{ rule: 'Citizen' }]
      }
    }
  };
  const resUnrelated = new PassportRulesEngine({ US: packUnrelatedOnly }).evaluate({ countryCode: 'US', location: 'inside', service: 'first_passport' });
  assert.strictEqual(resUnrelated.serviceCoverage.dimensions.service.status, 'general_guidance', 'Fixture 8: Pack with only unrelated endpoints must be general_guidance');
  assert.strictEqual(resUnrelated.serviceCoverage.dimensions.service.evidence.verifiedFields.length, 0, 'Fixture 8: No fields verified');
  assert(resUnrelated.readinessScore <= 75, 'Fixture 8: Score must cap <= 75%');
  assert.notStrictEqual(resUnrelated.statusLabel, 'PREPARED', 'Fixture 8: Status must not be PREPARED');

  // --- FIXTURE 9: Preservation of Verified Statutory Regressions ---
  // India Tatkaal
  const inTatkaal = engine.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport', urgency: 'urgent' });
  assert.strictEqual(inTatkaal.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(inTatkaal.serviceCoverage.dimensions.urgency.evidence.sources.some(s => s.includes('tatkaalPassports')));

  // US Expedited
  const usExpedite = engine.evaluate({ countryCode: 'US', location: 'inside', service: 'first_passport', urgency: 'urgent' });
  assert.strictEqual(usExpedite.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(usExpedite.serviceCoverage.dimensions.urgency.evidence.sources.some(s => s.includes('travel.state.gov')));

  // Mexico Emergency & Art. 20 LFD +30%
  const mxEmergency = engine.evaluate({ countryCode: 'MX', location: 'abroad', service: 'emergency_travel', urgency: 'emergency' });
  assert.strictEqual(mxEmergency.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(mxEmergency.serviceCoverage.dimensions.urgency.summary.includes('Art. 20 LFD'));
  assert(mxEmergency.flags.some(f => f.code === 'MEXICO_EMERGENCY_APPOINTMENT_POLICY'));

  // New Zealand Callout
  const nzCallout = engine.evaluate({ countryCode: 'NZ', location: 'inside', service: 'first_passport', urgency: 'emergency' });
  assert.strictEqual(nzCallout.serviceCoverage.dimensions.urgency.status, 'partial');
  assert(nzCallout.serviceCoverage.dimensions.urgency.summary.includes('after-hours callout'));

  // Malaysia JIM Staff 10-yr Replacement Tiers
  const myStaff10yr1 = engine.evaluate({ countryCode: 'MY', location: 'inside', service: 'lost_stolen', applicantCategory: 'immigration_officers_staff', validity: '10_year', lossTier: 'first_loss' });
  assert.strictEqual(myStaff10yr1.checklist.find(c => c.id === 'official_fee_payment').feeRecord.total_replacement_fee, 200);
  const myStaff10yr2 = engine.evaluate({ countryCode: 'MY', location: 'inside', service: 'lost_stolen', applicantCategory: 'immigration_officers_staff', validity: '10_year', lossTier: 'second_loss' });
  assert.strictEqual(myStaff10yr2.checklist.find(c => c.id === 'official_fee_payment').feeRecord.total_replacement_fee, 500);
  const myStaff10yr3 = engine.evaluate({ countryCode: 'MY', location: 'inside', service: 'lost_stolen', applicantCategory: 'immigration_officers_staff', validity: '10_year', lossTier: 'third_loss' });
  assert.strictEqual(myStaff10yr3.checklist.find(c => c.id === 'official_fee_payment').feeRecord.total_replacement_fee, 1000);
  const myStaff5yrIneligible = engine.evaluate({ countryCode: 'MY', location: 'inside', service: 'lost_stolen', applicantCategory: 'immigration_officers_staff', validity: '5_year', lossTier: 'first_loss' });
  assert.strictEqual(myStaff5yrIneligible.checklist.find(c => c.id === 'official_fee_payment').feeStatus, 'not_eligible');
  const myStaffOrigGratis = engine.evaluate({ countryCode: 'MY', location: 'inside', service: 'first_passport', applicantCategory: 'immigration_officers_staff', validity: '10_year' });
  assert.strictEqual(myStaffOrigGratis.checklist.find(c => c.id === 'official_fee_payment').feeRecord.amount, 0);

  // Indonesia Under-17 Marital Status Exception
  const idMinorMarital = engine.evaluate({ countryCode: 'ID', location: 'inside', service: 'first_passport', ageExact: 16 });
  assert.strictEqual(idMinorMarital.checklist.find(c => c.id === 'official_fee_payment').feeStatus, 'confirmation_required');
  assert(idMinorMarital.flags.some(f => f.code === 'INDONESIA_MARITAL_STATUS_CONFIRMATION'));

  // --- FIXTURE 10: Strict Directory Counts ---
  const allCountries = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'countries.json'), 'utf8'));
  assert.strictEqual(allCountries.length, 249, 'Total countries must be exactly 249');
  assert.strictEqual(allCountries.filter(c => c.portal_status === 'verified').length, 27, 'Verified countries must be exactly 27');
  assert.strictEqual(allCountries.filter(c => c.portal_status === 'official_portal_linked_rules_not_fully_audited').length, 0, 'Linked countries must be exactly 0');
  assert.strictEqual(allCountries.filter(c => c.portal_status === 'official_source_needs_research').length, 222, 'Research countries must be exactly 222');
});

// 28. Phase B: End-to-End Security Hardening, Input Validation, CSP & Prototype Pollution Resistance
runTest('Phase B: Security Hardening, Input Validation, CSP & Prototype Pollution Resistance', () => {
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const { PassportTools } = require('../js/tools.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const engine = new PassportRulesEngine(rulePacks);

  // 1. Safe evaluate() with null, undefined, primitive, or array input
  const nullEval = engine.evaluate(null);
  assert(nullEval && typeof nullEval === 'object', 'evaluate(null) must return safe object');
  assert.strictEqual(nullEval.country.code, 'IN', 'evaluate(null) must default safely to IN');

  const undefEval = engine.evaluate(undefined);
  assert(undefEval && typeof undefEval === 'object', 'evaluate(undefined) must return safe object');

  const strEval = engine.evaluate('malicious_string');
  assert(strEval && typeof strEval === 'object', 'evaluate(string) must return safe object');

  const arrEval = engine.evaluate(['malicious_array']);
  assert(arrEval && typeof arrEval === 'object', 'evaluate(array) must return safe object');

  // 2. Prototype property names as country codes (prevent prototype pollution & crashes)
  const protoKeys = ['constructor', 'toString', 'valueOf', '__proto__', 'isPrototypeOf', 'propertyIsEnumerable'];
  protoKeys.forEach(key => {
    assert.deepStrictEqual(PassportRulesEngine.getTrustedOfficialDomains(key), [], `getTrustedOfficialDomains('${key}') must return empty array`);
    assert.deepStrictEqual(PassportRulesEngine.getTrustedOfficialDomains(key, { trusted_domains: ['malicious.com'] }), [], `getTrustedOfficialDomains('${key}') with pack must not authorize domains`);
    assert.strictEqual(PassportRulesEngine.isTrustedOfficialDomain('example.com', key), false, `isTrustedOfficialDomain with '${key}' must return false`);
  });

  // 3. CSP and Referrer Policy in index.html
  const htmlContent = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(htmlContent.includes('http-equiv="Content-Security-Policy"'), 'index.html must enforce Content-Security-Policy');
  assert(htmlContent.includes("default-src 'self'"), 'CSP must specify default-src \'self\'');
  assert(htmlContent.includes("script-src 'self';"), 'CSP must specify strict script-src \'self\' without unsafe-inline');
  assert(!htmlContent.includes("script-src 'self' 'unsafe-inline'"), 'CSP script-src must not allow unsafe-inline');
  assert(htmlContent.includes("object-src 'none'"), 'CSP must forbid plugins with object-src \'none\'');
  assert(htmlContent.includes('name="referrer" content="strict-origin-when-cross-origin"'), 'index.html must enforce strict referrer policy');
  assert(htmlContent.includes('data-open-modal="methodology"'), 'Methodology button must use declarative data-open-modal');

  // 4. Tools edge cases (NaN / invalid date resilience)
  const invalidDateRes = PassportTools.evaluateExpiry('not-a-date', '2026-12-31');
  assert.strictEqual(invalidDateRes.valid, false, 'Invalid date must be rejected');
  assert.strictEqual(invalidDateRes.error, 'Invalid date format entered.');

  const missingDateRes = PassportTools.evaluateExpiry('', '');
  assert.strictEqual(missingDateRes.valid, false, 'Missing dates must be rejected');

  const expiredDateRes = PassportTools.evaluateExpiry('2026-01-01', '2026-06-01');
  assert.strictEqual(expiredDateRes.status, 'EXPIRED_AT_TRAVEL', 'Expired at travel must be flagged');
});

// 29. Phase H: Comprehensive Automated Testing, Translation Parity, A11y & Edge Case Security Suite
runTest('Phase H: Comprehensive Automated Testing, Translation Parity, A11y & Edge Case Security Suite', () => {
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const { PassportTools } = require('../js/tools.js');
  const { I18N_TRANSLATIONS } = require('../js/i18n.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const engine = new PassportRulesEngine(rulePacks);

  // 1. Translation Key Parity & Language Attributes (all 6 languages)
  const languages = ['en', 'hi', 'ur', 'fr', 'de', 'ar'];
  const expectedKeyCount = 274;
  const enKeys = Object.keys(I18N_TRANSLATIONS.en).sort();
  assert.strictEqual(enKeys.length, expectedKeyCount, `English must have exactly ${expectedKeyCount} translation keys`);

  languages.forEach(lang => {
    assert(I18N_TRANSLATIONS[lang], `Language '${lang}' must exist in I18N_TRANSLATIONS`);
    const langKeys = Object.keys(I18N_TRANSLATIONS[lang]).sort();
    assert.strictEqual(langKeys.length, expectedKeyCount, `Language '${lang}' must have exactly ${expectedKeyCount} keys`);
    assert.deepStrictEqual(langKeys, enKeys, `Language '${lang}' keys must match English keys with 100% parity`);
    assert(typeof I18N_TRANSLATIONS[lang].translation_disclaimer === 'string' && I18N_TRANSLATIONS[lang].translation_disclaimer.length > 20,
      `Language '${lang}' must contain substantive translation_disclaimer`);
  });

  // Text direction verification
  assert.strictEqual(I18N_TRANSLATIONS.ur.dir, 'rtl', 'Urdu must have dir=rtl');
  assert.strictEqual(I18N_TRANSLATIONS.ar.dir, 'rtl', 'Arabic must have dir=rtl');
  assert.strictEqual(I18N_TRANSLATIONS.en.dir, 'ltr', 'English must have dir=ltr');
  assert.strictEqual(I18N_TRANSLATIONS.hi.dir, 'ltr', 'Hindi must have dir=ltr');
  assert.strictEqual(I18N_TRANSLATIONS.fr.dir, 'ltr', 'French must have dir=ltr');
  assert.strictEqual(I18N_TRANSLATIONS.de.dir, 'ltr', 'German must have dir=ltr');

  // 2. UI, Accessibility & Search Engine Metadata
  const stylesContent = fs.readFileSync(path.join(__dirname, '..', 'css', 'styles.css'), 'utf8');
  assert(stylesContent.includes(':focus-visible'), 'styles.css must include :focus-visible rules');
  assert(stylesContent.includes('outline: 2px solid var(--forest-base)'), 'styles.css must set high-contrast focus outline');
  assert(stylesContent.includes('@media print'), 'styles.css must include @media print stylesheet');

  const indexContent = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(indexContent.includes('role="tab"'), 'index.html must include role="tab" for filter pills');
  assert(indexContent.includes('aria-selected="true"'), 'index.html must include aria-selected="true" for default active filter');
  assert(indexContent.includes('role="dialog"'), 'index.html must define modal role="dialog"');
  assert(indexContent.includes('aria-modal="true"'), 'index.html modal must have aria-modal="true"');
  assert(indexContent.includes('aria-labelledby="modalTitle"'), 'index.html modal must have aria-labelledby');
  assert(indexContent.includes('class="skip-link" href="#checker"'), 'index.html must have skip link to #checker');

  const sitemapContent = fs.readFileSync(path.join(__dirname, '..', 'sitemap.xml'), 'utf8');
  ['https://passport.myoss.in/', 'https://passport.myoss.in/#checker', 'https://passport.myoss.in/#directory', 'https://passport.myoss.in/#guides', 'https://passport.myoss.in/#tools', 'https://passport.myoss.in/#faq'].forEach(loc => {
    assert(sitemapContent.includes(`<loc>${loc}</loc>`), `sitemap.xml must include ${loc}`);
  });
  assert(sitemapContent.includes('<lastmod>2026-10-20</lastmod>'), 'sitemap.xml must have fresh lastmod 2026-10-20');

  const robotsContent = fs.readFileSync(path.join(__dirname, '..', 'robots.txt'), 'utf8');
  assert(robotsContent.includes('Sitemap: https://passport.myoss.in/sitemap.xml'), 'robots.txt must declare official sitemap');

  // 3. Rules Engine Resilience & Graceful Fallbacks
  const emptyEngine = new PassportRulesEngine();
  const unknownCountryEval = emptyEngine.evaluate({ countryCode: 'ZZ', service: 'first_passport' });
  assert.strictEqual(unknownCountryEval.serviceCoverage.status, 'awaiting_research', 'Unknown country on empty engine must default to awaiting_research');
  assert(unknownCountryEval.readinessScore <= 70, 'Readiness score for unresearched country must be capped');

  const malformedProfileEval = engine.evaluate({
    countryCode: 'IN',
    age: 99999,
    service: { invalid: true },
    urgency: ['unsupported'],
    status: null
  });
  assert(malformedProfileEval && typeof malformedProfileEval.readinessScore === 'number', 'Engine must handle malformed profile types safely');

  // 4. PassportTools Boundary & Discrepancy Suite
  // Exact 6-month and 3-month boundary tests
  const refDate = '2026-06-01';
  const over6Months = PassportTools.evaluateExpiry('2026-12-15', refDate);
  assert.strictEqual(over6Months.valid, true, 'Validity over 180 days must be valid');
  assert.strictEqual(over6Months.status, 'SUFFICIENT_VALIDITY');

  const under6Months = PassportTools.evaluateExpiry('2026-10-01', refDate);
  assert.strictEqual(under6Months.valid, false, 'Validity under 180 days must be flagged');
  assert.strictEqual(under6Months.status, 'LESS_THAN_6_MONTHS');

  const under3Months = PassportTools.evaluateExpiry('2026-07-15', refDate);
  assert.strictEqual(under3Months.valid, false, 'Validity under 90 days must be flagged high risk');
  assert.strictEqual(under3Months.status, 'LESS_THAN_3_MONTHS');

  // Discrepancy Analyzer tests
  const exactMatch = PassportTools.analyzeNameDiscrepancy('John Doe', 'John Doe', '1990-01-01', '1990-01-01');
  assert.strictEqual(exactMatch.nameStatus, 'EXACT_MATCH');
  assert.strictEqual(exactMatch.dobStatus, 'MATCH');
  assert.strictEqual(exactMatch.discrepancyClass, 'NONE');

  const invertedName = PassportTools.analyzeNameDiscrepancy('John Doe', 'Doe John', '1990-01-01', '1990-01-01');
  assert.strictEqual(invertedName.nameStatus, 'NAME_ORDER_INVERSION');
  assert.strictEqual(invertedName.discrepancyClass, 'FORMATTING');

  const initialName = PassportTools.analyzeNameDiscrepancy('John Michael Doe', 'John Doe', '1990-01-01', '1990-01-01');
  assert.strictEqual(initialName.nameStatus, 'INITIALS_OR_MISSING_NAME');
  assert.strictEqual(initialName.discrepancyClass, 'FORMATTING');

  const spellingDiff = PassportTools.analyzeNameDiscrepancy('Sara Smith', 'Sarah Smith', '1990-01-01', '1990-01-01');
  assert.strictEqual(spellingDiff.nameStatus, 'SPELLING_DIFFERENCE');
  assert.strictEqual(spellingDiff.discrepancyClass, 'LEGAL_DISCREPANCY');

  const dobDiff = PassportTools.analyzeNameDiscrepancy('John Doe', 'John Doe', '1990-01-01', '1990-01-02');
  assert.strictEqual(dobDiff.dobStatus, 'DOB_MISMATCH');
  assert.strictEqual(dobDiff.discrepancyClass, 'LEGAL_DISCREPANCY');
});


// 30. Phase 4.4 Rules Engine Calibration: Resolution of DEF-01 (Statutory Fees), DEF-02 (Photo Rules), and DEF-03 (Dynamic Country Name Precedence)
runTest('Phase 4.4 Calibration: Defect resolution for statutory fees, human-readable photos, and dynamic country name precedence', () => {
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const countryDataModule = require('../data/country-data.js');
  const countries = countryDataModule.PASSPORT_COUNTRIES;
  const engine = new PassportRulesEngine(rulePacks, countries);

  // ---------------------------------------------------------
  // DEF-01: Verified Statutory Fee Evaluation & Consular Channel Separation
  // ---------------------------------------------------------
  // 1. India (IN)
  const inAdult = engine.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport' });
  const inAdultFee = inAdult.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(inAdultFee.feeStatus, 'verified_statutory');
  assert.strictEqual(inAdultFee.feeRecord.standard_36, 2500);
  assert.strictEqual(inAdultFee.feeRecord.standard_60, 3500);
  assert(inAdultFee.details.includes('₹2,500'));

  const inTatkaal = engine.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport', urgency: 'tatkaal' });
  const inTatkaalFee = inTatkaal.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(inTatkaalFee.feeStatus, 'verified_statutory');
  assert.strictEqual(inTatkaalFee.feeRecord.tatkaal_surcharge, 2500);
  assert.strictEqual(inTatkaalFee.feeRecord.tatkaal_total_36, 5000);
  assert.strictEqual(inTatkaalFee.feeRecord.tatkaal_total_60, 6000);
  assert.strictEqual(inTatkaalFee.feeRecord.tatkaal_concession_status, 'UNVERIFIED / CONFIRM AT OFFICIAL FEE CALCULATOR');

  const inMinor = engine.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport', ageExact: 10 });
  const inMinorFee = inMinor.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(inMinorFee.feeStatus, 'verified_statutory');
  assert.strictEqual(inMinorFee.feeRecord.base, 1750);

  const inMinorTatkaal = engine.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport', ageExact: 10, urgency: 'tatkaal' });
  const inMinorTatkaalFee = inMinorTatkaal.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(inMinorTatkaalFee.feeStatus, 'verified_statutory');
  assert.strictEqual(inMinorTatkaalFee.feeRecord.total, 4250);
  assert.strictEqual(inMinorTatkaalFee.feeRecord.tatkaal_concession_status, 'UNVERIFIED / CONFIRM AT OFFICIAL FEE CALCULATOR');

  const inLost = engine.evaluate({ countryCode: 'IN', location: 'inside', service: 'lost_stolen' });
  const inLostFee = inLost.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(inLostFee.feeStatus, 'verified_statutory');
  assert.strictEqual(inLostFee.feeRecord.standard_adult_36_pages, 5000);
  assert.strictEqual(inLostFee.feeRecord.standard_adult_60_pages, 6000);

  const inLostTatkaal = engine.evaluate({ countryCode: 'IN', location: 'inside', service: 'lost_stolen', urgency: 'tatkaal' });
  const inLostTatkaalFee = inLostTatkaal.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(inLostTatkaalFee.feeStatus, 'verified_statutory');
  assert.strictEqual(inLostTatkaalFee.feeRecord.tatkaal_total_36, 7500);
  assert.strictEqual(inLostTatkaalFee.feeRecord.tatkaal_total_60, 8500);

  const inAbroad = engine.evaluate({ countryCode: 'IN', location: 'abroad', service: 'first_passport' });
  const inAbroadFee = inAbroad.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(inAbroadFee.feeStatus, 'consular_local_currency');
  assert(!inAbroadFee.details.includes('₹2,500'), 'Must not claim domestic INR fee is payable abroad');

  // India 10% Fresh Rebate Boundaries Verification (above 60 years & children up to 8 years)
  const inSenior = engine.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport', ageExact: 65 });
  const inSeniorFee = inSenior.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(inSeniorFee.feeStatus, 'verified_statutory');
  assert.strictEqual(inSeniorFee.feeRecord.fresh_senior_rebate_36, 2250);
  assert.strictEqual(inSeniorFee.feeRecord.fresh_senior_rebate_60, 3150);
  assert(inSeniorFee.details.includes('above 60 years'), 'Must use statutory phrase above 60 years');
  assert(!inSeniorFee.details.includes('60+'), 'Must not use informal 60+ in details');
  assert(!inSeniorFee.details.includes('Does not apply to Tatkaal'), 'Must not claim Tatkaal is excluded from 10% rebate');
  assert(!inSeniorFee.details.includes('Does not apply to 60-page'), 'Must not claim 60-page is excluded from 10% rebate');

  const inChild8 = engine.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport', ageExact: 7 });
  const inChild8Fee = inChild8.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(inChild8Fee.feeStatus, 'verified_statutory');
  assert.strictEqual(inChild8Fee.feeRecord.fresh_under_8_rebate, 1575);
  assert(inChild8Fee.details.includes('children up to 8 years'));

  // Tatkaal Senior & Minor Concession Status Audit (Statutory basic concession retained; Tatkaal concession marked unverified)
  const inSeniorTatkaal = engine.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport', ageExact: 65, urgency: 'tatkaal' });
  const inSeniorTatkaalFee = inSeniorTatkaal.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(inSeniorTatkaalFee.feeStatus, 'verified_statutory');
  assert.strictEqual(inSeniorTatkaalFee.feeRecord.tatkaal_total_36, 5000);
  assert.strictEqual(inSeniorTatkaalFee.feeRecord.tatkaal_total_60, 6000);
  assert.strictEqual(inSeniorTatkaalFee.feeRecord.tatkaal_concession_status, 'UNVERIFIED / CONFIRM AT OFFICIAL FEE CALCULATOR');
  assert(inSeniorTatkaalFee.details.includes('UNVERIFIED / CONFIRM AT OFFICIAL FEE CALCULATOR'));
  assert(inSeniorTatkaalFee.details.includes('above 60 years'));

  const inChildTatkaal = engine.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport', ageExact: 7, urgency: 'tatkaal' });
  const inChildTatkaalFee = inChildTatkaal.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(inChildTatkaalFee.feeStatus, 'verified_statutory');
  assert.strictEqual(inChildTatkaalFee.feeRecord.total, 4250);
  assert.strictEqual(inChildTatkaalFee.feeRecord.tatkaal_concession_status, 'UNVERIFIED / CONFIRM AT OFFICIAL FEE CALCULATOR');
  assert(inChildTatkaalFee.details.includes('UNVERIFIED / CONFIRM AT OFFICIAL FEE CALCULATOR'));
  assert(inChildTatkaalFee.details.includes('children up to 8 years'));

  // 2. United States (US)
  const usAdult = engine.evaluate({ countryCode: 'US', location: 'inside', service: 'first_passport' });
  const usAdultFee = usAdult.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(usAdultFee.feeStatus, 'verified_statutory');
  assert.strictEqual(usAdultFee.feeRecord.total, 165);
  assert.strictEqual(usAdultFee.feeRecord.application_fee, 130);
  assert.strictEqual(usAdultFee.feeRecord.execution_fee, 35);

  const usExpedite = engine.evaluate({ countryCode: 'US', location: 'inside', service: 'first_passport', urgency: 'urgent' });
  const usExpFee = usExpedite.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(usExpFee.feeStatus, 'verified_statutory');
  assert.strictEqual(usExpFee.feeRecord.expedite_total, 225);

  const usRenewal = engine.evaluate({ countryCode: 'US', location: 'inside', service: 'renewal_reissue' });
  const usRenFee = usRenewal.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(usRenFee.feeStatus, 'verified_statutory');
  assert.strictEqual(usRenFee.feeRecord.renewal_fee, 130);

  const usMinor = engine.evaluate({ countryCode: 'US', location: 'inside', service: 'first_passport', ageExact: 14 });
  const usMinorFee = usMinor.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(usMinorFee.feeStatus, 'verified_statutory');
  assert.strictEqual(usMinorFee.feeRecord.total, 135);

  const usAbroad = engine.evaluate({ countryCode: 'US', location: 'abroad', service: 'first_passport' });
  const usAbroadFee = usAbroad.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(usAbroadFee.feeStatus, 'consular_local_currency');

  // 3. United Kingdom (GB)
  const gbAdult = engine.evaluate({ countryCode: 'GB', location: 'inside', service: 'first_passport' });
  const gbAdultFee = gbAdult.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(gbAdultFee.feeStatus, 'verified_statutory');
  assert.strictEqual(gbAdultFee.feeRecord.adult_online, 102.00);
  assert.strictEqual(gbAdultFee.feeRecord.adult_postal, 115.50);
  assert.strictEqual(gbAdultFee.feeRecord.adult_jumbo_online, 116.00);
  assert.strictEqual(gbAdultFee.feeRecord.adult_jumbo_postal, 129.50);

  const gbFastTrack = engine.evaluate({ countryCode: 'GB', location: 'inside', service: 'first_passport', urgency: 'fast_track' });
  const gbFastFee = gbFastTrack.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(gbFastFee.feeStatus, 'verified_statutory');
  assert.strictEqual(gbFastFee.feeRecord.fast_track_1_week_adult, 192.00);
  assert.strictEqual(gbFastFee.feeRecord.premium_1_day_adult, 239.50);

  const gbChild = engine.evaluate({ countryCode: 'GB', location: 'inside', service: 'first_passport', ageExact: 12 });
  const gbChildFee = gbChild.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(gbChildFee.feeStatus, 'verified_statutory');
  assert.strictEqual(gbChildFee.feeRecord.child_online, 66.50);
  assert.strictEqual(gbChildFee.feeRecord.child_postal, 80.00);

  const gbAbroad = engine.evaluate({ countryCode: 'GB', location: 'abroad', service: 'first_passport' });
  const gbAbroadFee = gbAbroad.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(gbAbroadFee.feeStatus, 'consular_local_currency');
  assert.strictEqual(gbAbroadFee.feeRecord.adult_overseas_online, 116.50);
  assert.strictEqual(gbAbroadFee.feeRecord.international_delivery_fee_separate, 14.32);
  assert.strictEqual(gbAbroadFee.feeRecord.unverified_legacy_delivery_fee, 20.86);
  assert(gbAbroadFee.details.includes('£14.32'), 'Must cite confirmed £14.32 HMPO international delivery fee');
  assert(gbAbroadFee.details.includes('unverified'), 'Must mark £20.86 as unverified');

  // 4. Canada (CA)
  const caAdult = engine.evaluate({ countryCode: 'CA', location: 'inside', service: 'first_passport' });
  const caAdultFee = caAdult.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(caAdultFee.feeStatus, 'verified_statutory');
  assert.strictEqual(caAdultFee.feeRecord.adult_5_year, 122.50);
  assert.strictEqual(caAdultFee.feeRecord.adult_10_year, 163.50);

  const caUrgent = engine.evaluate({ countryCode: 'CA', location: 'inside', service: 'first_passport', urgency: 'urgent' });
  const caUrgFee = caUrgent.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(caUrgFee.feeStatus, 'verified_statutory');
  assert.strictEqual(caUrgFee.feeRecord.urgent_total_5yr, 248.25);
  assert.strictEqual(caUrgFee.feeRecord.urgent_total_10yr, 289.25);

  const caChild = engine.evaluate({ countryCode: 'CA', location: 'inside', service: 'first_passport', ageExact: 8 });
  const caChildFee = caChild.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(caChildFee.feeStatus, 'verified_statutory');
  assert.strictEqual(caChildFee.feeRecord.child_0_to_15, 58.50);

  const caChildUrgent = engine.evaluate({ countryCode: 'CA', location: 'inside', service: 'first_passport', ageExact: 8, urgency: 'urgent' });
  const caChildUrgentFee = caChildUrgent.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(caChildUrgentFee.feeStatus, 'verified_statutory');
  assert.strictEqual(caChildUrgentFee.feeRecord.total_urgent, 184.25);

  const caAbroad = engine.evaluate({ countryCode: 'CA', location: 'abroad', service: 'first_passport' });
  const caAbroadFee = caAbroad.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(caAbroadFee.feeStatus, 'consular_local_currency');
  assert.strictEqual(caAbroadFee.feeRecord.child_overseas, 102.50);

  // 5. Australia (AU)
  const auAdult = engine.evaluate({ countryCode: 'AU', location: 'inside', service: 'first_passport' });
  const auAdultFee = auAdult.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(auAdultFee.feeStatus, 'verified_statutory');
  assert.strictEqual(auAdultFee.feeRecord.adult_10_year, 422);

  const auPriority = engine.evaluate({ countryCode: 'AU', location: 'inside', service: 'first_passport', urgency: 'priority' });
  const auPriFee = auPriority.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(auPriFee.feeStatus, 'verified_statutory');
  assert.strictEqual(auPriFee.feeRecord.total_priority, 730);
  assert.strictEqual(auPriFee.feeRecord.fast_track_total, 529);

  const auChild = engine.evaluate({ countryCode: 'AU', location: 'inside', service: 'first_passport', ageExact: 10 });
  const auChildFee = auChild.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(auChildFee.feeStatus, 'verified_statutory');
  assert.strictEqual(auChildFee.feeRecord.child_5_year, 213);

  const auChildPriority = engine.evaluate({ countryCode: 'AU', location: 'inside', service: 'first_passport', ageExact: 10, urgency: 'priority' });
  const auChildPriFee = auChildPriority.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(auChildPriFee.feeStatus, 'verified_statutory');
  assert.strictEqual(auChildPriFee.feeRecord.total_priority, 521);

  const auSenior = engine.evaluate({ countryCode: 'AU', location: 'inside', service: 'first_passport', ageExact: 76 });
  const auSeniorFee = auSenior.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(auSeniorFee.feeStatus, 'verified_statutory');
  assert.strictEqual(auSeniorFee.feeRecord.senior_75_plus_5_year, 213);

  const auSeniorPriority = engine.evaluate({ countryCode: 'AU', location: 'inside', service: 'first_passport', ageExact: 76, urgency: 'priority' });
  const auSeniorPriFee = auSeniorPriority.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(auSeniorPriFee.feeStatus, 'verified_statutory');
  assert.strictEqual(auSeniorPriFee.feeRecord.total_priority, 521);

  const auAbroad = engine.evaluate({ countryCode: 'AU', location: 'abroad', service: 'first_passport' });
  const auAbroadFee = auAbroad.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(auAbroadFee.feeStatus, 'consular_local_currency');
  assert.strictEqual(auAbroadFee.feeRecord.overseas_surcharge_adult, 189);
  assert.strictEqual(auAbroadFee.feeRecord.overseas_surcharge_child, 92);

    // 6. Multi-country sweep across remaining 10 verified countries (PK, BD, DE, AE, PH, FR, SA, BR, ZA, IT)
  const testCodes = ['PK', 'BD', 'DE', 'AE', 'PH', 'FR', 'SA', 'BR', 'ZA', 'IT'];
  for (const cCode of testCodes) {
    const domRes = engine.evaluate({ countryCode: cCode, location: 'inside', service: 'first_passport' });
    const domFee = domRes.checklist.find(c => c.id === 'official_fee_payment');
    assert.strictEqual(domFee.feeStatus, 'verified_statutory', `${cCode} inside must produce verified_statutory fee`);
    assert(domFee.feeRecord !== null, `${cCode} feeRecord must not be null`);
    assert(domFee.details.length > 50, `${cCode} details must have substantial statutory content`);

    const abrRes = engine.evaluate({ countryCode: cCode, location: 'abroad', service: 'first_passport' });
    const abrFee = abrRes.checklist.find(c => c.id === 'official_fee_payment');
    assert.strictEqual(abrFee.feeStatus, 'consular_local_currency', `${cCode} abroad must set consular_local_currency`);
  }

  // 7. Unverified country fallback test
  const unverifiedRes = engine.evaluate({ countryCode: 'XX', location: 'inside', service: 'first_passport' });
  const unverifiedFee = unverifiedRes.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(unverifiedFee.feeStatus, 'confirmation_required');
  assert(unverifiedFee.details.includes('Fee Confirmation Required'));

  // ---------------------------------------------------------
  // DEF-02: Human-Readable Photo Specifications (No Raw JSON)
  // ---------------------------------------------------------
  const photoCountries = ['IN', 'US', 'GB', 'CA', 'AU', 'PK', 'BD', 'DE', 'AE', 'PH', 'FR', 'SA', 'BR', 'ZA', 'IT', 'JP', 'MX', 'NG'];
  for (const pCode of photoCountries) {
    const pRes = engine.evaluate({ countryCode: pCode, location: 'inside', service: 'first_passport' });
    const photoItem = pRes.checklist.find(c => c.id === 'photo_spec_check');
    assert(photoItem, `${pCode} must have photo_spec_check item`);
    const details = photoItem.details;

    // Must NOT contain JSON delimiters or quoted schema keys
    assert(!details.includes('{'), `${pCode} photo details must not contain raw JSON open brace '{'`);
    assert(!details.includes('}'), `${pCode} photo details must not contain raw JSON close brace '}'`);
    assert(!details.includes('"dimensions":'), `${pCode} photo details must not contain quoted JSON key`);
    assert(!details.includes('"background":'), `${pCode} photo details must not contain quoted JSON key`);
    assert(!details.includes('"captured_live":'), `${pCode} photo details must not contain quoted JSON key`);
    assert(!details.includes('[object Object]'), `${pCode} photo details must not contain [object Object]`);

    // Must be human readable with labeled sections
    assert(details.includes('Official photo requirements for') || details.includes('Ensure photos for'), `${pCode} must have clean human-readable intro`);
  }

  // ---------------------------------------------------------
  // DEF-03: Dynamic Country Name Resolution Precedence
  // ---------------------------------------------------------
  // 1. Matched rule pack name precedence when countryName is omitted
  const auNoName = engine.evaluate({ countryCode: 'AU', location: 'inside', service: 'first_passport' });
  assert.strictEqual(auNoName.country.name, 'Australia');
  assert(JSON.stringify(auNoName).includes('Australia'));
  assert(!JSON.stringify(auNoName).includes('India'), 'Evaluating AU without countryName must contain zero occurrences of India');

  const gbNoName = engine.evaluate({ countryCode: 'GB', location: 'inside', service: 'first_passport' });
  assert.strictEqual(gbNoName.country.name, 'United Kingdom');
  assert(!JSON.stringify(gbNoName).includes('India'), 'Evaluating GB without countryName must contain zero occurrences of India');

  const caNoName = engine.evaluate({ countryCode: 'CA', location: 'inside', service: 'first_passport' });
  assert.strictEqual(caNoName.country.name, 'Canada');
  assert(!JSON.stringify(caNoName).includes('India'), 'Evaluating CA without countryName must contain zero occurrences of India');

  // 2. Caller-supplied non-empty name takes top precedence
  const customNameRes = engine.evaluate({ countryCode: 'AU', countryName: 'Commonwealth of Australia', location: 'inside', service: 'first_passport' });
  assert.strictEqual(customNameRes.country.name, 'Commonwealth of Australia');

  // 3. Fallback to countriesMap for un-audited country in countries dataset (e.g. Kiribati)
  const kiRes = engine.evaluate({ countryCode: 'KI', location: 'inside', service: 'first_passport' });
  assert.strictEqual(kiRes.country.name, 'Kiribati');
  assert(!JSON.stringify(kiRes).includes('India'), 'Evaluating KI must not contain India');

  // 4. Safe fallback to ISO code for completely unknown code
  const zzRes = engine.evaluate({ countryCode: 'ZZ', location: 'inside', service: 'first_passport' });
  assert.strictEqual(zzRes.country.name, 'ZZ');
  assert(!JSON.stringify(zzRes).includes('India'), 'Evaluating ZZ must not contain India');
});


// 31. Phase 4.5 Dynamic i18n & Results Dashboard State (DEF-05 & DEF-06) Calibration
runTest('Phase 4.5 Calibration: Dynamic i18n checklist translation, key parity, and results dashboard state preservation (DEF-05 & DEF-06)', () => {
  const { I18N_TRANSLATIONS, getI18nText } = require('../js/i18n.js');
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const countryDataModule = require('../data/country-data.js');
  const countries = countryDataModule.PASSPORT_COUNTRIES;
  const engine = new PassportRulesEngine(rulePacks, countries);

  // 1. Key count and 100% dictionary key parity across all 6 languages
  const expectedKeys = 274;
  const supportedLangs = ['en', 'hi', 'ur', 'fr', 'de', 'ar'];
  const baseKeys = Object.keys(I18N_TRANSLATIONS.en).sort();
  assert.strictEqual(baseKeys.length, expectedKeys, `Base English dictionary must have ${expectedKeys} keys`);

  for (const lang of supportedLangs) {
    assert(I18N_TRANSLATIONS[lang], `Dictionary missing for ${lang}`);
    const keys = Object.keys(I18N_TRANSLATIONS[lang]).sort();
    assert.strictEqual(keys.length, expectedKeys, `${lang} must have exactly ${expectedKeys} keys, got ${keys.length}`);
    assert.deepStrictEqual(keys, baseKeys, `${lang} must have 100% key parity with English dictionary`);

    const dir = I18N_TRANSLATIONS[lang].dir;
    if (lang === 'ur' || lang === 'ar') {
      assert.strictEqual(dir, 'rtl', `${lang} must specify rtl direction`);
    } else {
      assert.strictEqual(dir, 'ltr', `${lang} must specify ltr direction`);
    }
  }

  // 2. DEF-05: Multilingual checklist output across all supported languages
  for (const lang of supportedLangs) {
    // 2.1 India (IN) - Standard Adult
    const inAdult = engine.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport' }, lang);
    const inAdultFee = inAdult.checklist.find(c => c.id === 'official_fee_payment');
    assert(inAdultFee, `IN adult fee item must exist in ${lang}`);
    assert(inAdultFee.title.length > 5, `IN fee title in ${lang} must be translated`);
    assert(inAdultFee.details.includes('₹2,500'), `IN fee details in ${lang} must preserve ₹2,500 verbatim`);
    assert(inAdultFee.details.includes('₹3,500'), `IN fee details in ${lang} must preserve ₹3,500 verbatim`);

    // 2.2 India (IN) - Tatkaal
    const inTatkaal = engine.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport', urgency: 'tatkaal' }, lang);
    const inTatkaalFee = inTatkaal.checklist.find(c => c.id === 'official_fee_payment');
    assert(inTatkaalFee.details.includes('₹5,000'), `IN Tatkaal fee details in ${lang} must preserve ₹5,000 verbatim`);
    assert(inTatkaalFee.details.includes('₹6,000'), `IN Tatkaal fee details in ${lang} must preserve ₹6,000 verbatim`);

    // 2.3 Japan (JP) - Online Domestic
    const jpRes = engine.evaluate({ countryCode: 'JP', location: 'inside', service: 'first_passport', channel: 'online' }, lang);
    const jpFee = jpRes.checklist.find(c => c.id === 'official_fee_payment');
    assert(jpFee.details.includes('¥8,900'), `JP online fee details in ${lang} must preserve ¥8,900 verbatim`);

    // 2.4 United Kingdom (GB) - Adult Standard
    const gbRes = engine.evaluate({ countryCode: 'GB', location: 'inside', service: 'first_passport' }, lang);
    const gbFee = gbRes.checklist.find(c => c.id === 'official_fee_payment');
    assert(gbFee.details.includes('£102'), `GB fee details in ${lang} must preserve £102 verbatim`);

    // 2.5 Australia (AU) - Standard Adult
    const auRes = engine.evaluate({ countryCode: 'AU', location: 'inside', service: 'first_passport' }, lang);
    const auFee = auRes.checklist.find(c => c.id === 'official_fee_payment');
    assert(auFee.details.includes('422'), `AU adult fee details in ${lang} must preserve AUD 422 verbatim`);

    // 2.6 Photo Rule Specifications (US physical dimensions & IN live capture)
    const usRes = engine.evaluate({ countryCode: 'US', location: 'inside', service: 'first_passport' }, lang);
    const usPhoto = usRes.checklist.find(c => c.id === 'photo_spec_check');
    assert(usPhoto, `US photo item missing in ${lang}`);
    assert(!usPhoto.details.includes('{'), `US photo details in ${lang} must not contain raw JSON`);
    assert(usPhoto.details.includes('51 x 51 mm'), `US photo dimensions 51 x 51 mm must be preserved in ${lang}`);

    const inPhoto = inAdult.checklist.find(c => c.id === 'photo_spec_check');
    assert(inPhoto, `IN photo item missing in ${lang}`);
    assert(!inPhoto.details.includes('{'), `IN photo details in ${lang} must not contain raw JSON`);
    assert(inPhoto.details.length > 40, `IN photo details must be substantial in ${lang}`);

    // 2.7 Multi-Language Flags & Directives
    const flagProfile = { countryCode: 'XX', service: 'first_passport', location: 'inside', countryName: 'Testland', nameMatch: 'minor' };
    const flagRes = engine.evaluate(flagProfile, lang);
    assert(flagRes.flags.length > 0, `Flags must be generated in ${lang}`);
    const nameFlag = flagRes.flags.find(f => f.code === 'NAME_MINOR_MISMATCH');
    assert(nameFlag, `Minor name discrepancy flag must exist in ${lang}`);
    assert(nameFlag.title.length > 5, `Minor name flag title must be translated in ${lang}`);
    assert(nameFlag.action.length > 5, `Minor name flag action must be translated in ${lang}`);
  }

  // 3. Backward Compatibility & Safe Fallbacks
  const defaultRes = engine.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport' });
  const defaultFee = defaultRes.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(defaultFee.title, 'Pay Official Government Fee Directly', 'Default language without argument must default to English');

  const unknownLangRes = engine.evaluate({ countryCode: 'IN', location: 'inside', service: 'first_passport' }, 'invalid_locale');
  const unknownLangFee = unknownLangRes.checklist.find(c => c.id === 'official_fee_payment');
  assert.strictEqual(unknownLangFee.title, 'Pay Official Government Fee Directly', 'Unrecognized language code must fall back safely to English');

  // 4. DEF-06: Results Dashboard State & Language-Switch Simulation
  const simulatedAnswers = {
    countryCode: 'IN',
    countryName: 'India',
    location: 'inside',
    service: 'first_passport',
    age: 'adult',
    urgency: 'standard'
  };
  const evalEn = engine.evaluate(simulatedAnswers, 'en');
  const simulatedChecked = {};
  const checkId1 = evalEn.checklist[0].id;
  const checkId2 = evalEn.checklist[1].id;
  simulatedChecked[checkId1] = true;
  simulatedChecked[checkId2] = true;

  for (const switchLang of ['fr', 'hi', 'ar', 'de', 'ur']) {
    const evalSwitched = engine.evaluate(simulatedAnswers, switchLang);
    assert.strictEqual(evalSwitched.checklist.length, evalEn.checklist.length, `Checklist length must be invariant across language switches to ${switchLang}`);
    for (let i = 0; i < evalEn.checklist.length; i++) {
      assert.strictEqual(evalSwitched.checklist[i].id, evalEn.checklist[i].id, `Checklist item ID at ${i} must remain identical in ${switchLang}`);
    }
    // Checkbox selections survive re-evaluation
    assert.strictEqual(simulatedChecked[evalSwitched.checklist[0].id], true, `Checked item 0 must retain checked state in ${switchLang}`);
    assert.strictEqual(simulatedChecked[evalSwitched.checklist[1].id], true, `Checked item 1 must retain checked state in ${switchLang}`);
    assert(!simulatedChecked[evalSwitched.checklist[2].id], `Unchecked item 2 must remain unchecked in ${switchLang}`);

    // Evaluation scores and classification remain invariant
    assert.strictEqual(evalSwitched.readinessScore, evalEn.readinessScore, `Readiness score must remain identical across language switch to ${switchLang}`);
    assert.strictEqual(evalSwitched.statusLabel, evalEn.statusLabel, `Status label must remain identical across language switch to ${switchLang}`);
  }
});

// 32. Phase 4.6 Calibration: Reliable Country Search, Normalization & State Synchronization (DEF-04)
runTest('Phase 4.6 Calibration: Reliable Country Search, Normalization & State Synchronization (DEF-04)', () => {
  const App = require('../js/app.js');
  const { I18N_TRANSLATIONS } = require('../js/i18n.js');
  const { PassportRulesEngine } = require('../js/rules-engine.js');
  const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
  const countryDataModule = require('../data/country-data.js');
  const countries = countryDataModule.PASSPORT_COUNTRIES;
  const engine = new PassportRulesEngine(rulePacks, countries);

  // 1. Exact canonical country-name match
  const inMatch = App.getCountryByQuery('India');
  assert(inMatch && inMatch.alpha2 === 'IN' && inMatch.name === 'India', 'India exact match must resolve');
  const usMatch = App.getCountryByQuery('United States');
  assert(usMatch && usMatch.alpha2 === 'US' && usMatch.name === 'United States', 'United States exact match must resolve');
  const gbMatch = App.getCountryByQuery('United Kingdom');
  assert(gbMatch && gbMatch.alpha2 === 'GB' && gbMatch.name === 'United Kingdom', 'United Kingdom exact match must resolve');
  const auMatch = App.getCountryByQuery('Australia');
  assert(auMatch && auMatch.alpha2 === 'AU' && auMatch.name === 'Australia', 'Australia exact match must resolve');

  // 2. Case-insensitive matching
  assert.strictEqual(App.getCountryByQuery('india')?.alpha2, 'IN', 'india lowercase must resolve to IN');
  assert.strictEqual(App.getCountryByQuery('UNITED STATES')?.alpha2, 'US', 'UNITED STATES uppercase must resolve to US');
  assert.strictEqual(App.getCountryByQuery('uNiTeD kInGdOm')?.alpha2, 'GB', 'Mixed case must resolve to GB');
  assert.strictEqual(App.getCountryByQuery('australia')?.alpha2, 'AU', 'australia lowercase must resolve to AU');
  assert.strictEqual(App.getCountryByQuery('gerMANy')?.alpha2, 'DE', 'gerMANy mixed case must resolve to DE');

  // 3. Leading/trailing and repeated whitespace
  assert.strictEqual(App.getCountryByQuery('   India   ')?.alpha2, 'IN', 'Padded whitespace must resolve to IN');
  assert.strictEqual(App.getCountryByQuery('United   States')?.alpha2, 'US', 'Repeated internal spaces must resolve to US');
  assert.strictEqual(App.getCountryByQuery('  United    Kingdom   ')?.alpha2, 'GB', 'Repeated spaces and padding must resolve to GB');

  // 4. Accented and Unicode-normalized input
  assert.strictEqual(App.getCountryByQuery("Côte d’Ivoire")?.alpha2, 'CI', 'Curly apostrophe Côte d’Ivoire must resolve to CI');
  assert.strictEqual(App.getCountryByQuery("Cote d'Ivoire")?.alpha2, 'CI', 'Unaccented Cote d\'Ivoire must resolve to CI');
  assert.strictEqual(App.getCountryByQuery("Ivory Coast")?.alpha2, 'CI', 'Ivory Coast alias must resolve to CI');
  assert.strictEqual(App.getCountryByQuery("Türkiye")?.alpha2, 'TR', 'Accented Türkiye must resolve to TR');
  assert.strictEqual(App.getCountryByQuery("Turkiye")?.alpha2, 'TR', 'Unaccented Turkiye must resolve to TR');
  assert.strictEqual(App.getCountryByQuery("Turkey")?.alpha2, 'TR', 'Turkey alias must resolve to TR');
  assert.strictEqual(App.getCountryByQuery("Curaçao")?.alpha2, 'CW', 'Accented Curaçao must resolve to CW');
  assert.strictEqual(App.getCountryByQuery("Curacao")?.alpha2, 'CW', 'Unaccented Curacao must resolve to CW');
  assert.strictEqual(App.getCountryByQuery("Réunion")?.alpha2, 'RE', 'Accented Réunion must resolve to RE');
  assert.strictEqual(App.getCountryByQuery("Reunion")?.alpha2, 'RE', 'Unaccented Reunion must resolve to RE');
  assert.strictEqual(App.getCountryByQuery("Åland Islands")?.alpha2, 'AX', 'Åland Islands must resolve to AX');
  assert.strictEqual(App.getCountryByQuery("Aland Islands")?.alpha2, 'AX', 'Aland Islands must resolve to AX');
  assert.strictEqual(App.getCountryByQuery("Saint Barthélemy")?.alpha2, 'BL', 'Saint Barthélemy must resolve to BL');
  assert.strictEqual(App.getCountryByQuery("Saint Barthelemy")?.alpha2, 'BL', 'Saint Barthelemy must resolve to BL');

  // 5. HTML5 datalist options consistency (all 249 canonical entries resolve 1:1)
  countries.forEach(c => {
    const match = App.getCountryByQuery(c.name);
    assert(match, `Canonical country name '${c.name}' must resolve via getCountryByQuery`);
    assert.strictEqual(match.alpha2, c.alpha2, `Resolved alpha2 for '${c.name}' must match '${c.alpha2}'`);
    assert.strictEqual(match.name, c.name, `Resolved canonical name must match '${c.name}'`);
  });

  // 6, 7, 8, 9, 10, 11, 12, 13, 14: State synchronization simulation
  const simState = {
    answers: { countryCode: 'IN', countryName: 'India', location: 'inside', service: 'first_passport' },
    currentStep: 0,
    totalSteps: 10
  };

  let mockInputValue = 'India';
  let mockHintClass = '';
  let mockInvalidAttr = 'false';

  function mockUpdateCountryHint() {
    const trimmed = mockInputValue ? mockInputValue.trim() : '';
    if (!trimmed) {
      simState.answers.countryCode = null;
      simState.answers.countryName = null;
      mockInvalidAttr = 'false';
      mockHintClass = 'country-source-status hint-empty';
      return null;
    }
    const c = App.getCountryByQuery(mockInputValue);
    if (!c) {
      simState.answers.countryCode = null;
      simState.answers.countryName = null;
      mockInvalidAttr = 'true';
      mockHintClass = 'country-source-status hint-unresolved';
      return null;
    }
    simState.answers.countryCode = c.alpha2;
    simState.answers.countryName = c.name;
    mockInvalidAttr = 'false';
    mockHintClass = 'country-source-status hint-resolved';
    return c;
  }

  function mockNextClick() {
    if (simState.currentStep === 0) {
      const c = mockUpdateCountryHint();
      if (!c || !simState.answers.countryCode) {
        return false; // navigation blocked
      }
    }
    simState.currentStep++;
    return true;
  }

  // 6. Initial state: India
  assert.strictEqual(mockUpdateCountryHint()?.alpha2, 'IN');
  assert.strictEqual(simState.answers.countryCode, 'IN');
  assert.strictEqual(simState.answers.countryName, 'India');

  // 7 & 12. Change to Australia, United Kingdom, and United States
  mockInputValue = 'Australia';
  assert.strictEqual(mockUpdateCountryHint()?.alpha2, 'AU');
  assert.strictEqual(simState.answers.countryCode, 'AU');
  assert.strictEqual(simState.answers.countryName, 'Australia');

  mockInputValue = 'United Kingdom';
  assert.strictEqual(mockUpdateCountryHint()?.alpha2, 'GB');
  assert.strictEqual(simState.answers.countryCode, 'GB');
  assert.strictEqual(simState.answers.countryName, 'United Kingdom');

  mockInputValue = 'United States';
  assert.strictEqual(mockUpdateCountryHint()?.alpha2, 'US');
  assert.strictEqual(simState.answers.countryCode, 'US');
  assert.strictEqual(simState.answers.countryName, 'United States');

  // 8. Clearing the input
  mockInputValue = '';
  assert.strictEqual(mockUpdateCountryHint(), null);
  assert.strictEqual(simState.answers.countryCode, null, 'Clearing input must clear countryCode to null');
  assert.strictEqual(simState.answers.countryName, null, 'Clearing input must clear countryName to null');
  assert.strictEqual(mockHintClass, 'country-source-status hint-empty');

  // 14. Preventing wizard from advancing when country is empty or unresolved
  assert.strictEqual(mockNextClick(), false, 'Continue must be blocked when country is empty');
  assert.strictEqual(simState.currentStep, 0, 'Wizard step must remain 0');

  // 9. Unknown country names
  mockInputValue = 'Atlantis';
  assert.strictEqual(mockUpdateCountryHint(), null, 'Atlantis must return null');
  assert.strictEqual(simState.answers.countryCode, null);
  assert.strictEqual(simState.answers.countryName, null);
  assert.strictEqual(mockInvalidAttr, 'true');
  assert.strictEqual(mockNextClick(), false, 'Continue must be blocked for unknown country');

  // 10. Ambiguous or incomplete input
  mockInputValue = 'United';
  assert.strictEqual(mockUpdateCountryHint(), null, 'United is ambiguous and must not resolve');
  assert.strictEqual(simState.answers.countryCode, null);
  assert.strictEqual(mockNextClick(), false, 'Continue must be blocked for ambiguous prefix');

  mockInputValue = 'Austr';
  assert.strictEqual(mockUpdateCountryHint(), null, 'Austr is incomplete and must not resolve');
  assert.strictEqual(simState.answers.countryCode, null);
  assert.strictEqual(mockNextClick(), false, 'Continue must be blocked for incomplete prefix');

  // 11. Previous valid country followed by invalid text
  mockInputValue = 'Germany';
  assert.strictEqual(mockUpdateCountryHint()?.alpha2, 'DE');
  assert.strictEqual(simState.answers.countryCode, 'DE');

  mockInputValue = 'GermanyXYZ';
  assert.strictEqual(mockUpdateCountryHint(), null);
  assert.strictEqual(simState.answers.countryCode, null, 'Lingering DE code must be invalidated immediately');
  assert.strictEqual(simState.answers.countryName, null);
  assert.strictEqual(mockNextClick(), false, 'Advance blocked after invalidating edit');

  // 13. Correct state passed to PassportRulesEngine.evaluate()
  mockInputValue = 'Australia';
  mockUpdateCountryHint();
  assert(mockNextClick(), 'Advance allowed with valid Australia selection');
  assert.strictEqual(simState.currentStep, 1);
  const auEval = engine.evaluate(simState.answers);
  assert.strictEqual(auEval.country.code, 'AU');
  assert.strictEqual(auEval.country.name, 'Australia');
  const auFee = auEval.checklist.find(c => c.id === 'official_fee_payment');
  assert(auFee.details.includes('422'), 'AU evaluation must produce 422 AUD statutory fee');

  // 15. Translation keys and accessibility attributes check
  const requiredKeys = [
    'country_prompt_title',
    'country_prompt_desc',
    'country_unresolved_pill',
    'country_unresolved_title',
    'country_unresolved_desc',
    'country_verified_desc',
    'country_linked_desc',
    'country_awaiting_desc',
    'country_general_guidance_title',
    'country_continue_error'
  ];

  for (const lang of ['en', 'hi', 'ur', 'fr', 'de', 'ar']) {
    requiredKeys.forEach(k => {
      assert(I18N_TRANSLATIONS[lang][k], `Key ${k} missing in ${lang}`);
      assert(I18N_TRANSLATIONS[lang][k].length > 3, `Key ${k} in ${lang} must not be empty`);
    });
  }
});

// 33. Phase 4.7 Calibration: Print Stylesheet & PDF Export Reliability (DEF-07)
runTest('Phase 4.7 Calibration: Print Stylesheet & PDF Export Reliability (DEF-07)', () => {
  const css = fs.readFileSync(path.join(__dirname, '..', 'css', 'styles.css'), 'utf8');
  const printIdx = css.indexOf('@media print');
  assert(printIdx !== -1, '@media print must exist in styles.css');
  const printBlock = css.substring(printIdx);

  // 1. @page rules
  assert(css.includes('@page'), '@page declaration must exist');
  assert(/@page\s*\{[^}]*size:\s*auto/i.test(css), '@page must specify size: auto');
  assert(/@page\s*\{[^}]*margin:\s*12mm/i.test(css), '@page must specify margins');

  // 2. Color fidelity & animations
  assert(printBlock.includes('print-color-adjust: exact'), 'print-color-adjust: exact must be present');
  assert(printBlock.includes('-webkit-print-color-adjust: exact'), '-webkit-print-color-adjust: exact must be present');
  assert(printBlock.includes('animation: none !important'), 'Animations must be disabled in print to prevent fadeIn 0-opacity freeze');
  assert(printBlock.includes('transition: none !important'), 'Transitions must be disabled in print');

  // 3. Screen element suppression
  const hiddenSelectors = [
    '.topbar', '.nav', '.hero', '.features-section', '.directory-section',
    '.tools-section', '.guides-section', '.sourceband', '.faq-section', '.footer',
    '.wizard-head', '.wizard-nav', '.checker-copy', '.toast', '.modal-overlay',
    '.step-pane', '.steps', '#stepcount', '#printBtn', '#restartBtn', '#saveProgressBtn',
    '.filter-pills', '.filter-pill'
  ];
  hiddenSelectors.forEach(sel => {
    assert(printBlock.includes(sel), `Selector ${sel} must be hidden in @media print`);
  });

  // 4. Non-clipping container hierarchy
  assert(printBlock.includes('.wizard-box'), '.wizard-box must be reset in print');
  assert(/wizard-box[^{]*\{[^}]*overflow:\s*visible\s*!important/i.test(printBlock), '.wizard-box must have overflow: visible !important');
  assert(/wrap[^{]*\{[^}]*width:\s*100%\s*!important/i.test(printBlock), '.wrap must expand to width: 100% in print');
  assert(/checker-layout[^{]*\{[^}]*display:\s*block\s*!important/i.test(printBlock), '.checker-layout must display as block');

  // 5. Page break & fragmentation controls
  assert(printBlock.includes('break-inside: avoid !important'), 'break-inside: avoid !important must exist');
  assert(printBlock.includes('page-break-inside: avoid !important'), 'page-break-inside: avoid !important must exist for legacy compatibility');
  assert(printBlock.includes('.checklist-item'), '.checklist-item must have break-inside protection');
  assert(printBlock.includes('.notice'), '.notice must have break-inside protection');
  assert(printBlock.includes('.resultscore'), '.resultscore must have break-inside protection');
  assert(printBlock.includes('#resServiceCoverageCard > div'), '#resServiceCoverageCard > div must have break-inside protection');
  assert(printBlock.includes('#resOfficialSourceCard > div'), '#resOfficialSourceCard > div must have break-inside protection');
  assert(printBlock.includes('#resFlagsContainer > div'), '#resFlagsContainer > div must have break-inside protection');

  // 6. Header orphan prevention
  assert(printBlock.includes('break-after: avoid !important'), 'break-after: avoid !important must exist');
  assert(printBlock.includes('page-break-after: avoid !important'), 'page-break-after: avoid !important must exist');
  assert(printBlock.includes('.result-header'), '.result-header must have break-after avoid');
  assert(printBlock.includes('[data-i18n="checklist_heading"]'), 'checklist heading must have break-after avoid');

  // 7. Official portal URL exposure
  assert(printBlock.includes('#resOfficialSourceCard a[href]::after'), 'Official portal link must expose href');
  assert(printBlock.includes('attr(href)'), 'href attribute must be appended to portal link');

  // 8. Checkbox styling
  assert(printBlock.includes('.check-box-label input[type="checkbox"]'), 'Checkboxes must have dedicated print styles');
  assert(printBlock.includes('appearance: auto !important'), 'Checkboxes must use appearance: auto');
  assert(printBlock.includes('.checklist-item.is-checked'), 'Checked items must have print styles');
  assert(/checklist-item\.is-checked[^{]*\{[^}]*opacity:\s*1\s*!important/i.test(printBlock), 'Checked items must remain fully legible at opacity: 1');

  // 9. Document branding header
  assert(printBlock.includes('.result-header::before'), 'Document branding header must exist in print');
  assert(printBlock.includes('PASSPORTREADY'), 'Branding header must state PASSPORTREADY');

  // 10. DOM check
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(html.includes('id="printBtn"'), '#printBtn must exist in index.html');
  assert(html.includes('data-i18n="btn_print"'), '#printBtn must have data-i18n="btn_print"');

  // 11. Event wiring in js/app.js
  const appJs = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');
  assert(appJs.includes("printBtn.addEventListener('click', () => window.print())"), 'printBtn must be wired to window.print()');

  // 12. Headless Chrome PDF Verification (if Chrome executable exists)
  const chromePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  ];
  const chromeExe = chromePaths.find(p => fs.existsSync(p));
  if (chromeExe) {
    const { execFileSync } = require('child_process');
    const { PassportRulesEngine } = require('../js/rules-engine.js');
    const rulePacks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'country-rules.json'), 'utf8'));
    const countryDataModule = require('../data/country-data.js');
    const countries = countryDataModule.PASSPORT_COUNTRIES;
    const engine = new PassportRulesEngine(rulePacks, countries);

    const evalResult = engine.evaluate({
      countryCode: 'IN',
      service: 'first_passport',
      location: 'inside',
      urgency: 'tatkaal',
      nameMatch: 'minor',
      special: 'loss_reported',
      exactAge: 4
    }, 'en');

    assert(evalResult.checklist.length >= 8, 'Evaluation should produce at least 8 checklist items');
    assert(evalResult.flags.length >= 3, 'Evaluation should produce at least 3 flags');

    const testHtmlPath = path.join(__dirname, '..', 'test-val-print.html');
    const outPdfPath = path.join(__dirname, '..', 'test-val-print.pdf');

    let testDoc = html.replace('<link rel="stylesheet" href="css/styles.css?v=20261020_01">', `<style>\n${css}\n</style>`);
    testDoc = testDoc.replace(/<script[\s\S]*?<\/script>/gi, '');
    testDoc = testDoc.replace('<div class="resultbox" id="resultbox">', '<div class="resultbox show" id="resultbox">');
    testDoc = testDoc.replace('<h3 id="resCountryName" style="font-size:1.5rem;color:var(--forest-dark);margin:0 0 2px">India</h3>', `<h3 id="resCountryName" style="font-size:1.5rem;color:var(--forest-dark);margin:0 0 2px">${evalResult.country.name}</h3>`);

    const checklistHtml = evalResult.checklist.map(item => `
      <li class="checklist-item" data-item-id="${item.id}">
        <label class="check-box-label">
          <input type="checkbox" data-check-id="${item.id}">
          <span class="custom-check"></span>
        </label>
        <div class="check-text">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <strong style="font-size:14px;color:#1e293b">${item.title}</strong>
            ${item.mandatory ? '<span class="status-pill status-mandatory">MANDATORY</span>' : '<span class="status-pill status-optional">CONDITIONAL</span>'}
          </div>
          <p style="margin:4px 0 0;font-size:12px;color:#64748b;line-height:1.5">${item.details}</p>
        </div>
      </li>
    `).join('');

    const flagsHtml = evalResult.flags.map(f => `
      <div class="notice" style="border-left:4px solid ${f.severity === 'critical' ? '#dc2626' : '#d97706'};background:${f.severity === 'critical' ? '#fef2f2' : '#fffbeb'};color:#451a03;margin-bottom:12px">
        <strong style="color:${f.severity === 'critical' ? '#991b1b' : '#b45309'};font-size:13px">${f.title}</strong>
        <p style="margin:5px 0;font-size:12px">${f.message}</p>
        <div style="font-weight:700;font-size:11px;color:${f.severity === 'critical' ? '#b91c1c' : '#92400e'}">Recommended Action: ${f.action}</div>
      </div>
    `).join('');

    const sourceHtml = `
      <div class="resultscore" style="background:#f4f9f6;border:1px solid #c8e0d4">
        <div class="scoreicon" style="background:#d4ecdf;color:#135939">🏛</div>
        <div style="flex:1">
          <strong style="color:#0e4028">${evalResult.country.authorityName}</strong>
          <small style="display:block;color:#4c6e5b;margin:3px 0">Direct government portal verified for ${evalResult.country.name}.</small>
          <a href="${evalResult.country.officialPortalUrl}" target="_blank" rel="noopener" class="btn btn-dark" style="padding:7px 14px;font-size:12px;margin-top:6px;display:inline-flex">Open Official Portal ↗</a>
        </div>
      </div>
    `;

    testDoc = testDoc.replace('<div id="resOfficialSourceCard"></div>', `<div id="resOfficialSourceCard">${sourceHtml}</div>`);
    testDoc = testDoc.replace('<div id="resFlagsContainer" style="margin:20px 0"></div>', `<div id="resFlagsContainer" style="margin:20px 0">${flagsHtml}</div>`);
    testDoc = testDoc.replace('<ul id="resChecklistItems" class="checklist-ul"></ul>', `<ul id="resChecklistItems" class="checklist-ul">${checklistHtml}</ul>`);

    fs.writeFileSync(testHtmlPath, testDoc, 'utf8');

    execFileSync(chromeExe, [
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      '--print-to-pdf=' + outPdfPath,
      'file:///' + testHtmlPath
    ]);

    const stats = fs.statSync(outPdfPath);
    assert(stats.size > 50000, `PDF size must be > 50KB to confirm non-blank rendering (got ${stats.size})`);

    const pdfStr = fs.readFileSync(outPdfPath, 'latin1');
    const pages = pdfStr.match(/\/Type\s*\/Page\b/g);
    assert(pages && pages.length >= 2, `PDF must have >= 2 pages to confirm non-clipped pagination (got ${pages ? pages.length : 0})`);
    assert(pdfStr.includes('passportindia.gov.in'), 'PDF must include the official authority portal URL');

    const zlib = require('zlib');
    const re = /stream\r?\n([\s\S]*?)\r?\nendstream/g;
    let m;
    let allDecoded = '';
    while ((m = re.exec(pdfStr)) !== null) {
      try {
        allDecoded += zlib.inflateSync(Buffer.from(m[1], 'latin1')).toString('utf8');
      } catch(e) {}
    }
    assert(!allDecoded.includes('Print / Save PDF'), 'Print button text must be hidden from print output');
    assert(!allDecoded.includes('Start New Check'), 'Restart button text must be hidden from print output');

    if (fs.existsSync(testHtmlPath)) fs.unlinkSync(testHtmlPath);
    if (fs.existsSync(outPdfPath)) fs.unlinkSync(outPdfPath);
  }
});

console.log('\n====================================================');
console.log(`Results: ${passedTests} of ${totalTests} tests passed.`);
console.log('====================================================');

if (passedTests !== totalTests) {
  process.exit(1);
}

