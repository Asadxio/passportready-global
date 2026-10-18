/**
 * PassportReady Comprehensive Educational Guides
 * Official-source grounded passport guidance articles
 */

const PASSPORT_GUIDES = [
  {
    id: "first-passport",
    icon: "✦",
    title: "First-Time Passport Application Guide",
    subtitle: "Everything you need to know when applying for your very first international travel passport.",
    badge: "Core Guide",
    readTime: "6 min read",
    summary: "Applying for your first passport requires establishing identity, citizenship, and residential jurisdiction beyond reasonable doubt. Discover the standard documentation tree, in-person requirements, and verification steps.",
    sections: [
      {
        heading: "1. The Three Pillars of Eligibility",
        content: "Every sovereign passport authority requires unambiguous proof in three fundamental areas: (1) Proof of Citizenship or Nationality (by birth, descent, registration, or naturalization); (2) Proof of Identity (government photo identity card verifying physical identity); and (3) Proof of Physical Address (establishing geographical jurisdiction for police and postal services)."
      },
      {
        heading: "2. In-Person Lodgement & Biometrics",
        content: "Unlike renewals, almost every country mandates personal appearance for first-time applicants. In the US, this requires booking an appointment at a Passport Acceptance Facility (Post Office or Court Clerk) with Form DS-11. In India, it takes place at a Passport Seva Kendra (PSK/POPSK) where live photograph, fingerprints, and iris scans are captured. In the UK, first-time adult applicants may be called for a 30-minute identity interview to counter identity fraud."
      },
      {
        heading: "3. Police and Security Background Checks",
        content: "Depending on your country, first-time applications often trigger a formal background check. For instance, in India, a local police officer visits your current address or summons you to the police station with original identity proofs. Never provide conflicting addresses between your application form and your present physical residence."
      }
    ]
  },
  {
    id: "renewal-reissue",
    icon: "↻",
    title: "Passport Renewal & Reissue Guide",
    subtitle: "How to renew an expiring, full, or recently expired passport smoothly.",
    badge: "Popular",
    readTime: "5 min read",
    summary: "Learn when you should apply for renewal, how the simplified renewal route works, what happens to existing visas, and rules for passports expired by more than 3 years.",
    sections: [
      {
        heading: "1. The Optimal Renewal Window",
        content: "You should generally initiate your passport renewal 6 to 9 months before its expiration date. Many countries do not allow entry if your passport has less than 6 months of validity left. In most jurisdictions (such as India, US, UK, Australia), you can apply for renewal up to 1 year before expiry."
      },
      {
        heading: "2. Simplified Mail-In & Online Routes",
        content: "Adults renewing an undamaged passport often qualify for streamlined processing without an in-person interview. For example, in the US, Form DS-82 allows mail-in renewal if your passport was issued when you were 16 or older and within the last 15 years. Canada offers simplified renewal without requiring a guarantor."
      },
      {
        heading: "3. What Happens to Your Existing Valid Visas?",
        content: "When an old passport is renewed, the issuing authority cancels the booklet (usually by clipping the corners or stamping CANCELLED). However, valid visas inside the old passport remain legally valid in most countries (including US, UK, and Schengen), provided you carry both the old cancelled passport and the new passport together during travel."
      },
      {
        heading: "4. The 3-Year Post-Expiry Threshold",
        content: "If your passport has been expired for more than 3 years, many authorities (including India and the US) consider your identity file dormant and will require fresh background checks, police verification, or personal appearance with primary citizenship documents."
      }
    ]
  },
  {
    id: "lost-stolen-damaged",
    icon: "⚠",
    title: "Lost, Stolen or Damaged Passport Protocol",
    subtitle: "Urgent steps to take when your passport is missing, stolen abroad, or physically destroyed.",
    badge: "Critical",
    readTime: "7 min read",
    summary: "Immediate actions required to protect yourself from identity theft, official police report protocols, and how to obtain an emergency travel document abroad.",
    sections: [
      {
        heading: "1. Step 1: Immediate Police Report (FIR)",
        content: "The moment you discover your passport is lost or stolen, lodge an official police report (FIR in India/Pakistan/Bangladesh, or police theft report in Europe/US). You must obtain an official stamped copy. Passport offices will reject any replacement request without an official police reference."
      },
      {
        heading: "2. Step 2: Notify the Issuing Authority to Cancel the Document",
        content: "Report the loss directly to the issuing authority (e.g., Form DS-64 in the US, or online report on Passport Seva). Once reported, the passport's electronic chip and machine-readable data are entered into Interpol's Stolen and Lost Travel Documents (SLTD) database. If you later find the passport, NEVER attempt to travel on it—it will result in detention at international borders."
      },
      {
        heading: "3. Lost or Stolen While Traveling Abroad",
        content: "Contact your home country's nearest embassy or consulate immediately. If you have immediate travel back home, embassies can issue an Emergency Travel Certificate (ETC) or temporary emergency passport, usually within 24 to 48 hours."
      },
      {
        heading: "4. Damaged vs Normal Wear and Tear",
        content: "A passport with a detached cover, ripped pages, water stains obscuring biographical text, or an unreadable electronic chip is classified as 'Damaged/Mutilated'. You must surrender the damaged booklet and apply for a replacement."
      }
    ]
  },
  {
    id: "name-correction",
    icon: "✎",
    title: "Name, Spelling & Personal Detail Correction Guide",
    subtitle: "Resolving mismatches, marriage name changes, and clerical errors legally.",
    badge: "Essential",
    readTime: "6 min read",
    summary: "Understand the difference between clerical spelling fixes, marriage/divorce name changes, and complete legal name changes requiring official Gazette notifications.",
    sections: [
      {
        heading: "1. Minor Clerical & Transliteration Discrepancies",
        content: "A minor discrepancy (e.g., 'Sara' vs 'Sarah', or an initial expanded into a full name) can often be resolved by submitting two government-issued photo identity cards that consistently show the correct spelling."
      },
      {
        heading: "2. Name Change After Marriage or Divorce",
        content: "In most modern passport systems (such as India under updated MEA guidelines, US, UK, and Canada), women changing their surname after marriage do NOT require a court order or Gazette notification. An official Marriage Certificate issued by the Registrar of Marriages is sufficient."
      },
      {
        heading: "3. Major Name Change: The Official Gazette Route",
        content: "If you are completely changing your first or last name for reasons other than marriage, authorities mandate strict proof to prevent identity evasion. In India, this requires: (1) Execution of a Deed Poll / Sworn Affidavit; (2) Publication in the Official Gazette of India; and (3) Announcements in two daily newspapers."
      }
    ]
  },
  {
    id: "child-minor-passports",
    icon: "♥",
    title: "Child & Minor Passport Safeguards Guide",
    subtitle: "Protecting minors: parental consent, custody documents, and validity rules.",
    badge: "Safeguards",
    readTime: "5 min read",
    summary: "International conventions enforce strict anti-abduction rules for minors. Understand parental consent, single-parent documentation, and reduced validity periods.",
    sections: [
      {
        heading: "1. The Universal Dual-Parent Consent Rule",
        content: "Under international legal frameworks, passport authorities enforce the principle that both parents must consent to a minor child's travel document. In the US, both parents must appear with the child under 16, or the non-applying parent must provide a notarized Form DS-3053. In India, Annexure D (consent of both parents) or Annexure C (single parent declaration) is mandatory."
      },
      {
        heading: "2. Single Parent, Sole Custody & Guardianship",
        content: "If one parent has sole legal custody, you must provide certified court orders demonstrating sole legal custody, death certificate of the deceased parent, or judicial adoption orders. Private agreements without court sanction are rarely accepted."
      },
      {
        heading: "3. Shorter Validity for Minors",
        content: "Because children's facial appearances change rapidly, minor passports are issued with shorter validity (typically 5 years, or until age 18) and reduced fees. Biometrics (fingerprints/iris) are typically exempt for children under 5 or 6 years old."
      }
    ]
  },
  {
    id: "six-month-validity-rule",
    icon: "✈",
    title: "The 6-Month Passport Validity Rule Explained",
    subtitle: "Why having an unexpired passport is not enough for international flights.",
    badge: "Travel Warning",
    readTime: "4 min read",
    summary: "Over 70 international destinations require your passport to have 3 to 6 months validity remaining beyond your intended departure date. Avoid being turned away at the airline check-in desk.",
    sections: [
      {
        heading: "1. What is the 6-Month Rule?",
        content: "Many countries enforce a rule that visitors' passports must remain valid for at least 6 months after the date they plan to depart the destination country. This ensures that even if your trip is delayed due to emergency, illness, or flight disruptions, you will not become an undocumented traveler."
      },
      {
        heading: "2. Countries Enforcing 6 Months vs 3 Months",
        content: "Popular destinations enforcing 6 months include Thailand, Indonesia (Bali), Singapore, UAE, Turkey, Egypt, and most of Asia and South America. European Schengen area countries enforce a 3-month rule beyond your planned exit date (and the passport must have been issued within the last 10 years)."
      },
      {
        heading: "3. Airline Boarding Enforcement (TIMATIC)",
        content: "Airlines face heavy government fines if they transport a passenger who lacks sufficient passport validity. Airlines check the IATA Timatic database at check-in; if your validity is 1 day short, you will be denied boarding with no ticket refund."
      }
    ]
  },
  {
    id: "photo-specifications",
    icon: "📷",
    title: "ICAO 9303 Photo Specifications Guide",
    subtitle: "Avoid the #1 mechanical reason passport applications are delayed.",
    badge: "Photo Guide",
    readTime: "4 min read",
    summary: "Detailed standards for dimensions, lighting, background, facial expressions, headgear, and eyeglasses according to international standards.",
    sections: [
      {
        heading: "1. Core Facial Dimensions (70-80% Face Area)",
        content: "The face—from the bottom of the chin to the top of the head—must occupy between 70% and 80% of the photograph height. Looking directly at the camera with both ears and shoulders visible is standard."
      },
      {
        heading: "2. Lighting and Background",
        content: "The background must be plain, uniform, and light-coloured (plain white for US/India/Pakistan/Bangladesh; light grey or cream for the UK). No shadows on the face or behind the head are permitted."
      },
      {
        heading: "3. Eyeglasses, Headwear & Expression",
        content: "Eyeglasses are strictly prohibited in US and UK passport photos, and strongly discouraged globally due to flash glare. Head coverings are only permitted for religious or medical reasons, and must not cast shadows over any part of the face. Expression must be neutral with mouth closed and eyes open."
      }
    ]
  }
];

// Export for Node and browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PASSPORT_GUIDES };
}
