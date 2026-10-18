const fs = require('fs');
const path = require('path');

console.log('--- Applying Phase 3.3 Mexico Emergency Fee Logic Hotfix ---');

const rulesPath = path.join(__dirname, '..', 'data', 'country-rules.json');
const rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

// 1. Update Mexico (MX) in data/country-rules.json
rules.MX.last_reviewed = '2026-10-19';

const mxSources = [
  {
    url: 'https://www.gob.mx/pasaporte',
    publisher: 'Secretaría de Relaciones Exteriores (SRE)',
    page_title: 'Trámite de Pasaporte Mexicano - Costos 2026',
    checked_at: '2026-10-19'
  },
  {
    url: 'https://www.gob.mx/sre/acciones-y-programas/costo-del-pasaporte',
    publisher: 'Secretaría de Relaciones Exteriores (SRE)',
    page_title: 'Costos del Pasaporte Mexicano 2026',
    checked_at: '2026-10-19'
  },
  {
    url: 'https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025',
    publisher: 'Secretaría de Relaciones Exteriores (SRE) - Embamex / Secciones Consulares',
    page_title: 'Derechos Consulares y Tarifas con Recargo de Emergencia (Art. 20 LFD)',
    checked_at: '2026-10-19'
  }
];
rules.MX.sources = mxSources;
rules.MX.services.first_passport.sources = mxSources;

// Update eligibility rules
rules.MX.services.first_passport.eligibility = [
  {
    rule: 'Must prove Mexican nationality by birth or naturalization under Mexican law.',
    source_url: 'https://www.gob.mx/pasaporte',
    last_reviewed: '2026-10-19'
  },
  {
    rule: 'One-year passport validity is issued exclusively to children under three years of age to accommodate rapid biometric changes. It is not an emergency appointment qualification.',
    source_url: 'https://www.gob.mx/pasaporte',
    last_reviewed: '2026-10-19'
  },
  {
    rule: 'Applicants aged 3 to 17 may receive 3-year or 6-year passports. Adults aged 18+ may select 3-year, 6-year, or 10-year validity.',
    source_url: 'https://www.gob.mx/pasaporte',
    last_reviewed: '2026-10-19'
  }
];

