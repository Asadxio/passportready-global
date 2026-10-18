/**
 * PassportReady Interactive Utility Tools
 * - Destination-Sensitive Passport Expiry Evaluator
 * - Name & Date-of-Birth Discrepancy Analyzer
 * - Biometric Standards Checker
 */

const PassportTools = {
  // 1. Destination-Sensitive Passport Validity Evaluator
  evaluateExpiry(passportExpiryDateStr, travelDateStr, destinationRuleType = 'standard_six_month') {
    if (!passportExpiryDateStr || !travelDateStr) {
      return {
        valid: false,
        error: "Please enter both your planned travel date and passport expiry date."
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

  // 2. Name & DOB Discrepancy Analyzer
  analyzeNameDiscrepancy(docAName, docBName, docADob, docBDob) {
    const analysis = {
      nameStatus: 'MATCH',
      dobStatus: 'MATCH',
      discrepancyClass: 'NONE', // 'NONE', 'FORMATTING', 'LEGAL_DISCREPANCY'
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
          analysis.discrepancyClass = 'FORMATTING';
          analysis.recommendations.push(
            "Name Order Inversion (Given Name vs. Family Name): The words match, but the sequence is reversed. Passport forms separate 'Given Name' from 'Surname/Family Name'. Ensure your application form matches the family name assignment established in your primary civil birth or naturalization certificate."
          );
        } else if (wordsA.length !== wordsB.length) {
          analysis.nameStatus = 'INITIALS_OR_MISSING_NAME';
          analysis.discrepancyClass = 'FORMATTING';
          analysis.recommendations.push(
            "Initials or Abbreviated Name: One record uses an initial (e.g. 'R. Kumar') while another uses the expanded full name ('Ramesh Kumar'). International passport authorities generally mandate full legal names without initials, unless an initial is your statutory legal name recorded on your birth certificate."
          );
        } else {
          analysis.nameStatus = 'SPELLING_DIFFERENCE';
          analysis.discrepancyClass = 'LEGAL_DISCREPANCY';
          analysis.recommendations.push(
            "Substantive Character or Spelling Difference: Distinct characters exist between records (e.g., 'Choudhary' vs 'Chaudhry'). In India, substantive name changes require Gazette publication and newspaper notices; in the US, certified court orders or marriage certificates are required under 22 CFR § 51.25; in the UK, an enrolled or unenrolled deed poll is required by HMPO."
          );
        }
      }
    }

    if (docADob && docBDob) {
      if (docADob !== docBDob) {
        analysis.dobStatus = 'DOB_MISMATCH';
        analysis.discrepancyClass = 'LEGAL_DISCREPANCY';
        analysis.recommendations.push(
          `Date-of-Birth Discrepancy (${docADob} vs ${docBDob}): Passport authorities treat birth date discrepancies as critical identity conflicts. The date recorded on your primary municipal/civil birth certificate or original certificate of citizenship legally supersedes dates on secondary records (school records, tax cards, driving licences). If your secondary ID is incorrect, update it with the civil registrar before submitting your passport application.`
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
