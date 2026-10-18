window.RULE_PACKS = {
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
  },
  "JP": {
    "country_code": "JP",
    "country_name": "Japan",
    "authority_name": "Ministry of Foreign Affairs (MOFA - 外務省) · Prefectural Passport Offices",
    "official_portal_url": "https://www.mofa.go.jp/ca/pss/page22e_000788.html",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-07-01",
    "jurisdictions": [
      {
        "name": "Domestic (Prefectural Passport Divisions / Mynaportal)",
        "application_channel": "domestic",
        "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html"
      },
      {
        "name": "Overseas Consular Services (Japanese Embassies & Consulates General)",
        "application_channel": "consular",
        "source_url": "https://www.mofa.go.jp/ca/pss/page22e_000788.html"
      }
    ],
    "age_bands": [
      {
        "label": "Child under 12",
        "min_age": 0,
        "max_age": 11,
        "age_basis_source": "https://www.mofa.go.jp/mofaj/toko/passport/index.html"
      },
      {
        "label": "Minor (12 to 17)",
        "min_age": 12,
        "max_age": 17,
        "age_basis_source": "https://www.mofa.go.jp/mofaj/toko/passport/index.html"
      },
      {
        "label": "Adult (18 and above)",
        "min_age": 18,
        "max_age": null,
        "age_basis_source": "https://www.mofa.go.jp/mofaj/toko/passport/index.html"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must possess Japanese nationality under the Nationality Act (国籍法).",
            "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Effective 1 July 2026, applicants aged 18 and over must apply for a 10-year passport (the adult 5-year passport option was discontinued for new adult applications). Minors under 18 receive a 5-year passport.",
            "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Obtain a certified Family Register Certificate (戸籍謄本 - Koseki Tohon) issued within the last 6 months from your registered municipal office.",
            "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html"
          },
          {
            "step": "Complete the General Passport Application Form (一般旅券発給申請書) — 10-year validity for adults aged 18+, or 5-year validity for minors under 18.",
            "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html"
          },
          {
            "step": "Submit application with 1 compliant photo (45mm x 35mm) and primary photo ID (My Number Card, Driver's License) at your registered Prefectural Passport Office.",
            "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html"
          },
          {
            "step": "Collect passport in person and pay national/prefectural revenue stamps (収入印紙 and 都道府県手数料).",
            "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html"
          }
        ],
        "documents": [
          {
            "document_name": "Certified Family Register (Koseki Tohon - 戸籍謄本)",
            "requiredness": "required",
            "conditions": "Must be issued within 6 months. Since March 2023, Koseki Shohon extract is no longer accepted for new passport issuance; full Koseki Tohon is mandatory.",
            "accepted_alternatives": [
              "Certified Copy of Family Register (Koseki Tohon)",
              "Electronic Koseki verification via Mynaportal (where supported)"
            ],
            "original_or_copy": "Original certificate issued within 6 months",
            "translation_or_legalisation": "Original Japanese municipal document",
            "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Primary Photographic Identity Verification Document",
            "requiredness": "required",
            "conditions": "Single document accepted: Japanese My Number Card, Driver's License, or Basic Resident Register Card with photo. If not available, two secondary IDs (Health Insurance Card + Pension Book/Student ID) are required.",
            "accepted_alternatives": [
              "My Number Card (Individual Number Card)",
              "Japanese Driver's License",
              "National Health Insurance Card + Pension Handbook"
            ],
            "original_or_copy": "Original document",
            "translation_or_legalisation": "Official Japanese statutory document",
            "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html",
            "last_reviewed": "2026-10-19"
          }
        ],
        "photo_rules": {
          "dimensions": "45mm x 35mm (head height from chin to crown 32mm to 36mm)",
          "background": "Plain white, off-white, or light grey without patterns or shadows",
          "conditions": "Taken within 6 months, neutral expression, mouth closed, no tinted glasses or thick frames."
        },
        "fees": {
          "currency": "JPY",
          "effective_date": "2026-07-01",
          "statutory_reform_notice": "Effective 1 July 2026, domestic passport fees are differentiated by application channel (online vs counter), and the adult 5-year passport option was discontinued for applicants aged 18 and over under MOFA revision.",
          "domestic_fees": {
            "adult_18_and_over": {
              "validity_10_year": {
                "online": 8900,
                "counter": 9300
              },
              "adult_5_year_discontinued_date": "2026-07-01"
            },
            "minor_under_18": {
              "validity_5_year": {
                "online": 4400,
                "counter": 4800
              }
            }
          },
          "consular_overseas": {
            "currency_rule": "Overseas consular fees are determined in local host currency under MOFA consular regulations and must not be confused with domestic fees.",
            "guidance": "Applicants abroad must consult their local Japanese Embassy or Consulate-General portal for current local currency amounts and application guidelines."
          },
          "confirmation_required": false,
          "fee_records": [
            {
              "currency": "JPY",
              "amount": 8900,
              "applicant_category": "adult_18_and_over",
              "application_channel": "online",
              "validity_period": "10_years",
              "applicable_conditions": "Japanese nationals aged 18+ applying online via Mynaportal.",
              "official_source_url": "https://www.mofa.go.jp/mofaj/toko/passport/page22_003986.html",
              "date_checked": "2026-10-19",
              "effective_date": "2026-07-01",
              "verification_status": "verified"
            },
            {
              "currency": "JPY",
              "amount": 9300,
              "applicant_category": "adult_18_and_over",
              "application_channel": "counter",
              "validity_period": "10_years",
              "applicable_conditions": "Japanese nationals aged 18+ applying in person at prefectural passport counter.",
              "official_source_url": "https://www.mofa.go.jp/mofaj/toko/passport/page22_003986.html",
              "date_checked": "2026-10-19",
              "effective_date": "2026-07-01",
              "verification_status": "verified"
            },
            {
              "currency": "JPY",
              "amount": 4400,
              "applicant_category": "minor_under_18",
              "application_channel": "online",
              "validity_period": "5_years",
              "applicable_conditions": "Minors under 18 applying online via Mynaportal with statutory guardian signature.",
              "official_source_url": "https://www.mofa.go.jp/mofaj/ca/pss/pagew_000001_02493.html",
              "date_checked": "2026-10-19",
              "effective_date": "2026-07-01",
              "verification_status": "verified"
            },
            {
              "currency": "JPY",
              "amount": 4800,
              "applicant_category": "minor_under_18",
              "application_channel": "counter",
              "validity_period": "5_years",
              "applicable_conditions": "Minors under 18 applying in person at prefectural passport counter with statutory guardian signature.",
              "official_source_url": "https://www.mofa.go.jp/mofaj/ca/pss/pagew_000001_02493.html",
              "date_checked": "2026-10-19",
              "effective_date": "2026-07-01",
              "verification_status": "verified"
            }
          ]
        },
        "processing_times": {
          "domestic_standard": "6 to 8 business days (excluding weekends and public holidays)",
          "consular_overseas": "1 to 2 weeks depending on diplomatic mission"
        },
        "sources": [
          {
            "url": "https://www.mofa.go.jp/mofaj/toko/passport/page22_003986.html",
            "publisher": "Ministry of Foreign Affairs of Japan (MOFA)",
            "page_title": "Passport Fee Revision Guidance (Domestic Online & Counter)",
            "checked_at": "2026-10-19"
          },
          {
            "url": "https://www.mofa.go.jp/mofaj/ca/pss/pagew_000001_02493.html",
            "publisher": "Ministry of Foreign Affairs of Japan (MOFA)",
            "page_title": "Notice Regarding Passport Issuance Fees (Post-July 2026)",
            "checked_at": "2026-10-19"
          },
          {
            "url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html",
            "publisher": "Ministry of Foreign Affairs (Domestic Consular Services)",
            "page_title": "Passport Issuance and Renewal Guidance",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Available when remaining validity is less than 1 year, visa pages are exhausted, or the booklet is physically damaged.",
            "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "If no change has occurred in name or Honseki prefecture, Koseki Tohon submission is waived; simply surrender the current valid passport.",
            "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Submit renewal application in person at prefectural office or online via Mynaportal app (requires My Number Card).",
            "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html"
          },
          {
            "step": "Physically surrender current passport booklet at pickup for cancellation (hole-punching).",
            "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html"
          }
        ],
        "documents": [
          {
            "document_name": "Current Valid Japanese Passport",
            "requiredness": "required",
            "conditions": "Must be surrendered for physical cancellation upon receipt of new passport.",
            "accepted_alternatives": [],
            "original_or_copy": "Original booklet",
            "translation_or_legalisation": "Original Japanese passport",
            "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html",
            "publisher": "Ministry of Foreign Affairs of Japan",
            "page_title": "Passport Renewal Procedures",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Applicants under 18 require the legal representative signature (法定代理人署名) of parent with parental authority (親権者).",
            "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Parent or guardian signs Section 2 of application form; submit Koseki Tohon verifying parentage.",
            "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html"
          }
        ],
        "documents": [
          {
            "document_name": "Koseki Tohon proving parental relationship",
            "requiredness": "required",
            "conditions": "Issued within 6 months.",
            "accepted_alternatives": [],
            "original_or_copy": "Original",
            "translation_or_legalisation": "Japanese municipal civil record",
            "source_url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html",
            "publisher": "Ministry of Foreign Affairs of Japan",
            "page_title": "Minors Passport Guidelines",
            "checked_at": "2026-10-19"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://www.mofa.go.jp/mofaj/toko/passport/page22_003986.html",
        "publisher": "Ministry of Foreign Affairs of Japan (MOFA)",
        "page_title": "Passport Fee Revision Guidance (Domestic Online & Counter)",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://www.mofa.go.jp/mofaj/ca/pss/pagew_000001_02493.html",
        "publisher": "Ministry of Foreign Affairs of Japan (MOFA)",
        "page_title": "Notice Regarding Passport Issuance Fees (Post-July 2026)",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://www.mofa.go.jp/mofaj/toko/passport/index.html",
        "publisher": "Ministry of Foreign Affairs (Domestic Consular Services)",
        "page_title": "Passport Issuance and Renewal Guidance",
        "checked_at": "2026-10-19"
      }
    ]
  },
  "MX": {
    "country_code": "MX",
    "country_name": "Mexico",
    "authority_name": "Secretaría de Relaciones Exteriores (SRE - Ministry of Foreign Affairs)",
    "official_portal_url": "https://www.gob.mx/pasaporte",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-01-01",
    "jurisdictions": [
      {
        "name": "Domestic (SRE Delegations & Liaison Offices in Mexico)",
        "application_channel": "domestic",
        "source_url": "https://citas.sre.gob.mx/"
      },
      {
        "name": "Consular Network (Mexican Embassies & Consulates via MiConsulado)",
        "application_channel": "consular",
        "source_url": "https://miconsulado.sre.gob.mx/"
      }
    ],
    "age_bands": [
      {
        "label": "Infant (under 3)",
        "min_age": 0,
        "max_age": 2,
        "age_basis_source": "https://www.gob.mx/pasaporte"
      },
      {
        "label": "Minor (3 to 17)",
        "min_age": 3,
        "max_age": 17,
        "age_basis_source": "https://www.gob.mx/pasaporte"
      },
      {
        "label": "Adult (18 and above)",
        "min_age": 18,
        "max_age": null,
        "age_basis_source": "https://www.gob.mx/pasaporte"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must prove Mexican nationality by birth or naturalization under Mexican law.",
            "source_url": "https://www.gob.mx/pasaporte",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "One-year passport validity is issued exclusively to children under three years of age to accommodate rapid biometric changes. It is not an emergency appointment qualification.",
            "source_url": "https://www.gob.mx/pasaporte",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Applicants aged 3 to 17 may receive 3-year or 6-year passports. Adults aged 18+ may select 3-year, 6-year, or 10-year validity.",
            "source_url": "https://www.gob.mx/pasaporte",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "For acute emergencies abroad (loss, theft, destruction, or urgent unplanned travel), an Emergency Type E passport with limited validity may be requested subject to consular assessment and supporting documentation.",
            "source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/consular-menu/pasaportes",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Schedule mandatory appointment online via citas.sre.gob.mx or official WhatsApp service.",
            "source_url": "https://citas.sre.gob.mx/"
          },
          {
            "step": "Pay passport fee at an authorized bank branch using official SRE payment slip (pago de derechos).",
            "source_url": "https://www.gob.mx/pasaporte"
          },
          {
            "step": "Attend appointment at SRE office with certified Birth Certificate, official photo ID, and payment proof.",
            "source_url": "https://www.gob.mx/pasaporte"
          },
          {
            "step": "Undergo live biometrics capture (photograph, fingerprints, iris scan) and receive passport the same day or within designated window.",
            "source_url": "https://www.gob.mx/pasaporte"
          }
        ],
        "documents": [
          {
            "document_name": "Certified Copy of Mexican Birth Certificate (Copia certificada del acta de nacimiento)",
            "requiredness": "required",
            "conditions": "Issued by Mexican Civil Registry (Registro Civil) or digital certified copy printed on plain paper via gob.mx/actanacimiento. Must be verifiable in national civil registry database.",
            "accepted_alternatives": [
              "Certified Birth Certificate from Registro Civil",
              "Certificate of Mexican Nationality",
              "Letter of Naturalization"
            ],
            "original_or_copy": "Original certified copy",
            "translation_or_legalisation": "Mexican statutory record",
            "source_url": "https://www.gob.mx/pasaporte",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Official Photo Identity (Identificación Oficial)",
            "requiredness": "required",
            "conditions": "Must be valid and unexpired.",
            "accepted_alternatives": [
              "INE / IFE Voter Card (Credencial para votar)",
              "Professional License (Cédula Profesional)",
              "National Military Service Card (Cartilla Militar liberada)",
              "INAPAM Senior Citizen Card"
            ],
            "original_or_copy": "Original + 1 photocopy",
            "translation_or_legalisation": "Mexican statutory identity card",
            "source_url": "https://www.gob.mx/pasaporte",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Bank Proof of Payment (Comprobante de pago de derechos)",
            "requiredness": "required",
            "conditions": "Original bank receipt with cashier stamp and digital transaction code.",
            "accepted_alternatives": [],
            "original_or_copy": "Original bank receipt",
            "translation_or_legalisation": "Mexican banking voucher",
            "source_url": "https://www.gob.mx/pasaporte",
            "last_reviewed": "2026-10-19"
          }
        ],
        "photo_rules": {
          "captured_live": true,
          "notes": "Photographs are captured live at the SRE Delegation at no additional cost. No physical photos required unless specific medical/consular exception applies."
        },
        "fees": {
          "currency": "MXN",
          "fiscal_year": 2026,
          "statutory_source": "Ley Federal de Derechos 2026 / Secretaría de Relaciones Exteriores (SRE)",
          "standard_domestic_mxn": {
            "validity_1_year": 920,
            "validity_3_year": 1795,
            "validity_6_year": 2440,
            "validity_10_year": 4280
          },
          "discounted_domestic_mxn": {
            "validity_1_year": 460,
            "validity_3_year": 900,
            "validity_6_year": 1220,
            "validity_10_year": 2140
          },
          "eligibility_conditions": {
            "validity_1_year": "The 1-year passport is issued exclusively to children under three years of age due to rapid developmental and biometric changes. It is not an emergency appointment document.",
            "discount_50_percent": "Subject to documented eligibility for adults aged 60+, persons with certified disabilities, and agricultural workers under the Mexico-Canada SAWP programme.",
            "agricultural_worker_restriction": "Temporary agricultural workers under the Mexico-Canada SAWP programme are NOT eligible for the discount on the 10-year passport (validity restricted to 3 or 6 years).",
            "emergency_appointments": "Emergency non-scheduled appointments at Mexican consulates abroad (citas de emergencia) for standard biometric passports are subject to consular approval based on documented humanitarian, medical, academic, or employment urgency. Under Article 20 of the Ley Federal de Derechos, emergency consular processing incurs a statutory rounded surcharge (30%), added to the standard fee for the applicant eligible validity (1, 3, 6, or 10 years). Separately, in verified circumstances of loss, theft, destruction, acute unscheduled travel, or technical downtime where a standard biometric passport cannot be produced in time, an Emergency Type E Passport (Pasaporte de Emergencia Tipo E) with limited validity (up to 1 year) may be issued upon consular assessment under embassy-specific protocols (e.g. SRE Embamex Polonia). An emergency appointment for a standard passport does not automatically restrict or qualify an applicant for a 1-year document."
          },
          "consular_overseas_usd": {
            "currency": "USD",
            "statutory_source": "Ley Federal de Derechos 2026 / SRE Secciones Consulares (Art. 20)",
            "standard": {
              "validity_1_year": 44,
              "validity_3_year": 101,
              "validity_6_year": 137,
              "validity_10_year": 209
            },
            "emergency_surcharge_schedule": {
              "validity_1_year": {
                "base_amount": 44,
                "emergency_surcharge": 13,
                "total_payable": 57
              },
              "validity_3_year": {
                "base_amount": 101,
                "emergency_surcharge": 30,
                "total_payable": 131
              },
              "validity_6_year": {
                "base_amount": 137,
                "emergency_surcharge": 41,
                "total_payable": 178
              },
              "validity_10_year": {
                "base_amount": 209,
                "emergency_surcharge": 63,
                "total_payable": 272
              }
            },
            "discounted_50_percent": {
              "validity_1_year": 22,
              "validity_3_year": 50.5,
              "validity_6_year": 68.5,
              "validity_10_year": 104.5
            },
            "discounted_emergency_schedule": {
              "validity_1_year": {
                "base_amount": 22,
                "emergency_surcharge": 6.5,
                "total_payable": 28.5
              },
              "validity_3_year": {
                "base_amount": 50.5,
                "emergency_surcharge": 15,
                "total_payable": 65.5
              },
              "validity_6_year": {
                "base_amount": 68.5,
                "emergency_surcharge": 20.5,
                "total_payable": 89
              },
              "validity_10_year": {
                "base_amount": 104.5,
                "emergency_surcharge": 31.5,
                "total_payable": 136
              }
            }
          },
          "confirmation_required": false,
          "fee_records": [
            {
              "currency": "MXN",
              "base_amount": 920,
              "emergency_surcharge": 0,
              "total_payable": 920,
              "applicant_category": "children_under_3_only",
              "application_channel": "domestic",
              "validity_period": "1_year",
              "discount_eligibility": "Standard rate for children under 3; 50% discount applies if certified disabled.",
              "applicable_conditions": "Issued exclusively to children under 3 years old under normal validity schedule.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified",
              "amount": 920
            },
            {
              "currency": "MXN",
              "base_amount": 1795,
              "emergency_surcharge": 0,
              "total_payable": 1795,
              "applicant_category": "general",
              "application_channel": "domestic",
              "validity_period": "3_years",
              "discount_eligibility": "50% discount available for seniors 60+, certified disabled, and Canada SAWP workers.",
              "applicable_conditions": "Standard domestic issuance for applicants aged 3 and older.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified",
              "amount": 1795
            },
            {
              "currency": "MXN",
              "base_amount": 2440,
              "emergency_surcharge": 0,
              "total_payable": 2440,
              "applicant_category": "general",
              "application_channel": "domestic",
              "validity_period": "6_years",
              "discount_eligibility": "50% discount available for seniors 60+, certified disabled, and Canada SAWP workers.",
              "applicable_conditions": "Standard domestic issuance for applicants aged 3 and older.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified",
              "amount": 2440
            },
            {
              "currency": "MXN",
              "base_amount": 4280,
              "emergency_surcharge": 0,
              "total_payable": 4280,
              "applicant_category": "adult_18_and_over",
              "application_channel": "domestic",
              "validity_period": "10_years",
              "discount_eligibility": "50% discount available for seniors 60+ and certified disabled (SAWP agricultural workers excluded).",
              "applicable_conditions": "Available exclusively to adult applicants aged 18 and older.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified",
              "amount": 4280
            },
            {
              "currency": "MXN",
              "base_amount": 460,
              "emergency_surcharge": 0,
              "total_payable": 460,
              "applicant_category": "discount_eligible_children_under_3",
              "application_channel": "domestic",
              "validity_period": "1_year",
              "discount_eligibility": "Certified disabled children under 3 years old.",
              "applicable_conditions": "Requires official disability certificate issued by competent Mexican public health authority.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified",
              "amount": 460
            },
            {
              "currency": "MXN",
              "base_amount": 900,
              "emergency_surcharge": 0,
              "total_payable": 900,
              "applicant_category": "discount_eligible",
              "application_channel": "domestic",
              "validity_period": "3_years",
              "discount_eligibility": "Seniors 60+, certified disabled, and Mexico-Canada SAWP agricultural workers.",
              "applicable_conditions": "Proof of age (INAPAM / Birth Cert), disability credential, or official SAWP employer constancy required.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified",
              "amount": 900
            },
            {
              "currency": "MXN",
              "base_amount": 1220,
              "emergency_surcharge": 0,
              "total_payable": 1220,
              "applicant_category": "discount_eligible",
              "application_channel": "domestic",
              "validity_period": "6_years",
              "discount_eligibility": "Seniors 60+, certified disabled, and Mexico-Canada SAWP agricultural workers.",
              "applicable_conditions": "Proof of age (INAPAM / Birth Cert), disability credential, or official SAWP employer constancy required.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified",
              "amount": 1220
            },
            {
              "currency": "MXN",
              "base_amount": 2140,
              "emergency_surcharge": 0,
              "total_payable": 2140,
              "applicant_category": "discount_eligible",
              "application_channel": "domestic",
              "validity_period": "10_years",
              "discount_eligibility": "Seniors 60+ and certified disabled only. SAWP agricultural workers are NOT eligible for 10-year discount.",
              "applicable_conditions": "Proof of age (INAPAM) or certified disability credential required.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified",
              "amount": 2140
            },
            {
              "currency": "USD",
              "base_amount": 44,
              "emergency_surcharge": 0,
              "total_payable": 44,
              "applicant_category": "children_under_3_only",
              "application_channel": "consular_overseas",
              "validity_period": "1_year",
              "discount_eligibility": "50% discount applies if child is certified disabled (payable: $22 USD).",
              "applicable_conditions": "Consular issuance abroad exclusively for children under 3.",
              "official_source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified",
              "amount": 44
            },
            {
              "currency": "USD",
              "base_amount": 101,
              "emergency_surcharge": 0,
              "total_payable": 101,
              "applicant_category": "general",
              "application_channel": "consular_overseas",
              "validity_period": "3_years",
              "discount_eligibility": "50% discount applies for seniors 60+ and certified disabled (payable: $50.50 USD).",
              "applicable_conditions": "Standard scheduled consular appointment abroad.",
              "official_source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified",
              "amount": 101
            },
            {
              "currency": "USD",
              "base_amount": 137,
              "emergency_surcharge": 0,
              "total_payable": 137,
              "applicant_category": "general",
              "application_channel": "consular_overseas",
              "validity_period": "6_years",
              "discount_eligibility": "50% discount applies for seniors 60+ and certified disabled (payable: $68.50 USD).",
              "applicable_conditions": "Standard scheduled consular appointment abroad.",
              "official_source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified",
              "amount": 137
            },
            {
              "currency": "USD",
              "base_amount": 209,
              "emergency_surcharge": 0,
              "total_payable": 209,
              "applicant_category": "adult_18_and_over",
              "application_channel": "consular_overseas",
              "validity_period": "10_years",
              "discount_eligibility": "50% discount applies for seniors 60+ and certified disabled (payable: $104.50 USD).",
              "applicable_conditions": "Standard scheduled consular appointment abroad for adults 18+.",
              "official_source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified",
              "amount": 209
            },
            {
              "currency": "USD",
              "base_amount": 44,
              "emergency_surcharge": 13,
              "total_payable": 57,
              "applicant_category": "children_under_3_only",
              "application_channel": "consular_emergency",
              "validity_period": "1_year",
              "discount_eligibility": "Discounted emergency payable: $28.50 USD ($22 base + $6.50 surcharge).",
              "applicable_conditions": "Approved emergency appointment outside scheduled slots; issued only to children under 3 years old.",
              "official_source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified",
              "amount": 57
            },
            {
              "currency": "USD",
              "base_amount": 101,
              "emergency_surcharge": 30,
              "total_payable": 131,
              "applicant_category": "general",
              "application_channel": "consular_emergency",
              "validity_period": "3_years",
              "discount_eligibility": "Discounted emergency payable: $65.50 USD ($50.50 base + $15 surcharge).",
              "applicable_conditions": "Approved emergency appointment outside scheduled slots for proven emergency.",
              "official_source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified",
              "amount": 131
            },
            {
              "currency": "USD",
              "base_amount": 137,
              "emergency_surcharge": 41,
              "total_payable": 178,
              "applicant_category": "general",
              "application_channel": "consular_emergency",
              "validity_period": "6_years",
              "discount_eligibility": "Discounted emergency payable: $89.00 USD ($68.50 base + $20.50 surcharge).",
              "applicable_conditions": "Approved emergency appointment outside scheduled slots for proven emergency.",
              "official_source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified",
              "amount": 178
            },
            {
              "currency": "USD",
              "base_amount": 209,
              "emergency_surcharge": 63,
              "total_payable": 272,
              "applicant_category": "adult_18_and_over",
              "application_channel": "consular_emergency",
              "validity_period": "10_years",
              "discount_eligibility": "Discounted emergency payable: $136.00 USD ($104.50 base + $31.50 surcharge).",
              "applicable_conditions": "Approved emergency appointment outside scheduled slots for adults 18+ with proven emergency.",
              "official_source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified",
              "amount": 272
            }
          ]
        },
        "processing_times": {
          "domestic_same_day": "2 to 4 hours post-appointment at major SRE delegations",
          "consular_overseas": "1 to 3 weeks depending on consular location"
        },
        "sources": [
          {
            "url": "https://www.gob.mx/pasaporte",
            "publisher": "Secretaría de Relaciones Exteriores (SRE)",
            "page_title": "Trámite de Pasaporte Mexicano - Costos 2026",
            "checked_at": "2026-10-19"
          },
          {
            "url": "https://www.gob.mx/sre/acciones-y-programas/costo-del-pasaporte",
            "publisher": "Secretaría de Relaciones Exteriores (SRE)",
            "page_title": "Costos del Pasaporte Mexicano 2026",
            "checked_at": "2026-10-19"
          },
          {
            "url": "https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025",
            "publisher": "Secretaría de Relaciones Exteriores (SRE) - Embamex / Secciones Consulares",
            "page_title": "Derechos Consulares y Tarifas con Recargo de Emergencia (Art. 20 LFD)",
            "checked_at": "2026-10-19"
          },
          {
            "url": "https://embamex.sre.gob.mx/polonia/index.php/es/consular-menu/pasaportes",
            "publisher": "Secretaría de Relaciones Exteriores (SRE) - Embajada de México en Polonia",
            "page_title": "Pasaportes Ordinarios y de Emergencia Tipo E",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Present previous Mexican passport booklet. If issued prior to 1995 or mutilated, birth certificate must be represented.",
            "source_url": "https://www.gob.mx/pasaporte",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Schedule appointment on SRE portal, pay rights at bank, and present existing passport booklet at delegation.",
            "source_url": "https://www.gob.mx/pasaporte"
          }
        ],
        "documents": [
          {
            "document_name": "Previous Mexican Passport Booklet",
            "requiredness": "required",
            "conditions": "Must be physically presented for cancellation.",
            "accepted_alternatives": [],
            "original_or_copy": "Original passport booklet + photocopy of data page",
            "translation_or_legalisation": "Mexican travel document",
            "source_url": "https://www.gob.mx/pasaporte",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.gob.mx/pasaporte",
            "publisher": "Secretaría de Relaciones Exteriores",
            "page_title": "Renovación de Pasaporte",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Both parents or legal guardians must appear in person and execute Form OP-7 (Permiso para la expedición de pasaporte a personas menores de edad).",
            "source_url": "https://www.gob.mx/pasaporte",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Both parents present valid official IDs, child's birth certificate, and sign Form OP-7 in front of SRE consular officer.",
            "source_url": "https://www.gob.mx/pasaporte"
          }
        ],
        "documents": [
          {
            "document_name": "Form OP-7 Parental Consent & Parents' Photo IDs",
            "requiredness": "required",
            "conditions": "If one parent resides in another state or abroad, Form OP-7/II must be executed at another SRE delegation or consulate prior to the appointment.",
            "accepted_alternatives": [
              "Certified judicial sentence granting sole parental rights (pérdida de la patria potestad)",
              "Certified death certificate of deceased parent"
            ],
            "original_or_copy": "Original documents",
            "translation_or_legalisation": "Mexican civil/judicial record",
            "source_url": "https://www.gob.mx/pasaporte",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.gob.mx/pasaporte",
            "publisher": "Secretaría de Relaciones Exteriores",
            "page_title": "Pasaporte para Menores de Edad",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "lost_stolen": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Mexican citizens whose passport has been lost, stolen, or destroyed must report the loss to local authorities and may apply for replacement at an SRE delegation (domestically) or Mexican embassy/consulate abroad.",
            "source_url": "https://www.gob.mx/pasaporte",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "For urgent travel abroad following loss, theft, or destruction, an Emergency Type E Passport (Pasaporte de Emergencia Tipo E) with limited validity may be requested subject to consular assessment and documentary proof of emergency.",
            "source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/consular-menu/pasaportes",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "File an official police report (acta de robo o extravío) with the local police or civil authority immediately upon discovering the loss.",
            "source_url": "https://www.gob.mx/pasaporte"
          },
          {
            "step": "Schedule an appointment at an SRE delegation (in Mexico) or Mexican embassy/consulate abroad. For acute overseas travel emergencies, contact the consular section via emergency consular email.",
            "source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/consular-menu/pasaportes"
          },
          {
            "step": "Present the police report, proof of Mexican nationality, government-issued photo ID, and evidence of emergency travel if requesting emergency Type E issuance.",
            "source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/consular-menu/pasaportes"
          }
        ],
        "documents": [
          {
            "document_name": "Official Police Report of Loss or Theft (Acta de Robo o Extravío)",
            "requiredness": "required",
            "conditions": "Report must be lodged with local police or civil authority specifying passport details and circumstances of loss.",
            "accepted_alternatives": [],
            "original_or_copy": "Original stamped police report",
            "translation_or_legalisation": "Translation if issued in local non-Spanish/English language",
            "source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/consular-menu/pasaportes",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Proof of Mexican Nationality",
            "requiredness": "required",
            "conditions": "Certified copy of Mexican birth certificate, naturalization letter, or prior passport record.",
            "accepted_alternatives": [
              "Copia certificada de acta de nacimiento",
              "Carta de naturalización"
            ],
            "original_or_copy": "Original or certified copy",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://www.gob.mx/pasaporte",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Official Photo Identification",
            "requiredness": "required",
            "conditions": "Valid official credential (INE voting card, professional license, military card, or foreign ID).",
            "accepted_alternatives": [
              "INE / IFE",
              "Cédula Profesional",
              "Cartilla Militar",
              "Matrícula Consular"
            ],
            "original_or_copy": "Original",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://www.gob.mx/pasaporte",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.gob.mx/pasaporte",
            "publisher": "Secretaría de Relaciones Exteriores (SRE)",
            "page_title": "Reposición de Pasaporte por Robo o Extravío",
            "checked_at": "2026-10-19"
          },
          {
            "url": "https://embamex.sre.gob.mx/polonia/index.php/es/consular-menu/pasaportes",
            "publisher": "Secretaría de Relaciones Exteriores (SRE) - Embajada de México en Polonia",
            "page_title": "Pasaporte de Emergencia Tipo E y Reposición por Robo o Extravío",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "emergency_passport": {
        "availability_status": "limited",
        "eligibility": [
          {
            "rule": "Issued abroad at Mexican embassies and consulates exclusively for proven force majeure emergencies: urgent unscheduled travel, medical emergency, legal/employment necessity, or following loss, theft, or destruction of an existing passport when the standard biometric booklet cannot be delivered in time.",
            "source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/consular-menu/pasaportes",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Emergency Type E passports carry limited statutory validity (typically up to 1 year) and are produced locally at authorized consular posts. Operational issuance capability and procedures vary by consular post.",
            "source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/consular-menu/pasaportes",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Contact your accredited Mexican consular section via emergency channel (email/phone) with documentary evidence justifying urgency (flight tickets, medical certificate, employer letter, or police report).",
            "source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/consular-menu/pasaportes"
          },
          {
            "step": "Obtain consular authorization and attend an emergency consular appointment with proof of Mexican nationality and official photo ID.",
            "source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/consular-menu/pasaportes"
          },
          {
            "step": "Pay applicable consular rights under Article 20 of the Ley Federal de Derechos.",
            "source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025"
          }
        ],
        "documents": [
          {
            "document_name": "Documentary Proof of Emergency / Travel Urgency",
            "requiredness": "required",
            "conditions": "Confirmed travel itinerary, medical report, hospital admission letter, or proof of acute humanitarian/legal necessity.",
            "accepted_alternatives": [
              "Confirmed flight itinerary",
              "Medical emergency certificate",
              "Court appearance subpoena"
            ],
            "original_or_copy": "Original",
            "translation_or_legalisation": "Spanish or English",
            "source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/consular-menu/pasaportes",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Proof of Mexican Nationality and Identity",
            "requiredness": "required",
            "conditions": "Birth certificate, prior passport copy, or consular matricula with government photo ID.",
            "accepted_alternatives": [],
            "original_or_copy": "Original or certified copy",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://embamex.sre.gob.mx/polonia/index.php/es/consular-menu/pasaportes",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://embamex.sre.gob.mx/polonia/index.php/es/consular-menu/pasaportes",
            "publisher": "Secretaría de Relaciones Exteriores (SRE) - Embajada de México en Polonia",
            "page_title": "Pasaportes de Emergencia Tipo E",
            "checked_at": "2026-10-19"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://www.gob.mx/pasaporte",
        "publisher": "Secretaría de Relaciones Exteriores (SRE)",
        "page_title": "Trámite de Pasaporte Mexicano - Costos 2026",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://www.gob.mx/sre/acciones-y-programas/costo-del-pasaporte",
        "publisher": "Secretaría de Relaciones Exteriores (SRE)",
        "page_title": "Costos del Pasaporte Mexicano 2026",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://embamex.sre.gob.mx/polonia/index.php/es/seccion-consular/20-seccion-consular/366-ley-federal-de-derechos-2025-oplaty-konsularne-2025",
        "publisher": "Secretaría de Relaciones Exteriores (SRE) - Embamex / Secciones Consulares",
        "page_title": "Derechos Consulares y Tarifas con Recargo de Emergencia (Art. 20 LFD)",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://embamex.sre.gob.mx/polonia/index.php/es/consular-menu/pasaportes",
        "publisher": "Secretaría de Relaciones Exteriores (SRE) - Embajada de México en Polonia",
        "page_title": "Pasaportes Ordinarios y de Emergencia Tipo E",
        "checked_at": "2026-10-19"
      }
    ]
  },
  "BR": {
    "country_code": "BR",
    "country_name": "Brazil",
    "authority_name": "Polícia Federal (DPF) · Ministério da Justiça e Segurança Pública",
    "official_portal_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-01-01",
    "jurisdictions": [
      {
        "name": "Domestic (Polícia Federal Passport Issuing Posts - PEP)",
        "application_channel": "domestic",
        "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte"
      },
      {
        "name": "Consular Services (Consulates-General of Brazil via e-consular)",
        "application_channel": "consular",
        "source_url": "https://www.gov.br/mre/pt-br"
      }
    ],
    "age_bands": [
      {
        "label": "Infant (0 to 1 year)",
        "min_age": 0,
        "max_age": 1,
        "age_basis_source": "https://www.gov.br/pf/pt-br/assuntos/passaporte"
      },
      {
        "label": "Child (2 to 4 years)",
        "min_age": 2,
        "max_age": 4,
        "age_basis_source": "https://www.gov.br/pf/pt-br/assuntos/passaporte"
      },
      {
        "label": "Minor (5 to 17)",
        "min_age": 5,
        "max_age": 17,
        "age_basis_source": "https://www.gov.br/pf/pt-br/assuntos/passaporte"
      },
      {
        "label": "Adult (18 and above)",
        "min_age": 18,
        "max_age": null,
        "age_basis_source": "https://www.gov.br/pf/pt-br/assuntos/passaporte"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must be a Brazilian citizen by birth or naturalization.",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Must be in regular standing with the Electoral Court (Justiça Eleitoral) and Military Service (for males 18-45).",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Fill out electronic application form on gov.br Polícia Federal passport portal.",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte"
          },
          {
            "step": "Generate GRU (Guia de Recolhimento da União) payment slip and pay fee via banking network or PIX.",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte"
          },
          {
            "step": "Book in-person appointment at nearest Polícia Federal station (Posto de Emissão de Passaportes).",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte"
          },
          {
            "step": "Attend appointment with original identity document, CPF, civil certificate, and have biometrics/photo captured live.",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte"
          },
          {
            "step": "Collect passport in person within 90 days (uncollected passports are canceled and destroyed).",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte"
          }
        ],
        "documents": [
          {
            "document_name": "Official Brazilian Identity Document (Documento de Identidade)",
            "requiredness": "required",
            "conditions": "Must be valid and unexpired. Digital identity documents (e-Título with photo, CNH Digital, RG Digital) are accepted via official government apps.",
            "accepted_alternatives": [
              "RG (Carteira de Identidade)",
              "CNH (Carteira Nacional de Habilitação)",
              "Carteira de Trabalho e Previdência Social (CTPS)",
              "Passaporte brasileiro anterior"
            ],
            "original_or_copy": "Original document",
            "translation_or_legalisation": "Brazilian official statutory ID",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "CPF (Cadastro de Pessoas Físicas)",
            "requiredness": "required",
            "conditions": "Must be registered and in regular standing with Receita Federal. If CPF number is printed on RG or CNH, separate card is not required.",
            "accepted_alternatives": [
              "CPF card or digital certificate",
              "RG/CNH containing CPF number"
            ],
            "original_or_copy": "Original or verified number",
            "translation_or_legalisation": "Federal revenue record",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Proof of Civil Status (Certidão de Nascimento ou Casamento)",
            "requiredness": "conditional",
            "conditions": "Mandatory if the applicant changed their name due to marriage, divorce, or court decision, or if identity document does not state place of birth.",
            "accepted_alternatives": [
              "Certidão de Nascimento (Birth Certificate)",
              "Certidão de Casamento com averbação (Marriage Certificate with divorce note)"
            ],
            "original_or_copy": "Original certified copy",
            "translation_or_legalisation": "Cartório civil registry document",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte",
            "last_reviewed": "2026-10-19"
          }
        ],
        "photo_rules": {
          "captured_live": true,
          "exception_for_infants": "Children under 3 years old may be required to bring 1 physical 5x7 cm colour photograph on plain white background if unable to hold pose for live capture."
        },
        "fees": {
          "currency": "BRL",
          "standard_fee": 257.25,
          "urgent_emergency_surcharge": 77.17,
          "total_urgent_fee": 334.42,
          "unpresented_previous_passport_penalty": 514.5
        },
        "processing_times": {
          "standard_business_days": "6 to 10 business days after in-person appointment",
          "urgent_hours": "24 business hours for proven humanitarian/work emergencies"
        },
        "sources": [
          {
            "url": "https://www.gov.br/pf/pt-br/assuntos/passaporte",
            "publisher": "Polícia Federal do Brasil",
            "page_title": "Obter Passaporte Ordinário",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Brazil issues a new passport rather than renewing. Previous valid passport must be physically presented for cancellation.",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "If previous valid passport is NOT presented without an official Police Report of theft (Boletim de Ocorrência), the issuance fee is doubled to R$ 514.50.",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Submit online form on gov.br, pay standard fee, and present current passport at PEP appointment.",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte"
          }
        ],
        "documents": [
          {
            "document_name": "Previous Brazilian Passport",
            "requiredness": "required",
            "conditions": "Must be surrendered for cancellation. If lost/stolen, Boletim de Ocorrência must be presented.",
            "accepted_alternatives": [
              "Boletim de Ocorrência (BO) from Civil Police"
            ],
            "original_or_copy": "Original booklet or BO",
            "translation_or_legalisation": "Brazilian official document",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.gov.br/pf/pt-br/assuntos/passaporte",
            "publisher": "Polícia Federal",
            "page_title": "Renovação e Substituição de Passaporte",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Both parents must provide authorization under CNJ Resolution 131. Minor must appear in person accompanied by parents.",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Complete Form de Autorização de Emissão de Passaporte para Menor with travel permission option (Type 1, 2, or 3).",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte"
          }
        ],
        "documents": [
          {
            "document_name": "Certidão de Nascimento and Parental Authorization Form",
            "requiredness": "required",
            "conditions": "If one parent cannot appear, signature on authorization must be notarized by public notary (reconhecimento de firma por autenticidade) or public power of attorney.",
            "accepted_alternatives": [],
            "original_or_copy": "Original",
            "translation_or_legalisation": "Cartório civil document",
            "source_url": "https://www.gov.br/pf/pt-br/assuntos/passaporte",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.gov.br/pf/pt-br/assuntos/passaporte",
            "publisher": "Polícia Federal",
            "page_title": "Passaporte para Menores",
            "checked_at": "2026-10-19"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://www.gov.br/pf/pt-br/assuntos/passaporte",
        "publisher": "Polícia Federal do Brasil",
        "page_title": "Passaporte Brasileiro",
        "checked_at": "2026-10-19"
      }
    ]
  },
  "ZA": {
    "country_code": "ZA",
    "country_name": "South Africa",
    "authority_name": "Department of Home Affairs (DHA · iSebe leMicimbi yezeKhaya)",
    "official_portal_url": "https://www.dha.gov.za/index.php/civic-services/travel-documents",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-01-01",
    "jurisdictions": [
      {
        "name": "Domestic (DHA Regional Offices & Partnered Bank Branches via eHomeAffairs)",
        "application_channel": "domestic",
        "source_url": "https://ehome.dha.gov.za/echannel"
      },
      {
        "name": "Consular Services (South African High Commissions & Embassies abroad)",
        "application_channel": "consular",
        "source_url": "http://www.dirco.gov.za/"
      }
    ],
    "age_bands": [
      {
        "label": "Minor (under 16)",
        "min_age": 0,
        "max_age": 15,
        "age_basis_source": "https://www.dha.gov.za/index.php/civic-services/travel-documents"
      },
      {
        "label": "Adult (16 and above)",
        "min_age": 16,
        "max_age": null,
        "age_basis_source": "https://www.dha.gov.za/index.php/civic-services/travel-documents"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must be a South African citizen by birth, descent, or naturalization and possess a 13-digit National ID number.",
            "source_url": "https://www.dha.gov.za/index.php/civic-services/travel-documents",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Submit application online via eHomeAffairs portal (ehome.dha.gov.za/echannel) or complete Form DHA-73.",
            "source_url": "https://ehome.dha.gov.za/echannel"
          },
          {
            "step": "Pay fee online via internet banking EFT or at designated DHA cashiers.",
            "source_url": "https://ehome.dha.gov.za/echannel"
          },
          {
            "step": "Book appointment at a live-capture DHA office or participating bank branch (Standard Bank, FNB, Nedbank, Absa).",
            "source_url": "https://ehome.dha.gov.za/echannel"
          },
          {
            "step": "Attend appointment for live biometric photograph, digital fingerprints, and signature capture.",
            "source_url": "https://www.dha.gov.za/index.php/civic-services/travel-documents"
          },
          {
            "step": "Receive SMS notification and collect passport in person with your Smart ID Card.",
            "source_url": "https://www.dha.gov.za/index.php/civic-services/travel-documents"
          }
        ],
        "documents": [
          {
            "document_name": "South African Smart ID Card or Green Barcoded ID Book",
            "requiredness": "required",
            "conditions": "Must be a valid 13-digit identity document. If aged 16+ and applying for ID simultaneously, birth certificate is required.",
            "accepted_alternatives": [
              "Smart ID Card",
              "Green barcoded Identity Document"
            ],
            "original_or_copy": "Original document",
            "translation_or_legalisation": "South African statutory identity document",
            "source_url": "https://www.dha.gov.za/index.php/civic-services/travel-documents",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Form DHA-73 (Application for Passport)",
            "requiredness": "required",
            "conditions": "Completed in black ink if applying in person, or submitted electronically via eHomeAffairs.",
            "accepted_alternatives": [
              "eHomeAffairs digital application confirmation"
            ],
            "original_or_copy": "Original signed form",
            "translation_or_legalisation": "Official DHA statutory form",
            "source_url": "https://www.dha.gov.za/index.php/civic-services/travel-documents",
            "last_reviewed": "2026-10-19"
          }
        ],
        "photo_rules": {
          "captured_live": true,
          "notes": "Captured live digitally at all modern DHA offices and bank branches. Physical photographs (2 identical colour photos) are only required for manual submissions at foreign consular missions."
        },
        "fees": {
          "currency": "ZAR",
          "adult_tourist_32_pages": 400,
          "maxi_tourist_48_pages": 600,
          "child_passport_under_16": 400,
          "lost_passport_penalty_double_fee": 800
        },
        "processing_times": {
          "domestic_live_capture": "7 to 14 business days",
          "consular_overseas": "6 to 12 months (due to central printing in Pretoria and diplomatic pouch transport)"
        },
        "sources": [
          {
            "url": "https://www.dha.gov.za/index.php/civic-services/travel-documents",
            "publisher": "Department of Home Affairs, South Africa",
            "page_title": "Passports and Travel Documents",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Previous passport must be surrendered for physical cancellation upon receipt of new travel document.",
            "source_url": "https://www.dha.gov.za/index.php/civic-services/travel-documents",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Apply via eHomeAffairs or DHA office; surrender existing passport at collection.",
            "source_url": "https://www.dha.gov.za/index.php/civic-services/travel-documents"
          }
        ],
        "documents": [
          {
            "document_name": "Current South African Passport Booklet",
            "requiredness": "required",
            "conditions": "Surrendered at collection for cancellation.",
            "accepted_alternatives": [],
            "original_or_copy": "Original booklet",
            "translation_or_legalisation": "Official travel document",
            "source_url": "https://www.dha.gov.za/index.php/civic-services/travel-documents",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.dha.gov.za/index.php/civic-services/travel-documents",
            "publisher": "Department of Home Affairs",
            "page_title": "Passport Renewal",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Both parents must provide written consent on Section B of Form DHA-73. Child must possess an Unabridged Birth Certificate.",
            "source_url": "https://www.dha.gov.za/index.php/civic-services/travel-documents",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Both parents attend DHA office with child and present Unabridged Birth Certificate and parents' Smart ID cards.",
            "source_url": "https://www.dha.gov.za/index.php/civic-services/travel-documents"
          }
        ],
        "documents": [
          {
            "document_name": "Unabridged Birth Certificate (Birth Certificate with parentage)",
            "requiredness": "required",
            "conditions": "Must list details of both mother and father.",
            "accepted_alternatives": [],
            "original_or_copy": "Original certified certificate",
            "translation_or_legalisation": "DHA statutory birth record",
            "source_url": "https://www.dha.gov.za/index.php/civic-services/travel-documents",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.dha.gov.za/index.php/civic-services/travel-documents",
            "publisher": "Department of Home Affairs",
            "page_title": "Child Passports",
            "checked_at": "2026-10-19"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://www.dha.gov.za/index.php/civic-services/travel-documents",
        "publisher": "Department of Home Affairs, South Africa",
        "page_title": "South African Travel Documents",
        "checked_at": "2026-10-19"
      }
    ]
  },
  "NG": {
    "country_code": "NG",
    "country_name": "Nigeria",
    "authority_name": "Nigeria Immigration Service (NIS) · Federal Ministry of Interior",
    "official_portal_url": "https://passport.immigration.gov.ng/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2025-09-01",
    "jurisdictions": [
      {
        "name": "Domestic (NIS State Commands & Passport Front Offices)",
        "application_channel": "domestic",
        "source_url": "https://passport.immigration.gov.ng/"
      },
      {
        "name": "Consular Services (Nigerian Embassies & High Commissions overseas)",
        "application_channel": "consular",
        "source_url": "https://immigration.gov.ng/"
      }
    ],
    "age_bands": [
      {
        "label": "Minor (under 18)",
        "min_age": 0,
        "max_age": 17,
        "age_basis_source": "https://passport.immigration.gov.ng/"
      },
      {
        "label": "Adult (18 and above)",
        "min_age": 18,
        "max_age": null,
        "age_basis_source": "https://passport.immigration.gov.ng/"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must be a Nigerian citizen and possess a verified National Identification Number (NIN) issued by NIMC.",
            "source_url": "https://passport.immigration.gov.ng/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Name, date of birth, and biological sex on application must match NIMC database records character-for-character.",
            "source_url": "https://passport.immigration.gov.ng/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Log on to the NIS online portal (passport.immigration.gov.ng) and validate your NIN.",
            "source_url": "https://passport.immigration.gov.ng/"
          },
          {
            "step": "Fill application form, select processing command, and pay official fees online via approved payment gateway.",
            "source_url": "https://passport.immigration.gov.ng/"
          },
          {
            "step": "Print Application Form, Payment Receipt, and Acknowledgment Slip.",
            "source_url": "https://passport.immigration.gov.ng/"
          },
          {
            "step": "Obtain Guarantor's Form sworn before a Magistrate or High Court Judge.",
            "source_url": "https://passport.immigration.gov.ng/"
          },
          {
            "step": "Attend scheduled enrollment appointment at NIS office for live biometric capture (fingerprints, facial photograph).",
            "source_url": "https://passport.immigration.gov.ng/"
          }
        ],
        "documents": [
          {
            "document_name": "National Identification Number (NIN) Slip",
            "requiredness": "required",
            "conditions": "Data on NIN slip must exactly match passport application data.",
            "accepted_alternatives": [
              "NIMC National Identity Card / e-ID slip"
            ],
            "original_or_copy": "Original slip + photocopy",
            "translation_or_legalisation": "NIMC statutory record",
            "source_url": "https://passport.immigration.gov.ng/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Certificate of State of Origin / Local Government Identification Letter",
            "requiredness": "required",
            "conditions": "Issued by applicant's Local Government Area (LGA) of origin or State Liaison Office.",
            "accepted_alternatives": [
              "LGA Identification Letter",
              "State of Origin Certificate"
            ],
            "original_or_copy": "Original certificate",
            "translation_or_legalisation": "Nigerian statutory local government certificate",
            "source_url": "https://passport.immigration.gov.ng/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Birth Certificate or Age Declaration",
            "requiredness": "required",
            "conditions": "Issued by National Population Commission (NPC) for applicants born after 1992, or formal Age Declaration sworn at court.",
            "accepted_alternatives": [
              "National Population Commission (NPC) Birth Certificate",
              "High Court Statutory Declaration of Age"
            ],
            "original_or_copy": "Original document",
            "translation_or_legalisation": "Nigerian civil status document",
            "source_url": "https://passport.immigration.gov.ng/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Guarantor's Form Sworn Before Court",
            "requiredness": "required",
            "conditions": "Signed by an adult Nigerian citizen guarantor with copy of guarantor's passport data page and National ID.",
            "accepted_alternatives": [],
            "original_or_copy": "Original sworn form",
            "translation_or_legalisation": "Judicial sworn statement",
            "source_url": "https://passport.immigration.gov.ng/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "photo_rules": {
          "captured_live": true,
          "conditions": "Captured live at NIS enrollment center. Applicants must bring two passport photos (white background) for manual filing backing."
        },
        "fees": {
          "currency": "NGN",
          "effective_date": "2025-09-01",
          "statutory_authority": "Federal Ministry of Interior / Nigeria Immigration Service (NIS)",
          "statutory_notice": "Official fees updated pursuant to Federal Ministry of Interior directive effective 1 September 2025.",
          "booklet_32_pages_5_year": 100000,
          "booklet_64_pages_10_year": 200000,
          "diaspora_overseas_usd": {
            "currency": "USD",
            "booklet_32_pages_5_year": 150,
            "booklet_64_pages_10_year": 230
          },
          "payment_method": "Strictly online via passport.immigration.gov.ng official payment gateway; cash payments at passport control offices are strictly prohibited.",
          "nin_validation_mandate": "National Identification Number (NIN) must be validated before payment and enrollment booking for both domestic and diaspora applications.",
          "confirmation_required": false,
          "fee_records": [
            {
              "currency": "NGN",
              "amount": 100000,
              "applicant_category": "general",
              "application_channel": "domestic_online",
              "validity_period": "5_years",
              "applicable_conditions": "32-page booklet for domestic Nigerian citizens with verified NIN.",
              "official_source_url": "https://immigration.gov.ng/nigeria-immigration-service-announces-upward-review-of-nigerian-standard-passport-fees/",
              "date_checked": "2026-10-19",
              "effective_date": "2025-09-01",
              "verification_status": "verified"
            },
            {
              "currency": "NGN",
              "amount": 200000,
              "applicant_category": "general",
              "application_channel": "domestic_online",
              "validity_period": "10_years",
              "applicable_conditions": "64-page booklet for domestic Nigerian citizens aged 18+ with verified NIN.",
              "official_source_url": "https://immigration.gov.ng/nigeria-immigration-service-announces-upward-review-of-nigerian-standard-passport-fees/",
              "date_checked": "2026-10-19",
              "effective_date": "2025-09-01",
              "verification_status": "verified"
            },
            {
              "currency": "USD",
              "amount": 150,
              "applicant_category": "diaspora",
              "application_channel": "consular_overseas",
              "validity_period": "5_years",
              "applicable_conditions": "32-page booklet for Nigerian citizens residing abroad.",
              "official_source_url": "https://immigration.gov.ng/nigeria-immigration-service-announces-upward-review-of-nigerian-standard-passport-fees/",
              "date_checked": "2026-10-19",
              "effective_date": "2025-09-01",
              "verification_status": "verified"
            },
            {
              "currency": "USD",
              "amount": 230,
              "applicant_category": "diaspora",
              "application_channel": "consular_overseas",
              "validity_period": "10_years",
              "applicable_conditions": "64-page booklet for Nigerian citizens residing abroad.",
              "official_source_url": "https://immigration.gov.ng/nigeria-immigration-service-announces-upward-review-of-nigerian-standard-passport-fees/",
              "date_checked": "2026-10-19",
              "effective_date": "2025-09-01",
              "verification_status": "verified"
            }
          ]
        },
        "processing_times": {
          "standard_charter_renewal": "3 weeks post-enrolment",
          "standard_charter_fresh": "6 weeks post-enrolment"
        },
        "sources": [
          {
            "url": "https://immigration.gov.ng/nigeria-immigration-service-announces-upward-review-of-nigerian-standard-passport-fees/",
            "publisher": "Nigeria Immigration Service (NIS)",
            "page_title": "NIS Announces Upward Review of Nigerian Standard Passport Fees",
            "checked_at": "2026-10-19"
          },
          {
            "url": "https://passport.immigration.gov.ng/",
            "publisher": "Nigeria Immigration Service (NIS)",
            "page_title": "Official Passport Application Portal",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Present previous standard Nigerian passport booklet and verified NIN slip.",
            "source_url": "https://passport.immigration.gov.ng/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Apply online on NIS portal for Reissue, pay fee, and present old booklet for physical cancellation at appointment.",
            "source_url": "https://passport.immigration.gov.ng/"
          }
        ],
        "documents": [
          {
            "document_name": "Previous Nigerian Passport Booklet",
            "requiredness": "required",
            "conditions": "Must be presented at enrollment.",
            "accepted_alternatives": [],
            "original_or_copy": "Original booklet + photocopy of data page",
            "translation_or_legalisation": "Nigerian travel document",
            "source_url": "https://passport.immigration.gov.ng/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://passport.immigration.gov.ng/",
            "publisher": "Nigeria Immigration Service",
            "page_title": "Passport Renewal Guidelines",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Minors under 18 require Letter of Consent from both parents, plus child's NIN and NPC Birth Certificate.",
            "source_url": "https://passport.immigration.gov.ng/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Submit online, present letter of consent signed by parents with copies of parents' passport data pages.",
            "source_url": "https://passport.immigration.gov.ng/"
          }
        ],
        "documents": [
          {
            "document_name": "Parental Consent Letter & Child's NPC Birth Certificate",
            "requiredness": "required",
            "conditions": "Signed by parents with ID photocopies.",
            "accepted_alternatives": [
              "Court custody order if single legal guardian"
            ],
            "original_or_copy": "Original",
            "translation_or_legalisation": "Nigerian civil documents",
            "source_url": "https://passport.immigration.gov.ng/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://passport.immigration.gov.ng/",
            "publisher": "Nigeria Immigration Service",
            "page_title": "Minor Passport Requirements",
            "checked_at": "2026-10-19"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://immigration.gov.ng/nigeria-immigration-service-announces-upward-review-of-nigerian-standard-passport-fees/",
        "publisher": "Nigeria Immigration Service (NIS)",
        "page_title": "NIS Announces Upward Review of Nigerian Standard Passport Fees",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://passport.immigration.gov.ng/",
        "publisher": "Nigeria Immigration Service (NIS)",
        "page_title": "Official Passport Application Portal",
        "checked_at": "2026-10-19"
      }
    ]
  },
  "IT": {
    "country_code": "IT",
    "country_name": "Italy",
    "authority_name": "Polizia di Stato (Questura) · Ministero dell'Interno & MAECI",
    "official_portal_url": "https://passaportonline.poliziadistato.it/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-01-01",
    "jurisdictions": [
      {
        "name": "Domestic (Questura / Commissariato via Agenda Passaporto)",
        "application_channel": "domestic",
        "source_url": "https://passaportonline.poliziadistato.it/"
      },
      {
        "name": "Consular Services (Italian Consular Network via Prenot@Mi)",
        "application_channel": "consular",
        "source_url": "https://prenotami.esteri.it/"
      }
    ],
    "age_bands": [
      {
        "label": "Infant (0 to 3)",
        "min_age": 0,
        "max_age": 2,
        "age_basis_source": "https://www.poliziadistato.it/articolo/1087"
      },
      {
        "label": "Minor (3 to 17)",
        "min_age": 3,
        "max_age": 17,
        "age_basis_source": "https://www.poliziadistato.it/articolo/1087"
      },
      {
        "label": "Adult (18 and above)",
        "min_age": 18,
        "max_age": null,
        "age_basis_source": "https://www.poliziadistato.it/articolo/1087"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Must be an Italian citizen under Legge 1185/1967.",
            "source_url": "https://www.poliziadistato.it/articolo/1087",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Under Decreto Legge 69/2023, adult applicants with minor children NO LONGER require the consent of the other parent for their own passport.",
            "source_url": "https://www.poliziadistato.it/articolo/1087",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Book appointment on Agenda Passaporto portal (passaportonline.poliziadistato.it) using SPID or CIE digital identity credentials.",
            "source_url": "https://passaportonline.poliziadistato.it/"
          },
          {
            "step": "Purchase official administrative tax stamp (Contrassegno telematico) of €73.50 at a tobacconist (rivendita di valori bollati / tabaccaio).",
            "source_url": "https://www.poliziadistato.it/articolo/1087"
          },
          {
            "step": "Pay €42.50 booklet fee via pre-printed postal bulletin (bollettino postale c/c 67428014 payable to Ministero dell'Economia e delle Finanze).",
            "source_url": "https://www.poliziadistato.it/articolo/1087"
          },
          {
            "step": "Attend appointment at Questura or Commissariato with 2 photos, payment receipts, identity card, and submit digital fingerprints.",
            "source_url": "https://www.poliziadistato.it/articolo/1087"
          },
          {
            "step": "Collect electronic biometric passport in person or via Poste Italiane home delivery service (€9.55).",
            "source_url": "https://www.poliziadistato.it/articolo/1087"
          }
        ],
        "documents": [
          {
            "document_name": "Valid Italian Identity Document (Carta d'Identità)",
            "requiredness": "required",
            "conditions": "Valid paper or electronic Carta d'Identità (CIE).",
            "accepted_alternatives": [
              "Carta d'Identità Elettronica (CIE)",
              "Carta d'Identità cartacea",
              "Valid military or official state service ID"
            ],
            "original_or_copy": "Original document + 1 photocopy",
            "translation_or_legalisation": "Italian statutory ID",
            "source_url": "https://www.poliziadistato.it/articolo/1087",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Administrative Revenue Stamp (Contrassegno telematico da €73,50)",
            "requiredness": "required",
            "conditions": "Purchased at tabaccheria for passport issuance.",
            "accepted_alternatives": [],
            "original_or_copy": "Original stamp voucher",
            "translation_or_legalisation": "Italian fiscal stamp",
            "source_url": "https://www.poliziadistato.it/articolo/1087",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Postal Payment Receipt (Ricevuta di versamento di €42,50 su c/c 67428014)",
            "requiredness": "required",
            "conditions": "Paid at Poste Italiane to Dipartimento del Tesoro.",
            "accepted_alternatives": [],
            "original_or_copy": "Original receipt with postal machine validation",
            "translation_or_legalisation": "Italian postal payment voucher",
            "source_url": "https://www.poliziadistato.it/articolo/1087",
            "last_reviewed": "2026-10-19"
          }
        ],
        "photo_rules": {
          "dimensions": "35mm x 40mm",
          "background": "White background without shadows or reflection",
          "conditions": "Two identical recent photos compliant with ICAO standard. Face straight, neutral expression, no glare on spectacles."
        },
        "fees": {
          "currency": "EUR",
          "contrassegno_telematico": 73.5,
          "costo_libretto": 42.5,
          "total_standard_fee": 116,
          "poste_delivery_optional": 9.55
        },
        "processing_times": {
          "standard": "15 to 30 days depending on local Questura volume",
          "urgent_emergency": "Fast-track available for proven medical, work, or study emergencies"
        },
        "sources": [
          {
            "url": "https://www.poliziadistato.it/articolo/1087",
            "publisher": "Polizia di Stato",
            "page_title": "Il Passaporto per i cittadini maggiorenni",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Italy issues a fresh passport upon expiry or page exhaustion. The previous booklet must be surrendered for cancellation.",
            "source_url": "https://www.poliziadistato.it/articolo/1087",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Book appointment via Agenda Passaporto, pay fee, and surrender old passport booklet at the Questura.",
            "source_url": "https://www.poliziadistato.it/articolo/1087"
          }
        ],
        "documents": [
          {
            "document_name": "Previous Italian Passport",
            "requiredness": "required",
            "conditions": "Physically surrendered for cancellation. If stolen/lost, original police report (denuncia di smarrimento o furto) is required.",
            "accepted_alternatives": [
              "Denuncia di smarrimento o furto from Carabinieri or Polizia"
            ],
            "original_or_copy": "Original booklet or stamped complaint",
            "translation_or_legalisation": "Italian official document",
            "source_url": "https://www.poliziadistato.it/articolo/1087",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.poliziadistato.it/articolo/1087",
            "publisher": "Polizia di Stato",
            "page_title": "Rilascio e Rinnovo del Passaporto",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Both parents must grant formal written consent (atto di assenso tra genitori) for the issuance of a passport to a minor child under 18.",
            "source_url": "https://www.poliziadistato.it/articolo/1087",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Both parents appear at the Questura with child or provide signed consent with copy of valid ID card.",
            "source_url": "https://www.poliziadistato.it/articolo/1087"
          }
        ],
        "documents": [
          {
            "document_name": "Parental Consent Declaration (Atto di assenso dei genitori)",
            "requiredness": "required",
            "conditions": "Signed by both parents. If one parent refuses, an authorization order from the Guardianship Judge (Giudice Tutelare) is legally required.",
            "accepted_alternatives": [
              "Nulla osta del Giudice Tutelare"
            ],
            "original_or_copy": "Original signed form",
            "translation_or_legalisation": "Italian statutory legal declaration",
            "source_url": "https://www.poliziadistato.it/articolo/1087",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.poliziadistato.it/articolo/1087",
            "publisher": "Polizia di Stato",
            "page_title": "Passaporto per Minori",
            "checked_at": "2026-10-19"
          }
        ]
      }
    },
    "sources": [
      {
        "url": "https://passaportonline.poliziadistato.it/",
        "publisher": "Polizia di Stato · Ministero dell'Interno",
        "page_title": "Agenda Passaporto Online",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://www.poliziadistato.it/articolo/1087",
        "publisher": "Polizia di Stato",
        "page_title": "Passaporto Elettronico e Documenti di Viaggio",
        "checked_at": "2026-10-19"
      }
    ]
  },
  "IE": {
    "country_code": "IE",
    "country_name": "Ireland",
    "authority_name": "Passport Service, Department of Foreign Affairs (An tSeirbhís Pasport)",
    "official_portal_url": "https://www.dfa.ie/passports/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-01-01",
    "jurisdictions": [
      {
        "name": "Passport Online (Worldwide & Domestic)",
        "application_channel": "domestic",
        "source_url": "https://www.dfa.ie/passportonline/"
      },
      {
        "name": "Post Passport (An Post in Ireland / Great Britain)",
        "application_channel": "domestic",
        "source_url": "https://www.dfa.ie/passports/how-to-apply-for-a-passport/post-passport/"
      },
      {
        "name": "Irish Diplomatic Missions Abroad (Embassies & Consulates)",
        "application_channel": "consular",
        "source_url": "https://www.dfa.ie/embassies/"
      }
    ],
    "age_bands": [
      {
        "label": "Child (Under 18 years of age)",
        "min_age": 0,
        "max_age": 17,
        "age_basis_source": "https://www.dfa.ie/passports/documentary-requirements/child/"
      },
      {
        "label": "Adult (18 years and older)",
        "min_age": 18,
        "max_age": null,
        "age_basis_source": "https://www.dfa.ie/passports/documentary-requirements/adult/"
      }
    ],
    "sources": [
      {
        "url": "https://www.dfa.ie/passports/",
        "publisher": "Department of Foreign Affairs, Ireland",
        "page_title": "Passport Service Ireland",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://www.dfa.ie/passportonline/",
        "publisher": "Department of Foreign Affairs, Ireland",
        "page_title": "Passport Online Application Service",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://www.dfa.ie/passports/passport-fees/",
        "publisher": "Department of Foreign Affairs, Ireland",
        "page_title": "Statutory Passport Fees & Charges",
        "checked_at": "2026-10-19"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Irish citizens applying for their first passport must apply online via Passport Online or paper Post Passport and complete identity verification before an authorized witness.",
            "source_url": "https://www.dfa.ie/passports/how-to-apply-for-a-passport/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Adult passports are valid for 10 years. Child passports are valid for 5 years.",
            "source_url": "https://www.dfa.ie/passports/passport-fees/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Submit online application via Passport Online (upload digital photo and pay fee by card).",
            "source_url": "https://www.dfa.ie/passportonline/"
          },
          {
            "step": "Print the identity verification form and have it witnessed in person by an approved professional (Garda, lawyer, doctor, accountant, teacher, or bank manager).",
            "source_url": "https://www.dfa.ie/passports/how-to-apply-for-a-passport/"
          },
          {
            "step": "Post the original supporting documents (civil birth certificate, witnessed form, photo ID, proof of address and name) to the Passport Service in Dublin or Cork.",
            "source_url": "https://www.dfa.ie/passports/how-to-apply-for-a-passport/"
          },
          {
            "step": "Track application progress via the DFA Passport Tracking system; passport and documents are returned by registered post.",
            "source_url": "https://www.dfa.ie/passports/"
          }
        ],
        "documents": [
          {
            "document_name": "Full Civil Birth Certificate (Long Form)",
            "requiredness": "required",
            "conditions": "Issued by the General Register Office (GRO) showing parents names. If born abroad to Irish-born parent, Foreign Births Registration certificate is required.",
            "accepted_alternatives": [
              "Foreign Births Registration (FBR) Certificate",
              "Certificate of Naturalisation"
            ],
            "original_or_copy": "Original civil certificate",
            "translation_or_legalisation": "Certified English/Irish translation if issued abroad",
            "source_url": "https://www.dfa.ie/passports/documentary-requirements/adult/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Identity Verification Form (Witnessed)",
            "requiredness": "required",
            "conditions": "Signed in the physical presence of an approved witness who knows the applicant or has verified photo ID.",
            "accepted_alternatives": [],
            "original_or_copy": "Original signed and stamped form",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://www.dfa.ie/passports/how-to-apply-for-a-passport/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Proof of Address and Name",
            "requiredness": "required",
            "conditions": "Utility bill, bank statement, or government letter dated within the last 6 months.",
            "accepted_alternatives": [
              "Revenue tax document",
              "Social welfare letter"
            ],
            "original_or_copy": "Original or official printout",
            "translation_or_legalisation": "Not applicable",
            "source_url": "https://www.dfa.ie/passports/documentary-requirements/adult/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "fees": {
          "currency": "EUR",
          "fiscal_year": 2026,
          "statutory_source": "Passports Act 2008 & Passport Regulations (Department of Foreign Affairs)",
          "standard_online_eur": {
            "adult_standard_34_pages": 75,
            "adult_large_66_pages": 105,
            "child_standard_5_years": 20,
            "passport_card_alone": 35,
            "adult_bundle_booklet_and_card": 100
          },
          "post_passport_paper_eur": {
            "adult_standard": 80,
            "child_standard": 30,
            "an_post_handling_charge": 9.5
          },
          "urgent_appointment_service_eur": {
            "same_day_renewal": 150,
            "four_day_renewal": 110
          },
          "fee_records": [
            {
              "currency": "EUR",
              "amount": 75,
              "base_amount": 75,
              "emergency_surcharge": 0,
              "total_payable": 75,
              "applicant_category": "adult_18_and_over",
              "application_channel": "online",
              "validity_period": "10_years",
              "discount_eligibility": "Standard statutory rate for 34-page booklet via Passport Online.",
              "applicable_conditions": "Online application via dfa.ie/passportonline.",
              "official_source_url": "https://www.dfa.ie/passports/passport-fees/",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "EUR",
              "amount": 20,
              "base_amount": 20,
              "emergency_surcharge": 0,
              "total_payable": 20,
              "applicant_category": "child_under_18",
              "application_channel": "online",
              "validity_period": "5_years",
              "discount_eligibility": "Statutory child rate.",
              "applicable_conditions": "For all children under 18 years of age applying online.",
              "official_source_url": "https://www.dfa.ie/passports/passport-fees/",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "EUR",
              "amount": 100,
              "base_amount": 100,
              "emergency_surcharge": 0,
              "total_payable": 100,
              "applicant_category": "adult_bundle",
              "application_channel": "online",
              "validity_period": "10_years_booklet_and_5_years_card",
              "discount_eligibility": "Discounted bundle price (€10 saving versus separate purchase of €75 booklet + €35 card).",
              "applicable_conditions": "Ordered simultaneously via Passport Online.",
              "official_source_url": "https://www.dfa.ie/passports/passport-fees/",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "EUR",
              "amount": 150,
              "base_amount": 75,
              "emergency_surcharge": 75,
              "total_payable": 150,
              "applicant_category": "adult_urgent_same_day",
              "application_channel": "counter_urgent",
              "validity_period": "10_years",
              "discount_eligibility": "Includes €75 statutory urgent appointment surcharge.",
              "applicable_conditions": "Urgent appointment booked in Dublin or Cork office for urgent travel within 3 working days.",
              "official_source_url": "https://www.dfa.ie/passports/passport-fees/",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            }
          ]
        },
        "sources": [
          {
            "url": "https://www.dfa.ie/passports/passport-fees/",
            "publisher": "Department of Foreign Affairs, Ireland",
            "page_title": "Passport Fees",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Irish citizens whose passport has expired within the last 5 years or is within 12 months of expiry can renew 100% online without sending paper documents (for adult simple renewals).",
            "source_url": "https://www.dfa.ie/passportonline/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Apply online at dfa.ie/passportonline with existing passport details and upload a compliant digital photo.",
            "source_url": "https://www.dfa.ie/passportonline/"
          },
          {
            "step": "Pay €75 fee online. No witness or physical old passport return is required for routine adult renewals if passport is less than 5 years expired.",
            "source_url": "https://www.dfa.ie/passportonline/"
          }
        ],
        "documents": [
          {
            "document_name": "Existing Irish Passport Details",
            "requiredness": "required",
            "conditions": "Passport number and expiry date must be entered online.",
            "accepted_alternatives": [],
            "source_url": "https://www.dfa.ie/passportonline/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.dfa.ie/passportonline/",
            "publisher": "Department of Foreign Affairs, Ireland",
            "page_title": "Adult Passport Renewal",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Passports for children under 18 have a 5-year validity. Consent of all legal guardians (both parents) is mandatory under Irish law.",
            "source_url": "https://www.dfa.ie/passports/documentary-requirements/child/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Submit child application via Passport Online and print Child Identity and Consent Form.",
            "source_url": "https://www.dfa.ie/passports/documentary-requirements/child/"
          },
          {
            "step": "Both parents/guardians must sign the consent form in the presence of an approved witness (Garda/police officer or practicing professional).",
            "source_url": "https://www.dfa.ie/passports/documentary-requirements/child/"
          },
          {
            "step": "Post original long-form civil birth certificate and witnessed consent form to Passport Service.",
            "source_url": "https://www.dfa.ie/passports/documentary-requirements/child/"
          }
        ],
        "documents": [
          {
            "document_name": "Full Civil Birth Certificate of Child",
            "requiredness": "required",
            "conditions": "Showing parents names.",
            "accepted_alternatives": [],
            "source_url": "https://www.dfa.ie/passports/documentary-requirements/child/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Witnessed Child Consent Form (Form APS2 / Online Consent)",
            "requiredness": "required",
            "conditions": "Signed by all legal guardians in presence of designated witness.",
            "accepted_alternatives": [
              "Court Order dispensing with guardian consent",
              "Sole Guardian Affidavit (Form AFF1)"
            ],
            "source_url": "https://www.dfa.ie/passports/documentary-requirements/child/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.dfa.ie/passports/documentary-requirements/child/",
            "publisher": "Department of Foreign Affairs, Ireland",
            "page_title": "Child Passport Requirements",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "lost_stolen": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Lost or stolen Irish passports must be reported immediately. The loss is registered with Interpol and the passport is permanently invalidated.",
            "source_url": "https://www.dfa.ie/passports/lost-stolen-damaged-passports/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Declare the passport lost or stolen when applying via Passport Online.",
            "source_url": "https://www.dfa.ie/passports/lost-stolen-damaged-passports/"
          },
          {
            "step": "If applying on paper, file a report with An Garda Síochána (or local police abroad) and have Section 8 of the paper form witnessed by the police.",
            "source_url": "https://www.dfa.ie/passports/lost-stolen-damaged-passports/"
          }
        ],
        "documents": [
          {
            "document_name": "Police Report / Garda Witnessed Form",
            "requiredness": "required",
            "conditions": "Required for paper applications or emergency travel abroad.",
            "accepted_alternatives": [],
            "source_url": "https://www.dfa.ie/passports/lost-stolen-damaged-passports/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.dfa.ie/passports/lost-stolen-damaged-passports/",
            "publisher": "Department of Foreign Affairs, Ireland",
            "page_title": "Lost and Stolen Passports",
            "checked_at": "2026-10-19"
          }
        ]
      }
    }
  },
  "KE": {
    "country_code": "KE",
    "country_name": "Kenya",
    "authority_name": "Directorate of Immigration Services (State Department for Immigration and Citizen Services)",
    "official_portal_url": "https://immigration.go.ke/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2024-03-01",
    "jurisdictions": [
      "KE",
      "KEN",
      "404"
    ],
    "age_bands": {
      "adult_minimum_age": 18,
      "child_upper_age": 17,
      "standard_adult_validity_years": 10,
      "child_validity_years": 5
    },
    "sources": [
      {
        "url": "https://immigration.go.ke/type-and-fees/",
        "publisher": "Directorate of Immigration Services Kenya",
        "page_title": "Passport Types and Statutory Fees",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://immigration.go.ke/",
        "publisher": "Directorate of Immigration Services Kenya",
        "page_title": "Official Immigration Portal",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://accounts.ecitizen.go.ke/",
        "publisher": "eCitizen Official Portal",
        "page_title": "eCitizen Kenyan Government Services",
        "checked_at": "2026-10-19"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Kenyan citizens aged 18 and older must hold a valid National Identity Card (Kitambula) to apply for an East African Community (EAC) e-Passport.",
            "source_url": "https://immigration.go.ke/type-and-fees/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "All passport applications and payments must be submitted online via the official eCitizen portal before booking biometric enrollment.",
            "source_url": "https://immigration.go.ke/type-and-fees/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Create or log in to your account on official eCitizen portal (accounts.ecitizen.go.ke).",
            "source_url": "https://immigration.go.ke/type-and-fees/"
          },
          {
            "step": "Select Directorate of Immigration Services and choose Ordinary Passport Application.",
            "source_url": "https://immigration.go.ke/type-and-fees/"
          },
          {
            "step": "Select passport booklet size: Series A (34 pages: KES 7,550), Series B (50 pages: KES 9,550), or Series C (66 pages: KES 12,050) and pay via eCitizen.",
            "source_url": "https://immigration.go.ke/type-and-fees/"
          },
          {
            "step": "Book appointment and print completed Form 19 and payment invoice.",
            "source_url": "https://immigration.go.ke/type-and-fees/"
          },
          {
            "step": "Attend biometric capture at Nyayo House (Nairobi) or designated regional immigration offices (Mombasa, Kisumu, Nakuru, Eldoret, Embu, Kisii).",
            "source_url": "https://immigration.go.ke/"
          }
        ],
        "documents": [
          {
            "document_name": "Original Kenyan National Identity Card (Kitambula)",
            "requiredness": "required",
            "conditions": "Original ID card plus photocopy.",
            "accepted_alternatives": [],
            "source_url": "https://immigration.go.ke/type-and-fees/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Original Birth Certificate",
            "requiredness": "required",
            "conditions": "Plus photocopy.",
            "accepted_alternatives": [],
            "source_url": "https://immigration.go.ke/type-and-fees/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Recommender National ID Card Photocopy",
            "requiredness": "required",
            "conditions": "Recommender must be a Kenyan citizen (not immediate relative) who signs Section 7 of Form 19.",
            "accepted_alternatives": [],
            "source_url": "https://immigration.go.ke/type-and-fees/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Printed eCitizen Application Form 19 & Payment Receipts",
            "requiredness": "required",
            "conditions": "Two printed copies.",
            "accepted_alternatives": [],
            "source_url": "https://immigration.go.ke/type-and-fees/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "fees": {
          "currency": "KES",
          "fiscal_year": 2026,
          "statutory_source": "Official Ministry of Interior and National Administration Gazette Notice on Revised Immigration Fees (https://immigration.go.ke/type-and-fees/)",
          "standard_domestic_kes": {
            "ordinary_a_series_34_pages": 7550,
            "ordinary_b_series_50_pages": 9550,
            "ordinary_c_series_66_pages": 12050,
            "diplomatic_50_pages": 15050,
            "replacement_lost_passport": 20050,
            "replacement_mutilated_passport": 20050
          },
          "fee_records": [
            {
              "currency": "KES",
              "amount": 7550,
              "base_amount": 7550,
              "emergency_surcharge": 0,
              "total_payable": 7550,
              "applicant_category": "general_series_a",
              "application_channel": "domestic_ecitizen",
              "validity_period": "10_years",
              "discount_eligibility": "Standard statutory rate for Ordinary 34-page EAC e-Passport (Series A).",
              "applicable_conditions": "Standard EAC e-Passport Series A. Paid via official eCitizen portal.",
              "official_source_url": "https://immigration.go.ke/type-and-fees/",
              "effective_date": "2024-03-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "KES",
              "amount": 9550,
              "base_amount": 9550,
              "emergency_surcharge": 0,
              "total_payable": 9550,
              "applicant_category": "general_series_b",
              "application_channel": "domestic_ecitizen",
              "validity_period": "10_years",
              "discount_eligibility": "Standard rate for 50-page frequent traveller booklet (Series B).",
              "applicable_conditions": "Standard EAC e-Passport Series B. Paid via official eCitizen portal.",
              "official_source_url": "https://immigration.go.ke/type-and-fees/",
              "effective_date": "2024-03-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "KES",
              "amount": 12050,
              "base_amount": 12050,
              "emergency_surcharge": 0,
              "total_payable": 12050,
              "applicant_category": "general_series_c",
              "application_channel": "domestic_ecitizen",
              "validity_period": "10_years",
              "discount_eligibility": "Standard rate for 66-page frequent traveller booklet (Series C).",
              "applicable_conditions": "Standard EAC e-Passport Series C. Paid via official eCitizen portal.",
              "official_source_url": "https://immigration.go.ke/type-and-fees/",
              "effective_date": "2024-03-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "KES",
              "amount": 20050,
              "base_amount": 20050,
              "emergency_surcharge": 0,
              "total_payable": 20050,
              "applicant_category": "lost_passport_replacement",
              "application_channel": "domestic_ecitizen",
              "validity_period": "10_years_or_5_years",
              "discount_eligibility": "Statutory replacement fee for lost passport (KES 20,050).",
              "applicable_conditions": "Requires police abstract and sworn affidavit of loss. Paid via official eCitizen portal.",
              "official_source_url": "https://immigration.go.ke/type-and-fees/",
              "effective_date": "2024-03-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "KES",
              "amount": 20050,
              "base_amount": 20050,
              "emergency_surcharge": 0,
              "total_payable": 20050,
              "applicant_category": "mutilated_passport_replacement",
              "application_channel": "domestic_ecitizen",
              "validity_period": "10_years_or_5_years",
              "discount_eligibility": "Statutory replacement fee for mutilated/damaged passport (KES 20,050).",
              "applicable_conditions": "Damaged booklet must be presented for inspection. Paid via official eCitizen portal.",
              "official_source_url": "https://immigration.go.ke/type-and-fees/",
              "effective_date": "2024-03-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            }
          ]
        },
        "sources": [
          {
            "url": "https://immigration.go.ke/type-and-fees/",
            "publisher": "Directorate of Immigration Services Kenya",
            "page_title": "Passport Service Fees",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Kenyan citizens replacing an expired, expiring, or full passport must apply via eCitizen and present the old booklet for cancellation.",
            "source_url": "https://immigration.go.ke/type-and-fees/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Submit renewal application on eCitizen, pay fee (KES 7,550 for 34-page Series A, KES 9,550 for Series B, or KES 12,050 for Series C), and print application invoice.",
            "source_url": "https://immigration.go.ke/type-and-fees/"
          },
          {
            "step": "Appear for appointment with previous passport booklet and National ID card.",
            "source_url": "https://immigration.go.ke/"
          }
        ],
        "documents": [
          {
            "document_name": "Previous Passport Booklet",
            "requiredness": "required",
            "conditions": "Original passport booklet; will be cancelled and returned.",
            "accepted_alternatives": [],
            "source_url": "https://immigration.go.ke/type-and-fees/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Original National ID Card",
            "requiredness": "required",
            "conditions": "Plus photocopy.",
            "accepted_alternatives": [],
            "source_url": "https://immigration.go.ke/type-and-fees/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://immigration.go.ke/type-and-fees/",
            "publisher": "Directorate of Immigration Services Kenya",
            "page_title": "Passport Renewal Service",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Passports for children under 18 have 5-year validity. Consent of both legal parents/guardians is mandatory.",
            "source_url": "https://immigration.go.ke/type-and-fees/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Parent applies on behalf of child via parent eCitizen portal.",
            "source_url": "https://immigration.go.ke/type-and-fees/"
          },
          {
            "step": "Child and parent attend in-person enrollment with child birth certificate and parents IDs.",
            "source_url": "https://immigration.go.ke/"
          }
        ],
        "documents": [
          {
            "document_name": "Child Original Birth Certificate",
            "requiredness": "required",
            "conditions": "Plus photocopy.",
            "accepted_alternatives": [],
            "source_url": "https://immigration.go.ke/type-and-fees/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Both Parents National ID Cards",
            "requiredness": "required",
            "conditions": "Originals and copies.",
            "accepted_alternatives": [],
            "source_url": "https://immigration.go.ke/type-and-fees/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Parental Written Consent Letter",
            "requiredness": "required",
            "conditions": "Signed by parents granting permission for passport issuance.",
            "accepted_alternatives": [],
            "source_url": "https://immigration.go.ke/type-and-fees/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://immigration.go.ke/type-and-fees/",
            "publisher": "Directorate of Immigration Services Kenya",
            "page_title": "Child Passport Requirements",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "lost_stolen": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Lost passports must be reported immediately to police and immigration. A statutory fee of KES 20,050 applies for replacement.",
            "source_url": "https://immigration.go.ke/type-and-fees/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Obtain official Police Abstract from Kenya Police reporting the lost passport booklet.",
            "source_url": "https://immigration.go.ke/type-and-fees/"
          },
          {
            "step": "Swear an Affidavit of Loss before a Commissioner for Oaths or Magistrate.",
            "source_url": "https://immigration.go.ke/type-and-fees/"
          },
          {
            "step": "Apply online on eCitizen under Replacement of Lost Passport and pay statutory fee of KES 20,050.",
            "source_url": "https://immigration.go.ke/type-and-fees/"
          }
        ],
        "documents": [
          {
            "document_name": "Police Abstract Report",
            "requiredness": "required",
            "conditions": "Original stamped police report.",
            "accepted_alternatives": [],
            "source_url": "https://immigration.go.ke/type-and-fees/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Sworn Affidavit of Loss",
            "requiredness": "required",
            "conditions": "Certified by Commissioner for Oaths detailing how the passport was lost.",
            "accepted_alternatives": [],
            "source_url": "https://immigration.go.ke/type-and-fees/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://immigration.go.ke/type-and-fees/",
            "publisher": "Directorate of Immigration Services Kenya",
            "page_title": "Replacement of Lost Passport",
            "checked_at": "2026-10-19"
          }
        ]
      }
    }
  },
  "MY": {
    "country_code": "MY",
    "country_name": "Malaysia",
    "authority_name": "Jabatan Imigresen Malaysia (JIM)",
    "official_portal_url": "https://www.imi.gov.my/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2024-01-01",
    "jurisdictions": [
      "MY",
      "MYS",
      "458"
    ],
    "age_bands": {
      "adult_minimum_age": 18,
      "child_upper_age": 17,
      "child_under_12_upper_age": 12,
      "senior_minimum_age": 60,
      "standard_adult_validity_years": 10,
      "standard_concession_validity_years": 5
    },
    "sources": [
      {
        "url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
        "publisher": "Jabatan Imigresen Malaysia",
        "page_title": "Malaysian International Passport Eligibility & Fee Schedule",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://imigresen-online.imi.gov.my/eservices/myPasport",
        "publisher": "Jabatan Imigresen Malaysia",
        "page_title": "MyOnline Pasport Renewal Portal",
        "checked_at": "2026-10-19"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Adults aged 18 to 59 are eligible for either a 5-year passport (RM 200) or a 10-year passport (RM 350).",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Applicants under 18 years of age are eligible only for the 5-year passport (RM 200 for ages 13–17; RM 100 for children under 12); they are NOT eligible for the 10-year option.",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Senior Citizens aged 60 and above receive a statutory 50% concession: RM 100 for 5 years or RM 175 for 10 years.",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Persons with Disabilities (Orang Kurang Upaya / OKU) holding an official JKM registration card are 100% exempt from passport fees (RM 0 for both 5-year and 10-year options).",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Malaysian students under 21 years studying abroad at degree level receive a concession rate of RM 100 for a 5-year passport upon presenting proof of study.",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Check eligibility and apply in person at any Jabatan Imigresen Malaysia (JIM) passport office or Urban Transformation Centre (UTC).",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/"
          },
          {
            "step": "Present original MyKad (identity smartcard) for biometric verification.",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/"
          },
          {
            "step": "Choose validity period (5 years or 10 years, if eligible) and pay official statutory fee by debit/credit card.",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/"
          },
          {
            "step": "Capture live biometric facial photo and thumbprints at the counter; collect finished passport typically within 1 hour after payment.",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/"
          }
        ],
        "documents": [
          {
            "document_name": "MyKad (National Identity Card)",
            "requiredness": "required",
            "conditions": "Original MyKad in good condition with functional chip. For children under 12, MyKid and original Birth Certificate required.",
            "accepted_alternatives": [
              "Temporary ID (JPN KPPK 09 / 11)"
            ],
            "original_or_copy": "Original",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Kad Pendaftaran OKU (if claiming disability exemption)",
            "requiredness": "conditional",
            "conditions": "Original OKU card issued by Jabatan Kebajikan Masyarakat (JKM).",
            "accepted_alternatives": [],
            "original_or_copy": "Original + photocopy",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "fees": {
          "currency": "MYR",
          "fiscal_year": 2026,
          "statutory_source": "Passport Regulations (Jabatan Imigresen Malaysia published schedule: https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/)",
          "fee_schedule_by_category": {
            "adult_18_to_59_years": {
              "validity_5_year": 200,
              "validity_10_year": 350
            },
            "applicants_13_to_17_years": {
              "validity_5_year": 200,
              "validity_10_year": "not_eligible"
            },
            "children_under_12_years": {
              "validity_5_year": 100,
              "validity_10_year": "not_eligible"
            },
            "senior_citizens_60_and_older": {
              "validity_5_year": 100,
              "validity_10_year": 175
            },
            "persons_with_disabilities_oku": {
              "validity_5_year": 0,
              "validity_10_year": 0
            },
            "students_under_21_degree_abroad": {
              "validity_5_year": 100,
              "validity_10_year": "not_eligible"
            }
          },
          "lost_passport_replacement_penalties": {
            "standard_adults_13_to_59": {
              "first_loss": 400,
              "second_loss": 700,
              "third_loss": 1200
            },
            "children_under_12_and_oku": {
              "first_loss": 300,
              "second_loss": 600,
              "third_loss": 1100
            }
          },
          "fee_records": [
            {
              "currency": "MYR",
              "amount": 200,
              "base_amount": 200,
              "emergency_surcharge": 0,
              "total_payable": 200,
              "applicant_category": "adult_18_to_59",
              "application_channel": "domestic_counter_or_online",
              "validity_period": "5_years",
              "discount_eligibility": "Standard statutory adult rate for 5-year passport.",
              "applicable_conditions": "Malaysian adults aged 18 to 59.",
              "official_source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "MYR",
              "amount": 350,
              "base_amount": 350,
              "emergency_surcharge": 0,
              "total_payable": 350,
              "applicant_category": "adult_18_to_59",
              "application_channel": "domestic_counter_or_online",
              "validity_period": "10_years",
              "discount_eligibility": "Standard statutory adult rate for 10-year passport.",
              "applicable_conditions": "Malaysian adults aged 18 to 59.",
              "official_source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "MYR",
              "amount": 200,
              "base_amount": 200,
              "emergency_surcharge": 0,
              "total_payable": 200,
              "applicant_category": "applicant_13_to_17",
              "application_channel": "domestic_counter",
              "validity_period": "5_years",
              "discount_eligibility": "Standard rate for applicants aged 13 to 17. Not eligible for 10-year validity.",
              "applicable_conditions": "Applicants aged 13 to 17 years.",
              "official_source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "MYR",
              "amount": 100,
              "base_amount": 100,
              "emergency_surcharge": 0,
              "total_payable": 100,
              "applicant_category": "child_under_12",
              "application_channel": "domestic_counter",
              "validity_period": "5_years",
              "discount_eligibility": "Statutory concession for children under 12 years. Not eligible for 10-year validity.",
              "applicable_conditions": "Children under 12 years of age.",
              "official_source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "MYR",
              "amount": 100,
              "base_amount": 100,
              "emergency_surcharge": 0,
              "total_payable": 100,
              "applicant_category": "senior_60_and_older",
              "application_channel": "domestic_counter_or_online",
              "validity_period": "5_years",
              "discount_eligibility": "Statutory 50% concession for senior citizens aged 60+ (5-year passport).",
              "applicable_conditions": "Senior citizens aged 60 and older.",
              "official_source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "MYR",
              "amount": 175,
              "base_amount": 175,
              "emergency_surcharge": 0,
              "total_payable": 175,
              "applicant_category": "senior_60_and_older",
              "application_channel": "domestic_counter_or_online",
              "validity_period": "10_years",
              "discount_eligibility": "Statutory 50% concession for senior citizens aged 60+ (10-year passport).",
              "applicable_conditions": "Senior citizens aged 60 and older.",
              "official_source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "MYR",
              "amount": 0,
              "base_amount": 0,
              "emergency_surcharge": 0,
              "total_payable": 0,
              "applicant_category": "persons_with_disabilities_oku",
              "application_channel": "domestic_counter",
              "validity_period": "10_years_or_5_years",
              "discount_eligibility": "100% statutory fee exemption for OKU cardholders.",
              "applicable_conditions": "Must present official OKU registration card issued by Department of Social Welfare (JKM).",
              "official_source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "MYR",
              "amount": 400,
              "base_amount": 0,
              "emergency_surcharge": 400,
              "total_payable": 400,
              "applicant_category": "lost_passport_adult_first_loss",
              "application_channel": "domestic_counter",
              "validity_period": "varies",
              "discount_eligibility": "Statutory replacement penalty for first lost passport.",
              "applicable_conditions": "Penalty payable in addition to the new passport fee for adult first loss.",
              "official_source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "MYR",
              "amount": 300,
              "base_amount": 0,
              "emergency_surcharge": 300,
              "total_payable": 300,
              "applicant_category": "lost_passport_child_first_loss",
              "application_channel": "domestic_counter",
              "validity_period": "varies",
              "discount_eligibility": "Statutory replacement penalty for first lost passport (child under 12 / OKU).",
              "applicable_conditions": "Penalty payable in addition to the new passport fee for child/OKU first loss.",
              "official_source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            }
          ]
        },
        "sources": [
          {
            "url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "publisher": "Jabatan Imigresen Malaysia",
            "page_title": "Malaysian International Passport",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Malaysian citizens aged 13 and above can renew their passport online via MyOnline Pasport (imigresen-online.imi.gov.my) or at any JIM counter/UTC.",
            "source_url": "https://imigresen-online.imi.gov.my/eservices/myPasport",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Access MyOnline Pasport portal and enter MyKad number and current passport number.",
            "source_url": "https://imigresen-online.imi.gov.my/eservices/myPasport"
          },
          {
            "step": "Upload photo meeting official JIM specifications (plain white background, dark clothing).",
            "source_url": "https://imigresen-online.imi.gov.my/eservices/myPasport"
          },
          {
            "step": "Pay renewal fee (RM 200 for 5 years, RM 350 for 10 years, or RM 100/175 for seniors) via FPX online banking or credit card.",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/"
          },
          {
            "step": "Collect new passport at the chosen JIM office by presenting original MyKad and old passport booklet for cancellation.",
            "source_url": "https://imigresen-online.imi.gov.my/eservices/myPasport"
          }
        ],
        "documents": [
          {
            "document_name": "Existing Malaysian Passport",
            "requiredness": "required",
            "conditions": "Must be presented upon collection for physical cancellation.",
            "accepted_alternatives": [],
            "source_url": "https://imigresen-online.imi.gov.my/eservices/myPasport",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Original MyKad",
            "requiredness": "required",
            "conditions": "Owner must appear in person to verify fingerprint upon collection.",
            "accepted_alternatives": [],
            "source_url": "https://imigresen-online.imi.gov.my/eservices/myPasport",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://imigresen-online.imi.gov.my/eservices/myPasport",
            "publisher": "Jabatan Imigresen Malaysia",
            "page_title": "MyOnline Pasport Renewal",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Children under 18 receive 5-year validity passports (RM 100 for children under 12; RM 200 for ages 13–17); they are not eligible for 10-year validity.",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Parent or legal guardian who signed consent must accompany the child in person to the immigration office with the child birth certificate and parent MyKad.",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Parent and child attend in person at any JIM passport issuing office or UTC.",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/"
          },
          {
            "step": "Present child MyKid and original Birth Certificate alongside parent MyKad.",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/"
          },
          {
            "step": "Capture child photo and thumbprints at the counter; pay RM 100 fee (under 12) or RM 200 (ages 13–17).",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/"
          }
        ],
        "documents": [
          {
            "document_name": "Child MyKid & Original Birth Certificate (Sijil Kelahiran)",
            "requiredness": "required",
            "conditions": "Both original MyKid and original birth certificate from JPN must be produced.",
            "accepted_alternatives": [],
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Parent / Legal Guardian Original MyKad",
            "requiredness": "required",
            "conditions": "Parent who appears must be the biological parent named on birth certificate or legal guardian with court adoption/custody order.",
            "accepted_alternatives": [],
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "publisher": "Jabatan Imigresen Malaysia",
            "page_title": "Child Passport Guidelines",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "lost_stolen": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "A lost Malaysian passport must be reported to the Royal Malaysia Police (PDRM) immediately, followed by personal appearance at JIM for an investigation interview.",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Statutory penalties apply for lost passport replacement: Adults pay RM 400 (1st loss), RM 700 (2nd loss), or RM 1,200 (3rd loss); children under 12 and OKU pay RM 300 (1st loss), RM 600 (2nd loss), or RM 1,100 (3rd loss), in addition to the passport issuance fee.",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Lodge an official police report at any PDRM station describing when, where, and how the passport was lost.",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/"
          },
          {
            "step": "Attend a JIM passport enforcement counter in person with the certified police report and MyKad.",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/"
          },
          {
            "step": "Complete investigation questionnaire (Borang Soal Selidik Kehilangan Pasport IM.42c) and pay the statutory penalty plus passport fee upon approval.",
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/"
          }
        ],
        "documents": [
          {
            "document_name": "Original Police Report (Laporan Polis)",
            "requiredness": "required",
            "conditions": "Certified police report detailing loss.",
            "accepted_alternatives": [],
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Original MyKad",
            "requiredness": "required",
            "conditions": "Identity verification.",
            "accepted_alternatives": [],
            "source_url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
            "publisher": "Jabatan Imigresen Malaysia",
            "page_title": "Lost Passport Procedures",
            "checked_at": "2026-10-19"
          }
        ]
      }
    }
  },
  "NP": {
    "country_code": "NP",
    "country_name": "Nepal",
    "authority_name": "Department of Passports (राहदानी विभाग), Ministry of Foreign Affairs",
    "official_portal_url": "https://nepalpassport.gov.np/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-01-01",
    "jurisdictions": [
      {
        "name": "District Administration Offices (DAO), Area Administration Offices & DoP Kathmandu",
        "application_channel": "domestic",
        "source_url": "https://emrtds.nepalpassport.gov.np/"
      },
      {
        "name": "Nepali Diplomatic Missions Abroad (Embassies & Consulates General)",
        "application_channel": "consular",
        "source_url": "https://nepalpassport.gov.np/"
      }
    ],
    "age_bands": [
      {
        "label": "Minor under 10 years",
        "min_age": 0,
        "max_age": 9,
        "age_basis_source": "https://nepalpassport.gov.np/"
      },
      {
        "label": "Minor 10 to 15 years",
        "min_age": 10,
        "max_age": 15,
        "age_basis_source": "https://nepalpassport.gov.np/"
      },
      {
        "label": "Adult (16 years and older)",
        "min_age": 16,
        "max_age": null,
        "age_basis_source": "https://nepalpassport.gov.np/"
      }
    ],
    "sources": [
      {
        "url": "https://nepalpassport.gov.np/",
        "publisher": "Department of Passports, Nepal",
        "page_title": "राहदानी विभाग (Department of Passports Official Portal)",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://emrtds.nepalpassport.gov.np/",
        "publisher": "Department of Passports, Nepal",
        "page_title": "Online e-Passport Pre-Enrollment System",
        "checked_at": "2026-10-19"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "All Nepali citizens applying for an e-Passport must pre-enroll online at emrtds.nepalpassport.gov.np and obtain a verified National Identity Card (NID) number.",
            "source_url": "https://emrtds.nepalpassport.gov.np/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Adult passports (16+) are issued with 10-year validity. Minors under 16 are issued with 5-year validity.",
            "source_url": "https://nepalpassport.gov.np/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Fill out online pre-enrollment form on emrtds.nepalpassport.gov.np and select appointment location and time.",
            "source_url": "https://emrtds.nepalpassport.gov.np/"
          },
          {
            "step": "Pay the statutory fee through ConnectIPS, bank voucher, or designated revenue counter.",
            "source_url": "https://nepalpassport.gov.np/"
          },
          {
            "step": "Attend appointment with printed pre-enrollment slip, original Citizenship Certificate, and verified NID number for live biometric photo, fingerprints, and iris capture.",
            "source_url": "https://nepalpassport.gov.np/"
          },
          {
            "step": "Collect the e-Passport upon receiving SMS notification from the issuing office.",
            "source_url": "https://nepalpassport.gov.np/"
          }
        ],
        "documents": [
          {
            "document_name": "Original Nepali Citizenship Certificate (Nagarikta)",
            "requiredness": "required",
            "conditions": "Issued by District Administration Office.",
            "accepted_alternatives": [],
            "original_or_copy": "Original + photocopy",
            "source_url": "https://nepalpassport.gov.np/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "National Identity Card (NID) Number",
            "requiredness": "required",
            "conditions": "Verified NID number (or NID slip) issued by Department of National ID and Civil Registration is mandatory for adult domestic applicants.",
            "accepted_alternatives": [],
            "original_or_copy": "Official NID slip / card",
            "source_url": "https://nepalpassport.gov.np/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Printed Pre-Enrollment Application Slip with Barcode",
            "requiredness": "required",
            "conditions": "Generated from emrtds.nepalpassport.gov.np.",
            "accepted_alternatives": [],
            "original_or_copy": "Printed slip",
            "source_url": "https://emrtds.nepalpassport.gov.np/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "fees": {
          "currency": "NPR",
          "fiscal_year": 2026,
          "statutory_source": "Passport Regulations (Department of Passports, Ministry of Foreign Affairs, Nepal)",
          "standard_domestic_npr": {
            "standard_34_pages_dao": 5000,
            "urgent_34_pages_dop_kathmandu": 12000,
            "frequent_traveller_66_pages_dao": 10000,
            "urgent_66_pages_dop_kathmandu": 20000,
            "lost_damaged_replacement_dao": 10000,
            "lost_damaged_replacement_dop": 17000
          },
          "consular_overseas_usd": {
            "standard_34_pages": 80
          },
          "fee_records": [
            {
              "currency": "NPR",
              "amount": 5000,
              "base_amount": 5000,
              "emergency_surcharge": 0,
              "total_payable": 5000,
              "applicant_category": "general_standard_34p",
              "application_channel": "district_administration_office",
              "validity_period": "10_years_or_5_years",
              "discount_eligibility": "Standard statutory rate for 34-page booklet at DAO level.",
              "applicable_conditions": "Standard DAO processing (approx 2–4 weeks).",
              "official_source_url": "https://nepalpassport.gov.np/",
              "effective_date": "2023-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "NPR",
              "amount": 12000,
              "base_amount": 5000,
              "emergency_surcharge": 7000,
              "total_payable": 12000,
              "applicant_category": "urgent_standard_34p",
              "application_channel": "department_of_passports_kathmandu",
              "validity_period": "10_years_or_5_years",
              "discount_eligibility": "Fast-track urgent service at Department of Passports Tripureshwor.",
              "applicable_conditions": "Delivery within 2–3 business days.",
              "official_source_url": "https://nepalpassport.gov.np/",
              "effective_date": "2023-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "NPR",
              "amount": 10000,
              "base_amount": 10000,
              "emergency_surcharge": 0,
              "total_payable": 10000,
              "applicant_category": "frequent_traveller_66p",
              "application_channel": "district_administration_office",
              "validity_period": "10_years",
              "discount_eligibility": "Standard rate for 66-page booklet.",
              "applicable_conditions": "Standard DAO issuance for frequent travellers.",
              "official_source_url": "https://nepalpassport.gov.np/",
              "effective_date": "2023-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "NPR",
              "amount": 20000,
              "base_amount": 10000,
              "emergency_surcharge": 10000,
              "total_payable": 20000,
              "applicant_category": "urgent_frequent_traveller_66p",
              "application_channel": "department_of_passports_kathmandu",
              "validity_period": "10_years",
              "discount_eligibility": "Fast-track urgent rate for 66-page booklet at DoP.",
              "applicable_conditions": "Urgent issuance at DoP Kathmandu.",
              "official_source_url": "https://nepalpassport.gov.np/",
              "effective_date": "2023-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            }
          ]
        },
        "sources": [
          {
            "url": "https://nepalpassport.gov.np/",
            "publisher": "Department of Passports, Nepal",
            "page_title": "Passport Fees and Tariffs",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Nepali citizens can renew an e-Passport within 1 year before expiry or anytime after expiry by applying through emrtds.nepalpassport.gov.np.",
            "source_url": "https://nepalpassport.gov.np/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Select Renewal option on emrtds.nepalpassport.gov.np, enter old passport number and citizenship details.",
            "source_url": "https://emrtds.nepalpassport.gov.np/"
          },
          {
            "step": "Attend appointment with existing passport booklet, Citizenship certificate, and NID number.",
            "source_url": "https://nepalpassport.gov.np/"
          }
        ],
        "documents": [
          {
            "document_name": "Existing Passport Booklet",
            "requiredness": "required",
            "conditions": "Original old passport booklet.",
            "accepted_alternatives": [],
            "source_url": "https://nepalpassport.gov.np/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Nepali Citizenship Certificate & NID",
            "requiredness": "required",
            "conditions": "Original Nagarikta and verified NID.",
            "accepted_alternatives": [],
            "source_url": "https://nepalpassport.gov.np/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://nepalpassport.gov.np/",
            "publisher": "Department of Passports, Nepal",
            "page_title": "Re-issue of e-Passport",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Passports for minors under 16 have 5-year validity. Issued based on Minor Identity Certificate (Nabalak Parichayapatra) and parents citizenship documents.",
            "source_url": "https://nepalpassport.gov.np/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Parent fills out pre-enrollment for minor using Minor ID Certificate (Nabalak Parichayapatra).",
            "source_url": "https://emrtds.nepalpassport.gov.np/"
          },
          {
            "step": "Child and parent appear in person at DAO or DoP with original birth certificate, Nabalak Parichayapatra, parents citizenship, and marriage registration certificate.",
            "source_url": "https://nepalpassport.gov.np/"
          }
        ],
        "documents": [
          {
            "document_name": "Minor Identity Certificate (Nabalak Parichayapatra)",
            "requiredness": "required",
            "conditions": "Issued by District Administration Office.",
            "accepted_alternatives": [],
            "source_url": "https://nepalpassport.gov.np/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Parents Citizenship Certificates & Marriage Certificate",
            "requiredness": "required",
            "conditions": "Both parents Nagarikta and formal civil marriage registration.",
            "accepted_alternatives": [],
            "source_url": "https://nepalpassport.gov.np/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://nepalpassport.gov.np/",
            "publisher": "Department of Passports, Nepal",
            "page_title": "Minor Passport Requirements",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "lost_stolen": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Lost or damaged passports require an official Nepal Police report and carry a double fee penalty (NPR 10,000 at DAO / NPR 17,000 at DoP Kathmandu).",
            "source_url": "https://nepalpassport.gov.np/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Obtain official police loss verification report from Nepal Police.",
            "source_url": "https://nepalpassport.gov.np/"
          },
          {
            "step": "Pre-enroll online under Lost/Damaged category and attend appointment with police report and Nagarikta.",
            "source_url": "https://nepalpassport.gov.np/"
          }
        ],
        "documents": [
          {
            "document_name": "Nepal Police Loss Report",
            "requiredness": "required",
            "conditions": "Official police verification report certifying passport loss.",
            "accepted_alternatives": [],
            "source_url": "https://nepalpassport.gov.np/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Citizenship Certificate and NID",
            "requiredness": "required",
            "conditions": "Original documents.",
            "accepted_alternatives": [],
            "source_url": "https://nepalpassport.gov.np/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://nepalpassport.gov.np/",
            "publisher": "Department of Passports, Nepal",
            "page_title": "Lost Passport Replacement",
            "checked_at": "2026-10-19"
          }
        ]
      }
    }
  },
  "NZ": {
    "country_code": "NZ",
    "country_name": "New Zealand",
    "authority_name": "Te Tari Taiwhenua · Department of Internal Affairs",
    "official_portal_url": "https://www.passports.govt.nz/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-05-01",
    "jurisdictions": [
      "NZ",
      "NZL",
      "554"
    ],
    "age_bands": {
      "adult_minimum_age": 16,
      "child_upper_age": 15,
      "standard_adult_validity_years": 10,
      "child_validity_years": 5
    },
    "sources": [
      {
        "url": "https://www.passports.govt.nz/passport-costs",
        "publisher": "Te Tari Taiwhenua Department of Internal Affairs",
        "page_title": "Passport Costs & Service Levels",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://www.passports.govt.nz/",
        "publisher": "Te Tari Taiwhenua Department of Internal Affairs",
        "page_title": "Online Passport Application Portal",
        "checked_at": "2026-10-19"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Applicants aged 16 and over receive a 10-year validity passport; children under 16 receive a 5-year validity passport.",
            "source_url": "https://www.passports.govt.nz/passport-costs",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "First-time adult applicants require a RealMe account and an eligible New Zealand identity referee who has known them for at least 1 year and holds a valid NZ passport.",
            "source_url": "https://www.passports.govt.nz/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Log in to passports.govt.nz using a RealMe verified account.",
            "source_url": "https://www.passports.govt.nz/"
          },
          {
            "step": "Upload a digital passport photo meeting DIA technical biometric specifications.",
            "source_url": "https://www.passports.govt.nz/"
          },
          {
            "step": "Provide contact details of an eligible New Zealand passport holder to act as your identity referee.",
            "source_url": "https://www.passports.govt.nz/"
          },
          {
            "step": "Select standard (NZD 247 adult / NZD 144 child), urgent (NZD 494 adult / NZD 391 child), or after-hours callout service (NZD 1,001 adult / NZD 898 child) and pay official fees online. Note courier delivery is an additional cost.",
            "source_url": "https://www.passports.govt.nz/passport-costs"
          }
        ],
        "documents": [
          {
            "document_name": "Digital Passport Photo",
            "requiredness": "required",
            "conditions": "High quality color digital photograph complying with DIA specifications.",
            "accepted_alternatives": [],
            "source_url": "https://www.passports.govt.nz/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Identity Referee Details",
            "requiredness": "required",
            "conditions": "Must be aged 16+, hold a valid NZ passport, have known applicant for 1+ year, not be related or live at same address.",
            "accepted_alternatives": [],
            "source_url": "https://www.passports.govt.nz/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "fees": {
          "currency": "NZD",
          "fiscal_year": 2026,
          "statutory_source": "Passports Act 1992 & Passports Regulations (Department of Internal Affairs published fee schedule)",
          "standard_service_nzd": {
            "adult_10_year": 247,
            "child_5_year": 144,
            "turnaround_working_days": "Up to 10 to 15 working days"
          },
          "urgent_service_nzd": {
            "adult_10_year": 494,
            "child_5_year": 391,
            "turnaround_working_days": "Up to 3 working days"
          },
          "after_hours_callout_service_nzd": {
            "adult_10_year": 1001,
            "child_5_year": 898,
            "turnaround": "Immediate emergency turnaround outside normal business hours"
          },
          "courier_delivery_cost_note": "Courier delivery within New Zealand and international destinations is an additional cost and is not included in the passport fee.",
          "fee_records": [
            {
              "currency": "NZD",
              "amount": 247,
              "base_amount": 247,
              "emergency_surcharge": 0,
              "total_payable": 247,
              "applicant_category": "adult_16_and_over",
              "application_channel": "online_standard",
              "validity_period": "10_years",
              "discount_eligibility": "Standard adult rate.",
              "applicable_conditions": "Standard online service (ready in up to 10–15 working days). Courier delivery is an additional cost.",
              "official_source_url": "https://www.passports.govt.nz/passport-costs",
              "effective_date": "2024-05-27",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "NZD",
              "amount": 144,
              "base_amount": 144,
              "emergency_surcharge": 0,
              "total_payable": 144,
              "applicant_category": "child_under_16",
              "application_channel": "online_standard",
              "validity_period": "5_years",
              "discount_eligibility": "Statutory child concession.",
              "applicable_conditions": "Standard service for children under 16 (ready in up to 10–15 working days). Courier delivery is an additional cost.",
              "official_source_url": "https://www.passports.govt.nz/passport-costs",
              "effective_date": "2024-05-27",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "NZD",
              "amount": 494,
              "base_amount": 494,
              "emergency_surcharge": 0,
              "total_payable": 494,
              "applicant_category": "adult_urgent",
              "application_channel": "online_urgent",
              "validity_period": "10_years",
              "discount_eligibility": "Official urgent service total fee.",
              "applicable_conditions": "Urgent service total fee (ready in up to 3 working days). Courier delivery is an additional cost.",
              "official_source_url": "https://www.passports.govt.nz/passport-costs",
              "effective_date": "2024-05-27",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "NZD",
              "amount": 391,
              "base_amount": 391,
              "emergency_surcharge": 0,
              "total_payable": 391,
              "applicant_category": "child_urgent",
              "application_channel": "online_urgent",
              "validity_period": "5_years",
              "discount_eligibility": "Official urgent child service total fee.",
              "applicable_conditions": "Urgent service total fee for children under 16 (ready in up to 3 working days). Courier delivery is an additional cost.",
              "official_source_url": "https://www.passports.govt.nz/passport-costs",
              "effective_date": "2024-05-27",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "NZD",
              "amount": 1001,
              "base_amount": 1001,
              "emergency_surcharge": 0,
              "total_payable": 1001,
              "applicant_category": "adult_after_hours_callout",
              "application_channel": "after_hours_callout",
              "validity_period": "10_years",
              "discount_eligibility": "Total official fee for after-hours emergency callout service.",
              "applicable_conditions": "Total fee for urgent after-hours callout service outside normal business hours. Courier delivery is an additional cost.",
              "official_source_url": "https://www.passports.govt.nz/passport-costs",
              "effective_date": "2024-05-27",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "NZD",
              "amount": 898,
              "base_amount": 898,
              "emergency_surcharge": 0,
              "total_payable": 898,
              "applicant_category": "child_after_hours_callout",
              "application_channel": "after_hours_callout",
              "validity_period": "5_years",
              "discount_eligibility": "Total official fee for child after-hours emergency callout service.",
              "applicable_conditions": "Total fee for child after-hours callout service outside normal business hours. Courier delivery is an additional cost.",
              "official_source_url": "https://www.passports.govt.nz/passport-costs",
              "effective_date": "2024-05-27",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            }
          ]
        },
        "sources": [
          {
            "url": "https://www.passports.govt.nz/passport-costs",
            "publisher": "Te Tari Taiwhenua Department of Internal Affairs",
            "page_title": "Passport Costs",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Adults renewing an existing passport can apply online using their previous passport details without needing a new identity referee if identity was already confirmed.",
            "source_url": "https://www.passports.govt.nz/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Log in to passports.govt.nz, enter previous passport number, and upload new digital photo.",
            "source_url": "https://www.passports.govt.nz/"
          },
          {
            "step": "Pay official fee (Standard NZD 247 or Urgent NZD 494) online; courier delivery is an additional cost.",
            "source_url": "https://www.passports.govt.nz/passport-costs"
          }
        ],
        "documents": [
          {
            "document_name": "Previous New Zealand Passport",
            "requiredness": "required",
            "conditions": "Number and expiry date entered online; physical book does not normally need to be returned if expired.",
            "accepted_alternatives": [],
            "source_url": "https://www.passports.govt.nz/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.passports.govt.nz/passport-costs",
            "publisher": "Te Tari Taiwhenua Department of Internal Affairs",
            "page_title": "Renew Adult Passport",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Child passports have 5-year maximum validity for applicants under 16. Both parents or legal guardians must provide consent.",
            "source_url": "https://www.passports.govt.nz/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Parent or legal guardian applies online at passports.govt.nz on behalf of the child.",
            "source_url": "https://www.passports.govt.nz/"
          },
          {
            "step": "Provide consent details and an identity referee who has known the child for at least 1 year (or since birth).",
            "source_url": "https://www.passports.govt.nz/"
          },
          {
            "step": "Pay child statutory fee (Standard NZD 144 or Urgent NZD 391); courier delivery is an additional cost.",
            "source_url": "https://www.passports.govt.nz/passport-costs"
          }
        ],
        "documents": [
          {
            "document_name": "Child Digital Photo",
            "requiredness": "required",
            "conditions": "Must meet DIA biometric requirements; neutral expression with eyes open.",
            "accepted_alternatives": [],
            "source_url": "https://www.passports.govt.nz/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Parental Consent & Referee Confirmation",
            "requiredness": "required",
            "conditions": "Consent given online or via signed consent form.",
            "accepted_alternatives": [],
            "source_url": "https://www.passports.govt.nz/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.passports.govt.nz/passport-costs",
            "publisher": "Te Tari Taiwhenua Department of Internal Affairs",
            "page_title": "Child Passports",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "lost_stolen": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Lost, stolen, or damaged passports must be cancelled immediately online or by phone to prevent identity fraud.",
            "source_url": "https://www.passports.govt.nz/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Report the passport lost or stolen immediately on passports.govt.nz or by calling DIA.",
            "source_url": "https://www.passports.govt.nz/"
          },
          {
            "step": "Submit replacement application online and pay the replacement fee (Standard NZD 247 adult / NZD 144 child, or Urgent NZD 494 / NZD 391). Courier delivery is an additional cost.",
            "source_url": "https://www.passports.govt.nz/passport-costs"
          }
        ],
        "documents": [
          {
            "document_name": "Statement of Lost/Stolen Passport",
            "requiredness": "required",
            "conditions": "Details of when and where the passport was lost or stolen.",
            "accepted_alternatives": [],
            "source_url": "https://www.passports.govt.nz/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.passports.govt.nz/passport-costs",
            "publisher": "Te Tari Taiwhenua Department of Internal Affairs",
            "page_title": "Lost or Stolen Passports",
            "checked_at": "2026-10-19"
          }
        ]
      }
    }
  },
  "SG": {
    "country_code": "SG",
    "country_name": "Singapore",
    "authority_name": "Immigration & Checkpoints Authority (ICA), Ministry of Home Affairs",
    "official_portal_url": "https://www.ica.gov.sg/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-01-01",
    "jurisdictions": [
      {
        "name": "MyICA Online Portal & ICA Building (Kallang Road) / SingPost Outlets",
        "application_channel": "domestic",
        "source_url": "https://eservices.ica.gov.sg/esvclandingpage/myica"
      },
      {
        "name": "Singapore Overseas Missions (High Commissions, Embassies, Consulates)",
        "application_channel": "consular",
        "source_url": "https://www.mfa.gov.sg/"
      }
    ],
    "age_bands": [
      {
        "label": "Child (Under 16 years of age)",
        "min_age": 0,
        "max_age": 15,
        "age_basis_source": "https://www.ica.gov.sg/"
      },
      {
        "label": "Adult (16 years and older)",
        "min_age": 16,
        "max_age": null,
        "age_basis_source": "https://www.ica.gov.sg/"
      }
    ],
    "sources": [
      {
        "url": "https://www.ica.gov.sg/",
        "publisher": "Immigration & Checkpoints Authority, Singapore",
        "page_title": "ICA Singapore Official Portal",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://www.ica.gov.sg/enter-transit-depart/more-information/singapore-citizenship/singapore-passport",
        "publisher": "Immigration & Checkpoints Authority, Singapore",
        "page_title": "Apply for or Renew Singapore Passport",
        "checked_at": "2026-10-19"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Singapore citizens must submit applications online through MyICA using Singpass authentication.",
            "source_url": "https://www.ica.gov.sg/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Passports issued to citizens aged 16 and above have a 10-year validity. Children under 16 are issued 5-year passports.",
            "source_url": "https://www.ica.gov.sg/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Log in to MyICA using Singpass, complete online application form, and upload passport photo meeting ICA specifications.",
            "source_url": "https://www.ica.gov.sg/"
          },
          {
            "step": "Pay the SGD 70 application fee online via PayNow, credit/debit card, or internet banking.",
            "source_url": "https://www.ica.gov.sg/"
          },
          {
            "step": "Book collection appointment online upon receiving email/SMS notification that passport is ready.",
            "source_url": "https://www.ica.gov.sg/"
          },
          {
            "step": "Collect passport in person at selected SingPost post office, or at ICA Building via automated iCollect biometric kiosks.",
            "source_url": "https://www.ica.gov.sg/"
          }
        ],
        "documents": [
          {
            "document_name": "Digital Passport Photograph",
            "requiredness": "required",
            "conditions": "Taken within last 3 months, plain white background, matt or semi-matt finish, even lighting without shadows or glasses glare.",
            "accepted_alternatives": [],
            "original_or_copy": "Digital upload (JPEG, max 2MB)",
            "source_url": "https://www.ica.gov.sg/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "National Registration Identity Card (NRIC)",
            "requiredness": "required",
            "conditions": "Mandatory for citizens aged 15 and above upon collection.",
            "accepted_alternatives": [],
            "original_or_copy": "Original physical NRIC",
            "source_url": "https://www.ica.gov.sg/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "fees": {
          "currency": "SGD",
          "fiscal_year": 2026,
          "statutory_source": "Passports Act 2007 & Passports Regulations (Immigration & Checkpoints Authority)",
          "standard_online_sgd": 70,
          "counter_in_person_sgd": 80,
          "lost_passport_penalty_fees_sgd": {
            "first_loss": 50,
            "second_and_subsequent_loss": 100
          },
          "damaged_passport_fee_sgd": 50,
          "fee_records": [
            {
              "currency": "SGD",
              "amount": 70,
              "base_amount": 70,
              "emergency_surcharge": 0,
              "total_payable": 70,
              "applicant_category": "general_online",
              "application_channel": "online_myica",
              "validity_period": "10_years_or_5_years",
              "discount_eligibility": "Standard rate for all Singapore citizens applying online.",
              "applicable_conditions": "Online submission via MyICA.",
              "official_source_url": "https://www.ica.gov.sg/",
              "effective_date": "2021-10-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "SGD",
              "amount": 80,
              "base_amount": 80,
              "emergency_surcharge": 0,
              "total_payable": 80,
              "applicant_category": "counter_applicant",
              "application_channel": "in_person_ica",
              "validity_period": "10_years_or_5_years",
              "discount_eligibility": "In-person counter surcharge (+SGD 10).",
              "applicable_conditions": "Exceptional counter application at ICA Building.",
              "official_source_url": "https://www.ica.gov.sg/",
              "effective_date": "2021-10-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "SGD",
              "amount": 120,
              "base_amount": 70,
              "emergency_surcharge": 50,
              "total_payable": 120,
              "applicant_category": "first_loss_replacement",
              "application_channel": "online_myica",
              "validity_period": "10_years_or_5_years",
              "discount_eligibility": "Includes statutory SGD 50 first loss fee + SGD 70 booklet fee.",
              "applicable_conditions": "Replacement for 1st lost passport.",
              "official_source_url": "https://www.ica.gov.sg/",
              "effective_date": "2021-10-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "SGD",
              "amount": 170,
              "base_amount": 70,
              "emergency_surcharge": 100,
              "total_payable": 170,
              "applicant_category": "repeat_loss_replacement",
              "application_channel": "online_myica",
              "validity_period": "10_years_or_5_years",
              "discount_eligibility": "Includes statutory SGD 100 repeat loss penalty + SGD 70 booklet fee.",
              "applicable_conditions": "Replacement for 2nd or subsequent loss within 3 years.",
              "official_source_url": "https://www.ica.gov.sg/",
              "effective_date": "2021-10-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            }
          ]
        },
        "sources": [
          {
            "url": "https://www.ica.gov.sg/",
            "publisher": "Immigration & Checkpoints Authority, Singapore",
            "page_title": "Passport Fees & Penalties",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Citizens can apply for renewal anytime online; remaining validity up to 9 months will be carried over to the new 10-year passport.",
            "source_url": "https://www.ica.gov.sg/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Log in to MyICA with Singpass, submit renewal application, and upload new photograph.",
            "source_url": "https://www.ica.gov.sg/"
          },
          {
            "step": "Bring existing physical passport upon collection for invalidation.",
            "source_url": "https://www.ica.gov.sg/"
          }
        ],
        "documents": [
          {
            "document_name": "Existing Passport Booklet",
            "requiredness": "required",
            "conditions": "Must be brought to collection appointment for physical cancellation.",
            "accepted_alternatives": [],
            "source_url": "https://www.ica.gov.sg/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.ica.gov.sg/",
            "publisher": "Immigration & Checkpoints Authority, Singapore",
            "page_title": "Passport Renewal",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Child passports (under 16) are valid for 5 years. A parent must apply on behalf of the child using the parents Singpass account.",
            "source_url": "https://www.ica.gov.sg/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Parent logs into MyICA, selects Child Passport, inputs child birth certificate number, and uploads child photo.",
            "source_url": "https://www.ica.gov.sg/"
          },
          {
            "step": "Parent collects passport with child (child must be present for biometric identity confirmation if aged 6 and above).",
            "source_url": "https://www.ica.gov.sg/"
          }
        ],
        "documents": [
          {
            "document_name": "Child Birth Certificate or Citizenship Certificate",
            "requiredness": "required",
            "conditions": "Verified electronically against Dukcapil/ICA national registries.",
            "accepted_alternatives": [],
            "source_url": "https://www.ica.gov.sg/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.ica.gov.sg/",
            "publisher": "Immigration & Checkpoints Authority, Singapore",
            "page_title": "Child Passport Application",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "lost_stolen": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Lost passports must be reported immediately via MyICA e-Service. First loss carries a statutory penalty of SGD 50; repeat loss within 3 years carries SGD 100 penalty.",
            "source_url": "https://www.ica.gov.sg/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Report lost passport immediately online through MyICA Report Lost Passport e-Service.",
            "source_url": "https://www.ica.gov.sg/"
          },
          {
            "step": "If stolen or lost overseas, lodge a report with the local police department.",
            "source_url": "https://www.ica.gov.sg/"
          },
          {
            "step": "Apply for replacement passport online and pay replacement fee plus loss penalty.",
            "source_url": "https://www.ica.gov.sg/"
          }
        ],
        "documents": [
          {
            "document_name": "Online Loss Declaration / Police Report",
            "requiredness": "required",
            "conditions": "Police report mandatory if passport was stolen or lost through crime.",
            "accepted_alternatives": [],
            "source_url": "https://www.ica.gov.sg/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.ica.gov.sg/",
            "publisher": "Immigration & Checkpoints Authority, Singapore",
            "page_title": "Report Lost or Damaged Passport",
            "checked_at": "2026-10-19"
          }
        ]
      }
    }
  },
  "ES": {
    "country_code": "ES",
    "country_name": "Spain",
    "authority_name": "Dirección General de la Policía (Policía Nacional, Ministerio del Interior) & MAEC",
    "official_portal_url": "https://www.dgp.mir.es/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2026-01-01",
    "jurisdictions": [
      {
        "name": "Comisarías de Policía Nacional (Cita Previa en España - Expedición en el acto)",
        "application_channel": "domestic",
        "source_url": "https://www.citapreviadnie.es/"
      },
      {
        "name": "Consulados Generales de España en el Exterior (Registro de Matrícula Consular)",
        "application_channel": "consular",
        "source_url": "https://www.exteriores.gob.es/"
      }
    ],
    "age_bands": [
      {
        "label": "Menores de 5 años",
        "min_age": 0,
        "max_age": 4,
        "age_basis_source": "https://www.dgp.mir.es/"
      },
      {
        "label": "Menores y jóvenes (5 a 29 años)",
        "min_age": 5,
        "max_age": 29,
        "age_basis_source": "https://www.dgp.mir.es/"
      },
      {
        "label": "Adultos (30 años en adelante)",
        "min_age": 30,
        "max_age": null,
        "age_basis_source": "https://www.dgp.mir.es/"
      }
    ],
    "sources": [
      {
        "url": "https://www.dgp.mir.es/",
        "publisher": "Policía Nacional, Ministerio del Interior, España",
        "page_title": "Documentación y Pasaportes",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://www.citapreviadnie.es/",
        "publisher": "Policía Nacional, España",
        "page_title": "Cita Previa DNI y Pasaporte",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Pasaportes-y-otros-documentos.aspx",
        "publisher": "Ministerio de Asuntos Exteriores, Unión Europea y Cooperación (MAEC)",
        "page_title": "Pasaportes y Salvoconductos en el Exterior",
        "checked_at": "2026-10-19"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Spanish citizens must schedule an in-person appointment at a Policía Nacional station (domestically) or Spanish Consulate (abroad). The passport is manufactured and delivered on the spot during domestic police appointments.",
            "source_url": "https://www.dgp.mir.es/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Validity: 2 years for children under 5; 5 years for applicants aged 5 to 29; 10 years for adults aged 30 and older.",
            "source_url": "https://www.dgp.mir.es/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Book appointment (Cita Previa) online at citapreviadnie.es or phone 060.",
            "source_url": "https://www.citapreviadnie.es/"
          },
          {
            "step": "Attend appointment at designated Comisaría de Policía with valid DNI, photograph, and statutory fee.",
            "source_url": "https://www.dgp.mir.es/"
          },
          {
            "step": "Provide live fingerprints, verify digital data on counter terminal, and pay €30.00 in cash or card (or pre-paid online).",
            "source_url": "https://www.dgp.mir.es/"
          },
          {
            "step": "Receive the physical biometric electronic passport immediately in person before leaving the counter.",
            "source_url": "https://www.dgp.mir.es/"
          }
        ],
        "documents": [
          {
            "document_name": "Documento Nacional de Identidad (DNI)",
            "requiredness": "required",
            "conditions": "Original DNI in force (mandatory for all Spanish citizens resident in Spain aged 14+).",
            "accepted_alternatives": [],
            "original_or_copy": "Original DNI",
            "source_url": "https://www.dgp.mir.es/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Recent Color Photograph (32 x 26 mm)",
            "requiredness": "conditional",
            "conditions": "White background, front view. Not required if DNI was renewed recently at a station with digital capture.",
            "accepted_alternatives": [],
            "original_or_copy": "Original physical photo",
            "source_url": "https://www.dgp.mir.es/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "fees": {
          "currency": "EUR",
          "fiscal_year": 2026,
          "statutory_source": "Ley de Presupuestos Generales del Estado & Tasas de la Policía Nacional",
          "standard_domestic_eur": 30,
          "large_family_exemption_eur": 0,
          "fee_records": [
            {
              "currency": "EUR",
              "amount": 30,
              "base_amount": 30,
              "emergency_surcharge": 0,
              "total_payable": 30,
              "applicant_category": "general_standard",
              "application_channel": "domestic_police_station",
              "validity_period": "2_5_or_10_years",
              "discount_eligibility": "Standard statutory rate for Spanish electronic passport.",
              "applicable_conditions": "Standard issuance at Comisarías de Policía.",
              "official_source_url": "https://www.dgp.mir.es/",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "EUR",
              "amount": 0,
              "base_amount": 0,
              "emergency_surcharge": 0,
              "total_payable": 0,
              "applicant_category": "familia_numerosa",
              "application_channel": "domestic_police_station",
              "validity_period": "2_5_or_10_years",
              "discount_eligibility": "100% statutory fee exemption.",
              "applicable_conditions": "Must present valid accreditation card of Familia Numerosa (General or Especial) under Ley 40/2003.",
              "official_source_url": "https://www.dgp.mir.es/",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            }
          ]
        },
        "sources": [
          {
            "url": "https://www.dgp.mir.es/",
            "publisher": "Policía Nacional, España",
            "page_title": "Tasa de Expedición del Pasaporte",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Passports can be renewed when valid for less than 1 year or when all pages are full.",
            "source_url": "https://www.dgp.mir.es/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Book appointment on citapreviadnie.es.",
            "source_url": "https://www.citapreviadnie.es/"
          },
          {
            "step": "Bring valid DNI and previous passport booklet to the appointment; new passport is issued on the spot.",
            "source_url": "https://www.dgp.mir.es/"
          }
        ],
        "documents": [
          {
            "document_name": "Existing Passport Booklet & Valid DNI",
            "requiredness": "required",
            "conditions": "Old passport is physically perforated and returned.",
            "accepted_alternatives": [],
            "source_url": "https://www.dgp.mir.es/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.dgp.mir.es/",
            "publisher": "Policía Nacional, España",
            "page_title": "Renovación de Pasaporte",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Minors must appear in person accompanied by all persons exercising parental authority (patria potestad) or provide formal notary consent.",
            "source_url": "https://www.dgp.mir.es/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Both parents attend the appointment with the minor and sign the official parental consent form before the police officer.",
            "source_url": "https://www.dgp.mir.es/"
          }
        ],
        "documents": [
          {
            "document_name": "Consentimiento Expreso de Quienes Ejerzan la Patria Potestad",
            "requiredness": "required",
            "conditions": "Executed in person before the police or via notarial deed/judicial resolution.",
            "accepted_alternatives": [
              "Poder Notarial de consentimiento",
              "Resolución judicial de patria potestad exclusiva"
            ],
            "source_url": "https://www.dgp.mir.es/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Certificación Literal de Nacimiento del Registro Civil",
            "requiredness": "conditional",
            "conditions": "Required if minor does not hold a DNI; issued within last 6 months for passport purposes.",
            "accepted_alternatives": [],
            "source_url": "https://www.dgp.mir.es/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.dgp.mir.es/",
            "publisher": "Policía Nacional, España",
            "page_title": "Pasaportes para Menores",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "lost_stolen": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "A lost or stolen passport must be reported immediately (Denuncia previa) before a replacement or provisional passport can be issued.",
            "source_url": "https://www.dgp.mir.es/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "File a theft or loss complaint at a Policía Nacional or Guardia Civil station (or foreign police abroad).",
            "source_url": "https://www.dgp.mir.es/"
          },
          {
            "step": "Book appointment and present complaint copy to obtain replacement passport or temporary Salvoconducto (consular travel document).",
            "source_url": "https://www.dgp.mir.es/"
          }
        ],
        "documents": [
          {
            "document_name": "Denuncia por Pérdida o Sustracción",
            "requiredness": "required",
            "conditions": "Official police complaint document.",
            "accepted_alternatives": [],
            "source_url": "https://www.dgp.mir.es/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.dgp.mir.es/",
            "publisher": "Policía Nacional, España",
            "page_title": "Sustracción o Extravío de Pasaporte",
            "checked_at": "2026-10-19"
          }
        ]
      }
    }
  },
  "LK": {
    "country_code": "LK",
    "country_name": "Sri Lanka",
    "authority_name": "Department of Immigration and Emigration (DIE / Aapada)",
    "official_portal_url": "https://www.immigration.gov.lk/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2024-01-01",
    "jurisdictions": [
      "LK",
      "LKA",
      "144"
    ],
    "age_bands": {
      "adult_minimum_age": 16,
      "child_upper_age": 15,
      "standard_adult_validity_years": 10,
      "child_minor_validity_years": 3
    },
    "sources": [
      {
        "url": "https://www.immigration.gov.lk/pages_e.php?id=8",
        "publisher": "Department of Immigration and Emigration Sri Lanka",
        "page_title": "Issuance of Passports & Fees",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://www.immigration.gov.lk/",
        "publisher": "Department of Immigration and Emigration Sri Lanka",
        "page_title": "Official Portal of the Department of Immigration & Emigration",
        "checked_at": "2026-10-19"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Sri Lankan citizens aged 16 and over are issued standard 10-year validity All Countries passports.",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Children under 16 years of age may be issued either a 3-year minor passport (Normal: LKR 3,000 / Urgent: LKR 9,000) or a standard 10-year passport (Normal: LKR 10,000 / Urgent: LKR 20,000) upon submission of parental consent.",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Applicants must obtain an official digital studio photo acknowledgment receipt from an authorized studio certified by the Department of Immigration and Emigration before attending biometric enrollment.",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Visit an authorized photo studio certified by DIE to have a digital photograph taken and obtain a studio acknowledgment receipt with barcode.",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8"
          },
          {
            "step": "Complete Form K. 35 A (Application for a Sri Lankan Travel Document) in English and local language.",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8"
          },
          {
            "step": "Attend in person at DIE Head Office (Suhurupaya, Battaramulla) or regional offices (Kandy, Matara, Vavuniya, Kurunegala) for biometric fingerprint capture.",
            "source_url": "https://www.immigration.gov.lk/"
          },
          {
            "step": "Pay official fee at the bank counter inside DIE: All Countries Normal (LKR 10,000) or Urgent One-Day Service (LKR 20,000). Urgent passports are issued on the same day at Battaramulla.",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8"
          }
        ],
        "documents": [
          {
            "document_name": "National Identity Card (NIC)",
            "requiredness": "required",
            "conditions": "Original NIC issued by Department for Registration of Persons plus photocopy.",
            "accepted_alternatives": [],
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Original Birth Certificate",
            "requiredness": "required",
            "conditions": "Must be issued by Divisional Secretariat (certified copy issued within 3 months recommended).",
            "accepted_alternatives": [],
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Photo Studio Digital Acknowledgment Receipt",
            "requiredness": "required",
            "conditions": "Official acknowledgment slip containing reference number from DIE-authorized digital photo studio.",
            "accepted_alternatives": [],
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          }
        ],
        "fees": {
          "currency": "LKR",
          "fiscal_year": 2026,
          "statutory_source": "Official Gazette Extraordinary of the Democratic Socialist Republic of Sri Lanka & DIE Fee Schedule (https://www.immigration.gov.lk/pages_e.php?id=8)",
          "standard_domestic_lkr": {
            "all_countries_normal": 10000,
            "all_countries_urgent_one_day": 20000,
            "child_under_16_three_year_normal": 3000,
            "child_under_16_three_year_urgent_one_day": 9000
          },
          "lost_passport_conditional_penalties_lkr": {
            "lost_within_1_year_of_issue": 20000,
            "lost_after_1_year_with_validity_remaining": 15000,
            "lost_after_validity_expired": 0
          },
          "fee_records": [
            {
              "currency": "LKR",
              "amount": 10000,
              "base_amount": 10000,
              "emergency_surcharge": 0,
              "total_payable": 10000,
              "applicant_category": "adult_16_and_over",
              "application_channel": "domestic_normal",
              "validity_period": "10_years",
              "discount_eligibility": "Standard All Countries statutory fee (Normal service).",
              "applicable_conditions": "All Countries 10-year validity passport under normal processing.",
              "official_source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "LKR",
              "amount": 20000,
              "base_amount": 20000,
              "emergency_surcharge": 0,
              "total_payable": 20000,
              "applicant_category": "adult_16_and_over_urgent",
              "application_channel": "domestic_urgent_one_day",
              "validity_period": "10_years",
              "discount_eligibility": "Urgent One-Day Service rate (issued same day at Battaramulla Head Office).",
              "applicable_conditions": "All Countries 10-year validity passport issued same day.",
              "official_source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "LKR",
              "amount": 3000,
              "base_amount": 3000,
              "emergency_surcharge": 0,
              "total_payable": 3000,
              "applicant_category": "child_under_16_three_year",
              "application_channel": "domestic_normal",
              "validity_period": "3_years",
              "discount_eligibility": "Statutory concession for children under 16 selecting 3-year validity (Normal service).",
              "applicable_conditions": "Children under 16 years for 3-year validity.",
              "official_source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "LKR",
              "amount": 9000,
              "base_amount": 9000,
              "emergency_surcharge": 0,
              "total_payable": 9000,
              "applicant_category": "child_under_16_three_year_urgent",
              "application_channel": "domestic_urgent_one_day",
              "validity_period": "3_years",
              "discount_eligibility": "Statutory Urgent One-Day rate for children under 16 selecting 3-year validity.",
              "applicable_conditions": "Children under 16 years for 3-year validity under urgent same-day processing.",
              "official_source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "LKR",
              "amount": 20000,
              "base_amount": 0,
              "emergency_surcharge": 20000,
              "total_payable": 20000,
              "applicant_category": "lost_passport_penalty_under_1_year",
              "application_channel": "domestic_penalty",
              "validity_period": "varies",
              "discount_eligibility": "Statutory penalty for passport lost within 1 year of issue date.",
              "applicable_conditions": "Penalty payable in addition to the passport issuance fee if the lost passport was issued within the preceding 12 months.",
              "official_source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "LKR",
              "amount": 15000,
              "base_amount": 0,
              "emergency_surcharge": 15000,
              "total_payable": 15000,
              "applicant_category": "lost_passport_penalty_over_1_year",
              "application_channel": "domestic_penalty",
              "validity_period": "varies",
              "discount_eligibility": "Statutory penalty for passport lost after 1 year of issue date with validity remaining.",
              "applicable_conditions": "Penalty payable in addition to the passport issuance fee if the lost passport was issued more than 1 year ago and has unexpired validity.",
              "official_source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
              "effective_date": "2024-01-01",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            }
          ]
        },
        "sources": [
          {
            "url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "publisher": "Department of Immigration and Emigration Sri Lanka",
            "page_title": "Passport Fees and Processing Services",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Sri Lankan citizens renewing an expired or expiring passport must submit their previous passport booklet for cancellation.",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Obtain digital photo studio acknowledgment slip and complete Form K. 35 A.",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8"
          },
          {
            "step": "Attend DIE office with original NIC, Birth Certificate, and previous passport booklet.",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8"
          },
          {
            "step": "Pay renewal fee (Normal LKR 10,000 or Urgent LKR 20,000).",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8"
          }
        ],
        "documents": [
          {
            "document_name": "Previous Sri Lankan Passport Booklet",
            "requiredness": "required",
            "conditions": "Original passport booklet; cancelled and returned to holder.",
            "accepted_alternatives": [],
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Original National Identity Card (NIC)",
            "requiredness": "required",
            "conditions": "Plus copy.",
            "accepted_alternatives": [],
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "publisher": "Department of Immigration and Emigration Sri Lanka",
            "page_title": "Renewal Requirements",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "For children under 16, parents may opt for a 3-year minor passport (Normal: LKR 3,000 / Urgent: LKR 9,000) or a standard 10-year passport (Normal: LKR 10,000 / Urgent: LKR 20,000).",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Consent of both biological parents or legally appointed guardian is mandatory, confirmed via Form K. 35 A and letter of consent.",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Take digital photo at DIE-certified photo studio for child and receive acknowledgment receipt.",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8"
          },
          {
            "step": "Both parents accompany the child to DIE with original birth certificate, parents NICs, and marriage certificate.",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8"
          },
          {
            "step": "Pay child statutory fee (3-year: LKR 3,000 normal / LKR 9,000 urgent; 10-year: LKR 10,000 normal / LKR 20,000 urgent).",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8"
          }
        ],
        "documents": [
          {
            "document_name": "Original Child Birth Certificate",
            "requiredness": "required",
            "conditions": "Issued by Registrar of Births / Divisional Secretariat.",
            "accepted_alternatives": [],
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Parents NICs & Marriage Certificate",
            "requiredness": "required",
            "conditions": "Originals and copies of both parents national ID cards.",
            "accepted_alternatives": [],
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Letter of Parental Consent",
            "requiredness": "required",
            "conditions": "Signed by both parents granting consent for passport issuance.",
            "accepted_alternatives": [],
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "publisher": "Department of Immigration and Emigration Sri Lanka",
            "page_title": "Child Passport Requirements",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "lost_stolen": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Lost passports must be reported immediately to the nearest police station to obtain a certified copy of the complaint (Form D.I.E. 39).",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Statutory penalty depends on date of issuance: LKR 20,000 if lost within 1 year of issue date; LKR 15,000 if lost after 1 year with validity remaining. No penalty applies if validity had already expired before loss.",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Lodge complaint at local police station and obtain certified copy of police entry / Form D.I.E. 39.",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8"
          },
          {
            "step": "Obtain digital studio photo acknowledgment receipt.",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8"
          },
          {
            "step": "Attend DIE office with police report, NIC, and birth certificate; pay passport fee plus conditional penalty (LKR 20,000 if <1 year; LKR 15,000 if >1 year).",
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8"
          }
        ],
        "documents": [
          {
            "document_name": "Police Complaint Certified Copy / Form D.I.E. 39",
            "requiredness": "required",
            "conditions": "Original stamped police complaint citing lost passport details.",
            "accepted_alternatives": [],
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Original National Identity Card (NIC)",
            "requiredness": "required",
            "conditions": "Identity verification.",
            "accepted_alternatives": [],
            "source_url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.immigration.gov.lk/pages_e.php?id=8",
            "publisher": "Department of Immigration and Emigration Sri Lanka",
            "page_title": "Lost Passport Replacement",
            "checked_at": "2026-10-19"
          }
        ]
      }
    }
  },
  "ID": {
    "country_code": "ID",
    "country_name": "Indonesia",
    "authority_name": "Direktorat Jenderal Imigrasi (Ditjen Imigrasi, Kementerian Hukum dan HAM)",
    "official_portal_url": "https://www.imigrasi.go.id/",
    "rule_pack_status": "verified",
    "last_reviewed": "2026-10-19",
    "reviewed_by": "PassportReady Senior Research Analyst",
    "effective_from": "2024-12-18",
    "jurisdictions": [
      "ID",
      "IDN",
      "360"
    ],
    "age_bands": {
      "adult_minimum_age": 17,
      "child_upper_age": 16,
      "standard_adult_validity_years": 10,
      "child_validity_years": 5
    },
    "sources": [
      {
        "url": "https://www.imigrasi.go.id/id/biaya-paspor/",
        "publisher": "Direktorat Jenderal Imigrasi",
        "page_title": "Tarif Paspor dan Penerimaan Negara Bukan Pajak (PNBP)",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-untuk-masyarakat-secara-umum/",
        "publisher": "Direktorat Jenderal Imigrasi",
        "page_title": "Permohonan Paspor Baru Umum",
        "checked_at": "2026-10-19"
      },
      {
        "url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-anak/",
        "publisher": "Direktorat Jenderal Imigrasi",
        "page_title": "Permohonan Paspor Baru Anak di Bawah 17 Tahun",
        "checked_at": "2026-10-19"
      }
    ],
    "services": {
      "first_passport": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Under Permenkumham No. 18/2022, 10-year validity is granted to Indonesian citizens aged 17 and older or those who are legally married.",
            "source_url": "https://www.imigrasi.go.id/id/biaya-paspor/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Citizens under 17 years of age (who are unmarried) and dual-nationality children are granted passports with a maximum validity of 5 years.",
            "source_url": "https://www.imigrasi.go.id/id/biaya-paspor/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "All domestic regular applications must be registered in advance through the official Aplikasi M-Paspor.",
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-untuk-masyarakat-secara-umum/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Download and register on Aplikasi M-Paspor (official Ditjen Imigrasi mobile app).",
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-untuk-masyarakat-secara-umum/"
          },
          {
            "step": "Select passport type (Non-electronic or Electronic) and validity period (5 years for under 17 / general; 10 years for 17+ or married).",
            "source_url": "https://www.imigrasi.go.id/id/biaya-paspor/"
          },
          {
            "step": "Pay official PNBP fee via banking app, ATM, or marketplace (Tokopedia/Bukalapak/Indomaret) using the MPN billing code.",
            "source_url": "https://www.imigrasi.go.id/id/biaya-paspor/"
          },
          {
            "step": "Attend scheduled appointment at chosen Kantor Imigrasi with original documents for biometric photo and fingerprint capture.",
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-untuk-masyarakat-secara-umum/"
          }
        ],
        "documents": [
          {
            "document_name": "Kartu Tanda Penduduk Elektronik (e-KTP)",
            "requiredness": "required",
            "conditions": "Original electronic national ID card (or Surat Keterangan Pengganti KTP from Dukcapil).",
            "accepted_alternatives": [
              "Surat Keterangan Pengganti KTP dari Dinas Dukcapil"
            ],
            "original_or_copy": "Original + photocopy",
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-untuk-masyarakat-secara-umum/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Kartu Keluarga (KK)",
            "requiredness": "required",
            "conditions": "Original Family Card with registered NIK.",
            "accepted_alternatives": [],
            "original_or_copy": "Original + photocopy",
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-untuk-masyarakat-secara-umum/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Akta Kelahiran / Akta Perkawinan / Buku Nikah / Ijazah",
            "requiredness": "required",
            "conditions": "Must state applicant name, place and date of birth, and parents names. Spelling must strictly match KTP.",
            "accepted_alternatives": [
              "Akta Kelahiran",
              "Buku Nikah / Akta Perkawinan",
              "Ijazah Terakhir",
              "Surat Baptis"
            ],
            "original_or_copy": "Original + photocopy",
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-untuk-masyarakat-secara-umum/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "fees": {
          "currency": "IDR",
          "fiscal_year": 2026,
          "statutory_source": "Peraturan Pemerintah No. 28/2019 & No. 45/2024 tentang Jenis dan Tarif atas Jenis Penerimaan Negara Bukan Pajak (PNBP)",
          "passport_fees_by_product_and_validity_idr": {
            "paspor_biasa_non_elektronik_5_tahun": 350000,
            "paspor_biasa_non_elektronik_10_tahun": 650000,
            "paspor_biasa_elektronik_5_tahun": 650000,
            "paspor_biasa_elektronik_10_tahun": 950000
          },
          "express_same_day_surcharge": 1000000,
          "lost_passport_fine": 1000000,
          "damaged_passport_fine": 500000,
          "force_majeure_fine_exemption": 0,
          "fee_records": [
            {
              "currency": "IDR",
              "amount": 350000,
              "base_amount": 350000,
              "emergency_surcharge": 0,
              "total_payable": 350000,
              "applicant_category": "general_or_minor",
              "application_channel": "domestic_mpaspor",
              "validity_period": "5_years",
              "discount_eligibility": "Standard statutory rate for 5-year non-electronic passport booklet.",
              "applicable_conditions": "Paspor biasa non-elektronik masa berlaku 5 tahun (tersedia untuk semua usia termasuk anak di bawah 17 tahun).",
              "official_source_url": "https://www.imigrasi.go.id/id/biaya-paspor/",
              "effective_date": "2024-12-18",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "IDR",
              "amount": 650000,
              "base_amount": 650000,
              "emergency_surcharge": 0,
              "total_payable": 650000,
              "applicant_category": "adult_17_and_over_or_married",
              "application_channel": "domestic_mpaspor",
              "validity_period": "10_years",
              "discount_eligibility": "Standard statutory rate for 10-year non-electronic passport booklet.",
              "applicable_conditions": "Paspor biasa non-elektronik masa berlaku 10 tahun (khusus WNI berusia 17 tahun ke atas atau sudah menikah).",
              "official_source_url": "https://www.imigrasi.go.id/id/biaya-paspor/",
              "effective_date": "2024-12-18",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "IDR",
              "amount": 650000,
              "base_amount": 650000,
              "emergency_surcharge": 0,
              "total_payable": 650000,
              "applicant_category": "general_or_minor",
              "application_channel": "domestic_mpaspor",
              "validity_period": "5_years",
              "discount_eligibility": "Standard statutory rate for 5-year electronic passport booklet.",
              "applicable_conditions": "Paspor biasa elektronik (e-Passport) masa berlaku 5 tahun dengan chip biometrik.",
              "official_source_url": "https://www.imigrasi.go.id/id/biaya-paspor/",
              "effective_date": "2024-12-18",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "IDR",
              "amount": 950000,
              "base_amount": 950000,
              "emergency_surcharge": 0,
              "total_payable": 950000,
              "applicant_category": "adult_17_and_over_or_married",
              "application_channel": "domestic_mpaspor",
              "validity_period": "10_years",
              "discount_eligibility": "Standard statutory rate for 10-year electronic passport booklet.",
              "applicable_conditions": "Paspor biasa elektronik (e-Passport) masa berlaku 10 tahun (khusus WNI berusia 17 tahun ke atas atau sudah menikah).",
              "official_source_url": "https://www.imigrasi.go.id/id/biaya-paspor/",
              "effective_date": "2024-12-18",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "IDR",
              "amount": 1000000,
              "base_amount": 0,
              "emergency_surcharge": 1000000,
              "total_payable": 1000000,
              "applicant_category": "express_same_day_surcharge",
              "application_channel": "domestic_express",
              "validity_period": "varies",
              "discount_eligibility": "Statutory express service surcharge under PP PNBP.",
              "applicable_conditions": "Layanan percepatan paspor selesai pada hari yang sama (biaya beban tambahan IDR 1,000,000 di luar biaya buku paspor pilihan).",
              "official_source_url": "https://www.imigrasi.go.id/id/biaya-paspor/",
              "effective_date": "2024-12-18",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "IDR",
              "amount": 1000000,
              "base_amount": 0,
              "emergency_surcharge": 1000000,
              "total_payable": 1000000,
              "applicant_category": "lost_passport_fine",
              "application_channel": "domestic_kantor_imigrasi",
              "validity_period": "varies",
              "discount_eligibility": "Statutory fine for lost passport.",
              "applicable_conditions": "Biaya beban paspor hilang (IDR 1,000,000) yang harus dibayar di samping biaya buku paspor baru setelah BAP.",
              "official_source_url": "https://www.imigrasi.go.id/id/biaya-paspor/",
              "effective_date": "2024-12-18",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            },
            {
              "currency": "IDR",
              "amount": 500000,
              "base_amount": 0,
              "emergency_surcharge": 500000,
              "total_payable": 500000,
              "applicant_category": "damaged_passport_fine",
              "application_channel": "domestic_kantor_imigrasi",
              "validity_period": "varies",
              "discount_eligibility": "Statutory fine for damaged passport.",
              "applicable_conditions": "Biaya beban paspor rusak (IDR 500,000) yang harus dibayar di samping biaya buku paspor baru.",
              "official_source_url": "https://www.imigrasi.go.id/id/biaya-paspor/",
              "effective_date": "2024-12-18",
              "verification_date": "2026-10-19",
              "date_checked": "2026-10-19",
              "verification_status": "verified"
            }
          ]
        },
        "sources": [
          {
            "url": "https://www.imigrasi.go.id/id/biaya-paspor/",
            "publisher": "Direktorat Jenderal Imigrasi",
            "page_title": "Tarif Paspor dan Layanan Keimigrasian",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "renewal_reissue": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Indonesian citizens whose passport validity is ending (within 6 months of expiry) or full may apply for renewal (Penggantian Paspor).",
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-untuk-masyarakat-secara-umum/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "For passports issued in Indonesia on or after 2009 with unchanged biometric data, simplified renewal requires only e-KTP and the existing passport booklet.",
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-untuk-masyarakat-secara-umum/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Submit renewal application through Aplikasi M-Paspor and choose Penggantian Paspor service.",
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-untuk-masyarakat-secara-umum/"
          },
          {
            "step": "Attend appointment at Kantor Imigrasi with e-KTP and existing passport booklet for biometric verification.",
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-untuk-masyarakat-secara-umum/"
          }
        ],
        "documents": [
          {
            "document_name": "Existing Passport Booklet (Paspor Lama)",
            "requiredness": "required",
            "conditions": "Original physical passport booklet must be presented; will be cancelled and returned.",
            "accepted_alternatives": [],
            "original_or_copy": "Original + photocopy",
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-untuk-masyarakat-secara-umum/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Kartu Tanda Penduduk Elektronik (e-KTP)",
            "requiredness": "required",
            "conditions": "Original e-KTP.",
            "accepted_alternatives": [],
            "original_or_copy": "Original + photocopy",
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-untuk-masyarakat-secara-umum/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-untuk-masyarakat-secara-umum/",
            "publisher": "Direktorat Jenderal Imigrasi",
            "page_title": "Penggantian Paspor",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "minor_child": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Under Permenkumham No. 18/2022, children under 17 years of age are issued passports with 5-year maximum validity.",
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-anak/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Both parents must give formal statutory consent, and both parents plus the child must be physically present at Kantor Imigrasi.",
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-anak/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Register child application in Aplikasi M-Paspor under parent account.",
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-anak/"
          },
          {
            "step": "Attend in-person appointment accompanied by both parents with original civil certificates and signed statement of parental consent.",
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-anak/"
          }
        ],
        "documents": [
          {
            "document_name": "Akta Kelahiran Anak",
            "requiredness": "required",
            "conditions": "Original child birth certificate issued by Dukcapil.",
            "accepted_alternatives": [],
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-anak/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "e-KTP of Both Parents",
            "requiredness": "required",
            "conditions": "Both mother and father electronic ID cards.",
            "accepted_alternatives": [],
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-anak/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Akta Perkawinan / Buku Nikah Orang Tua",
            "requiredness": "required",
            "conditions": "Parents marriage certificate or civil registry record.",
            "accepted_alternatives": [],
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-anak/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "Surat Pernyataan Orang Tua (Parental Consent Letter)",
            "requiredness": "required",
            "conditions": "Signed by both parents on official stamp duty (Meterai IDR 10,000).",
            "accepted_alternatives": [],
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-anak/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-anak/",
            "publisher": "Direktorat Jenderal Imigrasi",
            "page_title": "Permohonan Paspor Anak",
            "checked_at": "2026-10-19"
          }
        ]
      },
      "lost_stolen": {
        "availability_status": "available",
        "eligibility": [
          {
            "rule": "Lost or damaged passports require a formal Police Report (Surat Keterangan Kehilangan Kepolisian) and a formal Investigation Process (Berita Acara Pemeriksaan - BAP) at Kantor Imigrasi.",
            "source_url": "https://www.imigrasi.go.id/id/biaya-paspor/",
            "last_reviewed": "2026-10-19"
          },
          {
            "rule": "Under PP No. 28/2019, statutory non-tax revenue penalty of IDR 1,000,000 applies for lost passports, or IDR 500,000 for damaged passports, in addition to the booklet fee.",
            "source_url": "https://www.imigrasi.go.id/id/biaya-paspor/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "steps": [
          {
            "step": "Immediately file a missing passport report at the local Police Station (Polsek/Polres) and obtain Surat Keterangan Kehilangan.",
            "source_url": "https://www.imigrasi.go.id/id/biaya-paspor/"
          },
          {
            "step": "Appear in person at Kantor Imigrasi for formal interrogation and drafting of Berita Acara Pemeriksaan (BAP).",
            "source_url": "https://www.imigrasi.go.id/id/biaya-paspor/"
          },
          {
            "step": "Upon approval of the BAP by the Head of the Immigration Office, pay the statutory fine (IDR 1,000,000 for loss) plus the new passport booklet fee.",
            "source_url": "https://www.imigrasi.go.id/id/biaya-paspor/"
          }
        ],
        "documents": [
          {
            "document_name": "Surat Tanda Penerimaan Laporan Kehilangan (Police Report)",
            "requiredness": "required",
            "conditions": "Official police report stating passport number, circumstances, and date of loss.",
            "accepted_alternatives": [],
            "source_url": "https://www.imigrasi.go.id/id/biaya-paspor/",
            "last_reviewed": "2026-10-19"
          },
          {
            "document_name": "e-KTP & Kartu Keluarga",
            "requiredness": "required",
            "conditions": "Proof of citizenship and registered identity.",
            "accepted_alternatives": [],
            "source_url": "https://www.imigrasi.go.id/id/permohonan-paspor-baru-untuk-masyarakat-secara-umum/",
            "last_reviewed": "2026-10-19"
          }
        ],
        "sources": [
          {
            "url": "https://www.imigrasi.go.id/id/biaya-paspor/",
            "publisher": "Direktorat Jenderal Imigrasi",
            "page_title": "Penggantian Paspor Karena Hilang atau Rusak",
            "checked_at": "2026-10-19"
          }
        ]
      }
    }
  }
};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RULE_PACKS: window.RULE_PACKS };
}
