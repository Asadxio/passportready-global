# Verification Log — Phase 5 Step 1

**Session date:** 2026-11-26  
**Last amended:** 2026-11-26 (Patch 2 — GB child 54-page corrected; CA weekend surcharge added; hosting clarified)  
**Verifier:** PassportReady automated + manual review against official government portals  
**Scope:** Priority 6 countries: India (IN), United Kingdom (GB), United States (US), Canada (CA), Australia (AU), UAE (AE)  
**Methodology:** Each fact checked against the country's authoritative passport authority page. Web searches targeted official domains only (gov.uk, travel.state.gov, canada.ca, passports.gov.au, icp.gov.ae, passportindia.gov.in). DNS-verified hosting.

> **Golden rule**: `last_reviewed` is only set to the date the source was actually opened. Facts that could not be confirmed from official sources are marked `CANNOT_CONFIRM` and must show an "Awaiting verification" notice on-site.

---

## 🏠 Hosting — Authoritative Answer

| Question | Finding |
|---|---|
| Provider | **GitHub Pages** |
| Evidence | `CNAME` file → `passport.myoss.in`; DNS CNAME → `asadxio.github.io`; IPs `185.199.108-111.153` are GitHub Pages ranges |
| No evidence of | No `netlify.toml`, no `vercel.json`, no `.github/workflows/` directory in repo |
| Publish branch | `main` (GitHub Pages default) |
| Previous session error | An earlier session said "Netlify" — that was incorrect. DNS was not checked. This entry corrects it. |
| Implication for deploys | Pushes to `origin/main` deploy automatically; no manual build trigger needed; no CDN purge step required beyond service worker cache bump |

---

## 🇮🇳 India (IN)

**Authority:** Ministry of External Affairs — Passport Seva  
**Portal:** https://www.passportindia.gov.in/  
**Regulatory basis:** Passports (Amendment) Rules, 2026, G.S.R. 516(E)  
**Fee schedule effective date:** 2026-07-01  
**Last rule-pack review date (pre-session):** 2026-10-21  

| # | Fact | Our Value (pre-session) | Official Value | Match | Source URL | Fee Schedule Effective Date | Date Verified | Action |
|---|------|-----------|---------------|-------|-----------|-------------|--------------|--------|
| IN-01 | Adult 36-page fresh passport fee | ₹2,500 | ₹2,500 | ✅ YES | https://www.passportindia.gov.in/AppOnlineProject/online/feeSchedule | 2026-07-01 | 2026-11-26 | No change |
| IN-02 | Adult 60-page fresh passport fee | ₹3,500 | ₹3,500 | ✅ YES | https://www.passportindia.gov.in/AppOnlineProject/online/feeSchedule | 2026-07-01 | 2026-11-26 | No change |
| IN-03 | Minor (under 18) fresh passport fee | ₹1,750 | ₹1,750 | ✅ YES | https://www.passportindia.gov.in/AppOnlineProject/online/feeSchedule | 2026-07-01 | 2026-11-26 | No change |
| IN-04 | Tatkaal additional surcharge | ₹2,500 | ₹2,500 | ✅ YES | https://www.passportindia.gov.in/AppOnlineProject/online/feeSchedule | 2026-07-01 | 2026-11-26 | No change |
| IN-05 | Tatkaal total — adult 36-page | ₹5,000 | ₹5,000 | ✅ YES | https://www.passportindia.gov.in/AppOnlineProject/online/feeSchedule | 2026-07-01 | 2026-11-26 | No change |
| IN-06 | Tatkaal total — adult 60-page | ₹6,000 | ₹6,000 | ✅ YES | https://www.passportindia.gov.in/AppOnlineProject/online/feeSchedule | 2026-07-01 | 2026-11-26 | No change |
| IN-07 | Tatkaal total — minor | ₹4,250 | ₹4,250 | ✅ YES | https://www.passportindia.gov.in/AppOnlineProject/online/feeSchedule | 2026-07-01 | 2026-11-26 | No change |
| IN-08 | Lost/stolen adult 36-page fee | ₹5,000 | ₹5,000 | ✅ YES | https://www.passportindia.gov.in/AppOnlineProject/online/feeSchedule | 2026-07-01 | 2026-11-26 | No change |
| IN-09 | Lost/stolen adult 60-page fee | ₹6,000 | ₹6,000 | ✅ YES | https://www.passportindia.gov.in/AppOnlineProject/online/feeSchedule | 2026-07-01 | 2026-11-26 | No change |
| IN-10 | Senior citizen (60+) 10% rebate on basic fee | `verification_status: "unverified"` | CONFIRMED — 10% rebate on base fee for fresh applications, age 60+; also for children under 8 | ✅ CONFIRMED | https://www.passportindia.gov.in/AppOnlineProject/online/feeSchedule | 2026-07-01 | 2026-11-26 | **FIXED** — set to `verified` |
| IN-11 | Photo size | 4.5cm × 3.5cm (infant note) | 3.5cm × 4.5cm (35mm × 45mm), white background | ✅ YES | https://www.passportindia.gov.in/ | N/A (ICAO standard) | 2026-11-26 | No change |
| IN-12 | Annexure E — name change after marriage | "Annexure E self-declaration" | **WRONG** — now **Annexure J** (Joint Photo Declaration) or Marriage Certificate; no Gazette required | ❌ MISMATCH | https://www.passportindia.gov.in/AppOnlineProject/online/annexureInfo | N/A (procedure) | 2026-11-26 | **FIXED** |
| IN-13 | Lost/stolen minor Tatkaal fee | Missing from pack | ₹6,750 (₹4,250 base + ₹2,500 Tatkaal) | ⚠️ MISSING | https://www.passportindia.gov.in/AppOnlineProject/online/feeSchedule | 2026-07-01 | 2026-11-26 | Added note |
| IN-14 | PCC (Police Clearance Certificate) fee | Missing from pack | ₹750 | ⚠️ MISSING | https://www.passportindia.gov.in/AppOnlineProject/online/feeSchedule | 2026-07-01 | 2026-11-26 | Added note |

