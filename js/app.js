/**
 * PassportReady Main Application Controller
 * Connects UI, Wizard, Country Directory, Rules Engine, Interactive Tools, and Guides.
 */

(function () {
  'use strict';

  // Country Data Reference: resolve from window.PASSPORT_COUNTRIES or window.COUNTRY_DATA
  const COUNTRY_DATA = (typeof window !== 'undefined' && (window.COUNTRY_DATA || window.PASSPORT_COUNTRIES)) ||
    (typeof PASSPORT_COUNTRIES !== 'undefined' ? PASSPORT_COUNTRIES :
      (typeof require !== 'undefined' ? (require('../data/country-data.js').PASSPORT_COUNTRIES || []) : []));

  // Application State
  const state = {
    currentStep: 0,
    totalSteps: 10,
    selectedCountry: null,
    answers: {
      countryCode: 'IN',
      countryName: 'India',
      location: 'inside',
      service: 'first_passport',
      age: 'adult',
      urgency: 'standard',
      status: 'never',
      birthProof: 'have',
      addressProof: 'have',
      citizenshipProof: 'have',
      nameMatch: 'yes',
      dobMatch: 'yes',
      special: 'none',
      checkedGov: 'yes'
    },
    directoryFilter: 'all',
    directoryRegion: 'all',
    checklistChecked: {},
    evaluationResult: null
  };

  let rulesEngine = null;

  // Initialize Application
  function init() {
    loadSavedState();
    setupLanguageSelector();
    initializeRulesEngine();
    renderCountryOptions();
    updateDirectoryFilterCounts();
    renderCountryDirectory();
    renderGuides();
    setupWizardListeners();
    setupToolListeners();
    setupDirectoryListeners();
    setupModalListeners();
    // Deep-linking: load shared state from URL hash if provided
    loadStateFromUrlHash();
    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', () => loadStateFromUrlHash());
    }
    renderStep(state.currentStep);
    updateCountryHint();
  }

  // Initialize Rules Engine with bundled or fetched data
  function initializeRulesEngine() {
    let rulePacks = {};
    if (typeof RULE_PACKS !== 'undefined') {
      rulePacks = RULE_PACKS;
    }
    const countries = Array.isArray(COUNTRY_DATA) ? COUNTRY_DATA : [];
    rulesEngine = new PassportRulesEngine(rulePacks, countries);
  }

  // LocalStorage Persistence
  function saveState() {
    try {
      localStorage.setItem('passportready_answers', JSON.stringify(state.answers));
      localStorage.setItem('passportready_checks', JSON.stringify(state.checklistChecked));
      showToast(getI18nText('Progress saved securely in browser.'));
    } catch (e) {}
  }

  function loadSavedState() {
    try {
      const savedLang = localStorage.getItem('passportready_lang');
      if (savedLang && typeof savedLang === 'string') {
        const allowedLangs = ['en', 'hi', 'ur', 'fr', 'de', 'ar'];
        if (allowedLangs.includes(savedLang)) setLanguage(savedLang);
      }

      const savedAnswers = localStorage.getItem('passportready_answers');
      if (savedAnswers) {
        const parsed = JSON.parse(savedAnswers);
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
          const allowedKeys = [
            'countryCode', 'countryName', 'location', 'service', 'age', 'ageExact',
            'urgency', 'status', 'birthProof', 'addressProof', 'citizenshipProof',
            'nameMatch', 'dobMatch', 'special', 'applicantCategory', 'validity',
            'lossTier', 'checkedGov'
          ];
          for (const key of allowedKeys) {
            if (Object.prototype.hasOwnProperty.call(parsed, key)) {
              state.answers[key] = parsed[key];
            }
          }
        }
      }

      const savedChecks = localStorage.getItem('passportready_checks');
      if (savedChecks) {
        const parsedChecks = JSON.parse(savedChecks);
        if (parsedChecks && typeof parsedChecks === 'object' && !Array.isArray(parsedChecks)) {
          state.checklistChecked = {};
          for (const [k, v] of Object.entries(parsedChecks)) {
            if (typeof k === 'string' && typeof v === 'boolean') {
              state.checklistChecked[k] = v;
            }
          }
        }
      }
    } catch (e) {}
  }

  function resetState() {
    if (confirm("Reset all wizard answers and checklist progress?")) {
      try {
        localStorage.removeItem('passportready_answers');
        localStorage.removeItem('passportready_checks');
      } catch (e) {}
      state.currentStep = 0;
      state.checklistChecked = {};
      state.answers = {
        countryCode: 'IN',
        countryName: 'India',
        location: 'inside',
        service: 'first_passport',
        age: 'adult',
        urgency: 'standard',
        status: 'never',
        birthProof: 'have',
        addressProof: 'have',
        citizenshipProof: 'have',
        nameMatch: 'yes',
        dobMatch: 'yes',
        special: 'none',
        checkedGov: 'yes'
      };
      const countryInput = document.getElementById('countryInput');
      if (countryInput) countryInput.value = 'India';
      const exactAgeEl = document.getElementById('exactAge');
      if (exactAgeEl) exactAgeEl.value = '';
      const applicantCatEl = document.getElementById('applicantCategory');
      if (applicantCatEl) applicantCatEl.value = 'general';
      const validityEl = document.getElementById('validityOption');
      if (validityEl) validityEl.value = 'auto';
      const lossTierEl = document.getElementById('lossTier');
      if (lossTierEl) lossTierEl.value = '';
      renderStep(0);
      updateCountryHint();
      document.getElementById('resultbox').classList.remove('show');
      document.getElementById('wizardnav').style.display = 'flex';
      showToast("Checklist reset.");
    }
  }

  // Toast notification
  function showToast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2600);
  }

  // Language setup
  function setupLanguageSelector() {
    const langSelect = document.getElementById('langSelect');
    if (!langSelect) return;
    langSelect.value = CURRENT_LANG;
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });

    window.addEventListener('languageChanged', (e) => {
      const newLang = (e && e.detail && e.detail.lang) || CURRENT_LANG;
      updateCountryHint();
      renderCountryDirectory();

      const resultBox = document.getElementById('resultbox');
      const isResultsVisible = resultBox && resultBox.classList.contains('show');

      if (isResultsVisible && state.evaluationResult) {
        // DEF-06: Preserve scroll position and suppress step panes/wizard navigation
        const scrollY = (typeof window !== 'undefined') ? window.scrollY : 0;
        const panes = document.querySelectorAll('.step-pane');
        panes.forEach(p => p.classList.remove('active'));
        const wizardNav = document.getElementById('wizardnav');
        if (wizardNav) wizardNav.style.display = 'none';

        // Re-evaluate current answers with the new language
        const updatedResult = rulesEngine.evaluate(state.answers, newLang);
        state.evaluationResult = updatedResult;

        // Re-render results dashboard without jumping scroll
        renderResultsDashboard(updatedResult, false);

        if (typeof window !== 'undefined') {
          window.scrollTo(0, scrollY);
        }
      } else {
        renderStep(state.currentStep);
      }
    });
  }

  // Country Data Helpers & Robust Normalization (DEF-04)
  function normalizeCountryText(str) {
    if (typeof str !== 'string') return '';
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[\u2018\u2019\u201A\u201B\u2032\u0060]/g, "'")
      .replace(/[\u2010\u2011\u2012\u2013\u2014\u2015]/g, '-')
      .trim()
      .replace(/\s+/g, ' ')
      .toLowerCase();
  }

  function getCountryByQuery(query) {
    if (!query || typeof query !== 'string') return null;
    const q = normalizeCountryText(query);
    if (!q) return null;

    // 1. Exact normalized match against canonical name, ISO alpha-2, ISO alpha-3, official full name, or search terms
    const match = COUNTRY_DATA.find(c => {
      if (normalizeCountryText(c.name) === q) return true;
      if (normalizeCountryText(c.alpha2) === q) return true;
      if (normalizeCountryText(c.alpha3) === q) return true;
      if (c.official_name && normalizeCountryText(c.official_name) === q) return true;
      if (c.search_terms && c.search_terms.some(t => normalizeCountryText(t) === q)) return true;
      return false;
    });
    if (match) return match;

    // 2. Dot-stripped acronym fallback (e.g., 'U.S.A.' -> 'USA', 'U.S.' -> 'US', 'U.K.' -> 'UK')
    if (q.includes('.')) {
      const qNoDots = q.replace(/\./g, '');
      if (qNoDots) {
        return COUNTRY_DATA.find(c => {
          if (normalizeCountryText(c.name).replace(/\./g, '') === qNoDots) return true;
          if (normalizeCountryText(c.alpha2) === qNoDots) return true;
          if (normalizeCountryText(c.alpha3) === qNoDots) return true;
          if (c.official_name && normalizeCountryText(c.official_name).replace(/\./g, '') === qNoDots) return true;
          if (c.search_terms && c.search_terms.some(t => normalizeCountryText(t).replace(/\./g, '') === qNoDots)) return true;
          return false;
        }) || null;
      }
    }

    return null;
  }

  function renderCountryOptions() {
    const list = document.getElementById('country-options');
    if (!list) return;
    list.innerHTML = COUNTRY_DATA.map(c => `<option value="${escapeHTML(c.name)}"></option>`).join('');
  }

  function updateCountryHint() {
    const hint = document.getElementById('countryHint');
    const input = document.getElementById('countryInput');
    const officialBtn = document.getElementById('officialLink');
    if (!hint || !input) return null;

    const rawVal = input.value;
    const trimmed = rawVal ? rawVal.trim() : '';

    if (!trimmed) {
      // Clearing input clears both countryCode and countryName immediately
      state.answers.countryCode = null;
      state.answers.countryName = null;
      input.removeAttribute('aria-invalid');
      if (officialBtn) {
        officialBtn.style.display = 'none';
        officialBtn.href = '#';
      }
      hint.className = 'country-source-status hint-empty';
      const promptTitle = (typeof getI18nText === 'function') ? getI18nText('country_prompt_title') : 'Select Country';
      const promptDesc = (typeof getI18nText === 'function') ? getI18nText('country_prompt_desc') : 'Please type or select your passport-issuing authority from the list.';
      hint.innerHTML = `
        <div style="display:flex;align-items:center;gap:6px">
          <span class="status-pill status-needs-research">${escapeHTML(promptTitle)}</span>
          <strong style="color:#64748b">${escapeHTML(promptDesc)}</strong>
        </div>
      `;
      return null;
    }

    const c = getCountryByQuery(rawVal);
    if (!c) {
      // Incomplete, ambiguous, or unrecognized input immediately invalidates previous selection
      state.answers.countryCode = null;
      state.answers.countryName = null;
      input.setAttribute('aria-invalid', 'true');
      if (officialBtn) {
        officialBtn.style.display = 'none';
        officialBtn.href = '#';
      }
      hint.className = 'country-source-status hint-unresolved';
      const unresPill = (typeof getI18nText === 'function') ? getI18nText('country_unresolved_pill') : 'UNRESOLVED JURISDICTION';
      const unresTitle = (typeof getI18nText === 'function') ? getI18nText('country_unresolved_title') : 'Select an indexed country';
      const unresDesc = (typeof getI18nText === 'function') ? getI18nText('country_unresolved_desc') : 'Please select a recognized country from the suggested list.';
      hint.innerHTML = `
        <div style="display:flex;align-items:center;gap:6px">
          <span class="status-pill status-needs-research" style="background:#fef2f2;color:#991b1b;border-color:#fecaca">${escapeHTML(unresPill)}</span>
          <strong style="color:#b91c1c">${escapeHTML(unresTitle)}</strong>
        </div>
        <span style="color:#7f1d1d">${escapeHTML(unresDesc)}</span>
      `;
      return null;
    }

    // Successfully resolved canonical country
    state.answers.countryCode = c.alpha2;
    state.answers.countryName = c.name;
    input.setAttribute('aria-invalid', 'false');

    const isVerified = c.portal_status === 'verified';
    const isLinked = !!c.authority_url;

    hint.className = 'country-source-status hint-resolved';
    if (isVerified) {
      const verifiedPill = (typeof getI18nText === 'function') ? getI18nText('status_verified_country_pack') : 'VERIFIED SOURCE PACK';
      const verifiedDesc = (typeof getI18nText === 'function') ? getI18nText('country_verified_desc') : 'Official requirements and document standards fully researched and updated for 2026.';
      const openBtnText = (typeof getI18nText === 'function') ? getI18nText('btn_open_portal') : 'Open Official Portal ↗';
      hint.innerHTML = `
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="status-pill status-verified">${escapeHTML(verifiedPill)}</span>
          <strong>${escapeHTML(c.name)} (${escapeHTML(c.alpha2)}) · ${escapeHTML(c.authority_label || c.name + ' Passport Authority')}</strong>
        </div>
        <span>${escapeHTML(verifiedDesc)}</span>
        <a href="${escapeHTML(c.authority_url)}" target="_blank" rel="noopener" class="link-external">${escapeHTML(openBtnText)}</a>
      `;
    } else if (isLinked) {
      const linkedPill = (typeof getI18nText === 'function') ? getI18nText('badge_official') : 'OFFICIAL PORTAL LINKED';
      const linkedDesc = (typeof getI18nText === 'function') ? getI18nText('country_linked_desc') : 'Official portal link recorded; scenario-specific rules undergoing detailed research.';
      const openBtnText = (typeof getI18nText === 'function') ? getI18nText('btn_open_portal') : 'Open Official Portal ↗';
      hint.innerHTML = `
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="status-pill status-linked">${escapeHTML(linkedPill)}</span>
          <strong>${escapeHTML(c.name)} (${escapeHTML(c.alpha2)}) · ${escapeHTML(c.authority_label || 'Official Government Agency')}</strong>
        </div>
        <span>${escapeHTML(linkedDesc)}</span>
        <a href="${escapeHTML(c.authority_url)}" target="_blank" rel="noopener" class="link-external">${escapeHTML(openBtnText)}</a>
      `;
    } else {
      const awaitingPill = (typeof getI18nText === 'function') ? getI18nText('status_awaiting_research') : 'AWAITING SOURCE RESEARCH';
      const generalTitle = (typeof getI18nText === 'function') ? getI18nText('country_general_guidance_title') : 'General Preparation Guidance';
      const awaitingDesc = (typeof getI18nText === 'function') ? getI18nText('country_awaiting_desc') : 'Official passport authority link currently undergoing research. Generic preparation guidance provided.';
      hint.innerHTML = `
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="status-pill status-needs-research">${escapeHTML(awaitingPill)}</span>
          <strong>${escapeHTML(c.name)} (${escapeHTML(c.alpha2)}) · ${escapeHTML(generalTitle)}</strong>
        </div>
        <span>${escapeHTML(awaitingDesc)}</span>
      `;
    }

    if (officialBtn && c.authority_url) {
      officialBtn.style.display = 'inline-flex';
      officialBtn.href = c.authority_url;
      officialBtn.textContent = `Open ${c.name} Official Portal ↗`;
    } else if (officialBtn) {
      officialBtn.style.display = 'none';
      officialBtn.href = '#';
    }

    return c;
  }
  // Step Navigation
  function renderStep(stepIndex) {
    state.currentStep = stepIndex;
    const panes = document.querySelectorAll('.step-pane');
    panes.forEach((pane, idx) => {
      pane.classList.toggle('active', idx === stepIndex);
    });

    const stepCount = document.getElementById('stepcount');
    if (stepCount) {
      stepCount.textContent = `STEP ${stepIndex + 1} OF ${state.totalSteps}`;
    }

    const stepBars = document.querySelectorAll('.steps span');
    stepBars.forEach((bar, idx) => {
      bar.classList.toggle('active', idx <= stepIndex);
    });

    const backBtn = document.getElementById('backBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (backBtn) backBtn.disabled = stepIndex === 0;
    if (nextBtn) {
      nextBtn.textContent = stepIndex === (state.totalSteps - 1) ? 'Generate My Checklist →' : 'Continue →';
    }

    // Read current form values into state
    syncInputsToState();
  }

  function syncInputsToState() {
    const getVal = (id) => { const el = document.getElementById(id); return el ? el.value : null; };
    const getRadio = (name) => { const el = document.querySelector(`input[name="${name}"]:checked`); return el ? el.value : null; };

    const countryVal = getVal('countryInput');
    if (countryVal !== null) {
      const matched = getCountryByQuery(countryVal);
      if (matched) {
        state.answers.countryCode = matched.alpha2;
        state.answers.countryName = matched.name;
      } else {
        state.answers.countryCode = null;
        state.answers.countryName = null;
      }
    }

    if (getRadio('service')) state.answers.service = getRadio('service');
    if (getRadio('age')) state.answers.age = getRadio('age');
    if (getVal('urgency')) state.answers.urgency = getVal('urgency');
    if (getRadio('status')) state.answers.status = getRadio('status');
    if (getRadio('birthProof')) state.answers.birthProof = getRadio('birthProof');
    if (getRadio('addressProof')) state.answers.addressProof = getRadio('addressProof');
    if (getRadio('citizenshipProof')) state.answers.citizenshipProof = getRadio('citizenshipProof');
    if (getVal('nameMatch')) state.answers.nameMatch = getVal('nameMatch');
    if (getVal('dobMatch')) state.answers.dobMatch = getVal('dobMatch');
    if (getVal('special')) state.answers.special = getVal('special');
    if (getVal('locationSelect')) state.answers.location = getVal('locationSelect');
    if (getVal('checkedGov')) state.answers.checkedGov = getVal('checkedGov');

    if (getVal('exactAge')) {
      const parsedAge = parseInt(getVal('exactAge'), 10);
      if (!isNaN(parsedAge)) {
        state.answers.ageExact = parsedAge;
      } else {
        delete state.answers.ageExact;
      }
    } else {
      delete state.answers.ageExact;
    }

    if (getVal('applicantCategory')) state.answers.applicantCategory = getVal('applicantCategory');
    if (getVal('validityOption') && getVal('validityOption') !== 'auto') {
      state.answers.validity = getVal('validityOption');
    } else {
      delete state.answers.validity;
    }

    if (getVal('lossTier')) {
      state.answers.lossTier = getVal('lossTier');
    } else {
      delete state.answers.lossTier;
    }
  }

  function syncStateToInputs() {
    const setRadio = (name, val) => {
      if (!val) return;
      const el = document.querySelector(`input[name="${name}"][value="${val}"]`);
      if (el) el.checked = true;
    };
    const setVal = (id, val) => {
      if (val === undefined || val === null) return;
      const el = document.getElementById(id);
      if (el) el.value = val;
    };

    if (state.answers.countryName) setVal('countryInput', state.answers.countryName);
    setRadio('service', state.answers.service);
    setRadio('age', state.answers.age);
    setVal('urgency', state.answers.urgency);
    setRadio('status', state.answers.status);
    setRadio('birthProof', state.answers.birthProof);
    setRadio('addressProof', state.answers.addressProof);
    setRadio('citizenshipProof', state.answers.citizenshipProof);
    setVal('nameMatch', state.answers.nameMatch);
    setVal('dobMatch', state.answers.dobMatch);
    setVal('special', state.answers.special);
    setVal('locationSelect', state.answers.location);
    setVal('checkedGov', state.answers.checkedGov);
    if (state.answers.ageExact) setVal('exactAge', state.answers.ageExact);
    if (state.answers.validity) setVal('validityOption', state.answers.validity);
    if (state.answers.lossTier) setVal('lossTier', state.answers.lossTier);
    if (state.answers.applicantCategory) setVal('applicantCategory', state.answers.applicantCategory);
  }

  function setupWizardListeners() {
    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');
    const countryInput = document.getElementById('countryInput');
    const printBtn = document.getElementById('printBtn');
    const copyChecklistBtn = document.getElementById('copyChecklistBtn');
    const downloadChecklistBtn = document.getElementById('downloadChecklistBtn');
    const downloadJsonBtn = document.getElementById('downloadJsonBtn');
    const shareBtn = document.getElementById('shareBtn');
    const restartBtn = document.getElementById('restartBtn');
    const saveBtn = document.getElementById('saveProgressBtn');

    if (countryInput) {
      countryInput.addEventListener('input', () => {
        updateCountryHint();
      });
      countryInput.addEventListener('change', () => {
        const c = updateCountryHint();
        if (c && countryInput.value !== c.name) {
          countryInput.value = c.name;
        }
      });
      countryInput.addEventListener('blur', () => {
        const c = updateCountryHint();
        if (c && countryInput.value !== c.name) {
          countryInput.value = c.name;
        }
      });
      countryInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const c = updateCountryHint();
          if (c) {
            countryInput.value = c.name;
            const locationSelect = document.getElementById('locationSelect');
            if (locationSelect) locationSelect.focus();
          } else {
            showToast((typeof getI18nText === 'function' ? getI18nText('country_continue_error') : null) || 'Please select a valid country from the list');
          }
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (state.currentStep === 0) {
          const c = updateCountryHint();
          if (!c || !state.answers.countryCode) {
            if (countryInput) countryInput.focus();
            showToast((typeof getI18nText === 'function' ? getI18nText('country_continue_error') : null) || 'Please type and select a recognized passport-issuing authority before continuing.');
            return;
          }
        }
        syncInputsToState();
        if (state.currentStep < state.totalSteps - 1) {
          renderStep(state.currentStep + 1);
        } else {
          generateFinalResults();
        }
      });
    }

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (state.currentStep > 0) {
          renderStep(state.currentStep - 1);
        }
      });
    }

    if (printBtn) {
      printBtn.addEventListener('click', () => window.print());
    }

    if (copyChecklistBtn) {
      copyChecklistBtn.addEventListener('click', copyChecklist);
    }

    if (downloadChecklistBtn) {
      downloadChecklistBtn.addEventListener('click', () => downloadChecklist('txt'));
    }

    if (downloadJsonBtn) {
      downloadJsonBtn.addEventListener('click', () => downloadChecklist('json'));
    }

    if (shareBtn) {
      shareBtn.addEventListener('click', shareChecklist);
    }

    if (restartBtn) {
      restartBtn.addEventListener('click', resetState);
    }

    if (saveBtn) {
      saveBtn.addEventListener('click', saveState);
    }
  }

  // Generate Final Results Dashboard
  function generateFinalResults() {
    syncInputsToState();
    const currentLang = (typeof CURRENT_LANG !== 'undefined') ? CURRENT_LANG : 'en';
    const result = rulesEngine.evaluate(state.answers, currentLang);
    state.evaluationResult = result;
    renderResultsDashboard(result, true);
  }

  function renderResultsDashboard(result, scrollIntoView = false) {
    if (!result) return;
    const resultBox = document.getElementById('resultbox');
    const wizardNav = document.getElementById('wizardnav');
    const panes = document.querySelectorAll('.step-pane');

    panes.forEach(p => p.classList.remove('active'));
    if (wizardNav) wizardNav.style.display = 'none';
    if (resultBox) resultBox.classList.add('show');

    // Header info
    const resCountryName = document.getElementById('resCountryName');
    if (resCountryName) resCountryName.textContent = result.country.name;

    const resServiceName = document.getElementById('resServiceName');
    if (resServiceName) resServiceName.textContent = formatServiceName(state.answers.service);

    const resApplicantMeta = document.getElementById('resApplicantMeta');
    if (resApplicantMeta) {
      const metaAge = (result.applicant && result.applicant.exactAge !== null)
        ? (typeof getI18nText === 'function'
            ? getI18nText('meta_age_prefix', { age: result.applicant.exactAge, band: formatAgeBandName(result.applicant.canonicalAgeBand) })
            : `Age ${result.applicant.exactAge} (${formatAgeBandName(result.applicant.canonicalAgeBand)})`)
        : formatAgeName(state.answers.age);
      const locText = state.answers.location === 'abroad'
        ? (typeof getI18nText === 'function' ? getI18nText('meta_abroad') : 'Applying Abroad (Embassy/Consulate)')
        : (typeof getI18nText === 'function' ? getI18nText('meta_domestic') : 'Domestic Application');
      resApplicantMeta.textContent = `${metaAge} · ${locText}`;
    }

    // Score badge
    const badgeEl = document.getElementById('resStatusBadge');
    if (badgeEl) {
      const statusMap = {
        PREPARED: 'status_prepared',
        VERIFICATION_RECOMMENDED: 'status_verification_recommended',
        NEEDS_ATTENTION: 'status_needs_attention',
        AWAITING_RESEARCH: 'status_awaiting_research'
      };
      const statusKey = statusMap[result.statusLabel];
      badgeEl.textContent = (statusKey && typeof getI18nText === 'function')
        ? getI18nText(statusKey)
        : result.statusLabel.replace(/_/g, ' ');

      if (result.statusLabel === 'PREPARED') {
        badgeEl.className = 'status-pill status-verified';
      } else if (result.statusLabel === 'VERIFICATION_RECOMMENDED' || result.statusLabel === 'NEEDS_ATTENTION') {
        badgeEl.className = 'status-pill status-linked';
      } else {
        badgeEl.className = 'status-pill status-needs-research';
      }
    }

    const resScoreNum = document.getElementById('resScoreNum');
    if (resScoreNum) resScoreNum.textContent = `${result.readinessScore}%`;
    const resScoreBar = document.getElementById('resScoreBar');
    if (resScoreBar) resScoreBar.style.width = `${result.readinessScore}%`;

    // Unsupported / Limited Coverage In-Wizard Notice
    const unsupportedNotice = document.getElementById('resUnsupportedNotice');
    if (unsupportedNotice) {
      if (result.serviceCoverage && result.serviceCoverage.status !== 'verified') {
        const unsuppTitle = (typeof getI18nText === 'function')
          ? getI18nText('unsupported_coverage_title')
          : 'Limited Coverage Notice';
        const unsuppAction = (typeof getI18nText === 'function')
          ? getI18nText('unsupported_coverage_action')
          : 'This service scenario is in public beta and not yet fully audited with claim-level evidence. Confirm all forms, fees, and requirements directly with official authorities.';
        const summaryText = result.serviceCoverage.summary || '';
        const serviceName = formatServiceName(state.answers.service);

        unsupportedNotice.innerHTML = `
          <div class="unsupported-service-notice">
            <h5>⚠ ${escapeHTML(unsuppTitle)}: ${escapeHTML(serviceName)}</h5>
            <p>${escapeHTML(summaryText)}</p>
            <p class="unsupported-action">${escapeHTML(unsuppAction)}</p>
          </div>
        `;
        unsupportedNotice.style.display = 'block';
      } else {
        unsupportedNotice.innerHTML = '';
        unsupportedNotice.style.display = 'none';
      }
    }

    // Service Coverage Transparency Card
    const coverageCard = document.getElementById('resServiceCoverageCard');
    if (coverageCard && result.serviceCoverage) {
      const sc = result.serviceCoverage;
      const isCountryVerified = result.country && result.country.isVerified;
      const countryBadgeClass = isCountryVerified ? 'status-verified' : 'status-needs-research';
      const countryBadgeText = isCountryVerified
        ? (typeof getI18nText === 'function' ? getI18nText('status_verified_country_pack') : 'VERIFIED COUNTRY PACK')
        : (typeof getI18nText === 'function' ? getI18nText('status_awaiting_research') : 'AWAITING RESEARCH');

      const covTitle = typeof getI18nText === 'function' ? getI18nText('cov_title') : 'Service Verification Audit · Multi-Dimensional Coverage';
      const dimServiceLabel = typeof getI18nText === 'function' ? getI18nText('cov_dim_service') : 'Base Service';
      const dimUrgencyLabel = typeof getI18nText === 'function' ? getI18nText('cov_dim_urgency') : 'Processing Route';
      const dimChannelLabel = typeof getI18nText === 'function' ? getI18nText('cov_dim_channel') : 'Lodgement Channel';

      const dims = sc.dimensions || {};
      const serviceDim = dims.service || { name: 'Base Service', label: sc.label, badgeClass: sc.badgeClass };
      const urgencyDim = dims.urgency || { name: 'Processing Route', label: 'Standard', badgeClass: 'status-verified' };
      const channelDim = dims.channel || { name: 'Lodgement Channel', label: 'Domestic', badgeClass: 'status-verified' };

      const renderEvidenceBadge = (dim) => {
        const lvl = dim.evidence?.evidenceLevel;
        if (lvl === 'trusted_official' || (dim.evidence?.hasSupportingEvidence && !dim.evidence?.isPartial)) {
          const txt = typeof getI18nText === 'function' ? getI18nText('cov_evidence_official') : '✓ Official Evidence Linked';
          return `<div style="font-size:10px;color:#166534;margin-top:4px">${escapeHTML(txt)}</div>`;
        }
        if (lvl === 'partial_confirmation' || dim.evidence?.isPartial) {
          const txt = typeof getI18nText === 'function' ? getI18nText('cov_evidence_partial') : '⚠ Partial Evidence Requiring Confirmation';
          return `<div style="font-size:10px;color:#b45309;margin-top:4px">${escapeHTML(txt)}</div>`;
        }
        if (lvl === 'valid_syntax_incomplete_claim') {
          const txt = typeof getI18nText === 'function' ? getI18nText('cov_evidence_incomplete') : 'ℹ Valid Source Reference · Incomplete Claim Evidence';
          return `<div style="font-size:10px;color:#475569;margin-top:4px">${escapeHTML(txt)}</div>`;
        }
        if (lvl === 'no_trusted_source' || dim.status === 'general_guidance') {
          const txt = typeof getI18nText === 'function' ? getI18nText('cov_evidence_no_trusted') : '⚠ No Trusted Official Source';
          return `<div style="font-size:10px;color:#b91c1c;margin-top:4px">${escapeHTML(txt)}</div>`;
        }
        if (lvl === 'awaiting_primary_research' || dim.status === 'awaiting_research') {
          const txt = typeof getI18nText === 'function' ? getI18nText('cov_evidence_awaiting') : '⌛ Awaiting Primary Research';
          return `<div style="font-size:10px;color:#64748b;margin-top:4px">${escapeHTML(txt)}</div>`;
        }
        const txt = typeof getI18nText === 'function' ? getI18nText('cov_evidence_confirmation') : '⚠ Direct Confirmation Required';
        return `<div style="font-size:10px;color:#b45309;margin-top:4px">${escapeHTML(txt)}</div>`;
      };

      const supportedHtml = (sc.supportedChecks && sc.supportedChecks.length > 0)
        ? `<div style="margin-top:10px"><strong style="font-size:12px;color:#166534">${escapeHTML(typeof getI18nText === 'function' ? getI18nText('cov_supported_heading') : '✓ Researched Checks Supported:')}</strong><ul style="margin:4px 0 0 16px;padding:0;font-size:12px;color:#334155;line-height:1.4">${sc.supportedChecks.map(c => `<li>${escapeHTML(c)}</li>`).join('')}</ul></div>`
        : '';

      const missingHtml = (sc.missingChecks && sc.missingChecks.length > 0)
        ? `<div style="margin-top:8px"><strong style="font-size:12px;color:#b45309">${escapeHTML(typeof getI18nText === 'function' ? getI18nText('cov_missing_heading') : '⚠ Direct Official Confirmation Required:')}</strong><ul style="margin:4px 0 0 16px;padding:0;font-size:12px;color:#78350f;line-height:1.4">${sc.missingChecks.map(c => `<li>${escapeHTML(c)}</li>`).join('')}</ul></div>`
        : '';

      const disclaimerText = typeof getI18nText === 'function' ? getI18nText('score_disclaimer') : 'Readiness score reflects document preparation completeness only; it does not calculate, indicate, or guarantee passport issuance or approval.';

      coverageCard.innerHTML = `
        <div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:12px;padding:16px;margin-bottom:16px">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:12px">
            <span style="font-size:12px;font-weight:700;color:var(--slate-dark);text-transform:uppercase;letter-spacing:0.04em">${escapeHTML(covTitle)}</span>
            <div style="display:flex;gap:6px;flex-wrap:wrap">
              <span class="status-pill ${countryBadgeClass}">${escapeHTML(countryBadgeText)}</span>
              <span class="status-pill ${sc.badgeClass}">${escapeHTML(sc.label.toUpperCase())}</span>
            </div>
          </div>

          <!-- Three Dimensions Status Breakdown -->
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:8px;margin-bottom:12px;background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:10px">
            <div>
              <div style="font-size:11px;color:#64748b;font-weight:600">${escapeHTML(dimServiceLabel)}</div>
              <div style="font-size:12px;font-weight:700;color:#1e293b;margin:2px 0">${escapeHTML(serviceDim.name || 'Base Service')}</div>
              <span class="status-pill ${serviceDim.badgeClass}" style="font-size:10px;padding:2px 6px">${escapeHTML(serviceDim.label || 'Verified')}</span>
              ${renderEvidenceBadge(serviceDim)}
            </div>
            <div>
              <div style="font-size:11px;color:#64748b;font-weight:600">${escapeHTML(dimUrgencyLabel)}</div>
              <div style="font-size:12px;font-weight:700;color:#1e293b;margin:2px 0">${escapeHTML(urgencyDim.name || 'Processing Route')}</div>
              <span class="status-pill ${urgencyDim.badgeClass}" style="font-size:10px;padding:2px 6px">${escapeHTML(urgencyDim.label || 'Verified')}</span>
              ${renderEvidenceBadge(urgencyDim)}
            </div>
            <div>
              <div style="font-size:11px;color:#64748b;font-weight:600">${escapeHTML(dimChannelLabel)}</div>
              <div style="font-size:12px;font-weight:700;color:#1e293b;margin:2px 0">${escapeHTML(channelDim.name || 'Lodgement Channel')}</div>
              <span class="status-pill ${channelDim.badgeClass}" style="font-size:10px;padding:2px 6px">${escapeHTML(channelDim.label || 'Verified')}</span>
              ${renderEvidenceBadge(channelDim)}
            </div>
          </div>

          <p style="margin:0;font-size:13px;color:#475569;line-height:1.5">${escapeHTML(sc.summary)}</p>
          ${supportedHtml}
          ${missingHtml}
          <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #cbd5e1;font-size:11px;color:#64748b">
            <em>${escapeHTML(disclaimerText)}</em>
          </div>
        </div>
      `;
    }

    // Flags section
    const flagsContainer = document.getElementById('resFlagsContainer');
    if (flagsContainer) {
      if (result.flags.length === 0) {
        const cleanTitle = (typeof getI18nText === 'function') ? getI18nText('flags_none_title') : 'No Critical Inconsistencies Reported';
        const cleanMsg = (typeof getI18nText === 'function') ? getI18nText('flags_none_desc') : 'Your personal particulars appear consistent across records. Review the required document checklist below.';
        flagsContainer.innerHTML = `
          <div class="resultscore" style="background:#eaf6ef;border:1px solid #b7dfc8">
            <div class="scoreicon" style="background:#c6e9d6;color:#18683f">✓</div>
            <div>
              <strong style="color:#14532d">${escapeHTML(cleanTitle)}</strong>
              <small style="color:#4a6b57">${escapeHTML(cleanMsg)}</small>
            </div>
          </div>
        `;
      } else {
        flagsContainer.innerHTML = result.flags.map(f => {
          const recActionText = (typeof getI18nText === 'function')
            ? getI18nText('flag_recommended_action', { action: escapeHTML(f.action) })
            : `Recommended Action: ${escapeHTML(f.action)}`;
          return `
            <div class="notice" style="border-left:4px solid ${f.severity === 'critical' ? '#dc2626' : '#d97706'};background:${f.severity === 'critical' ? '#fef2f2' : '#fffbeb'};color:#451a03;margin-bottom:12px">
              <strong style="color:${f.severity === 'critical' ? '#991b1b' : '#b45309'};font-size:13px">${escapeHTML(f.title)}</strong>
              <p style="margin:5px 0;font-size:12px">${escapeHTML(f.message)}</p>
              <div style="font-weight:700;font-size:11px;color:${f.severity === 'critical' ? '#b91c1c' : '#92400e'}">${recActionText}</div>
            </div>
          `;
        }).join('');
      }
    }

    // Official Source Card
    const sourceCard = document.getElementById('resOfficialSourceCard');
    if (sourceCard) {
      if (result.country.officialPortalUrl) {
        sourceCard.innerHTML = `
          <div class="resultscore" style="background:#f4f9f6;border:1px solid #c8e0d4">
            <div class="scoreicon" style="background:#d4ecdf;color:#135939">🏛</div>
            <div style="flex:1">
              <strong style="color:#0e4028">${escapeHTML(result.country.authorityName || 'Official Passport Authority')}</strong>
              <small style="display:block;color:#4c6e5b;margin:3px 0">Direct government portal verified for ${escapeHTML(result.country.name)}. Always complete final filing and fee payments directly on official government servers.</small>
              <a href="${escapeHTML(result.country.officialPortalUrl)}" target="_blank" rel="noopener" class="btn btn-dark" style="padding:7px 14px;font-size:12px;margin-top:6px;display:inline-flex">Open Official Portal ↗</a>
            </div>
          </div>
        `;
      } else {
        sourceCard.innerHTML = `
          <div class="notice" style="background:#fffbeb;border:1px solid #fde68a;color:#78350f">
            <strong>Official Portal Under Verification for ${escapeHTML(result.country.name)}</strong>
            <p style="margin:5px 0;font-size:12px">PassportReady has not yet completed a primary source audit for this jurisdiction. Use this checklist as preparatory guidance, and contact your national foreign ministry or embassy for definitive local rules.</p>
          </div>
        `;
      }
    }

    // Checklist Items
    renderChecklistItems(result.checklist);

    if (scrollIntoView && resultBox) {
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function renderChecklistItems(items) {
    const list = document.getElementById('resChecklistItems');
    if (!list) return;

    if (!list.dataset.hasListener) {
      list.addEventListener('click', (e) => {
        const photoBtn = e.target.closest('.btn-photo-tool');
        if (photoBtn) {
          e.preventDefault();
          e.stopPropagation();
          const cCode = photoBtn.dataset.photoCountry || state.answers?.countryCode;
          activatePhotoToolForCountry(cCode);
          return;
        }
        const helperBtn = e.target.closest('[data-doc-helper-id]');
        if (helperBtn) {
          e.preventDefault();
          e.stopPropagation();
          const docId = helperBtn.dataset.docHelperId;
          openDocumentHelperModal(docId);
        }
      });
      list.dataset.hasListener = 'true';
      list.addEventListener('change', (e) => {
        if (e.target && e.target.dataset && e.target.dataset.checkId) {
          toggleCheck(e.target.dataset.checkId);
        }
      });
    }

    const mandatoryLabel = (typeof getI18nText === 'function') ? getI18nText('status_mandatory') : 'MANDATORY';
    const optionalLabel = (typeof getI18nText === 'function') ? getI18nText('status_optional') : 'CONDITIONAL';
    const docDetailsLabel = (typeof getI18nText === 'function') ? getI18nText('btn_doc_details') : 'Details & Alternatives';
    const photoGuideLabel = (typeof getI18nText === 'function') ? getI18nText('btn_photo_tool') : 'Photo Guide & Grid';
    const currentCountryCode = state.evaluationResult?.country?.code || state.answers?.countryCode || '';

    list.innerHTML = items.map((item) => {
      const isChecked = !!state.checklistChecked[item.id];
      return `
        <li class="checklist-item ${isChecked ? 'is-checked' : ''}" data-item-id="${item.id}">
          <label class="check-box-label">
            <input type="checkbox" ${isChecked ? 'checked' : ''} data-check-id="${item.id}">
            <span class="custom-check"></span>
          </label>
          <div class="check-text">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <strong style="font-size:14px;color:#1e293b">${escapeHTML(item.title)}</strong>
              ${item.mandatory ? `<span class="status-pill status-mandatory">${escapeHTML(mandatoryLabel)}</span>` : `<span class="status-pill status-optional">${escapeHTML(optionalLabel)}</span>`}
              <div style="margin-left:auto;display:inline-flex;gap:6px;align-items:center">
                ${item.id === 'photo_spec_check' ? `
                <button type="button" class="btn-photo-tool" data-photo-country="${escapeHTML(currentCountryCode)}" style="font-size:11px;padding:3px 8px;border-radius:6px;border:1px solid #0f5132;background:#e8f5e9;color:#0f5132;cursor:pointer;display:inline-flex;align-items:center;gap:4px">
                  📷 <span>${escapeHTML(photoGuideLabel)}</span>
                </button>` : ''}
                <button type="button" class="btn-doc-helper" data-doc-helper-id="${item.id}" style="font-size:11px;padding:3px 8px;border-radius:6px;border:1px solid #cbd5e1;background:#f8fafc;color:#1e293b;cursor:pointer;display:inline-flex;align-items:center;gap:4px">
                  ℹ <span>${escapeHTML(docDetailsLabel)}</span>
                </button>
              </div>
            </div>
            <p style="margin:4px 0 0;font-size:12px;color:#64748b;line-height:1.5">${escapeHTML(item.details)}</p>
          </div>
        </li>
      `;
    }).join('');
  }
  // Document Helper Modal & Alternatives Inspector
  function getDocumentModalData(itemId, evaluationResult) {
    const res = evaluationResult || state.evaluationResult;
    if (!res || !res.checklist) return null;
    const item = res.checklist.find(c => c.id === itemId);
    if (!item) return null;

    const countryCode = res.country?.code || state.answers?.countryCode || '';
    const countryName = res.country?.name || countryCode || 'Selected Country';
    const authorityName = res.country?.authorityName || 'Official Passport Authority';
    const officialPortalUrl = res.country?.officialPortalUrl || '';
    const serviceKey = res.serviceCoverage?.service || state.answers?.service || 'first_passport';

    // Attempt lookup in country rule pack
    let matchedDoc = null;
    let pack = null;
    try {
      if (typeof rulesEngine !== 'undefined' && rulesEngine && rulesEngine.rulePacks) {
        pack = rulesEngine.rulePacks[countryCode];
      } else if (typeof COUNTRY_RULES !== 'undefined') {
        pack = COUNTRY_RULES[countryCode];
      }
    } catch (e) {}

    const srv = pack?.services?.[serviceKey] || pack?.services?.first_passport;
    if (srv && Array.isArray(srv.documents)) {
      const idLower = itemId.toLowerCase();
      for (const doc of srv.documents) {
        const dName = (doc.document_name || '').toLowerCase();
        if ((idLower.includes('citizenship') || idLower.includes('birth')) &&
            (dName.includes('birth') || dName.includes('citizenship') || dName.includes('nationality') || dName.includes('state of origin') || dName.includes('family register'))) {
          matchedDoc = doc;
          break;
        }
        if ((idLower.includes('identity') || idLower.includes('id_proof')) &&
            (dName.includes('identity') || dName.includes('photo id') || dName.includes('identification') || dName.includes('national id'))) {
          matchedDoc = doc;
          break;
        }
        if (idLower.includes('address') &&
            (dName.includes('address') || dName.includes('residence') || dName.includes('electoral') || dName.includes('justificatif'))) {
          matchedDoc = doc;
          break;
        }
        if (idLower.includes('non_ecr') && dName.includes('ecr')) {
          matchedDoc = doc;
          break;
        }
        if (idLower.includes('marriage') && dName.includes('marriage')) {
          matchedDoc = doc;
          break;
        }
      }
    }

    // Default standards and text
    let standards = matchedDoc?.conditions || item.details || 'Verify official statutory rules on the official authority portal.';
    let alternatives = Array.isArray(matchedDoc?.accepted_alternatives) && matchedDoc.accepted_alternatives.length > 0
      ? [...matchedDoc.accepted_alternatives]
      : [];
    let originalOrCopy = matchedDoc?.original_or_copy || 'Original physical document required for in-person appointment inspection + one self-attested photocopy.';
    let translation = matchedDoc?.translation_or_legalisation || 'Official certified translation required if document is in a regional or foreign language. Apostille / consular legalization applies to foreign records.';
    let caution = 'Ensure applicant full name, parent names, and date of birth match verbatim across all identity records without abbreviations or phonetic discrepancies.';
    let sourceUrl = matchedDoc?.source_url || officialPortalUrl;

    // Item-specific procedural fallbacks
    if (itemId === 'photo_spec_check') {
      const photoRules = srv?.photo_rules;
      if (photoRules) {
        standards = `Dimensions: ${photoRules.dimensions || '35x45mm'}. Background: ${photoRules.background_color || 'Plain white'}. Quantity: ${photoRules.quantity || 2}. Expression: Neutral, mouth closed, direct eye contact. Eyeglasses: ${photoRules.glasses_allowed ? 'Allowed if non-reflective' : 'No eyeglasses'}. Headwear: ${photoRules.headwear_rules || 'Religious only, face must be fully visible'}.`;
      } else {
        standards = 'ICAO 9303 standard biometric passport photos: 35×45mm or 2×2 inches, plain white / off-white background, neutral expression, taken within the last 6 months.';
      }
      alternatives = [
        '2 identical physical color photographs on high-grade photographic paper',
        'Official studio digital photo code / online digital upload (where supported by authority)',
        'Direct live biometric digital capture at authorized application center (where available)'
      ];
      originalOrCopy = 'Physical photos must be unmounted, borderless, free of watermarks, creases, or staple marks.';
      translation = 'Biometric photo specifications apply uniformly regardless of language.';
      caution = 'Never apply digital beauty filters, AI enhancements, smoothing, or scan re-prints of previous passport photos. Incompliant photos are the leading technical reason for application rejection.';
    } else if (itemId === 'official_fee_payment') {
      standards = (res.feeGuidance && res.feeGuidance.details)
        ? res.feeGuidance.details
        : 'Statutory passport issuance fee payable to the competent government authority prior to or at appointment.';
      alternatives = [
        'Online government portal payment (credit/debit card, net banking, UPI, or state payment gateway)',
        'Authorized partner bank cash deposit / teller challan receipt (where accepted)',
        'Postal Order or Demand Draft payable to the official passport issuing authority',
        'Direct card payment at regional passport center cashier (where supported)'
      ];
      originalOrCopy = 'Electronic payment confirmation receipt or official stamped bank teller deposit slip.';
      translation = 'All official fee transactions are denominated in statutory national currency.';
      caution = 'Statutory government passport fees are non-refundable once an application is registered. Never pay fees to unauthorized intermediaries or agents claiming to bypass official queues.';
    } else if (itemId === 'domestic_appointment' || itemId === 'consular_jurisdiction') {
      standards = res.country?.officialPortalUrl
        ? `Appointment booking must be completed directly via ${res.country.officialPortalUrl}. Walk-in applications are strictly restricted.`
        : 'Scheduled in-person appointment at an authorized regional passport office, embassy, or high commission.';
      alternatives = [
        'Standard advance online appointment slot through the official booking portal',
        'Emergency walk-in slot (strictly for documented urgent travel, medical emergency, or death in family with confirmed ticket evidence)',
        'Postal / Mail-in submission (where specifically authorized for eligible renewal categories)'
      ];
      originalOrCopy = 'Printed appointment confirmation sheet / Application Reference Number (ARN) token.';
      translation = 'Appointment booking receipt must be presented in the national language or English.';
      caution = 'Arrive 15 minutes before your scheduled appointment slot. Late arrivals typically forfeit the appointment token and require full rebooking.';
    } else if (itemId === 'old_passport_surrender') {
      standards = 'Physical surrender of existing passport booklet for cancellation and invalidation stamping.';
      alternatives = [
        'Physical passport booklet (all expired or valid pages must be surrendered intact)',
        'If lost or stolen: Official Police Lost Property Report (FIR) + Form Annexure / Statutory Lost Declaration',
        'If physically damaged: Damaged passport booklet + Written formal statement detailing circumstances of damage'
      ];
      originalOrCopy = 'Original physical booklet. Cancelled booklet will be returned to you after cancellation stamping.';
      translation = 'Foreign visas inside an expired cancelled booklet remain legally valid when carried together with your new valid passport.';
      caution = 'Do not tear, detach, or modify pages containing valid visas from a cancelled booklet yourself. Tampered passports are rendered invalid.';
    } else if (itemId === 'parental_consent_proof') {
      standards = 'Statutory legal parental consent is mandatory for child/minor passport issuance in all jurisdictions.';
      alternatives = [
        'Both parents present in person at the appointment center with official photo ID',
        'Signed and notarized parental consent affidavit (e.g. Form DS-3053 in US, Annexure D/C in India) from absent parent',
        'Certified family court decree proving sole legal custody / guardianship',
        'Official death certificate if one parent is deceased'
      ];
      originalOrCopy = 'Original official court order, death certificate, or notarized consent form + government photo IDs of parents.';
      translation = 'Foreign court custody orders must be accompanied by an official certified translation and apostille.';
      caution = 'Passport authorities strictly scrutinize minor consent to prevent international child abduction. Misrepresenting parental consent carries criminal penalties.';
    } else if (alternatives.length === 0) {
      if (itemId.includes('identity')) {
        alternatives = [
          'Valid National Identity Card issued by central civil authority',
          "Driver's Licence issued by competent motor vehicle authority",
          'Government / Military Photo Identity Card',
          'Voter Registration / Electoral Photo Identity Card'
        ];
      } else if (itemId.includes('address')) {
        alternatives = [
          'Recent utility bill (electricity, water, piped gas, landline) issued within last 3 months',
          'Official Bank statement / passbook reflecting current residential address',
          'Registered rental / lease agreement or property deed',
          'Electoral / Voter registration card displaying current domicile'
        ];
      } else if (itemId.includes('birth') || itemId.includes('citizenship')) {
        alternatives = [
          'Official Birth Certificate issued by municipal civil registrar or vital statistics agency',
          'Certificate of Naturalization or Citizenship Registration',
          'School Leaving Certificate / Matriculation Certificate stating date of birth',
          'Consular Report of Birth Abroad issued by embassy'
        ];
      } else {
        alternatives = [
          'Primary government-issued certificate or original record',
          'Official certified true copy issued by the original granting government authority',
          'Sworn statutory declaration or affidavit before a Notary Public / First Class Magistrate'
        ];
      }
    }

    return {
      itemId,
      itemTitle: item.title,
      mandatory: !!item.mandatory,
      countryCode,
      countryName,
      authorityName,
      officialPortalUrl,
      standards,
      alternatives,
      originalOrCopy,
      translation,
      caution,
      sourceUrl
    };
  }

  function openDocumentHelperModal(itemId) {
    const result = state.evaluationResult;
    if (!result) return;
    const modalData = getDocumentModalData(itemId, result);
    if (!modalData) return;

    const modal = document.getElementById('genericModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    if (!modal || !title || !body) return;

    const modalTitleText = (typeof getI18nText === 'function')
      ? getI18nText('modal_doc_details_title')
      : 'Document Details & Requirements';
    title.textContent = modalTitleText;

    const mandatoryLabel = (typeof getI18nText === 'function') ? getI18nText('status_mandatory') : 'MANDATORY';
    const optionalLabel = (typeof getI18nText === 'function') ? getI18nText('status_optional') : 'CONDITIONAL';
    const pillClass = modalData.mandatory ? 'status-mandatory' : 'status-optional';
    const pillText = modalData.mandatory ? mandatoryLabel : optionalLabel;

    body.innerHTML = `
      <div class="doc-helper-modal">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;flex-wrap:wrap">
          <strong style="font-size:15px;color:#0f172a">${escapeHTML(modalData.itemTitle)}</strong>
          <span class="status-pill ${pillClass}">${escapeHTML(pillText)}</span>
          <span class="status-pill status-verified">${escapeHTML(modalData.countryName)}</span>
        </div>

        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px;margin-bottom:14px">
          <h5 style="margin:0 0 6px;color:#0f5132;font-size:12px;text-transform:uppercase;letter-spacing:0.04em">🏛 Official Requirement & Standards</h5>
          <p style="margin:0;font-size:13px;color:#334155;line-height:1.6">${escapeHTML(modalData.standards)}</p>
        </div>

        ${modalData.alternatives && modalData.alternatives.length > 0 ? `
        <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:14px;margin-bottom:14px">
          <h5 style="margin:0 0 8px;color:#166534;font-size:12px;text-transform:uppercase;letter-spacing:0.04em">✓ Accepted Document Substitutes & Alternatives</h5>
          <ul style="margin:0;padding-left:18px;font-size:13px;color:#14532d;line-height:1.6">
            ${modalData.alternatives.map(alt => `<li>${escapeHTML(alt)}</li>`).join('')}
          </ul>
          <p style="margin:8px 0 0;font-size:11px;color:#166534;font-style:italic">If the primary record is unavailable, one of the above government-recognized substitutes may be accepted.</p>
        </div>
        ` : ''}

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:10px;margin-bottom:14px">
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:10px">
            <div style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase">📄 Physical Format</div>
            <div style="font-size:12px;color:#1e293b;margin-top:3px">${escapeHTML(modalData.originalOrCopy)}</div>
          </div>
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:10px">
            <div style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase">🌐 Language & Attestation</div>
            <div style="font-size:12px;color:#1e293b;margin-top:3px">${escapeHTML(modalData.translation)}</div>
          </div>
        </div>

        <div class="notice" style="border-left:4px solid #d97706;background:#fffbeb;color:#78350f;margin-bottom:14px">
          <strong style="color:#92400e;font-size:12px">⚠ Pre-Submission Verification:</strong>
          <p style="margin:4px 0 0;font-size:12px;line-height:1.5">${escapeHTML(modalData.caution)}</p>
        </div>

        ${modalData.officialPortalUrl ? `
        <div style="display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px solid #e2e8f0;flex-wrap:wrap;gap:8px">
          <span style="font-size:11px;color:#64748b">Verified Authority: ${escapeHTML(modalData.authorityName || 'Official Passport Authority')}</span>
          <a href="${escapeHTML(modalData.officialPortalUrl)}" target="_blank" rel="noopener" class="btn btn-outline" style="font-size:11px;padding:5px 10px">Open Official Portal ↗</a>
        </div>
        ` : ''}
        ${itemId === 'photo_spec_check' ? `
        <div style="margin-top:14px;padding-top:10px;border-top:1px solid #e2e8f0;text-align:center">
          <button type="button" id="btnModalLaunchPhotoTool" class="btn btn-dark" style="font-size:12px;padding:7px 14px">
            📷 Open Interactive Biometric Photo Validator →
          </button>
        </div>
        ` : ''}
      </div>
    `;

    modal.classList.add('open');

    const modalLaunchPhotoBtn = document.getElementById('btnModalLaunchPhotoTool');
    if (modalLaunchPhotoBtn) {
      modalLaunchPhotoBtn.addEventListener('click', () => {
        modal.classList.remove('open');
        activatePhotoToolForCountry(modalData.countryCode);
      });
    }
  }

  // Checklist Export & Sharing Helpers (Text & JSON)
  function generateChecklistText(result, answers = {}, checkedState = {}) {
    const res = result || state.evaluationResult;
    if (!res) return '';
    const ans = (answers && Object.keys(answers).length > 0) ? answers : state.answers;
    const checks = (checkedState && Object.keys(checkedState).length > 0) ? checkedState : state.checklistChecked;

    const countryName = res.country?.name || ans.countryCode || 'Unknown';
    const countryCode = res.country?.code || ans.countryCode || '';
    const authority = res.country?.authorityName || 'Official Passport Authority';
    const officialPortal = res.country?.officialPortalUrl || 'Direct official portal under research';
    const serviceName = formatServiceName(ans.service || res.serviceCoverage?.service);

    const metaAge = (res.applicant && res.applicant.exactAge !== null)
      ? `Age ${res.applicant.exactAge} (${formatAgeBandName(res.applicant.canonicalAgeBand)})`
      : formatAgeName(ans.age);
    const locText = ans.location === 'abroad'
      ? 'Applying Abroad (Embassy / High Commission / Consulate)'
      : 'Domestic Application (Inside Country)';
    const urgencyText = formatUrgencyName(ans.urgency);

    const lines = [];
    lines.push('================================================================================');
    lines.push('PASSPORTREADY — DOCUMENT PREPARATION CHECKLIST');
    lines.push('================================================================================');
    lines.push(`Issuing Country:    ${countryName} (${countryCode})`);
    lines.push(`Issuing Authority:  ${authority}`);
    lines.push(`Official Portal:    ${officialPortal}`);
    lines.push(`Application Route:  ${serviceName}`);
    lines.push(`Applicant Profile:  ${metaAge}`);
    lines.push(`Lodging Location:   ${locText}`);
    lines.push(`Processing Urgency: ${urgencyText}`);
    lines.push(`Readiness Score:    ${res.readinessScore}% (${(res.statusLabel || '').replace(/_/g, ' ')})`);
    lines.push(`Exported On:        ${new Date().toISOString().slice(0, 10)} via https://passport.myoss.in/`);
    lines.push('--------------------------------------------------------------------------------');

    if (res.serviceCoverage) {
      lines.push('');
      lines.push('[SERVICE VERIFICATION AUDIT]');
      lines.push(`Audit Status: ${res.serviceCoverage.label || ''} (${res.serviceCoverage.status || ''})`);
      if (res.serviceCoverage.summary) {
        lines.push(`Summary: ${res.serviceCoverage.summary}`);
      }
      if (res.serviceCoverage.supportedChecks && res.serviceCoverage.supportedChecks.length > 0) {
        lines.push('Verified Checks:');
        res.serviceCoverage.supportedChecks.forEach(c => lines.push(`  ✓ ${c}`));
      }
      if (res.serviceCoverage.missingChecks && res.serviceCoverage.missingChecks.length > 0) {
        lines.push('Official Confirmation Required:');
        res.serviceCoverage.missingChecks.forEach(c => lines.push(`  ⚠ ${c}`));
      }
    }

    if (res.feeGuidance && res.feeGuidance.details) {
      lines.push('');
      lines.push('[STATUTORY FEE GUIDANCE]');
      lines.push(res.feeGuidance.details);
      lines.push('Note: Government fees are subject to statutory amendments. Confirm exact total on the official portal.');
    }

    lines.push('');
    lines.push('[ACTIONABLE DOCUMENT CHECKLIST]');
    if (res.checklist && res.checklist.length > 0) {
      res.checklist.forEach((item, index) => {
        const isChecked = !!checks[item.id];
        const statusBox = isChecked ? '[X]' : '[ ]';
        const obligation = item.mandatory ? 'MANDATORY' : 'CONDITIONAL';
        lines.push(`${statusBox} ${index + 1}. ${item.title} (${obligation})`);
        if (item.details) {
          lines.push(`    Details: ${item.details}`);
        }
      });
    } else {
      lines.push('No specific documents listed.');
    }

    lines.push('');
    lines.push('[NOTICES & PRE-SUBMISSION FLAGS]');
    if (res.flags && res.flags.length > 0) {
      res.flags.forEach((f) => {
        lines.push(`• [${(f.severity || 'NOTICE').toUpperCase()}] ${f.title}`);
        lines.push(`  ${f.message}`);
        if (f.action) {
          lines.push(`  Recommended Action: ${f.action}`);
        }
      });
    } else {
      lines.push('✓ No critical inconsistencies or discrepancy notices reported.');
    }

    lines.push('');
    lines.push('================================================================================');
    lines.push('LEGAL DISCLAIMER & PRE-SUBMISSION RULE:');
    lines.push('PassportReady is an independent preparatory platform and is not affiliated with');
    lines.push('any government agency. This checklist reflects researched preparation guidance');
    lines.push('only and does not constitute approval or guarantee passport issuance.');
    lines.push('Always complete final filings and statutory fee payments directly on official');
    lines.push(`government systems: ${officialPortal}`);
    lines.push('================================================================================');

    return lines.join('\n');
  }

  function generateChecklistJson(result, answers = {}, checkedState = {}) {
    const res = result || state.evaluationResult;
    if (!res) return null;
    const ans = (answers && Object.keys(answers).length > 0) ? answers : state.answers;
    const checks = (checkedState && Object.keys(checkedState).length > 0) ? checkedState : state.checklistChecked;

    const data = {
      generator: "PassportReady",
      version: "1.0",
      canonicalUrl: "https://passport.myoss.in/",
      exportedAt: new Date().toISOString(),
      disclaimer: "Pre-submission preparation guidance only. Independent platform not affiliated with any government authority. No approval guarantee.",
      country: {
        code: res.country?.code || ans.countryCode || "",
        name: res.country?.name || "",
        authorityName: res.country?.authorityName || "",
        officialPortalUrl: res.country?.officialPortalUrl || "",
        isVerified: !!res.country?.isVerified
      },
      applicationProfile: {
        service: ans.service || "",
        serviceName: formatServiceName(ans.service || res.serviceCoverage?.service),
        location: ans.location || "inside",
        ageCategory: ans.age || "",
        urgency: ans.urgency || "standard"
      },
      readinessScore: res.readinessScore || 0,
      statusLabel: res.statusLabel || "",
      serviceCoverage: res.serviceCoverage ? {
        status: res.serviceCoverage.status,
        label: res.serviceCoverage.label,
        summary: res.serviceCoverage.summary,
        supportedChecks: res.serviceCoverage.supportedChecks || [],
        missingChecks: res.serviceCoverage.missingChecks || []
      } : null,
      feeGuidance: res.feeGuidance ? {
        details: res.feeGuidance.details || "",
        feeStatus: res.feeGuidance.feeStatus || "",
        specificRecord: res.feeGuidance.specificRecord || null
      } : null,
      flags: (res.flags || []).map(f => ({
        id: f.id,
        title: f.title,
        severity: f.severity,
        message: f.message,
        action: f.action
      })),
      checklist: (res.checklist || []).map((item, idx) => ({
        index: idx + 1,
        id: item.id,
        title: item.title,
        mandatory: !!item.mandatory,
        details: item.details,
        completed: !!checks[item.id]
      }))
    };

    return JSON.stringify(data, null, 2);
  }

  function copyChecklist() {
    const result = state.evaluationResult;
    if (!result) return;
    const text = generateChecklistText(result, state.answers, state.checklistChecked);
    if (!text) return;

    if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(text).then(() => {
        const msg = (typeof getI18nText === 'function') ? getI18nText('toast_checklist_copied') : 'Checklist copied to clipboard!';
        showToast(msg);
      }).catch(() => {
        fallbackCopyText(text);
      });
    } else {
      fallbackCopyText(text);
    }
  }

  function fallbackCopyText(text) {
    if (typeof document === 'undefined') return;
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.top = '-9999px';
      textArea.style.left = '-9999px';
      textArea.setAttribute('aria-hidden', 'true');
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        const msg = (typeof getI18nText === 'function') ? getI18nText('toast_checklist_copied') : 'Checklist copied to clipboard!';
        showToast(msg);
      } else {
        showToast('Unable to copy checklist to clipboard.');
      }
    } catch (err) {
      showToast('Unable to copy checklist to clipboard.');
    }
  }

  function downloadChecklist(format = 'txt') {
    const result = state.evaluationResult;
    if (!result) return;
    const countryCode = (result.country && result.country.code) ? result.country.code.toUpperCase() : 'CHECKLIST';
    const dateStr = new Date().toISOString().slice(0, 10);

    if (format === 'json') {
      const jsonStr = generateChecklistJson(result, state.answers, state.checklistChecked);
      if (!jsonStr) return;
      const filename = `PassportReady-Checklist-${countryCode}-${dateStr}.json`;
      downloadBlob(filename, jsonStr, 'application/json;charset=utf-8');
    } else {
      const text = generateChecklistText(result, state.answers, state.checklistChecked);
      if (!text) return;
      const filename = `PassportReady-Checklist-${countryCode}-${dateStr}.txt`;
      downloadBlob(filename, text, 'text/plain;charset=utf-8');
    }
    const msg = (typeof getI18nText === 'function') ? getI18nText('toast_checklist_downloaded') : 'Checklist downloaded successfully!';
    showToast(msg);
  }

  function downloadBlob(filename, content, mimeType) {
    if (typeof document === 'undefined') return;
    try {
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 150);
    } catch (e) {
      showToast('Download failed. Please try copying the checklist.');
    }
  }

  // Shareable URL & Deep-Linking Helpers
  function buildShareableUrl(answers) {
    if (answers === null) return '';
    const ans = (answers !== undefined && typeof answers === 'object')
      ? (Object.keys(answers).length > 0 ? answers : {})
      : state.answers;
    if (!ans || !ans.countryCode) return '';

    const params = new URLSearchParams();
    if (ans.countryCode) params.set('country', ans.countryCode);
    if (ans.service) params.set('service', ans.service);
    if (ans.location) params.set('location', ans.location);
    if (ans.age) params.set('age', ans.age);
    if (ans.urgency) params.set('urgency', ans.urgency);
    if (ans.status) params.set('status', ans.status);
    if (ans.birthProof) params.set('birthProof', ans.birthProof);
    if (ans.addressProof) params.set('addressProof', ans.addressProof);
    if (ans.citizenshipProof) params.set('citizenshipProof', ans.citizenshipProof);
    if (ans.nameMatch) params.set('nameMatch', ans.nameMatch);
    if (ans.dobMatch) params.set('dobMatch', ans.dobMatch);
    if (ans.special && ans.special !== 'none') params.set('special', ans.special);

    const hashString = '#' + params.toString();
    if (typeof window !== 'undefined' && window.location) {
      const origin = (window.location.origin && window.location.origin !== 'null') ? window.location.origin : 'https://passport.myoss.in';
      const pathname = window.location.pathname || '/';
      return `${origin}${pathname}${hashString}`;
    }
    return `https://passport.myoss.in/${hashString}`;
  }

  function parseShareableHash(hashString) {
    if (!hashString || typeof hashString !== 'string') return null;
    const rawHash = hashString.startsWith('#') ? hashString.slice(1) : hashString;
    if (!rawHash) return null;

    const params = new URLSearchParams(rawHash);
    const countryCode = params.get('country') || params.get('c');
    if (!countryCode) return null;

    return {
      countryCode: countryCode.trim().toUpperCase(),
      service: params.get('service') || params.get('s') || 'first_passport',
      location: params.get('location') || params.get('loc') || params.get('l') || 'inside',
      age: params.get('age') || params.get('a') || 'adult',
      urgency: params.get('urgency') || params.get('u') || 'standard',
      status: params.get('status') || params.get('st') || 'never',
      birthProof: params.get('birthProof') || params.get('bp') || 'have',
      addressProof: params.get('addressProof') || params.get('ap') || 'have',
      citizenshipProof: params.get('citizenshipProof') || params.get('cp') || 'have',
      nameMatch: params.get('nameMatch') || params.get('nm') || 'yes',
      dobMatch: params.get('dobMatch') || params.get('dm') || 'yes',
      special: params.get('special') || params.get('sp') || 'none',
      checkedGov: 'yes'
    };
  }

  function loadStateFromUrlHash(hashString) {
    const hash = hashString || (typeof window !== 'undefined' && window.location ? window.location.hash : '');
    const parsedAnswers = parseShareableHash(hash);
    if (!parsedAnswers) return false;

    // Resolve country from dataset
    const c = getCountryByQuery(parsedAnswers.countryCode);
    if (!c) return false;

    // Sync state answers
    state.answers = Object.assign({}, state.answers, parsedAnswers);
    state.answers.countryCode = c.alpha2;
    state.answers.countryName = c.name;

    // Sync input elements in DOM
    if (typeof document !== 'undefined') {
      const countryInput = document.getElementById('countryInput');
      if (countryInput) countryInput.value = c.name;
      syncStateToInputs();
    }

    // Generate results automatically
    generateFinalResults();

    // Toast confirmation
    if (typeof getI18nText === 'function') {
      const msg = getI18nText('toast_shared_checklist_loaded', { country: c.name });
      showToast(msg);
    } else {
      showToast(`Loaded shared checklist for ${c.name}!`);
    }

    return true;
  }

  function shareChecklist() {
    const result = state.evaluationResult;
    if (!result) return;
    const url = buildShareableUrl(state.answers);
    if (!url) return;

    const countryName = result.country?.name || state.answers?.countryCode || 'Country';
    const serviceName = formatServiceName(state.answers.service);
    const shareTitle = `PassportReady Checklist — ${countryName}`;
    const shareText = `Check out my document preparation checklist for ${countryName} (${serviceName}) on PassportReady:`;

    if (typeof navigator !== 'undefined' && navigator.share && typeof navigator.share === 'function') {
      navigator.share({
        title: shareTitle,
        text: shareText,
        url: url
      }).catch((err) => {
        if (err && err.name !== 'AbortError') {
          copyUrlToClipboard(url);
        }
      });
    } else {
      copyUrlToClipboard(url);
    }
  }

  function copyUrlToClipboard(url) {
    if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(url).then(() => {
        const msg = (typeof getI18nText === 'function')
          ? getI18nText('toast_link_copied')
          : 'Shareable link copied to clipboard!';
        showToast(msg);
      }).catch(() => {
        fallbackCopyText(url);
      });
    } else {
      fallbackCopyText(url);
    }
  }

  function toggleCheck(id) {
    state.checklistChecked[id] = !state.checklistChecked[id];
    saveState();
    const itemEl = document.querySelector(`[data-item-id="${id}"]`);
    if (itemEl) {
      itemEl.classList.toggle('is-checked', !!state.checklistChecked[id]);
    }
  }

  // Country Directory Filter Counts & Dynamic Labeling
  function getDirectoryCounts() {
    const list = Array.isArray(COUNTRY_DATA) ? COUNTRY_DATA :
      ((typeof window !== 'undefined' && (window.COUNTRY_DATA || window.PASSPORT_COUNTRIES)) || []);
    return {
      all: list.length,
      verified: list.filter(c => c.portal_status === 'verified').length,
      linked: list.filter(c => c.portal_status === 'official_portal_linked_rules_not_fully_audited').length,
      needs_research: list.filter(c => c.portal_status === 'official_source_needs_research').length
    };
  }

  function updateDirectoryFilterCounts() {
    const counts = getDirectoryCounts();
    const filterButtons = document.querySelectorAll('[data-dir-filter]');
    filterButtons.forEach(btn => {
      const filterKey = btn.dataset.dirFilter;
      const count = counts[filterKey] !== undefined ? counts[filterKey] : 0;
      const countSpan = btn.querySelector('.dir-filter-count');
      if (countSpan) {
        countSpan.textContent = `(${count})`;
      } else {
        const labelText = btn.dataset.filterLabel || btn.textContent.replace(/\s*\(\d+\)/, '').trim();
        btn.innerHTML = `${escapeHTML(labelText)} <span class="dir-filter-count">(${count})</span>`;
      }
    });
  }

  // Country Directory Rendering & Filtering
  function renderCountryDirectory() {
    const container = document.getElementById('countryDirectoryGrid');
    const searchInput = document.getElementById('dirSearchInput');
    const countEl = document.getElementById('dirCountBadge');
    if (!container) return;

    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    let filtered = COUNTRY_DATA.filter(c => {
      const matchesQuery = !query ||
        c.name.toLowerCase().includes(query) ||
        c.alpha2.toLowerCase().includes(query) ||
        c.alpha3.toLowerCase().includes(query) ||
        (c.official_name && c.official_name.toLowerCase().includes(query)) ||
        (c.search_terms && c.search_terms.some(t => t.toLowerCase().includes(query)));

      let matchesFilter = true;
      if (state.directoryFilter === 'verified') matchesFilter = c.portal_status === 'verified';
      else if (state.directoryFilter === 'linked') matchesFilter = c.portal_status === 'official_portal_linked_rules_not_fully_audited';
      else if (state.directoryFilter === 'needs_research') matchesFilter = c.portal_status === 'official_source_needs_research';

      return matchesQuery && matchesFilter;
    });

    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} of ${COUNTRY_DATA.length} entries`;
    }

    if (filtered.length === 0) {
      const isSearch = !!query;
      const emptyTitle = isSearch ? 'No Matching Country or Territory' : 'No Countries in this Category';
      const emptyDesc = isSearch
        ? 'Try searching by common English name or two-letter ISO code.'
        : 'All 27 currently audited national portals have been fully verified. Zero portals remain in partial audit status.';
      container.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:40px;background:#f8fafc;border-radius:16px;border:1px dashed #cbd5e1">
          <h3 style="margin:0 0 8px;color:#334155">${escapeHTML(emptyTitle)}</h3>
          <p style="margin:0;color:#64748b;font-size:13px">${escapeHTML(emptyDesc)}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(c => {
      const isVerified = c.portal_status === 'verified';
      const isLinked = !!c.authority_url;
      const statusClass = isVerified ? 'status-verified' : (isLinked ? 'status-linked' : 'status-needs-research');
      const statusText = isVerified ? 'VERIFIED' : (isLinked ? 'PORTAL LINKED' : 'AWAITING RESEARCH');

      return `
        <article class="country-card" data-country-code="${c.alpha2}" role="button" tabindex="0">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
            <span class="country-flag">${flagEmoji(c.alpha2)}</span>
            <span class="status-pill ${statusClass}">${statusText}</span>
          </div>
          <strong class="country-name">${escapeHTML(c.name)}</strong>
          <small class="country-authority">${escapeHTML(c.authority_label || 'Official source in review')}</small>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:12px;font-size:11px;color:#64748b">
            <span>ISO: ${c.alpha2} / ${c.alpha3}</span>
            <span style="color:#0f5132;font-weight:700">Select →</span>
          </div>
        </article>
      `;
    }).join('');
  }

  function selectCountryFromDirectory(countryCodeOrName) {
    const c = COUNTRY_DATA.find(x => x.alpha2 === countryCodeOrName || x.name === countryCodeOrName);
    const countryName = c ? c.name : countryCodeOrName;
    const input = document.getElementById('countryInput');
    if (input) input.value = countryName;
    updateCountryHint();
    document.getElementById('checker').scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast(`${countryName} selected for readiness check`);
  }

  function setupDirectoryListeners() {
    const searchInput = document.getElementById('dirSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', renderCountryDirectory);
    }

    const grid = document.getElementById('countryDirectoryGrid');
    if (grid && !grid.dataset.hasListener) {
      grid.dataset.hasListener = 'true';
      grid.addEventListener('click', (e) => {
        const card = e.target.closest('.country-card');
        if (card && card.dataset.countryCode) {
          selectCountryFromDirectory(card.dataset.countryCode);
        }
      });
      grid.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          const card = e.target.closest('.country-card');
          if (card && card.dataset.countryCode) {
            e.preventDefault();
            selectCountryFromDirectory(card.dataset.countryCode);
          }
        }
      });
    }

    const filterBtns = document.querySelectorAll('[data-dir-filter]');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        e.currentTarget.classList.add('active');
        e.currentTarget.setAttribute('aria-selected', 'true');
        state.directoryFilter = e.currentTarget.dataset.dirFilter;
        renderCountryDirectory();
      });
    });
  }

  // Helper to reliably access PassportTools across Browser, Global, and Node
  function getPassportTools() {
    if (typeof PassportTools !== 'undefined') return PassportTools;
    if (typeof window !== 'undefined' && window.PassportTools) return window.PassportTools;
    if (typeof global !== 'undefined' && global.PassportTools) return global.PassportTools;
    if (typeof require !== 'undefined') {
      try {
        const mod = require('./tools.js');
        return mod.PassportTools || mod;
      } catch (e) {}
    }
    return null;
  }

  // 3. Biometric Photo Standards & Compliance Tool Controller
  let activePhotoStandard = 'icao_35x45';
  let currentPhotoImg = null;
  let currentPhotoScale = 1.0;

  function renderPhotoOverlay(standardId) {
    const overlayContainer = document.getElementById('photoOverlayContainer');
    if (!overlayContainer) return;

    const stdId = standardId || activePhotoStandard;
    const pt = getPassportTools();
    const stds = (pt && pt.getPhotoStandards) ? pt.getPhotoStandards() : null;
    const standard = (stds && stds[stdId]) ? stds[stdId] : {
      id: 'icao_35x45',
      name: 'ICAO (35 × 45 mm)',
      widthMm: 35,
      heightMm: 45,
      headRatioMin: 0.70,
      headRatioMax: 0.80,
      containerWidth: 260,
      containerHeight: 334
    };

    const W = standard.containerWidth || 260;
    const H = standard.containerHeight || 334;

    let chinY, crownY, eyeY, cx = W / 2, rx, ry, shoulderPath;

    if (stdId === 'us_2x2') {
      chinY = 220;
      crownY = 55;
      eyeY = 135;
      rx = 52;
      ry = 75;
      shoulderPath = `M 15 260 Q 75 210 130 215 Q 185 210 245 260`;
    } else if (stdId === 'ca_50x70') {
      chinY = 255;
      crownY = 85;
      eyeY = 170;
      rx = 50;
      ry = 75;
      shoulderPath = `M 15 350 Q 70 250 125 250 Q 180 250 235 350`;
    } else {
      chinY = 295;
      crownY = 38;
      eyeY = 145;
      rx = 62;
      ry = 95;
      shoulderPath = `M 10 334 Q 70 270 130 275 Q 190 270 250 334`;
    }

    overlayContainer.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="width:100%;height:100%;display:block">
        <defs>
          <linearGradient id="overlayGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0f5132" stop-opacity="0.08"/>
            <stop offset="100%" stop-color="#0f5132" stop-opacity="0.02"/>
          </linearGradient>
        </defs>

        <line x1="${cx}" y1="0" x2="${cx}" y2="${H}" stroke="#0f5132" stroke-width="1" stroke-dasharray="3 3" opacity="0.4"/>
        <line x1="20" y1="${crownY}" x2="${W - 20}" y2="${crownY}" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.75"/>
        <text x="25" y="${crownY - 4}" fill="#dc2626" font-size="9" font-weight="bold" font-family="sans-serif">Crown Limit</text>

        <rect x="20" y="${eyeY - 12}" width="${W - 40}" height="24" fill="#3b82f6" fill-opacity="0.08" stroke="#2563eb" stroke-width="1" stroke-dasharray="3 3" opacity="0.8"/>
        <text x="25" y="${eyeY + 3}" fill="#1d4ed8" font-size="9" font-weight="bold" font-family="sans-serif">Eye Level Band</text>

        <ellipse cx="${cx}" cy="${(chinY + crownY) / 2}" rx="${rx}" ry="${(chinY - crownY) / 2}" fill="url(#overlayGrad)" stroke="#0f5132" stroke-width="2" stroke-dasharray="5 3"/>

        <line x1="20" y1="${chinY}" x2="${W - 20}" y2="${chinY}" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.75"/>
        <text x="25" y="${chinY + 12}" fill="#dc2626" font-size="9" font-weight="bold" font-family="sans-serif">Chin Baseline</text>

        <path d="${shoulderPath}" fill="none" stroke="#0f5132" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6"/>

        <rect x="${W - 90}" y="10" width="80" height="18" rx="4" fill="#0f172a" fill-opacity="0.85"/>
        <text x="${W - 50}" y="22" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">${escapeHTML(standard.shortName || standard.name)}</text>
      </svg>
    `;
  }

  function updatePhotoStandard(standardId) {
    activePhotoStandard = standardId || 'icao_35x45';

    if (typeof document !== 'undefined') {
      const pills = document.querySelectorAll('#photoStandardPills [data-photo-standard]');
      pills.forEach(p => {
        if (p.dataset.photoStandard === activePhotoStandard) {
          p.classList.add('active');
          p.setAttribute('aria-selected', 'true');
        } else {
          p.classList.remove('active');
          p.setAttribute('aria-selected', 'false');
        }
      });

      const pt = getPassportTools();
      const stds = (pt && pt.getPhotoStandards) ? pt.getPhotoStandards() : null;
      const std = (stds && stds[activePhotoStandard]) ? stds[activePhotoStandard] : null;

      if (std) {
        const lbl = document.getElementById('photoGuideStandardLabel');
        if (lbl) lbl.textContent = std.shortName || std.name;

        const titleEl = document.getElementById('photoStandardTitle');
        if (titleEl) titleEl.textContent = std.name;

        const detailsEl = document.getElementById('photoStandardDetails');
        if (detailsEl) {
          detailsEl.textContent = `Dimensions: ${std.widthMm} × ${std.heightMm} mm. Head Coverage: ${Math.round(std.headRatioMin * 100)}%–${Math.round(std.headRatioMax * 100)}% of height. Background: ${std.backgroundDesc}. Expression: ${std.expressionDesc}. Eyeglasses: ${std.eyeglassDesc}.`;
        }

        const previewContainer = document.getElementById('photoPreviewContainer');
        const canvas = document.getElementById('photoCanvas');
        if (previewContainer && canvas) {
          previewContainer.style.width = `${std.containerWidth}px`;
          previewContainer.style.height = `${std.containerHeight}px`;
          canvas.width = std.containerWidth;
          canvas.height = std.containerHeight;
        }
      }

      renderPhotoOverlay(activePhotoStandard);

      if (currentPhotoImg) {
        drawPhotoOnCanvas();
        const pt = getPassportTools();
        if (pt && pt.validatePhotoDimensions) {
          const valRes = pt.validatePhotoDimensions(currentPhotoImg.naturalWidth, currentPhotoImg.naturalHeight, activePhotoStandard);
          displayPhotoValidationResult(valRes);
        }
      }
    }
  }

  function drawPhotoOnCanvas() {
    if (typeof document === 'undefined') return;
    const canvas = document.getElementById('photoCanvas');
    if (!canvas || !currentPhotoImg) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const img = currentPhotoImg;
    const scale = currentPhotoScale || 1.0;

    const baseScale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    const drawW = img.naturalWidth * baseScale * scale;
    const drawH = img.naturalHeight * baseScale * scale;
    const drawX = (canvas.width - drawW) / 2;
    const drawY = (canvas.height - drawH) / 2;

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }

  function displayPhotoValidationResult(valRes) {
    if (typeof document === 'undefined') return;
    const badge = document.getElementById('photoComplianceBadge');
    const resultBox = document.getElementById('photoEvaluationResult');
    if (!badge || !resultBox || !valRes) return;

    if (valRes.status === 'COMPLIANT') {
      badge.className = 'status-pill status-verified';
      badge.textContent = 'COMPLIANT RATIO';
    } else if (valRes.status === 'LOW_RESOLUTION') {
      badge.className = 'status-pill status-mandatory';
      badge.textContent = 'LOW RESOLUTION';
    } else {
      badge.className = 'status-pill status-optional';
      badge.textContent = 'NON-STANDARD RATIO';
    }

    resultBox.innerHTML = `
      <div style="font-weight:700;color:var(--slate-dark);margin-bottom:4px">${escapeHTML(valRes.badge)} — ${valRes.width} × ${valRes.height} px</div>
      <p style="margin:0 0 6px;color:#334155">${escapeHTML(valRes.message)}</p>
      <div style="font-size:11px;color:#64748b;display:flex;gap:12px;flex-wrap:wrap">
        <span>Detected Ratio: <strong>${valRes.imageRatio}</strong> (Target: ${valRes.targetRatio})</span>
        <span>Ratio Deviation: <strong>${valRes.deviationPct}%</strong></span>
        <span>Recommended Resolution: <strong>${valRes.minWidthPx}×${valRes.minHeightPx} px</strong></span>
      </div>
    `;
  }

  function handlePhotoUpload(file) {
    if (!file || !file.type.startsWith('image/')) {
      if (typeof showToast === 'function') {
        showToast('Please select a valid image file (JPEG, PNG, WebP).');
      }
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        currentPhotoImg = img;
        currentPhotoScale = 1.0;

        const slider = document.getElementById('photoScaleSlider');
        if (slider) slider.value = 100;

        const controlsRow = document.getElementById('photoControlsRow');
        if (controlsRow) controlsRow.style.display = 'flex';

        drawPhotoOnCanvas();

        const pt = getPassportTools();
        if (pt && pt.validatePhotoDimensions) {
          const valRes = pt.validatePhotoDimensions(img.naturalWidth, img.naturalHeight, activePhotoStandard);
          displayPhotoValidationResult(valRes);
        }

        if (typeof showToast === 'function') {
          showToast(`Loaded photo (${img.naturalWidth}×${img.naturalHeight}px) for evaluation.`);
        }
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  function resetPhotoTool() {
    currentPhotoImg = null;
    currentPhotoScale = 1.0;

    if (typeof document !== 'undefined') {
      const fileInput = document.getElementById('photoFileInput');
      if (fileInput) fileInput.value = '';

      const controlsRow = document.getElementById('photoControlsRow');
      if (controlsRow) controlsRow.style.display = 'none';

      const canvas = document.getElementById('photoCanvas');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      const badge = document.getElementById('photoComplianceBadge');
      if (badge) {
        badge.className = 'status-pill status-optional';
        badge.textContent = 'READY TO TEST';
      }

      updatePhotoStandard(activePhotoStandard);
    }
  }

  function activatePhotoToolForCountry(countryCode) {
    const pt = getPassportTools();
    const std = (pt && pt.getPhotoStandardForCountry)
      ? pt.getPhotoStandardForCountry(countryCode)
      : 'icao_35x45';

    updatePhotoStandard(std);

    if (typeof document !== 'undefined') {
      const toolBox = document.getElementById('toolBoxPhoto');
      if (toolBox) {
        toolBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        toolBox.style.transition = 'box-shadow 0.3s ease';
        toolBox.style.boxShadow = '0 0 0 3px #10b981';
        setTimeout(() => {
          toolBox.style.boxShadow = '';
        }, 1500);
      }
    }

    if (typeof showToast === 'function') {
      const cName = state.evaluationResult?.country?.name || countryCode || 'Selected Country';
      showToast(`Photo validator configured for ${cName} standard.`);
    }
  }

  function setupPhotoToolListeners() {
    if (typeof document === 'undefined') return;

    updatePhotoStandard(activePhotoStandard);

    const pills = document.querySelectorAll('#photoStandardPills [data-photo-standard]');
    pills.forEach(p => {
      p.addEventListener('click', (e) => {
        e.preventDefault();
        const std = p.dataset.photoStandard;
        if (std) updatePhotoStandard(std);
      });
    });

    const btnUpload = document.getElementById('btnUploadPhoto');
    const fileInput = document.getElementById('photoFileInput');
    if (btnUpload && fileInput) {
      btnUpload.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) handlePhotoUpload(file);
      });
    }

    const previewContainer = document.getElementById('photoPreviewContainer');
    if (previewContainer) {
      previewContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        previewContainer.style.borderColor = '#0f5132';
      });
      previewContainer.addEventListener('dragleave', () => {
        previewContainer.style.borderColor = '#94a3b8';
      });
      previewContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        previewContainer.style.borderColor = '#94a3b8';
        const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (file) handlePhotoUpload(file);
      });
    }

    const slider = document.getElementById('photoScaleSlider');
    if (slider) {
      slider.addEventListener('input', (e) => {
        currentPhotoScale = Number(e.target.value) / 100;
        drawPhotoOnCanvas();
      });
    }

    const resetBtn = document.getElementById('photoResetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', resetPhotoTool);
    }
  }

  // Interactive Tools Listeners
  function setupToolListeners() {
    setupPhotoToolListeners();
    // 6-Month Expiry Tool
    const btnCheckExpiry = document.getElementById('btnCheckExpiry');
    if (btnCheckExpiry) {
      btnCheckExpiry.addEventListener('click', () => {
        const passExpiry = document.getElementById('calcPassportExpiry')?.value;
        const travelDate = document.getElementById('calcTravelDate')?.value;
        const resEl = document.getElementById('calcExpiryResult');

        const evalRes = PassportTools.evaluateExpiry(passExpiry, travelDate);
        if (!evalRes.valid && evalRes.error) {
          resEl.innerHTML = `<div class="notice" style="background:#fee2e2;color:#991b1b">${evalRes.error}</div>`;
          return;
        }

        const colorMap = {
          EXPIRED_AT_TRAVEL: { bg: '#fee2e2', border: '#f87171', text: '#991b1b' },
          LESS_THAN_3_MONTHS: { bg: '#ffedd5', border: '#fb923c', text: '#9a3412' },
          LESS_THAN_6_MONTHS: { bg: '#fef3c7', border: '#fcd34d', text: '#92400e' },
          SUFFICIENT_VALIDITY: { bg: '#ecfdf5', border: '#6ee7b7', text: '#065f46' }
        };
        const c = colorMap[evalRes.status] || colorMap.SUFFICIENT_VALIDITY;

        resEl.innerHTML = `
          <div style="background:${c.bg};border:1px solid ${c.border};border-radius:12px;padding:16px;margin-top:14px">
            <div style="display:flex;align-items:center;gap:10px">
              <span class="status-pill" style="background:${c.text};color:#fff">${evalRes.badge}</span>
              <strong style="color:${c.text};font-size:14px">${evalRes.daysRemaining} days remaining</strong>
            </div>
            <p style="margin:8px 0 0;font-size:13px;color:${c.text};line-height:1.6">${evalRes.message}</p>
          </div>
        `;
      });
    }

    // Mismatch Analyzer
    const btnAnalyzeMismatch = document.getElementById('btnAnalyzeMismatch');
    if (btnAnalyzeMismatch) {
      btnAnalyzeMismatch.addEventListener('click', () => {
        const nameA = document.getElementById('mismatchNameA')?.value;
        const nameB = document.getElementById('mismatchNameB')?.value;
        const dobA = document.getElementById('mismatchDobA')?.value;
        const dobB = document.getElementById('mismatchDobB')?.value;
        const resEl = document.getElementById('mismatchResult');

        const analysis = PassportTools.analyzeNameDiscrepancy(nameA, nameB, dobA, dobB);
        if (analysis.recommendations.length === 0) {
          resEl.innerHTML = `
            <div style="background:#ecfdf5;border:1px solid #6ee7b7;border-radius:12px;padding:16px;margin-top:14px;color:#065f46">
              <strong>Perfect Match!</strong>
              <p style="margin:4px 0 0;font-size:13px">No significant discrepancy was detected between Document A and Document B.</p>
            </div>
          `;
        } else {
          resEl.innerHTML = `
            <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:12px;padding:16px;margin-top:14px;color:#92400e">
              <strong style="font-size:14px">Discrepancy Analysis Findings:</strong>
              <ul style="margin:8px 0 0;padding-left:18px;font-size:13px;line-height:1.6">
                ${analysis.recommendations.map(r => `<li>${escapeHTML(r)}</li>`).join('')}
              </ul>
            </div>
          `;
        }
      });
    }
  }

  // Educational Guides Renderer
  function renderGuides() {
    const container = document.getElementById('guidesGrid');
    if (!container || typeof PASSPORT_GUIDES === 'undefined') return;

    if (!container.dataset.hasListener) {
      container.dataset.hasListener = 'true';
      container.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-open-guide]');
        if (btn && btn.dataset.openGuide) {
          openGuideModal(btn.dataset.openGuide);
        }
      });
    }

    container.innerHTML = PASSPORT_GUIDES.map(g => `
      <article class="guide-card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
          <span class="feature-icon" style="margin:0;width:38px;height:38px;font-size:18px">${g.icon}</span>
          <span class="status-pill status-linked">${g.badge}</span>
        </div>
        <h3 style="font-size:16px;margin:0 0 6px;letter-spacing:-.3px;color:#0f172a">${escapeHTML(g.title)}</h3>
        <p style="font-size:12px;color:#64748b;margin:0 0 14px;line-height:1.5">${escapeHTML(g.summary)}</p>
        <button type="button" class="btn btn-outline" style="width:100%;font-size:12px;padding:8px" data-open-guide="${g.id}">Read Full Guide (${g.readTime}) →</button>
      </article>
    `).join('');
  }

  function openGuideModal(guideId) {
    const guide = PASSPORT_GUIDES.find(g => g.id === guideId);
    if (!guide) return;

    const modal = document.getElementById('genericModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    title.textContent = guide.title;
    body.innerHTML = `
      <p style="font-size:14px;color:#475569;margin-bottom:20px;font-style:italic">${escapeHTML(guide.subtitle)}</p>
      ${guide.sections.map(s => `
        <div style="margin-bottom:18px">
          <h4 style="font-size:15px;color:#0f5132;margin:0 0 6px">${escapeHTML(s.heading)}</h4>
          <p style="font-size:13px;color:#334155;line-height:1.7;margin:0">${escapeHTML(s.content)}</p>
        </div>
      `).join('')}
      <div class="notice" style="margin-top:24px">
        <strong>Government Source Rule:</strong> Always confirm latest rules and procedural changes with your specific passport authority prior to submission.
      </div>
    `;

    modal.classList.add('open');
  }

  // Modals Controller (About, Privacy, Terms, Methodology)
  function setupModalListeners() {
    const modal = document.getElementById('genericModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    if (!modal) return;

    if (closeBtn) {
      closeBtn.addEventListener('click', () => modal.classList.remove('open'));
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        modal.classList.remove('open');
      }
    });

    // Links for Legal & Info modals
    document.querySelectorAll('[data-open-modal]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const type = btn.dataset.openModal;
        openInformationalModal(type);
      });
    });
  }

  function openInformationalModal(type) {
    const modal = document.getElementById('genericModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    if (type === 'about') {
      title.textContent = "About PassportReady";
      body.innerHTML = `
        <h4 style="color:#0f5132;margin-top:0">Check Before You Apply</h4>
        <p>PassportReady is an independent global application-readiness and pre-submission checking platform designed to help travelers, families, and citizens navigate passport requirements with clarity.</p>
        <p>Applying for a passport is often intimidating and fraught with mechanical pitfalls: minor spelling discrepancies, subtle background photo rejections, missing parental consent forms, and unexpected international 6-month validity cutoffs.</p>
        <p>PassportReady operates with strict privacy principles: zero tracking, zero document uploads required, zero storage of identity records, and direct routing to genuine government foreign ministry portals.</p>
      `;
    } else if (type === 'privacy') {
      title.textContent = "Privacy Policy — Zero Data Retention";
      body.innerHTML = `
        <h4 style="color:#0f5132;margin-top:0">Privacy by Design</h4>
        <p><strong>1. Zero Identity Storage:</strong> PassportReady does NOT collect, store, or transmit your passport number, national identity number, or full address. All readiness evaluations are conducted 100% locally in your web browser.</p>
        <p><strong>2. No Document Uploads Required:</strong> Our core checklist tool uses non-sensitive question flows without demanding scans of your physical passports or birth certificates.</p>
        <p><strong>3. Local Storage:</strong> If you choose to save your checklist progress, it is stored strictly inside your browser's local sandbox (LocalStorage) and can be permanently wiped with one click via 'Start New Check'.</p>
        <p><strong>4. Third-Party Trackers:</strong> We do not employ third-party behavioral profiling trackers, advertising pixels, or invasive telemetry.</p>
      `;
    } else if (type === 'terms') {
      title.textContent = "Terms of Service & Disclaimer";
      body.innerHTML = `
        <h4 style="color:#0f5132;margin-top:0">Legal Disclaimer</h4>
        <p><strong>1. Not an Official Government Agency:</strong> PassportReady is an independent preparation guide and educational platform. It is not affiliated with, endorsed by, or operated by any government, foreign ministry, or passport-issuing authority.</p>
        <p><strong>2. No Guarantee of Issuance:</strong> Completing a preparation checklist on PassportReady does not constitute legal approval or guarantee that a government authority will grant a passport. Final eligibility determinations rest solely with the competent passport agency.</p>
        <p><strong>3. Accuracy of Sources:</strong> While our research team cross-references official publications, government fee schedules, forms, and regulations change without notice. Users are required to confirm final fees and procedures on the official government portals linked throughout the platform.</p>
      `;
    } else if (type === 'methodology') {
      title.textContent = "Official-Source Research Methodology";
      body.innerHTML = `
        <h4 style="color:#0f5132;margin-top:0">Our Verification Standard</h4>
        <p>PassportReady enforces a strict hierarchy of sources:</p>
        <ul>
          <li><strong>Tier 1 (Authoritative):</strong> Official foreign ministries, national passport directorates, official gazettes, and verified consular missions (e.g., travel.state.gov, passportindia.gov.in, gov.uk).</li>
          <li><strong>Tier 2 (Standards Bodies):</strong> International Civil Aviation Organization (ICAO Doc 9303 for biometric passports and machine-readable travel documents).</li>
          <li><strong>Tier 3 (Discovery Only):</strong> News reports, secondary travel blogs, or unofficial service guides are strictly prohibited from substantiating legal requirements on PassportReady.</li>
        </ul>
        <p>Every country entry in our database is categorized with full transparency: Verified Rule Pack, Official Portal Linked, or Awaiting Research.</p>
      `;
    }

    modal.classList.add('open');
  }

  // Formatting helpers
  function formatServiceName(s) {
    const keyMap = {
      first_passport: 'srv_first',
      renewal_reissue: 'srv_renewal',
      lost_stolen: 'srv_lost',
      damaged: 'srv_damaged',
      name_correction: 'srv_name_change',
      minor_child: 'srv_minor',
      urgent_expedited: 'srv_urgent',
      emergency_travel: 'srv_emergency'
    };
    if (keyMap[s] && typeof getI18nText === 'function') {
      return getI18nText(keyMap[s]);
    }
    const map = {
      first_passport: "First-Time / Fresh Passport",
      renewal_reissue: "Passport Renewal / Reissue",
      lost_stolen: "Lost or Stolen Passport Replacement",
      damaged: "Damaged Passport Replacement",
      name_correction: "Correction / Name Change",
      minor_child: "Child / Minor Passport",
      urgent_expedited: "Urgent / Expedited Processing",
      emergency_travel: "Emergency Travel Certificate"
    };
    return map[s] || s;
  }

  function formatAgeName(a) {
    const keyMap = {
      infant: 'age_infant',
      minor: 'age_minor',
      adult: 'age_adult',
      senior: 'age_senior'
    };
    if (keyMap[a] && typeof getI18nText === 'function') {
      return getI18nText(keyMap[a]);
    }
    const map = {
      infant: "Infant / Young Child (under 5/6)",
      minor: "Child / Minor (under 16/18)",
      adult: "Adult (18 to 59)",
      senior: "Senior Citizen (60+)"
    };
    return map[a] || a;
  }

  function formatAgeBandName(band) {
    const keyMap = {
      child_under_12: 'band_child_under_12',
      minor_12_to_16: 'band_minor_12_to_16',
      age_17: 'band_age_17',
      adult_18_to_59: 'band_adult_18_to_59',
      senior_60_plus: 'band_senior_60_plus'
    };
    if (keyMap[band] && typeof getI18nText === 'function') {
      return getI18nText(keyMap[band]);
    }
    const map = {
      child_under_12: "Child Under 12",
      minor_12_to_16: "Minor / Youth (12–16)",
      age_17: "Age 17",
      adult_18_to_59: "Adult (18–59)",
      senior_60_plus: "Senior Citizen (60+)"
    };
    return map[band] || band;
  }

  function formatUrgencyName(u) {
    const keyMap = {
      standard: 'urg_standard',
      expedited: 'urg_expedited',
      emergency: 'urg_emergency'
    };
    if (keyMap[u] && typeof getI18nText === 'function') {
      return getI18nText(keyMap[u]);
    }
    const map = {
      standard: "Standard / Normal processing",
      expedited: "Urgent / Expedited / Tatkaal",
      emergency: "Immediate emergency travel"
    };
    return map[u] || u || "Standard";
  }

  function escapeHTML(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function flagEmoji(code) {
    if (!code || code.length !== 2) return '🌐';
    return [...code.toUpperCase()].map(ch => String.fromCodePoint(127397 + ch.charCodeAt(0))).join('');
  }

  // Expose global controller with DEF-04 helpers
  const exportedApp = {
    init,
    toggleCheck,
    selectCountryFromDirectory,
    openGuideModal,
    openInformationalModal,
    getDirectoryCounts,
    updateDirectoryFilterCounts,
    getCountryByQuery,
    normalizeCountryText,
    updateCountryHint,
    syncInputsToState,
    renderStep,
    generateChecklistText,
    generateChecklistJson,
    copyChecklist,
    downloadChecklist,
    getDocumentModalData,
    openDocumentHelperModal,
    buildShareableUrl,
    parseShareableHash,
    loadStateFromUrlHash,
    shareChecklist,
    activatePhotoToolForCountry,
    renderPhotoOverlay,
    updatePhotoStandard,
    resetPhotoTool,
    getActivePhotoStandard: () => activePhotoStandard,
    getState: () => state
  };

  if (typeof window !== 'undefined') {
    window.PassportApp = exportedApp;
    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exportedApp;
  }
})();
