# Next Steps & Human Review Register

**Project:** PassportReady Global  
**Phase Completed:** Phase 1 (Critical Fixes: Trust, Legal, Correctness)  
**Next Upcoming Phase:** Phase 2 (Global Readiness)

---

## 1. What Needs Human Review

### A. Machine Translations & i18n
- **Current Languages (6):** English (`en`), Hindi (`hi`), Urdu (`ur`), French (`fr`), German (`de`), Arabic (`ar`).
- **Target Additions (7):** Spanish (`es`), Portuguese (`pt`), Chinese Simplified (`zh-CN`), Russian (`ru`), Indonesian (`id`), Bengali (`bn`), Turkish (`tr`).
- **Review Requirement:**
  - Consular and statutory legal terminology requires human linguistic review by native speakers or immigration legal professionals.
  - Review Arabic and Urdu right-to-left layout alignment, diacritics, and font legibility.
  - Audit and tag all AI/machine-translated translation keys with `needs_review: true` in locale files until signed off by native contributors.

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

## 2. Phase 2 Implementation Roadmap (Global Readiness)

1. **Name & DOB Discrepancy Analyzer:**
   - Equivalence mappings for transliterations (Mohammed/Muhammad/Mohd/Md, Zhang/Chang, Hussain/Hussein).
   - Mononym support (e.g. Indonesia, South Asia) and multiple maternal/paternal surnames (Hispanic naming customs).
   - Diacritic stripping and phonetic/fuzzy matching.
2. **Ambiguous Date & Alternate Calendar Support:**
   - Ambiguous date detector (e.g. `03/04` prompt for DD/MM vs MM/DD).
   - Approximate and year-only date-of-birth workflows.
   - Non-Gregorian calendar converters (Hijri, Thai Buddhist, Bikram Sambat, Solar Hijri).
3. **i18n Expansion:**
   - Add JSON locale structures for Spanish, Portuguese, Simplified Chinese, Russian, Indonesian, Bengali, and Turkish.
   - Bidirectional RTL mirroring for Arabic and Urdu.
4. **Photo Validator Math & Offline Client-Side Isolation:**
   - Per-country photo aspect ratio, millimeter bounds, and eye-level guidelines.
   - Unit tests verifying zero network requests during photo processing.
5. **60-Destination Entry Validity Calculator:**
   - Calendar month date math, leap year calculations, and Schengen 3-month / 6-month rule lookups.
