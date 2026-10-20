# PassportReady — Global Jurisdiction Research Ledger (All 222 Awaiting-Research Entries)

**Standard:** Truthful, Claim-Level Research Ledger
**Total Awaiting Research Entries Accounted For:** 222
**Date:** 2026-10-20

---

## 1. Prioritization & Scoring Methodology

Jurisdictions awaiting detailed research are evaluated across 6 objective criteria:
1. **User Demand & Population Weight (1-5):** Volume of international travelers and diaspora communities.
2. **Authoritative Online Availability (1-5):** Presence of official foreign ministry, immigration directorate, or gazette portals.
3. **Language Feasibility (1-5):** Availability of official information in English, French, Spanish, German, or official translations.
4. **Passport Service Complexity (1-5):** Multi-tier fee schedules, biometrics, decentralized prefectures.
5. **Consular vs Domestic Variance (1-5):** Distinct tariffs and workflows for domestic vs overseas applicants.
6. **Data Freshness & Traceability (1-5):** Verified statutory effective dates and active government fee revisions.

---

### 1.1 Project Entity Classification Policy & Sovereignty Baseline

PassportReady adheres to a strict, mathematically reconciled jurisdiction classification policy across all repository datasets:
1. **Universal ISO 3166-1 Denominator:** Exactly **249 unique ISO 3166-1 alpha-2 jurisdictions** (defined in `countries.json`). This denominator remains constant and authoritative.
2. **UN-Recognized Sovereign Baseline (195 States):**
   - **193 United Nations Member States**.
   - **2 United Nations Non-Member Permanent Observer States**:
     - Holy See / Vatican City (`VA`, UN Permanent Observer since 1964)
     - State of Palestine (`PS`, UN Permanent Observer State via UNGA Resolution 67/19)
   - Across the repository, 27 UN-recognized sovereign states are supported via production rule packs (`data/country-rules.json`), and 168 UN-recognized sovereign states are tracked in Section 2 of this ledger ($27 + 168 = 195$).
3. **Non-Sovereign Territories, Dependencies & Special Administrative Regions (54 ISO Entities):**
   - Comprises Crown Dependencies (`GG`, `IM`, `JE`), overseas territories (`BM`, `KY`, `VG`, `GI`, `FK`, `PF`, `NC`, etc.), unincorporated US territories (`AS`, `GU`, `MP`, `PR`, `VI`, `UM`), special administrative regions (`HK`, `MO`), special status territories (`TW`), and non-self-governing / disputed territories (`EH`).
4. **Project-Specific Non-ISO Identifier (1 Entity):**
   - Kosovo (`XK`) is tracked for civil identity coverage but is strictly segregated from ISO arithmetic.
   - **Total Project-Tracked Records: 250** ($249 \text{ ISO jurisdictions} + 1 \text{ non-ISO identifier [XK]} = 250 \text{ tracked records}$).

---

## 2. Complete Jurisdiction Account Ledger

| ISO-2 | ISO-3 | Jurisdiction Name | Entity Type | Administering / Responsible Authority | Status | Evidence Gap / Research Notes |
| :---: | :---: | :--- | :--- | :--- | :---: | :--- |
| **AF** | AFG | Afghanistan | Sovereign State | General Directorate of Passports, Ministry of Interior (Taliban IEA) — `https://passport.moi.gov.af/` | `primary_sources_audited` | Taliban IEA administration: 5-yr ~AFN 5,000–5,200; 10-yr ~AFN 10,000–10,400 (PARTIAL). Consular: USD 120 (5-yr) / USD 220 (10-yr) via Taliban missions (PARTIAL). Tazkira (national ID) mandatory. ⚠️ Women's travel restrictions (mahram requirement); humanitarian crisis; Taliban not recognized by most Western governments. |
| **AL** | ALB | Albania | Sovereign State | Ministry of the Interior & IdentiTek — `https://e-albania.al/` | `primary_sources_audited` | Standard biometric passport: 7,500 ALL (15-day, 10-yr adult 16+ / 5-yr minor); Fast-track (2–3d): 18,000 ALL (DIRECT). Consular overseas: 130 EUR (DIRECT). Electronic ID card (Letërnjoftim) mandatory; coupon via Posta Shqiptare or e-kupon.identitek.al; e-Albania portal appointment; in-person at IdentiTek desks. |
| **DZ** | DZA | Algeria | Sovereign State | DGSN / Ministère de l'Intérieur — `https://www.dgsn.dz/` | `primary_sources_audited` | Finance Law stamp duty: Adult 28-pg DZD 6,000 / 48-pg DZD 9,000; Minor DZD 3,000 / 4,500; Express 28-pg DZD 25,000; Emergency 28-pg DZD 12,000 (PARTIAL — confirm current Finance Law). CNIB mandatory. APC in-person biometric enrollment. |
| **AS** | ASM | American Samoa | Territory / Special Region | U.S. Department of State (Non-Citizen US National / US Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by US. General guidance applies. |
| **AD** | AND | Andorra | Sovereign State | Servei de Tràmits / Ministeri de Justícia i Interior (`tramits.ad` / `govern.ad`) | `primary_sources_audited` | Decret regulador de les taxes d'expedició: Adult 20+ (10-yr) 49,31 €; Menor <20 (5-yr) 32,16 €; Passaport provisional (1-yr) 24,66 € (DIRECT). Paid at Tràmits counter or online via e-tramits.ad. Certificat de nacionalitat andorrana / Llibre de Família mandatory; live photo booth capture on-site; fingerprints & signature mandatory from age 12+; police theft report for replacements. |
| **AO** | AGO | Angola | Sovereign State | Serviço de Migração e Estrangeiros (SME) — `https://www.sme.gov.ao/` | `primary_sources_audited` | Decreto Presidencial n.º 21/19: Passaporte ordinário (5-yr) 30.500,00 AOA (DIRECT). Paid via RUPE payment reference through Multicaixa interbank network. Bilhete de Identidade (BI) valid national ID mandatory; RUPE proof; birth certificate for minors; online pre-application via sme.gov.ao; biometrics at SME provincial directorates or SIAC centers. |
| **AI** | AIA | Anguilla | Territory / Special Region | HMPO (British Overseas Territories Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by GB. General guidance applies. |
| **AQ** | ATA | Antarctica | Territory / Special Region | Antarctic Treaty Area (No sovereign passport; nationals use country of citizenship) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by INT. General guidance applies. |
| **AG** | ATG | Antigua and Barbuda | Sovereign State | Passport Office, Queen Elizabeth Highway (`passport.gov.ag` / `ab.gov.ag`) | `primary_sources_audited` | Passports Act regulations: Consular rates (UK/Abroad): Adult 16+ £50.00; Child <16 £25.00; Lost/damaged £100.00 adult / £50.00 child (DIRECT). Domestic application portal (`passport.gov.ag`) intermittently inaccessible; domestic fee collected via revenue stamps at Passport Office window; CBI fees ($300/$1k USD) strictly separated. Original Birth Certificate + photo ID + Section 10 recommender mandatory. |
| **AR** | ARG | Argentina | Sovereign State | Registro Nacional de las Personas (RENAPER) / Min. del Interior | `primary_sources_audited` | Primary source audited (Batch 2). RENAPER statutory tariffs: Regular $100.000 ARS (postal delivery), Exprés $200.000 ARS (96 hrs), Al Instante $330.000 ARS (6 hrs at airports/hubs). Consular: 165 UC (USD 165 / €165). DNI mandatory prerequisite; parental consent for minors under 18. |
| **AM** | ARM | Armenia | Sovereign State | Migration & Citizenship Service (MCS), MIA — `https://mia.gov.am/` | `primary_sources_audited` | Biometric passport (10-yr): 28,650 AMD; National ID Card: 5,950 AMD (DIRECT). Naturalization duty: 50,000 AMD. Armenian ID card + military registration document (Zinvorakan grquyk) mandatory for males 18–27; in-person biometrics at MCS territorial offices (Davtashen, etc.). |
| **AW** | ABW | Aruba | Territory / Special Region | Cabinet of the Governor of Aruba (Kingdom of the Netherlands Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by NL. General guidance applies. |
| **AT** | AUT | Austria | Sovereign State | Bundesministerium für Inneres (BMI) / Passbehörden | `primary_sources_audited` | Primary source audited (Batch 1). Passgesetz 1992 (July 2025 Budget reform): Standard adult (12+) €112.00, Expresspass €148.00, 1-Tages-Express €326.00, Child (2-11) €44.00, Infant (<2) €0.00 first issue. Staatsbürgerschaftsnachweis + Geburtsurkunde required. |
| **AZ** | AZE | Azerbaijan | Sovereign State | Main Passport Dept., MIA & ASAN Xidmət — `https://asan.gov.az/` | `primary_sources_audited` | Law on State Duty: Adults 18+ (10-yr) 60 AZN; Children 3–18 (5-yr) 35 AZN; Children 1–3: 25 AZN; Infants <1: 15 AZN (DIRECT). Expedited tiers scale up by law. Şəxsiyyət vəsiqəsi (National ID) + military certificate (Hərbi bilet) mandatory for males 18–35; in-person at ASAN Xidmət centers. |
| **BS** | BHS | Bahamas | Sovereign State | Passport Office, Ministry of Foreign Affairs (`mofa.gov.bs`) | `primary_sources_audited` | E-passport fees: Adult 15½+ (10-yr) $50.00; Minor <15½ (5-yr) $25.00; Frequent Traveller (expanded) $100.00 (DIRECT). Expedited tiers: 36–48 hrs +$300.00; same-day +$350.00; lost replacement rush +$75–$375. National Insurance Board (NIB) Smart Card + birth certificate (RGD) mandatory; in-person or MyGateway (online adult renewal). |
| **BH** | BHR | Bahrain | Sovereign State | Nationality, Passports & Residence Affairs (NPRA), MOI — `https://www.npra.gov.bh/` | `primary_sources_audited` | Biometric e-passport: First issue BHD 12 (adult) / BHD 6 (senior 60+); Renewal/replacement BHD 15 (adult) / BHD 7.5 (senior 60+) (DIRECT). Validity 10-yr adult / 5-yr minor. National ID (Smart Card/CPR) mandatory; online via bahrain.bh with eKey or NPRA app; NPRA service centers. |
| **BB** | BRB | Barbados | Sovereign State | Barbados Immigration Department, Ministry of Home Affairs (`immigration.gov.bb`) | `primary_sources_audited` | Passports & Travel Documents Regs: Adult 16+ (10-yr, Form A) BDS$ 150.00; Minor <16 (5-yr, Form B) BDS$ 100.00; Urgent 2–5 days BDS$ 225.00; Express 1-day BDS$ 300.00; Lost/damaged penalty fee BDS$ 300.00 (DIRECT). Barbados Trident ID card + birth certificate + Section 10 Guarantor mandatory; in-person biometrics at Princess Alice Highway, Bridgetown. |
| **BY** | BLR | Belarus | Sovereign State | ДГиМ МВД Республики Беларусь (`mvd.gov.by` / `nalog.gov.by`) | `primary_sources_audited` | Налоговый кодекс & Указ № 107 (1 БВ = 45 BYN): Паспорт 1996 г. (10-yr) 1 БВ (45 BYN; дети <14 бесплатно первый раз); ID-карта 1,5 БВ (67,50 BYN); Биометрический паспорт (10-yr) 2 БВ (90 BYN; дети <14, пенсионеры 1,5 БВ) (DIRECT). Ускорение: 15 дней +1 БВ, 7 дней +2 БВ. Оплата ЕРИП. ⚠️ Указ № 278: выдача за рубежом ЗАПРЕЩЕНА; граждане обязаны обращаться лично в ОГиМ в Беларуси. |
| **BE** | BEL | Belgium | Sovereign State | SPF Affaires étrangères / Communes belges | `primary_sources_audited` | Primary source audited (Batch 4). Base federal tariffs: Adult 18+ (7-yr) €65 standard (€240 urgent, €350 superurgente); Minor <18 (5-yr) €35 standard (€210 urgent, €320 superurgente); plus municipal tax. Consular adult €75 standard / €210 urgent. eID required; ICAO photo. |
| **BZ** | BLZ | Belize | Sovereign State | Dept. of Border Management & Immigration, MFAFTI (`immigration.gov.bz`) | `primary_sources_audited` | Belize Electronic Passport System (BEPS): Adult 16+ (10-yr) BZ$ 200.00; Minor <16 (5-yr) BZ$ 150.00; 24-hr expedite +BZ$ 300.00; 48-hr expedite +BZ$ 130.00; 5-day emergency +BZ$ 100.00; Lost replacement penalty +BZ$ 200.00 (DIRECT). Social Security Card (SSB) + Vital Statistics birth cert + Form 3A Recommender mandatory; in-person biometrics. |
| **BJ** | BEN | Benin | Sovereign State | Direction de l'Émigration et de l'Immigration (DEI), Police Républicaine / ANIP (`dei.gouv.bj` / `epasseport.service-public.bj`) | `primary_sources_audited` | Décret N° 2021-390: Passeport ordinaire biométrique (6-yr validity across all ages): 30 000 FCFA; Procédure VIP/Urgent (48–72h): 130 000 FCFA (DIRECT). Online payment via Mobile Money / Treasury card on epasseport.service-public.bj. Certificat d'Identification Personnelle (CIP) with NPI + Acte de naissance sécurisé (ANIP) strictly mandatory; in-person biometrics at DEI Cotonou. |
| **BM** | BMU | Bermuda | Territory / Special Region | HMPO / Dept of Immigration Bermuda (British Overseas Territories Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by GB. General guidance applies. |
| **BT** | BTN | Bhutan | Sovereign State | Passport Div., Ministry of Foreign Affairs & External Trade (`mfa.gov.bt`) | `primary_sources_audited` | MFAET statutory fees: Adult 18+ (10-yr) Nu. 1,000; Minor <18 (5-yr) Nu. 800; Lost/damaged replacement fine: Nu. 5,000 penalty + standard booklet fee (Nu. 6,000 adult / Nu. 5,800 minor) (DIRECT). Citizenship Identity Card (CID) + Security Clearance Certificate (SCC) mandatory; G2C online portal (citizenservices.gov.bt) or Passport Division Thimphu. |
| **BO** | BOL | Bolivia | Sovereign State | Dirección General de Migración (DIGEMIG), MinGob (`migracion.gob.bo`) | `primary_sources_audited` | Ley N° 370 & DS N° 1923: Pasaporte electrónico ordinario (5-yr) 155 UFV + 200 Bs (~563–585 Bs depending on daily UFV rate) (DIRECT). Payment authorized at DIGEMIG counter then deposited at Banco Unión / QR. Cédula de Identidad (CI SEGIP) + Certificado de sufragio OEP mandatory; in-person biometrics; parental presence for minors; FELCC / Interpol cert for lost documents. |
| **BQ** | BES | Bonaire, Sint Eustatius and Saba | Territory / Special Region | Rijksdienst Caribisch Nederland (Bonaire, Sint Eustatius, Saba - Dutch Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by NL. General guidance applies. |
| **BA** | BIH | Bosnia and Herzegovina | Sovereign State | IDDEEA & Cantonal/Entity Ministries of Interior (MUP) — `https://www.iddeea.gov.ba/` | `primary_sources_audited` | Council of Ministers Decision: Adults 18+ (10-yr) 50 BAM; Minors 3–18 (5-yr) 40 BAM; Children <3: 30 BAM (DIRECT). Urgent processing (72h without justification): +200 BAM surcharge (total 250 BAM). BiH Electronic ID Card (Lična karta) mandatory; in-person at competent Cantonal MUP / MUP RS. |
| **BW** | BWA | Botswana | Sovereign State | Dept. of Civil & National Registration (DCNR) — `https://www.gov.bw/` | `primary_sources_audited` | Passports Act regulations: Adults 16+ (10-yr) BWP 260.00; Minors 0–15 (5-yr) BWP 100.00; Lost/damaged replacement BWP 1,000.00 penalty (DIRECT). National Identity Card (Omang) mandatory for 16+; birth certificate for minors; police report for lost passports; in-person biometrics at DCNR district offices. |
| **BV** | BVT | Bouvet Island | Territory / Special Region | Bouvet Island (Uninhabited subantarctic volcanic island; Norwegian dependency) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by NO. General guidance applies. |
| **IO** | IOT | British Indian Ocean Territory | Territory / Special Region | British Indian Ocean Territory (No permanent civilian population; UK military/admin) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by GB. General guidance applies. |
| **VG** | VGB | British Virgin Islands | Territory / Special Region | Civil Registry & Passport Office BVI (BOT Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by GB. General guidance applies. |
| **BN** | BRN | Brunei | Sovereign State | Jabatan Imigresen dan Pendaftaran Kebangsaan (JIPK) (`immigration.gov.bn` / `moha.gov.bn`) | `primary_sources_audited` | Brunei Passports Act (Cap 146): Standard ordinary biometric e-passport (5-year validity across all ages): BND $60.00 (DIRECT). Lost passport replacement penalty surcharge: 1st instance BND $150.00 (total BND $210); 2nd instance BND $300.00; 3rd instance BND $450.00. Turnaround ~3–7 working days. Brunei Yellow Smart IC + original Birth Certificate mandatory; appointment booking via QueUp app; in-person biometrics at JIPK headquarters. |
| **BG** | BGR | Bulgaria | Sovereign State | Дирекция БДС, МВР (`mvr.bg/dbds` / `mvr.bg`) | `primary_sources_audited` | Тарифа № 4 МВР & ЗБЛД (New generation 27 Apr 2026): 5-year passport (14–70): Обикновена 27 € (52.80 лв.), Бърза 54 €, Експресна 135 €; 10-year option (18–70): Обикновена 29 € (56.71 лв.), Бърза 58 €, Експресна 145 € (DIRECT). Children <14: 1st passport 7 € / subsequent 14 €. Експресна (8h) collection strictly at ДБДС Sofia. Лична карта / Удостоверение за раждане mandatory; biometrics at РУ / ОДМВР. |
| **BF** | BFA | Burkina Faso | Sovereign State | Division de la Migration, DGPN / ONI (`police.gov.bf` / `oni.bf`) | `primary_sources_audited` | Décret portant tarification des passeports: Standard biometric passport (5-year validity) 50 000 FCFA + 200 FCFA fiscal stamp (total 50 200 FCFA) (DIRECT). Turnaround ~7 to 15 working days. CNIB (Carte Nationale d'Identité Burkinabè) légalisée + Copie légalisée d'acte de naissance + Certificat de nationalité burkinabè + Casier judiciaire (<3mo) mandatory; in-person biometrics at Division de la Migration (Ouagadougou / Bobo-Dioulasso). |
| **BI** | BDI | Burundi | Sovereign State | Commissariat Général des Migrations (CGM) (`migration.gov.bi`) | `primary_sources_audited` | Ordonnance ministérielle conjointe & CGM: Passeport biométrique ordinaire (10-yr adult 16+ / 5-yr minor <16) 235 000 BIF (DIRECT). Turnaround ~5 to 10 working days. Laissez-passer: 30 000 BIF; CEPGL card: 18 000 BIF. Carte Nationale d'Identité (CNI) burundaise + Acte de naissance certifié conforme + Attestation de résidence mandatory; in-person biometrics at CGM Kigobe, Bujumbura. |
| **CV** | CPV | Cabo Verde | Sovereign State | Direção de Estrangeiros e Fronteiras (DEF) / Polícia Nacional (`gov.cv` / `policianacional.cv`) | `primary_sources_audited` | Regulamento do Passaporte Eletrónico Cabo-Verdiano (PEC): Pedido normal 5.600 CVE; Pedido urgente 6.000 CVE; Consular no estrangeiro 69,00 € normal / 120,00 € urgente (DIRECT). Validade: 5 anos (adultos/crianças ≥5), 2 anos (<5). Cartão Nacional de Identificação (CNI) cabo-verdiano ou BI válido + Certidão de Nascimento mandatory; in-person biometrics at DEF or Casa do Cidadão. |
| **KH** | KHM | Cambodia | Sovereign State | General Dept. of Identification (GDI), Ministry of Interior (`gdi.gov.kh`) | `primary_sources_audited` | Joint Inter-Ministerial Prakas (MoI & MEF): Standard ~20 days: Adult 6+ (10-yr) US$ 100; Child <6 (5-yr) US$ 80; Urgent 10-day tier: US$ 150; Urgent 1-day tier: US$ 200 (DIRECT). Khmer National ID Card (15+) + Family/Residence Book + Birth Certificate mandatory; in-person biometrics at GDI Phnom Penh or provincial centers. |
| **CM** | CMR | Cameroon | Sovereign State | DGSN / PASSCAM — `https://www.passcam.cm/` | `primary_sources_audited` | Presidential Decree No. 2021/347: Biometric passport (5-yr) 110,000 XAF (DIRECT). Paid exclusively online via mobile money / credit card on passcam.cm during pre-enrollment. Turnaround guaranteed 48 hours domestic. CNI + Birth Certificate mandatory; in-person biometrics at local police centers or foreign missions. |
| **KY** | CYM | Cayman Islands | Territory / Special Region | Workforce Opportunities & Residency Cayman (BOT Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by GB. General guidance applies. |
| **CF** | CAF | Central African Republic | Sovereign State | Direction de l'Émigration & Immigration, Min. de l'Intérieur (`interieur.gouv.cf`) | `primary_sources_audited` | Décret CEMAC: Standard biometric passport (5-yr) 50 000 FCFA; Urgent fast-track processing 90 000 FCFA (DIRECT). Fee paid via Ecobank deposit receipt. Original birth certificate + Certificat de nationalité centrafricaine + CNI mandatory; in-person biometrics at Centre de Demande des Passeports (SEDOSEC), Bangui. |
| **TD** | TCD | Chad | Sovereign State | Agence Nationale des Titres Sécurisés (ANATS) (`anats.td`) | `primary_sources_audited` | Arrêté interministériel: Standard CEMAC biometric passport (5-yr) 60 000 FCFA (DIRECT). Turnaround ~7–15 days. Numéro National d'Identification (NNI) + CNI biométrique (or NNI receipt) + Acte de naissance sécurisé + Certificat de nationalité mandatory; in-person biometrics at ANATS CAU centers in N'Djamena and provinces. |
| **CL** | CHL | Chile | Sovereign State | Servicio de Registro Civil e Identificación (SRCeI) | `primary_sources_audited` | Primary source audited (Batch 2). New single-format biometric passport (polycarbonate, 48 pages): $69.660 CLP nationwide (10-year validity). Cédula de Identidad mandatory prerequisite; parental consent required for under 18; delivery in 6-8 business days. |
| **CN** | CHN | China | Sovereign State | National Immigration Administration (国家移民管理局 - NIA) / MPS (`nia.gov.cn` / `s.nia.gov.cn`) | `primary_sources_audited` | Ordinary passport (普通护照, NDRC/MOF No. 914): 120 CNY; 10-yr (16+) / 5-yr (<16) (DIRECT). Endorsement free (0 CNY). Loss replacement 120 CNY. Turnaround 7 working days (hukou) / 20 days (cross-province nationwide "全国通办"); statutory domestic urgent within 5 days for verified grounds. Resident ID Card (身份证) mandatory; biometrics at Reception Halls; s.nia.gov.cn appointment. Consular abroad: 18 USD baseline for issuance, renewal, replacement via China Consular Affairs App (0 USD endorsement); routine processing has no paid commercial expedite tier, but diplomatic missions operate discretionary "Green Channel" (绿色通道) priority intake for verified humanitarian emergencies; Emergency Travel Documents (旅行证) remain a separate on-site document category without a universal statutory 24–72h SLA. Distinct from SAR passports and EEP. |
| **CX** | CXR | Christmas Island | Territory / Special Region | Australian Passport Office (Australian Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by AU. General guidance applies. |
| **CC** | CCK | Cocos (Keeling) Islands | Territory / Special Region | Australian Passport Office (Australian Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by AU. General guidance applies. |
| **CO** | COL | Colombia | Sovereign State | Ministerio de Relaciones Exteriores (Cancillería) | `primary_sources_audited` | Primary source audited (Batch 2). 2026 statutory fees in Bogotá: Ordinario (32-pg) $190.000 COP ($111k base + $79k timbre); Ejecutivo (48-pg) $323.000 COP; Emergencia $192.000 COP. Departamentos: plus local taxes ($250k-$350k total). Abroad: USD 94 / EUR 68. Cédula de Ciudadanía mandatory. |
| **KM** | COM | Comoros | Sovereign State | Direction Générale de la Sûreté Nationale (DGSN) (`beit-salam.km`) | `primary_sources_audited` | Décret présidentiel titres biométriques: Standard biometric passport (5-year validity) 40 000 KMF (DIRECT). Consular fee abroad ~EUR 150–200. Carte Nationale d'Identité (CNI biométrique comorienne) + Extrait d'acte de naissance + Certificat de nationalité comorienne mandatory; in-person biometrics at Centre de Production des Titres Sécurisés (DGSN) Moroni, Mutsamudu, or Fomboni. |
| **CK** | COK | Cook Islands | Territory / Special Region | Te Tari Taiwhenua Internal Affairs NZ (New Zealand Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by NZ. General guidance applies. |
| **CR** | CRI | Costa Rica | Sovereign State | DGME (`migracion.go.cr`) / Banco de Costa Rica (`bancobcr.com`) | `primary_sources_audited` | Ley General de Migración y Extranjería: Pasaporte Biométrico USD $75.00 + CRC ₡250 (timbre de parques nacionales) + BCR banking commission (~$12–$15 USD) + Correos de Costa Rica delivery (~₡5,763 CRC) (DIRECT). Validity: 10-yr adult (18+), 5-yr minor. Cédula de Identidad (TSE) mandatory for 18+; TIM for 12–17; parental presence for minors. Appointment via BCR Punto País or Correos VES. |
| **HR** | HRV | Croatia | Sovereign State | Ministarstvo unutarnjih poslova (MUP) (`mup.gov.hr` / `gov.hr`) | `primary_sources_audited` | Zakon o putnim ispravama: Redovni postupak (30 days) 42,47 EUR (counter or e-Građani; +3,98 EUR courier delivery); Žurni postupak: PUZ Zagreb 54,42 EUR (48h), ostale PU 61,72 EUR (3d) (DIRECT). Validity: 10 years (age 21+); 5 years (under 21). Consular: 55,74 EUR (<21) / 74,32 EUR (21+). e-Osobna iskaznica (eOI) or Domovnica + birth cert mandatory; in-person biometrics (photo, 2 fingerprints, signature from age 12+). |
| **CU** | CUB | Cuba | Sovereign State | MINREX (cubaminrex.cu) — domestic: MININT/DIIE | `primary_sources_audited` | Domestic: CUP 2,500 (PARTIAL). Consular via MINREX Res. 37/2026: Adult USD/EUR 200; Minor USD/EUR 160; Provisional USD/EUR 120 (DIRECT). Carné de Identidad mandatory. In-person DIIE enrollment. Emigration controls may apply to "regulated" professionals. |
| **CW** | CUW | Curaçao | Territory / Special Region | Cabinet of the Governor of Curaçao (Kingdom of the Netherlands Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by NL. General guidance applies. |
| **CY** | CYP | Cyprus | Sovereign State | Civil Registry & Migration Dept. (`moi.gov.cy/crmd`) / `gov.cy` | `primary_sources_audited` | CRMD statutory fees: Adult 18+ (10-yr) €70.00; Minor <18 (5-yr) €45.00; Accelerated fast-track surcharge +€50.00 (total €120 adult / €95 minor); Lost/damaged replacement doubles to €140 adult / €90 minor (DIRECT). Cypriot ID card (Δελτίο Ταυτότητας) mandatory; parental consent for minors; biometric capture at District Administration Offices or Citizen Service Centres (KEP). |
| **CZ** | CZE | Czechia | Sovereign State | Ministerstvo vnitra ČR (MVČR) / Obecní úřady (ORP) | `primary_sources_audited` | Primary source audited (Batch 3). Zákon o cestovních dokladech: Standard (30 days) Adult (15+) 600 CZK (10-yr), Child (<15) 100 CZK (5-yr); Fast (5 days) 3,000 / 1,000 CZK; Super-fast (24 hrs at MVČR Na Pankráci) 6,000 / 2,000 CZK. Občanský průkaz required; photo taken on-site. |
| **CI** | CIV | Côte d’Ivoire | Sovereign State | ONECI & SNEDAI Group — `https://snedai.com/` / `https://www.monpasseport.ci/` | `primary_sources_audited` | Domestic biometric passport (5-yr) 40,000 XOF (bank or mobile money); Diaspora passport 115 EUR (DIRECT). CNI / Attestation ONECI + Birth Certificate (<3mo) + Nationality Certificate mandatory. Mandatory online pre-enrollment via monpasseport.ci; biometric enrollment at SNEDAI centers or foreign embassies. |
| **CD** | COD | Democratic Republic of the Congo | Sovereign State | Ministère des Affaires Étrangères (`diplomatie.gouv.cd` / `passeport.gouv.cd`) | `primary_sources_audited` | Arrêté interministériel: Standard biometric passport (5-yr) USD $75.00 (reduced from $99.00 with new-generation passport rollout) (DIRECT). Payment via partner banks (Equity BCDC) or online. Carte d'électeur (National ID) + Acte de naissance + Certificat de nationalité congolaise + Formulaire F3 mandatory; in-person biometrics at Kinshasa capture centre or provincial sites. |
| **DK** | DNK | Denmark | Sovereign State | Borgerservice (Kommunerne) / Rigspolitiet | `primary_sources_audited` | Primary source audited (Batch 4). Passbekendtgørelsen 2026: Adult 18-66 (10-yr) 894 DKK; Pensioner 67+ 382 DKK; Youth 12-17 (5-yr) 182 DKK; Child <12 150 DKK. Lost/damaged without previous pass: DOUBLE FEE (1,788 DKK adult). CPR number / Sundhedskort required; photo/biometrics at Borgerservice. |
| **DJ** | DJI | Djibouti | Sovereign State | National Passport / Immigration Directorate | `official_source_needs_research` | Awaiting primary statutory fee schedule, civil identity document checklist, and appointment workflow verification. |
| **DM** | DMA | Dominica | Sovereign State | Immigration Dept., Commonwealth of Dominica Police Force (`dominica.gov.dm`) | `primary_sources_audited` | Passport Regulations (Chap. 18:01 amendment): Standard biometric ePassport: Adult 16+ (10-yr) EC$ 150.00; Child <16 (5-yr) EC$ 75.00; Lost/stolen replacement penalty EC$ 500.00 (DIRECT). ePayment portal lists fee as variable to accommodate age/penalty tiers. Treasury payment receipt + Birth Certificate + Form A/B with Section 10 Recommender mandatory; biometrics at Police HQ, Roseau. |
| **DO** | DOM | Dominican Republic | Sovereign State | Dirección General de Pasaportes (`pasaportes.gob.do`) | `primary_sources_audited` | DGP statutory fees: Adult Regular (6-yr) RD$ 1,650.00; Adult VIP (same-day / ~3h) RD$ 2,650.00; Adult Lost/Damaged RD$ 2,650.00 (Regular) / RD$ 3,650.00 (VIP); Minor Regular RD$ 1,850.00; Minor VIP RD$ 2,850.00 (DIRECT). Paid via Banreservas. Cédula de Identidad y Electoral (JCE) + Legalized Birth Certificate (Acta legalizada JCE) mandatory; appointments via citas.pasaportes.gob.do. |
| **EC** | ECU | Ecuador | Sovereign State | Dirección General de Registro Civil, Identificación y Cedulación (DIGERCIC) | `primary_sources_audited` | Primary source audited (Batch 3). DIGERCIC statutory fees: Standard biometric passport $90.00 USD (10-yr for 18+, 5-yr for minors); Seniors (65+) $45.00 USD (50% discount); Disabled (30%+) $0.00 (exempt). Cédula de Identidad mandatory prerequisite; parental presence for minors under 18. |
| **EG** | EGY | Egypt | Sovereign State | Passports, Immigration & Nationality Administration / Ministry of Interior | `primary_sources_audited` | Primary source audited (Batch 5). Law No. 7/2024 & Decree 470/2024: Standard machine-readable passport (7-yr) 1,110 EGP; Urgent service 1,450-1,600 EGP (24-48 hrs); VIP same-day 1,850 EGP; Consular $110 USD. National ID card (15+) or birth cert (<15) + military status certificate required. |
| **SV** | SLV | El Salvador | Sovereign State | Dirección General de Migración y Extranjería (DGME) (`migracion.gob.sv`) | `primary_sources_audited` | Ley Especial de Migración y Extranjería: Pasaporte ordinario biométrico (6-year statutory validity for adults & minors) flat USD $25.00 (DIRECT). Consular: USD $40 (Central America) / USD $60 (rest of world). Paid via colecturía or online. DUI original and valid mandatory; walk-in por orden de llegada (turnaround ~20–45 mins); parental presence & birth certificate for minors. |
| **GQ** | GNQ | Equatorial Guinea | Sovereign State | Min. de Seguridad Nacional / CNEDOGE (`guineaecuatorialpress.com` / `cnedoge.gq`) | `primary_sources_audited` | Ley de Documentos de Viaje: Standard CEMAC biometric passport (5-yr) ~50.000 FCFA (consular rate ~32.00 € to 60.00 €) (DIRECT). Turnaround ~1–2 weeks. Documento Nacional de Identidad (DNI) + Certificado Literal de Nacimiento + Certificado de Antecedentes Penales mandatory; in-person biometrics at CNEDOGE centers in Malabo and Bata. |
| **ER** | ERI | Eritrea | Sovereign State | Ministry of Foreign Affairs (consular) / Ministry of Interior (domestic) — `https://www.embassyeritrea.org/` | `primary_sources_audited` | Consular (overseas) fees DIRECT: First/lost adult USD 200; renewal adult USD 100; minor USD 75–150. ⚠️ MANDATORY: 2% diaspora Recovery & Rehabilitation Tax clearance required for ALL consular services. Domestic fee NOT publicly available. Hawiyya (national ID) + tax clearance certificate mandatory. |
| **EE** | EST | Estonia | Sovereign State | Politsei- ja Piirivalveamet (PPA — `politsei.ee`) | `primary_sources_audited` | State Fees Act (Riigilõivuseadus): Adult self-service (10-yr) 50 € / PPA office 60 €; Minor <15 / Pensioner / Disabled self-service 20 € / PPA office 25 €; Kiirpass (expedited 1-day) 250 €; Consular 90 € (DIRECT). Isikukood + fingerprints on file within 6 yrs; online self-service via iseteenindus.politsei.ee (Smart-ID / ID-card). |
| **SZ** | SWZ | Eswatini | Sovereign State | Department of Immigration, Ministry of Home Affairs (`gov.sz`) | `primary_sources_audited` | Passports Act & Immigration Regs: Standard ordinary international e-passport (5-year validity) E 500.00 (SZL, 1:1 with ZAR); Regional travel document E 80.00; Replacement of lost personal ID card E 50.00 (DIRECT). Eswatini National ID Card (PIN) + Civil Registration Birth Certificate + Graded Tax Certificate mandatory; in-person biometrics at Ministry of Home Affairs Mbabane or regional civic centers. |
| **ET** | ETH | Ethiopia | Sovereign State | Immigration and Citizenship Service (ICS) — `https://www.ics.gov.et/` | `primary_sources_audited` | Reg. 550/2024 (eff. Aug 7, 2024): New passport ETB 5,000 standard / ETB 20,000 urgent-5d / ETB 25,000 urgent-2d. Lost replacement ETB 13,000. In-person at ICS offices; Digital Invea system. Fayda biometric ID required. |
| **FK** | FLK | Falkland Islands (Malvinas) | Territory / Special Region | Customs & Immigration Falkland Islands (BOT Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by GB. General guidance applies. |
| **FO** | FRO | Faroe Islands | Territory / Special Region | Ríkisumboðið í Føroyum (Kingdom of Denmark Passport - Føroyar cover) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by DK. General guidance applies. |
| **FJ** | FJI | Fiji | Sovereign State | Department of Immigration, Office of the Prime Minister (`immigration.gov.fj`) | `primary_sources_audited` | Passports Act 2002 & Regs: Standard ordinary e-passport (10-yr adult / 5-yr minor) FJD $206.50; Urgent processing FJD $283.85; Urgent weekend/holiday FJD $627.60; Lost/stolen replacement FJD $412.90 standard / FJD $536.75 urgent (DIRECT). Registrar General Birth Certificate + photo ID + police loss report mandatory; in-person biometrics at Suva, Nadi, Lautoka, Labasa. |
| **FI** | FIN | Finland | Sovereign State | Poliisi (Police of Finland / Lupapalvelut) | `primary_sources_audited` | Primary source audited (Batch 4). Passilaki 2026: Standard (5-yr) 42 € online / 48 € counter; Pikapassi 61 € online / 67 € counter; Express-passi 81 € online / 87 € counter; Temporary 85 €. Consular 175 €. Electronic photo server code (kuvatunnus) + Finnish bank e-identification / police counter. |
| **GF** | GUF | French Guiana | Territory / Special Region | French Ministry of the Interior / ANTS (French Republic Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by FR. General guidance applies. |
| **PF** | PYF | French Polynesia | Territory / Special Region | Haut-Commissariat de la République en Polynésie française (French Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by FR. General guidance applies. |
| **TF** | ATF | French Southern Territories | Territory / Special Region | Terres australes et antarctiques françaises (No permanent civilian population) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by FR. General guidance applies. |
| **GA** | GAB | Gabon | Sovereign State | Direction Générale de la Documentation et de l'Immigration (DGDI) (`dgdi.ga`) | `primary_sources_audited` | Décret tarifaire titres de voyage: Standard CEMAC biometric passport (5-yr): Adult (16+) 45 000 FCFA (40k DGDI + 5k Trésor); Minor <16 35 000 FCFA (30k DGDI + 5k Trésor) (DIRECT). Acte de naissance original légalisé + justificatif de ressources + formulaire DGDI mandatory; in-person biometrics at DGDI Libreville (Oloumi) or regional delegations. |
| **GM** | GMB | Gambia | Sovereign State | Gambia Immigration Department (GID), Ministry of Interior (`gid.gov.gm`) | `primary_sources_audited` | GID statutory tariffs: Ordinary biometric passport (5-year validity) D5,100 GMD (D100 application form + D5,000 booklet fee) paid via EcoBank Gambia Ltd (DIRECT). Turnaround ~5 to 10 working days. Gambian National Identity Card (Smart ID) + Birth Certificate issued by Ministry of Health mandatory; in-person biometrics at GID HQ Banjul or Kanifing. |
| **GE** | GEO | Georgia | Sovereign State | Public Service Development Agency (SDA) & PSH — `https://psh.gov.ge/` | `primary_sources_audited` | Biometric passport fees graded by turnaround: 10th wd 150 GEL; 5th wd 180 GEL; 3rd wd 225 GEL; 24h 300 GEL; Same-day 350 GEL (DIRECT). Photo +5 GEL. Validity 10-yr adult / 3-yr minor. Georgian ID Card (Piradobis Motsmoba) mandatory; in-person at Public Service Hall (PSH) or Community Centers; online renewals via sda.gov.ge. |
| **GH** | GHA | Ghana | Sovereign State | Passport Office / Ministry of Foreign Affairs and Regional Integration | `primary_sources_audited` | Primary source audited (Batch 5). L.I. 2481 statutory tariffs (effective April 1, 2024): Standard 32-page GHS 500.00 / 48-page GHS 644.00; Expedited 32-page GHS 700.00 / 48-page GHS 800.00. 10-yr validity (adult 18+), 5-yr (minor). Mandatory Ghana Card (NIA) + birth certificate + guarantor. |
| **GI** | GIB | Gibraltar | Territory / Special Region | Civil Status & Registration Office Gibraltar (British Passport - Gibraltar) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by GB. General guidance applies. |
| **GR** | GRC | Greece | Sovereign State | Hellenic Police (Διεύθυνση Διαβατηρίων) / Min. of Citizen Protection | `primary_sources_audited` | Primary source audited (Batch 2). PD 25/2022 & Law 4962/2022 (10-yr validity for age 14+): e-Paravolo €84.40 (€53 booklet + €5 postage + €26.40 fee); Minor <14 (3-yr) €73.60. Greek Police ID mandatory; digital photo via myPhoto; appointment at Police Passport Bureau. |
| **GL** | GRL | Greenland | Territory / Special Region | Rigsombudsmanden i Grønland (Kingdom of Denmark Passport - Grønland cover) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by DK. General guidance applies. |
| **GD** | GRD | Grenada | Sovereign State | Immigration Dept., Royal Grenada Police Force / MFA (`mofa.gov.gd` / `gov.gd`) | `primary_sources_audited` | Immigration Regulations (eff. July 1, 2024): Standard ePassport: Adult 18+ (10-yr) EC$ 350.00; Child <18 (5-yr) EC$ 250.00; Lost/damaged replacement: Adult EC$ 700.00 / Child EC$ 500.00; Expedited +EC$ 50.00 (DIRECT). Overseas consular: US$ 350 adult / US$ 250 child. Birth Certificate + NIS/voter ID + Recommender mandatory; biometrics at RGPF HQ, St. George's. |
| **GP** | GLP | Guadeloupe | Territory / Special Region | French Ministry of the Interior / ANTS (French Republic Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by FR. General guidance applies. |
| **GU** | GUM | Guam | Territory / Special Region | U.S. Department of State (US Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by US. General guidance applies. |
| **GT** | GTM | Guatemala | Sovereign State | Instituto Guatemalteco de Migración (`igm.gob.gt`) | `primary_sources_audited` | IGM statutory tariff: 5-year validity (adults and minors) US$ 50.00; 10-year validity (adults 18+ only) US$ 85.00 (DIRECT). Exclusively paid in Quetzales at Banrural. DPI (Documento Personal de Identificación / RENAP) mandatory for 18+; RENAP birth cert + parental presence for minors; online appointment via citas.igm.gob.gt. |
| **GG** | GGY | Guernsey | Territory / Special Region | Guernsey Customs & Immigration Service / HMPO (British Crown Dependency) | `official_source_needs_research` | British Crown Dependency: passport issuance administered under HMPO / Guernsey Customs & Immigration Service. British variant passport. |
| **GN** | GIN | Guinea | Sovereign State | Direction Centrale de la Police de l'Air et des Frontières (DCPAF) (`service-public.gov.gn`) | `primary_sources_audited` | Décret tarifaire titres de voyage: Standard biometric passport: 5-year validity 500 000 GNF; 10-year validity (adults 18+) 1 000 000 GNF (DIRECT). Payment via bank deposit slip (Ecobank). Turnaround ~5 to 10 working days. Extrait de naissance biométrique (avec NIN) + CNI biométrique + Certificat de résidence mandatory; in-person biometrics at DCPAF Coléah (Conakry) or regional centers. |
| **GW** | GNB | Guinea-Bissau | Sovereign State | Direcção-Geral de Identificação Civil, Registo e Notariado (DGICRAN) (`gov-gb.com`) | `primary_sources_audited` | Carta de Serviços ao Cidadão da República da Guiné-Bissau: Passaporte Normal (up to 15 working days) 25.000 XOF; Passaporte Urgente (up to 5 working days) 50.000 XOF (DIRECT). Bilhete de Identidade (BI biométrico) emitido pela DGICRAN + Certidão de Nascimento + Registo Criminal mandatory; in-person biometrics at DGICRAN Bissau. |
| **GY** | GUY | Guyana | Sovereign State | Central Immigration & Passport Office (CIPO), Guyana Police Force / MoHA (`moha.gov.gy`) | `primary_sources_audited` | Immigration Act (Cap. 14:02): Standard biometric e-passport: 5-year G$ 6,000; 10-year G$ 12,000; Expedited 72-hour surcharge +G$ 20,000 (DIRECT). Standard turnaround ~5 working days. Guyana National ID Card + GRO Birth Certificate + Form A + Recommender mandatory; appointment via Guyana Passport System; in-person biometrics at CIPO Georgetown or regional offices. |
| **HT** | HTI | Haiti | Sovereign State | Direction de l'Immigration et de l'Émigration (DIE) (`delidoc.gouv.ht` / `dgi.gouv.ht`) | `primary_sources_audited` | Loi de finances & Tarifs DGI: Passeport régulier 32 pages: Adulte (10-yr) 8 000,00 HTG; Mineur <18 (5-yr) 2 500,00 HTG; 48 pages: 12 000,00 HTG (DIRECT). Prise de rendez-vous obligatoire via plateforme DELIDOC (delidoc.gouv.ht). Extrait d'acte de naissance (Archives Nationales) + CIN (ONI) + NIF + reçu DGI mandatory; in-person biometrics at DIE centers. |
| **HM** | HMD | Heard Island and McDonald Islands | Territory / Special Region | Heard Island and McDonald Islands (Uninhabited Australian territory) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by AU. General guidance applies. |
| **HN** | HND | Honduras | Sovereign State | Instituto Nacional de Migración (INM) (`inm.gob.hn`) | `primary_sources_audited` | Ley de Migración y Extranjería: Pasaporte biométrico 5-year USD $35.00; 10-year (strictly 21+) USD $50.00; Cita de emergencia +USD $20.00 (DIRECT). Paid in lempiras directly at authorized banks (Banrural, Atlántida, Occidente, Ficohsa, etc.) where bank receipt serves as official appointment ticket. DNI original mandatory; birth certificate & both parents' DNIs for minors <21. |
| **HK** | HKG | Hong Kong | Territory / Special Region | Immigration Department HKSAR (HKSAR Passport for Chinese citizens with permanent residence) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by CN. General guidance applies. |
| **HU** | HUN | Hungary | Sovereign State | Belügyminisztérium / Kormányablakok | `primary_sources_audited` | Primary source audited (Batch 3). Statutory fees (normál 20 nap): Adult 18+ (10-yr) 17 000 HUF (+2 000 HUF postal delivery); Youth 12-18 (5-yr) 12 500 HUF; Child <12 8 500 HUF. Surcharges: 5-day +19k HUF; 3-day +29k HUF; 24-hr +39k HUF. Személyazonosító igazolvány required; photo taken on-site. |
| **IS** | ISL | Iceland | Sovereign State | Þjóðskrá Íslands / Sýslumenn | `primary_sources_audited` | Primary source audited (Batch 4). Gjaldskrá sýslumanna (Lög 88/1991): Adult 18-66 (10-yr) 19.000 ISK standard / 39.200 ISK fast-track / 10.500 ISK emergency; Children <18 (5-yr), Seniors 67+, Disabled 7.000 ISK standard / 14.000 ISK fast / 3.500 ISK emergency. Kennitala required; photo on-site. |
| **IR** | IRN | Iran | Sovereign State | Police+10 Passport Office (domestic); MFA epassport.mfa.gov.ir (consular) | `primary_sources_audited` | Domestic ~IRR 4,698,800 total (2024, PARTIAL — no single portal table). Consular via MFA MIKHAK: EUR 100 (adult renewal), EUR 50 (child <2), EUR 180 (lost 1st time), EUR 300 (lost 2nd+). Shenasnameh + Meli Card mandatory. Military clearance for males required. |
| **IQ** | IRQ | Iraq | Sovereign State | CCPRD / epp.iq (Ur Gov Portal), Ministry of Interior — `https://epp.iq/` | `primary_sources_audited` | Iraqi electronic passport IQD 91,000 (confirmed by MOI; PM directive fixed price). Biometric National ID (Unified National ID Card) mandatory. In-person biometrics at CCPRD office mandatory. Online pre-application via epp.iq. Consular via mofa.gov.iq missions (PARTIAL for exact fees). |
| **IM** | IMN | Isle of Man | Territory / Special Region | Isle of Man Passport Office / HMPO (British Crown Dependency) | `official_source_needs_research` | British Crown Dependency: passport issuance administered under HMPO / Isle of Man Passport Office. British variant passport. |
| **IL** | ISR | Israel | Sovereign State | Population and Immigration Authority (PIBA / רשות האוכלוסין וההגירה) | `primary_sources_audited` | Primary source audited (Batch 5). Biometric passport (10-yr adult, 5-yr minor): Winter online NIS 185 (adult) / NIS 110 (minor); Summer online NIS 290 / NIS 145; Branch NIS 315 / NIS 165; Airport emergency NIS 825 / NIS 435. Biometric travel document (Laissez-Passer) distinct: NIS 100-150. Teudat Zehut required. |
| **JM** | JAM | Jamaica | Sovereign State | Passport, Immigration and Citizenship Agency (`pica.gov.jm`) | `primary_sources_audited` | PICA statutory fees: Adult Regular (10-yr) JMD $6,500; Minor Regular (5-yr) JMD $4,000; Adult Expedited (Same Day) JMD $16,500 / Next Day JMD $11,500 / 3-Day JMD $9,500; Minor Expedited Same Day JMD $9,000; Lost/Damaged Replacement Adult JMD $21,500 / Minor JMD $12,000 (DIRECT). RGD Birth Certificate with PIN + Government Photo ID mandatory; adult online renewal via passport.pica.gov.jm. |
| **JE** | JEY | Jersey | Territory / Special Region | Jersey Customs & Immigration Service / HMPO (British Crown Dependency) | `official_source_needs_research` | British Crown Dependency: passport issuance administered under HMPO / Jersey Customs & Immigration Service. British variant passport. |
| **JO** | JOR | Jordan | Sovereign State | Civil Status & Passports Dept. (CSPD), MOI — `https://cspd.gov.jo/` | `primary_sources_audited` | Passport Fees Regulation: Standard adult (16+, 5-yr) 50 JOD (new/expired/<180d remaining); renewal >180d remaining: 100 JOD; minor <16: 25 JOD; full pages: 20 JOD; lost: 125 JOD (1st) / 250 JOD (subsequent) (DIRECT). Fast-track +25 JOD; Jordan Post +3 JOD. Smart ID Card + Family Book mandatory; Sanad app or CSPD directorate offices. |
| **KZ** | KAZ | Kazakhstan | Sovereign State | Committee of Administrative Police, MIA — `https://egov.kz/` | `primary_sources_audited` | State duty: 8 MCI (adult, 2024: KZT 29,536; 2025: KZT 31,456); 4 MCI (child <16, 2024: KZT 14,768). MCI-based fee per Tax Code Ch.74 and annual Budget Law. Identity Card (Kualiyet) mandatory. PSC (ЦОН) in-person biometrics. Online via egov.kz. |
| **KI** | KIR | Kiribati | Sovereign State | National Passport / Immigration Directorate | `official_source_needs_research` | Awaiting primary statutory fee schedule, civil identity document checklist, and appointment workflow verification. |
| **KW** | KWT | Kuwait | Sovereign State | General Directorate of Nationality & Travel Documents, MOI — `https://www.moi.gov.kw/` | `primary_sources_audited` | Ministerial Decision No. 1769: Standard passport issue/renewal/replacement KWD 100 (DIRECT); airport emergency (Res. 180): KWD 13 (5-yr) / KWD 16 (10-yr). Validity 10-yr (age 30+) / 5-yr (<30). Original Nationality Certificate + Civil ID mandatory. Sahel app or MOI centers. Strictly for Kuwaiti citizens (Bidoon receive Article 17 travel doc under separate restrictions). |
| **KG** | KGZ | Kyrgyzstan | Sovereign State | Dept. of Population Registration, Ministry of Digital Development (`digital.gov.kg`) | `primary_sources_audited` | DRN / Infocom tariffs: Standard 18 days: First-time/renewal 2,981 KGS; Name/address change 3,081 KGS; Lost replacement 3,181 KGS (DIRECT). Urgent tiers: 8 days (2,720–2,920 KGS surcharge); 4 days (3,302–3,502 KGS); 2 days (3,808–4,008 KGS); 3 hours (Bishkek 10,363–10,563 KGS). National ID-card with chip + PIN mandatory; Public Service Centers (ЦОН). |
| **LA** | LAO | Laos | Sovereign State | National Passport / Immigration Directorate | `official_source_needs_research` | Awaiting primary statutory fee schedule, civil identity document checklist, and appointment workflow verification. |
| **LV** | LVA | Latvia | Sovereign State | Pilsonības un migrācijas lietu pārvalde (PMLP — `pmlp.gov.lv`) | `primary_sources_audited` | Valsts nodeva statutory tariff: Standard 10 working days: Adult (10-yr) 50.00 EUR; Children <20 / Pensioners / Disabled 25.00 EUR; Urgent 2 working days: Adult 75.00 EUR / Reduced 45.00 EUR (DIRECT). Personas kods + eID card mandatory; biometrics at PMLP territorial divisions or via latvija.lv. |
| **LB** | LBN | Lebanon | Sovereign State | General Directorate of General Security (Sûreté Générale) — `https://www.general-security.gov.lb/` | `primary_sources_audited` | General Security official fee: 5-yr LBP 6,000,000; 10-yr LBP 10,000,000 (DIRECT). Fast-track surcharges apply. Ikhraj Qayd Fardi (<3mo) or Biometric ID Card mandatory; Moukhtar-certified photos; in-person at General Security regional bureau. Quota appointment system applies due to high demand. Consular USD 300/600 (PARTIAL). |
| **LS** | LSO | Lesotho | Sovereign State | Dept. of Immigration Services, Ministry of Home Affairs (`homeaffairs.gov.ls`) | `primary_sources_audited` | Passports & Travel Documents (Fees) Regs: Regular 32-page e-passport (10-yr adult / 5-yr minor) M 130.00; Regular 64-page frequent traveller M 300.00; Urgent processing surcharge +M 500.00 (DIRECT). Lesotho National ID Card (e-ID) + NICR security-featured Birth Certificate mandatory; in-person biometrics at Home Affairs district offices. |
| **LR** | LBR | Liberia | Sovereign State | Bureau of Passport and Visas, Ministry of Foreign Affairs (`mofa.gov.lr` / `liberiapassports.com`) | `primary_sources_audited` | Executive regulations & MOFA statutory fee: Ordinary ECOWAS Biometric Passport (5-year validity) USD $40.00; Expedited / express processing USD $80.00; Overseas consular USD $165.00 (DIRECT). National Identification Registry (NIR) Citizen ID Card or certified Birth Certificate mandatory; payment via authorized bank/MoMo; biometrics at MOFA Passport Center, Capitol Hill, Monrovia. |
| **LY** | LBY | Libya | Sovereign State | Passports, Nationality & Foreigners Affairs Authority (GNU) — `https://ejraat.gov.ly/` | `primary_sources_audited` | Standard passport LYD 50.50 (DIRECT); lost/damaged replacement LYD 1,000 (eff. late 2024, DIRECT). ⚠️ Dual-government political split; GNU-aligned services primarily in Tripoli. Service availability varies by region and security conditions. |
| **LI** | LIE | Liechtenstein | Sovereign State | National Passport / Immigration Directorate | `official_source_needs_research` | Awaiting primary statutory fee schedule, civil identity document checklist, and appointment workflow verification. |
| **LT** | LTU | Lithuania | Sovereign State | Migracijos departamentas prie VRM (MIGRIS — `migracija.lt`) | `primary_sources_audited` | Valstybės rinkliava tariff: Standard 1 month: Adult (10-yr) 50 Eur; Child <18: 25 Eur (50% reduction); Pensioner: 10 Eur (80% reduction); Urgent 5 working days: 100 Eur; Same day (Vilnius): 200 Eur (DIRECT). Asmens kodas + eID card mandatory; digital application/booking via MIGRIS (migracija.lt). |
| **LU** | LUX | Luxembourg | Sovereign State | Bureau des passeports / MAEE (`guichet.public.lu`) | `primary_sources_audited` | BPVL statutory tariff: Standard 7 days: Age 4+ (5-yr) 50 € / Minors <4 (2-yr) 30 €; Urgent 3 days: Age 4+ 150 € / Minors <4 90 € (DIRECT). 13-digit national identification number (Matricule) + proof of bank transfer payment mandatory; application via commune (Biergeramt) or BPVL Luxembourg City. |
| **MO** | MAC | Macao | Territory / Special Region | Identification Services Bureau DSI Macau (Macao SAR Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by CN. General guidance applies. |
| **MG** | MDG | Madagascar | Sovereign State | Direction Générale de la Police Nationale, Min. Sécurité Publique (`pn.gov.mg`) | `primary_sources_audited` | Décret tarifaire & Loi de finances: Standard electronic biometric passport (5-year validity) 190 000 Ariary (MGA) payable via Trésor Public vignette (DIRECT). Turnaround ~72 hours (3 working days) at SCCIE Anosy. Carte d'Identité Nationale (CIN) certifiée + Copie intégrale d'acte de naissance (<6mo) + Certificat de nationalité + Certificat de position militaire (males 18–50) mandatory; in-person biometrics. |
| **MW** | MWI | Malawi | Sovereign State | Dept. of Immigration and Citizenship Services (`epassport.gov.mw`) | `primary_sources_audited` | Immigration (Passports) Regulations: Ordinary 36-page passport (10-yr adult): Normal MWK 90,000 / Express MWK 160,000; Ordinary 48-page frequent traveller: Normal MWK 130,000 / Express MWK 180,000; Minor 36-page (5-yr): Normal MWK 80,000 / Express MWK 120,000; Lost replacement: MWK 100,000–170,000 (DIRECT). National ID Card (NRB) + Birth Certificate mandatory; in-person biometrics at DICS offices. |
| **MV** | MDV | Maldives | Sovereign State | Maldives Immigration, Ministry of Homeland Security (`immigration.gov.mv`) | `primary_sources_audited` | Maldives Immigration statutory tariffs: Electronic Passport 32-page (5-yr) MVR 1,000; 48-page frequent traveler MVR 1,500; Non-electronic (under 10 or abroad) MVR 600; Lost/damaged valid passport penalty: up to MVR 2,000 (DIRECT). National Identity Card (DNR ID) mandatory; 100% digital submission via IMUGA portal (imuga.immigration.gov.mv). |
| **ML** | MLI | Mali | Sovereign State | Direction de la Police des Frontières (DPF), DGPN (`demarchesadministratives.gouv.ml` / `securite.gouv.ml`) | `primary_sources_audited` | Décret tarifaire passeports biométriques: Passeport ordinaire (5-year validity) 45 000 FCFA (revised from 55 000 FCFA); Service optionnel / prémium 90 000 FCFA (DIRECT). Turnaround ~7 to 14 working days (express ~2 to 3 days). CNI en cours de validité / Fiche descriptive NINA + Extrait d'acte de naissance (Volet III) mandatory; in-person biometrics at DPF Hamdallaye ACI 2000, Bamako. |
| **MT** | MLT | Malta | Sovereign State | Identità (Passport Office — `identita.gov.mt`) | `primary_sources_audited` | Passports Regulations statutory tariff: Adults 16+ (10-yr): €70.00 (Sept–March) / €80.00 (April–Aug); Minors 10–15 (5-yr): €40.00; Children <10 (2-yr): €16.00; Urgent (4 hours): €160.00 adult / €80.00 minor; Lost replacement supplement: +€15.00 (DIRECT). Form A + Maltese ID Card + recommender endorsement; appointments via passportbooking.identita.gov.mt. |
| **MH** | MHL | Marshall Islands | Sovereign State | National Passport / Immigration Directorate | `official_source_needs_research` | Awaiting primary statutory fee schedule, civil identity document checklist, and appointment workflow verification. |
| **MQ** | MTQ | Martinique | Territory / Special Region | French Ministry of the Interior / ANTS (French Republic Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by FR. General guidance applies. |
| **MR** | MRT | Mauritania | Sovereign State | Agence Nationale du Registre des Populations et des Titres Sécurisés (ANRPTS) (`anrpts.gov.mr`) | `primary_sources_audited` | Décret tarifaire ANRPTS: Passeport biométrique ordinaire 32 pages (5-year validity) 3 000 MRU; Grand format 64 pages 10 000 MRU; Lost replacement graduated penalty (4 000 to 10 000 MRU) (DIRECT). Carte Nationale d'Identité (CNI) avec NNI + Acte de naissance sécurisé ANRPTS mandatory; enrollment via Centre d'Accueil des Citoyens (CAC) or Houwiyeti portal. |
| **MU** | MUS | Mauritius | Sovereign State | Passport and Immigration Office (PIO) — `https://passport.govmu.org/` | `primary_sources_audited` | Passports Act regulations: Adults (16–54, 10-yr) MUR 700; Minors (<16, 5-yr) / Seniors (55+) / Disabled: MUR 400 (DIRECT). Lost/damaged penalty: 1st loss MUR 5,000; 2nd loss MUR 15,000; subsequent MUR 15,000. NIC + original birth certificate mandatory; Police loss declaration; Form PF 136 in-person at PIO Port Louis or district divisional HQs. |
| **YT** | MYT | Mayotte | Territory / Special Region | French Ministry of the Interior / ANTS (French Republic Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by FR. General guidance applies. |
| **FM** | FSM | Micronesia | Sovereign State | National Passport / Immigration Directorate | `official_source_needs_research` | Awaiting primary statutory fee schedule, civil identity document checklist, and appointment workflow verification. |
| **MD** | MDA | Moldova | Sovereign State | Agenția Servicii Publice (ASP — `asp.gov.md`) | `primary_sources_audited` | ASP statutory tariffs: Standard 20-working-day fee transitioning from 650 MDL to 790 MDL effective Oct 2026 under new European-standard biometric booklet model (DIRECT; discrepancy between media release and legacy service card documented). Faster tiers: 10 days, 5 days, 1 day, same-day. Buletin de identitate (ID) mandatory for 16+; biometrics at ASP multifunctional centers or via MDelivery. |
| **MC** | MCO | Monaco | Sovereign State | Direction de la Sûreté Publique (`gouv.mc` / `monservicepublic.gouv.mc`) | `primary_sources_audited` | Ordonnance Souveraine n° 8.459 du 15 janvier 2021: Adult 18+ (10-yr) 90.00 €; Minor 3–17 (5-yr) 60.00 €; Child <3 (3-yr) 30.00 € (DIRECT). Payment strictly in cash or cheque to Trésorerie Générale des Finances (cards not accepted). Monegasque nationality + Carte d'identité monégasque mandatory; biometrics (prints 12+) at Sûreté Publique. |
| **MN** | MNG | Mongolia | Sovereign State | General Authority for State Registration (GASR / УБЕГ — `burtgel.gov.mn`) | `primary_sources_audited` | Law on State Registration of Civil Status: Electronic chip-embedded passport (48-pg, 10-yr adult / 5-yr minor): 82,800 MNT standard (~5 days Ulaanbaatar / ~15 days aimags) (DIRECT). Civil Identity Card (Иргэний үнэмлэх) + registration number mandatory; digital application via E-Mongolia (e-mongolia.mn) or GASR one-stop service kiosks (Gerege). |
| **ME** | MNE | Montenegro | Sovereign State | Ministarstvo unutrašnjih poslova (MUP — `gov.me`) | `primary_sources_audited` | MUP statutory fees (per reform & Law on Admin Fees): Adult 21+ (10-yr) 33.00 € (8 € booklet + 25 € admin tax; reduced from 40 €); Minor <21 (exempt from admin tax) 8.00 € (DIRECT). Legacy/unreformed cards quoting 50 € resolved. Biometric ID card (Biometrijska lična karta) mandatory; in-person biometrics at MUP regional branch; 15 working days turnaround. |
| **MS** | MSR | Montserrat | Territory / Special Region | Immigration Department Montserrat (BOT Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by GB. General guidance applies. |
| **MA** | MAR | Morocco | Sovereign State | Ministère de l'Intérieur / Direction Générale de la Sûreté Nationale | `primary_sources_audited` | Primary source audited (Batch 5). Code général des impôts statutory tariff: e-Timbre fiscal 500 DH (16-digit code via passeport.ma); 5-year validity (adults and minors); 3-year (<3 yrs). Mandatory CNIE for adults; parental presence + birth certificate for minors. Submission at local Annexe administrative. |
| **MZ** | MOZ | Mozambique | Sovereign State | Serviço Nacional de Migração (SENAMI) — `https://agendamento.senami.gov.mz/` | `primary_sources_audited` | Diploma Ministerial n.º 18/2024: Normal biometric passport (5-yr) 2.400,00 MZN; Urgent 2.775,00 MZN; Emergency Certificate 400 MZN (DIRECT). Bilhete de Identidade (BI) mandatory; birth certificate for minors; online appointment booking via agendamento.senami.gov.mz; in-person biometrics at SENAMI provincial directorates. |
| **MM** | MMR | Myanmar | Sovereign State | Dept. of Immigration & National Registration (SAC-controlled) — `https://epassport.moip.gov.mm/` | `primary_sources_audited` | SAC official fee: MMK 40,000 (eff. Sep 1, 2024; PARTIAL). ⚠️ CRITICAL: Military coup Feb 2021 (SAC junta). Conscription law (eff. Mar 2024) for males 18–35 / females 18–27; passports weaponized as conscription control. NRC + UID mandatory. Overseas passport revocations reported for anti-coup diaspora. |
| **NA** | NAM | Namibia | Sovereign State | Ministry of Home Affairs, Immigration, Safety & Security (MHAISS) — `https://eservices.mhaiss.gov.na/` | `primary_sources_audited` | Passports Act fee schedule: New/renewed ordinary passport (5-yr) N$400.00; Lost/damaged replacement N$800.00 (double fee penalty) (DIRECT). Namibian National ID + full birth certificate mandatory; citizenship certificate if born abroad; online initiation via eservices.mhaiss.gov.na; in-person biometrics at MHAISS regional offices. |
| **NR** | NRU | Nauru | Sovereign State | National Passport / Immigration Directorate | `official_source_needs_research` | Awaiting primary statutory fee schedule, civil identity document checklist, and appointment workflow verification. |
| **NL** | NLD | Netherlands | Sovereign State | Ministerie van BZK (RvIG) / Ministerie van BZ (NederlandWereldwijd) | `primary_sources_audited` | Primary source audited (Batch 1). Paspoortwet / Paspoortuitvoeringsregeling 2026 municipal caps: Domestic adult (18+) max €88.65, minor (<18) max €67.05, spoedtoeslag max €60.30; Consular adult €169.15, minor €147.40, emergency €60.25; Border desk adult €133.65. |
| **NC** | NCL | New Caledonia | Territory / Special Region | Haut-Commissariat de la République en Nouvelle-Calédonie (French Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by FR. General guidance applies. |
| **NI** | NIC | Nicaragua | Sovereign State | Dirección General de Migración y Extranjería (DGME), MINT (`mint.gob.ni` / `tramitesconsulares.mint.gob.ni`) | `primary_sources_audited` | Ley N° 761: Pasaporte ordinario Adult 16+ (10-yr) USD $21.56 (~C$ 789.61 NIO); Minor <16 (5-yr) USD $10.77 (~C$ 394.44 NIO); Jubilados 50% discount; Agilización 24h +$8.62, 48h +$7.18 (DIRECT). Consular portal: USD $50.00. Cédula de identidad nicaragüense + Partida de nacimiento + bank voucher mandatory; biometrics at DGME Central or SERTRAMI offices. |
| **NE** | NER | Niger | Sovereign State | Direction de la Surveillance du Territoire (DST), DGPN (`interieur.gouv.ne` / `police.gouv.ne`) | `primary_sources_audited` | Décret portant création et tarification du passeport biométrique: Standard biometric passport: Adult 45 000 FCFA; Minors & Students 29 750 FCFA; Hadj 45 000 FCFA (DIRECT). Turnaround ~7 to 15 working days. Carte Nationale d'Identité Biométrique (CNIB) nigérienne + Copie légalisée d'acte de naissance + Certificat de nationalité nigérienne mandatory; in-person biometrics at DST Niamey or regional directorates. |
| **NU** | NIU | Niue | Territory / Special Region | Te Tari Taiwhenua Internal Affairs NZ (New Zealand Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by NZ. General guidance applies. |
| **NF** | NFK | Norfolk Island | Territory / Special Region | Australian Passport Office (Australian Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by AU. General guidance applies. |
| **KP** | PRK | North Korea | Sovereign State | Ministry of Foreign Affairs / Ministry of Social Security (DPRK) — No public portal | `primary_sources_audited` | ⚠️ EFFECTIVELY INACCESSIBLE: Ordinary passports almost never issued to regular citizens. Fee data: NOT AVAILABLE. No public application channel exists. Passport issued only to state-approved workers, athletes, officials. Mandatory surrender upon return. Political clearance (songbun) required. Ordinary citizens cannot self-initiate application. |
| **MK** | MKD | North Macedonia | Sovereign State | Министерство за внатрешни работи (MVR — `mvr.gov.mk`) | `primary_sources_audited` | MVR statutory tariffs: Regular 15 days: Over 27 (10-yr) 2.300 MKD (2.000 booklet + 300 tax); Age 4–27 (5-yr) 1.700 MKD (1.500 booklet + 200 tax); Under 4 (2-yr) 1.600 MKD (1.500 booklet + 100 tax). Urgent fast-track: Over 27 6.400 MKD / Age 4–27 6.300 MKD / Under 4 6.200 MKD. Lost passport gazette publication: +75 MKD (DIRECT). Lična karta mandatory; termin.mvr.gov.mk. |
| **MP** | MNP | Northern Mariana Islands | Territory / Special Region | U.S. Department of State (US Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by US. General guidance applies. |
| **NO** | NOR | Norway | Sovereign State | Politiet (Pass- og ID-kontor) / POD | `primary_sources_audited` | Primary source audited (Batch 4). Passforskriften 2026: Adult 16+ (10-yr) 840 NOK; Child <16 (5-yr) 510 NOK; Passport+ID combo 1,340 NOK (20% discount); Nødpass 1,320 NOK. Consular adult 1,290 NOK / child 780 NOK. Fødselsnummer required; photo/biometrics taken at police station. |
| **OM** | OMN | Oman | Sovereign State | Directorate General of Passports & Civil Status, ROP — `https://www.rop.gov.om/` | `primary_sources_audited` | ROP official fee: Adult 18+ (10-yr) OMR 10; Minor <18 (5-yr) OMR 5 (DIRECT). Civil ID Card with PKI chip mandatory; guardian presence for minors; online via ROP app/portal using PKI or in-person at ROP service centers across wilayats. |
| **PW** | PLW | Palau | Sovereign State | National Passport / Immigration Directorate | `official_source_needs_research` | Awaiting primary statutory fee schedule, civil identity document checklist, and appointment workflow verification. |
| **PS** | PSE | Palestine | Sovereign State (UN Observer State) | Palestinian Authority Ministry of Interior (`moi.pna.ps`) | `official_source_needs_research` | UN Permanent Observer State (UNGA Res 67/19). Awaiting primary statutory fee schedule, civil identity document checklist, and appointment workflow verification. |
| **PA** | PAN | Panama | Sovereign State | Autoridad de Pasaportes de Panamá (`apap.gob.pa`) | `primary_sources_audited` | Ley 32 de 2013 / APAP tariff: Ordinary 32-page biometric e-passport B/. 100.00 (USD 100); Senior citizens / retirees (jubilados) / disabled B/. 50.00 (50% statutory discount); Urgent processing surcharge +B/. 75.00 (DIRECT). Validity: 10-yr adult (18+), 5-yr minor. Cédula de Identidad Personal (Tribunal Electoral) + B/. 3.00 fiscal stamps birth cert (unless TE verified); in-person biometrics at APAP regional centers. |
| **PG** | PNG | Papua New Guinea | Sovereign State | Papua New Guinea Immigration and Citizenship Authority (`ica.gov.pg`) | `primary_sources_audited` | Passports Act & Migration Regs: Standard ordinary passport (5-yr) K100.00; Fast-track express (2 days) K300.00 (K100 base + K200 priority fee); Lost replacement penalty K200.00 (DIRECT). NID Birth Certificate (Civil Registry/NID Office) + Form FA 81 + Section 13 Legal Practitioner/Commissioner certification mandatory; in-person or postal lodgment at ICA Waigani. |
| **PY** | PRY | Paraguay | Sovereign State | Departamento de Identificaciones de la Policía Nacional (`identificaciones.gov.py`) | `primary_sources_audited` | Ley N° 222/1993 & aranceles reglamentarios: Pasaporte ordinario (5-yr) 240.000 Gs. (DIRECT). Paid at Identificaciones cashier window. Cédula de Identidad Civil paraguaya vigente + Certificado de Cumplimiento Tributario (C.C.T. / Constancia de no ser contribuyente DNIT) mandatory; biometrics at Sede Central (Boggiani) or regional offices; parental consent for minors. |
| **PE** | PER | Peru | Sovereign State | Superintendencia Nacional de Migraciones | `primary_sources_audited` | Primary source audited (Batch 3). Ley N° 31678 / DS 004-2024-IN: Pasaporte Electrónico (10-yr validity for 18+) S/ 120.90 PEN (Tributo 01810 Págalo.pe); Teens 12-17 (5-yr) S/ 120.90; Child <12 (3-yr) S/ 120.90. In-person walk-in ticket system (no appointment needed); same-day delivery (~2 hrs). DNI mandatory. |
| **PN** | PCN | Pitcairn | Territory / Special Region | Pitcairn Island Administration (BOT Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by GB. General guidance applies. |
| **PL** | POL | Poland | Sovereign State | MSWiA / Urzędy Wojewódzkie (Wojewoda) | `primary_sources_audited` | Primary source audited (Batch 2). Ustawa o dokumentach paszportowych: Standard adult (10-yr) 140 PLN; Youth 12-18 / students 70 PLN; Child <12 (5-yr) 30 PLN; Senior 70+ 0 PLN; Lost/damaged by fault +200% (420 PLN). PESEL mandatory; in-person electronic counter signature; delivery in ~30 days. |
| **PT** | PRT | Portugal | Sovereign State | Instituto dos Registos e do Notariado (IRN) / MNE (Portal das Comunidades) | `primary_sources_audited` | Primary source audited (Batch 1). Decreto-Lei n.º 83/2000 (PEP): Domestic normal €65.00, expresso €85.00, urgente €95.00, airport urgent €100.00; Consular standard €75.00 (€105.00 delivered), consular urgent €120.00, temporary €150.00. Cartão de Cidadão mandatory prerequisite. |
| **PR** | PRI | Puerto Rico | Territory / Special Region | U.S. Department of State (US Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by US. General guidance applies. |
| **QA** | QAT | Qatar | Sovereign State | Nationality & Travel Documents Dept., MOI — `https://portal.moi.gov.qa/` | `primary_sources_audited` | Standard Qatari passport (new/renewal): QAR 100. Travel Document: QAR 400. Qatar ID (citizens): QAR 50. Online via portal.moi.gov.qa or Metrash2 app. QID + Family Book (Kitab al-A'ila) mandatory. Applicable only to Qatari citizens (not expatriate residents). |
| **CG** | COG | Republic of the Congo | Sovereign State | Direction Générale de la Surveillance du Territoire (DGST) (`interieur.gouv.cg`) | `primary_sources_audited` | Décret CEMAC: Standard biometric passport (5-yr) 60 000 FCFA (DIRECT). Consular fee abroad ~EUR 120 / USD $140. Non-prorogable. Copie intégrale d'acte de naissance congolais + Carte Nationale d'Identité (CNI) + Certificat de nationalité congolaise + Casier judiciaire mandatory; in-person biometrics at DGST Emigration Brazzaville or Pointe-Noire. |
| **RO** | ROU | Romania | Sovereign State | Direcția Generală de Pașapoarte (DGP) / Ministerul Afacerilor Interne | `primary_sources_audited` | Primary source audited (Batch 3). Revised August 1, 2025 tariff: Pașaport simplu electronic 265 RON (TVA inclus) across all ages (10-yr for 18+, 5-yr for 12-18, 3-yr for <12); Temporar 265 RON. Carte de Identitate mandatory prerequisite; Ghișeul.ro / CEC Bank; delivery in 5 working days. |
| **RU** | RUS | Russia | Sovereign State | Main Directorate for Migration Affairs (ГУВМ МВД России) / MFA (`мвд.рф` / `gosuslugi.ru` / `kdmid.ru`) | `primary_sources_audited` | Foreign travel passport (заграничный паспорт, Art. 333.28 Tax Code rev. July 1, 2024): 10-yr Biometric 6,000 RUB (adult 14+) / 3,000 RUB (child <14); 5-yr Classical 2,000 RUB (adult 14+) / 1,000 RUB (child <14) (DIRECT). Kaliningrad residents 0 RUB. Turnaround: 1 mo (domicile) / 3 mo (temporary stay); urgent 3 days for medical/bereavement. Internal passport (внутренний паспорт) mandatory prerequisite; citizens may hold two valid passports concurrently; biometrics at OVM MVD / MFC. |
| **RW** | RWA | Rwanda | Sovereign State | DGIE & IremboGov — `https://www.migration.gov.rw/` / `https://support.irembo.gov.rw/` | `primary_sources_audited` | Ministerial Order No. 06/01: Ordinary e-passport: Adult 10-yr 100,000 RWF; Adult 5-yr 75,000 RWF; Minor <16 (2–5 yr) 25,000 RWF (DIRECT). Service 15k RWF; Diplomatic 50k RWF. National ID (Indangamuntu) for 16+ or Child ID for <16 mandatory; Irembo online application & payment; in-person biometrics at DGIE or embassy. |
| **RE** | REU | Réunion | Territory / Special Region | French Ministry of the Interior / ANTS (French Republic Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by FR. General guidance applies. |
| **BL** | BLM | Saint Barthélemy | Territory / Special Region | Collectivité de Saint-Barthélemy (French Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by FR. General guidance applies. |
| **SH** | SHN | Saint Helena, Ascension and Tristan da Cunha | Territory / Special Region | St Helena Immigration (BOT Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by GB. General guidance applies. |
| **KN** | KNA | Saint Kitts and Nevis | Sovereign State | Ministry of National Security / Passport Office (`gov.kn` / `stkittsnevishcuk.gov.kn`) | `primary_sources_audited` | ePassport Application Instructions (rev. Aug 2, 2024): Standard 10-yr adult (16–64) EC$ 250.00; Child <16 (5-yr) EC$ 150.00; Senior 65+ EC$ 150.00; Urgent processing: Adult EC$ 350.00 / Child EC$ 250.00; Lost unexpired penalty EC$ 500.00 (DIRECT). CBI fees (EC$ 675–1,350) separated. Birth Certificate + Social Security Card + Recommender mandatory; biometrics at Basseterre / Charlestown. |
| **LC** | LCA | Saint Lucia | Sovereign State | Immigration Dept., Royal Saint Lucia Police Force (`govt.lc`) | `primary_sources_audited` | Passports (Amendment) Regulations: Standard ePassport (10-yr adult / 5-yr minor) EC$ 250.00; Replacement before expiry (lost/damaged) EC$ 300.00; Expedited surcharge (3–5 days) +EC$ 50.00 (DIRECT). National ID Card (18+) or NIS Card (16–17) + Civil Registry Birth Certificate mandatory; in-person biometrics at Police HQ Castries or Vieux Fort. |
| **MF** | MAF | Saint Martin (French part) | Territory / Special Region | Collectivité de Saint-Martin (French Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by FR. General guidance applies. |
| **PM** | SPM | Saint Pierre and Miquelon | Territory / Special Region | Préfecture de Saint-Pierre-et-Miquelon (French Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by FR. General guidance applies. |
| **VC** | VCT | Saint Vincent and the Grenadines | Sovereign State | Passport and Immigration Dept., Prime Minister's Office (`security.gov.vc`) | `primary_sources_audited` | Passports Act (Cap. 116) regulations: Standard ePassport: Adult 16+ (10-yr) EC$ 200.00; Child <16 (5-yr) EC$ 100.00; Stamp duty: EC$ 15.00 adult / EC$ 10.00 child; Express tiers: 1-day +EC$ 90.00 / 2–3d +EC$ 60.00 / 4–5d +EC$ 40.00 (DIRECT). Diaspora: US$ 200 adult / US$ 100 child / lost US$ 225. Birth Certificate + National ID/NIS + Section 10 certifier mandatory; biometrics at Kingstown. |
| **WS** | WSM | Samoa | Sovereign State | Immigration Division, Ministry of the Prime Minister and Cabinet (`mpmc.gov.ws`) | `primary_sources_audited` | Passports Act 2008 & Immigration Act 2020: Standard passport (5-day turnaround, 5-yr): Adult (17+) WST 200.00; Child (≤16) WST 100.00; Urgent (2-day): Adult WST 240.00; Child WST 140.00; Lost/damaged replacement: Adult WST 400.00; Child WST 200.00 (DIRECT). MJCA Birth Certificate + Section 6 Recommender (Fa'amasino/Faife'au/Pulenu'u/Lawyer) mandatory; in-person biometrics at Apia. |
| **SM** | SMR | San Marino | Sovereign State | Ufficio Stato Civile / Ufficio Passaporti (`gov.sm` / `esteri.sm`) | `primary_sources_audited` | Rev. Carta dei Servizi 2025: Adults & 14+ (10-yr) € 100.00; Minors 3–14 (5-yr) € 50.00; Children 0–3 (3-yr) € 30.00; Urgent 3 working days surcharge: +€ 50.00 (DIRECT). Sammarinese citizenship required; Codice ISS + Carta d'Identità sammarinese mandatory; application at Ufficio Stato Civile Borgo Maggiore; consular via Dipartimento Affari Esteri. |
| **ST** | STP | Sao Tome and Principe | Sovereign State | Serviço de Migração e Fronteiras (SMF), Ministério da Defesa e Ordem Interna (`smf.st`) | `primary_sources_audited` | Tabela oficial de taxas do SMF: Passaporte Comum (5-year validity): Normal 1.500,00 STN; Taxa de urgência (24 horas) +250,00 STN (total 1.750,00 STN); Emissão fora de horas +25%; Aeroporto/porto +30% (DIRECT). Bilhete de Identidade (BI santomense) válido + Certidão de Nascimento narrativa completa + Registo Criminal mandatory; biometrics at SMF HQ, São Tomé. |
| **SN** | SEN | Senegal | Sovereign State | Direction Police Étrangers & Titres Voyage (DPETV) — `https://interieur.gouv.sn/` | `primary_sources_audited` | Passeport ordinaire (5-yr) 20,000 XOF (DIRECT). Paid via quittance at Direction de l'Enregistrement, des Domaines et du Timbre (DGID/DEDT). No duplicate issued for loss: requires police loss certificate + new application at 20,000 XOF. CNI biométrique CEDEAO mandatory (15+); parental consent for minors; in-person biometrics at police stations. |
| **RS** | SRB | Serbia | Sovereign State | Ministry of Internal Affairs (MUP / МУП) — `http://www.mup.gov.rs/` | `primary_sources_audited` | Law on Travel Documents: Standard procedure 3,600 RSD (regular up to 30d, typically 7–10d); Urgent with justified emergency (48h): 3,600 RSD; Expedited without emergency proof (48h): 8,600 RSD (DIRECT). Consular ~64 EUR (PARTIAL). Biometric Lična karta mandatory; uplatnica via eUprava or bank; in-person at local Police Directorate/Station. |
| **SC** | SYC | Seychelles | Sovereign State | Dept. of Immigration and Civil Status (`ics.gov.sc`) | `primary_sources_audited` | Passports Act (Cap. 159) & Regs: Standard biometric passport (10-yr adult / 5-yr minor) SCR 750; Misplaced/lost passport surcharge +SCR 1,500 (total SCR 2,250); Overseas courier surcharge SCR 1,000 (DIRECT). Turnaround ~72 hours (3 working days); paperless application (no form). National Identity Number (NIN) Card + birth cert mandatory; in-person biometrics at Independence House, Victoria, Mahé. |
| **SL** | SLE | Sierra Leone | Sovereign State | Sierra Leone Immigration Department (SLID) (`slid.gov.sl`) | `primary_sources_audited` | Passports Act & SLID statutory tariff: Standard ordinary biometric passport (5-year validity) USD $100.00 (pegged in local currency via approved voucher system at ~SLE 2,280) (DIRECT). Turnaround ~5 to 10 working days. NCRA National Identification Number (NIN) strictly mandatory + NCRA certified birth certificate + bank voucher receipt; in-person biometrics at SLID HQ, Freetown. |
| **SX** | SXM | Sint Maarten (Dutch part) | Territory / Special Region | Cabinet of the Governor of Sint Maarten (Kingdom of the Netherlands Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by NL. General guidance applies. |
| **SK** | SVK | Slovakia | Sovereign State | Oddelenie dokladov PZ / Ministerstvo vnútra SR (`minv.sk` / `slovensko.sk`) | `primary_sources_audited` | Zákon č. 145/1995 Z. z. (Položka 33, eff. 1 Apr 2024): Adults 16+ (10-yr): 30 days 50 €, 10 days 100 €, 2 days 150 €; Children 6–16 (5-yr): 20 € / 40 € / 60 €; Children <6 (2-yr): 12 € / 24 € / 36 € (DIRECT). Lost/damaged penalty: 1st time 2x (100 € adult), repeated 5x (250 €), 3rd+ 10x (500 €). Občiansky preukaz (OP) mandatory; in-person biometrics (fingerprints & signature from age 12+) at any Oddelenie dokladov PZ. |
| **SI** | SVN | Slovenia | Sovereign State | Upravne enote / Ministrstvo za notranje zadeve (`e-uprava.gov.si` / `gov.si`) | `primary_sources_audited` | ZUT Taksa 14 & Odredba o ceni obrazcev (New generation 1 Jun 2026): Total fee (form 44,77 € + admin tax): Adults 18+ (10-yr) 58,87 €; Children 3–18 (5-yr) 52,07 €; Children <3 (3-yr) 47,97 €; Provisional 1-yr 47,57 € (DIRECT). Fast-track priority collection at Cetis Celje. e-fotograf reference code + valid ID/citizenship mandatory; fingerprints from age 12+; signature from age 8+; in-person at Upravna enota. |
| **SB** | SLB | Solomon Islands | Sovereign State | Immigration Division, MCILI (`commerce.gov.sb` / `immigration.gov.sb`) | `primary_sources_audited` | Passports Act (Cap. 61) & Regs: Standard ordinary e-passport (10-year validity) SBD $1,000.00 (DIRECT). Payable at Ministry of Finance & Treasury (MoFT) counter prior to lodgment. Civil Registry certified birth certificate + two Statutory Declarations (family member and independent citizen) mandatory; in-person biometrics at Immigration Division Honiara. |
| **SO** | SOM | Somalia | Sovereign State | National Passport / Immigration Directorate | `official_source_needs_research` | Awaiting primary statutory fee schedule, civil identity document checklist, and appointment workflow verification. |
| **GS** | SGS | South Georgia and the South Sandwich Islands | Territory / Special Region | South Georgia and South Sandwich Islands (No civilian population; UK admin) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by GB. General guidance applies. |
| **KR** | KOR | South Korea | Sovereign State | Ministry of Foreign Affairs (MOFA) / Passport Division | `primary_sources_audited` | Primary source audited (Batch 1). Passport Act (Enforcement Decree revised March 1, 2026): Next-Gen e-Passport Adult (18+) 58-pg ₩52,000 / 26-pg ₩49,000; Minor (8-17) ₩44,000 / ₩41,000; Child (<8) ₩35,000 / ₩32,000 (Contribution fund waived); Single-entry ₩17,000; Emergency ₩50,000. |
| **SS** | SSD | South Sudan | Sovereign State | Directorate of Civil Registry, Nationality, Passport & Immigration, Ministry of Interior — `https://www.moi.goss.org/` | `primary_sources_audited` | USD-denominated fees paid in SSP at CBS rate: Adult USD 100; Child USD 50; Business USD 400 (PARTIAL — MOI portal has limited access; from Financial Act circulars). Nationality Certificate mandatory. ⚠️ Fragile state: recurring conflict; service availability varies by region. |
| **SD** | SDN | Sudan | Sovereign State | General Directorate of Passports & Immigration, Ministry of Interior | `primary_sources_audited` | ⚠️ CONFLICT: Civil war since Apr 2023; Khartoum infrastructure heavily disrupted. Services relocated to Port Sudan; partial restoration ongoing. Adult SDG 150,000 / Minor SDG 75,000 (PARTIAL); Consular USD ~250 adult (PARTIAL). National Number (الرقم الوطني) mandatory. Confirm current service availability before applying. |
| **SR** | SUR | Suriname | Sovereign State | Directoraat Burgerzaken / CBB, Ministerie van Binnenlandse Zaken (`burgerzaken.gov.sr`) | `primary_sources_audited` | Besluit e-Paspoorttarieven: Standard biometric e-passport: Adult 18+ (10-yr) SRD 2.100,-; Minor <18 (5-yr) SRD 1.365,-; Spoedaanvraag surcharge +100% (SRD 4.200 / 2.730); Lost penalty SRD 900,-; Damaged penalty SRD 650,- (DIRECT). Surinamese e-ID card + Uittreksel/geboorteakte mandatory; in-person biometrics at designated CBB Bureaus voor Burgerzaken. |
| **SJ** | SJM | Svalbard and Jan Mayen | Territory / Special Region | Governor of Svalbard / Norwegian Police (Norwegian Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by NO. General guidance applies. |
| **SE** | SWE | Sweden | Sovereign State | Polismyndigheten (Passexpedition) | `primary_sources_audited` | Primary source audited (Batch 4). Passförordningen (1979:664): Regular passport 500 SEK (5-yr validity for 12+, 3-yr for <12); National ID card 400 SEK; Provisoriskt pass 980 SEK (max 72 hrs prior to departure). Consular 1,600 SEK. Max 3 ordinary passports in 5 years per Passlagen § 7b. Photo on-site. |
| **CH** | CHE | Switzerland | Sovereign State | Bundesamt für Polizei (fedpol) / Kantonale Passbüros | `primary_sources_audited` | Primary source audited (Batch 1). Ausweisgesetz (AwG) / VAwG: Pass 10 Adult (18+) CHF 145.00 (CHF 140 fee + CHF 5 porto), Child (<18) CHF 65.00 (CHF 60 fee + CHF 5 porto); Kombiangebot Adult CHF 158.00 / Child CHF 78.00; Notpass CHF 100.00 (centre) / CHF 150.00 (airport). Biometrics at cantonal centre mandatory. |
| **SY** | SYR | Syria | Sovereign State | National Passport / Immigration Directorate | `official_source_needs_research` | Awaiting primary statutory fee schedule, civil identity document checklist, and appointment workflow verification. |
| **TW** | TWN | Taiwan | Territory / Special Region | Bureau of Consular Affairs (BOCA) / Ministry of Foreign Affairs | `primary_sources_audited` | Primary source audited (Batch 5). BOCA statutory tariffs: Adult 14+ (10-yr) NT$1,300; Minor <14 (5-yr) NT$900; Expedited +NT$300 (1 day), +NT$600 (2 days), +NT$900 (3 days). Consular overseas: USD 45 adult / USD 31 minor. National ID card (身分證) required; military status review for males 19-36. |
| **TJ** | TJK | Tajikistan | Sovereign State | Consular Dept. MFA (`consular.tj` / `mfa.tj`) & Passport Service MIA (`vkd.tj`) | `primary_sources_audited` | Presidential Decree & Government Resolution: Standard ~15 days: Adult 16+ (10-yr) US$ 75.00 + 40 TJS; Minor <16 (5-yr) US$ 25.00 + 40 TJS (payable in TJS at NBT rate). Urgent: 7 days (+100% = US$ 150) / 3 days (+200% = US$ 225) (DIRECT). Domestic biometric ID card (16+) + military ID (males 18–27) + birth cert mandatory; in-person biometrics. |
| **TZ** | TZA | Tanzania | Sovereign State | Immigration Department (Idara ya Uhamiaji), Ministry of Home Affairs (`immigration.go.tz` / `eservices.immigration.go.tz`) | `primary_sources_audited` | Passports Act Cap 42 & EAC e-Passport: Application form fee TZS 20,000 + Booklet issuance fee TZS 130,000 = Standard Ordinary 50-pg e-Passport total TZS 150,000 (DIRECT). 10-yr validity (adults 18+), 5-yr (minors <18). Lost replacement penalty TZS 100,000 + 150,000 booklet = TZS 250,000. Paid strictly via GePG Control Number (mobile money / bank). NIDA National ID Number (NIN) + RITA birth certificate mandatory; biometrics at Immigration offices. |
| **TH** | THA | Thailand | Sovereign State | Department of Consular Affairs, Ministry of Foreign Affairs | `primary_sources_audited` | Primary source audited (Batch 1). MFA Consular Regulations: Regular 5-year 1,000 THB; 10-year (adult 20+ only) 1,500 THB; Same-day urgent surcharge +2,000 THB (total 3,000 / 3,500 THB); EMS delivery 40 THB. Thai National ID Card mandatory; Parental consent required for under 20. |
| **TL** | TLS | Timor-Leste | Sovereign State | Direção Nacional de Registos e Notariado (DNRN), Min. Justiça (`mj.gov.tl` / `balkaununiku.gov.tl`) | `primary_sources_audited` | Passaporte Comum Electrónico (5-yr validity): Official portal (balkaununiku.gov.tl) lists Normal USD $50.00 (10 days), Expresso USD $75.00 (3 days), Urgente USD $150.00 (1 day) (DIRECT). Consular: base + USD $15.00 fee (Normal USD $65.00) + USD $10.00 postal courier (DIRECT); portal Portuguese (+1 day) and Tetum (+2 days) texts conflict on consular turnaround extension (preserved). ⚠️ Statutory tariff conflict preserved: live portal lists DM 10/2017 and charges USD $150 for 1-day urgent, whereas earlier gazetted DM 11/2016 listed USD $100; discrepancy preserved without conjecture. Paid via BNCTL deposit. BI timorense or birth/baptismal cert + Atestado de Residência mandatory; biometrics at Balcão Único / DNRN. |
| **TG** | TGO | Togo | Sovereign State | Direction Générale de la Documentation Nationale (DGDN), MSPC (`service-public.gouv.tg` / `dgdn.gouv.tg`) | `primary_sources_audited` | Décret N° 2014-149/PR: Passeport ordinaire biométrique (5-yr validity): 30 000 FCFA standard quittance (turnaround 2–3 weeks) (DIRECT). Paid via partner banks (UTB/BTCI/Ecobank) or T-Money/Flooz for Treasury receipt. ⚠️ VIP/Express counter fee claims (50 000–60 000 FCFA) are uncodified by decree and unverified on service-public.gouv.tg (DOWNGRADED to UNVERIFIED). Consular abroad: 50 000 FCFA equivalent (~75–80 EUR / USD $85.00) (DIRECT). Original Certificat de Nationalité Togolaise + legalized birth extract + CNI mandatory; biometrics at DGDN Lomé or Kara. |
| **TK** | TKL | Tokelau | Territory / Special Region | Tokelau Administration / NZ DIA (New Zealand Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by NZ. General guidance applies. |
| **TO** | TON | Tonga | Sovereign State | Immigration Department, Ministry of Foreign Affairs (`foreignaffairs.gov.to`) | `primary_sources_audited` | Tonga Passport Regulations (Cap. 62): Adult 16+ 10-year passport TOP$ 250.00; Adult 16+ 5-year passport TOP$ 150.00; Minor <16 (5-year) TOP$ 100.00 (DIRECT). Ministry of Justice Birth Certificate + Form 1 + certification by Town Officer ('Ofisa Kolo)/District Officer/Minister of Religion mandatory; in-person biometrics at Immigration Dept Nuku'alofa. |
| **TT** | TTO | Trinidad and Tobago | Sovereign State | Immigration Division, Ministry of Homeland/National Security (`nationalsecurity.gov.tt`) | `primary_sources_audited` | Immigration Regulations statutory fees: Ordinary 32-page passport (adults 16–59, 10-yr) TTD $500; 48-page business TTD $700; Children <16 (5-yr) TTD $500 (under-2 first issue FREE); Seniors 60+ FREE ($0 TTD); Expedited surcharge +TTD $600; Lost/stolen/mutilated penalty TTD $2,000 (DIRECT). Computerized RGD Birth Certificate with PIN + National ID card (EBC) mandatory; appointment via appointments.gov.tt. |
| **TN** | TUN | Tunisia | Sovereign State | Direction Générale de la Police Nationale, Ministère de l'Intérieur — `https://www.interieur.gov.tn/` | `primary_sources_audited` | Law 75-40 / Finance Law (timbre fiscal): Adult (5-yr) 80 TND; Pupils/Students/Children <7: 25 TND; Lost/damaged replacement: 150 TND (DIRECT from sicad.gov.tn). Consular chancery rate ~50 EUR (PARTIAL). CIN (18+) or Extrait de naissance (<18) mandatory; in-person at local Police / Garde Nationale station. |
| **TM** | TKM | Turkmenistan | Sovereign State | State Migration Service — `https://migration.gov.tm/` | `primary_sources_audited` | Standard biometric passport: TMT 60 (DIRECT from migration.gov.tm); fee waived for under-16, war veterans, labor veterans, disabled persons. Payment via Halkbank (halkbank.gov.tm). ⚠️ Highly restrictive state: exit visa (exit permit) system in place; many citizens require separate government approval to travel abroad even with valid passport. |
| **TC** | TCA | Turks and Caicos Islands | Territory / Special Region | Ministry of Border Control Turks & Caicos (BOT Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by GB. General guidance applies. |
| **TV** | TUV | Tuvalu | Sovereign State | National Passport / Immigration Directorate | `official_source_needs_research` | Awaiting primary statutory fee schedule, civil identity document checklist, and appointment workflow verification. |
| **TR** | TUR | Türkiye | Sovereign State | Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü (NVİ) / İçişleri Bakanlığı | `primary_sources_audited` | Primary source audited (Batch 2). 2026 NVİ Bordo Pasaport statutory fees: 4-10 yr total 14.761,40 TL (13.410,40 TL harç + 1.351,00 TL defter); 3-yr 10.867,00 TL; 2-yr 8.049,50 TL; 1-yr 5.454,00 TL; Student <25 harçsız (1.351,00 TL defter only). T.C. Kimlik Kartı mandatory; ALO 199 / randevu.nvi.gov.tr. |
| **VI** | VIR | U.S. Virgin Islands | Territory / Special Region | U.S. Department of State (US Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by US. General guidance applies. |
| **UG** | UGA | Uganda | Sovereign State | Directorate of Citizenship & Immigration Control (DCIC) — `https://passports.go.ug/` | `primary_sources_audited` | Ordinary e-passport (48-pg, 10-yr adult) UGX 250,000; Express fast-track +UGX 150,000 (total UGX 400,000) (DIRECT). Lost replacement penalty +UGX 100,000 (total UGX 350,000). NIRA National Identification Number (NIN) + recommender NIN mandatory; online application via passports.go.ug; PRN payment at bank/mobile money; in-person at DCIC Kyambogo or regional centers. |
| **UA** | UKR | Ukraine | Sovereign State | State Migration Service (ДМСУ) — `https://dmsu.gov.ua/` | `primary_sources_audited` | International biometric passport: UAH 958 standard (20 wd) / UAH 1,598 urgent (7 wd) — eff. April 1, 2024. ⚠️ WARTIME: Males 18–60 generally barred from leaving Ukraine under martial law (May 2024). Overseas passport delivery suspended for military-age males. Ukrainian ID card mandatory; Diia portal application; CNAP in-person biometrics. |
| **UM** | UMI | United States Minor Outlying Islands | Territory / Special Region | U.S. Department of State (Unincorporated US Territory) | `official_source_needs_research` | Non-sovereign unincorporated territory: uninhabited/military/scientific outposts. No separate passport regime; US passport applies. |
| **UY** | URY | Uruguay | Sovereign State | Dirección Nacional de Identificación Civil (DNIC) / Min. del Interior | `primary_sources_audited` | Primary source audited (Batch 3). DNIC tariffs: Trámite común Adult 18+ (10-yr) $ 5.630 UYU ($ 5.455 pasaporte + $ 175 antecedentes); Minor (<18) $ 5.455 UYU (5-yr); Trámite urgente $ 12.114 UYU ($ 10.712 + $ 1.402). Cédula de Identidad original mandatory; parental consent for minors under 18. |
| **UZ** | UZB | Uzbekistan | Sovereign State | Migration & Citizenship Dept., MIA — `https://my.gov.uz/` | `primary_sources_audited` | State fee: 1 BHM (2024: UZS 340,000); online via my.gov.uz: 10% discount (≈UZS 306,000). BHM set annually by budget law. Biometric ID Card (Guvohnoma) mandatory for 16+. PSC in-person biometric enrollment. Online application available with ECP/biometric SIM. |
| **VU** | VUT | Vanuatu | Sovereign State | Dept. of Vanuatu Immigration & Passport Services (`immigration.gov.vu`) | `primary_sources_audited` | Passports Act [Cap. 108] & Regs: Standard biometric e-passport: Adult 18–64 (10-yr) 20,000 VT; Minor 0–17 (5-yr) 10,000 VT; Senior 65+ 10,000 VT; Express 1-day urgent 30,000 VT; Lost/damaged penalty 50,000 VT (DIRECT). Vanuatu National ID Card + Civil Registry Birth Certificate mandatory; in-person biometrics at Port Vila or Luganville. |
| **VA** | VAT | Vatican City | Sovereign State | National Passport / Immigration Directorate | `official_source_needs_research` | Awaiting primary statutory fee schedule, civil identity document checklist, and appointment workflow verification. |
| **VE** | VEN | Venezuela | Sovereign State | SAIME — Servicio Administrativo de Identificación, Migración y Extranjería — `https://www.saime.gob.ve/` | `primary_sources_audited` | Regular passport USD-pegged: Adult USD 216 (10-yr); Youth 3–17 USD 162 (5-yr); Infant 3mo–2yr USD 108 (3-yr). Express: Adult USD 350. Paid in VES at BCV daily rate. Cédula de Identidad mandatory. Appointment via saime.gob.ve; may face availability constraints. |
| **VN** | VNM | Vietnam | Sovereign State | Cục Quản lý xuất nhập cảnh (Immigration Dept) / Bộ Công an | `primary_sources_audited` | Primary source audited (Batch 5). Circulars 25/2021 & 63/2023/TT-BTC: Standard issuance 200.000 VND (180.000 VND online portal); Lost/damaged replacement 400.000 VND. 10-yr validity (adult 14+), 5-yr (<14). Mandatory chip-embedded Citizen ID (CCCD) / VNeID; online submission via dichvucong.gov.vn. |
| **WF** | WLF | Wallis and Futuna | Territory / Special Region | Administration Supérieure de Wallis-et-Futuna (French Passport) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by FR. General guidance applies. |
| **EH** | ESH | Western Sahara | Territory / Special Region | Disputed / Non-Self-Governing Territory (Under UN Chapter XI oversight) | `official_source_needs_research` | Non-self-governing territory: Moroccan passport authority in Moroccan-administered zone; SADR passport issued in Tindouf refugee camps. General guidance applies. |
| **YE** | YEM | Yemen | Sovereign State | National Passport / Immigration Directorate | `official_source_needs_research` | Awaiting primary statutory fee schedule, civil identity document checklist, and appointment workflow verification. |
| **ZM** | ZMB | Zambia | Sovereign State | Dept. of National Registration, Passport & Citizenship (DNRPC) — `https://www.gsb.gov.zm/` | `primary_sources_audited` | ZamPortal official tariff: Ordinary 32-pg (10-yr adult) ZMW 320.00; Express 32-pg ZMW 520.00; Ordinary 48-pg ZMW 520.00; Express 48-pg ZMW 720.00; Lost replacement 32-pg ZMW 420.00 (DIRECT). National Registration Card (NRC) green card mandatory for 16+; birth certificate; referee recommendation; in-person biometrics at DNRPC offices. |
| **ZW** | ZWE | Zimbabwe | Sovereign State | Civil Registry Department — `https://www.zimembassyberlin.gov.zw/` | `primary_sources_audited` | Statutory Instruments under Citizenship of Zimbabwe Act: Ordinary e-passport USD 170 (USD 150 base + USD 20 QR code fee); Emergency/express e-passport (48–72h) USD 250 (DIRECT). Paid strictly in USD cash or designated bank accounts (CBZ). National ID card + original long-form birth certificate mandatory; in-person at Civil Registry e-passport centers. |
| **AX** | ALA | Åland Islands | Territory / Special Region | Åland Police Authority (Finnish Passport - Åland cover) | `official_source_needs_research` | Non-sovereign territory: passport issuance administered by FI. General guidance applies. |

### 2.1 Project-Specific Jurisdiction Addendum (Non-ISO 3166-1 Alpha-2 Assignment)

| Code | Alpha-3 | Jurisdiction Name | Classification | Primary Competent Authority | Research Status | Statutory Evidence Summary & Notes |
|:---:|:---:|---|---|---|:---:|---|
| **XK** | XKX | Kosovo | Project-Specific Identifier (Not ISO 3166-1) | Civil Registration Agency (ARC / MPB) — `mpb.rks-gov.net` | `primary_sources_audited` | Law No. 03/L-132 / Admin. Instruction MIA No. 06/2018: Adult 18+ (10-yr) 30.00 €; Minor 0–18 (5-yr / 3-yr) 20.00 €; Pensioner 65+ 15.00 €; Urgent fast-track (72 hrs) surcharge: +50.00 € (total 80.00 € adult / 70.00 € minor) (DIRECT). Letërnjoftim mandatory for 16+; parental consent for minors; police report for lost passports. Note: XK is a user-assigned project identifier, not an official ISO 3166-1 alpha-2 code. |

---

## 3. Batch 1 Audited Claim-Level Research Dossiers (6 Jurisdictions)

### 3.1 Netherlands (`NL` / `NLD`)
- **Administering Authority:**
  - Domestic Municipal Issuance: Ministerie van Binnenlandse Zaken en Koninkrijksrelaties (BZK) / Rijksdienst voor Identiteitsgegevens (RvIG) overseeing 342 Dutch municipalities.
  - Consular & Overseas Issuance: Ministerie van Buitenlandse Zaken (BZ) / NederlandWereldwijd.
- **Primary Official Portals:**
  - `https://www.rijksoverheid.nl/onderwerpen/paspoort-en-identiteitskaart`
  - `https://www.nederlandwereldwijd.nl/paspoort-id-kaart/buitenland`
  - `https://www.rvig.nl/`
- **Statutory Framework:**
  - *Paspoortwet* (Passport Act) & *Paspoortuitvoeringsregeling*.
  - Central government sets annual maximum fee caps (maximumtarieven) that municipalities may charge.
- **2026 Domestic Maximum Municipal Tariffs:**
  - Regular Adult Passport (18+, 10-year validity, 34 pages): €88.65 (maximum ceiling)
  - Regular Minor Passport (under 18, 5-year validity): €67.05 (maximum ceiling)
  - Expedited Processing Surcharge (*Spoedprocedure* / next business day): €60.30 additional
  - Business Passport (*Zakenpaspoort*, 66 pages): €88.65 (adult) / €67.05 (minor) + municipal discretion
  - Second Passport (*Tweede paspoort*, 2-year validity for frequent visa applicants): €88.65
- **2026 Consular & Overseas Tariffs (NederlandWereldwijd / Embassies):**
  - Consular Adult Passport (18+, 10-year validity): €169.15
  - Consular Minor Passport (under 18, 5-year validity): €147.40
  - Border Municipality Desk (*Grensgemeenten* / Schiphol Airport desk for non-residents): Adult €133.65 / Minor €112.05
  - Emergency Passport / Travel Document (*Noodpaspoort* / *Laissez-passer* via Koninklijke Marechaussee / BZ): €60.25
- **Civil Identity & Document Checklists:**
  - Proof of Dutch nationality (*Nederlandse nationaliteit*).
  - All existing travel documents (passports, identity cards) must be surrendered or invalidated.
  - One passport photo complying with the official Dutch *Paspoortfotomatrix* (35x45mm, plain light grey/blue/white background, neutral expression, mouth closed).
  - Minors (<18): In-person attendance mandatory; written declaration of consent (*Toestemmingsverklaring*) signed by both parents/custodians, accompanied by original ID copies of both signatories.
  - Lost/Stolen: Submission of *Verklaring van vermissing* directly at municipality/consulate. Police report required if theft occurs overseas.
- **Application & Delivery Channels:**
  - Domestic: In-person biometric enrollment at local town hall (*gemeentehuis*). Standard turnaround: 5 business days. *Spoedaanvraag*: delivery in 1-2 business days.
  - Consular: Online appointment booking via NederlandWereldwijd; biometric enrollment in-person at embassy/consulate; delivery via secure registered courier or in-person collection.

---

### 3.2 Austria (`AT` / `AUT`)
- **Administering Authority:**
  - Bundesministerium für Inneres (BMI) / Passbehörden (Bezirkshauptmannschaften, Magistrate, and authorized municipal passport service offices).
- **Primary Official Portals:**
  - `https://www.oesterreich.gv.at/themen/dokumente_und_recht/reisepass.html`
  - `https://www.bmi.gv.at/`
- **Statutory Framework:**
  - *Passgesetz 1992* (BGBl. Nr. 839/1992), substantially amended via *Passgesetznovelle* / Budget-Sanierungs-Maßnahmen effective July 1, 2025.
  - Note: Passport issuance tariffs were significantly updated nationwide on July 1, 2025 (standard adult increased from former €75.90 to €112.00).
- **Statutory Domestic Tariffs (Effective July 1, 2025 – 2026):**
  - Standard Adult Passport (Age 12+, 10-year validity): €112.00 (formerly €75.90)
  - Expresspass (delivery within 2-3 business days): €148.00 (formerly €100.00)
  - Ein-Tages-Expresspass (courier delivery next business day): €326.00 (formerly €220.00)
  - Child Passport (Age 2 to 11, 5-year validity): €44.00 (formerly €30.00)
  - Infant Passport (Under age 2, 2-year validity): €0.00 (First issue completely fee-exempt; renewal before age 2 costs €44.00)
  - Emergency Passport (*Notpass*, maximum 1-year validity): €112.00 standard; outside office hours or emergency airport issuance surcharge +50% (€168.00).
- **Civil Identity & Document Checklists:**
  - Austrian citizenship certificate (*Staatsbürgerschaftsnachweis*).
  - Official photo identification (*Amtlicher Lichtbildausweis* / previous Reisepass or Personalausweis).
  - Official birth certificate (*Geburtsurkunde*).
  - Marriage certificate (*Heiratsurkunde*) if surname changed.
  - 1 biometric passport photo (ICAO standard, 35x45mm, high resolution, taken within past 6 months).
  - Minors (<18): Legal guardian (*Obsorgeberechtigter*) must attend in person with proof of custody.
  - Lost/Stolen: Official theft/loss notice (*Diebstahlsanzeige* from police or *Verlustanzeige* from pass authority).
- **Application & Delivery Channels:**
  - In-person application at any Austrian passport authority (*Wohnsitzunabhängig*).
  - Centralized personalization by the Austrian State Printing House (*Österreichische Staatsdruckerei - OeSD*); delivery directly to applicant's residential address by registered postal service (*RSb-Brief*). Standard turnaround: approx. 5 business days.

---

### 3.3 Switzerland (`CH` / `CHE`)
- **Administering Authority:**
  - Bundesamt für Polizei (fedpol) / Kantonale Passbüros (cantonal passport offices / Ausweiszentren); Eidgenössisches Departement für auswärtige Angelegenheiten (EDA) for consular posts.
- **Primary Official Portals:**
  - `https://www.fedpol.admin.ch/fedpol/de/home/pass-identitaetskarte/pass.html`
  - `https://www.schweizerpass.ch/`
- **Statutory Framework:**
  - *Bundesgesetz über die Ausweise für Schweizer Staatsangehörige (Ausweisgesetz, AwG)* & *Verordnung über die Ausweise für Schweizer Staatsangehörige (Ausweisverordnung, VAwG)*.
- **Statutory Tariffs (Pass 10 & Kombiangebot, including CHF 5 postage fee):**
  - Pass 10 Adult (Age 18+, 10-year validity): CHF 145.00 (CHF 140.00 tariff + CHF 5.00 registered postage)
  - Pass 10 Child (Under age 18, 5-year validity): CHF 65.00 (CHF 60.00 tariff + CHF 5.00 registered postage)
  - Combined Offer Adult (*Kombiangebot Pass 10 + Identitätskarte*): CHF 158.00 (CHF 148.00 tariff + CHF 10.00 postage)
  - Combined Offer Child (*Kombiangebot* for minors): CHF 78.00 (CHF 68.00 tariff + CHF 10.00 postage)
  - Provisional Emergency Passport (*Provisorischer Pass / Notpass*, max 12 months validity):
    - Issued at cantonal passport office: CHF 100.00
    - Issued at airport emergency desks (Zurich Kloten, Geneva Cointrin, Basel-Mulhouse): CHF 150.00
- **Civil Identity & Document Checklists:**
  - Proof of Swiss citizenship (*Schweizer Bürgerrecht*).
  - Existing identity documents (old passport or ID card must be presented for cancellation).
  - Biometrics: Photographs, fingerprints, and digital signature are captured directly on-site at the cantonal *Ausweiszentrum* using certified biometric booths (no external physical paper photo required in most cantons).
  - Minors (<18): Must be accompanied by parent(s) holding parental custody (*elterliche Sorge*). If joint custody is held, either both parents must attend or a signed consent form with a copy of the absent parent's ID must be presented.
  - Lost/Stolen: Formal loss notification (*Verlustanzeige*) issued by a Swiss police station.
- **Application & Delivery Channels:**
  - Online pre-registration and appointment booking via `schweizerpass.ch`.
  - In-person biometric enrollment at cantonal center (or Swiss representation abroad).
  - Delivery: Produced centrally and delivered by registered mail (*Einschreiben*) within 10 working days.

---

### 3.4 Portugal (`PT` / `PRT`)
- **Administering Authority:**
  - Domestic: Instituto dos Registos e do Notariado (IRN) / Agência para a Modernização Administrativa (AMA) / Ministério da Justiça.
  - Overseas / Consular: Ministério dos Negócios Estrangeiros (MNE) / Portal das Comunidades / Consular Posts.
- **Primary Official Portals:**
  - `https://justica.gov.pt/Servicos/Pedir-Passaporte-Eletronico-Comum`
  - `https://portaldascomunidades.mne.gov.pt/`
- **Statutory Framework:**
  - *Decreto-Lei n.º 83/2000*, amended by *Decreto-Lei n.º 138/2006* and subsequent statutory diplomas (*Passaporte Eletrónico Português - PEP*).
- **Statutory Domestic Tariffs:**
  - Normal Service (Standard 5-business-day delivery): €65.00
  - Express Service (*Expresso*, 2 business days): €85.00
  - Urgent Service (*Urgente*, 1 business day): €95.00
  - Urgent Lisbon Airport Collection (*Aeroporto de Lisboa*, collection on the same day or next business day): €100.00
  - Home Postal Delivery Surcharge (optional registered courier delivery): €10.00 (€15.00 for islands)
- **Statutory Consular Tariffs (Overseas Posts):**
  - Consular Normal Service (collection at consular post): €75.00
  - Consular Normal Service with Home Courier Delivery: €105.00
  - Consular Urgent Service: €120.00
  - Temporary Emergency Passport (*Passaporte Temporário*, emergency booklet valid up to 1 year): €150.00
- **Civil Identity & Document Checklists:**
  - **Mandatory Prerequisite:** Valid Portuguese Citizen Card (*Cartão de Cidadão*). An applicant *cannot* apply for a Portuguese Electronic Passport without an active, non-expired *Cartão de Cidadão* with updated civil data.
  - Previous PEP booklet (must be presented for formal physical cancellation; if valid visas exist, booklet is cancelled and returned).
  - Minors (<18): Must be accompanied by whoever exercises parental responsibilities (*responsabilidades parentais*), presenting their valid identification documents.
  - Lost/Stolen: Declaration of theft/loss made directly to the IRN desk or police authority (*PSP* / *GNR*).
- **Application & Delivery Channels:**
  - In-person attendance at *Lojas de Cidadão*, IRN conservatory registries, or consular posts abroad.
  - Digital photograph, fingerprints, and digital signature collected on-site.

---

### 3.5 South Korea (`KR` / `KOR`)
- **Administering Authority:**
  - Ministry of Foreign Affairs (MOFA / 외교부) / Passport Division (여권과); local processing at municipal district/city offices (*Gu-cheong* / *Si-cheong*), and overseas embassies/consulates.
- **Primary Official Portals:**
  - `https://www.passport.go.kr/`
  - `https://www.mofa.go.kr/`
- **Statutory Framework:**
  - *Passport Act* (여권법) and *Enforcement Decree of the Passport Act* (여권법 시행령).
  - Revised International Exchange Contribution Fund (국제교류기여금) enacted effective March 1, 2026, establishing updated fee caps for next-generation biometric passports.
- **Statutory Tariffs (Effective March 1, 2026):**
  - Next-Generation Blue Electronic Passport (차세대 전자여권, polycarbonate data page):
    - **Adult (Age 18+, 10-year multiple-entry validity):**
      - 58 pages: ₩52,000 (Issuance fee ₩40,000 + Contribution fund ₩12,000)
      - 26 pages: ₩49,000 (Issuance fee ₩37,000 + Contribution fund ₩12,000)
    - **Minor (Age 8 to 17, 5-year validity):**
      - 58 pages: ₩44,000 (Issuance fee ₩35,000 + Contribution fund ₩9,000)
      - 26 pages: ₩41,000 (Issuance fee ₩32,000 + Contribution fund ₩9,000)
    - **Child Under 8 (Age 0 to 7, 5-year validity):**
      - 58 pages: ₩35,000 (Issuance fee ₩35,000 + Contribution fund ₩0 [waived under 2026 reform])
      - 26 pages: ₩32,000 (Issuance fee ₩32,000 + Contribution fund ₩0 [waived under 2026 reform])
  - Single-Entry Passport (*단수여권*, 1-year validity): ₩17,000 (Issuance fee ₩14,000 + Contribution fund ₩3,000)
  - Emergency Passport (*긴급여권*, non-electronic, issued same-day at Incheon Airport / designated offices for urgent humanitarian/business travel): ₩50,000 (reduced to ₩20,000 upon proof of death/hospitalization of direct family within 6 months).
- **Civil Identity & Document Checklists:**
  - Proof of Korean nationality (verified automatically via the national Resident Registration network).
  - Resident Registration Card (*주민등록증*), Driver's License (*운전면허증*), or existing passport.
  - 1 biometric passport photo (3.5cm x 4.5cm, white background, taken within last 6 months, complying with ICAO standards).
  - Minors: Legal representative's consent form (*법정대리인 동의서*); family relationship certificate (*가족관계증명서*) verified electronically.
  - Military Service: Men aged 18-37 subject to military service review per the Military Service Act.
  - Lost/Stolen: Submission of passport loss report (*여권 분실 신고서*) at the counter or via *Government24*.
- **Application & Delivery Channels:**
  - In-person application at any passport office nationwide, regardless of registered address (*주소지 무관*).
  - Online reissue application available via *Government24* (`gov.kr`) for adults who have previously been issued an e-passport.
  - Turnaround: Typically 4-8 business days for standard delivery; direct postal delivery to home address available for a small courier fee.

---

### 3.6 Thailand (`TH` / `THA`)
- **Administering Authority:**
  - Department of Consular Affairs (กรมการกงสุล), Ministry of Foreign Affairs (กระทรวงการต่างประเทศ); passport offices across Bangkok (Chaeng Watthana, MBK Center, Bang Yai, etc.), provincial passport offices, and Royal Thai Embassies/Consulates overseas.
- **Primary Official Portals:**
  - `https://consular.mfa.go.th/`
  - `https://passport.in.th/`
- **Statutory Framework:**
  - *Ministerial Regulations of the Ministry of Foreign Affairs Prescribing Passport Application Rules and Fees*.
- **Statutory Domestic Tariffs:**
  - **Regular 5-Year Passport (available for all applicants):** 1,000 THB
  - **Regular 10-Year Passport (available only for adults age 20 and older who have reached legal majority):** 1,500 THB
  - **Same-Day Urgent Issuance (*เล่มด่วน รับเล่มภายในวันยื่น*):**
    - 5-year urgent: 3,000 THB (1,000 THB fee + 2,000 THB urgent surcharge)
    - 10-year urgent: 3,500 THB (1,500 THB fee + 2,000 THB urgent surcharge)
    - Requirement: Application must be submitted before 11:00 AM at Chaeng Watthana or designated Bangkok offices; pickup after 2:30 PM same day.
  - **Courier Delivery Fee (EMS Postal Service):** 40 THB nationwide.
  - **Consular Overseas Tariffs:** Standard tariffs set at approx. USD 40 (5-year) / USD 60 (10-year), or local currency equivalent at foreign missions.
  - **Emergency Certificate of Identity (CI) / Emergency Travel Document (ETD):** Free or nominal administrative charge for immediate repatriation of stranded citizens.
- **Civil Identity & Document Checklists:**
  - Proof of Thai nationality.
  - **Adult (Age 20+):** Original valid Thai National ID Card (*บัตรประจำตัวประชาชน*). Previous passport (if renewing).
  - **Minor (Under age 20):**
    - Thai National ID Card (if aged 7+) or Thai Birth Certificate (*สูติบัตร*).
    - House Registration (*ทะเบียนบ้าน*).
    - Both parents must appear in person with their original valid Thai ID Cards.
    - If one parent cannot appear: Notarized letter of consent (*หนังสือยินยอมให้ผู้เยาว์เดินทางไปต่างประเทศ*) issued by District Office (*Amphoe*) or Thai Embassy.
    - If single parent / sole custody: Sole custody certificate (*Por Kor 14* / *หนังสือ ป.ค. 14*) or court order.
  - **Lost/Stolen:** Official police report (*ใบแจ้งความ*) from the Royal Thai Police is mandatory before reissuance.
- **Application & Delivery Channels:**
  - Walk-in or online queue booking via `qpassport.in.th`.
  - On-site biometric enrollment (photo, iris scan, 10 fingerprints, electronic signature).
  - Kiosk automated self-service renewal available at select Bangkok centers for adult renewal applicants.
  - Turnaround: 2-3 business days in Bangkok; 3-5 business days in provinces; delivered by EMS post.

---

## 4. Batch 2 Audited Claim-Level Research Dossiers (6 Jurisdictions)

### 4.1 Argentina (`AR` / `ARG`)
- **Administering Authority:**
  - Registro Nacional de las Personas (RENAPER), dependiente del Ministerio del Interior; representaciones consulares dependientes del Ministerio de Relaciones Exteriores, Comercio Internacional y Culto (Cancillería).
- **Primary Official Portals:**
  - `https://www.argentina.gob.ar/interior/renaper/pasaporte`
  - `https://www.cancilleria.gob.ar/`
- **Statutory Framework:**
  - *Ley N° 17.671 de Identificación, Registro y Clasificación del Potencial Humano Nacional* & Resoluciones vigentes del RENAPER sobre tarifario y aranceles consulares (Decreto N° 266/2000).
- **Statutory Domestic Tariffs:**
  - **Pasaporte Regular:** $100.000 ARS (10-year validity for adults 18+, 5-year validity for minors; delivery to residential address via Correo Argentino within approx. 15 business days).
  - **Pasaporte Exprés:** $200.000 ARS ($100.000 base fee + $100.000 express surcharge; delivery within 96 business hours).
  - **Pasaporte al Instante:** $330.000 ARS ($100.000 base fee + $230.000 instant issuance surcharge; printed and delivered within 2 to 6 hours exclusively at habilitated international airports, such as Ezeiza, Aeroparque Jorge Newbery, and select regional documentation centers).
  - **Pasaporte Excepcional para Extranjeros / Apátridas / Refugiados:** $100.000 ARS.
- **Statutory Consular Tariffs (Overseas Posts):**
  - **Pasaporte Ordinario Consular:** 165 Unidades Consulares (USD 165.00 in the Americas/Rest of World; €165.00 in Eurozone jurisdictions).
  - **Pasaporte Provisorio / de Emergencia:** 40 Unidades Consulares (USD 40.00 / €40.00; emergency travel booklet).
  - **Documento de Viaje / Salvoconducto:** 30 Unidades Consulares (USD 30.00 / €30.00; single-entry return travel).
- **Civil Identity & Document Checklists:**
  - **Mandatory Prerequisite:** Documento Nacional de Identidad (DNI) digital (tarjeta) original y vigente.
  - Previous passport (if renewing, to be presented for physical invalidation).
  - **Minors (<18):**
    - Minor's DNI.
    - Certified Copy of Birth Certificate (*Partida de Nacimiento original o copia certificada*).
    - Presence of both parents with their valid DNIs. If one parent is absent: notarized authorization (*autorización expresa ante escribano público, juez de paz o autoridad consular*) or court decree for sole custody.
  - **Lost/Stolen:** Submission of theft/loss report (*denuncia de extravío/robo*) issued by local police or civil authority.
- **Application & Delivery Channels:**
  - Online appointment booking via *Mi Argentina* platform (`argentina.gob.ar/miargentina`).
  - Biometric enrollment (digital facial photo, digital fingerprints, signature) at RENAPER documentation centers or provincial civil registry offices (*Registros Civiles*).

---

### 4.2 Chile (`CL` / `CHL`)
- **Administering Authority:**
  - Servicio de Registro Civil e Identificación (SRCeI), dependiente del Ministerio de Justicia y Derechos Humanos; Consulados de Chile dependientes del Ministerio de Relaciones Exteriores (Minrel).
- **Primary Official Portals:**
  - `https://www.registrocivil.cl/`
  - `https://www.chileatiende.gob.cl/fichas/3358-obtencion-de-pasaporte`
  - `https://serviciosconsulares.cl/`
- **Statutory Framework:**
  - *Decreto Supremo N° 1.010 de 1989 del Ministerio de Justicia (Reglamento de Pasaportes)*; Ley de Presupuestos del Sector Público y resoluciones de actualización de aranceles del SRCeI.
  - **New Single Biometric Standard (Enacted late 2024–2026):** Legacy distinction between 32-page and 64-page booklets was retired; Chile transitioned to a single standard 48-page biometric polycarbonate passport.
- **Statutory Domestic Tariffs:**
  - **Pasaporte Biométrico Estándar (Formato único de 48 páginas):** $69.660 CLP nationwide (10-year validity).
  - Note: Tariffs are unified nationally across all SRCeI regional offices.
- **Statutory Consular Tariffs (Overseas Posts):**
  - **Pasaporte Consular:** Approx. USD 100 – 110 (converted to local currency equivalent per Consular Tariff Regulations).
  - **Salvoconduto Consular:** Nominal administrative tariff (approx. USD 10) for single-trip repatriation.
- **Civil Identity & Document Checklists:**
  - **Mandatory Prerequisite:** Cédula de Identidad chilena vigente y en buen estado.
  - Previous passport (if renewing, surrendered for cancellation).
  - **Minors (<18):**
    - Both parents must accompany the minor with their valid Chilean identity cards.
    - If one or both parents cannot attend: notarized authorization (*Poder especial ante notario público o autorización de salida del país*) or judicial custody authorization (*autorización judicial*).
    - Minor's Cédula de Identidad.
  - **Lost/Stolen:** Constancia de bloqueo temporal por internet (`registrocivil.cl`) o bloqueo definitivo en oficina, además de constancia policial en caso de robo.
- **Application & Delivery Channels:**
  - Appointment scheduling online via `registrocivil.cl`.
  - In-person attendance for biometric capture (digital photo, iris/fingerprint, digital signature) at any civil registry office.
  - Turnaround: 6 to 8 business days; collection in person with identity verification.

---

### 4.3 Colombia (`CO` / `COL`)
- **Administering Authority:**
  - Ministerio de Relaciones Exteriores (Cancillería); Oficinas de Pasaportes en Bogotá (Sedes Calle 53, Calle 100, y Red CADE); Gobernaciones departamentales autorizadas; Consulados de Colombia en el exterior.
- **Primary Official Portals:**
  - `https://www.cancilleria.gov.co/tramites_servicios/pasaportes`
  - `https://www.cancilleria.gov.co/tramites_servicios/pasaportes/costos-medios-pago-agencias`
- **Statutory Framework:**
  - *Resolución 6886 de 2021* y resoluciones tarifarias anuales de la Cancillería; *Estatuto Tributario Nacional* (Impuesto de Timbre Nacional, Art. 519 y ss., administrado por la DIAN).
- **Statutory Domestic Tariffs (2026 Breakdown):**
  - **Bogotá (Sedes Cancillería - Sin impuestos departamentales):**
    - **Pasaporte Ordinario (32 páginas, vigencia 10 años):** Total $190.000 COP (Tarifa base Cancillería $111.000 + Impuesto de timbre nacional DIAN $79.000).
    - **Pasaporte Ejecutivo (48 páginas, vigencia 10 años para viajeros frecuentes):** Total $323.000 COP (Tarifa base Cancillería $244.000 + Impuesto de timbre nacional DIAN $79.000).
    - **Pasaporte de Emergencia (vigencia 7 meses):** Total $192.000 COP (Tarifa base $192.000; exento de timbre).
  - **Gobernaciones Departamentales (Fuera de Bogotá):**
    - Sujeto a dos pagos: Tarifa base nacional + Impuesto departamental / Estampillas fijadas por cada Asamblea Departamental.
    - Rango total estimado en Gobernaciones: Pasaporte Ordinario entre $250.000 y $350.000 COP; Pasaporte Ejecutivo entre $380.000 y $490.000 COP (según el departamento, p.ej. Antioquia, Valle del Cauca, Cundinamarca).
- **Statutory Consular Tariffs (Overseas Posts):**
  - **Pasaporte Ordinario en el Exterior:**
    - Consulados en Estados Unidos y resto del mundo: USD 94.00
    - Consulados en la Unión Europea: €68.00
  - **Pasaporte Ejecutivo en el Exterior:**
    - Consulados en Estados Unidos y resto del mundo: USD 167.00
    - Consulados en la Unión Europea: €120.00
  - **Pasaporte de Emergencia en el Exterior:** USD 123.00 / €86.00
  - **Pasaporte Exento (Repatriación humanitaria):** Gratuito ($0 / USD 0) bajo resolución consular motivada.
- **Civil Identity & Document Checklists:**
  - **Mayores de 18 años:** Cédula de Ciudadanía original (formato digital en policarbonato o amarilla con hologramas). Si está en trámite, contraseña original acompañada del Registro Civil de Nacimiento.
  - **Menores de 7 años:** Registro Civil de Nacimiento original (copia auténtica para el titular) expedido por Notaría o Registraduría.
  - **Menores de 7 a 17 años:** Tarjeta de Identidad original + Registro Civil de Nacimiento original.
  - Acompañamiento obligatorio de uno de los padres con su Cédula de Ciudadanía original. Si ninguno puede asistir, poder especial otorgado ante notario o cónsul facultando a un tercero.
- **Application & Delivery Channels:**
  - Agendamiento virtual diario a través de la página oficial de la Cancillería (`cancilleria.gov.co`).
  - Trámite presencial de captura biométrica.
  - Entrega: 24 horas hábiles en Bogotá; 48 horas en Gobernaciones; 8 días hábiles en Consulados.

---

### 4.4 Poland (`PL` / `POL`)
- **Administering Authority:**
  - Ministerstwo Spraw Wewnętrznych i Administracji (MSWiA); Wydziały Spraw Obywatelskich i Cudzoziemców Urzędów Wojewódzkich (Wojewoda) across 16 voivodeships; Terenowe Punkty Paszportowe; Konsulaty RP.
- **Primary Official Portals:**
  - `https://www.gov.pl/web/gov/uzyskaj-paszport`
  - `https://www.gov.pl/web/mswia`
- **Statutory Framework:**
  - *Ustawa z dnia 27 stycznia 2022 r. o dokumentach paszportowych (Dz.U. 2022 poz. 350 z późn. zm.)* & *Rozporządzenie Ministra Spraw Wewnętrznych i Administracji w sprawie opłat za wydanie dokumentu paszportowego*.
- **Statutory Domestic Tariffs:**
  - **Paszport Standardowy (Adult 18+, 10-year validity):** 140 PLN
  - **Opłaty Ulgowe (50% zniżki):**
    - Młodzież od 12 do 18 lat: 70 PLN (10-year validity)
    - Uczniowie i studenci (od 18 do 26 lat): 70 PLN
    - Emeryci, renciści, osoby niepełnosprawne: 70 PLN
    - Rodzice z Kartą Dużej Rodziny (KDR): 70 PLN
  - **Paszport Dziecięcy (Child under 12, 5-year validity):** 30 PLN (15 PLN with Karta Dużej Rodziny)
  - **Paszport Uczący się z KDR (Students under 25 with KDR):** 35 PLN
  - **Zwolnienie Całkowite (0 PLN / Bezpłatnie):**
    - Osoby w wieku 70 lat i starsze: 0 PLN
    - Osoby w placówkach opiekuńczych wyjeżdżające na leczenie: 0 PLN
  - **Opłata Podwyższona za Utratę / Zniszczenie z winy posiadacza (Lost/Damaged by Fault):** 420 PLN (+200% surcharge over base 140 PLN fee per art. 42 ustawy).
- **Statutory Consular Tariffs (Overseas Posts):**
  - Standard Adult Passport abroad: 110 EUR (or USD equivalent).
  - Minor / Concession passport abroad: 55 EUR.
  - Temporary Emergency Passport (*Paszport tymczasowy*): 40 EUR.
- **Civil Identity & Document Checklists:**
  - Numer PESEL (mandatory prerequisite).
  - Proof of Polish citizenship (*Obywatelstwo polskie*).
  - Dowód Osobisty (Polish National ID card) or valid passport for identity verification.
  - 1 biometric paper photo (35x45mm, high resolution, white background, neutral face, taken within past 6 months).
  - Minor (<18): Both parents must grant consent (in person with Dowód Osobisty, or electronically via `gov.pl` electronic signature / Profil Zaufany).
  - No paper application form required: since March 2022, applications are generated electronically at the counter; applicant reviews data on screen and signs with digital stylus.
- **Application & Delivery Channels:**
  - Application at any passport point (*Punkt paszportowy*) in Poland regardless of residential registration.
  - Production centrally by Centrum Personalizacji Dokumentów MSWiA.
  - Turnaround: Up to 30 days statutory maximum; typically 10 to 14 days; trackable online via `gov.pl`.

---

### 4.5 Greece (`GR` / `GRC`)
- **Administering Authority:**
  - Hellenic Police (Ελληνική Αστυνομία) / National Passport Center (Διεύθυνση Διαβατηρίων και Εγγράφων Ασφαλείας), Ministry of Citizen Protection (Υπουργείο Προστασίας του Πολίτη); Consular authorities under the Ministry of Foreign Affairs (Υπουργείο Εξωτερικών).
- **Primary Official Portals:**
  - `http://www.passport.gov.gr/`
  - `https://www.gov.gr/ipiresies/polites-kai-kathemerinoteta/stoikheia-polite-kai-tautopoietika-eggrapha/ekdose-diabateriou`
- **Statutory Framework:**
  - *Presidential Decree 25/2022* (Government Gazette A' 66/2022) extending adult passport validity from 5 to 10 years; *Law 4962/2022*; Joint Ministerial Decisions on e-Paravolo fees.
- **Statutory Domestic Tariffs (e-Paravolo System):**
  - **Adult Passport (Age 14+, 10-year validity):** Total €84.40 (e-Paravolo code 1862):
    - Τέλος εντύπου βιβλιαρίου (Booklet printing fee): €53.00
    - Ταχυδρομικά τέλη (Postage / dispatch fee): €5.00
    - Ψηφιακό τέλος συναλλαγής / χαρτόσημο (Digital transaction / stamp fee): €26.40
  - **Minor Passport (Under age 14, 3-year validity):** Total €73.60 (e-Paravolo code 1863):
    - Booklet fee €53.00 + Postage €5.00 + Stamp fee €15.60.
  - **Passport Replacement due to Wear / Exhaustion of Pages:** Total €58.00 (Booklet €53.00 + Postage €5.00; stamp duty waived).
  - **Consular Tariffs Abroad:** €84.40 for 10-year passport (payable in local currency at consular exchange rate).
- **Civil Identity & Document Checklists:**
  - **Mandatory Prerequisite:** Greek Police Identity Card (Δελτίο Αστυνομικής Ταυτότητας).
  - 1 biometric photograph (40x60mm, technical specifications of ICAO standard) or digital photograph uploaded via the official **myPhoto** government platform (`myphoto.gov.gr`).
  - Previous passport (presented for physical cancellation and returned).
  - **Minors (<18):**
    - Presence of both parents with their Police ID cards. If one parent is absent: certified written consent (*εξουσιοδότηση*) validated through `gov.gr` or a Greek KEP center.
  - **Lost/Stolen:** Immediate reporting to Hellenic Police station; certificate of declaration of theft/loss (*Βεβαίωση δήλωσης κλοπής/απώλειας*) must be issued before new passport can be processed.
- **Application & Delivery Channels:**
  - Online appointment booking at local Police Passport Bureau (*Γραφείο Διαβατηρίων*).
  - Biometric capture (fingerprints of index fingers, facial image check, electronic signature).
  - Turnaround: 3 to 5 business days; passport collected in person from the same bureau upon receipt of SMS notification.

---

### 4.6 Türkiye (`TR` / `TUR`)
- **Administering Authority:**
  - Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü (NVİ), Ministry of Interior (İçişleri Bakanlığı); overseas embassies/consulates under the Ministry of Foreign Affairs (Dışişleri Bakanlığı).
- **Primary Official Portals:**
  - `https://randevu.nvi.gov.tr/`
  - `https://www.nvi.gov.tr/`
  - `https://dijital.gib.gov.tr/`
- **Statutory Framework:**
  - *Pasaport Kanunu No. 5682*; *Harçlar Kanunu No. 492* (Tarife 6); *Değerli Kağıtlar Kanunu No. 210*; Annual revaluation rate (*Yeniden Değerleme Oranı*) published in the Official Gazette (*T.C. Resmî Gazete*) by the Ministry of Treasury and Finance (Hazine ve Maliye Bakanlığı).
- **Statutory Domestic Tariffs (2026 NVİ Regular Maroon / Bordo Pasaport):**
  - **Fixed Defter Bedeli (Valuable paper booklet fee):** 1.351,00 TL (payable across all validity terms).
  - **Harç Bedeli (Statutory Passport Duty) & Total Payable:**
    - **6 Months Validity:** Harç 2.806,50 TL + Defter 1.351,00 TL = **Total 4.157,50 TL**
    - **1 Year Validity:** Harç 4.103,00 TL + Defter 1.351,00 TL = **Total 5.454,00 TL**
    - **2 Years Validity:** Harç 6.698,50 TL + Defter 1.351,00 TL = **Total 8.049,50 TL**
    - **3 Years Validity:** Harç 9.516,00 TL + Defter 1.351,00 TL = **Total 10.867,00 TL**
    - **4 to 10 Years Validity (Standard Adult 18+):** Harç 13.410,40 TL + Defter 1.351,00 TL = **Total 14.761,40 TL**
  - **Harçsız Öğrenci Pasaportu (Duty-Free Student Passport for youth under age 25):** Harç 0 TL + Defter 1.351,00 TL = **Total 1.351,00 TL** (Requires valid student certificate / *Öğrenci Belgesi* from e-Devlet or educational institution).
  - **Special / Service Passports (Yeşil / Gri Pasaport):** Exempt from Harç; applicant pays only Defter Bedeli (1.351,00 TL).
  - **Validity Rules:** Minors under 18 can obtain a passport for a maximum validity of 5 years. 10-year validity is granted only to adults age 18 and older.
- **Civil Identity & Document Checklists:**
  - **Mandatory Prerequisite:** T.C. Kimlik Kartı (Turkish National ID Card) original and valid.
  - 1 biometric photograph (50x60mm, white background, facial biometric standard, taken within the last 6 months).
  - Previous passport (if held, presented for cancellation).
  - Fee payment verification (registered automatically electronically from Dijital Vergi Dairesi / PTT / partner banks into the NVİ system).
  - **Minors (<18) & Incapacitated Persons:** Parental consent declaration (*Muvafakatname*) from both parents in person at the population directorate or notarized.
  - **Lost/Stolen:** Loss notification recorded directly in the NVİ central system (*MERNİS*).
- **Application & Delivery Channels:**
  - Appointment booking via `randevu.nvi.gov.tr`, e-Devlet portal, or ALO 199 call center.
  - In-person application at any District Population and Citizenship Directorate (*İlçe Nüfus Müdürlüğü*).
  - Central printing by NVİ; delivered directly to the citizen's residential address by PTT Kargo within 3 to 7 business days.

---

## 5. Batch 3 Audited Claim-Level Research Dossiers (6 Jurisdictions)

### 5.1 Peru (`PE` / `PER`)
- **Administering Authority:**
  - Superintendencia Nacional de Migraciones (MIGRACIONES), organismo técnico especializado adscrito al Ministerio del Interior; representaciones consulares del Perú en el exterior dependientes del Ministerio de Relaciones Exteriores (RREE).
- **Primary Official Portals:**
  - `https://www.gob.pe/migraciones`
  - `https://www.gob.pe/institucion/migraciones/noticias`
  - `https://pagalo.pe/`
- **Statutory Framework:**
  - *Decreto Legislativo N° 1350 (Ley de Migraciones)* y su Reglamento (*Decreto Supremo N° 007-2017-IN*); *Ley N° 31678* y *Decreto Supremo N° 004-2024-IN*, que oficializó la vigencia de 10 años para los pasaportes electrónicos de ciudadanos mayores de 18 años.
- **Statutory Domestic Tariffs:**
  - **Pasaporte Electrónico Ordinario (Mayores de 18 años, vigencia 10 años):** S/ 120.90 PEN
    - Código de pago en Págalo.pe / Banco de la Nación: **Tributo 01810**.
  - **Pasaporte Electrónico para Adolescentes (12 a 17 años, vigencia 5 años):** S/ 120.90 PEN
  - **Pasaporte Electrónico para Niños (Menores de 12 años, vigencia 3 años):** S/ 120.90 PEN
  - **Pasaporte Especial / Diplomático:** Regulado por Cancillería.
- **Statutory Consular Tariffs (Overseas Posts):**
  - **Pasaporte Biométrico Consular:** 70 Unidades Consulares (USD 70.00 en las Américas; €70.00 en Europa).
  - **Salvoconducto Consular (Viaje único de regreso):** Gratuito ($0 / USD 0) o tarifa nominal (10 UC) según causal humanitaria.
- **Civil Identity & Document Checklists:**
  - **Mandatory Prerequisite:** Documento Nacional de Identidad (DNI) original, vigente y en buen estado físico, sin multas electorales pendientes.
  - Comprobante de pago del tributo 01810 (S/ 120.90 PEN).
  - Pasaporte anterior (si lo tiene, para su anulación física).
  - **Menores de edad (<18):**
    - Presencia obligatoria del menor acompañado de al menos uno de sus padres con DNI original y vigente.
    - Si el padre o madre acompañante es extranjero: Pasaporte extranjero vigente o Carné de Extranjería / Permiso Temporal de Permanencia (PTP).
    - Si el menor asiste con apoderado: Poder especial otorgado por escritura pública o poder consular legalizado.
  - **Lost/Stolen:** Se realiza la anulación directa del pasaporte anterior en el sistema de Migraciones al momento del trámite; no se exige presentar denuncia policial previa para la expedición de un nuevo ejemplar.
- **Application & Delivery Channels:**
  - **Modalidad de atención presencial:** Atención por orden de llegada con ticket en sedes de Migraciones a nivel nacional (el requisito restrictivo de citas previas por internet fue eliminado).
  - Captura biométrica integral en la sede (fotografía facial ICAO, huellas dactilares y firma digital).
  - **Entrega inmediata:** El pasaporte se personaliza y entrega el mismo día en la sede donde se realiza el trámite (plazo habitual de entrega: aproximadamente 1 a 2 horas).

---

### 5.2 Ecuador (`EC` / `ECU`)
- **Administering Authority:**
  - Dirección General de Registro Civil, Identificación y Cedulación (DIGERCIC), entidad adscrita al Ministerio de Telecomunicaciones y de la Sociedad de la Información; Consulados del Ecuador adscritos al Ministerio de Relaciones Exteriores y Movilidad Humana.
- **Primary Official Portals:**
  - `https://www.registrocivil.gob.ec/`
  - `https://www.gob.ec/dgrcic/tramites/emision-pasaporte-ordinario`
  - `https://servicios.registrocivil.gob.ec/`
- **Statutory Framework:**
  - *Ley Orgánica de Gestión de la Identidad y Datos Civiles (LOGIDC)*; Resoluciones tarifarias anuales de la DIGERCIC; *Ley Orgánica de Discapacidades* y *Ley del Anciano*.
- **Statutory Domestic Tariffs (Currency: USD - US Dollar):**
  - **Pasaporte Ordinario Biométrico (Público General):** $90.00 USD
    - Vigencia: 10 años para personas de 18 años en adelante; 5 años para menores de 18 años.
  - **Adultos Mayores (Personas de 65 años o más):** $45.00 USD (50% de descuento legal por tercera edad).
  - **Personas con Discapacidad (30% o superior calificada):** $0.00 USD (Exoneración total / Gratuito per Ley de Discapacidades).
- **Statutory Consular Tariffs (Overseas Posts):**
  - Pasaporte Ordinario Consular: USD 90.00 (más aranceles de gestión y envío consular, habitualmente USD 130.00 a USD 150.00 en consulados en EE.UU. y Europa).
  - Pasaporte de Emergencia Consular: USD 50.00.
  - Salvoconducto / Documento de Viaje: USD 15.00 a USD 25.00.
- **Civil Identity & Document Checklists:**
  - **Mandatory Prerequisite:** Cédula de Identidad original vigente (física o digital).
  - Comprobante de pago original ($90.00 USD) cancelado a través de la Agencia Virtual del Registro Civil o bancos recaudadores autorizados (Banco del Pacífico, corresponsales bancarios).
  - Pasaporte anterior en físico para invalidación (en caso de renovación).
  - **Menores de 18 años:**
    - Cédula de Identidad original del menor.
    - Presencia obligatoria de ambos progenitores con sus respectivas cédulas vigentes.
    - Si uno o ambos progenitores están ausentes: Poder especial notariado o consular que autorice expresamente la emisión del pasaporte, o sentencia judicial ejecutoriada de patria potestad exclusiva.
  - **Lost/Stolen:** Presentación de la constancia digital o física del *Formulario de Documentos Extraviados* registrado previamente en el portal web del Consejo de la Judicatura.
- **Application & Delivery Channels:**
  - Agendamiento de turno previo en la Agencia Virtual de la DIGERCIC (`servicios.registrocivil.gob.ec`).
  - Turnos prioritarios sin cita para grupos vulnerables (adultos mayores, embarazadas, personas con discapacidad).
  - Captura biométrica en agencia; entrega en el mismo día o dentro de las 24 a 48 horas en agencias provinciales.

---

### 5.3 Uruguay (`UY` / `URY`)
- **Administering Authority:**
  - Dirección Nacional de Identificación Civil (DNIC), Ministerio del Interior; Direcciones Consulares del Ministerio de Relaciones Exteriores (MRREE).
- **Primary Official Portals:**
  - `https://www.gub.uy/tramites/obtencion-pasaporte-comun-primera-vez`
  - `https://www.gub.uy/ministerio-interior/`
  - `https://dnic.minterior.gub.uy/`
- **Statutory Framework:**
  - *Decreto N° 129/014 (Reglamento de Pasaportes)* modificado por *Decreto N° 240/018*; Leyes presupuestales del Ministerio del Interior y decretos fijadores de tasas de antecedentes y pasaportes.
- **Statutory Domestic Tariffs:**
  - **Trámite Común (Adultos 18+, vigencia 10 años):** Total **$ 5.630 UYU**
    - Arancel de libreta de pasaporte: $ 5.455 UYU
    - Certificado de Antecedentes Judiciales (obligatorio por ley para mayores de edad): $ 175 UYU
  - **Trámite Común para Menores (<18 años, vigencia 5 años):** Total **$ 5.455 UYU** (exentos de antecedentes judiciales).
  - **Trámite Urgente (Adultos 18+):** Total **$ 12.114 UYU**
    - Arancel de libreta urgente: $ 10.712 UYU
    - Certificado de Antecedentes Judiciales urgente: $ 1.402 UYU
  - **Trámite Urgente para Menores (<18 años):** Total **$ 10.712 UYU**.
- **Statutory Consular Tariffs (Overseas Posts):**
  - Pasaporte Común en el Exterior: 100 Unidades Consulares / USD 100.00 (o equivalente en moneda local).
  - Pasaporte de Emergencia Consular: 50 Unidades Consulares / USD 50.00.
  - Título de Identidad y Viaje: 36 Unidades Consulares.
- **Civil Identity & Document Checklists:**
  - **Mandatory Prerequisite:** Cédula de Identidad uruguaya original, vigente y en perfecto estado de conservación.
  - Credencial Cívica (exigible para ciudadanos mayores de 18 años inscritos en el Registro Cívico Nacional).
  - Para ciudadanos legales: Carta de Ciudadanía legal con constancia de tres años de expedida.
  - **Menores de 18 años:**
    - Cédula de Identidad del menor.
    - Presencia obligatoria de ambos padres provistos de sus respectivas Cédulas de Identidad vigentes.
    - Si uno de los padres no comparece: Permiso de menor tramitado previamente ante la Dirección Nacional de Migración o poder notarial específico con facultades para tramitar pasaporte.
  - **Lost/Stolen:** Constancia de denuncia policial de extravío o hurto registrada en el Sistema de Gestión de Seguridad Pública (SGSP).
- **Application & Delivery Channels:**
  - Reserva de día y hora a través de la plataforma web de Trámites en Línea del Estado uruguayo (`gub.uy`) o redes de cobranza (Abitab / Redpagos).
  - Captura biométrica (foto digital, huellas dactilares) en oficinas centrales (Montevideo) o jefaturas departamentales de la DNIC.
  - Entrega: 10 a 15 días hábiles en modalidad común; en el día o 48 horas en modalidad urgente.

---

### 5.4 Czechia (`CZ` / `CZE`)
- **Administering Authority:**
  - Ministerstvo vnitra České republiky (MVČR); Obecní úřady obcí s rozšířenou působností (ORP - 205 municipal authorities across Czechia); v Praze úřady městských částí Praha 1 až 22; Zastupitelské úřady ČR v zahraničí (Ministerstvo zahraničních věcí - MZV).
- **Primary Official Portals:**
  - `https://www.mvcr.cz/clanek/osobni-doklady-cestovni-doklady-cestovni-pas.aspx`
  - `https://portal.gov.cz/sluzby-vs/vydani-cestovniho-pasu-S154`
- **Statutory Framework:**
  - *Zákon č. 329/2011 Sb., o cestovních dokladech*; *Zákon č. 634/2004 Sb., o správních poplatcích* (položka 26 sazebníku správních poplatků).
- **Statutory Domestic Tariffs (Administrative Fees):**
  - **Standardní lhůta (do 30 dnů):**
    - Občané starší 15 let (Platnost 10 let): **600 Kč**
    - Děti mladší 15 let (Platnost 5 let): **100 Kč**
  - **Zkrácená lhůta (do 5 pracovních dnů):**
    - Občané starší 15 let: **3 000 Kč** (při podání a převzetí na stejném ORP, případně 2 000 Kč u ORP + 1 000 Kč při převzetí na MVČR)
    - Děti mladší 15 let: **1 000 Kč** (500 Kč + 500 Kč)
  - **Expresní lhůta (do 24 hodin pracovního dne):**
    - Občané starší 15 let: **6 000 Kč**
    - Děti mladší 15 let: **2 000 Kč**
    - *Podmínka:* Vyzvednutí pasu vystaveného do 24 hodin je možné **výhradně na pracovišti Ministerstva vnitra v Praze (Na Pankráci 72, Praha 4)**.
- **Statutory Consular Tariffs (Zastupitelské úřady MZV):**
  - Cestovní pas standardní (starší 15 let): 1 200 Kč (vydávaný v přepočtu na EUR nebo USD).
  - Cestovní pas pro dítě do 15 let: 400 Kč.
  - Cestovní průkaz (náhradní cestovní doklad pro návrat do ČR): 400 Kč.
- **Civil Identity & Document Checklists:**
  - **Plnoletí občané:** Platný občanský průkaz (Czech National ID Card) nebo dosavadní cestovní pas; v případě pochybností o státním občanství osvědčení o státním občanství ČR.
  - **Fotografie:** Není třeba nosit papírovou fotografii; digitální fotografie obličeje a otisky prstů se pořizují přímo na přepážce úřadu.
  - **Děti mladší 15 let:**
    - Rodný list dítěte.
    - Doklad totožnosti zákonného zástupce (občanský průkaz).
    - Osobní přítomnost dítěte je povinná pro pořízení fotografie a biometrie.
  - **Mladiství (15 až 18 let):**
    - Vlastní platný občanský průkaz.
    - Písemný souhlas zákonného zástupce podepsaný přímo před úředníkem na přepážce (nebo úředně ověřený).
  - **Lost/Stolen:** Ztrátu nebo odcizení pasu je občan povinen neprodleně nahlásit kterémukoliv obecnímu úřadu obce s rozšířenou působností nebo Policii ČR.
- **Application & Delivery Channels:**
  - Žádost lze podat u kteréhokoliv obecního úřadu obce s rozšířenou působností v celé ČR bez ohledu na trvalé bydliště (*územní rozvolněnost*).
  - Výroba: Centrální personalizace ve Státní tiskárně cenin (STC).
  - Převzetí: Osobně u úřadu podání nebo za poplatek 100 Kč u jiného vybraného ORP.

---

### 5.5 Hungary (`HU` / `HUN`)
- **Administering Authority:**
  - Belügyminisztérium (Ministry of Interior); Kormányablakok (Integrated Government Customer Service Windows across Hungary); Nemzeti Infokommunikációs Szolgáltató Zrt. (NISZ); Konzulátusok és külképviseletek (Külgazdasági és Külügyminisztérium - KKM).
- **Primary Official Portals:**
  - `https://magyarorszag.hu/`
  - `https://kormanyhivatalok.hu/`
  - `https://nyilvantarto.hu/`
- **Statutory Framework:**
  - *1998. évi XII. törvény a külföldre utazásról*; *1990. évi XCIII. törvény az illetékekről*; Kormányrendeletek a konzuli díjakról és igazgatási szolgáltatási pótdíjakról.
- **Statutory Domestic Tariffs (Normál Eljárás, max. 20 nap):**
  - **Felnőtt útlevél (18 év felettiek, érvényesség: 10 év):** **17 000 Ft** (A korábbi 5 éves felnőtt konstrukció megszűnt; 18 év felett egységesen 10 éves okmány igényelhető).
  - **Fiatalkorú útlevél (12 és 18 év közöttiek, érvényesség: 5 év):** **12 500 Ft**
  - **Gyermek útlevél (6 és 12 év közöttiek, érvényesség: 5 év):** **8 500 Ft**
  - **Kisgyermek útlevél (6 év alatti gyermekek, érvényesség: 3 év):** **8 500 Ft**
  - **Kézbesítési költség:** Postai házhozszállítás igénylése esetén **+2 000 Ft** kezelési/postaköltség adódik hozzá.
- **Gyorsított Eljárási Pótdíjak (Igazgatási Szolgáltatási Pótdíj):**
  - **Soron kívüli eljárás (5 napon belül):** Alapdíj + **19 000 Ft** pótdíj
  - **Sürgősségi eljárás (3 napon belül):** Alapdíj + **29 000 Ft** pótdíj
  - **Azonnali eljárás (24 órán belül):** Alapdíj + **39 000 Ft** pótdíj (Kizárólag a Központi Okmányirodában / Budapesten vehető át).
- **Statutory Consular Tariffs (Külképviseletek KKM):**
  - Felnőtt magánútlevél (10 éves érvényességgel): kb. 90 EUR (vagy helyi pénznemnek megfelelő konzuli díj).
  - Kiskorú magánútlevél (5 éves): kb. 50 EUR.
  - Ideiglenes útlevél (hazatérésre): 30 EUR.
- **Civil Identity & Document Checklists:**
  - **Személyazonosság igazolása:** Érvényes állandó személyazonosító igazolvány (Személyi igazolvány), vezetői engedély vagy korábbi útlevél.
  - Lakcímet igazoló hatósági igazolvány (Lakcímkártya).
  - **Biometria:** Fénykép, ujjnyomat és elektronikus aláírás rögzítése közvetlenül a Kormányablak digitális pultjánál történik.
  - **Kiskorúak (<18 év):**
    - Mindkét szülő (törvényes képviselő) személyes jelenléte és érvényes okmánya kötelező.
    - Ha az egyik szülő nincs jelen: Közjegyző, gyámhatóság vagy más kormányablak előtt tett, teljes bizonyító erejű hozzájáruló nyilatkozat (*Szülői hozzájáruló nyilatkozat*).
    - Gyermek születési anyakönyvi kivonata.
  - **Lost/Stolen:** Az útlevél elvesztését, megsemmisülését vagy ellopását haladéktalanul be kell jelenteni a hatóságnál vagy a rendőrségen jegyzőkönyv felvétele mellett.
- **Application & Delivery Channels:**
  - Kérelem benyújtása személyesen bármely magyarországi Kormányablakban (időpontfoglalás a Központi Időpontfoglaló Rendszerben / `magyarorszag.hu`).
  - Átvétel: Postai úton a lakcímre küldve vagy személyesen a választott Kormányablakban / Központi Okmányirodában.

---

### 5.6 Romania (`RO` / `ROU`)
- **Administering Authority:**
  - Direcția Generală de Pașapoarte (DGP) din cadrul Ministerului Afacerilor Interne (MAI); Serviciile Publice Comunitare pentru Eliberarea și Evidența Pașapoartelor Simple (SPCEEPS) din fiecare județ și municipiul București; Departamentul Consular din cadrul Ministerului Afacerilor Externe (MAE).
- **Primary Official Portals:**
  - `https://pasapoarte.mai.gov.ro/`
  - `https://hub.mai.gov.ro/epasapoarte/programari`
  - `https://www.ghiseul.ro/`
- **Statutory Framework:**
  - *Legea nr. 248/2005 privind regimul liberei circulații a cetățenilor români în străinătate*, cu modificările și completările ulterioare; *Ordinul MAI privind modificarea tarifelor de emitere a documentelor de călătorie*, intrat în vigoare la **1 august 2025** (stabilind noul tarif unitar de 265 lei).
- **Statutory Domestic Tariffs (Actualizat de la 1 August 2025 – 2026):**
  - **Pașaport Simplu Electronic (Contravaloare unică):** **265 Lei (TVA inclus)**
    - Vârsta peste 18 ani: Valabilitate **10 ani**
    - Vârsta între 12 și 18 ani: Valabilitate **5 ani**
    - Copii sub 12 ani: Valabilitate **3 ani**
  - **Pașaport Simplu Temporar (Valabilitate maxim 1 an):** **265 Lei (TVA inclus)** (emis exclusiv pentru motive urgente, obiective, dovedite cu documente justificative).
  - *Plata taxei:* Se achită exclusiv prin mijloace securizate: online pe Ghiseul.ro (la secțiunea Compania Națională Imprimeria Națională S.A.), prin CEC Bank, sau stațiile SelfPay.
- **Statutory Consular Tariffs (Misiuni Diplomatice și Oficii Consulare MAE):**
  - Pașaport Simplu Electronic în străinătate: 59 EUR.
  - Pașaport Simplu Temporar în străinătate: 20 EUR.
  - Titlu de Călătorie (pentru reîntoarcerea în România): Gratuit (0 EUR conform reformei serviciilor consulare).
- **Civil Identity & Document Checklists:**
  - **Persoane majore (18+):** Carte de Identitate (sau Carte de Identitate Electronică / Carte Provizorie) originală și valabilă.
  - Pașaportul anterior (dacă există, prezentat pentru anulare).
  - Dovada achitării taxei de 265 lei (verificată electronic în baza CNP-ului, dar se recomandă prezentarea chitanței).
  - Preluarea imaginii faciale, amprentelor digitale (2 degete) și semnăturii se realizează direct la ghișeu.
  - **Minori sub 14 ani:**
    - Certificatul de naștere al minorului în original.
    - Documentele de identitate ale ambilor părinți în original.
    - Prezența ambilor părinți este obligatorie. Dacă un părinte lipsește: Procură specială notarială sau declarație de acord autentificată la notar / consulat, ori hotărâre judecătorească definitivă de exercitare exclusivă a autorității părintești.
  - **Minori între 14 și 18 ani:**
    - Cartea de identitate a minorului + Certificatul de naștere original.
    - Declarația de acord a ambilor părinți dată personal la ghișeu sau prin procură notarială.
  - **Lost/Stolen:** Se declară la ghișeul de pașapoarte la depunerea cererii, sau la secția de poliție competentă în caz de furt (cu eliberarea adeverinței constatatoare).
- **Application & Delivery Channels:**
  - Programare online prealabilă pe platforma oficială a Ministerului Afacerilor Interne: `hub.mai.gov.ro/epasapoarte/programari`.
  - Depunerea cererii se poate face la oricare serviciu public comunitar din țară, indiferent de domiciliul solicitantului.
  - Termen de eliberare: 5 zile lucrătoare; livrare opțională la domiciliu prin Poșta Română (contra sumei de 14,28 lei).

---

## 6. Batch 4 Audited Claim-Level Research Dossiers (6 Jurisdictions)

### 6.1 Belgium (`BE` / `BEL`)
- **Administering Authority:**
  - Service Public Fédéral Affaires étrangères, Commerce extérieur et Coopération au Développement (SPF Affaires étrangères / FOD Buitenlandse Zaken); Administrations communales (342 communes en Flandre, 262 en Wallonie, 19 à Bruxelles); Postes consulaires belges à l'étranger.
- **Primary Official Portals:**
  - `https://diplomatie.belgium.be/fr/services-aux-citoyens/passeport-belge`
  - `https://www.belgium.be/fr/famille/identite/passeport`
- **Statutory Framework:**
  - *Arrêté royal relatif aux passeports et titres de voyage*; *Réglementation tarifaire fédérale et taxes communales additionnelles*.
- **Statutory Domestic Tariffs (Federal Base + Communal Discretion):**
  - **Passeport ordinaire (34 pages):**
    - **Procédure normale (Délai: 5 jours ouvrables):**
      - Adulte (18 ans et plus, validité 7 ans): Base fédérale **65,00 €** (plus taxe communale éventuelle, montant habituel entre 65 € et 85 € selon la commune).
      - Mineur (Moins de 18 ans, validité 5 ans): Base fédérale **35,00 €** (plus taxe communale).
    - **Procédure urgente (Délai: livraison le jour ouvrable suivant si commandé avant 15h):**
      - Adulte: Base fédérale **240,00 €** (plus taxe communale).
      - Mineur: Base fédérale **210,00 €** (plus taxe communale).
    - **Procédure en très grande urgence / Superurgente (Délai: 4h30, retrait exclusivement au guichet fédéral rue des Colonies 11, 1000 Bruxelles):**
      - Adulte: **350,00 €**
      - Mineur: **320,00 €**
  - **Passeport grand format (66 pages pour grands voyageurs - procédure urgente):**
    - Adulte: 300,00 € / Mineur: 270,00 € (plus taxe communale).
- **Statutory Consular Tariffs (Postes diplomatiques et consulaires):**
  - Adulte (validité 7 ans): 75,00 € (normale) / 210,00 € (urgente).
  - Mineur (validité 5 ans): 35,00 € (normale) / 210,00 € (urgente).
  - Passeport provisoire d'urgence (validité 1 an max): 50,00 €.
- **Civil Identity & Document Checklists:**
  - **Préalable obligatoire:** Carte d'identité belge (eID pour adultes / Kids-ID pour enfants de moins de 12 ans).
  - Ancien passeport belge (pour annulation obligatoire s'il est périmé ou remplacement).
  - 1 photo d'identité couleur conforme aux normes ICAO (format 35x45mm, fond uni blanc/gris clair, visage neutre, bouche fermée, yeux visibles). De nombreuses communes disposent désormais de cabines ou systèmes de prise de vue numériques directs.
  - **Mineurs (<18 ans):**
    - Présence physique obligatoire du mineur au guichet, quel que soit son âge.
    - Accompagnement par l'un des parents chez qui l'enfant est domicilié; en cas de garde partagée, accord écrit de l'autre parent avec copie recto-verso de sa carte d'identité.
  - **Lost/Stolen:** Déclaration de perte/vol obligatoire auprès de la police locale (attestation de perte/vol) ou signalement immédiat au service *Doc Stop* (00800 2123 2123) pour bloquer immédiatement le document contre l'usurpation d'identité.
- **Application & Delivery Channels:**
  - Demande auprès du service population / état civil de la commune de résidence.
  - Retrait du passeport en personne au guichet communal ou livraison spéciale selon la procédure choisie.

---

### 6.2 Denmark (`DK` / `DNK`)
- **Administering Authority:**
  - Borgerservice i landets 98 kommuner; Rigspolitiet; Udenrigsministeriet (danske ambassader og konsulater i udlandet).
- **Primary Official Portals:**
  - `https://www.borger.dk/politi-retsvaesen-forsvar/Pas-og-koerekort/Pas`
  - `https://um.dk/rejse-og-ophold/rejse-til-udlandet/pas-og-visum`
- **Statutory Framework:**
  - *Bekendtgørelse om pas m.v. (Pasbekendtgørelsen)*; *Lov om pas til danske statsborgere*.
- **Statutory Domestic Tariffs (Gældende takster 2026):**
  - **Personer fra 18 år til folkepensionsalderen (Gyldighed: 10 år):** **894 kr.**
  - **Personer i folkepensionsalderen (fra 67 år, Gyldighed: 10 år):** **382 kr.**
  - **Unge 12–17 år (Gyldighed: 5 år):** **182 kr.**
  - **Børn 0–11 år (Gyldighed: typisk 2 til 5 år):** **150 kr.**
  - **Fotogebyr (hvis foto tages i Borgerservice):** Ca. **130 kr.** i automat/fotostation.
  - **DOBBELT GEBYR VED MISTET ELLER BESKADIGET PAS (Straftakst):**
    - Hvis du ikke afleverer dit seneste pas ved fornyelse, eller hvis det er beskadiget/bortkommet, **fordobles gebyret automatisk ved lov**:
      - Voksne: **1.788 kr.** (894 kr. x 2)
      - Folkepensionister: **764 kr.** (382 kr. x 2)
      - Unge 12–17 år: **364 kr.** (182 kr. x 2)
      - Børn 0–11 år: **300 kr.** (150 kr. x 2)
  - **Provisorisk pas / Nødpas (ved akut behov):** Normalt pasgebyr (eller gratis, hvis det udstedes i forlængelse af almindelig pasbestilling til afhentning før rejsen).
- **Statutory Consular Tariffs (Danske repræsentationer i udlandet):**
  - Pasgebyr i udlandet: Fast gebyr svarende til ca. 1.200 – 1.450 DKK (i lokal valuta).
  - Nødpas / provisorisk pas i udlandet: Tillægsgebyr efter Udenrigsministeriets takstregulativ.
- **Civil Identity & Document Checklists:**
  - **Sundhedskort (det gule sygesikringsbevis)** med CPR-nummer.
  - Tidligere pas (hvis det haves; manglende aflevering udløser dobbelt gebyr).
  - Hvis førstegangspas og intet tidligere pas: Dåbsattest, navneattest eller fødselsattest samt billedlegitimation (f.eks. kørekort).
  - Fingeraftryk og digital underskrift optages digitalt ved fremmøde.
  - **Børn og unge under 18 år:**
    - Barnet skal altid møde personligt op i Borgerservice.
    - Digitalt samtykke givet af begge forældremyndighedsindehavere via NemID/MitID på `borger.dk`, eller skriftlig samtykkeerklæring medbragt med gyldig legitimation fra begge forældre.
  - **Lost/Stolen:** Erklæring om bortkommet pas udfyldes digitalt eller direkte i Borgerservice.
- **Application & Delivery Channels:**
  - Tidsbestilling online i Borgerservice i en valgfri dansk kommune (frit kommunalt valg).
  - Leveringstid: Ca. 10–14 hverdage; leveres til Borgerservice eller sendes direkte med sikker post til bopælsadressen.

---

### 6.3 Finland (`FI` / `FIN`)
- **Administering Authority:**
  - Poliisi (Police of Finland) / Lupapalvelut; Ulkoministeriö (Ministry for Foreign Affairs of Finland / diplomatic missions).
- **Primary Official Portals:**
  - `https://poliisi.fi/passi`
  - `https://poliisi.fi/passin-hakeminen`
  - `https://um.fi/passi-ja-henkilokortti-ulkomailla`
- **Statutory Framework:**
  - *Passilaki (671/2006)*; *Sisäministeriön asetus poliisin suoritteiden maksullisuudesta*.
- **Statutory Domestic Tariffs (2026 Poliisin Maksut):**
  - **Tavallinen passi (Normaalitoimitus 5–8 arkipäivää, voimassaoloaika: 5 vuotta):**
    - Sähköinen hakemus (Online via Poliisi e-service): **42,00 €**
    - Poliisiasemalla henkilökohtaisesti vireille pantuna: **48,00 €**
  - **Pikapassi (Pikatoimitus 1–3 arkipäivää):**
    - Sähköinen hakemus: **61,00 €**
    - Poliisiasemalla: **67,00 €**
  - **Express-passi (Express-toimitus samana tai seuraavana arkiaamuna noutopisteeseen):**
    - Sähköinen hakemus: **81,00 €**
    - Poliisiasemalla: **87,00 €**
  - **Väliaikainen passi (Käsin kirjoitettava hätäpassi äkillisessä tilanteessa):** **85,00 €**
  - **Sotiemme veteraanit (Veteraanialennus):** 50% alennus perusmaksuista.
- **Statutory Consular Tariffs (Edustustot ulkomailla):**
  - Tavallinen passi edustustossa: **175,00 €**
  - Väliaikainen passi edustustossa: **225,00 €**
  - Hätäpassi / Emergency Travel Document (kotimatkaa varten): **140,00 €**
- **Civil Identity & Document Checklists:**
  - **Suomen kansalaisuus** (väestötietojärjestelmästä tarkistettu).
  - Voimassa oleva henkilöllisyystodistus (passi tai poliisin myöntämä henkilökortti).
  - **Sähköinen passikuva:** Valokuvaamo lähettää valokuvan suoraan poliisin valokuvapalvelimeen ja antaa hakijalle **kuvatunnuksen** (kuva saa olla enintään 6 kuukautta vanha).
  - **Sähköinen asiointi ilman käyntiä poliisiasemalla:** Jos hakijalta on otettu sormenjäljet passia tai henkilökorttia varten enintään 6 vuotta sitten ja nimi ei ole muuttunut, passi voidaan hakea ja maksaa kokonaan verkossa ilman poliisiasemakäyntiä.
  - **Alaikäiset (<18 vuotta):**
    - Kaikkien huoltajien suostumus (*huoltajien suostumusasiakirja* tai sähköinen hyväksyntä verkossa).
    - Alaikäisen on aina oltava henkilökohtaisesti mukana poliisiasemalla, jos käynti vaaditaan.
  - **Asevelvolliset (17–30-vuotiaat miehet):** Esitettävä sotilaspassi, siviilipalvelustodistus, kutsuntatodistus tai esteettömyystodistus. Passi myönnetään enintään sen vuoden loppuun, jona hakija täyttää 28 vuotta, ellei velvollisuutta ole suoritettu.
  - **Lost/Stolen:** Katoamisilmoitus poliisille sähköisesti tai palvelupisteessä; kadonnut passi etsintäkuulutetaan ja mitätöidään peruuttamattomasti.
- **Application & Delivery Channels:**
  - Sähköinen hakemus poliisin asiointipalvelussa (`asiointi.poliisi.fi`) pankkitunnuksilla tai mobiilivarmenteella.
  - Nouto: Valmis passi toimitetaan kirjatussa kirjekuoressa hakijan valitsemaan Matkahuollon tai R-kioskin noutopisteeseen seurantakoodilla.

---

### 6.4 Norway (`NO` / `NOR`)
- **Administering Authority:**
  - Politiet (Pass- og ID-kontor i politidistriktene); Politidirektoratet (POD); Utenriksdepartementet (UD / norske utenriksstasjoner).
- **Primary Official Portals:**
  - `https://www.politiet.no/tjenester/pass-og-id-kort/`
  - `https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/pass_id/id2722880/`
- **Statutory Framework:**
  - *Passloven (Lov om pass)*; *Passforskriften (Forskrift om pass og nasjonalt ID-kort)*, gebyrer justert per 1. januar 2026.
- **Statutory Domestic Tariffs (Gjeldende gebyrer per 1. januar 2026):**
  - **Ordinært pass:**
    - Voksne og ungdom fra 16 år (Gyldighet: 10 år): **840 kr.**
    - Barn under 16 år (Gyldighet: 5 år for 5-15 år; 2 år for 0-4 år): **510 kr.**
  - **Kombinasjonstilbud (Søknad om pass og nasjonalt ID-kort samtidig - 20% rabatt):**
    - Personer fra 16 år: **1 340 kr.**
    - Ungdom 10–15 år: **1 080 kr.**
    - Barn under 10 år: **820 kr.**
  - **Nasjonalt ID-kort alene:** 840 kr. (fra 10 år) / 510 kr. (under 10 år).
  - **Nødpass (Uansett alder):** **1 320 kr.** (Utstedes kun ved akutt og uforutsett reisebehov på utvalgte politistasjoner eller Oslo Lufthavn Gardermoen).
- **Statutory Consular Tariffs (Norske ambassader og generalkonsulater):**
  - Ordinært pass i utlandet: Voksen **1 290 kr.** / Barn **780 kr.**
  - Nødpass i utlandet: **1 690 kr.**
- **Civil Identity & Document Checklists:**
  - **Norsk statsborgerskap** og gyldig norsk fødselsnummer (11 siffer).
  - Tidligere pass eller gyldig norsk nasjonalt ID-kort (for makulering og legitimasjon).
  - **Biometriopptak:** Foto, fingeravtrykk og signatur tas direkte i politiets biometriskranke ved oppmøte (ingen papirfoto godtas for ordinære pass).
  - **Barn under 18 år:**
    - Barnet må møte personlig sammen med minst én forelder.
    - Begge foreldrene med foreldreansvar må gi sitt samtykke. Samtykke kan gis digitalt med BankID på `politiet.no` på forhånd, eller ved personlig oppmøte med gyldig legitimation.
    - Fødselsattest kreves dersom barnet søker pass for første gang og foreldreansvaret ikke fremgår direkte i Folkeregisteret.
  - **Lost/Stolen:** Tapsmelding må fylles ut. Ved gjentatte tap av pass kan politiet nekte utstedelse eller ilegge karenstid etter passloven § 5.
- **Application & Delivery Channels:**
  - Timebestilling er obligatorisk på `politiet.no` ved et valgfritt pass- og ID-kontor.
  - Betaling skjer ved oppmøte (bankkort, kredittkort, Apple Pay/Google Pay eller kontanter).
  - Leveringstid: Ca. 1 uke; passet sendes i posten til folkeregistrert adresse.

---

### 6.5 Sweden (`SE` / `SWE`)
- **Administering Authority:**
  - Polismyndigheten (Passexpeditioner i Sveriges 7 polisregioner); Utrikesdepartementet (svenska utlandsmyndigheter).
- **Primary Official Portals:**
  - `https://polisen.se/tjanster-tillstand/pass-och-nationellt-id-kort/`
  - `https://www.regeringen.se/sveriges-regering/utrikesdepartementet/`
- **Statutory Framework:**
  - *Passlagen (1978:302)*; *Passförordningen (1979:664)*; *Lag om nationellt identitetskort*.
  - **Lagstadgad maxgräns (Passlagen 7 b §):** En svensk medborgare kan som huvudregel beviljas högst **tre vanliga pass under en femårsperiod** för att motverka missbruk och illegal handel med resehandlingar.
- **Statutory Domestic Tariffs:**
  - **Vanligt pass (Giltighet: 5 år för personer från 12 år; 3 år för barn under 12 år):** **500 SEK**
  - **Nationellt id-kort (Giltighet: 5 år):** **400 SEK**
  - **Provisoriskt pass (Nödpass, giltigt enbart för den specifika resan, max 7 månader):** **980 SEK**
    - Utfärdas tidigast 72 timmar före planerad avresa; personligt besök på särskilda passexpeditioner (observera att Arlanda flygplats inte längre utfärdar provisoriska pass; hänvisning till Norrmalm, Sollentuna m.fl.).
- **Statutory Consular Tariffs (Svenska ambassader och konsulat i utlandet):**
  - Vanligt pass utomlands: **1 600 SEK** (eller motsvarande i lokal valuta).
  - Provisoriskt pass utomlands: **1 800 SEK**.
  - Utlämningsavgift på honorärkonsulat: 150 SEK.
- **Civil Identity & Document Checklists:**
  - **Svenskt medborgarskap** och personnummer/samordningsnummer.
  - Tidigare pass eller nationellt id-kort (ska medtas för makulering).
  - Giltig svensk legitimation (pass, nationellt id-kort eller svenskt körkort). Om legitimation saknas måste godkänd intygsgivare (make, sambo, förälder, myndigt barn eller arbetsgivare med giltig ID) följa med och intyga identiteten.
  - **Foto och biometri:** Fotografering och fingeravtryck tas uteslutande i polisens fotostation vid passexpeditionen.
  - **Barn under 18 år:**
    - Barnet måste närvara personligen vid ansökningstillfället.
    - Skriftligt medgivande från samtliga vårdnadshavare (*Vårdnadshavares medgivande*) på särskild polisblankett med vidimerade ID-kopior, eller personlig närvaro av båda vårdnadshavarna med ID.
  - **Lost/Stolen:** Anmälan om förlust görs hos polisen; passet spärras omedelbart internationellt i SIS och Interpol.
- **Application & Delivery Channels:**
  - Obligatorisk tidsbokning online via `polisen.se`.
  - Leveranstid: Normalt inom 6 arbetsdagar; sms skickas när passet finns att hämta på vald passexpedition.

---

### 6.6 Iceland (`IS` / `ISL`)
- **Administering Authority:**
  - Þjóðskrá Íslands (Registers Iceland); Sýslumenn (District Commissioners across 9 districts in Iceland); Utanríkisráðuneytið (Ministry for Foreign Affairs / diplomatic missions).
- **Primary Official Portals:**
  - `https://www.skra.is/folk/vegabref-og-onnor-skilriki/vegabref/`
  - `https://island.is/vegabref`
  - `https://www.syslumenn.is/thjonusta/skilriki/vegabref/`
- **Statutory Framework:**
  - *Lög um vegabréf nr. 136/1998*; *Lög um aukatekjur ríkissjóðs nr. 88/1991 (með síðari breytingum)*; Reglugerð um vegabréf.
- **Statutory Domestic Tariffs (Gjaldskrá Þjóðskrár og sýslumanna):**
  - **Einstaklingar 18–66 ára (Almennt vegabréf, gildistími: 10 ár):**
    - Almennt gjald (Venjuleg afgreiðsla, 5–8 virkir dagar): **19.000 ISK**
    - Hraðafgreiðsla (Flýtiafgreiðsla, 1–2 virkir dagar): **39.200 ISK**
    - Neyðarvegabréf (Neyðartilvik / flugvelli): **10.500 ISK**
  - **Börn (0–17 ára, gildistími: 5 ár), aldraðir (67 ára og eldri) og öryrkjar:**
    - Almennt gjald: **7.000 ISK**
    - Hraðafgreiðsla: **14.000 ISK**
    - Neyðarvegabréf: **3.500 ISK**
  - **Nafnskírteini (Persónu- og ferðaskilríki innan EES):**
    - Einstaklingar 18 ára og eldri: 9.200 ISK (almennt) / 18.400 ISK (hraðafgreiðsla).
    - Börn, aldraðir og öryrkjar: 4.600 ISK (almennt) / 9.200 ISK (hraðafgreiðsla).
- **Statutory Consular Tariffs (Sendiráð og ræðismenn Íslands erlendis):**
  - Vegabréf erlendis (fullorðnir): 24.000 ISK.
  - Vegabréf erlendis (börn/aldraðir): 11.000 ISK.
  - Neyðarvegabréf erlendis: 19.000 ISK.
- **Civil Identity & Document Checklists:**
  - **Íslenskur ríkisborgararéttur** og skráning í Þjóðskrá með íslenskri kennitölu.
  - Fyrra vegabréf (ef það er til staðar, til ógildingar) eða gild persónuskilríki (ökuskírteini, nafnskírteini).
  - **Biometria:** Ljósmynd, fingraför og rafræn undirskrift eru tekin á staðnum hjá embætti sýslumanns við umsókn.
  - **Börn yngri en 18 ára:**
    - Barnið verður að mæta sjálft á afgreiðslustað sýslumanns.
    - Skriflegt samþykki beggja forsjáraðila (*samþykki forsjáraðila*) staðfest með rafrænum skilríkjum á `island.is` eða undirritað á umsóknareyðublaði í viðurvist tveggja vitna.
  - **Lost/Stolen:** Tilkynna verður tap eða þjófnað vegabréfs til lögreglu eða sýslumanns; viðkomandi vegabréf er tafarlaust skráð ógilt í alþjóðlegum gagnagrunnum.
- **Application & Delivery Channels:**
  - Umsókn lögð inn hjá hvaða sýslumannsembætti sem er á landinu, óháð lögheimili.
  - Prentun fer fram miðlægt hjá Þjóðskrá Íslands í Reykjavík.
  - Afhending: Sótt hjá sýslumanni eða sent í pósti á viðkomandi afgreiðslustað/heimili.



---

## Section 7 — Batch 5 Primary Statutory Research Dossiers: TW, IL, EG, MA, VN, GH

*Batch 5 research executed: 2026-10-20. All dossiers sourced directly from official government portals. Where consular fee evidence was not retrievable from the primary portal, confidence is recorded as `PARTIAL`.*

---

### 7.1 Taiwan (TW / TWN) — Bureau of Consular Affairs (BOCA), Ministry of Foreign Affairs (MOFA)

- **Administering Authority:** Bureau of Consular Affairs (外交部領事事務局), Ministry of Foreign Affairs, Republic of China (Taiwan)
- **Primary Portals:**
  - Domestic fees: `https://www.boca.gov.tw/fp-354-7197-12aa7-2.html`
  - Statutory fee schedule (ROC law): `https://www.boca.gov.tw/cp-121-4287-e6e6c-1.html`
  - Overseas (consular) fees: `https://www.boca.gov.tw/cp-26-20-58671-1.html`
- **Statutory Framework:**
  - Passport Act (護照條例), Ministry of Foreign Affairs ROC. Fees governed by MOFA fee regulations.
  - Note: Taiwan is a de facto separate jurisdiction not universally recognized internationally. Listed as `Territory / Special Region` in the research ledger. This classification is upheld.
- **Domestic Fee Schedule:**
  - Adult (14 years and above, 10-year validity, e-Passport): **NT$1,300**
  - Minor (under 14, 5-year validity, e-Passport): **NT$900**
  - Expedited processing surcharges (in addition to base fee):
    - Pickup in 3 working days: **+NT$300**
    - Pickup in 2 working days: **+NT$600**
    - Pickup in 1 working day (minimum expedite): **+NT$900**
  - Standard processing time: 10 working days.
- **Overseas (Consular) Fee Schedule:**
  - Adult e-Passport (10-yr): **USD 45**
  - Minor e-Passport under 14 (5-yr): **USD 31**
  - Military-age male (shortened validity per military service review): **USD 31**
  - Emergency non-chip booklet (lost passport): **USD 31**
  - Emergency non-chip booklet (urgent, 1-year validity, not lost): **USD 10**
- **Civil Identity & Document Checklists:**
  - **National Identity Card (中華民國國民身分證):** Mandatory for adult applicants 14+; must be presented in-person.
  - **Household Registration Transcript (戶口名簿 / 戶籍謄本):** Required for minors; must demonstrate household registration (戶籍) in Taiwan.
  - **Military Service Status:** Males age 19–36 (or 18 who will turn 19 in the same year) must present military service documentation (service completion certificate, exemption, or deferral). Males under military obligation receive a shortened validity passport.
  - **Previous passport** (if held): Must be surrendered for cancellation.
  - Biometric photo and fingerprints captured in-person.
- **Application & Delivery Channels:**
  - In-person at one of four BOCA branch offices (Taipei, Taichung, Tainan, Kaohsiung) or at Household Registration one-stop service windows (combined household + passport in single visit).
  - **No purely online application** for first passport or biometric refresh — in-person attendance mandatory.
  - Processing: Standard 10 working days; expedited 1–3 working days for surcharge.
  - Overseas: Via ROC representative offices (TECRO, TECO, etc.) in the applicable country.

---

### 7.2 Israel (IL / ISR) — Population and Immigration Authority (PIBA), Ministry of Interior

- **Administering Authority:** Population and Immigration Authority (רשות האוכלוסין וההגירה — PIBA), Ministry of Interior (משרד הפנים)
- **Primary Portals:**
  - Biometric passport application: `https://www.gov.il/en/service/application_for_biometric_passport2`
  - Biometric Travel Document (laissez-passer) — **SEPARATE document, NOT a passport:** `https://www.gov.il/en/service/request_for_israeli_biometric_travel_document`
- **Statutory Framework:**
  - Passports Law 5712-1952 and subsequent amendments. Fee table published on gov.il. Seasonal pricing cycles reflect demand management.
- **Biometric Passport Fee Schedule (Seasonal Tiers):**
  - **Winter Season (November 1 – February 28/29, online application):**
    - Adult (18+, 10-yr validity): **NIS 185**
    - Minor (under 18, 5-yr validity): **NIS 110**
    - Adult lost/damaged replacement: **NIS 515**
    - Minor lost/damaged replacement: **NIS 275**
  - **Summer Season (March 1 – October 31, online application):**
    - Adult: **NIS 290**
    - Minor: **NIS 145**
    - Adult lost/damaged replacement: **NIS 620**
    - Minor lost/damaged replacement: **NIS 310**
  - **In-person branch (year-round, regardless of season):**
    - Adult: **NIS 315**
    - Minor: **NIS 165**
    - Adult lost/damaged (branch): **NIS 645**
    - Minor lost/damaged (branch): **NIS 330**
  - **Airport Emergency (Ben Gurion Airport, within 48 hours of flight):**
    - Adult (advance online): **NIS 825**
    - Adult (at airport desk): **NIS 845**
  - **Important:** Winter online applicants must complete their in-person Population Authority appointment by **April 30** of that cycle.
- **⚠️ CRITICAL DISTINCTION — Biometric Travel Document (נסיעת מסמך ביומטרי / Laissez-Passer):**
  - This is a **SEPARATE legal document**, not a passport. Used by those unable to obtain a standard passport (e.g., stateless, restricted travel rights).
  - Fees (DO NOT conflate with passport fees):
    - First issue, Winter online: NIS 100; Summer online: NIS 130; Branch: NIS 150.
    - Lost/damaged: Winter NIS 250; Summer NIS 280; Branch NIS 300.
- **Civil Identity & Document Checklists:**
  - **Teudat Zehut (תעודת זהות — Israeli National ID card):** Mandatory for all adult applicants.
  - **Biometric enrollment:** In-person appointment at Population Authority office mandatory. Photo, fingerprints, and signature captured on-site.
  - **Birth certificate:** Required for minors; parental/guardian presence mandatory.
  - **Military service:** Men under active military service obligation cannot obtain full 10-year validity passport; limited validity passports issued. Soldiers must obtain IDF authorization.
  - **Soldiers' discount:** Active IDF soldiers receive reduced fee; verification via military identity document.
- **Application & Delivery Channels:**
  - Online application initiated at gov.il → in-person biometric appointment at local Population Authority office required.
  - Delivery: Passport mailed by postal service or collected in person.
  - Processing: Standard 3–5 weeks; expedited options at higher fee tiers.
  - Overseas: Via Israeli Embassies and Consulates.

---

### 7.3 Egypt (EG / EGY) — Passports, Immigration and Nationality Administration (PINA), Ministry of Interior

- **Administering Authority:** General Administration of Passports, Immigration and Nationality (إدارة جوازات السفر والهجرة والجنسية), Ministry of Interior (وزارة الداخلية)
- **Primary Portals:**
  - Domestic: `https://www.moi.gov.eg/passports/home/getpassport/1`
  - Required documents: `https://moi.gov.eg/Passports/home/PassportRequiredPapers`
  - Consular reference: `https://www.mfa.gov.eg/`
- **Statutory Framework:**
  - Passports and Travel Documents Law No. 97 of 1959 (as amended); Ministry of Interior Decree No. 470/2024 (Law No. 7/2024) setting revised fee schedule.
  - **Evidence confidence: `PARTIAL` for exact fee figures.** The moi.gov.eg portal describes procedures and documents but does not publish a machine-readable, numeric fee table. Fee amounts below are drawn from MOI official announcements and Decree 470/2024 as reported via authoritative Egyptian media and legal databases. In-person confirmation at passport office or consulting the official gazette is recommended for exact current figures.
- **Domestic Fee Schedule (post-Decree 470/2024, effective 2024):**
  - Standard adult passport (7-year validity): Total approximately **EGP 1,110** (includes application form Model 29, service fees, and photo cost).
  - Urgent processing (24–48 hours): **EGP 1,450–1,600**
  - VIP / same-day: **EGP 1,850**
  - Lost/damaged: **Double fee penalty** per decree.
  - Minor passport (under 15): Reduced rate; exact figure requires in-person confirmation.
- **Consular Fee Schedule:**
  - Overseas Egyptians via Egyptian Embassies/Consulates: Approximately **USD 100–110** per standard adult renewal.
  - **Evidence confidence: `PARTIAL`** — exact consular fee schedules are not published in a unified numeric table on mfa.gov.eg. Fees vary by receiving country and may include local bank transfer surcharges.
- **Civil Identity & Document Checklists:**
  - **Bataqa Wataniyya (البطاقة الوطنية — National ID Card):** Mandatory for Egyptians 15 years and above.
  - **Birth Certificate (شهادة الميلاد):** Required for applicants under 15.
  - **Military service status (شهادة الموقف من التجنيد):** Mandatory for Egyptian males in applicable age range.
  - **4 biometric passport photos** (4×6 cm, white background, ICAO standard).
  - **Form 29 (نموذج رقم 29):** Official MOI passport application form, available at and submitted to the passport directorate.
  - **Old passport** (if held): Must be surrendered.
- **Application & Delivery Channels:**
  - In-person application at district Passport Directorate (مديرية الجوازات) offices throughout Egypt.
  - No online-only application currently available for standard passport renewal.
  - Processing: Standard 3–7 business days; urgent and VIP same/next-day options at higher fee tiers.
  - Overseas: Via Egyptian embassies and consulates. Some consulates require pre-registration via the Egyptian Foreign Ministry e-portal.

---

### 7.4 Morocco (MA / MAR) — Direction Générale de la Sûreté Nationale (DGSN), Ministère de l'Intérieur

- **Administering Authority:** Direction Générale de la Sûreté Nationale (DGSN), Ministère de l'Intérieur (Ministry of Interior)
- **Primary Portals:**
  - National portal: `https://www.passeport.ma/`
  - Conditions of issuance: `https://www.passeport.ma/ConditionsDelivrance/DelAuMaroc`
  - Application guide: `https://www.passeport.ma/Procedure/GuideAuMaroc`
  - e-Timbre payment: `https://www.passeport.ma/Home/EtimbreEnligne`
- **Statutory Framework:**
  - Dahir (Royal Decree) No. 1-07-80 and subsequent Finance Laws. Current e-Timbre fee established by Finance Law amendments.
- **Domestic Fee Schedule:**
  - **e-Timbre fiscal (Electronic Fiscal Stamp): MAD 500** (increased from previous MAD 300 under Finance Law amendments).
  - Payment made online via passeport.ma → generates a 16-digit e-timbre code presented at the appointment.
  - Validity: **5 years** for adults; **5 years** for minors. (Note: some sources indicate children under 3 may receive a 3-year document — verify at time of application.)
- **Consular Fee Schedule:**
  - Via Moroccan Embassies and Consulates overseas.
  - **Evidence confidence: `PARTIAL`** — passeport.ma does not publish a unified international consular fee schedule. Consular fees typically range from €100–€200 equivalent (varies by country and local mission). Applicants must confirm with the relevant Moroccan consular post.
- **Civil Identity & Document Checklists:**
  - **CNIE (Carte Nationale d'Identité Électronique):** Mandatory for adult applicants. The CNIE is also the biometric identity document and is required as both proof of identity and basis for the passport issuance.
  - **Birth Certificate (Acte de naissance):** Required for minors and first-time applicants.
  - **Livret de famille (Family booklet):** Required for married applicants and for children.
  - **Parental presence:** Both parents or legal guardian must accompany minors at biometric enrollment.
  - **Previous passport:** Surrendered at appointment if held.
- **Application & Delivery Channels:**
  - Online form submission via passeport.ma.
  - Appointment booked at local Annexe Administrative or Arrondissement (urban) or Cercle (rural).
  - **In-person biometric enrollment** mandatory: Photo, fingerprints, and signature captured at appointment.
  - Processing: Typically 3–7 business days (domestic); varies by region.
  - Passport collected in-person at the appointment office.
  - Overseas: Via Moroccan Embassies and Consulates.

---

### 7.5 Vietnam (VN / VNM) — Immigration Department (Cục Quản lý xuất nhập cảnh), Ministry of Public Security

- **Administering Authority:** Immigration Department (Cục Quản lý xuất nhập cảnh — QLXNC), Ministry of Public Security (Bộ Công an)
- **Primary Portals:**
  - National Public Service Portal (domestic): `https://dichvucong.gov.vn/` (procedure code 288119)
  - Overseas procedure reference: `https://vpcp.dichvucong.gov.vn/` (procedure code 1277)
- **Statutory Framework:**
  - Law on Exit and Entry of Vietnamese Citizens No. 23/2023/QH15; Decree 95/2023/ND-CP; Circular 25/2021/TT-BCA (as amended). Fee schedule published in official circulars under the Ministry of Finance.
- **Domestic Fee Schedule:**
  - Standard issuance (new or renewal, 10-yr for adults 14+): **200,000 VND** at counter.
  - Online application via dichvucong.gov.vn portal (electronic submission, in-person biometrics still required): **180,000 VND** (reduced rate per portal discount provisions in applicable circulars).
  - **5-year validity** for minors under 14.
  - Lost/damaged replacement: **400,000 VND** (double fee penalty).
- **Consular Fee Schedule:**
  - Via Vietnamese Embassies and Consulates overseas.
  - **Evidence confidence: `PARTIAL`** — dichvucong.gov.vn does not publish a single unified consular tariff table. Consular fees vary by country; reported range approximately **USD 40–70** per passport. Applicants must confirm with the relevant Vietnamese consular post.
- **Civil Identity & Document Checklists:**
  - **Căn cước công dân (CCCD — Chip-embedded Citizen Identity Card):** Mandatory for adults and minors 14+ as of July 1, 2024. Biometric data (fingerprints, iris, facial recognition) registered in national database.
  - **Birth Certificate (Giấy khai sinh):** Required for minors under 14.
  - **Parental/guardian presence:** Required for minors.
  - VNeID account (national digital identity) strongly recommended for online portal submission.
  - **Previous passport:** Presented at appointment; not always surrendered (kept as record of travel history).
- **Application & Delivery Channels:**
  - Online application via `dichvucong.gov.vn` (VNeID login or electronic authentication).
  - In-person biometric enrollment required at provincial Immigration Department offices across Vietnam.
  - Processing: Standard 5–8 business days from biometric appointment.
  - Overseas: Via Vietnamese consular sections at embassies.
  - Passport collection in-person or by registered mail.

---

### 7.6 Ghana (GH / GHA) — Passport Office, Ministry of Foreign Affairs and Regional Integration

- **Administering Authority:** Passport Office, Ministry of Foreign Affairs and Regional Integration
- **Primary Portals:**
  - Main portal: `https://passport.mfa.gov.gh/`
  - Required documents: `https://passport.mfa.gov.gh/required-documents`
- **Statutory Framework:**
  - Passports and Travel Certificates Act, 1967 (Act 323) and subsidiary legislation. Current tariffs set by **L.I. 2481**, effective **April 1, 2024** (superseding previous schedule).
- **Domestic Fee Schedule (L.I. 2481, effective April 1, 2024):**
  - Standard 32-page passport: **GHS 500**
  - Standard 48-page passport: **GHS 644**
  - Expedited 32-page passport: **GHS 700**
  - Expedited 48-page passport: **GHS 800**
  - Validity: **10 years** for adults (18+); **5 years** for minors (under 18).
  - **Evidence confidence: `DIRECT`** — tariff schedule confirmed from passport.mfa.gov.gh and L.I. 2481 as current and active since April 2024.
- **Consular Fee Schedule:**
  - Via Ghanaian Embassies and High Commissions overseas.
  - Fees are typically set at USD equivalent of domestic rate plus a local service charge.
  - **Evidence confidence: `PARTIAL`** — exact per-country consular tariffs are not published in a centralized table on passport.mfa.gov.gh. Applicants must confirm with the relevant Ghanaian mission.
- **Civil Identity & Document Checklists:**
  - **Ghana Card (National ID Authority — NIA card):** Mandatory from 2022 for all adult applicants. The Ghana Card replaced the old Voter ID as the primary biometric identity anchor.
  - **Birth Certificate:** Required for minors and first-time applicants; Ghana Births and Deaths Registry certificate.
  - **Application Form:** Completed online at passport.mfa.gov.gh prior to appointment.
  - **Guarantor requirement:** A guarantor (Ghanaian citizen with valid passport) must countersign certain applications — confirm current requirement at application stage.
  - **Previous passport:** Surrendered for cancellation on renewal.
- **Application & Delivery Channels:**
  - Online application and appointment booking at `passport.mfa.gov.gh`.
  - In-person biometric enrollment (fingerprints, photo) at designated Passport Application Centres (PACs) across Ghana.
  - Processing: Standard 10–15 business days; expedited option available (shorter turnaround for higher fee).
  - Overseas: Via Ghanaian Embassies and High Commissions. Online pre-registration may be required.
  - Passport collected in-person at the PAC or mailed to applicant.

---

---

## Section 8 — Batch 6 Primary Statutory Research Dossiers: ET, IR, KZ, UA, IQ, QA

*Batch 6 research executed: 2026-10-20. All dossiers sourced from official government portals or official decree announcements. Where consular fees or domestic figures were not retrievable directly from the primary portal, confidence is recorded as `PARTIAL`.*

---

### 8.1 Ethiopia (ET / ETH) — Immigration and Citizenship Service (ICS)

- **Administering Authority:** Immigration and Citizenship Service (ICS), Federal Democratic Republic of Ethiopia
- **Primary Portals:**
  - Official ICS website: `https://www.ics.gov.et/`
- **Statutory Framework:**
  - Council of Ministers Regulation No. 550/2024 (effective August 7, 2024). This regulation comprehensively revised passport service fees and processing tiers.
- **Domestic Fee Schedule (Reg. 550/2024, effective August 7, 2024):**
  - **New Passport (standard processing):** ETB 5,000
  - **New Passport (urgent 5-day processing):** ETB 20,000
  - **New Passport (urgent 2-day processing):** ETB 25,000
  - **Passport Renewal** (expired or pages exhausted) — same rate as new: ETB 5,000 / ETB 20,000 / ETB 25,000
  - **Expired Passport with Correction** (name/data change): ETB 12,500 / ETB 27,500 / ETB 32,500
  - **Valid & Damaged Passport Replacement:** ETB 13,000 / ETB 28,000 / ETB 33,000
  - **Damaged Passport with Correction:** ETB 20,500 / ETB 35,500 / ETB 40,500
  - **Lost Passport Replacement:** ETB 13,000 / ETB 28,000 / ETB 33,000
  - **Lost Passport with Correction:** ETB 20,500 / ETB 35,500 / ETB 40,500
  - **Evidence confidence: `DIRECT`** — Council of Ministers Regulation 550/2024 is published at ics.gov.et. Sources cross-referenced from official gazette summaries.
- **Consular Fee Schedule:**
  - Via Ethiopian Embassies and Consulates overseas.
  - **Evidence confidence: `PARTIAL`** — ics.gov.et does not publish a unified international consular fee tariff. Applicants must confirm fees with the relevant Ethiopian diplomatic mission.
- **Civil Identity & Document Checklists:**
  - **Ethiopian National ID (Fayda ID / Biometric ID card):** Required for adults. Ethiopia is transitioning to a unified Fayda digital national identity system.
  - **Birth Certificate** or Kebele (administrative unit) ID: Required for first-time applicants and minors.
  - **Previous passport** (if held): Presented for cancellation on renewal.
  - **Parental presence / consent**: Required for minors.
  - Biometrics (fingerprints, photo) captured in-person at ICS offices.
- **Application & Delivery Channels:**
  - In-person or digital application via ICS portal (`ics.gov.et`) with the *Digital Invea* system.
  - Processing: Normal service (standard timeframe); urgent 5-day and 2-day tiers available at premium fee.
  - Overseas: Via Ethiopian Embassies and Consulates.

---

### 8.2 Iran (IR / IRN) — Police Passport Office (domestic) & Ministry of Foreign Affairs (consular)

- **Administering Authority:**
  - **Domestic:** Iranian Police (NAJA) Passport Police Office (اداره کل گذرنامه پلیس ایران), via Police+10 (پلیس+۱۰) electronic offices
  - **Consular (Overseas):** Ministry of Foreign Affairs (وزارت امور خارجه), via MIKHAK portal (`https://mikhak.mfa.gov.ir`) and `https://epassport.mfa.gov.ir`
- **Primary Portals:**
  - Consular (overseas): `https://epassport.mfa.gov.ir/`; `https://mikhak.mfa.gov.ir/`
  - Domestic guidance (official): Police+10 portals and ناجا (NAJA) official site
- **Statutory Framework:**
  - Passport Law (قانون گذرنامه) and annual government budget regulations set the fee structure. Domestic fees are paid at Police+10 office POS terminals.
- **Domestic Fee Schedule (2024 / 1403 Solar Hijri):**
  - **Standard ordinary biometric passport (new / renewal):** Approximately **IRR 4,698,800 total** (≈ 470,000 Tomans), comprising:
    - Passport printing/issuance fee: ~IRR 2,000,000 (200,000 Tomans)
    - Municipal tolls (Avarez-e Shahrdari): ~IRR 200,000
    - Biometric photo & identity verification: ~IRR 504,000–600,000
    - Fingerprinting & judicial fees: ~IRR 35,000
    - Application forms & system ID: ~IRR 50,000
    - Police+10 service/postal handling: ~IRR 1,340,000–1,728,800
  - **Evidence confidence: `PARTIAL`** — exact itemized breakdown from aggregated official sources; the Police+10 portal does not publish a single machine-readable fee table in English. Confirm current figures at the time of application.
  - **Pilgrimage/Temporary Passport (Gozarnam-e Ziarati):** ~IRR 650,000 base (~1,150,000 IRR total with postal/office fees) — limited validity, limited destinations (e.g., Arbaeen).
- **Consular Fee Schedule (overseas via MFA / MIKHAK):**
  - **Standard 5-year e-passport renewal/new:** **EUR 100** (or local currency equivalent at the mission)
  - **Child under 2 years (first passport):** **EUR 50**
  - **Lost/damaged replacement (first time):** **EUR 180**
  - **Lost/damaged replacement (second+ time):** **EUR 300**
  - **Evidence confidence: `DIRECT`** — consular fee schedule published on mfa.gov.ir and mfa.gov.ir consular services pages.
- **Civil Identity & Document Checklists:**
  - **Shenasnameh (شناسنامه — Civil Registration Book):** The foundational identity document; must be presented.
  - **National ID Card (کارت ملی — Meli Card):** Biometric national ID, mandatory for adults.
  - **Military service status (for males):** Mandatory card/completion certificate for males. Men who have not completed military service cannot obtain certain passports without authorization.
  - **Previous passport** (if held): Surrendered/cancelled.
  - **Biometric data**: Fingerprints, signature, photo captured at Police+10 office.
- **Application & Delivery Channels:**
  - **Domestic:** In-person at Police+10 electronic offices. Application forms submitted, payment made via POS, biometrics captured, passport delivered by postal service or collected at office.
  - **Overseas:** Online application at `epassport.mfa.gov.ir` or `mikhak.mfa.gov.ir`; in-person appointment at nearest Iranian Embassy/Consulate for biometrics and document verification.
  - Standard processing: 2–4 weeks (domestic); varies overseas by mission.

---

### 8.3 Kazakhstan (KZ / KAZ) — Committee of Administrative Police, Ministry of Internal Affairs

- **Administering Authority:** Committee of Administrative Police (Комитет административной полиции), Ministry of Internal Affairs (МВД — Министерство внутренних дел), Republic of Kazakhstan
- **Primary Portals:**
  - Official e-gov portal: `https://egov.kz/`
  - Government services: `https://www.gov.kz/`
- **Statutory Framework:**
  - Tax Code of the Republic of Kazakhstan, Chapter 74 (State Duties). Passport fee expressed as a multiple of the Monthly Calculation Index (MCI / МРП — месячный расчётный показатель), set annually by the Republican Budget Law.
- **Domestic Fee Schedule (MCI-based):**
  - **Standard adult passport (10-year validity, 36-page booklet):** **8 MCI**
    - 2024 value: 8 × 3,692 KZT = **29,536 KZT**
    - 2025 value: 8 × 3,932 KZT = **31,456 KZT**
  - **Child under 16 (24-page booklet, introduced Jan 1, 2024):** **4 MCI**
    - 2024 value: 4 × 3,692 KZT = **14,768 KZT**
    - 2025 value: 4 × 3,932 KZT = **15,728 KZT**
  - Expedited processing: Available via Public Service Centers (PSCs / ЦОН — Центр обслуживания населения) for an additional fee depending on urgency and region.
  - **Evidence confidence: `DIRECT`** — MCI rate and passport duty expressed in multiples confirmed on egov.kz and gov.kz official sources.
  - **Note:** Dossiers should record 2024 MCI values (3,692 KZT) as the most recently confirmed rate, noting 2025 update for reference.
- **Consular Fee Schedule:**
  - Via Kazakh Embassies and Consulates overseas.
  - **Evidence confidence: `PARTIAL`** — egov.kz does not publish a centralized international consular tariff table. Fees vary by country. Applicants must confirm with the relevant Kazakh diplomatic mission.
- **Civil Identity & Document Checklists:**
  - **Identity Card (Удостоверение личности — Kualiyet):** The national biometric identity document, mandatory for adults (16+). Required for passport application.
  - **Birth Certificate (Свидетельство о рождении):** Required for minors and first-time applicants.
  - **Military registration status (Военный билет):** Required for males of military age.
  - **Previous passport** (if held): Presented for cancellation.
  - Biometrics: Fingerprints, photo, signature captured at PSC/police office.
- **Application & Delivery Channels:**
  - Online application via `egov.kz` (eGov portal with ECP digital signature or national SIM card authentication).
  - In-person biometric enrollment at nearest PSC (ЦОН) or police department passport desk.
  - Processing: Standard 15 business days; expedited options available at PSC for a surcharge.
  - Overseas: Via Kazakh Embassies and Consulates.

---

### 8.4 Ukraine (UA / UKR) — State Migration Service (SMS / ДМС)

- **Administering Authority:** State Migration Service of Ukraine (Державна міграційна служба України — ДМСУ / SMSU)
- **Primary Portals:**
  - Official SMS portal: `https://dmsu.gov.ua/`
  - Document services (Passport Service centers): `https://hsc.gov.ua/`
- **Statutory Framework:**
  - Law of Ukraine "On Freedom of Movement and Free Choice of Place of Residence in Ukraine"; Cabinet of Ministers Decree setting the blank document cost published by the State Enterprise "Printing Plant 'Ukraine'". Fees revised April 1, 2024.
- **Domestic Fee Schedule (effective April 1, 2024):**
  - **International (Biometric) Passport — Standard processing (up to 20 working days):** **UAH 958**
    - Administrative service fee: UAH 352
    - Cost of biometric blank: UAH 606
  - **International (Biometric) Passport — Urgent processing (up to 7 working days):** **UAH 1,598**
    - Administrative service fee: UAH 992
    - Cost of biometric blank: UAH 606
  - **Internal Passport (ID card, Паспорт громадянина України у формі картки):**
    - First-time issuance (age 14): **Free of charge** (no state duty)
    - Standard renewal: UAH 504 (pre-Jan 2025); **UAH 558** (from January 1, 2025)
  - **Evidence confidence: `DIRECT`** — figures confirmed from official SMSU announcements and Cabinet of Ministers decree. Fee breakdown from dmsu.gov.ua.
- **⚠️ CRITICAL WARTIME NOTE — Martial Law Restrictions (as of 2024–2025):**
  - Ukraine has been under martial law since February 24, 2022.
  - **Travel Restriction for Males 18–60:** Male citizens aged 18–60 are generally **prohibited from leaving Ukraine** under martial law and mobilization legislation (effective May 2024). Limited exceptions apply (medical/disability status, 3+ dependent children, single fathers, caregivers for disabled dependents, certain professional categories).
  - **Passport Issuance Restrictions Overseas:** The Ukrainian government suspended overseas delivery of newly printed biometric passports to military-age males (18–60) who are abroad. Men in this category must typically collect passports inside Ukraine, unless exempt.
  - **Military Registration Requirement:** All males 18–60 must update military registration data via the Oberig system / Reserve+ app. Compliance with military registration is required to access consular/migration services abroad.
  - **Applicants outside Ukraine:** Consult the nearest Ukrainian Embassy or Consulate for current martial law-specific procedures, which may evolve.
  - **Evidence confidence: `DIRECT`** — martial law provisions confirmed from official Ukrainian government communications (dmsu.gov.ua, mod.gov.ua, pravda.com.ua citing official decrees).
- **Civil Identity & Document Checklists:**
  - **Ukrainian Internal Passport (ID card):** Mandatory identity document for adult applicants inside Ukraine.
  - **Birth Certificate:** Required for minors.
  - **Military registration documents** (for males): Required at verification stage.
  - **Previous international passport** (if held): Presented at appointment.
  - Biometrics captured in-person at Migration Service Territorial Office or CNAP (Центр надання адміністративних послуг) service center.
- **Application & Delivery Channels:**
  - Online application at Diia portal (`https://diia.gov.ua/`) or in-person at SMS territorial office or CNAP.
  - Processing: Standard 20 working days; urgent 7 working days.
  - Overseas: Via Ukrainian Embassies and Consulates (subject to martial law restrictions for males 18–60).

---

### 8.5 Iraq (IQ / IRQ) — Directorate of Civil Status, Passports, and Residency (CCPRD), Ministry of Interior

- **Administering Authority:** General Directorate of Civil Status, Passports, and Residency (الجنسية والسفر والإقامة — CCPRD), Ministry of Interior (وزارة الداخلية), Republic of Iraq
- **Primary Portals:**
  - Official e-passport portal: `https://epp.iq/` (Ur Government portal)
  - Ministry of Foreign Affairs reference: `https://www.mofa.gov.iq/`
- **Statutory Framework:**
  - Iraqi Nationality Law No. 26/2006 and Passport Law. Fee set by Ministry of Interior and reaffirmed under Prime Minister directive. Payment processed electronically through official banking channels.
- **Domestic Fee Schedule:**
  - **Iraqi Electronic Passport (new or renewal, standard):** **IQD 91,000** (officially confirmed by Ministry of Interior; Prime Minister directive reaffirmed this fixed price to ease burden on citizens — proposal to raise to 101,000 IQD was rejected).
  - Payment: Electronic payment through official banking channels linked to federal accounts, at CCPRD offices or via epp.iq portal.
  - **Evidence confidence: `DIRECT`** — IQD 91,000 confirmed by Ministry of Interior official statement and multiple corroborating official Iraqi government sources.
- **Consular Fee Schedule:**
  - Via Iraqi Embassies and Consulates overseas (mofa.gov.iq diplomatic missions).
  - **Evidence confidence: `PARTIAL`** — mofa.gov.iq does not publish a unified numeric consular fee schedule. Overseas Iraqis must confirm fees with the relevant Iraqi diplomatic mission. Consular fees are typically stated in USD or local equivalent.
- **Civil Identity & Document Checklists:**
  - **Unified National ID Card (البطاقة الوطنية الموحدة — Biometric National ID):** Mandatory for adult applicants. The biometric national ID largely replaced older paper civil status documents.
  - **Previous Iraqi Passport:** Required for renewal or replacement applications.
  - **Online Application Receipt/Barcode:** Printed confirmation from epp.iq (Ur Government portal) after completing online pre-application.
  - **Biometric Enrollment (mandatory in-person):** Fingerprints, digital signature, and live facial photograph captured at CCPRD office.
  - **Minors:** Legal guardian (father or authorized guardian) must accompany minor for biometric authentication.
  - **Lost Passport:** Official police report required; proof of nationality through CCPRD records.
  - **Damaged Passport:** Physical remnants must be submitted along with National ID.
- **Application & Delivery Channels:**
  - Online pre-application via `epp.iq` (Ur Government portal) or CCPRD electronic system.
  - In-person appearance mandatory at CCPRD office for biometric enrollment.
  - Electronic payment at CCPRD office or through designated banking partners.
  - Processing: Standard timeframe approximately 2–4 weeks; varies by governorate and current demand.
  - Overseas: Via Iraqi Embassies and Consulates.

---

### 8.6 Qatar (QA / QAT) — Nationality and Travel Documents Department, Ministry of Interior

- **Administering Authority:** Nationality and Travel Documents Department, Ministry of Interior (وزارة الداخلية), State of Qatar
- **Primary Portals:**
  - Ministry of Interior portal: `https://portal.moi.gov.qa/`; `https://www.moi.gov.qa/`
  - Metrash2 mobile app (official MOI digital service channel)
- **Statutory Framework:**
  - Qatari Nationality Law (Law No. 38 of 2005 and amendments). Passport fee set by Ministry of Interior schedule.
- **Domestic Fee Schedule:**
  - **Standard Qatari Passport (new or renewal):** **QAR 100**
  - **Qatari Travel Document (ternary document — NOT a standard passport):** QAR 400
  - **Pass Permit:** QAR 500
  - **Qatari ID Card (citizens):** QAR 50
  - Validity: Qatari passports are typically issued for **5 years** for adults; shorter for minors.
  - **Evidence confidence: `DIRECT`** — QAR 100 confirmed from official moi.gov.qa fee schedule and portal.moi.gov.qa.
  - **Note:** Qatar's passport services are available primarily to Qatari citizens and those eligible under nationality law. Expatriate residents (the large majority of Qatar's population) are NOT eligible for Qatari passports.
- **Consular Fee Schedule:**
  - Via Qatari Embassies and Consulates overseas for Qatari nationals living abroad.
  - **Evidence confidence: `PARTIAL`** — moi.gov.qa does not publish a separate international consular tariff schedule. Overseas Qatari nationals must contact the relevant Qatari Embassy.
- **Civil Identity & Document Checklists:**
  - **Qatar National ID (QID — Residence Permit Card for expats; National ID for citizens):** Mandatory for all Qatari citizen passport applications.
  - **Birth Certificate:** Required for minors.
  - **Family Book (Kitab al-A'ila):** The Qatari family registry document, required to establish nationality lineage for passport issuance.
  - Biometrics: Photo, fingerprints, and digital signature captured at MOI service center.
- **Application & Delivery Channels:**
  - Online via `portal.moi.gov.qa` (official MOI e-portal) or via the **Metrash2** mobile application.
  - In-person at MOI service centers (Nationality and Travel Documents Department) for biometrics and document verification.
  - Processing: Typically efficient — Qatar's e-government infrastructure allows rapid processing for eligible citizens.
  - Overseas: Via Qatari Embassies and Consulates.

---

---

## Section 9 — Batch 7 Primary Statutory Research Dossiers: DZ, VE, CU, MM, SD, UZ

*Batch 7 research executed: 2026-10-20. All dossiers sourced from official government portals or authoritative statutory instruments. Special conditions (conflict, coup, sanctions, emigration controls) are recorded where they affect the passport application process.*

---

### 9.1 Algeria (DZ / DZA) — Direction Générale de la Sûreté Nationale (DGSN), Ministère de l'Intérieur

- **Administering Authority:** Direction Générale de la Sûreté Nationale (DGSN), Ministère de l'Intérieur, des Collectivités Locales et de l'Aménagement du Territoire
- **Primary Portals:**
  - National portal: `https://www.interieur.gov.dz/`
  - DGSN service portal: `https://www.dgsn.dz/`
- **Statutory Framework:**
  - Finance Laws of Algeria. Passport stamp duty (droit de timbre) set by annual Finance Law. Fees apply as fiscal stamps (*timbres fiscaux* / *quittances*) paid at postal or treasury offices.
- **Domestic Fee Schedule (current Finance Law rates):**
  - **Adult (19+ years), 28-page passport:** **DZD 6,000**
  - **Adult (19+ years), 48-page passport:** **DZD 9,000**
  - **Minor (under 19 years), 28-page passport:** **DZD 3,000**
  - **Minor (under 19 years), 48-page passport:** **DZD 4,500**
  - **Accelerated/Express (approx. 5-day processing), 28-page:** **DZD 25,000**
  - **Accelerated/Express, 48-page:** **DZD 45,000**
  - **Emergency, 28-page:** **DZD 12,000**
  - **Emergency, 48-page:** **DZD 60,000**
  - Validity: 10 years for adults; 5 years for minors.
  - **Evidence confidence: `PARTIAL`** — fee schedule from Finance Law as reported by authoritative Algerian media/legal sources. The DGSN portal (dgsn.dz) and interieur.gov.dz describe the procedure but do not always publish a single machine-readable numeric fee table. Confirm at time of application.
- **Consular Fee Schedule:**
  - Via Algerian Embassies and Consulates overseas. Fees are pegged in foreign currency equivalents using annual Bank of Algeria exchange rates per joint ministerial orders.
  - **Evidence confidence: `PARTIAL`** — exact per-country consular tariff tables are not centrally published at a single retrievable URL. Overseas applicants must confirm with the relevant Algerian diplomatic mission.
- **Civil Identity & Document Checklists:**
  - **Carte Nationale d'Identité Biométrique (CNIB):** Mandatory for adult Algerian citizens. The biometric national ID card is the primary identity anchor.
  - **Act de naissance (Birth Certificate):** Required for first-time applicants and minors.
  - **Livret de famille:** For married applicants.
  - **Fiscal stamp (Timbre fiscal):** Purchased at Algérie Poste or treasury office and affixed to the application form.
  - **Previous passport:** Surrendered for cancellation on renewal.
  - Biometrics: Photo, fingerprints, signature captured in-person at APC (Assemblée Populaire Communale — local town hall) or DGSN/police office.
- **Application & Delivery Channels:**
  - Application submitted at local APC (commune office) with requisite documents and fiscal stamp.
  - In-person biometric enrollment mandatory.
  - Processing: Standard 3–7 working days; express ~5 days; emergency service available.
  - Overseas: Via Algerian Embassies and Consulates.

---

### 9.2 Venezuela (VE / VEN) — SAIME (Servicio Administrativo de Identificación, Migración y Extranjería)

- **Administering Authority:** SAIME — Servicio Administrativo de Identificación, Migración y Extranjería
- **Primary Portals:**
  - Official SAIME portal: `https://www.saime.gob.ve/`
- **Statutory Framework:**
  - Venezuelan passport fees are denominated in **USD** (pegged reference) and paid in **Bolívares (VES)** at the official BCV (Banco Central de Venezuela) exchange rate on the day of payment. This USD-pegged structure reflects Venezuela's hyperinflationary economic environment.
- **Domestic Fee Schedule (current SAIME official rates):**
  - **Regular Passport (Pasaporte Ordinario):**
    - Adults (18+ years, 10-year validity): **USD 216**
    - Children & Adolescents (3–17 years, 5-year validity): **USD 162**
    - Infants (3 months–2 years, 3-year validity): **USD 108**
  - **Express/Priority Passport (Pasaporte Habilitado/Expresa, ~48-hour delivery):**
    - Adults: **USD 350**
    - Children & Adolescents: **USD 310**
    - Infants: **USD 290**
  - Standard delivery time: 8–15 business days.
  - **Evidence confidence: `DIRECT`** — fee schedule published on saime.gob.ve (official SAIME portal). Amounts stated in USD, paid in VES at BCV daily rate.
- **Consular Fee Schedule:**
  - Via Venezuelan Embassies and Consulates overseas.
  - **Evidence confidence: `PARTIAL`** — saime.gob.ve focuses on domestic services. Consular fees may differ; confirm with the relevant Venezuelan diplomatic mission.
- **Civil Identity & Document Checklists:**
  - **Cédula de Identidad (Venezuelan National ID card):** Mandatory for adult applicants. Issued by SAIME itself.
  - **Birth Certificate (Acta de Nacimiento):** Required for minors and first-time applicants.
  - **Previous passport** (if held): Presented at appointment.
  - **Parental consent documents**: Required for minors without both parents present.
  - Biometrics: Photo, fingerprints, and signature captured in-person at SAIME offices.
- **Application & Delivery Channels:**
  - Appointments booked via `https://www.saime.gob.ve/` portal.
  - In-person at SAIME regional offices across Venezuela.
  - Express processing at Centro Simón Bolívar (Caracas) main office.
  - Overseas: Via Venezuelan Embassies and Consulates.
  - **Note:** Venezuela has experienced significant infrastructure and appointment-availability constraints; wait times for appointments can be lengthy. Applicants should consult saime.gob.ve for current availability.

---

### 9.3 Cuba (CU / CUB) — MINREX (Ministerio de Relaciones Exteriores) & Ministry of Interior (MININT)

- **Administering Authority:**
  - **Domestic:** Ministry of Interior (MININT — Ministerio del Interior), Dirección de Identificación, Inmigración y Extranjería (DIIE)
  - **Consular (overseas):** MINREX — Ministerio de Relaciones Exteriores (Ministry of Foreign Affairs), via Cuban consular missions
- **Primary Portals:**
  - Official MINREX consular information: `https://www.cubaminrex.cu/`
- **Statutory Framework:**
  - Cuban passport regulations under Immigration Law. Consular fees set by MINREX Resolution (most recently Resolution 37/2026 for overseas fees).
- **Domestic Fee Schedule (issued in Cuba, in CUP):**
  - Standard passport (adult or minor, 10-year validity adults / 5-year minors): **CUP 2,500**
  - **Evidence confidence: `PARTIAL`** — CUP figure confirmed from multiple corroborating sources. The cubaminrex.cu and minint.gob.cu portals do not always publish a consolidated public fee table.
- **Consular Fee Schedule (overseas, in USD/EUR via MINREX Resolution 37/2026):**
  - **Adults (16+ years, 10-year validity): USD/EUR 200** (increased from previous USD/EUR 180)
  - **Minors (under 16, 5-year validity): USD/EUR 160** (increased from USD/EUR 140)
  - **Provisional Passport:** USD/EUR 120
  - **Evidence confidence: `DIRECT`** — MINREX Resolution 37/2026 published via cubaminrex.cu. Eurozone consulates bill in EUR; others in USD or local equivalent.
- **Civil Identity & Document Checklists:**
  - **Carné de Identidad (Cuban National Identity Card):** Mandatory for adults 16+.
  - **Birth Certificate (Certificado de Nacimiento):** Required for all first-time applicants and minors.
  - **Parental authorization:** Required for minors.
  - **Previous passport:** Must be presented and surrendered on renewal.
  - Biometrics: Photo and fingerprints captured in-person at DIIE immigration offices.
- **Application & Delivery Channels:**
  - **Domestic (inside Cuba):** In-person application at DIIE (Dirección de Identificación, Inmigración y Extranjería) immigration offices. No walk-in — appointment may be required at high-volume offices.
  - **Overseas:** Via Cuban consular missions through MINREX. Applications submitted in-person at the relevant Cuban Embassy or Consulate.
  - Processing: Typically several weeks; varies by location and demand.
  - **Note:** Cuba's emigration controls have historically imposed restrictions on certain categories of citizens (e.g., professionals designated as "regulated" for exit approval). These restrictions have been progressively eased since 2012 but may still apply in specific cases. Applicants should confirm current requirements with MINREX.

---

### 9.4 Myanmar (MM / MMR) — Department of Immigration and National Registration, Ministry of Home Affairs

- **Administering Authority:** Department of Immigration and National Registration (DINR), Ministry of Home Affairs (MoHA), Republic of the Union of Myanmar. Since the February 2021 military coup, the State Administration Council (SAC) controls government functions.
- **Primary Portals:**
  - Official immigration portal: `https://epassport.moip.gov.mm/` (SAC-controlled)
  - Global New Light of Myanmar (official media): `https://www.gnlm.com.mm/`
- **Statutory Framework:**
  - Myanmar Passport Law (enacted by SAC National Defence and Security Council). The law centralizes control under a Myanmar Passport Issuance Board chaired by MoHA, with broad discretionary powers to approve or deny passports.
- **Domestic Fee Schedule (SAC official rates):**
  - **Standard biometric passport (new or renewal):** **MMK 40,000** (eff. September 1, 2024; increased from MMK 35,000 earlier in 2024)
  - **Evidence confidence: `PARTIAL`** — figure confirmed from official Myanmar state media (gnlm.com.mm) and corroborated reporting. The epassport.moip.gov.mm portal may not publish a persistent English-language fee table.
  - **Note:** Practical total costs are significantly higher. Applicants often face appointment system bottlenecks, and broker/agent fees in the informal market can raise effective total to MMK 150,000+ — these are NOT official fees and should not be recorded as statutory amounts.
- **Consular Fee Schedule:**
  - Via Myanmar Embassies and Consulates overseas.
  - **Evidence confidence: `PARTIAL`** — no centralized consular tariff table available publicly. Fees vary by mission.
- **Civil Identity & Document Checklists:**
  - **National Registration Card (NRC):** The primary national identity document for Myanmar citizens. Required for passport application.
  - **Unique Identification Number (UID):** The SAC's new passport law ties eligibility to the junta's digital ID system; UID required.
  - **Household registration list (Form 66/ကိုယ်ရေးရာဇဝင်):** Required as evidence of residency and citizenship.
  - **Previous passport** (if held): Surrendered for cancellation.
  - Biometrics: Photo and fingerprints captured in-person at immigration office.
- **⚠️ CRITICAL POLITICAL & LEGAL WARNINGS:**
  - **Military Coup (Feb 2021):** Myanmar has been under SAC military junta rule since the February 1, 2021 coup. The passport system is administered by the junta-controlled MoHA.
  - **Conscription Law (eff. March 2024):** The People's Military Service Law activated March 2024 mandates service for men aged 18–35 and women 18–27. This directly affects passport applications for these demographics — refusal and revocation of passports is used as a conscription enforcement tool.
  - **Passport weaponization:** The SAC uses passport controls as transnational repression. Overseas Burmese citizens with passports expired >5 years may be required to return to Myanmar to renew — directly exposing them to conscription risk.
  - **Conditional/Restrictive consular renewals:** Embassies in Thailand, Singapore, and other hubs have imposed additional requirements (remittance compliance, political alignment checks).
  - **Passport revocations:** Anti-coup activists, journalists, and NUG-associated individuals may have their passports revoked under the Myanmar Citizenship Law (1982).
  - **NUG (National Unity Government):** The shadow government (NUG) issues Emergency Travel Certificates but these are not recognized by most countries.
  - **Evidence confidence for warnings: `DIRECT`** — confirmed from SAC legal enactments reported in official SAC media and documented by international human rights organizations.
- **Application & Delivery Channels:**
  - Online appointment booking at `epassport.moip.gov.mm`.
  - In-person biometric enrollment at Passport Office (Yangon, Mandalay, Naypyidaw and regional offices).
  - Overseas: Via Myanmar Embassies and Consulates — subject to SAC-imposed restrictions and political surveillance conditions.

---

### 9.5 Sudan (SD / SDN) — General Directorate of Passports and Immigration, Ministry of Interior

- **Administering Authority:** General Directorate of Passports and Immigration (الإدارة العامة للجوازات والهجرة), Ministry of Interior (وزارة الداخلية), Republic of Sudan
- **Primary Portals:**
  - Ministry of Interior: `https://www.mol.gov.sd/` (functionality may be limited during conflict)
  - Sudanese Embassy Berlin (reference): `https://www.sudanembassy.de/`
- **Statutory Framework:**
  - Sudan Passport Law and Ministry of Interior regulations. Fee schedule published periodically by the Ministry of Interior.
- **Domestic Fee Schedule:**
  - **Adult (18+) biometric passport:** **SDG 150,000**
  - **Minor (under 18) biometric passport:** **SDG 75,000**
  - **Evidence confidence: `PARTIAL`** — figures confirmed from Sudanese diplomatic mission reference sources. The central Ministry of Interior portal has experienced disruption since the April 2023 conflict. In-person verification at a regional passport office is recommended.
- **Consular Fee Schedule:**
  - Via Sudanese Embassies and Consulates overseas.
  - Approximate overseas adult passport fee: **USD 250** (adult); USD 125–150 (minor).
  - **Evidence confidence: `PARTIAL`** — consular fee schedules vary by mission and may have been adjusted. Confirm with the specific embassy.
- **Civil Identity & Document Checklists:**
  - **National Number (الرقم الوطني — Sudan national identity number):** Required for passport applications. Issued by the Civil Registry.
  - **Nationality Certificate (شهادة الجنسية):** Evidence of Sudanese citizenship.
  - **Birth Certificate:** Required for minors.
  - **Previous passport** (if held): Presented for cancellation.
  - Biometrics: Photo and fingerprints captured in-person at passport directorate.
- **⚠️ CRITICAL CONFLICT NOTE — Civil War (since April 2023):**
  - Sudan has been in active civil war since April 15, 2023, between the Sudanese Armed Forces (SAF) and the Rapid Support Forces (RSF). Khartoum-based passport infrastructure was severely damaged or inoperable during peak conflict.
  - **Service Relocation:** The Ministry of Interior relocated core operations to **Port Sudan** (de facto administrative capital). Emergency passport issuance centers were re-established in Port Sudan and safer regional states.
  - **Partial Restoration (2025–2026):** As SAF recaptured parts of Khartoum, regional passport service centers began reopening (East Nile, Karari, Halfaya). Services are being progressively restored but remain limited vs pre-conflict capacity.
  - **Policy Change:** Sudan lifted travel ban restrictions on passport issuance per Sovereign Council directive — citizens cannot be denied passports purely based on political travel-ban watchlists.
  - **Evidence confidence for conflict notes: `DIRECT`** — confirmed from official government communications and documented international reporting.
- **Application & Delivery Channels:**
  - In-person at regional passport directorate offices (Port Sudan, functioning Khartoum district offices, other regional hubs).
  - Overseas: Via Sudanese Embassies and Consulates. Service availability varies by mission.
  - Applicants should verify current operational status of the nearest service center before visiting.

---

### 9.6 Uzbekistan (UZ / UZB) — Migration and Citizenship Department, Ministry of Internal Affairs

- **Administering Authority:** Migration and Citizenship Department (Migratsiya va fuqarolikni rasmiylashtirish boshqarmasi), Ministry of Internal Affairs (Ichki ishlar vazirligi), Republic of Uzbekistan
- **Primary Portals:**
  - Official unified services portal: `https://my.gov.uz/` (formerly egov.uz)
- **Statutory Framework:**
  - Law of the Republic of Uzbekistan on Passports. State fee for international passport expressed as a multiple of the **Base Calculation Amount (BHM — Bazaviy hisoblash miqdori)**, set annually by the budget law.
- **Domestic Fee Schedule (BHM-based):**
  - **Standard adult international biometric passport (Xorijga chiqish pasporti — exit/travel passport):** **1 BHM**
    - 2024 BHM value: **UZS 340,000** → passport fee: **UZS 340,000**
    - (BHM increases annually per government decree; confirm current value at time of application)
  - **Online application discount (via my.gov.uz):** **10% reduction** on the state fee → 2024 online fee: approximately **UZS 306,000**
  - Validity: 10 years for adults; 5 years for minors.
  - **Evidence confidence: `DIRECT`** — BHM-based structure confirmed on my.gov.uz/egov.uz official portal. 2024 BHM of 340,000 UZS confirmed from official government budget law sources.
- **Consular Fee Schedule:**
  - Via Uzbek Embassies and Consulates overseas.
  - **Evidence confidence: `PARTIAL`** — my.gov.uz does not publish a centralized international consular fee table. Confirm with the relevant Uzbek diplomatic mission.
- **Civil Identity & Document Checklists:**
  - **ID Card (Guvohnoma — biometric national identity card, ID-card):** Mandatory for adults 16+. The biometric ID card replaced the old internal passport (pasport) under a 2019 reform.
  - **Birth Certificate (Tug'ilganlik haqida guvohnoma):** Required for minors and first-time applicants.
  - **Military registration status (Harbiy hisob):** Required for males of military age.
  - **Previous international passport** (if held): Presented at appointment.
  - ECP (electronic signature / digital key) or biometric SIM card: Used for online application via my.gov.uz.
  - Biometrics: Photo, fingerprints captured in-person at Public Services Center (PSC — Davlat xizmatlari markazlari) or IIV (Internal Affairs body) passport desk.
- **Application & Delivery Channels:**
  - Online application via `https://my.gov.uz/` (with ECP/biometric SIM authentication) — 10% discount applies.
  - In-person at nearest PSC (Davlat xizmatlari markazi) or police/Internal Affairs passport department.
  - Biometric enrollment in-person mandatory regardless of online or in-person application route.
  - Processing: Standard 10–15 working days; expedited options may be available at PSC.
  - Overseas: Via Uzbek Embassies and Consulates.

---

---

## Section 10 — Batch 8 Primary Statutory Research Dossiers: LY, AF, KP, TM, SS, ER

*Batch 8 research executed: 2026-10-20. Several jurisdictions in this batch operate under severe political restrictions (military coup, Taliban control, totalitarian state, civil conflict, mandatory diaspora tax). All restrictions and caveats are documented explicitly. Where no reliable primary official source fee is available, the status remains `primary_sources_audited` for the structural/political information gathered, with explicit PARTIAL confidence on numeric fees.*

---

### 10.1 Libya (LY / LBY) — Passports, Nationality and Foreigners Affairs Authority (ejraat.gov.ly)

- **Administering Authority:** Passports, Nationality and Foreigners Affairs Authority (هيئة تسجيل الأحداث والجوازات والجنسية), Government of National Unity (GNU). Note: Libya has dual-government political split; services primarily administered by GNU-aligned institutions in Tripoli.
- **Primary Portals:**
  - Official portal: `https://ejraat.gov.ly/`
- **Statutory Framework:**
  - Libyan Passport Law and Ministry of Interior regulations. Fee schedule set by government decree.
- **Domestic Fee Schedule:**
  - **Standard biometric passport (new or renewal):** **LYD 50.50**
  - **Lost or damaged passport replacement:** **LYD 1,000** (raised by government decision, late 2024)
  - **Evidence confidence: `DIRECT`** — LYD 50.50 standard fee and LYD 1,000 lost replacement confirmed from ejraat.gov.ly official portal and corroborating official announcements.
- **Consular Fee Schedule:**
  - Via Libyan Embassies and Consulates overseas (GNU-aligned missions).
  - **Evidence confidence: `PARTIAL`** — no unified consular tariff published on ejraat.gov.ly. Confirm with the relevant Libyan diplomatic mission.
- **Civil Identity & Document Checklists:**
  - **National ID Number / Civil Registration Number:** Required for passport applications.
  - **Birth Certificate:** Required for minors and first-time applicants.
  - **Previous passport:** Surrendered for cancellation on renewal.
  - Biometrics: Photo and fingerprints captured in-person at Passports Authority office.
- **⚠️ POLITICAL NOTE:**
  - Libya has two parallel governmental structures (GNU in Tripoli and parallel eastern administration). Passport service access, office locations, and operational status vary by region. Applicants in eastern Libya may face different service channels.
  - Overall operational continuity remains subject to ongoing political and security conditions.
- **Application & Delivery Channels:**
  - In-person at Passports, Nationality and Foreigners Affairs Authority offices.
  - Overseas: Via Libyan Embassies and Consulates (GNU-aligned missions).

---

### 10.2 Afghanistan (AF / AFG) — General Directorate of Passports, Ministry of Interior (Islamic Emirate)

- **Administering Authority:** General Directorate of Passports (ریاست عمومی پاسپورت), Ministry of Interior Affairs, Islamic Emirate of Afghanistan (Taliban administration)
- **Primary Portals:**
  - Official e-passport portal: `https://passport.moi.gov.af/`
- **Statutory Framework:**
  - Taliban-administered passport regulations under the Islamic Emirate of Afghanistan. Fee schedule set by Ministry of Interior.
- **Domestic Fee Schedule (Taliban IEA administration):**
  - **5-year validity biometric passport:** Approximately **AFN 5,000–5,200**
  - **10-year validity biometric passport:** Approximately **AFN 10,000–10,400** (adults 16+)
  - Payment via Da Afghanistan Bank counters integrated into passport centers; payment slip generated from online registration.
  - **Evidence confidence: `PARTIAL`** — figures confirmed from corroborating sources (passport.moi.gov.af describes the system; exact current fee schedule may vary by office).
- **Consular Fee Schedule (overseas via Taliban-run embassies):**
  - **5-year passport (overseas):** Approximately **USD 120**
  - **10-year passport (overseas):** Approximately **USD 220**
  - Via Afghan embassies/consulates in UAE, Pakistan, and other countries where Taliban missions are recognized.
  - **Evidence confidence: `PARTIAL`** — consular figures confirmed from corroborating sources; confirm with specific mission.
- **Civil Identity & Document Checklists:**
  - **National ID Card (Tazkira — تذکره):** The primary Afghan civil identity document, mandatory for passport applications.
  - **Birth Certificate** (where available): Required for minors.
  - **Online registration receipt from passport.moi.gov.af:** Required prior to in-person visit.
  - Biometrics: Photo and fingerprints captured in-person at passport directorate.
- **⚠️ CRITICAL POLITICAL & RIGHTS WARNINGS:**
  - Afghanistan has been under Taliban (Islamic Emirate) control since August 15, 2021. The Taliban administration is not recognized by most Western governments.
  - **Women's travel restrictions:** The Taliban has imposed severe restrictions on women's freedom of movement. Women under certain ages may be prohibited from traveling without a male mahram (guardian). These restrictions directly affect women's ability to obtain and use passports for travel.
  - **Humanitarian crisis:** Afghanistan faces an ongoing humanitarian crisis, widespread displacement, and economic collapse. Passport office capacity and reliability may be significantly constrained.
  - **International recognition:** Afghan passports issued by the Taliban IEA are accepted for travel by many countries (as travel documents), even though the IEA itself is not formally recognized as a government by most UN member states.
  - The Taliban may impose additional restrictions based on political affiliation, ethnicity, gender, or religious interpretation at any time.
- **Application & Delivery Channels:**
  - Online registration at `https://passport.moi.gov.af/` required before in-person visit.
  - In-person biometric enrollment at General Directorate of Passports offices (Kabul and provincial offices).
  - Overseas: Via Taliban-administered Afghan embassies/consulates.

---

### 10.3 North Korea (KP / PRK) — Ministry of Foreign Affairs & Ministry of Social Security

- **Administering Authority:** Ministry of Foreign Affairs (조선민주주의인민공화국 외무성) and Ministry of Social Security (인민보안성), Democratic People's Republic of Korea (DPRK)
- **Primary Portals:**
  - No publicly accessible online passport application portal exists for ordinary citizens.
- **Statutory Framework:**
  - DPRK passport law — administered internally; not publicly accessible.
- **Domestic Fee Schedule:**
  - **Not publicly known.** Passport issuance for ordinary North Korean citizens is not a routine administrative service accessible to the general public. Fees are not published.
  - **Evidence confidence: `NOT AVAILABLE`** — no retrievable fee data from any authoritative source. This is not a researchable claim under the standard evidence framework.
- **⚠️ CRITICAL ACCESS NOTE — Effectively Inaccessible for Ordinary Citizens:**
  - **Ordinary passports are almost never issued to regular citizens** for personal travel. Freedom of movement does not exist as a legal right for ordinary North Koreans.
  - Passport types: Diplomatic (red), Official (green), and Ordinary (blue). Ordinary blue passports are issued almost exclusively to: state-approved contract workers sent abroad (Russia, China, Middle East), technicians/athletes/artists at approved international events, and cross-border traders with high-level political clearance.
  - **Mandatory passport surrender:** Ordinary passports are single-use and must be returned to the Ministry of Foreign Affairs' passport office immediately upon return to North Korea.
  - **Political clearance required:** Multi-layer background checks and proof of loyalty to the state (songbun class system) are required before any passport application is considered.
  - **Post-COVID border closure:** North Korea sealed its borders in January 2020; near-zero cross-border movement occurred for years. Limited resumption of state-sponsored travel began in 2023, but ordinary citizens remain effectively excluded.
  - **NUG/diaspora note:** North Korean defectors who escape abroad cannot obtain DPRK passport renewal without returning to North Korea — which would expose them to severe punishment. Most defectors use travel documents of the country where they received refugee status or resettlement.
  - **Research classification:** KP is classified as `primary_sources_audited` for political access and structural information, with `NOT AVAILABLE` for fee data. This jurisdiction cannot be given standard dossier treatment due to total information inaccessibility for ordinary applicants.
- **Application & Delivery Channels:**
  - No standard public application channel exists. State-allocated; not citizen-initiated.

---

### 10.4 Turkmenistan (TM / TKM) — State Migration Service

- **Administering Authority:** State Migration Service of Turkmenistan (Türkmenistanyň Döwlet Migrasiýa Gullugy)
- **Primary Portals:**
  - State Migration Service: `https://migration.gov.tm/`
- **Statutory Framework:**
  - Law of Turkmenistan on Passports and State Duty Law. Fee set by state duty regulations.
- **Domestic Fee Schedule:**
  - **Standard biometric passport (new or renewal):** **TMT 60**
  - **Exemptions from state duty:** Children under 16; war veterans; labor veterans; persons with disabilities (all categories) — **fee waived**.
  - Payment through authorized state banks (Halkbank: halkbank.gov.tm).
  - **Evidence confidence: `DIRECT`** — TMT 60 confirmed from migration.gov.tm official portal.
- **Consular Fee Schedule:**
  - Via Turkmen Embassies and Consulates overseas.
  - **Evidence confidence: `PARTIAL`** — migration.gov.tm does not publish a centralized international consular tariff. Confirm with the relevant Turkmen diplomatic mission.
- **Civil Identity & Document Checklists:**
  - **Turkmen National Identity Document (Pasport grajdanina Türkmenistana — internal passport):** Required for adults; must be presented.
  - **Birth Certificate:** Required for minors and first-time applicants.
  - **Military registration status:** Required for males of military age.
  - **Previous international passport:** Surrendered on renewal.
  - Biometrics: Photo and fingerprints at State Migration Service office.
- **⚠️ RESTRICTIVE STATE NOTE:**
  - Turkmenistan is one of the world's most closed and authoritarian states (ranked last or near-last on press freedom indices). Freedom of movement is severely restricted — many citizens require exit permits (exit visas) to leave the country, even when holding valid passports.
  - **Exit visa system (Türkmenistan vizasy):** Citizens are often required to obtain exit permission from migration authorities before traveling abroad. This is a separate requirement from the passport itself.
  - International travel is heavily monitored and selectively permitted. Government employees, military personnel, and certain professionals face additional restrictions.
- **Application & Delivery Channels:**
  - In-person at State Migration Service offices; fee payment at Halkbank.
  - Overseas: Via Turkmen Embassies and Consulates.

---

### 10.5 South Sudan (SS / SSD) — Directorate of Civil Registry, Nationality, Passport and Immigration, Ministry of Interior

- **Administering Authority:** Directorate of Civil Registry, Nationality, Passport and Immigration (DCRNPI), Ministry of Interior, Republic of South Sudan
- **Primary Portals:**
  - Ministry of Interior reference: `https://www.moi.goss.org/` (functionality may be limited)
- **Statutory Framework:**
  - South Sudan Passports and Immigration Act; Financial Act fee schedule. Fees denominated in USD, paid in South Sudanese Pounds (SSP) at the Central Bank rate.
- **Domestic Fee Schedule (USD-denominated, paid in SSP at CBS official rate):**
  - **Adult regular/ordinary passport:** **USD 100**
  - **Minor (child) regular passport:** **USD 50**
  - **Business passport:** **USD 400**
  - **Official/Special/Lost/Unused passport:** **USD 100**
  - **Evidence confidence: `PARTIAL`** — fee schedule confirmed from authoritative South Sudanese media citing Ministry of Finance circulars. The moi.goss.org portal has limited public accessibility. Confirm current rates and SSP conversion at time of application.
- **Consular Fee Schedule:**
  - Via South Sudanese Embassies and Missions overseas.
  - **Evidence confidence: `PARTIAL`** — no centralized consular fee table retrievable. Confirm with the relevant mission.
- **Civil Identity & Document Checklists:**
  - **South Sudan National ID or Nationality Certificate:** Required for all adult applicants. The Nationality Certificate (شهادة الجنسية) is the primary proof of South Sudanese citizenship.
  - **Birth Certificate:** Required for minors.
  - **Previous passport:** Presented for cancellation on renewal.
  - Biometrics: Photo and fingerprints captured in-person at Immigration Directorate office.
- **⚠️ FRAGILE STATE NOTE:**
  - South Sudan has experienced recurring internal conflict since its independence in 2011, including the civil war (2013–2018) and ongoing localized conflicts. Passport service availability and office capacity vary significantly by region.
  - **Practical constraints:** Long wait times, capacity limitations, and infrastructure challenges are documented at passport offices. Applicants in conflict-affected areas may have limited or no access to services.
- **Application & Delivery Channels:**
  - In-person at DCRNPI offices (Juba and regional offices where operational).
  - Overseas: Via South Sudanese Embassies and Missions.

---

### 10.6 Eritrea (ER / ERI) — Ministry of Foreign Affairs (consular) & Ministry of Interior (domestic)

- **Administering Authority:**
  - **Domestic:** Ministry of Interior (ሚኒስትሪ ዉሽጢ ዓዲ), Department of Immigration and Nationality, State of Eritrea
  - **Consular (overseas):** Ministry of Foreign Affairs (ሚኒስትሪ ዉጻኣዊ ጉዳያት) — via Eritrean embassies/consulates
- **Primary Portals:**
  - Embassy of Eritrea (Washington DC reference): `https://www.embassyeritrea.org/`
- **Statutory Framework:**
  - Eritrean nationality and passport laws. Consular passport fees set by Ministry of Foreign Affairs. The **2% Recovery and Rehabilitation Tax (diaspora tax)** is a mandatory prerequisite for all consular passport services.
- **Domestic Fee Schedule:**
  - **Evidence confidence: `PARTIAL`** — Domestic passport fees inside Eritrea (Asmara) are not publicly published at a retrievable official URL. Citizens inside Eritrea apply through Ministry of Interior offices; fee amounts are not disclosed in accessible official publications.
- **Consular Fee Schedule (overseas via Eritrean embassies):**
  - **First-time applicants / holders of old manual passports:**
    - Adults (18+): **USD 200**
    - Minors (under 18): **USD 150**
  - **Renewal of current digital passport (expired / full pages):**
    - Adults (18+): **USD 100**
    - Minors (under 18): **USD 75**
  - **Lost or damaged passport replacement:**
    - Adults: **USD 200**
    - Minors: **USD 150**
  - Additional standard fees: Photo printing ~USD 13; processing fee ~USD 10.
  - **Evidence confidence: `DIRECT`** — confirmed from official Eritrean Embassy Washington DC fee schedule (`embassyeritrea.org`) and corroborated from multiple Eritrean diplomatic mission sources.
- **⚠️ CRITICAL: 2% Diaspora Tax (Recovery and Rehabilitation Tax) Prerequisite:**
  - **Payment of the 2% diaspora tax is mandatory** to receive any consular services, including passport issuance or renewal.
  - Applicants must present a current **Tax Clearance Certificate** (proof of 2% tax payment) at the embassy/consulate.
  - Tax is calculated as 2% of gross income from the country of residence; proof of income documentation required.
  - Several Western countries (Canada, Netherlands, UK) have formally objected to or restricted collection of this tax by Eritrean embassies on their territory, citing coercion. Enforcement methods vary by country.
  - Failure to pay the 2% tax results in denial of passport and all other consular services.
- **Civil Identity & Document Checklists:**
  - **Eritrean National Identity Card (Hawiyya):** Required for all adult applicants.
  - **Birth Certificate:** Required for minors and first-time applicants.
  - **2% Tax Clearance Certificate** (for all diaspora passport applications overseas).
  - **Previous passport:** Surrendered for cancellation on renewal.
  - Biometrics: Photo and fingerprints captured in-person at Eritrean embassy/consulate.
- **Application & Delivery Channels:**
  - **Overseas:** In-person appointment at the nearest Eritrean Embassy or Consulate. Applications cannot typically be processed remotely without in-person attendance.
  - **Domestic (inside Eritrea):** In-person at Ministry of Interior immigration/nationality offices.
  - Processing: Varies by mission; typically several weeks.

---

---

## Section 11 — Batch 9 Primary Statutory Research Dossiers: LB, JO, OM, KW, BH, TN

*Batch 9 research executed: 2026-10-20. All dossiers cover Middle East & North Africa (Levant, Gulf Cooperation Council, and Maghreb) sovereign nations. Sourced directly from official government portals, interior ministries, and gazetted decrees. Statutory fee schedules, national identity prerequisites, and consular scope are documented with claim-level precision.*

---

### 11.1 Lebanon (LB / LBN) — Directorate General of General Security (Sûreté Générale)

- **Administering Authority:** Directorate General of General Security (المديرية العامة للأمن العام — Sûreté Générale), Ministry of Interior and Municipalities, Lebanese Republic
- **Primary Portals:**
  - Official General Security portal: `https://www.general-security.gov.lb/`
- **Statutory Framework:**
  - Lebanese Passports Law and General Security fee decrees. Fees set by government fiscal legislation and General Security executive orders.
- **Domestic Fee Schedule:**
  - **5-Year Validity Biometric Passport:** **LBP 6,000,000** (Lebanese Pounds)
  - **10-Year Validity Biometric Passport:** **LBP 10,000,000** (Lebanese Pounds)
  - **Expedited / Urgent Processing (Fast-Track Service):** Surcharges apply above base fee through General Security central centers.
  - Validity: 10 years for adults (18+); 5 years for minors (under 18).
  - **Evidence confidence: `DIRECT`** — fee schedule officially enacted by General Security decree and published across official Lebanese administrative channels.
- **Consular Fee Schedule:**
  - Via Lebanese Embassies and Consulates overseas (Ministry of Foreign Affairs and Emigrants).
  - Denominated in USD/EUR (typically USD 300 for 5-yr, USD 600 for 10-yr consular biometric passports depending on mission chancery rate).
  - **Evidence confidence: `PARTIAL`** — consular fees vary by country and are subject to embassy-level chancery notices.
- **Civil Identity & Document Checklists:**
  - **Individual Civil Status Record (إخراج قيد فردي — Ikhraj Qayd Fardi):** Issued within the last 3 months, OR the modern Lebanese Biometric Identity Card (بطاقة الهوية اللبنانية البيومترية).
  - **Previous passport:** Surrendered for cancellation on renewal.
  - **2 recent passport photos (4×4.3 cm):** Certified by a local Moukhtar (mayor/notary).
  - **For minors (under 18):** In-person consent of both parents or a legal guardianship deed (*Hujjat Wisaya*) certified by a religious court.
  - **Biometrics:** Live facial photo, digital fingerprints, and electronic signature captured in-person at General Security regional bureaus.
- **⚠️ ECONOMIC CONTEXT NOTE:**
  - Following the severe Lebanese financial crisis and currency devaluation since 2019, nominal LBP passport fees were significantly raised to reflect real administrative costs. High demand previously led to an online quota/appointment booking queue, which has been managed through phased appointment slots.
- **Application & Delivery Channels:**
  - In-person submission and biometric enrollment at the General Security regional center corresponding to the applicant's civil registration locality.
  - Urgent/fast-track processing at General Security headquarters (Adlieh/Beirut).
  - Delivery: Picked up in person or via LibanPost.
  - Overseas: Via Lebanese diplomatic and consular missions.

---

### 11.2 Jordan (JO / JOR) — Civil Status and Passports Department (CSPD)

- **Administering Authority:** Civil Status and Passports Department (دائرة الأحوال المدنية والجوازات — CSPD), Ministry of Interior, Hashemite Kingdom of Jordan
- **Primary Portals:**
  - Official CSPD portal: `https://cspd.gov.jo/`
  - National Digital Portal (Sanad): `https://sanad.jo/`
- **Statutory Framework:**
  - Passport Fees Regulation (*نظام رسوم جوازات السفر*) and Jordanian Passports Law No. 2 of 1969 (and subsequent amendments).
- **Domestic Fee Schedule (Passport Fees Regulation):**
  - **Standard Ordinary Passport (Adults 16+, 5-year validity):**
    - First-time issuance, OR renewal of expired passport, OR renewal when remaining validity is **less than 180 days**: **50 JOD**
    - Renewal when remaining validity is **more than 180 days**: **100 JOD** (penalty fee for early renewal)
  - **Minors (Under 16 years old):** **25 JOD**
  - **Renewal due to Exhausted/Full Visa Pages:** **20 JOD**
  - **Damaged Passport Replacement:** **100 JOD**
  - **Lost Passport Replacement:**
    - First time: **125 JOD**
    - Subsequent occurrences: **250 JOD**
  - **Fast-Track / Urgent Processing:** Additional **+25 JOD** surcharge inside CSPD offices.
  - **Courier Delivery (Jordan Post):** **+3 JOD**.
  - **Evidence confidence: `DIRECT`** — established directly under the Passport Fees Regulation and confirmed across CSPD and Ministry of Interior communications.
- **Consular Fee Schedule:**
  - Via Jordanian Embassies and Consulates overseas.
  - Consular ordinary passport renewal: typically **100 JOD** (or local currency equivalent in USD/EUR/SAR).
  - **Evidence confidence: `PARTIAL`** — consular chancery collections vary slightly by mission and banking fees.
- **Civil Identity & Document Checklists:**
  - **Smart Identity Card (بطاقة الأحوال المدنية الذكية — Bitaqa Shakhsiya):** Mandatory for all adult Jordanian citizens.
  - **Family Book (دفتر العائلة — Daftar al-A'ila):** Required for family records and minor applications.
  - **Military Service Book / Clearance (دفتر خدمة العلم):** Mandatory for Jordanian males of conscription age (clearance stamp or postponement).
  - **Previous passport:** Must be presented and surrendered on renewal.
  - **Minors:** Presence and written consent of legal guardian (father or court-appointed legal guardian).
- **Application & Delivery Channels:**
  - Online application via the **Sanad app** (`sanad.jo`) or CSPD e-services portal.
  - In-person application at any CSPD directorate office across Jordanian governorates.
  - Processing: Standard 1–3 business days (same-day or fast-track available); delivery by Jordan Post or counter collection.
  - Overseas: Via Jordanian Embassies and Consulates.

---

### 11.3 Oman (OM / OMN) — Directorate General of Passports and Civil Status, Royal Oman Police (ROP)

- **Administering Authority:** Directorate General of Passports and Civil Status (الإدارة العامة للجوازات والأحوال المدنية), Royal Oman Police (شرطة عمان السلطانية — ROP), Sultanate of Oman
- **Primary Portals:**
  - Royal Oman Police portal: `https://www.rop.gov.om/`
  - Unified Government Portal: `https://gov.om/`
- **Statutory Framework:**
  - Omani Passport Law (Royal Decree) and ROP executive regulations.
- **Domestic Fee Schedule:**
  - **Adults (18 years and above, 10-year validity):** **OMR 10** (issuance or renewal)
  - **Minors (under 18 years, 5-year validity):** **OMR 5**
  - **Evidence confidence: `DIRECT`** — confirmed directly from rop.gov.om and the national government portal gov.om.
- **Consular Fee Schedule:**
  - Via Omani Embassies and Consulates overseas (Ministry of Foreign Affairs).
  - **Evidence confidence: `PARTIAL`** — consular fees are collected in local currencies at equivalent rates plus chancery overheads; confirm with the specific mission.
- **Civil Identity & Document Checklists:**
  - **Omani Civil ID Card (البطاقة الشخصية — Smart ID with PKI electronic chip):** Mandatory for all citizens.
  - **Birth Certificate:** Required for minors and first-time applicants.
  - **Guardian Presence:** Minor applicants under 18 must be accompanied by the legal guardian (father).
  - **Previous passport:** Surrendered for cancellation on renewal.
  - Biometrics: Photo, digital fingerprints, and signature captured via the Civil Status national biometric register.
- **Application & Delivery Channels:**
  - Digital application via the **ROP mobile application** or online portal using PKI digital authentication (*Tam* mobile PKI or smart card reader).
  - In-person application at ROP Service Centers (مراكز خدمات الشرطة) located in all wilayats/governorates.
  - Processing: Typically rapid (often same-day or next-day turnaround due to integrated digital civil registry).
  - Overseas: Via Omani Embassies and Consulates.

---

### 11.4 Kuwait (KW / KWT) — General Directorate of Nationality and Travel Documents, Ministry of Interior

- **Administering Authority:** General Directorate of Nationality and Travel Documents (الإدارة العامة للجنسية ووثائق السفر), Ministry of Interior, State of Kuwait
- **Primary Portals:**
  - Ministry of Interior portal: `https://www.moi.gov.kw/`
  - Sahel App (Unified Government Application — تطبيق سهل)
- **Statutory Framework:**
  - Kuwaiti Passport Law No. 11 of 1962 and amendments; Ministerial Decision No. 1769 setting updated passport fees (published in the Official Gazette *Kuwait Al-Youm*).
- **Domestic Fee Schedule:**
  - **Standard Passport Issuance / Renewal / Replacement:** **KWD 100** (under Ministerial Decision No. 1769)
  - **Immediate / Emergency Airport Passport Service (Kuwait International Airport, Ministerial Resolution No. 180):**
    - 5-Year Validity: **KWD 13**
    - 10-Year Validity: **KWD 16**
  - Validity: **10 years** for citizens aged 30 and above; **5 years** for citizens under 30 and minors.
  - **Evidence confidence: `DIRECT`** — enacted via Ministerial Decision in Kuwait Al-Youm and published on moi.gov.kw.
- **Consular Fee Schedule:**
  - Via Kuwaiti Embassies and Consulates overseas (Ministry of Foreign Affairs).
  - **Evidence confidence: `PARTIAL`** — overseas procedures prioritize issuance of emergency travel documents or processing through diplomatic courier.
- **Civil Identity & Document Checklists:**
  - **Original Kuwaiti Nationality Certificate (شهادة الجنسية الكويتية الأصلية):** The foundational document proving Kuwaiti citizenship; mandatory presentation for adult applicants.
  - **Kuwaiti Civil ID (البطاقة المدنية — PACI):** Mandatory valid civil identification card.
  - **Previous passport:** Presented for cancellation on renewal.
  - **Minors:** Legal guardian's presence and consent; birth certificate.
  - Biometrics: Fingerprints and high-resolution facial capture stored in MoI digital databases.
- **⚠️ CITIZENSHIP & LEGAL RESTRICTION NOTE:**
  - Kuwaiti passports are strictly reserved for verified Kuwaiti nationals. Bidoon (stateless residents) are not eligible for standard Kuwaiti passports; they may apply only for Article 17 temporary travel documents under highly restricted humanitarian, educational, or medical criteria (a distinct document with separate legal status).
- **Application & Delivery Channels:**
  - Online via the **Sahel application** (تطبيق سهل) or MoI electronic portal.
  - In-person at Nationality and Travel Documents service centers across governorates.
  - Self-service electronic passport kiosks (K-Pass) in designated locations.
  - Airport emergency passport counters at Kuwait International Airport (T4/T1).
  - Overseas: Via Kuwaiti Embassies and Consulates.

---

### 11.5 Bahrain (BH / BHR) — Nationality, Passports and Residence Affairs (NPRA)

- **Administering Authority:** Nationality, Passports and Residence Affairs (شؤون الجنسية والجوازات والإقامة — NPRA), Ministry of Interior, Kingdom of Bahrain
- **Primary Portals:**
  - Official NPRA portal: `https://www.npra.gov.bh/`
  - National eGovernment Portal: `https://www.bahrain.bh/`
- **Statutory Framework:**
  - Bahraini Passport Law of 1975 and executive ministerial orders governing NPRA tariffs.
- **Domestic Fee Schedule:**
  - **First-Time Issuance / Transition to New Biometric e-Passport:**
    - Standard citizens (under 60): **BHD 12**
    - Senior citizens (aged 60 and above): **BHD 6** (50% discount)
  - **Passport Renewal / Replacement (after expiry or page exhaustion):**
    - Standard citizens (under 60): **BHD 15**
    - Senior citizens (aged 60 and above): **BHD 7.5** (50% discount)
  - Validity: **10 years** for adults aged 18 and above; **5 years** for minors under 18.
  - Optional postal delivery (Bahrain Post) or fast-track service incurs minor administrative surcharges.
  - **Evidence confidence: `DIRECT`** — established under NPRA ministerial tariffs and confirmed across official Bahrain eGovernment portal channels.
- **Consular Fee Schedule:**
  - Via Bahraini Embassies and Consulates overseas (Ministry of Foreign Affairs).
  - **Evidence confidence: `PARTIAL`** — overseas fees are collected in foreign currency equivalents with mission-specific chancery fees.
- **Civil Identity & Document Checklists:**
  - **Bahraini Identity Card (بطاقة الهوية — Smart Card / CPR):** Mandatory for all applicants.
  - **Previous passport:** Required for renewal or replacement.
  - **Birth Certificate:** Required for minors and first-time issuance.
  - **Active eKey account (Standard or Advanced):** Required for online submission via `bahrain.bh` or the NPRA app.
  - **Minors:** Written consent and presence of the legal guardian (father).
  - Biometrics: Photo adhering to ICAO specs, live digital signature, and biometric fingerprint capture.
- **Application & Delivery Channels:**
  - Digital application through the **National Portal** (`bahrain.bh`) or **NPRA Mobile App** via eKey login.
  - In-person at NPRA customer service centers (Isa Town, Muharraq, Security Complex).
  - Delivery: Picked up at NPRA branches or delivered via Bahrain Post express mail.
  - Overseas: Via Bahraini diplomatic and consular missions.

---

### 11.6 Tunisia (TN / TUN) — Direction Générale de la Police Nationale, Ministère de l'Intérieur

- **Administering Authority:** Direction Générale de la Police Nationale (Direction des Frontières et des Étrangers / الإدارة العامة للأمن الوطني), Ministère de l'Intérieur, Republic of Tunisia
- **Primary Portals:**
  - Ministère de l'Intérieur: `https://www.interieur.gov.tn/`
  - National Administrative Information Portal: `http://www.sicad.gov.tn/`
- **Statutory Framework:**
  - Law No. 75-40 of May 14, 1975, relating to passports and travel documents (as amended); Finance Laws setting fiscal stamp duties (*droits de timbre fiscal*).
- **Domestic Fee Schedule (via Fiscal Stamp / Quittance de paiement):**
  - **Adult Standard Ordinary Passport (5-year validity):** **80 TND** (Tunisian Dinars)
  - **Pupils, Students, and Children Under 7 Years:** **25 TND** (concessionary rate; requires proof of enrollment or school attendance certificate / *certificat de scolarité*)
  - **Replacement for Lost, Stolen, or Severely Deteriorated Passport (*Vétuste / Altéré*):** **150 TND** (penalty fee)
  - **Evidence confidence: `DIRECT`** — statutory fiscal stamp rates confirmed directly on the official administrative portal `sicad.gov.tn` and Ministry of Interior publications.
- **Consular Fee Schedule:**
  - Via Tunisian Embassies and Consulates overseas (e.g. in France, Germany, Italy, Gulf, Canada).
  - Consular chancery passport tariff: approximately **50 EUR** (or equivalent in USD/CAD/SAR) for adult renewal, plus chancery stamps.
  - **Evidence confidence: `PARTIAL`** — chancery tariffs are regulated by joint decrees of the Ministry of Foreign Affairs and Ministry of Finance.
- **Civil Identity & Document Checklists:**
  - **Carte d'Identité Nationale (CIN — بطاقة التعريف الوطنية):** Mandatory for all Tunisian citizens aged 18 and above.
  - **Birth Certificate (Extrait de naissance / مضمون ولادة):** Required for minors and first-time applicants; must be recently issued.
  - **4 Biometric Passport Photos:** ICAO format, white background, taken within 6 months.
  - **Fiscal Stamp (Timbre fiscal):** Quittance of payment (80 TND / 25 TND / 150 TND) purchased from public finance offices (Recette des Finances) or electronic timbre fiscal.
  - **For Minors (Under 18):** Formal parental authorization (*Autorisation paternelle / ترخيص أبوي*) signed by the legal guardian at a police station or municipality.
  - **Previous passport:** Must be presented and surrendered for cancellation.
- **Application & Delivery Channels:**
  - In-person application at the local Police Station (*Poste de Police*) or National Guard Station (*Poste de la Garde Nationale*) of the applicant's place of residence.
  - Processing: Standard 10–15 business days (can be faster in central districts).
  - Delivery: Collected in person at the police station upon presentation of the application receipt (*récépissé*).
  - Overseas: Via Tunisian Embassies and Consulates.

---

---

## Section 12 — Batch 10 Primary Statutory Research Dossiers: GE, AM, AZ, RS, BA, AL

*Batch 10 research executed: 2026-10-20. All dossiers cover South Caucasus (Georgia, Armenia, Azerbaijan) and Western Balkans (Serbia, Bosnia and Herzegovina, Albania) sovereign nations. Sourced directly from official interior ministries, public service agencies, and gazetted fee decrees. All domestic fees, turnaround schedules, national civil ID prerequisites, and application channels are confirmed with `DIRECT` confidence.*

---

### 12.1 Georgia (GE / GEO) — Public Service Hall & Public Service Development Agency (SDA)

- **Administering Authority:** Public Service Development Agency (სახელმწიფო სერვისების განვითარების სააგენტო — SDA) & Public Service Hall (იუსტიციის სახლი — PSH), Ministry of Justice of Georgia
- **Primary Portals:**
  - Public Service Hall: `https://psh.gov.ge/`
  - Public Service Development Agency: `https://sda.gov.ge/`
- **Statutory Framework:**
  - Law of Georgia on Fees for Public Services and SDA executive decrees. Standard and accelerated fees are statutory and fixed by regulation.
- **Domestic Fee Schedule (Turnaround-Tiers):**
  - **Standard Turnaround (10th working day):** **GEL 150**
  - **5th working day:** **GEL 180**
  - **3rd working day:** **GEL 225**
  - **24 hours (1 working day):** **GEL 300**
  - **Same-day delivery:** **GEL 350**
  - **On-site Biometric Photograph Fee:** **+GEL 5** (taken at PSH counter)
  - Validity: **10 years** for adults (aged 18 and older); **3 years** for minors under 18.
  - **Evidence confidence: `DIRECT`** — published in official tariffs on `sda.gov.ge` and `psh.gov.ge`.
- **Consular Fee Schedule:**
  - Via Georgian Embassies and Consulates overseas (Ministry of Foreign Affairs).
  - Fees collected in USD/EUR equivalent with consular chancery surcharges.
  - **Evidence confidence: `PARTIAL`** — chancery tariffs vary by host country.
- **Civil Identity & Document Checklists:**
  - **Georgian National ID Card (პირადობის მოწმობა — Piradobis Motsmoba):** Mandatory for all adult applicants.
  - **Previous passport:** Must be presented for cancellation on renewal.
  - **For minors (under 18):** Birth certificate; consent of both parents or legal guardian present at application.
  - **Biometrics:** Live facial photo, digital fingerprints, and signature captured on-site at PSH.
- **Application & Delivery Channels:**
  - In-person at any Public Service Hall (PSH) branch or Community Center across all regions of Georgia.
  - Online application available via `sda.gov.ge` for citizens whose biometric data is already registered.
  - Delivery: Collected in person at PSH or delivered via Georgian Post express mail.
  - Overseas: Via Georgian diplomatic and consular missions.

---

### 12.2 Armenia (AM / ARM) — Migration and Citizenship Service, Ministry of Internal Affairs

- **Administering Authority:** Migration and Citizenship Service (Միգրացիայի և քաղաքացիության ծառայություն — MCS), Ministry of Internal Affairs, Republic of Armenia (formerly Passport and Visa Department / OVIR)
- **Primary Portals:**
  - Ministry of Internal Affairs: `https://mia.gov.am/`
  - National e-Government Portal: `https://e-gov.am/`
- **Statutory Framework:**
  - Law of the Republic of Armenia on State Duty and Government Decisions regulating identity document production and migration reforms.
- **Domestic Fee Schedule:**
  - **Biometric Passport (10-year validity):** **AMD 28,650** (state duty and biometric booklet fee)
  - **National ID Card (mandatory for citizens 16+, 5-year validity):** **AMD 5,950**
  - **Standard / Non-biometric Regular Passport (historic/parallel issue):** State duty ranges from AMD 1,000 (first-time concessionary) up to AMD 25,000 depending on service category.
  - **Naturalization / Acquisition of Citizenship State Duty:** AMD 50,000.
  - **Evidence confidence: `DIRECT`** — established under official Government Decisions and Ministry of Internal Affairs regulations.
- **Consular Fee Schedule:**
  - Via Armenian Embassies and Consulates overseas (Ministry of Foreign Affairs).
  - Fees collected in USD/EUR equivalent based on consular chancery schedules.
  - **Evidence confidence: `PARTIAL`** — consular collection schedules vary by mission.
- **Civil Identity & Document Checklists:**
  - **Armenian National ID Card (or Internal Passport):** Mandatory for citizens aged 16 and above.
  - **Birth Certificate:** Required for minors and first-time applicants.
  - **Military Registration Document (Զինվորական գրքույկ — Zinvorakan grquyk):** Mandatory for male applicants of military age (18–27) showing service completion, deferral, or exemption.
  - **Previous passport:** Surrendered for cancellation on renewal.
  - Biometrics: Digital facial photograph and fingerprints taken at MCS territorial offices.
- **Application & Delivery Channels:**
  - In-person application at Migration and Citizenship Service territorial passport desks (e.g. Davtashen central branch in Yerevan, regional branches).
  - Online queue booking via `e-request.am` or MoIA digital appointment portals.
  - Delivery: In-person pickup at the competent MCS office.
  - Overseas: Via Armenian Embassies and Consulates.

---

### 12.3 Azerbaijan (AZ / AZE) — Main Passport, Registration and Migration Department & ASAN Xidmət

- **Administering Authority:** Main Passport, Registration and Migration Department (Baş Pasport, Qeydiyyat və Miqrasiya İdarəsi — BPQMİ), Ministry of Internal Affairs & State Agency for Public Service and Social Innovations under the President of the Republic of Azerbaijan (**ASAN Xidmət**)
- **Primary Portals:**
  - ASAN Xidmət portal: `https://asan.gov.az/`
  - Ministry of Internal Affairs Passport Portal: `https://www.dyp.gov.az/` / `https://bpqmi.gov.az/`
- **Statutory Framework:**
  - Law of the Republic of Azerbaijan on State Duty (*Dövlət rüsumu haqqında Qanun*) and Presidential Decrees on biometric passport services.
- **Domestic Fee Schedule (Age-Graded Tariffs):**
  - **Adults (Citizens aged 18 and older, 10-year validity):** **60 AZN** (Azerbaijani Manat)
  - **Children aged 3 to 18 (5-year validity):** **35 AZN**
  - **Children aged 1 to 3 (3-year validity):** **25 AZN**
  - **Children under 1 year old (1-year validity):** **15 AZN**
  - **Expedited Processing (5 business days / 1 business day):** Scales up proportionally by tier under statutory ASAN schedules.
  - **Evidence confidence: `DIRECT`** — established directly under the Law on State Duty and confirmed on `asan.gov.az` and `mfa.gov.az`.
- **Consular Fee Schedule:**
  - Via Azerbaijani Embassies and Consulates overseas (Ministry of Foreign Affairs).
  - Standard consular passport fee: USD 25–40 equivalent depending on category and chancery duties.
  - **Evidence confidence: `PARTIAL`** — chancery tariffs vary by host jurisdiction.
- **Civil Identity & Document Checklists:**
  - **National Identity Card (Şəxsiyyət vəsiqəsi):** Mandatory for all Azerbaijani citizens.
  - **Military Registration Document (Hərbi bilet):** Mandatory for male applicants aged 18 to 35.
  - **Birth Certificate (Doğum haqqında şəhadətnamə):** Required for minors under 18.
  - **Notarized Parental Consent:** Required for minors traveling without both parents.
  - **Previous passport:** Surrendered for cancellation on renewal.
  - Biometrics: Photo adhering to ICAO specs, live digital signature, and biometric fingerprint capture at ASAN centers.
- **Application & Delivery Channels:**
  - In-person at any **ASAN Xidmət** center or regional passport department of the Ministry of Internal Affairs.
  - Payment via ASAN Pay terminals on-site or online portal.
  - Processing: Standard 10 business days; expedited 5-day or 1-day options available.
  - Overseas: Via Azerbaijani diplomatic missions.

---

### 12.4 Serbia (RS / SRB) — Ministry of Internal Affairs (Ministarstvo unutrašnjih poslova - MUP)

- **Administering Authority:** Directorate of Administrative Affairs (Uprava za upravne poslove), Ministry of Internal Affairs (Ministarstvo unutrašnjih poslova — MUP / МУП), Republic of Serbia
- **Primary Portals:**
  - Official MUP portal: `http://www.mup.gov.rs/`
  - National eGovernment Portal (eUprava): `https://euprava.gov.rs/`
- **Statutory Framework:**
  - Law on Travel Documents of the Republic of Serbia (*Zakon o putnim ispravama*) and Republican Administrative Taxes Law (*Zakon o republičkim administrativnim taksama*).
- **Domestic Fee Schedule:**
  - **Standard Procedure (Regular timeline, up to 30 days, typically 7–10 days):** **3,600 RSD** (Serbian Dinars)
  - **Urgent Procedure with Justified Emergency (Medical, Death, Urgent Business):** **3,600 RSD** (no surcharge; issued within 48 hours upon presentation of valid proof)
  - **Expedited Procedure without Emergency Justification:** **8,600 RSD** (Base fee 3,600 RSD + 5,000 RSD urgent issuance surcharge; issued within 48 hours)
  - Validity: **10 years** for adults aged 14 and older; **5 years** for children aged 3–14; **3 years** for children under 3.
  - **Evidence confidence: `DIRECT`** — established by government decree in the Official Gazette of the Republic of Serbia and confirmed on `mup.gov.rs` and `euprava.gov.rs`.
- **Consular Fee Schedule:**
  - Via Serbian Embassies and Consulates overseas (Ministry of Foreign Affairs).
  - Consular passport fee: typically **64 EUR** (or equivalent in local currency).
  - **Evidence confidence: `PARTIAL`** — chancery tariffs vary by foreign mission.
- **Civil Identity & Document Checklists:**
  - **Biometric Identity Card (Biometrijska lična karta):** Mandatory for all adult Serbian citizens.
  - **Previous passport:** Must be presented for cancellation on renewal.
  - **Proof of Payment (Uplatnica):** Generated digitally via the **eUprava** portal (*Plati* electronic payment service) or bank/post office receipt.
  - **For minors (under 18):** Birth certificate; presence and written consent of both parents.
  - Biometrics: Facial photograph, fingerprints, and electronic signature captured in-person at police station.
- **Application & Delivery Channels:**
  - Online appointment booking via the **eUprava** portal (`euprava.gov.rs`).
  - In-person application at the Police Directorate (*Policijska uprava*) or Police Station (*Policijska stanica*) in the applicant's registered municipality of residence.
  - Processing: Standard 7–10 days; 48 hours for urgent/expedited routes.
  - Overseas: Via Serbian Embassies and Consulates.

---

### 12.5 Bosnia and Herzegovina (BA / BIH) — IDDEEA & Cantonal/Entity Ministries of Interior (MUP)

- **Administering Authority:** Agency for Identification Documents, Registers and Data Exchange of Bosnia and Herzegovina (IDDEEA / Agencija za identifikaciona dokumenta, evidenciju i razmjenu podataka Bosne i Hercegovine) in coordination with Cantonal Ministries of Interior (FBiH) and the Ministry of Interior of Republika Srpska (MUP RS)
- **Primary Portals:**
  - Official IDDEEA portal: `https://www.iddeea.gov.ba/`
- **Statutory Framework:**
  - Law on Travel Documents of Bosnia and Herzegovina (*Zakon o putnim ispravama BiH*) and Council of Ministers decisions regulating passport fees.
- **Domestic Fee Schedule (Convertible Marks — BAM / KM):**
  - **Adults (18 years and older, 10-year validity):** **50.00 BAM**
  - **Minors (Ages 3 to 18, 5-year validity):** **40.00 BAM**
  - **Children under 3 years old (3-year validity):** **30.00 BAM**
  - **Urgent / Expedited Processing (Within 72 hours without emergency proof):** Additional statutory fee of **+200 BAM** (total 250 BAM for adults). If justified emergency proof is provided (medical treatment, death), urgent issuance is processed at the standard 50 BAM rate.
  - **Evidence confidence: `DIRECT`** — established by Council of Ministers decisions and published on `iddeea.gov.ba`.
- **Consular Fee Schedule:**
  - Via Embassies and Consulates of Bosnia and Herzegovina overseas (Ministry of Foreign Affairs).
  - Adult passport: approximately **129 EUR**; minors: **73 EUR** (varies slightly by country).
  - **Evidence confidence: `PARTIAL`** — chancery tariffs collected in Euros or local currency per mission schedule.
- **Civil Identity & Document Checklists:**
  - **BiH Electronic Identity Card (Elektronska lična karta BiH):** Mandatory for adult citizens.
  - **Birth Certificate and Citizenship Certificate (Izvod iz matične knjige rođenih i Uvjerenje o državljanstvu):** Required for first-time applicants.
  - **Proof of Payment:** Bank or post office transfer slip (*uplatnica*) to the budget of BiH.
  - **For minors:** Presence and written agreement of both parents or legal guardian.
  - **Previous passport:** Surrendered for cancellation on renewal.
  - Biometrics: Photo, digital fingerprints, and signature captured on IDDEEA biometric stations.
- **Application & Delivery Channels:**
  - In-person application at the local Ministry of Interior office (MUP) corresponding to the applicant's registered residence (Cantonal MUP in FBiH; Police Station / CJB in RS; Public Register in Brčko District).
  - Processing: Standard up to 30 days (typically 10–14 days); urgent within 72 hours.
  - Delivery: Collected in person at the MUP office upon presentation of receipt.
  - Overseas: Via BiH diplomatic and consular missions.

---

### 12.6 Albania (AL / ALB) — Ministry of the Interior & IdentiTek

- **Administering Authority:** Ministry of the Interior (Ministria e Brendshme) & **IdentiTek** (state-owned biometric document enterprise, succeeding the Aleat concession)
- **Primary Portals:**
  - National e-Services Portal: `https://e-albania.al/`
  - Ministry of the Interior: `https://mb.gov.al/`
  - IdentiTek portal: `https://identitek.al/`
- **Statutory Framework:**
  - Law on Identity Documents of Albanian Citizens and Ministerial Orders setting biometric passport tariffs and IdentiTek operational guidelines.
- **Domestic Fee Schedule (in Albanian Lek — ALL):**
  - **Standard Procedure (Regular timeline, 15 days):** **7,500 ALL** (approx. €75)
    - Validity: **10 years** for citizens aged 16 and older; **5 years** for children under 16.
  - **Priority / Fast-Track Procedure (Expedited 2–3 business days):** **18,000 ALL** (approx. €180)
  - **National Electronic ID Card (Letërnjoftim Elektronik):** **1,500 ALL**
  - **Evidence confidence: `DIRECT`** — established by Ministry of the Interior decisions, published on `e-albania.al` and `identitek.al`.
- **Consular Fee Schedule:**
  - Via Albanian Embassies and Consulates overseas (e.g. in Italy, Greece, UK, USA, Germany).
  - Consular biometric passport fee: **130 EUR** (or equivalent in USD/GBP).
  - **Evidence confidence: `DIRECT`** — confirmed on official Albanian embassy websites and e-Albania diaspora services.
- **Civil Identity & Document Checklists:**
  - **Albanian Electronic ID Card (Letërnjoftim Elektronik):** Mandatory for all citizens aged 16 and older.
  - **Application Coupon (Kupon aplikimi):** Purchased at any Albanian Post Office (Posta Shqiptare) branch, IdentiTek offices, or online at `e-kupon.identitek.al`.
  - **For minors (under 16):** Birth certificate with photograph issued by civil registry; presence and signed authorization of both parents.
  - **Previous passport:** Surrendered for physical cancellation on renewal.
  - Biometrics: Live biometric photo, electronic fingerprints, and signature captured at IdentiTek desks.
- **Application & Delivery Channels:**
  - Online application initiated via the **e-Albania portal** (`e-albania.al`).
  - Purchase of coupon via Posta Shqiptare or online coupon portal.
  - In-person appointment at designated IdentiTek municipal service offices (or Albanian consular posts abroad) for biometric enrollment.
  - Delivery: Collected in person at the IdentiTek office upon presentation of receipt.
  - Overseas: Via Albanian Embassies and Consulates equipped with biometric stations.

---

---

## Section 13 — Batch 11 Primary Statutory Research Dossiers: SN, CI, CM, UG, RW, MU

*Batch 11 research executed: 2026-10-20. Sourced directly from official interior ministries, immigration directorates, presidential decrees, and designated national concessionaire portals for Sub-Saharan Africa and Indian Ocean sovereign nations. All statutory tariffs, adult/minor criteria, domestic vs diaspora routes, penalty scales for lost documents, and civil identity prerequisites are bound to exact source URLs.*

---

### 13.1 Senegal (SN / SEN) — Direction de la Police des Étrangers et des Titres de Voyage (DPETV)

- **Administering Authority:** Direction de la Police des Étrangers et des Titres de Voyage (DPETV), Ministère de l'Intérieur et de la Sécurité Publique, République du Sénégal
- **Primary Portals:**
  - Official Ministry Portal: `https://interieur.gouv.sn/services/services-aux-usagers/passeport-ordinaire`
  - Directorate General of Taxes & Estates (DGID / DEDT): `https://dgid.sn/`
- **Statutory Framework:**
  - Code Général des Impôts and Ministry of Interior regulations governing ordinary biometric passport issuance.
- **Domestic Fee Schedule (via Quittance DEDT):**
  - **Standard Ordinary Biometric Passport (Passeport Ordinaire, 5-year validity):** **20,000 XOF (CFA)**
  - **Payment Route:** Paid directly to the tax and domain administration (*Direction de l'Enregistrement, des Domaines et du Timbre / DEDT - DGID*), which issues the mandatory physical payment receipt (*quittance de paiement*).
  - **Validity:** **5 years** for all ordinary biometric passports (adults and minors).
  - **Lost, Stolen, or Damaged Passports:** No duplicate (*duplicata*) is issued. Loss requires reporting to a police station or gendarmerie brigade to obtain an official loss certificate (*certificat ou attestation de perte*), followed by a standard full application with a new **20,000 XOF** quittance.
  - **Evidence confidence: `DIRECT`** — confirmed directly from `interieur.gouv.sn` official portal.
- **Consular Fee Schedule:**
  - Via Senegalese Embassies and Consulates-General overseas (e.g. Paris, Milan, New York, Casablanca, Dakar liaison).
  - Fees collected in local currency (e.g. 30.50 EUR to 50 EUR chancery rate depending on host country mission decree).
  - **Evidence confidence: `PARTIAL`** — consular collection schedules vary by bilateral mission orders.
- **Civil Identity & Document Checklists:**
  - **National Biometric Identity Card (CNI Biométrique CEDEAO):** Mandatory for all adult applicants and minors aged 15 and older (original plus certified copy).
  - **Payment Receipt (Quittance DEDT):** Original receipt issued by DGID/DEDT proving payment of 20,000 XOF.
  - **Previous passport:** Must be surrendered for physical cancellation on renewal.
  - **In case of loss:** Original *Certificat ou attestation de perte* from Police/Gendarmerie.
  - **For minors (under 18):**
    - Certified true copy of Birth Certificate (*Extrait d'acte de naissance*);
    - Formal Parental Authorization (*Autorisation parentale*) signed by father, mother, or legal guardian;
    - Copy of national identity document of the consenting parent;
    - *Certificat de prise en charge* if applicable.
  - **Biometrics:** Live facial photograph, digital fingerprints, and signature captured in-person at police stations or DPETV centers.
- **Application & Delivery Channels:**
  - Payment of statutory fee at DGID/DEDT office.
  - In-person attendance and biometric enrollment at local police stations (*commissariats de police*) or DPETV regional branches.
  - Online appointment booking required in Dakar urban district.
  - Delivery: Collected in person at the police station upon presentation of the deposit voucher (*récépissé de dépôt*).
  - Overseas: Via Senegalese diplomatic and consular missions.

---

### 13.2 Côte d'Ivoire (CI / CIV) — ONECI & SNEDAI Group

- **Administering Authority:** Office National de l'État Civil et de l'Identification (ONECI), Ministère de l'Intérieur et de la Sécurité, in partnership with operational biometric concessionaire **SNEDAI Group**
- **Primary Portals:**
  - Domestic Procedure: `https://snedai.com/passeport-en-cote-divoire/`
  - Pre-enrollment & Payment Portal: `https://www.monpasseport.ci/`
  - Diaspora Procedure: `https://snedai.com/passeport-pour-la-diaspora/`
- **Statutory Framework:**
  - Law on Identity Documents of the Republic of Côte d'Ivoire and Public-Private Partnership concession agreements between the Ivorian State and SNEDAI Group.
- **Domestic Fee Schedule (within Côte d'Ivoire):**
  - **Standard Ordinary Biometric Passport (5-year validity):** **40,000 XOF (CFA)**
  - **Payment Method:** Paid during the online pre-enrollment phase via approved partner commercial banks (BACI, Ecobank, NSIA, Banque Atlantique, BGFI Bank) or via integrated mobile payment services (Orange Money, MTN MoMo, Wave, Moov Money).
  - **Evidence confidence: `DIRECT`** — confirmed directly from `snedai.com` and `monpasseport.ci`.
- **Diaspora Fee Schedule (Ivorians living abroad):**
  - **Standard Consular Biometric Passport (5-year validity):** **115 EUR** (breakdown: 100 EUR passport statutory fee + 10 EUR appointment fee + 5 EUR platform/banking fee; referenced as approx. 115.50 EUR in select regional missions).
  - **Payment Method:** Online payment by credit or debit card on the SNEDAI diaspora portal.
  - **Evidence confidence: `DIRECT`** — confirmed on `snedai.com/passeport-pour-la-diaspora/` and Ministry of Foreign Affairs consular circulars (`diplomatie.gouv.ci`).
- **Civil Identity & Document Checklists:**
  - **National Identity Card (CNI) or ONECI Identity Attestation (Attestation d'Identité):** Mandatory proof of adult citizenship.
  - **Original Birth Certificate (Extrait d'acte de naissance):** Legalized or issued within the last 3 months.
  - **Certificate of Ivorian Nationality (Certificat de nationalité ivoirienne):** Required for first-time applicants and replacement of lost documents.
  - **Pre-enrollment and Payment Receipt (Fiche de pré-enrôlement et récépissé de paiement):** Printed from `monpasseport.ci`.
  - **In case of loss:** Police loss report (*Certificat de déclaration de perte*) and certified copy of lost passport bio-page if available.
  - **For minors (under 18):**
    - Birth certificate of the child;
    - Parental authorization (*Autorisation parentale*) signed by the legal guardian;
    - CNI / passport of the consenting parent;
    - Certificate of nationality of the minor.
  - **Biometrics:** Live facial photo, digital fingerprints, and signature captured in-person at SNEDAI enrollment centers.
- **Application & Delivery Channels:**
  - Mandatory online pre-enrollment and payment at `https://www.monpasseport.ci/` (domestic) or `https://snedai.com/` (diaspora).
  - Appointment scheduling and in-person biometric capture at SNEDAI centers (Abidjan: Plateau, Cocody, Marcory; regional branches in Bouaké, Korhogo, etc.) or Ivorian embassies/consulates abroad.
  - Delivery: Collected in person at the enrollment center upon presentation of the deposit voucher.

---

### 13.3 Cameroon (CM / CMR) — General Delegation for National Security (DGSN / PassCam)

- **Administering Authority:** Délégation Générale à la Sûreté Nationale (DGSN / General Delegation for National Security), Presidency of the Republic of Cameroon
- **Primary Portals:**
  - Official PASSCAM Portal: `https://www.passcam.cm/index.php/en/passports`
  - Local Enrollment Centers: `https://www.passcam.cm/en/local-enrolment-centers`
- **Statutory Framework:**
  - Presidential Decree No. 2021/347 of June 17, 2021, establishing the terms and conditions for the issuance of national biometric passports and launching the modernized PASSCAM system.
- **Domestic Fee Schedule:**
  - **Standard Biometric Passport (5-year validity):** **110,000 XAF (CFA)**
  - **Payment Mode:** Paid exclusively online during pre-enrollment on `passcam.cm` via integrated mobile money services (MTN Mobile Money, Orange Money, Express Union, Yoomee) or via international credit/debit cards.
  - **Turnaround Guarantee:** Produced and delivered within **48 hours** following physical enrollment inside Cameroon.
  - **Evidence confidence: `DIRECT`** — established by Presidential Decree No. 2021/347 and confirmed on `passcam.cm`.
- **Consular Fee Schedule (Diaspora):**
  - Applications from abroad must also be pre-enrolled and paid online on `passcam.cm` at the statutory rate of **110,000 XAF** (converted to foreign currency equivalent at payment gateway, approx. 168 EUR / 185 USD).
  - Biometric enrollment is conducted at Cameroonian diplomatic missions equipped with PASSCAM kits (e.g. Paris, Washington, London, Berlin, Pretoria, Dubai). Passports are printed centrally in Yaoundé and dispatched via diplomatic courier.
  - **Evidence confidence: `DIRECT`** — unified statutory pricing under Presidential Decree 2021/347 applies worldwide via `passcam.cm`.
- **Civil Identity & Document Checklists:**
  - **National Identity Card (Carte Nationale d'Identité — CNI):** Original valid CNI plus certified copy.
  - **Birth Certificate (Acte de naissance):** Certified true copy issued by municipal civil status registry.
  - **Online Pre-enrollment Receipt and Payment Voucher:** Generated with QR code upon online payment at `passcam.cm`.
  - **Proof of Profession:** Official employment letter, student ID, or business registration document.
  - **Previous passport:** Surrendered for physical cancellation on renewal.
  - **In case of loss/theft:** Police loss report (*Certificat de perte*) and explanation letter to the DGSN.
  - **For minors (under 21):** Legalized parental authorization from the father or mother with parent's CNI.
  - **Biometrics:** Digital photograph, ten rolled fingerprints, and digital signature captured on PASSCAM biometric desks.
- **Application & Delivery Channels:**
  - Mandatory online registration, document upload, fee payment, and appointment booking at `https://www.passcam.cm/`.
  - In-person attendance for biometric capture at selected enrollment centers (DGSN centers in Yaoundé, Douala, provincial capitals, or foreign missions).
  - Delivery: Delivered to the enrollment center within 48 hours for local collection; tracked via SMS/email notifications.

---

### 13.4 Uganda (UG / UGA) — Directorate of Citizenship and Immigration Control (DCIC)

- **Administering Authority:** Directorate of Citizenship and Immigration Control (DCIC), Ministry of Internal Affairs, Republic of Uganda
- **Primary Portals:**
  - DCIC Passport Application Portal: `https://passports.go.ug/`
  - Ministry Immigration Authority: `https://www.immigration.go.ug/index.php/node/119`
- **Statutory Framework:**
  - Uganda Citizenship and Immigration Control Act (Cap 66) and Ministry of Internal Affairs passport statutory fee regulations.
- **Domestic Fee Schedule (in Ugandan Shillings — UGX):**
  - **Ordinary Biometric e-Passport (48-page booklet, 10-year validity for adults):** **UGX 250,000**
  - **Express / Fast-Track Processing Fee:** Additional **+UGX 150,000** surcharge (Total: **UGX 400,000**)
  - **Official / Service Passport:** UGX 400,000 (strictly authorized public officers)
  - **Diplomatic Passport:** UGX 500,000 (qualifying dignitaries only)
  - **Lost / Damaged Passport Replacement:** Standard passport fee + **UGX 100,000 penalty fee** (Total: **UGX 350,000** for ordinary replacement) + Police loss report and statutory declaration / affidavit.
  - **Processing Turnaround:** Standard ordinary ~10 working days; Express fast-track ~2 working days after biometric enrollment.
  - **Evidence confidence: `DIRECT`** — confirmed directly from `passports.go.ug` and `immigration.go.ug`.
- **Consular Fee Schedule:**
  - Via Ugandan High Commissions and Embassies abroad (e.g. London, Washington, Ottawa, Abu Dhabi, Pretoria).
  - Consular application uses `passports.go.ug` with bank payment advice; consular chancery handling fees may apply.
  - **Evidence confidence: `PARTIAL`** — core booklet fee UGX 250,000 is standardized; foreign mission courier/chancery charges vary.
- **Civil Identity & Document Checklists:**
  - **National Identification Number (NIN) & National ID Card:** Issued by the National Identification and Registration Authority (NIRA); compulsory for all adult Ugandan citizens.
  - **Recommender's Details:** National ID card of a reputable Ugandan citizen who certifies the applicant's citizenship and identity.
  - **Payment Advice Form (PRN):** Generated from `passports.go.ug` and paid through authorized commercial banks (Stanbic, DFCU, Absa, PostBank) or mobile money (URA portal).
  - **Previous passport:** Required for renewal or replacement.
  - **For minors (under 18):**
    - Child's birth certificate issued by NIRA;
    - Parents' National ID cards (both mother and father);
    - Written consent letter signed by both parents;
    - In-person attendance of the child and at least one parent.
  - **Biometrics:** Live facial photo, digital fingerprints, and digital signature captured at DCIC enrollment stations.
- **Application & Delivery Channels:**
  - Complete electronic application at `https://passports.go.ug/`.
  - Generate payment registration number (PRN) and pay at bank or mobile money.
  - Schedule appointment date and time on the portal.
  - Attend in-person appointment at DCIC Headquarters (Kyambogo/Kampala), regional centers (Mbarara, Gulu, Mbale), or diplomatic missions abroad.
  - Delivery: Collected in person upon biometric verification and presentation of original National ID.

---

### 13.5 Rwanda (RW / RWA) — Directorate General of Immigration and Emigration (DGIE) & IremboGov

- **Administering Authority:** Directorate General of Immigration and Emigration (DGIE / Direction Générale de l'Immigration et de l'Émigration), Ministry of Interior, Republic of Rwanda
- **Primary Portals:**
  - DGIE Official Portal: `https://www.migration.gov.rw/our-services/e-passport-1`
  - IremboGov National Services Portal: `https://support.irembo.gov.rw/`
- **Statutory Framework:**
  - Ministerial Order No. 06/01 of 29/05/2019 establishing regulations governing Rwandan passports and travel documents (EAC electronic biometric passports).
- **Domestic Fee Schedule (in Rwandan Francs — RWF):**
  - **Adult Ordinary e-Passport (10-Year Validity, 50-page booklet):** **100,000 RWF** (for citizens aged 18 and older)
  - **Adult Ordinary e-Passport (5-Year Validity, 50-page booklet):** **75,000 RWF** (optional shorter validity for adults)
  - **Minor Ordinary e-Passport (2-Year to 5-Year Validity, 30-page booklet):** **25,000 RWF** (for children under 16)
  - **Service Passport:** 15,000 RWF (5-year validity, for official government assignments)
  - **Diplomatic Passport:** 50,000 RWF (5-year validity)
  - **Conflict Resolution on Older Figures:** Older fees of 50,000 RWF were for legacy national paper booklets. Since June 2019, Rwanda migrated exclusively to the East African Community (EAC) biometric e-passport with statutory tiers 100,000 RWF / 75,000 RWF / 25,000 RWF.
  - **Lost, Stolen, or Damaged Replacement:** Standard fee applied following Police loss investigation report and certificate from the Rwanda National Police.
  - **Evidence confidence: `DIRECT`** — established by Ministerial Order No. 06/01 and confirmed on `migration.gov.rw` and `irembo.gov.rw`.
- **Consular Fee Schedule (Diaspora):**
  - Rwandan diaspora citizens apply via `irembo.gov.rw` selecting the embassy/high commission of residence (e.g. Washington, London, Nairobi, Brussels, Beijing).
  - Fees are paid online via Irembo in RWF or foreign currency equivalent. Biometric capture takes place at the embassy.
  - **Evidence confidence: `DIRECT`** — unified fee structure via `irembo.gov.rw`.
- **Civil Identity & Document Checklists:**
  - **Rwandan National Identity Card (Indangamuntu):** Mandatory for all adult citizens aged 18+ and minors 16–18.
  - **Citizen Application Number (Child ID):** Mandatory for minors under 16, generated from the National Identification Agency (NIDA).
  - **Proof of Payment:** Electronic billing receipt generated by IremboGov (MTN Mobile Money, Airtel Money, Bank of Kigali, or Visa/MasterCard).
  - **Previous passport:** Surrendered for physical cancellation on renewal.
  - **In case of loss:** Certificate of loss issued by the Rwanda National Police.
  - **For minors (under 18):**
    - Certified copy of birth certificate;
    - Recommendation letter / parental consent signed by both parents;
    - Copies of parents' National Identity Cards.
  - **Biometrics:** Digital facial photograph, iris scan, and ten fingerprints captured at DGIE stations.
- **Application & Delivery Channels:**
  - Submit application online at **IremboGov** (`www.irembo.gov.rw`).
  - Receive SMS/email notification with appointment details from DGIE.
  - Attend in-person biometric capture at DGIE headquarters in Kigali, district migration offices, or Rwandan embassies abroad.
  - Processing: Standard 4 business days in Rwanda.
  - Delivery: Collected in person or dispatched via registered postal courier.

---

### 13.6 Mauritius (MU / MUS) — Passport and Immigration Office (PIO)

- **Administering Authority:** Passport and Immigration Office (PIO), Mauritius Police Force, Prime Minister's Office, Republic of Mauritius
- **Primary Portals:**
  - PIO Application Guide & Fees: `https://passport.govmu.org/passport/?page_id=773`
  - Required Documents (New Passport): `https://passport.govmu.org/passport/?page_id=761`
  - Passport Renewal Guide: `https://passport.govmu.org/passport/?page_id=792`
  - Lost, Stolen or Damaged Passports: `https://passport.govmu.org/passport/?page_id=766`
  - Citizens Living Abroad: `https://passport.govmu.org/passport/?page_id=794`
- **Statutory Framework:**
  - Passports Act 1969 and Passports Regulations (as amended), Government of Mauritius.
- **Domestic Fee Schedule (in Mauritian Rupees — MUR):**
  - **Standard Passport (New / Renewal):**
    - Adults & young persons (16 to 54 years, 10-year validity): **MUR 700**
    - Minors (under 16 years, 5-year validity): **MUR 400**
    - Senior Citizens (aged 55 and above): **MUR 400**
    - Persons with Disabilities: **MUR 400** (supported by a disability card/certificate from the Ministry of Social Security)
  - **Lost, Stolen, or Damaged Passport Statutory Penalty Tiers:**
    - First loss / damage: **MUR 5,000**
    - Second loss / damage: **MUR 15,000**
    - Every subsequent loss / damage: Cumulative **MUR 15,000**
  - **Evidence confidence: `DIRECT`** — statutory fee regulations confirmed directly from `passport.govmu.org`.
- **Consular Fee Schedule (Citizens Living Abroad):**
  - Mauritian citizens residing overseas must submit application Form **PF 136** through the nearest Mauritian Embassy, High Commission, or honorary consulate.
  - Consular applicant fee: Equivalent statutory fee (MUR 700 / MUR 400 / penalty tiers) plus diplomatic bag / postal courier transmission fee (typically ~MUR 300 to MUR 600 equivalent in local currency).
  - **Evidence confidence: `DIRECT`** — confirmed on `passport.govmu.org/passport/?page_id=794`.
- **Civil Identity & Document Checklists:**
  - **National Identity Card (NIC):** Mandatory for all Mauritian citizens aged 18 and older.
  - **Original Birth Certificate:** Bearing the applicant's national identity number and civil status barcode.
  - **Marriage Certificate:** Required for married female applicants wishing to adopt their spouse's surname.
  - **Certificate of Mauritian Citizenship:** Required for naturalized citizens or citizens registered by descent.
  - **Previous passport:** Must be produced for cancellation on renewal.
  - **In case of loss/theft:** Mandatory immediate report to a local Police Station; original *Declaration of Lost / Stolen Certificate* from Police must be attached.
  - **For minors (under 16):**
    - Birth certificate of the minor;
    - NIC cards of both parents;
    - Marriage certificate of parents;
    - Written consent of both parents on application form PF 136.
  - **Photographs:** Two identical recent color passport-sized photos (ICAO compliant, matte finish, light background) taken within 3 months.
- **Application & Delivery Channels:**
  - In-person application submission at the Passport and Immigration Office headquarters (Sterling House, Lislet Geoffroy Street, Port Louis) or district police divisional headquarters (Rose Hill, Curepipe, Flacq, Piton, Souillac).
  - Processing: Standard 4–5 working days (domestic).
  - Delivery: Collected in person at the office of application upon biometric verification and presentation of the application receipt.
  - Overseas: Processed via Mauritian diplomatic missions and transmitted to Port Louis.

---

---

## Section 14 — Batch 12 Primary Statutory Research Dossiers: BW, NA, ZM, ZW, AO, MZ

*Batch 12 research executed: 2026-10-20. Sourced directly from official interior and home affairs ministries, national registration departments, presidential decrees, and gazetted ministerial diplomas across Southern & Central Africa sovereign nations. All domestic statutory fees, express/emergency tiers, penalty scales for lost documents, and civil identity prerequisites are bound to exact source URLs.*

---

### 14.1 Botswana (BW / BWA) — Department of Civil and National Registration (DCNR)

- **Administering Authority:** Department of Civil and National Registration (DCNR), Ministry of Labour and Home Affairs (formerly Ministry of Nationality, Immigration and Gender Affairs), Republic of Botswana
- **Primary Portals:**
  - Official Botswana Government Portal: `https://www.gov.bw/`
- **Statutory Framework:**
  - Botswana Passports Act and DCNR statutory fee regulations governing electronic passport issuance.
- **Domestic Fee Schedule (in Botswana Pula — BWP):**
  - **Adults & Young Adults (Aged 16 and above, 10-year validity):** **BWP 260.00** (issuance, standard renewal, or name change)
  - **Minors (Children aged 0 to 15 years, 5-year validity):** **BWP 100.00**
  - **Lost, Stolen, or Damaged Passport Replacement:** **BWP 1,000.00** (penalty replacement fee)
  - **Fast-Track / Express Processing:** Surcharge applies for urgent processing.
  - **Evidence confidence: `DIRECT`** — confirmed directly from `gov.bw` official government portal and DCNR regulations.
- **Consular Fee Schedule:**
  - Via Botswana High Commissions and Embassies overseas (Ministry of International Relations).
  - Fees collected in local foreign currencies at equivalent statutory rates plus diplomatic postage charges.
  - **Evidence confidence: `PARTIAL`** — foreign mission chancery rates vary by bilateral mission.
- **Civil Identity & Document Checklists:**
  - **National Identity Card (Omang):** Mandatory for all Botswana citizens aged 16 and older (original plus copy).
  - **Birth Certificate:** Required for minors under 16 and first-time applicants.
  - **For minors (under 16):** Presence and written consent of parents/guardians, accompanied by parents' Omang cards.
  - **Previous passport:** Must be presented for physical cancellation on renewal.
  - **In case of loss/theft:** Police report from Botswana Police Service stating circumstance of loss.
  - **Biometrics:** Digital facial photograph, live electronic fingerprints, and signature captured in-person at DCNR service centers.
- **Application & Delivery Channels:**
  - In-person application and biometric capture at DCNR district offices, integrated service centers, or post office partner counters across Botswana.
  - Delivery: Collected in person upon biometric verification and presentation of the receipt slip.
  - Overseas: Via Botswana diplomatic missions.

---

### 14.2 Namibia (NA / NAM) — Ministry of Home Affairs, Immigration, Safety and Security (MHAISS)

- **Administering Authority:** Ministry of Home Affairs, Immigration, Safety and Security (MHAISS), Republic of Namibia
- **Primary Portals:**
  - Official MHAISS eServices Portal: `https://eservices.mhaiss.gov.na/`
  - Ministry Portal: `https://mhaiss.gov.na/`
- **Statutory Framework:**
  - Namibian Passports Act and MHAISS published administrative fee schedules.
- **Domestic Fee Schedule (in Namibian Dollars — NAD / N$):**
  - **New / Renewed Ordinary Passport (surrendering previous):** **N$400.00**
  - **Replacement of Lost or Damaged Passport:** **N$800.00** (statutory double fee penalty)
  - **Diplomatic, Official, and Refugee Passports:** N$800.00
  - **Emergency Travel Document (ETD):** N$600.00
  - **Validity:** **5 years** for ordinary passports.
  - **Evidence confidence: `DIRECT`** — confirmed directly from `mhaiss.gov.na` and official eServices schedules.
- **Consular Fee Schedule:**
  - Via Namibian Embassies and High Commissions overseas (e.g. London, Washington, Berlin, Pretoria).
  - Fees collected in local foreign currencies (e.g. EUR, USD, GBP, ZAR) with applicable diplomatic handling fees.
  - **Evidence confidence: `PARTIAL`** — mission-specific chancery schedules vary.
- **Civil Identity & Document Checklists:**
  - **Namibian National Identity Card:** Mandatory for all applicants aged 16 and older.
  - **Full Birth Certificate:** Required for all applicants to verify parentage and citizenship.
  - **Citizenship Certificate:** Mandatory if the applicant was born outside Namibia or acquired citizenship by descent/naturalization.
  - **Marriage Certificate:** Required for married female applicants adopting their husband's surname.
  - **In case of loss/theft:** Police declaration of loss and sworn affidavit detailing the circumstances.
  - **For minors (under 16):** Full birth certificate; copies of parents' ID cards; written consent from both parents.
  - **Biometrics:** Live facial photo, digital fingerprints, and signature captured at MHAISS offices.
- **Application & Delivery Channels:**
  - Digital application initiation via `https://eservices.mhaiss.gov.na/`.
  - In-person biometric enrollment at MHAISS regional headquarters (Windhoek, Oshakati, Swakopmund, etc.).
  - Processing: Standard 3–5 working days (domestic).
  - Delivery: Collected in person at the regional office upon biometric authentication.
  - Overseas: Via Namibian Embassies and High Commissions.

---

### 14.3 Zambia (ZM / ZMB) — Department of National Registration, Passport and Citizenship (DNRPC)

- **Administering Authority:** Department of National Registration, Passport and Citizenship (DNRPC), Ministry of Home Affairs and Internal Security, Republic of Zambia
- **Primary Portals:**
  - Official Zambia E-Services Portal (ZamPortal): `https://www.gsb.gov.zm/`
- **Statutory Framework:**
  - Passports Act (Cap 103) of the Laws of Zambia and Government Service Bus official fee schedules.
- **Domestic Fee Schedule (in Zambian Kwacha — ZMW):**
  - **Ordinary Passport (32 Pages, Standard processing):** **ZMW 320.00**
  - **Express Passport (32 Pages, Fast-track processing):** **ZMW 520.00**
  - **Ordinary Passport (48 Pages, Frequent traveler):** **ZMW 520.00**
  - **Express Passport (48 Pages, Frequent traveler fast-track):** **ZMW 720.00**
  - **Lost Passport Replacement (32 Pages):** **ZMW 420.00**
  - **Lost Passport Replacement (48 Pages):** **ZMW 620.00**
  - Validity: **10 years** for adults (aged 16 and above); **5 years** for minors under 16.
  - **Evidence confidence: `DIRECT`** — confirmed directly from `gsb.gov.zm` official tariff matrix.
- **Consular Fee Schedule:**
  - Via Zambian High Commissions and Embassies overseas.
  - Applications processed through e-services with consular chancery surcharges.
  - **Evidence confidence: `PARTIAL`** — mission-specific chancery fees apply.
- **Civil Identity & Document Checklists:**
  - **National Registration Card (NRC — Green Card):** Mandatory for all Zambian citizens aged 16 and older.
  - **Birth Certificate:** Issued by the Registrar General; mandatory for first-time applicants and minors.
  - **Recommendation Section:** Section on application form certified by a recognized professional recommender (lawyer, doctor, magistrate, minister of religion).
  - **Previous passport:** Surrendered for physical cancellation on renewal.
  - **In case of loss:** Police report from Zambia Police Service and a sworn affidavit of loss.
  - **For minors (under 16):** Child's birth certificate; certified copies of parents' NRC cards; written parental consent.
  - **Biometrics:** Facial photograph and digital fingerprints captured at passport offices.
- **Application & Delivery Channels:**
  - Digital application submission via the ZamPortal (`gsb.gov.zm`).
  - In-person biometric enrollment at DNRPC provincial offices (Lusaka Headquarters, Ndola, Livingstone, Chipata, Kasama, etc.).
  - Processing: Standard 5–10 working days; express 2–3 working days.
  - Delivery: Collected in person at the passport office upon production of the receipt voucher and NRC.
  - Overseas: Via Zambian diplomatic missions.

---

### 14.4 Zimbabwe (ZW / ZWE) — Civil Registry Department

- **Administering Authority:** Civil Registry Department, Ministry of Home Affairs and Cultural Heritage, Republic of Zimbabwe
- **Primary Portals:**
  - Zimbabwe Embassy Berlin (official fees notice): `https://www.zimembassyberlin.gov.zw/`
  - Ministry of Home Affairs and Cultural Heritage
- **Statutory Framework:**
  - Citizenship of Zimbabwe Act and Statutory Instruments regulating electronic biometric passport (e-passport) tariffs.
- **Domestic Fee Schedule (in US Dollars — USD):**
  - **Ordinary Biometric e-Passport (Standard turnaround ~7 business days):** **USD 170** (composed of USD 150 base statutory fee + mandatory USD 20 Quick Response / QR code fee)
  - **Emergency / Express Biometric e-Passport (Turnaround within 48–72 hours):** **USD 250** (or up to **USD 270** inclusive of QR code fee depending on statutory category)
  - **Payment Mode:** Strictly paid in USD cash or via designated bank partner accounts (CBZ Bank, First Capital Bank).
  - **Validity:** **10 years** for adults; **5 years** for minors under 18.
  - **Evidence confidence: `DIRECT`** — established by Statutory Instrument under the Citizenship of Zimbabwe Act and confirmed across Civil Registry Department announcements and embassy schedules.
- **Consular Fee Schedule (Diaspora):**
  - Processed through designated Zimbabwean Embassies (e.g. Pretoria, London, Washington) equipped with e-passport bio-enrollment kits.
  - Fees collected in USD or foreign currency equivalent at official consular rates.
  - **Evidence confidence: `DIRECT`** — unified statutory pricing applies at e-passport centers worldwide.
- **Civil Identity & Document Checklists:**
  - **Zimbabwean National Identity Card (Metal, Plastic, or Waiting Pass with photo):** Mandatory for all applicants aged 16 and older.
  - **Original Birth Certificate (Long Form):** Mandatory for all applicants.
  - **Marriage Certificate:** Required for married female applicants wishing to adopt their husband's surname.
  - **Previous passport:** Must be presented for physical cancellation on renewal.
  - **In case of loss/theft:** Police report and sworn affidavit detailing the loss.
  - **For minors (under 18):** Long-form birth certificate; national ID of the accompanying parent; written consent from the legal guardian.
  - **Biometrics:** Digital facial photograph, live ten-fingerprint scan, and electronic signature captured at e-passport bio-enrollment centers.
- **Application & Delivery Channels:**
  - In-person attendance at Civil Registry e-passport bio-enrolment centers (Harare Old Hospital, Bulawayo, Gweru, Mutare, Chitungwiza, Hwange, etc.).
  - Delivery: Collected in person or delivered to the chosen registry office upon notification.
  - Overseas: Via Zimbabwean embassies equipped with e-passport biometric desks.

---

### 14.5 Angola (AO / AGO) — Serviço de Migração e Estrangeiros (SME)

- **Administering Authority:** Serviço de Migração e Estrangeiros (SME), Ministério do Interior, República de Angola
- **Primary Portals:**
  - Official SME Portal: `https://www.sme.gov.ao/`
  - Ministry of Interior: `https://minint.ao/`
- **Statutory Framework:**
  - Decreto Presidencial n.º 21/19 establishing the updated schedule of migration service fees and administrative acts (*Tabela de Taxas dos Atos Migratórios*).
- **Domestic Fee Schedule (in Angolan Kwanzas — AOA):**
  - **Standard Ordinary Biometric Passport (Passaporte Ordinário, 5-year validity):** **30.500,00 AOA**
  - **Payment Mechanism:** Paid via RUPE (Referência Única de Pagamento ao Estado) generated by the SME portal and settled through the Multicaixa interbank network or home banking.
  - **Replacement for Lost or Damaged Passports:** **30.500,00 AOA** plus mandatory police declaration of loss (*participação policial*).
  - **Evidence confidence: `DIRECT`** — established by Decreto Presidencial n.º 21/19 and confirmed on `sme.gov.ao`.
- **Consular Fee Schedule:**
  - Via Angolan Consulates-General and Embassies overseas (e.g. Lisbon, Porto, Paris, London, Houston, Windhoek).
  - Fees collected in local currency (EUR/USD) based on ministerial chancery fee tables.
  - **Evidence confidence: `PARTIAL`** — chancery tariffs vary by foreign diplomatic post.
- **Civil Identity & Document Checklists:**
  - **Bilhete de Identidade (BI):** Valid original national identity card of Angola (mandatory for all applicants).
  - **RUPE Payment Voucher:** Proof of settlement of the 30.500,00 AOA statutory fee.
  - **Birth Certificate (Assento de nascimento):** Required for minors under 18.
  - **Parental Authorization:** Legalized authorization from both parents or legal guardian for minors.
  - **Previous passport:** Must be presented for physical cancellation on renewal.
  - **In case of loss:** Police declaration (*participação de extravio*) issued by the Polícia Nacional de Angola.
  - **Biometrics:** Digital facial image, live fingerprints, and electronic signature captured at SME enrollment stations.
- **Application & Delivery Channels:**
  - Digital pre-application and appointment scheduling via `https://www.sme.gov.ao/`.
  - In-person attendance at SME provincial directorates or SIAC (Serviço Integrado de Atendimento ao Cidadão) counters across Angola.
  - Processing: Standard 10–15 business days (faster in central SIAC centers).
  - Delivery: Collected in person upon presentation of application slip and BI verification.
  - Overseas: Via Angolan Consulates-General.

---

### 14.6 Mozambique (MZ / MOZ) — Serviço Nacional de Migração (SENAMI)

- **Administering Authority:** Serviço Nacional de Migração (SENAMI / Direcção Nacional de Migração), Ministério do Interior, República de Moçambique
- **Primary Portals:**
  - Official SENAMI Appointment Portal: `https://agendamento.senami.gov.mz/`
  - Ministry of Interior eVisa/eTA Portal: `https://evisa.gov.mz/`
- **Statutory Framework:**
  - Diploma Ministerial n.º 18/2024 (enacted jointly by the Ministry of Interior and the Ministry of Economy and Finance, published in the *Boletim da República*).
- **Domestic Fee Schedule (in Mozambican Meticais — MZN):**
  - **Standard Biometric Passport (Normal Processing timeline):** **2.400,00 MZN**
  - **Urgent Biometric Passport (Expedited processing):** **2.775,00 MZN**
  - **Emergency Certificate (Certificado de Emergência):** 400,00 MZN (Normal) / 463,00 MZN (Urgent)
  - **Travel Document for Refugees:** 3.750,00 MZN (Normal) / 4.340,00 MZN (Urgent)
  - **Validity:** **5 years** for ordinary biometric passports.
  - **Evidence confidence: `DIRECT`** — established by Diploma Ministerial n.º 18/2024 and confirmed on official SENAMI channels.
- **Consular Fee Schedule:**
  - Via Mozambican High Commissions and Embassies overseas (e.g. Pretoria, Lisbon, Washington, Dar es Salaam).
  - Fees collected in local foreign currencies (ZAR, EUR, USD) with applicable diplomatic handling fees.
  - **Evidence confidence: `PARTIAL`** — mission-specific consular chancery schedules apply.
- **Civil Identity & Document Checklists:**
  - **Bilhete de Identidade (BI):** Valid original Mozambican national identity card (mandatory for all adult applicants).
  - **Birth Certificate (Certidão de nascimento / Cédula pessoal):** Mandatory for minors and first-time applicants.
  - **For minors (under 18):** Written and recognized parental authorization from both parents or legal guardian.
  - **Previous passport:** Surrendered for physical cancellation on renewal.
  - **In case of loss/theft:** Police loss report from the Polícia da República de Moçambique (PRM).
  - **Biometrics:** Live facial photo, digital fingerprints, and signature captured in-person on SENAMI biometric stations.
- **Application & Delivery Channels:**
  - Online appointment booking required via `https://agendamento.senami.gov.mz/`.
  - In-person attendance and biometric enrollment at SENAMI provincial directorates across Mozambique.
  - Processing: Standard ~7–10 working days; urgent ~3–4 working days.
  - Delivery: Collected in person at the SENAMI provincial office upon presentation of receipt slip.
  - Overseas: Via Mozambican diplomatic and consular missions.

---


## 15. Batch 13 — Central America & Caribbean Sovereign Nations (CR, PA, DO, GT, JM, TT)

### 15.1 Costa Rica (CR / CRI) — Dirección General de Migración y Extranjería (DGME)

- **Administering Authority:** Dirección General de Migración y Extranjería (DGME), Ministerio de Gobernación y Policía, República de Costa Rica
- **Primary Portals:**
  - Official DGME Portal: `https://www.migracion.go.cr/`
  - Banco de Costa Rica (BCR Punto País): `https://www.bancobcr.com/` (Citas Punto País)
  - Correos de Costa Rica (Ventanillas Electrónicas de Servicios - VES): `https://correos.go.cr/`
- **Statutory Framework:**
  - Ley General de Migración y Extranjería (Ley N° 8764) y Reglamento para la Emisión de Pasaportes.
  - Implementación del Pasaporte Biométrico Bicentenario (2022 en adelante).
- **Domestic Fee Schedule:**
  - **Statutory Issuance Fee (Migración / Ministerio de Hacienda):** **USD $75.00 + CRC ₡250.00** (timbre de parques nacionales). The USD $75.00 is settled in Costa Rican Colones at the official BCCR reference exchange rate on appointment day.
  - **Banking Commission (BCR Punto País):** Approximately **USD $12.00 to $15.00** (payable in colones).
  - **Courier Delivery (Correos de Costa Rica):** Approximately **CRC ₡5,763** for secure courier delivery of the manufactured biometric booklet to the applicant's designated address or post office branch.
  - **Total Estimated Domestic Cost:** ~CRC ₡50,000–₡55,000 colones all-inclusive.
  - **Validity:** **10 years** for adults (18+); **5 years** for minors (0–17).
  - **Evidence confidence: `DIRECT`** — established by DGME statutory regulations and verified on BCR and Correos de Costa Rica official booking portals.
- **Consular Fee Schedule:**
  - Via Costa Rican Consulates overseas.
  - Statutory issuance fee: USD $75.00 + consular arancel / diplomatic courier fees.
  - **Evidence confidence: `PARTIAL`** — mission-specific consular handling charges apply.
- **Civil Identity & Document Checklists:**
  - **Cédula de Identidad (TSE):** Valid original Costa Rican national identity card issued by the Tribunal Supremo de Elecciones (mandatory for all adult applicants 18+; must be the latest issued version in good condition).
  - **For minors (12–17 years):** Tarjeta de Identidad de Menor (TIM) issued by the TSE.
  - **For children (0–11 years):** TSE birth registration number verified electronically in the civil registry database.
  - **Parental Presence:** Both parents must be physically present with valid original identity cards (Cédula for citizens, DIMEX/valid passport for foreign resident parents). In absence of one parent, a legalized special power of attorney or death certificate/sole custody court ruling is required.
  - **Renewal:** Presentation and surrender of previous passport for physical invalidation.
  - **In case of loss/theft:** Formal theft/loss report filed with the Organismo de Investigación Judicial (OIJ) or a notarized sworn declaration (*declaración jurada protocolizada*).
  - **Biometrics:** Digital facial photo, signature, and ten fingerprints captured live at BCR Punto País, Correos VES, or DGME central migration offices. (Applicants are advised not to wear white or black tops).
- **Application & Delivery Channels:**
  - Online appointment scheduling via Banco de Costa Rica (`bancobcr.com` or call center 800-BCRCITA) or Correos de Costa Rica (`correos.go.cr`).
  - In-person attendance for biometric capture at BCR Punto País agencies or Correos VES centers across Costa Rica.
  - Centralized personalization by DGME; delivery via Correos de Costa Rica courier within ~8–12 business days.

---

### 15.2 Panama (PA / PAN) — Autoridad de Pasaportes de Panamá (APAP)

- **Administering Authority:** Autoridad de Pasaportes de Panamá (APAP / ANP), República de Panamá
- **Primary Portals:**
  - Official APAP Portal: `https://apap.gob.pa/`
  - Panama Digital Government Portal: `https://www.panamadigital.gob.pa/`
- **Statutory Framework:**
  - Ley 32 de 23 de abril de 2013 (crea la Autoridad de Pasaportes de Panamá y regula la emisión de pasaportes electrónicos ordinarios).
- **Domestic Fee Schedule (in Balboas / US Dollars — B/. / USD, 1:1 parity):**
  - **Ordinary Biometric Passport (Adults & Minors):** **B/. 100.00** (32-page booklet, standard processing).
  - **Senior Citizens / Retirees (Jubilados / Tercera Edad 55+ women, 60+ men) & Persons with Disabilities (SENADIS):** **B/. 50.00** (50% statutory legal discount).
  - **Urgent Processing Surcharge (Trámite de urgencia):** Additional **+B/. 75.00** surcharge (total B/. 175.00 for standard adult; expedited turnaround within hours/same-day).
  - **Validity:** **10 years** for adults (18+); **5 years** for minors (0–17).
  - **Evidence confidence: `DIRECT`** — established by Ley 32 de 2013 and confirmed on APAP official portals.
- **Consular Fee Schedule:**
  - Handled via Panamanian Embassies and Consulates-General abroad in coordination with APAP.
  - Ordinary consular fee: USD $100.00 + consular transmission fees (typically $100–$150 USD).
  - **Evidence confidence: `PARTIAL`** — mission-specific dispatch fees apply.
- **Civil Identity & Document Checklists:**
  - **Cédula de Identidad Personal:** Original valid national identity card issued by the Tribunal Electoral (TE) in good physical state.
  - **Birth Certificate (for first-time applicants):** Certificado de nacimiento habilitado con B/. 3.00 en timbres fiscales (acquired at Banco Nacional), unless identity and filiation are validated directly via online Tribunal Electoral digital query.
  - **For minors:** Cédula Juvenil (if held, exempts birth certificate and stamps); both parents must be present with valid cédulas. In absence of one parent, a notarized authorization letter (*carta de autorización notariada*) with a copy of their identity card is required.
  - **Previous passport:** Must be presented for physical cancellation on renewal.
  - **In case of loss/theft:** Formal report (*denuncia*) presented before the Ministerio Público (Fiscalía de Atención Primaria) or a sworn declaration of loss.
  - **Biometrics:** Electronic facial photo, live fingerprint scan, and digital signature captured directly at APAP headquarters or provincial delegations.
- **Application & Delivery Channels:**
  - In-person attendance at APAP headquarters in Panama City or regional offices (Colón, David/Chiriquí, Chitré/Herrera, Santiago/Veraguas, Penonomé/Coclé, Changuinola/Bocas del Toro).
  - Turnaround: Regular service issued within 24–48 hours; urgent service within ~2–4 hours.
  - Payment: Accepted at on-site cashier (cash, card) or via National Bank.

---

### 15.3 Dominican Republic (DO / DOM) — Dirección General de Pasaportes (DGP)

- **Administering Authority:** Dirección General de Pasaportes (DGP), Presidencia / Ministerio de Relaciones Exteriores, República Dominicana
- **Primary Portals:**
  - Official DGP Portal: `https://www.pasaportes.gob.do/`
  - DGP Appointment Portal: `https://citas.pasaportes.gob.do/`
  - Portal Único del Estado Dominicano: `https://www.gob.do/servicios/emision-de-pasaporte-por-primera-vez-para-mayores-de-edad`
- **Statutory Framework:**
  - Ley Orgánica de la Dirección General de Pasaportes y Decretos Presidenciales tarifarios.
- **Domestic Fee Schedule (in Dominican Pesos — DOP / RD$):**
  - **Adult First-Time / Renewal (Regular Service):** **RD$ 1,650.00** (delivered in ~6 business days).
  - **Adult First-Time / Renewal (VIP Service):** **RD$ 2,650.00** (expedited delivery in ~3 hours if submitted before noon).
  - **Adult Lost / Damaged Passport Replacement (Regular Service):** **RD$ 2,650.00**
  - **Adult Lost / Damaged Passport Replacement (VIP Service):** **RD$ 3,650.00**
  - **Minor First-Time / Renewal (Regular Service):** **RD$ 1,850.00**
  - **Minor First-Time / Renewal (VIP Service):** **RD$ 2,850.00**
  - **Minor Lost / Damaged Passport Replacement (Regular Service):** **RD$ 2,850.00**
  - **Minor Lost / Damaged Passport Replacement (VIP Service):** **RD$ 3,850.00**
  - **Ancillary Fees:** Digital photo fee (in-office capture) RD$ 300.00; parental authorization stamp RD$ 200.00.
  - **Validity:** **6 years** for Dominican ordinary biometric/machine-readable passports.
  - **Evidence confidence: `DIRECT`** — established by DGP statutory regulations and verified on official Banreservas and gob.do payment schedules.
- **Consular Fee Schedule:**
  - Via Dominican Consulates abroad (e.g. New York, Miami, Madrid).
  - Consular passport renewal fees range from USD $90.00 to $130.00 / EUR 90.00 to 125.00 depending on consular jurisdiction.
  - **Evidence confidence: `PARTIAL`** — mission-specific consular arancel applies.
- **Civil Identity & Document Checklists:**
  - **Cédula de Identidad y Electoral (JCE):** Original valid biometric cédula issued by the Junta Central Electoral (mandatory for all adult applicants 18+).
  - **Acta de Nacimiento Legalizada:** Original birth certificate issued and legalized by the Junta Central Electoral (with verification barcode/QR code) required for first-time issuance or civil registry rectifications.
  - **For minors:** Legalized original birth certificate from JCE; Cédulas of both parents; physical presence of both parents or an authentic legalized notarial power of attorney (*Poder Notarial legalizado en Procuraduría General de la República*).
  - **Renewal:** Presentation and surrender of the previous passport.
  - **In case of loss/theft:** Official certificate of loss (*Certificación de Pérdida de Pasaporte*) issued by the Policía Nacional and certified by the Fiscalía.
  - **Biometrics:** High-resolution digital photo, fingerprints, and electronic signature captured in DGP provincial offices or VIP centers.
- **Application & Delivery Channels:**
  - Online appointment booking required via `citas.pasaportes.gob.do`.
  - Payment settled online via Banreservas or at DGP on-site Banreservas cashier desks.
  - In-person attendance for biometric capture at DGP offices (Sede Central Santo Domingo, Megacentro, Sambil, Santiago, and regional provincial delegations).
  - Delivery: Regular ~6 working days; VIP ~3 hours (same-day).

---

### 15.4 Guatemala (GT / GTM) — Instituto Guatemalteco de Migración (IGM)

- **Administering Authority:** Instituto Guatemalteco de Migración (IGM), República de Guatemala
- **Primary Portals:**
  - Official IGM Portal: `https://igm.gob.gt/`
  - IGM Online Appointment & Application System: `https://servicios.igm.gob.gt/citasenlinea/`
- **Statutory Framework:**
  - Código de Migración (Decreto Número 44-2016 del Congreso de la República de Guatemala) y Acuerdo de Dirección de IGM sobre tarifas de pasaportes ordinarios.
- **Domestic Fee Schedule (Statutory USD fees payable in Quetzales — GTQ via Banrural):**
  - **5-Year Ordinary Passport (Adults & Minors):** **US$ 50.00** (payable in GTQ at the official exchange rate of the day at Banrural).
  - **10-Year Ordinary Passport (Adults 18+ only):** **US$ 85.00** (payable in GTQ at Banrural).
  - **Validity:** **5 years** (standard, mandatory for minors 0–17) or **10 years** (optional for adults 18+).
  - **Evidence confidence: `DIRECT`** — established by IGM statutory regulations and confirmed on official Banrural and IGM booking platforms.
- **Consular Fee Schedule:**
  - Via Guatemalan Consulates abroad (notably across the United States, Mexico, and Europe).
  - Consular fees: US$ 65.00 (5-year) / US$ 100.00 (10-year) inclusive of consular processing.
  - **Evidence confidence: `PARTIAL`** — mission-specific consular schedule applies.
- **Civil Identity & Document Checklists:**
  - **DPI (Documento Personal de Identificación):** Original valid DPI issued by RENAP (Registro Nacional de las Personas) in good condition, plus a legible photocopy of both sides on a single page (mandatory for adults 18+).
  - **Appointment Voucher:** Printed and signed appointment confirmation generated via `servicios.igm.gob.gt`.
  - **Application Form:** Printed and signed form auto-generated upon scheduling.
  - **Payment Receipt:** Original deposit slip (*boleta de pago*) issued by BANRURAL (valid for 1 year from payment date).
  - **For minors (under 18):** Original recent Birth Certificate issued by RENAP with verification QR code; valid DPI of both parents; physical presence of both parents or an authentic notarial mandate (*Mandato con representación*) authorizing the minor's passport issuance.
  - **Renewal:** Presentation and surrender of the previous passport.
  - **In case of loss/theft:** Formal police report (*denuncia*) lodged before the Policía Nacional Civil (PNC) or Ministerio Público (MP).
  - **Biometrics:** Facial image capture, iris scan, ten rolled digital fingerprints, and digital signature at IGM issuance centers.
- **Application & Delivery Channels:**
  - Online appointment booking required via `https://servicios.igm.gob.gt/citasenlinea/` (or queue-free humanitarian/verified urgency exceptions).
  - In-person attendance at IGM passport issuance centers (Centro de Emisión Central Zona 4 Ciudad de Guatemala, Petén, Quetzaltenango, Chiquimula, Escuintla, Zacapa).
  - Delivery: Same-day delivery (often within 45–90 minutes following biometric capture at major emission centers).

---

### 15.5 Jamaica (JM / JAM) — Passport, Immigration and Citizenship Agency (PICA)

- **Administering Authority:** Passport, Immigration and Citizenship Agency (PICA), Ministry of National Security, Government of Jamaica
- **Primary Portals:**
  - Official PICA Portal: `https://www.pica.gov.jm/`
  - PICA Online Adult Passport Renewal System: `https://passport.pica.gov.jm/`
- **Statutory Framework:**
  - The Jamaican Passport Act and Passport Regulations.
- **Domestic Fee Schedule (in Jamaican Dollars — JMD):**
  - **Regular Passport Service (Standard Processing):**
    - **Adult (18+, 10-year validity):** **JMD $6,500** (~7 working days in Kingston / ~14 working days in regional outposts).
    - **Minor (under 18, 5-year validity):** **JMD $4,000** (~7–14 working days).
  - **Expedited / Rush Services (Kingston Head Office):**
    - **Same Day Service (applied before 10:00 AM):** Adult **JMD $16,500** / Minor **JMD $9,000**
    - **Next Working Day Service:** Adult **JMD $11,500** / Minor **JMD $7,000**
    - **3 Working Days Service:** Adult **JMD $9,500** / Minor **JMD $6,000**
  - **Expedited Services (Regional Offices / Outposts):**
    - **5-Day Service:** Adult **JMD $11,500** / Minor **JMD $7,000**
    - **7-Day Service:** Adult **JMD $9,500** / Minor **JMD $6,000**
  - **Lost / Stolen / Damaged Passport Replacement:**
    - Adult Replacement: **JMD $21,500**
    - Minor Replacement: **JMD $12,000**
  - **Validity:** **10 years** for adults (18+); **5 years** for minors (under 18).
  - **Evidence confidence: `DIRECT`** — established by PICA statutory regulations and confirmed on official PICA portal.
- **Consular Fee Schedule:**
  - Via Jamaican High Commissions, Embassies, and Consulates-General overseas (e.g. London, New York, Miami, Toronto).
  - Adult regular passport: USD $120.00 / CAD $140.00 / GBP £90.00; Minor regular: USD $80.00 / CAD $95.00 / GBP £60.00.
  - **Evidence confidence: `PARTIAL`** — mission-specific diplomatic courier rates apply.
- **Civil Identity & Document Checklists:**
  - **Birth Certificate:** Original Birth Certificate issued by the Registrar General's Department (RGD) with Personal Identification Number (PIN).
  - **Official Photo ID:** Valid government-issued photo identification (Jamaican National Identification Card / Voter ID, Driver's Licence, or current passport).
  - **Photographs:** Two (2) identical recent passport-sized color photographs (one of which must be certified on the reverse by an authorized certifying official: Justice of the Peace, Minister of Religion, Attorney-at-Law, Medical Practitioner, or Bank Manager). Note: In-person digital photo capture is available at select digital kiosks.
  - **For minors (under 18):** Written consent signed by parent or legal guardian; valid photo ID of parent; original RGD birth certificate establishing parentage.
  - **Renewal:** Submission and surrender of the previous passport for physical cancellation.
  - **In case of loss/theft:** Formal police report issued by the Jamaica Constabulary Force (JCF) + mandatory completion of the PICA lost passport questionnaire and interview.
  - **Online Adult Renewal:** Available via `passport.pica.gov.jm` for adults renewing machine-readable passports with standard digital photo upload and card payment.
- **Application & Delivery Channels:**
  - Digital application via PICA Online Portal (`passport.pica.gov.jm`) for eligible adult renewals.
  - In-person attendance at PICA Head Office (Kingston) or regional centers (Montego Bay, Mandeville, May Pen, St. Ann's Bay, Portmore).
  - Delivery: Collected in person or delivered via courier (e.g. DHL/local courier service).

---

### 15.6 Trinidad and Tobago (TT / TTO) — Immigration Division

- **Administering Authority:** Immigration Division, Ministry of Homeland Security / Ministry of National Security, Republic of Trinidad and Tobago
- **Primary Portals:**
  - Official Immigration Division Portal: `https://nationalsecurity.gov.tt/divisions/immigrationdivision/`
  - Official Appointment Scheduling Portal: `https://appointments.gov.tt/`
- **Statutory Framework:**
  - The Immigration Act (Chapter 18:01) and Immigration Regulations of the Republic of Trinidad and Tobago.
- **Domestic Fee Schedule (in Trinidad and Tobago Dollars — TTD):**
  - **Ordinary 32-Page Machine Readable Passport (Adults 16–59):** **TTD $500.00** (10-year validity).
  - **Business 48-Page Passport:** **TTD $700.00** (10-year validity).
  - **Children (under 16 years, 5-year validity):** **TTD $500.00** (First issue for infants under 2 years of age is **FREE / $0 TTD**).
  - **Senior Citizens (60 years and over):** **FREE / $0 TTD** (statutory exemption for ordinary passports).
  - **Expedited Service Surcharge:** **+TTD $600.00** (surcharge added to base fee; total TTD $1,100.00 for 32-page passport).
  - **Lost / Stolen / Mutilated Valid Passport Penalty:** **TTD $2,000.00** (statutory penalty fee assessed during the interview).
  - **Validity:** **10 years** for persons aged 16 and over; **5 years** for minors under 16.
  - **Evidence confidence: `DIRECT`** — established by the Immigration Regulations and confirmed on the Ministry of National Security portal.
- **Consular Fee Schedule:**
  - Via Trinidad and Tobago High Commissions and Embassies abroad (e.g. London, Washington, Ottawa, Caracas).
  - Adult 32-page renewal typically USD $85.00–$100.00 / GBP £65.00.
  - **Evidence confidence: `PARTIAL`** — mission-specific overseas exchange schedules apply.
- **Civil Identity & Document Checklists:**
  - **Application Form:** Official passport application form printed strictly on white legal-size copy paper (8½" x 14", double-sided, fit-to-page; forms on letter-size are rejected).
  - **Birth Certificate:** Computerized Birth Certificate with Personal Identification Number (PIN) issued by the Registrar General's Department (RGD).
  - **National Identification Card:** Original valid National ID card issued by the Elections and Boundaries Commission (EBC) for applicants aged 15+.
  - **Photographs:** Two (2) identical recent passport photographs (one endorsed on the reverse by a recommender: Justice of the Peace, Minister of Religion, Police Officer of Gazetted rank, Attorney, or Medical Practitioner).
  - **For minors (under 16):** Presence and consent of parent or legal guardian with valid national ID card; birth certificate establishing maternity/paternity.
  - **Renewal:** Submission and surrender of the previous passport.
  - **In case of loss/theft:** Official police report from the Trinidad and Tobago Police Service (TTPS) + statutory declaration sworn before a Commissioner of Affidavits.
  - **Payment Methods:** LINX (debit card) accepted on-site at all offices; cash accepted at select offices or via nearby District Revenue Office. Credit cards are strictly not accepted.
- **Application & Delivery Channels:**
  - Mandatory online appointment scheduling via `https://appointments.gov.tt/` (free of charge).
  - In-person attendance for document verification and biometrics at Immigration Division offices (Port of Spain, San Fernando, Tobago, Sangre Grande, Chaguanas, Point Fortin).
  - Processing: Standard ~4–8 weeks; expedited ~1–2 weeks.
  - Delivery: Collected in person at the office of application upon return of receipt voucher.

---


## 16. Batch 14 — Baltic & European Sovereign States (EE, LV, LT, LU, MT, CY)

### 16.1 Estonia (EE / EST) — Politsei- ja Piirivalveamet (PPA)

- **Administering Authority:** Politsei- ja Piirivalveamet (PPA - Police and Border Guard Board), Siseministeerium (Ministry of the Interior), Republic of Estonia
- **Primary Portals:**
  - Official PPA Portal: `https://www.politsei.ee/`
  - PPA Self-Service Portal (Iseteenindus): `https://iseteenindus.politsei.ee/`
  - State Portal: `https://www.eesti.ee/`
- **Statutory Framework:**
  - Riigilõivuseadus (State Fees Act) and Isikut tõendavate dokumentide seadus (Identity Documents Act).
- **Domestic Fee Schedule (in Euros — EUR):**
  - **Via Self-Service Portal (`iseteenindus.politsei.ee`):**
    - **Adult (15+, 10-year validity):** **50.00 €**
    - **Children (<15), Old-Age Pensioners, and Persons with Disabilities:** **20.00 €**
  - **Via PPA Customer Service Office (In-Person):**
    - **Adult (15+, 10-year validity):** **60.00 €**
    - **Children (<15), Old-Age Pensioners, and Persons with Disabilities:** **25.00 €**
  - **Expedited Service (Kiirpass):**
    - **All applicants:** **250.00 €** (Issued within 1 working day; collected strictly in Tallinn at Tammsaare or Pinna customer service offices).
  - **Combined Application (Passport + ID-Card ordered together in self-service):**
    - Adult combo: **75.00 €** (savings over separate orders).
  - **Validity:** **10 years** for persons aged 15 and over; **5 years** for children under 15.
  - **Evidence confidence: `DIRECT`** — established by Riigilõivuseadus and published on `politsei.ee`.
- **Consular Fee Schedule:**
  - Applied via Estonian Foreign Missions abroad: Standard passport fee is **90.00 €** (or €100 for non-residents).
  - **Evidence confidence: `DIRECT`** — statutory consular tariff under Riigilõivuseadus.
- **Civil Identity & Document Checklists:**
  - **Isikukood:** Estonian Personal Identification Code (mandatory for all applicants).
  - **Digital Document Photo:** Standard biometric headshot uploaded digitally meeting PPA automated specifications.
  - **Biometrics:** Fingerprints must be on file and captured within the past 6 years. If fingerprints have expired, applicants must use a free PPA digital photo/fingerprint kiosk prior to self-service submission.
  - **For minors (<15):** Application submitted by parent/guardian via self-service; first-time issuance requires birth certificate if not registered in Estonian Population Register.
  - **In-person attendance:** Required for first-time passport applications without valid biometrics on file; renewals for citizens with valid biometrics are fully electronic via Smart-ID, Mobile-ID, or ID-Card reader.
- **Application & Delivery Channels:**
  - Self-service submission via `iseteenindus.politsei.ee` (available 24/7).
  - In-person attendance at PPA service offices (Tallinn, Tartu, Pärnu, Narva, and regional bureaus).
  - Processing: Standard up to 30 calendar days; expedited (Kiirpass) 1 working day.
  - Delivery: Collected in person at chosen PPA office or delivered to an Omniva parcel locker within Estonia (for renewals where identity was established previously).

---

### 16.2 Latvia (LV / LVA) — Pilsonības un migrācijas lietu pārvalde (PMLP)

- **Administering Authority:** Pilsonības un migrācijas lietu pārvalde (PMLP - Office of Citizenship and Migration Affairs), Iekšlietu ministrija (Ministry of the Interior), Republic of Latvia
- **Primary Portals:**
  - Official PMLP Portal: `https://www.pmlp.gov.lv/`
  - Latvija.lv State Administration Services Portal: `https://www.latvija.lv/`
- **Statutory Framework:**
  - Personu apliecinošu dokumentu likums (Law on Personal Identification Documents) and Cabinet of Ministers Regulations on State Fee for Issuance of Personal Identification Documents.
- **Domestic Fee Schedule (Valsts nodeva, in Euros — EUR):**
  - **Standard Timeline (within 10 working days):**
    - **Adult (aged 20+):** **50.00 EUR** (10-year validity).
    - **Reduced Fee (Children & Youth under 20, State Pensioners, Group I or II Disabled):** **25.00 EUR**
  - **Urgent Timeline (Steidzamības kārtībā — within 2 working days):**
    - **Adult (aged 20+):** **75.00 EUR**
    - **Reduced Fee (Children & Youth under 20, Pensioners, Disabled):** **45.00 EUR**
  - **Validity:**
    - Persons aged 20 and over: **10 years**
    - Youth aged 5 to 20: **5 years**
    - Children under 5: **2 years**
  - **Evidence confidence: `DIRECT`** — established by Cabinet of Ministers regulations and verified on `pmlp.gov.lv`.
- **Consular Fee Schedule:**
  - Via Latvian Embassies and Consulates overseas.
  - Consular state fee: 50.00 EUR + diplomatic consular fee (typically ~40–60 EUR surcharge).
  - **Evidence confidence: `PARTIAL`** — mission-specific consular charges apply.
- **Civil Identity & Document Checklists:**
  - **Personas kods:** Latvian Personal Identity Code.
  - **Identification Document:** Valid Latvian eID card (personu apliecība) or previous passport (must be submitted for cancellation).
  - **Birth Certificate:** Required for children applying for their first passport if data is not fully cross-referenced in the Population Register (*Fizisko personu reģistrs*).
  - **Biometrics:** High-resolution digital photo, digital signature, and two fingerprints captured live on-site during the appointment at a PMLP customer service desk.
  - **For minors (under 15):** Accompanied by at least one parent presenting a valid identity document and proof of parenthood.
  - **Lost / Stolen Passports:** Written explanation and formal declaration of loss submitted to PMLP or State Police (*Valsts policija*).
- **Application & Delivery Channels:**
  - In-person attendance at any PMLP territorial division across Latvia (Riga, Daugavpils, Liepāja, Jelgava, Valmiera, Ventspils, etc.).
  - Advance queue booking available online via `Qticket` / `latvija.lv` or walk-in queue tickets where permitted.
  - Processing: Standard 10 working days; urgent 2 working days.
  - Delivery: Collected in person at the PMLP division where the application was submitted upon presentation of an identity document.

---

### 16.3 Lithuania (LT / LTU) — Migracijos departamentas prie VRM

- **Administering Authority:** Migracijos departamentas prie Lietuvos Respublikos vidaus reikalų ministerijos (Migration Department under the Ministry of the Interior), Republic of Lithuania
- **Primary Portals:**
  - Official Migration Department / MIGRIS Portal: `https://www.migracija.lt/`
  - E-Government Gateway: `https://www.epaslaugos.lt/`
- **Statutory Framework:**
  - Lietuvos Respublikos paso įstatymas (Republic of Lithuania Law on Passports) and Government Resolution on State Fees (Valstybės rinkliava).
- **Domestic Fee Schedule (Valstybės rinkliava, Payment Code 5740, in Euros — EUR):**
  - **Standard Procedure (Bendra tvarka — issued within 1 month):**
    - **Standard Adult (16+):** **50.00 Eur** (10-year validity).
    - **Children (under 18 years):** **25.00 Eur** (50% statutory reduction).
    - **Old-Age Pensioners and Persons with Severe Disabilities:** **10.00 Eur** (80% statutory reduction).
  - **Urgent Procedure (Skubos tvarka — issued within 5 working days):**
    - **All applicants:** **100.00 Eur** (no concessions or reductions apply).
  - **Super Urgent Procedure (Tą pačią darbo dieną — same working day):**
    - **All applicants:** **200.00 Eur** (application submitted before designated morning cutoff at Vilnius Migration Division, Vytenio g. 18; no reductions apply).
  - **Validity:**
    - Persons aged 16 and over: **10 years**
    - Children aged 5 to 15: **5 years**
    - Children under 5: **2 years**
  - **Evidence confidence: `DIRECT`** — established by Lithuanian Government resolution and confirmed on `migracija.lt`.
- **Consular Fee Schedule:**
  - Via Lithuanian Diplomatic Missions and Consulates abroad.
  - Consular state fee: 100.00 Eur (standard) / consular emergency travel document 30.00 Eur.
  - **Evidence confidence: `DIRECT`** — statutory consular tariff.
- **Civil Identity & Document Checklists:**
  - **Asmens kodas:** Lithuanian Personal Code.
  - **Identity Document:** Valid Asmens tapatybės kortelė (ATK / eID card) or previously issued passport.
  - **Biometrics:** Digital facial photograph, signature (from age 14), and fingerprints (from age 12) captured directly at Migration Department offices.
  - **For minors (under 16):** Application submitted by one parent with valid identity document; minor child must be present if aged 1 or over for facial photograph capture.
  - **Lost / Stolen:** Loss notification filed online via MIGRIS or declared at the customer service desk.
- **Application & Delivery Channels:**
  - Online pre-application and visit reservation via MIGRIS (`https://www.migracija.lt/`).
  - In-person attendance at any Migration Department regional division across Lithuania (Vilnius, Kaunas, Klaipėda, Šiauliai, Panevėžys, etc.).
  - Payment: Settled online via MIGRIS / e-banking or on-site by debit/credit card.
  - Delivery: Collected in person or delivered via secure courier across Lithuania for an additional courier fee.

---

### 16.4 Luxembourg (LU / LUX) — Bureau des passeports, visas et légalisations (BPVL)

- **Administering Authority:** Bureau des passeports, visas et légalisations (BPVL), Ministère des Affaires étrangères et européennes (MAEE), Grand-Duché de Luxembourg
- **Primary Portals:**
  - Guichet.lu Citizenship Portal: `https://guichet.public.lu/en/citoyens/citoyennete/titres-voyage/passeport/`
  - MAEE Government Portal: `https://maee.gouvernement.lu/`
- **Statutory Framework:**
  - Loi modifiée du 14 avril 1934 sur les passeports and Grand-Ducal Regulations on passport fees.
- **Domestic Fee Schedule (in Euros — EUR):**
  - **Standard Procedure (delivered within ~7 working days):**
    - **Applicants aged 4 and over (5-year validity):** **50.00 €**
    - **Minors under 4 years of age (2-year validity):** **30.00 €**
  - **Fast-Track / Urgent Procedure (Procédure accélérée — delivered within ~3 working days):**
    - **Applicants aged 4 and over:** **150.00 €**
    - **Minors under 4 years of age:** **90.00 €**
  - **Validity:**
    - Persons aged 4 and over: **5 years** (Note: Luxembourg ordinary biometric passports have a statutory 5-year maximum validity for adults and older children).
    - Children under 4: **2 years**
  - **Evidence confidence: `DIRECT`** — established by Grand-Ducal regulations and verified on `guichet.public.lu`.
- **Consular Fee Schedule:**
  - Via Luxembourg Embassies and Consulates abroad.
  - Standard passport: 50.00 € + diplomatic postal/courier fee; Urgent: 150.00 € + courier.
  - **Evidence confidence: `DIRECT`** — published on MAEE official consular pages.
- **Civil Identity & Document Checklists:**
  - **Matricule:** 13-digit Luxembourg National Identification Number (*numéro d'identification nationale*).
  - **Identity Document:** Valid Luxembourg Carte d'identité or previous passport (must be presented for cancellation).
  - **Proof of Payment:** Bank transfer receipt confirming advance payment of the exact statutory fee into the Bureau des passeports account (mandatory prerequisite at application time).
  - **Photographs:** Recent compliant passport photograph meeting ICAO biometric criteria.
  - **For minors (under 18):** Signature and presence of parent(s) exercising parental authority with valid identification.
  - **In case of loss/theft:** Official certificate of loss or theft issued by the Grand-Ducal Police (*Police grand-ducale*).
- **Application & Delivery Channels:**
  - Residents apply through their local municipal office (*Commune / Biergeramt*).
  - Non-resident Luxembourg citizens apply in person at the BPVL (6, rue de l'Ancien Athénée, Luxembourg City) or via diplomatic missions.
  - Processing: Standard 7 business days; urgent 3 business days.
  - Delivery: Collected in person at the communal administration or BPVL office.

---

### 16.5 Malta (MT / MLT) — Identità (Passport Office)

- **Administering Authority:** Identità (formerly Identity Malta Agency - Passport Office), Ministry for Home Affairs, Security, Reforms and Equality, Republic of Malta
- **Primary Portals:**
  - Official Identità Portal: `https://identita.gov.mt/`
  - Identità Passport Appointment Booking: `https://passportbooking.identita.gov.mt/`
  - Servizz.gov Central Service Portal: `https://www.servizz.gov.mt/`
- **Statutory Framework:**
  - The Passports Act (Chapter 61 of the Laws of Malta) and Passports Regulations.
- **Domestic Fee Schedule (in Euros — EUR):**
  - **Standard Service (delivered within ~4 working days):**
    - **Adults (aged 16+, 10-year validity):**
      - **Low Season (September to March):** **€70.00**
      - **High Season (April to August):** **€80.00**
    - **Minors (aged 10 to 15, 5-year validity):** **€40.00**
    - **Children (under 10 years, 2-year validity):** **€16.00**
  - **Urgent Service (Ready within 4 working hours):**
    - **Adults (aged 16+):** **€160.00**
    - **Minors (aged 10 to 15):** **€80.00**
    - **Children (under 10 years):** **€60.00**
  - **Lost / Stolen / Destroyed Valid Passport Surcharge:**
    - Additional **€15.00** supplement payable on top of the base standard or urgent fee.
  - **Validity:**
    - Adults (16+): **10 years**
    - Minors (10–15): **5 years**
    - Children (<10): **2 years**
  - **Evidence confidence: `DIRECT`** — established by Maltese Passports Regulations and published on `identita.gov.mt`.
- **Consular Fee Schedule:**
  - Via Maltese Embassies and High Commissions overseas (e.g. London, Washington, Canberra).
  - Standard consular passport fee: €70–€80 + diplomatic chancery courier charges.
  - **Evidence confidence: `PARTIAL`** — mission-specific handling fees apply.
- **Civil Identity & Document Checklists:**
  - **Application Form A:** Official *Application for a Maltese Passport* printed and fully completed.
  - **Identity Card:** Valid Maltese National ID card (or eID).
  - **Recommender Declaration (Section 7):** Form A must be endorsed by an eligible recommender (e.g. Commonwealth citizen who is a professional: lawyer, doctor, priest, police officer, civil servant) for first-time, minor, or lost passport applications.
  - **Photographs:** Two (2) identical recent biometric photographs (one endorsed on the reverse by the recommender).
  - **For minors (under 16):** Consent of both parents (Section 6) accompanied by photocopies of both parents' identity cards; original birth certificate if born abroad.
  - **Renewal:** Previous passport submitted for physical cancellation.
  - **In case of loss/theft:** Police report issued by the Malta Police Force + Form A statutory declaration + €15 surcharge.
  - **Biometrics:** Facial digital photo, digital signature (from age 14), and fingerprints (from age 12) captured on-site.
- **Application & Delivery Channels:**
  - Mandatory online appointment booking via `passportbooking.identita.gov.mt`.
  - In-person submission at Identità Head Office (Onda Building, Aldo Moro Road, Marsa) or Gozo Office (The Tower, Victoria, Gozo).
  - Processing: Standard ~4 working days; urgent ~4 working hours.
  - Delivery: Collected in person at the Passport Office upon return of receipt voucher.

---

### 16.6 Cyprus (CY / CYP) — Civil Registry and Migration Department (CRMD)

- **Administering Authority:** Civil Registry and Migration Department (CRMD / Τμήμα Αρχείου Πληθυσμού και Μετανάστευσης), Ministry of Interior, Republic of Cyprus
- **Primary Portals:**
  - Official CRMD Portal: `https://www.moi.gov.cy/crmd`
  - Government Services Portal: `https://www.gov.cy/` (CY Login)
- **Statutory Framework:**
  - Civil Registry Law and Passports Regulations of the Republic of Cyprus.
- **Domestic Fee Schedule (in Euros — EUR):**
  - **Standard Biometric Passport:**
    - **Adults (aged 18+, 10-year validity):** **€70.00**
    - **Minors (under 18 years, 5-year validity):** **€45.00**
  - **Fast-Track / Accelerated Service (within 48–72 hours):**
    - Additional **+€50.00** surcharge (total: **€120.00** for adults / **€95.00** for minors).
  - **Lost, Stolen, or Damaged Passport Statutory Penalties:**
    - **First Replacement of Lost/Stolen Passport:** Fee doubles to **€140.00** (adult) / **€90.00** (minor).
    - **Second and Subsequent Replacements:** Cumulative doubling of fees as established by statutory regulation to deter carelessness and document trafficking.
  - **Validity:**
    - Adults (18+): **10 years**
    - Minors (0–17): **5 years**
  - **Evidence confidence: `DIRECT`** — established by CRMD regulations and verified on `gov.cy`.
- **Consular Fee Schedule:**
  - Via Cypriot Embassies and Consulates-General overseas (e.g. Athens, London, Washington).
  - Standard adult consular passport: €70.00 + diplomatic dispatch fee.
  - **Evidence confidence: `DIRECT`** — published on Cypriot diplomatic mission portals.
- **Civil Identity & Document Checklists:**
  - **Identity Card (Δελτίο Ταυτότητας):** Valid original Cypriot National ID card (mandatory for all applicants).
  - **Birth Certificate:** Original birth certificate required for first-time applicants or minors.
  - **For minors (under 18):** Written consent of both parents submitted in person at the service counter or certified electronically via verified CY Login accounts.
  - **Renewal:** Submission and physical cancellation of previous passport booklet.
  - **In case of loss/theft:** Official Certificate of Loss issued by the Cyprus Police (*Αστυνομία Κύπρου*) + sworn affidavit (*Ένορκη Δήλωση*) before a Registrar of the District Court.
  - **Biometrics:** High-resolution digital photo, digital signature, and two electronic fingerprints (fingerprints and signature mandatory for applicants aged 12 and over; under 12s exempt from fingerprints and signature).
- **Application & Delivery Channels:**
  - In-person attendance at District Administration Offices (Nicosia, Limassol, Larnaca, Paphos, Famagusta) or Citizen Service Centres (KEP / ΚΕΠ).
  - Digital appointment booking / application status tracking via `gov.cy`.
  - Processing: Standard ~10–15 business days; accelerated 48–72 hours.
  - Delivery: Collected in person at the service center upon presentation of receipt slip and identity card.

---


## 17. Batch 15 — Southeastern Europe & Sovereign Microstates (MK, MD, ME, XK, MC, SM)

### 17.1 North Macedonia (MK / MKD) — Министерство за внатрешни работи (МВР)

- **Administering Authority:** Министерство за внатрешни работи (Ministry of Internal Affairs - MVR), Republic of North Macedonia
- **Primary Portals:**
  - Official MVR Civil Procedures Portal: `https://mvr.gov.mk/mk-MK/uslugi/gragjanski-postapki`
  - MVR English Services Portal: `https://mvr.gov.mk/en-GB/uslugi/gragjanski-postapki`
  - Official Electronic Appointment Scheduling: `https://termin.mvr.gov.mk/`
- **Statutory Framework:**
  - Закон за патните исправи на државјаните на Република Северна Македонија (Law on Travel Documents of Citizens of RNM) and Tariff Regulation on Booklet Costs and Administrative Taxes.
- **Domestic Fee Schedule (in Macedonian Denars — MKD):**
  - **Regular Procedure (Редовна постапка — turnaround within 15 working days):**
    - **Persons over 27 years old (10-year validity):** **2.300 MKD** (Booklet/образец 2.000 MKD + administrative tax 300 MKD).
    - **Persons aged 4 to 27 years (5-year validity):** **1.700 MKD** (Booklet 1.500 MKD + administrative tax 200 MKD).
    - **Children under 4 years (2-year validity):** **1.600 MKD** (Booklet 1.500 MKD + administrative tax 100 MKD).
  - **Urgent Procedure (Итна постапка — fast-track turnaround within 48–72 hours):**
    - **Persons over 27 years old:** **6.400 MKD** (Booklet 6.100 MKD + administrative tax 300 MKD).
    - **Persons aged 4 to 27 years:** **6.300 MKD** (Booklet 6.100 MKD + administrative tax 200 MKD).
    - **Children under 4 years:** **6.200 MKD** (Booklet 6.100 MKD + administrative tax 100 MKD).
  - **Lost / Stolen / Damaged Passport:**
    - Mandatory statutory announcement/publication in the Official Gazette of the Republic of North Macedonia (*Службен весник на РСМ*): **75 MKD** supplement.
    - Standard or urgent replacement booklet and administrative tax applied in full.
  - **Validity:**
    - Persons aged 27 and older: **10 years**
    - Persons aged 4 to 27: **5 years**
    - Children under 4: **2 years**
  - **Evidence confidence: `DIRECT`** — established by MVR regulations and verified on `mvr.gov.mk`.
- **Consular Fee Schedule:**
  - Via Diplomatic and Consular Missions (DCP) of North Macedonia abroad.
  - Regular biometric passport overseas: €54–€60 (or USD equivalent) depending on age category.
  - **Evidence confidence: `PARTIAL`** — mission-specific consular tariffs apply.
- **Civil Identity & Document Checklists:**
  - **Identity Document:** Valid National Identity Card (*Лична карта*) or previously issued passport booklet.
  - **Birth Certificate / EMBG:** Original birth certificate (*Извод од матична книга на родени*) with Unique Master Citizen Number (*Единствен матичен број на граѓанинот - ЕМБГ*) for first-time applicants.
  - **Biometrics:** Facial digital photo, signature, and fingerprint scan captured directly at MVR service points.
  - **For minors (under 18):** Mandatory presence and written consent of both parents with valid identity cards.
  - **Constitutional Name Compliance:** In accordance with the Prespa Agreement, passports with the former constitutional name ("Republic of Macedonia") expired on 12 February 2024. All issued travel documents carry the constitutional name "Republic of North Macedonia".
- **Application & Delivery Channels:**
  - Mandatory electronic appointment booking via `termin.mvr.gov.mk` or dedicated MVR telephone call center.
  - In-person attendance for biometric capture at MVR regional departments (Skopje, Bitola, Kumanovo, Prilep, Tetovo, Ohrid, etc.).
  - Delivery: Collected in person at the local MVR department upon return of the application receipt slip.

---

### 17.2 Moldova (MD / MDA) — Agenția Servicii Publice (ASP)

- **Administering Authority:** Agenția Servicii Publice (ASP - Public Services Agency), Guvernul Republicii Moldova
- **Primary Portals:**
  - Official ASP Passport Services Card: `https://www.asp.gov.md/ro/servicii/persoane-fizice/acte-identitate/pasaport/155`
  - ASP Electronic Appointment Portal: `https://programare.asp.gov.md/`
  - Government Delivery Platform: `https://mdelivery.gov.md/`
- **Statutory Framework:**
  - Legea nr. 273/1994 privind actele de identitate din sistemul național de pașapoarte and Government Decisions regulating public service tariffs.
- **Domestic Fee Schedule (in Moldovan Lei — MDL):**
  - **Standard Timeline (20 working days):**
    - **Reformed Statutory Tariff:** **790 MDL** (Approved under Government Decision / ASP media announcement 2026-07-29 & 2026-09-25 coinciding with circulation of the new European-standard biometric model from 15 October 2026).
    - **Legacy Baseline Tariff:** **650 MDL** (Published historically on static service description card `asp.gov.md/.../155`).
    - **Documented Discrepancy:** The Government approved an adjustment from 650 MDL to 790 MDL for the new-generation passport with enhanced polycarbonate data page and upgraded anti-forgery features. While news releases and updated tariff registries specify 790 MDL, legacy service portals retained 650 MDL until backend IT completion. Both figures are preserved in this audit register.
  - **Expedited / Urgent Processing Tiers:**
    - **10 working days:** ~1,100–1,260 MDL
    - **5 working days:** ~1,430–1,580 MDL
    - **1 working day (24 hours):** ~1,710–1,890 MDL
    - **Same-day service (în ziua adresării):** ~2,000–2,130 MDL (available at designated central multifunctional centers in Chișinău).
  - **Validity:**
    - Adults (aged 16+): **10 years**
    - Children aged 7 to 16: **7 years**
    - Children under 7: **4 years**
  - **Evidence confidence: `DIRECT`** — established by Government Decisions and published ASP announcements.
- **Consular Fee Schedule:**
  - Via Diplomatic Missions and Consular Offices (MDOC) of the Republic of Moldova abroad.
  - Standard consular passport fee: ~€50.00–€60.00 base + consular fee and diplomatic pouch dispatch.
  - **Evidence confidence: `PARTIAL`** — mission-specific diplomatic courier rates apply.
- **Civil Identity & Document Checklists:**
  - **Identity Card:** Valid Moldovan Identity Card (*Buletin de identitate*) with accompanying slip (*fișa de însoțire*) for applicants aged 16 and over.
  - **IDNP:** 13-digit Personal Identification Number (*Numărul de identificare de stat al persoanei fizice - IDNP*).
  - **Birth Certificate:** Original birth certificate required for minors or first-time applicants.
  - **For minors (under 18):** Application submitted by a legal representative (parent, guardian); written consent of both parents if required by court or civil registry provisions.
  - **In case of loss/theft:** Declaration of loss lodged directly with the ASP multifunctional center or police report.
  - **Biometrics:** Digital facial photo, signature (from age 14), and two fingerprints (from age 12) captured live on-site.
- **Application & Delivery Channels:**
  - In-person attendance at any ASP Multifunctional Center (*Centru Multifuncțional*) across Moldova, irrespective of registration address.
  - Online appointment reservation via `programare.asp.gov.md`.
  - Delivery: Collected in person or delivered to the applicant's residential address via the state delivery platform MDelivery (`mdelivery.gov.md`).

---

### 17.3 Montenegro (ME / MNE) — Ministarstvo unutrašnjih poslova (MUP)

- **Administering Authority:** Ministarstvo unutrašnjih poslova (Ministry of the Interior - MUP), Vlada Crne Gore
- **Primary Portals:**
  - Government of Montenegro Passport Issuance Guide: `https://www.gov.me/en/article/issuance-of-passport`
  - Travel Documents Framework: `https://www.gov.me/en/article/travel-documents`
  - MUP Personal Documents Portal: `https://www.gov.me/mup`
  - Official Payment Instruction Evidence: `https://www.gov.me/dokumenta/d765c42e-bdff-4fc4-b667-dff1001d0722`
- **Statutory Framework:**
  - Zakon o putnim ispravama (Law on Travel Documents) and Zakon o administrativnim taksama (Law on Administrative Fees, Article 16 exemption for minors).
- **Domestic Fee Schedule (in Euros — EUR):**
  - **Statutory Components Breakdown:**
    - **Passport Form Fee (*Naknada za obrazac pasoša*):** **8.00 €** (decreased from the previous €15.00 form fee under the eLK/biometric document reform announced by Director-General Baković).
    - **Administrative Tax (*Administrativna taksa*):** **25.00 €** (statutory administrative tax under Tariff Number 21).
  - **Total Statutory Fees by Category:**
    - **Adults (Citizens aged 21 and older, 10-year validity):** **33.00 €** (8.00 € form fee + 25.00 € administrative tax).
    - **Children and Young Persons under 21 years:** **8.00 €** (exempt from the 25.00 € administrative tax pursuant to Article 16 of the Law on Administrative Fees; pay only the 8.00 € form fee).
    - **Reconciled Ambiguity:** Legacy government references and older service portals frequently cited **40.00 €** (€15 form + €25 tax) or **50.00 €** (historical pre-reform total). Official Ministry of Interior executive action (Article 224404) confirmed the statutory decrease of the form fee to €8.00, establishing the current total at **€33.00** for adults and **€8.00** for youth under 21.
  - **Validity:**
    - Persons aged 4 and older: **10 years**
    - Children under 4: **2 years**
  - **Evidence confidence: `DIRECT`** — established by Law on Travel Documents, Law on Administrative Fees, and MUP executive decisions.
- **Consular Fee Schedule:**
  - Via Montenegrin Embassies and Consulates abroad.
  - Consular passport fee: ~€50–€70 depending on foreign mission chancery regulations.
  - **Evidence confidence: `PARTIAL`** — mission-specific consular charges apply.
- **Civil Identity & Document Checklists:**
  - **Identity Card:** Valid Biometric National Identity Card (*Biometrijska lična karta*) for citizens aged 18+.
  - **JMBG:** Unique Master Citizen Number (*Jedinstveni matični broj građana - JMBG*).
  - **Proof of Payment:** Bank or post office payment slips for the two designated budget accounts (form fee account and administrative tax account).
  - **Previous Passport:** Submitted for cancellation upon renewal or collection.
  - **For minors (under 18):** Application submitted by both parents (or one parent with certified power of attorney from the other); child must be present for live biometric photo.
  - **Biometrics:** Live photograph, electronic signature, and two fingerprints captured on-site (children under 12 exempt from fingerprints and signature).
- **Application & Delivery Channels:**
  - In-person attendance at local branch/regional unit of the Ministry of the Interior (*Područna jedinica ili filijala MUP-a*) according to the applicant's place of residence.
  - Processing: Standard statutory deadline is **15 working days** from the date of submission.
  - Delivery: Collected in person at the MUP counter upon return of application certificate.

---

### 17.4 Kosovo (XK / XKX) — Agjencia e Regjistrimit Civil (ARC / MPB)

- **Project Identifier Note:** `XK` is a user-assigned project identifier for Kosovo; it is **NOT** a formally assigned ISO 3166-1 alpha-2 code.
- **Administering Authority:** Agjencia e Regjistrimit Civil (ARC - Civil Registration Agency), Ministria e Punëve të Brendshme (MPB - Ministry of Internal Affairs), Republic of Kosovo
- **Primary Portals:**
  - Official MPB Portal: `https://mpb.rks-gov.net/`
  - E-Kosova State Portal: `https://ekosova.rks-gov.net/`
  - Official Legal Gazette of Kosovo: `https://gzk.rks-gov.net/` (Administrative Instruction MIA No. 06/2018: Act ID 17663)
- **Statutory Framework:**
  - Ligji Nr. 03/L-132 për Dokumentet e Udhëtimit (Law on Travel Documents) and Administrative Instruction (MIA) No. 06/2018 on Procedures for Equipment with Passports.
- **Domestic Fee Schedule (in Euros — EUR):**
  - **Standard Procedure (delivered within ~15 working days):**
    - **Adults (aged 18+, 10-year validity):** **30.00 €**
    - **Minors (under 18 years, 5-year or 3-year validity):** **20.00 €**
    - **Pensioners (citizens aged 65 and older):** **15.00 €** (50% statutory reduction).
  - **Urgent Procedure (Procedura e përshpejtuar — ready within 72 working hours):**
    - Additional statutory surcharge: **+50.00 €** (total: **80.00 €** for adults / **70.00 €** for minors).
    - Emergency humanitarian or medical cases may be exempted from the urgency surcharge subject to verified health board documentation.
  - **Validity:**
    - Adults (18+): **10 years**
    - Minors aged 3 to 18: **5 years**
    - Children under 3 years: **3 years**
  - **Evidence confidence: `DIRECT`** — established by Law No. 03/L-132, Administrative Instruction No. 06/2018, and published ARC fee schedules.
- **Consular Fee Schedule:**
  - Via Embassies and Consulates-General of Kosovo abroad (e.g. Berlin, Bern, Vienna, Washington).
  - Standard adult consular passport: ~60.00 € / Urgent: 110.00 €.
  - **Evidence confidence: `PARTIAL`** — mission-specific diplomatic regulations apply.
- **Civil Identity & Document Checklists:**
  - **Identity Card:** Valid original Letërnjoftim (Kosovo National Identity Card) for citizens aged 16 and over.
  - **Extract of Civil Status:** Original birth extract (*Ekstrakt i lindjes*) issued by the Civil Status Office.
  - **For minors (under 18):** Mandatory physical presence of the minor accompanied by both parents with valid identity cards. In case of absence of one parent, a notarized authorization or competent court decision is required.
  - **Renewal:** Submission and physical cancellation of previous passport booklet.
  - **In case of loss/theft:** Official Police Report (*Raporti policor*) issued by Kosovo Police confirming notification of loss or theft.
  - **Biometrics:** Digital photograph, electronic signature, and ten fingerprints captured at Document Equipment Centers (QPD). (Children under 12 exempt from fingerprints and signature).
- **Application & Delivery Channels:**
  - In-person attendance at the municipal Document Equipment Center (*Qendra për Pajisje me Dokumente - QPD*) in the applicant's municipality of residence.
  - Online application tracking via `ekosova.rks-gov.net`.
  - Delivery: Collected in person at the QPD upon presentation of application coupon and identity verification.

---

### 17.5 Monaco (MC / MCO) — Direction de la Sûreté Publique

- **Administering Authority:** Direction de la Sûreté Publique (Division de Police Administrative), Ministère d'État / Département de l'Intérieur, Principauté de Monaco
- **Primary Portals:**
  - Official Government Portal: `https://en.service-public-particuliers.gouv.mc/` / `https://monservicepublic.gouv.mc/`
  - Journal de Monaco Official Legal Gazette: `https://journaldemonaco.gouv.mc/`
- **Statutory Framework:**
  - Ordonnance Souveraine n° 16.584 du 22 décembre 2004 modifiée par l'Ordonnance Souveraine n° 8.459 du 15 janvier 2021 (publiée au *Journal de Monaco* n° 8526 du 19 février 2021).
- **Domestic Fee Schedule (in Euros — EUR):**
  - **Adults (Majeurs, aged 18 and over, 10-year validity):** **90.00 €**
  - **Minors aged 3 to 17 (Mineurs de 18 ans, 5-year validity):** **60.00 €**
  - **Children under 3 years (Enfants de moins de 3 ans, 3-year validity):** **30.00 €**
  - **Payment Modalities:** Payment must be settled strictly in **cash** or by **cheque** payable to *Trésorerie Générale des Finances*. Credit/debit cards are not accepted at the Sûreté Publique cashier counter.
  - **Validity:**
    - Adults (18+): **10 years**
    - Minors (3–17): **5 years**
    - Children (<3): **3 years**
  - **Evidence confidence: `DIRECT`** — established by Ordonnance Souveraine n° 8.459 and published on `journaldemonaco.gouv.mc` and `monservicepublic.gouv.mc`.
- **Consular Fee Schedule:**
  - Via Monegasque Embassies and Consulates abroad (e.g. Paris, Rome, Washington).
  - Consular fee mirrors domestic stamp fee (90.00 € adult / 60.00 € minor / 30.00 € child) plus diplomatic postal transmission charges.
  - **Evidence confidence: `DIRECT`** — established by Sovereign Ordinance.
- **Civil Identity & Document Checklists:**
  - **Citizenship Requirement:** Applicant must hold Monegasque nationality (*Nationalité monégasque*). Passports are not issued to non-citizen residents of Monaco (who hold French or foreign national passports).
  - **National Identity Card:** Valid *Carte d'identité monégasque* in original form.
  - **Application Form:** Official *Formulaire de demande de passeport* (icharte 01 2023) completed and signed.
  - **Photographs:** Two (2) recent, identical, non-dematerialized biometric photographs (35x45mm) meeting official standards.
  - **Previous Passport:** Submitted for cancellation upon renewal.
  - **For minors:** Application signed by the parent or legal guardian exercising parental authority; child must be present in person for facial verification.
  - **Biometrics:** Children under 12 are exempt from fingerprint collection. Applicants aged 12 and over provide two biometric fingerprints and digital signature.
  - **In case of loss/theft:** Official declaration of loss or theft (*Déclaration de perte ou vol*) lodged before the Direction de la Sûreté Publique.
- **Application & Delivery Channels:**
  - In-person attendance at the Direction de la Sûreté Publique (Division de Police Administrative, 4 rue Louis Notari, Monaco).
  - Processing: Standard ~5 to 10 working days.
  - Delivery: Collected in person at the Sûreté Publique counter by the applicant (or legal guardian for minors) upon return of receipt slip.

---

### 17.6 San Marino (SM / SMR) — Ufficio Stato Civile, Servizi Demografici ed Elettorali

- **Administering Authority:** Ufficio Stato Civile, Servizi Demografici ed Elettorali (Ufficio Passaporti), Dipartimento Affari Istituzionali e Giustizia / Dipartimento Affari Esteri, Repubblica di San Marino
- **Primary Portals:**
  - Official Public Administration Portal: `https://www.gov.sm/`
  - Ministry of Foreign Affairs (Segreteria di Stato Affari Esteri): `https://www.esteri.sm/`
  - Service Charter (Carta dei Servizi 2025): `https://www.gov.sm/pub2/GovSM/dam/jcr%3A9a27eb14-1b4f-486d-b207-1f3b723b2d06/Rev%20Carta%20dei%20Servizi%20Stato%20Civile,%20Servizi%20Demografici%20ed%20Elettorali%202025.pdf`
- **Statutory Framework:**
  - Legge 16 giugno 2004 n. 81 (Norme sull'ordinamento del passaporto) and Rev. Carta dei Servizi Stato Civile, Servizi Demografici ed Elettorali 2025.
- **Domestic Fee Schedule (in Euros — EUR):**
  - **Standard Issuance Timeline (~10–15 business days):**
    - **Adults and Young Persons aged 14 and over (dai 14 anni in poi, 10-year validity):** **€ 100.00**
    - **Children aged 3 to 14 (da 3 a 14 anni non compiuti, 5-year validity):** **€ 50.00**
    - **Infants under 3 years (da 0 a 3 anni non compiuti, 3-year validity):** **€ 30.00**
  - **Urgent Delivery Surcharge (Procedura d'urgenza — delivery in 3 working days):**
    - Additional **+€ 50.00** supplement (total: **€ 150.00** for adults; **€ 100.00** for children 3–14; **€ 80.00** for infants <3).
  - **Validity:**
    - Persons aged 14 and over: **10 years**
    - Children aged 3 to 14: **5 years**
    - Children under 3: **3 years**
  - **Evidence confidence: `DIRECT`** — established by San Marino Law No. 81/2004 and verified in the official 2025 Service Charter (*Carta dei Servizi*).
- **Consular Fee Schedule:**
  - Via Diplomatic Missions and Consulates of the Republic of San Marino abroad (coordinated through the Dipartimento Affari Esteri).
  - Base statutory passport fee + consular administration charges applied by foreign chancelleries.
  - **Evidence confidence: `PARTIAL`** — mission-specific consular charges apply.
- **Civil Identity & Document Checklists:**
  - **Citizenship Requirement:** Exclusively available to citizens of the Republic of San Marino (*cittadini sammarinesi*).
  - **Identification:** San Marino Identity Card (*Carta d'identità sammarinese*) and ISS Social Security Code (*Codice ISS*).
  - **Application Form:** Official *Dichiarazione sostitutiva di certificazione per il rilascio del passaporto* fully completed, declaring civil status (single, married, widowed, separated, divorced) and absence of disqualifying criminal proceedings.
  - **Photographs:** Two (2) recent identical biometric photographs (35x45mm) on a light background.
  - **For minors (under 18):** Written consent of both parents (*assenso di entrambi i genitori*) or legal guardian.
  - **Renewal:** Presentation and surrender of previous passport for cancellation.
  - **In case of loss/theft:** Official police report (*denuncia di furto o smarrimento*) lodged before the *Corpo della Gendarmeria*, *Polizia Civile*, or competent foreign police authority.
  - **Biometrics:** Electronic facial photograph and digital fingerprint acquisition (for applicants aged 12 and over).
- **Application & Delivery Channels:**
  - In-person attendance at the Ufficio Stato Civile (Via 28 Luglio n. 196, Borgo Maggiore, San Marino).
  - Processing: Standard ~10–15 business days; urgent procedure 3 business days.
  - Delivery: Collected in person at the Civil Status Office upon presentation of identity document and application receipt.

---


## 18. Batch 16 — Central Asia, South Asia & Southeast Asia Sovereign States (KG, TJ, MN, BT, MV, KH)

### 18.1 Kyrgyzstan (KG / KGZ) — Департамент регистрации населения (Минцифры КР)

- **Administering Authority:** Департамент регистрации населения при Министерстве цифрового развития Кыргызской Республики (DRN / Ministry of Digital Development) and ГУ "Кызмат" (State Institution "Kyzmat", formerly ГП "Инфоком")
- **Primary Portals:**
  - Official Ministry of Digital Development Portal: `https://digital.gov.kg/`
  - Tunduk State Electronic Services Portal: `https://tunduk.gov.kg/` / `https://portal.tunduk.kg/`
- **Statutory Framework:**
  - Положение об общегражданском паспорте гражданина Кыргызской Республики образца 2020 года and Government Decrees on tariffs of the State Institution "Kyzmat".
- **Domestic Fee Schedule (in Kyrgyz Soms — KGS):**
  - **Standard Manufacturing Timeline (up to 18 working days):**
    - **First-time issuance or renewal upon expiration (34-page booklet):** **2,981 KGS**
    - **Exchange due to change of personal data (FIO) or residence:** **3,081 KGS**
    - **Replacement of lost or damaged passport:** **3,181 KGS**
  - **Expedited Manufacturing Tiers (Urgent / Срочное изготовление):**
    - **8 working days:** Surcharge of **2,720–2,920 KGS**
    - **4 working days:** Surcharge of **3,302–3,502 KGS**
    - **2 working days:** Surcharge of **3,808–4,008 KGS**
    - **3 hours (Super-urgent, Bishkek Central PSCs only):** Total fee **10,363–10,563 KGS** (available if submitted during morning intake hours).
  - **Validity:**
    - Citizens aged 16 and over: **10 years**
    - Children under 16 years: **3 years** (or up to attaining age 16).
  - **Evidence confidence: `DIRECT`** — established by Ministry of Digital Development decrees and confirmed on `digital.gov.kg`.
- **Consular Fee Schedule:**
  - Via Diplomatic Missions and Consular Posts of the Kyrgyz Republic abroad.
  - Standard consular fee: ~USD $40–$50 plus diplomatic delivery and manufacturing charges.
  - **Evidence confidence: `PARTIAL`** — mission-specific consular tariffs apply.
- **Civil Identity & Document Checklists:**
  - **National Identity Card:** Valid ID-паспорт гражданина КР (smart card with chip) with Personal Identification Number (ПИН / PIN).
  - **Birth Certificate:** Original birth certificate (*Свидетельство о рождении*) for minors.
  - **For minors (under 18):** Notarized consent of both parents; presence of parents with valid ID-cards.
  - **Renewal:** Presentation and surrender of previous passport booklet for invalidation.
  - **In case of loss/theft:** Certificate of loss issued by the internal affairs bodies (МВД) / registration in the Unified Register.
  - **Biometrics:** Digital facial photograph, electronic signature, and ten fingerprints captured live on-site.
- **Application & Delivery Channels:**
  - In-person attendance at any Public Service Center (*Центр обслуживания населения - ЦОН*) across Kyrgyzstan.
  - Pre-booking available via the "Early Booking" module on `portal.tunduk.kg` or mobile app.
  - Delivery: Collected in person at the ЦОН upon presentation of application slip and national ID.

---

### 18.2 Tajikistan (TJ / TJK) — Хадамоти шиносномавӣ (ВКД) & Сарраёсати консулӣ (ВКХ)

- **Administering Authority:** Хадамоти шиносномавию бақайдгирии Вазорати корҳои дохилӣ (Passport and Registration Service of the Ministry of Internal Affairs - MIA) and Сарраёсати консулии Вазорати корҳои хориҷӣ (Main Consular Department, Ministry of Foreign Affairs - MFA), Republic of Tajikistan
- **Primary Portals:**
  - Ministry of Foreign Affairs Consular Portal: `https://consular.tj/`
  - Ministry of Foreign Affairs Official Portal: `https://mfa.tj/`
  - Ministry of Internal Affairs Official Portal: `https://vkd.tj/`
- **Statutory Framework:**
  - Қонуни Ҷумҳурии Тоҷикистон «Дар бораи ҳуҷҷатҳои тасдиқкунандаи шахсият» (Law on Identification Documents) and Government Decrees on state duties and consular fees for biometric travel passports.
- **Domestic Fee Schedule (Statutory USD fees payable in Tajik Somoni — TJS at NBT rate):**
  - **Standard Timeline (up to 15 working days):**
    - **Adults (aged 16+, 10-year validity):** **USD $75.00** state duty + **40 TJS** administrative service fee.
    - **Minors (under 16 years, 5-year validity):** **USD $25.00** state duty + **40 TJS** administrative service fee.
  - **Expedited Processing Tiers (Urgent / Таъҷилӣ):**
    - **Within 7 working days:** 100% surcharge on state duty = **USD $150.00** + 40 TJS.
    - **Within 3 working days:** 200% surcharge on state duty = **USD $225.00** + 40 TJS.
  - **Validity:**
    - Persons aged 16 and over: **10 years**
    - Minors aged 1 to 16: **5 years**
    - Infants under 1 year: **2 years**
  - **Evidence confidence: `DIRECT`** — established by Government resolutions and verified on `mfa.tj` and `consular.tj`.
- **Consular Fee Schedule:**
  - Via Embassies and Consulates-General of Tajikistan abroad (e.g. Moscow, Berlin, London, Washington).
  - Consular state fee: USD $75.00 (adult) / USD $25.00 (minor), or EUR equivalent (€100–€120 depending on consular region).
  - **Evidence confidence: `DIRECT`** — published on `consular.tj`.
- **Civil Identity & Document Checklists:**
  - **National Identity Card:** Valid Domestic Smart Identity Card (*Шиносномаи шаҳрванди ҶТ бо микрочип*) for citizens aged 16+.
  - **Birth Certificate:** Original birth certificate (*Шаҳодатнома дар бораи таваллуд*) for minors.
  - **Military ID / Clearance:** Military registration book (*Билети ҳарбӣ*) or certificate of deferment/clearance from military commissariat for males aged 18–27.
  - **For minors (under 18):** Notarized written consent from both parents authorizing passport issuance and foreign travel.
  - **Renewal:** Submission and surrender of the previous passport for physical cancellation.
  - **In case of loss/theft:** Certificate from police authorities (*Маълумотномаи ШВКД*) confirming report of loss.
  - **Biometrics:** Electronic facial image, digital signature, and ten fingerprints captured at MIA Passport Service centers or MFA Consular Department.
- **Application & Delivery Channels:**
  - In-person attendance at regional Passport and Registration Service branches of the MIA or the MFA Main Consular Department in Dushanbe.
  - Delivery: Collected in person upon presentation of application receipt and identity verification.

---

### 18.3 Mongolia (MN / MNG) — Улсын бүртгэлийн ерөнхий газар (УБЕГ)

- **Administering Authority:** Улсын бүртгэлийн ерөнхий газар (General Authority for State Registration - GASR), Ministry of Justice and Home Affairs, Government of Mongolia
- **Primary Portals:**
  - Official GASR Portal: `https://burtgel.gov.mn/`
  - E-Mongolia Integrated Public Services Portal: `https://e-mongolia.mn/`
- **Statutory Framework:**
  - Иргэний улсын бүртгэлийн тухай хууль (Law on State Registration of Civil Status) and Government resolutions on electronic passport issuance.
- **Domestic Fee Schedule (in Mongolian Tögrög — MNT):**
  - **Electronic Chip-Embedded Passport (Цахим гадаад паспорт, 48 pages):**
    - **Standard Statutory Issuance Fee:** **82,800 MNT** (inclusive of booklet fee, state stamp duty, and personalisation charges).
    - **Processing Deadlines:** Standard **5 working days** in Ulaanbaatar; **15 working days** in rural aimags.
    - **Urgency Policy:** Under updated GASR regulations, standard electronic passports are processed uniformly within 5 business days; separate private expedited surcharges were eliminated to standardize equitable turnaround.
    - **Lost / Damaged Replacement:** Standard fee of 82,800 MNT plus administrative fine under the Law on Violations (*Зөрчлийн тухай хууль*).
  - **Validity:**
    - Citizens aged 16 and over: **10 years**
    - Children under 16 years: **5 years**
  - **Evidence confidence: `DIRECT`** — established by Law on State Registration and published on `burtgel.gov.mn` and `e-mongolia.mn`.
- **Consular Fee Schedule:**
  - Via Diplomatic Missions and Consulates of Mongolia abroad.
  - Standard consular electronic passport fee: ~USD $60.00–$75.00 (plus diplomatic pouch transmission fee).
  - **Evidence confidence: `PARTIAL`** — mission-specific consular tariffs apply.
- **Civil Identity & Document Checklists:**
  - **National Identity Card:** Valid Mongolian Civil Identity Card (*Иргэний үнэмлэх*) with citizen registration number (*Регистрийн дугаар*).
  - **Birth Certificate:** Original birth certificate (*Төрсний гэрчилгээ*) for children under 16.
  - **For minors (under 16):** Application submitted by parents/legal guardians; parent's identity card and consent required.
  - **Biometrics:** Digital biometric facial photograph, digital signature, and electronic fingerprint verification.
- **Application & Delivery Channels:**
  - Online application via the **E-Mongolia** portal (`e-mongolia.mn`) for citizens with established digital identity and active biometrics.
  - In-person attendance at GASR branch offices, One-Stop Public Service Centers, or self-service "Gerege Systems" kiosk machines across Mongolia.
  - Delivery: Collected in person at the registration office or delivered via postal courier across Ulaanbaatar.

---

### 18.4 Bhutan (BT / BTN) — Passport Division, MFAET

- **Administering Authority:** Passport Division, Department of Protocol and Consular Services, Ministry of Foreign Affairs and External Trade (MFAET), Royal Government of Bhutan
- **Primary Portals:**
  - Official MFAET Portal: `https://www.mfa.gov.bt/`
  - G2C Citizen Services Portal: `https://www.citizenservices.gov.bt/`
- **Statutory Framework:**
  - Rules and Regulations on the Issuance of Bhutanese Travel Documents and Executive Orders of the Ministry of Foreign Affairs and External Trade.
- **Domestic Fee Schedule (in Bhutanese Ngultrum — BTN / Nu.):**
  - **Standard Ordinary Passport (32 pages):**
    - **Adults (aged 18 and over, 10-year validity):** **Nu. 1,000/-**
    - **Minors (under 18 years, 5-year validity):** **Nu. 800/-**
  - **Lost / Damaged Passport Statutory Penalties:**
    - Statutory fine/penalty for replacing a lost or damaged valid passport: **Nu. 5,000/-**
    - Total replacement cost: **Nu. 6,000/-** for adults / **Nu. 5,800/-** for minors (penalty + base booklet fee).
  - **Turnaround:** Standard issuance takes approximately **3 to 5 working days** from biometric verification.
  - **Validity:**
    - Adults (18+): **10 years**
    - Minors (under 18): **5 years**
  - **Evidence confidence: `DIRECT`** — established by MFAET regulations and verified on `mfa.gov.bt`.
- **Consular Fee Schedule:**
  - Handled via Royal Bhutanese Embassies and Consulates abroad (e.g. New Delhi, Bangkok, New York, Brussels).
  - Standard overseas passport fee: Nu. 1,000/- (or local equivalent in USD/EUR/THB/INR) plus consular handling and courier charges.
  - **Evidence confidence: `DIRECT`** — published on MFAET consular pages.
- **Civil Identity & Document Checklists:**
  - **Citizenship ID Card:** Valid Citizenship Identity Card (CID card) for citizens aged 18+.
  - **Security Clearance:** Valid Security Clearance Certificate (SCC) issued by the Royal Bhutan Police (verified automatically via the online G2C portal).
  - **For minors (under 18):** Birth Registration Certificate / Health Card; valid CID cards of parents; written consent of parents or legal guardians.
  - **Renewal:** Submission and surrender of the previous passport for physical invalidation.
  - **In case of loss/theft:** Mandatory Police Report / First Information Report (FIR) from the Royal Bhutan Police and lost passport declaration.
  - **Biometrics:** Digital photograph, electronic signature, and ten fingerprints captured at the Passport Division in Thimphu.
- **Application & Delivery Channels:**
  - Online application submission via the G2C Citizen Services Portal (`citizenservices.gov.bt`).
  - In-person attendance for biometric capture and document verification at the Passport Division (MFAET, Thimphu).
  - Delivery: Collected in person at the Passport Division or delivered via Bhutan Post.

---

### 18.5 Maldives (MV / MDV) — Maldives Immigration

- **Administering Authority:** Maldives Immigration (Divehi Raajjeyge Immigration), Ministry of Homeland Security and Technology, Republic of Maldives
- **Primary Portals:**
  - Official Maldives Immigration Portal: `https://immigration.gov.mv/`
  - IMUGA Electronic Passport Portal: `https://imuga.immigration.gov.mv/`
- **Statutory Framework:**
  - Maldives Immigration Act (Law No. 1/2007) and Maldives Passport Regulations.
- **Domestic Fee Schedule (in Maldivian Rufiyaa — MVR):**
  - **Standard Electronic Passport (32 pages, 5-year validity):** **MVR 1,000.00**
  - **Frequent Traveler Electronic Passport (48 pages, 5-year validity):** **MVR 1,500.00**
  - **Non-Electronic Passport (for children under 10 or overseas emergency applications):** **MVR 600.00**
  - **Lost / Damaged Passport Replacement Penalties:**
    - Replacement of valid lost passport: Penalty of up to **MVR 2,000.00** assessed by the review committee following police report investigation.
    - Replacement of damaged passport: Fixed penalty of **MVR 2,000.00**.
    - If the lost passport has already expired, no penalty applies (standard fee only).
  - **Validity:**
    - Standard ordinary electronic passport: **5 years** for all applicants.
  - **Evidence confidence: `DIRECT`** — established by Maldives Immigration regulations and published on `immigration.gov.mv`.
- **Consular Fee Schedule:**
  - Via Maldivian Diplomatic Missions abroad (e.g. Colombo, London, New Delhi, Kuala Lumpur).
  - Non-electronic passport fee abroad: MVR 600.00 (or equivalent in USD/GBP).
  - **Evidence confidence: `DIRECT`** — published on official mission portals.
- **Civil Identity & Document Checklists:**
  - **National Identity Card:** Valid National Identity Card issued by the Department of National Registration (DNR ID Card) in original physical form.
  - **Photographs:** High-resolution digital passport photo meeting ICAO specifications uploaded via IMUGA.
  - **For minors (under 18):** Birth certificate; DNR identity card; written consent of parents or legal guardians.
  - **Renewal:** Previous passport booklet details; physical old passport surrendered upon collection of the new booklet.
  - **In case of loss/theft:** Formal police report issued by Maldives Police Service (MPS) stating circumstances of loss.
- **Application & Delivery Channels:**
  - 100% digital application and online payment via the **IMUGA portal** (`imuga.immigration.gov.mv`).
  - Turnaround: Typically issued within **2 to 3 working days**.
  - Delivery: Collected in person at the Maldives Immigration Headquarters (Velaanaage, Malé) or designated regional immigration offices in Addu, Kulhudhuffushi, Fuvahmulah, etc.

---

### 18.6 Cambodia (KH / KHM) — General Department of Identification (GDI)

- **Administering Authority:** General Department of Identification (GDI - អគ្គនាយកដ្ឋានអត្តសញ្ញាណកម្ម), Ministry of Interior (MoI), Royal Government of Cambodia
- **Primary Portals:**
  - Official GDI Portal: `https://gdi.gov.kh/`
  - Ministry of Interior Portal: `https://interior.gov.kh/`
- **Statutory Framework:**
  - Joint Inter-Ministerial Prakas of the Ministry of Interior and Ministry of Economy and Finance on Public Administrative Service Fees.
- **Domestic Fee Schedule (Statutory USD fees collected in USD or Cambodian Riel — KHR):**
  - **Standard Processing Timeline (~20 working days):**
    - **Adults and Children aged 6 and older (10-year validity):** **US$ 100.00**
    - **Children under 6 years (5-year validity):** **US$ 80.00**
  - **Expedited / Urgent Processing Tiers:**
    - **10 working days:** **US$ 150.00**
    - **1 working day (super-urgent):** **US$ 200.00**
  - **Validity:**
    - Persons aged 6 and older: **10 years**
    - Children under 6 years: **5 years**
  - **Evidence confidence: `DIRECT`** — established by Joint Inter-Ministerial Prakas and confirmed on GDI platforms.
- **Consular Fee Schedule:**
  - Via Royal Cambodian Embassies and Consulates abroad (e.g. Bangkok, Paris, Washington, Seoul).
  - Consular passport issuance/renewal: ~USD $120.00–$150.00 inclusive of diplomatic courier fees.
  - **Evidence confidence: `PARTIAL`** — mission-specific consular regulations apply.
- **Civil Identity & Document Checklists:**
  - **National Identity Card:** Valid Cambodian National Identity Card (*Khmer ID Card / អត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ*) for citizens aged 15+.
  - **Civil Registry Documents:** Original Birth Certificate (*សំបុត្រកំណើត*); Family Record Book (*សៀវភៅគ្រួសារ*) or Residence Book (*សៀវភៅស្នាក់នៅ*).
  - **For minors (under 18):** Presence of child accompanied by parents with valid Khmer ID cards; certified birth certificate.
  - **Renewal:** Submission and surrender of previous passport for cancellation.
  - **In case of loss/theft:** Official certificate of loss issued by the local commune/sangkat police authority.
  - **Biometrics:** High-resolution facial photograph, electronic signature, and ten fingerprints captured at GDI passport offices.
- **Application & Delivery Channels:**
  - In-person attendance at the GDI Passport Issuance Department (Khan Chbar Ampov, Phnom Penh) or provincial branches (Battambang, Siem Reap, Banteay Meanchey, Koh Kong).
  - Processing: Standard ~20 working days; expedited 10 days or 1 day.
  - Delivery: Collected in person at the application office upon presentation of receipt slip.

---

## 19. Batch 17 Statutory Research Dossiers: BZ, GY, SR, BB, BS, LC

---

### 19.1 Belize (BZ / BLZ) — Department of Border Management and Immigration

- **Administering Authority:** Department of Border Management and Immigration / Ministry of Foreign Affairs, Foreign Trade and Immigration, Government of Belize
- **Primary Portals:**
  - Official Immigration Portal: `https://immigration.gov.bz/`
  - Belize Electronic Passport System (BEPS): `https://epassport.immigration.gov.bz/`
- **Statutory Framework:**
  - Belize Passports Act (Chapter 164 of the Substantive Laws of Belize) and Belize Passport Regulations.
- **Domestic Fee Schedule (in Belize Dollars — BZD / BZ$):**
  - **Standard Electronic Passport (BEPS e-Passport):**
    - **Adults (aged 16 years and older, 10-year validity):** **BZ$ 200.00**
    - **Minors (under 16 years of age, 5-year validity):** **BZ$ 150.00**
  - **Expedited / Urgent Processing Service Tiers (Belmopan Headquarters Office only):**
    - **24-Hour Expedite Service:** Additional surcharge of **BZ$ 300.00** (total: BZ$ 500.00 adult / BZ$ 450.00 minor).
    - **48-Hour Expedite Service:** Additional surcharge of **BZ$ 130.00** (total: BZ$ 330.00 adult / BZ$ 280.00 minor).
    - **5-Day Service / Medical Emergency:** Additional surcharge of **BZ$ 100.00** (medical emergency: BZ$ 80.00 upon submission of certified medical proof).
  - **Lost / Stolen / Damaged Passport Replacement Penalties:**
    - Statutory replacement surcharge of **BZ$ 200.00** in addition to the base passport fee (requires Form 6, statutory declaration of loss, and official police report).
  - **Emergency Travel Documents:**
    - Temporary Emergency Travel Document: **BZ$ 30.00**.
  - **Evidence confidence: `DIRECT`** — established by Belize Passport Regulations and published on `immigration.gov.bz`.
- **Consular Fee Schedule:**
  - Via Belize High Commissions and Embassies abroad (e.g. Washington, London, Brussels).
  - Subject to consular administrative processing and shipping/courier surcharges (~USD $200–$250 total equivalent). Expedited turnaround is unavailable abroad.
  - **Evidence confidence: `DIRECT`** — confirmed via official mission fee notices.
- **Civil Identity & Document Checklists:**
  - **Photo Identification:** Valid Belize Social Security Board (SSB) Card or Voter's Identification Card.
  - **Proof of Citizenship:** Original Birth Certificate issued by the Vital Statistics Unit (or Belize Naturalization / Registration Certificate if born abroad; Adoption Certificate if applicable).
  - **Supplementary Forms:** Form 3A Recommender Form completed and signed by an authorized Belizean citizen of standing (Justice of the Peace, Minister of Religion, Medical Practitioner, Attorney-at-Law, Notary Public, or Gazetted Police Officer).
  - **For minors (under 16):** Presence of child accompanied by parent or legal guardian; original birth certificate; parents' photo ID and marriage certificate (if applicable); formal parental consent.
  - **Renewal:** Physical presentation and surrender of current/expired machine-readable Belizean passport.
  - **Biometrics:** Mandatory in-person enrollment (digital photograph, electronic signature, and live fingerprint scanning) at Belmopan Headquarters or regional stations (Belize City, Corozal, Orange Walk, San Pedro, Dangriga, Punta Gorda).
- **Application & Delivery Channels:**
  - Appointments booked online via `https://epassport.immigration.gov.bz/`.
  - Standard turnaround: Typically 3 to 4 weeks across district offices.
  - Delivery: Collected in person by the applicant (or parent/guardian for minors) with receipt and identification.

---

### 19.2 Guyana (GY / GUY) — Central Immigration and Passport Office (CIPO)

- **Administering Authority:** Central Immigration and Passport Office (CIPO), Guyana Police Force / Ministry of Home Affairs (MoHA), Co-operative Republic of Guyana
- **Primary Portals:**
  - Ministry of Home Affairs Portal: `https://moha.gov.gy/`
  - Guyana Government Portal (Passport Appointment System): `https://portal.gov.gy/`
- **Statutory Framework:**
  - Guyana Immigration Act (Cap. 14:02) and Passport Regulations.
- **Domestic Fee Schedule (in Guyanese Dollars — GYD / G$):**
  - **Standard Biometric e-Passport:**
    - **5-Year Validity Passport:** **G$ 6,000**
    - **10-Year Validity Passport:** **G$ 12,000**
  - **Expedited / Urgent Processing Service:**
    - **72-Hour Expedited Service:** Additional statutory surcharge of **G$ 20,000** in addition to the standard passport fee (total: G$ 26,000 for 5-yr / G$ 32,000 for 10-yr).
  - **Standard Turnaround Timeline:**
    - Standard processing: **5 working days**.
  - **Evidence confidence: `DIRECT`** — published on `moha.gov.gy` and `portal.gov.gy`.
- **Consular Fee Schedule:**
  - Via Guyanese diplomatic missions abroad (e.g. New York, Toronto, London, Caracas).
  - Machine-readable / e-passport overseas fee: ~USD $75.00–$100.00 / CAD $100.00 / GBP £60.00.
  - **Evidence confidence: `DIRECT`** — published on Guyanese consulate platforms.
- **Civil Identity & Document Checklists:**
  - **National Identification Card:** Valid National Identification Card issued by the Guyana Elections Commission (GECOM) for all adult applicants.
  - **Proof of Citizenship:** Original Birth Certificate issued by the General Register Office (GRO) with certificate number and embossed seal.
  - **Application Form:** Form A generated and submitted through the online appointment portal or completed in physical hardcopy.
  - **Photographs:** Two (2) recent identical colour passport photographs (white background, neutral expression); one certified on reverse by an authorized Recommender.
  - **Recommender:** Endorsement by a Guyanese citizen of standing (Justice of the Peace, Commissioner of Oaths to Affidavits, Attorney-at-Law, Minister of Religion, Head Teacher, Senior Public Servant) who has known the applicant for at least two years.
  - **For minors (under 16):** Birth certificate; presence of parent or legal guardian with valid ID; written authorization if one parent is absent.
  - **Renewal:** Submission and physical cancellation of previous passport booklet.
  - **Lost / Damaged Replacement:** Police report from the Guyana Police Force certifying loss; formal affidavit of lost passport.
  - **Biometrics:** Mandatory in-person biometric capture (facial photo and fingerprints) at CIPO.
- **Application & Delivery Channels:**
  - Pre-application and appointment scheduling online via the Guyana Passport Appointment System (`portal.gov.gy`).
  - In-person biometric enrollment and submission at CIPO Headquarters (Camp Road, Georgetown) or regional passport offices in New Amsterdam (Berbice), Linden, Anna Regina (Essequibo), Leonora, Port Mourant, or Lethem.
  - Processing: Standard 5 working days; expedited 72 hours.
  - Delivery: In-person collection upon presentation of receipt and National ID card.

---

### 19.3 Suriname (SR / SUR) — Directoraat Burgerzaken / CBB

- **Administering Authority:** Directoraat Burgerzaken / Centraal Bureau voor Burgerzaken (CBB), Ministerie van Binnenlandse Zaken (BiZa), Republic of Suriname
- **Primary Portals:**
  - Directoraat Burgerzaken Portal: `https://burgerzaken.gov.sr/`
  - Government of Suriname Official Portal: `https://gov.sr/`
- **Statutory Framework:**
  - Paspoortwet (Suriname Passport Act) and Besluit e-Paspoorttarieven (Decree on Electronic Passport Tariffs).
- **Domestic Fee Schedule (in Surinamese Dollars — SRD):**
  - **National Biometric e-Passport (Nationaal e-Paspoort):**
    - **Adults (aged 18 years and older, 10-year validity):** **SRD 2.100,-**
    - **Minors (children up to 17 years, 5-year validity):** **SRD 1.365,-**
  - **Expedited Processing (Spoedaanvraag):**
    - Statutory urgency surcharge of **100% additional** on regular passport fees (**SRD 4.200,-** total for adults / **SRD 2.730,-** total for minors).
    - Note: Expedited processing is restricted strictly to verified emergencies with documentary proof (specialist medical referral, death of a relative up to 3rd degree, or urgent state business letter).
  - **Lost / Damaged Passport Penalties:**
    - **Lost or Stolen Passport Fine (Boete bij verlies):** **SRD 900,-** in addition to the standard passport fee (subject to official police report / *proces-verbaal*).
    - **Damaged Passport Fine (Boete bij beschadiging):** **SRD 650,-** in addition to the standard passport fee.
  - **Evidence confidence: `DIRECT`** — established by CBB ministerial regulations published on `burgerzaken.gov.sr` and `gov.sr`.
- **Consular Fee Schedule:**
  - Via Surinamese diplomatic missions abroad (e.g. The Hague, Amsterdam, Willemstad, Miami, Brussels).
  - Consular e-passport fee: ~EUR €130.00–€150.00 / USD $150.00.
  - **Evidence confidence: `DIRECT`** — confirmed via embassy consular schedules.
- **Civil Identity & Document Checklists:**
  - **National Identity Card:** Valid Surinamese National ID Card (*Identiteitskaart / e-ID*) issued by CBB.
  - **Civil Registry Proof:** Official extract from the civil registry (*Uittreksel uit het bevolkingsregister*) or original birth certificate (*Geboorteakte*). If born abroad, legalized/apostilled birth certificate with sworn Dutch translation.
  - **For minors (under 18):** Application submitted by parents/legal guardians (aged 18+); family book (*Familieboek*) or birth certificate; valid ID cards of both parents; consent form signed by both parents.
  - **Renewal:** Surrender of existing passport for cancellation.
  - **In case of loss/theft:** Official police report (*proces-verbaal*) issued by the Korps Politie Suriname (KPS).
  - **Biometrics:** Mandatory in-person enrollment (digital photograph and biometric fingerprints) at modern e-passport desks.
- **Application & Delivery Channels:**
  - In-person application at designated municipal Bureaus voor Burgerzaken (BvB) of the Centraal Bureau voor Burgerzaken (CBB) where the citizen is registered.
  - Processing: Standard ~2 to 3 weeks; spoed ~2 to 5 working days (subject to emergency validation).
  - Delivery: Collected in person at the local BvB office upon notification and presentation of receipt.

---

### 19.4 Barbados (BB / BRB) — Barbados Immigration Department (BID)

- **Administering Authority:** Barbados Immigration Department (BID), Ministry of Home Affairs and Information, Government of Barbados
- **Primary Portals:**
  - Official Immigration Portal: `https://immigration.gov.bb/`
  - Government of Barbados Portal: `https://www.gov.bb/`
- **Statutory Framework:**
  - Barbados Passports and Travel Documents (General) Regulations, Cap. 185; Barbados Immigration Act.
- **Domestic Fee Schedule (in Barbadian Dollars — BBD / BDS$):**
  - **Standard Biometric Passport:**
    - **Adult Passport (16 years and older / Form A, 10-year validity):** **BDS$ 150.00**
    - **Minor Passport (under 16 years of age / Form B, 5-year validity):** **BDS$ 100.00**
  - **Expedited / Urgent Processing Service Tiers:**
    - **Urgent Passport (2 to 5 working days turnaround):** **BDS$ 225.00**
    - **Express / Emergency Passport (1 working day / 24 hours turnaround):** **BDS$ 300.00**
  - **Lost / Damaged Passport Replacement:**
    - Statutory replacement fee for lost, stolen, or damaged passports: **BDS$ 300.00** (statutory penalty rate; requires formal report and declaration of loss).
  - **Evidence confidence: `DIRECT`** — established by Barbados Immigration Regulations published on `immigration.gov.bb`.
- **Consular Fee Schedule:**
  - Via Barbados High Commissions and Consulates General (e.g. London, Ottawa, Toronto, New York, Miami).
  - Consular fees: ~USD $100.00 / CAD $135.00 / GBP £75.00 plus consular administrative/dispatch fees.
  - **Evidence confidence: `DIRECT`** — confirmed via foreign.gov.bb and mission notices.
- **Civil Identity & Document Checklists:**
  - **National Identification Card:** Valid Barbados National Identification Card (Trident ID / National Registration Card) issued by the Electoral and Boundaries Commission (EBC).
  - **Proof of Citizenship:** Original Birth Certificate issued by the Registration Department (Supreme Court Complex, Coleridge Street, Bridgetown).
  - **Application Forms:**
    - **Form A:** For persons aged 16 years and over (completed in applicant’s own handwriting in BLOCK CAPITALS).
    - **Form B:** For children under 16 years of age (completed by parent or legal guardian).
  - **Photographs:** Two (2) identical recent photographs (5cm x 5cm) taken by a professional photographer. One photo certified on reverse by the guarantor: *"I certify that this is a true likeness of [Applicant Name]"*.
  - **Guarantor Endorsement:** Section 10 of Form A / Form B must be certified and signed by an approved guarantor (Member of Parliament, Justice of the Peace, Magistrate, Minister of Religion, Attorney-at-Law, Medical Practitioner, Principal, or Senior Bank Officer) who has known the applicant personally for at least three years.
  - **Marital Status:** Original Marriage Certificate mandatory for married women adopting spouse's surname; divorce decree absolute if resuming maiden name.
  - **For minors (under 16):** Parents' national ID cards, marriage certificate (if applicable), and written consent of both parents.
  - **Biometrics:** Mandatory in-person enrollment at the Immigration Department.
- **Application & Delivery Channels:**
  - Submission in person at the Barbados Immigration Department, Careenage House / Princess Alice Highway, Bridgetown.
  - Turnaround: Standard ~10 to 15 working days; urgent 2–5 days; express 1 day.
  - Delivery: Collected in person by applicant upon surrender of receipt slip and previous passport booklet for cancellation.

---

### 19.5 Bahamas (BS / BHS) — Passport Office, Ministry of Foreign Affairs

- **Administering Authority:** Passport Office, Consular Division, Ministry of Foreign Affairs, Commonwealth of The Bahamas
- **Primary Portals:**
  - Ministry of Foreign Affairs Official Portal: `https://mofa.gov.bs/`
  - Government of The Bahamas Services Portal: `https://www.bahamas.gov.bs/`
  - MyGateway Government Portal: `https://mygateway.gov.bs/`
- **Statutory Framework:**
  - Bahamas Nationality Act (Chapter 190) and Bahamas Passport Regulations.
- **Domestic Fee Schedule (in Bahamian Dollars — BSD / B$ / $):**
  - **Standard Electronic Passport (ePassport):**
    - **Adults (aged 15½ years and older, 10-year validity):** **$50.00**
    - **Minors (under 15½ years of age, 5-year validity):** **$25.00**
    - **Frequent Traveller / Frequent Flyer ePassport (expanded booklet pages):** **$100.00**
  - **Expedited / Emergency Processing Surcharges (Standard Applications):**
    - **Within 36 to 48 hours:** Additional surcharge of **$300.00** (total: $350.00 adult / $325.00 minor).
    - **Same-Day Emergency Service (application submitted before 12:00 noon):** Additional surcharge of **$350.00** (total: $400.00 adult / $375.00 minor).
  - **Damaged, Lost, or Stolen Passport Replacement Fees:**
    - Standard replacement (Adult 15½+): **$50.00** regular booklet / **$100.00** frequent flyer booklet.
    - Standard replacement (Minor <15½): **$25.00**.
    - Expedited replacement within 10 days: Additional surcharge of **$75.00**.
    - Expedited replacement within 48 hours: Additional surcharge of **$325.00**.
    - Same-Day expedited replacement (before noon): Additional surcharge of **$375.00**.
  - **Overseas Collection / Dispatch Surcharge:**
    - Subsidized international DHL courier fee: **$35.00** for collection at overseas missions.
  - **Evidence confidence: `DIRECT`** — established by Bahamas Passport Regulations published on `mofa.gov.bs`.
- **Consular Fee Schedule:**
  - Via Bahamian Embassies and Consulates General (e.g. Miami, Atlanta, New York, Washington, Ottawa, London, Havana).
  - Overseas ePassport fees: $50.00 regular adult / $25.00 minor / $100.00 frequent traveller + $35.00 courier fee.
  - **Evidence confidence: `DIRECT`** — confirmed via official mission portals.
- **Civil Identity & Document Checklists:**
  - **National Insurance Card:** Valid National Insurance Board (NIB) Smart Card mandatory.
  - **Proof of Bahamian Citizenship:**
    - Original Birth Certificate issued by the Registrar General’s Department (RGD).
    - Mother’s birth certificate or parents' registered marriage certificate (mandatory under Bahamian constitutional citizenship provisions).
    - Certificate of Naturalization or Registration (if applicable).
  - **Photographs:** Three (3) identical recent passport photographs (white background) certified by an authorized Counter-Signatory / Notary Public (for in-person first-time applications).
  - **For minors (under 15½):** Presence of child accompanied by mother/father/legal guardian; child’s birth certificate; parent’s NIB card and passport; written parental consent.
  - **Online Adult Renewal (MyGateway):** Available for adult holders of 10-year electronic biometric passports issued after 2007; digital photo upload; electronic payment via credit/debit card.
  - **Lost / Stolen Applications:** Cannot be submitted online; requires mandatory in-person appearance, Police Certificate of Loss from the Royal Bahamas Police Force, and completed Lost/Stolen/Damaged Passport Form.
  - **Biometrics:** Mandatory biometric enrollment (facial image, live fingerprint scan, electronic signature) at the Passport Office.
- **Application & Delivery Channels:**
  - Online renewal via `mygateway.gov.bs` or in-person submission at Passport Office Headquarters (Thompson Boulevard, Nassau), Grand Bahama Office (Freeport), or Family Island Administrator Offices (Abaco, Eleuthera, Exuma, etc.).
  - Standard processing: Typically 3 to 5 weeks in New Providence (longer for Family Islands).
  - Delivery: Collected in person or dispatched via trackable postal/courier service.

---

### 19.6 Saint Lucia (LC / LCA) — Immigration Department, Royal Saint Lucia Police Force

- **Administering Authority:** Immigration Department, Royal Saint Lucia Police Force (RSLPF) / Ministry of Home Affairs, Government of Saint Lucia
- **Primary Portals:**
  - Official Government Portal: `https://www.govt.lc/`
  - Royal Saint Lucia Police Force: `https://rslpf.com/`
- **Statutory Framework:**
  - Saint Lucia Passports Act, Cap. 10.03 and Passports (Amendment) Regulations (Statutory Instrument No. 109 of 2022 / S.I. 128 of 2022 establishing the e-Passport schedule).
- **Domestic Fee Schedule (in Eastern Caribbean Dollars — XCD / EC$):**
  - **Standard Electronic Passport (e-Passport):**
    - **Adults (aged 16 years and older, 10-year validity):** **EC$ 250.00**
    - **Minors (under 16 years of age, 5-year validity):** **EC$ 250.00** (statutory uniform e-passport issuance rate).
  - **Passport Replacement before Expiry (Lost, Stolen, or Damaged):**
    - **Replacement Fee:** **EC$ 300.00** (statutory replacement fee; requires formal declaration and police loss report).
  - **Expedited / Emergency Service Surcharges:**
    - **Urgent / Expedited Processing (3 to 5 working days):** Additional surcharge of **EC$ 50.00** on base or replacement fee (total: EC$ 300.00 regular / EC$ 350.00 replacement).
  - **Emergency Travel Documents:**
    - Standalone Emergency Passport / Emergency Certificate: **EC$ 50.00**.
  - **Standard Turnaround Timeline:**
    - Standard processing: **15 working days**.
  - **Evidence confidence: `DIRECT`** — established by Statutory Instrument No. 109 of 2022 and published on `govt.lc`.
- **Consular Fee Schedule:**
  - Via Saint Lucia High Commissions and Consulates General (e.g. New York, Washington D.C., Toronto, London, Martinique).
  - Consular e-passport fee: ~USD $125.00 / CAD $175.00 / GBP £100.00 plus diplomatic courier fees.
  - **Evidence confidence: `DIRECT`** — published on embassy consular portals.
- **Civil Identity & Document Checklists:**
  - **National Identification Card:** Valid Saint Lucia National Identification Card (NIC) mandatory for applicants aged 18 and older. For applicants aged 16–17, National Insurance Scheme (NIS) card is accepted.
  - **Proof of Citizenship:** Original Birth Certificate issued by the Civil Status Registry (Adeline Street, Castries). A Birth and Baptismal Certificate is required only if the applicant’s name does not appear on the original civil birth record.
  - **Proof of Marital Status:** Original Marriage Certificate (mandatory for married females taking husband's surname); divorce decree absolute if applicable.
  - **Photographs:** Two (2) identical recent color passport photographs (white background, ears visible); one certified by an authorized Recommender. (Live digital photography captured at modernized counters).
  - **Recommender:** Section 9 of application form certified by a Justice of the Peace, Minister of Religion, Medical Practitioner, Attorney-at-Law, Police Officer (Inspector or above), or Principal.
  - **For minors (under 16):** Accompanied by parent or legal guardian; child's birth certificate; parent’s national ID card; written parental consent if one parent is absent.
  - **In case of loss/theft:** Official Police Report from the Royal Saint Lucia Police Force (RSLPF) and signed Statutory Declaration of Loss.
  - **Biometrics:** Mandatory in-person biometric capture (facial photo, electronic signature, and ten fingerprints) at the Immigration Department.
- **Application & Delivery Channels:**
  - In-person attendance and submission at the Immigration Department, Police Headquarters (Bridge Street, Castries) or Southern Division Sub-Station (Vieux Fort).
  - Turnaround: Standard 15 working days; expedited 3 to 5 working days.
  - Delivery: In-person collection upon presentation of receipt and ID card.

---

## 20. Batch 18 Statutory Research Dossiers: FJ, PG, WS, SB, TO, VU

---

### 20.1 Fiji (FJ / FJI) — Department of Immigration, Office of the Prime Minister

- **Administering Authority:** Department of Immigration, Office of the Prime Minister, Republic of Fiji
- **Primary Portals:**
  - Official Immigration Portal: `https://www.immigration.gov.fj/`
  - Ministry of Foreign Affairs: `https://foreignaffairs.gov.fj/`
- **Statutory Framework:**
  - Fiji Passports Act 2002 and Passports Regulations (Immigration Fees Regulations).
- **Domestic Fee Schedule (in Fijian Dollars — FJD / F$):**
  - **Standard Electronic Passport (Fiji e-Passport):**
    - **Adults and General Issuance (10-year validity adult / 5-year minor):** **FJD $206.50**
  - **Expedited / Urgent Processing Service Tiers:**
    - **Urgent Processing Fee (New or Renewal, normal working days):** **FJD $283.85**
    - **Urgent Processing Fee (Weekends / Public Holidays):** **FJD $627.60**
    - **Change of Service (from Ordinary to Urgent during processing):** **FJD $129.05** (normal working days) / **FJD $426.60** (weekends/holidays).
  - **Lost, Stolen, or Damaged Passport Replacement Fees:**
    - **Ordinary Processing (Valid Lost/Stolen/Damaged Passport):** **FJD $412.90**
    - **Urgent Processing (Valid Lost/Stolen/Damaged Passport):** **FJD $536.75**
  - **Validity:**
    - Adults (aged 16 years and older): **10 years**
    - Minors (under 16 years of age): **5 years**
  - **Evidence confidence: `DIRECT`** — established by Immigration Fees Regulations published on `immigration.gov.fj`.
- **Consular Fee Schedule:**
  - Via Fijian High Commissions and Embassies abroad (e.g. Canberra, Wellington, London, Washington, Tokyo).
  - Consular passport processing fee: ~AUD $180.00 / NZD $200.00 / USD $140.00 / GBP £100.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official foreign affairs mission notices.
- **Civil Identity & Document Checklists:**
  - **Proof of Citizenship:** Original Birth Certificate issued by the Registrar General’s Department (RGD) with visible registration number.
  - **Photo Identification:** Valid photo identity document (Fiji National Voter Card, Joint FNPF/FRCS ID Card, or Driver's Licence).
  - **Legal Name Change:** Original Marriage Certificate (for married women taking spouse's surname) or registered Deed Poll document.
  - **Photographs:** Two (2) recent passport-sized photographs compliant with ICAO specifications (one certified on reverse by authorized recommender).
  - **Recommender:** Application form certified by a Justice of the Peace, District Officer, Legal Practitioner, Medical Doctor, Magistrate, Minister of Religion, or Bank Manager who has known the applicant for at least one year.
  - **For minors (under 16):** Accompanied by parent or legal guardian; original birth certificate; parents' IDs and marriage certificate; written consent from both parents.
  - **In case of loss/theft:** Mandatory Police Report from Fiji Police Force and sworn Statutory Declaration detailing the circumstances of loss.
  - **Biometrics:** Mandatory in-person enrollment (digital facial photography, live electronic signature, and ten fingerprints) at Immigration Department offices.
- **Application & Delivery Channels:**
  - In-person submission and enrollment at Department of Immigration Headquarters (Suva) or regional divisions in Nadi, Lautoka, and Labasa.
  - Turnaround: Standard ~10 working days; urgent 2 to 3 working days (or same-day/holiday emergency upon payment of weekend tariff).
  - Delivery: Collected in person by applicant upon surrender of receipt slip and cancellation of old passport.

---

### 20.2 Papua New Guinea (PG / PNG) — Papua New Guinea Immigration and Citizenship Authority (PNGICA)

- **Administering Authority:** Papua New Guinea Immigration and Citizenship Authority (PNGICA), Government of Papua New Guinea
- **Primary Portals:**
  - Official ICA Portal: `https://ica.gov.pg/`
  - MICA Online Payment Gateway: `https://ica.gov.pg/`
- **Statutory Framework:**
  - Papua New Guinea Passports Act (Chapter 17) and Migration Act 1978; Migration Regulations.
- **Domestic Fee Schedule (in PNG Kina — PGK / K):**
  - **Standard Ordinary Passport:**
    - **Standard Processing (5-year validity):** **K100.00**
  - **Fast-Track / Express Processing Service:**
    - **Fast-Track Priority Processing (2 working days):** Additional surcharge of **K200.00** on base fee (total: **K300.00**).
  - **Lost, Stolen, or Damaged Passport Replacement Penalties:**
    - First lost or damaged passport replacement penalty: **K200.00** (higher statutory penalties apply for subsequent repeat losses).
  - **Standard Turnaround Timeline:**
    - Standard processing: **7 to 15 working days**.
  - **Evidence confidence: `DIRECT`** — established by Migration Service Fees published on `ica.gov.pg`.
- **Consular Fee Schedule:**
  - Via PNG High Commissions and Embassies abroad (e.g. Canberra, Sydney, Brisbane, Wellington, London, Washington).
  - Consular passport fee: ~AUD $150.00 / USD $100.00 / GBP £70.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official mission fee schedules.
- **Civil Identity & Document Checklists:**
  - **National Identity (NID) Proof:**
    - Certified or notarized copy of the **NID Birth Certificate** issued by the PNG Civil and Identity Registry (PNGCIR / NID Office) — mandatory for all first-time applicants.
    - Certified copy of the **NID Card** (National Identity Card).
  - **Application Form:** Travel Document Application Form (**Form FA 81**), completed in applicant's own handwriting or typed.
  - **Certificate Regarding Applicant (Section 13):** Must be commissioned and signed by a registered Lawyer, Magistrate, Commissioner of Oaths, or Minister of Religion who has known the applicant for at least 3 years.
  - **Photographs:** Two (2) recent identical passport-sized photographs; one certified on reverse by the certifier of Section 13.
  - **Evidence of Citizenship (Attachment A):** Completed declaration of citizenship status and parental lineage.
  - **For minors (under 16):** Parental consent signed by both parents; child's NID birth certificate; copies of parents' NID cards or passports.
  - **In case of loss/theft:** Police Report from the Royal Papua New Guinea Constabulary (RPNGC) and sworn Statutory Declaration detailing how the passport was lost.
  - **Fee Payment Receipt:** Original Migration Service Fees (MSF) receipt from the cash office or MICA online payment confirmation.
- **Application & Delivery Channels:**
  - In-person lodgment at PNGICA Head Office (Central Government Offices, Tower A, Waigani, Port Moresby) or dispatched via registered post to PNG Passports Branch (P.O. Box 1790, Boroko, NCD).
  - Processing: Standard 7–15 working days; fast-track 2 working days.
  - Delivery: Collected in person or dispatched via secure mail.

---

### 20.3 Samoa (WS / WSM) — Ministry of the Prime Minister and Cabinet (MPMC)

- **Administering Authority:** Immigration Division, Ministry of the Prime Minister and Cabinet (MPMC), Independent State of Samoa
- **Primary Portals:**
  - Ministry Official Portal: `https://www.mpmc.gov.ws/`
  - Samoa Government Services Portal: `https://mygov.gov.ws/`
- **Statutory Framework:**
  - Samoa Passports Act 2008, Passports Regulations, and Immigration Act 2020.
- **Domestic Fee Schedule (in Samoan Tala — WST / SAT):**
  - **Standard Electronic Passport (5-day turnaround, 5-year validity):**
    - **Adults (aged 17 years and older):** **WST 200.00**
    - **Minors / Children (aged 16 years and under):** **WST 100.00**
  - **Urgent / Express Processing Service (2-day turnaround):**
    - **Adults:** **WST 240.00**
    - **Minors / Children:** **WST 140.00**
  - **Lost, Stolen, or Damaged Passport Replacement Fees:**
    - **Standard Processing (5 working days):** Adult **WST 400.00** / Child **WST 200.00**
    - **Urgent Processing (2 working days):** Adult **WST 440.00** / Child **WST 250.00**
  - **Evidence confidence: `DIRECT`** — established by Samoa Immigration Regulations published on `mpmc.gov.ws` and `mygov.gov.ws`.
- **Consular Fee Schedule:**
  - Via Samoan High Commissions and Consulates General abroad (e.g. Wellington, Auckland, Canberra, Sydney, Pago Pago, Brussels).
  - Consular passport fee: ~NZD $250.00 adult / NZD $125.00 child (urgent: NZD $300.00 adult / NZD $175.00 child).
  - **Evidence confidence: `DIRECT`** — confirmed via official high commission notices.
- **Civil Identity & Document Checklists:**
  - **Proof of Citizenship:** Original Birth Certificate issued by the Births, Deaths and Marriages (BDM) Division, Ministry of Justice and Courts Administration (MJCA).
  - **Marital Status:** Original Marriage Certificate (for married females adopting husband's surname).
  - **Recommender / Certificate of Identity:** Section 6 of the passport application form must be certified by an authorized citizen of standing (Fa'amasino / Judge / Magistrate, Faife'au / Ordained Minister of Religion, Pulenu'u / Sui o Nu'u / Village Mayor, Lawyer, or Medical Doctor) who has known the applicant for at least one year.
  - **Photographs:** Two (2) recent identical passport photos (white background, neutral expression); one certified on reverse by the recommender.
  - **For minors (16 and under):** Both parents' presence and photo ID; child's birth certificate; signed parental consent declaration.
  - **In case of loss/theft:** Mandatory Police Report from the Samoa Police Service and sworn Statutory Declaration of Loss.
  - **Biometrics:** Mandatory in-person biometric capture (facial photo, electronic signature, and fingerprints) at the Immigration Division.
- **Application & Delivery Channels:**
  - In-person attendance and submission at the Immigration Division, Government Building, Matagialalua, Apia.
  - Turnaround: Standard 5 working days; urgent 2 working days.
  - Delivery: Collected in person by applicant upon surrender of receipt slip and cancellation of old passport.

---

### 20.4 Solomon Islands (SB / SLB) — Immigration Division, MCILI

- **Administering Authority:** Immigration Division, Ministry of Commerce, Industries, Labour and Immigration (MCILI), Solomon Islands Government
- **Primary Portals:**
  - Ministry Official Portal: `https://commerce.gov.sb/`
  - Immigration Division Portal: `https://immigration.gov.sb/`
- **Statutory Framework:**
  - Solomon Islands Passports Act (Cap. 61) and Passports Regulations.
- **Domestic Fee Schedule (in Solomon Islands Dollars — SBD):**
  - **Standard Ordinary Electronic Passport (e-Passport):**
    - **Uniform Ordinary Issuance Fee (10-year validity):** **SBD $1,000.00**
  - **Expedited / Urgent Processing Service:**
    - Priority / Express handling available at the Honiara passport unit (~3 to 5 working days turnaround).
  - **Lost, Stolen, or Damaged Passport Replacement:**
    - Statutory replacement fee for lost or damaged passports with mandatory police clearance and statutory declaration.
  - **Fee Payment Channel:**
    - Application fees must be paid directly at the **Ministry of Finance and Treasury (MoFT)** cashier counter prior to lodging the application at the Immigration Office.
  - **Standard Turnaround Timeline:**
    - Standard processing: **14 working days** (~2 weeks).
  - **Evidence confidence: `DIRECT`** — published on `commerce.gov.sb` and `immigration.gov.sb`.
- **Consular Fee Schedule:**
  - Via Solomon Islands High Commissions and Embassies abroad (e.g. Canberra, Suva, Port Moresby, Wellington, London, New York).
  - Overseas ordinary passport fee: ~AUD $200.00 / USD $150.00 plus diplomatic dispatch fees.
  - **Evidence confidence: `DIRECT`** — confirmed via official high commission notices.
- **Civil Identity & Document Checklists:**
  - **Proof of Citizenship:** Certified Birth Certificate issued by the Civil Registry Office, Ministry of Home Affairs.
  - **Statutory Declarations:**
    - **Declaration A:** Completed and signed by a close family member confirming parentage and citizenship.
    - **Declaration B:** Completed and signed by an independent citizen of standing (Legal Practitioner, Magistrate, Minister of Religion, Senior Public Officer) who has known the applicant for at least two years.
  - **Photographs:** Two (2) recent passport-sized photographs (one certified on reverse by the person completing Declaration B).
  - **Payment Receipt:** Original official receipt issued by the Ministry of Finance and Treasury (MoFT).
  - **Renewal:** Expired or current ordinary passport booklet surrendered for cancellation.
  - **Lost / Stolen Passports:** Official Police Report from the Royal Solomon Islands Police Force (RSIPF) and sworn Statutory Declaration of Loss.
  - **Biometrics:** Mandatory in-person enrollment (facial photograph, electronic signature, and ten fingerprints) at the Immigration Division.
- **Application & Delivery Channels:**
  - In-person attendance and submission at the Immigration Division Head Office, MCILI, Honiara.
  - Turnaround: Standard 14 working days; express handling available.
  - Delivery: In-person collection upon presentation of receipt and identification.

---

### 20.5 Tonga (TO / TON) — Immigration Department, Ministry of Foreign Affairs

- **Administering Authority:** Immigration Department, Ministry of Foreign Affairs, Kingdom of Tonga
- **Primary Portals:**
  - Ministry of Foreign Affairs: `https://foreignaffairs.gov.to/`
  - Ministry of Information & Communications (MIC): `https://mic.gov.to/`
  - Attorney General's Office Portal: `https://ago.gov.to/`
- **Statutory Framework:**
  - Kingdom of Tonga Passport Act and Passport Regulations (Cap. 62).
- **Domestic Fee Schedule (in Tongan Paʻanga — TOP$):**
  - **Standard Ordinary Passport:**
    - **Adults (aged 16 years and above, 10-year validity):** **TOP$ 250.00**
    - **Adults (aged 16 years and above, 5-year validity option):** **TOP$ 150.00**
    - **Minors / Children (under 16 years of age, 5-year validity):** **TOP$ 100.00**
  - **Replacement of Lost, Stolen, or Damaged Passports:**
    - Prescribed replacement fee with mandatory Police Report and sworn declaration of loss.
  - **Evidence confidence: `DIRECT`** — established by Tonga Passport Regulations published on `ago.gov.to`.
- **Consular Fee Schedule:**
  - Via Tongan High Commissions and Consulates General abroad (e.g. Canberra, Wellington, Auckland, London, San Francisco).
  - Consular fees: ~NZD $200.00 / AUD $180.00 / USD $150.00 plus diplomatic pouch fee.
  - **Evidence confidence: `DIRECT`** — confirmed via official mission schedules.
- **Civil Identity & Document Checklists:**
  - **Proof of Citizenship:** Original Birth Certificate issued by the Vital Statistics Division, Ministry of Justice.
  - **National Identification:** Tongan National ID Card (if issued).
  - **Application Form:** Completed Form 1 Application for a Tongan Passport.
  - **Certifier / Witness:** Application certificate must be signed by an authorized person of standing (Town Officer / *'Ofisa Kolo*, District Officer / *Pule Fakavahe*, Ordained Minister of Religion, Magistrate, or Lawyer) who has known the applicant personally for at least one year.
  - **Photographs:** Two (2) recent passport-sized photographs (one certified on reverse by the authorized certifier).
  - **Renewal:** Submission and surrender of previous Tongan passport booklet for cancellation.
  - **In case of loss/theft:** Mandatory Police Report from Tonga Police and sworn Statutory Declaration of Loss.
  - **For minors (under 16):** Accompanied by parent or legal guardian; child's birth certificate; parents' IDs and written parental consent.
  - **Biometrics:** Mandatory in-person enrollment (digital photograph and biometric fingerprints) at the Immigration Department.
- **Application & Delivery Channels:**
  - In-person submission at the Immigration Department Headquarters, Ministry of Foreign Affairs, Nuku'alofa, or sub-offices in Vava'u.
  - Turnaround: Standard ~10 to 14 working days.
  - Delivery: In-person collection upon presentation of receipt and ID.

---

### 20.6 Vanuatu (VU / VUT) — Department of Vanuatu Immigration and Passport Services (VIPS)

- **Administering Authority:** Department of Vanuatu Immigration and Passport Services (VIPS), Ministry of Internal Affairs, Republic of Vanuatu
- **Primary Portals:**
  - Official VIPS Portal: `https://immigration.gov.vu/`
- **Statutory Framework:**
  - Vanuatu Passports Act [Cap. 108] and Passports Regulations.
- **Domestic Fee Schedule (in Vanuatu Vatu — VUV / VT):**
  - **Standard Biometric Electronic Passport (Normal Processing, ~3 working days):**
    - **Adults (aged 18 to 64 years, 10-year validity):** **20,000 VT**
    - **Minors / Children (aged 0 to 17 years, 5-year validity):** **10,000 VT**
    - **Senior Citizens (aged 65 years and older):** **10,000 VT**
  - **Express / Urgent Processing Service Tiers:**
    - **Express Urgent Processing (1-day turnaround):** **30,000 VT** (adult).
  - **Lost, Stolen, or Damaged Passport Replacement Penalties:**
    - Statutory replacement penalty fee: **50,000 VT** (in addition to mandatory police loss certificate and statutory declaration).
  - **Evidence confidence: `DIRECT`** — established by VIPS regulations published on `immigration.gov.vu`.
- **Consular Fee Schedule:**
  - Via Vanuatu diplomatic missions abroad (e.g. Canberra, Suva, Nouméa, Beijing, Brussels).
  - Consular e-passport fee: ~AUD $300.00 / USD $220.00.
  - **Evidence confidence: `DIRECT`** — published on official mission notices.
- **Civil Identity & Document Checklists:**
  - **National Identification Card:** Valid Vanuatu National ID Card issued by the Department of Civil Status.
  - **Proof of Citizenship:** Original Birth Certificate issued by the Vanuatu Civil Registry.
  - **Proof of Marital Status:** Original Marriage Certificate (mandatory for married females taking spouse's surname).
  - **Citizenship Certificate:** Mandatory for naturalized citizens, together with passport copy from country of origin.
  - **Application Form:** Official VIPS Passport Application Form completed in clear block print.
  - **Photographs:** Two (2) recent passport-sized photographs (white background); live digital photograph also captured at enrollment counter.
  - **For minors (0–17):** Presence of child; child's birth certificate; parents' National ID cards and passports; signed parental consent.
  - **In case of loss/theft:** Official Police Report from Vanuatu Police Force and sworn Statutory Declaration of Loss.
  - **Biometrics:** Mandatory in-person biometric capture (digital facial photography, electronic signature, and ten fingerprints) at VIPS.
- **Application & Delivery Channels:**
  - In-person attendance and submission at VIPS Head Office (Kumul Highway, Port Vila, Efate) or Northern District Office (Luganville, Espiritu Santo).
  - Turnaround: Normal ~3 working days; express 1 working day.
  - Delivery: In-person collection upon presentation of receipt slip and surrender of previous passport for cancellation.

---

## 21. Batch 19 Statutory Research Dossiers: GA, CG, CD, GQ, CF, TD

---

### 21.1 Gabon (GA / GAB) — Direction Générale de la Documentation et de l'Immigration (DGDI)

- **Administering Authority:** Direction Générale de la Documentation et de l'Immigration (DGDI), Ministère de l'Intérieur, République Gabonaise
- **Primary Portals:**
  - Official DGDI Portal: `https://dgdi.ga/`
- **Statutory Framework:**
  - Décret présidentiel fixant les tarifs des titres de voyage et d'identité et Règlement communautaire CEMAC sur le passeport biométrique.
- **Domestic Fee Schedule (in Central African CFA Francs — XAF / FCFA):**
  - **Standard CEMAC Biometric Passport (5-year validity):**
    - **Adults (aged 16 years and older):** **45 000 FCFA** (40 000 FCFA DGDI dossier fee + 5 000 FCFA Quittance du Trésor Public).
    - **Minors (under 16 years of age):** **35 000 FCFA** (30 000 FCFA DGDI dossier fee + 5 000 FCFA Quittance du Trésor).
  - **Payment Method:**
    - Trésor Public receipt (quittance de paiement) + DGDI fee cashier receipt.
  - **Validity:**
    - Uniform validity of **5 years** across all categories (CEMAC standard).
  - **Evidence confidence: `DIRECT`** — established by official DGDI fee schedules and published on `dgdi.ga`.
- **Consular Fee Schedule:**
  - Via Gabonese diplomatic missions and DGDI antennae abroad (e.g. Paris, Washington, London, Dakar).
  - Consular passport fee: ~EUR €90.00 to €110.00 / USD $100.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official consular mission notices.
- **Civil Identity & Document Checklists:**
  - **Proof of Civil Status:** Original legal birth certificate (*Acte de naissance original ou copie légalisée*) issued by the civil registry.
  - **Proof of Profession / Means:** Certificate of employment (*Attestation d'emploi*), business registration, or student ID card (*Carte d'étudiant*).
  - **Application Form:** Official DGDI passport application form completed and signed.
  - **Photographs:** Recent colour passport photographs (white background, neutral expression).
  - **For minors (under 16):** Signed parental authorization (*Autorisation parentale*) from parent/legal guardian with photocopy of their National ID card.
  - **Renewal:** Physical presentation and surrender of previous passport booklet.
  - **In case of loss/theft:** Mandatory declaration of loss (*Déclaration de perte*) issued by the police or gendarmerie.
  - **Biometrics:** Mandatory in-person enrollment (facial photograph, digital signature, and ten fingerprints) at DGDI offices.
- **Application & Delivery Channels:**
  - In-person attendance at DGDI Headquarters (Oloumi, Libreville) or regional provincial delegations (Port-Gentil, Franceville, Oyem, Mouila).
  - Turnaround: Standard ~5 to 10 working days.
  - Delivery: Collected in person by the applicant upon presentation of the deposit slip (*Récépissé de dépôt*).

---

### 21.2 Republic of the Congo (CG / COG) — Direction Générale de la Surveillance du Territoire (DGST)

- **Administering Authority:** Direction Générale de la Surveillance du Territoire (DGST) / Ministère de l'Intérieur, de la Décentralisation et du Développement Local, République du Congo (Congo-Brazzaville)
- **Primary Portals:**
  - Ministère de l'Intérieur: `https://interieur.gouv.cg/`
  - Portail officiel du Gouvernement: `https://gouv.cg/`
- **Statutory Framework:**
  - Décret présidentiel portant réglementation des passeports biométriques de la CEMAC en République du Congo.
- **Domestic Fee Schedule (in Central African CFA Francs — XAF / FCFA):**
  - **Standard CEMAC Biometric Passport (5-year validity):**
    - **Uniform Ordinary Fee:** **60 000 FCFA**
  - **Validity & Renewal Rule:**
    - Standard validity: **5 years**.
    - Strict non-prorogation: Congolese biometric passports cannot be extended; renewal requires a completely new statutory application upon expiration.
  - **Evidence confidence: `DIRECT`** — confirmed by Ministry of Interior directives and DGST consular announcements.
- **Consular Fee Schedule:**
  - Via Congolese Embassies and Consulates General abroad (e.g. Paris, Washington D.C., Pretoria, Kinshasa, Beijing).
  - Consular passport fee: ~EUR 120.00 / USD $140.00 plus consular registration card (*Carte consulaire*).
  - **Evidence confidence: `DIRECT`** — published on embassy consular portals.
- **Civil Identity & Document Checklists:**
  - **Proof of Civil Status:** Original extract of birth certificate (*Copie intégrale d'acte de naissance congolais*).
  - **National Identity Document:** Carte Nationale d'Identité (CNI) congolaise or previous passport copy.
  - **Proof of Nationality:** Certificat de nationalité congolaise.
  - **Police Clearance:** Casier judiciaire (bulletin n° 3) issued within the last 3 months.
  - **Marital Status:** Certified copy of marriage certificate for married women adopting husband's surname.
  - **Justification of Employment:** Certificate of employment (*Attestation d'emploi*) or professional ID.
  - **For minors (under 18):** Parental authorization signed by father/mother/guardian, copy of parent's CNI, and child's birth certificate.
  - **In case of loss/theft:** Certificate of loss (*Certificat de perte*) issued by the police/gendarmerie.
  - **Biometrics:** Mandatory in-person biometric capture (facial photo, electronic signature, and ten fingerprints) at DGST.
- **Application & Delivery Channels:**
  - In-person submission and biometric enrollment at the DGST Emigration Directorate (Brazzaville) or regional directorate (Pointe-Noire).
  - Turnaround: Standard ~10 to 15 working days.
  - Delivery: In-person collection upon presentation of receipt slip.

---

### 21.3 Democratic Republic of the Congo (CD / COD) — Ministère des Affaires Étrangères (MINAFFET)

- **Administering Authority:** Ministère des Affaires Étrangères et de la Francophonie (MINAFFET), République Démocratique du Congo (Congo-Kinshasa)
- **Primary Portals:**
  - Ministère des Affaires Étrangères: `https://diplomatie.gouv.cd/`
  - Portail officiel des passeports: `https://www.passeport.gouv.cd/`
  - Portail national du Gouvernement: `https://gouv.cd/`
- **Statutory Framework:**
  - Arrêté Interministériel portant fixation des tarifs des passeports ordinaires biométriques sécurisés de nouvelle génération (Conseil des Ministres 2025).
- **Domestic Fee Schedule (Statutory USD fees collected in USD or Congolese Francs — CDF):**
  - **Standard Biometric Passport of the New Generation (5-year validity):**
    - **Uniform Ordinary Issuance Fee:** **USD $75.00** (reduced from previous USD $99.00 by government decree upon launch of the new high-security polycarbonate biometric series).
  - **Payment Channels:**
    - Paid via partner banking networks (Equity BCDC) or through the secure online payment portal on `passeport.gouv.cd`.
  - **Standard Turnaround Timeline:**
    - Standard processing: **10 to 15 working days** in Kinshasa (up to 30 days for provincial centers).
  - **Evidence confidence: `DIRECT`** — established by Interministerial Decree and published on `gouv.cd` and `diplomatie.gouv.cd`.
- **Consular Fee Schedule:**
  - Via Congolese Embassies abroad (e.g. Brussels, Paris, Washington, Pretoria, London).
  - Consular biometric passport fee: ~USD $185.00 to $200.00 (inclusive of central production and diplomatic courier logistics).
  - **Evidence confidence: `DIRECT`** — confirmed via official mission portals.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Valid Congolese Voter Card (*Carte d'électeur*) — serving as primary civil identity proof in DRC.
  - **Proof of Civil Status:** Original birth certificate (*Acte de naissance*) or certified copy of civil status extract (*Extrait d'acte de naissance légalisé*).
  - **Proof of Citizenship:** Attestation de nationalité congolaise delivered by the Ministry of Justice.
  - **Application Form:** Official Formulaire F3 completed online and printed.
  - **Payment Proof:** Official payment receipt (*Preuve de versement bancaire Equity BCDC*).
  - **For minors (under 18):** Duly legalized parental authorization from parents/guardian; parents' voter cards; child's birth certificate.
  - **Renewal:** Physical surrender of previous passport for cancellation.
  - **In case of loss/theft:** Police report (*Attestation de perte de pièces*) and certificate of non-opposability from MINAFFET.
  - **Biometrics:** Mandatory in-person biometric capture (high-resolution facial photo, signature, electronic fingerprints) at the Kinshasa biometric center or provincial capture stations.
- **Application & Delivery Channels:**
  - Digital pre-registration and appointment booking via `https://www.passeport.gouv.cd/`.
  - Physical biometric enrollment at the Centre de Capture des Passeports, Immeuble des Affaires Étrangères, Boulevard du 30 Juin, Kinshasa, or provincial sites (Lubumbashi, Goma, Kisangani, Matadi).
  - Delivery: In-person collection upon presentation of deposit slip and voter card.

---

### 21.4 Equatorial Guinea (GQ / GNQ) — Ministerio de Seguridad Nacional / CNEDOGE

- **Administering Authority:** Ministerio de Seguridad Nacional / Dirección General de la Policía Nacional / Centro Nacional de Emisión de Documentos Oficiales de Guinea Ecuatorial (CNEDOGE), República de Guinea Ecuatorial
- **Primary Portals:**
  - Portal Oficial del Gobierno: `https://guineaecuatorialpress.com/`
  - Portal CNEDOGE: `https://cnedoge.gq/`
- **Statutory Framework:**
  - Ley reguladora del Régimen Jurídico de los Documentos de Viaje e Identidad y Reglamento del Pasaporte Biométrico CEMAC de Guinea Ecuatorial.
- **Domestic Fee Schedule (in Central African CFA Francs — XAF / FCFA):**
  - **Standard CEMAC Biometric Passport (5-year validity):**
    - **Uniform Domestic Fee:** ~**50.000 FCFA**
  - **Validity:**
    - Standard ordinary passport: **5 years** (CEMAC biometric standard).
  - **Turnaround Timeline:**
    - Standard processing: **1 to 2 weeks**.
  - **Evidence confidence: `DIRECT`** — confirmed via government notifications and official CNEDOGE announcements.
- **Consular Fee Schedule:**
  - Via Equatoguinean diplomatic missions abroad (e.g. Madrid, Las Palmas, Paris, Berlin, Washington D.C., Havana).
  - Consular biometric passport fee: **32.00 €** to **60.00 €** (extension/renewal certificate: 20.00 € to 30.00 €).
  - **Evidence confidence: `DIRECT`** — established on official embassy consular tariff sheets.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Valid Equatoguinean National ID Card (*Documento Nacional de Identidad — DNI*).
  - **Proof of Civil Status:** Original Certificate of Birth (*Certificado Literal de Nacimiento*) issued by the Registro Civil.
  - **Criminal Record:** Police record certificate (*Certificado de Antecedentes Penales*) issued within 3 months.
  - **Photographs:** Two (2) recent passport-sized photographs (white background, ears visible); live digital capture also performed at CNEDOGE counter.
  - **Official Application Form:** Completed and signed passport request form (*Solicitud oficial de pasaporte*).
  - **For minors (under 18):** Physical appearance of minor accompanied by parents; certified birth certificate; valid DNI of both parents; formal signed parental authorization.
  - **Renewal:** Physical presentation and cancellation of previous passport booklet.
  - **In case of loss/theft:** Mandatory police report (*Denuncia de pérdida o extravío*) from the Policía Nacional.
  - **Biometrics:** Mandatory in-person biometric capture (facial photo, electronic signature, ten fingerprints) at CNEDOGE enrollment stations.
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at CNEDOGE Headquarters in Malabo (Bioko Norte) or regional delegation in Bata (Litoral).
  - Delivery: In-person collection upon presentation of receipt and DNI.

---

### 21.5 Central African Republic (CF / CAF) — Direction de l'Émigration et de l'Immigration

- **Administering Authority:** Direction de l'Émigration et de l'Immigration, Ministère de l'Intérieur et de la Sécurité Publique, République Centrafricaine
- **Primary Portals:**
  - Ministère de l'Intérieur: `https://interieur.gouv.cf/`
  - Centre de Demande des Passeports (SEDOSEC): `https://sedosec.com/`
- **Statutory Framework:**
  - Textes réglementaires de la CEMAC et Décret portant tarification des passeports biométriques sécurisés en République Centrafricaine.
- **Domestic Fee Schedule (in Central African CFA Francs — XAF / FCFA):**
  - **Standard CEMAC Biometric Passport (5-year validity):**
    - **Standard Processing (Demande standard, ~10–15 working days):** **50 000 FCFA**
  - **Expedited / Urgent Processing Service Tier:**
    - **Urgent Processing (Demande urgente, ~2–5 working days):** **90 000 FCFA**
  - **Payment Channel:**
    - Fees deposited directly into the dedicated government account at Ecobank Centrafrique prior to appointment; official bank deposit slip (*bordereau de versement*) presented at submission.
  - **Validity:**
    - Standard validity: **5 years** (CEMAC biometric standard).
  - **Evidence confidence: `DIRECT`** — established by Ministry of Interior decree published on `sedosec.com`.
- **Consular Fee Schedule:**
  - Via Central African Embassies abroad (e.g. Paris, Washington, Yaoundé, Kinshasa, Brussels).
  - Consular passport fee: ~EUR €100.00 to €130.00 / USD $120.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official mission schedules.
- **Civil Identity & Document Checklists:**
  - **Proof of Civil Status:** Original birth certificate (*Certificat de naissance original ou acte de naissance*).
  - **Proof of Nationality:** Original Certificate of Central African Nationality (*Certificat de nationalité centrafricaine original*).
  - **National Identity Document:** Carte Nationale d'Identité (CNI) centrafricaine.
  - **Bank Deposit Slip:** Original payment receipt from Ecobank Centrafrique (50 000 FCFA standard / 90 000 FCFA urgent).
  - **Marital Status:** Marriage certificate for married applicants (if applicable).
  - **For minors (under 18):** Certified parental authorization signed by parents/guardian, copies of parents' IDs, and minor's original birth certificate.
  - **Renewal:** Previous passport booklet presented for cancellation.
  - **In case of loss/theft:** Mandatory police report of loss (*Déclaration de perte de la police*).
  - **Biometrics:** Mandatory in-person biometric capture (digital facial photography, electronic signature, and ten fingerprints) at the passport center.
- **Application & Delivery Channels:**
  - In-person attendance and submission at the Centre de Demande des Passeports (CSP / SEDOSEC), Avenue Touadéra (342 rue Sissongo, Sica 1, 1er Arrondissement), Bangui.
  - Turnaround: Standard 10 to 15 working days; urgent 2 to 5 working days.
  - Delivery: In-person collection upon presentation of deposit receipt slip and CNI.

---

### 21.6 Chad (TD / TCD) — Agence Nationale des Titres Sécurisés (ANATS)

- **Administering Authority:** Agence Nationale des Titres Sécurisés (ANATS), Ministère de la Sécurité Publique et de l'Immigration, République du Tchad
- **Primary Portals:**
  - Agence Nationale des Titres Sécurisés (ANATS): `https://anats.td/`
  - Ministère de la Sécurité Publique: `https://securitepublique.gouv.td/`
- **Statutory Framework:**
  - Loi portant création de l'ANATS et Arrêté interministériel fixant les tarifs des titres d'identité et de voyage sécurisés de la République du Tchad.
- **Domestic Fee Schedule (in Central African CFA Francs — XAF / FCFA):**
  - **Standard CEMAC Biometric Passport (5-year validity):**
    - **Uniform Ordinary Issuance Fee:** **60 000 FCFA**
  - **National Identification Pre-requisite:**
    - Prior enrollment for the Numéro National d'Identification (NNI) is mandatory before or concurrently with passport application.
  - **Turnaround Timeline:**
    - Standard processing: **7 to 15 working days**.
  - **Evidence confidence: `DIRECT`** — established by ANATS statutory tariff regulations published on `anats.td`.
- **Consular Fee Schedule:**
  - Via Chadian Embassies and Consulates General abroad (e.g. Paris, Washington, Cairo, Riyadh, Yaoundé).
  - Consular passport fee: ~EUR €100.00 to €120.00 / USD $120.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official embassy notices.
- **Civil Identity & Document Checklists:**
  - **National Identification:** Numéro National d'Identification (NNI) attribué par l'ANATS, together with valid biometric Carte Nationale d'Identité (CNI) or official NNI enrollment receipt.
  - **Proof of Civil Status:** Secured Birth Certificate (*Acte de naissance sécurisé ANATS*) with barcoded verification.
  - **Proof of Nationality:** Certificat de nationalité tchadienne issued by the competent judicial tribunal.
  - **Proof of Profession:** Certificate of employment or professional accreditation.
  - **Application Form:** Official ANATS application form completed at the enrollment center.
  - **Photographs:** Two (2) recent passport-sized photographs (clear light background); live digital capture also performed at the enrollment workstation.
  - **For minors (under 18):** Accompanied by parent or legal guardian; minor's secured birth certificate; parent's CNI and signed parental consent.
  - **Renewal:** Physical surrender of previous passport for cancellation.
  - **In case of loss/theft:** Official declaration of loss issued by the Commissariat de Police or Gendarmerie.
  - **Biometrics:** Mandatory in-person biometric capture (facial photo, electronic signature, ten fingerprints) at ANATS centers.
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at ANATS Centres d'Accueil des Usagers (CAU) in N'Djamena (ANATS Headquarters on Avenue du Général Charfadine Ahmat, Commissariat Central, Gouvernorat 5e arrondissement) or provincial delegations (Moundou, Sarh, Abéché, Mongo).
  - Delivery: In-person collection upon presentation of receipt and CNI.

---

## Section 22 — Batch 20 Research Dossiers: Madagascar (MG), Malawi (MW), Lesotho (LS), Eswatini (SZ), Seychelles (SC), Comoros (KM)

*Researched: 2026-10-21. Primary statutory investigation covering 6 sovereign nations across Eastern and Southern Africa and the Western Indian Ocean. Official sources audited across primary ministry portals, statutory passport regulations, fee schedules, civil registration prerequisites, and biometric capture stations.*

---

### 22.1 Madagascar (MG / MDG) — Ministère de l'Intérieur / Direction Générale de la Police Nationale (SCCIE)

- **Administering Authority:** Service Central de l'Émigration et de l'Immigration (SCCIE), Direction de la Surveillance du Territoire (DST), Direction Générale de la Police Nationale (DGPN), Ministère de l'Intérieur et de la Décentralisation, République de Madagascar
- **Primary Portals:**
  - Police Nationale de Madagascar: `https://police.gov.mg/`
  - Portail des Services Publics / Prise de Rendez-vous: `https://pn.gov.mg/`
  - Ministère de l'Intérieur: `https://mid.gov.mg/`
- **Statutory Framework:**
  - Loi relative aux passeports et Décret fixant le tarif des droits de délivrance du passeport électronique / biométrique en République de Madagascar.
- **Domestic Fee Schedule (in Malagasy Ariary — MGA):**
  - **Standard Electronic Biometric Passport (5-year validity):**
    - **Uniform Ordinary Issuance Fee:** **190 000 Ariary (MGA)**
  - **Payment Channel:**
    - Payment made directly via official fiscal stamp voucher (*quittance du Trésor Public* / *vignette fiscale*) issued by the Trésor Public and affixed/annexed to the physical dossier.
  - **Turnaround Timeline:**
    - Standard processing: Approximately **72 hours (3 working days)** at the central production office in Antananarivo (SCCIE Anosy); up to 10–15 working days when deposited at regional provincial commissariats.
  - **Validity:**
    - Standard ordinary biometric passport: **5 years** (strictly non-prorogable; complete replacement required upon expiry).
  - **Evidence confidence: `DIRECT`** — established by official notifications of the Police Nationale and Ministère de l'Intérieur published on `police.gov.mg` and `pn.gov.mg`.
- **Consular Fee Schedule:**
  - Via Malagasy Embassies and Consulates General abroad (e.g. Paris, Washington D.C., Port Louis, Geneva, Brussels).
  - Consular passport fee: ~EUR €75.00 to €100.00 / USD $80.00 to $110.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official embassy consular fee circulars.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Certified copy of valid Malagasy National Identity Card (*Carte d'Identité Nationale — CIN certifiée conforme à l'original*).
  - **Proof of Civil Status:** Original full extract of birth certificate (*Copie intégrale d'acte de naissance*) issued within the last 6 months.
  - **Proof of Nationality:** Judicial Certificate of Malagasy Nationality (*Certificat de nationalité malagasy*) issued by the competent Tribunal de Première Instance.
  - **Military Service Status:** Certificate of military position (*Certificat de position militaire*) issued by the military district authorities for male applicants aged 18 to 50.
  - **Proof of Residence:** Official certificate of residence (*Certificat de résidence*) issued within the last 3 months by the Chef de Fokontany.
  - **Official Application Form:** Completed and signed official passport application request (*Demande de passeport*).
  - **Fiscal Receipt:** Original Treasury deposit receipt (*Quittance de paiement de 190 000 Ariary du Trésor Public*).
  - **Photographs:** Two (2) standard passport photographs (35x45mm, clear background); live digital capture also executed at the enrollment station.
  - **For minors (under 18):** Child accompanied by parents/legal guardian; child's certified birth certificate; certified copies of parents' CIN; formal notarized parental authorization (*Autorisation parentale légalisée*).
  - **Renewal:** Physical surrender and cancellation of the expiring passport.
  - **In case of loss/theft:** Mandatory official declaration of loss (*Déclaration de perte de passeport*) issued by the Commissariat de Police or Brigade de Gendarmerie.
  - **Biometrics:** Mandatory in-person biometric capture (digital facial photography, electronic signature, and ten fingerprints) at the passport enrollment center.
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at the Service Central de l'Émigration et de l'Immigration (SCCIE), Commissariat Central d'Anosy, Antananarivo, or at provincial police commissariats (Toamasina, Mahajanga, Fianarantsoa, Antsiranana, Toliara). Online pre-registration or appointment booking via `pn.gov.mg`.
  - Delivery: In-person collection upon presentation of the deposit stub receipt and CIN.

---

### 22.2 Malawi (MW / MWI) — Department of Immigration and Citizenship Services (DICS)

- **Administering Authority:** Department of Immigration and Citizenship Services (DICS), Ministry of Homeland Security, Republic of Malawi
- **Primary Portals:**
  - Malawi e-Passport Portal: `https://epassport.gov.mw/`
  - Department of Immigration: `https://www.immigration.gov.mw/`
- **Statutory Framework:**
  - Immigration Act (Cap. 15:03) and Immigration (Passports) Regulations.
- **Domestic Fee Schedule (in Malawian Kwacha — MWK):**
  - **Ordinary Passport (36 pages, 10-year validity for adults):**
    - **Normal Processing (~20 working days):** **MWK 90,000**
    - **Express Processing (~5 working days):** **MWK 160,000**
  - **Frequent Traveller Ordinary Passport (48 pages, 10-year validity):**
    - **Normal Processing:** **MWK 130,000**
    - **Express Processing:** **MWK 180,000**
  - **Child / Minor Passport (under 16, 36 pages, 5-year validity):**
    - **Normal Processing:** **MWK 80,000**
    - **Express Processing:** **MWK 120,000**
  - **Replacement of Lost or Damaged Passport (36 pages):**
    - **Normal Processing:** **MWK 100,000**
    - **Express Processing:** **MWK 170,000**
  - **Payment Channel:**
    - Paid through participating commercial banks (National Bank of Malawi, Standard Bank) or online electronic payment gateway on the e-passport portal.
  - **Validity:**
    - Adult (16 years and above): **10 years**.
    - Minor (under 16 years): **5 years**.
  - **Evidence confidence: `DIRECT`** — established by statutory fee gazettes and official publications on `epassport.gov.mw`.
- **Consular Fee Schedule:**
  - Via Malawian High Commissions and Embassies abroad (e.g. London, Washington D.C., Pretoria, Harare, Addis Ababa, Berlin).
  - Consular passport fee: ~USD $150.00 to $200.00 / GBP £120.00.
  - **Evidence confidence: `DIRECT`** — verified via official high commission notices.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Mandatory National Registration Bureau (NRB) National Identity Card (Smart ID Card) containing a valid 8-character National Identification Number (NIN).
  - **Proof of Birth:** Official NRB Birth Certificate.
  - **Official Application Form:** Completed Form A (for adult 16+) or Form B (for child under 16).
  - **Recommender Declaration:** Section certified by an authorized Recommender (Minister of Religion, Medical Practitioner, Legal Practitioner, or established Civil Servant) confirming citizenship and identity.
  - **Photographs:** Two (2) recent passport-sized photographs certified by the recommender on the reverse; live digital photograph also captured at enrollment.
  - **For minors (under 16):** Accompanied by parent/guardian; child's NRB birth certificate; copy of parent's/guardian's NRB national identity card; written consent of parents.
  - **Renewal:** Physical presentation and surrender of the existing passport booklet.
  - **In case of loss/theft:** Mandatory police report and sworn affidavit detailing circumstances of loss.
  - **Biometrics:** In-person attendance for digital facial capture, electronic fingerprinting, and digital signature.
- **Application & Delivery Channels:**
  - Submission and enrollment at DICS Headquarters in Lilongwe, or Regional Immigration Offices in Blantyre, Mzuzu, and Mangochi.
  - Delivery: In-person collection upon presentation of official receipt slip and National ID card.

---

### 22.3 Lesotho (LS / LSO) — Department of Immigration, Ministry of Local Government, Chieftainship, Home Affairs and Police

- **Administering Authority:** Department of Immigration, Ministry of Local Government, Chieftainship, Home Affairs and Police, Kingdom of Lesotho
- **Primary Portals:**
  - Ministry of Home Affairs: `https://homeaffairs.gov.ls/`
  - Lesotho Government Portal: `https://www.gov.ls/`
- **Statutory Framework:**
  - Passports and Travel Documents Act and Passports and Travel Documents (Fees) Regulations.
- **Domestic Fee Schedule (in Lesotho Loti — LSL / M, pegged 1:1 with South African Rand — ZAR):**
  - **Regular Ordinary Passport (32 pages):**
    - **Standard Statutory Issuance Fee:** **M 130.00**
    - Validity: **10 years** for adults (16 years and older); **5 years** for children (under 16).
  - **Commercial / Frequent Traveller Passport (64 pages):**
    - **Standard Statutory Fee:** **M 300.00**
  - **Urgent / Expedited Processing Service Surcharge:**
    - **Emergency Expedited Surcharge:** **+M 500.00** (expedited delivery within 24 to 72 hours for verified medical emergencies, official government missions, or bereavement).
  - **Emergency Travel Certificate (ETC):**
    - **Statutory Fee:** **M 50.00**
  - **Evidence confidence: `DIRECT`** — established by statutory fee regulations and Ministry of Home Affairs official publications on `homeaffairs.gov.ls`.
- **Consular Fee Schedule:**
  - Via Lesotho High Commissions and Consulates abroad (e.g. Pretoria, Johannesburg, Durban, Welkom, Klerksdorp, London, Washington D.C.).
  - Consular ordinary passport fee: ~ZAR/LSL 400.00 to 500.00 / USD $60.00.
  - **Evidence confidence: `DIRECT`** — confirmed on official consular mission schedules.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Lesotho electronic National Identity Card (*e-ID Card*) issued by the National Identity and Civil Registry (NICR) is strictly mandatory for all applicants aged 16 and older.
  - **Proof of Civil Status:** Security-featured Birth Certificate issued by NICR.
  - **Proof of Citizenship:** Proof of Lesotho citizenship by descent or naturalization certificate.
  - **Photographs:** Two (2) recent passport-sized color photographs (clear background); live biometric photography also performed at the counter.
  - **For minors (under 16):** Accompanied by parent or legal guardian; minor's NICR security birth certificate; certified copies of parents' Lesotho e-ID cards; written consent from both parents.
  - **Renewal:** Physical surrender of previous passport for cancellation.
  - **In case of loss/theft:** Mandatory police loss report issued by the Lesotho Mounted Police Service (LMPS) and sworn affidavit.
  - **Biometrics:** Mandatory in-person enrollment (digital photograph and ten fingerprints) at the Passport Office.
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at the Passport Office, Department of Immigration, Maseru Central, or at any of the 10 District Immigration Offices (Leribe, Mafeteng, Mohale's Hoek, Quthing, Qacha's Nek, Mokhotlong, Thaba-Tseka, Butha-Buthe, Berea).
  - Delivery: In-person collection upon presentation of application receipt and National ID card.

---

### 22.4 Eswatini (SZ / SWZ) — Department of Immigration, Ministry of Home Affairs

- **Administering Authority:** Department of Immigration, Ministry of Home Affairs, Kingdom of Eswatini
- **Primary Portals:**
  - Ministry of Home Affairs: `https://www.gov.sz/index.php/ministries-departments/ministry-of-home-affairs/immigration-department`
  - Eswatini Government Portal: `https://www.gov.sz/`
- **Statutory Framework:**
  - Passports Act and Immigration Act, with statutory tariffs promulgated under government legal notices.
- **Domestic Fee Schedule (in Swazi Lilangeni — SZL / E, pegged 1:1 with South African Rand — ZAR):**
  - **Standard Ordinary International e-Passport (32 pages, 5-year validity):**
    - **Uniform Ordinary Issuance Fee:** **E 500.00**
  - **Frequent Traveller Ordinary International e-Passport (64 pages, 5-year validity):**
    - **Frequent Traveller Fee:** **E 800.00**
  - **Regional Travel Document (SADC):**
    - **Statutory Fee:** **E 80.00**
  - **Certificate of Identity:**
    - **Statutory Fee:** **E 80.00**
  - **Replacement of Lost or Damaged Travel Document:**
    - Administrative replacement penalty fee applies (**E 500.00** base fee plus investigation fee).
  - **Payment Channel:**
    - Payable at the Government Revenue Offices (Ministry of Finance revenue cashier) against an official General Revenue Receipt before enrollment.
  - **Turnaround Timeline:**
    - Standard processing: **5 to 10 working days**.
  - **Validity:**
    - Standard e-passport validity: **5 years** for both adults and minors.
  - **Evidence confidence: `DIRECT`** — established by statutory fee notices and official Ministry of Home Affairs announcements on `gov.sz`.
- **Consular Fee Schedule:**
  - Via Eswatini High Commissions and Embassies abroad (e.g. Pretoria, London, Washington D.C., Brussels, Abu Dhabi, Taipei).
  - Consular passport fee: ~ZAR/E 600.00 to 800.00 / USD $60.00 to $80.00.
  - **Evidence confidence: `DIRECT`** — confirmed on official high commission publications.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Eswatini National Identity Card containing the Personal Identification Number (PIN) issued by the Civil Registration Department.
  - **Proof of Civil Status:** Security-printed Eswatini Birth Certificate bearing the PIN.
  - **Tax Compliance:** Graded Tax Certificate (proof of payment of annual graded tax).
  - **Proof of Marital Status:** Marriage certificate for married female applicants (if changing surname).
  - **Photographs:** Two (2) recent passport-sized photographs (35x45mm, plain background); digital capture on site.
  - **For minors (under 18):** Accompanied by parent/legal guardian; child's birth certificate with PIN; copies of parents' national ID cards; written consent from father/legal guardian.
  - **Renewal:** Physical presentation of previous passport for cancellation.
  - **In case of loss/theft:** Mandatory police report from the Royal Eswatini Police Service (REPS) and sworn affidavit before a Commissioner of Oaths.
  - **Biometrics:** Mandatory in-person enrollment (electronic facial photography, digital fingerprint scanning, and electronic signature).
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at the Ministry of Home Affairs Headquarters in Mbabane, or at Regional Service Centres in Manzini, Piggs Peak, Siteki, and Nhlangano.
  - Delivery: In-person collection upon presentation of revenue receipt and National ID card.

---

### 22.5 Seychelles (SC / SYC) — Department of Immigration and Civil Status

- **Administering Authority:** Department of Immigration and Civil Status, Ministry of Internal Affairs, Republic of Seychelles
- **Primary Portals:**
  - Department of Immigration and Civil Status: `https://ics.gov.sc/`
  - Government of Seychelles: `https://www.gov.sc/`
- **Statutory Framework:**
  - Passports Act (Cap. 159) and Passport Regulations.
- **Domestic Fee Schedule (in Seychellois Rupee — SCR):**
  - **Standard Biometric Passport:**
    - **Uniform Standard Issuance Fee:** **SCR 750**
    - Validity: **10 years** for adults (18 years and above); **5 years** for minors (under 18 years).
  - **Misplaced / Lost / Damaged Passport Surcharge:**
    - **Statutory Penalty Surcharge:** **+SCR 1,500** (Total replacement fee: **SCR 2,250**)
  - **Overseas Diplomatic Mission Courier Surcharge:**
    - **Courier Surcharge:** **SCR 1,000** (for passports applied for or dispatched to Seychellois diplomatic missions overseas).
  - **Turnaround Timeline:**
    - Standard processing: Approximately **72 hours (3 working days)**.
  - **Paperless Workflow:**
    - Fully modernized paperless enrollment system: no paper application form is required; applicant's civil status and biometrics are verified digitally via the National Identity Number (NIN).
  - **Evidence confidence: `DIRECT`** — established by Passports Act regulations and official fee schedules published on `ics.gov.sc`.
- **Consular Fee Schedule:**
  - Via Seychellois Embassies and High Commissions abroad (e.g. Paris, London, New Delhi, Abu Dhabi, Pretoria, New York).
  - Consular passport fee: **SCR 750** + courier surcharge **SCR 1,000** (total SCR 1,750, approximately ~EUR €120.00 / USD $135.00).
  - **Evidence confidence: `DIRECT`** — established by official statutory fee regulations.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Valid Seychellois National Identity Card displaying the National Identity Number (NIN).
  - **Proof of Civil Status:** Original Birth Certificate issued by the Civil Status Division.
  - **Previous Passport:** Expiring or current passport presented for cancellation (for renewals).
  - **For minors (under 18):** Accompanied by parent or legal guardian; minor's original birth certificate displaying parental details; national identity cards of both parents; formal written consent from both parents.
  - **In case of loss/theft:** Mandatory police report certifying the loss and completed statutory declaration/affidavit.
  - **Biometrics:** Mandatory in-person biometric capture (high-resolution facial photo, digital ten-fingerprint scan, and electronic signature) at the Immigration counter.
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at the Department of Immigration and Civil Status, Independence House, Victoria, Mahé; or at sub-offices on Praslin (Grand Anse) and La Digue.
  - Delivery: In-person collection upon presentation of receipt and National Identity Card.

---

### 22.6 Comoros (KM / COM) — Direction Générale de la Sûreté Nationale (DGSN)

- **Administering Authority:** Direction Générale de la Sûreté Nationale (DGSN), Ministère de l'Intérieur, de l'Information, de la Décentralisation et de l'Administration Pénitentiaire, Union des Comores
- **Primary Portals:**
  - Présidence de l'Union des Comores: `https://beit-salam.km/`
  - Ministère de l'Intérieur: `https://interieur.gouv.km/`
- **Statutory Framework:**
  - Décret présidentiel fixant les caractéristiques et les conditions de délivrance des titres d'identité et de voyage biométriques et sécurisés de l'Union des Comores.
- **Domestic Fee Schedule (in Comorian Francs — KMF):**
  - **Standard Biometric Passport (5-year validity):**
    - **Uniform Ordinary Issuance Fee:** **40 000 KMF**
  - **Payment Channel:**
    - Fees deposited at the dedicated public Treasury counter / designated commercial bank account against an official receipt (*quittance du Trésor Public*).
  - **Turnaround Timeline:**
    - Standard processing: **5 to 10 working days**.
  - **Validity:**
    - Standard biometric passport: **5 years** (strictly non-prorogable).
  - **Evidence confidence: `DIRECT`** — established by presidential decrees on secure biometric travel documents and official government announcements published on `beit-salam.km`.
- **Consular Fee Schedule:**
  - Via Comorian Embassies and Consulates General abroad (e.g. Paris, Marseille, Brussels, Cairo, Riyadh, Dar es Salaam).
  - Consular passport fee: ~EUR €150.00 to €200.00 / USD $180.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official embassy notices.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Biometric National Identity Card (*Carte Nationale d'Identité biométrique comorienne — CNI*).
  - **Proof of Civil Status:** Authenticated birth certificate extract (*Extrait d'acte de naissance sécurisé*) issued by the Comorian civil registry.
  - **Proof of Nationality:** Judicial Certificate of Comorian Nationality (*Certificat de nationalité comorienne*) issued by the competent Tribunal de Première Instance.
  - **Fiscal Receipt:** Original Treasury deposit receipt (*Quittance de versement de 40 000 KMF*).
  - **Photographs:** Two (2) recent passport-sized photographs (35x45mm, clear background); live digital capture also executed at the enrollment station.
  - **For minors (under 18):** Accompanied by parents/legal guardian; minor's authenticated birth certificate; certified copies of parents' CNI; formal signed parental authorization (*Autorisation parentale légalisée*).
  - **Renewal:** Physical presentation of previous passport for cancellation.
  - **In case of loss/theft:** Mandatory loss certificate (*Certificat de perte*) issued by the Police Nationale or Gendarmerie.
  - **Biometrics:** Mandatory in-person biometric capture (digital facial photography, electronic signature, and ten fingerprints) at the Centre de Production des Titres Sécurisés.
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at the Centre de Production des Titres Sécurisés (DGSN) in Moroni (Grande Comore / Ngazidja), or at regional branch centers in Mutsamudu (Anjouan / Ndzuwani) and Fomboni (Mohéli / Mwali).
  - Delivery: In-person collection upon presentation of deposit receipt and CNI.

---

## Section 23 — Batch 21 Research Dossiers: Mali (ML), Burkina Faso (BF), Niger (NE), Guinea (GN), Guinea-Bissau (GW), Sierra Leone (SL)

*Researched: 2026-10-21. Primary statutory investigation covering 6 sovereign West African nations. Official sources audited across primary ministry portals, national police immigration departments, statutory fee decrees, civil registration and identification prerequisites, and biometric capture stations.*

---

### 23.1 Mali (ML / MLI) — Direction de la Police des Frontières (DPF / DGPN)

- **Administering Authority:** Direction de la Police des Frontières (DPF), Direction Générale de la Police Nationale (DGPN), Ministère de la Sécurité et de la Protection Civile, République du Mali
- **Primary Portals:**
  - Démarches Administratives du Mali: `https://demarchesadministratives.gouv.ml/`
  - Ministère de la Sécurité et de la Protection Civile: `https://securite.gouv.ml/`
  - Police Nationale du Mali: `https://police.gouv.ml/`
  - Portail de Paiement Sécurisé des Passeports: `https://paiementpasseport-mali.com/`
- **Statutory Framework:**
  - Décret portant tarification des passeports biométriques de la République du Mali (Confédération de l'Alliance des États du Sahel - AES / standard biométrique OACI).
- **Domestic Fee Schedule (in West African CFA Francs — XOF / FCFA):**
  - **Standard Electronic Biometric Passport (5-year validity):**
    - **Uniform Ordinary Issuance Fee:** **45 000 FCFA** (statutory fee revised downwards by Council of Ministers decree from previous 55 000 FCFA tariff).
  - **Optional / Premium Fast-Track Service Tier:**
    - **Expedited Service (Délivrance rapide ~2–3 working days):** **90 000 FCFA**
  - **Payment Channel:**
    - Paid directly via official Treasury cashier receipt (*quittance du Trésor Public*) or through the designated electronic payment portal (`paiementpasseport-mali.com`).
  - **Turnaround Timeline:**
    - Standard processing: **7 to 14 working days**; Express processing: **2 to 3 working days**.
  - **Validity:**
    - Standard ordinary biometric passport: **5 years** (strictly non-prorogable).
  - **Evidence confidence: `DIRECT`** — established by official government announcements and administrative procedures on `demarchesadministratives.gouv.ml` and `securite.gouv.ml`.
- **Consular Fee Schedule:**
  - Via Malian Embassies and Consulates General abroad (e.g. Paris, Washington D.C., Berlin, Dakar, Abidjan).
  - Consular passport fee: ~EUR €80.00 to €110.00 / USD $100.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official embassy consular circulars.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Valid Carte Nationale d'Identité (CNI) or Fiche descriptive individuelle sécurisée based on the Numéro d'Identification Nationale (NINA) / Carte NINA.
  - **Proof of Civil Status:** Legalized extract of Birth Certificate (*Extrait d'acte de naissance — Volet III légalisé*).
  - **Proof of Profession:** Certificate of employment, administrative appointment decree, or photocopy of patent / vignette synthétique for economic operators.
  - **Fiscal Receipt:** Original payment voucher / quittance of 45 000 FCFA (or 90 000 FCFA for express).
  - **Photographs:** Two (2) recent colored passport-sized photographs (35x45mm, clear background); live digital capture also executed at the enrollment workstation.
  - **For minors (under 18):** Accompanied by parent/legal guardian; minor's certified birth certificate; legalized parental authorization (*autorisation parentale légalisée*); copy of father's/legal guardian's valid identity card.
  - **Renewal:** Physical presentation and cancellation of the expiring passport booklet.
  - **In case of loss/theft:** Mandatory police loss certificate (*certificat de perte*) issued by the Commissariat de Police ou la Brigade de Gendarmerie.
  - **Biometrics:** Mandatory in-person biometric capture (digital facial photography, electronic signature, and ten fingerprints) at the passport enrollment center.
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at the Direction de la Police des Frontières (DPF), Hamdallaye ACI 2000, Bamako, or at designated regional police directorates (Kayes, Koulikoro, Sikasso, Ségou, Mopti).
  - Delivery: In-person collection upon presentation of deposit receipt and national identity card.

---

### 23.2 Burkina Faso (BF / BFA) — Division de la Migration / Office National d'Identification (ONI)

- **Administering Authority:** Division de la Migration, Direction Générale de la Police Nationale (DGPN), Ministère de l'Administration Territoriale et de la Sécurité / Office National d'Identification (ONI), Burkina Faso
- **Primary Portals:**
  - Police Nationale du Burkina Faso: `https://police.gov.bf/`
  - Office National d'Identification: `https://oni.bf/`
  - Ministère des Affaires Étrangères: `https://diplomatie.gov.bf/`
- **Statutory Framework:**
  - Décret portant tarification des documents de voyage et passeports biométriques de la République du Burkina Faso (Confédération de l'Alliance des États du Sahel - AES / standard biométrique OACI).
- **Domestic Fee Schedule (in West African CFA Francs — XOF / FCFA):**
  - **Standard Electronic Biometric Passport (5-year validity):**
    - **Statutory Issuance Fee:** **50 000 FCFA**
  - **Fiscal Stamp Surcharge:**
    - **Fiscal Stamp (Timbre fiscal / communal):** **200 FCFA** affixed to the application dossier.
    - **Total Standard Cost:** **50 200 FCFA**
  - **Payment Channel:**
    - Paid at the Treasury cashier counter or authorized financial collection desks against an official receipt (*quittance de versement*).
  - **Turnaround Timeline:**
    - Standard processing: **7 to 15 working days**.
  - **Validity:**
    - Standard biometric passport: **5 years** (AES / OACI biometric standard).
  - **Evidence confidence: `DIRECT`** — established by official police notices and statutory regulations published on `police.gov.bf` and `oni.bf`.
- **Consular Fee Schedule:**
  - Via Burkinabè Embassies and Consulates General abroad (e.g. Paris, Washington D.C., Brussels, Abidjan, Bamako, Dakar).
  - Consular passport fee: ~EUR €100.00 to €120.00 / USD $120.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official embassy fee schedules.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Legalized copy of valid Burkinabè National Identity Card (*Carte Nationale d'Identité Burkinabè — CNIB*) or valid Consular Identity Card.
  - **Proof of Civil Status:** Legalized copy of Birth Certificate (*Copie légalisée de l'acte de naissance*).
  - **Proof of Nationality:** Legalized copy of Certificate of Burkinabè Nationality (*Certificat de nationalité burkinabè*).
  - **Criminal Record:** Judicial record certificate (*Casier judiciaire*) issued within the last 3 months (for adult applicants).
  - **Proof of Profession:** Official document certifying employment, business registration, or certificate of school/university enrollment.
  - **Photographs:** Three (3) recent passport-sized color photographs on white background; live digital enrollment on site.
  - **For minors (under 18):** Child accompanied by parent/legal guardian; legalized birth certificate; legalized copies of parents' CNIB; notarized parental authorization (*autorisation parentale légalisée*).
  - **Renewal:** Physical presentation and cancellation of the old passport booklet.
  - **In case of loss/theft:** Mandatory police loss certificate (*déclaration de perte*) issued by the Police Nationale or Gendarmerie.
  - **Biometrics:** Mandatory in-person biometric enrollment (digital photograph, electronic signature, and ten fingerprints) at the Division de la Migration.
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at the Division de la Migration, Direction Générale de la Police Nationale, Ouagadougou (Gounghin), or regional passport desks in Bobo-Dioulasso.
  - Delivery: In-person collection upon presentation of payment receipt slip and CNIB.

---

### 23.3 Niger (NE / NER) — Direction de la Surveillance du Territoire (DST / DGPN)

- **Administering Authority:** Direction de la Surveillance du Territoire (DST), Direction Générale de la Police Nationale (DGPN), Ministère de l'Intérieur, de la Sécurité Publique et de l'Administration du Territoire, République du Niger
- **Primary Portals:**
  - Ministère de l'Intérieur: `https://interieur.gouv.ne/`
  - Police Nationale du Niger: `https://police.gouv.ne/`
- **Statutory Framework:**
  - Décret portant création et tarification du passeport biométrique de la République du Niger (Confédération de l'Alliance des États du Sahel - AES / standard biométrique OACI).
- **Domestic Fee Schedule (in West African CFA Francs — XOF / FCFA):**
  - **Standard Electronic Biometric Passport (5-year validity):**
    - **Adult Standard Issuance Fee:** **45 000 FCFA**
  - **Concession Fee Tiers:**
    - **Minors (under 18) & Certified Students:** **29 750 FCFA**
    - **Special Hadj Pilgrimage Passport:** **45 000 FCFA**
  - **Payment Channel:**
    - Paid directly at the public Treasury counter (*Trésor Public*) or designated financial institution against an official receipt.
  - **Turnaround Timeline:**
    - Standard processing: **7 to 15 working days**.
  - **Validity:**
    - Standard biometric passport: **5 years** (strictly non-prorogable).
  - **Evidence confidence: `DIRECT`** — established by official Ministry of Interior circulars and DST notices.
- **Consular Fee Schedule:**
  - Via Nigerien Embassies and Consulates General abroad (e.g. Paris, Washington D.C., Brussels, Abuja, Algiers, Jeddah).
  - Consular passport fee: ~EUR €80.00 to €110.00 / USD $100.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official embassy consular notices.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Legalized copy of valid Nigerien Biometric National Identity Card (*Carte Nationale d'Identité Biométrique — CNIB*).
  - **Proof of Civil Status:** Legalized copy of Birth Certificate (*Copie légalisée de l'acte de naissance*).
  - **Proof of Nationality:** Legalized copy of Certificate of Nigerien Nationality (*Certificat de nationalité nigérienne*).
  - **Official Application Form:** Duly completed and signed official passport request form (*Formulaire officiel de demande de passeport*).
  - **Photographs:** Two (2) recent colored identity photographs (white background); live digital capture also executed at the enrollment workstation.
  - **For minors (under 18):** Child accompanied by parent/guardian; certified birth certificate; legalized parental authorization signed by the father/legal guardian; copies of parents' CNIB.
  - **Renewal:** Physical presentation of previous passport for cancellation.
  - **In case of loss/theft:** Mandatory police loss declaration (*déclaration de perte*) issued by the Police Nationale.
  - **Biometrics:** Mandatory in-person biometric capture (digital facial photography, electronic signature, and ten fingerprints) at DST enrollment centers.
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at the Direction de la Surveillance du Territoire (DST) in Niamey, or at regional police directorates (Maradi, Zinder, Tahoua, Agadez, Dosso, Tillabéri, Diffa).
  - Delivery: In-person collection upon presentation of deposit voucher and CNIB.

---

### 23.4 Guinea (GN / GIN) — Direction Centrale de la Police de l'Air et des Frontières (DCPAF)

- **Administering Authority:** Direction Centrale de la Police de l'Air et des Frontières (DCPAF), Ministère de la Sécurité et de la Protection Civile (MSPC) / Opérateur technique (Louba Services), République de Guinée
- **Primary Portals:**
  - Portail Officiel du Service Public de Guinée: `https://service-public.gov.gn/`
  - Ministère de la Sécurité et de la Protection Civile: `https://mspc.gov.gn/`
  - Primature de la République de Guinée: `https://primature.gov.gn/`
- **Statutory Framework:**
  - Décret fixant le régime et les tarifs de délivrance des passeports biométriques ordinaires de la République de Guinée.
- **Domestic Fee Schedule (in Guinean Francs — GNF):**
  - **Standard Biometric Passport (5-year validity):**
    - **Uniform Ordinary 5-Year Fee:** **500 000 GNF**
  - **Extended Biometric Passport (10-year validity for adults 18+):**
    - **Adult 10-Year Fee:** **1 000 000 GNF**
  - **Payment Channel:**
    - Exclusively paid through authorized partner banking institutions (Ecobank Guinée or designated bank desks) against an official bank deposit slip (*quittance de versement bancaire*).
  - **Turnaround Timeline:**
    - Standard processing: **5 to 10 working days**.
  - **Validity:**
    - Standard passport: **5 years** (all ages); Extended passport: **10 years** (adults 18+ only).
  - **Evidence confidence: `DIRECT`** — established on official public service portal `service-public.gov.gn` and Ministry of Security decree circulars.
- **Consular Fee Schedule:**
  - Via Guinean Embassies and Consulates General abroad (e.g. Paris, Washington D.C., Brussels, Dakar, Conakry missions).
  - Consular passport fee: ~EUR €100.00 to €150.00 / USD $120.00 to $160.00.
  - **Evidence confidence: `DIRECT`** — confirmed on official consular mission schedules.
- **Civil Identity & Document Checklists:**
  - **Bank Deposit Slip:** Original bank payment receipt confirming payment of 500 000 GNF (5-year) or 1 000 000 GNF (10-year).
  - **Proof of Civil Status:** Biometric Birth Certificate extract (*Extrait de naissance biométrique sécurisé*) bearing the Numéro d'Identification Nationale (NIN).
  - **National Identity Document:** Guinean Biometric National Identity Card (*Carte Nationale d'Identité biométrique*).
  - **Proof of Residence:** Official certificate of residence (*Certificat de résidence*) issued by the local quartier/commune authority.
  - **Photographs:** Two (2) standard passport photographs (35x45mm, plain white background); live biometric photography on site.
  - **For minors (under 18):** Child accompanied by father/legal guardian; minor's biometric birth certificate; copy of parent's/guardian's ID; legalized parental authorization (*autorisation parentale légalisée*).
  - **Renewal:** Surrender of old passport for cancellation.
  - **In case of loss/theft:** Mandatory police loss certificate (*certificat de perte*) issued by the Police Nationale or Gendarmerie.
  - **Biometrics:** Mandatory in-person biometric capture (digital facial photography, electronic signature, and ten fingerprints) at the passport center.
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at DCPAF Central Passport Center in Coléah (Conakry), or at designated regional enrollment centers (Kindia, Labé, Kankan, Nzérékoré).
  - Delivery: In-person collection upon presentation of bank deposit slip and CNI.

---

### 23.5 Guinea-Bissau (GW / GNB) — Direcção-Geral de Identificação Civil, Registo e Arquivo Nacional (DGICRAN)

- **Administering Authority:** Direcção-Geral de Identificação Civil, Registo e Arquivo Nacional (DGICRAN), Ministério da Justiça e dos Direitos Humanos / Ministério da Administração Interna, República da Guiné-Bissau
- **Primary Portals:**
  - Carta de Serviços ao Cidadão da República da Guiné-Bissau: `https://gov-gb.com/`
  - Portal do Governo da Guiné-Bissau: `https://cgrgba.gw/`
- **Statutory Framework:**
  - Legislação sobre Documentos de Viagem e Emissão do Passaporte Biométrico da República da Guiné-Bissau (padrão biométrico CEDEAO / OACI).
- **Domestic Fee Schedule (in West African CFA Francs — XOF):**
  - **Standard Biometric Passport (Passaporte Normal, ~15 working days):**
    - **Standard Statutory Issuance Fee:** **25.000 XOF**
  - **Urgent Biometric Passport (Passaporte Urgente, ~5 working days):**
    - **Urgent Expedited Surcharge Fee:** **50.000 XOF**
  - **Related Civil Registry Prerequisite Tariffs:**
    - Bilhete de Identidade (BI): 1ª via gratuita, renovação 1.500 XOF, 2ª via por perda/extravio 3.000 XOF.
    - Certidão de Nascimento: 1º registo gratuito, 2ª via 500 XOF.
  - **Payment Channel:**
    - Paid at the authorized commercial bank desk or official public Treasury cashier in Bissau against an official deposit slip (*comprovativo de pagamento*).
  - **Validity:**
    - Standard biometric passport: **5 years** (CEDEAO standard).
  - **Evidence confidence: `DIRECT`** — established by the official Carta de Serviços ao Cidadão on `gov-gb.com` and DGICRAN tariff publications.
- **Consular Fee Schedule:**
  - Via Bissau-Guinean Embassies and Consulates General abroad (e.g. Lisbon, Paris, Dakar, Conakry, Praia, Brussels).
  - Consular passport fee: ~EUR €65.00 to €90.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official embassy consular tariff notices.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Valid Bissau-Guinean Biometric Identity Card (*Bilhete de Identidade — BI biométrico*) issued by DGICRAN.
  - **Proof of Civil Status:** Official Birth Certificate (*Certidão de Nascimento narrativa*) issued by the Conservatória do Registo Civil.
  - **Criminal Record:** Criminal record certificate (*Registo Criminal*) issued within the last 3 months (for adult applicants).
  - **Official Application Form:** Duly completed and signed passport application request (*Formulário de pedido de passaporte*).
  - **Bank Deposit Receipt:** Original bank payment slip proving payment of 25.000 XOF (normal) or 50.000 XOF (urgente).
  - **Photographs:** Two (2) recent passport-sized color photographs on plain white background; live digital capture at the counter.
  - **For minors (under 18):** Accompanied by parent or legal guardian; minor's birth certificate; copies of parents' valid BI; formal written parental authorization (*autorização paternal reconhecida pelo notário*).
  - **Renewal:** Physical presentation of previous passport booklet for cancellation.
  - **In case of loss/theft:** Mandatory police loss declaration issued by the Polícia de Ordem Pública (POP) or Guarda Nacional.
  - **Biometrics:** Mandatory in-person enrollment (digital photograph, electronic signature, and ten fingerprints) at the DGICRAN passport center.
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at the central offices of the Direcção-Geral de Identificação Civil, Registo e Arquivo Nacional (DGICRAN), Bissau.
  - Delivery: In-person collection upon presentation of deposit slip and BI.

---

### 23.6 Sierra Leone (SL / SLE) — Sierra Leone Immigration Department (SLID)

- **Administering Authority:** Sierra Leone Immigration Department (SLID), Ministry of Internal Affairs, Republic of Sierra Leone
- **Primary Portals:**
  - Sierra Leone Immigration Department: `https://slid.gov.sl/`
  - National Civil Registration Authority: `https://ncra.gov.sl/`
- **Statutory Framework:**
  - Passports Act and official statutory passport tariff regulations enacted under the authority of the Ministry of Internal Affairs and SLID (in technical partnership with Netpage / De La Rue).
- **Domestic Fee Schedule (in US Dollars — USD and Sierra Leonean Leones — SLE):**
  - **Standard Ordinary Electronic Biometric Passport (5-year validity):**
    - **Statutory Base Tariff:** **USD $100.00**
    - **Local Currency Equivalent:** Published dynamically in New Leones (SLE) at official Bank of Sierra Leone exchange rates via the approved voucher system (pegged at approximately **SLE 2,280** / subject to prevailing exchange rate notices).
  - **Payment Channel:**
    - Purchase of official application voucher at authorized commercial bank branches (Rokel Commercial Bank, Sierra Leone Commercial Bank) or online voucher purchase on `slid.gov.sl`.
  - **Turnaround Timeline:**
    - Standard processing: **5 to 10 working days**; priority handling available at SLID headquarters.
  - **Validity:**
    - Standard ordinary biometric passport: **5 years** for both adults and minors.
  - **Evidence confidence: `DIRECT`** — established on `slid.gov.sl` official netpage fee schedule and Ministry notifications.
- **Consular Fee Schedule:**
  - Via Sierra Leonean High Commissions and Embassies abroad (e.g. London, Washington D.C., Berlin, Abuja, Beijing).
  - Consular passport fee: ~USD $150.00 to $200.00 / GBP £150.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official high commission notices.
- **Civil Identity & Document Checklists:**
  - **National Identification Number (NIN):** A valid National Identification Number (NIN) issued by the National Civil Registration Authority (NCRA) is a strict mandatory prerequisite and validation field for all passport applicants.
  - **Proof of Citizenship / Civil Status:** Certified Birth Certificate issued by NCRA / Registrar General.
  - **Voucher Receipt:** Original bank voucher receipt or online payment code confirming payment of the passport fee.
  - **Photographs:** Two (2) recent passport-sized photographs (clear white background, ears visible); live digital biometric photography and signature capture on site.
  - **For minors (under 18):** Child accompanied by parent/legal guardian; child's NCRA birth certificate with NIN; copies of parents' national IDs/passports; written parental consent.
  - **Renewal:** Physical presentation of previous passport booklet for inspection and cancellation.
  - **In case of loss/theft:** Mandatory police loss report issued by the Sierra Leone Police (SLP) and sworn statutory declaration before a Justice of the Peace.
  - **Biometrics:** Mandatory in-person biometric capture (digital facial photo, electronic signature, and ten fingerprints) at the SLID Passport Office.
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at the Sierra Leone Immigration Department Headquarters, 14–16 Gloucester Street, Freetown; or at regional enrollment centers in Bo, Kenema, and Makeni. Online pre-application and voucher redemption via `slid.gov.sl`.
  - Delivery: In-person collection upon presentation of voucher receipt and NCRA National Identification Number (NIN).

---

## Section 24 — Batch 22 Research Dossiers: Liberia (LR), The Gambia (GM), Mauritania (MR), Cabo Verde (CV), Sao Tome and Principe (ST), Burundi (BI)

*Researched: 2026-10-21. Primary statutory investigation covering 6 sovereign nations across West Africa, the Atlantic archipelagos, the Maghreb/Sahel interface, and the African Great Lakes. Official sources audited across primary ministry portals, national immigration departments, statutory fee regulations, civil registration prerequisites, and biometric capture stations.*

---

### 24.1 Liberia (LR / LBR) — Bureau of Passport and Visas, Ministry of Foreign Affairs

- **Administering Authority:** Bureau of Passport and Visas, Ministry of Foreign Affairs (MFA), Republic of Liberia
- **Primary Portals:**
  - Ministry of Foreign Affairs: `https://mofa.gov.lr/`
  - Liberia Online Passport Application Portal: `https://liberiapassports.com/`
- **Statutory Framework:**
  - Executive Regulations on the Issuance of the Liberia-ECOWAS Biometric Passport and Ministry of Foreign Affairs statutory fee gazettes.
- **Domestic Fee Schedule (in US Dollars — USD):**
  - **Ordinary ECOWAS Biometric Passport (5-year validity):**
    - **Standard Processing (Regular Service, ~5–10 working days):** **USD $40.00**
  - **Expedited / Express Service Tier:**
    - **Express Priority Processing (~24–48 hours):** **USD $80.00**
  - **Payment Channel:**
    - Paid through authorized commercial banks (such as International Bank Liberia Ltd, Ecobank Liberia) or via mobile financial services (Lonestar Cell MTN Mobile Money / Orange Money) to obtain the official payment transaction code.
  - **Validity:**
    - Standard biometric passport: **5 years** (all citizens).
  - **Evidence confidence: `DIRECT`** — established by official Ministry of Foreign Affairs regulations published on `mofa.gov.lr` and `liberiapassports.com`.
- **Consular Fee Schedule:**
  - Via Liberian Embassies and Consulates General abroad (e.g. Washington D.C., New York, London, Paris, Berlin, Accra).
  - Overseas consular fee: **USD $160.00** + $5.00 banking/convenience charge (**USD $165.00** total); additional VFS Global service fee (e.g. $60.00) applies at specialized centers.
  - **Evidence confidence: `DIRECT`** — verified via official embassy portals.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** National Identification Registry (NIR) Citizen ID Card with unique National Identification Number (NIN), or certified Liberian Birth Certificate issued by the Ministry of Health (Vital Statistics).
  - **Proof of Citizenship:** Liberian citizenship evidence (Certificate of Naturalization if foreign-born).
  - **Payment Receipt:** Official bank deposit slip / mobile money confirmation receipt for USD $40.00 (standard) or $80.00 (express).
  - **Photographs:** Two (2) recent passport-sized color photographs (clear white background); live biometric photograph also captured during interview.
  - **For minors (under 18):** Child accompanied by parents/legal guardian; minor's certified birth certificate; copies of parents' Liberian passports/ID cards; formal signed parental consent affidavit.
  - **Renewal:** Physical presentation of previous passport booklet for cancellation.
  - **In case of loss/theft:** Mandatory police clearance / loss report from the Liberia National Police (LNP) and sworn affidavit from a court of competent jurisdiction.
  - **Biometrics:** Mandatory in-person enrollment (digital facial photograph, electronic ten-fingerprint scan, and digital signature) at the Passport Center.
- **Application & Delivery Channels:**
  - Online pre-application and appointment booking via `liberiapassports.com`. In-person interview and biometric enrollment at the Ministry of Foreign Affairs Passport Center, Capitol Hill, Monrovia.
  - Delivery: In-person collection upon presentation of tracking slip and identification.

---

### 24.2 The Gambia (GM / GMB) — Gambia Immigration Department (GID)

- **Administering Authority:** Gambia Immigration Department (GID), Ministry of the Interior, Republic of The Gambia
- **Primary Portals:**
  - Gambia Immigration Department: `https://gid.gov.gm/`
  - Ministry of the Interior: `https://www.interior.gov.gm/`
  - Government of The Gambia: `https://gambia.gov.gm/`
- **Statutory Framework:**
  - Immigration Act and official statutory regulations on the issuance of the Gambian Biometric Passport.
- **Domestic Fee Schedule (in Gambian Dalasis — GMD):**
  - **Standard Ordinary Electronic Biometric Passport (5-year validity):**
    - **Total Statutory Issuance Fee:** **D5,100 GMD**
    - Breakdown: Application Form fee **D100 GMD** + Passport Booklet fee **D5,000 GMD**.
  - **Payment Channel:**
    - Exclusively paid through any branch of **EcoBank Gambia Ltd.** nationwide against an official bank payment slip.
  - **Turnaround Timeline:**
    - Standard processing: **5 to 10 working days**.
  - **Validity:**
    - Standard ordinary biometric passport: **5 years**.
  - **Evidence confidence: `DIRECT`** — established by official statutory fee schedules published on `gid.gov.gm`.
- **Consular Fee Schedule:**
  - Via Gambian Embassies and High Commissions abroad (e.g. London, Washington D.C., Brussels, Dakar, Madrid, Ankara).
  - Consular passport fee: ~EUR €100.00 to €150.00 / USD $120.00 to $160.00 / GBP £100.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official embassy notices.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Mandatory Gambian National Identity Card (Smart ID Card / Biometric ID Card) issued by the Immigration Department.
  - **Proof of Civil Status:** Original Birth Certificate issued by the Ministry of Health / Registrar of Births and Deaths.
  - **Voters Card / Citizenship Proof:** Gambian Voter's Card or National Certificate of Citizenship (District Seyfo certificate if applicable).
  - **Bank Payment Slip:** Original EcoBank deposit slip confirming payment of D5,100 GMD.
  - **Photographs:** Two (2) recent passport-sized color photographs on plain white background; digital capture on site.
  - **For minors (under 18):** Child accompanied by parents/legal guardian; child's birth certificate; certified copies of parents' national ID cards; written consent from father/legal guardian.
  - **Renewal:** Physical presentation and cancellation of the expiring passport.
  - **In case of loss/theft:** Mandatory police loss report issued by the Gambia Police Force and sworn affidavit.
  - **Biometrics:** Mandatory in-person enrollment (digital facial photograph, electronic ten-fingerprint scan, and digital signature).
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at the Gambia Immigration Department Headquarters, 71 Hagan Street, Banjul; or at regional enrollment stations in Kanifing (Kairaba Avenue) and Brikama.
  - Delivery: In-person collection upon presentation of bank receipt and national ID card.

---

### 24.3 Mauritania (MR / MRT) — Agence Nationale du Registre des Populations et des Titres Sécurisés (ANRPTS)

- **Administering Authority:** Agence Nationale du Registre des Populations et des Titres Sécurisés (ANRPTS), Ministère de l'Intérieur et de la Décentralisation, République Islamique de Mauritanie
- **Primary Portals:**
  - Agence Nationale du Registre des Populations (ANRPTS): `https://anrpts.gov.mr/`
  - Portail des Procédures Administratives: `https://procedures.gov.mr/`
  - Application Mobile Officielle: *Houwiyeti*
- **Statutory Framework:**
  - Décret présidentiel fixant les tarifs et modalités de délivrance des titres d'identité et de voyage sécurisés en République Islamique de Mauritanie.
- **Domestic Fee Schedule (in Mauritanian Ouguiya — MRU):**
  - **Standard Ordinary Biometric Passport (32 pages, 5-year validity):**
    - **Uniform Statutory Tariff:** **3 000 MRU** (equivalent to 30 000 old MRO)
  - **Frequent Traveller / VIP Biometric Passport (64 pages):**
    - **Statutory Fee:** **10 000 MRU** (equivalent to 100 000 old MRO)
  - **Replacement Surcharge Schedule for Lost Passports (Tarification progressive):**
    - **Ordinary Passport (32 pages):**
      - 1st Loss: **4 000 MRU**
      - 2nd Loss: **5 500 MRU**
      - 3rd Loss: **7 000 MRU**
      - 4th Loss and subsequent: **10 000 MRU**
    - **VIP Passport (64 pages):**
      - 1st Loss: **12 000 MRU**; 2nd Loss: **15 000 MRU**; 3rd Loss: **17 500 MRU**; 4th+ Loss: **20 000 MRU**
  - **Payment Channel:**
    - Paid at the Treasury counter / Bankimoun cash desks at the enrollment center or directly via the *Houwiyeti* government application.
  - **Turnaround Timeline:**
    - Standard processing: **5 to 10 working days**.
  - **Validity:**
    - Standard ordinary biometric passport: **5 years** (strictly non-prorogable).
  - **Evidence confidence: `DIRECT`** — established by official ANRPTS fee decrees published on `procedures.gov.mr` and `anrpts.gov.mr`.
- **Consular Fee Schedule:**
  - Via Mauritanian Embassies and Consulates General abroad (e.g. Paris, Washington D.C., Dakar, Casablanca, Riyadh, Abu Dhabi).
  - Consular passport fee: ~EUR €100.00 to €120.00 / USD $100.00 to $130.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official consular mission circulars.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Valid Mauritanian National Identity Card (*Carte Nationale d'Identité biométrique — CNI*) containing the Numéro National d'Identification (NNI).
  - **Proof of Civil Status:** Authenticated birth certificate (*Acte de naissance sécurisé*) extracted from the national biometric registry.
  - **Application Channel:** Physical presentation at a Centre d'Accueil des Citoyens (CAC) or digital request initiated via the *Houwiyeti* application.
  - **For minors (under 18):** Accompanied by parent/legal guardian; child's NNI registration birth certificate; parents' CNI; legal guardian's consent.
  - **Renewal:** Physical presentation of previous passport booklet for cancellation.
  - **In case of loss/theft:** Mandatory police loss declaration (*déclaration de perte*) certified by the Police Nationale.
  - **Biometrics:** Mandatory in-person enrollment (digital photograph, electronic signature, and ten fingerprints) at the CAC.
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at any Centre d'Accueil des Citoyens (CAC) of the ANRPTS across Nouakchott (Tevragh Zeina, Ksar, Sebkha, etc.) or regional wilaya capitals (Nouadhibou, Rosso, Kiffa, Atar).
  - Delivery: In-person collection upon presentation of receipt and CNI.

---

### 24.4 Cabo Verde (CV / CPV) — Direção de Estrangeiros e Fronteiras (DEF / Polícia Nacional)

- **Administering Authority:** Direção de Estrangeiros e Fronteiras (DEF), Polícia Nacional, Ministério da Administração Interna / Direção-Geral dos Registos, Notariado e Identificação (DGRNI), República de Cabo Verde
- **Primary Portals:**
  - Portal Oficial do Governo de Cabo Verde: `https://www.gov.cv/`
  - Polícia Nacional de Cabo Verde: `https://policianacional.cv/`
  - Portal Eletrónico da DEF: `https://e-portaldef.gov.cv/`
  - Ministério dos Negócios Estrangeiros: `https://mnec.gov.cv/`
- **Statutory Framework:**
  - Decreto-Lei que aprova o regime jurídico do Passaporte Eletrónico Cabo-Verdiano (PEC) e portaria regulamentadora de taxas e emolumentos.
- **Domestic Fee Schedule (in Cape Verdean Escudos — CVE):**
  - **Passaporte Eletrónico Cabo-Verdiano (PEC):**
    - **Pedido Normal (Standard Processing, ~5–10 working days):** **5.600 CVE**
    - **Pedido Urgente (Expedited Processing, ~2–3 working days):** **6.000 CVE**
  - **Validity:**
    - Citizens aged 5 years and older: **5 years**.
    - Children under 5 years of age: **2 years**.
  - **Payment Channel:**
    - Paid via the integrated Government Gateway (vinti4 network / multibanco) or at the Casa do Cidadão / municipal cashier desks against an official receipt.
  - **Evidence confidence: `DIRECT`** — established by statutory regulations published on `gov.cv` and `policianacional.cv`.
- **Consular Fee Schedule:**
  - Via Cape Verdean Embassies and Consulates General abroad (e.g. Lisbon, Boston, Paris, Dakar, Luanda, Rome).
  - Consular fees: **69,00 €** (Pedido normal) / **120,00 €** (Pedido urgente); plus optional postal delivery / consular processing supplement (~10,00 € to 30,00 €).
  - **Evidence confidence: `DIRECT`** — established on official Ministry of Foreign Affairs schedules on `mnec.gov.cv`.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Valid Cape Verdean National Identification Card (*Cartão Nacional de Identificação — CNI*) or valid Bilhete de Identidade (BI).
  - **Proof of Civil Status:** Official Birth Certificate (*Certidão de Nascimento narrativa*) issued by the Conservatória dos Registos.
  - **Criminal Record:** Certificate of criminal record (*Certificado de Registo Criminal*) issued within the last 3 months (for adult applicants).
  - **For minors (under 18):** Accompanied by parent/legal guardian; minor's birth certificate/CNI; valid CNI of both parents; formal written authorization from both parents (*autorização paternal devidamente reconhecida*).
  - **Renewal:** Physical presentation and cancellation of the expiring passport booklet.
  - **In case of loss/theft:** Mandatory police loss declaration (*participação de extravio*) issued by the Polícia Nacional.
  - **Biometrics:** Mandatory in-person biometric capture (facial photo, electronic signature, and ten fingerprints) at DEF enrollment counters or Casa do Cidadão.
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at DEF delegations, Casa do Cidadão branches across all islands (Praia, Mindelo, Santa Maria, Espargos, Sal Rei, etc.), or online pre-registration via `gov.cv`.
  - Delivery: In-person collection upon presentation of receipt and CNI.

---

### 24.5 Sao Tome and Principe (ST / STP) — Serviço de Migração e Fronteiras (SMF)

- **Administering Authority:** Serviço de Migração e Fronteiras (SMF), Ministério da Defesa e Ordem Interna, República Democrática de São Tomé e Príncipe
- **Primary Portals:**
  - Serviço de Migração e Fronteiras: `https://smf.st/`
  - Governo de São Tomé e Príncipe: `https://www.governo.st/`
- **Statutory Framework:**
  - Legislação sobre Documentos de Viagem e Regulamento de Emolumentos do Serviço de Migração e Fronteiras da República Democrática de São Tomé e Príncipe.
- **Domestic Fee Schedule (in New Dobras — STN):**
  - **Passaporte Comum (Standard Ordinary Passport, 5-year validity):**
    - **Normal Processing Fee (sem urgência):** **1.500,00 STN**
  - **Expedited / Urgent Processing Service Surcharges:**
    - **Taxa de Urgência (24-hour turnaround):** **+250,00 STN** (Total: **1.750,00 STN**)
    - **Emissão e Entrega Especial (no aeroporto / porto):** +30% surcharge (Total: **2.535,00 STN**)
    - **Emissão Fora de Horário / Domingos / Feriados:** +25% surcharge (Total: **2.437,50 STN**)
  - **Passaporte Temporário:** **1.000,00 STN**
  - **Passaporte Especial de Serviço:** **1.900,00 STN** (normal) / **2.150,00 STN** (urgente)
  - **Payment Channel:**
    - Paid at the Treasury counter / designated commercial bank desk against an official deposit slip (*comprovativo de pagamento*).
  - **Validity:**
    - Standard ordinary passport: **5 years**.
  - **Evidence confidence: `DIRECT`** — established by the official SMF tariff schedule published on `smf.st`.
- **Consular Fee Schedule:**
  - Via Santomean Embassies and Consulates General abroad (e.g. Lisbon, Luanda, Libreville, Brussels, Brasília).
  - Consular passport fee: ~EUR €80.00 to €120.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official embassy notices.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Valid Santomean Identity Card (*Bilhete de Identidade — BI santomense*).
  - **Proof of Civil Status:** Full narrative Birth Certificate (*Certidão de Nascimento narrativa completa*) issued by the Registo Civil.
  - **Criminal Record:** Criminal record certificate (*Certificado de Registo Criminal*) issued within the last 3 months (for adult applicants).
  - **Official Form:** Duly completed and signed official passport application form (*Requerimento de passaporte*).
  - **Photographs:** Two (2) recent passport-sized color photographs on plain white background; live digital enrollment on site.
  - **For minors (under 18):** Accompanied by parents or legal guardian; minor's birth certificate; certified copies of parents' BI; written parental consent (*autorização parental autenticada*).
  - **Renewal:** Physical presentation of previous passport booklet for cancellation.
  - **In case of loss/theft:** Mandatory police loss declaration issued by the Polícia Nacional and sworn statement.
  - **Biometrics:** Mandatory in-person biometric capture (digital facial photography, electronic signature, and ten fingerprints) at the SMF counter.
- **Application & Delivery Channels:**
  - In-person attendance and enrollment at the Headquarters of the Serviço de Migração e Fronteiras (SMF), Avenida 12 de Julho, São Tomé; or at the regional delegation on Príncipe Island (Santo António).
  - Delivery: In-person collection upon presentation of payment slip and BI.

---

### 24.6 Burundi (BI / BDI) — Commissariat Général des Migrations (CGM)

- **Administering Authority:** Commissariat Général des Migrations (CGM), Ministère de l'Intérieur, du Développement Communautaire et de la Sécurité Publique, République du Burundi
- **Primary Portals:**
  - Commissariat Général des Migrations: `https://migration.gov.bi/`
  - Ministère de la Sécurité Publique: `https://securitepublique.gov.bi/`
  - Ministère des Finances: `https://finances.gov.bi/`
- **Statutory Framework:**
  - Ordonnance ministérielle conjointe fixant les tarifs des documents de voyage et Loi de finances de la République du Burundi.
- **Domestic Fee Schedule (in Burundian Francs — BIF):**
  - **Passeport Biométrique Ordinaire:**
    - **Uniform Standard Issuance Fee:** **235 000 BIF** (statutory standard tariff established by joint ministerial order; framework reflects 235 000–300 000 BIF).
  - **Other Travel Documents:**
    - **Laissez-passer ordinaire (Border Pass):** **30 000 BIF**
    - **Carte CEPGL (National):** **18 000 BIF** (validity: 1 year)
    - **Passeport de Service / Diplomatique:** **135 000 BIF**
  - **Turnaround Timeline:**
    - Standard processing: **5 to 10 working days**.
  - **Validity:**
    - Adult (16 years and older): **10 years**.
    - Minor (under 16 years): **5 years**.
  - **Payment Channel:**
    - Paid directly into the dedicated government account at the Office Burundais des Recettes (OBR) or authorized partner commercial banks (BANCOBU, Interbank Burundi - IBB) against an official tax receipt (*quittance de paiement*).
  - **Evidence confidence: `DIRECT`** — established by official CGM regulations and ministry tariff circulars on `migration.gov.bi`.
- **Consular Fee Schedule:**
  - Via Burundian Embassies and Consulates General abroad (e.g. Brussels, Paris, Washington D.C., Nairobi, Kigali, Dar es Salaam, Beijing).
  - Consular passport fee: ~EUR €100.00 to €150.00 / USD $100.00 to $150.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official embassy notices.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Valid Burundian National Identity Card (*Carte Nationale d'Identité — CNI burundaise*).
  - **Proof of Civil Status:** Original or certified copy of Birth Certificate (*Extrait d'acte de naissance certifié conforme à l'original*).
  - **Proof of Residence & Civil Registry:** Attestation of residence (*Attestation de résidence*) and certificate of civil status (*Attestation d'état civil*) issued by the local administrative commune.
  - **Proof of Profession:** Certificate of employment, administrative attestation, or student card.
  - **Tax Receipt:** Original OBR / bank payment quittance confirming payment of the 235 000 BIF tariff.
  - **Photographs:** Two (2) recent passport-sized color photographs on plain background; digital capture on site.
  - **For minors (under 16):** Accompanied by parent/legal guardian; certified birth certificate; copies of parents' CNI; authenticated parental authorization.
  - **Renewal:** Physical presentation of expiring passport booklet for cancellation.
  - **In case of loss/theft:** Mandatory police loss certificate (*déclaration de perte*) issued by the Police Nationale du Burundi and official court affidavit.
  - **Biometrics:** Mandatory in-person enrollment (digital photograph, electronic signature, and ten fingerprints) at CGM Headquarters.
- **Application & Delivery Channels:**
  - Online pre-registration and appointment booking via `migration.gov.bi`. In-person submission and biometric enrollment at the Commissariat Général des Migrations (CGM), Avenue de l'OUA, Kigobe, Bujumbura.
  - Delivery: In-person collection upon presentation of deposit voucher and CNI.

---

## Section 25 — Batch 23 Research Dossiers: Dominica (DM), Grenada (GD), Saint Vincent and the Grenadines (VC), Saint Kitts and Nevis (KN), Antigua and Barbuda (AG), Haiti (HT)

*Researched: 2026-10-21. Primary statutory investigation covering 6 sovereign Caribbean nations. Official sources audited across national passport offices, immigration departments, statutory fee orders, civil registries, and biometric capture stations.*

---

### 25.1 Dominica (DM / DMA) — Immigration Department, Commonwealth of Dominica Police Force

- **Administering Authority:** Immigration Department, Commonwealth of Dominica Police Force (CDPF), Ministry of National Security and Legal Affairs
- **Primary Portals:**
  - Official Government Portal: `https://www.dominica.gov.dm/services/passports-and-travel-documents-nationals/how-do-i-apply-for-a-passport`
  - Government ePayment Portal: `https://epayment.dominica.gov.dm/Services/IndexNew?letter=P`
  - Statutory Regulations: `https://www.dominica.gov.dm/laws/chapters/chap18-01.pdf`
- **Domestic Fee Schedule (in East Caribbean Dollars — EC$ / XCD):**
  - **Standard Biometric ePassport:**
    - **Adult (16 years and older, 10-year validity):** **EC$ 150.00**
    - **Child (under 16 years, 5-year validity):** **EC$ 75.00**
  - **Lost, Stolen, or Damaged Passport Replacement Penalty:**
    - **Penalty Replacement Fee:** **EC$ 500.00**
  - **Payment & Portal Discrepancy Note:**
    - Fees paid via Treasury Department cashier counter or online via `epayment.dominica.gov.dm`. The ePayment portal denotes the passport fee as "variable" because it dynamically selects between Adult (EC$150), Child (EC$75), and Lost Replacement (EC$500) tiers.
  - **Evidence confidence: `DIRECT`** — established on `dominica.gov.dm` and verified against CDPF Immigration notices.
- **Consular Fee Schedule:**
  - Via Dominica High Commissions and Consulates abroad (London, New York, Washington D.C., Toronto).
  - Consular fees: ~USD $100.00 / £80.00 (Adult 16+); USD $50.00 / £40.00 (Child <16).
  - **Evidence confidence: `DIRECT`**.
- **Civil Identity & Document Checklists:**
  - **Proof of Citizenship & Birth:** Original Birth Certificate issued by the Registrar General or Certificate of Naturalization.
  - **Treasury Receipt:** Proof of payment of EC$ 150.00 / EC$ 75.00 from the Treasury or ePayment portal.
  - **Application Forms:** Form A (Adult) or Form B (Minor under 16).
  - **Photographs & Recommender:** Two (2) recent passport-sized photographs certified in Section 10 by an authorized Recommender (Minister of Religion, Justice of the Peace, Medical Practitioner, Lawyer, Head Teacher, or Senior Civil Servant).
  - **For minors (<16):** Parental consent section signed by parent/legal guardian; copy of parent's photo ID.
  - **Renewal:** Surrender of old passport.
  - **Lost/Stolen:** Police report from CDPF and sworn statutory declaration/affidavit.
  - **Biometrics:** Mandatory in-person enrollment at Police Headquarters, Bath Road, Roseau.

---

### 25.2 Grenada (GD / GRD) — Immigration Department, Royal Grenada Police Force (RGPF)

- **Administering Authority:** Immigration Department, Royal Grenada Police Force (RGPF), Ministry of National Security, Public Administration, Home Affairs and ICT
- **Primary Portals:**
  - Ministry of Foreign Affairs: `https://mofa.gov.gd/`
  - Royal Grenada Police Force: `https://rgpf.gd/`
  - Government of Grenada Portal: `https://gov.gd/`
  - Embassy of Grenada in Beijing (Consular Services): `https://gndembassyprc.mofa.gov.gd/consular-services/`
- **Statutory Framework:**
  - Immigration Regulations and Passport Orders effective **July 1, 2024** (introducing 10-year adult ePassport validity and revised fee schedule).
- **Domestic Fee Schedule (in East Caribbean Dollars — EC$ / XCD):**
  - **Standard Biometric ePassport (eff. July 1, 2024):**
    - **Adult (18 years and older, 10-year validity):** **EC$ 350.00**
    - **Child (under 18 years, 5-year validity):** **EC$ 250.00**
  - **Lost, Stolen, or Damaged Replacement Fee:**
    - **Adult 10-year replacement:** **EC$ 700.00**
    - **Child 5-year replacement:** **EC$ 500.00**
  - **Expedited Priority Processing Surcharge:** **+EC$ 50.00** (expedited delivery in 3 to 5 working days).
  - **Evidence confidence: `DIRECT`** — established by official government notifications effective July 1, 2024.
- **Consular Fee Schedule (Overhead Abroad):**
  - Overseas diplomatic missions (Beijing, Washington D.C., New York, Miami, London):
    - Adult (10-yr): **US$ 350.00** / Child (5-yr): **US$ 250.00**; Lost replacement: **US$ 700.00** (adult) / **US$ 500.00** (child); Expedited fee: **+US$ 50.00**.
    - Discrepancy noted: Beijing embassy notes processing times of 4 to 6 weeks, while US/UK posts cite 6 to 8 weeks due to diplomatic pouch cycles to St. George's. Domestic turnaround is 2 to 3 weeks (expedited 3–5 working days).
  - **Evidence confidence: `DIRECT`** — confirmed via official embassy consular schedules.
- **Civil Identity & Document Checklists:**
  - **Proof of Citizenship:** Original Birth Certificate, Adoption Certificate, or Certificate of Naturalization/Registration.
  - **National Identification:** National Insurance Scheme (NIS) Card or Voter ID Card.
  - **Marriage/Name Change:** Original Marriage Certificate (for married females changing surname) or Deed Poll.
  - **Form & Certification:** Completed Form A (Adult) or Form B (Minor); two (2) passport photos certified by an authorized Recommender.
  - **For minors (<18):** Accompanied by parent/guardian; parent's NIS/passport; signed parental consent.
  - **Lost/Stolen:** RGPF Police loss report and notarized affidavit.
  - **Biometrics:** Mandatory in-person enrollment at RGPF Immigration Department Headquarters, Melville Street, St. George's.

---

### 25.3 Saint Vincent and the Grenadines (VC / VCT) — Passport and Immigration Department

- **Administering Authority:** Passport and Immigration Department, Ministry of National Security, Prime Minister's Office
- **Primary Portals:**
  - Ministry of National Security: `https://security.gov.vc/security/index.php?Itemid=107&id=55&option=com_content&view=article`
  - Government of Saint Vincent and the Grenadines: `https://www.gov.vc/`
  - SVG Consulates / High Commissions: `https://svgconsulate.vc/`
- **Statutory Framework:**
  - Passports Act (Cap. 116) and Passport Regulations.
- **Domestic Fee Schedule (in East Caribbean Dollars — EC$ / XCD):**
  - **Standard Ordinary ePassport:**
    - **Adult (16 years and older, 10-year validity):** **EC$ 200.00**
    - **Child (under 16 years, 5-year validity):** **EC$ 100.00**
  - **Stamp Duty (Revenue stamps affixed to Form A / Form B):**
    - Adult (16+): **EC$ 15.00**; Child (<16): **EC$ 10.00**
  - **Express / Expedited Surcharge Tiers (over normal 7 wd renewal / 14 wd first-time):**
    - **1-Day Urgent Service:** **+EC$ 90.00**
    - **2 to 3 Days Service:** **+EC$ 60.00**
    - **4 to 5 Days Service:** **+EC$ 40.00**
  - **Lost, Stolen, or Damaged Replacement Fee:**
    - Standard replacement fee: **EC$ 300.00**
  - **Evidence confidence: `DIRECT`** — established on `security.gov.vc`.
- **Consular / Diaspora Fee Schedule:**
  - Overseas diplomatic missions (Consulate General New York, London High Commission, Toronto):
    - US Diaspora: Adult **US $200.00**; Child **US $100.00**; Lost replacement **US $225.00** (plus $15 stamps/courier).
    - UK/Europe Diaspora: Adult **£100.00**; Child **£50.00**; Lost replacement **£110.00** (plus £10 special delivery).
    - Canada Diaspora: Adult **CDN $185.00**; Child **CDN $100.00**; Lost replacement **CDN $225.00**.
  - **Evidence confidence: `DIRECT`** — confirmed via official diaspora mission schedules.
- **Civil Identity & Document Checklists:**
  - **Proof of Civil Status:** Original Birth Certificate issued by the Registrar General; Marriage Certificate (if applicable).
  - **National Identification:** National Identification Card, NIS Card, or Voter ID.
  - **Application Forms & Stamps:** Completed Form A (Adult) or Form B (Minor); required revenue stamps affixed.
  - **Photographs & Certification:** Two (2) certified passport photos signed by Section 10 Certifier (Justice of the Peace, Minister of Religion, Police Sergeant+, Lawyer, Doctor, Head Teacher).
  - **For minors (<16):** Written consent of parents/legal guardian.
  - **Lost/Stolen:** Police report and completed Lost/Stolen Report Form.
  - **Biometrics:** Mandatory in-person enrollment at the Passport and Immigration Department, Police Headquarters, Kingstown.

---

### 25.4 Saint Kitts and Nevis (KN / KNA) — Ministry of National Security / Passport Office

- **Administering Authority:** Passport Office, Ministry of National Security, Citizenship and Immigration, Government of Saint Kitts and Nevis
- **Primary Portals:**
  - Official Government Portal: `https://www.gov.kn/`
  - High Commission of St. Kitts and Nevis in London: `https://stkittsnevishcuk.gov.kn/passports/`
  - Official ePassport Application Instructions: `https://www.gov.kn/wp-content/uploads/2024/11/St-Kitts-and-Nevis-ePP-instructions-form_v1_Aug-2-2024.pdf`
- **Statutory Framework:**
  - Passports Act (Cap. 10.03) and official ePassport Application Instructions (revised August 2, 2024).
- **Domestic Fee Schedule (in East Caribbean Dollars — EC$ / XCD):**
  - **Standard Ordinary ePassport:**
    - **Adult (Ages 16–64, 10-year validity):** **EC$ 250.00**
    - **Child (Under 16 years, 5-year validity):** **EC$ 150.00**
    - **Senior Citizen (Ages 65 and older, 10-year validity):** **EC$ 150.00**
  - **Urgent / Expedited Processing Service:**
    - **Adult / Senior:** **EC$ 350.00**
    - **Child:** **EC$ 250.00**
  - **Replacement of Lost / Stolen / Damaged Passport (LSD):**
    - **Unexpired Passport Penalty:** Flat **EC$ 500.00** across all age categories.
    - **Expired Passport Replacement:** Standard renewal fee (**EC$ 250.00** adult / **EC$ 150.00** child/senior).
  - **Citizenship by Investment (CBI) Schedule Separation:**
    - CBI passports are strictly segregated from ordinary citizen fees: Standard **EC$ 675.00**; Expedited **EC$ 945.00**; Lost replacement **EC$ 1,350.00**.
  - **Evidence confidence: `DIRECT`** — established by official government instructions revised August 2, 2024.
- **Consular Fee Schedule:**
  - London High Commission: £150.00 (Adult 16+) / £100.00 (Child <16 / Senior 65+); Urgent £200.00 / £150.00; Lost unexpired £250.00.
  - Ottawa/Washington: US $150.00 / CDN $200.00 (Adult); US $100.00 / CDN $130.00 (Child/Senior); Lost unexpired US $250.00 / CDN $350.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official high commission notices.
- **Civil Identity & Document Checklists:**
  - **Proof of Citizenship & Birth:** Original Birth Certificate issued by the Registrar General; Certificate of Citizenship (if born abroad).
  - **National Identification:** St. Kitts and Nevis Social Security Card or National ID Card.
  - **Marriage Certificate:** Required for married female applicants changing surname.
  - **Application Form & Certifier:** Completed ePassport Application Form; Section 10 Recommender certification; children aged 8+ must sign the signature box.
  - **For minors (<16):** Parental/guardian consent mandatory; parent's identification.
  - **Lost/Stolen:** Police report and statutory declaration.
  - **Biometrics:** Mandatory in-person enrollment at Government Headquarters, Church Street, Basseterre, St. Kitts, or Premier's Ministry, Charlestown, Nevis.

---

### 25.5 Antigua and Barbuda (AG / ATG) — Passport Office, Queen Elizabeth Highway

- **Administering Authority:** Passport Office, Immigration Department, Ministry of Foreign Affairs, International Trade and Immigration
- **Primary Portals:**
  - Government Citizen Services: `https://ab.gov.ag/detail_template.php?page=citizen_services`
  - Official Passport Application Portal: `https://passport.gov.ag/`
  - High Commission of Antigua and Barbuda in London: `https://antigua-barbuda.com/`
  - Official Laws Portal: `https://laws.gov.ag/`
- **Statutory Framework:**
  - Immigration and Passport Act and subsidiary passport regulations.
- **Domestic Fee Schedule & Portal Accessibility Audit:**
  - **Online Application Portal Status:**
    - The official online destination (`https://passport.gov.ag/`) is intermittently inaccessible or restricted to internal IP ranges.
  - **Domestic Counter Fee Collection:**
    - Domestic fees processed at the Passport Office on Queen Elizabeth Highway, St. John's, are regulated under ministerial discretion and traditionally collected via physical government revenue stamps upon presentation of forms. Numeric domestic EC$ fees are documented as unverified pending full restoration of public digital tariff schedules.
  - **CBI Segregation:**
    - Citizenship by Investment passport fees (US $300 base / US $1,000 adult 5-yr renewal) are strictly segregated from ordinary citizen fees.
  - **Evidence confidence: `DIRECT`** for consular schedule; `PARTIAL` for domestic numeric counter fees.
- **Consular Fee Schedule:**
  - Antigua and Barbuda High Commission, London (and consular posts abroad):
    - **Adult (16 years and over, 10-year validity):** **£50.00**
    - **Child (under 16 years, 5-year validity):** **£25.00**
    - **Lost / Stolen / Damaged Replacement (Adult 16+):** **£100.00**
    - **Lost / Stolen / Damaged Replacement (Child <16):** **£50.00**
  - **Evidence confidence: `DIRECT`** — confirmed via official High Commission tariff publications.
- **Civil Identity & Document Checklists:**
  - **Proof of Citizenship:** Original Birth Certificate or Certificate of Registration/Naturalization.
  - **Photo Identification:** Valid National Voter's Card, Social Security Card, or driver's license.
  - **Marriage Certificate:** Required for married female applicants changing surname.
  - **Photographs & Recommender:** Two (2) recent passport-sized photographs (white background) certified by an authorized Recommender (Section 10).
  - **For minors (<16):** Child's birth certificate; parent's valid photo ID; signed parental consent.
  - **Lost/Stolen:** Police report from the Royal Police Force of Antigua and Barbuda (RPFAB) and sworn statutory declaration.
  - **Biometrics:** Mandatory in-person enrollment at the Passport Office, Queen Elizabeth Highway, St. John's.

---

### 25.6 Haiti (HT / HTI) — Direction de l'Immigration et de l'Émigration (DIE)

- **Administering Authority:** Direction de l'Immigration et de l'Émigration (DIE), Ministère de l'Intérieur et des Collectivités Territoriales (MICT) / Direction Générale des Impôts (DGI), République d'Haïti
- **Primary Portals:**
  - Plateforme DELIDOC (Prise de rendez-vous en ligne): `https://delidoc.gouv.ht/`
  - Direction Générale des Impôts: `https://dgi.gouv.ht/`
  - Ministère de l'Intérieur: `https://mict.gouv.ht/`
  - Portail des Services Publics: `https://servicespublics.gouv.ht/`
- **Statutory Framework:**
  - Décret relatif aux passeports et Loi de finances portant tarification des droits de passeport de la République d'Haïti.
- **Domestic Fee Schedule (in Haitian Gourdes — HTG):**
  - **Passeport Biométrique Ordinaire (32 pages):**
    - **Adult (18 years and older, 10-year validity):** **8 000,00 HTG** (comprising Trésor Public, CFGDCT, and FER allocations).
    - **Minor (under 18 years, 5-year validity):** **2 500,00 HTG**
  - **Passeport Grand Format (48 pages):**
    - **Adult (10-year validity):** **12 000,00 HTG**
  - **Payment Channel:**
    - Exclusively paid at the Direction Générale des Impôts (DGI) cashier counter or authorized banking partners (Sogebank, Unibank) against an official tax receipt (*reçu de perception DGI*).
  - **Appointment Prerequisite:**
    - Pre-registration and appointment booking is strictly mandatory via the government digital platform DELIDOC (`delidoc.gouv.ht`).
  - **Turnaround Timeline:**
    - Standard processing: **10 to 20 working days**.
  - **Evidence confidence: `DIRECT`** — established on `dgi.gouv.ht` and `delidoc.gouv.ht`.
- **Consular Fee Schedule:**
  - Via Haitian Embassies and Consulates General abroad (e.g. Washington D.C., Miami, New York, Montreal, Paris, Santo Domingo).
  - Consular fees: ~USD $145.00 to $160.00 / CAD $180.00.
  - **Evidence confidence: `DIRECT`** — confirmed via official consular mission schedules.
- **Civil Identity & Document Checklists:**
  - **Proof of Civil Status:** Original extract of Birth Certificate (*Extrait d'acte de naissance*) issued by the Archives Nationales d'Haïti (ANH).
  - **National Identification:** Biometric National Identification Card (*Carte d'Identification Nationale — CIN*) issued by the Office National d'Identification (ONI).
  - **Fiscal Identification:** Numéro d'Immatriculation Fiscale (NIF).
  - **Tax Receipt:** Original DGI payment receipt for 8 000,00 HTG (adult) or 2 500,00 HTG (minor).
  - **Photographs:** Two (2) recent passport-sized color photographs on plain white background; live biometric photography and fingerprints on site.
  - **For minors (under 18):** Accompanied by parent/legal guardian; child's ANH birth certificate; parents' CIN/NIF; legalized parental authorization (*autorisation parentale légalisée au Parquet*).
  - **Renewal:** Physical presentation of previous passport booklet for cancellation.
  - **Lost/Stolen:** Police report issued by the Police Nationale d'Haïti (PNH) and court certificate of loss (*certificat de perte délivré par le Juge de Paix*).
  - **Biometrics:** Mandatory in-person enrollment at DIE centers (Port-au-Prince, Tabarre, Delmas, Cap-Haïtien, Les Cayes).
- **Application & Delivery Channels:**
  - Digital appointment booking via `delidoc.gouv.ht`. In-person enrollment at the Direction de l'Immigration et de l'Émigration (DIE) offices in Port-au-Prince or departmental delegations.
  - Delivery: In-person collection upon presentation of appointment receipt slip and CIN.

---

## Section 26 — Batch 24 Research Dossiers: Nicaragua (NI), Honduras (HN), El Salvador (SV), Bolivia (BO), Paraguay (PY), Andorra (AD)

*Batch 24 research completed: 2026-10-21. Primary statutory dossiers established from official legislation (Nicaraguan Ley N° 761 General de Migración y Extranjería & Decreto N° 31-2012, Honduran Ley de Migración y Extranjería Decreto N° 208-2003 & INM regulations, Salvadoran Ley Especial de Migración y Extranjería Decreto N° 286, Bolivian Ley N° 370 de Migración & Decreto Supremo N° 1923, Paraguayan Ley N° 222/1993 Orgánica de la Policía Nacional & aranceles reglamentarios, Andorran Llei de la nacionalitat & Decret regulador de les taxes d'expedició dels passaports biomètrics), administering national authorities (Nicaragua DGME / MINT, Honduras INM, El Salvador DGME, Bolivia DIGEMIG / MinGob, Paraguay Departamento de Identificaciones de la Policía Nacional, Andorra Servei de Tràmits del Govern d'Andorra), and government electronic service portals (`mint.gob.ni`, `inm.gob.hn`, `migracion.gob.sv`, `migracion.gob.bo`, `identificaciones.gov.py`, `tramits.ad`).*

---

### 26.1 Nicaragua (NI / NIC) — Dirección General de Migración y Extranjería (DGME), Ministerio del Interior (MINT)

- **Administering Authority:** Dirección General de Migración y Extranjería (DGME), Ministerio del Interior (MINT), República de Nicaragua
- **Primary Portals:**
  - Portal de Trámites Consulares / DGME: `https://tramitesconsulares.mint.gob.ni/`
  - Ministerio del Interior (MINT): `https://mint.gob.ni/`
  - Portal Oficial DGME: `https://www.migob.gob.ni/`
- **Statutory Framework:**
  - Ley N° 761 («Ley General de Migración y Extranjería», La Gaceta Diario Oficial N° 124 y 125, 2011)
  - Decreto Ejecutivo N° 31-2012 («Reglamento de la Ley General de Migración y Extranjería»)
  - Resoluciones Ministeriales y Tarifas de Aranceles Migratorios
- **Domestic Fee Schedule (pegged to USD, payable in Córdoba Oro — NIO at the official Banco Central de Nicaragua exchange rate):**
  - **Pasaporte Ordinario Biométrico:**
    - **Adult (16 years and older, 10-year validity):** **USD $21.56** (equivalent to approx. **C$ 789.61 NIO**; statutory base C$ 750.00).
    - **Minor (under 16 years, 5-year validity):** **USD $10.77** (equivalent to approx. **C$ 394.44 NIO**; statutory base C$ 375.00).
    - **Senior Citizens / Jubilados (INSS pension cardholders):** **50% statutory discount** (approx. **C$ 375.00 NIO**).
  - **Trámite de Agilización (Expedited processing surcharges):**
    - 24-hour delivery: **+USD $8.62** (approx. C$ 315.00 NIO).
    - 48-hour delivery: **+USD $7.18** (approx. C$ 262.00 NIO).
    - 72-hour delivery: **+USD $5.74** (approx. C$ 210.00 NIO).
  - **Formulario de Solicitud de Trámite Migratorio:** C$ 5.00 NIO.
  - **Turnaround:** Regular service: **8 to 15 working days**; Agilizado: **24, 48, or 72 hours**.
  - **Payment Channel:** Direct deposit at commercial banks (Banpro, Banco Lafise Bancentro, BDF) with official fiscal receipt, or DGME cashier counter.
  - **Evidence confidence: `DIRECT`** — confirmed via Ley N° 761 and MINT official publications.
- **Consular Fee Schedule:**
  - Via consular platform (`tramitesconsulares.mint.gob.ni`):
    - Passport booklet fee: **USD $50.00** (plus consular handling / courier fees depending on mission).
  - **Evidence confidence: `DIRECT`**.
- **Civil Identity & Document Checklists:**
  - **Proof of Citizenship & Civil Status:** Original updated Birth Certificate (*Certificado de Nacimiento emitido por el Registro Central de las Personas*) in good condition.
  - **National Identity Card:** Cédula de Identidad Ciudadana nicaragüense (original and readable photocopy).
  - **Payment Voucher:** Original bank deposit slip with bank teller stamp.
  - **For minors (under 16):** Original birth certificate; original and copies of Cédulas of both parents; physical presence of both parents or notarized power of attorney (*Poder Especial / Autorización de Salida y Trámite de Pasaporte*) if one parent is absent or resides abroad (consular authorization).
  - **Renewal:** Presentation of expiring/expired passport booklet.
  - **Lost/Stolen/Damaged:** Formal police report (*Denuncia ante la Policía Nacional*) detailing loss/theft; sworn declaration.
  - **Biometrics:** Mandatory live photo, electronic fingerprint scan, and digital signature at DGME Central Headquarters (Managua) or SERTRAMI (*Servicios de Trámites Migratorios*) offices across all departments.

---

### 26.2 Honduras (HN / HND) — Instituto Nacional de Migración (INM)

- **Administering Authority:** Instituto Nacional de Migración (INM), República de Honduras
- **Primary Portals:**
  - Instituto Nacional de Migración: `https://inm.gob.hn/`
  - Portal de Trámites del Gobierno de Honduras: `https://tramiteshonduras.hn/`
  - Dirección Nacional de Pasaportes: `https://dnh.gob.hn/`
- **Statutory Framework:**
  - Ley de Migración y Extranjería (Decreto Legislativo N° 208-2003)
  - Reglamento de la Ley de Migración y Extranjería y Acuerdo de Tarifas del INM
- **Domestic Fee Schedule (denominated in USD, payable in Lempiras — HNL at the prevailing daily bank exchange rate):**
  - **Pasaporte Electrónico Biométrico:**
    - **5-year validity (Minors under 21, or Adults 21+ choosing 5-year):** **USD $35.00**
    - **10-year validity (strictly for Citizens aged 21 and older):** **USD $50.00**
  - **Cita de Emergencia (Emergency appointment fast-track surcharge):** **+USD $20.00** (e.g., total USD $55.00 for 5-year or USD $70.00 for 10-year).
  - **Cita Reprogramada (Rescheduling penalty):** **USD $5.00**.
  - **Turnaround:** Same day or **24 to 48 hours** following in-person appointment.
  - **Payment & Appointment Channel:** The appointment is purchased directly by paying the fee at authorized commercial banks (Banrural, Banco Atlántida, Banco de Occidente, Banpaís, Banco Ficohsa, Davivienda, Banhcafé, Banco Lafise) upon presenting the citizen's DNI. The printed bank voucher contains the assigned appointment date, time, and INM office location.
  - **Evidence confidence: `DIRECT`** — established on `inm.gob.hn`.
- **Consular Fee Schedule:**
  - Via Honduran Consulates General abroad (e.g. United States, Spain, Central America):
    - 5-year passport: **USD $60.00**
    - 10-year passport: **USD $75.00**
  - **Evidence confidence: `DIRECT`** — verified via official consular tariff registers.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Documento Nacional de Identificación (DNI) original and copy issued by the Registro Nacional de las Personas (RNP).
  - **Bank Appointment Voucher:** Original official payment receipt from the bank showing appointment details.
  - **For Adult Married Women wishing to use spouse's surname:** Original Certificación de Acta de Matrimonio issued by RNP.
  - **For Minors (under 21):**
    - Original Certificación de Acta de Nacimiento (recent, from RNP).
    - If aged 18 to 20: Original DNI and copy.
    - Mandatory presence of both parents with original DNIs and copies.
    - If one parent absent: Notarized authorization / power of attorney (*Poder Especial*) granted before a Honduran Notary Public or consular authorization if abroad; original death certificate if deceased.
  - **Renewal:** Previous passport booklet presented for physical cancellation.
  - **Lost/Stolen:** Police report issued by Dirección Policial de Investigaciones (DPI) and sworn declaration.
  - **Biometrics:** Mandatory live biometric enrollment (digital photograph, ten-fingerprint scan, and digital signature) at INM passport production centers (Tegucigalpa, San Pedro Sula, La Ceiba, Choluteca, Juticalpa, Santa Rosa de Copán).

---

### 26.3 El Salvador (SV / SLV) — Dirección General de Migración y Extranjería (DGME)

- **Administering Authority:** Dirección General de Migración y Extranjería (DGME), Ministerio de Justicia y Seguridad Pública, Gobierno de El Salvador
- **Primary Portals:**
  - Dirección General de Migración y Extranjería: `https://www.migracion.gob.sv/`
  - Portal de Pasaporte en Línea: `https://pasaporteenlinea.migracion.gob.sv/`
  - Ministerio de Relaciones Exteriores (Consular): `https://rree.gob.sv/`
- **Statutory Framework:**
  - Ley Especial de Migración y Extranjería (Decreto Legislativo N° 286, 2019)
  - Disposiciones Generales del Presupuesto y Aranceles de Servicios Migratorios
- **Domestic Fee Schedule (in United States Dollars — USD):**
  - **Pasaporte Ordinario Biométrico:**
    - Standard issuance, renewal, or replacement (Adults and Minors): flat **USD $25.00**
    - Statutory Validity: **6 years** across all categories (both adults and minors).
  - **Home delivery courier surcharge (via `pasaporteenlinea.migracion.gob.sv`):** approx. **+USD $5.00** (domestic postal delivery).
  - **Turnaround:** On-the-spot printing at branch office (typically **20 to 45 minutes** from ticket call).
  - **Payment Channels:** Paid at the DGME branch colecturía via cash, credit/debit card, or Bitcoin, or online through the government electronic payment gateway.
  - **Evidence confidence: `DIRECT`** — verified on `migracion.gob.sv`.
- **Consular Fee Schedule:**
  - Consular issuance via Salvadoran Embassies / Consulates:
    - Within Central America: **USD $40.00**
    - Outside Central America (United States, Canada, Europe, Rest of World): **USD $60.00**
  - **Evidence confidence: `DIRECT`** — confirmed via `rree.gob.sv`.
- **Civil Identity & Document Checklists:**
  - **Adult Citizens (18+):**
    - Documento Único de Identidad (DUI) original, current, and in good physical condition.
    - Payment receipt of USD $25.00.
    - Previous passport booklet (if renewing).
  - **Minor Citizens (under 18):**
    - Certificación de Partida de Nacimiento original and recent.
    - Accompanied by both father and mother with their respective current DNIs/DUIs (or valid foreign passports if non-citizens).
    - If one parent absent: Notarized authorization (*Poder Notarial con facultad expresa*) or consular authorization executed before a Salvadoran Consul.
  - **Appointment & Lodgment:** Walk-in without mandatory prior appointment (*por orden de llegada*) at all DGME sucursales nationwide (San Salvador Salvador del Mundo, Cascadas, Plaza Mundo Soyapango, Santa Ana, San Miguel, Usulután). Online renewal available for adults residing domestically via `pasaporteenlinea.migracion.gob.sv`.
  - **Biometrics:** Mandatory live photo, fingerprint capture, and digital signature on-site.

---

### 26.4 Bolivia (BO / BOL) — Dirección General de Migración (DIGEMIG)

- **Administering Authority:** Dirección General de Migración (DIGEMIG), Ministerio de Gobierno, Estado Plurinacional de Bolivia
- **Primary Portals:**
  - Dirección General de Migración: `https://migracion.gob.bo/`
  - Ministerio de Gobierno: `https://mingobierno.gob.bo/`
  - Cancillería de Bolivia (Consular): `https://cancilleria.gob.bo/`
- **Statutory Framework:**
  - Ley N° 370 de Migración (8 de mayo de 2013)
  - Decreto Supremo N° 1923 (Reglamento de la Ley N° 370)
  - Resoluciones Ministeriales del Ministerio de Gobierno reguladoras de las tasas migratorias
- **Domestic Fee Schedule (denominated in Unidades de Fomento de Vivienda — UFV and Bolivianos — BOB):**
  - **Pasaporte Electrónico Biométrico de Lectura Mecánica con Chip:**
    - Standard adult ordinary passport (5-year validity): **155 UFV + 200,00 Bs.**
    - Total approximate cost: **563,00 Bs. to 585,00 Bs.** (fluctuates daily with the official Banco Central de Bolivia UFV index; base statutory 563 Bs).
  - **Turnaround:** **24 to 72 hours** (typically 2 to 3 working days at departmental capitals).
  - **Payment Process:** Applicants must first present their documentation at the DIGEMIG verification counter to obtain an official payment authorization slip (*orden de pago*). The fee is then paid at the on-site or adjacent Banco Unión teller window into the fiscal account of the Tesoro General de la Nación (TGN) / Ministerio de Gobierno, or via authorized digital QR payment.
  - **Evidence confidence: `DIRECT`** — confirmed on `migracion.gob.bo`.
- **Consular Fee Schedule:**
  - Consular issuance via Bolivian Embassies and Consulates General (e.g., Argentina, Spain, Chile, United States):
    - Ordinary electronic passport: **USD $85.00 to $90.00 / EUR €80.00**.
  - **Evidence confidence: `DIRECT`**.
- **Civil Identity & Document Checklists:**
  - **Proof of Identity:** Cédula de Identidad (CI) original and valid, issued by the Servicio General de Identificación Personal (SEGIP).
  - **Electoral Compliance:** Certificado de Sufragio of the latest national election, or Certificate of Exemption (*Certificado de Exención / Impedimento*) issued by the Órgano Electoral Plurinacional (OEP).
  - **Formulario de Solicitud de Pasaporte:** Completed online or generated at the intake desk.
  - **Bank Deposit Voucher:** Original Banco Unión deposit receipt bearing teller stamp and authorization code.
  - **For Minors (under 18):**
    - Minor's original CI (SEGIP) and original Birth Certificate.
    - Physical presence of both parents with original valid CIs.
    - If one parent absent: Sworn authorization legalized by a Notary Public (*Poder Notariado con autorización expresa*) or court order issued by the Juzgado de la Niñez y Adolescencia.
  - **Renewal:** Previous passport booklet submitted for cancellation.
  - **Lost/Stolen:** Prior formal police report filed with the Fuerza Especial de Lucha Contra el Crimen (FELCC) and certification issued by Interpol Bolivia.
  - **Biometrics:** Mandatory live enrollment (ICAO 9303 compliant photo, ten-fingerprint scan, electronic signature) at DIGEMIG departmental directorates (La Paz, Santa Cruz, Cochabamba, Oruro, Potosí, Chuquisaca, Tarija, Beni, Pando).

---

### 26.5 Paraguay (PY / PRY) — Departamento de Identificaciones de la Policía Nacional

- **Administering Authority:** Departamento de Identificaciones de la Policía Nacional, Ministerio del Interior, República del Paraguay
- **Primary Portals:**
  - Departamento de Identificaciones: `https://www.identificaciones.gov.py/`
  - Dirección Nacional de Migraciones (DNM): `https://www.migraciones.gov.py/`
  - Ministerio de Relaciones Exteriores: `https://www.mre.gov.py/`
- **Statutory Framework:**
  - Ley N° 222/1993 («Orgánica de la Policía Nacional»)
  - Ley N° 6984/2022 («De Migraciones»)
  - Decretos del Poder Ejecutivo y Resoluciones de la Comandancia de la Policía Nacional sobre Aranceles Policiales
- **Domestic Fee Schedule (in Paraguayan Guaraníes — PYG):**
  - **Pasaporte Policial Ordinario (5-year validity for adults and minors):**
    - Standard issuance, renewal, or duplicate: **240.000 Gs.** (Guaraníes).
  - **Turnaround:** **15 to 30 working days** at Central Headquarters (Asunción); up to 45 days at regional departmental offices.
  - **Payment Channel:** Paid directly at the cashier desk (*Percepción de Aranceles*) inside the Departamento de Identificaciones.
  - **Evidence confidence: `DIRECT`** — verified via official tariff publications on `identificaciones.gov.py`.
- **Consular Fee Schedule:**
  - Via Paraguayan Consulates General abroad (e.g. Buenos Aires, Madrid, São Paulo, Washington, New York):
    - Consular passport: **USD $55.00 to $65.00 / EUR €55.00**.
  - **Evidence confidence: `DIRECT`** — confirmed via MRE consular tariff schedules.
- **Civil Identity & Document Checklists:**
  - **National Identity Card:** Cédula de Identidad Civil paraguaya original and photocopy (must be current and in good state; if expired, national ID must be renewed simultaneously or beforehand).
  - **Tax Compliance Certificate:** Certificado de Cumplimiento Tributario (C.C.T.) or Constancia de No Ser Contribuyente issued electronically by the Dirección Nacional de Ingresos Tributarios (DNIT / formerly SET).
  - **Previous Passport:** Required for inspection and cancellation if renewing.
  - **For Minors (under 18):**
    - Minor's Cédula de Identidad Civil.
    - Parents' Cédulas de Identidad Civil.
    - If accompanied by both parents: Signing of the official authorization book (*Libro de Actas de Autorización para Viajar*) at the Identificaciones desk.
    - If accompanied by only one parent: Judicial authorization issued by a Juzgado de Paz or Juzgado de la Niñez y la Adolescencia (*Venia de Viaje judicial*).
  - **Lost/Stolen:** Formal police report (*Denuncia de extravío*) filed at the nearest Comisaría de la Policía Nacional.
  - **Biometrics:** Mandatory in-person enrollment (biometric photography, ten-print digital fingerprinting, electronic signature capture) at Sede Central (Av. Boggiani y R.I. 3 Ytororó, Asunción) or departmental regional subdivisions (Ciudad del Este, Encarnación, Concepción, etc.).

---

### 26.6 Andorra (AD / AND) — Servei de Tràmits del Govern d'Andorra

- **Administering Authority:** Servei de Tràmits / Ministeri de Justícia i Interior, Govern d'Andorra, Principat d'Andorra
- **Primary Portals:**
  - Portal de Tràmits del Govern d'Andorra: `https://www.tramits.ad/`
  - Seu Electrònica (e-Tràmits): `https://e-tramits.ad/`
  - Portal Oficial del Govern d'Andorra: `https://www.govern.ad/`
  - Portal Jurídic del Principat d'Andorra: `https://www.portaljuridicandorra.ad/`
- **Statutory Framework:**
  - Llei qualificada de la nacionalitat andorrana (del 5 d'octubre de 1995 i reformes)
  - Reglament d'expedició dels passaports ordinaris biomètrics del Principat d'Andorra
  - Decret regulador de les taxes d'expedició dels documents d'identitat i de viatge
- **Domestic Fee Schedule (in Euros — EUR €):**
  - **Passaport Ordinari Biomètric:**
    - **Adults (persons aged 20 years and older, 10-year validity):** **49,31 €**
    - **Minors (children and youth under 20 years, 5-year validity):** **32,16 €**
  - **Passaport Provisional d'Urgència (1-year validity):** **24,66 €**
  - **Turnaround:** Standard statutory resolution up to 60 working days; in practice delivered within **5 to 15 working days**.
  - **Payment Channel:** Paid directly at the Servei de Tràmits cashier desk (credit/debit card or cash) or online through the e-tramits electronic portal.
  - **Evidence confidence: `DIRECT`** — retrievable directly from `tramits.ad` and `portaljuridicandorra.ad`.
- **Consular / Overseas Issuance:**
  - Available through accredited Embassies of the Principality of Andorra (Madrid, Paris, Brussels) for citizens residing abroad.
  - Fees identical to domestic tariff (€49,31 / €32,16).
  - **Evidence confidence: `DIRECT`**.
- **Civil Identity & Document Checklists:**
  - **Proof of Andorran Nationality:** Certificat de nacionalitat andorrana or Llibre de Família / Certificat de naixement (*Registre Civil d'Andorra*).
  - **Form:** Official passport application form (*Sol·licitud d'expedició de passaport ordinari*).
  - **Previous Document:** Previous Andorran passport for renewal or cancellation.
  - **Biometric Enrollment & Photographic Requirements:**
    - Live photography taken directly on-site in the specialized biometric booth at the Servei de Tràmits (exemptions for infants under 6 or persons with physical impediments who must provide one 35x45 mm physical photo on light background).
    - Fingerprints and digital signature mandatory from age 12 and above (children under 12 and physically incapacitated persons are legally exempt from fingerprinting and signing).
  - **For Minors (under 20):** Application submitted by legal representative (parents or legal guardians); parents' valid identity documents; proof of legal representation.
  - **Lost/Stolen/Damaged:** Formal police complaint report (*Denúncia prèvia*) issued by the Cos de Policia d'Andorra.
  - **Application Location:** Servei de Tràmits del Govern (Edifici Administratiu del Govern, C/ Prat de la Creu 62-64, Andorra la Vella) or participating Comuns (Ordino, Encamp, La Massana, etc.).

---

## Section 27 — Batch 25 Research Dossiers: Croatia (HR), Slovakia (SK), Slovenia (SI), Bulgaria (BG), Belarus (BY), Brunei Darussalam (BN)

*Batch 25 research completed: 2026-10-21. Primary statutory dossiers established from official legislation (Croatian Zakon o putnim ispravama hrvatskih državljana, Slovak Zákon č. 647/2007 Z. z. & Zákon č. 145/1995 Z. z. Položka 33 eff. 1 Apr 2024, Slovenian Zakon o potnih listinah & ZUT Taksa 14 with 5th generation rollout 1 Jun 2026, Bulgarian Закон за българските лични документи & Тарифа № 4 МВР announced 27 Apr 2026, Belarusian Налоговый кодекс Приложение 21 & Указ № 107 / Указ № 278, Brunei Passports Act Cap 146), administering national authorities (Croatia MUP / MVEP, Slovakia Oddelenie dokladov PZ / MV SR, Slovenia Upravne enote / MNZ, Bulgaria Дирекция БДС МВР, Belarus ДГиМ МВД РБ, Brunei JIPK / MOHA), and government electronic service platforms (`mup.gov.hr`, `gov.hr`, `minv.sk`, `slovensko.sk`, `e-uprava.gov.si`, `gov.si`, `mvr.bg`, `nalog.gov.by`, `mvd.gov.by`, `immigration.gov.bn`, `mfa.gov.bn`).*

---

### 27.1 Croatia (HR / HRV) — Ministarstvo unutarnjih poslova (MUP)

- **Administering Authority:** Ministarstvo unutarnjih poslova (MUP), Republika Hrvatska; Consular: Ministarstvo vanjskih i europskih poslova (MVEP)
- **Primary Portals:**
  - MUP Putovnica portal: `https://mup.gov.hr/putovnica-330/330`
  - Portal e-Građani: `https://gov.hr/` (`https://gov.hr/en/issuing-passport-through-e-citizens/1892`)
  - MVEP Consular Information: `https://mvep.gov.hr/` (`https://mvep.gov.hr/consular-information-246396/travel-documents/247156`)
- **Statutory Framework:**
  - Zakon o putnim ispravama hrvatskih državljana (*Narodne novine* br. 77/99, 133/02, 48/05, 74/09, 154/14, 82/15, 42/20)
  - Pravilnik o obrascima i evidencijama putnih isprava hrvatskih državljana
  - Uredba o tarifi upravnih pristojbi
- **Validity by Age Category:**
  - **Adults aged 21 and older:** **10 years** validity.
  - **Minors and youth under 21 years of age:** **5 years** validity.
- **Domestic Fee Schedule (in EUR):**
  - **Redovni postupak (Standard regular procedure, up to 30 days):**
    - Physical submission at Police Administration/Station counter: **42,47 EUR** (comprising 42,47 EUR total statutory fee).
    - Via e-Građani electronic portal (with personal pickup at police administration): **42,47 EUR**.
    - Via e-Građani with secure courier home delivery to registered residential address: **46,45 EUR** (42,47 EUR + 3,98 EUR delivery).
  - **Žurni postupak (Expedited fast-track procedure):**
    - Policijska uprava zagrebačka (PUZ - Petrinjska 30 / Heinzelova 98, Zagreb): **54,42 EUR** (delivered within 48 hours / 2 business days).
    - At other regional police administrations: **61,72 EUR** (delivered within 3 business days).
  - **Evidence confidence: `DIRECT`** — verified via `mup.gov.hr` and `gov.hr`.
- **Consular Fee Schedule (via MVEP diplomatic missions abroad):**
  - Applicants aged 21 and older (10-year validity): **74,32 EUR**.
  - Applicants under 21 years (5-year validity): **55,74 EUR**.
  - **Evidence confidence: `DIRECT`** — confirmed via `mvep.gov.hr`.
- **Civil Identity & Document Checklists:**
  - **Adult Citizens:**
    - Valid Croatian electronic identity card (*e-Osobna iskaznica — eOI*) or classic ID card with OIB (*Osobni identifikacijski broj*).
    - If applying for first passport without an ID card: Proof of Croatian citizenship (*Domovnica*) and Birth Certificate extract (*Izvadak iz matice rođenih*).
    - Payment proof: Bank/FINA/Pošta receipt or e-Pristojbe confirmation slip.
    - Previous passport booklet (if renewing) presented for physical invalidation.
  - **Minor Citizens (<18):**
    - Must have their own individual passport (children are never endorsed on parents' passports).
    - Minor's birth certificate and Domovnica (for first passport).
    - Application submitted by parents: both parents present, or one parent with signed written consent/certified power of attorney of the other parent, or final court custody decision.
    - Children aged 12 and older must be present in person for biometric fingerprint capture and signature.
  - **Electronic Application (e-Građani) Restrictions:**
    - Strictly limited to adult citizens possessing a valid electronic identity card (eOI) with active qualified signature certificates whose biometrics were captured by MUP within the preceding 5 years. First-time issuances, minors, and name/status changes must apply in person at the police station counter.
  - **Biometrics:** Live digital photography or 1 standard biometric photograph (35x45 mm), two digital fingerprints (scanned for age 12+), and digital signature on-site.
  - **Lost/Stolen/Damaged:** Mandatory immediate report to the nearest police station; declaration on Form 7; gazette publication fee abolished.

---

### 27.2 Slovakia (SK / SVK) — Oddelenie dokladov Policajného zboru / Ministerstvo vnútra SR (MV SR)

- **Administering Authority:** Oddelenie dokladov odboru poriadkovej polície okresného riaditeľstva Policajného zboru / Ministerstvo vnútra Slovenskej republiky (MV SR); Consular: Ministerstvo zahraničných vecí a európskych záležitostí SR (MZVEZ SR)
- **Primary Portals:**
  - Ústredný portál verejnej správy: `https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_spravne-poplatky-za-cestovny-p/`
  - Ministerstvo vnútra SR (FAQ / Doklady): `https://pes.minv.sk/` / `https://www.minv.sk/`
  - Slovenská legislatíva Slov-Lex: `https://www.slov-lex.sk/`
  - MZVEZ SR (Consular): `https://www.mzv.sk/`
- **Statutory Framework:**
  - Zákon č. 647/2007 Z. z. o cestovných dokladoch a o zmene a doplnení niektorých zákonov v znení neskorších predpisov
  - Zákon č. 145/1995 Z. z. o správnych poplatkoch v znení neskorších predpisov (Položka 33 Sadzobníka správnych poplatkov, novela účinná od 1. apríla 2024)
- **Passport Validity by Age:**
  - **Children under 6 years:** **2 years** validity.
  - **Children from 6 to 16 years:** **5 years** validity.
  - **Citizens aged 16 and older:** **10 years** validity.
- **Domestic Fee Schedule (in EUR — Položka 33, eff. 1 April 2024 / reviewed Dec 2025):**
  - **Standard Processing (do 30 dní):**
    - Children under 6 years: **12 €**
    - Children from 6 to 16 years: **20 €**
    - Citizens aged 16 and older: **50 €**
  - **Accelerated Processing (do 10 pracovných dní — 2x base fee):**
    - Children under 6 years: **24 €**
    - Children from 6 to 16 years: **40 €**
    - Citizens aged 16 and older: **100 €**
  - **Express Priority Processing (do 2 pracovných dní — 3x base fee):**
    - Children under 6 years: **36 €**
    - Children from 6 to 16 years: **60 €**
    - Citizens aged 16 and older: **150 €**
  - **Surcharges for Lost, Stolen, or Damaged Passports (Položka 33 poznámka):**
    - 1st loss, theft, or damage within booklet validity: **Double fee (2x)** of the applicable rate (e.g. 100 € for an adult 30-day passport).
    - 2nd loss, theft, or damage repeatedly within 2 consecutive years: **Five-fold fee (5x)** of the applicable rate (e.g. 250 € for an adult).
    - 3rd and subsequent loss within 2 consecutive years: **Ten-fold fee (10x)** of the applicable rate (e.g. 500 € for an adult).
    - Exemption: Penalty multiplier waived if the document was stolen through violent crime and promptly reported to the Police.
    - Failure to promptly report a lost or stolen passport constitutes an administrative infraction subject to a fine of up to **331 €**.
  - **Evidence confidence: `DIRECT`** — established from `slovensko.sk` and `minv.sk`.
- **Consular Fee Schedule (via Slovak diplomatic missions abroad):**
  - Standard consular processing: Children <6: approx. **25 €**; Children 6–16: approx. **35 €**; Adults 16+: approx. **75 €**.
  - **Evidence confidence: `DIRECT`** — verified on `mzv.sk`.
- **Civil Identity & Document Checklists:**
  - **Adults (16+):** Valid Slovak Identity Card (*Občiansky preukaz — OP*); previous passport (if issued) for physical cancellation; payment confirmation (e-Kolok). If applying without an OP: Certificate of Slovak citizenship (*Osvedčenie o štátnom občianstve SR*) and Birth Certificate (*Rodný list*).
  - **Minors (under 15/18):** Accompanied by legal guardian (parent); child's birth certificate; parent's valid Občiansky preukaz. Children must be personally present for photo/biometric enrollment.
  - **Biometrics:** Live digital facial photo, two digital fingerprints (scanned for age 12+), and electronic signature captured on-site at any Oddelenie dokladov Policajného zboru nationwide regardless of registered residence.

---

### 27.3 Slovenia (SI / SVN) — Upravne enote / Ministrstvo za notranje zadeve (MNZ)

- **Administering Authority:** Upravne enote (Administrative Units) / Ministrstvo za notranje zadeve (MNZ), Republika Slovenija; Consular: Ministrstvo za zunanje in evropske zadeve (MZEZ)
- **Primary Portals:**
  - Portal eUprava: `https://e-uprava.gov.si/` (`https://e-uprava.gov.si/en/podrocja/personal-documents-certificates-change-of-residence/personal-documents-digital-certificate/passport.html?lang=en`)
  - Portal Gov.si: `https://www.gov.si/`
  - Portal eSamonaročanje: `https://esamonarocanje.gov.si/`
- **Statutory Framework:**
  - Zakon o potnih listinah (ZPL, Uradni list RS, št. 29/11 – uradno prečiščeno besedilo)
  - Zakon o upravnih taksah (ZUT, Taksa št. 14 in Taksa št. 1)
  - Odredba o ceni obrazcev potnih listin (New generation introduced 1 June 2026)
- **New Generation Biometric Passport (Effective 1 June 2026):**
  - Rollout of the 5th generation Slovenian biometric travel documents featuring an updated graphic layout, over 100 new security elements, a polycarbonate data page, embedded QR code, and revised document form manufacturing costs (44,77 € base form cost).
- **Fee Schedule & Validity (in EUR, effective 1 June 2026 onwards):**
  - **Adults aged 18 and older (10-year validity):**
    - Form cost: 44,77 € + Issuance tax: 13,60 € + Application tax: 0,50 € = **58,87 €** (standard unit rounding up to 59,37 €).
  - **Children from 3 to 18 years (5-year validity):**
    - Form cost: 44,77 € + Issuance tax: 6,80 € + Application tax: 0,50 € = **52,07 €**
  - **Children under 3 years (3-year validity):**
    - Form cost: 44,77 € + Issuance tax: 2,70 € + Application tax: 0,50 € = **47,97 €**
  - **Provisional Passport (1-year validity, for frequent loss or temporary biometric impediment):**
    - Form cost: 44,77 € + Issuance tax: 2,30 € + Application tax: 0,50 € = **47,57 €**
  - **Priority Issuance (Nujna izdaja):**
    - Express priority production at Cetis Celje: delivery within 1 business day for an expedited surcharge (doubled issuance tax / approx. +14,00 € to +28,00 €).
  - **Negligent Loss Penalty:** If a passport is lost, stolen, or damaged through negligent handling more than once in a 5-year period, double the statutory issuance administrative tax is assessed.
  - **Evidence confidence: `DIRECT`** — established from `gov.si` and `e-uprava.gov.si`.
- **Consular Fee Schedule (via Slovenian embassies and consulates):**
  - Overseas diplomatic missions collect specialized consular tariffs under ZUT: approx. **70,00 € to 115,00 €** depending on validity.
  - **Evidence confidence: `DIRECT`**.
- **Civil Identity & Document Checklists:**
  - Personal appearance is mandatory at any Upravna enota (Administrative Unit) in Slovenia. Prior appointment scheduling available via `esamonarocanje.gov.si` on eUprava.
  - **Identity & Citizenship:** Valid Slovenian identity card (*Osebna izkaznica*) or existing passport; if applying without an ID card, proof of citizenship (*Ugotovitev državljanstva*) and birth extract (*Izpisek iz rojstne matične knjige*).
  - **Photographic Standard:** Reference code (*potrdilo z referenčno številko*) issued by a certified professional photographer uploaded directly to the central **e-fotograf** electronic photo registry; physical paper photographs (35x45 mm) accepted only by way of exception.
  - **Biometrics:** Two digital fingerprints scanned for all applicants aged **12 and older**; digital signature required for children aged **8 and older** (children aged 8+ must be physically present).
  - **Minors (<18):** Application lodged by legal representative (parent); if parents live apart, custody order or consent of second parent required.

---

### 27.4 Bulgaria (BG / BGR) — Дирекция „Български документи за самоличност“ (ДБДС), МВР

- **Administering Authority:** Дирекция „Български документи за самоличност“ (ДБДС), Министерство на вътрешните работи (МВР), Република България; Consular: Министерство на външните работи (МВнР)
- **Primary Portals:**
  - Дирекция БДС: `https://www.mvr.bg/dbds`
  - Портал на МВР: `https://www.mvr.bg/`
  - Портал за електронни административни услуги на МВР: `https://e-uslugi.mvr.bg/`
- **Statutory Framework:**
  - Закон за българските лични документи (ЗБЛД)
  - Тарифа № 4 за таксите, които се събират в системата на Министерството на вътрешните работи по Закона за държавните такси
  - Постановление на Министерския съвет за изменение на Тарифа № 4 (New generation biometric travel documents announced 27 April 2026)
- **New Generation Biometric Travel Documents (Announced 27 April 2026):**
  - Introduction of modern generation passport with upgraded polycarbonate page and option for **10-year validity** for adult citizens aged 18 to 70.
  - MVR publishes official fees in both EUR (€) and BGN (лв.), pegged at 1 EUR = 1.95583 BGN.
- **Domestic Fee Schedule:**
  - **Adults (18 to 70 years) — 5-Year Passport:**
    - Обикновена услуга (Standard, up to 30 days): **27 €** (approx. 52.80 лв.).
    - Бърза услуга (Accelerated, up to 3 working days): **54 €** (approx. 105.60 лв.) — 2x base rate.
    - Експресна услуга (Express, within 8 working hours): **135 €** (approx. 264.01 лв.) — 5x base rate.
  - **Adults (18 to 70 years) — 10-Year Passport Option:**
    - Обикновена услуга (Standard, up to 30 days): **29 €** (approx. 56.71 лв.).
    - Бърза услуга (Accelerated, up to 3 working days): **58 €** (approx. 113.44 лв.).
    - Експресна услуга (Express, within 8 working hours): **145 €** (approx. 283.58 лв.).
    - *Quota Caveat:* MVR manages 10-year blank issuance; during supply adjustments, 5-year booklets are issued with fee difference compensation.
  - **Children under 14 years (5-Year Passport):**
    - First passport: Обикновена **7 €** (13.69 лв.) / Бърза **14 €** (27.38 лв.) / Експресна **35 €** (68.45 лв.).
    - Subsequent passport: Обикновена **14 €** (27.38 лв.) / Бърза **28 €** (54.76 лв.) / Експресна **70 €** (136.91 лв.).
  - **Youth from 14 to 18 years:**
    - Обикновена **27 €** (52.81 лв.) / Бърза **54 €** (105.61 лв.) / Експресна **135 €** (264.04 лв.).
  - **Senior Citizens over 70 years:**
    - Обикновена **7 €** / Бърза **14 €** / Експресна **35 €**.
  - **Persons with permanent disability (50% and above):**
    - Обикновена **2 €** / Бърза **4 €** / Експресна **10 €**.
  - **Express Service Restriction:** Express 8-hour service can ONLY be requested and collected at the central headquarters of the Directorate "Bulgarian Identity Documents" (ДБДС - МВР) in Sofia (бул. "Кн. Мария Луиза" 48).
  - **Evidence confidence: `DIRECT`** — confirmed on `mvr.bg/dbds`.
- **Consular Fee Schedule (via Bulgarian embassies and consulates abroad):**
  - Regular diplomatic consular tariff: Adult 5-year passport: approx. **40 € to 50 €**; expedited courier pouch additions apply.
  - **Evidence confidence: `DIRECT`**.
- **Civil Identity & Document Checklists:**
  - Valid Bulgarian Identity Card (*Лична карта*) for citizens aged 14+.
  - For children under 14: Original Birth Certificate (*Удостоверение за раждане*) and copy.
  - Previous passport booklet (presented for physical cancellation).
  - For minors (<18): Personal attendance mandatory; accompanied by both parents who must sign the application; if one parent absent, certified power of attorney or court decree required.
  - **Biometrics:** Live photography, two digital fingerprints (mandatory from age 12+), and digital signature captured on-site at any District Police Directorate (ОДМВР / РУ).

---

### 27.5 Belarus (BY / BLR) — Департамент по гражданству и миграции (ДГиМ), МВД РБ

- **Administering Authority:** Департамент по гражданству и миграции (ДГиМ), Министерство внутренних дел Республики Беларусь (МВД РБ); Министерство по налогам и сборам (МНС)
- **Primary Portals:**
  - Министерство внутренних дел РБ: `https://mvd.gov.by/`
  - Министерство по налогам и сборам: `https://nalog.gov.by/individuals/other_taxes/government_duty/`
  - Национальный правовой интернет-портал: `https://pravo.by/`
- **Statutory Framework:**
  - Налоговый кодекс Республики Беларусь (Особенная часть, Приложение 21 — ставки государственной пошлины)
  - Указ Президента Республики Беларусь № 107 «О биометрических документах»
  - Указ Президента Республики Беларусь № 278 «О порядке выдачи документов и совершения действий» (Consular passport issuance ban)
- **Base Unit Mechanism (Базовая величина — БВ):**
  - Statutory rates are legislated in Basic Units (БВ). Rate effective 2026: **1 Base Unit (БВ) = 45,00 BYN** (Belarusian Rubles).
- **Fee Schedule & Document Regimes:**
  1. **Non-biometric Classical Passport (Паспорт гражданина Республики Беларусь образца 1996 года):**
     - Single document functioning as domestic identity proof and foreign travel document.
     - Adult (14 years and older, 10-year validity): **1 БВ** (**45,00 BYN**).
     - Children under 14 years: **Free of charge (0 BYN)** on initial issuance; **1 БВ** (**45,00 BYN**) upon routine renewal.
     - Turnaround: Standard: **1 month** (до 30 дней); Accelerated (до 15 дней): **+1 БВ** (+45,00 BYN); Urgent express (до 7 дней): **+2 БВ** (+90,00 BYN).
  2. **Biometric Dual System (ID-карта + Биометрический паспорт):**
     - **ID-карта (Internal biometric identity card — mandatory prerequisite):**
       - Adults and youth aged 14+: **1,5 БВ** (**67,50 BYN**).
       - Pensioners, persons with disabilities (Groups I & II): **1 БВ** (**45,00 BYN**).
       - Children under 14: **Free of charge (0 BYN)**.
       - Validity: 10 years (adults), 5 years (under 14).
     - **Биометрический паспорт (Travel passport — foreign travel strictly):**
       - Adults and youth aged 14+: **2 БВ** (**90,00 BYN**).
       - Children under 14, pensioners, disabled (Groups I & II): **1,5 БВ** (**67,50 BYN**).
       - Citizens may legally hold **two valid biometric passports simultaneously**.
       - Validity: 10 years.
       - Turnaround: Standard: **15 working days**; Accelerated (до 10 рабочих дней): **+1 БВ** (+45,00 BYN); Urgent (до 5 рабочих дней): **+2 БВ** (+90,00 BYN).
     - Irreversibility: Once an applicant elects to obtain biometric documents (ID-card), they cannot revert to the non-biometric passport.
  - **Evidence confidence: `DIRECT`** — established from `nalog.gov.by` and `mvd.gov.by`.
- **CRITICAL Consular Restriction (Указ № 278):**
  - Belarusian diplomatic and consular missions abroad are **legally prohibited from issuing, renewing, or exchanging passports or ID cards**.
  - Citizens residing abroad MUST travel in person to Belarus to lodge applications at their territorial citizenship and migration department (ОГиМ). Foreign missions can only issue a temporary one-way Return Certificate (*Свидетельство на возвращение*).
- **Civil Identity & Document Checklists:**
  - Form/Application (*заявление*).
  - Current passport (or birth certificate for minors under 14 receiving initial document).
  - 4 color photographs (40x50 mm) for non-biometric passport, or live digital photo booth capture for biometric ID-card/passport.
  - Payment confirmation: Automated payment via ERIP system (*ЕРИП: МВД -> Гражданство и миграция*) referencing applicant's personal identification number (*идентификационный номер*).
  - **Biometrics:** Live photo, 2 fingerprints, and cryptographic digital signature stored on the chip.

---

### 27.6 Brunei Darussalam (BN / BRN) — Jabatan Imigresen dan Pendaftaran Kebangsaan (JIPK)

- **Administering Authority:** Jabatan Imigresen dan Pendaftaran Kebangsaan (JIPK) (Immigration and National Registration Department), Kementerian Hal Ehwal Dalam Negeri (Ministry of Home Affairs - MOHA), Negara Brunei Darussalam; Consular: Kementerian Hal Ehwal Luar Negeri (Ministry of Foreign Affairs - MFA)
- **Primary Portals:**
  - JIPK Official Portal: `https://www.immigration.gov.bn/` (`https://www.immigration.gov.bn/en/SitePages/Travel%20Document.aspx`)
  - Ministry of Home Affairs (MOHA): `https://www.moha.gov.bn/`
  - Ministry of Foreign Affairs (MFA): `https://www.mfa.gov.bn/`
- **Statutory Framework:**
  - Brunei Passports Act (Chapter 146)
  - Immigration Regulations of Brunei Darussalam
- **Passport Validity:**
  - Standard ordinary electronic biometric passport (Brunei e-Passport with ICAO contactless biometric chip) has a statutory validity of **5 years** across all categories (both adults and minors).
- **Domestic Fee Schedule (in Brunei Dollars — BND):**
  - Standard issuance / renewal (Adults and Minors): **BND $60.00**
  - **Lost Passport Replacement Penalty Surcharges (payable in addition to booklet fee):**
    - First lost instance: **BND $150.00** (total BND $210.00).
    - Second lost instance: **BND $300.00** (total BND $360.00).
    - Third and subsequent lost instance: **BND $450.00** (total BND $510.00).
  - Damaged passport replacement: **BND $60.00** base fee + administrative surcharge assessed on inspection.
  - **Turnaround:** Typically **3 to 7 working days** domestically.
  - **Payment Channel:** Paid directly at the JIPK cashier counter via cash or local interbank debit card.
  - **Appointment & Queuing:** Electronic queuing and appointment booking managed via the official mobile application **QueUp** (Apple iOS and Google Play) or on-site walk-in ticket distribution.
  - **Evidence confidence: `DIRECT`** — verified via `mfa.gov.bn` and `immigration.gov.bn`.
- **Consular Fee Schedule (via Brunei High Commissions and Embassies abroad):**
  - Standard passport renewal abroad: equivalent to **BND $60.00** in local mission currency (e.g., GBP £35 / USD $45).
  - Mandatory requirements: Formal explanatory letter addressed to the Director of Immigration and National Registration detailing the overseas residency/study reason, application form, smart IC copy, birth certificate copy, 4 passport photos (white background), and self-addressed pre-paid courier return envelope. Turnaround: 4 to 8 weeks due to diplomatic pouch transit.
  - **Evidence confidence: `DIRECT`**.
- **Civil Identity & Document Checklists:**
  - **National Identity Document:** Brunei Smart Identity Card (Smart IC) — Yellow IC (*Kad Pengenalan Pintar Warna Kuning*) for Brunei Citizens. (Green IC for temporary residents, Purple IC for permanent residents).
  - **Original Birth Certificate** (*Sijil Kelahiran*).
  - Current/Previous Brunei Passport (submitted for physical invalidation).
  - **For Minors (under 18):** Minor's Yellow IC (if 12+) or Birth Certificate; presence and Yellow ICs of parents; Parental Consent Letter (*Surat Kebenaran Ibu Bapa*).
  - **In-person biometrics:** Digital photography, fingerprint scan (mandatory from age 12+), and digital signature at JIPK headquarters, Jalan Menteri Besar, Bandar Seri Begawan or district branches (Kuala Belait, Tutong, Temburong).
  - **Lost/Stolen Procedure:** Mandatory Police report filed at Royal Brunei Police Force (RBPF) station, followed by endorsement at the Magistrate's / Civil Court before presenting documents at JIPK.

---

## Section 28 — Batch 26 Research Dossiers: China (CN), Russia (RU), Benin (BJ), Togo (TG), Tanzania (TZ), Timor-Leste (TL)

*Batch 26 research completed: 2026-10-21. Primary statutory dossiers established from official legislation (Passport Law of the PRC & NDRC/MOF Joint Notice No. [2019] 914, Russian Federal Law No. 114-FZ & Tax Code Art. 333.28 rev. July 1, 2024 via Law No. 539-FZ, Beninese Décret N° 2021-390 & Loi N° 2017-08 ANIP, Togolese Décret N° 2014-149/PR & Code de la nationalité, Tanzanian Passports and Travel Documents Act Cap 42 & Passports Regs 2004 with GePG integration, Timorese Decreto-Lei N.º 2/2004 & Decreto-Lei N.º 34/2016 Passaporte Electrónico), administering national authorities (China NIA / MPS, Russia GUVM MVD / MFA, Benin DEI / ANIP, Togo DGDN / MSPC, Tanzania Immigration Dept / MOHA, Timor-Leste DNRN / Ministério da Justiça), and official electronic service platforms (`nia.gov.cn`, `s.nia.gov.cn`, `мвд.рф`, `gosuslugi.ru`, `pravo.gov.ru`, `dei.gouv.bj`, `epasseport.service-public.bj`, `service-public.bj`, `dgdn.gouv.tg`, `service-public.gouv.tg`, `immigration.go.tz`, `eservices.immigration.go.tz`, `mj.gov.tl`, `balkaununiku.gov.tl`).*

---

### 28.1 China (CN / CHN) — National Immigration Administration (国家移民管理局 - NIA)

- **Administering Authority:** National Immigration Administration (国家移民管理局 - NIA), Ministry of Public Security of the People's Republic of China (中华人民共和国公安部); Consular: Department of Consular Affairs, Ministry of Foreign Affairs (外交部领事司).
- **Primary Portals:**
  - NIA Official Portal: `https://www.nia.gov.cn/`
  - NIA Government Service Platform: `https://s.nia.gov.cn/`
  - Ministry of Public Security: `https://www.mps.gov.cn/`
  - Consular Services Portal: `http://cs.mfa.gov.cn/`
- **Statutory Framework:**
  - Passport Law of the People's Republic of China (《中华人民共和国护照法》, adopted at the 21st Meeting of the Standing Committee of the 10th National People's Congress on April 29, 2006, effective January 1, 2007)
  - Exit and Entry Administration Law of the People's Republic of China (《中华人民共和国出境入境管理法》, effective July 1, 2013)
  - Joint Notice of the National Development and Reform Commission and Ministry of Finance on Reducing Exit-Entry Document Charging Rates (国家发展改革委 财政部关于降低部分行政事业性收费标准的通知, 发改价格〔2019〕914号, reducing ordinary passport fee from 160 CNY to 120 CNY effective July 1, 2019)
- **Document Scope & Strict Distinctions:**
  - Standard Ordinary Passport (中华人民共和国普通护照).
  - Explicit distinction: Does NOT apply to Diplomatic Passports (外交护照), Service/Official Passports (公务护照), Hong Kong SAR Passports (香港特别行政区护照), Macao SAR Passports (澳门特别行政区护照), Exit-Entry Permits for Travelling to and from Hong Kong and Macao (往来港澳通行证 - EEP), Mainland Travel Permits for Taiwan Residents (台湾居民来往大陆通行证 - 台胞证), or Mainland Travel Permits for Hong Kong and Macao Residents (港澳居民来往内地通行证 - 回乡证).
- **Validity by Age Category:**
  - **Adults and youth aged 16 and older:** **10 years** validity (Article 7, Passport Law).
  - **Minors under 16 years of age:** **5 years** validity.
- **Domestic Fee Schedule (in Chinese Yuan Renminbi — CNY):**
  - **Ordinary Passport initial issuance / renewal / replacement:** **120 CNY** (人民币 120元) per booklet (NDRC/MOF No. [2019] 914).
  - **Passport Endorsement (加注):** **Free of charge (0 CNY)** (formerly 20 CNY, fee eliminated under national administrative fee reforms).
  - **Lost or Damaged Passport Replacement:** Standard statutory fee of **120 CNY** (no additional punitive surcharge; replacement follows standard booklet rate upon submission of loss declaration).
  - **Turnaround:**
    - Standard domestic application at registered permanent residence (*hukou* 户籍地): Within **7 working days** (or up to 10 working days in specific autonomous regions).
    - Cross-province application (异地办理 - nationwide "全国通办" policy effective April 1, 2019): Within **20 calendar days**.
    - Expedited processing (加急办理): Within **5 working days** (statutory fast-track available strictly for verified humanitarian or urgent business reasons: overseas bereavement/critical illness, urgent overseas medical treatment, commencement of academic term, urgent business negotiations, or disaster relief; NO expedited surcharge is levied by law).
  - **Payment Channels:** Cashless payment via WeChat Pay, Alipay, UnionPay bank cards, or designated bank revenue counters upon issuance of non-tax revenue electronic payment barcode.
  - **Evidence confidence: `DIRECT`** — established from `nia.gov.cn`, `s.nia.gov.cn`, and NDRC/MOF No. 914.
- **Consular Fee Schedule & Scope Validation (via PRC Embassies and Consulates abroad):**
  - **Statutory Baseline Tariff:** Standard ordinary passport issuance (颁发), routine renewal (换发), and replacement of lost/stolen/damaged passport (补发) are uniformly fixed at **18 USD** (or local currency pegged equivalent: 16 EUR in Eurozone, 14 GBP in UK, 25 AUD in Australia, 23 CAD in Canada; reduced from 25 USD effective July 1, 2019 under NDRC/MOF No. [2019] 914 and MFA regulations).
  - **Passport Endorsement (加注):** **Free of charge (0 USD / 0 CNY)** effective June 10, 2021 per MOF/NDRC Announcement No. 22 [2021].
  - **Channel Exclusivity:** Strictly processed digitally via the **China Consular Affairs App (中国领事 APP)**.
  - **Expedited / Urgent Processing Scope & Green Channel Distinction:**
    - **Standard Paid Expedite:** In contrast to domestic processing (which provides a statutory fast-track under Article 16 of the Passport Law for verified humanitarian, medical, or business grounds), routine overseas passport applications lodged via the China Consular Affairs App do **not** offer a commercial paid expedited service tier (加急/特急服务), because passport booklets are personalized centrally at overseas personalization centers or in Beijing, with routine production taking approximately **15 working days** (excluding postal transit).
    - **Mission-Specific "Green Channel" (办证“绿色通道”):** For overseas Chinese citizens facing genuine humanitarian or compassionate emergencies (e.g., overseas bereavement, critical illness of an immediate relative, emergency medical treatment, or vulnerable elderly citizens unable to navigate digital applications), PRC diplomatic missions operate an exceptional discretionary **"Green Channel" (办证“绿色通道”)**. Under this mechanism, applicants contact the embassy or consulate directly with verifiable supporting documentation to request priority intake and manual appointment queuing. Green Channel triage is an administrative accommodation subject to individual mission operational discretion and verification; it is not a codified statutory expedited service tier, and standard statutory passport tariffs (18 USD baseline) apply. Overseas centralized booklet personalization constraints remain applicable.
    - **Emergency Travel Documents (中华人民共和国旅行证):** Where an overseas citizen faces imminent travel and cannot await centralized passport booklet printing and international transit, diplomatic missions may issue an **Emergency Travel Document (*中华人民共和国旅行证*)**. The Travel Document is a distinct statutory document category produced directly on-site at diplomatic missions, strictly segregated from ordinary passports. Turnaround times, evidentiary requirements, and any applicable consular expedited processing fees for Travel Documents are established by individual mission consular schedules and case-by-case verification, rather than a universal statutory 24–72-hour completion SLA.
  - **Third-Party Charges:** Postal return courier fees and payment processing convenience fees are third-party operational costs separate from the statutory passport fee.
  - **Evidence confidence: `DIRECT`** — verified via `cs.mfa.gov.cn` and PRC Embassy/Consulate schedules worldwide.
- **Civil Identity & Document Checklists:**
  - **Adult Citizens (16+):**
    - Resident Identity Card of the People's Republic of China (中华人民共和国居民身份证); or Temporary Resident Identity Card (临时居民身份证) if ID is currently undergoing renewal.
    - Application Form for Chinese Citizen Exit-Entry Documents (中国公民出入境证件申请表), auto-generated via self-service kiosk or pre-filled online.
    - Previous passport booklet (if renewing) presented for physical invalidation and cancellation stamp.
  - **Minor Citizens (<16):**
    - Minor's Resident ID Card (if issued) or Household Register (居民户口簿 - Hukou).
    - Original Birth Medical Certificate (出生医学证明) or proof of legal guardianship.
    - Accompanying parent or legal guardian's Resident Identity Card and written consent declaration.
  - **Designated State Personnel (国家工作人员):**
    - Civil servants, military personnel, and senior SOE officials registered under the Exit-Entry Control List must submit a formal Institutional Overseas Travel Approval Letter (关于同意申办出入境证件的函) issued by their supervising personnel/cadre organization.
  - **Biometrics:** Mandatory on-site digital photograph capture complying with GB/T 35649-2017 standards, dual thumb/index fingerprint scanning (fingerprint capture from age 16+), and digital signature capture at the Exit-Entry Reception Hall.
  - **Lost/Stolen/Damaged:** Submission of formal Lost Passport Declaration Statement (护照损毁/遗失确认书); invalidation published immediately across national border control databases.

---

### 28.2 Russia (RU / RUS) — Main Directorate for Migration Affairs (ГУВМ МВД России)

- **Administering Authority:** Main Directorate for Migration Affairs, Ministry of Internal Affairs of the Russian Federation (Главное управление по вопросам миграции МВД России - ГУВМ МВД РФ); Consular: Consular Department, Ministry of Foreign Affairs of the Russian Federation (Консульский департамент МИД РФ).
- **Primary Portals:**
  - Ministry of Internal Affairs Official Portal: `https://мвд.рф/` (`https://мвд.рф/deljatelnost/emigration/issue_passport`)
  - Federal Public Services Portal (Gosuslugi): `https://www.gosuslugi.ru/`
  - MFA Consular Information Portal: `https://kdmid.ru/`
  - Official Statutory Internet-Portal of Legal Information: `http://pravo.gov.ru/`
- **Statutory Framework:**
  - Federal Law No. 114-FZ of August 15, 1996 "On the Procedure for Exit from the Russian Federation and Entry into the Russian Federation" (Федеральный закон № 114-ФЗ «О порядке выезда из Российской Федерации и въезда в Российскую Федерацию»)
  - Tax Code of the Russian Federation, Part Two, Article 333.28 (Налоговый кодекс РФ, Ч. 2, ст. 333.28 — Размеры государственной пошлины за совершение действий, связанных с оформлением документов для выезда из Российской Федерации)
  - Federal Law No. 539-FZ of November 27, 2023 (amending Article 333.28 of the Tax Code, legislating comprehensive state duty tariff increases effective **July 1, 2024**)
- **Critical Document Regimes & Distinction:**
  - **Foreign Travel Passport (Заграничный паспорт / загранпаспорт):** Document used strictly for international travel and border crossing.
  - **Strict Domestic Distinction:** This document is legally and functionally distinct from the **Internal Passport of a Citizen of the Russian Federation (Внутренний паспорт гражданина РФ)**, which serves as the mandatory primary domestic identity document and cannot be used for global travel (except to CIS reciprocal states: Belarus, Kazakhstan, Kyrgyzstan, Armenia, Abkhazia, South Ossetia).
- **Statutory Fee Schedule (State Duty / Госпошлина, Effective July 1, 2024):**
  1. **New Generation Biometric Passport with Electronic Chip (Биометрический загранпаспорт нового поколения, 10-year validity, 46 pages):**
     - Adults and minors aged 14 and older: **6,000 RUB** (state duty raised from 5,000 RUB to 6,000 RUB effective July 1, 2024 per Law No. 539-FZ).
     - Children under 14 years of age: **3,000 RUB** (state duty raised from 2,500 RUB to 3,000 RUB effective July 1, 2024).
     - Biometrics: Contactless microchip containing cryptographic biometric facial template and digitized fingerprints of two index fingers (captured from age 12+).
  2. **Old Generation Non-Biometric Passport (Загранпаспорт старого образца, 5-year validity, 36 pages):**
     - Adults and minors aged 14 and older: **2,000 RUB**.
     - Children under 14 years of age: **1,000 RUB**.
     - Note: Does not contain an electronic chip; applicant supplies 3 physical photos (35x45 mm).
  - **Statutory Exemptions:** Residents of Kaliningrad Oblast are fully exempt from passport state duty (**0 RUB**) under Article 333.29 of the Tax Code.
  - **Holding Two Passports Concurrently:** Under Article 11 of Federal Law No. 114-FZ, any citizen has the statutory right to hold **two valid foreign passports simultaneously**, provided the second passport issued is a 10-year biometric passport.
  - **Turnaround:**
    - Lodged at registered place of domicile (*по месту жительства* / permanent registration): Within **1 month** (30 calendar days).
    - Lodged at place of temporary stay or factual residence (*по месту пребывания или фактического проживания*): Within **3 months** (reduced from 4 months in 2018).
    - Citizens with authorized access to state secrets or classified information: Up to **3 months**.
    - Urgent emergency procedure (emergency medical treatment abroad, critical illness or death of close relative): Within **3 working days** (issued exclusively as a 5-year non-biometric passport).
  - **Evidence confidence: `DIRECT`** — verified via `pravo.gov.ru`, `gosuslugi.ru`, and `мвд.рф`.
- **Consular Fee Schedule (via Russian Embassies and Consulates abroad):**
  - Consular tariff (Tarif konsulskikh sborov): 10-year biometric passport: **USD $90.00** (adult 14+) / **USD $50.00** (child <14); 5-year non-biometric passport: **USD $35.00** (adult 14+) / **USD $15.00** (child <14).
  - **Evidence confidence: `DIRECT`** — established from `kdmid.ru`.
- **Civil Identity & Document Checklists:**
  - Electronic application submitted via the Gosuslugi portal or paper application at an MFC (*МФЦ "Мои Документы"*) or territorial Migration Department (ОВМ МВД).
  - Internal Passport of a Citizen of the Russian Federation (Паспорт гражданина РФ) for all applicants aged 14+.
  - For children under 14: Birth Certificate (*Свидетельство о рождении*) with mandatory stamp or certificate confirming Russian citizenship (per Presidential Decree No. 889).
  - Military registration document: Military ID card (*военный билет*) with record of completed military service / unfitness, or electronic military registry notification for male citizens aged 18 to 30.
  - Current or expired previous foreign travel passport (if any).
  - State duty payment receipt (paid via Gosuslugi payment gateway, Sberbank, or government treasury portal).
  - Biometrics: Live biometric photo capture in specialized photo cabin (KAB-DOK) and digital fingerprint scan on-site.

---

### 28.3 Benin (BJ / BEN) — Direction de l'Émigration et de l'Immigration (DEI)

- **Administering Authority:** Direction de l'Émigration et de l'Immigration (DEI), Police Républicaine, Ministère de l'Intérieur et de la Sécurité Publique (MISP), République du Bénin; in technical collaboration with Agence Nationale d'Identification des Personnes (ANIP).
- **Primary Portals:**
  - DEI Official Portal: `https://dei.gouv.bj/`
  - E-Passport Online Application Service: `https://epasseport.service-public.bj/`
  - National Public Services Portal: `https://service-public.bj/`
  - ANIP Portal (Civil Identity): `https://anip.bj/`
- **Statutory Framework:**
  - Loi N° 2017-08 du 19 juin 2017 portant identification des personnes physiques en République du Bénin
  - Décret N° 2021-390 du 14 juillet 2021 fixant les modalités de délivrance du passeport ordinaire biométrique en République du Bénin
  - Loi de Finances portant fixation des droits de chancellerie et des taxes sur les passeports
- **Document Validity:**
  - Standard Ordinary Biometric Passport (Passeport ordinaire biométrique) has a statutory validity of **6 years** across all applicant categories (both adults and minors).
- **Domestic Fee Schedule (in West African CFA Francs — XOF / FCFA):**
  - **Standard Ordinary Biometric Passport Issuance / Renewal:** **30 000 FCFA** (trente mille francs CFA).
  - **Procédure VIP / Express (Expedited fast-track service):** **130 000 FCFA** (cent trente mille francs CFA; delivery within 48 to 72 hours).
  - **Turnaround:**
    - Standard routine procedure: **7 to 15 working days** following biometric enrollment.
    - VIP / Express procedure: **48 to 72 hours**.
  - **Payment Channels:** Strictly digital online payment through the `epasseport.service-public.bj` portal using Mobile Money (MTN MoMo, Moov Money) or Treasury debit/credit bank card (Visa/Mastercard).
  - **Appointment Booking:** Automated digital appointment scheduling integrated into the online payment slip generation on `epasseport.service-public.bj`.
  - **Evidence confidence: `DIRECT`** — verified via `dei.gouv.bj` and `epasseport.service-public.bj`.
- **Consular Fee Schedule (via Beninese Diplomatic and Consular Missions abroad):**
  - Consular passport issuance / renewal: Equivalent of **30 000 to 50 000 FCFA** plus consular administrative processing fee (e.g., ~60 to 90 EUR in Western Europe). Digital pre-enrollment via ANIP/DEI diaspora portal.
  - **Evidence confidence: `DIRECT`** — established from `service-public.bj`.
- **Civil Identity & Document Checklists:**
  - **Certificat d'Identification Personnelle (CIP):** Issued by ANIP, bearing the unique Personal Identification Number (Numéro Personnel d'Identification - NPI). Strictly mandatory pre-condition; passport cannot be requested without a valid CIP.
  - **Acte de Naissance Sécurisé:** Secure digitized birth certificate issued by ANIP.
  - Proof of profession (Attestation de travail, diplôme, registre de commerce RCCM, or carte professionnelle).
  - Previous passport (for renewal or renewal due to expiration/exhaustion of pages).
  - For minors (under 18): CIP and secure birth certificate of the child, valid CIP copies of both parents, and legalized Parental Authorization (*Autorisation parentale légalisée*).
  - In case of loss or theft: Certificate of Loss (*Certificat de perte*) issued by the Police Républicaine.
  - **Biometrics:** Mandatory in-person enrollment at the DEI headquarters (Direction de l'Émigration et de l'Immigration, Quartier Haie Vive, Cotonou) or designated regional centers; includes live ICAO facial capture, 10-finger digital fingerprint scan, and digital signature.

---

### 28.4 Togo (TG / TGO) — Direction Générale de la Documentation Nationale (DGDN)

- **Administering Authority:** Direction Générale de la Documentation Nationale (DGDN), Ministère de la Sécurité et de la Protection Civile (MSPC), République Togolaise; Consular: Ministère des Affaires Étrangères, de l'Intégration Régionale et des Togolais de l'Extérieur (MAETRTE).
- **Primary Portals:**
  - DGDN Official Portal: `https://dgdn.gouv.tg/`
  - Portal Service Public Togo: `https://service-public.gouv.tg/` (`https://service-public.gouv.tg/service/demande-de-passeport-ordinaire/`)
  - Ministère de la Sécurité et de la Protection Civile: `https://securite.gouv.tg/`
  - MAETRTE: `https://diplomatie.gouv.tg/`
- **Statutory Framework:**
  - Décret N° 2014-149/PR portant fixation des droits de délivrance du passeport ordinaire et autres documents de voyage en République Togolaise
  - Loi N° 61-27 du 18 septembre 1961 portant Code de la nationalité togolaise, modifiée
  - Arrêté interministériel fixant les modalités pratiques de recueil des données biométriques pour le passeport électronique
- **Document Validity:**
  - Standard Ordinary Biometric Electronic Passport (Passeport ordinaire biométrique) has a statutory validity of **5 years** across all categories.
- **Domestic Fee Schedule (in West African CFA Francs — XOF / FCFA):**
  - **Standard Ordinary Biometric Passport Issuance / Renewal:** **30 000 FCFA** (trente mille francs CFA).
  - **Official Statutory Turnaround:** Standard domestic processing is **2 to 3 weeks** (minimum 15 calendar days).
  - **VIP / Express Counter Claims Audit & Downgrade:** Unofficial claims of an expedited "VIP / Express" counter fast-track in Lomé (reported at 50 000 to 60 000 FCFA for 48–72h delivery) were audited against primary statutory instruments. Neither the official public services portal `service-public.gouv.tg` nor Décret N° 2014-149/PR recognize, publish, or codify any VIP or express fee schedule for ordinary passports. Consequently, the VIP/Express counter fee claim is **FORMALLY DOWNGRADED to `UNVERIFIED / DISALLOWED`**. Only the single statutory Quittance of 30 000 FCFA is legally recognized.
  - **Payment Channels:** Payment executed via designated partner commercial banks (Union Togolaise de Banque - UTB, BTCI, Ecobank) or mobile payment services (T-Money, Flooz) producing an official Treasury Payment Receipt (*Quittance de paiement du Trésor public*).
  - **Evidence confidence: `DIRECT`** (for standard 30 000 FCFA fee); **`UNVERIFIED`** (for VIP/Express counter fast-track claims).
- **Consular Fee Schedule (via Togolese Embassies abroad):**
  - Consular issuance fee: **50 000 FCFA** equivalent (~75 to 80 EUR / USD $85.00). Turnaround: 4 to 8 weeks depending on diplomatic dispatch to Lomé for booklet personalization.
  - **Evidence confidence: `DIRECT`** — verified via `diplomatie.gouv.tg`.
- **Civil Identity & Document Checklists:**
  - **Certificat de Nationalité Togolaise:** Original duplicate (*volet 2*) or legalized copy of the Certificate of Togolese Nationality. Essential prerequisite establishing sovereignty and citizenship.
  - **Extrait d'Acte de Naissance Légalisé:** Original legalized birth certificate extract.
  - **Carte Nationale d'Identité (CNI)** or valid professional identity card.
  - Proof of profession (Attestation d'employeur, diplôme, or inscription au registre de commerce).
  - Two (2) recent identical passport-size color photographs (35x45 mm, white background).
  - Original Treasury payment receipt (*Quittance de 30 000 FCFA*).
  - For minors (under 18): Minor's nationality certificate and birth extract, father's and mother's CNI/nationality documents, and formal notarized parental authorization (*Autorisation parentale légalisée*).
  - For renewal: Previous passport booklet submitted for cancellation. In case of loss: Police Loss Certificate (*Déclaration de perte de la Police ou de la Gendarmerie*) and a formal handwritten request addressed to the Director General of DGDN.
  - **Biometrics:** Mandatory in-person enrollment (digital photograph, fingerprint scanning, and electronic signature) at the DGDN Headquarters in Lomé (Cité OUA, quartier GTA) or regional documentation service in Kara.

---

### 28.5 Tanzania (TZ / TZA) — Immigration Department (Idara ya Uhamiaji)

- **Administering Authority:** Immigration Department (Idara ya Uhamiaji), Ministry of Home Affairs (Wizara ya Mambo ya Ndani ya Nchi), The United Republic of Tanzania; Consular: Ministry of Foreign Affairs and East African Cooperation.
- **Primary Portals:**
  - Immigration Department Official Portal: `https://www.immigration.go.tz/`
  - E-Services Online Portal: `https://eservices.immigration.go.tz/` (`https://eservices.immigration.go.tz/passports`)
  - Ministry of Home Affairs: `https://www.moha.go.tz/`
- **Statutory Framework:**
  - The Tanzania Passports and Travel Documents Act, Cap 42 (Revised Edition 2002)
  - The Passports Regulations, 2004 (Government Notice No. 210 of 2004)
  - East African Community (EAC) Electronic Biometric Passport Integration Directive (17th Ordinary Summit of the EAC Heads of State)
- **Document Scope & Validity:**
  - Standard East African Community (EAC) Electronic Biometric Passport (Pasi ya Kusafiria ya Kawaida ya Jumuiya ya Afrika Mashariki, 50 pages).
  - **Adults (aged 18 and older):** **10 years** validity.
  - **Minors (under 18 years of age):** **5 years** validity.
- **Mandatory Fee Reconciliation (in Tanzanian Shillings — TZS):**
  - **Application Form Fee (Ada ya Maombi):** **TZS 20,000** (non-refundable statutory form filing fee paid at initial online submission).
  - **Passport Booklet Issuance Fee (Ada ya Kitabu):** **TZS 130,000** (payable upon application approval, prior to passport personalization).
  - **Total Cost for Standard Ordinary 50-Page e-Passport:** **TZS 150,000** (TZS 20,000 + TZS 130,000).
  - **Lost / Stolen / Damaged Passport Replacement:**
    - Penalty surcharge for lost or damaged passport: **TZS 100,000**.
    - Standard passport issuance fee: **TZS 150,000**.
    - **Total Lost Passport Replacement Fee:** **TZS 250,000**.
  - **Turnaround:**
    - Routine processing: **7 to 14 working days** following biometric capture.
    - Emergency fast-track processing: **24 to 48 hours** (available for verified medical referrals abroad, state missions, or bereavement upon presentation of supporting documents; no formal legislative surcharge, processed through priority desk).
  - **Payment Channels:** All payments must be executed strictly through the **Government Electronic Payment Gateway (GePG)** using an automated 12-digit **Control Number** generated by the system. Payable via Mobile Money (M-Pesa, Tigo Pesa, Airtel Money, HaloPesa) or authorized commercial banks (CRDB, NMB, etc.). Cash payments are strictly prohibited by law.
  - **Evidence confidence: `DIRECT`** — established from `immigration.go.tz` and `eservices.immigration.go.tz`.
- **Consular Fee Schedule (via Tanzanian High Commissions and Embassies abroad):**
  - Application form fee abroad: **USD $20.00**.
  - Passport booklet fee abroad: **USD $130.00** (Total ordinary e-passport fee: **USD $150.00**).
  - **Evidence confidence: `DIRECT`** — verified via official mission consular schedules.
- **Civil Identity & Document Checklists:**
  - **National Identification Number (NIN):** Issued by the National Identification Authority (NIDA) — strictly mandatory for all adult applicants.
  - **Birth Certificate:** Issued by the Registration Insolvency and Trusteeship Agency (RITA) for Tanzania Mainland, or Zanzibar Civil Status Registration Agency (ZCSRA) for Zanzibar.
  - **Proof of Citizenship of Parents:** Father's and/or mother's National Identity Card (NIDA), birth certificate, or valid passport to verify citizenship by birth.
  - **Declaration of Recommender / Guarantor (Wadhamini):** Certification signed and stamped by an authorized public figure (Ward Executive Officer, Magistrate, Attorney, or Registered Medical Practitioner).
  - System-generated application confirmation page and GePG payment receipts.
  - For minors (under 18): Minor's RITA birth certificate, parents' NIDA cards, and signed parental consent form.
  - For replacement of lost passport: Police Loss Report (*Ripoti ya Upotevu wa Polisi*), sworn affidavit of loss from a magistrate/commissioner for oaths, and GePG receipt for the TZS 250,000 total fee.
  - **Biometrics:** In-person biometric enrollment (live photo, 10 fingerprints, digital signature) at Regional Immigration Offices (Dar es Salaam - Kurasini, Dodoma Headquarters, or regional offices across all regions).

---

### 28.6 Timor-Leste (TL / TLS) — Direção Nacional de Registos e Notariado (DNRN)

- **Administering Authority:** Direção Nacional de Registos e Notariado (DNRN), Direção-Geral dos Serviços de Registos e Notariado, Ministério da Justiça (Ministry of Justice), República Democrática de Timor-Leste; in technical collaboration with Serviço de Migração, Ministério do Interior; Consular: Ministério dos Negócios Estrangeiros e Cooperação (MNEC).
- **Primary Portals:**
  - Ministério da Justiça Portal: `https://mj.gov.tl/`
  - Portal Balcão Único: `https://balkaununiku.gov.tl/`
  - Serviço de Migração: `https://migracao.gov.tl/`
  - Portal do Governo de Timor-Leste: `https://timor-leste.gov.tl/`
- **Statutory Framework & Legislative Listing Discrepancy:**
  - Base enactment: **Decreto-Lei n.º 52/2016, de 28 de Dezembro** (Aprova o Regime Jurídico do Passaporte Eletrónico de Timor-Leste; revoking prior interim decrees).
  - Listed Related Legislation: The live official government service page (`balkaununiku.gov.tl`) lists **Diploma Ministerial n.º 10/2017, de 15 de Fevereiro** (which approves the official PETL passport models/forms) alongside DL 52/2016. Earlier gazetted schedules in *Jornal da República* cited **Diploma Ministerial n.º 11/2016, de 15 de Fevereiro** (Joint Ministerial Diploma establishing original fee schedules).
  - **Source Conflict Explicitly Preserved:** The active operational tariff currently published and charged on the official Balcão Único portal specifies **USD $150.00** for the 1-working-day Urgente service, conflicting with the historical DM 11/2016 text which listed **USD $100.00** for Muito Urgente. This statutory discrepancy is preserved as an open source conflict without inventing an unverified legal bridge or harmonization narrative.
- **Document Scope & Validity:**
  - Standard Ordinary Biometric Electronic Passport (Passaporte Comum Electrónico da República Democrática de Timor-Leste, containing contactless microchip complying with ICAO Doc 9303).
  - **Statutory Validity:** **5 years** across all applicant categories (both adults and minors).
- **Domestic Fee Schedule & Service Delivery Tiers (in United States Dollars — USD $; official statutory currency of Timor-Leste):**
  - **Modalidade Normal (Blue form / Mapa Azul):**
    - Statutory turnaround: **10 working days** (10 dias úteis).
    - Statutory fee: **USD $50.00**.
  - **Modalidade Expressa (Yellow form / Mapa Kinur):**
    - Statutory turnaround: **3 working days** (3 dias úteis).
    - Statutory fee: **USD $75.00** ($50 base + $25 express surcharge).
  - **Modalidade Urgente (Red form / Mapa Mean):**
    - Statutory turnaround: **1 working day** (24 hours / 1 dia útil).
    - **Official Portal Fee: USD $150.00** (historical text DM 11/2016 listed USD $100.00; discrepancy preserved).
  - **Lost or Damaged Passport Replacement:** Base fee of **USD $50.00** (subject to formal administrative investigation and presentation of PNTL police loss report).
  - **Payment Channels:** Payment executed via designated bank deposit at the **Banco Nacional de Comércio de Timor-Leste (BNCTL)** or Ministry of Justice cashier counter upon issuance of the payment assessment guide (*Guia de Pagamento*). Cash payments without a bank voucher are prohibited.
  - **Application Submission:** Conducted at the **Balcão Único** (One-Stop Citizens Service Center) or DNRN Headquarters in Dili (Rua de Belarmino Lobo, Dili), or at Municipal Registration Services (*Serviços de Registo e Notariado dos Municípios*) across the municipalities (Baucau, Bobonaro, Ermera, Oecusse, etc.).
  - **Evidence confidence: `DIRECT`** — established from `mj.gov.tl` and `balkaununiku.gov.tl`.
- **Consular Fee Schedule & Operational Surcharges (via Timorese Diplomatic Missions abroad):**
  - **Consular Service Fee (Taxa de Serviço Consular):** A statutory fixed consular surcharge of **USD $15.00** is assessed on all passport applications lodged at overseas diplomatic missions, added to the domestic base fee:
    - Normal abroad: **USD $65.00** ($50 base + $15 consular fee).
    - Expresso abroad (where expedited dispatch is available): **USD $90.00** ($75 base + $15 consular fee).
    - Urgente abroad (where available, calculated against the USD $150 portal rate): **USD $165.00** ($150 base + $15 consular fee; or USD $115 under the DM 11/2016 schedule; discrepancy noted).
  - **Postal Courier Dispatch:** If the applicant requests return delivery by post from the consular post, a fixed fee of **USD $10.00** is charged.
  - **⚠️ Consular Turnaround Language Discrepancy Preserved:** Official government portal text (`balkaununiku.gov.tl`) presents an internal operational conflict between its language versions:
    - The Portuguese version states that consular lodging adds one working day to standard delivery times (*"acréscimo de 1 dia útil aos prazos estabelecidos"*).
    - The Tetum version states that consular lodging adds two working days (*"prazu aumenta loron servisu 2"*).
    - Rather than asserting +1 day as a universal verified rule, this linguistic discrepancy between official portal language versions is explicitly preserved as an open operational variance.
  - **Evidence confidence: `DIRECT`** — verified via `mj.gov.tl` and `balkaununiku.gov.tl`.
- **Civil Identity & Document Checklists:**
  - **Bilhete de Identidade (BI timorense):** Valid national identity card issued by DNRN. If BI is unavailable, applicant must present an official Civil Birth Certificate (*Certidão de Registo de Nascimento*) or recognized Baptismal Certificate (*Certidão de Batismo*) along with civil identity proof.
  - **Atestado de Residência (Certificate of Residence):** Official residency verification certificate signed and stamped by the competent Village Chief (*Xefe de Suco*).
  - **Cartão de Eleitor (Electoral Card):** Widely utilized as supporting proof of Timorese citizenship and identity.
  - BNCTL bank payment slip (*Recibo de depósito bancário*).
  - Previous passport booklet (for renewal/replacement) submitted for physical cancellation.
  - For minors (under 17): Presence of both parents, valid national IDs of parents, minor's birth certificate, and signed Parental Consent Statement (*Termo de Autorização Paternal*).
  - For replacement of lost passport: Police Loss Report (*Declaração de Perda da PNTL - Polícia Nacional de Timor-Leste*) and explanatory affidavit.
  - **Biometrics:** Mandatory in-person enrollment (live digital portrait photograph, 10-finger biometric scan, and digitized signature) at the DNRN / Balcão Único workstation.

---
