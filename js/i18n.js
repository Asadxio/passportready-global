/**
 * PassportReady Internationalization (i18n) Engine
 * Supported languages: English (en), Hindi (hi), Urdu (ur)
 */

const I18N_TRANSLATIONS = {
  en: {
    lang_name: "English",
    dir: "ltr",
    topbar_tagline: "Independent global passport readiness & document guidance",
    topbar_sources: "Official government portals verified · No approval guarantees",
    brand_title: "PassportReady",
    brand_sub: "Check before you apply",
    nav_how: "How It Works",
    nav_checker: "Readiness Checker",
    nav_directory: "Country Directory",
    nav_guides: "Passport Guides",
    nav_tools: "Tools",
    nav_faq: "FAQs",
    nav_cta: "Start Free ↗",

    hero_eyebrow: "Your Global Passport Prep Companion",
    hero_title: "Apply with clarity.<br><em>Not guesswork.</em>",
    hero_desc: "A smart, privacy-first way to prepare for your passport application. Spot inconsistencies before submission, understand verified document alternatives, and connect directly to official government portals.",
    hero_btn_start: "Build My Checklist →",
    hero_btn_how: "Explore Guides",
    trust_checklist: "Personalized checklist",
    trust_sources: "Official-source links",
    trust_privacy: "Zero personal data stored",

    stat_countries: "249 Countries & Territories",
    stat_verified: "Official Source Driven",
    stat_secure: "100% Client-Side Privacy",

    features_title: "One Clear Process. Country-Specific Rules.",
    features_subtitle: "Passport requirements differ across countries and family situations. PassportReady organizes the checks that matter.",
    feat1_title: "Personalized Checklist",
    feat1_desc: "Tailored to your issuing country, service type, age group, and domestic or consular filing location.",
    feat2_title: "Consistency & Mismatch Review",
    feat2_desc: "Identify discrepancies in name spellings, initials, dates of birth, and addresses before paying fees.",
    feat3_title: "Document Alternatives Workflow",
    feat3_desc: "Discover verified document substitutes and official exception routes when a primary record is unavailable.",
    feat4_title: "6-Month Validity Checker",
    feat4_desc: "Verify whether your passport meets the 3-to-6-month international validity rule for your travel dates.",
    feat5_title: "Official Government Direction",
    feat5_desc: "Direct links to genuine foreign ministries, consular portals, and official appointment booking systems.",
    feat6_title: "Printable / PDF Checklist",
    feat6_desc: "Save or print your personalized pre-submission action plan with zero trackers or account creation.",

    wizard_title: "Interactive Passport Readiness Checker",
    wizard_sub: "Answer a few simple questions to generate your personalized document checklist and identify potential issues.",
    step_indicator: "Step {current} of {total}",
    btn_back: "← Back",
    btn_next: "Continue →",
    btn_finish: "Generate My Checklist →",
    btn_print: "Print / Save PDF ↗",
    btn_restart: "Start New Check",
    btn_save: "Save Progress",

    step1_title: "Where are you applying?",
    step1_helper: "Select the passport-issuing authority and whether you are applying domestically or at an overseas embassy.",
    label_issuing_country: "Passport Issuing Country / Authority",
    country_placeholder: "Type country name (e.g., India, United States, United Kingdom)...",
    label_applying_from: "Where are you applying from?",
    opt_domestic: "Inside issuing country (Domestic application)",
    opt_consular: "Abroad / Overseas (Embassy, High Commission or Consulate)",

    step2_title: "What service do you need?",
    step2_helper: "The application route and required forms vary significantly by service type.",
    label_service: "Application Service Category",
    srv_first: "First-Time / Fresh Passport",
    srv_renewal: "Renewal / Reissue (Expiring or Full)",
    srv_lost: "Lost or Stolen Passport",
    srv_damaged: "Damaged / Mutilated Passport",
    srv_name_change: "Correction / Name or Detail Change",
    srv_minor: "Child / Minor Passport",
    srv_urgent: "Urgent / Expedited Processing",
    srv_emergency: "Emergency Travel Certificate (ETC)",

    step3_title: "Who is the applicant?",
    step3_helper: "Applicant age determines legal consent, biometric exemptions, validity period, and fees.",
    label_age_group: "Applicant Age Category",
    age_infant: "Infant / Young Child (under 5 / 6)",
    age_minor: "Child / Minor (under 16 / 18)",
    age_adult: "Adult (18 to 59)",
    age_senior: "Senior Citizen (60+)",

    step4_title: "Processing Urgency & Timeline",
    step4_helper: "Expedited or Tatkaal routes have specific eligibility rules and higher fees.",
    label_urgency: "Desired Processing Speed",
    urg_standard: "Standard / Normal processing",
    urg_expedited: "Urgent / Expedited / Tatkaal (if officially available)",
    urg_emergency: "Immediate emergency travel (medical / compassionate)",

    step5_title: "Current Passport Status",
    step5_helper: "Previous passports must be accounted for or physically surrendered for cancellation.",
    label_status: "What is the status of your existing passport?",
    stat_never: "Never had a passport before",
    stat_valid: "Currently valid (has unexpired pages)",
    stat_expired: "Expired (or expiring within 12 months)",
    stat_damaged: "Physically damaged / pages detached / water damage",
    stat_lost: "Lost or stolen",

    step6_title: "Primary Documents Check",
    step6_helper: "Indicate whether you possess the foundational identity and citizenship records.",
    label_birth_proof: "Proof of Birth / Date of Birth (Birth Certificate / School record / National ID)",
    label_address_proof: "Proof of Current Address (Utility bills / Aadhaar / Driving licence / Bank record)",
    label_citizenship_proof: "Proof of Citizenship / Naturalization (Parent documents / Certificate)",
    doc_have: "Yes, I have original official document",
    doc_partial: "I have a photocopy or digital copy only",
    doc_missing: "I do not have this document (need alternatives)",

    step7_title: "Identity Consistency & Mismatch Check",
    step7_helper: "Minor spelling differences or date order errors are the #1 cause of application delay.",
    label_name_match: "Do the applicant's name spellings match exactly across all documents?",
    match_yes: "Yes — First, middle, and last names match character-for-character",
    match_minor: "Minor difference (e.g., initials used, abbreviation, single letter)",
    match_major: "Significant difference (different surname, married name, name changed)",
    match_not_sure: "Not checked yet",
    label_dob_match: "Does the date of birth match across records?",
    dob_yes: "Yes — Exactly identical across all documents",
    dob_mismatch: "No — Day, month, or year differs on one document",

    step8_title: "Special Circumstances & Safeguards",
    step8_helper: "Select any additional circumstance that applies to this application.",
    label_special: "Special situation (if any)",
    spec_none: "Standard application — No special circumstance",
    spec_address_change: "Moved address within the last 12 months",
    spec_custody: "Single parent / Legal guardianship / Custody order",
    spec_dual_nat: "Dual nationality or hold foreign citizenship / residence",
    spec_pages_full: "Passport validity remains, but visa pages are full",
    spec_accessibility: "Accessibility / mobility accommodations needed",

    step9_title: "Official Checklist & Appointment Review",
    step9_helper: "Final check before building your personalized readiness action plan.",
    label_checked_gov: "Have you reviewed the issuing authority's official portal?",
    gov_yes: "Yes, I have reviewed the official portal",
    gov_no: "Not yet — I need the direct official link",

    step10_title: "Your Personalized Passport Readiness Report",
    badge_prepared: "PREPARED",
    badge_attention: "NEEDS ATTENTION",
    badge_missing: "MISSING DOCUMENTS",
    badge_official: "OFFICIAL VERIFICATION RECOMMENDED",

    tools_expiry_title: "6-Month Passport Expiry Calculator",
    tools_expiry_desc: "Many countries deny airline boarding if your passport has less than 3 or 6 months validity remaining on your planned travel date.",
    label_travel_date: "Planned Travel Date:",
    label_passport_expiry: "Passport Expiry Date:",
    btn_check_validity: "Check Validity →",

    tools_mismatch_title: "Name & Date-of-Birth Discrepancy Analyzer",
    tools_mismatch_desc: "Compare Document A (e.g., Birth Certificate / Old Passport) with Document B (e.g., National ID / Educational Certificate).",

    footer_disclaimer: "PassportReady is an independent preparation guide and is not affiliated with any government or passport-issuing authority. We do not issue passports, schedule official appointments, or collect passport numbers. Always verify final requirements and fees on official government portals."
  },

  hi: {
    lang_name: "हिन्दी",
    dir: "ltr",
    topbar_tagline: "स्वतंत्र वैश्विक पासपोर्ट तैयारी एवं दस्तावेज़ मार्गदर्शन",
    topbar_sources: "सत्यापित सरकारी पोर्टल · कोई आधिकारिक गारंटी नहीं",
    brand_title: "PassportReady",
    brand_sub: "आवेदन से पहले जांचें",
    nav_how: "यह कैसे काम करता है",
    nav_checker: "तैयारी चेकर",
    nav_directory: "देश निर्देशिका",
    nav_guides: "पासपोर्ट गाइड",
    nav_tools: "टूल्स",
    nav_faq: "सामान्य प्रश्न",
    nav_cta: "शुरू करें ↗",

    hero_eyebrow: "आपका पासपोर्ट तैयारी साथी",
    hero_title: "स्पष्टता के साथ आवेदन करें.<br><em>अनुमान से नहीं.</em>",
    hero_desc: "पासपोर्ट आवेदन की तैयारी का सबसे सुरक्षित और सटीक तरीका। आवेदन जमा करने से पहले नामों की त्रुटियों को पहचानें, प्रमाणित दस्तावेज़ विकल्प समझें और सीधे आधिकारिक सरकारी पोर्टलों से जुड़ें।",
    hero_btn_start: "मेरी चेकलिस्ट बनाएं →",
    hero_btn_how: "गाइड देखें",
    trust_checklist: "व्यक्तिगत चेकलिस्ट",
    trust_sources: "आधिकारिक सरकारी लिंक",
    trust_privacy: "शून्य व्यक्तिगत डेटा संग्रहण",

    stat_countries: "249 देश एवं क्षेत्र",
    stat_verified: "आधिकारिक स्रोतों पर आधारित",
    stat_secure: "100% क्लाइंट-साइड गोपनीयता",

    features_title: "एक स्पष्ट प्रक्रिया। देश-विशिष्ट नियम।",
    features_subtitle: "हर देश और पारिवारिक परिस्थिति के अनुसार नियम अलग होते हैं। PassportReady ज़रूरी सावधानियों को व्यवस्थित करता है।",
    feat1_title: "व्यक्तिगत चेकलिस्ट",
    feat1_desc: "आपके देश, सेवा प्रकार, आयु वर्ग और घरेलू या दूतावास आवेदन के अनुसार अनुकूलित।",
    feat2_title: "नाम व जन्मतिथि विसंगति जांच",
    feat2_desc: "फीस भरने से पहले नाम की स्पेलिंग, उपनाम, जन्मतिथि और पते की विसंगतियों को पहचानें।",
    feat3_title: "दस्तावेज़ विकल्प समाधान",
    feat3_desc: "यदि कोई मूल दस्तावेज़ उपलब्ध न हो तो आधिकारिक रूप से स्वीकार्य विकल्प जानें।",
    feat4_title: "6-महीने की वैधता चेकर",
    feat4_desc: "जांचें कि यात्रा के समय आपके पासपोर्ट में अंतरराष्ट्रीय नियमों के अनुसार 6 महीने की वैधता है या नहीं।",
    feat5_title: "आधिकारिक सरकारी दिशा",
    feat5_desc: "विदेश मंत्रालय, पासपोर्ट सेवा और दूतावासों के असली पोर्टलों के सीधे लिंक।",
    feat6_title: "प्रिंट / PDF चेकलिस्ट",
    feat6_desc: "बिना किसी खाते या पंजीकरण के अपनी चेकलिस्ट सुरक्षित रूप से डाउनलोड या प्रिंट करें।",

    wizard_title: "इंटरएक्टिव पासपोर्ट तत्परता चेकर",
    wizard_sub: "कुछ आसान सवालों के जवाब देकर अपनी व्यक्तिगत चेकलिस्ट बनाएं और संभावित गलतियों से बचें।",
    step_indicator: "चरण {current} / {total}",
    btn_back: "← पीछे",
    btn_next: "आगे बढ़ें →",
    btn_finish: "चेकलिस्ट तैयार करें →",
    btn_print: "प्रिंट / PDF सेव करें ↗",
    btn_restart: "नई जांच शुरू करें",
    btn_save: "प्रगति सहेजें",

    step1_title: "आप किस देश के लिए आवेदन कर रहे हैं?",
    step1_helper: "पासपोर्ट जारी करने वाला देश चुनें और बताएं कि आप देश में हैं या विदेश में।",
    label_issuing_country: "पासपोर्ट जारीकर्ता देश / प्राधिकरण",
    country_placeholder: "देश का नाम टाइप करें (उदा. India, United States, United Kingdom)...",
    label_applying_from: "आप कहाँ से आवेदन कर रहे हैं?",
    opt_domestic: "देश के अंदर (घरेलू आवेदन)",
    opt_consular: "विदेश में (भारतीय दूतावास / वाणिज्य दूतावास)",

    step2_title: "आपको कौन सी सेवा चाहिए?",
    step2_helper: "नए पासपोर्ट, नवीनीकरण और खोए हुए पासपोर्ट के नियम काफी अलग होते हैं।",
    label_service: "आवेदन सेवा श्रेणी",
    srv_first: "नया / पहला पासपोर्ट (Fresh Passport)",
    srv_renewal: "नवीनीकरण / पुनः जारी (Renewal / Reissue)",
    srv_lost: "खोया या चोरी हुआ पासपोर्ट (Lost / Stolen)",
    srv_damaged: "क्षतिग्रस्त पासपोर्ट (Damaged)",
    srv_name_change: "नाम या विवरण में संशोधन (Name / Detail Correction)",
    srv_minor: "नाबालिग / बच्चे का पासपोर्ट (Child / Minor)",
    srv_urgent: "तत्काल / त्वरित सेवा (Urgent / Tatkaal)",
    srv_emergency: "आपातकालीन यात्रा प्रमाणपत्र (Emergency Certificate)",

    step3_title: "आवेदक की आयु क्या है?",
    step3_helper: "आयु के अनुसार माता-पिता की सहमति, बायोमेट्रिक्स और फीस तय होती है।",
    label_age_group: "आवेदक आयु वर्ग",
    age_infant: "छोटा बच्चा / शिशु (5 वर्ष से कम)",
    age_minor: "नाबालिग / किशोर (5 से 17 वर्ष)",
    age_adult: "वयस्क (18 से 59 वर्ष)",
    age_senior: "वरिष्ठ नागरिक (60+ वर्ष)",

    step4_title: "प्रसंस्करण की गति और समय",
    step4_helper: "तत्काल सेवा के लिए विशिष्ट पात्रता और अतिरिक्त शुल्क लागू होता है।",
    label_urgency: "वांछित गति",
    urg_standard: "सामान्य / मानक प्रसंस्करण (Standard)",
    urg_expedited: "तत्काल / त्वरित प्रसंस्करण (Tatkaal / Expedited)",
    urg_emergency: "तत्काल आपातकालीन यात्रा (Emergency)",

    step5_title: "वर्तमान पासपोर्ट की स्थिति",
    step5_helper: "पुराना पासपोर्ट नवीनीकरण के समय रद्द करने के लिए प्रस्तुत करना अनिवार्य होता है।",
    label_status: "आपके पुराने पासपोर्ट की क्या स्थिति है?",
    stat_never: "पहले कभी पासपोर्ट नहीं बना",
    stat_valid: "वर्तमान में वैध है (पन्ने बाकी हैं)",
    stat_expired: "वैधता समाप्त हो चुकी है (या 1 वर्ष में समाप्त होगी)",
    stat_damaged: "क्षतिग्रस्त / पानी से खराब / फटा हुआ",
    stat_lost: "खो गया या चोरी हो गया",

    step6_title: "प्राथमिक दस्तावेज़ जांच",
    step6_helper: "जांचें कि आपके पास मूल दस्तावेज़ मौजूद हैं या नहीं।",
    label_birth_proof: "जन्म तिथि का प्रमाण (जन्म प्रमाणपत्र / स्कूल प्रमाणपत्र / पैन कार्ड / आधार)",
    label_address_proof: "वर्तमान पते का प्रमाण (आधार कार्ड / बिजली बिल / बैंक पासबुक / किरायानामा)",
    label_citizenship_proof: "नागरिकता का प्रमाण (जन्म / पंजीकरण / माता-पिता के दस्तावेज़)",
    doc_have: "हाँ, मेरे पास मूल सरकारी दस्तावेज़ है",
    doc_partial: "मेरे पास केवल फोटोकॉपी या डिजिटल कॉपी है",
    doc_missing: "मेरे पास यह दस्तावेज़ नहीं है (विकल्प चाहिए)",

    step7_title: "नाम व जन्मतिथि में विसंगति जांच",
    step7_helper: "दस्तावेज़ों में नाम की वर्तनी (Spelling) में थोड़ा सा भी अंतर आवेदन रोक सकता है।",
    label_name_match: "क्या सभी दस्तावेज़ों में आवेदक का नाम बिल्कुल एक समान है?",
    match_yes: "हाँ — प्रथम, मध्य और उपनाम अक्षर-दर-अक्षर समान हैं",
    match_minor: "मामूली अंतर (उदा. उपनाम आगे-पीछे, शुरुआती अक्षर / Initials)",
    match_major: "बड़ा अंतर (विवाह के बाद नाम बदलना / पूरी तरह अलग नाम)",
    match_not_sure: "अभी जांच नहीं की है",
    label_dob_match: "क्या जन्मतिथि सभी अभिलेखों में समान है?",
    dob_yes: "हाँ — दिन, महीना और साल बिल्कुल समान हैं",
    dob_mismatch: "नहीं — किसी दस्तावेज़ में जन्मतिथि में अंतर है",

    step8_title: "विशेष परिस्थितियाँ",
    step8_helper: "यदि कोई विशेष स्थिति लागू हो तो चुनें।",
    label_special: "विशेष परिस्थिति (यदि कोई हो)",
    spec_none: "सामान्य आवेदन — कोई विशेष स्थिति नहीं",
    spec_address_change: "पिछले 1 वर्ष में पता बदला है",
    spec_custody: "एकल अभिभावक / कानूनी संरक्षकता / तलाक आदेश",
    spec_dual_nat: "दोहरी नागरिकता या विदेशी निवास",
    spec_pages_full: "पासपोर्ट वैध है परंतु वीज़ा के पन्ने भर गए हैं",
    spec_accessibility: "दिव्यांगता / विशेष सहायता की आवश्यकता",

    step9_title: "आधिकारिक पोर्टल व नियुक्ति जांच",
    step9_helper: "चेकलिस्ट तैयार करने से पहले अंतिम समीक्षा।",
    label_checked_gov: "क्या आपने आधिकारिक पोर्टल के नियम देखे हैं?",
    gov_yes: "हाँ, मैंने आधिकारिक पोर्टल देखा है",
    gov_no: "नहीं — मुझे आधिकारिक लिंक चाहिए",

    step10_title: "आपकी व्यक्तिगत पासपोर्ट तैयारी रिपोर्ट",
    badge_prepared: "तैयार",
    badge_attention: "ध्यान दें",
    badge_missing: "दस्तावेज़ अनुपलब्ध",
    badge_official: "सरकारी पुष्टि आवश्यक",

    tools_expiry_title: "6-महीने की पासपोर्ट वैधता कैलकुलेटर",
    tools_expiry_desc: "कई देश विमान में चढ़ने की अनुमति नहीं देते यदि यात्रा की तारीख पर पासपोर्ट में कम से कम 6 महीने की वैधता न हो।",
    label_travel_date: "नियोजित यात्रा की तारीख:",
    label_passport_expiry: "पासपोर्ट समाप्ति की तारीख:",
    btn_check_validity: "वैधता जांचें →",

    tools_mismatch_title: "नाम व जन्मतिथि विसंगति विश्लेषक",
    tools_mismatch_desc: "दस्तावेज़ A (जैसे जन्म प्रमाणपत्र) और दस्तावेज़ B (जैसे आधार या पैन कार्ड) की तुलना करें।",

    footer_disclaimer: "PassportReady एक स्वतंत्र तैयारी गाइड है और किसी भी सरकार या पासपोर्ट प्राधिकरण से संबद्ध नहीं है। हम पासपोर्ट जारी नहीं करते और न ही कोई सरकारी शुल्क लेते हैं। हमेशा आधिकारिक सरकारी पोर्टल पर अंतिम नियमों की पुष्टि करें।"
  },

  ur: {
    lang_name: "اردو",
    dir: "rtl",
    topbar_tagline: "پاسپورٹ کی تیاری اور دستاویزات کے لیے آزادانہ عالمی رہنمائی",
    topbar_sources: "سرکاری پورٹل کی تصدیق شدہ معلومات · کوئی سرکاری ضمانت نہیں",
    brand_title: "PassportReady",
    brand_sub: "درخواست دینے سے پہلے جانچیں",
    nav_how: "یہ کیسے کام کرتا ہے",
    nav_checker: "تیاری کا جائزہ",
    nav_directory: "ممالک کی فہرست",
    nav_guides: "پاسپورٹ گائیڈز",
    nav_tools: "ٹولز",
    nav_faq: "عمومی سوالات",
    nav_cta: "ابھی شروع کریں ↗",

    hero_eyebrow: "آپ کا پاسپورٹ تیاری کا ساتھی",
    hero_title: "مکمل وضاحت کے ساتھ درخواست دیں۔<br><em>قیاس آرائیوں سے نہیں۔</em>",
    hero_desc: "پاسپورٹ کی درخواست کی تیاری کا قابل اعتماد اور پرائیویسی کا حامل طریقہ۔ درخواست جمع کرانے سے قبل ناموں کے فرق کی نشاندہی کریں، مصدقہ متبادل دستاویزات سمجھیں اور براہ راست سرکاری پورٹل سے رہنمائی حاصل کریں۔",
    hero_btn_start: "میری چیک لسٹ بنائیں →",
    hero_btn_how: "رہنمائی دیکھیں",
    trust_checklist: "ذاتی نوعیت کی چیک لسٹ",
    trust_sources: "سرکاری ذرائع کے لنکس",
    trust_privacy: "ذاتی ڈیٹا محفوظ نہیں کیا جاتا",

    stat_countries: "249 ممالک و خطے",
    stat_verified: "سرکاری ذرائع پر مبنی",
    stat_secure: "100٪ کلائنٹ سائیڈ پرائیویسی",

    features_title: "ایک واضح طریقہ کار۔ ملک کے مخصوص قواعد۔",
    features_subtitle: "ہر ملک اور خاندانی صورت حال کے لیے قواعد مختلف ہوتے ہیں۔ PassportReady اہم پہلوؤں کو منظم کرتا ہے۔",
    feat1_title: "ذاتی نوعیت کی چیک لسٹ",
    feat1_desc: "آپ کے ملک، سروس کی قسم، عمر کے گروپ اور ملکی یا سفارت خانے کے طریقہ کار کے مطابق۔",
    feat2_title: "نام اور تاریخ پیدائش کی جانچ",
    feat2_desc: "فیس ادا کرنے سے پہلے نام کے ہجے، ولدیت اور تاریخ پیدائش کے فرق کو پکڑیں۔",
    feat3_title: "متبادل دستاویزات کا حل",
    feat3_desc: "اگر کوئی اصل دستاویز دستیاب نہ ہو تو سرکاری طور پر منظور شدہ متبادل جانیں۔",
    feat4_title: "6 ماہ کی میعاد کی جانچ",
    feat4_desc: "جانچیں کہ بین الاقوامی سفر کے لیے آپ کے پاسپورٹ میں مطلوبہ 6 ماہ کی میعاد موجود ہے یا نہیں۔",
    feat5_title: "براہ راست سرکاری رہنمائی",
    feat5_desc: "وزارت خارجہ، امیگریشن و پاسپورٹ کے اصل پورٹلز کے مصدقہ لنکس۔",
    feat6_title: "پرنٹ اور پی ڈی ایف چیک لسٹ",
    feat6_desc: "بغیر کسی اکاؤنٹ کے اپنی مکمل چیک لسٹ فوری محفوظ یا پرنٹ کریں۔",

    wizard_title: "پاسپورٹ تیاری کا تشخیصی ٹول",
    wizard_sub: "چند آسان سوالات کے جوابات دیں تاکہ آپ کی مخصوص چیک لسٹ تیار کی جا سکے۔",
    step_indicator: "مرحلہ {current} از {total}",
    btn_back: "← واپس",
    btn_next: "آگے بڑھیں →",
    btn_finish: "چیک لسٹ بنائیں →",
    btn_print: "پرنٹ / پی ڈی ایف محفوظ کریں ↗",
    btn_restart: "دوبارہ شروع کریں",
    btn_save: "پیش رفت محفوظ کریں",

    step1_title: "آپ کس ملک کے لیے درخواست دے رہے ہیں؟",
    step1_helper: "پاسپورٹ جاری کرنے والا ملک منتخب کریں اور بتائیں کہ آپ ملک کے اندر ہیں یا بیرون ملک۔",
    label_issuing_country: "پاسپورٹ جاری کرنے والا ملک / ادارہ",
    country_placeholder: "ملک کا نام درج کریں (مثلاً Pakistan, India, United States)...",
    label_applying_from: "آپ کہاں سے درخواست دے رہے ہیں؟",
    opt_domestic: "ملک کے اندر (مقامی پاسپورٹ آفس)",
    opt_consular: "بیرون ملک (سفارت خانہ یا قونصل خانہ)",

    step2_title: "آپ کو کون سی سروس درکار ہے؟",
    step2_helper: "پہلی بار پاسپورٹ، تجدید یا گمشدہ پاسپورٹ کے مراحل مختلف ہوتے ہیں۔",
    label_service: "درخواست کی قسم",
    srv_first: "پہلی بار پاسپورٹ (New / Fresh Passport)",
    srv_renewal: "پاسپورٹ کی تجدید (Renewal / Reissue)",
    srv_lost: "گمشدہ یا چوری شدہ پاسپورٹ (Lost / Stolen)",
    srv_damaged: "خراب شدہ پاسپورٹ (Damaged)",
    srv_name_change: "نام یا کوائف میں تبدیلی (Correction / Change of Name)",
    srv_minor: "بچوں کا پاسپورٹ (Child / Minor)",
    srv_urgent: "ارجنٹ یا فاسٹ ٹریک سروس (Urgent / Fast Track)",
    srv_emergency: "ہنگامی سفری دستاویز (Emergency Travel Certificate)",

    step3_title: "درخواست گزار کی عمر کیا ہے؟",
    step3_helper: "عمر کے مطابق والدین کی رضامندی اور بائیو میٹرک کے قواعد طے ہوتے ہیں۔",
    label_age_group: "درخواست گزار کا عمر کا گروپ",
    age_infant: "چھوٹا بچہ (5 سال سے کم)",
    age_minor: "نابالغ / بچہ (5 سے 17 سال)",
    age_adult: "بالغ (18 سے 59 سال)",
    age_senior: "سینئر شہری (60 سال یا زائد)",

    step4_title: "پروسیسنگ کی ترجیحی رفتار",
    step4_helper: "ارجنٹ یا فاسٹ ٹریک سروس کی اضافی فیس ہوتی ہے۔",
    label_urgency: "مطلوبہ رفتار",
    urg_standard: "نارمل / عام رفتار (Standard)",
    urg_expedited: "ارجنٹ / فاسٹ ٹریک (Urgent / Fast Track)",
    urg_emergency: "فوری ہنگامی سفر (Emergency)",

    step5_title: "موجودہ پاسپورٹ کی حیثیت",
    step5_helper: "پرانا پاسپورٹ تجدید کے وقت منسوخی کے لیے پیش کرنا ضروری ہوتا ہے۔",
    label_status: "آپ کے موجودہ پاسپورٹ کی کیا کیفیت ہے؟",
    stat_never: "پہلے کبھی پاسپورٹ نہیں بنا",
    stat_valid: "فی الوقت کارآمد ہے (صفحات باقی ہیں)",
    stat_expired: "میعاد ختم ہو چکی ہے (یا 12 ماہ میں ختم ہو رہی ہے)",
    stat_damaged: "خراب یا پھٹ گیا ہے",
    stat_lost: "گم یا چوری ہو گیا ہے",

    step6_title: "بنیادی دستاویزات کی جانچ",
    step6_helper: "دیکھیں کہ آیا آپ کے پاس اصل شناختی دستاویزات موجود ہیں۔",
    label_birth_proof: "پیدائش یا تاریخ پیدائش کا ثبوت (نادرا فارم بی / برتھ سرٹیفکیٹ / شناختی کارڈ)",
    label_address_proof: "موجودہ رہائش کا ثبوت (شناختی کارڈ پر پتہ / بجلی کا بل)",
    label_citizenship_proof: "شہریت کا ثبوت (شناختی کارڈ / نائیکوپ / والدین کے کوائف)",
    doc_have: "جی ہاں، میرے پاس اصل سرکاری دستاویز ہے",
    doc_partial: "صرف فوٹو کاپی یا ڈیجیٹل کاپی موجود ہے",
    doc_missing: "میرے پاس یہ دستاویز نہیں ہے (متبادل درکار ہے)",

    step7_title: "نام اور تاریخ پیدائش کے فرق کی جانچ",
    step7_helper: "دستاویزات میں ہجے کا تھوڑا سا فرق بھی درخواست مسترد کرا سکتا ہے۔",
    label_name_match: "کیا تمام دستاویزات میں نام کے ہجے بالکل ایک جیسے ہیں؟",
    match_yes: "جی ہاں — تمام دستاویزات پر نام اور ہجے بالکل یکساں ہیں",
    match_minor: "معمولی فرق (مثلاً تخلص، مخفف یا کوئی ایک حرف)",
    match_major: "بڑا فرق (شادی کے بعد نام بدلنا یا مختلف نام)",
    match_not_sure: "ابھی جانچ نہیں کی",
    label_dob_match: "کیا تاریخ پیدائش تمام ریکارڈز میں ایک جیسی ہے؟",
    dob_yes: "جی ہاں — دن، مہینہ اور سال بالکل یکساں ہیں",
    dob_mismatch: "نہیں — کسی دستاویز میں تاریخ پیدائش مختلف ہے",

    step8_title: "خصوصی صورتحال",
    step8_helper: "اگر کوئی خاص معاملہ ہو تو منتخب کریں۔",
    label_special: "خصوصی کیفیت (اگر ہو)",
    spec_none: "عام درخواست — کوئی خاص مسئلہ نہیں",
    spec_address_change: "گزشتہ 12 ماہ میں رہائش تبدیل ہوئی ہے",
    spec_custody: "سنگل پیرنٹ / عدالتی سرپرستی / تحویل کا فیصلہ",
    spec_dual_nat: "دوہری شہریت یا غیر ملکی اقامت",
    spec_pages_full: "پاسپورٹ کارآمد ہے لیکن ویزا صفحات ختم ہو گئے ہیں",
    spec_accessibility: "معذوری یا خصوصی سہولت کی ضرورت",

    step9_title: "سرکاری پورٹل کا جائزہ",
    step9_helper: "چیک لسٹ بنانے سے پہلے آخری مرحلہ۔",
    label_checked_gov: "کیا آپ نے سرکاری پورٹل کی ہدایات دیکھی ہیں؟",
    gov_yes: "جی ہاں، میں نے سرکاری پورٹل دیکھ لیا ہے",
    gov_no: "نہیں — مجھے سرکاری لنک درکار ہے",

    step10_title: "آپ کی تیار شدہ پاسپورٹ رپورٹ",
    badge_prepared: "تیار",
    badge_attention: "توجہ طلب",
    badge_missing: "دستاویزات نامکمل",
    badge_official: "سرکاری تصدیق ضروری",

    tools_expiry_title: "6 ماہ پاسپورٹ میعاد کیلکولیٹر",
    tools_expiry_desc: "کئی ممالک اور ایئر لائنز سفر کے وقت کم از کم 6 ماہ کی میعاد کا تقاضا کرتی ہیں۔",
    label_travel_date: "سفر کی تاریخ:",
    label_passport_expiry: "پاسپورٹ کے اختتام کی تاریخ:",
    btn_check_validity: "میعاد جانچیں →",

    tools_mismatch_title: "نام اور تاریخ پیدائش کے فرق کا تجزیہ",
    tools_mismatch_desc: "دستاویز اے (شناختی کارڈ) اور دستاویز بی (سرٹیفکیٹ یا پرانا پاسپورٹ) کا تقابل کریں۔",

    footer_disclaimer: "PassportReady ایک آزادانہ رہنما پلیٹ فارم ہے اور اس کا کسی بھی حکومت سے کوئی تعلق نہیں ہے۔ ہم پاسپورٹ جاری نہیں کرتے اور نہ ہی کوئی سرکاری فیس لیتے ہیں۔ حتمی معلومات کے لیے ہمیشہ سرکاری ویب سائٹ سے رجوع کریں۔"
  }
};

let CURRENT_LANG = 'en';

function getI18nText(key, replacements = {}) {
  const dict = I18N_TRANSLATIONS[CURRENT_LANG] || I18N_TRANSLATIONS['en'];
  let text = dict[key] || I18N_TRANSLATIONS['en'][key] || key;
  for (const [k, v] of Object.entries(replacements)) {
    text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
  }
  return text;
}

function setLanguage(lang) {
  if (!I18N_TRANSLATIONS[lang]) lang = 'en';
  CURRENT_LANG = lang;
  try {
    localStorage.setItem('passportready_lang', lang);
  } catch (e) {}

  const dict = I18N_TRANSLATIONS[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = dict.dir || 'ltr';

  // Apply translations to all DOM nodes with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (dict[k]) {
      if (el.dataset.i18nTarget === 'placeholder') {
        el.placeholder = dict[k];
      } else {
        el.innerHTML = dict[k];
      }
    }
  });

  // Trigger language change event for dynamic components
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang, dict } }));
}

// Export for Node and browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { I18N_TRANSLATIONS, getI18nText, setLanguage };
}
