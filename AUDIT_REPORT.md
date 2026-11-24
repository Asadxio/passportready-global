# AUDIT REPORT: PassportReady Global

**Repository:** `Asadxio/passportready-global`  
**Live Site:** `https://passport.myoss.in/`  
**Audit Conducted:** October 2026 / November 2026  
**Auditor:** Senior Full-Stack, Accessibility & Legal Integrity Audit Team  
**Status:** Phase 1 Complete (Critical Trust, Legal, Correctness & Integrity)

---

## 1. Executive Summary

PassportReady is an independent, client-side passport application preparation guide built to eliminate preventable clerical rejections. As an open-source public service, its trustworthiness hinges on rigorous adherence to official government authorities, complete privacy-by-design (zero server-side identity storage, zero tracking cookies), and absolute transparency regarding verified versus unresearched jurisdictions.

This comprehensive audit was executed to eliminate all placeholder dead links, stop cross-jurisdictional field leakage, correct readiness score calculation integrity, enforce directory honesty, remove sweeping unqualified legal claims, and provide an accessible community feedback channel.

---

## 2. Issues Found & Resolved in Phase 1

| Issue ID | Severity | Description | Resolution | Status |
| :--- | :--- | :--- | :--- | :--- |
| **AUD-01** | High | Dead Footer Placeholders: About, Methodology, Privacy, Terms, and Report links pointed to `#`. | Created 5 dedicated standalone accessible pages (`/about/`, `/methodology/`, `/privacy/`, `/terms/`, `/report/`) sharing the site design system and replaced all `#` placeholders. | **FIXED** |
| **AUD-02** | High | Cross-Country Schema Leakage: Malaysia-only options (OKU, Tabung Haji, JIM staff, PMD/PMR, married minor under 17) and India-only terms (Tatkaal) were hardcoded globally in `index.html`. | Refactored wizard with `updateCountrySpecificFormFields()` so `#applicantCategory`, urgency options, age labels, and loss replacement tiers are dynamically populated per country. Clean baseline questions and notice displayed for unverified countries. | **FIXED** |
| **AUD-03** | Critical | Readiness Score False Assurance: Evaluator produced "100% PREPARED" for India when zero questions were answered due to pre-filled affirmative answers and subtraction-only scoring. | Added wizard completion guardrail; introduced unconfirmed proof reductions (`preparationScore -= 25`); refactored UI header to honest metric "Documents checked: X of Y" with amber/red/green progress; added unmistakable watermark to landing page demo. | **FIXED** |
| **AUD-04** | High | Directory Honesty Misrepresentation: Headline claimed "249 Countries & Territories Indexed" while only 27 were verified. | Updated headline to honest breakdown: "27 Verified · 0 Portal Linked · 222 Awaiting Research"; added status badge, `last_verified` date, direct official portal link, and 180-day stale warning badge to every directory card. | **FIXED** |
| **AUD-05** | Medium | Sweeping Unqualified Legal Phrasing: FAQ Q1 claimed "Under international and constitutional law, passport issuance is an exercise of sovereign state authority..." | Replaced with precise, sourced statutory citations referencing Indian Passports Act 1967, 8 U.S.C. § 1185, 22 CFR Part 51, and the UK Royal Prerogative administered by HMPO. | **FIXED** |
| **AUD-06** | Medium | Inaccessible Feedback Channel: Feedback previously went exclusively to GitHub Issues, which ordinary citizens lack. | Created `/report/` with a privacy-respecting feedback form supporting static-host mailto generation, clipboard copy, and optional GitHub issues as secondary. | **FIXED** |

---

## 3. Statutory Legal & Factual Claims Verification Table

Every factual claim in FAQs, educational guides, rules-engine logic, and document checklists was audited against primary government publications and international standards.

