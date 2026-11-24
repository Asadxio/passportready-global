# Next Steps & Human Review Register

**Project:** PassportReady Global  
**Phases Completed:**  
- Phase 1 (Critical Fixes: Trust, Legal, Correctness)  
- Phase 2 (Global Readiness: Names, Dates, 13 Languages i18n, Photo Privacy, 60-Destination Validity, Special Categories)  
- Phase 3 (SEO & Discoverability: 112 Static Country & Service Pages, 55-60 Char Title, Schema.org JSON-LD, 118-URL Sitemap)  
**Next Upcoming Phase:** Phase 4 (UX & Accessibility: WCAG 2.2 AA, SVG Icons, Auto-Save & Data Erasure)

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

## 2. Phase 4 Implementation Roadmap (UX & Accessibility)

1. **Accessible Inline SVGs:**
   - Replace all functional emojis (e.g. `⚠️`, `📢`, `✓`, `📷`) with accessible, screen-reader-safe inline SVG icons with `aria-hidden="true"` or proper accessible labels.
2. **WCAG 2.2 AA Accessibility Audit:**
   - Focus trap for modals and interactive popovers.
   - Contrast ratio verification across dark mode and high-contrast settings.
   - Screen reader announcements (`aria-live="polite"`) for wizard step changes and score updates.
3. **Data Erasure & Auto-Save:**
   - "Clear My Data" one-click action that purges localStorage, state, and pre-filled form fields.
   - Graceful state restoration with privacy confirmation.
4. **Print / PDF Export Polish:**
   - Print stylesheet refinements ensuring multi-page document checklists print cleanly on standard A4/Letter paper without clipped borders or unrendered tables.
