# PassportReady — Global Passport Preparation Prototype

A responsive, mobile-first front-end concept for a global passport readiness and document-preparation tool.

## What's included

- Searchable ISO 3166-1 country/territory index (249 entries in this data snapshot) in the application wizard and directory. ISO 3166-1 includes country codes for countries, dependencies and certain areas; a listed area is not automatically a sovereign passport issuer.
- Domestic vs. overseas/consular application path.
- First passport, renewal/reissue, lost/stolen, damaged, correction/name change, emergency travel document and unsure service paths.
- Infant/young child, child/minor, adult and senior citizen applicant groups. The product does not assume a universal age threshold.
- General preparation checklist, name/DOB mismatch flags, document/translation/copy checks, photo/form checks, appointment/payment/tracking reminders, and printable output.
- Country data file (`countries.json`) with ISO alpha-2/alpha-3/numeric codes, authority URL where a portal was researched, source status and review date.
- Production-oriented validation template (`country-rule-pack.schema.json`) for per-country, per-service rules and provenance.

## Critical coverage status

**This is a global-capable prototype, not a completed global legal rules database.** All 249 indexed entries can be selected. In this snapshot, official entry-point links have been researched for India, the United States, United Kingdom, Canada, Australia, Pakistan and Bangladesh. Even for those entries, the prototype does not claim every child/adult/renewal/urgent/consular exception has been fully audited. Most entries remain marked `official_source_needs_research`.

The generic checklist helps users identify what to verify; it must never be described as a country's definitive accepted-document list. Do not publish exact document alternatives, fees, processing times, age cut-offs, Tatkaal/expedited eligibility, police/background checks or name-change procedures without the relevant current official source and a recorded review.

## Run locally

1. Extract the ZIP.
2. Open `passportready/index.html` in a modern browser.
3. No build tool is required for this front-end demo.

## Main files

- `index.html` — interactive responsive prototype; country list and starter authority map are embedded so it works as a local file.
- `countries.json` — editable country/territory directory and current source-status manifest.
- `country-rule-pack.schema.json` — schema starter for the production country-specific rule engine.

## Official sources linked in the prototype

- India Passport Seva: https://www.passportindia.gov.in/
- United States Department of State: https://travel.state.gov/en/passports.html
- United Kingdom GOV.UK passports: https://www.gov.uk/browse/abroad/passports
- Canada passport services: https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports.html
- Australian Passport Office: https://www.passports.gov.au/
- Pakistan Directorate General of Immigration & Passports: https://dgip.gov.pk/passport/ordinary-passport.php
- Bangladesh e-Passport portal: https://www.epassport.gov.bd/landing
- ISO 3166 country-code information: https://www.iso.org/iso-3166-country-codes.html

## Production checklist before launch

1. Assign owners/reviewers by jurisdiction and language.
2. Research official passport authority, legislation, application forms, fee pages, and embassy/consulate pages per nationality and filing location.
3. Populate service packs separately for fresh, child, renewal/reissue, lost/stolen, damaged, correction/name change, urgent/emergency, overseas/consular and special legal circumstances.
4. Store source URL, exact supporting rule, last-reviewed date, effective date, reviewer and conflicts for every rule/document alternative/fee/time.
5. Add automated link checks and review reminders, plus a human approval gate before rules become visible.
6. Add multilingual reviewed translations, accessibility review, privacy notices, secure handling, data retention/deletion policy and security testing before any document upload.
7. Add backend, authenticated admin CMS, rule versioning/audit logs, analytics with privacy controls, monitoring and automated browser tests.

## Privacy and legal positioning

The demo asks no passport number and does not upload files. A production release should collect the minimum necessary data, avoid storing document images by default, define deletion controls, and clearly state that PassportReady is independent and cannot guarantee passport issuance or approval.
