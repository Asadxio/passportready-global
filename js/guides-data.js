/**
 * PassportReady Comprehensive Educational Guides
 * Official-source grounded passport guidance articles with jurisdiction-specific accuracy.
 */

const PASSPORT_GUIDES = [
  {
    id: "first-passport",
    icon: "✦",
    title: "First-Time Passport Application Guide",
    subtitle: "Jurisdiction-specific procedures and foundational documentation for first-time applicants.",
    badge: "Core Guide",
    readTime: "6 min read",
    summary: "Applying for your first passport requires establishing identity, citizenship, and residential jurisdiction through official government authorities. Review how procedures and in-person requirements differ across major countries.",
    sections: [
      {
        heading: "1. The Three Foundational Evidentiary Requirements",
        content: "Regardless of jurisdiction, passport-issuing authorities require substantiated evidence in three distinct categories: (1) Proof of Citizenship or Nationality (demonstrating legal status through civil birth registration, naturalization certificates, or descent); (2) Proof of Identity (government photo identification confirming physical identity); and (3) Proof of Address (establishing territorial jurisdiction for consular, administrative, or postal processing)."
      },
      {
        heading: "2. Personal Appearance and Biometrics by Jurisdiction",
        content: "First-time passport issuance almost universally requires personal appearance before an authorized official. In the United States, applicants must appear at a designated Passport Acceptance Facility (such as a U.S. Post Office or Clerk of Court) with Form DS-11 under 22 CFR Part 51. In India, applicants attend an appointment at a Passport Seva Kendra (PSK/POPSK) for live biometric capture (fingerprints, iris, digital photo) under the Passports Act, 1967. In the United Kingdom, first-time adult applicants may be invited by HM Passport Office (HMPO) to complete a 30-minute identity interview. In Germany, applications must be lodged in person at the local Bürgeramt or consular mission under the Passgesetz. In the Philippines, personal appearance at a DFA Consular Office is mandated by Republic Act No. 8239."
      },
      {
        heading: "3. Background and Police Inquiries",
        content: "Security background verification varies substantially by nation. In India, first-time applications typically initiate a formal police verification report (PVR) where local police confirm residential address and absence of criminal proceedings. In the United States, the Department of State cross-references federal criminal databases and child support arrears without in-person police home visits. Always ensure address declarations on your official forms match your actual physical residence records."
      }
    ]
  },
  {
    id: "renewal-reissue",
    icon: "↻",
    title: "Passport Renewal & Reissue Guide",
    subtitle: "Navigating renewal timeframes, simplified procedures, and existing valid visas.",
    badge: "Popular",
    readTime: "5 min read",
    summary: "Understand when to apply for a passport renewal, how mail-in or online simplified routes operate in qualifying countries, and how authorities treat valid visas inside expired booklets.",
    sections: [
      {
        heading: "1. Planning Your Renewal Timeline",
        content: "Passport authorities typically permit renewal up to 1 year prior to the expiration date. Because certain destination countries require several months of validity for entry, initiating renewal 6 to 9 months before expiration is widely recommended. In the US, Form DS-82 allows mail-in renewal; in the UK, online renewal through GOV.UK is standard; and in India, online re-issue via Passport Seva can be scheduled up to 1 year before or up to 3 years after expiry."
      },
      {
        heading: "2. Simplified Mail-In & Streamlined Eligibility",
        content: "Many jurisdictions provide streamlined renewal procedures for adults holding undamaged passports. For example, under US Department of State rules, applicants qualify for Form DS-82 mail renewal if their current passport was issued at age 16 or older within the last 15 years. Canada provides simplified renewal without a guarantor for eligible adult passport holders. Where personal details have changed, or if the booklet is damaged, standard in-person procedures may be reinstated."
      },
      {
        heading: "3. Status of Existing Visas in Cancelled Passports",
        content: "When a passport is renewed, the issuing authority cancels the physical booklet (typically by clipping the corners or stamping CANCELLED). In many jurisdictions (including the United States for valid non-immigrant visas, and Schengen countries), unexpired visas inside a cancelled passport remain legally valid, provided the traveler presents both the cancelled passport containing the intact visa and the new valid passport from the same nationality."
      },
      {
        heading: "4. Extended Expiry Intervals (Over 3 Years)",
        content: "If a passport has been expired for an extended period (typically exceeding 3 years in India or 5 years beyond the 15-year window in the US), authorities treat the identity record as dormant. In such circumstances, fresh primary citizenship evidence, in-person interviews, or updated police verification may be required."
      }
    ]
  },
  {
    id: "lost-stolen-damaged",
    icon: "⚠",
    title: "Lost, Stolen or Damaged Passport Protocol",
    subtitle: "Official reporting procedures, loss declarations, and emergency travel documents.",
    badge: "Critical",
    readTime: "7 min read",
    summary: "Step-by-step actions required when a passport is lost or stolen, understanding international SLTD reporting, and replacing damaged travel documents.",
    sections: [
      {
        heading: "1. Official Police and Loss Reporting",
        content: "When a travel document is lost or stolen, reporting the incident to local law enforcement is standard. In India, Pakistan, and Bangladesh, an official Police FIR (First Information Report) or Police Missing Certificate is required before a replacement can be processed. In the United States, citizens must report the loss immediately using Form DS-64 (Statement Regarding a Lost or Stolen U.S. Passport) online or with their replacement application; a local police report is strongly advised if stolen."
      },
      {
        heading: "2. Invalidation and Interpol SLTD Database Entry",
        content: "Once a passport is officially reported lost or stolen to the issuing authority, its unique serial number is permanently invalidated and entered into Interpol's Stolen and Lost Travel Documents (SLTD) database. If you subsequently recover a reported passport, you must NEVER attempt to travel with it; border control systems will flag the document as invalid, resulting in potential detention and travel disruption."
      },
      {
        heading: "3. Lost or Stolen Abroad: Emergency Travel Documents",
        content: "If you lose your passport while traveling overseas, contact your home country's nearest embassy or consulate. For direct, urgent return travel, consular sections can issue an Emergency Travel Certificate (ETC) or a temporary emergency passport with limited validity (typically valid only for the journey home)."
      },
      {
        heading: "4. Defining Passport Damage vs. Normal Wear",
        content: "Passport authorities distinguish between routine wear and tear (minor curling of cover edges) and substantial damage. Damage that impairs the biographical page, tears the laminate, detaches pages, water-damages text, or compromises the electronic RFID chip renders the passport mutilated. A damaged booklet must be surrendered to the passport office during replacement."
      }
    ]
  },
  {
    id: "name-correction",
    icon: "✎",
    title: "Name, Spelling & Personal Detail Correction Guide",
    subtitle: "Understanding jurisdiction-specific legal requirements for name changes and corrections.",
    badge: "Essential",
    readTime: "6 min read",
    summary: "Review how name change requirements differ internationally: from Official Gazette publication in India to court orders in the US, deed polls in the UK, and civil registry declarations in Europe.",
    sections: [
      {
        heading: "1. Formatting vs. Legally Significant Name Discrepancies",
        content: "It is critical to distinguish formatting variations from legal discrepancies. Formatting differences—such as hyphenation or middle names omitted on secondary cards—can often be resolved by confirming your primary civil birth entry. Conversely, differing family names, altered given names, or inverted details require formal legal evidence matching the specific laws of your issuing country."
      },
      {
        heading: "2. Country-Specific Legal Name Change Procedures",
        content: "Name change procedures are governed strictly by national legislation: (1) In India, under MEA Passports Manual rules, a major name change requires execution of a deed poll/affidavit, publication in the Official Gazette of India, and announcements in two daily newspapers. (2) In the United States, under 22 CFR § 51.25, legal name changes require a certified court order or government marriage certificate. (3) In the United Kingdom, HMPO requires an enrolled or unenrolled deed poll accompanied by evidence that the new name is used for all official purposes. (4) In Germany, name changes must be formally registered and certified by the Standesamt under the German Civil Code (BGB). (5) In the Philippines, name changes require an annotated PSA civil registry document or court order pursuant to Republic Act No. 9048/10172."
      },
      {
        heading: "3. Name Changes Following Marriage or Divorce",
        content: "Many modern passport authorities provide simplified procedures for individuals changing their surname post-marriage. In India, per the Passport Seva document advisor, a surname change after marriage needs the marriage certificate or a Joint Photo Declaration signed by both spouses (Annexure J). In the US, the UK, Canada, and Australia, an original certified Marriage Certificate issued by the competent civil registrar is accepted without requiring a court decree or Gazette publication. In divorce cases, an official divorce decree or certified court record specifying resumption of a prior surname is required."
      }
    ]
  },
  {
    id: "child-minor-passports",
    icon: "♥",
    title: "Child & Minor Passport Safeguards Guide",
    subtitle: "Parental consent frameworks, legal guardianship documentation, and child protection rules.",
    badge: "Safeguards",
    readTime: "5 min read",
    summary: "International legal frameworks and domestic statutes enforce strict parental consent requirements to protect minors against international parental child abduction.",
    sections: [
      {
        heading: "1. Dual-Parent and Guardian Consent Frameworks by Jurisdiction",
        content: "To safeguard children under international conventions (such as the 1980 Hague Convention on the Civil Aspects of International Child Abduction), passport agencies enforce specific consent rules: (1) In the United States, under 22 CFR § 51.28, both parents or legal guardians must appear in person with the child under 16, or the non-applying parent must provide a notarized Form DS-3053 (Statement of Consent). (2) In India, under MEA Passports Rules, minors under 18 require Annexure D signed by both parents, or Annexure C for single-parent applicants under defined legal grounds. (3) In the United Kingdom, anyone with parental responsibility under the Children Act 1989 must provide written consent. (4) In Germany, both parents with joint custody (gemeinsames Sorgerecht) must sign the application at the Bürgeramt or consulate. (5) In the Philippines, the mother's presence or written Special Power of Attorney (SPA) is required for illegitimate minors under the Philippine Family Code."
      },
      {
        heading: "2. Sole Custody and Judicial Documentation",
        content: "If an applicant has sole legal custody of a minor, informal or private agreements are rarely accepted. Passport authorities mandate official judicial records: a certified court order awarding sole legal custody, a certified death certificate of the deceased parent, or a judicial adoption decree naming the sole parent."
      },
      {
        heading: "3. Reduced Validity Periods for Minors",
        content: "Because children's physical facial characteristics change rapidly during growth, minor passports are issued with shorter statutory validity—typically 5 years (for children under 16 in the US/UK, or under 18 in Australia/Philippines/India, unless the minor is aged 15-18 in India and opts for full adult validity with adult fees). Biometric fingerprint capture is typically exempt for infants and children under 5 or 6 years of age."
      }
    ]
  },
  {
    id: "six-month-validity-rule",
    icon: "✈",
    title: "International Passport Validity Rules Explained",
    subtitle: "Understanding destination-specific entry criteria: 6-month, 3-month, and duration-of-stay rules.",
    badge: "Travel Advisory",
    readTime: "4 min read",
    summary: "Passport validity requirements for international travel are established by the destination government, not your passport issuer. Learn how requirements differ across global destinations.",
    sections: [
      {
        heading: "1. Validity Rules are Established by Destination Countries",
        content: "A passport that is legally valid in your home country is not automatically valid for entry into foreign nations. Each sovereign state establishes its own entry conditions based on bilateral treaties, immigration laws, and visa policies. Airlines verify these requirements prior to boarding using databases such as IATA Timatic."
      },
      {
        heading: "2. Overview of Common Validity Standards",
        content: "Entry validity rules generally fall into three primary categories: (1) Six-Month Rule: Destinations such as Indonesia, Thailand, Malaysia, the UAE, and Egypt require visitors' passports to have at least 6 months validity remaining from either arrival or departure date. (2) Three-Month Rule (European Schengen Area): Under Article 6 of the Schengen Borders Code (Regulation EU 2016/399), non-EU nationals must hold a passport valid for at least 3 months after their planned date of departure from the Schengen area, issued within the preceding 10 years. (3) Duration of Stay Only: Certain countries (such as the United States for citizens of countries belonging to the 'Six-Month Club', and the United Kingdom for many visa-exempt visitors) permit entry provided the passport remains valid for the intended duration of stay."
      },
      {
        heading: "3. Verification Before Departure",
        content: "Never rely on a single rule of thumb. Prior to traveling, verify the exact entry requirements for your specific nationality and destination through the destination government's official embassy or immigration authority, or through an authorized airline IATA Timatic check."
      }
    ]
  },
  {
    id: "photo-specifications",
    icon: "📷",
    title: "ICAO 9303 Photo Specifications & Country Variations",
    subtitle: "Understanding international biometric standards and specific country background requirements.",
    badge: "Photo Guide",
    readTime: "4 min read",
    summary: "Detailed standards for dimensions, lighting, background colour, and facial expressions conforming to ICAO Doc 9303 and national variations.",
    sections: [
      {
        heading: "1. Core Facial Dimensions (70% to 80% Coverage)",
        content: "Under International Civil Aviation Organization (ICAO Doc 9303) standards, biometric passport photographs must maintain precise facial proportions: the distance from the bottom of the chin to the crown of the head should occupy between 70% and 80% of the vertical frame. The applicant must face the camera directly with both eyes open, ears and shoulders visible, and a neutral expression."
      },
      {
        heading: "2. Critical Country Background Colour Differences",
        content: "Background colour requirements differ by country and are strictly enforced: (1) United States and India require a plain white or off-white background; (2) United Kingdom requires a plain cream or light grey background (not pure white); (3) France strictly prohibits pure white backgrounds, requiring light grey or light blue; (4) Germany requires a neutral light grey background conforming to the Fotomustertafel. Submitting a photo with the wrong background colour is a frequent reason for processing delay."
      },
      {
        heading: "3. Eyeglasses, Headwear, and Lighting",
        content: "In the United States and the United Kingdom, eyeglasses are strictly prohibited in passport photos unless an urgent signed medical exemption is provided. Globally, glare on spectacle lenses is grounds for rejection. Religious headwear is permitted provided it does not obscure the face from the hairline to the chin or cast shadows across the face. Flash shadows on the background or uneven lighting will result in automated biometric rejection."
      }
    ]
  },
  {
    id: "refugee-stateless-travel-docs",
    icon: "🌐",
    title: "Refugee & Stateless Travel Documents Guide (1951 Geneva & 1954 Conventions)",
    subtitle: "Statutory rights, eligibility criteria, and critical travel restrictions for convention travel document holders.",
    badge: "Special Status",
    readTime: "5 min read",
    summary: "Comprehensive guide to 1951 Convention Refugee Travel Documents (Titre de Voyage) and 1954 Convention Stateless Travel Documents, including the strict prohibition on traveling to the country of origin.",
    sections: [
      {
        heading: "1. 1951 Convention Refugee Travel Documents (Titre de Voyage)",
        content: "Under Article 28 of the 1951 Convention Relating to the Status of Refugees, contracting states issue travel documents to recognized refugees lawfully staying in their territory. In the United States, this is the Refugee Travel Document (Form I-571) issued by USCIS under 8 CFR § 223. In the United Kingdom, HMPO issues the 1951 Convention Travel Document. In Germany, the Reiseausweis für Flüchtlinge (Blue Passport) is issued under Section 4 of the Aufenthaltsverordnung. In France, OFPRA and the Ministry of the Interior issue the Titre de Voyage pour Réfugié."
      },
      {
        heading: "2. The Strict Prohibition on Travel to the Country of Origin",
        content: "Under international refugee law, 1951 Convention Travel Documents are valid for travel to all countries EXCEPT the holder's country of origin or former habitual residence from which asylum was claimed. Traveling to your country of origin, applying for a national passport from your home government, or seeking protection from its embassies is considered voluntary re-availment of national protection, which triggers mandatory cessation of refugee status under Article 1(C) of the 1951 Convention."
      },
      {
        heading: "3. 1954 Convention Stateless Travel Documents",
        content: "Under Article 28 of the 1954 Convention Relating to the Status of Stateless Persons, individuals who are not considered as nationals by any state under the operation of its law are issued a Stateless Person's Travel Document (or Certificate of Identity). Holders do not possess national citizenship but have recognized international travel rights and protection from refoulement. Entry visas are almost always required for international travel, as visa-waiver programs rarely extend to stateless document holders."
      }
    ]
  },
  {
    id: "dual-nationality-guide",
    icon: "⚖",
    title: "Dual Nationality & Multiple Citizenship by Jurisdiction",
    subtitle: "Statutory recognition, mandatory entry rules, and citizenship loss triggers across major countries.",
    badge: "Legal Guide",
    readTime: "6 min read",
    summary: "Detailed review of how dual citizenship is treated across different sovereign jurisdictions: full recognition (US, UK, CA, AU), mandatory choice (JP), and strict prohibition with automatic loss (IN, MY).",
    sections: [
      {
        heading: "1. Jurisdictions Fully Permitting Dual Citizenship (US, UK, Canada, Australia)",
        content: "In the United States, dual nationality is recognized by federal law; however, under 8 U.S.C. § 1185(b), U.S. citizens are required to enter and depart the United States using their valid U.S. passport. In the United Kingdom, dual citizenship is permitted without restriction under the British Nationality Act 1981. In Canada, dual citizenship is fully protected under the Citizenship Act. In Australia, Section 17 of the Australian Citizenship Act was repealed in 2002, allowing Australian citizens to hold multiple citizenships freely."
      },
      {
        heading: "2. Strict Single Citizenship Jurisdictions (India & Malaysia)",
        content: "India strictly prohibits dual nationality under Article 9 of the Constitution of India and Section 9(1) of the Citizenship Act, 1955. Voluntary acquisition of foreign citizenship immediately terminates Indian citizenship by operation of law. Naturalized citizens must surrender their Indian passport within 90 days to receive a Surrender Certificate, after which they may apply for an Overseas Citizen of India (OCI) card. In Malaysia, under Article 24 of the Federal Constitution, the federal government may deprive a Malaysian of citizenship if they voluntarily acquire foreign citizenship or exercise rights exclusive to foreign citizens (such as voting or traveling on a foreign passport)."
      },
      {
        heading: "3. Mandatory Choice of Nationality by Adulthood (Japan)",
        content: "Under Article 14 of the Japanese Nationality Law (国籍法), Japanese citizens who acquire multiple nationalities by birth (such as birth in a jus soli country like the US or to bi-national parents) must declare their choice of nationality before turning 20 years old (or within two years if acquired after age 18). Choosing Japanese nationality requires executing a Declaration of Choice of Japanese Nationality (国籍選択届) and endeavoring to renounce the foreign citizenship."
      }
    ]
  },
  {
    id: "adoption-surrogacy-guide",
    icon: "👶",
    title: "Intercountry Adoption & Surrogacy Passport Guidance for Minors",
    subtitle: "Legal parentage establishment, Hague Convention standards, and biometric requirements for children.",
    badge: "Minor Cases",
    readTime: "5 min read",
    summary: "Guidance on passport applications for adopted minors and children born through international surrogacy arrangements, covering Hague certificates, court parentage decrees, and DNA verification.",
    sections: [
      {
        heading: "1. Hague Convention Intercountry Adoptions",
        content: "Adoptions completed under the 1993 Hague Convention on Protection of Children require an Article 23 Certificate of Conformity from the central adoption authority of the origin country. In the United States, minors adopted abroad by U.S. citizens acquire citizenship automatically under the Child Citizenship Act of 2000 (8 U.S.C. § 1431) upon lawful admission as permanent residents (IR-3 or IH-3 visas). Passport applications require the certified foreign adoption decree, legal custody order, and proof of physical residence."
      },
      {
        heading: "2. Cross-Border Gestational Surrogacy and Statutory Parentage",
        content: "Children born through international surrogacy arrangements require verified statutory parentage before a passport can be issued. Under U.S. Department of State regulations (INA §§ 301 and 309, 7 FAM 1100), the child must have a biological or gestational connection to a transmitting U.S. citizen parent, which routinely requires embassy-supervised AABB-accredited DNA parentage testing. In the United Kingdom, commissioning parents must obtain a Parental Order from the family court under Section 54 of the Human Fertilisation and Embryology Act 2008 to extinguish the surrogate's legal parenthood."
      },
      {
        heading: "3. Strict Two-Parent Appearance and Custody Safeguards",
        content: "Under international anti-abduction protocols (such as US 22 CFR § 51.28 and similar European and Commonwealth rules), all legal parents or guardians must execute the passport application in person. If an adoptive parent has sole legal custody, a certified copy of the court order explicitly granting sole legal custody, or evidence of termination of parental rights, must be provided."
      }
    ]
  },
  {
    id: "marriage-divorce-name-change",
    icon: "💍",
    title: "Name Change After Marriage, Civil Partnership, or Divorce",
    subtitle: "Documentary proof, civil registration alignment, and avoiding travel ticket discrepancies.",
    badge: "Civil Status",
    readTime: "4 min read",
    summary: "How to update passport biographical records after getting married, entering a civil partnership, or finalizing a divorce, including maiden name restoration rules and airline ticket name alignment.",
    sections: [
      {
        heading: "1. Surname Changes Post-Marriage",
        content: "Taking a spouse's surname or combining surnames with a hyphen requires submitting a certified government marriage certificate issued by a civil registrar (church/religious certificates without civil registration are rejected). In India, per the Passport Seva document advisor, changing a surname post-marriage or adding a spouse's name requires the marriage certificate or a Joint Photo Declaration signed by both spouses (Annexure J). In the US, Form DS-82 or DS-5504 must be accompanied by the original certified marriage certificate."
      },
      {
        heading: "2. Restoring Maiden Name After Divorce",
        content: "Restoring a pre-marriage birth surname after divorce requires the final certified divorce decree (Decree Absolute in the UK, final dissolution judgment in the US). If the divorce decree does not explicitly order the resumption of the prior surname, authorities generally require the applicant's original birth certificate showing the birth surname, or a formal deed poll / statutory declaration."
      },
      {
        heading: "3. The Strict Ticket Name Matching Rule",
        content: "A critical international travel trap: the name on your international airline ticket and boarding pass must match the name in your passport character-for-character. If you have married or legally changed your name but have not yet received your updated passport, you MUST book all travel under the exact name currently displayed in your existing passport."
      }
    ]
  },
  {
    id: "gender-marker-change",
    icon: "⚧",
    title: "Gender Marker Correction & Self-Certification Rules",
    subtitle: "Official policies for M, F, and X markers across verified passport authorities.",
    badge: "Policy Guide",
    readTime: "4 min read",
    summary: "Current official procedures for updating passport gender markers ('M', 'F', and 'X') across the US, UK, Canada, and India, including self-certification policies and medical certification requirements.",
    sections: [
      {
        heading: "1. Self-Certification in the United States and Canada",
        content: "The U.S. Department of State modernized its passport gender marker policies to allow applicants to self-select their gender marker ('M', 'F', or 'X') on passport applications without providing medical certification or court orders, even if the selected marker differs from supporting birth certificates or previous passports. Canada's Passport Program (IRCC) similarly permits self-determination of gender identity ('M', 'F', or 'X') without medical documentation."
      },
      {
        heading: "2. Medical & Statutory Certification in the United Kingdom",
        content: "Under current HM Passport Office guidance, changing a gender marker from 'M' to 'F' or 'F' to 'M' requires either a Gender Recognition Certificate (GRC) issued under the Gender Recognition Act 2004, or a letter from a registered medical practitioner (GMC) confirming that the transition is likely to be permanent, alongside proof of the new name in use. Note that under the UK Supreme Court judgment in Elan-Cane v Secretary of State [2021] UKSC 56, HMPO does not issue non-binary ('X') passport markers."
      },
      {
        heading: "3. India: District Magistrate Certificate Requirement",
        content: "Under Section 6 of the Transgender Persons (Protection of Rights) Act, 2019, an applicant must obtain a formal Certificate of Identity issued by the District Magistrate. The Ministry of External Affairs accepts this certificate as conclusive evidence for updating both the legal name and gender marker ('M', 'F', or 'T') on the Indian passport biographical page."
      }
    ]
  },
  {
    id: "emergency-travel-certificate",
    icon: "🚨",
    title: "Emergency Travel Certificate (ETC) & Emergency Passport Guide",
    subtitle: "Procedures, evidentiary requirements, and critical validity limits when stranded abroad.",
    badge: "Urgent Relief",
    readTime: "5 min read",
    summary: "Essential guidance for citizens stranded abroad with lost, stolen, or expired passports: how to obtain an Emergency Travel Certificate (ETC), required evidence, and strict single-journey return limits.",
    sections: [
      {
        heading: "1. Purpose and Strict Geographic Limits",
        content: "An Emergency Travel Certificate (ETC), Emergency Passport, or Laissez-Passer is a temporary travel document issued by embassies and consulates exclusively to citizens who have suffered passport loss, theft, damage, or expiry while abroad, and have an urgent, unavoidable need to travel. Crucially, an ETC is strictly limited to direct, single-journey transit back to the citizen's home country and cannot be used for multi-destination tourism or onward leisure travel."
      },
      {
        heading: "2. Mandatory Consular Evidentiary Requirements",
        content: "To obtain an ETC, applicants must appear in person at the nearest embassy or consulate with: (1) an official police report from local law enforcement documenting the passport loss or theft; (2) confirmed flight itinerary or travel ticket for direct return departure; (3) proof of nationality (such as a photocopy of the lost passport data page, national ID card, or birth certificate); and (4) passport photos meeting consular biometric specifications."
      },
      {
        heading: "3. Validity and Mandatory Surrender Upon Arrival",
        content: "An Emergency Travel Certificate typically carries a short validity period (7 to 30 days), tailored strictly to the return journey. Upon arrival at the home country's immigration checkpoint, border officers will inspect and frequently endorse or retain the ETC. The citizen must then apply for a full-validity replacement passport through standard domestic procedures before undertaking any future international travel."
      }
    ]
  }
];

// Export for Node and browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PASSPORT_GUIDES };
}
