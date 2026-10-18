# PassportReady — Check Before You Apply
## Global Passport Preparation & Application-Readiness Platform

**Live Production Deployment:** [https://passport.myoss.in/](https://passport.myoss.in/)  
**GitHub Repository:** [Asadxio/passportready-global](https://github.com/Asadxio/passportready-global)

---

## 1. Product Vision & Principles

PassportReady is an independent worldwide passport preparation platform designed to help travelers, families, and citizens prepare confidently for passport applications. It organizes the checks that matter: identifying spelling and date-of-birth discrepancies before submission, discovering verified document alternatives, verifying international 6-month validity rules, and connecting directly to official government foreign ministry and passport portals.

### Core Safeguards:
- **Zero Identity Retention (Privacy-by-Design):** No passport numbers, national identity numbers, exact residential addresses, or scanned documents are collected or retained.
- **100% Client-Side Processing:** All readiness evaluations, date comparisons, and checklist generation run securely inside the user's web browser.
- **Strict Hierarchy of Official Sources:** Requirements and links are grounded exclusively in official government agencies, national immigration directorates, and ICAO Doc 9303 standards.
- **Transparent Verification Status:** Geographic index presence is clearly separated from verified procedural coverage.

---

## 2. Key Features

- **10-Step Interactive Readiness Checker:**
  - Issuing country and domestic vs. consular application paths.
  - Service selection: First-time passport, renewal/reissue, lost/stolen, damaged, name correction, child/minor, expedited/Tatkaal, emergency travel certificates.
  - Age-tailored guidance: Infant (under 5), child/minor (under 16/18), adult, senior citizen.
  - Urgency rules, document availability checks, and identity consistency audit.
  - Actionable checklist with interactive progress checkboxes, readiness scores, and verified government portal link.
- **Interactive Pre-Flight Tools:**
  - **6-Month Passport Expiry Calculator:** Evaluates remaining validity against travel dates to prevent airline boarding denials under international TIMATIC rules.
  - **Name & DOB Discrepancy Analyzer:** Identifies name inversions (given name vs. surname), initials, and birth date format errors between primary and secondary records.
- **Comprehensive Educational Guides:**
  - Dedicated walkthroughs for First-Time Passports, Renewals, Lost/Stolen Protocols, Name Changes, Minor Protection Safeguards, 6-Month Expiry Rule, and ICAO 9303 Photo Specifications.
- **Internationalization (i18n):**
  - Instant UI language switching for **English (`en`)**, **Hindi (`hi` - हिन्दी)**, and **Urdu (`ur` - اردو)** with automatic Right-to-Left (RTL) layout support.
- **Global Country Directory (249 Entries):**
  - Searchable by country name, ISO Alpha-2/Alpha-3 codes, or search aliases.
  - Filter by verification status: Verified Rule Packs, Official Portals Linked, and Awaiting Research.
- **Printable & PDF-Ready Checklist:**
  - Clean `@media print` stylesheet for clean paper and PDF output.

---

## 3. Architecture & File Structure

```
passportready/
├── CNAME                              # Custom domain configuration (passport.myoss.in)
├── index.html                         # Semantic, mobile-first accessible single-page app
├── robots.txt                         # Search engine crawler instructions
├── sitemap.xml                        # XML sitemap with canonical URLs
├── countries.json                     # Complete ISO 3166-1 index (249 entries) with portal metadata
├── country-coverage-tracker.csv       # Audited coverage tracker (249 entries + header)
├── country-rule-pack.schema.json      # JSON Schema starter for rule packs
├── css/
│   └── styles.css                     # WCAG 2.2 AA design system (Emerald green, gold accents)
├── data/
│   ├── country-data.js                # Browser JS bundle of countries.json
│   ├── country-rules.json             # Structured rule packs for key jurisdictions
│   └── rule-packs.js                  # Browser JS bundle of rule packs
├── js/
│   ├── app.js                         # Main application controller
│   ├── guides-data.js                 # Structured knowledge base articles
│   ├── i18n.js                        # Translation engine (English, Hindi, Urdu RTL)
│   ├── rules-engine.js                # Core rules engine evaluating eligibility & flags
│   └── tools.js                       # 6-Month validity & mismatch calculators
├── scripts/
│   ├── build-data.js                  # Data compilation & synchronization script
│   └── export-data-js.js              # Script to package data as JS modules
└── test/
    └── validate.js                    # Automated verification & quality test suite
```

---

## 4. Verified Country Rule Packs

Structured rule packs conforming to `country-rule-pack.schema.json` are implemented for key jurisdictions:

| Country | Code | Primary Passport Authority | Official Portal | Status |
|---|---|---|---|---|
| **India** | `IN` | Passport Seva Project · MEA | `passportindia.gov.in` | **Verified** |
| **United States** | `US` | U.S. Dept of State · Consular Affairs | `travel.state.gov` | **Verified** |
| **United Kingdom** | `GB` | HM Passport Office · Home Office | `gov.uk/browse/abroad/passports` | **Verified** |
| **Canada** | `CA` | IRCC · Passport Program | `canada.ca/.../canadian-passports.html` | **Verified** |
| **Australia** | `AU` | Australian Passport Office · DFAT | `passports.gov.au` | **Verified** |
| **Pakistan** | `PK` | DG Immigration & Passports | `dgip.gov.pk` | **Verified** |
| **Bangladesh** | `BD` | Dept of Immigration & Passports | `epassport.gov.bd` | **Verified** |

Additionally, official government portal links have been researched and linked for Germany, UAE, Philippines, Saudi Arabia, Nigeria, South Africa, France, Brazil, Singapore, New Zealand, Ireland, Japan, Italy, Spain, Mexico, Malaysia, Indonesia, Kenya, Nepal, and Sri Lanka.

---

## 5. Running Tests & Quality Verification

Run the automated test suite locally:
```bash
node test/validate.js
```

The test suite verifies:
1. `CNAME` consistency with `passport.myoss.in`.
2. 249 country records in `countries.json` with unique ISO Alpha-2 codes.
3. Rule pack schema conformity and presence of required services/sources.
4. Line count and alignment in `country-coverage-tracker.csv`.
5. Translation completeness and key parity across English, Hindi, and Urdu (with RTL).
6. Rules engine evaluation across clean, mismatch, minor, and lost passport profiles.
7. 6-Month validity calculator and name inversion analysis accuracy.
8. Physical asset existence for all scripts, stylesheets, and meta files.

---

## 6. Deployment & Git Workflow

The project is hosted as a static application on **GitHub Pages** tracking the `main` branch.

To push updates:
```bash
git add .
git commit -m "Update passportready platform"
git push origin main
```

Within 1–2 minutes, GitHub Pages deploys the changes live to [https://passport.myoss.in/](https://passport.myoss.in/).