| Claim & Subject | Context / Location | Verdict | Official Government / Standard Source URL | Date Verified | Notes & Legal Basis |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Sovereign Passport Issuance Authority** | FAQ Q1 | **CORRECTED** | [US 8 U.S.C. § 1185](https://www.govinfo.gov/app/details/USCODE-2022-title8/html/USCODE-2022-title8-chap12-subchapII-partII-sec1185.htm) / [India Passports Act 1967](https://www.indiacode.nic.in/handle/123456789/1647) | 2026-10-19 | Removed vague "constitutional law" phrase; cited specific statutory acts giving passport officers sole adjudication power. |
| **India Marriage Surname Change (Annexure E)** | FAQ Q3, Guide 4, `rules-engine.js` | **CORRECT** | [MEA Passport Seva Portal Annexure E](https://www.passportindia.gov.in/AppOnlineProject/pdf/AnnexureE.pdf) | 2026-10-19 | Under MEA rules, changing surname post-marriage or adding spouse name requires only self-declaration (Annexure E). NO Gazette notice or newspaper ad needed. |
| **India Major Name Change (Gazette Publication)** | FAQ Q3, Guide 4, `rules-engine.js` | **CORRECT** | [Gazette of India Department of Publication](https://egazette.gov.in/) / [MEA Passport Manual](https://www.passportindia.gov.in/) | 2026-10-19 | Complete major name changes require deed poll affidavit, two daily newspaper advertisements, and publication in the Official Gazette of India. |
| **US Legal Name Change Requirements** | FAQ Q3, Guide 4, `rules-engine.js` | **CORRECT** | [22 CFR § 51.25 (eCFR)](https://www.ecfr.gov/current/title-22/chapter-I/subchapter-F/part-51/subpart-B/section-51.25) | 2026-10-18 | Requires certified government marriage certificate, certified divorce decree specifying resumption of prior name, or certified court order. |
| **UK Name Change via Deed Poll** | FAQ Q3, Guide 4, `rules-engine.js` | **CORRECT** | [HM Passport Office Names Guidance (gov.uk)](https://www.gov.uk/government/publications/change-of-name-guidance) | 2026-10-18 | Requires enrolled or unenrolled deed poll plus corroborating evidence of the new name being used for all official purposes. |
| **US Two-Parent Consent for Minors under 16** | FAQ Q4, Guide 5, `rules-engine.js` | **CORRECT** | [22 CFR § 51.28 (eCFR)](https://www.ecfr.gov/current/title-22/chapter-I/subchapter-F/part-51/subpart-B/section-51.28) / [travel.state.gov Under 16](https://travel.state.gov/content/travel/en/passports/need-passport/under-16.html) | 2026-10-18 | Both parents/guardians must appear in person or submitting parent must present notarized Form DS-3053 consent or court evidence of sole custody. |
| **India Minor Consent (Annexure D & C)** | FAQ Q4, Guide 5, `rules-engine.js` | **CORRECT** | [MEA Passport Seva Annexure D](https://www.passportindia.gov.in/AppOnlineProject/pdf/AnnexureD.pdf) / [Annexure C](https://www.passportindia.gov.in/AppOnlineProject/pdf/AnnexureC.pdf) | 2026-10-18 | Passports Rules 1980 require Annexure D (joint consent of both parents) or Annexure C (single parent declaration under statutory criteria). |
| **UK Parental Responsibility for Child Passports** | Guide 5 | **CORRECT** | [UK Children Act 1989 Section 3](https://www.legislation.gov.uk/ukpga/1989/41/section/3) / [HMPO Child Passport Rules](https://www.gov.uk/get-a-child-passport) | 2026-10-18 | Anyone with parental responsibility under Section 3 of the Children Act 1989 must grant consent for passport issuance. |
| **Schengen Entry Validity: 3 Months Beyond Departure & Issued < 10 Years** | FAQ Q5, Guide 6, `rules-engine.js` | **CORRECT** | [Regulation (EU) 2016/399 Article 6(1)(a) (EUR-Lex)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0399) | 2026-10-19 | Non-EU third-country nationals must present passport valid at least 3 months after departure and issued within preceding 10 years. |
| **Southeast Asia 6-Month Entry Validity Rule** | FAQ Q5, Guide 6, `rules-engine.js` | **CORRECT** | [Thailand Immigration Act B.E. 2522 Section 12](https://www.immigration.go.th/) / [Indonesian Imigrasi](https://www.imigrasi.go.id/) | 2026-10-19 | Statutory requirement enforcing minimum 6 months remaining validity upon border crossing. Enforced via airline IATA Timatic checks. |
| **US Six-Month Club Exemption** | FAQ Q5, Guide 6 | **CORRECT** | [8 CFR § 214.1(a)(3)](https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.1) / [CBP Six-Month Club Update](https://www.cbp.gov/document/bulletins/six-month-club-update) | 2026-10-18 | Bilateral agreement exempting citizens of designated countries from 6-month rule, requiring validity only for duration of stay. |
| **ICAO Doc 9303 Biometric Facial Proportions (70-80%)** | Guide 7, `tools.js` | **CORRECT** | [ICAO Doc 9303 Part 3](https://www.icao.int/Security/FAL/PKD/Documents/ICAO_Doc_9303_p3.pdf) / [ISO/IEC 19794-5](https://www.iso.org/standard/50864.html) | 2026-10-19 | Distance from chin to crown must occupy between 70% and 80% of vertical photo frame height. |
| **US 2x2" Photo Dimension & White Background** | `tools.js`, `index.html` | **CORRECT** | [travel.state.gov Passport Photo Requirements](https://travel.state.gov/content/travel/en/passports/how-apply/photos.html) | 2026-10-18 | 2 x 2 inches (51 x 51 mm), head between 1 and 1 3/8 inches (25-35 mm), plain white or off-white background, eyeglasses prohibited. |
| **Canada 50x70mm Passport Photo Standard** | `tools.js`, `index.html` | **CORRECT** | [Immigration, Refugees and Citizenship Canada (IRCC)](https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/photos.html) | 2026-10-18 | 50 mm wide by 70 mm high, face length 31-36 mm from chin to crown, commercial photographer stamp required. |
| **Malaysia Minor Marriage Exception (Under 17)** | `rules-engine.js` | **CORRECT** | [Jabatan Imigresen Malaysia (imi.gov.my)](https://www.imi.gov.my/) / [Law Reform (Marriage and Divorce) Act 1976](https://www.agc.gov.my/) | 2026-10-19 | Legally married minors aged 16+ are exempted from parental counter-signature upon production of registered marriage certificate. |
| **Indonesia Permenkumham No. 18/2022 Marriage Exception** | `rules-engine.js` | **CORRECT** | [Permenkumham No. 18 Tahun 2022 Pasal 5](https://peraturan.go.id/id/permenkumham-no-18-tahun-2022) | 2026-10-19 | Under Article 5, individuals under 17 years old who are legally married are categorized as adults for passport issuance. |
| **Japan Post-July 2026 Domestic Online vs Counter Fees** | `rules-engine.js`, `country-rules.json` | **CORRECT** | [Ministry of Foreign Affairs of Japan (MOFA)](https://www.mofa.go.jp/mofaj/toko/passport/) | 2026-10-19 | Statutory fee schedule establishing ¥8,900 for online adult applications vs. ¥9,300 for in-person counter submissions. |
| **Mexico 2026 SRE Statutory Fees** | `rules-engine.js`, `country-rules.json` | **CORRECT** | [Secretaría de Relaciones Exteriores (SRE)](https://www.gob.mx/sre/acciones-y-programas/pasaporte-mexicano) | 2026-10-19 | Ley Federal de Derechos rates: 3-year (1,655 MXN standard / 825 MXN concession), 6-year (2,250 MXN), 10-year (3,940 MXN). |
| **Nigeria NIS Ministerial Reform Fees** | `rules-engine.js`, `country-rules.json` | **CORRECT** | [Nigeria Immigration Service (NIS)](https://passport.immigration.gov.ng/) | 2026-10-19 | Ministerial fee schedule: 32-page 5-year (₦100,000 domestic / $150 abroad), 64-page 10-year (₦200,000 domestic / $230 abroad). |

---

## 4. Issues Remaining for Subsequent Phases

- **Phase 2 (Global Readiness):**
  - Name discrepancy engine fuzzy transliteration equivalence list (Mohammed/Muhammad, Zhang/Chang, mononyms, diacritics).
  - Multi-calendar converter (Hijri, Thai Buddhist, Bikram Sambat, Solar Hijri) and non-ambiguous date selectors.
  - Expansion to 13+ languages (Spanish, Portuguese, Chinese Simplified, Russian, Indonesian, Bengali, Turkish) with bidirectional RTL mirroring.
  - Biometric photo validator client-side isolation unit test (asserting 0 network requests).
  - 60-destination international entry validity calculator.
- **Phase 3 (SEO & Discoverability):**
  - Static country and service routes (`/passport/{country}/{service}/`).
  - Optimized title lengths (55-60 chars).
  - Sitemaps with hreflang alternates, JSON-LD schema (HowTo, FAQPage, Organization).
- **Phase 4 (UX & Accessibility):**
  - Replace functional emojis with accessible inline SVGs.
  - WCAG 2.2 AA keyboard focus trap and axe-core audit.
  - "Clear My Data" button on checker UI.
- **Phase 5 & 6 (Research & Engineering Quality):**
  - Top 40 full verified country rule packs in `/data/countries/{iso2}.json` modular format.
  - Weekly source-change monitor script.
  - Playwright E2E browser tests.
