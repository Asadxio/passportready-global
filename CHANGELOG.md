# Changelog — PassportReady Global

All notable changes to the PassportReady project are documented in this file in reverse chronological order.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased] - Phase 2: Global Readiness (2026-11-24)

### Added
- **Name & DOB Discrepancy Analyzer (ICAO 9303 & Cross-Cultural Naming Systems)**:
  - Added 26 transliteration equivalence clusters (`TRANSLITERATION_CLUSTERS`) handling common phoneme/latinization variations (e.g. Mohammed/Muhammad/Mohd/Md, Zhang/Chang, Hussain/Hussein, Choudhary/Chaudhary, Singh/Sing).
  - Added diacritic and umlaut normalization (`cleanAndNormalizeString`: `ä->ae`, `ü->ue`, `ö->oe`, `é->e`).
  - Added Levenshtein fuzzy distance comparison distinguishing minor phonetic typos from substantive name variations.
  - Added Mononym detection (`isMononym: true`) with actionable ICAO Doc 9303 Part 3 machine-readable travel document (MRTD) single-name guidance.
  - Added Name order inversion detection (East Asian family-name-first and Iberian multiple surname conventions).
  - Added Country-specific actionable resolution paths (`getActionableNextSteps`): India (Annexure E self-declaration or Gazette deed poll), United States (22 CFR § 51.25 / DS-5504 certified decree), United Kingdom (HMPO enrolled/unenrolled deed poll), Canada (provincial vital statistics), Australia (state BDM certificate), Malaysia (Jabatan Pendaftaran Negara MyKad alignment), and Indonesia (Disdukcapil / Pengadilan Negeri court decree).
- **Ambiguous Dates & Non-Gregorian Civil Calendars**:
  - Added interactive Date Ambiguity Detector (`checkDateAmbiguity`) identifying ambiguous calendar dates (e.g. `03/04/1990` where day <= 12 and month <= 12) with format selector prompts (`DD/MM/YYYY` vs `MM/DD/YYYY`).
  - Added Non-Gregorian Calendar Converter (`convertAlternateCalendar`) supporting Thai Buddhist Era (พ.ศ. BE - 543), Nepali Bikram Sambat (वि.सं. BS - 57), Persian Solar Hijri (هـ.ش SH + 621), and Islamic Lunar Hijri (هـ AH).
  - Added Approximate & Year-Only Date-of-Birth Guidance (`getApproximateDobGuidance`) with country-specific standards (e.g. MEA default `01/01/YYYY`, US Department of State policy, and ICAO Doc 9303 Part 3 filler characters `XX/XX/YYYY`).
- **13-Language Internationalization (i18n) & RTL Typography**:
  - Expanded locale support from 6 to 13 languages: English (`en`), Hindi (`hi`), Urdu (`ur`), French (`fr`), German (`de`), Arabic (`ar`) + Spanish (`es`), Portuguese (`pt`), Chinese Simplified (`zh`), Russian (`ru`), Indonesian (`id`), Bengali (`bn`), Turkish (`tr`).
  - Enforced 100% key parity across all 304 translation keys across all 13 languages.
  - Generated modular standalone locale files in `locales/{lang}.json` (13 files).
  - Added `I18N_METADATA` exporting language name, native name, reading direction (`ltr` vs `rtl`), and `needs_review: true` human review flags for machine-translated locales.
  - Added high-fidelity localized web fonts in `css/styles.css`: Noto Nastaliq Urdu, Noto Sans Arabic, Noto Sans Devanagari, Noto Sans Bengali, and Noto Sans SC.
  - Implemented bidirectional RTL layout mirroring and icon flipping for Urdu (`ur`) and Arabic (`ar`).