---

## 🇬🇧 United Kingdom (GB)

**Authority:** HM Passport Office  
**Portal:** https://www.gov.uk/browse/abroad/passports  
**Regulatory basis:** Passport (Fees) Regulations  
**Fee schedule effective date:** 2026-04-08  
**Last rule-pack review date (pre-session):** 2026-10-18  

> [!CAUTION]
> This section was **amended in Patch 2** (2026-11-26). The original Step 1 entry incorrectly stated "UK all fees ✅ verified." The child 54-page (Frequent Traveller) fees were NOT checked against gov.uk in Step 1 — only adult and child 34-page fees were confirmed. The error is documented here with the corrected values.

| # | Fact | Our Value (pre-session) | Step 1 claim | Official gov.uk (eff. 2026-04-08) | Correct? | Source URL | Fee Schedule Effective Date | Date Verified | Action |
|---|------|-----------|-------------|-------|-----------|-----------|------------|--------------|--------|
| GB-01 | Adult 34-page online | £102 | ✅ verified | £102 | ✅ YES | https://www.gov.uk/renew-adult-passport/fees | 2026-04-08 | 2026-11-26 | No change |
| GB-02 | Adult 34-page postal | £115.50 | ✅ verified | £115.50 | ✅ YES | https://www.gov.uk/renew-adult-passport/fees | 2026-04-08 | 2026-11-26 | No change |
| GB-03 | Adult 54-page (Frequent Traveller) online | £116 (labelled "jumbo 50-page") | ✅ price verified, label fixed | £116 | ✅ YES | https://www.gov.uk/renew-adult-passport/fees | 2026-04-08 | 2026-11-26 | Label fixed to "54-page Frequent Traveller" |
| GB-04 | Adult 54-page (Frequent Traveller) postal | £129.50 | ✅ verified | £129.50 | ✅ YES | https://www.gov.uk/renew-adult-passport/fees | 2026-04-08 | 2026-11-26 | Label fixed |
| GB-05 | Child 34-page online | £66.50 | ✅ verified | £66.50 | ✅ YES | https://www.gov.uk/renew-adult-passport/fees | 2026-04-08 | 2026-11-26 | No change |
| GB-06 | Child 34-page postal | £80.00 | ✅ verified | £80.00 | ✅ YES | https://www.gov.uk/renew-adult-passport/fees | 2026-04-08 | 2026-11-26 | No change |
| GB-07 | **Child 54-page (Frequent Traveller) online** | **£76.50** | ~~not checked in Step 1~~ | **£80.50** | ❌ **WRONG — was never verified** | https://www.gov.uk/renew-adult-passport/fees | 2026-04-08 | 2026-11-26 | **FIXED (Patch 2): £76.50 → £80.50** |
| GB-08 | **Child 54-page (Frequent Traveller) postal** | **£90.00** | ~~not checked in Step 1~~ | **£94.00** | ❌ **WRONG — was never verified** | https://www.gov.uk/renew-adult-passport/fees | 2026-04-08 | 2026-11-26 | **FIXED (Patch 2): £90.00 → £94.00** |
| GB-09 | Fast Track 1-week adult fee | £192 | ✅ verified | £192 | ✅ YES | https://www.gov.uk/renew-adult-passport/fees | 2026-04-08 | 2026-11-26 | No change |
| GB-10 | Premium 1-day adult fee | £239.50 | ✅ verified | £239.50 | ✅ YES | https://www.gov.uk/renew-adult-passport/fees | 2026-04-08 | 2026-11-26 | No change |
| GB-11 | Child Fast Track 1-week fee | £156.50 | ✅ verified | £156.50 | ✅ YES | https://www.gov.uk/renew-adult-passport/fees | 2026-04-08 | 2026-11-26 | No change |
| GB-12 | Overseas adult online fee | £116.50 | ✅ verified | £116.50 | ✅ YES | https://www.gov.uk/renew-adult-passport/fees | 2026-04-08 | 2026-11-26 | No change |
| GB-13 | Photo background colour | cream/off-white | ⚠️ partial — missing "light grey" | cream, off-white, or light grey | ✅ PARTIAL → Fixed | https://www.gov.uk/photos-for-passports | N/A | 2026-11-26 | **FIXED (Step 1): added "light grey"** |
| GB-14 | Photo size | 35mm × 45mm | ✅ verified | 45mm high × 35mm wide | ✅ YES | https://www.gov.uk/photos-for-passports | N/A | 2026-11-26 | No change |

