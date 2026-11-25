# Next Steps & Human Review Register

**Project:** PassportReady Global  
**Phases Completed:**  
- Phase 1 (Critical Fixes: Trust, Legal, Correctness)  
- Phase 2 (Global Readiness: Names, Dates, 13 Languages i18n, Photo Privacy, 60-Destination Validity, Special Categories)  
- Phase 3 (SEO & Discoverability: 112 Static Country & Service Pages, 55-60 Char Title, Schema.org JSON-LD, 118-URL Sitemap)  
- Phase 4 (UX & Accessibility: Accessible Vector SVGs, WCAG 2.2 AA Focus Trap, Screen Reader Live Announcers, Silent Auto-Save & "Clear My Data")  
**Next Upcoming Phase:** Phase 5 (Architecture, Performance, Service Worker Offline Caching & Community Verification)

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

## 2. Phase 5 Roadmap (Performance, PWA & Decentralized Rule Maintenance)

1. **Service Worker Offline Caching Hardening:**
   - Pre-cache all 112 static country and service routes in `sw.js` for seamless offline access.
   - Cache-versioning lifecycle validation and instant offline fallback for all interactive tools.
2. **Performance & Asset Optimization:**
   - Lazy load heavy images and non-critical assets; verify Lighthouse performance, accessibility, and SEO >= 95.
3. **Decentralized Community Rule Maintenance:**
   - Expand automated JSON schema validation for community-submitted rule pull requests on GitHub.
   - Automated citation checker ensuring every rule change PR includes a valid `.gov` or official statutory foreign ministry link.

## Open item: per-language URLs (hreflang)
sitemap.xml currently lists hreflang alternates as `/?lang=xx`, which are client-side switches of one page, not distinct indexable URLs. Google will likely ignore them. Real per-language pages (e.g. /hi/, /ar/) are needed before hreflang gives SEO benefit.

## Open item: contact mailboxes
about/privacy/report pages reference contact@, privacy@ and updates@myoss.in. Owner must confirm these mailboxes exist and are monitored.