- **Client-Side Biometric Photo Validator & Zero-Network Privacy Shield**:
  - Added China (33x48mm) and Malaysia (35x50mm) photo specifications alongside ICAO standard (35x45mm), US (2x2"), and Canada (50x70mm).
  - Display of head-height percentage bounds, eye line positioning, minimum 300 DPI resolution, upload file-size thresholds (50KB–10MB), and statutory religious/medical headwear regulations.
  - Added automated unit test (Test Suite 47) intercepting `http.request`, `https.request`, and `fetch` to verify zero network packets are transmitted during photo canvas rendering and analysis.
- **60-Destination Entry Validity & Schengen 10-Year Issuance Limit**:
  - Comprehensive international rule dictionary (`DESTINATION_VALIDITY_RULES`) covering 60 worldwide travel destinations.
  - Implemented strict calculation for Schengen Area entry under Article 6(1)(a) of Regulation (EU) 2016/399: enforcing minimum 3 months validity beyond intended departure AND verifying passport was issued within preceding 10 years.
  - Added strict 6-month arrival rules for Southeast Asia, the Middle East, and Africa (TH, ID, SG, MY, AE, SA, EG, VN, etc.).
  - Sourced and implemented US Six-Month Club exemptions (8 CFR § 214.1(a)(3)), UK duration of stay, and bilateral agreements.
- **Missing Statutory Categories & Specialized Travel Flows**:
  - Added 6 dedicated statutory guides to `js/guides-data.js` (total 13 comprehensive guides):
    1. `refugee-stateless-travel-docs`: 1951 Geneva Convention Travel Document & 1954 Stateless Convention; statutory warning regarding Article 1(C) cessation if traveling to country of claimed persecution.
    2. `dual-nationality-guide`: Sourced rules across US, UK, Canada, Australia, India (Section 9 Citizenship Act single-nationality & OCI), Malaysia (Article 24 deprivation), and Japan (Article 14 choice of nationality before age 20).
    3. `adoption-surrogacy-guide`: Hague Adoption Convention compliance, parental court orders, and DNA parentage testing requirements.
    4. `marriage-divorce-name-change`: Marriage certificate self-declaration, decree absolute maiden name restoration, and strict airline booking name matching.
    5. `gender-marker-change`: Self-certification paths in US/Canada (M/F/X), UK Gender Recognition Certificate (GRC), and India Transgender Persons (Protection of Rights) Act 2019 District Magistrate certificate.
    6. `emergency-travel-certificate`: Emergency Travel Document / ETC single-journey repatriation limitations, police report protocols, and urgent travel proof.
  - Extended `PassportRulesEngine.prototype.evaluate` with statutory checklist requirements and critical warning alerts for refugee/stateless applicants, dual citizens, surrogacy cases, gender marker updates, and emergency repatriation.

---

## [1.0.0] - Phase 1: Critical Trust, Legal & Integrity Fixes (2026-11-24)

### Added
- **Legal & Informational Pages (`/about/`, `/methodology/`, `/privacy/`, `/terms/`, `/report/`)**:
  - Replaced all dead `href="#"` footer links with dedicated, accessible standalone pages sharing the site's design system.
  - `/about/`: Mission statement, civic tech open-source background, and strict government independence disclosure.
  - `/methodology/`: Authoritative source hierarchy (Tier 1 Primary Government Authorities, Tier 2 ICAO/ISO Standards, Tier 3 Prohibited Secondary Sources), verification process, and 180-day review cycles.
  - `/privacy/`: Comprehensive plain-language privacy policy covering GDPR, UK-GDPR, CCPA/CPRA, and India DPDP Act 2023. Explicitly documents zero server-side identity retention, zero tracking cookies, local client-side storage, and non-sensitive URL hash sharing.
  - `/terms/`: Legal disclaimer, non-affiliation with sovereign ministries, limitation of liability, and requirement for users to verify on official government portals.
  - `/report/`: Interactive feedback channel with country selection, issue category, official source URL requirement, description, mailto link builder, and clipboard copy helper.
- **AUDIT_REPORT.md**: Comprehensive audit document tracking issues found, resolved, remaining items, and an audited statutory claims verification table with official government source URLs.
- **Dynamic Country Concession Notice (`#countryConcessionNotice`)**: Displays an explicit, visible notification when an unverified country is selected, explaining that country-specific concessions await statutory verification and standard baseline questions apply.
- **180-Day Stale Rules Warning**: Added automated time-difference calculation to country directory cards that displays `⚠️ Stale (>180d)` if a verified rule pack has not been reviewed within 180 days.
- **Direct Official Source Links on Directory Cards**: Every country card now features a direct, clickable link to the official authority portal.

### Changed
- **Directory Honesty Headline**:
  - Replaced misleading static headline `"249 Countries & Territories Indexed"` with a transparent dynamic breakdown: `"27 Verified · 0 Portal Linked · 222 Awaiting Research"`.
  - Updated card subheadings to show `✓ Verified: YYYY-MM-DD` for verified countries and `⏳ Awaiting verification` for unresearched jurisdictions.
- **Readiness Score Metric Integrity**:
  - Refactored results dashboard score to `"Documents checked: X of Y"` with live amber/red/green progress states as the user checks items in their actionable list.
  - Added wizard completion guardrail in `generateFinalResults()` preventing premature rendering before Step 10 is reached.
  - Added penalty reductions in `PassportRulesEngine` for unconfirmed/unanswered proof questions (`preparationScore -= 25`).
  - Added prominent visual watermark banner to the hero preview card: `⚠️ INTERACTIVE DEMO ONLY · Illustrative example — not your assessment`.
- **Eliminated Cross-Country Field Leakage**:
  - Refactored `index.html` and `js/app.js` with `updateCountrySpecificFormFields()` so `#applicantCategory`, `#urgency`, age labels, and loss replacement tiers are populated dynamically based on the selected country's rule pack.
  - Removed hardcoded Malaysia-only concessions (OKU, Tabung Haji, JIM staff, PMD/PMR, married minor under 17) from global forms.
  - Removed India-only "Tatkaal" wording from global urgency dropdown; Tatkaal is now displayed strictly when India is selected.
  - Replaced ambiguous generic age labels `(under 5 / 6)` and `(under 16 / 18)` with unambiguous, country-specific statutory age categories.
  - Hidden tiered loss replacement penalties for countries with flat replacement fees.
- **FAQ Sourced Citations**:
  - Corrected FAQ Question 1 to remove the sweeping statement `"Under international and constitutional law, passport issuance is an exercise of sovereign state authority..."`, replacing it with exact statutory citations (Indian Passports Act 1967, 8 U.S.C. § 1185, 22 CFR Part 51, HMPO Royal Prerogative).
