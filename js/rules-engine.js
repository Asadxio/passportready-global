/**
 * PassportReady Rules Engine
 * Evaluates applicant preparation against verified official country rule packs or international baseline standards.
 * Designed with transparent status tiers: Verified Rule Pack vs. Awaiting Official Research.
 */

const AUTHORITATIVE_OFFICIAL_DOMAINS = Object.freeze({
  IN: Object.freeze(['passportindia.gov.in']),
  US: Object.freeze(['travel.state.gov', 'state.gov']),
  GB: Object.freeze(['gov.uk']),
  CA: Object.freeze(['canada.ca']),
  AU: Object.freeze(['passports.gov.au']),
  PK: Object.freeze(['dgip.gov.pk']),
  BD: Object.freeze(['epassport.gov.bd']),
  DE: Object.freeze(['auswaertiges-amt.de', 'bmi.bund.de']),
  AE: Object.freeze(['icp.gov.ae', 'mofa.gov.ae']),
  PH: Object.freeze(['passport.gov.ph', 'dfa.gov.ph']),
  FR: Object.freeze(['ants.gouv.fr', 'service-public.fr', 'impots.gouv.fr']),
  SA: Object.freeze(['absher.sa', 'mofa.gov.sa']),
  JP: Object.freeze(['mofa.go.jp']),
  MX: Object.freeze(['gob.mx', 'sre.gob.mx']),
  BR: Object.freeze(['gov.br']),
  ZA: Object.freeze(['dha.gov.za', 'dirco.gov.za']),
  NG: Object.freeze(['immigration.gov.ng']),
  IT: Object.freeze(['poliziadistato.it', 'esteri.it']),
  IE: Object.freeze(['dfa.ie']),
  KE: Object.freeze(['immigration.go.ke', 'ecitizen.go.ke']),
  MY: Object.freeze(['imi.gov.my']),
  NP: Object.freeze(['nepalpassport.gov.np']),
  NZ: Object.freeze(['passports.govt.nz']),
  SG: Object.freeze(['ica.gov.sg', 'mfa.gov.sg']),
  ES: Object.freeze(['mir.es', 'citapreviadnie.es', 'exteriores.gob.es']),
  LK: Object.freeze(['immigration.gov.lk']),
  ID: Object.freeze(['imigrasi.go.id'])
});

