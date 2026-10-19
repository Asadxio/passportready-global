const fs = require('fs');
const path = require('path');
const assert = require('assert');

const rulesPath = path.join(__dirname, '..', 'data', 'country-rules.json');
const rulePacksJsPath = path.join(__dirname, '..', 'data', 'rule-packs.js');

const rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

// 1. UPDATE MALAYSIA (MY)
const my = rules.MY;
assert(my, 'MY rule pack must exist');

// Eligibility additions
const myEligibility = my.services.first_passport.eligibility;
if (!myEligibility.some(e => e.rule.includes('Pegawai dan Kakitangan JIM'))) {
  myEligibility.push({
    rule: "Officers and Staff of the Immigration Department of Malaysia (Pegawai dan Kakitangan JIM) receive 100% statutory fee exemption (Gratis / RM 0) for original 5-year and 10-year passports upon departmental verification.",
    source_url: "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
    last_reviewed: "2026-10-19"
  });
}
if (!myEligibility.some(e => e.rule.includes('PMD') && e.rule.includes('PMR'))) {
  myEligibility.push({
    rule: "Diplomatic (PMD) and Official (PMR) passport holders receive 100% statutory fee exemption (Gratis / RM 0) with approval periods aligned with Kementerian Luar Negeri (KLN / Wisma Putra).",
    source_url: "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
    last_reviewed: "2026-10-19"
  });
}
if (!myEligibility.some(e => e.rule.includes('PMA Dependents'))) {
  myEligibility.push({
    rule: "PMA Dependents receive 100% statutory fee exemption (Gratis / RM 0) aligned with PMD or PMR Principal authorization.",
    source_url: "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
    last_reviewed: "2026-10-19"
  });
}

// Documents addition
const myDocs = my.services.first_passport.documents;
if (!myDocs.some(d => d.document_name.includes('Service Credentials'))) {
  myDocs.push({
    document_name: "Official Immigration Department / Ministry Service Credentials (for official exemptions)",
    requiredness: "conditional",
    conditions: "Official Immigration Department service ID for JIM staff; official Kementerian Luar Negeri (KLN) authorization letter for PMD/PMR; formal principal dependency confirmation for PMA dependents.",
    accepted_alternatives: [],
    original_or_copy: "Original + certified official copy",
    source_url: "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
    last_reviewed: "2026-10-19"
  });
}

// Fee schedule additions
const myCatFees = my.services.first_passport.fees.fee_schedule_by_category;
myCatFees.immigration_officers_staff = {
  category_label: "Officers and Staff of the Immigration Department of Malaysia (Pegawai dan Kakitangan JIM)",
  validity_5_year: {
    status: "eligible_free",
    amount: 0,
    exemption: "Statutory fee exemption for immigration officers and staff."
  },
  validity_10_year: {
    status: "eligible_free",
    amount: 0,
    exemption: "Official service allocation for immigration officers and staff."
  }
};

myCatFees.pmd_pmr_diplomatic_official = {
  category_label: "PMD and PMR (Diplomatic & Official Passports - KLN approval)",
  validity_5_year: {
    status: "eligible_free",
    amount: 0,
    approval: "Aligned with Kementerian Luar Negeri (KLN) approval."
  },
  validity_10_year: {
    status: "eligible_free",
    amount: 0,
    approval: "Aligned with Kementerian Luar Negeri (KLN) approval."
  }
};

myCatFees.pma_dependents = {
  category_label: "PMA Dependents (aligned with PMD or PMR Principal)",
  validity_5_year: {
    status: "eligible_free",
    amount: 0,
    approval: "Aligned with PMD or PMR Principal authorization."
  },
  validity_10_year: {
    status: "eligible_free",
    amount: 0,
    approval: "Aligned with PMD or PMR Principal authorization."
  }
};

// Replacement schedule additions
const myRepl5 = my.services.first_passport.fees.lost_and_damaged_replacement_schedule.validity_5_year;
myRepl5.immigration_officers_staff = { first_loss: 200, second_loss: 500, third_loss: 1000 };
myRepl5.pmd_pmr_diplomatic_official = { first_loss: 0, second_loss: 0, third_loss: 0, note: "Gratis across all replacement tiers" };
myRepl5.pma_dependents = { first_loss: 0, second_loss: 0, third_loss: 0, note: "Gratis across all replacement tiers" };

const myRepl10 = my.services.first_passport.fees.lost_and_damaged_replacement_schedule.validity_10_year;
myRepl10.immigration_officers_staff = { first_loss: 200, second_loss: 500, third_loss: 1000 };
myRepl10.pmd_pmr_diplomatic_official = { first_loss: 0, second_loss: 0, third_loss: 0, note: "Gratis across all replacement tiers" };
myRepl10.pma_dependents = { first_loss: 0, second_loss: 0, third_loss: 0, note: "Gratis across all replacement tiers" };