**Step 1 accuracy assessment:** 10 of 14 facts correctly verified; 2 facts (child 54-page fees) were wrongly marked verified without being checked; corrected in Patch 2.

---

## 🇺🇸 United States (US)

**Authority:** U.S. Department of State  
**Portal:** https://travel.state.gov/  
**Fee schedule effective date:** Current (no specific date change found in 2026 — rates unchanged from 2024 schedule)  
**Last rule-pack review date (pre-session):** 2026-10-18  

| # | Fact | Our Value (pre-session) | Official Value | Match | Source URL | Fee Schedule Effective Date | Date Verified | Action |
|---|------|-----------|---------------|-------|-----------|-------------|--------------|--------|
| US-01 | Adult first-time book application fee | $130 | $130 | ✅ YES | https://travel.state.gov/content/travel/en/passports/need-passport/fees.html | Unchanged (last set ~2022) | 2026-11-26 | No change |
| US-02 | Acceptance/execution fee | $35 | $35 | ✅ YES | https://travel.state.gov/content/travel/en/passports/need-passport/fees.html | Unchanged | 2026-11-26 | No change |
| US-03 | Total adult first-time book | $165 | $165 | ✅ YES | https://travel.state.gov/content/travel/en/passports/need-passport/fees.html | Unchanged | 2026-11-26 | No change |
| US-04 | Adult renewal book fee | $130 (no execution fee) | $130 | ✅ YES | https://travel.state.gov/content/travel/en/passports/need-passport/fees.html | Unchanged | 2026-11-26 | No change |
| US-05 | Minor (under 16) book + execution | $135 ($100 + $35) | $135 | ✅ YES | https://travel.state.gov/content/travel/en/passports/need-passport/fees.html | Unchanged | 2026-11-26 | No change |
| US-06 | Expedite service fee | $60 | $60 | ✅ YES | https://travel.state.gov/content/travel/en/passports/need-passport/fees.html | Unchanged | 2026-11-26 | No change |
| US-07 | Photo size | 2×2 inches (51×51mm) | 2×2 inches | ✅ YES | https://travel.state.gov/content/travel/en/passports/photos.html | N/A (ICAO/DoS standard) | 2026-11-26 | No change |
| US-08 | Photo background | white or off-white | white or off-white | ✅ YES | https://travel.state.gov/content/travel/en/passports/photos.html | N/A | 2026-11-26 | No change |

---

## 🇨🇦 Canada (CA)

**Authority:** Immigration, Refugees and Citizenship Canada (IRCC)  
**Portal:** https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports.html  
**Regulatory basis:** Service Fees Act annual CPI adjustment  
**Fee schedule effective date:** 2026-03-31  
**Last rule-pack review date (pre-session):** 2026-10-18  

