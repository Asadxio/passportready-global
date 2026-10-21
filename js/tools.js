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
            "Substantive Character or Spelling Difference: Distinct characters exist between records (e.g., 'Choudhary' vs 'Chaudhry'). In India, minor spelling corrections matching secondary statutory IDs are accepted under MEA rules without a Gazette notice; only complete major name changes require Gazette publication and two newspaper ads. In the US, court orders or marriage certificates are required under 22 CFR § 51.25; in the UK, a deed poll is required by HMPO."
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
  },

  // 3. Biometric Photo Standards & Compliance Validator
  getPhotoStandards() {
    return {
      'icao_35x45': {
        id: 'icao_35x45',
        name: 'ICAO Doc 9303 (35 × 45 mm)',
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
        typicalJurisdictions: ['UK', 'EU', 'AU', 'NZ', 'JP', 'Global'],
        backgroundDesc: 'Plain light grey, cream, or off-white (UK/EU prohibit stark pure white; Australia allows white or light grey)',
        expressionDesc: 'Neutral facial expression, mouth closed, direct gaze at camera, eyes clearly visible',
        eyeglassDesc: 'Eyeglasses generally discouraged; no glare reflections, heavy rims, or tinted lenses',
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
        eyeglassDesc: 'Eyeglasses strictly prohibited under 22 CFR § 51.26 (unless signed medical waiver)',
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
        containerWidth: 250,
        containerHeight: 350 // 250 * (70/50) = 350
      }
    };
  },

  getPhotoStandardForCountry(countryCode) {
    const code = (countryCode || '').toUpperCase().trim();
    if (code === 'US') return 'us_2x2';
    if (code === 'CA') return 'ca_50x70';
    return 'icao_35x45';
  },

  validatePhotoDimensions(width, height, standardId = 'icao_35x45') {
    const standards = this.getPhotoStandards();
    const standard = standards[standardId] || standards['icao_35x45'];

    if (!width || !height || width <= 0 || height <= 0 || isNaN(width) || isNaN(height)) {
      return {
        valid: false,
        error: 'Invalid image dimensions provided.'
      };
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
      minHeightPx: standard.minHeightPx
    };
  }
};

// Export for Node and browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PassportTools };
}