// Fee records addition
const myRecords = my.services.first_passport.fees.fee_records;
const newMyRecords = [
  {
    currency: "MYR",
    amount: 0,
    base_amount: 0,
    emergency_surcharge: 0,
    total_payable: 0,
    applicant_category: "immigration_officers_staff",
    application_channel: "domestic_counter",
    validity_period: "5_years",
    discount_eligibility: "100% statutory fee exemption for officers and staff of the Immigration Department of Malaysia.",
    applicable_conditions: "Must provide departmental service identification and verification.",
    official_source_url: "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
    effective_date: "2024-01-01",
    verification_date: "2026-10-19",
    date_checked: "2026-10-19",
    verification_status: "verified"
  },
  {
    currency: "MYR",
    amount: 0,
    base_amount: 0,
    emergency_surcharge: 0,
    total_payable: 0,
    applicant_category: "immigration_officers_staff",
    application_channel: "domestic_counter",
    validity_period: "10_years",
    discount_eligibility: "100% statutory fee exemption for officers and staff of the Immigration Department of Malaysia.",
    applicable_conditions: "Must provide departmental service identification and verification.",
    official_source_url: "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
    effective_date: "2024-01-01",
    verification_date: "2026-10-19",
    date_checked: "2026-10-19",
    verification_status: "verified"
  },
  {
    currency: "MYR",
    amount: 0,
    base_amount: 0,
    emergency_surcharge: 0,
    total_payable: 0,
    applicant_category: "pmd_pmr_diplomatic_official",
    application_channel: "domestic_counter",
    validity_period: "5_years",
    discount_eligibility: "100% statutory fee exemption for Diplomatic (PMD) and Official (PMR) passports.",
    applicable_conditions: "Approval period aligned with Kementerian Luar Negeri (KLN).",
    official_source_url: "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
    effective_date: "2024-01-01",
    verification_date: "2026-10-19",
    date_checked: "2026-10-19",
    verification_status: "verified"
  },
  {
    currency: "MYR",
    amount: 0,
    base_amount: 0,
    emergency_surcharge: 0,
    total_payable: 0,
    applicant_category: "pmd_pmr_diplomatic_official",
    application_channel: "domestic_counter",
    validity_period: "10_years",
    discount_eligibility: "100% statutory fee exemption for Diplomatic (PMD) and Official (PMR) passports.",
    applicable_conditions: "Approval period aligned with Kementerian Luar Negeri (KLN).",
    official_source_url: "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
    effective_date: "2024-01-01",
    verification_date: "2026-10-19",
    date_checked: "2026-10-19",
    verification_status: "verified"
  },
  {
    currency: "MYR",
    amount: 0,
    base_amount: 0,
    emergency_surcharge: 0,
    total_payable: 0,
    applicant_category: "pma_dependents",
    application_channel: "domestic_counter",
    validity_period: "5_years",
    discount_eligibility: "100% statutory fee exemption for PMA Dependents.",
    applicable_conditions: "Approval aligned with PMD or PMR Principal.",
    official_source_url: "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
    effective_date: "2024-01-01",
    verification_date: "2026-10-19",
    date_checked: "2026-10-19",
    verification_status: "verified"
  },
  {
    currency: "MYR",
    amount: 0,
    base_amount: 0,
    emergency_surcharge: 0,
    total_payable: 0,
    applicant_category: "pma_dependents",
    application_channel: "domestic_counter",
    validity_period: "10_years",
    discount_eligibility: "100% statutory fee exemption for PMA Dependents.",
    applicable_conditions: "Approval aligned with PMD or PMR Principal.",
    official_source_url: "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
    effective_date: "2024-01-01",
    verification_date: "2026-10-19",
    date_checked: "2026-10-19",
    verification_status: "verified"
  }
];

newMyRecords.forEach(nr => {
  if (!myRecords.some(r => r.applicant_category === nr.applicant_category && r.validity_period === nr.validity_period)) {
    myRecords.push(nr);
  }
});

// 2. UPDATE INDONESIA (ID)
const id = rules.ID;
assert(id, 'ID rule pack must exist');
const idRecords = id.services.first_passport.fees.fee_records;
const conditionalIdRecord = {
  currency: "IDR",
  amount: 350000,
  base_amount: 350000,
  emergency_surcharge: 0,
  total_payable: 350000,
  applicant_category: "minor_under_17_conditional_marital_status",
  application_channel: "domestic_kantor_imigrasi_or_mpaspor",
  validity_period: "5_year_standard_or_10_year_if_married",
  discount_eligibility: "Conditional statutory evaluation under Permenkumham No. 18/2022 Pasal 2A.",
  applicable_conditions: "WNI di bawah 17 tahun: standar masa berlaku 5 tahun (Rp 350.000 / Rp 650.000); syarat 10 tahun (Rp 650.000 / Rp 950.000) memerlukan konfirmasi status perkawinan yang sah.",
  official_source_url: "https://www.imigrasi.go.id/id/biaya-paspor/",
  effective_date: "2024-12-18",
  verification_date: "2026-10-19",
  date_checked: "2026-10-19",
  verification_status: "confirmation_required"
};

if (!idRecords.some(r => r.applicant_category === conditionalIdRecord.applicant_category)) {
  idRecords.push(conditionalIdRecord);
}

// Save country-rules.json
fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2) + '\n', 'utf8');
console.log('Successfully updated data/country-rules.json');

// Save rule-packs.js
const rulePacksJsContent = `window.RULE_PACKS = ${JSON.stringify(rules, null, 2)};\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = { RULE_PACKS: window.RULE_PACKS };\n}\n`;
fs.writeFileSync(rulePacksJsPath, rulePacksJsContent, 'utf8');
console.log('Successfully updated data/rule-packs.js');
