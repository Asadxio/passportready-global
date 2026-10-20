# PassportReady — Operational Readiness & Governance Runbook

**Project:** PassportReady — "Check Before You Apply"<br>
**Live Production Deployment:** [https://passport.myoss.in/](https://passport.myoss.in/)<br>
**GitHub Repository:** [Asadxio/passportready-global](https://github.com/Asadxio/passportready-global)<br>
**Document Classification:** Internal Operations, Maintenance & Release Governance<br>
**Current Asset Cache-Buster:** `?v=20261020_01`<br>
**Effective Date:** 2026-10-20

---

## 1. Operational Charter & System Mission

PassportReady is an independent global passport preparation platform designed to help citizens, expatriates, travelers, and families prepare their passport applications accurately before submission.

### Mission Statement:
> *"Check Before You Apply — reduce application rejections, identify documentary discrepancies early, verify 6-month international travel validity, and connect applicants directly to verified government issuing authorities."*

### Explicit Operational Boundaries:
- PassportReady is **NOT a government agency** and is not affiliated with any foreign ministry, department of state, passport office, or consular post.
- PassportReady **DOES NOT issue passports**, schedule official government appointments, collect statutory fees, or make official approvals.
- All final applications, statutory payments, biometric lodgements, and civil document submissions must be performed directly through official government portals.

---

## 2. Architecture & Privacy-by-Design Model

PassportReady operates entirely as a high-performance, client-side, zero-backend static web application hosted on GitHub Pages with custom domain DNS routing through `passport.myoss.in`.

```
                  +----------------------------------------------+
                  |               User Web Browser               |
                  |                                              |
                  |  +-----------------+    +-----------------+  |
                  |  |  Interactive UI |    |  Rules Engine   |  |
                  |  |   (index.html)  |--->| (rules-engine)  |  |
                  |  +-----------------+    +-----------------+  |
                  |           |                      |           |
                  |           v                      v           |
                  |  +-----------------+    +-----------------+  |
                  |  |  Discrepancy /  |    | Dynamic Action  |  |
                  |  |  Validity Tools |    |    Checklist    |  |
                  |  +-----------------+    +-----------------+  |
                  |           |                      |           |
                  |           v                      v           |
                  |    Zero Persistent        Zero Network Trans |
                  |    Client Storage         (No Remote PII)    |
                  +----------------------------------------------+
```

### Privacy & Security Safeguards:
1. **Zero PII Collection & Retention:**
   - No passport numbers, national ID numbers, full civil names, dates of birth, or uploaded documents are ever collected, transmitted to remote servers, or permanently stored.
   - All evaluation logic (age calculation, mismatch analysis, checklist compilation) runs locally in the user's browser sandbox.
2. **Zero Third-Party Telemetry & Trackers:**
   - Zero analytics trackers, zero advertising pixels, zero third-party font/script loaders, and zero cookies.
   - Strict Content Security Policy (CSP) enforced in `index.html`:
     `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';`
3. **Strict Referrer Policy:**
   - Enforces `strict-origin-when-cross-origin` to prevent URL leakages when clicking outbound verified official government portal links.
4. **Sandboxed LocalStorage Persistence:**
   - Only non-identifying operational state is stored in localStorage:
     - `passportready_lang`: selected UI language (`en`, `hi`, `ur`, `fr`, `de`, `ar`).
     - `passportready_answers`: whitelisted questionnaire answers (service type, age category, urgency).
     - `passportready_checks`: checklist item checkbox states.
   - Clicking "Start New Check" or "Clear" instantly and permanently purges all localStorage records.

---

## 3. Maintenance Runbook & Change Management

### 3.1 Repository Structure
```
passportready/
├── CNAME                              # Custom domain configuration (passport.myoss.in)
├── index.html                         # Semantic, accessible SPA entrypoint
├── robots.txt                         # Search engine crawler configuration
├── sitemap.xml                        # Canonical XML sitemap with lastmod dates
├── countries.json                     # Canonical 249 ISO 3166-1 country dataset
├── country-coverage-tracker.csv       # Audited tabular coverage tracker (250 lines)
├── country-rule-pack.schema.json      # JSON Schema for verified country rule packs
├── css/
│   └── styles.css                     # WCAG 2.2 AA design system & print stylesheet
├── data/
│   ├── country-data.js                # Browser JS bundle of countries.json
│   ├── country-rules.json             # Canonical JSON rule packs for 27 verified nations
│   └── rule-packs.js                  # Browser JS bundle of country-rules.json
├── js/
│   ├── app.js                         # Application controller & UI coordinator
│   ├── guides-data.js                 # Structured passport educational guides
│   ├── i18n.js                        # 6-language internationalization engine
│   ├── rules-engine.js                # Official-source & statutory rules evaluation engine
│   └── tools.js                       # 6-month validity & discrepancy analyzer tools
├── docs/
│   ├── GLOBAL_JURISDICTION_RESEARCH_LEDGER.md # Ledger for 222 unverified jurisdictions
│   ├── OPERATIONAL_READINESS.md       # Operational governance & runbook (this file)
│   ├── PROJECT_COMPLETION_TRACKER.md  # Comprehensive execution tracker
│   ├── RELEASE_READINESS.md           # Pre-launch gating audit & release signoff
│   └── SOURCE_AUDIT_REGISTER.md       # Claim-level source audit for 27 verified packs
├── scripts/
│   ├── export-data-js.js              # Syncs JSON datasets into browser JS bundles
│   └── verify-live.js                 # Live HTTP verification suite against production
└── test/
    └── validate.js                    # Automated local validation test suite
```

### 3.2 Standard Development & Deployment Workflow
1. **Branch Isolation:**
   - Never commit directly to `main`.
   - Create a dedicated feature branch: `git checkout -b feat/your-feature-name`.
2. **Data Edits & Synchronization:**
   - When modifying country metadata or rule packs, edit `countries.json` or `data/country-rules.json`.
   - Run the synchronization script to compile browser bundles:
     ```bash
     node scripts/export-data-js.js
     ```
   - Verify that data representations between JSON and JS remain 100% identical.
3. **Cache-Buster Maintenance:**
   - When updating production assets, increment the query string cache-buster in `index.html` and `scripts/verify-live.js`:
     `?v=YYYYMMDD_NN` (e.g., `?v=20261020_02`).
4. **Validation Test Suite Execution:**
   - Always run the local test suite prior to committing:
     ```bash
     node test/validate.js
     ```
   - Must pass all tests with exit code 0.
5. **Live Production Smoke Testing:**
   - Verify live production behavior using the automated verification harness:
     ```bash
     node scripts/verify-live.js
     ```
   - Must complete all sections with exit code 0.
6. **Pull Request & Human Review:**
   - Submit a pull request to `main`.
   - Merge only after obtaining explicit human authorization.

---

## 4. Rule Pack Authoring & Source Verification Protocol

Every verified rule pack must strictly satisfy the following criteria before promotion from `official_source_needs_research` to `verified`:

### 4.1 Authoritative Domain Registry Binding
- The domain must be registered in `AUTHORITATIVE_OFFICIAL_DOMAINS` in `js/rules-engine.js`.
- A rule pack cannot self-authorize new domains via `trusted_domains`.
- Hostname matching uses exact match or strict dot-rooted subdomain matching (e.g. `.gov.uk`, `.gc.ca`). Look-alike domains (e.g. `gov.uk.attacker.com`) are automatically rejected.

### 4.2 Claim-Level Source Relevance
- Generic agency homepages (e.g. `https://travel.state.gov/`) cannot serve as proof for specific fee amounts or document requirements.
- Fee claims must link to specific fee schedules (e.g. `https://travel.state.gov/.../fees.html`).
- Exceptions are only permitted if centrally registered in `CENTRAL_HOMEPAGE_EXCEPTIONS` with formal provenance, review date, and rationale.

### 4.3 Fee Schema Integrity
Every fee record within a rule pack must include:
- `amount`: Finite non-negative number.
- `currency`: Valid 3-letter ISO 4217 currency code (e.g., `USD`, `INR`, `GBP`, `CAD`, `AUD`, `MYR`, `MXN`, `JPY`).
- `effective_date`: Valid date string (e.g., `2026-01-01`).
- `official_source`: Authoritative official URL.
- Dimensional filters: `applicant_category`, `service_type`, `application_channel`, `validity_years`, `processing_route`.

---

## 5. User Support, Feedback & Bug Triage

### 5.1 Issue Intake Channels
- **GitHub Issues:** [https://github.com/Asadxio/passportready-global/issues](https://github.com/Asadxio/passportready-global/issues)
- **Direct Feedback:** Available via the methodology and disclaimer modals.

### 5.2 Severity & Triage Matrix
| Severity | Description | Target Response | Action Protocol |
| :--- | :--- | :---: | :--- |
| **P0 — Critical** | Statutory fee mismatch or inaccurate validity rule causing financial or boarding risk. | < 24 hours | 1. Reproduce with official gazette citation.<br>2. Update `data/country-rules.json`.<br>3. Run `export-data-js.js` & tests.<br>4. Increment cache-buster and deploy. |
| **P1 — High** | Official government URL 404 or redirect to unrelated government service. | < 48 hours | Update official URL in rule pack and `SOURCE_AUDIT_REGISTER.md`. |
| **P2 — Medium** | Translation typo, RTL layout misalignment, or minor phrasing ambiguity. | < 5 business days | Update `js/i18n.js` ensuring key parity is preserved. |
| **P3 — Low** | New country pack request for one of the 222 research jurisdictions. | Backlog prioritization | Follow 6-factor prioritization scoring in `GLOBAL_JURISDICTION_RESEARCH_LEDGER.md`. |

---

## 6. Legal & Regulatory Disclaimer Framework

To protect users and maintain regulatory compliance across international jurisdictions, PassportReady enforces prominent disclaimers across all touchpoints:

1. **Top Bar Banner:**
   `"Official government portals verified · No approval guarantees · Independent global passport readiness & document guidance"`
2. **Translation Disclaimer:**
   `"Translations are provided for informational convenience only. Statutory passport requirements, fee schedules, and official application forms are legally governed by the official languages of the issuing authority. Always verify your specific requirements on the official government portal."`
3. **Action Plan Footer:**
   `"PassportReady is an independent preparation guide and is not affiliated with any government authority. Requirements, fees, and processing times are subject to statutory changes by issuing governments."`
4. **Print / PDF Watermark & Header:**
   The printed document checklist prominently displays the preparation date, issuing authority, and explicit non-agency advisory.

---

## 7. Operational Readiness Checklist

- [x] Zero backend server dependencies; static file hosting with HTTPS.
- [x] Zero PII collection; strictly local client-side processing.
- [x] Zero third-party telemetry, ads, tracking pixels, or cookies.
- [x] Strict Content Security Policy (CSP) and referrer headers active.
- [x] Full automated test suite passing (29 of 29 tests).
- [x] Live production verification script passing (13 of 13 sections).
- [x] All 6 languages (`en`, `hi`, `ur`, `fr`, `de`, `ar`) at 100% key parity (132 keys).
- [x] High-contrast WCAG 2.2 AA focus indicators and clean `@media print` styles.
- [x] Comprehensive documentation ledgers established in `docs/`.
