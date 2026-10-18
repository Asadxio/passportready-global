/**
 * PassportReady Interactive Utility Tools
 * - 6-Month Expiry Rule Checker
 * - Name & Date-of-Birth Discrepancy Analyzer
 * - ICAO Photo Compliance Validator
 */

const PassportTools = {
  // 1. 6-Month Passport Expiry Rule Evaluator
  evaluateExpiry(passportExpiryDateStr, travelDateStr, destinationCountry = 'Generic') {
    if (!passportExpiryDateStr || !travelDateStr) {
      return {
        valid: false,
        error: "Please enter both travel date and passport expiry date."
      };
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
        badge: "CRITICAL DANGER",
        message: "Your passport will be completely expired on your travel date! You will be denied boarding.",
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
        badge: "HIGH RISK — RENEW NOW",
        message: `Your passport will only have ${daysRemaining} days (~${monthsRemaining} months) of validity remaining when you travel. Almost all international destinations require at least 3 to 6 months. Airlines will likely deny boarding.`,
        daysRemaining,
        monthsRemaining
      };
    } else if (daysRemaining < 180) {
      return {
        valid: false,
        status: "LESS_THAN_6_MONTHS",
        badge: "MODERATE RISK — 6-MONTH RULE",
        message: `Your passport has ${daysRemaining} days (~${monthsRemaining} months) validity left. While some destinations (e.g. parts of Europe with 3-month rule) may technically permit entry, over 70 countries enforce a strict 6-month rule. Urgent renewal is strongly recommended.`,
        daysRemaining,
        monthsRemaining
      };
    } else {
      return {
        valid: true,
        status: "SUFFICIENT_VALIDITY",
        badge: "VALID FOR TRAVEL",
        message: `Your passport has ${daysRemaining} days (~${monthsRemaining} months) of validity remaining beyond your travel date. This satisfies the standard international 6-month validity rule.`,
        daysRemaining,
        monthsRemaining
      };
    }
  },

  // 2. Name & DOB Discrepancy Analyzer
  analyzeNameDiscrepancy(docAName, docBName, docADob, docBDob) {
    const analysis = {
      nameStatus: 'MATCH',
      dobStatus: 'MATCH',
      recommendations: []
    };

    if (docAName && docBName) {
      const cleanA = docAName.trim().toLowerCase().replace(/\s+/g, ' ');
      const cleanB = docBName.trim().toLowerCase().replace(/\s+/g, ' ');

      if (cleanA === cleanB) {
        analysis.nameStatus = 'EXACT_MATCH';
      } else {
        const wordsA = cleanA.split(' ');
        const wordsB = cleanB.split(' ');

        // Check if words are identical but in different order (e.g., John Smith vs Smith John)
        const sortedA = [...wordsA].sort().join(' ');
        const sortedB = [...wordsB].sort().join(' ');

        if (sortedA === sortedB) {
          analysis.nameStatus = 'NAME_ORDER_INVERSION';
          analysis.recommendations.push(
            "Name Order Difference (Given Name vs Surname): The words are the same, but the order is flipped. In passport applications, the Given Name and Surname fields are distinct. Make sure your application form matches the primary civil birth record."
          );
        } else if (wordsA.length !== wordsB.length) {
          analysis.nameStatus = 'INITIALS_OR_MISSING_NAME';
          analysis.recommendations.push(
            "Initials or Missing Middle Name: One document uses an initial (e.g. 'A. Sharma') while another has the full name ('Amit Sharma'). Passport authorities generally require full names without abbreviations unless explicitly substantiated by school or civil records."
          );
        } else {
          analysis.nameStatus = 'SPELLING_DIFFERENCE';
          analysis.recommendations.push(
            "Spelling Discrepancy: Characters differ between documents (e.g., 'Choudhary' vs 'Chaudhry' or 'Sara' vs 'Sarah'). You must determine which document is your legally recognized primary record and either correct the secondary ID or provide a certified affidavit/gazette."
          );
        }
      }
    }

    if (docADob && docBDob) {
      if (docADob !== docBDob) {
        analysis.dobStatus = 'DOB_MISMATCH';
        analysis.recommendations.push(
          `Date of Birth Mismatch (${docADob} vs ${docBDob}): Authorities enforce zero tolerance on birth date discrepancies. The date recorded on your primary municipal birth certificate or original citizenship certificate takes legal precedence.`
        );
      }
    }

    return analysis;
  }
};

// Export for Node and browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PassportTools };
}
