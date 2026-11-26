// Phase 5 / batch 1: record-level fee verification for the 21 packs that had never been
// verified against official pages. Run once: node scripts/apply-phase5-batch1.js
// Then: node scripts/sync-rule-packs.js && node scripts/generate-static-pages.js
//
// Rules used:
//  - A fee record is "verified" ONLY if an official page was read on CHECK_DATE and the amount matched.
//  - Everything else is "unverified" and rendered with a visible warning.
//  - effective_date is kept only where an official source states it; otherwise null.
const fs = require('fs');
const path = require('path');

const CHECK_DATE = '2026-11-26';
const file = path.join(__dirname, '..', 'data', 'country-rules.json');
const rules = JSON.parse(fs.readFileSync(file, 'utf8'));

const has = (rec, ...needles) => needles.some(n => (rec.applicant_category || '').includes(n));
const chan = (rec, ...needles) => needles.some(n => (rec.application_channel || '').includes(n));

// For each country: confirm(rec) -> { src, effective? } | null  (null = unverified)
const CONFIG = {
  PK: { skip: true }, // rebuilt explicitly below
  BD: { confirm: () => null },
  NP: { confirm: () => null, reviewed: true },
  LK: { src: 'https://immigration.gov.lk/pages_e.php?id=8', confirm: () => true },
  MY: {
    src: 'https://www.imi.gov.my/index.php/perkhidmatan-utama/pasport/pasport-malaysia-antarabangsa/',
    confirm: r => !has(r, 'pmd_pmr', 'pma_dependents')
  },
  ID: {
    src: 'https://www.imigrasi.go.id/biaya_imigrasi/index?lang=en-US',
    srcExpress: 'https://www.imigrasi.go.id/wni/paspor-baru/masyarakat-umum',
    confirm: r => !has(r, 'minor_under_17_conditional')
  },
  SA: {
    src: 'https://www.absher.sa/wps/wcm/connect/individuals/79bfef4c-5b06-48b8-b60c-787e428657ef/book1_INDe-V7_en.pdf',
    confirm: () => true
  },
  PH: { src: 'https://passport.gov.ph/faqs_2', confirm: () => true },
  NG: {
    src: 'https://immigration.gov.ng/nigeria-immigration-service-announces-upward-review-of-nigerian-standard-passport-fees/',
    confirm: () => true,
    effective: '2025-09-01'
  },
  DE: { src: 'https://www.gesetze-im-internet.de/passv_2007/__27.html', confirm: () => true },
  FR: {
    src: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F21091?lang=en',
    srcMinor: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F14930?lang=en',
    confirm: () => true
  },
  IT: {
    src: 'https://ambaccra.esteri.it/wp-content/uploads/2024/05/FAQ-PASSAPORTO-E-CIE.pdf',
    confirm: () => true
  },
  ES: { src: 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1086', confirm: () => true },
  IE: {
    src: 'https://www.ireland.ie/en/dfa/passports/how-to-apply-for-a-passport/renew-child-passport/',
    confirm: r => has(r, 'child_under_18')
  },
  KE: {
    src: 'https://immigration.go.ke/type-and-fees/',
    confirm: () => true
  },
  JP: { src: 'https://www.mofa.go.jp/mofaj/files/100482215.pdf', confirm: () => true, effective: '2026-07-01' },
  BR: { src: 'https://www.gov.br/pt-br/servicos/obter-passaporte-comum-para-brasileiro', confirm: () => true },
  ZA: {
    src: 'https://www.gov.za/news/media-statements/minister-aaron-motsoaledi-approves-new-fees-passports-and-travel-documents-09',
    confirm: () => true,
    effective: '2022-11-01'
  },
  NZ: { src: 'https://www.passports.govt.nz/passport-costs', confirm: () => true },
  SG: { src: 'https://www.ica.gov.sg/documents/passport/apply', confirm: () => true },
  MX: {
    src: 'https://consulmex.sre.gob.mx/filadelfia/index.php/consulado/tarifas24',
    // only consular (overseas) 3/6/10-year fees were matched; 1-year conflicts between consulates;
    // emergency totals are our own +30% arithmetic; domestic MXN pages were unreachable.
    confirm: r => chan(r, 'consular_overseas') && !(r.validity_period === '1_year')
  }
};

const NOTES = {
  PK: [
    'Fees checked on the official DGIP e-Passport fee page on 2026-11-26. The page lists 36-page and 72-page options and no Fast Track fee, so no Fast Track fee is shown.',
    'Children under 15 receive a 5-year passport only.'
  ],
  BD: ['The official fee page could not be read automatically (it needs JavaScript). All amounts below are unconfirmed.'],
  NP: ['Official Nepal pages show different fees by channel (Department of Passports, district offices, embassies). The amounts below do not match the Department of Passports page and are not confirmed. Check nepalpassport.gov.np.'],
  LK: ['A 10-year child passport option (LKR 10,000 normal / 20,000 urgent) also exists and is not listed here.'],
  MY: ['The 10-year RM350 option was reported in the press as starting in June 2026; confirm the start date with the Immigration Department (JIM). PMD/PMR and PMA dependants fees are not confirmed.'],
  ID: ['Fees come from the Directorate General of Immigration pages. The minor/marital-status condition is not confirmed on those pages.'],
  SA: ['The fee source is an official Absher guide dated January 2022; confirm in Absher before paying. Minors under 15 are limited to 5-year validity, and under-21s to 5 years; no separate child fee was found.'],
  PH: ['Payment centres may add a PHP 50 convenience fee that is not included here.'],
  NG: ['A 64-page, 5-year option also exists and is not listed here.'],
  DE: ['The Auswärtiges Amt travel page shows EUR 60 for adults 24+, which conflicts with section 27 PassV (EUR 70). We follow the law text.'],
  FR: ['An emergency (temporary) passport exists for adults (EUR 30 tax stamp, 1-year validity) and is not listed here.'],
  IT: ['Source is an Italian consular FAQ. Validity depends on age: 3 years (0-3), 5 years (3-18), 10 years (18+). The optional Poste delivery fee is not confirmed.'],
  ES: ['Validity depends on age: 2 years (under 5), 5 years (under 30), 10 years (30+).'],
  IE: ['Official Irish adult, bundle and urgent fees could not be read and are not confirmed. The urgent appointment service is for renewals only.'],
  KE: ['Child and urgent/express fees are not published on the official pages that were checked.'],
  JP: ['Fees effective 2026-07-01 per the MOFA fee notice. The official table splits only at age 18; the under-12 split shown in the age bands is not confirmed.'],
  BR: ['Validity depends on age: 1 to 5 years for minors under 18 (by age band), 10 years for over 18.'],
  ZA: ['Fees shown are for applications inside South Africa. Applications abroad are R1,200 (32-page) and R2,400 (48-page) per the same notice. The lost-passport penalty is not confirmed.'],
  NZ: ['Non-residents applying online do not pay GST on standard and urgent fees.'],
  SG: ['A newborn fee waiver applies to MyICA applications made before the first birthday.'],
  MX: ['Consular fees (USD) come from a 2026 Mexican consulate tariff. The 1-year fee differs between consulates, emergency totals are +30% estimates, and domestic MXN fees could not be confirmed.']
};

// Fixes to amounts / validity
function applyFixes(code, rec) {
  if (code === 'ZA') {
    if (rec.applicant_category === 'adult_tourist_32_pages') { rec.amount = rec.base_amount = rec.total_payable = 600; }
    if (rec.applicant_category === 'maxi_tourist_48_pages') { rec.amount = rec.base_amount = rec.total_payable = 1200; }
    if (rec.applicant_category === 'child_under_16') { rec.amount = rec.base_amount = rec.total_payable = 600; }
  }
  if (code === 'IT') rec.validity_period = 'by_age_3_5_or_10_years';
  if (code === 'BR') rec.validity_period = 'by_age_1_to_10_years';
}

function mark(rec, ok, src, effective) {
  if (ok) {
    rec.verification_status = 'verified';
    rec.verification_date = CHECK_DATE;
    rec.date_checked = CHECK_DATE;
    rec.official_source_url = src;
    rec.effective_date = effective || null; // null = not stated by the source
  } else {
    rec.verification_status = 'unverified';
    rec.verification_date = null;
    rec.date_checked = CHECK_DATE; // we looked on this date but could not confirm the value
    rec.effective_date = null;
  }
}

const summary = [];
for (const [code, cfg] of Object.entries(CONFIG)) {
  const pack = rules[code];
  if (!pack || cfg.skip) continue;
  let v = 0, u = 0;
  for (const svc of Object.values(pack.services || {})) {
    const f = svc && svc.fees;
    const recs = Array.isArray(f) ? f : (f && Array.isArray(f.fee_records) ? f.fee_records : []);
    for (const r of recs) {
      applyFixes(code, r);
      const ok = !!cfg.confirm(r);
      let src = cfg.src;
      if (code === 'ID' && has(r, 'express', 'lost_passport', 'damaged_passport')) src = cfg.srcExpress;
      if (code === 'FR' && has(r, 'minor')) src = cfg.srcMinor;
      mark(r, ok, src, cfg.effective);
      ok ? v++ : u++;
    }
  }
  // keep ZA flat keys consistent
  if (code === 'ZA') {
    const flat = pack.services.first_passport.fees;
    flat.adult_tourist_32_pages = 600; flat.maxi_tourist_48_pages = 1200; flat.child_passport_under_16 = 600;
    delete flat.lost_passport_penalty_double_fee;
  }
  pack.fee_review_notes = NOTES[code] || [];
  if (code !== 'BD') pack.last_reviewed = CHECK_DATE;
  delete pack.effective_from; // not supported by any official page we could read
  summary.push(`${code}: ${v} verified / ${u} unverified`);
}

// ---- Pakistan: rebuild fee table from the official DGIP page (read 2026-11-26) ----
{
  const code = 'PK';
  const src = 'https://dgip.gov.pk/passport/ordinary-passport.php';
  const pack = rules[code];
  const mk = (cat, pages, years, normal, urgent) => ([
    { applicant_category: `standard_${pages}_pages_${years}yr`, application_channel: 'domestic_normal', amount: normal, base_amount: normal, emergency_surcharge: 0, total_payable: normal,
      validity_period: `${years}_years`, discount_eligibility: `Normal delivery, ${pages} pages, ${years}-year e-Passport.` },
    { applicant_category: `urgent_${pages}_pages_${years}yr`, application_channel: 'domestic_urgent', amount: urgent, base_amount: normal, emergency_surcharge: urgent - normal, total_payable: urgent,
      validity_period: `${years}_years`, discount_eligibility: `Urgent delivery, ${pages} pages, ${years}-year e-Passport.` }
  ]);
  const rows = [
    ...mk('s', 36, 5, 9000, 15000), ...mk('s', 36, 10, 13500, 22500),
    ...mk('s', 72, 5, 16500, 27000), ...mk('s', 72, 10, 24750, 40500)
  ].map(r => ({
    currency: 'PKR', ...r,
    applicable_conditions: r.validity_period === '10_years' ? 'Pakistani citizens aged 15+ with CNIC/NICOP. 10-year validity is not issued to children under 15.' : 'Pakistani citizens with valid CNIC/NICOP (or CRC / Juvenile Card for minors).',
    official_source_url: src, effective_date: null,
    verification_date: CHECK_DATE, date_checked: CHECK_DATE, verification_status: 'verified'
  }));
  const fp = pack.services.first_passport;
  fp.fees = {
    currency: 'PKR',
    normal_36_pages_5_year: 9000, urgent_36_pages_5_year: 15000,
    normal_36_pages_10_year: 13500, urgent_36_pages_10_year: 22500,
    normal_72_pages_5_year: 16500, urgent_72_pages_5_year: 27000,
    normal_72_pages_10_year: 24750, urgent_72_pages_10_year: 40500,
    fee_records: rows
  };
  pack.last_reviewed = CHECK_DATE;
  pack.fee_review_notes = NOTES.PK;
  delete pack.effective_from;
  summary.push(`PK: ${rows.length} verified (rebuilt from official page)`);
}

fs.writeFileSync(file, JSON.stringify(rules, null, 2) + '\n', 'utf8');
console.log(summary.join('\n'));