rules.MX.services.first_passport.fees = {
  currency: 'MXN',
  fiscal_year: 2026,
  statutory_source: 'Ley Federal de Derechos 2026 / Secretaría de Relaciones Exteriores (SRE)',
  standard_domestic_mxn: {
    validity_1_year: 920,
    validity_3_year: 1795,
    validity_6_year: 2440,
    validity_10_year: 4280
  },
  discounted_domestic_mxn: {
    validity_1_year: 460,
    validity_3_year: 900,
    validity_6_year: 1220,
    validity_10_year: 2140
  },
  eligibility_conditions: {
    validity_1_year: 'The 1-year passport is issued exclusively to children under three years of age due to rapid developmental and biometric changes. It is not an emergency appointment document.',
    discount_50_percent: 'Subject to documented eligibility for adults aged 60+, persons with certified disabilities, and agricultural workers under the Mexico-Canada SAWP programme.',
    agricultural_worker_restriction: 'Temporary agricultural workers under the Mexico-Canada SAWP programme are NOT eligible for the discount on the 10-year passport (validity restricted to 3 or 6 years).',
    emergency_appointments: 'Emergency non-scheduled appointments at Mexican consulates abroad (citas de emergencia) are subject to consular approval based on documented humanitarian, medical, or legal urgency. Under Article 20 of the Ley Federal de Derechos, emergency consular processing incurs a statutory rounded surcharge (30%), added to the standard fee for the applicant eligible validity (1, 3, 6, or 10 years). An emergency appointment does not automatically restrict or qualify an applicant for a 1-year document.'
  },
  consular_overseas_usd: {
    currency: 'USD',
    statutory_source: 'Ley Federal de Derechos 2026 / SRE Secciones Consulares (Art. 20)',
    standard: {
      validity_1_year: 44,
      validity_3_year: 101,
      validity_6_year: 137,
      validity_10_year: 209
    },
    emergency_surcharge_schedule: {
      validity_1_year: {
        base_amount: 44,
        emergency_surcharge: 13,
        total_payable: 57
      },
      validity_3_year: {
        base_amount: 101,
        emergency_surcharge: 30,
        total_payable: 131
      },
      validity_6_year: {
        base_amount: 137,
        emergency_surcharge: 41,
        total_payable: 178
      },
      validity_10_year: {
        base_amount: 209,
        emergency_surcharge: 63,
        total_payable: 272
      }
    },
    discounted_50_percent: {
      validity_1_year: 22,
      validity_3_year: 50.5,
      validity_6_year: 68.5,
      validity_10_year: 104.5
    },
    discounted_emergency_schedule: {
      validity_1_year: {
        base_amount: 22,
        emergency_surcharge: 6.5,
        total_payable: 28.5
      },
      validity_3_year: {
        base_amount: 50.5,
        emergency_surcharge: 15,
        total_payable: 65.5
      },
      validity_6_year: {
        base_amount: 68.5,
        emergency_surcharge: 20.5,
        total_payable: 89
      },
      validity_10_year: {
        base_amount: 104.5,
        emergency_surcharge: 31.5,
        total_payable: 136
      }
    }
  },
  confirmation_required: false,
  fee_records: [
    // Domestic Standard
    {
      currency: 'MXN',
      base_amount: 920,
      emergency_surcharge: 0,
      total_payable: 920,
      applicant_category: 'children_under_3_only',
      application_channel: 'domestic',
      validity_period: '1_year',
      discount_eligibility: 'Standard rate for children under 3; 50% discount applies if certified disabled.',
      applicable_conditions: 'Issued exclusively to children under 3 years old under normal validity schedule.',
      official_source_url: 'https://www.gob.mx/pasaporte',
      verification_date: '2026-10-19',
      date_checked: '2026-10-19',
      effective_date: '2026-01-01',
      verification_status: 'verified'
    },
    {
      currency: 'MXN',
      base_amount: 1795,
      emergency_surcharge: 0,
      total_payable: 1795,
      applicant_category: 'general',
      application_channel: 'domestic',
      validity_period: '3_years',
      discount_eligibility: '50% discount available for seniors 60+, certified disabled, and Canada SAWP workers.',
      applicable_conditions: 'Standard domestic issuance for applicants aged 3 and older.',
      official_source_url: 'https://www.gob.mx/pasaporte',
      verification_date: '2026-10-19',
      date_checked: '2026-10-19',
      effective_date: '2026-01-01',
      verification_status: 'verified'
    },
    {
      currency: 'MXN',
      base_amount: 2440,
      emergency_surcharge: 0,
      total_payable: 2440,
      applicant_category: 'general',
      application_channel: 'domestic',
      validity_period: '6_years',
      discount_eligibility: '50% discount available for seniors 60+, certified disabled, and Canada SAWP workers.',
      applicable_conditions: 'Standard domestic issuance for applicants aged 3 and older.',
      official_source_url: 'https://www.gob.mx/pasaporte',
      verification_date: '2026-10-19',
      date_checked: '2026-10-19',
      effective_date: '2026-01-01',
      verification_status: 'verified'
    },
    {
      currency: 'MXN',
      base_amount: 4280,
      emergency_surcharge: 0,
      total_payable: 4280,
      applicant_category: 'adult_18_and_over',
      application_channel: 'domestic',
      validity_period: '10_years',
      discount_eligibility: '50% discount available for seniors 60+ and certified disabled (SAWP agricultural workers excluded).',
      applicable_conditions: 'Available exclusively to adult applicants aged 18 and older.',
      official_source_url: 'https://www.gob.mx/pasaporte',
      verification_date: '2026-10-19',
      date_checked: '2026-10-19',
      effective_date: '2026-01-01',
      verification_status: 'verified'
    },
    // Domestic Discounted (50%)
    {
      currency: 'MXN',
      base_amount: 460,
      emergency_surcharge: 0,
      total_payable: 460,
      applicant_category: 'discount_eligible_children_under_3',
      application_channel: 'domestic',
      validity_period: '1_year',
      discount_eligibility: 'Certified disabled children under 3 years old.',
      applicable_conditions: 'Requires official disability certificate issued by competent Mexican public health authority.',
      official_source_url: 'https://www.gob.mx/pasaporte',
      verification_date: '2026-10-19',
      date_checked: '2026-10-19',
      effective_date: '2026-01-01',
      verification_status: 'verified'
    },
    {
      currency: 'MXN',
      base_amount: 900,
      emergency_surcharge: 0,
      total_payable: 900,
      applicant_category: 'discount_eligible',
      application_channel: 'domestic',
      validity_period: '3_years',
      discount_eligibility: 'Seniors 60+, certified disabled, and Mexico-Canada SAWP agricultural workers.',
      applicable_conditions: 'Proof of age (INAPAM / Birth Cert), disability credential, or official SAWP employer constancy required.',
      official_source_url: 'https://www.gob.mx/pasaporte',
      verification_date: '2026-10-19',
      date_checked: '2026-10-19',
      effective_date: '2026-01-01',
      verification_status: 'verified'
    },
    {
      currency: 'MXN',
      base_amount: 1220,
      emergency_surcharge: 0,
      total_payable: 1220,
      applicant_category: 'discount_eligible',
      application_channel: 'domestic',
      validity_period: '6_years',
      discount_eligibility: 'Seniors 60+, certified disabled, and Mexico-Canada SAWP agricultural workers.',
      applicable_conditions: 'Proof of age (INAPAM / Birth Cert), disability credential, or official SAWP employer constancy required.',
      official_source_url: 'https://www.gob.mx/pasaporte',
      verification_date: '2026-10-19',
      date_checked: '2026-10-19',
      effective_date: '2026-01-01',
      verification_status: 'verified'
    },
    {
      currency: 'MXN',
      base_amount: 2140,
      emergency_surcharge: 0,
      total_payable: 2140,
      applicant_category: 'discount_eligible',
      application_channel: 'domestic',
      validity_period: '10_years',
      discount_eligibility: 'Seniors 60+ and certified disabled only. SAWP agricultural workers are NOT eligible for 10-year discount.',
      applicable_conditions: 'Proof of age (INAPAM) or certified disability credential required.',
      official_source_url: 'https://www.gob.mx/pasaporte',
      verification_date: '2026-10-19',
      date_checked: '2026-10-19',
      effective_date: '2026-01-01',
      verification_status: 'verified'
    },
    // Consular Standard USD
    {
      currency: 'USD',
      base_amount: 44,
      emergency_surcharge: 0,
      total_payable: 44,
      applicant_category: 'children_under_3_only',
      application_channel: 'consular_overseas',
      validity_period: '1_year',
      discount_eligibility: '50% discount applies if child is certified disabled (payable: $22 USD).',
      applicable_conditions: 'Consular issuance abroad exclusively for children under 3.',
      official_source_url: 'https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025',
      verification_date: '2026-10-19',
      date_checked: '2026-10-19',
      effective_date: '2026-01-01',
      verification_status: 'verified'
    },
    {
      currency: 'USD',
      base_amount: 101,
      emergency_surcharge: 0,
      total_payable: 101,
      applicant_category: 'general',
      application_channel: 'consular_overseas',
      validity_period: '3_years',
      discount_eligibility: '50% discount applies for seniors 60+ and certified disabled (payable: $50.50 USD).',
      applicable_conditions: 'Standard scheduled consular appointment abroad.',
      official_source_url: 'https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025',
      verification_date: '2026-10-19',
      date_checked: '2026-10-19',
      effective_date: '2026-01-01',
      verification_status: 'verified'
    },
    {
      currency: 'USD',
      base_amount: 137,
      emergency_surcharge: 0,
      total_payable: 137,
      applicant_category: 'general',
      application_channel: 'consular_overseas',
      validity_period: '6_years',
      discount_eligibility: '50% discount applies for seniors 60+ and certified disabled (payable: $68.50 USD).',
      applicable_conditions: 'Standard scheduled consular appointment abroad.',
      official_source_url: 'https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025',
      verification_date: '2026-10-19',
      date_checked: '2026-10-19',
      effective_date: '2026-01-01',
      verification_status: 'verified'
    },
    {
      currency: 'USD',
      base_amount: 209,
      emergency_surcharge: 0,
      total_payable: 209,
      applicant_category: 'adult_18_and_over',
      application_channel: 'consular_overseas',
      validity_period: '10_years',
      discount_eligibility: '50% discount applies for seniors 60+ and certified disabled (payable: $104.50 USD).',
      applicable_conditions: 'Standard scheduled consular appointment abroad for adults 18+.',
      official_source_url: 'https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025',
      verification_date: '2026-10-19',
      date_checked: '2026-10-19',
      effective_date: '2026-01-01',
      verification_status: 'verified'
    },
    // Consular Emergency Surcharge Schedule (Art. 20 LFD)
    {
      currency: 'USD',
      base_amount: 44,
      emergency_surcharge: 13,
      total_payable: 57,
      applicant_category: 'children_under_3_only',
      application_channel: 'consular_emergency',
      validity_period: '1_year',
      discount_eligibility: 'Discounted emergency payable: $28.50 USD ($22 base + $6.50 surcharge).',
      applicable_conditions: 'Approved emergency appointment outside scheduled slots; issued only to children under 3 years old.',
      official_source_url: 'https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025',
      verification_date: '2026-10-19',
      date_checked: '2026-10-19',
      effective_date: '2026-01-01',
      verification_status: 'verified'
    },
    {
      currency: 'USD',
      base_amount: 101,
      emergency_surcharge: 30,
      total_payable: 131,
      applicant_category: 'general',
      application_channel: 'consular_emergency',
      validity_period: '3_years',
      discount_eligibility: 'Discounted emergency payable: $65.50 USD ($50.50 base + $15 surcharge).',
      applicable_conditions: 'Approved emergency appointment outside scheduled slots for proven emergency.',
      official_source_url: 'https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025',
      verification_date: '2026-10-19',
      date_checked: '2026-10-19',
      effective_date: '2026-01-01',
      verification_status: 'verified'
    },
    {
      currency: 'USD',
      base_amount: 137,
      emergency_surcharge: 41,
      total_payable: 178,
      applicant_category: 'general',
      application_channel: 'consular_emergency',
      validity_period: '6_years',
      discount_eligibility: 'Discounted emergency payable: $89.00 USD ($68.50 base + $20.50 surcharge).',
      applicable_conditions: 'Approved emergency appointment outside scheduled slots for proven emergency.',
      official_source_url: 'https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025',
      verification_date: '2026-10-19',
      date_checked: '2026-10-19',
      effective_date: '2026-01-01',
      verification_status: 'verified'
    },
    {
      currency: 'USD',
      base_amount: 209,
      emergency_surcharge: 63,
      total_payable: 272,
      applicant_category: 'adult_18_and_over',
      application_channel: 'consular_emergency',
      validity_period: '10_years',
      discount_eligibility: 'Discounted emergency payable: $136.00 USD ($104.50 base + $31.50 surcharge).',
      applicable_conditions: 'Approved emergency appointment outside scheduled slots for adults 18+ with proven emergency.',
      official_source_url: 'https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025',
      verification_date: '2026-10-19',
      date_checked: '2026-10-19',
      effective_date: '2026-01-01',
      verification_status: 'verified'
    }
  ]
};

