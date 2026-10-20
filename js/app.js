/**
 * PassportReady Main Application Controller
 * Connects UI, Wizard, Country Directory, Rules Engine, Interactive Tools, and Guides.
 */

(function () {
  'use strict';

  // Country Data Reference: resolve from window.PASSPORT_COUNTRIES or window.COUNTRY_DATA
  const COUNTRY_DATA = (typeof window !== 'undefined' && (window.COUNTRY_DATA || window.PASSPORT_COUNTRIES)) ||
    (typeof PASSPORT_COUNTRIES !== 'undefined' ? PASSPORT_COUNTRIES : []);

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
    renderStep(state.currentStep);
    updateCountryHint();
  }

  // Initialize Rules Engine with bundled or fetched data
  function initializeRulesEngine() {
    let rulePacks = {};
    if (typeof RULE_PACKS !== 'undefined') {
      rulePacks = RULE_PACKS;
    }
    rulesEngine = new PassportRulesEngine(rulePacks);
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

    window.addEventListener('languageChanged', () => {
      updateCountryHint();
      renderCountryDirectory();
      renderStep(state.currentStep);
    });
  }

  // Country Data Helpers
  function getCountryByQuery(query) {
    if (!query) return null;
    const q = query.trim().toLowerCase();
    return COUNTRY_DATA.find(c => 
      c.name.toLowerCase() === q ||
      c.alpha2.toLowerCase() === q ||
      c.alpha3.toLowerCase() === q ||
      (c.official_name && c.official_name.toLowerCase() === q) ||
      (c.search_terms && c.search_terms.some(t => t.toLowerCase() === q))
    ) || null;
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
    if (!hint || !input) return;

    const c = getCountryByQuery(input.value) || COUNTRY_DATA.find(x => x.alpha2 === state.answers.countryCode);
    if (!c) {
      hint.innerHTML = `<strong style="color:#b45309">Select an indexed country</strong><span>Please type and select a country from the indexed list.</span>`;
      return;
    }

    state.answers.countryCode = c.alpha2;
    state.answers.countryName = c.name;

    const isVerified = c.portal_status === 'verified';
    const isLinked = !!c.authority_url;

    if (isVerified) {
      hint.innerHTML = `
        <div style="display:flex;align-items:center;gap:6px">
          <span class="status-pill status-verified">VERIFIED SOURCE PACK</span>
          <strong>${escapeHTML(c.authority_label || c.name + ' Passport Authority')}</strong>
        </div>
        <span>Official requirements and document standards fully researched and updated for 2026.</span>
        <a href="${escapeHTML(c.authority_url)}" target="_blank" rel="noopener" class="link-external">Open Official Portal ↗</a>
      `;
    } else if (isLinked) {
      hint.innerHTML = `
        <div style="display:flex;align-items:center;gap:6px">
          <span class="status-pill status-linked">OFFICIAL PORTAL LINKED</span>
          <strong>${escapeHTML(c.authority_label || 'Official Government Agency')}</strong>
        </div>
        <span>Official portal link recorded; scenario-specific rules undergoing detailed research.</span>
        <a href="${escapeHTML(c.authority_url)}" target="_blank" rel="noopener" class="link-external">Open Official Portal ↗</a>
      `;
    } else {
      hint.innerHTML = `
        <div style="display:flex;align-items:center;gap:6px">
          <span class="status-pill status-needs-research">AWAITING SOURCE RESEARCH</span>
          <strong>General Preparation Guidance</strong>
        </div>
        <span>Official passport authority link currently undergoing research. Generic preparation guidance provided.</span>
      `;
    }

    if (officialBtn && c.authority_url) {
      officialBtn.href = c.authority_url;
      officialBtn.textContent = `Open ${c.name} Official Portal ↗`;
    }
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

  function setupWizardListeners() {
    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');
    const countryInput = document.getElementById('countryInput');
    const printBtn = document.getElementById('printBtn');
    const restartBtn = document.getElementById('restartBtn');
    const saveBtn = document.getElementById('saveProgressBtn');

    if (countryInput) {
      countryInput.addEventListener('input', updateCountryHint);
      countryInput.addEventListener('change', updateCountryHint);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
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
    const result = rulesEngine.evaluate(state.answers);
    state.evaluationResult = result;

    const resultBox = document.getElementById('resultbox');
    const wizardNav = document.getElementById('wizardnav');
    const panes = document.querySelectorAll('.step-pane');

    panes.forEach(p => p.classList.remove('active'));
    wizardNav.style.display = 'none';
    resultBox.classList.add('show');

    // Header info
    document.getElementById('resCountryName').textContent = result.country.name;
    document.getElementById('resServiceName').textContent = formatServiceName(state.answers.service);
    const metaAge = (result.applicant && result.applicant.exactAge !== null)
      ? `Age ${result.applicant.exactAge} (${formatAgeBandName(result.applicant.canonicalAgeBand)})`
      : formatAgeName(state.answers.age);
    document.getElementById('resApplicantMeta').textContent = `${metaAge} · ${state.answers.location === 'abroad' ? 'Applying Abroad (Embassy/Consulate)' : 'Domestic Application'}`;

    // Score badge
    const badgeEl = document.getElementById('resStatusBadge');
    badgeEl.textContent = result.statusLabel.replace(/_/g, ' ');
    if (result.statusLabel === 'PREPARED') {
      badgeEl.className = 'status-pill status-verified';
    } else if (result.statusLabel === 'VERIFICATION_RECOMMENDED' || result.statusLabel === 'NEEDS_ATTENTION') {
      badgeEl.className = 'status-pill status-linked';
    } else {
      badgeEl.className = 'status-pill status-needs-research';
    }

    document.getElementById('resScoreNum').textContent = `${result.readinessScore}%`;
    document.getElementById('resScoreBar').style.width = `${result.readinessScore}%`;

    // Service Coverage Transparency Card
    const coverageCard = document.getElementById('resServiceCoverageCard');
    if (coverageCard && result.serviceCoverage) {
      const sc = result.serviceCoverage;
      const isCountryVerified = result.country && result.country.isVerified;
      const countryBadgeClass = isCountryVerified ? 'status-verified' : 'status-needs-research';
      const countryBadgeText = isCountryVerified ? 'VERIFIED COUNTRY PACK' : 'AWAITING RESEARCH';

      const dims = sc.dimensions || {};
      const serviceDim = dims.service || { name: 'Base Service', label: sc.label, badgeClass: sc.badgeClass };
      const urgencyDim = dims.urgency || { name: 'Processing Route', label: 'Standard', badgeClass: 'status-verified' };
      const channelDim = dims.channel || { name: 'Lodgement Channel', label: 'Domestic', badgeClass: 'status-verified' };

      const renderEvidenceBadge = (dim) => {
        const lvl = dim.evidence?.evidenceLevel;
        if (lvl === 'trusted_official' || (dim.evidence?.hasSupportingEvidence && !dim.evidence?.isPartial)) {
          return '<div style="font-size:10px;color:#166534;margin-top:4px">✓ Official Evidence Linked</div>';
        }
        if (lvl === 'partial_confirmation' || dim.evidence?.isPartial) {
          return '<div style="font-size:10px;color:#b45309;margin-top:4px">⚠ Partial Evidence Requiring Confirmation</div>';
        }
        if (lvl === 'valid_syntax_incomplete_claim') {
          return '<div style="font-size:10px;color:#475569;margin-top:4px">ℹ Valid Source Reference · Incomplete Claim Evidence</div>';
        }
        if (lvl === 'no_trusted_source' || dim.status === 'general_guidance') {
          return '<div style="font-size:10px;color:#b91c1c;margin-top:4px">⚠ No Trusted Official Source</div>';
        }
        if (lvl === 'awaiting_primary_research' || dim.status === 'awaiting_research') {
          return '<div style="font-size:10px;color:#64748b;margin-top:4px">⌛ Awaiting Primary Research</div>';
        }
        return '<div style="font-size:10px;color:#b45309;margin-top:4px">⚠ Direct Confirmation Required</div>';
      };

      const supportedHtml = (sc.supportedChecks && sc.supportedChecks.length > 0)
        ? `<div style="margin-top:10px"><strong style="font-size:12px;color:#166534">✓ Researched Checks Supported:</strong><ul style="margin:4px 0 0 16px;padding:0;font-size:12px;color:#334155;line-height:1.4">${sc.supportedChecks.map(c => `<li>${escapeHTML(c)}</li>`).join('')}</ul></div>`
        : '';

      const missingHtml = (sc.missingChecks && sc.missingChecks.length > 0)
        ? `<div style="margin-top:8px"><strong style="font-size:12px;color:#b45309">⚠ Direct Official Confirmation Required:</strong><ul style="margin:4px 0 0 16px;padding:0;font-size:12px;color:#78350f;line-height:1.4">${sc.missingChecks.map(c => `<li>${escapeHTML(c)}</li>`).join('')}</ul></div>`
        : '';

      coverageCard.innerHTML = `
        <div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:12px;padding:16px;margin-bottom:16px">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:12px">
            <span style="font-size:12px;font-weight:700;color:var(--slate-dark);text-transform:uppercase;letter-spacing:0.04em">Service Verification Audit · Multi-Dimensional Coverage</span>
            <div style="display:flex;gap:6px;flex-wrap:wrap">
              <span class="status-pill ${countryBadgeClass}">${countryBadgeText}</span>
              <span class="status-pill ${sc.badgeClass}">${escapeHTML(sc.label.toUpperCase())}</span>
            </div>
          </div>

          <!-- Three Dimensions Status Breakdown -->
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:8px;margin-bottom:12px;background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:10px">
            <div>
              <div style="font-size:11px;color:#64748b;font-weight:600">Base Service</div>
              <div style="font-size:12px;font-weight:700;color:#1e293b;margin:2px 0">${escapeHTML(serviceDim.name || 'Base Service')}</div>
              <span class="status-pill ${serviceDim.badgeClass}" style="font-size:10px;padding:2px 6px">${escapeHTML(serviceDim.label || 'Verified')}</span>
              ${renderEvidenceBadge(serviceDim)}
            </div>
            <div>
              <div style="font-size:11px;color:#64748b;font-weight:600">Processing Route</div>
              <div style="font-size:12px;font-weight:700;color:#1e293b;margin:2px 0">${escapeHTML(urgencyDim.name || 'Processing Route')}</div>
              <span class="status-pill ${urgencyDim.badgeClass}" style="font-size:10px;padding:2px 6px">${escapeHTML(urgencyDim.label || 'Verified')}</span>
              ${renderEvidenceBadge(urgencyDim)}
            </div>
            <div>
              <div style="font-size:11px;color:#64748b;font-weight:600">Lodgement Channel</div>
              <div style="font-size:12px;font-weight:700;color:#1e293b;margin:2px 0">${escapeHTML(channelDim.name || 'Lodgement Channel')}</div>
              <span class="status-pill ${channelDim.badgeClass}" style="font-size:10px;padding:2px 6px">${escapeHTML(channelDim.label || 'Verified')}</span>
              ${renderEvidenceBadge(channelDim)}
            </div>
          </div>

          <p style="margin:0;font-size:13px;color:#475569;line-height:1.5">${escapeHTML(sc.summary)}</p>
          ${supportedHtml}
          ${missingHtml}
          <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #cbd5e1;font-size:11px;color:#64748b">
            <em>Readiness score reflects document preparation completeness only; it does not calculate, indicate, or guarantee passport issuance or approval.</em>
          </div>
        </div>
      `;
    }

    // Flags section
    const flagsContainer = document.getElementById('resFlagsContainer');
    if (result.flags.length === 0) {
      flagsContainer.innerHTML = `
        <div class="resultscore" style="background:#eaf6ef;border:1px solid #b7dfc8">
          <div class="scoreicon" style="background:#c6e9d6;color:#18683f">✓</div>
          <div>
            <strong style="color:#14532d">No Critical Inconsistencies Reported</strong>
            <small style="color:#4a6b57">Your personal particulars appear consistent across records. Review the required document checklist below.</small>
          </div>
        </div>
      `;
    } else {
      flagsContainer.innerHTML = result.flags.map(f => `
        <div class="notice" style="border-left:4px solid ${f.severity === 'critical' ? '#dc2626' : '#d97706'};background:${f.severity === 'critical' ? '#fef2f2' : '#fffbeb'};color:#451a03;margin-bottom:12px">
          <strong style="color:${f.severity === 'critical' ? '#991b1b' : '#b45309'};font-size:13px">${escapeHTML(f.title)}</strong>
          <p style="margin:5px 0;font-size:12px">${escapeHTML(f.message)}</p>
          <div style="font-weight:700;font-size:11px;color:${f.severity === 'critical' ? '#b91c1c' : '#92400e'}">Recommended Action: ${escapeHTML(f.action)}</div>
        </div>
      `).join('');
    }

    // Official Source Card
    const sourceCard = document.getElementById('resOfficialSourceCard');
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

    // Checklist Items
    renderChecklistItems(result.checklist);

    resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderChecklistItems(items) {
    const list = document.getElementById('resChecklistItems');
    if (!list) return;

    if (!list.dataset.hasListener) {
      list.dataset.hasListener = 'true';
      list.addEventListener('change', (e) => {
        if (e.target && e.target.dataset && e.target.dataset.checkId) {
          toggleCheck(e.target.dataset.checkId);
        }
      });
    }

    list.innerHTML = items.map((item, idx) => {
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
              ${item.mandatory ? '<span class="status-pill status-mandatory">MANDATORY</span>' : '<span class="status-pill status-optional">CONDITIONAL</span>'}
            </div>
            <p style="margin:4px 0 0;font-size:12px;color:#64748b;line-height:1.5">${escapeHTML(item.details)}</p>
          </div>
        </li>
      `;
    }).join('');
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

  // Interactive Tools Listeners
  function setupToolListeners() {
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
    const map = {
      infant: "Infant / Young Child (under 5/6)",
      minor: "Child / Minor (under 16/18)",
      adult: "Adult (18 to 59)",
      senior: "Senior Citizen (60+)"
    };
    return map[a] || a;
  }

  function formatAgeBandName(band) {
    const map = {
      child_under_12: "Child Under 12",
      minor_12_to_16: "Minor / Youth (12–16)",
      age_17: "Age 17",
      adult_18_to_59: "Adult (18–59)",
      senior_60_plus: "Senior Citizen (60+)"
    };
    return map[band] || band;
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

  // Expose global controller
  window.PassportApp = {
    init,
    toggleCheck,
    selectCountryFromDirectory,
    openGuideModal,
    openInformationalModal,
    getDirectoryCounts,
    updateDirectoryFilterCounts,
    getCountryByQuery
  };

  // Run on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
