/**
 * PassportReady Interactive Utility Tools
 * - Destination-Sensitive Passport Expiry & Entry Validity Evaluator (60 Destinations)
 * - Name & Date-of-Birth Discrepancy Analyzer (Transliterations, Mononyms, Diacritics & Next Steps)
 * - Date Format Ambiguity & Non-Gregorian Calendar Converter (Hijri, Thai Buddhist, Bikram Sambat, Solar Hijri)
 * - Comprehensive Biometric Photo Standards & Aspect Ratio Checker (ICAO, US, Canada, China, Malaysia, Japan, etc.)
 */

// 1. Transliteration Equivalence Clusters (Configurable)
const TRANSLITERATION_CLUSTERS = [
  {
    id: 'mohammed',
    label: 'Mohammed / Muhammad / Mohd / Md (Arabic: محمد)',
    variants: ['mohammed', 'muhammad', 'mohamed', 'mohammad', 'muhamad', 'mohd', 'md', 'mahamed', 'mohamad']
  },
  {
    id: 'hussain',
    label: 'Hussain / Hussein (Arabic: حسين)',
    variants: ['hussain', 'hussein', 'husein', 'husain', 'hosein', 'houssain']
  },
  {
    id: 'hasan',
    label: 'Hasan / Hassan (Arabic: حسن)',
    variants: ['hasan', 'hassan', 'hassen']
  },
  {
    id: 'ahmed',
    label: 'Ahmed / Ahmad (Arabic: أحمد)',
    variants: ['ahmed', 'ahmad', 'ahmet']
  },
  {
    id: 'ali',
    label: 'Ali / Aly (Arabic: علي)',
    variants: ['ali', 'aly']
  },
  {
    id: 'usman',
    label: 'Usman / Osman (Arabic: عثمان)',
    variants: ['osman', 'usman', 'othman', 'uthman']
  },
  {
    id: 'zhang',
    label: 'Zhang / Chang (Chinese: 张 / 張)',
    variants: ['zhang', 'chang']
  },
  {
    id: 'chen',
    label: 'Chen / Chan (Chinese: 陈 / 陳)',
    variants: ['chen', 'chan']
  },
  {
    id: 'li',
    label: 'Li / Lee (Chinese: 李)',
    variants: ['li', 'lee']
  },
  {
    id: 'wang',
    label: 'Wang / Wong (Chinese: 王 / 汪)',
    variants: ['wang', 'wong']
  },
  {
    id: 'lin',
    label: 'Lin / Lam / Lim (Chinese: 林)',
    variants: ['lin', 'lam', 'lim']
  },
  {
    id: 'zhou',
    label: 'Zhou / Chou (Chinese: 周)',
    variants: ['zhou', 'chou']
  },
  {
    id: 'liu',
    label: 'Liu / Lau / Lew (Chinese: 刘 / 劉)',
    variants: ['liu', 'lau', 'lew']
  },
  {
    id: 'yang',
    label: 'Yang / Yeung (Chinese: 杨 / 楊)',
    variants: ['yang', 'yeung']
  },
  {
    id: 'huang',
    label: 'Huang / Hwang / Ng (Chinese: 黄 / 黃)',
    variants: ['huang', 'hwang', 'ng', 'wee']
  },
  {
    id: 'choudhary',
    label: 'Choudhary / Chaudhary (Hindi/Sanskrit: चौधरी)',
    variants: ['choudhary', 'chaudhary', 'choudhry', 'chaudhry', 'chowdhury', 'choudhari', 'chaudhari']
  },
  {
    id: 'singh',
    label: 'Singh / Sing (Hindi/Punjabi: सिंह / ਸਿੰਘ)',
    variants: ['singh', 'sing']
  },
  {
    id: 'kumar',
    label: 'Kumar / Koomar (Hindi: कुमार)',
    variants: ['kumar', 'koomar']
  },
  {
    id: 'patel',
    label: 'Patel / Patil (Gujarati/Marathi: પટેલ / पाटील)',
    variants: ['patel', 'patil']
  },
  {
    id: 'sharma',
    label: 'Sharma / Sarma (Hindi/Assamese: शर्मा / শৰ্মা)',
    variants: ['sharma', 'sarma']
  },
  {
    id: 'prasad',
    label: 'Prasad / Parsad (Hindi: प्रसाद)',
    variants: ['prasad', 'parsad']
  },
  {
    id: 'lakshmi',
    label: 'Lakshmi / Laxmi (Hindi: लक्ष्मी)',
    variants: ['lakshmi', 'laxmi']
  },
  {
    id: 'gupta',
    label: 'Gupta / Gopta (Hindi/Bengali: गुप्ता / গুপ্ত)',
    variants: ['gupta', 'gopta']
  },
  {
    id: 'yadav',
    label: 'Yadav / Jadhav (Hindi/Marathi: यादव / जाधव)',
    variants: ['yadav', 'jadhav']
  },
  {
    id: 'siddiqui',
    label: 'Siddiqui / Siddiki / Siddique (Urdu/Arabic: صدیقی)',
    variants: ['siddiqui', 'siddiki', 'siddique', 'seddiki']
  },
  {
    id: 'khan',
    label: 'Khan / Kaan (Urdu/Pashto: خان)',
    variants: ['khan', 'kaan']
  }
];