// Ensure amount property is populated for backward-compatibility alongside total_payable
rules.MX.services.first_passport.fees.fee_records.forEach(r => {
  r.amount = r.total_payable;
});

// Write data/country-rules.json
fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));
console.log('✓ Updated data/country-rules.json with separated Mexico emergency fee schedules');

// Regenerate data/rule-packs.js
const rulePacksJsPath = path.join(__dirname, '..', 'data', 'rule-packs.js');
const rulePacksContent = 'window.RULE_PACKS = ' + JSON.stringify(rules, null, 2) + ';\nif (typeof module !== \'undefined\' && module.exports) { module.exports = { RULE_PACKS: window.RULE_PACKS }; }\n';
fs.writeFileSync(rulePacksJsPath, rulePacksContent);
console.log('✓ Regenerated data/rule-packs.js');

// Update country-coverage-tracker.csv
const csvPath = path.join(__dirname, '..', 'country-coverage-tracker.csv');
const csvLines = fs.readFileSync(csvPath, 'utf8').split('\n');
const newCsvLines = csvLines.map(line => {
  if (line.startsWith('Mexico,MX,')) {
    return 'Mexico,MX,MEX,verified,"Secretaría de Relaciones Exteriores (SRE)",https://www.gob.mx/pasaporte,verified,Yes,Yes,2026-10-19,PassportReady Senior Research Analyst,"ISO 3166-1 entry; fully verified rule pack with domestic and consular procedures. Updated to 2026 SRE fees: domestic standard MXN 920, 1795, 2440, 4280; discounted MXN 460, 900, 1220, 2140; consular standard USD 44, 101, 137, 209 (discounted USD 22, 50.50, 68.50, 104.50); emergency consular totals USD 57, 131, 178, 272 (discounted USD 28.50, 65.50, 89, 136)."';
  }
  return line;
});
fs.writeFileSync(csvPath, newCsvLines.join('\n'));
console.log('✓ Updated country-coverage-tracker.csv for Mexico emergency fees');
