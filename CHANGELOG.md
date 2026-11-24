# Changelog — PassportReady Global

All notable changes to the PassportReady project are documented in this file in reverse chronological order.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased] - Phase 1: Critical Trust, Legal & Integrity Fixes (2026-11-24)

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