> **Express/Standard surcharge note:** The original pack values of $57.15 (express) and $22.85 (standard) pre-date the March 2026 adjustment. The current official values are $50.00 (express) and $20.00 (standard) per canada.ca. Both sources confirmed side-by-side below.

| Fee | Old value (pre-Mar-2026) | Our data after Step 1 fix | Official canada.ca (eff. 2026-03-31) | Match |
|-----|--------------------------|--------------------------|--------------------------------------|-------|
| Express pickup | $57.15 | $50.00 | **$50.00** | ✅ |
| Standard pickup | $22.85 | $20.00 | **$20.00** | ✅ |
| Urgent pickup | $125.75 (new) | $125.75 | **$125.75** | ✅ |
| Weekend/holiday | n/a | n/a (missing) | **$383.50** (added Patch 2) | ✅ |

| # | Fact | Our Value (pre-session) | Official Value | Match | Source URL | Fee Schedule Effective Date | Date Verified | Action |
|---|------|-----------|---------------|-------|-----------|-------------|--------------|--------|
| CA-01 | Adult 5-year passport fee | CAD $122.50 | CAD $122.50 | ✅ YES | https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/fees.html | 2026-03-31 | 2026-11-26 | No change |
| CA-02 | Adult 10-year passport fee | CAD $163.50 | CAD $163.50 | ✅ YES | https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/fees.html | 2026-03-31 | 2026-11-26 | No change |
| CA-03 | Child (0–15) passport fee | CAD $58.50 | CAD $58.50 | ✅ YES | https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/fees.html | 2026-03-31 | 2026-11-26 | No change |
| CA-04 | Urgent pickup surcharge | CAD $125.75 | CAD $125.75 | ✅ YES | https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/fees.html | 2026-03-31 | 2026-11-26 | No change |
| CA-05 | Express pickup surcharge | CAD $57.15 (old) | CAD $50.00 | ✅ Fixed in Step 1 | https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/fees.html | 2026-03-31 | 2026-11-26 | **FIXED (Step 1)** |
| CA-06 | Standard (mailed) surcharge | CAD $22.85 (old) | CAD $20.00 | ✅ Fixed in Step 1 | https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/fees.html | 2026-03-31 | 2026-11-26 | **FIXED (Step 1)** |
| CA-07 | Child overseas passport fee | CAD $102.50 | CAD $102.50 | ✅ YES | https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/fees.html | 2026-03-31 | 2026-11-26 | No change |
| CA-08 | Weekend/holiday emergency service | Missing from pack | CAD $383.50 | ⚠️ MISSING | https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/fees/fee-changes-passport.html | 2026-03-31 | 2026-11-26 | **ADDED (Patch 2)** |
| CA-09 | Photo size | 50mm × 70mm | 50mm × 70mm | ✅ YES (standard Canadian spec) | https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/photos.html | N/A | 2026-11-26 | No change |

---

## 🇦🇺 Australia (AU)

**Authority:** Australian Passport Office (APO)  
**Portal:** https://www.passports.gov.au/  
**Regulatory basis:** Australian Passports (Application Fees) Determination  
**Fee schedule effective date:** 2026-01-01  
**Last rule-pack review date (pre-session):** 2026-10-18  

| # | Fact | Our Value (pre-session) | Official Value | Match | Source URL | Fee Schedule Effective Date | Date Verified | Action |
|---|------|-----------|---------------|-------|-----------|-------------|--------------|--------|
| AU-01 | Adult 10-year passport fee | AUD $422 | AUD $422 | ✅ YES | https://www.passports.gov.au/fees-and-refunds | 2026-01-01 | 2026-11-26 | No change |
| AU-02 | Child 5-year passport fee | AUD $213 | AUD $213 | ✅ YES | https://www.passports.gov.au/fees-and-refunds | 2026-01-01 | 2026-11-26 | No change |
| AU-03 | Senior (75+) 5-year passport fee | AUD $213 | AUD $213 | ✅ YES | https://www.passports.gov.au/fees-and-refunds | 2026-01-01 | 2026-11-26 | No change |
| AU-04 | Priority processing surcharge (2-day) | AUD $308 | AUD $308 | ✅ YES | https://www.passports.gov.au/fees-and-refunds | 2026-01-01 | 2026-11-26 | No change |
| AU-05 | Fast Track surcharge (5-day) | AUD $107 | AUD $107 | ✅ YES | https://www.passports.gov.au/fees-and-refunds | 2026-01-01 | 2026-11-26 | No change |
| AU-06 | Overseas adult surcharge | AUD $189 | AUD $189 | ✅ YES | https://www.passports.gov.au/fees-and-refunds | 2026-01-01 | 2026-11-26 | No change |
| AU-07 | Photo size | 35mm × 45mm | 35mm × 45mm | ✅ YES | https://www.passports.gov.au/getting-a-passport/photo-requirements | N/A | 2026-11-26 | No change |

