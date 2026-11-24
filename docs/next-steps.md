# Next Steps & Human Review Register

**Project:** PassportReady Global  
**Phases Completed:**  
- Phase 1 (Critical Fixes: Trust, Legal, Correctness)  
- Phase 2 (Global Readiness: Names, Dates, 13 Languages i18n, Photo Privacy, 60-Destination Validity, Special Categories)  
**Next Upcoming Phase:** Phase 3 (SEO & Discoverability)

---

## 1. What Needs Human Review

### A. Machine Translations & i18n (7 New Languages)
- **Verified Locales (6):** English (`en`), Hindi (`hi`), Urdu (`ur`), French (`fr`), German (`de`), Arabic (`ar`) — `needs_review: false`.
- **Machine-Translated Locales (7):** Spanish (`es`), Portuguese (`pt`), Chinese Simplified (`zh`), Russian (`ru`), Indonesian (`id`), Bengali (`bn`), Turkish (`tr`) — tagged with `needs_review: true`.
- **Review Requirement:**
  - Consular, statutory, and legal terminology in the 7 new JSON files (`locales/{lang}.json`) requires human review by native speakers or immigration legal professionals.
  - Review Arabic and Urdu right-to-left layout alignment, diacritics, and font legibility.
  - As each language is reviewed, update `needs_review: false` in `js/i18n.js` metadata.

### B. Legal & Statutory Wording
- **Statutory Disclaimers:**
  - Verify compliance with local disclaimer standards across civil law jurisdictions (e.g. Germany, France, Japan) where disclaimers of liability are subject to statutory consumer protection limits.
  - Confirm India Digital Personal Data Protection Act (DPDP Act 2023) disclosure nuances as rules and implementation schedules are formalized by the Data Protection Board of India.
- **Parental Consent Nuances:**
  - Monitor ongoing legislative revisions regarding sole-parent applicants, surrogacy birth certificates, and passport issuance for children born through cross-border ART (Assisted Reproductive Technology).

### C. Unverifiable & Awaiting-Research Jurisdictions (222 Jurisdictions)
- **Status:** 222 jurisdictions remain classified as `Awaiting Research`.
- **Human Review Actions:**
  - Primary government websites for small island developing states (SIDS), territories, and nations experiencing administrative transitions must be manually cross-checked with official foreign ministry gazettes.
  - Any jurisdiction where official online fee schedules cannot be verified must remain strictly tagged as `Awaiting Research` with baseline questions and a prominent warning. Never guess fees or requirements.

---

## 2. Phase 3 Implementation Roadmap (SEO & Discoverability)

1. **Static Country and Service Pages:**
   - Generate static routes: `/passport/{country}/{service}/` (e.g. `/passport/india/fresh/`, `/passport/united-kingdom/renewal/`, `/passport/united-states/first/`).
   - Include unique titles, meta descriptions, H1, statutory checklist, fees with `last_verified`, official government links, FAQs, breadcrumbs, and internal navigation.
2. **Title & Meta Tag Optimization:**
   - Optimize home title to 55-60 characters (e.g. `PassportReady — Global Passport Application & Validity Guide`).
   - Ensure every page has unique, descriptive meta tags and canonical URLs.
3. **Structured Data (Schema.org JSON-LD):**
   - Add `BreadcrumbList`, `FAQPage`, `GovernmentService` / `WebApplication`, and `HowTo` schemas for checklists.
   - Validate with schema linter.
4. **Sitemap & Robots Configuration:**
   - Generate `sitemap.xml` covering every country, service, and language URL with `xhtml:link` hreflang alternates.
   - Clean, compliant `robots.txt`.
5. **Domain-Agnostic Configuration:**
   - Ensure single site_url config in build/head include so canonical URLs and sitemaps work seamlessly on staging, preview, and production (`https://passport.myoss.in/`).