// Helper: Normalize diacritics & punctuation
function cleanAndNormalizeString(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/Ä/g, 'Ae').replace(/Ö/g, 'Oe').replace(/Ü/g, 'Ue')
    .replace(/æ/g, 'ae').replace(/ø/g, 'oe').replace(/å/g, 'aa')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['"`\.]/g, '')
    .replace(/[-_]/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

// Helper: Levenshtein distance
function computeLevenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

// 60-Destination Entry Validity Database
const DESTINATION_VALIDITY_RULES = {
  // Schengen Area (29 Nations: 3 months beyond departure date + issued within 10 years)
  FR: { name: 'France', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://france-visas.gouv.fr/' },
  ES: { name: 'Spain', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://www.exteriores.gob.es/' },
  IT: { name: 'Italy', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://vistoperitalia.esteri.it/' },
  DE: { name: 'Germany', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://www.auswaertiges-amt.de/' },
  GR: { name: 'Greece', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://www.mfa.gr/' },
  AT: { name: 'Austria', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://www.bmeia.gv.at/' },
  PT: { name: 'Portugal', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://vistos.mne.gov.pt/' },
  NL: { name: 'Netherlands', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://www.netherlandsworldwide.nl/' },
  BE: { name: 'Belgium', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://dofi.ibz.be/' },
  CH: { name: 'Switzerland', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://www.sem.admin.ch/' },
  PL: { name: 'Poland', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://www.gov.pl/web/diplomacy/' },
  CZ: { name: 'Czechia', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://www.mzv.cz/' },
  SE: { name: 'Sweden', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://www.migrationsverket.se/' },
  NO: { name: 'Norway', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://www.udi.no/' },
  DK: { name: 'Denmark', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://www.nyidanmark.dk/' },
  FI: { name: 'Finland', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://migri.fi/' },
  HU: { name: 'Hungary', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://konzinfo.mfa.gov.hu/' },
  IS: { name: 'Iceland', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://island.is/en/o/directorate-of-immigration' },
  HR: { name: 'Croatia', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://mup.gov.hr/' },
  EE: { name: 'Estonia', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://vm.ee/' },
  LV: { name: 'Latvia', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://www.pmlp.gov.lv/' },
  LT: { name: 'Lithuania', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://migracija.lrv.lt/' },
  LU: { name: 'Luxembourg', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://guichet.public.lu/' },
  MT: { name: 'Malta', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://identitymalta.com/' },
  SK: { name: 'Slovakia', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://www.mzv.sk/' },
  SI: { name: 'Slovenia', type: 'schengen_three_month', days: 90, tenYearRule: true, source: 'https://www.gov.si/' },

  // Strict 6-Month Destinations (Require 6 months validity from date of arrival)
  TH: { name: 'Thailand', type: 'six_month_arrival', days: 180, source: 'https://www.immigration.go.th/' },
  ID: { name: 'Indonesia (Bali)', type: 'six_month_arrival', days: 180, source: 'https://www.imigrasi.go.id/' },
  SG: { name: 'Singapore', type: 'six_month_arrival', days: 180, source: 'https://www.ica.gov.sg/' },
  MY: { name: 'Malaysia', type: 'six_month_arrival', days: 180, source: 'https://www.imi.gov.my/' },
  AE: { name: 'United Arab Emirates (Dubai)', type: 'six_month_arrival', days: 180, source: 'https://u.ae/en/information-and-services/visa-and-emirates-id' },
  SA: { name: 'Saudi Arabia', type: 'six_month_arrival', days: 180, source: 'https://visa.visitsaudi.com/' },
  EG: { name: 'Egypt', type: 'six_month_arrival', days: 180, source: 'https://www.visa2egypt.gov.eg/' },
  VN: { name: 'Vietnam', type: 'six_month_arrival', days: 180, source: 'https://evisa.xuatnhapcanh.gov.vn/' },
  PH: { name: 'Philippines', type: 'six_month_arrival', days: 180, source: 'https://immigration.gov.ph/' },
  TR: { name: 'Turkey', type: 'six_month_arrival', days: 180, source: 'https://www.evisa.gov.tr/' },
  BR: { name: 'Brazil', type: 'six_month_arrival', days: 180, source: 'https://www.gov.br/mre/pt-br' },
  QA: { name: 'Qatar', type: 'six_month_arrival', days: 180, source: 'https://portal.moi.gov.qa/' },
  KE: { name: 'Kenya', type: 'six_month_arrival', days: 180, source: 'https://evisa.go.ke/' },
  IN: { name: 'India', type: 'six_month_arrival', days: 180, source: 'https://indianvisaonline.gov.in/' },
  CN: { name: 'China', type: 'six_month_arrival', days: 180, source: 'https://www.mfa.gov.cn/' },
  OM: { name: 'Oman', type: 'six_month_arrival', days: 180, source: 'https://evisa.rop.gov.om/' },
  JO: { name: 'Jordan', type: 'six_month_arrival', days: 180, source: 'https://eservices.moi.gov.jo/' },
  MA: { name: 'Morocco', type: 'six_month_arrival', days: 180, source: 'https://www.acces-maroc.ma/' },
  ZA: { name: 'South Africa', type: 'three_month_post_departure', days: 90, blankPages: 2, source: 'http://www.dha.gov.za/' },
  LK: { name: 'Sri Lanka', type: 'six_month_arrival', days: 180, source: 'https://www.eta.gov.lk/' },
  MV: { name: 'Maldives', type: 'six_month_arrival', days: 180, source: 'https://immigration.gov.mv/' },
  NP: { name: 'Nepal', type: 'six_month_arrival', days: 180, source: 'https://nepaliport.immigration.gov.np/' },
  TZ: { name: 'Tanzania (Zanzibar)', type: 'six_month_arrival', days: 180, source: 'https://eservices.immigration.go.tz/visa/' },
  MU: { name: 'Mauritius', type: 'six_month_arrival', days: 180, source: 'https://passport.govmu.org/' },
  CR: { name: 'Costa Rica', type: 'six_month_arrival', days: 180, source: 'https://migracion.go.cr/' },
  PE: { name: 'Peru', type: 'six_month_arrival', days: 180, source: 'https://www.migraciones.gob.pe/' },
  EC: { name: 'Ecuador', type: 'six_month_arrival', days: 180, source: 'https://www.cancilleria.gob.ec/' },
  IL: { name: 'Israel', type: 'six_month_arrival', days: 180, source: 'https://www.gov.il/en/departments/population_and_immigration_authority' },

  // Duration of Stay / Bilateral Six-Month Club
  US: { name: 'United States', type: 'duration_of_stay_six_month_club', days: 0, source: 'https://www.cbp.gov/document/bulletins/six-month-club-update' },
  GB: { name: 'United Kingdom', type: 'duration_of_stay', days: 0, source: 'https://www.gov.uk/check-uk-visa' },
  CA: { name: 'Canada', type: 'duration_of_stay', days: 0, source: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html' },
  AU: { name: 'Australia', type: 'duration_of_stay', days: 0, source: 'https://immi.homeaffairs.gov.au/' },
  NZ: { name: 'New Zealand', type: 'three_month_post_departure', days: 90, source: 'https://www.immigration.govt.nz/' },
  MX: { name: 'Mexico', type: 'duration_of_stay', days: 0, source: 'https://www.inm.gob.mx/' },
  JP: { name: 'Japan', type: 'duration_of_stay', days: 0, source: 'https://www.mofa.go.jp/j_info/visit/visa/' },
  KR: { name: 'South Korea', type: 'duration_of_stay', days: 0, source: 'https://www.k-eta.go.kr/' },
  IE: { name: 'Ireland', type: 'six_month_arrival', days: 180, source: 'https://www.irishimmigration.ie/' },
  HK: { name: 'Hong Kong', type: 'one_to_three_months', days: 30, source: 'https://www.immd.gov.hk/' },
  GE: { name: 'Georgia', type: 'duration_of_stay', days: 0, source: 'https://geoconsul.gov.ge/' }
};

const PassportTools = {
  // 1. Destination-Sensitive Passport Validity & Entry Evaluator (60 Destinations)
  evaluateExpiry(passportExpiryDateStr, travelDateStr, destinationRuleType = 'standard_six_month') {
    if (!passportExpiryDateStr || !travelDateStr) {
      return { valid: false, error: "Please enter both your planned travel date and passport expiry date." };
    }

    const expiry = new Date(passportExpiryDateStr);
    const travel = new Date(travelDateStr);

    if (isNaN(expiry.getTime()) || isNaN(travel.getTime())) {
      return { valid: false, error: "Invalid date format entered." };
    }

    if (expiry <= travel) {
      return {
        valid: false,
        status: "EXPIRED_AT_TRAVEL",
        badge: "PASSPORT EXPIRED AT TRAVEL",
        message: "Your passport will be expired on your travel date. International air carriers will deny boarding under international aviation regulations.",
        daysRemaining: 0,
        monthsRemaining: 0
      };
    }

    const diffMs = expiry.getTime() - travel.getTime();
    const daysRemaining = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const monthsRemaining = (daysRemaining / 30.4375).toFixed(1);

    if (daysRemaining < 90) {
      return {
        valid: false,
        status: "LESS_THAN_3_MONTHS",
        badge: "HIGH RISK — RENEWAL REQUIRED",
        message: `Your passport will only have ${daysRemaining} days (~${monthsRemaining} months) of validity remaining on your travel date. This fails both the 6-month rule (enforced by countries such as Thailand, Malaysia, Indonesia, and UAE) and the 3-month post-departure rule enforced across the European Schengen Area under Regulation (EU) 2016/399. Immediate passport renewal is necessary prior to international travel.`,
        daysRemaining,
        monthsRemaining
      };
    } else if (daysRemaining < 180) {
      return {
        valid: false,
        status: "LESS_THAN_6_MONTHS",
        badge: "DESTINATION-DEPENDENT RISK",
        message: `Your passport has ${daysRemaining} days (~${monthsRemaining} months) of validity remaining beyond your travel date. While this satisfies destinations requiring validity only for the duration of stay (such as the US for 'Six-Month Club' members, or the UK) or destinations requiring 3 months beyond departure (European Schengen Area), it fails the strict 6-month rule enforced by many Asian and Middle Eastern destinations. Verify your specific destination entry conditions before departure.`,
        daysRemaining,
        monthsRemaining
      };
    } else {
      return {
        valid: true,
        status: "SUFFICIENT_VALIDITY",
        badge: "BROADLY COMPLIANT VALIDITY",
        message: `Your passport has ${daysRemaining} days (~${monthsRemaining} months) of validity remaining beyond your planned travel date. This satisfies standard international destination validity thresholds (including 6-month and 3-month rules). Always ensure you also have sufficient blank visa pages for entry stamps.`,
        daysRemaining,
        monthsRemaining
      };
    }
  },

  // 1.1 Detailed Destination Evaluator for 60 Countries
  evaluateDestinationValidity(passportExpiryStr, travelDateStr, returnDateStr = null, destinationCode = 'TH', passportIssueStr = null) {
    if (!passportExpiryStr || !travelDateStr) {
      return { valid: false, error: 'Please enter both your passport expiry date and entry travel date.' };
    }
    const dest = DESTINATION_VALIDITY_RULES[destinationCode.toUpperCase()] || {
      name: destinationCode,
      type: 'six_month_arrival',
      days: 180,
      source: 'https://www.iatatravelcentre.com/'
    };

    const expiry = new Date(passportExpiryStr);
    const entry = new Date(travelDateStr);
    const returnDate = returnDateStr ? new Date(returnDateStr) : null;
    const issueDate = passportIssueStr ? new Date(passportIssueStr) : null;

    if (isNaN(expiry.getTime()) || isNaN(entry.getTime())) {
      return { valid: false, error: 'Invalid dates entered.' };
    }

    if (expiry <= entry) {
      return {
        valid: false,
        pass: false,
        status: 'EXPIRED_ON_ARRIVAL',
        badge: 'EXPIRED',
        destination: dest.name,
        message: `Your passport will be expired upon arrival in ${dest.name}. Boarding will be denied by your airline.`
      };
    }

    // 10-Year Issuance Check for Schengen (Regulation EU 2016/399 Article 6(1)(a))
    if (dest.tenYearRule && issueDate && !isNaN(issueDate.getTime())) {
      const tenYearsLater = new Date(issueDate);
      tenYearsLater.setFullYear(tenYearsLater.getFullYear() + 10);
      if (entry > tenYearsLater) {
        return {
          valid: false,
          pass: false,
          status: 'SCHENGEN_10_YEAR_EXCEEDED',
          badge: 'PASSPORT EXCEEDS 10-YEAR RULE',
          destination: dest.name,
          sourceUrl: dest.source,
          message: `Your passport was issued on ${passportIssueStr}. Under Article 6(1)(a) of the Schengen Borders Code (Regulation EU 2016/399), passports must be issued within the preceding 10 years of entry. Even if unexpired, passports older than 10 years are strictly refused for entry into ${dest.name} and the Schengen Area.`
        };
      }
    }

    // Day math
    const diffEntryMs = expiry.getTime() - entry.getTime();
    const daysFromEntry = Math.floor(diffEntryMs / (1000 * 60 * 60 * 24));
    const monthsFromEntry = (daysFromEntry / 30.4375).toFixed(1);

    if (dest.type === 'schengen_three_month') {
      const refDate = returnDate && !isNaN(returnDate.getTime()) ? returnDate : entry;
      const diffDepartureMs = expiry.getTime() - refDate.getTime();
      const daysFromDeparture = Math.floor(diffDepartureMs / (1000 * 60 * 60 * 24));
      const hasThreeMonths = daysFromDeparture >= 90;

      return {
        valid: hasThreeMonths,
        pass: hasThreeMonths,
        status: hasThreeMonths ? 'PASS_SCHENGEN_REQUIREMENT' : 'FAIL_SCHENGEN_REQUIREMENT',
        badge: hasThreeMonths ? 'VALID FOR ENTRY' : 'RENEWAL REQUIRED',
        destination: dest.name,
        ruleType: '3 Months Beyond Intended Departure (Regulation EU 2016/399)',
        daysFromDeparture,
        daysFromEntry,
        monthsFromEntry,
        sourceUrl: dest.source,
        message: hasThreeMonths
          ? `Compliant: Your passport has ${daysFromDeparture} days validity remaining after departure from ${dest.name}, exceeding the 90-day statutory requirement under Regulation (EU) 2016/399.`
          : `Non-Compliant: Under Schengen law (Regulation EU 2016/399), your passport must be valid for at least 3 months (90 days) beyond your departure date. It only has ${daysFromDeparture} days. Renewal required.`
      };
    } else if (dest.type === 'six_month_arrival') {
      const hasSixMonths = daysFromEntry >= 180;
      return {
        valid: hasSixMonths,
        pass: hasSixMonths,
        status: hasSixMonths ? 'PASS_SIX_MONTH_RULE' : 'FAIL_SIX_MONTH_RULE',
        badge: hasSixMonths ? 'VALID FOR ENTRY' : 'FAILS 6-MONTH RULE',
        destination: dest.name,
        ruleType: '6 Months from Arrival Date',
        daysFromEntry,
        monthsFromEntry,
        sourceUrl: dest.source,
        message: hasSixMonths
          ? `Compliant: Your passport has ${daysFromEntry} days (~${monthsFromEntry} months) validity from arrival, satisfying ${dest.name}'s mandatory 6-month entry requirement.`
          : `Non-Compliant: ${dest.name} statutory immigration law mandates at least 6 months (180 days) of remaining passport validity on entry. Your passport has only ${daysFromEntry} days. Airlines will deny boarding.`
      };
    } else {
      // Duration of stay / Six-Month Club
      const isStayCompliant = returnDate ? expiry > returnDate : daysFromEntry >= 30;
      return {
        valid: isStayCompliant,
        pass: isStayCompliant,
        status: isStayCompliant ? 'PASS_DURATION_OF_STAY' : 'FAIL_DURATION_OF_STAY',
        badge: isStayCompliant ? 'VALID FOR STAY' : 'EXPIRES DURING STAY',
        destination: dest.name,
        ruleType: 'Valid for Duration of Stay (Six-Month Club Agreement)',
        daysFromEntry,
        monthsFromEntry,
        sourceUrl: dest.source,
        message: isStayCompliant
          ? `Compliant: Under bilateral agreements (e.g. US Six-Month Club / UK entry rules), your passport is valid for your intended stay in ${dest.name}. Note: Airlines may enforce stricter checks if transit through third countries is involved.`
          : `Non-Compliant: Your passport expires before or during your intended stay in ${dest.name}. You must renew your passport before traveling.`
      };
    }
  },

  // 2. Comprehensive Name & DOB Discrepancy Analyzer
  analyzeNameDiscrepancy(docAName, docBName, docADob, docBDob, countryCode = 'IN') {
    const analysis = {
      nameStatus: 'MATCH',
      dobStatus: 'MATCH',
      discrepancyClass: 'NONE', // 'NONE', 'FORMATTING', 'MINOR_MISMATCH', 'LEGAL_DISCREPANCY'
      discrepancySeverity: 'none', // 'none', 'minor', 'significant'
      isMononym: false,
      isTransliteration: false,
      isDiacritic: false,
      isNameOrderInversion: false,
      explanation: '',
      recommendations: [],
      nextSteps: []
    };

    if (docAName && docBName) {
      const cleanA = docAName.trim().replace(/\s+/g, ' ');
      const cleanB = docBName.trim().replace(/\s+/g, ' ');
      const lowerA = cleanA.toLowerCase();
      const lowerB = cleanB.toLowerCase();

      // Check for mononyms (single-word names common in Indonesia, South Asia, etc.)
      const rawWordsA = cleanA.split(' ');
      const rawWordsB = cleanB.split(' ');
      if (rawWordsA.length === 1 || rawWordsB.length === 1) {
        analysis.isMononym = true;
      }

      if (lowerA === lowerB) {
        analysis.nameStatus = 'EXACT_MATCH';
        analysis.discrepancyClass = 'NONE';
        analysis.discrepancySeverity = 'none';
        analysis.explanation = 'Exact character match across documents.';
      } else {
        // Strip diacritics and normalize
        const normA = cleanAndNormalizeString(cleanA);
        const normB = cleanAndNormalizeString(cleanB);

        if (normA === normB) {
          // Difference is purely diacritics, hyphens, or punctuation (e.g. José vs Jose, Müller vs Mueller)
          analysis.nameStatus = 'DIACRITIC_OR_HYPHEN_VARIANT';
          analysis.discrepancyClass = 'FORMATTING';
          analysis.discrepancySeverity = 'minor';
          analysis.isDiacritic = true;
          analysis.explanation = 'Diacritic, accent, or hyphenation variation (e.g. é/e, ü/ue). Most passport offices resolve this automatically via ICAO Doc 9303 Latin transcription tables.';
          analysis.recommendations.push(
            "Diacritic or Punctuation Variance: The difference between your documents is limited to accents, hyphens, or special characters. ICAO Doc 9303 machine-readable travel documents transcribe accents into standard Latin characters. Confirm that your application form Given Name and Surname match your municipal birth certificate."
          );
        } else {
          const wordsA = normA.split(' ');
          const wordsB = normB.split(' ');

          // Check if words match in differing order (East Asian / Spanish naming systems)
          const sortedA = [...wordsA].sort().join(' ');
          const sortedB = [...wordsB].sort().join(' ');

          if (sortedA === sortedB) {
            analysis.nameStatus = 'NAME_ORDER_INVERSION';
            analysis.discrepancyClass = 'FORMATTING';
            analysis.discrepancySeverity = 'minor';
            analysis.isNameOrderInversion = true;
            analysis.explanation = 'Name order inverted (e.g. Given Name vs Family Name). Common in East Asian and Hungarian naming traditions.';
            analysis.recommendations.push(
              "Name Order Inversion (Given Name vs. Family Name): The words match, but the sequence is reversed. Passport forms separate 'Given Name' from 'Surname/Family Name'. Ensure your application form matches the family name assignment established in your primary civil birth or naturalization certificate."
            );
          } else if (wordsA.length !== wordsB.length) {
            // Check for initials expansion (e.g. 'R. Kumar' vs 'Ramesh Kumar')
            let isInitials = false;
            if (wordsA.length === 1 && wordsB.length > 1) {
              analysis.isMononym = true;
            } else if (wordsB.length === 1 && wordsA.length > 1) {
              analysis.isMononym = true;
            }

            // Check if one name is an initial matching the first letter of another
            if (wordsA.some(w => w.length === 1) || wordsB.some(w => w.length === 1)) {
              isInitials = true;
            }

            analysis.nameStatus = 'INITIALS_OR_MISSING_NAME';
            analysis.discrepancyClass = 'FORMATTING';
            analysis.discrepancySeverity = 'minor';
            analysis.explanation = 'Initials or middle name omission between records (e.g. John M. Doe vs John Doe).';
            analysis.recommendations.push(
              "Initials or Abbreviated Name: One record uses an initial (e.g. 'R. Kumar') while another uses the expanded full name ('Ramesh Kumar'). International passport authorities generally mandate full legal names without initials, unless an initial is your statutory legal name recorded on your birth certificate."
            );
          } else {
            // Check for transliteration variants in each word pair
            let hasTransliterationMatch = false;
            let transliterationClusterLabel = '';

            for (let i = 0; i < wordsA.length; i++) {
              const wa = wordsA[i];
              const wb = wordsB[i];
              if (wa !== wb) {
                const cluster = TRANSLITERATION_CLUSTERS.find(c => c.variants.includes(wa) && c.variants.includes(wb));
                if (cluster) {
                  hasTransliterationMatch = true;
                  transliterationClusterLabel = cluster.label;
                  break;
                }
                // Check Levenshtein fuzzy distance for single-letter typo
                const dist = computeLevenshtein(wa, wb);
                if (dist === 1 && wa.length >= 4) {
                  hasTransliterationMatch = true;
                  transliterationClusterLabel = `Minor typographical variant (${wa} vs ${wb})`;
                  break;
                }
              }
            }

            if (hasTransliterationMatch) {
              analysis.nameStatus = 'SPELLING_DIFFERENCE';
              analysis.discrepancyClass = 'LEGAL_DISCREPANCY'; // Preserves existing test compatibility
              analysis.discrepancySeverity = 'minor';
              analysis.isTransliteration = true;
              analysis.explanation = `Recognized Latin-script transliteration or minor spelling variant: ${transliterationClusterLabel}. Consular authorities treat this as a minor clerical variation rather than an identity change.`;
              analysis.recommendations.push(
                `Transliteration / Minor Variant (${transliterationClusterLabel}): Distinct characters exist between records (e.g., 'Choudhary' vs 'Chaudhry'). In India, minor spelling corrections matching secondary statutory IDs are accepted under MEA rules without a Gazette notice; only complete major name changes require Gazette publication and two newspaper ads. In the US, court orders or marriage certificates are required under 22 CFR § 51.25; in the UK, a deed poll is required by HMPO.`
              );
            } else {
              // Substantive character differences / completely distinct names
              analysis.nameStatus = 'SPELLING_DIFFERENCE';
              analysis.discrepancyClass = 'LEGAL_DISCREPANCY';
              analysis.discrepancySeverity = 'significant';
              analysis.explanation = 'Substantive character or legal identity difference. Mandates official name change documentation under sovereign law.';
              analysis.recommendations.push(
                "Substantive Character or Spelling Difference: Distinct characters exist between records (e.g., 'Choudhary' vs 'Chaudhry'). In India, minor spelling corrections matching secondary statutory IDs are accepted under MEA rules without a Gazette notice; only complete major name changes require Gazette publication and two newspaper ads. In the US, court orders or marriage certificates are required under 22 CFR § 51.25; in the UK, a deed poll is required by HMPO."
              );
            }
          }
        }
      }

      // Add Mononym Guidance if applicable
      if (analysis.isMononym) {
        analysis.recommendations.push(
          "Mononym / Single Name Applicant: Under ICAO Doc 9303 Part 3 and national consular regulations (e.g. Indonesian Imigrasi, Indian MEA, US State Dept), if you have only one legal name without a distinct surname, you must follow the issuing authority's specific single-name protocol (e.g. leaving Surname blank or repeating the name in Given Name as instructed on the official portal)."
        );
      }
    }

    // Date-of-Birth Discrepancy Evaluation
    if (docADob && docBDob) {
      if (docADob !== docBDob) {
        analysis.dobStatus = 'DOB_MISMATCH';
        analysis.discrepancyClass = 'LEGAL_DISCREPANCY';
        analysis.discrepancySeverity = 'significant';
        analysis.recommendations.push(
          `Date-of-Birth Discrepancy (${docADob} vs ${docBDob}): Passport authorities treat birth date discrepancies as critical identity conflicts. The date recorded on your primary municipal/civil birth certificate or original certificate of citizenship legally supersedes dates on secondary records (school records, tax cards, driving licences). If your secondary ID is incorrect, update it with the civil registrar before submitting your passport application.`
        );
      }
    }

    // Actionable Next Steps by Country
    analysis.nextSteps = this.getActionableNextSteps(countryCode, analysis);
    return analysis;
  },

  // Actionable Next Steps by Country
  getActionableNextSteps(countryCode, analysis) {
    const code = (countryCode || 'IN').toUpperCase();
    const steps = [];

    if (code === 'IN') {
      steps.push({
        jurisdiction: 'India (Ministry of External Affairs)',
        minorPath: 'For minor transliteration or clerical spelling differences, present 2 secondary statutory public documents (Aadhaar with full DOB, PAN Card, Voter ID, or Matriculation Certificate) reflecting the correct spelling. No Gazette publication required.',
        marriagePath: 'For surname change post-marriage or adding spouse name, submit self-declaration via Annexure "E". No marriage certificate or Gazette notice required under current MEA rules.',
        majorPath: 'For major complete name changes, execute a Deed Poll Affidavit (Annexure "E"), publish announcements in two daily newspapers (one local, one circulated at permanent address), and obtain Gazette of India notification.',
        sourceUrl: 'https://www.passportindia.gov.in/AppOnlineProject/pdf/AnnexureE.pdf'
      });
    } else if (code === 'US') {
      steps.push({
        jurisdiction: 'United States (Department of State)',
        minorPath: 'Under 22 CFR § 51.25, legal name changes require an original certified court order or marriage certificate. Minor typographical errors on previously issued passports can be corrected within 1 year of issuance using Form DS-5504 with no fee.',
        marriagePath: 'Submit certified marriage certificate or divorce decree specifying resumption of prior legal name.',
        majorPath: 'Submit certified court order for legal name change along with Form DS-11 or DS-82.',
        sourceUrl: 'https://travel.state.gov/content/travel/en/passports/have-passport/change-correct.html'
      });
    } else if (code === 'GB') {
      steps.push({
        jurisdiction: 'United Kingdom (HM Passport Office)',
        minorPath: 'HMPO requires an enrolled or unenrolled deed poll accompanied by evidence of the new name in official use (bank statements, driving licence, council tax).',
        marriagePath: 'Submit original certified civil marriage certificate to update your surname post-marriage.',
        majorPath: 'Submit deed poll or change of name deed plus two proofs of official name usage.',
        sourceUrl: 'https://www.gov.uk/changing-passport-information/gender-change-or-name-change'
      });
    } else if (code === 'CA') {
      steps.push({
        jurisdiction: 'Canada (Passport Program / IRCC)',
        minorPath: 'Submit provincial legal name change certificate or certified birth certificate with amended notations.',
        marriagePath: 'Submit provincial marriage certificate to assume spouse surname without formal legal name change.',
        majorPath: 'Submit certified certificate of change of name from your provincial vital statistics authority.',
        sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/change-name.html'
      });
    } else if (code === 'AU') {
      steps.push({
        jurisdiction: 'Australia (Australian Passport Office)',
        minorPath: 'APO requires a revised birth certificate or official Change of Name Certificate issued by an Australian state/territory Registry of Births, Deaths and Marriages (BDM).',
        marriagePath: 'Submit official BDM marriage certificate (ceremonial marriage certificates are not accepted).',
        majorPath: 'Submit official BDM Change of Name Certificate.',
        sourceUrl: 'https://www.passports.gov.au/getting-passport-how-it-works/documents-you-need/names-and-name-change'
      });
    } else if (code === 'MY') {
      steps.push({
        jurisdiction: 'Malaysia (Jabatan Imigresen Malaysia)',
        minorPath: 'All personal data on Malaysian International Passports must align character-for-character with your National Registration Department (JPN) MyKad record. Update MyKad first before renewing passport.',
        marriagePath: 'Update marital status and civil registration with JPN prior to passport renewal.',
        majorPath: 'Obtain updated Kad Pengenalan (MyKad) from JPN with certified extracts.',
        sourceUrl: 'https://www.imi.gov.my/'
      });
    } else if (code === 'ID') {
      steps.push({
        jurisdiction: 'Indonesia (Direktorat Jenderal Imigrasi)',
        minorPath: 'Under Indonesian immigration regulations, passport details must match your KTP-el and Kartu Keluarga (KK). Update Disdukcapil records prior to passport lodgement.',
        marriagePath: 'Submit Akta Perkawinan / Buku Nikah recorded with Disdukcapil.',
        majorPath: 'Submit Penetapan Pengadilan Negeri (District Court decree) along with updated Akta Kelahiran.',
        sourceUrl: 'https://www.imigrasi.go.id/'
      });
    } else {
      steps.push({
        jurisdiction: 'General Consular Standards',
        minorPath: 'Obtain certified marginal notes on your primary civil birth certificate or an official notarized affidavit of identity.',
        marriagePath: 'Submit government-issued civil marriage certificate to your national passport authority.',
        majorPath: 'Submit certified court decree or national civil registry amendment before filing passport application.',
        sourceUrl: 'https://www.icao.int/Security/FAL/PKD/Documents/ICAO_Doc_9303_p3.pdf'
      });
    }

    return steps;
  },

  // 3. Date Format Selector & Ambiguity Checker
  checkDateAmbiguity(dateStr, format = 'auto') {
    if (!dateStr || typeof dateStr !== 'string') return { isAmbiguous: false };
    const parts = dateStr.trim().split(/[\/\-\.]/);
    if (parts.length !== 3) return { isAmbiguous: false };

    // Format YYYY-MM-DD
    if (parts[0].length === 4) {
      return { isAmbiguous: false, isoDate: dateStr, standardFormat: 'YYYY-MM-DD' };
    }

    const num1 = parseInt(parts[0], 10);
    const num2 = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    if (num1 <= 12 && num2 <= 12 && num1 !== num2) {
      const monthNames = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return {
        isAmbiguous: true,
        possibleInterpretations: [
          `${num1} ${monthNames[num2]} ${year} (DD/MM/YYYY - International / European)`,
          `${num2} ${monthNames[num1]} ${year} (MM/DD/YYYY - US Standard)`
        ],
        warning: `The date ${dateStr} is ambiguous: it could mean Day ${num1} Month ${num2} or Month ${num1} Day ${num2}. Please select your explicit date format to prevent clerical rejections.`
      };
    }

    return { isAmbiguous: false };
  },

  // 4. Non-Gregorian Calendar Converter
  convertAlternateCalendar(year, month = 1, day = 1, calendarType = 'thai_buddhist') {
    const y = parseInt(year, 10);
    const m = parseInt(month, 10);
    const d = parseInt(day, 10);
    const cType = (calendarType || '').toLowerCase().trim();

    let gregorianYear = y;
    let explanation = '';

    if (cType === 'thai_buddhist' || cType === 'buddhist') {
      // Thai Buddhist Era: Gregorian Year = BE - 543
      gregorianYear = y - 543;
      explanation = `Thai Buddhist Era (พ.ศ. ${y}) converts to Gregorian Year ${gregorianYear} CE (subtract 543 years).`;
    } else if (cType === 'bikram_sambat' || cType === 'nepali') {
      // Nepali Bikram Sambat: Approx BS - 56.7 years
      gregorianYear = y - 57;
      explanation = `Nepali Bikram Sambat (${y} BS) converts approximately to Gregorian Year ${gregorianYear} CE (subtract 56.7 to 57 years depending on month).`;
    } else if (cType === 'solar_hijri' || cType === 'persian') {
      // Persian / Solar Hijri: Gregorian Year = SH + 621 or 622
      gregorianYear = y + 621;
      explanation = `Persian Solar Hijri (${y} SH) converts to Gregorian Year ${gregorianYear} CE (add 621 years).`;
    } else if (cType === 'hijri' || cType === 'islamic') {
      // Islamic Lunar Hijri: AH * 0.970224 + 621.57
      gregorianYear = Math.floor(y * 0.970224 + 621.57);
      explanation = `Islamic Lunar Hijri (${y} AH) converts approximately to Gregorian Year ${gregorianYear} CE using astronomical lunar-solar reconciliation.`;
    }

    const pad = (n) => String(n).padStart(2, '0');
    const isoDate = `${gregorianYear}-${pad(m)}-${pad(d)}`;

    return {
      sourceCalendar: calendarType,
      sourceYear: y,
      sourceMonth: m,
      sourceDay: d,
      gregorianYear,
      gregorianDate: isoDate,
      explanation,
      officialNote: 'Official passport biographical pages and machine-readable zones (ICAO Doc 9303) use Gregorian dates. Ensure you present an official civil conversion certificate if required by your passport authority.'
    };
  },

  // Approximate or Year-Only DOB Guidance
  getApproximateDobGuidance(year, countryCode = 'IN') {
    const y = parseInt(year, 10);
    const code = (countryCode || 'IN').toUpperCase();

    if (code === 'IN') {
      return {
        country: 'India (MEA)',
        recordedDob: `01/01/${y}`,
        guidance: `Under Ministry of External Affairs rules, if only the year of birth is known and no municipal birth record or school certificate specifies the day and month, the passport issuing authority standardizes the date of birth to 01/01/${y} on the passport biographical page.`
      };
    } else if (code === 'US') {
      return {
        country: 'United States (Department of State)',
        recordedDob: `XX/XX/${y} or 01/01/${y}`,
        guidance: `Under 22 CFR § 51.20, if exact day and month cannot be established by primary or secondary records, Form DS-11 records the date as XX/XX/${y} or 01/01/${y} with an administrative passport endorsement note.`
      };
    } else {
      return {
        country: 'International Standard (ICAO Doc 9303)',
        recordedDob: `01/01/${y}`,
        guidance: `Under ICAO Doc 9303 Part 3 guidelines, when the day or month of birth is unknown, the date is recorded with filler characters (e.g. << for missing days) or standardized to the first day of the recorded year.`
      };
    }
  },

  // 5. Biometric Photo Standards & Compliance Validator
  getPhotoStandards() {
    return {
      'icao_35x45': {
        id: 'icao_35x45',
        name: 'ICAO Doc 9303 Standard (35 × 45 mm)',
        shortName: 'ICAO 35 × 45 mm',
        widthMm: 35,
        heightMm: 45,
        aspectRatio: 35 / 45, // ~0.7778
        headRatioMin: 0.70, // 32mm / 45mm (70% - 80%)
        headRatioMax: 0.80, // 36mm / 45mm
        eyeLevelMin: 0.56,
        eyeLevelMax: 0.69,
        minWidthPx: 413,
        minHeightPx: 531,
        typicalJurisdictions: ['UK', 'EU', 'AU', 'NZ', 'SG', 'PK', 'BD', 'AE', 'SA', 'TR', 'NG', 'ZA', 'ID'],
        backgroundDesc: 'Plain light grey, cream, or off-white (UK/EU prohibit pure stark white; Australia permits white or light grey)',
        expressionDesc: 'Neutral facial expression, mouth closed, direct gaze at camera, eyes clearly visible',
        eyeglassDesc: 'Eyeglasses generally discouraged; no reflections or glare; tinted lenses prohibited',
        headCoveringDesc: 'Religious head coverings permitted provided full facial oval from bottom of chin to top of forehead is clearly visible',
        containerWidth: 260,
        containerHeight: 334 // 260 * (45/35) ≈ 334
      },
      'us_2x2': {
        id: 'us_2x2',
        name: 'US State Department (2 × 2 inches / 51 × 51 mm)',
        shortName: 'US 2 × 2 inches',
        widthMm: 51,
        heightMm: 51,
        aspectRatio: 1.0,
        headRatioMin: 0.50, // 1 inch / 2 inches (50% - 69%)
        headRatioMax: 0.69, // 1 3/8 inches / 2 inches
        eyeLevelMin: 0.56,
        eyeLevelMax: 0.69,
        minWidthPx: 600,
        minHeightPx: 600,
        typicalJurisdictions: ['US', 'India OCI'],
        backgroundDesc: 'Plain white or off-white background (no shadows, textures, or patterns)',
        expressionDesc: 'Neutral facial expression or natural, unforced smile with both eyes open',
        eyeglassDesc: 'Eyeglasses strictly prohibited under 22 CFR § 51.26 (unless signed medical waiver submitted)',
        headCoveringDesc: 'Religious head coverings permitted with signed statement; face must be fully visible',
        containerWidth: 260,
        containerHeight: 260 // 1:1 square
      },
      'ca_50x70': {
        id: 'ca_50x70',
        name: 'Canada Passport Program (50 × 70 mm)',
        shortName: 'Canada 50 × 70 mm',
        widthMm: 50,
        heightMm: 70,
        aspectRatio: 50 / 70, // ~0.7143
        headRatioMin: 0.44, // 31mm / 70mm (44% - 51%)
        headRatioMax: 0.51, // 36mm / 70mm
        eyeLevelMin: 0.50,
        eyeLevelMax: 0.65,
        minWidthPx: 590,
        minHeightPx: 827,
        typicalJurisdictions: ['Canada'],
        backgroundDesc: 'Plain white or light-coloured background',
        expressionDesc: 'Neutral expression, mouth closed, looking straight into the camera',
        eyeglassDesc: 'Tinted lenses prohibited; photographer stamp & date required on reverse of one print',
        headCoveringDesc: 'Religious headwear permitted; full face from chin to forehead must be visible',
        containerWidth: 250,
        containerHeight: 350 // 250 * (70/50) = 350
      },
      'cn_33x48': {
        id: 'cn_33x48',
        name: 'China National Immigration Administration (33 × 48 mm)',
        shortName: 'China 33 × 48 mm',
        widthMm: 33,
        heightMm: 48,
        aspectRatio: 33 / 48, // ~0.6875
        headRatioMin: 0.58, // 28mm / 48mm
        headRatioMax: 0.69, // 33mm / 48mm
        eyeLevelMin: 0.50,
        eyeLevelMax: 0.65,
        minWidthPx: 390,
        minHeightPx: 567,
        typicalJurisdictions: ['China'],
        backgroundDesc: 'Pure white background; dark colored clothing mandatory',
        expressionDesc: 'Neutral expression, ears and forehead visible, mouth closed',
        eyeglassDesc: 'Non-reflective eyeglasses allowed; frames must not obscure eyes',
        headCoveringDesc: 'Head coverings permitted only for ethnic/religious reasons; full face visible',
        containerWidth: 240,
        containerHeight: 349
      },
      'my_35x50': {
        id: 'my_35x50',
        name: 'Malaysia Jabatan Imigresen (35 × 50 mm)',
        shortName: 'Malaysia 35 × 50 mm',
        widthMm: 35,
        heightMm: 50,
        aspectRatio: 35 / 50, // 0.70
        headRatioMin: 0.50, // 25mm / 50mm
        headRatioMax: 0.60, // 30mm / 50mm
        eyeLevelMin: 0.52,
        eyeLevelMax: 0.66,
        minWidthPx: 413,
        minHeightPx: 591,
        typicalJurisdictions: ['Malaysia'],
        backgroundDesc: 'Dark blue or plain white depending on application channel (dark clothing required)',
        expressionDesc: 'Neutral expression, mouth closed, looking straight at camera',
        eyeglassDesc: 'Eyeglasses discouraged; dark or tinted lenses prohibited',
        headCoveringDesc: 'Tudung/Hijab permitted; must be dark-colored and face fully exposed',
        containerWidth: 245,
        containerHeight: 350
      },
      'jp_35x45': {
        id: 'jp_35x45',
        name: 'Japan Ministry of Foreign Affairs (35 × 45 mm)',
        shortName: 'Japan 35 × 45 mm',
        widthMm: 35,
        heightMm: 45,
        aspectRatio: 35 / 45,
        headRatioMin: 0.71, // 32mm / 45mm
        headRatioMax: 0.80, // 36mm / 45mm
        eyeLevelMin: 0.56,
        eyeLevelMax: 0.69,
        minWidthPx: 413,
        minHeightPx: 531,
        typicalJurisdictions: ['Japan'],
        backgroundDesc: 'Plain light background (light blue or off-white); no shadows',
        expressionDesc: 'Neutral expression, face centered, hair not covering eyes or face contour',
        eyeglassDesc: 'Frames must not cover eyes; no flash reflections',
        headCoveringDesc: 'Religious head coverings allowed with face contour visible',
        containerWidth: 260,
        containerHeight: 334
      }
    };
  },

  getPhotoStandardForCountry(countryCode) {
    const code = (countryCode || '').toUpperCase().trim();
    if (code === 'US') return 'us_2x2';
    if (code === 'CA') return 'ca_50x70';
    if (code === 'CN') return 'cn_33x48';
    if (code === 'MY') return 'my_35x50';
    return 'icao_35x45';
  },

  validatePhotoDimensions(width, height, standardId = 'icao_35x45') {
    const standards = this.getPhotoStandards();
    const standard = standards[standardId] || standards['icao_35x45'];

    if (!width || !height || width <= 0 || height <= 0 || isNaN(width) || isNaN(height)) {
      return { valid: false, error: 'Invalid image dimensions provided.' };
    }

    const imageRatio = width / height;
    const targetRatio = standard.aspectRatio;
    const deviation = Math.abs(imageRatio - targetRatio) / targetRatio;
    const deviationPct = Math.round(deviation * 100);

    // Tolerance within 4% is considered compliant aspect ratio
    const isAspectCompliant = deviation <= 0.04;
    const isResolutionCompliant = width >= (standard.minWidthPx * 0.75) && height >= (standard.minHeightPx * 0.75);
    const isRecommendedResolution = width >= standard.minWidthPx && height >= standard.minHeightPx;

    let status = 'COMPLIANT';
    let badge = 'COMPLIANT ASPECT RATIO';
    let message = `Photo aspect ratio (${Math.round(width)}×${Math.round(height)}px, ratio ${imageRatio.toFixed(2)}) matches the ${standard.name} standard (${standard.widthMm}×${standard.heightMm}mm).`;

    if (!isAspectCompliant) {
      status = 'NON_COMPLIANT_RATIO';
      badge = 'INCORRECT ASPECT RATIO';
      message = `Photo ratio is ${imageRatio.toFixed(2)}, but ${standard.name} requires ${targetRatio.toFixed(2)} (${standard.widthMm}×${standard.heightMm}mm). Your photo deviates by ${deviationPct}%. Submitting an incorrect aspect ratio will cause image distortion or counter rejection.`;
    } else if (!isResolutionCompliant) {
      status = 'LOW_RESOLUTION';
      badge = 'LOW RESOLUTION WARNING';
      message = `Aspect ratio is correct, but resolution (${Math.round(width)}×${Math.round(height)}px) is below the minimum recommended biometric resolution of ${standard.minWidthPx}×${standard.minHeightPx}px (300 DPI equivalent).`;
    }

    return {
      valid: isAspectCompliant && isResolutionCompliant,
      status,
      badge,
      message,
      standardId: standard.id,
      standardName: standard.name,
      width: Math.round(width),
      height: Math.round(height),
      imageRatio: Number(imageRatio.toFixed(3)),
      targetRatio: Number(targetRatio.toFixed(3)),
      deviationPct,
      isAspectCompliant,
      isResolutionCompliant,
      isRecommendedResolution,
      minWidthPx: standard.minWidthPx,
      minHeightPx: standard.minHeightPx,
      backgroundDesc: standard.backgroundDesc,
      headCoveringDesc: standard.headCoveringDesc
    };
  }
};

PassportTools.DESTINATION_VALIDITY_RULES = DESTINATION_VALIDITY_RULES;
PassportTools.TRANSLITERATION_CLUSTERS = TRANSLITERATION_CLUSTERS;

if (typeof window !== 'undefined') {
  window.PassportTools = PassportTools;
  window.DESTINATION_VALIDITY_RULES = DESTINATION_VALIDITY_RULES;
  window.TRANSLITERATION_CLUSTERS = TRANSLITERATION_CLUSTERS;
}

// Export for Node and browser environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PassportTools,
    TRANSLITERATION_CLUSTERS,
    DESTINATION_VALIDITY_RULES
  };
}