// Centralized Approved Homepage Exceptions Registry (Independent of Rule Packs)
// Each exception must specify country_code, exact approved URL, permitted claims,
// review provenance, review date, expiry policy, and substantive rationale.
const APPROVED_HOMEPAGE_EXCEPTIONS = Object.freeze([
  Object.freeze({
    country_code: 'AU',
    url: 'https://www.passports.gov.au/',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit or immediate review upon official portal restructuring; valid through 2027-10-19',
    rationale: 'Primary official Australian Passport Office portal dedicated entry point containing statutory checklists, fees, and appointment guidance.'
  }),
  Object.freeze({
    country_code: 'BD',
    url: 'https://www.epassport.gov.bd/landing',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit or immediate review upon official portal restructuring; valid through 2027-10-19',
    rationale: 'Official Bangladesh government e-passport landing portal containing statutory requirements and fee payment gateways.'
  }),
  Object.freeze({
    country_code: 'PH',
    url: 'https://passport.gov.ph/',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit or immediate review upon official portal restructuring; valid through 2027-10-19',
    rationale: 'Official Philippine DFA passport appointment and documentary requirements portal.'
  }),
  Object.freeze({
    country_code: 'FR',
    url: 'https://passeport.ants.gouv.fr/',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit or immediate review upon official portal restructuring; valid through 2027-10-19',
    rationale: 'Official French ANTS national biometric passport portal for statutory requirements and fees.'
  }),
  Object.freeze({
    country_code: 'SA',
    url: 'https://www.absher.sa/',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit or immediate review upon official portal restructuring; valid through 2027-10-19',
    rationale: 'Official Saudi Ministry of Interior digital platform for citizen passport applications and statutory fees.'
  }),
  Object.freeze({
    country_code: 'NG',
    url: 'https://passport.immigration.gov.ng/',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit or immediate review upon official portal restructuring; valid through 2027-10-19',
    rationale: 'Official Nigeria Immigration Service portal for passport registration and statutory fee payment.'
  }),
  Object.freeze({
    country_code: 'NP',
    url: 'https://nepalpassport.gov.np/',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit or immediate review upon official portal restructuring; valid through 2027-10-19',
    rationale: 'Official Nepal Department of Passports portal for statutory requirements and tariffs.'
  }),
  Object.freeze({
    country_code: 'NZ',
    url: 'https://www.passports.govt.nz/',
    permitted_claims: Object.freeze(['documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit or immediate review upon official portal restructuring; valid through 2027-10-19',
    rationale: 'Official New Zealand Department of Internal Affairs passport portal for requirements and procedures (fees segregated to /passport-costs).'
  }),
  Object.freeze({
    country_code: 'ES',
    url: 'https://www.dgp.mir.es/',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit or immediate review upon official portal restructuring; valid through 2027-10-19',
    rationale: 'Official Dirección General de la Policía portal for passport issuance fees and appointment procedures.'
  })
]);

// Centralized Approved Insecure HTTP Exceptions Registry
// HTTP links are universally rejected for official evidence unless explicitly approved herein.
const APPROVED_HTTP_EXCEPTIONS = Object.freeze([
  Object.freeze({
    country_code: 'LK',
    url: 'http://www.immigration.gov.lk/legacy-fee-bulletin',
    permitted_claims: Object.freeze(['fee']),
    reviewed_by: 'PassportReady Statutory Compliance Board',
    review_date: '2026-10-20',
    expiry_policy: 'Quarterly review pending national portal TLS migration; expires 2027-01-20',
    rationale: 'Audited statutory gazette mirror maintained on legacy HTTP server for domestic archival fees.'
  })
]);

// Centralized Approved Claim Sources Registry
// Specific officially audited endpoints mapped to their validated statutory claim types.
const APPROVED_CLAIM_SOURCES = Object.freeze([
  Object.freeze({
    country_code: 'GB',
    url: 'https://www.gov.uk/apply-renew-passport',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'HM Passport Office official service portal for standard UK passport applications, countersignatory rules, and statutory fees.'
  }),
  Object.freeze({
    country_code: 'US',
    url: 'https://travel.state.gov/content/travel/en/passports/need-passport/apply-in-person.html',
    permitted_claims: Object.freeze(['documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'U.S. Department of State official guidance for Form DS-11 in-person applications, mandatory citizenship evidence, and execution procedures.'
  }),
  Object.freeze({
    country_code: 'DE',
    url: 'https://www.auswaertiges-amt.de/en/visa-service/buergerservice/pass-und-personalausweis',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'Auswärtiges Amt official portal for German biometric passport issuance, Passgesetz requirements, and consular fee tariffs.'
  }),
  Object.freeze({
    country_code: 'PK',
    url: 'https://dgip.gov.pk/passport/ordinary-passport.php',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'Directorate General of Immigration & Passports official ordinary passport application guidelines, NADRA CNIC requirements, and fee schedules.'
  }),
  Object.freeze({
    country_code: 'ZA',
    url: 'https://www.dha.gov.za/index.php/civic-services/travel-documents',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'Department of Home Affairs official travel documents portal detailing South African passport application procedures, unabridged birth certificates, and fees.'
  }),
  Object.freeze({
    country_code: 'IE',
    url: 'https://www.dfa.ie/passports/passport-fees/',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'Department of Foreign Affairs Ireland official passport fees and application guidelines for standard and urgent appointment services.'
  }),
  Object.freeze({
    country_code: 'KE',
    url: 'https://immigration.go.ke/type-and-fees/',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'Kenya Directorate of Immigration Services official fee schedule and booklet application requirements across series A, B, and C.'
  }),
  Object.freeze({
    country_code: 'JP',
    url: 'https://www.mofa.go.jp/mofaj/toko/passport/index.html',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'Japanese Ministry of Foreign Affairs official passport portal index detailing post-July 2026 statutory fee schedule and application requirements.'
  }),
  Object.freeze({
    country_code: 'MY',
    url: 'https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'Jabatan Imigresen Malaysia official portal for Malaysian International Passport statutory fee tiers and lodgement procedures.'
  }),
  Object.freeze({
    country_code: 'SG',
    url: 'https://www.ica.gov.sg/enter-transit-depart/more-information/singapore-citizenship/singapore-passport',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'ICA Singapore official passport application guidance detailing statutory fees, photo rules, and collection procedures.'
  }),
  Object.freeze({
    country_code: 'IT',
    url: 'https://www.poliziadistato.it/articolo/1087',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'Polizia di Stato official article 1087 detailing standard passport issuance requirements, electronic stamp (contrassegno telematico), and postal booklet payment.'
  }),
  Object.freeze({
    country_code: 'MX',
    url: 'https://www.gob.mx/pasaporte',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'Gobierno de México official portal for SRE passport application, documentation, and fee payment instructions.'
  }),
  Object.freeze({
    country_code: 'BR',
    url: 'https://www.gov.br/pf/pt-br/assuntos/passaporte',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'Polícia Federal official portal for Brazilian passport issuance, GRU payment slip, and appointment scheduling.'
  }),
  Object.freeze({
    country_code: 'ES',
    url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Pasaportes-y-otros-documentos.aspx',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'Ministerio de Asuntos Exteriores consular portal for Spanish passport and travel document requirements.'
  }),
  Object.freeze({
    country_code: 'LK',
    url: 'https://www.immigration.gov.lk/pages_e.php?id=8',
    permitted_claims: Object.freeze(['fee', 'documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'Department of Immigration & Emigration Sri Lanka official passport issuance guidelines, normal and urgent one-day fee schedules.'
  }),
  Object.freeze({
    country_code: 'ID',
    url: 'https://www.imigrasi.go.id/id/permohonan-paspor-baru-untuk-masyarakat-secara-umum/',
    permitted_claims: Object.freeze(['documents', 'eligibility', 'steps']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'Direktorat Jenderal Imigrasi official general passport application procedure and required civil registration documents.'
  }),
  Object.freeze({
    country_code: 'ID',
    url: 'https://www.imigrasi.go.id/id/biaya-paspor/',
    permitted_claims: Object.freeze(['fee']),
    reviewed_by: 'PassportReady Senior Research Analyst',
    review_date: '2026-10-19',
    expiry_policy: 'Annual audit; expires 2027-10-19',
    rationale: 'Direktorat Jenderal Imigrasi official statutory passport fee schedule (PP No. 28/2019) including standard and express same-day tariffs.'
  })
]);

class PassportRulesEngine {
  static get AUTHORITATIVE_OFFICIAL_DOMAINS() {
    // Return deeply frozen defensive copy to prevent runtime mutation
    const copy = {};
    for (const [k, v] of Object.entries(AUTHORITATIVE_OFFICIAL_DOMAINS)) {
      copy[k] = Object.freeze([...v]);
    }
    return Object.freeze(copy);
  }

  static get APPROVED_HOMEPAGE_EXCEPTIONS() {
    return APPROVED_HOMEPAGE_EXCEPTIONS;
  }

  static get APPROVED_HTTP_EXCEPTIONS() {
    return APPROVED_HTTP_EXCEPTIONS;
  }

  static get APPROVED_CLAIM_SOURCES() {
    return APPROVED_CLAIM_SOURCES;
  }

  static normalizeClaim(c) {
    if (typeof c !== 'string') return '';
    const lower = c.trim().toLowerCase();
    if (lower === 'all') return ''; // Reject wildcard 'all'
    const ALLOWED_EXPLICIT_CLAIMS = new Set([
      'fee', 'fees', 'statutory_fee_schedule',
      'documents', 'mandatory_citizenship_evidence',
      'eligibility', 'citizenship_eligibility',
      'steps', 'application_procedure',
      'urgent', 'expedited',
      'consular', 'overseas',
      'emergency', 'callout',
      'navigation', 'general'
    ]);
    if (!ALLOWED_EXPLICIT_CLAIMS.has(lower)) return '';
    if (lower === 'fees' || lower === 'statutory_fee_schedule') return 'fee';
    if (lower === 'mandatory_citizenship_evidence') return 'documents';
    if (lower === 'citizenship_eligibility') return 'eligibility';
    if (lower === 'application_procedure') return 'steps';
    if (lower === 'expedited') return 'urgent';
    if (lower === 'overseas') return 'consular';
    if (lower === 'callout') return 'emergency';
    return lower;
  }

  constructor(rulePacks = {}) {
    this.rulePacks = rulePacks;
  }

  formatServiceName(service) {
    const map = {
      first_passport: 'First-Time / Fresh Passport',
      renewal_reissue: 'Renewal / Reissue (Expiring or Full)',
      lost_stolen: 'Lost or Stolen Passport',
      damaged: 'Damaged / Mutilated Passport',
      name_correction: 'Correction / Name or Detail Change',
      minor_child: 'Child / Minor Passport',
      urgent_expedited: 'Urgent / Expedited Processing',
      emergency_travel: 'Emergency Travel Certificate (ETC)'
    };
    return map[service] || service;
  }

  formatUrgencyName(urgency) {
    const map = {
      standard: 'Standard Processing',
      urgent: 'Urgent / Expedited Processing',
      emergency: 'Emergency Processing'
    };
    return map[urgency] || urgency;
  }

  formatChannelName(location) {
    return location === 'abroad' ? 'Consular / Overseas Application' : 'Domestic Application';
  }

  static getTrustedOfficialDomains(countryCode, pack) {
    const cCode = countryCode || pack?.country_code;
    const authoritative = (cCode && AUTHORITATIVE_OFFICIAL_DOMAINS[cCode]) ? AUTHORITATIVE_OFFICIAL_DOMAINS[cCode] : [];

    // The central registry is the sole authority for approved country hostnames.
    // Pack-declared domains in pack.trusted_domains CANNOT authorize new unapproved hostnames.
    // Only pack-declared domains that match or are genuine dot-rooted subdomains of an approved central registry domain are preserved.
    if (!pack || !Array.isArray(pack.trusted_domains)) {
      return authoritative;
    }

    const validatedFromPack = pack.trusted_domains.filter(domain => {
      if (typeof domain !== 'string') return false;
      const clean = domain.trim().toLowerCase();
      return authoritative.some(auth => clean === auth || clean.endsWith('.' + auth));
    });

    return Array.from(new Set([...authoritative, ...validatedFromPack].map(d => d.trim().toLowerCase()).filter(Boolean)));
  }

  static isTrustedOfficialDomain(hostname, countryCode, pack) {
    if (!hostname || typeof hostname !== 'string') return false;
    const cleanHost = hostname.trim().toLowerCase();
    const trustedDomains = PassportRulesEngine.getTrustedOfficialDomains(countryCode, pack);
    if (!Array.isArray(trustedDomains) || trustedDomains.length === 0) return false;

    return trustedDomains.some(trusted => {
      const cleanTrusted = trusted.trim().toLowerCase();
      return cleanHost === cleanTrusted || cleanHost.endsWith('.' + cleanTrusted);
    });
  }

  static isTrustedOfficialUrl(url, countryCode, pack, sourceObj, claimType) {
    if (typeof url !== 'string') return false;
    const trimmed = url.trim();
    if (!trimmed.startsWith('https://') && !trimmed.startsWith('http://')) return false;

    const cCode = countryCode || pack?.country_code;

    // Reject user credentials in URLs by default (e.g. user:pass@host)
    const afterScheme = trimmed.replace(/^https?:\/\//i, '');
    const firstSlash = afterScheme.indexOf('/');
    const authority = firstSlash >= 0 ? afterScheme.slice(0, firstSlash) : afterScheme;
    if (authority.includes('@')) {
      return false;
    }

    // Port validation: Reject non-standard ports by default
    let hostname = authority;
    if (typeof URL !== 'undefined') {
      try {
        const parsed = new URL(trimmed);
        if (parsed.username || parsed.password) return false;
        if (parsed.port) {
          if (parsed.protocol === 'https:' && parsed.port !== '443') return false;
          if (parsed.protocol === 'http:' && parsed.port !== '80') return false;
        }
        hostname = (parsed.hostname || '').toLowerCase();
      } catch {
        return false;
      }
    } else {
      const portSplit = authority.split(':');
      if (portSplit.length > 1) {
        const port = portSplit[1];
        if (trimmed.startsWith('https://') && port !== '443') return false;
        if (trimmed.startsWith('http://') && port !== '80') return false;
        hostname = portSplit[0];
      }
    }

    // Insecure HTTP handling:
    // Reject HTTP links universally for official evidence by default.
    // If an actual legacy official source demonstrably requires HTTP, it MUST be covered
    // by a centralized approved exception in APPROVED_HTTP_EXCEPTIONS bound to its exact URL,
    // country, and claim scope. Source-object metadata (allow_insecure_http: true / review_rationale)
    // CANNOT self-authorize an unapproved HTTP URL.
    if (trimmed.startsWith('http://')) {
      const cleanTarget = trimmed.replace(/\/+$/, '').toLowerCase();
      const normClaim = claimType ? PassportRulesEngine.normalizeClaim(claimType) : null;
      const approvedHttp = APPROVED_HTTP_EXCEPTIONS.find(entry => {
        const entryUrl = entry.url.replace(/\/+$/, '').toLowerCase();
        if (entryUrl !== cleanTarget) return false;
        if (cCode && entry.country_code && entry.country_code !== cCode) return false;
        if (normClaim && Array.isArray(entry.permitted_claims) && !entry.permitted_claims.includes(normClaim)) {
          return false;
        }
        return true;
      });

      if (!approvedHttp) {
        return false;
      }
    }

    const host = hostname || PassportRulesEngine.extractHostnameFromUrl(trimmed);
    return PassportRulesEngine.isTrustedOfficialDomain(host, countryCode, pack);
  }

  static isGenericHomepageUrl(url) {
    if (typeof url !== 'string') return false;
    try {
      let pathname = '';
      if (typeof URL !== 'undefined') {
        const parsed = new URL(url);
        pathname = parsed.pathname;
      } else {
        const afterProto = url.startsWith('https://') ? url.slice(8) : url.slice(7);
        const slashIdx = afterProto.indexOf('/');
        pathname = slashIdx >= 0 ? afterProto.slice(slashIdx) : '/';
      }
      const cleanPath = pathname.replace(/\/+$/, '').toLowerCase();
      return cleanPath === '' || cleanPath === '/index.html' || cleanPath === '/index.htm' || cleanPath === '/index.php' || cleanPath === '/en' || cleanPath === '/landing' || cleanPath === '/home';
    } catch {
      return false;
    }
  }

  static extractHostnameFromUrl(url) {
    if (typeof url !== 'string') return null;
    const trimmed = url.trim();
    if (!trimmed.startsWith('https://') && !trimmed.startsWith('http://')) return null;
    if (typeof URL !== 'undefined') {
      try {
        const parsed = new URL(trimmed);
        return (parsed.hostname || '').toLowerCase();
      } catch {
        return null;
      }
    }
    const afterProto = trimmed.startsWith('https://') ? trimmed.slice(8) : trimmed.slice(7);
    const hostPart = afterProto.split('/')[0].split('?')[0].split('#')[0].split(':')[0];
    return hostPart ? hostPart.toLowerCase() : null;
  }

  getTrustedOfficialDomains(countryCode, pack) {
    return PassportRulesEngine.getTrustedOfficialDomains(countryCode, pack);
  }

  extractHostnameFromUrl(url) {
    return PassportRulesEngine.extractHostnameFromUrl(url);
  }

  isTrustedOfficialDomain(hostname, countryCode, pack) {
    return PassportRulesEngine.isTrustedOfficialDomain(hostname, countryCode, pack);
  }

  isTrustedOfficialUrl(url, countryCode, pack, sourceObj, claimType) {
    return PassportRulesEngine.isTrustedOfficialUrl(url, countryCode, pack, sourceObj, claimType);
  }

  isGenericHomepageUrl(url) {
    return PassportRulesEngine.isGenericHomepageUrl(url);
  }

  static isClaimRelevantSource(source, claimType, countryCode, pack) {
    if (!source || !claimType) return false;

    // 1. Extract URL and normalize
    const rawUrl = typeof source === 'string'
      ? source
      : (source.url || source.official_source_url || source.source_url || '');
    const cleanUrl = typeof rawUrl === 'string' ? rawUrl.trim() : '';
    if (!cleanUrl) return false;

    const cCode = countryCode || pack?.country_code || (typeof source === 'object' ? (source.country_code || source.countryCode) : null);
    if (cCode && !PassportRulesEngine.isTrustedOfficialUrl(cleanUrl, cCode, pack, source, claimType)) {
      return false;
    }

    // 2. Normalize target claim
    const targetClaim = PassportRulesEngine.normalizeClaim(claimType) || claimType;
    if (targetClaim === 'navigation' || targetClaim === 'general') {
      return true;
    }

    // 3. Extract path and title for content analysis
    const pathPart = cleanUrl.replace(/^https?:\/\/[^\/]+/i, '');
    const titlePart = typeof source === 'object' && source !== null
      ? ((source.page_title || '') + ' ' + (source.publisher || '') + ' ' + (source.title || ''))
      : '';
    const lowerPath = pathPart.toLowerCase();
    const lowerTitle = titlePart.toLowerCase();
    const fullText = (lowerPath + ' ' + lowerTitle).trim();

    // 4. Negative Filter: Reject official but unrelated auxiliary/administrative endpoints
    const UNRELATED_ADMIN_PATTERNS = [
      '/privacy', 'privacypolicy', '/terms', 'terms-of-use', 'terms-and-conditions',
      'disclaimer', '/sitemap', 'accessibility', '/feedback', 'contact-us', 'contact_us',
      'organization-chart', 'carta-organisasi', 'organisasi'
    ];
    const UNRELATED_SERVICE_PATTERNS = [
      'driving-licence', 'driving-license', 'licencia-conducir', 'traffic-penalties',
      'highway-code', 'motor-vehicle', 'weather', 'tourism', 'business-registration',
      'company-registration', 'tenders', 'procurement', 'career', 'jobs', 'press-release',
      'travel-warnings', 'travel-advisories'
    ];
    const isVisaOnly = lowerPath.includes('visa') && !['pass', 'passport', 'paspor', 'pasaporte', 'passaporto', 'reisepass'].some(k => fullText.includes(k));

    const isUnrelated = UNRELATED_ADMIN_PATTERNS.some(p => lowerPath.includes(p) || lowerTitle.includes(p)) ||
                        UNRELATED_SERVICE_PATTERNS.some(p => lowerPath.includes(p) || lowerTitle.includes(p)) ||
                        isVisaOnly;

    if (isUnrelated) {
      return false;
    }

    // 5. Generic Homepage Handling:
    // A generic homepage can ONLY substantiate specific statutory claims if it is
    // explicitly registered in the centralized APPROVED_HOMEPAGE_EXCEPTIONS registry.
    // Source-object metadata (homepage_claim_exception: true / exception_rationale)
    // CANNOT self-authorize an unreviewed homepage.
    const isGenHome = PassportRulesEngine.isGenericHomepageUrl(cleanUrl);
    const cleanUrlNorm = cleanUrl.replace(/\/+$/, '').toLowerCase();

    if (isGenHome) {
      const approvedHome = APPROVED_HOMEPAGE_EXCEPTIONS.find(entry => {
        const entryUrlNorm = entry.url.replace(/\/+$/, '').toLowerCase();
        if (entryUrlNorm !== cleanUrlNorm) return false;
        if (cCode && entry.country_code && entry.country_code !== cCode) return false;
        return true;
      });

      if (approvedHome) {
        return Array.isArray(approvedHome.permitted_claims) && approvedHome.permitted_claims.includes(targetClaim);
      }
      return false;
    }

    // 6. Centralized Approved Claim Sources:
    // Formally audited endpoints substantiate their approved claim scope.
    const approvedClaim = APPROVED_CLAIM_SOURCES.find(entry => {
      const entryUrlNorm = entry.url.replace(/\/+$/, '').toLowerCase();
      if (entryUrlNorm !== cleanUrlNorm) return false;
      if (cCode && entry.country_code && entry.country_code !== cCode) return false;
      return true;
    });
    if (approvedClaim) {
      return Array.isArray(approvedClaim.permitted_claims) && approvedClaim.permitted_claims.includes(targetClaim);
    }

    // 7. Explicit Source Metadata Verification:
    // Pack-declared metadata can narrow scope, but cannot fabricate relevance on an uncorroborated endpoint.
    if (typeof source === 'object' && source !== null) {
      if (source.is_generic_homepage === true || source.claim_scope === 'portal_navigation' || source.claim_scope === 'navigation') {
        return false;
      }

      if (Array.isArray(source.claims)) {
        const normClaims = source.claims.map(PassportRulesEngine.normalizeClaim).filter(Boolean);
        if (normClaims.length > 0 && !normClaims.includes(targetClaim)) {
          return false;
        }
        if (source.claims.length > 0 && normClaims.length === 0) return false;
      }

      if (typeof source.claim_scope === 'string') {
        const normScope = PassportRulesEngine.normalizeClaim(source.claim_scope);
        if (normScope && normScope !== targetClaim) {
          return false;
        }
        if (source.claim_scope.trim().toLowerCase() === 'all') return false;
      }
    }

    // 8. Corroborating Keyword Relevance in Non-Homepage Path or Title:
    switch (targetClaim) {
      case 'fee': {
        const feeKeywords = ['fee', 'cost', 'charge', 'surcharge', 'tariff', 'price', 'biaya', 'droit', 'tasa', 'lfd', 'tatkaal', 'expedit', 'callout', 'penalt', 'fine', 'biometrischer-reisepass', 'reisepass', 'passaporte', 'passaporto', 'absher', 'travel-documents', 'pass-und-personalausweis', 'apply-renew', 'canadian-passports', 'ordinary-passport', 'epassport', 'issue-passport', 'tarif', 'frais', 'kos', 'type-and-fees', 'feeschedule', 'passport-costs', 'biaya-paspor', 'singapore-passport'];
        return feeKeywords.some(kw => fullText.includes(kw));
      }
      case 'documents': {
        const docKeywords = ['document', 'requirement', 'checklist', 'syarat', 'permohonan', 'need-passport', 'how-to', 'apply', 'vosdroits', 'birth', 'citizenship', 'adult', 'child', 'minor', 'renew', 'reissue', 'dokumen', 'unterlagen', 'pieces', 'documentadvisor', 'supporting-documents', 'acta', 'dni', 'aadhaar', 'certificat'];
        return docKeywords.some(kw => fullText.includes(kw));
      }
      case 'eligibility': {
        const eligKeywords = ['eligib', 'who-can-apply', 'who-is-eligible', 'qualif', 'citizen', 'national', 'warganegara', 'syarat', 'kriteria', 'conditions', 'requisitos', 'nationalite', 'staatsangehorig', 'criteria', 'norms', 'citizenshipnorms'];
        return eligKeywords.some(kw => fullText.includes(kw));
      }
      case 'steps': {
        const stepKeywords = ['step', 'how-to', 'process', 'procedure', 'tata-cara', 'cara', 'apply', 'aliran', 'panduan', 'etapes', 'demarches', 'ablauf', 'paso', 'solicitud', 'appointment', 'lodg', 'submission', 'procformsubmit', 'online-application', 'how-apply'];
        return stepKeywords.some(kw => fullText.includes(kw));
      }
      case 'urgent': {
        const urgentKeywords = ['urgent', 'tatkaal', 'expedit', 'express', 'fast-track', 'fast_track', 'one-day', 'one_day', 'same-day', 'same_day', 'get-fast'];
        return urgentKeywords.some(kw => fullText.includes(kw));
      }
      case 'consular': {
        const consularKeywords = ['consul', 'embassy', 'diplomatic', 'overseas', 'diaspora', 'high commission', 'abroad', 'seccion-consular', 'consular-menu'];
        return consularKeywords.some(kw => fullText.includes(kw));
      }
      case 'emergency': {
        const emergKeywords = ['emergency', 'emergencia', 'callout', 'call-out', 'after-hours', 'after_hours', 'art. 20', 'artículo 20', 'lfd', 'tipo e', 'salvoconducto'];
        return emergKeywords.some(kw => fullText.includes(kw));
      }
      default:
        return false;
    }
  }

  isClaimRelevantSource(source, claimType, countryCode, pack) {
    return PassportRulesEngine.isClaimRelevantSource(source, claimType, countryCode, pack);
  }

  isValidSourceUrl(url) {
    if (typeof url !== 'string') return false;
    const trimmed = url.trim();
    if (!trimmed.startsWith('https://') && !trimmed.startsWith('http://')) return false;
    if (typeof URL !== 'undefined') {
      try {
        const parsed = new URL(trimmed);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
      } catch {
        return false;
      }
    }
    // Safe fallback if URL constructor is omitted from sandbox scope
    if (trimmed.length < 10) return false;
    if (trimmed.includes(' ') || trimmed.includes('<') || trimmed.includes('>') || trimmed.includes('"')) return false;
    const afterProto = trimmed.startsWith('https://') ? trimmed.slice(8) : trimmed.slice(7);
    return afterProto.includes('.');
  }

  extractUrlFromSource(s) {
    if (!s) return null;
    if (typeof s === 'string') {
      return this.isValidSourceUrl(s) ? s.trim() : null;
    }
    if (typeof s === 'object') {
      const candidate = s.url || s.official_source_url || s.source_url;
      return this.isValidSourceUrl(candidate) ? candidate.trim() : null;
    }
    return null;
  }

  collectServiceSources(pack, serviceObj, countryCode, claimType) {
    const list = [];
    const cCode = countryCode || pack?.country_code;

    const checkAndAdd = (s) => {
      const url = this.extractUrlFromSource(s);
      if (!url) return;
      if (cCode && !this.isTrustedOfficialUrl(url, cCode, pack, s, claimType)) return;
      if (claimType && !this.isClaimRelevantSource(s, claimType, cCode, pack)) return;
      if (!claimType && !this.isClaimRelevantSource(s, 'general', cCode, pack)) return;
      list.push(url);
    };

    if (serviceObj && Array.isArray(serviceObj.sources)) {
      serviceObj.sources.forEach(checkAndAdd);
    }
    if (pack && Array.isArray(pack.sources)) {
      pack.sources.forEach(checkAndAdd);
    }
    if ((!claimType || claimType === 'documents') && serviceObj?.documents && Array.isArray(serviceObj.documents)) {
      serviceObj.documents.forEach(checkAndAdd);
    }
    if ((!claimType || claimType === 'steps') && serviceObj?.steps && Array.isArray(serviceObj.steps)) {
      serviceObj.steps.forEach(checkAndAdd);
    }
    if ((!claimType || claimType === 'fee') && serviceObj?.fees?.fee_records && Array.isArray(serviceObj.fees.fee_records)) {
      serviceObj.fees.fee_records.forEach(checkAndAdd);
    }
    return Array.from(new Set(list));
  }

  collectUrgentSources(pack, serviceObj, countryCode) {
    const list = [];
    const cCode = countryCode || pack?.country_code;
    const urgentKeywords = ['urgent', 'tatkaal', 'expedit', 'express', 'fast-track', 'fast_track', 'one-day', 'one_day', 'same-day', 'same_day'];

    const matchesUrgent = (text) => {
      if (!text || typeof text !== 'string') return false;
      const lower = text.toLowerCase();
      return urgentKeywords.some(kw => lower.includes(kw));
    };

    const checkAndAdd = (s, extraText = '') => {
      const url = this.extractUrlFromSource(s);
      if (!url) return;
      if (cCode && !this.isTrustedOfficialUrl(url, cCode, pack, s, 'urgent')) return;
      const title = typeof s === 'object' ? (s.page_title || s.publisher || s.title || '') : '';
      const hasRelevance = this.isClaimRelevantSource(s, 'urgent', cCode, pack) ||
        matchesUrgent(url) || matchesUrgent(title) || matchesUrgent(extraText);
      if (hasRelevance && !this.isClaimRelevantSource(s, 'general', cCode, pack)) {
        return;
      }
      if (hasRelevance) {
        list.push(url);
      }
    };

    if (Array.isArray(serviceObj?.sources)) serviceObj.sources.forEach(s => checkAndAdd(s));
    if (Array.isArray(pack?.sources)) pack.sources.forEach(s => checkAndAdd(s));

    const feeRecords = serviceObj?.fees?.fee_records || pack?.services?.first_passport?.fees?.fee_records;
    if (Array.isArray(feeRecords)) {
      feeRecords.forEach(r => {
        if (!r) return;
        const channel = r.application_channel || '';
        const cat = r.applicant_category || '';
        const cond = r.applicable_conditions || '';
        const disc = r.discount_eligibility || '';
        const isUrgent = matchesUrgent(channel) || matchesUrgent(cat) || matchesUrgent(cond) || matchesUrgent(disc) ||
          (typeof r.emergency_surcharge === 'number' && Number.isFinite(r.emergency_surcharge) && r.emergency_surcharge > 0);
        if (isUrgent) {
          checkAndAdd(r, channel + ' ' + cat);
        }
      });
    }

    const steps = serviceObj?.steps || pack?.services?.first_passport?.steps;
    if (Array.isArray(steps)) {
      steps.forEach(st => {
        const text = typeof st === 'string' ? st : (st?.step || st?.title || st?.description || '');
        if (matchesUrgent(text)) {
          checkAndAdd(st, text);
        }
      });
    }

    return Array.from(new Set(list));
  }

  collectConsularSources(pack, serviceObj, countryCode) {
    const list = [];
    const cCode = countryCode || pack?.country_code;
    const consularKeywords = ['consul', 'embassy', 'diplomatic', 'overseas', 'diaspora', 'high commission', 'abroad'];

    const matchesConsular = (text) => {
      if (!text || typeof text !== 'string') return false;
      const lower = text.toLowerCase();
      return consularKeywords.some(kw => lower.includes(kw));
    };

    const checkAndAdd = (s, extraText = '') => {
      const url = this.extractUrlFromSource(s);
      if (!url) return;
      if (cCode && !this.isTrustedOfficialUrl(url, cCode, pack, s, 'consular')) return;
      const title = typeof s === 'object' ? (s.page_title || s.publisher || s.title || '') : '';
      const hasRelevance = this.isClaimRelevantSource(s, 'consular', cCode, pack) ||
        matchesConsular(url) || matchesConsular(title) || matchesConsular(extraText);
      if (hasRelevance && !this.isClaimRelevantSource(s, 'general', cCode, pack)) {
        return;
      }
      if (hasRelevance) {
        list.push(url);
      }
    };

    if (Array.isArray(serviceObj?.sources)) serviceObj.sources.forEach(s => checkAndAdd(s));
    if (Array.isArray(pack?.sources)) pack.sources.forEach(s => checkAndAdd(s));

    if (Array.isArray(pack?.jurisdictions)) {
      pack.jurisdictions.forEach(j => {
        if (!j) return;
        const channel = j.application_channel || '';
        const name = j.name || '';
        if (channel === 'consular' || channel === 'overseas' || matchesConsular(name)) {
          checkAndAdd(j, name);
        }
      });
    }

    const feeRecords = serviceObj?.fees?.fee_records || pack?.services?.first_passport?.fees?.fee_records;
    if (Array.isArray(feeRecords)) {
      feeRecords.forEach(r => {
        if (!r) return;
        const channel = r.application_channel || '';
        const cat = r.applicant_category || '';
        if (matchesConsular(channel) || matchesConsular(cat)) {
          checkAndAdd(r, channel + ' ' + cat);
        }
      });
    }

    const steps = serviceObj?.steps || pack?.services?.first_passport?.steps;
    if (Array.isArray(steps)) {
      steps.forEach(st => {
        const text = typeof st === 'string' ? st : (st?.step || st?.title || st?.description || '');
        if (matchesConsular(text)) {
          checkAndAdd(st, text);
        }
      });
    }

    return Array.from(new Set(list));
  }

  collectEmergencySources(pack, serviceObj, countryCode) {
    const list = [];
    const cCode = countryCode || pack?.country_code;
    const emergKeywords = ['emergency', 'emergencia', 'callout', 'call-out', 'after-hours', 'after_hours', 'art. 20', 'artículo 20', 'lfd', 'tipo e', 'salvoconducto'];

    const matchesEmerg = (text) => {
      if (!text || typeof text !== 'string') return false;
      const lower = text.toLowerCase();
      return emergKeywords.some(kw => lower.includes(kw));
    };

    const checkAndAdd = (s, extraText = '') => {
      const url = this.extractUrlFromSource(s);
      if (!url) return;
      if (cCode && !this.isTrustedOfficialUrl(url, cCode, pack, s, 'emergency')) return;
      const title = typeof s === 'object' ? (s.page_title || s.publisher || s.title || '') : '';
      const hasRelevance = this.isClaimRelevantSource(s, 'emergency', cCode, pack) ||
        matchesEmerg(url) || matchesEmerg(title) || matchesEmerg(extraText);
      if (hasRelevance && !this.isClaimRelevantSource(s, 'general', cCode, pack)) {
        return;
      }
      if (hasRelevance) {
        list.push(url);
      }
    };

    if (Array.isArray(serviceObj?.sources)) serviceObj.sources.forEach(s => checkAndAdd(s));
    if (Array.isArray(pack?.sources)) pack.sources.forEach(s => checkAndAdd(s));

    const feeRecords = serviceObj?.fees?.fee_records || pack?.services?.first_passport?.fees?.fee_records;
    if (Array.isArray(feeRecords)) {
      feeRecords.forEach(r => {
        if (!r) return;
        const channel = r.application_channel || '';
        const cat = r.applicant_category || '';
        const cond = r.applicable_conditions || '';
        const isEmerg = (typeof r.emergency_surcharge === 'number' && Number.isFinite(r.emergency_surcharge) && r.emergency_surcharge > 0) ||
          matchesEmerg(channel) || matchesEmerg(cat) || matchesEmerg(cond);
        if (isEmerg) {
          checkAndAdd(r, channel + ' ' + cat + ' ' + cond);
        }
      });
    }

    // For NZ specifically: passports.govt.nz passport-costs covers After-Hours Callout Service
    if (countryCode === 'NZ') {
      const feesObj = serviceObj?.fees || pack?.services?.first_passport?.fees;
      if (feesObj?.after_hours_callout_service_nzd && typeof feesObj.after_hours_callout_service_nzd === 'object') {
        const allUrls = this.collectServiceSources(pack, serviceObj, countryCode);
        allUrls.forEach(u => {
          if (u.includes('passport-costs')) list.push(u);
        });
      }
    }

    return Array.from(new Set(list));
  }

  hasUrgentFeeEvidence(feesObj) {
    if (!feesObj || typeof feesObj !== 'object') return false;

    // Reject empty objects
    if (Object.keys(feesObj).length === 0) return false;

    // Tatkaal surcharge (strict numeric > 0)
    if (typeof feesObj.tatkaal_surcharge === 'number' && Number.isFinite(feesObj.tatkaal_surcharge) && feesObj.tatkaal_surcharge > 0) {
      return true;
    }

    // New Zealand urgent_service_nzd (object with numeric values > 0, no strings)
    if (feesObj.urgent_service_nzd && typeof feesObj.urgent_service_nzd === 'object') {
      const vals = Object.values(feesObj.urgent_service_nzd);
      if (vals.length > 0 && vals.some(v => typeof v === 'number' && Number.isFinite(v) && v > 0) && vals.every(v => typeof v !== 'string')) {
        return true;
      }
    }

    // Ireland urgent_appointment_service_eur (object with numeric values > 0, no strings)
    if (feesObj.urgent_appointment_service_eur && typeof feesObj.urgent_appointment_service_eur === 'object') {
      const vals = Object.values(feesObj.urgent_appointment_service_eur);
      if (vals.length > 0 && vals.some(v => typeof v === 'number' && Number.isFinite(v) && v > 0) && vals.every(v => typeof v !== 'string')) {
        return true;
      }
    }

    // Sri Lanka standard_domestic_lkr.all_countries_urgent_one_day
    if (feesObj.standard_domestic_lkr && typeof feesObj.standard_domestic_lkr === 'object') {
      const val = feesObj.standard_domestic_lkr.all_countries_urgent_one_day;
      if (typeof val === 'number' && Number.isFinite(val) && val > 0) return true;
    }

    // Indonesia express_same_day_surcharge
    if (typeof feesObj.express_same_day_surcharge === 'number' && Number.isFinite(feesObj.express_same_day_surcharge) && feesObj.express_same_day_surcharge > 0) {
      return true;
    }

    // Nepal standard_domestic_npr.urgent_34_pages_dop_kathmandu
    if (feesObj.standard_domestic_npr && typeof feesObj.standard_domestic_npr === 'object') {
      const val = feesObj.standard_domestic_npr.urgent_34_pages_dop_kathmandu;
      if (typeof val === 'number' && Number.isFinite(val) && val > 0) return true;
    }

    // US expedite_service_fee / expedited_service_usd
    if (typeof feesObj.expedite_service_fee === 'number' && Number.isFinite(feesObj.expedite_service_fee) && feesObj.expedite_service_fee > 0) {
      return true;
    }
    if (typeof feesObj.expedited_service_usd === 'number' && Number.isFinite(feesObj.expedited_service_usd) && feesObj.expedited_service_usd > 0) {
      return true;
    }

    // Mexico consular_overseas_usd.emergency_surcharge_schedule
    if (feesObj.consular_overseas_usd?.emergency_surcharge_schedule && typeof feesObj.consular_overseas_usd.emergency_surcharge_schedule === 'object') {
      const ess = feesObj.consular_overseas_usd.emergency_surcharge_schedule;
      const knownMxTiers = ['validity_1_year', 'validity_3_year', 'validity_6_year', 'validity_10_year'];
      const hasValidMx = knownMxTiers.some(t => {
        const tier = ess[t];
        if (!tier || typeof tier !== 'object') return false;
        return (typeof tier.total_payable === 'number' && Number.isFinite(tier.total_payable) && tier.total_payable > 0) ||
               (typeof tier.emergency_surcharge === 'number' && Number.isFinite(tier.emergency_surcharge) && tier.emergency_surcharge > 0);
      });
      if (hasValidMx) return true;
    }

    // Single numeric expedited properties across verified countries
    const singleExpeditedKeys = [
      'fast_track_1_week_adult',
      'urgent_pickup_surcharge',
      'priority_processing_surcharge',
      'urgent_36_pages_5_year',
      'fast_track_36_pages_5_year',
      'express_5_year_48_pages',
      'super_express_5_year',
      'express_surcharge',
      'expedited_processing',
      'urgent_emergency_surcharge'
    ];
    for (const k of singleExpeditedKeys) {
      const val = feesObj[k];
      if (typeof val === 'number' && Number.isFinite(val) && val > 0) return true;
    }

    // Fee records with positive emergency_surcharge or urgent channel with positive numeric amount
    if (Array.isArray(feesObj.fee_records)) {
      const hasUrgentRecord = feesObj.fee_records.some(r => {
        if (!r || typeof r !== 'object') return false;
        if (typeof r.emergency_surcharge === 'number' && Number.isFinite(r.emergency_surcharge) && r.emergency_surcharge > 0) return true;
        const channel = (r.application_channel || '').toLowerCase();
        const cat = (r.applicant_category || '').toLowerCase();
        if ((channel.includes('urgent') || channel.includes('express') || cat.includes('urgent') || cat.includes('express')) &&
            typeof r.amount === 'number' && Number.isFinite(r.amount) && r.amount > 0) {
          return true;
        }
        return false;
      });
      if (hasUrgentRecord) return true;
    }

    return false;
  }

  hasActualConsularFeeSchedule(feesObj) {
    if (!feesObj || typeof feesObj !== 'object') return false;

    // 1. consular_overseas_usd (Mexico / Nepal format)
    if (feesObj.consular_overseas_usd && typeof feesObj.consular_overseas_usd === 'object') {
      const cos = feesObj.consular_overseas_usd;
      if (cos.standard_validity && typeof cos.standard_validity === 'object') {
        const knownMx = ['validity_3_year', 'validity_6_year', 'validity_10_year'];
        const hasValidMx = knownMx.every(t => typeof cos.standard_validity[t] === 'number' && Number.isFinite(cos.standard_validity[t]) && cos.standard_validity[t] > 0);
        const hasNoStrings = Object.values(cos.standard_validity).every(v => typeof v !== 'string');
        if (hasValidMx && hasNoStrings) return true;
      }
      const knownNepal = ['standard_34_pages', 'standard_66_pages'];
      const hasValidNepal = knownNepal.every(t => typeof cos[t] === 'number' && Number.isFinite(cos[t]) && cos[t] > 0);
      const hasNoStringsNepal = Object.values(cos).every(v => typeof v !== 'string');
      if (hasValidNepal && hasNoStringsNepal) return true;
    }

    // 2. diaspora_overseas_usd (Nigeria format)
    if (feesObj.diaspora_overseas_usd && typeof feesObj.diaspora_overseas_usd === 'object') {
      const dos = feesObj.diaspora_overseas_usd;
      const knownDiaspora = ['booklet_32_pages_5_year', 'booklet_64_pages_10_year'];
      const hasValidDiaspora = knownDiaspora.every(k => typeof dos[k] === 'number' && Number.isFinite(dos[k]) && dos[k] > 0);
      const hasNoStrings = Object.values(dos).every(v => typeof v !== 'string');
      if (hasValidDiaspora && hasNoStrings) return true;
    }

    // 3. consular_overseas (Japan format)
    if (feesObj.consular_overseas && typeof feesObj.consular_overseas === 'object') {
      const jco = feesObj.consular_overseas;
      const knownJapan = ['adult_10_year', 'adult_5_year', 'minor_under_12'];
      const hasValidJapan = knownJapan.every(k => typeof jco[k] === 'number' && Number.isFinite(jco[k]) && jco[k] > 0);
      const hasNoStrings = Object.values(jco).every(v => typeof v !== 'string');
      if (hasValidJapan && hasNoStrings) return true;
    }

    // 4. standard_overseas_usd
    if (feesObj.standard_overseas_usd && typeof feesObj.standard_overseas_usd === 'object') {
      const sos = feesObj.standard_overseas_usd;
      const knownSos = ['adult_10_year', 'child_5_year'];
      const hasValidSos = knownSos.every(k => typeof sos[k] === 'number' && Number.isFinite(sos[k]) && sos[k] > 0);
      const hasNoStrings = Object.values(sos).every(v => typeof v !== 'string');
      if (hasValidSos && hasNoStrings) return true;
    }

    // 5. fee_records
    if (Array.isArray(feesObj.fee_records)) {
      const consularRecords = feesObj.fee_records.filter(r => {
        if (!r || typeof r !== 'object') return false;
        const chan = (r.application_channel || '').toLowerCase();
        const cat = (r.applicant_category || '').toLowerCase();
        const isConsular = chan.includes('consular') || chan.includes('overseas') || chan.includes('diaspora') || cat.includes('diaspora') || chan.includes('embassy');
        if (!isConsular) return false;
        if (typeof r.amount === 'string') return false;
        if (r.status === 'eligible_free' || r.discount_eligibility === 'exempt') return r.amount === 0;
        return typeof r.amount === 'number' && Number.isFinite(r.amount) && r.amount > 0;
      });
      if (consularRecords.length > 0) return true;
    }
    return false;
  }

  hasConsularGuidance(pack, serviceObj, countryCode) {
    if (!pack) return false;
    const cCode = countryCode || pack.country_code;
    const consularSources = this.collectConsularSources(pack, serviceObj, cCode);
    if (consularSources.length === 0) {
      return false;
    }

    const hasConsularJurisdiction = Array.isArray(pack.jurisdictions) && pack.jurisdictions.some(j => {
      if (!j) return false;
      if (j.application_channel === 'consular' || j.application_channel === 'embassy' || j.application_channel === 'overseas') return true;
      if (typeof j.name === 'string') {
        const n = j.name.toLowerCase();
        return n.includes('consul') || n.includes('embassy') || n.includes('diplomatic') || n.includes('high commission') || n.includes('overseas');
      }
      return false;
    });
    if (hasConsularJurisdiction) return true;

    const steps = (serviceObj?.steps || pack.services?.first_passport?.steps || []);
    const hasConsularSteps = Array.isArray(steps) && steps.some(st => {
      const text = typeof st === 'string' ? st : (st?.step || st?.title || st?.description || '');
      const lower = text.toLowerCase();
      return lower.includes('embassy') || lower.includes('consulate') || lower.includes('consular') || lower.includes('overseas');
    });
    if (hasConsularSteps) return true;

    return consularSources.length > 0;
  }

  determineBaseServiceCoverage(pack, countryCode, service) {
    const isVerifiedPack = !!(pack && (pack.rule_pack_status === 'verified' || pack.is_verified === true));
    const countryName = (pack && pack.country_name) || countryCode;

    if (!isVerifiedPack) {
      return {
        dimension: 'service',
        key: service,
        name: this.formatServiceName(service),
        status: 'awaiting_research',
        label: 'Awaiting Detailed Research',
        badgeClass: 'status-needs-research',
        isVerified: false,
        summary: `Dedicated service-level research for "${this.formatServiceName(service)}" in ${countryName} is not yet complete. Checklist relies on baseline international standards.`,
        supportedChecks: ['International baseline travel document preparation standards'],
        missingChecks: [
          'Country-specific document requirements and civil records',
          'Official statutory fee schedule and accepted payment channels',
          'Application lodging channels and authority appointment procedures'
        ],
        officialSourceUrl: pack ? pack.official_portal_url : null,
        rulePackKey: null,
        evidence: {
          hasSupportingEvidence: false,
          missingEvidence: ['country rule pack research']
        }
      };
    }

    switch (service) {
      case 'first_passport': {
        const serviceObj = pack.services && pack.services.first_passport;
        const sources = this.collectServiceSources(pack, serviceObj, countryCode);
        const feeSources = this.collectServiceSources(pack, serviceObj, countryCode, 'fee');
        const docSources = this.collectServiceSources(pack, serviceObj, countryCode, 'documents');
        const eligibilitySources = this.collectServiceSources(pack, serviceObj, countryCode, 'eligibility');
        const stepSources = this.collectServiceSources(pack, serviceObj, countryCode, 'steps');

        const hasEligibility = !!(Array.isArray(serviceObj?.eligibility) && serviceObj.eligibility.length > 0);
        const hasDocuments = !!(Array.isArray(serviceObj?.documents) && serviceObj.documents.length > 0);
        const hasFeesData = !!(serviceObj?.fees && typeof serviceObj.fees === 'object' && Object.keys(serviceObj.fees).length > 0);
        const hasSteps = !!(Array.isArray(serviceObj?.steps) && serviceObj.steps.length > 0);

        const hasEligibilityEvidence = !!(hasEligibility && eligibilitySources.length > 0);
        const hasDocumentsEvidence = !!(hasDocuments && docSources.length > 0);
        const hasFeesEvidence = !!(hasFeesData && feeSources.length > 0);
        const hasStepsEvidence = !!(hasSteps && stepSources.length > 0);

        const verifiedFields = [];
        if (hasEligibilityEvidence) verifiedFields.push('eligibility');
        if (hasDocumentsEvidence) verifiedFields.push('documents');
        if (hasFeesEvidence) verifiedFields.push('fees');
        if (hasStepsEvidence) verifiedFields.push('steps');

        const isFullyVerified = !!(
          serviceObj &&
          serviceObj.availability_status !== 'unavailable' &&
          hasEligibilityEvidence &&
          hasDocumentsEvidence &&
          hasFeesEvidence
        );

        if (isFullyVerified) {
          return {
            dimension: 'service',
            key: 'first_passport',
            name: this.formatServiceName('first_passport'),
            status: 'verified',
            label: 'Verified Statutory Rules',
            badgeClass: 'status-verified',
            isVerified: true,
            summary: `Fully verified country-specific first-time passport rules, mandatory citizenship evidence, and statutory fee schedules for ${countryName}.`,
            supportedChecks: [
              'Mandatory civil birth and citizenship proof requirements',
              'Official statutory fee schedule and payment channels',
              'Domestic and consular lodging jurisdiction guidance'
            ],
            missingChecks: [],
            officialSourceUrl: pack.official_portal_url,
            rulePackKey: 'first_passport',
            evidence: {
              hasSupportingEvidence: true,
              evidenceLevel: 'trusted_official',
              evidenceStatusLabel: 'Trusted Official Evidence Linked',
              sources,
              verifiedFields
            }
          };
        }

        // Required first_passport service object or evidence is missing in rule pack
        const missingEvidence = [];
        if (!serviceObj) missingEvidence.push('services.first_passport definition');
        if (!hasFeesEvidence) missingEvidence.push('statutory fee schedule source documentation');
        if (!hasDocumentsEvidence) missingEvidence.push('mandatory citizenship evidence checklist');
        if (sources.length === 0) missingEvidence.push('traceable official source documentation');

        const isPartial = !!(hasEligibilityEvidence || hasDocumentsEvidence || hasFeesEvidence);
        return {
          dimension: 'service',
          key: 'first_passport',
          name: this.formatServiceName('first_passport'),
          status: isPartial ? 'partial' : 'general_guidance',
          label: isPartial ? 'Partial Service Coverage' : 'General Preparation Guidance',
          badgeClass: isPartial ? 'status-linked' : 'status-needs-research',
          isVerified: false,
          summary: isPartial
            ? `The country pack for ${countryName} has verified partial evidence, but lacks comprehensive claim-level official evidence across all required fields (e.g. fees or documents).`
            : `The country pack for ${countryName} is marked verified, but required first-time passport service definitions or documentary fee evidence are missing. Baseline guidance applies.`,
          supportedChecks: isPartial
            ? ['Researched baseline travel document preparation standards']
            : ['Baseline international travel document preparation standards'],
          missingChecks: [
            'Verified first-time passport service object (eligibility and document checklist)',
            'Official statutory fee schedule and accepted payment channels'
          ],
          officialSourceUrl: pack.official_portal_url,
          rulePackKey: null,
          evidence: {
            hasSupportingEvidence: isPartial,
            isPartial,
            evidenceLevel: isPartial ? 'partial_confirmation' : (sources.length > 0 ? 'valid_syntax_incomplete_claim' : 'no_trusted_source'),
            evidenceStatusLabel: isPartial ? 'Partial Evidence Requiring Confirmation' : (sources.length > 0 ? 'Valid Source Reference · Incomplete Claim Evidence' : 'No Trusted Official Source'),
            sources: isPartial ? sources : [],
            verifiedFields,
            missingEvidence
          }
        };
      }

      case 'renewal_reissue': {
        const serviceObj = pack.services && pack.services.renewal_reissue;
        const sources = this.collectServiceSources(pack, serviceObj, countryCode);
        const hasValidServiceObj = !!(
          serviceObj &&
          serviceObj.availability_status !== 'unavailable' &&
          ((Array.isArray(serviceObj.documents) && serviceObj.documents.length > 0) ||
           (Array.isArray(serviceObj.eligibility) && serviceObj.eligibility.length > 0)) &&
          sources.length > 0
        );

        if (hasValidServiceObj) {
          const verifiedFields = [];
          if (Array.isArray(serviceObj.eligibility) && serviceObj.eligibility.length > 0) verifiedFields.push('eligibility');
          if (Array.isArray(serviceObj.documents) && serviceObj.documents.length > 0) verifiedFields.push('documents');
          if (serviceObj.fees && typeof serviceObj.fees === 'object' && Object.keys(serviceObj.fees).length > 0) verifiedFields.push('fees');
          if (Array.isArray(serviceObj.steps) && serviceObj.steps.length > 0) verifiedFields.push('steps');

          return {
            dimension: 'service',
            key: 'renewal_reissue',
            name: this.formatServiceName('renewal_reissue'),
            status: 'verified',
            label: 'Verified Statutory Rules',
            badgeClass: 'status-verified',
            isVerified: true,
            summary: `Fully verified country-specific renewal and reissue requirements for ${countryName}, including physical passport surrender and expiry threshold checks.`,
            supportedChecks: [
              'Existing passport physical cancellation and surrender rules',
              'Validity renewal conditions and expiry interval checks',
              'Standard renewal fee schedule'
            ],
            missingChecks: [],
            officialSourceUrl: pack.official_portal_url,
            rulePackKey: 'renewal_reissue',
            evidence: {
              hasSupportingEvidence: true,
              evidenceLevel: 'trusted_official',
              evidenceStatusLabel: 'Trusted Official Evidence Linked',
              sources,
              verifiedFields
            }
          };
        }
        return {
          dimension: 'service',
          key: 'renewal_reissue',
          name: this.formatServiceName('renewal_reissue'),
          status: 'general_guidance',
          label: 'General Preparation Guidance',
          badgeClass: 'status-needs-research',
          isVerified: false,
          summary: `Although ${countryName} has a verified first-time passport pack, dedicated renewal rules are not yet separately modeled in this rule pack.`,
          supportedChecks: ['General travel document renewal and cancellation standards'],
          missingChecks: [
            'Specific renewal application forms and eligibility thresholds',
            'Dedicated renewal fee schedule and processing timeframes'
          ],
          officialSourceUrl: pack.official_portal_url,
          rulePackKey: null,
          evidence: {
            hasSupportingEvidence: false,
            evidenceLevel: sources.length > 0 ? 'valid_syntax_incomplete_claim' : 'no_trusted_source',
            evidenceStatusLabel: sources.length > 0 ? 'Valid Source Reference · Incomplete Claim Evidence' : 'No Trusted Official Source',
            sources: [],
            missingEvidence: ['services.renewal_reissue definition', 'dedicated renewal document checklist', 'traceable official source documentation']
          }
        };
      }

      case 'lost_stolen': {
        const serviceObj = pack.services && pack.services.lost_stolen;
        const sources = this.collectServiceSources(pack, serviceObj, countryCode);
        const hasValidServiceObj = !!(
          serviceObj &&
          serviceObj.availability_status !== 'unavailable' &&
          ((Array.isArray(serviceObj.documents) && serviceObj.documents.length > 0) ||
           (Array.isArray(serviceObj.steps) && serviceObj.steps.length > 0) ||
           serviceObj.fees) &&
          sources.length > 0
        );

        if (hasValidServiceObj) {
          const verifiedFields = [];
          if (Array.isArray(serviceObj.eligibility) && serviceObj.eligibility.length > 0) verifiedFields.push('eligibility');
          if (Array.isArray(serviceObj.documents) && serviceObj.documents.length > 0) verifiedFields.push('documents');
          if (serviceObj.fees && typeof serviceObj.fees === 'object' && Object.keys(serviceObj.fees).length > 0) verifiedFields.push('replacement_penalties');
          if (Array.isArray(serviceObj.steps) && serviceObj.steps.length > 0) verifiedFields.push('steps');

          return {
            dimension: 'service',
            key: 'lost_stolen',
            name: this.formatServiceName('lost_stolen'),
            status: 'verified',
            label: 'Verified Statutory Rules',
            badgeClass: 'status-verified',
            isVerified: true,
            summary: `Fully verified country-specific lost/stolen passport replacement procedures for ${countryName}, including police reporting requirements and statutory replacement fee schedules.`,
            supportedChecks: [
              'Official police report / missing certificate requirements',
              'Statutory replacement / penalty fee schedules across loss frequencies',
              'Formal loss circumstance declaration protocols'
            ],
            missingChecks: [],
            officialSourceUrl: pack.official_portal_url,
            rulePackKey: 'lost_stolen',
            evidence: {
              hasSupportingEvidence: true,
              evidenceLevel: 'trusted_official',
              evidenceStatusLabel: 'Trusted Official Evidence Linked',
              sources,
              verifiedFields
            }
          };
        }

        const hasStatutoryNotice = ['US', 'PH'].includes(countryCode) && sources.length > 0;
        return {
          dimension: 'service',
          key: 'lost_stolen',
          name: this.formatServiceName('lost_stolen'),
          status: hasStatutoryNotice ? 'partial' : 'general_guidance',
          label: hasStatutoryNotice ? 'Partial Service Coverage' : 'General Preparation Guidance',
          badgeClass: hasStatutoryNotice ? 'status-linked' : 'status-needs-research',
          isVerified: false,
          summary: hasStatutoryNotice
            ? `Key statutory reporting requirements (such as Form DS-64 / Affidavit of Loss) are codified for ${countryName}, but dedicated replacement fee tables require direct verification.`
            : `Dedicated lost/stolen passport replacement rule packs are not yet codified for ${countryName}. Standard police reporting and identity theft mitigation guidance applies.`,
          supportedChecks: [
            'Mandatory police report and loss declaration advisories',
            'Identity fraud prevention safeguards'
          ],
          missingChecks: [
            'Country-specific replacement fee schedules and penalty tiers',
            'Official replacement application forms and investigation interview procedures'
          ],
          officialSourceUrl: pack.official_portal_url,
          rulePackKey: null,
          evidence: {
            hasSupportingEvidence: hasStatutoryNotice,
            isPartial: hasStatutoryNotice,
            evidenceLevel: hasStatutoryNotice ? 'partial_confirmation' : (sources.length > 0 ? 'valid_syntax_incomplete_claim' : 'no_trusted_source'),
            evidenceStatusLabel: hasStatutoryNotice ? 'Partial Evidence Requiring Confirmation' : (sources.length > 0 ? 'Valid Source Reference · Incomplete Claim Evidence' : 'No Trusted Official Source'),
            sources: hasStatutoryNotice ? sources : [],
            missingEvidence: hasStatutoryNotice ? ['dedicated replacement fee table', 'formal investigation workflow'] : ['statutory loss reporting procedures', 'official source documentation']
          }
        };
      }

      case 'damaged': {
        const serviceObj = pack.services && (pack.services.damaged || pack.services.lost_stolen || pack.services.first_passport);
        const feesObj = serviceObj?.fees || pack.services?.first_passport?.fees || {};
        const sources = this.collectServiceSources(pack, serviceObj, countryCode);
        const hasCodifiedPenalty = !!(
          sources.length > 0 &&
          (
            feesObj.lost_and_damaged_replacement_schedule ||
            feesObj.damaged_passport_fine ||
            feesObj.damaged_penalty_myr ||
            feesObj.replacement_penalties_myr ||
            feesObj.lost_passport_conditional_penalties_lkr ||
            (Array.isArray(feesObj.fee_records) && feesObj.fee_records.some(r => (r.applicant_category || '').toLowerCase().includes('mutilat') || (r.applicant_category || '').toLowerCase().includes('damag') || (r.applicable_conditions || '').toLowerCase().includes('mutilat') || (r.applicable_conditions || '').toLowerCase().includes('damag')))
          )
        );
        return {
          dimension: 'service',
          key: 'damaged',
          name: this.formatServiceName('damaged'),
          status: hasCodifiedPenalty ? 'partial' : 'general_guidance',
          label: hasCodifiedPenalty ? 'Partial Service Coverage' : 'General Preparation Guidance',
          badgeClass: hasCodifiedPenalty ? 'status-linked' : 'status-needs-research',
          isVerified: false,
          summary: hasCodifiedPenalty
            ? `Statutory mutilated/damaged passport fine schedules are verified for ${countryName}, but full damaged booklet replacement workflows require official confirmation.`
            : `Dedicated damaged passport rule packs are not yet codified for ${countryName}. General physical booklet inspection and surrender standards apply.`,
          supportedChecks: hasCodifiedPenalty
            ? [
                'Statutory damaged passport replacement fine and penalty schedule',
                'Physical booklet surrender and mutilation inspection requirements'
              ]
            : ['Physical booklet surrender and mutilation inspection requirements'],
          missingChecks: [
            'Dedicated damaged passport replacement application form',
            'Authority-specific physical damage threshold assessment criteria'
          ],
          officialSourceUrl: pack.official_portal_url,
          rulePackKey: null,
          evidence: {
            hasSupportingEvidence: hasCodifiedPenalty,
            isPartial: hasCodifiedPenalty,
            evidenceLevel: hasCodifiedPenalty ? 'partial_confirmation' : (sources.length > 0 ? 'valid_syntax_incomplete_claim' : 'no_trusted_source'),
            evidenceStatusLabel: hasCodifiedPenalty ? 'Partial Evidence Requiring Confirmation' : (sources.length > 0 ? 'Valid Source Reference · Incomplete Claim Evidence' : 'No Trusted Official Source'),
            sources: hasCodifiedPenalty ? sources : [],
            missingEvidence: hasCodifiedPenalty ? ['standalone damaged booklet replacement workflow'] : ['statutory damage penalty schedule', 'official source documentation']
          }
        };
      }

      case 'name_correction': {
        const serviceObj = pack.services && pack.services.name_correction;
        const sources = this.collectServiceSources(pack, serviceObj, countryCode);
        const hasValidServiceObj = !!(
          serviceObj &&
          serviceObj.availability_status !== 'unavailable' &&
          ((Array.isArray(serviceObj.documents) && serviceObj.documents.length > 0) ||
           (Array.isArray(serviceObj.steps) && serviceObj.steps.length > 0)) &&
          sources.length > 0
        );

        if (hasValidServiceObj) {
          const verifiedFields = [];
          if (Array.isArray(serviceObj.documents) && serviceObj.documents.length > 0) verifiedFields.push('documents');
          if (Array.isArray(serviceObj.steps) && serviceObj.steps.length > 0) verifiedFields.push('steps');
          if (serviceObj.gazette_rules || (Array.isArray(serviceObj.documents) && serviceObj.documents.some(d => (d.document_name || '').toLowerCase().includes('gazette')))) verifiedFields.push('gazette_rules');

          return {
            dimension: 'service',
            key: 'name_correction',
            name: this.formatServiceName('name_correction'),
            status: 'verified',
            label: 'Verified Statutory Rules',
            badgeClass: 'status-verified',
            isVerified: true,
            summary: `Fully verified statutory name correction rules for ${countryName}, including self-declarations for marital surname changes (Annexure E) and official Gazette notifications for major changes.`,
            supportedChecks: [
              'Self-declaration routes for routine marital surname changes (Annexure E)',
              'Official Gazette notification requirements for major name changes',
              'Newspaper publication standards for alias corrections'
            ],
            missingChecks: [],
            officialSourceUrl: pack.official_portal_url,
            rulePackKey: 'name_correction',
            evidence: {
              hasSupportingEvidence: true,
              evidenceLevel: 'trusted_official',
              evidenceStatusLabel: 'Trusted Official Evidence Linked',
              sources,
              verifiedFields
            }
          };
        }
        return {
          dimension: 'service',
          key: 'name_correction',
          name: this.formatServiceName('name_correction'),
          status: 'general_guidance',
          label: 'General Preparation Guidance',
          badgeClass: 'status-needs-research',
          isVerified: false,
          summary: `Dedicated name or detail amendment rule packs are not yet codified for ${countryName}. Standard legal name change documentation guidance applies.`,
          supportedChecks: ['Baseline civil proof of legal name change (marriage certificate, deed poll, or court order)'],
          missingChecks: [
            'Country-specific deed poll / gazette notification requirements',
            'Official name correction application forms and statutory fees'
          ],
          officialSourceUrl: pack.official_portal_url,
          rulePackKey: null,
          evidence: {
            hasSupportingEvidence: false,
            evidenceLevel: sources.length > 0 ? 'valid_syntax_incomplete_claim' : 'no_trusted_source',
            evidenceStatusLabel: sources.length > 0 ? 'Valid Source Reference · Incomplete Claim Evidence' : 'No Trusted Official Source',
            sources: [],
            missingEvidence: ['services.name_correction definition', 'statutory gazette rules', 'official source documentation']
          }
        };
      }

      case 'minor_child': {
        const serviceObj = pack.services && pack.services.minor_child;
        const sources = this.collectServiceSources(pack, serviceObj, countryCode);
        const hasValidServiceObj = !!(
          serviceObj &&
          serviceObj.availability_status !== 'unavailable' &&
          ((Array.isArray(serviceObj.documents) && serviceObj.documents.length > 0) ||
           (Array.isArray(serviceObj.eligibility) && serviceObj.eligibility.length > 0)) &&
          sources.length > 0
        );

        if (hasValidServiceObj) {
          const verifiedFields = [];
          if (Array.isArray(serviceObj.eligibility) && serviceObj.eligibility.length > 0) verifiedFields.push('parental_consent');
          if (Array.isArray(serviceObj.documents) && serviceObj.documents.length > 0) verifiedFields.push('documents');
          if (serviceObj.child_validity || serviceObj.fees) verifiedFields.push('child_validity');

          return {
            dimension: 'service',
            key: 'minor_child',
            name: this.formatServiceName('minor_child'),
            status: 'verified',
            label: 'Verified Statutory Rules',
            badgeClass: 'status-verified',
            isVerified: true,
            summary: `Fully verified minor/child passport regulations for ${countryName}, including parental consent mandates, parental appearance rules, and child validity schedules.`,
            supportedChecks: [
              'Parental consent and parental presence statutory mandates',
              'Civil birth certificate and parental identity proof',
              'Minor validity duration and applicable child fee schedules'
            ],
            missingChecks: [],
            officialSourceUrl: pack.official_portal_url,
            rulePackKey: 'minor_child',
            evidence: {
              hasSupportingEvidence: true,
              evidenceLevel: 'trusted_official',
              evidenceStatusLabel: 'Trusted Official Evidence Linked',
              sources,
              verifiedFields
            }
          };
        }
        const hasStatutoryParental = sources.length > 0;
        return {
          dimension: 'service',
          key: 'minor_child',
          name: this.formatServiceName('minor_child'),
          status: hasStatutoryParental ? 'partial' : 'general_guidance',
          label: hasStatutoryParental ? 'Partial Service Coverage' : 'General Preparation Guidance',
          badgeClass: hasStatutoryParental ? 'status-linked' : 'status-needs-research',
          isVerified: false,
          summary: hasStatutoryParental
            ? `Statutory parental consent and civil birth documentation rules are verified for ${countryName}, but standalone minor service packs are not separately modeled.`
            : `Dedicated child/minor passport rule packs are not yet codified for ${countryName}. Standard parental consent and legal guardianship requirements apply.`,
          supportedChecks: hasStatutoryParental
            ? [
                'Statutory parental consent safeguards (e.g. Annexure D/C, US 22 CFR § 51.28)',
                'Civil birth certificate documentation'
              ]
            : ['Civil birth certificate documentation'],
          missingChecks: [
            'Standalone minor passport application forms',
            'Country-specific minor fee tiers (where distinct from general tables)'
          ],
          officialSourceUrl: pack.official_portal_url,
          rulePackKey: null,
          evidence: {
            hasSupportingEvidence: hasStatutoryParental,
            isPartial: hasStatutoryParental,
            evidenceLevel: hasStatutoryParental ? 'partial_confirmation' : (sources.length > 0 ? 'valid_syntax_incomplete_claim' : 'no_trusted_source'),
            evidenceStatusLabel: hasStatutoryParental ? 'Partial Evidence Requiring Confirmation' : (sources.length > 0 ? 'Valid Source Reference · Incomplete Claim Evidence' : 'No Trusted Official Source'),
            sources: hasStatutoryParental ? sources : [],
            missingEvidence: hasStatutoryParental ? ['standalone minor service object', 'dedicated minor fee tiers'] : ['minor parental consent rules', 'dedicated minor fee tiers', 'official source documentation']
          }
        };
      }

      case 'urgent_expedited': {
        const serviceObj = pack.services && (pack.services.urgent_expedited || pack.services.first_passport);
        const feesObj = serviceObj?.fees || {};
        const sources = this.collectUrgentSources(pack, serviceObj);
        const hasUrgentSchedule = this.hasUrgentFeeEvidence(feesObj) && sources.length > 0;

        return {
          dimension: 'service',
          key: 'urgent_expedited',
          name: this.formatServiceName('urgent_expedited'),
          status: hasUrgentSchedule ? 'partial' : 'general_guidance',
          label: hasUrgentSchedule ? 'Partial Service Coverage' : 'General Preparation Guidance',
          badgeClass: hasUrgentSchedule ? 'status-linked' : 'status-needs-research',
          isVerified: false,
          summary: hasUrgentSchedule
            ? `Official expedited/urgent fee schedules and surcharge amounts are verified for ${countryName}, but daily booking quotas, appointment availability, and service exclusions vary by post.`
            : `Dedicated expedited processing rule packs are not yet codified for ${countryName}. Standard urgent processing advice applies.`,
          supportedChecks: hasUrgentSchedule
            ? [
                'Official statutory expedited fee and surcharge schedule',
                'Expedited processing timeframe baselines'
              ]
            : ['General expedited preparation guidance'],
          missingChecks: [
            'Daily expedited appointment slot availability and booking procedures',
            'Service-specific expedited exclusion criteria (e.g. complex name changes, replacement of lost records)'
          ],
          officialSourceUrl: pack.official_portal_url,
          rulePackKey: null,
          evidence: {
            hasSupportingEvidence: hasUrgentSchedule,
            isPartial: hasUrgentSchedule,
            evidenceLevel: hasUrgentSchedule ? 'partial_confirmation' : (sources.length > 0 ? 'valid_syntax_incomplete_claim' : 'no_trusted_source'),
            evidenceStatusLabel: hasUrgentSchedule ? 'Partial Evidence Requiring Confirmation' : (sources.length > 0 ? 'Valid Source Reference · Incomplete Claim Evidence' : 'No Trusted Official Source'),
            sources: hasUrgentSchedule ? sources : [],
            missingEvidence: hasUrgentSchedule ? ['daily appointment quota availability'] : ['expedited fee schedule', 'official source documentation']
          }
        };
      }

      case 'emergency_travel': {
        const serviceObj = pack.services && (pack.services.emergency_travel || pack.services.emergency_passport || pack.services.first_passport);
        const feesObj = serviceObj?.fees || pack.services?.first_passport?.fees || {};
        const sources = this.collectEmergencySources(pack, serviceObj, countryCode);
        const hasMxEmergencyData = !!(
          (feesObj.consular_overseas_usd?.emergency_surcharge_schedule && typeof feesObj.consular_overseas_usd.emergency_surcharge_schedule === 'object' &&
            Object.values(feesObj.consular_overseas_usd.emergency_surcharge_schedule).some(tier => {
              if (!tier) return false;
              if (typeof tier === 'number' && Number.isFinite(tier) && tier > 0) return true;
              if (typeof tier === 'object') {
                return (typeof tier.total_payable === 'number' && Number.isFinite(tier.total_payable) && tier.total_payable > 0) ||
                       (typeof tier.emergency_surcharge === 'number' && Number.isFinite(tier.emergency_surcharge) && tier.emergency_surcharge > 0);
              }
              return false;
            })
          ) ||
          (Array.isArray(feesObj.fee_records) && feesObj.fee_records.some(r => r && typeof r.emergency_surcharge === 'number' && Number.isFinite(r.emergency_surcharge) && r.emergency_surcharge > 0))
        );

        if (countryCode === 'MX' && hasMxEmergencyData && sources.length > 0) {
          return {
            dimension: 'service',
            key: 'emergency_travel',
            name: this.formatServiceName('emergency_travel'),
            status: 'partial',
            label: 'Partial Service Coverage',
            badgeClass: 'status-linked',
            isFullyVerified: false,
            summary: 'In Mexico, emergency travel is handled via consular Emergency Type E Passports (Pasaporte de Emergencia Tipo E) or unscheduled emergency appointments (+30% surcharge, Art. 20 LFD). Standalone Emergency Travel Certificates (ETC/salvoconducto) are not standard.',
            supportedChecks: [
              'Consular emergency appointment 30% surcharge schedule (Art. 20 LFD)',
              'Emergency Type E Passport validity ceiling (up to 1 year) and consular assessment requirements'
            ],
            missingChecks: [
              'Local consular post Emergency Type E physical booklet stock availability',
              'Non-consular domestic emergency exceptions'
            ],
            officialSourceUrl: pack.official_portal_url,
            rulePackKey: 'emergency_passport',
            evidence: {
              hasSupportingEvidence: true,
              isPartial: true,
              evidenceLevel: 'partial_confirmation',
              evidenceStatusLabel: 'Partial Evidence Requiring Confirmation',
              citation: 'Art. 20 Ley Federal de Derechos (LFD) + Pasaporte de Emergencia Tipo E',
              sources
            }
          };
        }

        const hasNzCalloutData = !!(
          feesObj.after_hours_callout_service_nzd &&
          typeof feesObj.after_hours_callout_service_nzd === 'object' &&
          Object.values(feesObj.after_hours_callout_service_nzd).some(v => typeof v === 'number' && Number.isFinite(v) && v > 0)
        );

        if (countryCode === 'NZ' && hasNzCalloutData && sources.length > 0) {
          return {
            dimension: 'service',
            key: 'emergency_travel',
            name: this.formatServiceName('emergency_travel'),
            status: 'partial',
            label: 'Partial Service Coverage',
            badgeClass: 'status-linked',
            isFullyVerified: false,
            summary: 'Official after-hours callout emergency passport fees (NZD 1,001 adult / NZD 898 child) are verified for New Zealand, but callout attendance requires direct telephone coordination with DIA.',
            supportedChecks: [
              'Statutory after-hours callout fee schedule (passports.govt.nz)',
              'Emergency callout availability criteria'
            ],
            missingChecks: [
              'Direct DIA duty officer dispatch and location availability confirmation'
            ],
            officialSourceUrl: pack.official_portal_url,
            rulePackKey: 'after_hours_callout',
            evidence: {
              hasSupportingEvidence: true,
              isPartial: true,
              evidenceLevel: 'partial_confirmation',
              evidenceStatusLabel: 'Partial Evidence Requiring Confirmation',
              citation: 'passports.govt.nz/passport-costs After-Hours Callout Service',
              sources
            }
          };
        }

        const allPackSources = this.collectServiceSources(pack, serviceObj, countryCode);
        const hasAnyTrustedSource = sources.length > 0 || allPackSources.length > 0;
        return {
          dimension: 'service',
          key: 'emergency_travel',
          name: this.formatServiceName('emergency_travel'),
          status: 'general_guidance',
          label: 'General Preparation Guidance',
          badgeClass: 'status-needs-research',
          isFullyVerified: false,
          summary: `Emergency Travel Certificates (ETC) / Emergency Travel Documents are single-journey travel papers issued under strict consular discretion for urgent repatriations. Country-specific rules for ${countryName} are not yet codified in this rule pack.`,
          supportedChecks: ['General consular emergency repatriation documentation standards'],
          missingChecks: [
            'Direct consular emergency duty officer contact procedures',
            'Specific emergency travel document application forms and fees',
            'Transit country and airline acceptance limitations (most ETCs are valid only for direct travel home)'
          ],
          officialSourceUrl: pack.official_portal_url,
          rulePackKey: null,
          evidence: {
            hasSupportingEvidence: false,
            evidenceLevel: hasAnyTrustedSource ? 'valid_syntax_incomplete_claim' : 'no_trusted_source',
            evidenceStatusLabel: hasAnyTrustedSource ? 'Valid Source Reference · Incomplete Claim Evidence' : 'No Trusted Official Source',
            sources: [],
            missingEvidence: ['country-specific ETC application procedures and fees', 'official source documentation']
          }
        };
      }

      default:
        return {
          dimension: 'service',
          key: service,
          name: this.formatServiceName(service),
          status: 'general_guidance',
          label: 'General Preparation Guidance',
          badgeClass: 'status-needs-research',
          isFullyVerified: false,
          summary: `No dedicated rule pack is codified for "${this.formatServiceName(service)}" in ${countryName}. Standard international preparation guidance applies.`,
          supportedChecks: ['General international travel document standards'],
          missingChecks: [
            'Country-specific application forms',
            'Statutory fee schedule and official payment channels'
          ],
          officialSourceUrl: pack.official_portal_url,
          rulePackKey: null,
          evidence: {
            hasSupportingEvidence: false,
            evidenceLevel: 'no_trusted_source',
            evidenceStatusLabel: 'No Trusted Official Source',
            sources: [],
            missingEvidence: ['dedicated service pack', 'official source documentation']
          }
        };
    }
  }

  determineProcessingRouteCoverage(pack, countryCode, urgency = 'standard', service = 'first_passport') {
    const isVerifiedPack = !!(pack && (pack.rule_pack_status === 'verified' || pack.is_verified === true));
    const countryName = (pack && pack.country_name) || countryCode;

    if (!isVerifiedPack) {
      return {
        dimension: 'urgency',
        key: urgency,
        name: this.formatUrgencyName(urgency),
        status: 'awaiting_research',
        label: 'Awaiting Research',
        badgeClass: 'status-needs-research',
        isVerified: false,
        summary: `Urgency processing standards and timeframes for ${countryName} are awaiting official research.`,
        supportedChecks: [],
        missingChecks: ['Official processing timeframes and expedited slot availability'],
        evidence: {
          hasSupportingEvidence: false,
          evidenceLevel: 'awaiting_primary_research',
          evidenceStatusLabel: 'Awaiting Primary Research',
          missingEvidence: ['official route research']
        }
      };
    }

    if (urgency === 'standard') {
      const serviceObj = pack.services && (pack.services[service] || pack.services.first_passport);
      const sources = this.collectServiceSources(pack, serviceObj, countryCode);
      const hasStandardEvidence = !!(
        sources.length > 0 &&
        (
          (serviceObj && Array.isArray(serviceObj.steps) && serviceObj.steps.length > 0) ||
          (serviceObj && serviceObj.processing_times && (serviceObj.processing_times.normal_days || serviceObj.processing_times.standard_days)) ||
          (pack.processing_times && (pack.processing_times.normal_days || pack.processing_times.standard_days))
        )
      );

      if (hasStandardEvidence) {
        const timeEvidence = (serviceObj?.processing_times?.normal_days || serviceObj?.processing_times?.standard_days || pack.processing_times?.normal_days || pack.processing_times?.standard_days);
        const supportedChecks = [
          'Routine appointment and lodging procedures',
          timeEvidence ? `Documented routine processing baseline: ${timeEvidence}` : 'Standard statutory processing timeframe baseline'
        ];
        return {
          dimension: 'urgency',
          key: 'standard',
          name: this.formatUrgencyName('standard'),
          status: 'verified',
          label: 'Standard Processing Verified',
          badgeClass: 'status-verified',
          isVerified: true,
          summary: `Standard routine processing timeframes and regular appointment procedures are verified for ${countryName}.`,
          supportedChecks,
          missingChecks: [],
          evidence: {
            hasSupportingEvidence: true,
            evidenceLevel: 'trusted_official',
            evidenceStatusLabel: 'Trusted Official Evidence Linked',
            timeframe: timeEvidence || 'Documented in authority filing procedures',
            sources
          }
        };
      }

      // No standard processing evidence in pack
      return {
        dimension: 'urgency',
        key: 'standard',
        name: this.formatUrgencyName('standard'),
        status: 'general_guidance',
        label: 'General Standard Processing Guidance',
        badgeClass: 'status-needs-research',
        isVerified: false,
        summary: `Standard routine processing procedures or timeframe evidence are not codified for ${countryName}.`,
        supportedChecks: ['General routine document submission advice'],
        missingChecks: [
          'Official statutory processing timeframe evidence',
          'Standard lodging appointment procedures'
        ],
        evidence: {
          hasSupportingEvidence: false,
          evidenceLevel: sources.length > 0 ? 'valid_syntax_incomplete_claim' : 'no_trusted_source',
          evidenceStatusLabel: sources.length > 0 ? 'Valid Source Reference · Incomplete Claim Evidence' : 'No Trusted Official Source',
          missingEvidence: ['routine application filing steps', 'statutory processing timeframe documentation', 'official source documentation']
        }
      };
    }

    if (urgency === 'urgent') {
      const serviceObj = pack.services && (pack.services[service] || pack.services.first_passport);
      const feesObj = serviceObj?.fees || {};
      const sources = this.collectUrgentSources(pack, serviceObj, countryCode);
      const hasUrgentFeeEvidence = this.hasUrgentFeeEvidence(feesObj);

      if (hasUrgentFeeEvidence && sources.length > 0) {
        return {
          dimension: 'urgency',
          key: 'urgent',
          name: this.formatUrgencyName('urgent'),
          status: 'partial',
          label: 'Partial Urgent Route Coverage',
          badgeClass: 'status-linked',
          isVerified: false,
          summary: `Official expedited/urgent fee schedules and surcharge amounts are verified for ${countryName}, but daily booking quotas, appointment availability, and service exclusions vary by post.`,
          supportedChecks: [
            'Official statutory expedited fee and surcharge schedule',
            'Expedited processing timeframe baselines'
          ],
          missingChecks: [
            'Daily expedited appointment slot availability and booking procedures',
            'Service-specific expedited exclusion criteria (e.g. complex name changes, replacement of lost records)'
          ],
          evidence: {
            hasSupportingEvidence: true,
            isPartial: true,
            evidenceLevel: 'partial_confirmation',
            evidenceStatusLabel: 'Partial Evidence Requiring Confirmation',
            sources
          }
        };
      }
      const allPackSources = this.collectServiceSources(pack, serviceObj, countryCode);
      const hasAnyTrustedSource = sources.length > 0 || allPackSources.length > 0;
      return {
        dimension: 'urgency',
        key: 'urgent',
        name: this.formatUrgencyName('urgent'),
        status: 'general_guidance',
        label: 'General Urgent Guidance',
        badgeClass: 'status-needs-research',
        isVerified: false,
        summary: `Dedicated expedited processing rule packs are not yet codified for ${countryName}. Standard urgent processing advice applies.`,
        supportedChecks: ['General expedited preparation guidance'],
        missingChecks: [
          'Country-specific expedited appointment booking procedures',
          'Official expedited fee schedule and surcharge validation'
        ],
        evidence: {
          hasSupportingEvidence: false,
          evidenceLevel: hasAnyTrustedSource ? 'valid_syntax_incomplete_claim' : 'no_trusted_source',
          evidenceStatusLabel: hasAnyTrustedSource ? 'Valid Source Reference · Incomplete Claim Evidence' : 'No Trusted Official Source',
          missingEvidence: ['statutory expedited fee schedule', 'fast-track appointment booking rules', 'official source documentation']
        }
      };
    }

    if (urgency === 'emergency') {
      const serviceObj = pack.services && (pack.services.emergency_travel || pack.services.first_passport);
      const feesObj = serviceObj?.fees || pack.services?.first_passport?.fees || {};
      const sources = this.collectEmergencySources(pack, serviceObj, countryCode);

      const hasMxEmergencyData = !!(
        (feesObj.consular_overseas_usd?.emergency_surcharge_schedule && typeof feesObj.consular_overseas_usd.emergency_surcharge_schedule === 'object' &&
          Object.values(feesObj.consular_overseas_usd.emergency_surcharge_schedule).some(tier => {
            if (!tier) return false;
            if (typeof tier === 'number' && Number.isFinite(tier) && tier > 0) return true;
            if (typeof tier === 'object') {
              return (typeof tier.total_payable === 'number' && Number.isFinite(tier.total_payable) && tier.total_payable > 0) ||
                     (typeof tier.emergency_surcharge === 'number' && Number.isFinite(tier.emergency_surcharge) && tier.emergency_surcharge > 0);
            }
            return false;
          })
        ) ||
        (Array.isArray(feesObj.fee_records) && feesObj.fee_records.some(r => r && typeof r.emergency_surcharge === 'number' && Number.isFinite(r.emergency_surcharge) && r.emergency_surcharge > 0))
      );

      if (countryCode === 'MX' && hasMxEmergencyData && sources.length > 0) {
        return {
          dimension: 'urgency',
          key: 'emergency',
          name: this.formatUrgencyName('emergency'),
          status: 'partial',
          label: 'Partial Emergency Route Coverage',
          badgeClass: 'status-linked',
          isVerified: false,
          summary: 'In Mexico, emergency appointments carry a 30% statutory surcharge (Art. 20 LFD) and require documented proof of medical, humanitarian, academic, or work urgency. Emergency Type E passports may be issued upon consular assessment.',
          supportedChecks: [
            'Consular emergency appointment 30% surcharge schedule (Art. 20 LFD)',
            'Emergency Type E Passport validity ceiling (up to 1 year)'
          ],
          missingChecks: [
            'Local consular post Emergency Type E physical booklet stock availability',
            'Non-consular domestic emergency exceptions'
          ],
          evidence: {
            hasSupportingEvidence: true,
            isPartial: true,
            evidenceLevel: 'partial_confirmation',
            evidenceStatusLabel: 'Partial Evidence Requiring Confirmation',
            citation: 'Art. 20 Ley Federal de Derechos (LFD) + Pasaporte de Emergencia Tipo E',
            sources
          }
        };
      }

      const hasNzCalloutData = !!(
        feesObj.after_hours_callout_service_nzd &&
        typeof feesObj.after_hours_callout_service_nzd === 'object' &&
        Object.values(feesObj.after_hours_callout_service_nzd).some(v => typeof v === 'number' && Number.isFinite(v) && v > 0)
      );

      if (countryCode === 'NZ' && hasNzCalloutData && sources.length > 0) {
        return {
          dimension: 'urgency',
          key: 'emergency',
          name: this.formatUrgencyName('emergency'),
          status: 'partial',
          label: 'Partial Emergency Route Coverage',
          badgeClass: 'status-linked',
          isVerified: false,
          summary: 'Official after-hours callout emergency passport fees (NZD 1,001 adult / NZD 898 child) are verified for New Zealand, but callout attendance requires direct telephone coordination with DIA.',
          supportedChecks: [
            'Statutory after-hours callout fee schedule (passports.govt.nz)',
            'Emergency callout availability criteria'
          ],
          missingChecks: [
            'Direct DIA duty officer dispatch and location availability confirmation'
          ],
          evidence: {
            hasSupportingEvidence: true,
            isPartial: true,
            evidenceLevel: 'partial_confirmation',
            evidenceStatusLabel: 'Partial Evidence Requiring Confirmation',
            citation: 'passports.govt.nz/passport-costs After-Hours Callout Service',
            sources
          }
        };
      }

      const allPackSources = this.collectServiceSources(pack, serviceObj, countryCode);
      const hasAnyTrustedSource = sources.length > 0 || allPackSources.length > 0;
      return {
        dimension: 'urgency',
        key: 'emergency',
        name: this.formatUrgencyName('emergency'),
        status: 'general_guidance',
        label: 'General Emergency Guidance',
        badgeClass: 'status-needs-research',
        isVerified: false,
        summary: `Dedicated emergency appointment or after-hours callout rule packs are not yet codified for ${countryName}. Emergency travel documents (ETD/ETC) or urgent compassionate appointments require direct authority assessment.`,
        supportedChecks: ['General international emergency travel documentation standards'],
        missingChecks: [
          'Direct authority emergency hotline contact and appointment booking procedures',
          'Emergency fee surcharge or temporary booklet fee validation'
        ],
        evidence: {
          hasSupportingEvidence: false,
          evidenceLevel: hasAnyTrustedSource ? 'valid_syntax_incomplete_claim' : 'no_trusted_source',
          evidenceStatusLabel: hasAnyTrustedSource ? 'Valid Source Reference · Incomplete Claim Evidence' : 'No Trusted Official Source',
          missingEvidence: ['statutory emergency callout fees', 'direct consular emergency dispatch procedures', 'official source documentation']
        }
      };
    }

    return {
      dimension: 'urgency',
      key: urgency,
      name: this.formatUrgencyName(urgency),
      status: 'general_guidance',
      label: 'General Guidance',
      badgeClass: 'status-needs-research',
      isVerified: false,
      summary: `Urgency route ${urgency} is not separately modeled for ${countryName}.`,
      supportedChecks: [],
      missingChecks: ['Official route verification'],
      evidence: {
        hasSupportingEvidence: false,
        evidenceLevel: 'no_trusted_source',
        evidenceStatusLabel: 'No Trusted Official Source'
      }
    };
  }

  determineApplicationChannelCoverage(pack, countryCode, location = 'inside', service = 'first_passport') {
    const isVerifiedPack = !!(pack && (pack.rule_pack_status === 'verified' || pack.is_verified === true));
    const countryName = (pack && pack.country_name) || countryCode;

    if (!isVerifiedPack) {
      return {
        dimension: 'channel',
        key: location,
        name: this.formatChannelName(location),
        status: 'awaiting_research',
        label: 'Awaiting Research',
        badgeClass: 'status-needs-research',
        isVerified: false,
        summary: `Application channel procedures for ${countryName} are awaiting official research.`,
        supportedChecks: [],
        missingChecks: ['Application lodging channels and authority appointment procedures'],
        evidence: {
          hasSupportingEvidence: false,
          evidenceLevel: 'awaiting_primary_research',
          evidenceStatusLabel: 'Awaiting Primary Research',
          missingEvidence: ['channel research']
        }
      };
    }

    if (location === 'inside') {
      const serviceObj = pack.services && (pack.services[service] || pack.services.first_passport);
      const sources = this.collectServiceSources(pack, serviceObj, countryCode);
      const hasDomesticEvidence = !!(
        pack.authority_name &&
        sources.length > 0 &&
        (
          (serviceObj && serviceObj.fees && typeof serviceObj.fees === 'object' && Object.keys(serviceObj.fees).length > 0) ||
          (Array.isArray(pack.jurisdictions) && pack.jurisdictions.some(j => j.application_channel === 'domestic' || (typeof j.name === 'string' && j.name.toLowerCase().includes('domestic')))) ||
          (serviceObj && Array.isArray(serviceObj.steps) && serviceObj.steps.length > 0)
        )
      );

      if (hasDomesticEvidence) {
        return {
          dimension: 'channel',
          key: 'inside',
          name: this.formatChannelName('inside'),
          status: 'verified',
          label: 'Domestic Lodgement Verified',
          badgeClass: 'status-verified',
          isVerified: true,
          summary: `Domestic application procedures, statutory authority lodging channels, and domestic fee schedules are verified for ${countryName}.`,
          supportedChecks: [
            'Domestic application lodging channels and authority centers',
            'Domestic statutory fee schedules and local payment methods'
          ],
          missingChecks: [],
          evidence: {
            hasSupportingEvidence: true,
            evidenceLevel: 'trusted_official',
            evidenceStatusLabel: 'Trusted Official Evidence Linked',
            authority: pack.authority_name,
            sources
          }
        };
      }

      // No domestic evidence in pack
      return {
        dimension: 'channel',
        key: 'inside',
        name: this.formatChannelName('inside'),
        status: 'general_guidance',
        label: 'General Domestic Lodgement Guidance',
        badgeClass: 'status-needs-research',
        isVerified: false,
        summary: `Domestic competent authority filing procedures or domestic fee evidence are not codified for ${countryName}.`,
        supportedChecks: ['General domestic application guidance'],
        missingChecks: [
          'Competent domestic passport issuing authority',
          'Domestic lodging channels and accepted local payment methods'
        ],
        evidence: {
          hasSupportingEvidence: false,
          evidenceLevel: sources.length > 0 ? 'valid_syntax_incomplete_claim' : 'no_trusted_source',
          evidenceStatusLabel: sources.length > 0 ? 'Valid Source Reference · Incomplete Claim Evidence' : 'No Trusted Official Source',
          missingEvidence: ['competent authority designation', 'domestic statutory fee schedule', 'domestic filing procedures', 'official source documentation']
        }
      };
    }

    // Overseas / Consular channel
    const serviceObj = pack.services && (pack.services[service] || pack.services.first_passport);
    const feesObj = serviceObj?.fees || {};
    const sources = this.collectConsularSources(pack, serviceObj, countryCode);

    const hasCodifiedConsularFees = this.hasActualConsularFeeSchedule(feesObj);
    const hasConsularGuidance = this.hasConsularGuidance(pack, serviceObj, countryCode);

    // Fully verified consular channel requires codified foreign-currency fees, consular lodging guidance, and sources
    if (hasCodifiedConsularFees && hasConsularGuidance && sources.length > 0) {
      return {
        dimension: 'channel',
        key: 'abroad',
        name: this.formatChannelName('abroad'),
        status: 'verified',
        label: 'Consular Channel Verified',
        badgeClass: 'status-verified',
        isVerified: true,
        summary: `Official consular fee schedules in foreign currency and overseas diplomatic mission lodging procedures are fully verified for ${countryName}.`,
        supportedChecks: [
          'Official overseas consular fee schedule and accepted currency',
          'Diplomatic mission lodging requirements and identity verification'
        ],
        missingChecks: [],
        evidence: {
          hasSupportingEvidence: true,
          evidenceLevel: 'trusted_official',
          evidenceStatusLabel: 'Trusted Official Evidence Linked',
          feeSchedule: 'Codified foreign currency consular fee table',
          sources
        }
      };
    }

    // Has genuine consular guidance/jurisdiction in pack
    if (hasConsularGuidance && sources.length > 0) {
      return {
        dimension: 'channel',
        key: 'abroad',
        name: this.formatChannelName('abroad'),
        status: 'partial',
        label: 'Partial Consular Channel Coverage',
        badgeClass: 'status-linked',
        isVerified: false,
        summary: `Consular jurisdiction and overseas filing requirements are verified for ${countryName}, but local host-currency fees, mission-specific appointment systems, or consular service partner procedures require direct mission confirmation.`,
        supportedChecks: [
          'Consular jurisdiction and host-country lawful residence proof requirements',
          'General diplomatic mission application standards'
        ],
        missingChecks: [
          'Local mission payment currency, banking methods, and consular surcharges',
          'Embassy or outsourced service partner (e.g. VFS/BLS/TLS) appointment booking procedures'
        ],
        evidence: {
          hasSupportingEvidence: true,
          isPartial: true,
          evidenceLevel: 'partial_confirmation',
          evidenceStatusLabel: 'Partial Evidence Requiring Confirmation',
          sources,
          missingEvidence: ['local host-currency fee schedule', 'mission-specific booking partner procedures']
        }
      };
    }

    // Completely uncodified consular channel in pack
    const allPackSources = this.collectServiceSources(pack, serviceObj, countryCode);
    const hasAnyTrustedSource = sources.length > 0 || allPackSources.length > 0;
    return {
      dimension: 'channel',
      key: 'abroad',
      name: this.formatChannelName('abroad'),
      status: 'general_guidance',
      label: 'General Consular Guidance',
      badgeClass: 'status-needs-research',
      isVerified: false,
      summary: `Dedicated overseas consular filing procedures are not codified for ${countryName}.`,
      supportedChecks: ['General overseas travel document guidance'],
      missingChecks: [
        'Consular jurisdiction and diplomatic mission lodging rules',
        'Consular fee schedule and accepted host-currency payments'
      ],
      evidence: {
        hasSupportingEvidence: false,
        evidenceLevel: hasAnyTrustedSource ? 'valid_syntax_incomplete_claim' : 'no_trusted_source',
        evidenceStatusLabel: hasAnyTrustedSource ? 'Valid Source Reference · Incomplete Claim Evidence' : 'No Trusted Official Source',
        missingEvidence: ['consular lodging procedures', 'diplomatic mission fee schedule', 'official source documentation']
      }
    };
  }

  determineServiceCoverage(pack, countryCode, service, location = 'inside', urgency = 'standard') {
    const isVerifiedPack = !!(pack && (pack.rule_pack_status === 'verified' || pack.is_verified === true));
    const countryName = (pack && pack.country_name) || countryCode;

    const baseService = this.determineBaseServiceCoverage(pack, countryCode, service);
    const processingRoute = this.determineProcessingRouteCoverage(pack, countryCode, urgency, service);
    const applicationChannel = this.determineApplicationChannelCoverage(pack, countryCode, location, service);

    const STATUS_PRIORITY = {
      awaiting_research: 0,
      general_guidance: 1,
      partial: 2,
      verified: 3
    };

    const statuses = [baseService.status, processingRoute.status, applicationChannel.status];
    const effectiveStatus = statuses.reduce((lowest, current) => {
      const prioCurrent = STATUS_PRIORITY[current] ?? 1;
      const prioLowest = STATUS_PRIORITY[lowest] ?? 1;
      return prioCurrent <= prioLowest ? current : lowest;
    }, 'verified');

    const isFullyVerified = effectiveStatus === 'verified';

    let label = 'Verified Statutory Rules';
    let badgeClass = 'status-verified';
    if (effectiveStatus === 'awaiting_research') {
      label = 'Awaiting Detailed Research';
      badgeClass = 'status-needs-research';
    } else if (effectiveStatus === 'general_guidance') {
      label = 'General Preparation Guidance';
      badgeClass = 'status-needs-research';
    } else if (effectiveStatus === 'partial') {
      label = 'Partial Coverage';
      badgeClass = 'status-linked';
    }

    // Build narrative summary reflecting the combined scenario
    const summaryParts = [baseService.summary];
    if (processingRoute.status !== 'verified' && processingRoute.summary) {
      summaryParts.push(processingRoute.summary);
    }
    if (applicationChannel.status !== 'verified' && applicationChannel.summary) {
      summaryParts.push(applicationChannel.summary);
    }
    const summary = summaryParts.join(' ');

    // Aggregate deduplicated checks
    const supportedSet = new Set([
      ...(baseService.supportedChecks || []),
      ...(processingRoute.supportedChecks || []),
      ...(applicationChannel.supportedChecks || [])
    ]);
    const missingSet = new Set([
      ...(baseService.missingChecks || []),
      ...(processingRoute.missingChecks || []),
      ...(applicationChannel.missingChecks || [])
    ]);

    return {
      service,
      serviceKey: baseService.key || service,
      status: effectiveStatus,
      effectiveStatus,
      label,
      badgeClass,
      isFullyVerified,
      summary,
      supportedChecks: Array.from(supportedSet),
      missingChecks: Array.from(missingSet),
      officialSourceUrl: pack ? pack.official_portal_url : null,
      rulePackKey: baseService.rulePackKey,
      evidence: {
        hasSupportingEvidence: isFullyVerified,
        service: baseService.evidence,
        urgency: processingRoute.evidence,
        channel: applicationChannel.evidence
      },
      dimensions: {
        service: baseService,
        urgency: processingRoute,
        channel: applicationChannel
      },
      baseServiceCoverage: baseService,
      routeCoverage: processingRoute,
      channelCoverage: applicationChannel
    };
  }

  evaluate(profile) {
    const {
      countryCode = 'IN',
      countryName = 'India',
      location = 'inside',
      service = 'first_passport',
      age = 'adult',
      urgency = 'standard',
      status = 'never',
      birthProof = 'have',
      addressProof = 'have',
      citizenshipProof = 'have',
      nameMatch = 'yes',
      dobMatch = 'yes',
      special = 'none',
      checkedGov = 'yes'
    } = profile;

    // Canonical Age Normalization across all stages
    const rawExactAge = typeof profile.ageExact === 'number' && !isNaN(profile.ageExact)
      ? profile.ageExact
      : (typeof profile.applicantAge === 'number' && !isNaN(profile.applicantAge)
        ? profile.applicantAge
        : (typeof profile.exactAge === 'number' && !isNaN(profile.exactAge) ? profile.exactAge : null));

    let canonicalAgeBand;
    if (rawExactAge !== null) {
      if (rawExactAge < 12) {
        canonicalAgeBand = 'child_under_12';
      } else if (rawExactAge <= 16) {
        canonicalAgeBand = 'minor_12_to_16';
      } else if (rawExactAge === 17) {
        canonicalAgeBand = 'age_17';
      } else if (rawExactAge < 60) {
        canonicalAgeBand = 'adult_18_to_59';
      } else {
        canonicalAgeBand = 'senior_60_plus';
      }
    } else {
      if (age === 'infant' || age === 'child_under_12' || age === 'under_12') {
        canonicalAgeBand = 'child_under_12';
      } else if (age === 'minor') {
        canonicalAgeBand = 'minor_12_to_16';
      } else if (age === 'senior') {
        canonicalAgeBand = 'senior_60_plus';
      } else {
        canonicalAgeBand = 'adult_18_to_59';
      }
    }

    // Canonical minor status based on jurisdiction threshold
    // In Indonesia (Permenkumham No. 18/2022), adult minimum age is 17; under 17 is minor
    // In standard jurisdictions, under 18 is minor
    const isMinorApplicant = countryCode === 'ID'
      ? (canonicalAgeBand === 'child_under_12' || canonicalAgeBand === 'minor_12_to_16')
      : (canonicalAgeBand === 'child_under_12' || canonicalAgeBand === 'minor_12_to_16' || canonicalAgeBand === 'age_17');
    const isSeniorApplicant = canonicalAgeBand === 'senior_60_plus';
    const isAdultApplicant = !isMinorApplicant;

    const pack = this.rulePacks[countryCode] || null;
    const isVerifiedPack = pack && pack.rule_pack_status === 'verified';
    const serviceCoverage = this.determineServiceCoverage(pack, countryCode, service, location, urgency);

    const checklist = [];
    const flags = [];
    const alternatives = [];
    let preparationScore = 100;

    // 0. Country Verification Status Guardrail
    if (!isVerifiedPack) {
      // Unverified country data cannot silently produce a 100% prepared result
      preparationScore = Math.min(preparationScore, 70);
      flags.push({
        severity: 'info',
        code: 'UNVERIFIED_COUNTRY_PROCEDURAL_PACK',
        title: `Preliminary Guidance for ${countryName}`,
        message: `Detailed scenario rules for ${countryName} are undergoing official research. This checklist reflects baseline international preparation standards (ICAO Doc 9303).`,
        action: `Confirm specific accepted document alternatives, forms, and fees directly with the official authority of ${countryName} before applying.`
      });
    }

    // 1. Mismatch & Identity Consistency Evaluation
    if (nameMatch === 'major') {
      preparationScore -= 30;
      let nameSpecificAdvice = "Securing legal name change documentation is required prior to filing. In India, for marriage-related surname changes or adding spouse name, a simple self-declaration (Annexure 'E') suffices and NO Gazette publication is needed; only complete major name replacements require Gazette publication and two newspaper ads. In the US, a certified court order or marriage certificate is required (22 CFR § 51.25). In the UK, an enrolled or unenrolled deed poll is required by HMPO. In the Philippines, an annotated PSA civil entry or court decree is mandatory.";
      if (countryCode === 'IN') {
        nameSpecificAdvice = "Under Indian MEA Passport Manual rules: if changing surname due to marriage or adding spouse name, a simple self-declaration (Annexure 'E') is sufficient and NO Gazette notification or marriage certificate is required. If undergoing a complete major change of given/family name unrelated to marriage, an Affidavit (Annexure 'E'), advertisements in two daily newspapers, and publication in the Gazette of India are mandatory. For minor spelling differences, two statutory public IDs are accepted without Gazette publication.";
      } else if (countryCode === 'US') {
        nameSpecificAdvice = "Under US Department of State rules (22 CFR § 51.25), legal name changes require an original certified court order or government marriage certificate.";
      } else if (countryCode === 'GB') {
        nameSpecificAdvice = "Under HMPO guidance, an enrolled or unenrolled deed poll accompanied by evidence of the new name in official use is required.";
      } else if (countryCode === 'PH') {
        nameSpecificAdvice = "Under Philippine DFA regulations, an annotated PSA civil registry record or court order is required pursuant to RA 9048/10172.";
      } else if (countryCode === 'JP') {
        nameSpecificAdvice = "Under Japanese MOFA rules, legal name changes require a certified Family Register (戸籍謄本 - Koseki Tohon) issued within the last 6 months reflecting the new civil registration entry.";
      } else if (countryCode === 'MX') {
        nameSpecificAdvice = "Under Mexican SRE regulations, legal name changes require an amended birth certificate issued by the Civil Registry (Registro Civil) with marginal notes or judicial decree.";
      } else if (countryCode === 'BR') {
        nameSpecificAdvice = "Under Brazilian Polícia Federal rules, name changes require an updated civil registry certificate (Certidão de Casamento ou Nascimento com averbação) and prior update of your CPF with Receita Federal.";
      } else if (countryCode === 'ZA') {
        nameSpecificAdvice = "Under South African DHA rules, name changes must first be updated on the National Population Register, and an updated Smart ID Card must be issued prior to passport processing.";
      } else if (countryCode === 'NG') {
        nameSpecificAdvice = "Under Nigeria Immigration Service rules, biographical data must first be amended in the NIMC database; passport issuance requires an updated NIN slip matching character-for-character.";
      } else if (countryCode === 'IT') {
        nameSpecificAdvice = "Under Italian law, name or surname changes require official registration with the Comune of civil registration (estratto per riassunto dell'atto di nascita con annotazioni marginali).";
      }

      flags.push({
        severity: 'critical',
        code: 'NAME_MAJOR_MISMATCH',
        title: 'Significant Legal Name Difference Detected',
        message: 'Your name differs substantially across records. Submitting without statutory name change proof will result in processing suspension or rejection.',
        action: nameSpecificAdvice
      });
      checklist.push({
        id: 'name_correction_evidence',
        title: 'Secure Statutory Proof of Legal Name Change',
        details: isVerifiedPack ? `Obtain official evidence conforming to ${countryName} legal requirements.` : 'Obtain certified court order, marriage certificate, or official government gazette / deed poll matching your jurisdiction.',
        mandatory: true,
        status: 'pending',
        category: 'identity'
      });
    } else if (nameMatch === 'minor') {
      preparationScore -= 15;
      flags.push({
        severity: 'warning',
        code: 'NAME_MINOR_MISMATCH',
        title: 'Spelling or Initial Inconsistency',
        message: 'A difference in spelling, initials, or name order was reported. Authorities require proof that both names belong to the same person.',
        action: 'Ensure your application form separates Given Name and Family Name exactly as assigned on your primary citizenship certificate.'
      });
      checklist.push({
        id: 'name_split_check',
        title: 'Reconcile Given Name vs. Family Name Allocation',
        details: 'Ensure your application form separates Given Name and Surname exactly as they appear in your primary civil registration.',
        mandatory: true,
        status: 'pending',
        category: 'identity'
      });
    }

    if (dobMatch === 'mismatch') {
      preparationScore -= 35;
      flags.push({
        severity: 'critical',
        code: 'DOB_MISMATCH',
        title: 'Date-of-Birth Discrepancy Across Documents',
        message: 'Date of birth differences are strictly audited by passport authorities. The date recorded on your primary civil birth certificate or first citizenship grant legally supersedes dates on secondary cards.',
        action: 'If an educational certificate or national ID has an incorrect birth date, reconcile the discrepancy with the issuing civil authority before submitting your passport application.'
      });
      checklist.push({
        id: 'resolve_dob_discrepancy',
        title: 'Verify Primary Civil Birth Record for DOB Precedence',
        details: 'Ensure the application form reflects the exact birth date established in your primary civil registration.',
        mandatory: true,
        status: 'pending',
        category: 'identity'
      });
    }

    // 2. Missing Documents & Alternative Flows
    if (birthProof === 'missing') {
      preparationScore -= 25;
      let altList = [];
      if (countryCode === 'IN') {
        altList = ['Aadhaar Card with full DOB', 'PAN Card issued by IT Dept', 'School Leaving / Matriculation Certificate', 'Policy Bond issued by LIC'];
      } else if (countryCode === 'US') {
        altList = ['Early public records (baptismal certificate, hospital birth record)', 'Early census records', 'Form DS-10 (Birth Affidavit signed by close relative)'];
      } else if (countryCode === 'GB') {
        altList = ['Certificate of Naturalisation / Registration as British Citizen', 'Parents’ full UK birth certificates + marriage proof'];
      } else if (countryCode === 'PK') {
        altList = ['NADRA Smart National ID Card (SNIC)', 'NADRA Child Registration Certificate (CRC / Form-B)'];
      } else if (countryCode === 'BD') {
        altList = ['Smart National ID Card (NID)', '17-digit digital Birth Registration Certificate (BRC) verified on bdris.gov.bd'];
      } else if (countryCode === 'PH') {
        altList = ['PSA Birth Certificate on Security Paper (SECPA)', 'Certified True Copy from Local Civil Registrar (LCR) with PSA endorsement'];
      } else if (countryCode === 'DE') {
        altList = ['International Multilingual Birth Certificate (CIEC)', 'Auszug aus dem Heiratseintrag / Eheurkunde der Eltern'];
      } else if (countryCode === 'FR') {
        altList = ['Acte de naissance copie intégrale (less than 3 months old)', 'Valid Carte Nationale d’Identité (CNI)'];
      } else if (countryCode === 'AE') {
        altList = ['Digital Family Book record from ICP database', 'Emirates ID card'];
      } else if (countryCode === 'SA') {
        altList = ['Civil Affairs (Al-Ahwal Al-Madaniyya) digital birth registry on Absher'];
      } else {
        altList = ['Consult the issuing authority for officially accepted secondary age evidence.'];
      }

      flags.push({
        severity: 'warning',
        code: 'BIRTH_PROOF_MISSING',
        title: 'Primary Birth Proof Unavailable',
        message: `You indicated that primary civil birth documentation is missing.`,
        action: `Verified alternatives for ${countryName}: ${altList.join(' · ')}`
      });
      alternatives.push({
        document: 'Proof of Date of Birth',
        accepted_options: altList
      });
      checklist.push({
        id: 'secure_birth_alt',
        title: 'Gather Secondary Date-of-Birth Evidence',
        details: `Acceptable alternatives for ${countryName}: ${altList.join(', ')}.`,
        mandatory: true,
        status: 'pending',
        category: 'documents'
      });
    }

    if (addressProof === 'missing') {
      preparationScore -= 15;
      flags.push({
        severity: 'warning',
        code: 'ADDRESS_PROOF_MISSING',
        title: 'Current Residential Proof Needed',
        message: 'Passports require verifiable proof of your physical residence for territorial jurisdiction, background checks, and delivery.',
        action: 'Secure a registered residential agreement, continuous utility bills, or active bank passbook.'
      });
    }

    // 3. Service-Specific Rules
    if (service === 'first_passport') {
      checklist.push({
        id: 'citizenship_evidence',
        title: 'Proof of Citizenship / Nationality',
        details: isVerifiedPack && pack.services.first_passport
          ? pack.services.first_passport.documents.find(d => d.document_name.includes('Citizenship') || d.document_name.includes('Date of Birth') || d.document_name.includes('Birth Certificate'))?.conditions || `Provide original civil birth certificate or naturalization record demonstrating ${countryName} citizenship.`
          : `Original document demonstrating ${countryName} citizenship.`,
        mandatory: true,
        status: birthProof === 'have' ? 'completed' : 'pending',
        category: 'documents'
      });
      checklist.push({
        id: 'identity_evidence',
        title: 'Official Photo Identification',
        details: 'Valid unexpired government-issued photo card (National ID, Driver’s Licence, State ID).',
        mandatory: true,
        status: 'completed',
        category: 'documents'
      });
      checklist.push({
        id: 'address_evidence',
        title: 'Current Proof of Residence / Address',
        details: 'Documentation proving your residence at your present physical address.',
        mandatory: true,
        status: addressProof === 'have' ? 'completed' : 'pending',
        category: 'documents'
      });
    } else if (service === 'renewal_reissue') {
      checklist.push({
        id: 'old_passport_surrender',
        title: 'Submit Existing Passport for Physical Cancellation',
        details: 'Original existing passport booklet must be presented. It will be physically cancelled and returned with the new passport.',
        mandatory: true,
        status: status === 'valid' || status === 'expired' ? 'completed' : 'pending',
        category: 'documents'
      });
      if (status === 'expired') {
        checklist.push({
          id: 'expired_validity_check',
          title: 'Confirm Expiry Interval Rules',
          details: 'If expired by more than 3 years, authorities in jurisdictions such as India and the US require fresh identity verification.',
          mandatory: false,
          status: 'pending',
          category: 'procedure'
        });
      }
    } else if (service === 'lost_stolen') {
      preparationScore -= 20;
      let lossNotice = "In India, Pakistan, Bangladesh, and the Philippines, an official Police FIR or Police Missing Certificate is legally required. In the US, Form DS-64 must be filed to permanently invalidate the travel document.";
      if (countryCode === 'US') lossNotice = "In the United States, file Form DS-64 immediately online or submit with Form DS-11; report theft to local police.";
      else if (countryCode === 'IN') lossNotice = "In India, lodge an FIR / Missing Certificate with local police, obtain official stamped copy, and submit Annexure F.";
      else if (countryCode === 'PH') lossNotice = "In the Philippines, an official Police Report (if valid lost passport) and notarized Affidavit of Loss are mandatory.";
      else if (countryCode === 'MX') lossNotice = "In Mexico and at Mexican consulates abroad, lodge an official police report (acta de robo o extravío). You may schedule a replacement appointment or request an Emergency Type E passport if acute travel is necessary (subject to consular assessment).";
      else if (countryCode === 'MY') lossNotice = "In Malaysia, lodge a police report with PDRM immediately; passport loss incurs an investigation interview and statutory fine (RM 400 for adult first loss; RM 300 for child/OKU, payable in addition to passport fee).";
      else if (countryCode === 'SG') lossNotice = "In Singapore, report the loss immediately via MyICA e-Service. First loss carries a statutory penalty fee of SGD 50; repeat loss carries SGD 100 penalty.";
      else if (countryCode === 'KE') lossNotice = "In Kenya, obtain an official Police Abstract and sworn Affidavit of Loss before applying on eCitizen (statutory replacement fee KES 20,050).";
      else if (countryCode === 'ES') lossNotice = "In Spain, file an official police complaint (denuncia previa) before Policía Nacional or Guardia Civil before requesting replacement or Salvoconducto.";
      else if (countryCode === 'LK') lossNotice = "In Sri Lanka, obtain a certified Police Report (Form D.I.E. 39). Conditional penalty is LKR 20,000 if lost within 1 year of issue date, or LKR 15,000 if lost after 1 year with validity remaining (payable in addition to the passport fee).";
      else if (countryCode === 'ID') lossNotice = "In Indonesia, obtain a Police Loss Report and attend a formal BAP interview at Kantor Imigrasi (statutory fine IDR 1,000,000 for loss, IDR 500,000 for damage, payable in addition to booklet fee).";
      else if (countryCode === 'NZ') lossNotice = "In New Zealand, report the lost/stolen passport immediately online at passports.govt.nz to cancel it. Replacement standard fee is NZD 247 adult / NZD 144 child (or NZD 494 / NZD 391 urgent; courier delivery is an additional cost).";

      flags.push({
        severity: 'critical',
        code: 'LOST_STOLEN_MANDATORY_REPORT',
        title: 'Official Loss Declaration / Police Report Required',
        message: 'Lost travel documents must be officially declared to prevent identity theft and fraud.',
        action: lossNotice
      });
      checklist.push({
        id: 'police_loss_report',
        title: 'Official Police Report / Loss Declaration',
        details: lossNotice,
        mandatory: true,
        status: 'pending',
        category: 'procedure'
      });
      checklist.push({
        id: 'loss_circumstance_declaration',
        title: 'Formal Statement Explaining Circumstances of Loss',
        details: 'Formal written statement detailing the precise circumstances under which the passport was lost.',
        mandatory: true,
        status: 'pending',
        category: 'documents'
      });
    } else if (service === 'damaged') {
      checklist.push({
        id: 'damaged_booklet_surrender',
        title: 'Surrender Damaged Passport Booklet',
        details: 'Present the damaged passport. If biographical data or electronic chip is compromised, it may be processed under mutilated travel document rules.',
        mandatory: true,
        status: 'pending',
        category: 'documents'
      });
    }

    // 4. Age-Specific Safeguards
    if (isMinorApplicant) {
      let minorSafeguardText = "Under statutory child protection rules (e.g. US 22 CFR § 51.28, India Annexure D/C, UK parental responsibility, Germany gemeinsames Sorgerecht), parental consent must be legally proven.";
      if (countryCode === 'US') minorSafeguardText = "Under US 22 CFR § 51.28, both parents must appear with the child under 16, or the non-applying parent must provide notarized Form DS-3053.";
      else if (countryCode === 'IN') minorSafeguardText = "Under Indian MEA Passports Rules, minors under 18 require Annexure D signed by both parents, or Annexure C for single parents under defined statutory grounds.";
      else if (countryCode === 'PH') minorSafeguardText = "Under Philippine DFA regulations, the mother's presence or Special Power of Attorney (SPA) is required for illegitimate minors.";
      else if (countryCode === 'IT') minorSafeguardText = "Under Italian DL 69/2023, while adult applicants no longer require the other parent's consent for their own passport, issuance of a passport to a minor child strictly requires the formal consent (atto di assenso) of both parents.";
      else if (countryCode === 'MX') minorSafeguardText = "Under Mexican SRE rules, both parents or guardians must appear in person and execute Form OP-7, or grant consent at an SRE delegation/consulate beforehand.";
      else if (countryCode === 'BR') minorSafeguardText = "Under Brazilian CNJ Resolution 131, both parents must sign the authorization form (Formulário de Autorização de Passaporte para Menor) with notarized signatures.";
      else if (countryCode === 'ZA') minorSafeguardText = "Under South African DHA regulations, both parents must sign Section B of Form DHA-73 and present the child's Unabridged Birth Certificate.";
      else if (countryCode === 'NG') minorSafeguardText = "Under Nigeria Immigration Service rules, both parents must provide a signed Letter of Consent, valid passport data page copies, and the child's NPC birth certificate.";
      else if (countryCode === 'JP') minorSafeguardText = "Under Japanese MOFA regulations, the parent with statutory parental authority (親権者) must sign the application form and present a Koseki Tohon issued within 6 months.";

      flags.push({
        severity: 'info',
        code: 'MINOR_PARENTAL_CONSENT',
        title: 'Parental Consent & Custody Safeguards for Minors',
        message: minorSafeguardText,
        action: 'Ensure all required parents attend the appointment or provide statutory notarized consent.'
      });
      checklist.push({
        id: 'parental_consent_proof',
        title: 'Parental Consent & Relationship Proof',
        details: 'Full birth certificate naming parents, plus valid photo IDs of parents and formal statutory consent.',
        mandatory: true,
        status: 'pending',
        category: 'legal'
      });
    }

    // 5. Filing Channel: Domestic vs Consular / Abroad
    if (location === 'abroad') {
      flags.push({
        severity: 'info',
        code: 'CONSULAR_APPLICATION_CHANNEL',
        title: 'Consular Lodgement & Lodgement Matrix',
        message: `You are applying outside ${countryName}. Diplomatic missions enforce strict consular jurisdiction based on your place of residence in the host country.`,
        action: 'Check your embassy website to confirm whether applications are handled directly by the consular section (e.g. US, Japan, Germany, Brazil, Italy) or through an authorized service partner (e.g. VFS Global, BLS International, TLScontact in select countries).'
      });
      checklist.push({
        id: 'consular_jurisdiction',
        title: 'Confirm Consular Jurisdiction & Lodgement Method',
        details: `Verify which embassy, high commission, or authorized application center serves your current residential area. Do not assume a private intermediary is required without verifying your mission's direct guidance.`,
        mandatory: true,
        status: 'pending',
        category: 'procedure'
      });
      checklist.push({
        id: 'residence_visa_proof',
        title: 'Proof of Legal Residence in Host Country',
        details: 'Current valid residency visa, work permit, permanent resident card, or residence certificate showing lawful status in the host nation.',
        mandatory: true,
        status: 'pending',
        category: 'documents'
      });
      checklist.push({
        id: 'consular_fee_currency',
        title: 'Verify Consular Fee Surcharge & Payment Currency',
        details: 'Passports issued overseas frequently carry statutory consular surcharges and require payment in local host currency, debit card, or postal money order.',
        mandatory: true,
        status: 'pending',
        category: 'payment'
      });
    } else {
      checklist.push({
        id: 'domestic_appointment',
        title: 'Book Appointment at Authorized Domestic Center',
        details: isVerifiedPack && pack.official_portal_url
          ? `Schedule appointment through the verified portal: ${pack.official_portal_url}`
          : `Schedule appointment through the official passport authority of ${countryName}.`,
        mandatory: true,
        status: 'pending',
      });
    }

    // 6. Urgency & Processing Standards
    if (urgency === 'urgent') {
      checklist.push({
        id: 'expedited_fee_slot',
        title: 'Verify Expedited / Tatkaal Eligibility & Slots',
        details: 'Confirm whether your specific service qualifies for expedited processing. Certain cases (major name changes, lost passports without prior record) may be excluded from expedited streams.',
        mandatory: false,
        status: 'pending',
        category: 'procedure'
      });
    } else if (urgency === 'emergency') {
      if (countryCode === 'MX') {
        flags.push({
          severity: 'info',
          code: 'MEXICO_EMERGENCY_APPOINTMENT_POLICY',
          title: 'Mexican Emergency Consular Procedures & Document Types',
          message: 'Under SRE consular regulations, emergency requests are evaluated individually: (1) An unscheduled emergency appointment (cita de emergencia) for a standard biometric passport (3, 6, 10 years, or 1 year for children under 3) carries a 30% statutory surcharge (Art. 20 LFD) and requires documented proof of medical, humanitarian, academic, or work urgency. (2) In verified circumstances of loss, theft, destruction, acute urgent travel, or technical downtime where the standard booklet cannot be produced in time, an Emergency Type E Passport (Pasaporte de Emergencia Tipo E) with limited validity (up to 1 year) may be issued upon consular approval under post-specific procedures (e.g. SRE Embamex Polonia). Emergency document availability and procedures depend on your specific accredited consular post.',
          action: 'Contact your accredited Mexican embassy or consulate (e.g., via emergency consular email) with documentary evidence of your emergency and, if applicable, the police report for a lost or stolen passport.'
        });
      } else {
        flags.push({
          severity: 'warning',
          code: 'EMERGENCY_DOCUMENT_RESTRICTION',
          title: 'Emergency Travel Document Conditions',
          message: 'Emergency travel certificates or temporary passports usually have short validity (typically 30 days to 1 year) and are frequently valid ONLY for direct return travel to your country of citizenship.',
          action: 'Confirm destination acceptance before purchasing non-refundable transit or flight tickets.'
        });
      }
    }

    // 7. General Photographic & Biometric Standards
    checklist.push({
      id: 'photo_spec_check',
      title: 'ICAO-Compliant Passport Photos or Live Capture',
      details: isVerifiedPack && pack.services[service]?.photo_rules
        ? `Specific rules for ${countryName}: ${JSON.stringify(pack.services[service].photo_rules)}`
        : 'Ensure photos follow standard ICAO 9303 guidelines: neutral expression, no glasses, mouth closed, compliant background colour.',
      mandatory: true,
      status: 'pending',
      category: 'photo'
    });

    // 8. Official Payment Channel & Statutory Fee Guidance
    let feeDetails = 'Always pay fees directly through the government portal, designated post office, or authorized bank challan. Never pay private agents claiming to guarantee approval.';
    let feeStatus = 'general_guidance';
    let specificFeeRecord = null;

    if (isVerifiedPack && pack.services && pack.services[service]?.fees) {
      const fees = pack.services[service].fees;
      if (countryCode === 'JP') {
        if (location === 'inside') {
          if (isAdultApplicant) {
            feeDetails = 'Official Japanese domestic statutory fees (effective 1 July 2026): Online application via Mynaportal: ¥8,900; Counter application: ¥9,300 (10-year validity). Note: The 5-year adult option was discontinued for new applications from 1 July 2026.';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'JPY', online: 8900, counter: 9300, validity: '10 years' };
          } else {
            feeDetails = 'Official Japanese domestic statutory fees (effective 1 July 2026): Online application via Mynaportal: ¥4,400; Counter application: ¥4,800 (5-year validity). Application must be signed by parent with parental authority (親権者).';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'JPY', online: 4400, counter: 4800, validity: '5 years' };
          }
        } else {
          feeDetails = 'Overseas consular fees are determined in local host currency under Japanese MOFA consular regulations. Do not use domestic fee amounts. Check your local Japanese Embassy or Consulate-General portal for current local currency payment instructions.';
          feeStatus = 'consular_local_currency';
          specificFeeRecord = { currency: 'Local currency', note: 'Determined by MOFA consular regulations' };
        }
      } else if (countryCode === 'MX') {
        const isUrgentOrEmergency = urgency === 'urgent' || urgency === 'emergency';
        const isUnder3Mx = (rawExactAge !== null && rawExactAge < 3) || (rawExactAge === null && age === 'infant');
        if (location === 'inside') {
          if (isUnder3Mx) {
            feeDetails = 'Official Mexican domestic statutory fees (2026 SRE): 1-year validity (issued exclusively to children under 3 years old): MXN 920 (50% discount: MXN 460). Note: 1-year validity is age-based and not an emergency passport. Pay at authorized bank with SRE voucher.';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'MXN', standard: 920, discounted: 460, validity: '1 year (under 3 only)' };
          } else if (isSeniorApplicant) {
            feeDetails = 'Official Mexican domestic statutory fees (2026 SRE with 50% statutory senior discount for age 60+): 3-year: MXN 900; 6-year: MXN 1,220; 10-year: MXN 2,140. (Standard fees without discount: 3-yr MXN 1,795; 6-yr MXN 2,440; 10-yr MXN 4,280). Note: Agricultural workers under SAWP are excluded from the 10-year discount.';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'MXN', standard: [1795, 2440, 4280], discounted: [900, 1220, 2140], validity: '3, 6, 10 years' };
          } else {
            feeDetails = 'Official Mexican domestic statutory fees (2026 SRE): 3-year: MXN 1,795; 6-year: MXN 2,440; 10-year (adults only): MXN 4,280. 50% discount available for certified disabled, seniors 60+, and SAWP workers (3/6 yr): 3-yr MXN 900; 6-yr MXN 1,220; 10-yr MXN 2,140. (1-year validity is restricted exclusively to children under 3).';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'MXN', standard: [1795, 2440, 4280], discounted: [900, 1220, 2140], validity: '3, 6, 10 years' };
          }
          if (isUrgentOrEmergency) {
            feeDetails += ' SRE delegations issue standard scheduled passports same-day (2–4 hours) without surcharge; unscheduled emergency slots require in-person proof of urgency.';
          }
        } else {
          // Overseas Consular USD
          if (isUrgentOrEmergency) {
            if (isUnder3Mx) {
              feeDetails = 'Official Mexican emergency consular fees in USD (Art. 20 LFD with 30% statutory surcharge): 1-year validity (children under 3 only): Base USD 44 + Surcharge USD 13 = Total USD 57 (50% discount: Base USD 22 + Surcharge USD 6.50 = Total USD 28.50). Paid at Mexican Consulate abroad.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'USD', base: 44, surcharge: 13, total: 57, discounted_total: 28.5, validity: '1 year (under 3 only)' };
            } else if (isSeniorApplicant) {
              feeDetails = 'Official Mexican emergency consular fees in USD (Art. 20 LFD with 50% discount + 30% surcharge for age 60+): 3-year: Total USD 65.50 (Base $50.50 + Surcharge $15); 6-year: Total USD 89.00 (Base $68.50 + Surcharge $20.50); 10-year: Total USD 136.00 (Base $104.50 + Surcharge $31.50). (Standard emergency totals without discount: 3-yr $131, 6-yr $178, 10-yr $272 USD).';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'USD', standard_totals: [131, 178, 272], discounted_totals: [65.5, 89, 136], validity: '3, 6, 10 years' };
            } else {
              feeDetails = 'Official Mexican emergency consular fees in USD (Art. 20 LFD with 30% statutory surcharge): 3-year: Total USD 131 (Base $101 + Surcharge $30); 6-year: Total USD 178 (Base $137 + Surcharge $41); 10-year (adults 18+ only): Total USD 272 (Base $209 + Surcharge $63). (1-year under 3 only: Total USD 57). 50% discount available for certified disabled/seniors: 3-yr $65.50, 6-yr $89, 10-yr $136 USD.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'USD', standard_totals: [131, 178, 272], discounted_totals: [65.5, 89, 136], validity: '3, 6, 10 years' };
            }
          } else {
            // Standard Consular USD
            if (isUnder3Mx) {
              feeDetails = 'Official Mexican consular fees in USD (2026 Ley Federal de Derechos): 1-year validity (children under 3 only): USD 44 (50% discount: USD 22). (Approved emergency appointments incur 30% surcharge: total $57 / discounted $28.50 USD). Paid at Mexican Consulate abroad.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'USD', standard: 44, discounted: 22, emergency_total: 57, validity: '1 year' };
            } else if (isSeniorApplicant) {
              feeDetails = 'Official Mexican consular fees in USD (2026 with 50% discount for seniors 60+ and disabled): 3-year: USD 50.50; 6-year: USD 68.50; 10-year: USD 104.50. (Standard consular fees: 3-yr USD 101; 6-yr USD 137; 10-yr USD 209). Note: Approved emergency appointments incur 30% surcharge (discounted emergency totals: 3-yr $65.50, 6-yr $89.00, 10-yr $136.00 USD).';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'USD', standard: [101, 137, 209], discounted: [50.5, 68.5, 104.5], validity: '3, 6, 10 years' };
            } else {
              feeDetails = 'Official Mexican consular fees in USD (2026 Ley Federal de Derechos): 3-year: USD 101 (50% discount: USD 50.50); 6-year: USD 137 (50% discount: USD 68.50); 10-year (adults 18+ only): USD 209 (50% discount: USD 104.50). 1-year (under 3 only): USD 44 (discounted: USD 22). Note: Approved emergency appointments incur 30% surcharge (emergency totals: 1-yr $57, 3-yr $131, 6-yr $178, 10-yr $272 USD).';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'USD', standard: [101, 137, 209], discounted: [50.5, 68.5, 104.5], validity: '3, 6, 10 years' };
            }
          }
        }
      } else if (countryCode === 'NG') {
        if (location === 'inside') {
          feeDetails = 'Official Nigerian domestic statutory fees (NIS Ministry of Interior reform): 32-page 5-year booklet: ₦100,000; 64-page 10-year booklet: ₦200,000. Payment must be made strictly online via passport.immigration.gov.ng official gateway; cash payments at passport control offices are strictly prohibited. Verified NIN required.';
          feeStatus = 'verified_statutory';
          specificFeeRecord = { currency: 'NGN', booklet_32_5yr: 100000, booklet_64_10yr: 200000 };
        } else {
          feeDetails = 'Official Nigerian diaspora consular fees (NIS reform): 32-page 5-year booklet: USD 150; 64-page 10-year booklet: USD 230. National Identification Number (NIN) verification is mandatory prior to booking biometric enrollment abroad.';
          feeStatus = 'verified_statutory';
          specificFeeRecord = { currency: 'USD', booklet_32_5yr: 150, booklet_64_10yr: 230 };
        }
      } else if (countryCode === 'ID') {
        if (location === 'inside') {
          // Check if applicant is under 17
          const isUnder17 = canonicalAgeBand === 'child_under_12' || canonicalAgeBand === 'minor_12_to_16';
          const isMarried = profile.maritalStatus === 'married' || profile.isMarried === true || special === 'married_under_17' || profile.applicantCategory === 'married_under_17';
          const isSingle = profile.maritalStatus === 'single' || profile.maritalStatus === 'unmarried' || profile.isMarried === false;
          const maritalStatusKnown = profile.maritalStatus !== undefined || profile.isMarried !== undefined || special === 'married_under_17' || profile.applicantCategory === 'married_under_17';

          if (isUnder17) {
            if (isMarried) {
              // Legally married minor exception (Permenkumham No. 18/2022 Pasal 2A)
              feeDetails = 'Official Indonesian domestic statutory fees (PP No. 28/2019 & No. 45/2024 / Permenkumham No. 18/2022 Pasal 2A): Statutory exception for legally married minor applied: Eligible for 10-year validity (Non-electronic 10-year: IDR 650,000; Electronic 10-year: IDR 950,000) or standard 5-year validity (Non-electronic: IDR 350,000; Electronic: IDR 650,000). Official marriage certificate (Buku Nikah / Akta Perkawinan) is mandatory. Same-day express service surcharge (Layanan Percepatan) is +IDR 1,000,000 (kept separate from booklet fee). Lost fine: IDR 1,000,000; Damaged fine: IDR 500,000.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = {
                currency: 'IDR',
                legal_marriage_exception: true,
                non_electronic_5yr: 350000,
                non_electronic_10yr: 650000,
                electronic_5yr: 650000,
                electronic_10yr: 950000,
                express_surcharge: 1000000,
                lost_fine: 1000000,
                damaged_fine: 500000,
                validity_options: ['5_year', '10_year']
              };
              flags.push({
                severity: 'info',
                code: 'INDONESIA_MARRIED_MINOR_EXCEPTION',
                title: 'Permenkumham No. 18/2022 Statutory Marriage Exception',
                message: 'Applicant under 17 qualifies for 10-year validity on the statutory ground of legal marriage under Permenkumham No. 18/2022 Pasal 2A.',
                action: 'Present original authenticated Buku Nikah / Akta Perkawinan along with e-KTP/KK and parental/spousal documentation at Kantor Imigrasi.'
              });
              checklist.push({
                id: 'id_marriage_proof_under_17',
                title: 'Submit Authenticated Marriage Certificate (Buku Nikah / Akta Perkawinan)',
                details: 'Under Permenkumham No. 18/2022 Pasal 2A, citizens under 17 qualify for 10-year validity upon presenting original government marriage certificate.',
                mandatory: true,
                status: 'pending',
                category: 'identity'
              });
            } else if (maritalStatusKnown && isSingle) {
              // Explicitly unmarried minor
              feeDetails = 'Official Indonesian domestic statutory fees (PP No. 28/2019 & No. 45/2024 / Ditjen Imigrasi): Unmarried minors under 17 receive 5-year validity passports: Non-electronic 5-year: IDR 350,000; Electronic e-Paspor 5-year: IDR 650,000. (Ten-year validity is not available to unmarried minors under 17). Same-day express service surcharge (Layanan Percepatan): +IDR 1,000,000 (kept separate from booklet fee). Lost passport fine: IDR 1,000,000; Damaged fine: IDR 500,000.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = {
                currency: 'IDR',
                legal_marriage_exception: false,
                non_electronic_5yr: 350000,
                electronic_5yr: 650000,
                express_surcharge: 1000000,
                lost_fine: 1000000,
                damaged_fine: 500000,
                validity_options: ['5_year']
              };
            } else {
              // Marital status is missing / unknown for under-17 applicant
              feeDetails = 'Official Indonesian domestic statutory fee guidance (Ditjen Imigrasi / Permenkumham No. 18/2022 Pasal 2A): Marital status unconfirmed for applicant under 17. Minors under 17 standardly receive 5-year validity passports: Non-electronic 5-year: IDR 350,000; Electronic e-Paspor 5-year: IDR 650,000. Conditional statutory exception: Under Permenkumham No. 18/2022 Pasal 2A, applicants under 17 who are legally married qualify for 10-year validity (Non-electronic 10-year: IDR 650,000; Electronic 10-year: IDR 950,000) upon presenting official marriage proof. Confirm your marital status at Kantor Imigrasi to verify exact statutory eligibility and fees. Same-day express service surcharge (Layanan Percepatan) is +IDR 1,000,000 (kept separate from booklet fee). Lost fine: IDR 1,000,000; Damaged fine: IDR 500,000.';
              feeStatus = 'confirmation_required';
              specificFeeRecord = {
                currency: 'IDR',
                status: 'confirmation_required',
                legal_marriage_exception: 'conditional_unconfirmed',
                non_electronic_5yr: 350000,
                non_electronic_10yr: 650000,
                electronic_5yr: 650000,
                electronic_10yr: 950000,
                express_surcharge: 1000000,
                lost_fine: 1000000,
                damaged_fine: 500000,
                validity_options: ['5_year', '10_year_if_married']
              };
              flags.push({
                severity: 'warning',
                code: 'INDONESIA_MARITAL_STATUS_CONFIRMATION',
                title: 'Indonesian Minor Validity & Statutory Marriage Exception',
                message: 'Ten-year validity is standard for citizens aged 17+. Minors under 17 standardly receive 5-year passports, unless legally married under Permenkumham No. 18/2022 Pasal 2A.',
                action: 'If the applicant is under 17 and legally married, bring an authenticated marriage certificate (Buku Nikah / Akta Perkawinan) to Kantor Imigrasi to request 10-year validity. Otherwise, the standard 5-year passport applies.'
              });
            }
          } else {
            // Adult (17+)
            feeDetails = 'Official Indonesian domestic statutory fees by passport type and validity (PP No. 28/2019 & No. 45/2024 / Ditjen Imigrasi): Non-electronic ordinary passport: 5-year validity IDR 350,000 / 10-year validity IDR 650,000; Electronic e-Paspor: 5-year validity IDR 650,000 / 10-year validity IDR 950,000. (10-year validity standardly available to citizens aged 17+). Same-day express service surcharge (Layanan Percepatan): +IDR 1,000,000 (kept separate from booklet fee). Lost passport fine: IDR 1,000,000; Damaged fine: IDR 500,000.';
            feeStatus = 'verified_statutory';
            specificFeeRecord = {
              currency: 'IDR',
              legal_marriage_exception: 'not_applicable_adult',
              non_electronic_5yr: 350000,
              non_electronic_10yr: 650000,
              electronic_5yr: 650000,
              electronic_10yr: 950000,
              express_surcharge: 1000000,
              lost_fine: 1000000,
              damaged_fine: 500000,
              validity_options: ['5_year', '10_year']
            };
          }
        } else {
          feeDetails = 'Indonesian overseas consular fees are collected in local host currency under SIMKIM regulations at KBRI/KJRI diplomatic missions. Check your accredited Indonesian embassy portal.';
          feeStatus = 'consular_local_currency';
          specificFeeRecord = { currency: 'Local currency', note: 'Determined by SIMKIM consular tariff' };
        }
      } else if (countryCode === 'IE') {
        if (isMinorApplicant) {
          feeDetails = 'Official Irish statutory fees (Passport Service, DFA): Standard child 5-year online booklet: €20 via Passport Online. Paper Post Passport: €30 (+ €9.50 An Post charge).';
          feeStatus = 'verified_statutory';
          specificFeeRecord = { currency: 'EUR', online_child: 20, paper_child: 30 };
        } else {
          feeDetails = 'Official Irish statutory fees (Passport Service, DFA): Standard adult 10-year online booklet: €75 (large 66-page: €105); Adult Passport Booklet + Card bundle: €100. Urgent appointment in Dublin/Cork: €150 (same-day) / €110 (4-day). Apply via dfa.ie/passportonline.';
          feeStatus = 'verified_statutory';
          specificFeeRecord = { currency: 'EUR', online_adult: 75, large_booklet: 105, bundle_with_card: 100, urgent_same_day: 150 };
        }
      } else if (countryCode === 'KE') {
        feeDetails = 'Official Kenyan statutory fees (Directorate of Immigration Services / immigration.go.ke / eCitizen): Ordinary EAC e-Passport 34-page Series A: KES 7,550; 50-page Series B: KES 9,550; 66-page Series C: KES 12,050. Replacement of lost passport: KES 20,050; Mutilated passport replacement: KES 20,050. Payment must be made strictly online via official eCitizen portal.';
        feeStatus = 'verified_statutory';
        specificFeeRecord = { currency: 'KES', series_a: 7550, series_b: 9550, series_c: 12050, lost_replacement: 20050, mutilated_replacement: 20050 };
      } else if (countryCode === 'MY') {
        const isLostOrDamaged = service === 'lost_stolen' || service === 'damaged' || status === 'lost' || status === 'damaged';
        
        // 1. Resolve effective category using canonical age band & special categories
        const isOku = profile.applicantCategory === 'oku' || profile.applicantCategory === 'oku_under_18' || profile.applicantCategory === 'oku_18_and_older' || profile.applicantCategory === 'oku_18_plus' || profile.isOku === true || (special === 'accessibility' && profile.accessibilityCard === 'oku');
        const isStudent = profile.applicantCategory === 'students_under_21_degree_abroad' || profile.applicantCategory === 'student_degree_overseas' || profile.applicantCategory === 'student_overseas' || profile.applicantCategory === 'student';
        const isHajj = profile.applicantCategory === 'hajj_pilgrims' || profile.applicantCategory === 'hajj_pilgrim' || profile.applicantCategory === 'hajj';
        const isJimStaff = profile.applicantCategory === 'immigration_officers_staff' || profile.applicantCategory === 'jim_staff' || profile.applicantCategory === 'immigration_staff';
        const isPmdPmr = profile.applicantCategory === 'pmd_pmr_diplomatic_official' || profile.applicantCategory === 'pmd_pmr' || profile.applicantCategory === 'diplomatic_official';
        const isPmaDep = profile.applicantCategory === 'pma_dependents' || profile.applicantCategory === 'pma_dependent';

        let categoryKey = 'adult_18_to_59_years';
        if (isJimStaff) {
          categoryKey = 'immigration_officers_staff';
        } else if (isPmdPmr) {
          categoryKey = 'pmd_pmr_diplomatic_official';
        } else if (isPmaDep) {
          categoryKey = 'pma_dependents';
        } else if (profile.applicantCategory === 'oku_under_18') {
          categoryKey = 'oku_under_18';
        } else if (profile.applicantCategory === 'oku_18_and_older' || profile.applicantCategory === 'oku_18_plus') {
          categoryKey = 'oku_18_and_older';
        } else if (isOku) {
          if (canonicalAgeBand === 'child_under_12' || canonicalAgeBand === 'minor_12_to_16' || canonicalAgeBand === 'age_17') {
            categoryKey = 'oku_under_18';
          } else {
            categoryKey = 'oku_18_and_older';
          }
        } else if (isStudent) {
          categoryKey = 'students_under_21_degree_abroad';
        } else if (isHajj) {
          categoryKey = 'hajj_pilgrims';
        } else if (canonicalAgeBand === 'senior_60_plus') {
          categoryKey = 'senior_citizens_60_and_older';
        } else if (canonicalAgeBand === 'child_under_12') {
          categoryKey = 'children_under_12_years';
        } else if (canonicalAgeBand === 'minor_12_to_16' || canonicalAgeBand === 'age_17') {
          categoryKey = 'applicants_under_18'; // 12 to 17
        } else {
          categoryKey = 'adult_18_to_59_years';
        }

        // Validity period requested
        const rawValidity = profile.validity || profile.validityPeriod || profile.selectedValidity;
        let selectedValidity = null;
        if (rawValidity === '5' || rawValidity === 5 || rawValidity === '5_year' || rawValidity === '5_years') selectedValidity = '5_year';
        else if (rawValidity === '10' || rawValidity === 10 || rawValidity === '10_year' || rawValidity === '10_years') selectedValidity = '10_year';

        // Loss tier (1st, 2nd, 3rd)
        let lossTier = 'first_loss';
        const rawLoss = profile.lossTier || profile.replacementLoss || profile.replacementCount;
        if (rawLoss === 'second' || rawLoss === 'second_loss' || rawLoss === 2 || rawLoss === '2') lossTier = 'second_loss';
        else if (rawLoss === 'third' || rawLoss === 'third_loss' || rawLoss === 3 || rawLoss === '3') lossTier = 'third_loss';

        if (isLostOrDamaged) {
          // REPLACEMENT FEES
          if (!selectedValidity) {
            // Missing validity period for replacement
            feeDetails = 'Official Malaysian lost/damaged passport replacement guidance (Jabatan Imigresen Malaysia): Replacement fees depend strictly on the previous passport validity (5-year vs. 10-year), applicant age/category, and replacement frequency (1st, 2nd, or 3rd loss). 5-year replacement: Adults RM 400 (1st) / RM 700 (2nd) / RM 1,200 (3rd); Children under 12 & Seniors RM 300 / RM 600 / RM 1,100; OKU under 18 RM 200 / RM 500 / RM 1,000; Diplomatic/Official Gratis (RM 0). Note: Immigration Department Officers and Staff (JIM) are NOT eligible for 5-year passport replacement — this category is restricted to 10-year validity only. 10-year replacement: Adults RM 550 (1st) / RM 850 (2nd) / RM 1,350 (3rd); Seniors RM 375 / RM 675 / RM 1,175; OKU 18+ RM 200 / RM 500 / RM 1,000; Immigration Department Officers and Staff (JIM) RM 200 / RM 500 / RM 1,000; Diplomatic/Official Gratis (RM 0). Please confirm your previous passport validity period to determine the exact statutory replacement fee. Mandatory police report and Borang IM.42c investigation required.';
            feeStatus = 'validity_confirmation_required';
            specificFeeRecord = {
              currency: 'MYR',
              status: 'validity_confirmation_required',
              category: categoryKey,
              prompt: 'Please confirm previous passport validity (5-year vs. 10-year) to calculate exact replacement fee.'
            };
            flags.push({
              severity: 'warning',
              code: 'MALAYSIA_REPLACEMENT_VALIDITY_REQUIRED',
              title: 'Previous Passport Validity Confirmation Required',
              message: 'Malaysian statutory replacement fees differ between 5-year and 10-year passports. Confirm your previous document validity to calculate the precise fee.',
              action: 'Check your previous passport or police report for validity duration.'
            });
          } else if (selectedValidity === '10_year') {
            // Check eligibility for 10-year validity
            if (categoryKey === 'applicants_under_18' || categoryKey === 'children_under_12_years' || categoryKey === 'oku_under_18' || categoryKey === 'students_under_21_degree_abroad' || categoryKey === 'hajj_pilgrims') {
              feeDetails = `Ten-year passport validity is NOT eligible for ${categoryKey.replace(/_/g, ' ')} under Malaysian Immigration Department regulations. Replacement cannot be calculated for a 10-year passport for this category. Minors under 18, students under 21, and Hajj pilgrims are eligible strictly for 5-year validity.`;
              feeStatus = 'not_eligible';
              specificFeeRecord = {
                currency: 'MYR',
                validity: '10_year',
                status: 'not_eligible',
                reason: 'Ten-year validity not available to this category under official JIM regulations.'
              };
              preparationScore -= 10;
              flags.push({
                severity: 'warning',
                code: 'MALAYSIA_VALIDITY_INELIGIBLE',
                title: 'Requested Validity Not Eligible',
                message: `Ten-year validity replacement is not eligible for ${categoryKey.replace(/_/g, ' ')}. Minors under 18, students under 21, and Hajj pilgrims are eligible strictly for 5-year validity.`,
                action: 'Select 5-year validity replacement.'
              });
            } else if (categoryKey === 'pmd_pmr_diplomatic_official' || categoryKey === 'pma_dependents') {
              feeDetails = `Official Malaysian statutory replacement fee for 10-year passport (${categoryKey === 'pma_dependents' ? 'PMA Dependents' : 'PMD / PMR Diplomatic & Official Passports'}, ${lossTier.replace(/_/g, ' ')}): 100% EXEMPT (Gratis / RM 0 across all tiers) with official authorization. Police report, Borang IM.42c, and investigation approval required.`;
              feeStatus = 'verified_statutory';
              specificFeeRecord = {
                currency: 'MYR',
                validity: '10_year',
                category: categoryKey,
                loss_tier: lossTier,
                base_fee: 0,
                calculated_difference: 0,
                statutory_penalty: 0,
                total_replacement_fee: 0,
                status: 'eligible_free'
              };
            } else if (categoryKey === 'immigration_officers_staff') {
              const officialAmount = lossTier === 'first_loss' ? 200 : (lossTier === 'second_loss' ? 500 : 1000);
              feeDetails = `Official Malaysian statutory replacement amount for 10-year passport (Immigration Department Officers and Staff / Pegawai dan Kakitangan JIM, ${lossTier.replace(/_/g, ' ')}): RM ${officialAmount} per the official JIM fee schedule. Departmental verification, police report, Borang IM.42c, and investigation approval by the Director General of Immigration are strictly required.`;
              feeStatus = 'verified_statutory';
              specificFeeRecord = {
                currency: 'MYR',
                validity: '10_year',
                category: categoryKey,
                loss_tier: lossTier,
                official_replacement_amount: officialAmount,
                total_replacement_fee: officialAmount
              };
            } else {
              // Standard 10-year replacement schedule
              let baseFee = 350;
              const penaltyFee = lossTier === 'first_loss' ? 200 : (lossTier === 'second_loss' ? 500 : 1000);
              if (categoryKey === 'adult_18_to_59_years') {
                baseFee = 350;
              } else if (categoryKey === 'senior_citizens_60_and_older') {
                baseFee = 175;
              } else if (categoryKey === 'oku_18_and_older') {
                baseFee = 0;
              }
              const replacementFee = baseFee + penaltyFee;
              feeDetails = `Official Malaysian statutory replacement fee for 10-year passport (${categoryKey.replace(/_/g, ' ')}, ${lossTier.replace(/_/g, ' ')}): RM ${replacementFee} (comprising RM ${baseFee} base fee + RM ${penaltyFee} statutory penalty / calculated difference). Police report, Borang IM.42c, and investigation approval by Director General of Immigration are strictly mandatory.`;
              feeStatus = 'verified_statutory';
              specificFeeRecord = {
                currency: 'MYR',
                validity: '10_year',
                category: categoryKey,
                loss_tier: lossTier,
                base_fee: baseFee,
                calculated_difference: penaltyFee,
                statutory_penalty: penaltyFee,
                total_replacement_fee: replacementFee
              };
            }
          } else {
            // 5-year replacement schedule
            if (categoryKey === 'oku_18_and_older') {
              feeDetails = 'Adult OKU applicants in Malaysia are issued 10-year passports under current JIM regulations. Five-year replacement is not eligible for adult OKU applicants.';
              feeStatus = 'not_eligible';
              specificFeeRecord = {
                currency: 'MYR',
                validity: '5_year',
                status: 'not_eligible',
                reason: 'Adult OKU applicants are issued 10-year validity passports under current regulations.'
              };
            } else if (categoryKey === 'pmd_pmr_diplomatic_official' || categoryKey === 'pma_dependents') {
              feeDetails = `Official Malaysian statutory replacement fee for 5-year passport (${categoryKey === 'pma_dependents' ? 'PMA Dependents' : 'PMD / PMR Diplomatic & Official Passports'}, ${lossTier.replace(/_/g, ' ')}): 100% EXEMPT (Gratis / RM 0 across all tiers) with official authorization. Police report, Borang IM.42c, and investigation approval required.`;
              feeStatus = 'verified_statutory';
              specificFeeRecord = {
                currency: 'MYR',
                validity: '5_year',
                category: categoryKey,
                loss_tier: lossTier,
                base_fee: 0,
                calculated_difference: 0,
                statutory_penalty: 0,
                total_replacement_fee: 0,
                status: 'eligible_free'
              };
            } else if (categoryKey === 'immigration_officers_staff') {
              feeDetails = 'Malaysian Immigration Department Officers and Staff (Pegawai dan Kakitangan JIM) are NOT eligible for 5-year passport replacement. Under the official JIM fee schedule, this category is restricted to 10-year validity passports. Replacement fees for a lost or damaged passport apply only to 10-year passports. Police report (Borang IM.42c) and departmental authorization still required.';
              feeStatus = 'not_eligible';
              specificFeeRecord = {
                currency: 'MYR',
                validity: '5_year',
                category: categoryKey,
                status: 'not_eligible',
                reason: 'JIM staff are not eligible for 5-year passport replacement. Staff category is restricted to 10-year passports under the official JIM fee schedule.'
              };
            } else {
              let baseFee = 200;
              const penaltyFee = lossTier === 'first_loss' ? 200 : (lossTier === 'second_loss' ? 500 : 1000);
              if (categoryKey === 'adult_18_to_59_years' || categoryKey === 'applicants_under_18') {
                baseFee = 200;
              } else if (categoryKey === 'children_under_12_years' || categoryKey === 'senior_citizens_60_and_older' || categoryKey === 'students_under_21_degree_abroad' || categoryKey === 'hajj_pilgrims') {
                baseFee = 100;
              } else if (categoryKey === 'oku_under_18') {
                baseFee = 0;
              }
              const replacementFee = baseFee + penaltyFee;
              feeDetails = `Official Malaysian statutory replacement fee for 5-year passport (${categoryKey.replace(/_/g, ' ')}, ${lossTier.replace(/_/g, ' ')}): RM ${replacementFee} (comprising RM ${baseFee} base fee + RM ${penaltyFee} statutory penalty / calculated difference). Police report, Borang IM.42c, and investigation approval by Director General of Immigration are strictly mandatory.`;
              feeStatus = 'verified_statutory';
              specificFeeRecord = {
                currency: 'MYR',
                validity: '5_year',
                category: categoryKey,
                loss_tier: lossTier,
                base_fee: baseFee,
                calculated_difference: penaltyFee,
                statutory_penalty: penaltyFee,
                total_replacement_fee: replacementFee
              };
            }
          }
        } else {
          // ORIGINAL PASSPORT FEES (First-time or renewal)
          if (selectedValidity === '10_year') {
            if (categoryKey === 'applicants_under_18' || categoryKey === 'children_under_12_years' || categoryKey === 'oku_under_18' || categoryKey === 'students_under_21_degree_abroad' || categoryKey === 'hajj_pilgrims') {
              feeDetails = `Ten-year passport validity is NOT eligible for ${categoryKey.replace(/_/g, ' ')} under Malaysian Immigration Department regulations. Minors under 18, students under 21, and Hajj pilgrims are eligible strictly for 5-year validity.`;
              feeStatus = 'not_eligible';
              specificFeeRecord = {
                currency: 'MYR',
                validity: '10_year',
                status: 'not_eligible',
                reason: 'Ten-year validity is restricted to adult applicants aged 18 and older.'
              };
              preparationScore -= 10;
              flags.push({
                severity: 'warning',
                code: 'MALAYSIA_VALIDITY_INELIGIBLE',
                title: 'Requested Validity Not Eligible',
                message: `Ten-year validity is restricted to adult applicants aged 18 and older. ${categoryKey.replace(/_/g, ' ')} is eligible strictly for 5-year validity.`,
                action: 'Select 5-year validity on the official portal.'
              });
            } else if (categoryKey === 'immigration_officers_staff') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Officers and Staff of the Immigration Department of Malaysia (Pegawai dan Kakitangan JIM): 100% EXEMPT (FREE / RM 0) for 10-year validity passport upon departmental verification.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity: '10_year', category: categoryKey, amount: 0, status: 'eligible_free' };
            } else if (categoryKey === 'pmd_pmr_diplomatic_official') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Diplomatic (PMD) & Official (PMR) Passports: 100% EXEMPT (FREE / RM 0) for 10-year validity with approval aligned with Kementerian Luar Negeri (KLN).';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity: '10_year', category: categoryKey, amount: 0, status: 'eligible_free' };
            } else if (categoryKey === 'pma_dependents') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): PMA Dependents: 100% EXEMPT (FREE / RM 0) for 10-year validity aligned with PMD or PMR Principal authorization.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity: '10_year', category: categoryKey, amount: 0, status: 'eligible_free' };
            } else if (categoryKey === 'oku_18_and_older') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Persons with Disabilities (OKU aged 18+ with official JKM card): 100% EXEMPT (FREE / RM 0) for 10-year validity passport.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity: '10_year', category: categoryKey, amount: 0, status: 'eligible_free' };
            } else if (categoryKey === 'senior_citizens_60_and_older') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Senior Citizens (Warga Emas aged 60+): RM 175 for 10-year validity (50% statutory concession).';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity: '10_year', category: categoryKey, amount: 175, status: 'eligible' };
            } else {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Adults aged 18–59: RM 350 for 10-year validity passport.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity: '10_year', category: categoryKey, amount: 350, status: 'eligible' };
            }
          } else if (selectedValidity === '5_year') {
            if (categoryKey === 'oku_18_and_older') {
              feeDetails = 'Adult OKU applicants in Malaysia are issued 10-year passports under current JIM regulations. Five-year passport is not eligible for adult OKU applicants.';
              feeStatus = 'not_eligible';
              specificFeeRecord = {
                currency: 'MYR',
                validity: '5_year',
                status: 'not_eligible',
                reason: 'Adult OKU applicants are issued 10-year validity passports under current regulations.'
              };
              flags.push({
                severity: 'info',
                code: 'MALAYSIA_VALIDITY_INELIGIBLE',
                title: 'Requested Validity Not Applicable',
                message: 'Adult OKU applicants in Malaysia are issued 10-year validity passports with 100% statutory fee exemption.',
                action: 'Select 10-year validity on the official portal.'
              });
            } else if (categoryKey === 'immigration_officers_staff') {
              feeDetails = 'Malaysian Immigration Department Officers and Staff (Pegawai dan Kakitangan JIM) are NOT eligible for a 5-year passport. The official JIM fee schedule restricts this category to 10-year validity passports only (issued Gratis). Please select 10-year validity to proceed.';
              feeStatus = 'not_eligible';
              specificFeeRecord = { currency: 'MYR', validity: '5_year', category: categoryKey, amount: null, status: 'not_eligible', reason: 'JIM fee schedule restricts officers and staff (Pegawai dan Kakitangan JIM) to 10-year validity only. Five-year passports are not issued to this category.' };
              preparationScore -= 10;
              flags.push({
                severity: 'info',
                code: 'MALAYSIA_VALIDITY_INELIGIBLE',
                title: 'Validity Not Eligible for This Category',
                message: 'Malaysian Immigration Department officers and staff (Pegawai dan Kakitangan JIM) are restricted to 10-year passports under the official JIM fee schedule. Five-year passports are not issued to this category.',
                action: 'Select 10-year validity on the official JIM portal.'
              });
            } else if (categoryKey === 'pmd_pmr_diplomatic_official') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Diplomatic (PMD) & Official (PMR) Passports: 100% EXEMPT (FREE / RM 0) for 5-year validity with approval aligned with Kementerian Luar Negeri (KLN).';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity: '5_year', category: categoryKey, amount: 0, status: 'eligible_free' };
            } else if (categoryKey === 'pma_dependents') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): PMA Dependents: 100% EXEMPT (FREE / RM 0) for 5-year validity aligned with PMD or PMR Principal authorization.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity: '5_year', category: categoryKey, amount: 0, status: 'eligible_free' };
            } else if (categoryKey === 'oku_under_18') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Persons with Disabilities (OKU cardholders under 18): 100% EXEMPT (FREE / RM 0) for 5-year validity passport.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity: '5_year', category: categoryKey, amount: 0, status: 'eligible_free' };
            } else if (categoryKey === 'children_under_12_years') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Children under 12 years (0 to 11): RM 100 for 5-year validity passport. (Note: Applicants aged 12 pay the standard under-18 youth rate of RM 200).';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity: '5_year', category: categoryKey, amount: 100, status: 'eligible' };
            } else if (categoryKey === 'applicants_under_18') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Youth / Minors aged 12 to 17: RM 200 for 5-year validity passport.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity: '5_year', category: categoryKey, amount: 200, status: 'eligible' };
            } else if (categoryKey === 'senior_citizens_60_and_older') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Senior Citizens (Warga Emas aged 60+): RM 100 for 5-year validity (50% statutory concession).';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity: '5_year', category: categoryKey, amount: 100, status: 'eligible' };
            } else if (categoryKey === 'students_under_21_degree_abroad' || categoryKey === 'hajj_pilgrims') {
              feeDetails = `Official Malaysian statutory concession fee (Jabatan Imigresen Malaysia): ${categoryKey === 'hajj_pilgrims' ? 'Hajj Pilgrims' : 'Students under 21 studying overseas'}: RM 100 for 5-year validity.`;
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity: '5_year', category: categoryKey, amount: 100, status: 'eligible' };
            } else {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Adults aged 18–59: RM 200 for 5-year validity passport.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity: '5_year', category: categoryKey, amount: 200, status: 'eligible' };
            }
          } else {
            // No specific validity selected - show full eligible options for this category
            if (categoryKey === 'immigration_officers_staff') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Officers and Staff of Immigration Department (Pegawai dan Kakitangan JIM): ONLY 10-year validity passports are issued to this category (Gratis / FREE / RM 0) upon departmental verification. Five-year passports are NOT eligible for this category under the official JIM fee schedule. Select 10-year validity to proceed.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity_5yr: { status: 'not_eligible', amount: null, reason: 'JIM fee schedule restricts staff to 10-year validity only.' }, validity_10yr: { status: 'eligible_free', amount: 0 } };
            } else if (categoryKey === 'pmd_pmr_diplomatic_official') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Diplomatic (PMD) & Official (PMR) Passports: 100% EXEMPT (FREE / RM 0) for both 5-year and 10-year validity with KLN authorization.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity_5yr: { status: 'eligible_free', amount: 0 }, validity_10yr: { status: 'eligible_free', amount: 0 } };
            } else if (categoryKey === 'pma_dependents') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): PMA Dependents: 100% EXEMPT (FREE / RM 0) for both 5-year and 10-year validity aligned with PMD/PMR Principal.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity_5yr: { status: 'eligible_free', amount: 0 }, validity_10yr: { status: 'eligible_free', amount: 0 } };
            } else if (categoryKey === 'oku_under_18') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Persons with Disabilities (OKU cardholders under 18): 100% EXEMPT (FREE / RM 0) for 5-year validity passport. (Minors under 18 are not eligible for 10-year validity).';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity_5yr: { status: 'eligible', amount: 0 }, validity_10yr: { status: 'not_eligible' } };
            } else if (categoryKey === 'oku_18_and_older') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Persons with Disabilities (OKU cardholders aged 18+): 100% EXEMPT (FREE / RM 0) for 10-year validity passport. (Adult OKU applicants are issued 10-year passports).';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity_5yr: { status: 'not_eligible' }, validity_10yr: { status: 'eligible', amount: 0 } };
            } else if (categoryKey === 'children_under_12_years') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Kanak-kanak (Children under 12 years / 0 to 11): RM 100 for 5-year validity. (Applicants under 18 are not eligible for 10-year validity).';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity_5yr: 100, validity_10yr: 'not_eligible' };
            } else if (categoryKey === 'applicants_under_18') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Youth / Minors aged 12 to 17: RM 200 for 5-year validity. (Applicants under 18 are not eligible for 10-year validity).';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity_5yr: 200, validity_10yr: 'not_eligible' };
            } else if (categoryKey === 'senior_citizens_60_and_older') {
              feeDetails = 'Official Malaysian statutory fees (Jabatan Imigresen Malaysia): Warga Emas (Senior Citizens aged 60+): RM 100 for 5-year validity (50% concession) or RM 175 for 10-year validity (50% concession). Verified automatically via MyKad.';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', senior_5yr: 100, senior_10yr: 175, standard_adult_5yr: 200, standard_adult_10yr: 350 };
            } else if (categoryKey === 'students_under_21_degree_abroad' || categoryKey === 'hajj_pilgrims') {
              feeDetails = `Official Malaysian statutory concession fee (Jabatan Imigresen Malaysia): ${categoryKey === 'hajj_pilgrims' ? 'Hajj Pilgrims' : 'Students under 21 studying overseas'}: RM 100 for 5-year validity. (Not eligible for 10-year validity).`;
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', validity_5yr: 100, validity_10yr: 'not_eligible' };
            } else {
              feeDetails = 'Official Malaysian statutory fees by validity (Jabatan Imigresen Malaysia): Adults aged 18–59: RM 200 for 5-year validity; RM 350 for 10-year validity. Senior citizens (60+): RM 100 (5-yr) / RM 175 (10-yr). Children under 12: RM 100 (5-yr). Youth 12–17: RM 200 (5-yr). Persons with Disabilities (OKU with official JKM card): 100% EXEMPT (RM 0; 5-yr for under 18, 10-yr for 18+). Lost passport penalty: 5-year replacement (Adult RM 400 1st / RM 700 2nd / RM 1,200 3rd; Child & Senior RM 300 / RM 600 / RM 1,100; OKU RM 200 / RM 500 / RM 1,000); 10-year replacement (Adult RM 550 1st / RM 850 2nd / RM 1,350 3rd; Senior RM 375 / RM 675 / RM 1,175; OKU RM 200 / RM 500 / RM 1,000).';
              feeStatus = 'verified_statutory';
              specificFeeRecord = { currency: 'MYR', adult_5yr: 200, adult_10yr: 350, senior_5yr: 100, senior_10yr: 175, child_under_12_5yr: 100, youth_12_to_17_5yr: 200 };
            }
          }
        }
      } else if (countryCode === 'NP') {
        if (urgency === 'urgent' || urgency === 'emergency') {
          feeDetails = 'Official Nepalese urgent statutory fees (Department of Passports Kathmandu fast-track): Standard 34-page e-Passport: NPR 12,000 (compared to NPR 5,000 standard DAO rate); Frequent traveller 66-page: NPR 20,000. Delivery within 2–3 business days at Tripureshwor.';
          feeStatus = 'verified_statutory';
          specificFeeRecord = { currency: 'NPR', urgent_34p: 12000, urgent_66p: 20000, standard_dao_34p: 5000 };
        } else {
          feeDetails = 'Official Nepalese statutory fees (Department of Passports): Standard 34-page e-Passport at District Administration Office (DAO): NPR 5,000; Frequent traveller 66-page: NPR 10,000. Fast-track urgent at DoP Kathmandu: NPR 12,000 (34-page). Mandatory NID number required.';
          feeStatus = 'verified_statutory';
          specificFeeRecord = { currency: 'NPR', dao_standard_34p: 5000, dao_standard_66p: 10000, dop_urgent_34p: 12000 };
        }
      } else if (countryCode === 'NZ') {
        if (urgency === 'emergency') {
          feeDetails = 'Official New Zealand after-hours callout emergency passport fees (DIA / passports.govt.nz): Adult 10-year total fee: NZD 1,001; Child 5-year total fee: NZD 898. For urgent travel outside normal business hours. Note: Courier delivery is an additional cost.';
          feeStatus = 'verified_statutory';
          specificFeeRecord = { currency: 'NZD', adult_callout_total: 1001, child_callout_total: 898, courier_note: 'Additional cost' };
        } else if (urgency === 'urgent') {
          feeDetails = 'Official New Zealand urgent passport total fees (DIA / passports.govt.nz): Adult 10-year total fee: NZD 494 (ready in up to 3 working days); Child 5-year total fee: NZD 391. (Standard fees are NZD 247 adult / NZD 144 child). Note: Courier delivery is an additional cost.';
          feeStatus = 'verified_statutory';
          specificFeeRecord = { currency: 'NZD', adult_urgent_total: 494, child_urgent_total: 391, adult_standard: 247, child_standard: 144, courier_note: 'Additional cost' };
        } else {
          const isNzChild = (rawExactAge !== null ? rawExactAge < 16 : (age === 'minor' || age === 'infant'));
          if (isNzChild) {
          feeDetails = 'Official New Zealand statutory fees (Department of Internal Affairs / passports.govt.nz): Child 5-year passport (under 16): Standard service NZD 144 (ready in up to 10–15 working days); Urgent service NZD 391 (ready in up to 3 working days); After-hours callout NZD 898. Note: Courier delivery is an additional cost.';
          feeStatus = 'verified_statutory';
          specificFeeRecord = { currency: 'NZD', child_standard_5yr: 144, child_urgent_5yr: 391, child_callout_5yr: 898, courier_note: 'Additional cost' };
        } else {
          feeDetails = 'Official New Zealand statutory fees (Department of Internal Affairs / passports.govt.nz): Adult 10-year passport (16+): Standard service NZD 247 (ready in up to 10–15 working days); Urgent service NZD 494 (ready in up to 3 working days); After-hours callout service NZD 1,001. Child 5-year: Standard NZD 144 / Urgent NZD 391 / Callout NZD 898. Note: Courier delivery is an additional cost.';
          feeStatus = 'verified_statutory';
          specificFeeRecord = { currency: 'NZD', adult_standard_10yr: 247, adult_urgent_10yr: 494, adult_callout_10yr: 1001, child_standard_5yr: 144, child_urgent_5yr: 391, courier_note: 'Additional cost' };
        }
        }
      } else if (countryCode === 'SG') {
        feeDetails = 'Official Singapore statutory fees (Immigration & Checkpoints Authority): Online application via MyICA: SGD 70 (10-year validity for 16+, 5-year for under 16). In-person counter application at ICA Building: SGD 80. Lost passport penalty: SGD 50 (1st loss) / SGD 100 (subsequent).';
        feeStatus = 'verified_statutory';
        specificFeeRecord = { currency: 'SGD', online: 70, counter: 80, first_loss_penalty: 50, repeat_loss_penalty: 100 };
      } else if (countryCode === 'ES') {
        feeDetails = 'Official Spanish statutory fees (Policía Nacional - Tasas del Estado): Standard passport issuance/renewal: €30.00. (Issued on the spot during domestic police appointment). 100% EXEMPTION (FREE €0.00) for members of large families (Familias Numerosas under Ley 40/2003).';
        feeStatus = 'verified_statutory';
        specificFeeRecord = { currency: 'EUR', standard: 30.0, familia_numerosa: 0.0 };
      } else if (countryCode === 'LK') {
        const isLkChild = (rawExactAge !== null ? rawExactAge < 16 : (age === 'minor' || age === 'infant'));
        if (urgency === 'urgent' || urgency === 'emergency') {
          if (isLkChild) {
            feeDetails = 'Official Sri Lankan urgent fees (Department of Immigration & Emigration / immigration.gov.lk): Child under 16 3-year minor urgent service: LKR 9,000 (compared to LKR 3,000 normal service); Child 10-year urgent service: LKR 20,000. Issued same day at Battaramulla Head Office.';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'LKR', child_3yr_urgent: 9000, child_3yr_normal: 3000, child_10yr_urgent: 20000 };
          } else {
            feeDetails = 'Official Sri Lankan urgent fees (Department of Immigration & Emigration / immigration.gov.lk): All Countries Urgent One-Day Service: LKR 20,000 (compared to LKR 10,000 normal service; issued same day at Battaramulla Head Office); Child 3-year urgent: LKR 9,000.';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'LKR', urgent_all_countries: 20000, normal_all_countries: 10000, child_3yr_urgent: 9000 };
          }
        } else {
          if (isLkChild) {
            feeDetails = 'Official Sri Lankan statutory fees (Department of Immigration & Emigration / immigration.gov.lk): Child under 16 3-year validity: LKR 3,000 normal / LKR 9,000 urgent one-day; Standard 10-year passport: LKR 10,000 normal / LKR 20,000 urgent. Approved studio digital photo receipt required.';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'LKR', child_3yr_normal: 3000, child_3yr_urgent: 9000, child_10yr_normal: 10000, child_10yr_urgent: 20000 };
          } else {
            feeDetails = 'Official Sri Lankan statutory fees (Department of Immigration & Emigration / immigration.gov.lk): All Countries Normal Service: LKR 10,000 (10-year validity); Urgent One-Day Service: LKR 20,000. Child 3-year minor option: LKR 3,000 normal / LKR 9,000 urgent. Conditional lost-passport penalty: LKR 20,000 if lost within 1 year of issue date; LKR 15,000 if lost after 1 year with validity remaining (payable in addition to the passport fee). No penalty if validity already expired.';
            feeStatus = 'verified_statutory';
            specificFeeRecord = { currency: 'LKR', normal_all_countries: 10000, urgent_all_countries: 20000, child_3yr_normal: 3000, child_3yr_urgent: 9000, lost_penalty_under_1yr: 20000, lost_penalty_over_1yr: 15000 };
          }
        }
      }
    } else if (!isVerifiedPack) {
      feeDetails = `Fee Confirmation Required: Official statutory fees for ${countryName} have not been individually verified. Confirm the current statutory fee and official payment channel directly on the official government portal before making any payment.`;
      feeStatus = 'confirmation_required';
    }

    checklist.push({
      id: 'official_fee_payment',
      title: 'Pay Official Government Fee Directly',
      details: feeDetails,
      mandatory: true,
      status: 'pending',
      category: 'payment',
      feeStatus,
      feeRecord: specificFeeRecord
    });

    // Dimension-aware coverage status and readiness score protections
    if (serviceCoverage.status === 'awaiting_research') {
      preparationScore = Math.min(70, preparationScore);
      flags.unshift({
        severity: 'warning',
        code: 'SERVICE_AWAITING_RESEARCH',
        title: `Service-Level Rules Awaiting Research: ${countryName}`,
        message: serviceCoverage.summary,
        action: `Verify all requirements, fees, and appointment procedures directly with the official passport authority of ${countryName}.`
      });
    } else if (serviceCoverage.status === 'general_guidance') {
      preparationScore = Math.min(75, preparationScore);
      if (serviceCoverage.dimensions?.service?.status === 'general_guidance') {
        flags.unshift({
          severity: 'warning',
          code: 'SERVICE_GENERAL_GUIDANCE_ONLY',
          title: `General Guidance: No Dedicated Country Pack for ${this.formatServiceName(service)}`,
          message: serviceCoverage.dimensions.service.summary,
          action: `Consult the official portal of ${pack && pack.authority_name ? pack.authority_name : countryName} to confirm specific forms, documentary proof, and fees for this service.`
        });
      }
      if (serviceCoverage.dimensions?.urgency?.status === 'general_guidance') {
        flags.unshift({
          severity: 'warning',
          code: 'ROUTE_GENERAL_GUIDANCE_ONLY',
          title: `General Guidance: No Dedicated Route for ${this.formatUrgencyName(urgency)}`,
          message: serviceCoverage.dimensions.urgency.summary,
          action: `Confirm emergency or urgent processing procedures directly with the official passport authority of ${countryName}.`
        });
      }
      if (serviceCoverage.dimensions?.channel?.status === 'general_guidance') {
        flags.unshift({
          severity: 'warning',
          code: 'CHANNEL_GENERAL_GUIDANCE_ONLY',
          title: `General Guidance: Overseas Consular Application for ${countryName}`,
          message: serviceCoverage.dimensions.channel.summary,
          action: `Check with your accredited embassy or consulate for host-country lodging procedures.`
        });
      }
    } else if (serviceCoverage.status === 'partial') {
      preparationScore = Math.min(80, preparationScore);
      if (serviceCoverage.dimensions?.service?.status === 'partial') {
        flags.unshift({
          severity: 'info',
          code: 'SERVICE_COVERAGE_PARTIAL',
          title: `Partial Service Coverage: ${this.formatServiceName(service)}`,
          message: serviceCoverage.dimensions.service.summary,
          action: `Review the specific notices in your checklist and verify final lodgement requirements on the official authority portal.`
        });
      }
      if (serviceCoverage.dimensions?.urgency?.status === 'partial') {
        flags.unshift({
          severity: 'info',
          code: 'ROUTE_COVERAGE_PARTIAL',
          title: `Partial Processing Route Coverage: ${this.formatUrgencyName(urgency)}`,
          message: serviceCoverage.dimensions.urgency.summary,
          action: `Confirm expedited slot availability, quotas, and service exclusions directly with ${countryName} passport authorities.`
        });
      }
      if (serviceCoverage.dimensions?.channel?.status === 'partial') {
        flags.unshift({
          severity: 'info',
          code: 'CHANNEL_COVERAGE_PARTIAL',
          title: `Partial Channel Coverage: Consular / Overseas Lodgement`,
          message: serviceCoverage.dimensions.channel.summary,
          action: `Confirm local consular fees in host currency and submission procedures with your accredited diplomatic mission.`
        });
      }
    }

    // Calculate final status and preparation completeness
    preparationScore = Math.max(10, Math.min(100, preparationScore));
    let statusLabel = 'PREPARED';

    if (!isVerifiedPack || serviceCoverage.status === 'awaiting_research') {
      statusLabel = 'OFFICIAL_CONFIRMATION_RECOMMENDED';
    } else if (serviceCoverage.status === 'general_guidance') {
      statusLabel = (preparationScore < 50 ? 'CRITICAL_ATTENTION_REQUIRED' : (preparationScore < 75 ? 'NEEDS_ATTENTION' : 'GENERAL_GUIDANCE_ONLY'));
    } else if (serviceCoverage.status === 'partial') {
      statusLabel = (preparationScore < 50 ? 'CRITICAL_ATTENTION_REQUIRED' : (preparationScore < 75 ? 'NEEDS_ATTENTION' : 'VERIFICATION_RECOMMENDED'));
    } else if (preparationScore < 50) {
      statusLabel = 'CRITICAL_ATTENTION_REQUIRED';
    } else if (preparationScore < 75) {
      statusLabel = 'NEEDS_ATTENTION';
    }

    return {
      country: {
        code: countryCode,
        name: countryName,
        isVerified: isVerifiedPack,
        authorityName: pack ? pack.authority_name : null,
        officialPortalUrl: pack ? pack.official_portal_url : null,
        lastReviewed: pack ? pack.last_reviewed : null,
        statusNote: isVerifiedPack ? 'Verified Official Source Pack' : 'General Preparation Pack (Awaiting detailed official research)'
      },
      serviceCoverage,
      applicant: {
        exactAge: rawExactAge,
        canonicalAgeBand,
        isMinor: isMinorApplicant,
        isAdult: isAdultApplicant,
        isSenior: isSeniorApplicant
      },
      readinessScore: preparationScore,
      statusLabel,
      flags,
      alternatives,
      checklist,
      feeGuidance: {
        countryCode,
        location,
        feeStatus,
        details: feeDetails,
        specificRecord: specificFeeRecord,
        serviceCoverageStatus: serviceCoverage.status
      },
      summary: {
        totalItems: checklist.length,
        mandatoryItems: checklist.filter(c => c.mandatory).length,
        criticalFlags: flags.filter(f => f.severity === 'critical').length,
        warningFlags: flags.filter(f => f.severity === 'warning').length,
        serviceCoverageStatus: serviceCoverage.status,
        isDemonstration: false
      }
    };
  }
}

// Export for Node and browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PassportRulesEngine };
}
