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
            "validity_1_year": "The 1-year passport is issued exclusively to children under three years of age under the normal validity schedule, or in emergency cases.",
            "discount_50_percent": "Subject to documented eligibility for adults aged 60+, persons with certified disabilities, and agricultural workers under the Mexico-Canada SAWP programme.",
            "agricultural_worker_restriction": "Temporary agricultural workers under the Mexico-Canada programme are NOT eligible for the discount on the 10-year passport (validity restricted to 3 or 6 years)."
          },
          "consular_overseas_usd": {
            "currency": "USD",
            "statutory_source": "Ley Federal de Derechos 2026 para trámites en el exterior",
            "standard": {
              "validity_1_year": 44,
              "validity_3_year": 101,
              "validity_6_year": 137,
              "validity_10_year": 209
            },
            "discounted_50_percent": {
              "validity_1_year": 22,
              "validity_3_year": 50.5,
              "validity_6_year": 68.5,
              "validity_10_year": 104.5
            }
          },
          "confirmation_required": false,
          "fee_records": [
            {
              "currency": "MXN",
              "amount": 920,
              "applicant_category": "children_under_3_only",
              "application_channel": "domestic",
              "validity_period": "1_year",
              "applicable_conditions": "Issued only to children under 3 years old under normal validity schedule.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified"
            },
            {
              "currency": "MXN",
              "amount": 1795,
              "applicant_category": "general",
              "application_channel": "domestic",
              "validity_period": "3_years",
              "applicable_conditions": "Standard domestic issuance for applicants aged 3 and older.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified"
            },
            {
              "currency": "MXN",
              "amount": 2440,
              "applicant_category": "general",
              "application_channel": "domestic",
              "validity_period": "6_years",
              "applicable_conditions": "Standard domestic issuance for applicants aged 3 and older.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified"
            },
            {
              "currency": "MXN",
              "amount": 4280,
              "applicant_category": "adult_18_and_over",
              "application_channel": "domestic",
              "validity_period": "10_years",
              "applicable_conditions": "Available exclusively to adult applicants aged 18 and older.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified"
            },
            {
              "currency": "MXN",
              "amount": 460,
              "applicant_category": "discount_eligible_children_under_3",
              "application_channel": "domestic",
              "validity_period": "1_year",
              "applicable_conditions": "50% discount for disabled children under 3 years old.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified"
            },
            {
              "currency": "MXN",
              "amount": 900,
              "applicant_category": "discount_eligible",
              "application_channel": "domestic",
              "validity_period": "3_years",
              "applicable_conditions": "50% discount for seniors 60+, certified disabled, and Canada SAWP agricultural workers.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified"
            },
            {
              "currency": "MXN",
              "amount": 1220,
              "applicant_category": "discount_eligible",
              "application_channel": "domestic",
              "validity_period": "6_years",
              "applicable_conditions": "50% discount for seniors 60+, certified disabled, and Canada SAWP agricultural workers.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified"
            },
            {
              "currency": "MXN",
              "amount": 2140,
              "applicant_category": "discount_eligible",
              "application_channel": "domestic",
              "validity_period": "10_years",
              "applicable_conditions": "50% discount for seniors 60+ and certified disabled. Note: SAWP agricultural workers are NOT eligible for 10-year discount.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified"
            },
            {
              "currency": "USD",
              "amount": 44,
              "applicant_category": "children_under_3_only",
              "application_channel": "consular_overseas",
              "validity_period": "1_year",
              "applicable_conditions": "Consular issuance abroad for children under 3.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified"
            },
            {
              "currency": "USD",
              "amount": 101,
              "applicant_category": "general",
              "application_channel": "consular_overseas",
              "validity_period": "3_years",
              "applicable_conditions": "Standard consular issuance abroad.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified"
            },
            {
              "currency": "USD",
              "amount": 137,
              "applicant_category": "general",
              "application_channel": "consular_overseas",
              "validity_period": "6_years",
              "applicable_conditions": "Standard consular issuance abroad.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified"
            },
            {
              "currency": "USD",
              "amount": 209,
              "applicant_category": "adult_18_and_over",
              "application_channel": "consular_overseas",
              "validity_period": "10_years",
              "applicable_conditions": "Consular issuance abroad for adults 18+.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified"
            },
            {
              "currency": "USD",
              "amount": 22,
              "applicant_category": "discount_eligible_children_under_3",
              "application_channel": "consular_overseas",
              "validity_period": "1_year",
              "applicable_conditions": "50% discount for disabled children under 3 years old at consulates abroad.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified"
            },
            {
              "currency": "USD",
              "amount": 50.5,
              "applicant_category": "discount_eligible",
              "application_channel": "consular_overseas",
              "validity_period": "3_years",
              "applicable_conditions": "50% discount for seniors 60+ and certified disabled at consulates abroad.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified"
            },
            {
              "currency": "USD",
              "amount": 68.5,
              "applicant_category": "discount_eligible",
              "application_channel": "consular_overseas",
              "validity_period": "6_years",
              "applicable_conditions": "50% discount for seniors 60+ and certified disabled at consulates abroad.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified"
            },
            {
              "currency": "USD",
              "amount": 104.5,
              "applicant_category": "discount_eligible",
              "application_channel": "consular_overseas",
              "validity_period": "10_years",
              "applicable_conditions": "50% discount for seniors 60+ and certified disabled at consulates abroad.",
              "official_source_url": "https://www.gob.mx/pasaporte",
              "date_checked": "2026-10-19",
              "effective_date": "2026-01-01",
              "verification_status": "verified"
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
  }
};
if (typeof module !== 'undefined' && module.exports) { module.exports = { RULE_PACKS: window.RULE_PACKS }; }
