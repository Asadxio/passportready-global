const RULE_PACKS = {
  "IN": {
    "country_code": "IN",
    "country_name": "India",
    "authority_name": "Passport Seva · Consular, Passport & Visa Division, Ministry of External Affairs",
    "official_portal_url": "https://www.passportindia.gov.in/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-18",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-01-01",
    "jurisdictions": [
      {
        "name": "Domestic (Regional Passport Offices & PSK/POPSK)",
        "application_channel": "domestic",
        "source_url": "https://www.passportindia.gov.in/"
      },
      {
        "name": "Overseas Consular Services (Indian Embassies & Consulates via VFS/BLS)",
        "application_channel": "consular",
        "source_url": "https://embassy.passportindia.gov.in/"
      }
    ],
    "age_bands": [
      {
        "label": "Infant / young child (under 5)",
        "min_age": 0,
        "max_age": 4,
        "age_basis_source": "https://www.passportindia.gov.in/"
      },
      {
        "label": "Child / minor (5 to 17)",
        "min_age": 5,
        "max_age": 17,
        "age_basis_source": "https://www.passportindia.gov.in/"
      },
      {
        "label": "Adult (18 to 59)",
        "min_age": 18,
        "max_age": 59,
        "age_basis_source": "https://www.passportindia.gov.in/"
      },
      {
        "label": "Senior citizen (60+)",
        "min_age": 60,
        "max_age": null,
        "age_basis_source": "https://www.passportindia.gov.in/"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must be a citizen of India by birth, descent, registration, or naturalization.",
            "source_url": "https://www.passportindia.gov.in/",
            "last_reviewed": "2026-10-18"
          },
          {
            "rule": "Minors require parental consent through Annexure D/C.",
            "source_url": "https://www.passportindia.gov.in/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "steps": [
          {
            "step": "Register and create an account on Passport Seva Online Portal (passportindia.gov.in).",
            "source_url": "https://www.passportindia.gov.in/"
          },
          {
            "step": "Fill out Form for Fresh Passport online and submit.",
            "source_url": "https://www.passportindia.gov.in/"
          },
          {
            "step": "Pay the application fee online (SBI / NetBanking / UPI / Credit/Debit) and schedule appointment at nearest PSK or Post Office PSK (POPSK).",
            "source_url": "https://www.passportindia.gov.in/"
          },
          {
            "step": "Attend in-person appointment with original supporting documents for biometric capture and document verification.",
            "source_url": "https://www.passportindia.gov.in/"
          },
          {
            "step": "Undergo police verification at your local police jurisdiction.",
            "source_url": "https://www.passportindia.gov.in/"
          },
          {
            "step": "Receive passport delivered by India Post Speed Post.",
            "source_url": "https://www.passportindia.gov.in/"
          }
        ],
        "documents": [
          {
            "document_name": "Proof of Date of Birth (Birth Certificate, School Leaving Certificate, PAN card, Aadhaar card, or Service Record)",
            "requiredness": "required",
            "conditions": "Birth Certificate issued by municipal authority / Registrar of Births is standard; for applicants born on or after 26/01/1989, standard municipal/Panchayat birth certificate or Aadhaar/PAN is accepted under current relaxed MEA rules.",
            "accepted_alternatives": [
              "Birth Certificate by Municipal Corporation",
              "Aadhaar Card / e-Aadhaar",
              "PAN Card issued by Income Tax Dept",
              "School Leaving / Matriculation Certificate",
              "Policy Bond issued by Public Life Insurance Corporation"
            ],
            "original_or_copy": "Original + self-attested photocopy",
            "translation_or_legalisation": "English or Hindi official translation if in regional language",
            "source_url": "https://www.passportindia.gov.in/",
            "last_reviewed": "2026-10-18"
          },
          {
            "document_name": "Proof of Present Address (Aadhaar, Electricity/Water bill, Bank Passbook, Rent agreement, Employer cert)",
            "requiredness": "required",
            "conditions": "Must reflect residence for the immediate past 1 continuous year; if moved recently, multiple proofs covering the full 1-year period are mandatory.",
            "accepted_alternatives": [
              "Aadhaar Card with current address",
              "Water bill / Electricity bill (at least 2 consecutive bills within last year)",
              "Passbook of running bank account (Scheduled Public/Private bank)",
              "Spouse's passport copy (with same address)",
              "Registered Rent Agreement (minimum 1 year validity)"
            ],
            "original_or_copy": "Original + self-attested photocopy",
            "translation_or_legalisation": "Standard government language",
            "source_url": "https://www.passportindia.gov.in/",
            "last_reviewed": "2026-10-18"
          },
          {
            "document_name": "Proof of Non-ECR (Emigration Check Not Required) Status",
            "requiredness": "conditional",
            "conditions": "Required if applicant has passed 10th standard (Matriculation) or above, is a taxpayer, or meets other Non-ECR categories; without this, passport issued with ECR stamp.",
            "accepted_alternatives": [
              "Matriculation / 10th standard pass certificate",
              "Degree Certificate from recognized University",
              "Income Tax Assessment Order / returns for last 1 year",
              "Official Gazetted officer ID"
            ],
            "original_or_copy": "Original + photocopy",
            "translation_or_legalisation": "Recognized educational board certificate",
            "source_url": "https://www.passportindia.gov.in/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "photo_rules": {
          "captured_live": true,
          "exception_for_infants": "Infants under age 5 must bring a physical 4.5 cm x 3.5 cm colour photo with plain white background, neutral expression, ears visible."
        },
        "fees": {
          "currency": "INR",
          "standard_adult_36_pages": 1500,
          "standard_adult_60_pages": 2000,
          "minor_under_18": 1000,
          "tatkaal_surcharge": 2000
        },
        "processing_times": {
          "normal_days": "15 to 30 days including police verification",
          "tatkaal_days": "1 to 3 working days post police verification status"
        },
        "sources": [
          {
            "url": "https://www.passportindia.gov.in/",
            "publisher": "Ministry of External Affairs, India",
            "page_title": "Passport Seva Official Portal",
            "checked_at": "2026-10-18"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Can apply within 1 year before expiry or up to 3 years after expiry without pre-police verification in most cases.",
            "source_url": "https://www.passportindia.gov.in/",
            "last_reviewed": "2026-10-18"
          },
          {
            "rule": "Expired more than 3 years requires fresh police verification before issuance.",
            "source_url": "https://www.passportindia.gov.in/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "steps": [
          {
            "step": "Log into Passport Seva, choose 'Re-issue of Passport'.",
            "source_url": "https://www.passportindia.gov.in/"
          },
          {
            "step": "Provide previous passport details and reason for re-issue (Validity Expired / Exhaustion of Pages / Change in Personal Particulars).",
            "source_url": "https://www.passportindia.gov.in/"
          },
          {
            "step": "Pay fee, book slot, and bring old original passport for physical cancellation.",
            "source_url": "https://www.passportindia.gov.in/"
          }
        ],
        "documents": [
          {
            "document_name": "Original Existing / Expired Passport",
            "requiredness": "required",
            "conditions": "Must bring old passport booklet; will be cancelled and returned with the new booklet.",
            "accepted_alternatives": [],
            "original_or_copy": "Original + self-attested copies of first 2 and last 2 pages, including ECR/Non-ECR page and observation page",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://www.passportindia.gov.in/",
            "last_reviewed": "2026-10-18"
          },
          {
            "document_name": "Proof of Present Address",
            "requiredness": "required",
            "conditions": "Required even if address is unchanged from the old passport.",
            "accepted_alternatives": [
              "Aadhaar Card",
              "Utility Bill",
              "Bank Passbook"
            ],
            "original_or_copy": "Original + self-attested photocopy",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://www.passportindia.gov.in/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "sources": [
          {
            "url": "https://www.passportindia.gov.in/",
            "publisher": "Ministry of External Affairs, India",
            "page_title": "Reissue Rules",
            "checked_at": "2026-10-18"
          }
        ]
      },
      "lost_stolen": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Mandatory police report (FIR or Police Missing Certificate) required for any lost or stolen passport.",
            "source_url": "https://www.passportindia.gov.in/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "steps": [
          {
            "step": "Immediately lodge an FIR or Missing Report at the nearest police station or state police online portal.",
            "source_url": "https://www.passportindia.gov.in/"
          },
          {
            "step": "Submit online application for Re-issue under 'Lost / Stolen' category.",
            "source_url": "https://www.passportindia.gov.in/"
          },
          {
            "step": "Attach signed Annexure F explaining circumstances of loss.",
            "source_url": "https://www.passportindia.gov.in/"
          }
        ],
        "documents": [
          {
            "document_name": "Police Report / FIR Copy (or official Lost Report Certificate)",
            "requiredness": "required",
            "conditions": "Must specify passport number, date, and place of loss.",
            "accepted_alternatives": [],
            "original_or_copy": "Original police report with official stamp and signature",
            "translation_or_legalisation": "Official translation if in regional language",
            "source_url": "https://www.passportindia.gov.in/",
            "last_reviewed": "2026-10-18"
          },
          {
            "document_name": "Self-Declaration on Plain Paper (Annexure F)",
            "requiredness": "required",
            "conditions": "Specifying how and when the passport was lost.",
            "accepted_alternatives": [],
            "original_or_copy": "Original signed copy",
            "translation_or_legalisation": "English or Hindi",
            "source_url": "https://www.passportindia.gov.in/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "fees": {
          "currency": "INR",
          "standard_adult_36_pages": 3000,
          "standard_adult_60_pages": 3500
        },
        "sources": [
          {
            "url": "https://www.passportindia.gov.in/",
            "publisher": "Ministry of External Affairs, India",
            "page_title": "Lost Passport Replacement",
            "checked_at": "2026-10-18"
          }
        ]
      },
      "name_correction": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Minor spelling correction: requires 2 public identification documents showing correct spelling.",
            "source_url": "https://www.passportindia.gov.in/",
            "last_reviewed": "2026-10-18"
          },
          {
            "rule": "Major name change / gender change: requires official Gazette Notification and 2 prominent newspaper advertisements.",
            "source_url": "https://www.passportindia.gov.in/",
            "last_reviewed": "2026-10-18"
          },
          {
            "rule": "Name change due to marriage / divorce: self-declaration / marriage cert under current MEA rules without gazette.",
            "source_url": "https://www.passportindia.gov.in/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "steps": [
          {
            "step": "Publish name change in Official Gazette of India (or state gazette) if major change.",
            "source_url": "https://www.passportindia.gov.in/"
          },
          {
            "step": "Publish notices in 2 daily newspapers (one local language, one English).",
            "source_url": "https://www.passportindia.gov.in/"
          },
          {
            "step": "Apply for Reissue with 'Change in Personal Particulars'.",
            "source_url": "https://www.passportindia.gov.in/"
          }
        ],
        "documents": [
          {
            "document_name": "Gazette Notification / Marriage Certificate / Newspaper Clippings",
            "requiredness": "required",
            "conditions": "Depends on whether name change is clerical, post-marriage, or total name change.",
            "accepted_alternatives": [
              "Marriage Certificate issued by Registrar of Marriages",
              "Gazette notification copy",
              "Deed Poll / Sworn Affidavit"
            ],
            "original_or_copy": "Original Gazette or clipping + self-attested copies",
            "translation_or_legalisation": "Standard government language",
            "source_url": "https://www.passportindia.gov.in/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "sources": [
          {
            "url": "https://www.passportindia.gov.in/",
            "publisher": "Ministry of External Affairs, India",
            "page_title": "Name Change Procedures",
            "checked_at": "2026-10-18"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://www.passportindia.gov.in/",
        "publisher": "Ministry of External Affairs, Government of India",
        "page_title": "Passport Seva Official Portal",
        "checked_at": "2026-10-18"
      }
    ]
  },
  "US": {
    "country_code": "US",
    "country_name": "United States",
    "authority_name": "U.S. Department of State · Bureau of Consular Affairs",
    "official_portal_url": "https://travel.state.gov/en/passports.html",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-18",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-01-01",
    "jurisdictions": [
      {
        "name": "Domestic (Passport Acceptance Facilities / Regional Passport Agencies)",
        "application_channel": "domestic",
        "source_url": "https://travel.state.gov/en/passports.html"
      },
      {
        "name": "Overseas Consular Services (U.S. Embassies & Consulates)",
        "application_channel": "consular",
        "source_url": "https://travel.state.gov/content/travel/en/passports/need-passport/outside-us.html"
      }
    ],
    "age_bands": [
      {
        "label": "Child / Minor (under 16)",
        "min_age": 0,
        "max_age": 15,
        "age_basis_source": "https://travel.state.gov/en/passports/need-passport/under-16.html"
      },
      {
        "label": "Young adult (16 to 17)",
        "min_age": 16,
        "max_age": 17,
        "age_basis_source": "https://travel.state.gov/en/passports/need-passport/16-17.html"
      },
      {
        "label": "Adult (18+)",
        "min_age": 18,
        "max_age": null,
        "age_basis_source": "https://travel.state.gov/en/passports.html"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must be a U.S. citizen or non-citizen U.S. national.",
            "source_url": "https://travel.state.gov/",
            "last_reviewed": "2026-10-18"
          },
          {
            "rule": "Must apply in person using Form DS-11 at an authorized Passport Acceptance Facility.",
            "source_url": "https://travel.state.gov/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "steps": [
          {
            "step": "Complete Form DS-11: Application For a U.S. Passport (do not sign until instructed by acceptance agent).",
            "source_url": "https://travel.state.gov/"
          },
          {
            "step": "Gather evidence of U.S. citizenship (original/certified copy + photocopy).",
            "source_url": "https://travel.state.gov/"
          },
          {
            "step": "Present valid government photo ID + front/back photocopy.",
            "source_url": "https://travel.state.gov/"
          },
          {
            "step": "Provide one compliant 2x2 inch color passport photo.",
            "source_url": "https://travel.state.gov/"
          },
          {
            "step": "Pay application fee to U.S. Department of State and execution fee to acceptance facility.",
            "source_url": "https://travel.state.gov/"
          }
        ],
        "documents": [
          {
            "document_name": "Evidence of U.S. Citizenship",
            "requiredness": "required",
            "conditions": "Must be certified copy issued by registrar or official authority with raised, embossed, or multicolored seal; hospital birth certificates not accepted.",
            "accepted_alternatives": [
              "U.S. Birth Certificate (certified copy)",
              "Consular Report of Birth Abroad (CRBA) Form FS-240",
              "Certificate of Naturalization",
              "Certificate of Citizenship",
              "Full validity undamaged previous U.S. passport"
            ],
            "original_or_copy": "Original or certified copy + 1 black and white photocopy",
            "translation_or_legalisation": "Certified English translation if foreign document",
            "source_url": "https://travel.state.gov/",
            "last_reviewed": "2026-10-18"
          },
          {
            "document_name": "Valid Government Photo Identification",
            "requiredness": "required",
            "conditions": "Must be valid and unexpired; out-of-state IDs may require secondary photo identification.",
            "accepted_alternatives": [
              "Valid Driver's License",
              "State Issued Non-Driver ID",
              "U.S. Military ID",
              "Government Employee ID (Federal, State, Municipal)",
              "Current Foreign Passport (for identification only)"
            ],
            "original_or_copy": "Original shown in person + photocopy of front and back on plain 8.5x11 paper",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://travel.state.gov/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "photo_rules": {
          "dimensions": "2 x 2 inches (51 x 51 mm)",
          "background": "Plain white or off-white background",
          "eyeglass_policy": "Eyeglasses NOT permitted unless medical certificate of urgent need provided",
          "expression": "Neutral facial expression or natural smile, both eyes open",
          "age_of_photo": "Taken within the last 6 months"
        },
        "fees": {
          "currency": "USD",
          "adult_book_application_fee": 130,
          "acceptance_execution_fee": 35,
          "total_adult_first_time": 165,
          "minor_book_application_fee": 100,
          "minor_total": 135,
          "expedite_service_fee": 60
        },
        "processing_times": {
          "routine": "6 to 8 weeks",
          "expedited": "2 to 3 weeks",
          "urgent_travel": "Within 14 calendar days at Passport Agency (appointment required with proof of travel)"
        },
        "sources": [
          {
            "url": "https://travel.state.gov/en/passports.html",
            "publisher": "U.S. Department of State",
            "page_title": "U.S. Passports",
            "checked_at": "2026-10-18"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Qualifies for Form DS-82 mail renewal if: existing passport is undamaged, issued within last 15 years, applicant was 16 or older at issuance, and name is unchanged or documented with legal name change.",
            "source_url": "https://travel.state.gov/en/passports/have-passport/renew.html",
            "last_reviewed": "2026-10-18"
          },
          {
            "rule": "If passport was issued before age 16 or expired >5 years ago (>15 years since issuance), applicant must use Form DS-11 in person.",
            "source_url": "https://travel.state.gov/en/passports/have-passport/renew.html",
            "last_reviewed": "2026-10-18"
          }
        ],
        "steps": [
          {
            "step": "Complete Form DS-82 (Renew by Mail or Online Renewal if eligible).",
            "source_url": "https://travel.state.gov/"
          },
          {
            "step": "Include most recent U.S. passport booklet.",
            "source_url": "https://travel.state.gov/"
          },
          {
            "step": "Include one new 2x2 passport photo (staple with 4 vertical staples on corners).",
            "source_url": "https://travel.state.gov/"
          },
          {
            "step": "Enclose check or money order payable to 'U.S. Department of State'.",
            "source_url": "https://travel.state.gov/"
          },
          {
            "step": "Mail via USPS tracked priority mail to designated National Passport Processing Center.",
            "source_url": "https://travel.state.gov/"
          }
        ],
        "documents": [
          {
            "document_name": "Most Recent U.S. Passport Booklet",
            "requiredness": "required",
            "conditions": "Must be submitted with application; will be cancelled and returned separately.",
            "accepted_alternatives": [],
            "original_or_copy": "Original passport booklet",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://travel.state.gov/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "fees": {
          "currency": "USD",
          "adult_renewal_book": 130,
          "expedite_fee": 60
        },
        "sources": [
          {
            "url": "https://travel.state.gov/en/passports/have-passport/renew.html",
            "publisher": "U.S. Department of State",
            "page_title": "Renew by Mail",
            "checked_at": "2026-10-18"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "All children under 16 must apply in person with BOTH parents or legal guardians present.",
            "source_url": "https://travel.state.gov/en/passports/need-passport/under-16.html",
            "last_reviewed": "2026-10-18"
          },
          {
            "rule": "If one parent cannot appear, notarized Form DS-3053 (Statement of Consent) + copy of front/back of non-applying parent's ID is mandatory.",
            "source_url": "https://travel.state.gov/en/passports/need-passport/under-16.html",
            "last_reviewed": "2026-10-18"
          },
          {
            "rule": "Child passports are valid for 5 years and cannot be renewed by mail.",
            "source_url": "https://travel.state.gov/en/passports/need-passport/under-16.html",
            "last_reviewed": "2026-10-18"
          }
        ],
        "steps": [
          {
            "step": "Fill out Form DS-11.",
            "source_url": "https://travel.state.gov/"
          },
          {
            "step": "Bring child in person to acceptance facility.",
            "source_url": "https://travel.state.gov/"
          },
          {
            "step": "Both parents present valid government photo IDs and sign in front of agent.",
            "source_url": "https://travel.state.gov/"
          }
        ],
        "documents": [
          {
            "document_name": "Proof of Parent-Child Relationship",
            "requiredness": "required",
            "conditions": "U.S. Birth Certificate listing parents' names, foreign birth certificate, or adoption decree.",
            "accepted_alternatives": [
              "Certified U.S. Birth Certificate",
              "Consular Report of Birth Abroad",
              "Court Adoption Decree",
              "Court Custody Order"
            ],
            "original_or_copy": "Original or certified copy + photocopy",
            "translation_or_legalisation": "Certified English translation if in foreign language",
            "source_url": "https://travel.state.gov/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "sources": [
          {
            "url": "https://travel.state.gov/en/passports/need-passport/under-16.html",
            "publisher": "U.S. Department of State",
            "page_title": "Children Under 16",
            "checked_at": "2026-10-18"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://travel.state.gov/en/passports.html",
        "publisher": "U.S. Department of State, Bureau of Consular Affairs",
        "page_title": "U.S. Passport Information",
        "checked_at": "2026-10-18"
      }
    ]
  },
  "GB": {
    "country_code": "GB",
    "country_name": "United Kingdom",
    "authority_name": "HM Passport Office · Home Office",
    "official_portal_url": "https://www.gov.uk/browse/abroad/passports",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-18",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-04-11",
    "jurisdictions": [
      {
        "name": "United Kingdom (HMPO Online & Post Office Check & Send)",
        "application_channel": "domestic",
        "source_url": "https://www.gov.uk/apply-renew-passport"
      },
      {
        "name": "Applying from abroad (GOV.UK Overseas Passport Application)",
        "application_channel": "consular",
        "source_url": "https://www.gov.uk/overseas-passports"
      }
    ],
    "age_bands": [
      {
        "label": "Child (under 16)",
        "min_age": 0,
        "max_age": 15,
        "age_basis_source": "https://www.gov.uk/get-a-child-passport"
      },
      {
        "label": "Adult (16+)",
        "min_age": 16,
        "max_age": null,
        "age_basis_source": "https://www.gov.uk/apply-renew-passport"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must have British nationality (British citizen, British overseas citizen, etc.).",
            "source_url": "https://www.gov.uk/",
            "last_reviewed": "2026-10-18"
          },
          {
            "rule": "First-time adult applicants (16+) may be invited to attend a 30-minute identity interview.",
            "source_url": "https://www.gov.uk/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "steps": [
          {
            "step": "Apply online at GOV.UK (or pick up a paper form from Post Office).",
            "source_url": "https://www.gov.uk/"
          },
          {
            "step": "Get a digital photo code or upload a digital photo that meets HMPO criteria.",
            "source_url": "https://www.gov.uk/"
          },
          {
            "step": "Provide details of a countersignatory / identity referee (must know applicant for 2+ years, British/Irish passport holder in recognized profession).",
            "source_url": "https://www.gov.uk/"
          },
          {
            "step": "Post original supporting documents to the HMPO document handling address provided.",
            "source_url": "https://www.gov.uk/"
          }
        ],
        "documents": [
          {
            "document_name": "Full Birth Certificate or Adoption Certificate",
            "requiredness": "required",
            "conditions": "Must show parents' details. Short birth certificates (without parents' names) are not accepted.",
            "accepted_alternatives": [
              "Full British Birth Certificate",
              "Certificate of Naturalisation or Registration as a British Citizen"
            ],
            "original_or_copy": "Original official certified copy (HMPO returns documents via secure courier)",
            "translation_or_legalisation": "Certified English/Welsh translation",
            "source_url": "https://www.gov.uk/",
            "last_reviewed": "2026-10-18"
          },
          {
            "document_name": "Parents' Birth Certificates / Marriage Certificate (if born in UK after 1 Jan 1983)",
            "requiredness": "conditional",
            "conditions": "Required to prove British citizenship was transmitted through parents at birth.",
            "accepted_alternatives": [
              "Parent's full UK birth certificate",
              "Parent's British passport number at time of birth"
            ],
            "original_or_copy": "Original certified certificates",
            "translation_or_legalisation": "Certified translation",
            "source_url": "https://www.gov.uk/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "photo_rules": {
          "dimensions": "45 mm high x 35 mm wide",
          "background": "Light grey or cream background (not pure white)",
          "rules": "Neutral expression, mouth closed, no smiling, no head covering unless religious or medical"
        },
        "fees": {
          "currency": "GBP",
          "adult_online": 88.5,
          "adult_postal": 100,
          "child_online": 57.5,
          "child_postal": 69,
          "fast_track_1_week_adult": 166.5
        },
        "processing_times": {
          "standard": "Up to 3 weeks",
          "fast_track": "1 week (appointment required)"
        },
        "sources": [
          {
            "url": "https://www.gov.uk/apply-renew-passport",
            "publisher": "HM Passport Office, UK Government",
            "page_title": "Apply Online for a UK Passport",
            "checked_at": "2026-10-18"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Adult passports can be renewed online by submitting old passport by post.",
            "source_url": "https://www.gov.uk/renew-adult-passport",
            "last_reviewed": "2026-10-18"
          }
        ],
        "steps": [
          {
            "step": "Complete online renewal at GOV.UK.",
            "source_url": "https://www.gov.uk/"
          },
          {
            "step": "Pay £88.50 fee.",
            "source_url": "https://www.gov.uk/"
          },
          {
            "step": "Post old passport to HMPO address provided.",
            "source_url": "https://www.gov.uk/"
          }
        ],
        "documents": [
          {
            "document_name": "Previous British Passport Booklet",
            "requiredness": "required",
            "conditions": "Must send current/expired passport booklet; corners will be clipped and returned.",
            "accepted_alternatives": [],
            "original_or_copy": "Original booklet",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://www.gov.uk/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "sources": [
          {
            "url": "https://www.gov.uk/renew-adult-passport",
            "publisher": "HM Passport Office",
            "page_title": "Renew Adult Passport",
            "checked_at": "2026-10-18"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://www.gov.uk/browse/abroad/passports",
        "publisher": "HM Passport Office, Home Office",
        "page_title": "Passports, Travel and Living Abroad",
        "checked_at": "2026-10-18"
      }
    ]
  },
  "CA": {
    "country_code": "CA",
    "country_name": "Canada",
    "authority_name": "Immigration, Refugees and Citizenship Canada (IRCC) · Passport Program",
    "official_portal_url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports.html",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-18",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-01-01",
    "jurisdictions": [
      {
        "name": "Inside Canada (Service Canada Centers & Specialized Passport Offices)",
        "application_channel": "domestic",
        "source_url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports.html"
      },
      {
        "name": "Applying from USA or abroad (Canadian Embassies, High Commissions & Consulates)",
        "application_channel": "consular",
        "source_url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/apply-outside-canada.html"
      }
    ],
    "age_bands": [
      {
        "label": "Child (under 16)",
        "min_age": 0,
        "max_age": 15,
        "age_basis_source": "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/child-passport.html"
      },
      {
        "label": "Adult (16+)",
        "min_age": 16,
        "max_age": null,
        "age_basis_source": "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports.html"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must be a Canadian citizen by birth or naturalization.",
            "source_url": "https://www.canada.ca/",
            "last_reviewed": "2026-10-18"
          },
          {
            "rule": "Requires an eligible Guarantor (knows applicant 2+ years, Canadian citizen with valid 5/10-year passport).",
            "source_url": "https://www.canada.ca/",
            "last_reviewed": "2026-10-18"
          },
          {
            "rule": "Requires 2 references (known applicant 2+ years, not family members).",
            "source_url": "https://www.canada.ca/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "steps": [
          {
            "step": "Complete Form PPTC 153 (Adult General Passport Application).",
            "source_url": "https://www.canada.ca/"
          },
          {
            "step": "Have guarantor fill section 6 and sign back of 1 photo.",
            "source_url": "https://www.canada.ca/"
          },
          {
            "step": "Submit original proof of Canadian citizenship and secondary photo ID.",
            "source_url": "https://www.canada.ca/"
          },
          {
            "step": "Submit in person at Service Canada or mail application.",
            "source_url": "https://www.canada.ca/"
          }
        ],
        "documents": [
          {
            "document_name": "Proof of Canadian Citizenship",
            "requiredness": "required",
            "conditions": "Must be original document; photocopies not accepted.",
            "accepted_alternatives": [
              "Provincial/Territorial Birth Certificate",
              "Certificate of Canadian Citizenship",
              "Certificate of Naturalization"
            ],
            "original_or_copy": "Original only",
            "translation_or_legalisation": "Certified English or French translation",
            "source_url": "https://www.canada.ca/",
            "last_reviewed": "2026-10-18"
          },
          {
            "document_name": "Document to Support Identity (Photo ID)",
            "requiredness": "required",
            "conditions": "Issued by federal, provincial or municipal authority; must contain name, sex, date of birth, photo and signature.",
            "accepted_alternatives": [
              "Provincial Driver's License",
              "Provincial Health Card with photo",
              "Government employee ID",
              "Previous Canadian passport"
            ],
            "original_or_copy": "Original or signed copy (both sides signed by guarantor)",
            "translation_or_legalisation": "English/French",
            "source_url": "https://www.canada.ca/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "photo_rules": {
          "dimensions": "50 mm wide x 70 mm high (2 inches wide x 2 3/4 inches long)",
          "photographer_stamp": "Back of 1 photo must have photographer name, studio address and date taken stamped or written",
          "guarantor_endorsement": "Guarantor must write 'I certify this to be a true likeness of [Applicant Name]' and sign on back"
        },
        "fees": {
          "currency": "CAD",
          "adult_5_year": 120,
          "adult_10_year": 160,
          "child_0_to_15": 57,
          "urgent_pickup_surcharge": 110
        },
        "processing_times": {
          "in_person_passport_office": "10 business days",
          "service_canada_or_mail": "20 business days + mail delivery"
        },
        "sources": [
          {
            "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports.html",
            "publisher": "Government of Canada",
            "page_title": "Canadian Passports",
            "checked_at": "2026-10-18"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Simplified Renewal: If old passport was 5 or 10 years, issued within last 15 years, and personal info unchanged, NO guarantor is required.",
            "source_url": "https://www.canada.ca/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "steps": [
          {
            "step": "Fill simplified renewal form PPTC 054.",
            "source_url": "https://www.canada.ca/"
          },
          {
            "step": "Include old passport, 2 new photos, and 2 references.",
            "source_url": "https://www.canada.ca/"
          }
        ],
        "documents": [
          {
            "document_name": "Previous Canadian Passport",
            "requiredness": "required",
            "conditions": "Original booklet submitted.",
            "accepted_alternatives": [],
            "original_or_copy": "Original",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://www.canada.ca/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "sources": [
          {
            "url": "https://www.canada.ca/",
            "publisher": "Government of Canada",
            "page_title": "Renew Passport",
            "checked_at": "2026-10-18"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports.html",
        "publisher": "Government of Canada, IRCC",
        "page_title": "Canadian Passports and Travel Documents",
        "checked_at": "2026-10-18"
      }
    ]
  },
  "AU": {
    "country_code": "AU",
    "country_name": "Australia",
    "authority_name": "Australian Passport Office · Department of Foreign Affairs and Trade",
    "official_portal_url": "https://www.passports.gov.au/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-18",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-01-01",
    "jurisdictions": [
      {
        "name": "Australia (Australia Post retail outlets & Passport Offices)",
        "application_channel": "domestic",
        "source_url": "https://www.passports.gov.au/"
      },
      {
        "name": "Overseas (Australian High Commissions & Embassies)",
        "application_channel": "consular",
        "source_url": "https://www.passports.gov.au/overseas"
      }
    ],
    "age_bands": [
      {
        "label": "Child (under 16)",
        "min_age": 0,
        "max_age": 15,
        "age_basis_source": "https://www.passports.gov.au/"
      },
      {
        "label": "Youth (16 to 17 - 10-year validity, child fee/consent)",
        "min_age": 16,
        "max_age": 17,
        "age_basis_source": "https://www.passports.gov.au/"
      },
      {
        "label": "Adult (18+)",
        "min_age": 18,
        "max_age": null,
        "age_basis_source": "https://www.passports.gov.au/"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must be an Australian citizen.",
            "source_url": "https://www.passports.gov.au/",
            "last_reviewed": "2026-10-18"
          },
          {
            "rule": "First-time applicants must complete Form PC8 with an approved guarantor.",
            "source_url": "https://www.passports.gov.au/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "steps": [
          {
            "step": "Complete application form online at AusPassport portal, then print high-resolution copy.",
            "source_url": "https://www.passports.gov.au/"
          },
          {
            "step": "Have guarantor fill section 11 and sign back of 1 photo in black ink.",
            "source_url": "https://www.passports.gov.au/"
          },
          {
            "step": "Gather original proof of citizenship and identity documents from Combination 1 or 2.",
            "source_url": "https://www.passports.gov.au/"
          },
          {
            "step": "Lodge in person at participating Australia Post post office.",
            "source_url": "https://www.passports.gov.au/"
          }
        ],
        "documents": [
          {
            "document_name": "Proof of Australian Citizenship",
            "requiredness": "required",
            "conditions": "Full Australian birth certificate (issued by state/territory BDM) or Australian citizenship certificate.",
            "accepted_alternatives": [
              "Australian Birth Certificate",
              "Australian Citizenship Certificate",
              "Australian Naturalisation Certificate"
            ],
            "original_or_copy": "Original only",
            "translation_or_legalisation": "NAATI accredited English translation if foreign document",
            "source_url": "https://www.passports.gov.au/",
            "last_reviewed": "2026-10-18"
          },
          {
            "document_name": "Original Photo ID and Address Evidence",
            "requiredness": "required",
            "conditions": "Current Australian driver licence, Proof of Age card, or Medicare card + bank statement.",
            "accepted_alternatives": [
              "Driver Licence",
              "State Photo Card",
              "Medicare Card",
              "Centrelink Concession Card"
            ],
            "original_or_copy": "Original",
            "translation_or_legalisation": "NAATI certified",
            "source_url": "https://www.passports.gov.au/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "photo_rules": {
          "dimensions": "35 mm to 40 mm wide x 45 mm to 50 mm high",
          "background": "Plain white or light grey background",
          "specifications": "Edge-to-edge face measurement between 32 mm and 36 mm; no smiling, mouth closed"
        },
        "fees": {
          "currency": "AUD",
          "adult_10_year": 398,
          "child_5_year": 199,
          "senior_75_plus_5_year": 199,
          "priority_processing_surcharge": 290
        },
        "processing_times": {
          "standard": "Up to 6 weeks",
          "priority": "2 business days after lodgement"
        },
        "sources": [
          {
            "url": "https://www.passports.gov.au/",
            "publisher": "Australian Passport Office, DFAT",
            "page_title": "Australian Passports",
            "checked_at": "2026-10-18"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Adult Streamlined Renewal (Form PC7): Eligible if adult passport issued with at least 2 years validity after age 16, current name matches, and expired within last 3 years.",
            "source_url": "https://www.passports.gov.au/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "steps": [
          {
            "step": "Complete PC7 renewal online.",
            "source_url": "https://www.passports.gov.au/"
          },
          {
            "step": "Bring old passport + 2 new photos to Australia Post; no guarantor needed.",
            "source_url": "https://www.passports.gov.au/"
          }
        ],
        "documents": [
          {
            "document_name": "Most Recent Australian Passport",
            "requiredness": "required",
            "conditions": "Must bring physical book.",
            "accepted_alternatives": [],
            "original_or_copy": "Original",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://www.passports.gov.au/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "sources": [
          {
            "url": "https://www.passports.gov.au/",
            "publisher": "Australian Passport Office",
            "page_title": "Renew Adult Passport",
            "checked_at": "2026-10-18"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://www.passports.gov.au/",
        "publisher": "Australian Passport Office, DFAT",
        "page_title": "Australian Passport Office",
        "checked_at": "2026-10-18"
      }
    ]
  },
  "PK": {
    "country_code": "PK",
    "country_name": "Pakistan",
    "authority_name": "Directorate General of Immigration & Passports · Ministry of Interior",
    "official_portal_url": "https://dgip.gov.pk/passport/ordinary-passport.php",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-18",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-01-01",
    "jurisdictions": [
      {
        "name": "Domestic Regional Passport Offices (RPO) & Executive Passport Centers (EPC)",
        "application_channel": "domestic",
        "source_url": "https://dgip.gov.pk/"
      },
      {
        "name": "Overseas (Pakistan Missions Abroad & Online e-Services portal)",
        "application_channel": "consular",
        "source_url": "https://onlinemrp.dgip.gov.pk/"
      }
    ],
    "age_bands": [
      {
        "label": "Minor / Child (under 18)",
        "min_age": 0,
        "max_age": 17,
        "age_basis_source": "https://dgip.gov.pk/"
      },
      {
        "label": "Adult (18+)",
        "min_age": 18,
        "max_age": null,
        "age_basis_source": "https://dgip.gov.pk/"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must be a citizen of Pakistan with valid NADRA CNIC / SNIC (or NICOP/POC for overseas).",
            "source_url": "https://dgip.gov.pk/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "steps": [
          {
            "step": "Pay passport fee via National Bank of Pakistan (NBP), 1Link, or Passport Fee Asaan app.",
            "source_url": "https://dgip.gov.pk/"
          },
          {
            "step": "Visit Regional Passport Office or Executive Passport Center in person with original CNIC/SNIC.",
            "source_url": "https://dgip.gov.pk/"
          },
          {
            "step": "Undergo token generation, live photo capture, biometric fingerprint scanning, data entry, and interview.",
            "source_url": "https://dgip.gov.pk/"
          },
          {
            "step": "Collect passport upon SMS notification or receive via courier.",
            "source_url": "https://dgip.gov.pk/"
          }
        ],
        "documents": [
          {
            "document_name": "Original CNIC / Smart National Identity Card (SNIC)",
            "requiredness": "required",
            "conditions": "Must be valid and unexpired; for minors under 18, NADRA Child Registration Certificate (CRC / Form-B) + parents' CNICs.",
            "accepted_alternatives": [
              "NADRA CNIC",
              "NADRA Smart Card (SNIC)",
              "NICOP (National Identity Card for Overseas Pakistanis)"
            ],
            "original_or_copy": "Original + 2 photocopies",
            "translation_or_legalisation": "Urdu or English",
            "source_url": "https://dgip.gov.pk/",
            "last_reviewed": "2026-10-18"
          },
          {
            "document_name": "Bank Challan Receipt / e-Payment Confirmation",
            "requiredness": "required",
            "conditions": "Showing complete payment with PSID / tracking number.",
            "accepted_alternatives": [
              "NBP Challan Receipt",
              "Passport Fee Asaan digital receipt"
            ],
            "original_or_copy": "Original receipt",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://dgip.gov.pk/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "photo_rules": {
          "captured_live": true,
          "details": "Photo captured digitally at the counter; applicant should wear dark clothing with face and forehead unobstructed."
        },
        "fees": {
          "currency": "PKR",
          "normal_36_pages_5_year": 4500,
          "urgent_36_pages_5_year": 7500,
          "fast_track_36_pages_5_year": 12500,
          "normal_36_pages_10_year": 6700,
          "urgent_36_pages_10_year": 11200
        },
        "processing_times": {
          "normal": "10 to 15 working days",
          "urgent": "4 to 5 working days",
          "fast_track": "2 working days"
        },
        "sources": [
          {
            "url": "https://dgip.gov.pk/passport/ordinary-passport.php",
            "publisher": "DGIP Pakistan",
            "page_title": "Ordinary Passport Services",
            "checked_at": "2026-10-18"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Eligible for renewal within 7 months of expiry or anytime after expiry; can be done online at onlinemrp.dgip.gov.pk if biometric data is active.",
            "source_url": "https://onlinemrp.dgip.gov.pk/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "steps": [
          {
            "step": "Pay fee via online e-Services or NBP.",
            "source_url": "https://dgip.gov.pk/"
          },
          {
            "step": "Bring original old passport and valid CNIC to passport office.",
            "source_url": "https://dgip.gov.pk/"
          }
        ],
        "documents": [
          {
            "document_name": "Previous Passport & CNIC",
            "requiredness": "required",
            "conditions": "Original booklet required for cancellation.",
            "accepted_alternatives": [],
            "original_or_copy": "Original + photocopies",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://dgip.gov.pk/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "sources": [
          {
            "url": "https://dgip.gov.pk/",
            "publisher": "DGIP Pakistan",
            "page_title": "Passport Renewal",
            "checked_at": "2026-10-18"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://dgip.gov.pk/",
        "publisher": "Directorate General of Immigration & Passports, Pakistan",
        "page_title": "Official Passport Services",
        "checked_at": "2026-10-18"
      }
    ]
  },
  "BD": {
    "country_code": "BD",
    "country_name": "Bangladesh",
    "authority_name": "Department of Immigration and Passports · Ministry of Home Affairs",
    "official_portal_url": "https://www.epassport.gov.bd/landing",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-18",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-01-01",
    "jurisdictions": [
      {
        "name": "Domestic (Regional Passport Offices)",
        "application_channel": "domestic",
        "source_url": "https://www.epassport.gov.bd/"
      },
      {
        "name": "Overseas (Bangladesh Missions Abroad)",
        "application_channel": "consular",
        "source_url": "https://www.epassport.gov.bd/"
      }
    ],
    "age_bands": [
      {
        "label": "Child (under 6 - 5-year validity only, no fingerprint)",
        "min_age": 0,
        "max_age": 5,
        "age_basis_source": "https://www.epassport.gov.bd/"
      },
      {
        "label": "Minor (6 to 17)",
        "min_age": 6,
        "max_age": 17,
        "age_basis_source": "https://www.epassport.gov.bd/"
      },
      {
        "label": "Adult (18+)",
        "min_age": 18,
        "max_age": null,
        "age_basis_source": "https://www.epassport.gov.bd/"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must be a citizen of Bangladesh holding a National ID Card (NID) or 17-digit online Birth Registration Certificate (BRC).",
            "source_url": "https://www.epassport.gov.bd/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "steps": [
          {
            "step": "Complete online application form at epassport.gov.bd.",
            "source_url": "https://www.epassport.gov.bd/"
          },
          {
            "step": "Pay passport fee via bank / online payment gateway (A-Challan / bKash / cards).",
            "source_url": "https://www.epassport.gov.bd/"
          },
          {
            "step": "Book appointment slot at designated Regional Passport Office (RPO).",
            "source_url": "https://www.epassport.gov.bd/"
          },
          {
            "step": "Attend biometric appointment for photo, 10-finger scan and iris scan.",
            "source_url": "https://www.epassport.gov.bd/"
          },
          {
            "step": "Police verification initiated automatically by Special Branch.",
            "source_url": "https://www.epassport.gov.bd/"
          }
        ],
        "documents": [
          {
            "document_name": "Smart NID Card or National ID Card (or 17-digit English Birth Certificate)",
            "requiredness": "required",
            "conditions": "Adults 18+ must use NID; applicants under 18 must use digital 17-digit Birth Registration Certificate (BRC) verified on bdris.gov.bd.",
            "accepted_alternatives": [
              "Smart NID",
              "Plastic/Paper NID with online copy",
              "17-digit English Birth Registration Certificate"
            ],
            "original_or_copy": "Original + printed photocopy",
            "translation_or_legalisation": "Bengali / English",
            "source_url": "https://www.epassport.gov.bd/",
            "last_reviewed": "2026-10-18"
          },
          {
            "document_name": "Application Summary and Payment Slip",
            "requiredness": "required",
            "conditions": "Printed from e-Passport portal with barcode.",
            "accepted_alternatives": [],
            "original_or_copy": "Printed original",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://www.epassport.gov.bd/",
            "last_reviewed": "2026-10-18"
          }
        ],
        "photo_rules": {
          "captured_live": true,
          "details": "Taken at the passport office; infants under 6 must bring 3R size lab print white background photo."
        },
        "fees": {
          "currency": "BDT",
          "regular_5_year_48_pages": 4025,
          "express_5_year_48_pages": 6325,
          "super_express_5_year": 8625,
          "regular_10_year_48_pages": 5750,
          "express_10_year_48_pages": 8050
        },
        "processing_times": {
          "regular": "15 to 21 working days",
          "express": "7 to 10 working days",
          "super_express": "2 working days"
        },
        "sources": [
          {
            "url": "https://www.epassport.gov.bd/landing",
            "publisher": "Department of Immigration and Passports, Bangladesh",
            "page_title": "e-Passport Portal",
            "checked_at": "2026-10-18"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://www.epassport.gov.bd/landing",
        "publisher": "Department of Immigration and Passports, Bangladesh",
        "page_title": "Bangladesh e-Passport",
        "checked_at": "2026-10-18"
      }
    ]
  },
  "DE": {
    "country_code": "DE",
    "country_name": "Germany",
    "authority_name": "Auswärtiges Amt (Federal Foreign Office) & Bundesministerium des Innern und für Heimat (BMI)",
    "official_portal_url": "https://www.auswaertiges-amt.de/en/visa-service/buergerservice/pass-und-personalausweis",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2024-01-01",
    "jurisdictions": [
      {
        "name": "Domestic Germany (Local Bürgeramt / Passbehörde)",
        "application_channel": "domestic",
        "source_url": "https://www.bmi.bund.de/DE/themen/moderne-verwaltung/ausweise-und-paesse/biometrischer-reisepass/biometrischer-reisepass-node.html"
      },
      {
        "name": "Overseas (German Embassies and General Consulates)",
        "application_channel": "consular",
        "source_url": "https://www.auswaertiges-amt.de/en/visa-service/buergerservice/pass-und-personalausweis"
      }
    ],
    "age_bands": [
      {
        "label": "Child / Minor (under 24 - 6-year validity)",
        "min_age": 0,
        "max_age": 23,
        "age_basis_source": "https://www.bmi.bund.de/"
      },
      {
        "label": "Adult (24 and older - 10-year validity)",
        "min_age": 24,
        "max_age": null,
        "age_basis_source": "https://www.bmi.bund.de/"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must possess German citizenship (by birth, descent, adoption, or naturalization under Staatsangehörigkeitsgesetz).",
            "source_url": "https://www.bmi.bund.de/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Personal appearance is mandatory for all applicants regardless of age.",
            "source_url": "https://www.auswaertiges-amt.de/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Book appointment at your local Bürgeramt (or German mission if resident abroad).",
            "source_url": "https://www.bmi.bund.de/"
          },
          {
            "step": "Submit completed application form along with civil registry certificates.",
            "source_url": "https://www.bmi.bund.de/"
          },
          {
            "step": "Provide biometric photo and give fingerprints (fingerprint capture applies from age 6).",
            "source_url": "https://www.bmi.bund.de/"
          },
          {
            "step": "Pay passport fee and collect passport when ready (or authorize representative with proxy power).",
            "source_url": "https://www.bmi.bund.de/"
          }
        ],
        "documents": [
          {
            "document_name": "Birth Certificate (Geburtsurkunde) or Family Register (Auszug aus dem Heiratseintrag)",
            "requiredness": "required",
            "conditions": "Original official German birth certificate or extract from the civil marriage register; international multilingual CIEC certificates or certified translations required if foreign.",
            "accepted_alternatives": [
              "German Geburtsurkunde",
              "International Multilingual Birth Certificate (CIEC)",
              "Certified translation of foreign birth certificate by sworn translator"
            ],
            "original_or_copy": "Original + 1 copy",
            "translation_or_legalisation": "Certified translation with Apostille/Legalisation if from outside EU",
            "source_url": "https://www.auswaertiges-amt.de/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Proof of German Citizenship (Staatsangehörigkeitsnachweis)",
            "requiredness": "required",
            "conditions": "Staatsangehörigkeitsausweis, naturalization certificate (Einbürgerungsurkunde), or valid/previous German identity document.",
            "accepted_alternatives": [
              "Staatsangehörigkeitsausweis",
              "Einbürgerungsurkunde",
              "Valid Personalausweis",
              "Previous German Reisepass"
            ],
            "original_or_copy": "Original",
            "translation_or_legalisation": "German official document",
            "source_url": "https://www.bmi.bund.de/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "De-registration Certificate (Abmeldebestätigung) - If applying abroad",
            "requiredness": "conditional",
            "conditions": "Required when applying at a German consular mission abroad to prove non-residence in Germany.",
            "accepted_alternatives": [
              "Abmeldebestätigung from last German residence",
              "Current proof of residence in host country"
            ],
            "original_or_copy": "Original",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://www.auswaertiges-amt.de/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "photo_rules": {
          "dimensions": "35 mm x 45 mm",
          "background": "Plain light grey or neutral background (not pure white)",
          "rules": "Neutral expression, mouth closed, face centered, following German Fotomustertafel standards"
        },
        "fees": {
          "currency": "EUR",
          "under_24_years": 37.5,
          "age_24_and_older": 70,
          "express_surcharge": 32,
          "frequent_traveler_48_pages_surcharge": 22
        },
        "processing_times": {
          "standard": "4 to 6 weeks (printed centrally by Bundesdruckerei in Berlin)",
          "express": "3 to 4 working days"
        },
        "sources": [
          {
            "url": "https://www.auswaertiges-amt.de/en/visa-service/buergerservice/pass-und-personalausweis",
            "publisher": "Auswärtiges Amt (Federal Foreign Office)",
            "page_title": "German Passport and ID Card Services",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Reisepass cannot be extended; an application for a new passport booklet must be filed upon expiry.",
            "source_url": "https://www.bmi.bund.de/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Present previous passport booklet for cancellation.",
            "source_url": "https://www.bmi.bund.de/"
          },
          {
            "step": "Submit updated biometric photo and pay fee.",
            "source_url": "https://www.bmi.bund.de/"
          }
        ],
        "documents": [
          {
            "document_name": "Previous German Passport (Bisheriger Reisepass)",
            "requiredness": "required",
            "conditions": "Submitted for invalidation; can be returned to applicant upon request.",
            "accepted_alternatives": [],
            "original_or_copy": "Original",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://www.bmi.bund.de/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.bmi.bund.de/",
            "publisher": "BMI Germany",
            "page_title": "Reisepass Renewal and Re-issue",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Note: Since Jan 1, 2024, the non-electronic Kinderreisepass has been abolished; children receive a standard electronic Reisepass valid for 6 years.",
            "source_url": "https://www.bmi.bund.de/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Both parents with joint legal custody (gemeinsames Sorgerecht) must sign consent and provide identity documents.",
            "source_url": "https://www.auswaertiges-amt.de/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Both parents and the child appear in person at the passport office.",
            "source_url": "https://www.bmi.bund.de/"
          },
          {
            "step": "Present child birth certificate and proof of custody.",
            "source_url": "https://www.bmi.bund.de/"
          }
        ],
        "documents": [
          {
            "document_name": "Proof of Custody & Both Parents' Passports",
            "requiredness": "required",
            "conditions": "If parents are separated or unmarried with joint custody, written consent and ID copy of absent parent required; if sole custody, court custody decree (Sorgerechtsbeschluss) or Negativbescheinigung from Jugendamt is required.",
            "accepted_alternatives": [
              "Sorgerechtsbeschluss",
              "Negativbescheinigung from Jugendamt",
              "Death certificate of deceased parent"
            ],
            "original_or_copy": "Original",
            "translation_or_legalisation": "German or certified translation",
            "source_url": "https://www.auswaertiges-amt.de/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.bmi.bund.de/",
            "publisher": "Federal Ministry of the Interior, Germany",
            "page_title": "Passport for Children and Minors",
            "checked_at": "2026-10-19"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://www.auswaertiges-amt.de/en/visa-service/buergerservice/pass-und-personalausweis",
        "publisher": "Auswärtiges Amt",
        "page_title": "Passports and ID Cards",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://www.bmi.bund.de/",
        "publisher": "Bundesministerium des Innern und für Heimat",
        "page_title": "Biometrischer Reisepass",
        "checked_at": "2026-10-19"
      }
    ]
  },
  "AE": {
    "country_code": "AE",
    "country_name": "United Arab Emirates",
    "authority_name": "Federal Authority for Identity, Citizenship, Customs and Port Security (ICP)",
    "official_portal_url": "https://icp.gov.ae/en/service/issue-passport/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2024-01-01",
    "jurisdictions": [
      {
        "name": "Inside UAE (ICP Smart Services & GDRFA Customer Happiness Centers)",
        "application_channel": "domestic",
        "source_url": "https://icp.gov.ae/en/service/issue-passport/"
      },
      {
        "name": "Abroad (UAE Embassies & Consulates via Ministry of Foreign Affairs MoFA)",
        "application_channel": "consular",
        "source_url": "https://www.mofa.gov.ae/en/Services/Forms/Passport-Services"
      }
    ],
    "age_bands": [
      {
        "label": "Minor / Young Citizen (under 21 - 5-year validity)",
        "min_age": 0,
        "max_age": 20,
        "age_basis_source": "https://icp.gov.ae/"
      },
      {
        "label": "Adult (21 and older - 10-year validity option)",
        "min_age": 21,
        "max_age": null,
        "age_basis_source": "https://icp.gov.ae/"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must be a UAE national holding full citizenship status and registered in the Family Book (Khulasat Al Qaid).",
            "source_url": "https://icp.gov.ae/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Log in to ICP smart channels (website or UAEICP app) using UAE PASS.",
            "source_url": "https://icp.gov.ae/"
          },
          {
            "step": "Select 'Issue Passport' service and fill in citizen details.",
            "source_url": "https://icp.gov.ae/"
          },
          {
            "step": "Upload high-resolution personal digital photo meeting ICAO standards.",
            "source_url": "https://icp.gov.ae/"
          },
          {
            "step": "Pay the issuance fee online via e-Dirham / card payment.",
            "source_url": "https://icp.gov.ae/"
          },
          {
            "step": "Receive passport via authorized express delivery (Emirates Post) or collect from ICP center.",
            "source_url": "https://icp.gov.ae/"
          }
        ],
        "documents": [
          {
            "document_name": "Original Family Book (Khulasat Al Qaid)",
            "requiredness": "required",
            "conditions": "Must include the citizen's record; for newborns, digital addition to the family book must be completed first.",
            "accepted_alternatives": [
              "Digital Family Book extract from ICP database"
            ],
            "original_or_copy": "Original / digital verification",
            "translation_or_legalisation": "Arabic official document",
            "source_url": "https://icp.gov.ae/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Valid Emirates Identity Card",
            "requiredness": "required",
            "conditions": "Physical or digital Emirates ID via UAE PASS.",
            "accepted_alternatives": [],
            "original_or_copy": "Digital card / Original",
            "translation_or_legalisation": "Official UAE ID",
            "source_url": "https://icp.gov.ae/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "photo_rules": {
          "dimensions": "High resolution digital photo, 4 x 6 cm",
          "background": "Pure white background",
          "attire": "UAE national dress (Kandura and Ghutra/Shemagh for men; Abaya/Sheyla for women) is customary and welcomed; face unobstructed"
        },
        "fees": {
          "currency": "AED",
          "standard_issuance_5_year": 50,
          "standard_issuance_10_year": 65,
          "express_surcharge": 50
        },
        "processing_times": {
          "standard": "48 hours",
          "urgent": "Same day (available at designated Customer Happiness Centers and Dubai International Airport Terminal 3)"
        },
        "sources": [
          {
            "url": "https://icp.gov.ae/en/service/issue-passport/",
            "publisher": "Federal Authority for Identity, Citizenship, Customs and Port Security",
            "page_title": "Issue Passport Service Card",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Citizens can renew their passport within 6 months before expiry or anytime after expiry.",
            "source_url": "https://icp.gov.ae/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Apply online via ICP portal or UAE PASS app for Renewal service.",
            "source_url": "https://icp.gov.ae/"
          },
          {
            "step": "Surrender previous expired passport upon receipt of new booklet.",
            "source_url": "https://icp.gov.ae/"
          }
        ],
        "documents": [
          {
            "document_name": "Previous Emirati Passport",
            "requiredness": "required",
            "conditions": "Must be submitted for cancellation.",
            "accepted_alternatives": [],
            "original_or_copy": "Original",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://icp.gov.ae/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://icp.gov.ae/",
            "publisher": "ICP UAE",
            "page_title": "Passport Renewal",
            "checked_at": "2026-10-19"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://icp.gov.ae/en/service/issue-passport/",
        "publisher": "Federal Authority for Identity, Citizenship, Customs and Port Security",
        "page_title": "ICP Passport Services",
        "checked_at": "2026-10-19"
      }
    ]
  },
  "PH": {
    "country_code": "PH",
    "country_name": "Philippines",
    "authority_name": "Department of Foreign Affairs (DFA) · Office of Consular Affairs",
    "official_portal_url": "https://passport.gov.ph/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2024-03-01",
    "jurisdictions": [
      {
        "name": "Domestic Philippines (DFA Consular Offices & Temporary Off-Site Passport Services TOPS)",
        "application_channel": "domestic",
        "source_url": "https://passport.gov.ph/"
      },
      {
        "name": "Overseas (Philippine Embassies and Consulates General via DFA FSP)",
        "application_channel": "consular",
        "source_url": "https://consular.dfa.gov.ph/"
      }
    ],
    "age_bands": [
      {
        "label": "Minor (under 18 - 5-year validity)",
        "min_age": 0,
        "max_age": 17,
        "age_basis_source": "https://passport.gov.ph/"
      },
      {
        "label": "Adult (18 and older - 10-year validity)",
        "min_age": 18,
        "max_age": null,
        "age_basis_source": "https://passport.gov.ph/"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must be a Filipino citizen by birth or naturalization under the Philippine Constitution and RA 8239.",
            "source_url": "https://passport.gov.ph/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Personal appearance at the DFA Consular Office is mandatory for all applicants.",
            "source_url": "https://passport.gov.ph/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Book online appointment at passport.gov.ph (Appointment is free of charge; pay processing fee only).",
            "source_url": "https://passport.gov.ph/"
          },
          {
            "step": "Pay the processing fee through authorized DFA payment channels.",
            "source_url": "https://passport.gov.ph/"
          },
          {
            "step": "Appear in person on the appointed date with printed application form and original PSA documents.",
            "source_url": "https://passport.gov.ph/"
          },
          {
            "step": "Complete biometric capture (photo, fingerprints, iris scan, and signature).",
            "source_url": "https://passport.gov.ph/"
          },
          {
            "step": "Claim passport at the consular office or opt for courier delivery.",
            "source_url": "https://passport.gov.ph/"
          }
        ],
        "documents": [
          {
            "document_name": "Original Philippine Statistics Authority (PSA) Birth Certificate on Security Paper (SECPA)",
            "requiredness": "required",
            "conditions": "Must be clear and readable. If PSA birth certificate is blurred or unreadable, a certified true copy (CTC) transcribed from the Local Civil Registrar (LCR) is required.",
            "accepted_alternatives": [
              "PSA Birth Certificate on Security Paper",
              "LCR Transcribed Copy accompanied by PSA endorsement"
            ],
            "original_or_copy": "Original + 1 photocopy",
            "translation_or_legalisation": "English or Filipino",
            "source_url": "https://passport.gov.ph/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Valid Government-Issued Photo Identification",
            "requiredness": "required",
            "conditions": "Accepted primary IDs: PhilSys National ID, SSS/GSIS/UMID, Driver's License, PRC ID, OWWA E-Card, Voter's ID.",
            "accepted_alternatives": [
              "PhilSys National ID",
              "UMID Card",
              "Driver's License",
              "PRC ID",
              "Postal ID (Digital PVC)"
            ],
            "original_or_copy": "Original + 1 photocopy",
            "translation_or_legalisation": "Philippine government-issued",
            "source_url": "https://passport.gov.ph/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "PSA Marriage Certificate (For married females using husband's surname)",
            "requiredness": "conditional",
            "conditions": "Required if a married woman chooses to adopt her husband's surname under Philippine Civil Code.",
            "accepted_alternatives": [
              "PSA Marriage Certificate on Security Paper"
            ],
            "original_or_copy": "Original + 1 photocopy",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://passport.gov.ph/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "photo_rules": {
          "captured_live": true,
          "details": "Photo captured digitally at the consular counter; eyeglasses, contact lenses, facial piercings, and excessive makeup are prohibited."
        },
        "fees": {
          "currency": "PHP",
          "regular_processing": 950,
          "expedited_processing": 1200,
          "lost_passport_penalty_fee": 350
        },
        "processing_times": {
          "regular": "12 working days (within Metro Manila)",
          "expedited": "6 working days (within Metro Manila)"
        },
        "sources": [
          {
            "url": "https://passport.gov.ph/",
            "publisher": "Department of Foreign Affairs, Republic of the Philippines",
            "page_title": "Official Passport Appointment System",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Holder of valid or expired standard ePassport (with electronic chip logo).",
            "source_url": "https://passport.gov.ph/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Schedule appointment on passport.gov.ph.",
            "source_url": "https://passport.gov.ph/"
          },
          {
            "step": "Bring current ePassport and valid ID to appointment.",
            "source_url": "https://passport.gov.ph/"
          }
        ],
        "documents": [
          {
            "document_name": "Current ePassport Booklet",
            "requiredness": "required",
            "conditions": "Original booklet + photocopy of biographical page.",
            "accepted_alternatives": [],
            "original_or_copy": "Original + photocopy",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://passport.gov.ph/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://passport.gov.ph/",
            "publisher": "DFA Consular Affairs",
            "page_title": "Adult ePassport Renewal",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Minors under 18 must be accompanied by the mother, or father if married, or an authorized legal guardian.",
            "source_url": "https://passport.gov.ph/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Accompanied personal appearance of child and parent.",
            "source_url": "https://passport.gov.ph/"
          }
        ],
        "documents": [
          {
            "document_name": "PSA Birth Certificate & Valid ID of Accompanying Parent",
            "requiredness": "required",
            "conditions": "If child is illegitimate, mother must appear or execute Special Power of Attorney (SPA).",
            "accepted_alternatives": [],
            "original_or_copy": "Original + copies",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://passport.gov.ph/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://passport.gov.ph/",
            "publisher": "DFA Consular Affairs",
            "page_title": "Minor Applicants",
            "checked_at": "2026-10-19"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://passport.gov.ph/",
        "publisher": "Department of Foreign Affairs, Philippines",
        "page_title": "Philippine Passport Information",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://consular.dfa.gov.ph/",
        "publisher": "DFA Consular Affairs",
        "page_title": "Consular Services Guidelines",
        "checked_at": "2026-10-19"
      }
    ]
  },
  "FR": {
    "country_code": "FR",
    "country_name": "France",
    "authority_name": "Ministère de l'Intérieur · Agence Nationale des Titres Sécurisés (ANTS)",
    "official_portal_url": "https://passeport.ants.gouv.fr/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2024-01-01",
    "jurisdictions": [
      {
        "name": "Inside France (Any equipped Mairie town hall)",
        "application_channel": "domestic",
        "source_url": "https://passeport.ants.gouv.fr/"
      },
      {
        "name": "Abroad (Consulat général ou section consulaire de France)",
        "application_channel": "consular",
        "source_url": "https://www.service-public.fr/particuliers/vosdroits/F21247"
      }
    ],
    "age_bands": [
      {
        "label": "Mineur (under 18 - 5-year validity)",
        "min_age": 0,
        "max_age": 17,
        "age_basis_source": "https://www.service-public.fr/particuliers/vosdroits/N360"
      },
      {
        "label": "Majeur (18 and older - 10-year validity)",
        "min_age": 18,
        "max_age": null,
        "age_basis_source": "https://www.service-public.fr/particuliers/vosdroits/N360"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must prove French nationality (National Identity Card, birth certificate showing French parentage, or Certificat de Nationalité Française CNF).",
            "source_url": "https://www.service-public.fr/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Personal appearance is required at any Mairie equipped with biometric station; child must appear with parent.",
            "source_url": "https://www.service-public.fr/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Complete online pre-application (pré-demande) on passeport.ants.gouv.fr.",
            "source_url": "https://passeport.ants.gouv.fr/"
          },
          {
            "step": "Purchase fiscal stamp (timbre fiscal) online.",
            "source_url": "https://timbres.impots.gouv.fr/"
          },
          {
            "step": "Book in-person appointment at an equipped Mairie or Consulate.",
            "source_url": "https://passeport.ants.gouv.fr/"
          },
          {
            "step": "Submit original supporting documents, pay stamp, and record fingerprints (for applicants aged 12+).",
            "source_url": "https://www.service-public.fr/"
          },
          {
            "step": "Collect passport in person within 3 months of SMS receipt.",
            "source_url": "https://www.service-public.fr/"
          }
        ],
        "documents": [
          {
            "document_name": "French National Identity Card (CNI) or Birth Certificate (Acte de naissance)",
            "requiredness": "required",
            "conditions": "Valid CNI proves identity and nationality. If no valid CNI, full birth certificate (acte de naissance copie intégrale) issued within last 3 months is required if birthplace not connected to COMEDEC.",
            "accepted_alternatives": [
              "Valid Carte Nationale d'Identité",
              "Acte de naissance copie intégrale (less than 3 months old)",
              "Certificat de Nationalité Française (CNF)"
            ],
            "original_or_copy": "Original",
            "translation_or_legalisation": "French official document",
            "source_url": "https://www.service-public.fr/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Proof of Address (Justificatif de domicile)",
            "requiredness": "required",
            "conditions": "Less than 1 year old (utility bill, tax notice, rent receipt).",
            "accepted_alternatives": [
              "Facture d'électricité / gaz / eau",
              "Avis d'imposition",
              "Quittance de loyer non manuscrite"
            ],
            "original_or_copy": "Original + copy",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://www.service-public.fr/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Biometric Passport Photo (35 x 45 mm)",
            "requiredness": "required",
            "conditions": "Taken within last 6 months; background must be light grey or light blue; PURE WHITE BACKGROUND IS STRICTLY REJECTED in France.",
            "accepted_alternatives": [
              "E-photo code with digital signature from approved booth"
            ],
            "original_or_copy": "Original physical photo or e-photo code",
            "translation_or_legalisation": "Conforming to French ISO/IEC 19794-5 standards",
            "source_url": "https://www.service-public.fr/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "photo_rules": {
          "dimensions": "35 mm wide x 45 mm high",
          "background": "Light grey or light blue; WHITE BACKGROUND IS STRICTLY FORBIDDEN IN FRANCE",
          "rules": "Neutral expression, mouth closed, no smiling, eyes open and looking at lens, hair away from face"
        },
        "fees": {
          "currency": "EUR",
          "adult_majeur": 86,
          "minor_15_to_17": 42,
          "minor_under_15": 17
        },
        "processing_times": {
          "standard": "2 to 6 weeks depending on Mairie and seasonal demand"
        },
        "sources": [
          {
            "url": "https://passeport.ants.gouv.fr/",
            "publisher": "Agence Nationale des Titres Sécurisés (ANTS)",
            "page_title": "Démarches Passeport",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Can apply before expiry or when booklet is full.",
            "source_url": "https://www.service-public.fr/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Complete pre-application on ANTS.",
            "source_url": "https://passeport.ants.gouv.fr/"
          },
          {
            "step": "Present old passport and new photo at Mairie.",
            "source_url": "https://passeport.ants.gouv.fr/"
          }
        ],
        "documents": [
          {
            "document_name": "Previous French Passport (Ancien passeport)",
            "requiredness": "required",
            "conditions": "Must be surrendered upon collection of new passport.",
            "accepted_alternatives": [],
            "original_or_copy": "Original",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://www.service-public.fr/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.service-public.fr/particuliers/vosdroits/F21091",
            "publisher": "Service-Public.fr",
            "page_title": "Renouvellement de passeport",
            "checked_at": "2026-10-19"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://passeport.ants.gouv.fr/",
        "publisher": "Ministère de l'Intérieur, ANTS",
        "page_title": "Site Officiel Passeport ANTS",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://www.service-public.fr/particuliers/vosdroits/N360",
        "publisher": "Service-Public.fr",
        "page_title": "Passeport d'un citoyen français",
        "checked_at": "2026-10-19"
      }
    ]
  },
  "SA": {
    "country_code": "SA",
    "country_name": "Saudi Arabia",
    "authority_name": "General Directorate of Passports (Al-Jawazat) · Ministry of Interior",
    "official_portal_url": "https://www.absher.sa/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2024-01-01",
    "jurisdictions": [
      {
        "name": "Inside Kingdom of Saudi Arabia (Absher Platform & Al-Jawazat Branches)",
        "application_channel": "domestic",
        "source_url": "https://www.absher.sa/"
      },
      {
        "name": "Abroad (Saudi Embassies & Royal Consulates via MOFA Saudi Arabia)",
        "application_channel": "consular",
        "source_url": "https://www.mofa.gov.sa/"
      }
    ],
    "age_bands": [
      {
        "label": "Minor / Young Citizen (under 20 - 5-year validity only)",
        "min_age": 0,
        "max_age": 19,
        "age_basis_source": "https://www.absher.sa/"
      },
      {
        "label": "Adult (20 and older - 5 or 10-year validity option)",
        "min_age": 20,
        "max_age": null,
        "age_basis_source": "https://www.absher.sa/"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must be a Saudi citizen with a valid National Identity Card (Hawiyya Wataniyya) and registered National Address.",
            "source_url": "https://www.absher.sa/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "All traffic fines must be paid through SADAD prior to application submission.",
            "source_url": "https://www.absher.sa/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Applicant must be present within the Kingdom at the time of application.",
            "source_url": "https://www.absher.sa/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Pay the passport issuance fee through SADAD electronic government payment system.",
            "source_url": "https://www.absher.sa/"
          },
          {
            "step": "Log into the Absher portal (absher.sa) using your national ID credentials.",
            "source_url": "https://www.absher.sa/"
          },
          {
            "step": "Navigate to My Services -> Passport Services -> Issue Saudi Passport.",
            "source_url": "https://www.absher.sa/"
          },
          {
            "step": "Confirm applicant details and select validity period (5 or 10 years for age 20+).",
            "source_url": "https://www.absher.sa/"
          },
          {
            "step": "Select delivery method via Saudi Post (SPL) to registered national address.",
            "source_url": "https://www.absher.sa/"
          }
        ],
        "documents": [
          {
            "document_name": "Valid Saudi National Identity Card (Hawiyya Wataniyya)",
            "requiredness": "required",
            "conditions": "Must be active on Absher. Minors aged 10-15 must have their biometric record registered with Civil Affairs (Al-Ahwal Al-Madaniyya).",
            "accepted_alternatives": [],
            "original_or_copy": "Digital record via Absher / Original ID",
            "translation_or_legalisation": "Arabic official document",
            "source_url": "https://www.absher.sa/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Registered National Address (Al-Unwan Al-Watani)",
            "requiredness": "required",
            "conditions": "Active registration in SPL Saudi Post address system.",
            "accepted_alternatives": [],
            "original_or_copy": "Digital confirmation",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://www.absher.sa/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "photo_rules": {
          "captured_live": false,
          "details": "Photo is retrieved automatically from the Civil Affairs (Al-Ahwal Al-Madaniyya) biometric database; must reflect current appearance with traditional national dress."
        },
        "fees": {
          "currency": "SAR",
          "validity_5_year": 300,
          "validity_10_year": 600
        },
        "processing_times": {
          "standard": "3 to 5 business days for delivery via SPL"
        },
        "sources": [
          {
            "url": "https://www.absher.sa/",
            "publisher": "Ministry of Interior, Kingdom of Saudi Arabia",
            "page_title": "Absher Electronic Passport Services",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Passport can be renewed if validity is less than 12 months remaining.",
            "source_url": "https://www.absher.sa/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Pay renewal fee via SADAD.",
            "source_url": "https://www.absher.sa/"
          },
          {
            "step": "Apply for 'Renew Saudi Passport' on Absher.",
            "source_url": "https://www.absher.sa/"
          },
          {
            "step": "Hand over old physical passport to SPL courier or Jawazat branch for cancellation.",
            "source_url": "https://www.absher.sa/"
          }
        ],
        "documents": [
          {
            "document_name": "Previous Saudi Passport",
            "requiredness": "required",
            "conditions": "Must be submitted for cancellation.",
            "accepted_alternatives": [],
            "original_or_copy": "Original",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://www.absher.sa/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.absher.sa/",
            "publisher": "Al-Jawazat",
            "page_title": "Renew Passport Service",
            "checked_at": "2026-10-19"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://www.absher.sa/",
        "publisher": "Ministry of Interior, Saudi Arabia",
        "page_title": "Al-Jawazat Passport Portal",
        "checked_at": "2026-10-19"
      }
    ]
  }
};
if (typeof module !== 'undefined' && module.exports) { module.exports = { RULE_PACKS }; }