---

## 🇦🇪 United Arab Emirates (AE)

**Authority:** Federal Authority for Identity, Citizenship, Customs and Port Security (ICP)  
**Portal:** https://icp.gov.ae/en/service/issue-passport/  
**Fee schedule effective date:** Unknown — ICP does not publish a formal "effective from" date on the fee page  
**Last rule-pack review date (pre-session):** 2026-10-19  

| # | Fact | Our Value (pre-session) | Official Value | Match | Source URL | Fee Schedule Effective Date | Date Verified | Action |
|---|------|-----------|---------------|-------|-----------|-------------|--------------|--------|
| AE-01 | Standard 5-year passport fee | AED 50 | AED 50 (AED 10 request + AED 40 issuance) | ✅ YES | https://icp.gov.ae/en/service/issue-passport/ | Unspecified | 2026-11-26 | No change |
| AE-02 | Standard 10-year passport fee | AED 65 | AED 100 (AED 10 request + AED 90 issuance) | ❌ MISMATCH | https://icp.gov.ae/en/service/issue-passport/ | Unspecified | 2026-11-26 | **FIXED (Step 1): AED 65 → AED 100** |
| AE-03 | Express/priority surcharge | AED 50 | Cannot confirm — ICP only lists AED 15 delivery fee; no express surcharge found | ⚠️ CANNOT_CONFIRM | https://icp.gov.ae/en/service/issue-passport/ | N/A | 2026-11-26 | **MARKED unverified** |
| AE-04 | Photo spec dimensions | Not fully specified | Cannot confirm from search results | ⚠️ CANNOT_CONFIRM | https://icp.gov.ae/ | N/A | 2026-11-26 | Marked unverified |

---

## Complete Mismatch & Fix Summary

| # | Country | Field | Pre-session Value | Correct Value | Fix Applied | Patch |
|---|---------|-------|-------------------|--------------|-------------|-------|
| 1 | 🇮🇳 IN | Senior rebate `verification_status` | unverified | verified | ✅ | Step 1 |
| 2 | 🇮🇳 IN | Name-change annexure | Annexure E | Annexure J / Marriage Certificate | ✅ | Step 1 |
| 3 | 🇬🇧 GB | Child 54-page online fee | **£76.50** | **£80.50** | ✅ | **Patch 2** |
| 4 | 🇬🇧 GB | Child 54-page postal fee | **£90.00** | **£94.00** | ✅ | **Patch 2** |
| 5 | 🇬🇧 GB | Large-format book label | "50-page jumbo" | "54-page Frequent Traveller" | ✅ | Step 1 |
| 6 | 🇬🇧 GB | Photo background colour | cream/off-white | cream, off-white, or light grey | ✅ | Step 1 |
| 7 | 🇨🇦 CA | Express pickup surcharge | $57.15 | $50.00 | ✅ | Step 1 |
| 8 | 🇨🇦 CA | Standard (mailed) surcharge | $22.85 | $20.00 | ✅ | Step 1 |
| 9 | 🇨🇦 CA | Weekend/holiday surcharge | MISSING | $383.50 | ✅ | **Patch 2** |
| 10 | 🇦🇪 AE | 10-year passport fee | AED 65 | AED 100 | ✅ | Step 1 |
| 11 | 🇦🇪 AE | Express surcharge | AED 50 | Cannot confirm | ⚠️ UNVERIFIED | Step 1 |

---

## Verification Coverage (Final)

| Country | Facts Checked | ✅ Confirmed | 🔧 Fixed | ⚠️ Unverified/Missing |
|---------|--------------|---------|---------|----------------------|
| IN | 14 | 11 | 2 | 1 |
| GB | 14 | 10 | 4 | 0 |
| US | 8 | 8 | 0 | 0 |
| CA | 9 | 7 | 3 | 0 |
| AU | 7 | 7 | 0 | 0 |
| AE | 4 | 1 | 1 | 2 |
| **Total** | **56** | **44** | **10** | **3** |

> Items marked ⚠️ UNVERIFIED display a visible "Awaiting verification — check the official portal" notice on the site.
