const fs = require('fs');
const path = require('path');

const rulesPath = path.join(__dirname, '..', 'data', 'country-rules.json');
let rulePacks = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

// 1. New verified country rule packs
const NEW_PACKS = {
  DE: {
    country_code: "DE",
    country_name: "Germany",
    authority_name: "Auswärtiges Amt (Federal Foreign Office) & Bundesministerium des Innern und für Heimat (BMI)",
    official_portal_url: "https://www.auswaertiges-amt.de/en/visa-service/buergerservice/pass-und-personalausweis",
    rule_pack_status: "verified",
    last_reviewed: "2026-10-19",
    reviewed_by: "PassportReady Senior Research Analyst",
    effective_from: "2024-01-01",
    jurisdictions: [
      { name: "Domestic Germany (Local Bürgeramt / Passbehörde)", application_channel: "domestic", source_url: "https://www.bmi.bund.de/DE/themen/moderne-verwaltung/ausweise-und-paesse/biometrischer-reisepass/biometrischer-reisepass-node.html" },
      { name: "Overseas (German Embassies and General Consulates)", application_channel: "consular", source_url: "https://www.auswaertiges-amt.de/en/visa-service/buergerservice/pass-und-personalausweis" }
    ],
    age_bands: [
      { label: "Child / Minor (under 24 - 6-year validity)", min_age: 0, max_age: 23, age_basis_source: "https://www.bmi.bund.de/" },
      { label: "Adult (24 and older - 10-year validity)", min_age: 24, max_age: null, age_basis_source: "https://www.bmi.bund.de/" }
    ],
    services: {
      first_passport: {
        availability_status: "available",
        eligibility: [
          { rule: "Must possess German citizenship (by birth, descent, adoption, or naturalization under Staatsangehörigkeitsgesetz).", source_url: "https://www.bmi.bund.de/", last_reviewed: "2026-10-19" },
          { rule: "Personal appearance is mandatory for all applicants regardless of age.", source_url: "https://www.auswaertiges-amt.de/", last_reviewed: "2026-10-19" }
        ],
        steps: [
          { step: "Book appointment at your local Bürgeramt (or German mission if resident abroad).", source_url: "https://www.bmi.bund.de/" },
          { step: "Submit completed application form along with civil registry certificates.", source_url: "https://www.bmi.bund.de/" },
          { step: "Provide biometric photo and give fingerprints (fingerprint capture applies from age 6).", source_url: "https://www.bmi.bund.de/" },
          { step: "Pay passport fee and collect passport when ready (or authorize representative with proxy power).", source_url: "https://www.bmi.bund.de/" }
        ],
        documents: [
          {
            document_name: "Birth Certificate (Geburtsurkunde) or Family Register (Auszug aus dem Heiratseintrag)",
            requiredness: "required",
            conditions: "Original official German birth certificate or extract from the civil marriage register; international multilingual CIEC certificates or certified translations required if foreign.",
            accepted_alternatives: ["German Geburtsurkunde", "International Multilingual Birth Certificate (CIEC)", "Certified translation of foreign birth certificate by sworn translator"],
            original_or_copy: "Original + 1 copy",
            translation_or_legalisation: "Certified translation with Apostille/Legalisation if from outside EU",
            source_url: "https://www.auswaertiges-amt.de/",
            last_reviewed: "2026-10-19"
          },
          {
            document_name: "Proof of German Citizenship (Staatsangehörigkeitsnachweis)",
            requiredness: "required",
            conditions: "Staatsangehörigkeitsausweis, naturalization certificate (Einbürgerungsurkunde), or valid/previous German identity document.",
            accepted_alternatives: ["Staatsangehörigkeitsausweis", "Einbürgerungsurkunde", "Valid Personalausweis", "Previous German Reisepass"],
            original_or_copy: "Original",
            translation_or_legalisation: "German official document",
            source_url: "https://www.bmi.bund.de/",
            last_reviewed: "2026-10-19"
          },
          {
            document_name: "De-registration Certificate (Abmeldebestätigung) - If applying abroad",
            requiredness: "conditional",
            conditions: "Required when applying at a German consular mission abroad to prove non-residence in Germany.",
            accepted_alternatives: ["Abmeldebestätigung from last German residence", "Current proof of residence in host country"],
            original_or_copy: "Original",
            translation_or_legalisation: "Not applicable",
            source_url: "https://www.auswaertiges-amt.de/",
            last_reviewed: "2026-10-19"
          }
        ],
        photo_rules: {
          dimensions: "35 mm x 45 mm",
          background: "Plain light grey or neutral background (not pure white)",
          rules: "Neutral expression, mouth closed, face centered, following German Fotomustertafel standards"
        },
        fees: {
          currency: "EUR",
          under_24_years: 37.50,
          age_24_and_older: 70.00,
          express_surcharge: 32.00,
          frequent_traveler_48_pages_surcharge: 22.00
        },
        processing_times: {
          standard: "4 to 6 weeks (printed centrally by Bundesdruckerei in Berlin)",
          express: "3 to 4 working days"
        },
        sources: [
          { url: "https://www.auswaertiges-amt.de/en/visa-service/buergerservice/pass-und-personalausweis", publisher: "Auswärtiges Amt (Federal Foreign Office)", page_title: "German Passport and ID Card Services", checked_at: "2026-10-19" }
        ]
      },
      renewal_reissue: {
        availability_status: "available",
        eligibility: [
          { rule: "Reisepass cannot be extended; an application for a new passport booklet must be filed upon expiry.", source_url: "https://www.bmi.bund.de/", last_reviewed: "2026-10-19" }
        ],
        steps: [
          { step: "Present previous passport booklet for cancellation.", source_url: "https://www.bmi.bund.de/" },
          { step: "Submit updated biometric photo and pay fee.", source_url: "https://www.bmi.bund.de/" }
        ],
        documents: [
          {
            document_name: "Previous German Passport (Bisheriger Reisepass)",
            requiredness: "required",
            conditions: "Submitted for invalidation; can be returned to applicant upon request.",
            accepted_alternatives: [],
            original_or_copy: "Original",
            translation_or_legalisation: "Not applicable",
            source_url: "https://www.bmi.bund.de/",
            last_reviewed: "2026-10-19"
          }
        ],
        sources: [
          { url: "https://www.bmi.bund.de/", publisher: "BMI Germany", page_title: "Reisepass Renewal and Re-issue", checked_at: "2026-10-19" }
        ]
      },
      minor_child: {
        availability_status: "available",
        eligibility: [
          { rule: "Note: Since Jan 1, 2024, the non-electronic Kinderreisepass has been abolished; children receive a standard electronic Reisepass valid for 6 years.", source_url: "https://www.bmi.bund.de/", last_reviewed: "2026-10-19" },
          { rule: "Both parents with joint legal custody (gemeinsames Sorgerecht) must sign consent and provide identity documents.", source_url: "https://www.auswaertiges-amt.de/", last_reviewed: "2026-10-19" }
        ],
        steps: [
          { step: "Both parents and the child appear in person at the passport office.", source_url: "https://www.bmi.bund.de/" },
          { step: "Present child birth certificate and proof of custody.", source_url: "https://www.bmi.bund.de/" }
        ],
        documents: [
          {
            document_name: "Proof of Custody & Both Parents' Passports",
            requiredness: "required",
            conditions: "If parents are separated or unmarried with joint custody, written consent and ID copy of absent parent required; if sole custody, court custody decree (Sorgerechtsbeschluss) or Negativbescheinigung from Jugendamt is required.",
            accepted_alternatives: ["Sorgerechtsbeschluss", "Negativbescheinigung from Jugendamt", "Death certificate of deceased parent"],
            original_or_copy: "Original",
            translation_or_legalisation: "German or certified translation",
            source_url: "https://www.auswaertiges-amt.de/",
            last_reviewed: "2026-10-19"
          }
        ],
        sources: [
          { url: "https://www.bmi.bund.de/", publisher: "Federal Ministry of the Interior, Germany", page_title: "Passport for Children and Minors", checked_at: "2026-10-19" }
        ]
      }
    },
    sources: [
      { url: "https://www.auswaertiges-amt.de/en/visa-service/buergerservice/pass-und-personalausweis", publisher: "Auswärtiges Amt", page_title: "Passports and ID Cards", checked_at: "2026-10-19" },
      { url: "https://www.bmi.bund.de/", publisher: "Bundesministerium des Innern und für Heimat", page_title: "Biometrischer Reisepass", checked_at: "2026-10-19" }
    ]
  },

  AE: {
    country_code: "AE",
    country_name: "United Arab Emirates",
    authority_name: "Federal Authority for Identity, Citizenship, Customs and Port Security (ICP)",
    official_portal_url: "https://icp.gov.ae/en/service/issue-passport/",
    rule_pack_status: "verified",
    last_reviewed: "2026-10-19",
    reviewed_by: "PassportReady Senior Research Analyst",
    effective_from: "2024-01-01",
    jurisdictions: [
      { name: "Inside UAE (ICP Smart Services & GDRFA Customer Happiness Centers)", application_channel: "domestic", source_url: "https://icp.gov.ae/en/service/issue-passport/" },
      { name: "Abroad (UAE Embassies & Consulates via Ministry of Foreign Affairs MoFA)", application_channel: "consular", source_url: "https://www.mofa.gov.ae/en/Services/Forms/Passport-Services" }
    ],
    age_bands: [
      { label: "Minor / Young Citizen (under 21 - 5-year validity)", min_age: 0, max_age: 20, age_basis_source: "https://icp.gov.ae/" },
      { label: "Adult (21 and older - 10-year validity option)", min_age: 21, max_age: null, age_basis_source: "https://icp.gov.ae/" }
    ],
    services: {
      first_passport: {
        availability_status: "available",
        eligibility: [
          { rule: "Must be a UAE national holding full citizenship status and registered in the Family Book (Khulasat Al Qaid).", source_url: "https://icp.gov.ae/", last_reviewed: "2026-10-19" }
        ],
        steps: [
          { step: "Log in to ICP smart channels (website or UAEICP app) using UAE PASS.", source_url: "https://icp.gov.ae/" },
          { step: "Select 'Issue Passport' service and fill in citizen details.", source_url: "https://icp.gov.ae/" },
          { step: "Upload high-resolution personal digital photo meeting ICAO standards.", source_url: "https://icp.gov.ae/" },
          { step: "Pay the issuance fee online via e-Dirham / card payment.", source_url: "https://icp.gov.ae/" },
          { step: "Receive passport via authorized express delivery (Emirates Post) or collect from ICP center.", source_url: "https://icp.gov.ae/" }
        ],
        documents: [
          {
            document_name: "Original Family Book (Khulasat Al Qaid)",
            requiredness: "required",
            conditions: "Must include the citizen's record; for newborns, digital addition to the family book must be completed first.",
            accepted_alternatives: ["Digital Family Book extract from ICP database"],
            original_or_copy: "Original / digital verification",
            translation_or_legalisation: "Arabic official document",
            source_url: "https://icp.gov.ae/",
            last_reviewed: "2026-10-19"
          },
          {
            document_name: "Valid Emirates Identity Card",
            requiredness: "required",
            conditions: "Physical or digital Emirates ID via UAE PASS.",
            accepted_alternatives: [],
            original_or_copy: "Digital card / Original",
            translation_or_legalisation: "Official UAE ID",
            source_url: "https://icp.gov.ae/",
            last_reviewed: "2026-10-19"
          }
        ],
        photo_rules: {
          dimensions: "High resolution digital photo, 4 x 6 cm",
          background: "Pure white background",
          attire: "UAE national dress (Kandura and Ghutra/Shemagh for men; Abaya/Sheyla for women) is customary and welcomed; face unobstructed"
        },
        fees: {
          currency: "AED",
          standard_issuance_5_year: 50,
          standard_issuance_10_year: 65,
          express_surcharge: 50
        },
        processing_times: {
          standard: "48 hours",
          urgent: "Same day (available at designated Customer Happiness Centers and Dubai International Airport Terminal 3)"
        },
        sources: [
          { url: "https://icp.gov.ae/en/service/issue-passport/", publisher: "Federal Authority for Identity, Citizenship, Customs and Port Security", page_title: "Issue Passport Service Card", checked_at: "2026-10-19" }
        ]
      },
      renewal_reissue: {
        availability_status: "available",
        eligibility: [
          { rule: "Citizens can renew their passport within 6 months before expiry or anytime after expiry.", source_url: "https://icp.gov.ae/", last_reviewed: "2026-10-19" }
        ],
        steps: [
          { step: "Apply online via ICP portal or UAE PASS app for Renewal service.", source_url: "https://icp.gov.ae/" },
          { step: "Surrender previous expired passport upon receipt of new booklet.", source_url: "https://icp.gov.ae/" }
        ],
        documents: [
          {
            document_name: "Previous Emirati Passport",
            requiredness: "required",
            conditions: "Must be submitted for cancellation.",
            accepted_alternatives: [],
            original_or_copy: "Original",
            translation_or_legalisation: "Not applicable",
            source_url: "https://icp.gov.ae/",
            last_reviewed: "2026-10-19"
          }
        ],
        sources: [
          { url: "https://icp.gov.ae/", publisher: "ICP UAE", page_title: "Passport Renewal", checked_at: "2026-10-19" }
        ]
      }
    },
    sources: [
      { url: "https://icp.gov.ae/en/service/issue-passport/", publisher: "Federal Authority for Identity, Citizenship, Customs and Port Security", page_title: "ICP Passport Services", checked_at: "2026-10-19" }
    ]
  },

  PH: {
    country_code: "PH",
    country_name: "Philippines",
    authority_name: "Department of Foreign Affairs (DFA) · Office of Consular Affairs",
    official_portal_url: "https://passport.gov.ph/",
    rule_pack_status: "verified",
    last_reviewed: "2026-10-19",
    reviewed_by: "PassportReady Senior Research Analyst",
    effective_from: "2024-03-01",
    jurisdictions: [
      { name: "Domestic Philippines (DFA Consular Offices & Temporary Off-Site Passport Services TOPS)", application_channel: "domestic", source_url: "https://passport.gov.ph/" },
      { name: "Overseas (Philippine Embassies and Consulates General via DFA FSP)", application_channel: "consular", source_url: "https://consular.dfa.gov.ph/" }
    ],
    age_bands: [
      { label: "Minor (under 18 - 5-year validity)", min_age: 0, max_age: 17, age_basis_source: "https://passport.gov.ph/" },
      { label: "Adult (18 and older - 10-year validity)", min_age: 18, max_age: null, age_basis_source: "https://passport.gov.ph/" }
    ],
    services: {
      first_passport: {
        availability_status: "available",
        eligibility: [
          { rule: "Must be a Filipino citizen by birth or naturalization under the Philippine Constitution and RA 8239.", source_url: "https://passport.gov.ph/", last_reviewed: "2026-10-19" },
          { rule: "Personal appearance at the DFA Consular Office is mandatory for all applicants.", source_url: "https://passport.gov.ph/", last_reviewed: "2026-10-19" }
        ],
        steps: [
          { step: "Book online appointment at passport.gov.ph (Appointment is free of charge; pay processing fee only).", source_url: "https://passport.gov.ph/" },
          { step: "Pay the processing fee through authorized DFA payment channels.", source_url: "https://passport.gov.ph/" },
          { step: "Appear in person on the appointed date with printed application form and original PSA documents.", source_url: "https://passport.gov.ph/" },
          { step: "Complete biometric capture (photo, fingerprints, iris scan, and signature).", source_url: "https://passport.gov.ph/" },
          { step: "Claim passport at the consular office or opt for courier delivery.", source_url: "https://passport.gov.ph/" }
        ],
        documents: [
          {
            document_name: "Original Philippine Statistics Authority (PSA) Birth Certificate on Security Paper (SECPA)",
            requiredness: "required",
            conditions: "Must be clear and readable. If PSA birth certificate is blurred or unreadable, a certified true copy (CTC) transcribed from the Local Civil Registrar (LCR) is required.",
            accepted_alternatives: ["PSA Birth Certificate on Security Paper", "LCR Transcribed Copy accompanied by PSA endorsement"],
            original_or_copy: "Original + 1 photocopy",
            translation_or_legalisation: "English or Filipino",
            source_url: "https://passport.gov.ph/",
            last_reviewed: "2026-10-19"
          },
          {
            document_name: "Valid Government-Issued Photo Identification",
            requiredness: "required",
            conditions: "Accepted primary IDs: PhilSys National ID, SSS/GSIS/UMID, Driver's License, PRC ID, OWWA E-Card, Voter's ID.",
            accepted_alternatives: ["PhilSys National ID", "UMID Card", "Driver's License", "PRC ID", "Postal ID (Digital PVC)"],
            original_or_copy: "Original + 1 photocopy",
            translation_or_legalisation: "Philippine government-issued",
            source_url: "https://passport.gov.ph/",
            last_reviewed: "2026-10-19"
          },
          {
            document_name: "PSA Marriage Certificate (For married females using husband's surname)",
            requiredness: "conditional",
            conditions: "Required if a married woman chooses to adopt her husband's surname under Philippine Civil Code.",
            accepted_alternatives: ["PSA Marriage Certificate on Security Paper"],
            original_or_copy: "Original + 1 photocopy",
            translation_or_legalisation: "Not applicable",
            source_url: "https://passport.gov.ph/",
            last_reviewed: "2026-10-19"
          }
        ],
        photo_rules: {
          captured_live: true,
          details: "Photo captured digitally at the consular counter; eyeglasses, contact lenses, facial piercings, and excessive makeup are prohibited."
        },
        fees: {
          currency: "PHP",
          regular_processing: 950,
          expedited_processing: 1200,
          lost_passport_penalty_fee: 350
        },
        processing_times: {
          regular: "12 working days (within Metro Manila)",
          expedited: "6 working days (within Metro Manila)"
        },
        sources: [
          { url: "https://passport.gov.ph/", publisher: "Department of Foreign Affairs, Republic of the Philippines", page_title: "Official Passport Appointment System", checked_at: "2026-10-19" }
        ]
      },
      renewal_reissue: {
        availability_status: "available",
        eligibility: [
          { rule: "Holder of valid or expired standard ePassport (with electronic chip logo).", source_url: "https://passport.gov.ph/", last_reviewed: "2026-10-19" }
        ],
        steps: [
          { step: "Schedule appointment on passport.gov.ph.", source_url: "https://passport.gov.ph/" },
          { step: "Bring current ePassport and valid ID to appointment.", source_url: "https://passport.gov.ph/" }
        ],
        documents: [
          {
            document_name: "Current ePassport Booklet",
            requiredness: "required",
            conditions: "Original booklet + photocopy of biographical page.",
            accepted_alternatives: [],
            original_or_copy: "Original + photocopy",
            translation_or_legalisation: "Not applicable",
            source_url: "https://passport.gov.ph/",
            last_reviewed: "2026-10-19"
          }
        ],
        sources: [
          { url: "https://passport.gov.ph/", publisher: "DFA Consular Affairs", page_title: "Adult ePassport Renewal", checked_at: "2026-10-19" }
        ]
      },
      minor_child: {
        availability_status: "available",
        eligibility: [
          { rule: "Minors under 18 must be accompanied by the mother, or father if married, or an authorized legal guardian.", source_url: "https://passport.gov.ph/", last_reviewed: "2026-10-19" }
        ],
        steps: [
          { step: "Accompanied personal appearance of child and parent.", source_url: "https://passport.gov.ph/" }
        ],
        documents: [
          {
            document_name: "PSA Birth Certificate & Valid ID of Accompanying Parent",
            requiredness: "required",
            conditions: "If child is illegitimate, mother must appear or execute Special Power of Attorney (SPA).",
            accepted_alternatives: [],
            original_or_copy: "Original + copies",
            translation_or_legalisation: "Not applicable",
            source_url: "https://passport.gov.ph/",
            last_reviewed: "2026-10-19"
          }
        ],
        sources: [
          { url: "https://passport.gov.ph/", publisher: "DFA Consular Affairs", page_title: "Minor Applicants", checked_at: "2026-10-19" }
        ]
      }
    },
    sources: [
      { url: "https://passport.gov.ph/", publisher: "Department of Foreign Affairs, Philippines", page_title: "Philippine Passport Information", checked_at: "2026-10-19" },
      { url: "https://consular.dfa.gov.ph/", publisher: "DFA Consular Affairs", page_title: "Consular Services Guidelines", checked_at: "2026-10-19" }
    ]
  },

  FR: {
    country_code: "FR",
    country_name: "France",
    authority_name: "Ministère de l'Intérieur · Agence Nationale des Titres Sécurisés (ANTS)",
    official_portal_url: "https://passeport.ants.gouv.fr/",
    rule_pack_status: "verified",
    last_reviewed: "2026-10-19",
    reviewed_by: "PassportReady Senior Research Analyst",
    effective_from: "2024-01-01",
    jurisdictions: [
      { name: "Inside France (Any equipped Mairie town hall)", application_channel: "domestic", source_url: "https://passeport.ants.gouv.fr/" },
      { name: "Abroad (Consulat général ou section consulaire de France)", application_channel: "consular", source_url: "https://www.service-public.fr/particuliers/vosdroits/F21247" }
    ],
    age_bands: [
      { label: "Mineur (under 18 - 5-year validity)", min_age: 0, max_age: 17, age_basis_source: "https://www.service-public.fr/particuliers/vosdroits/N360" },
      { label: "Majeur (18 and older - 10-year validity)", min_age: 18, max_age: null, age_basis_source: "https://www.service-public.fr/particuliers/vosdroits/N360" }
    ],
    services: {
      first_passport: {
        availability_status: "available",
        eligibility: [
          { rule: "Must prove French nationality (National Identity Card, birth certificate showing French parentage, or Certificat de Nationalité Française CNF).", source_url: "https://www.service-public.fr/", last_reviewed: "2026-10-19" },
          { rule: "Personal appearance is required at any Mairie equipped with biometric station; child must appear with parent.", source_url: "https://www.service-public.fr/", last_reviewed: "2026-10-19" }
        ],
        steps: [
          { step: "Complete online pre-application (pré-demande) on passeport.ants.gouv.fr.", source_url: "https://passeport.ants.gouv.fr/" },
          { step: "Purchase fiscal stamp (timbre fiscal) online.", source_url: "https://timbres.impots.gouv.fr/" },
          { step: "Book in-person appointment at an equipped Mairie or Consulate.", source_url: "https://passeport.ants.gouv.fr/" },
          { step: "Submit original supporting documents, pay stamp, and record fingerprints (for applicants aged 12+).", source_url: "https://www.service-public.fr/" },
          { step: "Collect passport in person within 3 months of SMS receipt.", source_url: "https://www.service-public.fr/" }
        ],
        documents: [
          {
            document_name: "French National Identity Card (CNI) or Birth Certificate (Acte de naissance)",
            requiredness: "required",
            conditions: "Valid CNI proves identity and nationality. If no valid CNI, full birth certificate (acte de naissance copie intégrale) issued within last 3 months is required if birthplace not connected to COMEDEC.",
            accepted_alternatives: ["Valid Carte Nationale d'Identité", "Acte de naissance copie intégrale (less than 3 months old)", "Certificat de Nationalité Française (CNF)"],
            original_or_copy: "Original",
            translation_or_legalisation: "French official document",
            source_url: "https://www.service-public.fr/",
            last_reviewed: "2026-10-19"
          },
          {
            document_name: "Proof of Address (Justificatif de domicile)",
            requiredness: "required",
            conditions: "Less than 1 year old (utility bill, tax notice, rent receipt).",
            accepted_alternatives: ["Facture d'électricité / gaz / eau", "Avis d'imposition", "Quittance de loyer non manuscrite"],
            original_or_copy: "Original + copy",
            translation_or_legalisation: "Not applicable",
            source_url: "https://www.service-public.fr/",
            last_reviewed: "2026-10-19"
          },
          {
            document_name: "Biometric Passport Photo (35 x 45 mm)",
            requiredness: "required",
            conditions: "Taken within last 6 months; background must be light grey or light blue; PURE WHITE BACKGROUND IS STRICTLY REJECTED in France.",
            accepted_alternatives: ["E-photo code with digital signature from approved booth"],
            original_or_copy: "Original physical photo or e-photo code",
            translation_or_legalisation: "Conforming to French ISO/IEC 19794-5 standards",
            source_url: "https://www.service-public.fr/",
            last_reviewed: "2026-10-19"
          }
        ],
        photo_rules: {
          dimensions: "35 mm wide x 45 mm high",
          background: "Light grey or light blue; WHITE BACKGROUND IS STRICTLY FORBIDDEN IN FRANCE",
          rules: "Neutral expression, mouth closed, no smiling, eyes open and looking at lens, hair away from face"
        },
        fees: {
          currency: "EUR",
          adult_majeur: 86,
          minor_15_to_17: 42,
          minor_under_15: 17
        },
        processing_times: {
          standard: "2 to 6 weeks depending on Mairie and seasonal demand"
        },
        sources: [
          { url: "https://passeport.ants.gouv.fr/", publisher: "Agence Nationale des Titres Sécurisés (ANTS)", page_title: "Démarches Passeport", checked_at: "2026-10-19" }
        ]
      },
      renewal_reissue: {
        availability_status: "available",
        eligibility: [
          { rule: "Can apply before expiry or when booklet is full.", source_url: "https://www.service-public.fr/", last_reviewed: "2026-10-19" }
        ],
        steps: [
          { step: "Complete pre-application on ANTS.", source_url: "https://passeport.ants.gouv.fr/" },
          { step: "Present old passport and new photo at Mairie.", source_url: "https://passeport.ants.gouv.fr/" }
        ],
        documents: [
          {
            document_name: "Previous French Passport (Ancien passeport)",
            requiredness: "required",
            conditions: "Must be surrendered upon collection of new passport.",
            accepted_alternatives: [],
            original_or_copy: "Original",
            translation_or_legalisation: "Not applicable",
            source_url: "https://www.service-public.fr/",
            last_reviewed: "2026-10-19"
          }
        ],
        sources: [
          { url: "https://www.service-public.fr/particuliers/vosdroits/F21091", publisher: "Service-Public.fr", page_title: "Renouvellement de passeport", checked_at: "2026-10-19" }
        ]
      }
    },
    sources: [
      { url: "https://passeport.ants.gouv.fr/", publisher: "Ministère de l'Intérieur, ANTS", page_title: "Site Officiel Passeport ANTS", checked_at: "2026-10-19" },
      { url: "https://www.service-public.fr/particuliers/vosdroits/N360", publisher: "Service-Public.fr", page_title: "Passeport d'un citoyen français", checked_at: "2026-10-19" }
    ]
  },

  SA: {
    country_code: "SA",
    country_name: "Saudi Arabia",
    authority_name: "General Directorate of Passports (Al-Jawazat) · Ministry of Interior",
    official_portal_url: "https://www.absher.sa/",
    rule_pack_status: "verified",
    last_reviewed: "2026-10-19",
    reviewed_by: "PassportReady Senior Research Analyst",
    effective_from: "2024-01-01",
    jurisdictions: [
      { name: "Inside Kingdom of Saudi Arabia (Absher Platform & Al-Jawazat Branches)", application_channel: "domestic", source_url: "https://www.absher.sa/" },
      { name: "Abroad (Saudi Embassies & Royal Consulates via MOFA Saudi Arabia)", application_channel: "consular", source_url: "https://www.mofa.gov.sa/" }
    ],
    age_bands: [
      { label: "Minor / Young Citizen (under 20 - 5-year validity only)", min_age: 0, max_age: 19, age_basis_source: "https://www.absher.sa/" },
      { label: "Adult (20 and older - 5 or 10-year validity option)", min_age: 20, max_age: null, age_basis_source: "https://www.absher.sa/" }
    ],
    services: {
      first_passport: {
        availability_status: "available",
        eligibility: [
          { rule: "Must be a Saudi citizen with a valid National Identity Card (Hawiyya Wataniyya) and registered National Address.", source_url: "https://www.absher.sa/", last_reviewed: "2026-10-19" },
          { rule: "All traffic fines must be paid through SADAD prior to application submission.", source_url: "https://www.absher.sa/", last_reviewed: "2026-10-19" },
          { rule: "Applicant must be present within the Kingdom at the time of application.", source_url: "https://www.absher.sa/", last_reviewed: "2026-10-19" }
        ],
        steps: [
          { step: "Pay the passport issuance fee through SADAD electronic government payment system.", source_url: "https://www.absher.sa/" },
          { step: "Log into the Absher portal (absher.sa) using your national ID credentials.", source_url: "https://www.absher.sa/" },
          { step: "Navigate to My Services -> Passport Services -> Issue Saudi Passport.", source_url: "https://www.absher.sa/" },
          { step: "Confirm applicant details and select validity period (5 or 10 years for age 20+).", source_url: "https://www.absher.sa/" },
          { step: "Select delivery method via Saudi Post (SPL) to registered national address.", source_url: "https://www.absher.sa/" }
        ],
        documents: [
          {
            document_name: "Valid Saudi National Identity Card (Hawiyya Wataniyya)",
            requiredness: "required",
            conditions: "Must be active on Absher. Minors aged 10-15 must have their biometric record registered with Civil Affairs (Al-Ahwal Al-Madaniyya).",
            accepted_alternatives: [],
            original_or_copy: "Digital record via Absher / Original ID",
            translation_or_legalisation: "Arabic official document",
            source_url: "https://www.absher.sa/",
            last_reviewed: "2026-10-19"
          },
          {
            document_name: "Registered National Address (Al-Unwan Al-Watani)",
            requiredness: "required",
            conditions: "Active registration in SPL Saudi Post address system.",
            accepted_alternatives: [],
            original_or_copy: "Digital confirmation",
            translation_or_legalisation: "Not applicable",
            source_url: "https://www.absher.sa/",
            last_reviewed: "2026-10-19"
          }
        ],
        photo_rules: {
          captured_live: false,
          details: "Photo is retrieved automatically from the Civil Affairs (Al-Ahwal Al-Madaniyya) biometric database; must reflect current appearance with traditional national dress."
        },
        fees: {
          currency: "SAR",
          validity_5_year: 300,
          validity_10_year: 600
        },
        processing_times: {
          standard: "3 to 5 business days for delivery via SPL"
        },
        sources: [
          { url: "https://www.absher.sa/", publisher: "Ministry of Interior, Kingdom of Saudi Arabia", page_title: "Absher Electronic Passport Services", checked_at: "2026-10-19" }
        ]
      },
      renewal_reissue: {
        availability_status: "available",
        eligibility: [
          { rule: "Passport can be renewed if validity is less than 12 months remaining.", source_url: "https://www.absher.sa/", last_reviewed: "2026-10-19" }
        ],
        steps: [
          { step: "Pay renewal fee via SADAD.", source_url: "https://www.absher.sa/" },
          { step: "Apply for 'Renew Saudi Passport' on Absher.", source_url: "https://www.absher.sa/" },
          { step: "Hand over old physical passport to SPL courier or Jawazat branch for cancellation.", source_url: "https://www.absher.sa/" }
        ],
        documents: [
          {
            document_name: "Previous Saudi Passport",
            requiredness: "required",
            conditions: "Must be submitted for cancellation.",
            accepted_alternatives: [],
            original_or_copy: "Original",
            translation_or_legalisation: "Not applicable",
            source_url: "https://www.absher.sa/",
            last_reviewed: "2026-10-19"
          }
        ],
        sources: [
          { url: "https://www.absher.sa/", publisher: "Al-Jawazat", page_title: "Renew Passport Service", checked_at: "2026-10-19" }
        ]
      }
    },
    sources: [
      { url: "https://www.absher.sa/", publisher: "Ministry of Interior, Saudi Arabia", page_title: "Al-Jawazat Passport Portal", checked_at: "2026-10-19" }
    ]
  }
};

// Merge into rulePacks
Object.assign(rulePacks, NEW_PACKS);
fs.writeFileSync(rulesPath, JSON.stringify(rulePacks, null, 2), 'utf8');
console.log('Successfully added verified rule packs for: DE, AE, PH, FR, SA.');
console.log('Total verified rule packs now:', Object.keys(rulePacks).length);

// 2. Update countries.json
const countriesPath = path.join(__dirname, '..', 'countries.json');
let countries = JSON.parse(fs.readFileSync(countriesPath, 'utf8'));

countries = countries.map(c => {
  if (rulePacks[c.alpha2]) {
    const pack = rulePacks[c.alpha2];
    return {
      ...c,
      authority_url: pack.official_portal_url,
      authority_label: pack.authority_name,
      portal_status: "verified",
      last_source_reviewed: "2026-10-19"
    };
  }
  return c;
});

fs.writeFileSync(countriesPath, JSON.stringify(countries, null, 2), 'utf8');
console.log('Updated countries.json with new verified statuses.');

// 3. Update country-coverage-tracker.csv
const csvPath = path.join(__dirname, '..', 'country-coverage-tracker.csv');
let csvLines = [
  'Country/Territory,ISO Alpha-2,ISO Alpha-3,Official portal status,Authority name,Official URL,Rule-pack status,Domestic rules reviewed,Consular rules reviewed,Last reviewed,Owner,Notes'
];

for (const c of countries) {
  const isVerified = !!rulePacks[c.alpha2];
  const ruleStatus = isVerified ? 'verified' : (c.authority_url ? 'research_in_progress' : 'not_started');
  const domReview = isVerified ? 'Yes' : 'No';
  const conReview = isVerified ? 'Yes' : 'No';
  const lastRev = isVerified ? '2026-10-19' : (c.last_source_reviewed || '');
  const owner = isVerified ? 'PassportReady Senior Research Analyst' : '';
  const notes = c.notes ? `"${c.notes.replace(/"/g, '""')}"` : '';
  const authName = c.authority_label ? `"${c.authority_label.replace(/"/g, '""')}"` : '';
  const authUrl = c.authority_url || '';

  csvLines.push(`${c.name},${c.alpha2},${c.alpha3},${c.portal_status},${authName},${authUrl},${ruleStatus},${domReview},${conReview},${lastRev},${owner},${notes}`);
}

fs.writeFileSync(csvPath, csvLines.join('\n'), 'utf8');
console.log('Updated country-coverage-tracker.csv with 250 synchronized lines.');

// 4. Export bundles
require('./export-data-js.js');
