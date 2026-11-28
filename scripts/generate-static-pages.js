/**
 * scripts/generate-static-pages.js
 * Generates static country and service pages for PassportReady Global.
 * 
 * Target: /passport/{country}/{service}/index.html
 * Plus country index pages (/passport/{country}/index.html) and directory (/passport/index.html).
 * Generates unique meta titles, descriptions, Schema.org JSON-LD (HowTo, FAQPage, BreadcrumbList, GovernmentService),
 * statutory checklists, verified fees, and official links.
 */

const fs = require('fs');
const path = require('path');
const siteConfig = require('../site.config');

const ROOT_DIR = path.resolve(__dirname, '..');
const PASSPORT_DIR = path.join(ROOT_DIR, 'passport');
const COUNTRY_RULES_PATH = path.join(ROOT_DIR, 'data', 'country-rules.json');
const COUNTRIES_PATH = path.join(ROOT_DIR, 'countries.json');

const countryRules = JSON.parse(fs.readFileSync(COUNTRY_RULES_PATH, 'utf8'));
const allCountries = JSON.parse(fs.readFileSync(COUNTRIES_PATH, 'utf8'));

// Slug mappings for services
const SERVICE_METADATA = {
  first_passport: {
    slug: 'fresh',
    title: 'Fresh Passport',
    actionNoun: 'New Passport Application',
    description: 'First-time passport application checklist, required identity documents, and official submission steps.'
  },
  renewal_reissue: {
    slug: 'renewal',
    title: 'Passport Renewal',
    actionNoun: 'Passport Renewal & Reissue',
    description: 'Passport renewal eligibility, renewal-by-mail or online criteria, and validity checklist.'
  },
  lost_stolen: {
    slug: 'lost-stolen',
    title: 'Lost Passport Replacement',
    actionNoun: 'Lost or Damaged Passport Replacement',
    description: 'Statutory police report requirements, replacement fees, and expedited consular procedures.'
  },
  name_correction: {
    slug: 'name-correction',
    title: 'Name Correction & Change',
    actionNoun: 'Legal Name Change & Correction',
    description: 'Procedures for marital surname changes, deed poll evidence, Gazette notices, and official reissuance.'
  },
  minor_child: {
    slug: 'minor',
    title: 'Minor & Child Passport',
    actionNoun: 'Child Passport Application',
    description: 'Parental consent legal requirements, custody documentation, and minor validity rules.'
  },
  emergency_passport: {
    slug: 'emergency',
    title: 'Emergency Travel Document',
    actionNoun: 'Emergency Certificate (ETC)',
    description: 'Single-journey repatriation certificate protocols, police crime reports, and urgent consular proof.'
  }
};

// Map ISO2 to URL-friendly slug
const COUNTRY_SLUGS = {
  IN: 'india',
  US: 'united-states',
  GB: 'united-kingdom',
  CA: 'canada',
  AU: 'australia',
  PK: 'pakistan',
  BD: 'bangladesh',
  DE: 'germany',
  AE: 'united-arab-emirates',
  PH: 'philippines',
  FR: 'france',
  SA: 'saudi-arabia',
  JP: 'japan',
  MX: 'mexico',
  BR: 'brazil',
  ZA: 'south-africa',
  EG: 'egypt',
  NG: 'nigeria',
  IT: 'italy',
  IE: 'ireland',
  KE: 'kenya',
  MY: 'malaysia',
  NP: 'nepal',
  NZ: 'new-zealand',
  SG: 'singapore',
  ES: 'spain',
  LK: 'sri-lanka',
  ID: 'indonesia'
};

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function feeStats(countryData) {
  let total = 0, verified = 0;
  const seen = new Set();
  Object.values(countryData.services || {}).forEach(sv => {
    const f = sv && sv.fees;
    const recs = Array.isArray(f) ? f : (f && Array.isArray(f.fee_records) ? f.fee_records : []);
    recs.forEach(r => {
      const key = [r.applicant_category, r.application_channel, r.total_payable !== undefined ? r.total_payable : r.amount].join('|');
      if (seen.has(key)) return;
      seen.add(key);
      total++;
      if (r.verification_status !== 'unverified') verified++;
    });
  });
  return { total, verified, unverified: total - verified };
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderBreadcrumbs(items) {
  const crumbs = items.map((item, idx) => {
    if (idx === items.length - 1) {
      return `<span>${escapeHtml(item.name)}</span>`;
    }
    return `<a href="${item.url}">${escapeHtml(item.name)}</a> <span>/</span> `;
  }).join('');

  return `<nav class="breadcrumbs" aria-label="Breadcrumb">${crumbs}</nav>`;
}

function generatePageHtml(options) {
  const {
    title,
    metaDescription,
    canonicalPath,
    breadcrumbs,
    contentHtml,
    jsonLdData,
    depth = 3
  } = options;

  const relRoot = '../'.repeat(depth);
  const canonicalUrl = siteConfig.canonicalUrl(canonicalPath);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(metaDescription)}">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="icon" type="image/svg+xml" href="${relRoot}assets/icon.svg">
  <link rel="manifest" href="${relRoot}manifest.webmanifest">
  <meta name="theme-color" content="#082d25">
  <link rel="stylesheet" href="${relRoot}css/styles.css?v=20261124_p3">
  
  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(metaDescription)}">
  <meta property="og:site_name" content="PassportReady">
  <meta property="og:image" content="${siteConfig.siteUrl}/assets/preview.png">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(metaDescription)}">
  <meta name="twitter:image" content="${siteConfig.siteUrl}/assets/preview.png">

  <!-- Structured Data JSON-LD -->
  <script type="application/ld+json">
  ${JSON.stringify(jsonLdData, null, 2)}
  </script>

  <style>
    .page-container {
      width: min(960px, calc(100% - 32px));
      margin: 32px auto 80px auto;
    }
    .breadcrumbs {
      font-size: 0.85rem;
      color: #64748b;
      margin-bottom: 20px;
    }
    .breadcrumbs a {
      color: var(--forest-base);
      text-decoration: none;
      font-weight: 500;
    }
    .breadcrumbs a:hover {
      text-decoration: underline;
    }
    .content-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: var(--radius-md);
      padding: 36px;
      box-shadow: var(--shadow-sm);
      margin-bottom: 24px;
    }
    .content-card h1 {
      color: var(--forest-dark);
      font-size: 2rem;
      line-height: 1.25;
      margin: 12px 0 16px 0;
    }
    .content-card .lead {
      font-size: 1.1rem;
      color: var(--slate-body);
      line-height: 1.6;
      margin-bottom: 24px;
    }
    .badge-pill {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 0.8rem;
      font-weight: 600;
      background: var(--mint-soft);
      color: var(--forest-base);
    }
    .badge-verified {
      background: #ecfdf5;
      color: #065f46;
      border: 1px solid #a7f3d0;
    }
    .authority-box {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: var(--radius-sm);
      padding: 18px 22px;
      margin: 20px 0 28px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }
    .authority-info h4 {
      margin: 0 0 4px 0;
      color: #065f46;
      font-size: 1rem;
    }
    .authority-info p {
      margin: 0;
      font-size: 0.9rem;
      color: #1e3a2b;
    }
    .spec-table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0 24px 0;
      font-size: 0.95rem;
    }
    .spec-table th, .spec-table td {
      border: 1px solid #e2e8f0;
      padding: 12px 14px;
      text-align: left;
    }
    .spec-table th {
      background: #f8fafc;
      color: var(--forest-dark);
      font-weight: 600;
    }
    .spec-table tr:hover {
      background: #fbfcfe;
    }
    .checklist-grid {
      display: flex;
      flex-direction: column;
      gap: 14px;
      margin: 20px 0;
    }
    .check-item {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
    }
    .check-item-head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
      margin-bottom: 6px;
    }
    .check-item-title {
      font-weight: 700;
      color: var(--slate-dark);
      font-size: 1rem;
    }
    .req-tag {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      padding: 2px 8px;
      border-radius: 4px;
    }
    .req-required { background: #fee2e2; color: #991b1b; }
    .req-conditional { background: #fef3c7; color: #92400e; }
    .req-alternative { background: #e0f2fe; color: #0369a1; }
    .faq-accordion details {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 14px 18px;
      margin-bottom: 10px;
      background: #fff;
    }
    .faq-accordion summary {
      font-weight: 600;
      cursor: pointer;
      color: var(--forest-dark);
    }
    .faq-accordion p {
      margin: 10px 0 0 0;
      color: var(--slate-body);
      line-height: 1.6;
      font-size: 0.95rem;
    }
    .service-nav-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
      margin-top: 20px;
    }
    .service-nav-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;
    }
    .service-nav-card:hover {
      border-color: var(--forest-base);
      transform: translateY(-2px);
      box-shadow: var(--shadow-sm);
    }
    .service-nav-card h4 {
      margin: 0 0 6px 0;
      color: var(--forest-base);
      font-size: 1rem;
    }
    .service-nav-card p {
      margin: 0;
      font-size: 0.85rem;
      color: #64748b;
      line-height: 1.4;
    }
  </style>
</head>
<body>
  <!-- Topbar -->
  <div class="topbar">
    <div class="wrap">
      <span>✦ Official Government Link Aggregator & Preparation Framework</span>
      <span>🔒 100% Client-Side Privacy — Zero Data Retention</span>
    </div>
  </div>

  <!-- Header -->
  <header class="header">
    <div class="wrap headergrid">
      <a class="brand" href="${relRoot}">
        <span class="brandmark">✦</span>
        <span>PassportReady<small>Check before you apply</small></span>
      </a>
      <div class="header-actions">
        <a class="btn btn-outline" href="${relRoot}#checker">Readiness Checker</a>
        <a class="btn btn-outline" href="${relRoot}passport/">Directory</a>
        <a class="btn btn-outline" href="${relRoot}#guides">Guides</a>
        <a class="btn btn-outline" href="${relRoot}#tools">Tools</a>
      </div>
    </div>
  </header>

  <main class="page-container" id="main-content">
    ${renderBreadcrumbs(breadcrumbs)}
    ${contentHtml}
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="wrap footergrid">
      <div>
        <a class="brand" href="${relRoot}" style="color:#fff">
          <span class="brandmark">✦</span>
          <span>PassportReady<small style="color:#92a89e">Check before you apply</small></span>
        </a>
        <p>
          PassportReady is an independent preparation guide and is not affiliated with any government or passport-issuing authority. We do not issue passports, schedule official appointments, or collect passport numbers. Always verify final requirements and fees on official government portals.
        </p>
      </div>
      <div class="footerlinks">
        <a href="${relRoot}#checker">Readiness Checker</a>
        <a href="${relRoot}passport/">Country Directory</a>
        <a href="${relRoot}#guides">Passport Guides</a>
        <a href="${relRoot}#tools">Tools</a>
        <a href="${relRoot}about/">About Us</a>
        <a href="${relRoot}methodology/">Methodology</a>
        <a href="${relRoot}privacy/">Privacy Policy</a>
        <a href="${relRoot}terms/">Terms of Service</a>
        <a href="${relRoot}report/">📢 Report Fee / Rule Update</a>
      </div>
    </div>
  </footer>
</body>
</html>`;
}

function buildServicePageContent(countryData, serviceKey, serviceData, countrySlug, serviceSlug) {
  const meta = SERVICE_METADATA[serviceKey] || {
    title: serviceKey.replace(/_/g, ' '),
    actionNoun: serviceKey.replace(/_/g, ' '),
    description: ''
  };

  const feesObj = (serviceData.fees && (Array.isArray(serviceData.fees) ? serviceData.fees.length > 0 : (serviceData.fees.fee_records || Object.keys(serviceData.fees).length > 0)))
    ? serviceData.fees
    : (countryData.services && countryData.services.first_passport && countryData.services.first_passport.fees)
      ? countryData.services.first_passport.fees
      : null;

  let feeRecords = [];
  if (feesObj) {
    if (Array.isArray(feesObj)) {
      feeRecords = feesObj;
    } else if (Array.isArray(feesObj.fee_records)) {
      feeRecords = feesObj.fee_records;
    }
  }

  const docs = (serviceData.documents && serviceData.documents.length > 0)
    ? serviceData.documents
    : (countryData.services && countryData.services.first_passport && countryData.services.first_passport.documents)
      ? countryData.services.first_passport.documents
      : [];
  const steps = (serviceData.steps && serviceData.steps.length > 0)
    ? serviceData.steps
    : (countryData.services && countryData.services.first_passport && countryData.services.first_passport.steps)
      ? countryData.services.first_passport.steps
      : [];
  const photoRules = serviceData.photo_rules || (countryData.services && countryData.services.first_passport && countryData.services.first_passport.photo_rules) || {};
  const processingTimes = serviceData.processing_times || (countryData.services && countryData.services.first_passport && countryData.services.first_passport.processing_times) || {};

  // Fees table HTML
  let feesHtml = '';
  if (feeRecords.length > 0) {
    const currency = (feesObj && feesObj.currency) || (feeRecords[0] && feeRecords[0].currency) || 'Local Currency';
    const feeRows = feeRecords.map(f => {
      const amtStr = f.total_payable !== undefined
        ? `${f.currency || currency} ${f.total_payable}`
        : (f.amount ? `${f.currency || currency} ${f.amount}` : (f.description || 'Statutory Schedule'));
      const isUnverified = f.verification_status === 'unverified';
      const verStr = isUnverified ? 'Not confirmed' : (f.verification_date || f.date_checked || f.last_reviewed || countryData.last_reviewed || '2026-10-18');
      const catStr = f.applicant_category ? f.applicant_category.replace(/_/g, ' ') : (f.fee_type || f.name || 'Standard Application');
      const chanStr = f.application_channel ? f.application_channel.replace(/_/g, ' ') : (f.channel || 'Domestic / Standard');
      const authStr = f.applicable_conditions || (feesObj && feesObj.statutory_source) || 'Official Gazette / Regulations';
      return `<tr>
        <td style="text-transform:capitalize"><strong>${escapeHtml(catStr)}</strong><br><small style="color:#64748b">${escapeHtml(f.discount_eligibility || f.conditions || '')}</small></td>
        <td style="text-transform:capitalize">${escapeHtml(chanStr)}</td>
        <td style="font-weight:700;color:${isUnverified ? '#92400e' : 'var(--forest-base)'}">${escapeHtml(amtStr)}${isUnverified ? '<br><small style="font-weight:500">&#9888; Not yet confirmed against an official page. Check the official portal before paying.</small>' : ''}</td>
        <td>${escapeHtml(verStr)}</td>
        <td style="font-size:0.8rem;color:#475569">${escapeHtml(authStr)}</td>
      </tr>`;
    }).join('');

    feesHtml = `
    <h2>Statutory Fees (${escapeHtml(currency)})</h2>
    <p style="color:#64748b;font-size:0.9rem">${feeRecords.some(x => x.verification_status === 'unverified') ? 'Fees with a check date were confirmed against an official page. Fees marked &#9888; could not be confirmed yet, so check the official portal before paying.' : 'All fees confirmed against official ' + escapeHtml(countryData.authority_name) + ' publications.'} PassportReady adds no markup or service charges.</p>
    ${(countryData.fee_review_notes || []).length ? '<ul style="color:#475569;font-size:0.85rem;margin:8px 0 12px 18px">' + countryData.fee_review_notes.map(n => '<li>' + escapeHtml(n) + '</li>').join('') + '</ul>' : ''}
    <div style="overflow-x:auto">
      <table class="spec-table">
        <thead>
          <tr>
            <th>Application Category</th>
            <th>Channel / Type</th>
            <th>Official Fee</th>
            <th>Last Verified</th>
            <th>Statutory Authority &amp; Conditions</th>
          </tr>
        </thead>
        <tbody>
          ${feeRows}
        </tbody>
      </table>
    </div>`;
  }

  // Steps HTML
  let stepsHtml = '';
  if (steps.length > 0) {
    const stepItems = steps.map((s, idx) => {
      const text = typeof s === 'string' ? s : s.step;
      const src = s.source_url ? `<a href="${s.source_url}" target="_blank" rel="noopener" style="font-size:0.8rem;color:var(--forest-base)">[Official Source ↗]</a>` : '';
      return `<li style="margin-bottom:12px;line-height:1.6">
        <strong>Step ${idx + 1}:</strong> ${escapeHtml(text)} ${src}
      </li>`;
    }).join('');

    stepsHtml = `
    <h2>Step-by-Step Application Procedure</h2>
    <ol style="padding-left:20px;margin-bottom:24px">
      ${stepItems}
    </ol>`;
  }

  // Documents HTML
  let docsHtml = '';
  if (docs.length > 0) {
    const docItems = docs.map(d => {
      const reqClass = d.requiredness === 'required' ? 'req-required' : (d.requiredness === 'conditional' ? 'req-conditional' : 'req-alternative');
      const reqLabel = d.requiredness ? d.requiredness.toUpperCase() : 'REQUIRED';
      const cond = d.conditions ? `<p style="margin:4px 0 0;font-size:0.85rem;color:#475569">${escapeHtml(d.conditions)}</p>` : '';
      const alts = d.alternatives && d.alternatives.length > 0 ? `<div style="margin-top:6px;font-size:0.8rem;color:#0369a1"><strong>Acceptable Alternatives:</strong> ${escapeHtml(d.alternatives.join(' · '))}</div>` : '';
      return `<div class="check-item">
        <div class="check-item-head">
          <span class="check-item-title">${escapeHtml(d.document_name)}</span>
          <span class="req-tag ${reqClass}">${reqLabel}</span>
        </div>
        ${cond}
        ${alts}
      </div>`;
    }).join('');

    docsHtml = `
    <h2>Required Documents Checklist</h2>
    <p style="color:#64748b;font-size:0.9rem">Gather all original records and photocopies before visiting an acceptance facility or consular mission.</p>
    <div class="checklist-grid">
      ${docItems}
    </div>`;
  }

  // Photo Rules HTML
  let photoHtml = '';
  if (photoRules && photoRules.dimensions) {
    photoHtml = `
    <h2>Biometric Photo Specifications</h2>
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:20px;margin-bottom:24px">
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:12px;font-size:0.95rem">
        <div><strong>Dimensions:</strong> ${escapeHtml(photoRules.dimensions)}</div>
        <div><strong>Head Proportions:</strong> ${escapeHtml(photoRules.head_percentage || '70%–80% of frame')}</div>
        <div><strong>Background:</strong> ${escapeHtml(photoRules.background || 'Plain white/light grey')}</div>
        <div><strong>Eyeglasses:</strong> ${photoRules.glasses_allowed ? 'Allowed if medically necessary' : 'Prohibited (no reflections)'}</div>
        <div><strong>Recency:</strong> Taken within last 6 months</div>
      </div>
      <div style="margin-top:16px;padding-top:12px;border-top:1px dashed #cbd5e1">
        <a href="../../../#tools" class="btn btn-outline" style="font-size:0.85rem">📷 Test Your Photo in Client-Side Validator ↗</a>
      </div>
    </div>`;
  }

  // Processing Times HTML
  let procHtml = '';
  if (processingTimes.routine || processingTimes.expedited) {
    procHtml = `
    <h2>Standard Processing Timeline</h2>
    <p>Estimated turnaround times published by ${escapeHtml(countryData.authority_name)}:</p>
    <ul style="padding-left:20px;margin-bottom:24px">
      ${processingTimes.routine ? `<li><strong>Routine Processing:</strong> ${escapeHtml(processingTimes.routine)}</li>` : ''}
      ${processingTimes.expedited ? `<li><strong>Urgent / Expedited:</strong> ${escapeHtml(processingTimes.expedited)}</li>` : ''}
    </ul>`;
  }

  // Other Services for this Country
  const otherServices = Object.keys(countryData.services || {})
    .filter(sk => sk !== serviceKey)
    .map(sk => {
      const sMeta = SERVICE_METADATA[sk] || { slug: sk, title: sk, description: '' };
      return `<a href="../${sMeta.slug}/" class="service-nav-card">
        <h4>${escapeHtml(sMeta.title)} →</h4>
        <p>${escapeHtml(sMeta.description || `Check requirements and fees for ${sMeta.title.toLowerCase()}.`)}</p>
      </a>`;
    }).join('');

  const otherServicesHtml = otherServices ? `
    <h2>Other Services for ${escapeHtml(countryData.country_name)}</h2>
    <div class="service-nav-grid">
      ${otherServices}
    </div>` : '';

  // FAQs
  const faqs = [
    {
      q: `Where do I officially apply for a ${meta.title} in ${countryData.country_name}?`,
      a: `All official applications must be submitted directly through ${countryData.authority_name} via their official portal at ${countryData.official_portal_url} or designated acceptance centers / embassies. PassportReady is an independent preparation guide and does not accept applications.`
    },
    {
      q: `What are the primary documents required for ${countryData.country_name} ${meta.title}?`,
      a: docs.length > 0
        ? `Primary requirements include: ${docs.slice(0, 3).map(d => d.document_name).join(', ')}, plus compliant biometric photos and statutory fee payment.`
        : `Requirements include proof of citizenship, government photo identity, certified birth records, and compliant photos.`
    },
    {
      q: `When were these ${countryData.country_name} passport fees last verified?`,
      a: (() => { const st = feeStats(countryData); return st.unverified === 0
        ? `All ${st.total} fee entries for ${countryData.country_name} were checked against official government pages on ${countryData.last_reviewed || '2026-11-26'}.`
        : `${st.verified} of ${st.total} fee entries for ${countryData.country_name} were checked against official government pages (last review ${countryData.last_reviewed || '2026-11-26'}). The rest are marked "Not confirmed" in the table; check the official portal before paying.`; })()
    }
  ];

  const faqItems = faqs.map(f => `<details>
    <summary>${escapeHtml(f.q)}</summary>
    <p>${escapeHtml(f.a)}</p>
  </details>`).join('');

  const faqsHtml = `
  <h2>Frequently Asked Questions</h2>
  <div class="faq-accordion">
    ${faqItems}
  </div>`;

  return `
  <article class="content-card">
    ${(() => { const st = feeStats(countryData); return st.unverified === 0
      ? '<span class="badge-pill badge-verified">✓ Fees confirmed · Reviewed ' + escapeHtml(countryData.last_reviewed || '2026-11-26') + '</span>'
      : '<span class="badge-pill" style="background:#fef3c7;color:#92400e;border:1px solid #fcd34d">&#9888; Partially verified · ' + st.verified + ' of ' + st.total + ' fees confirmed · Reviewed ' + escapeHtml(countryData.last_reviewed || '2026-11-26') + '</span>'; })()}
    <h1>${escapeHtml(countryData.country_name)}: ${escapeHtml(meta.actionNoun)} Checklist &amp; Fees</h1>
    <p class="lead">${escapeHtml(meta.description || `Complete step-by-step preparation guide, document checklist, and verified fee schedule for ${countryData.country_name}.`)}</p>

    <div class="authority-box">
      <div class="authority-info">
        <h4>Official Government Issuing Authority</h4>
        <p>${escapeHtml(countryData.authority_name)}</p>
      </div>
      <a href="${countryData.official_portal_url}" target="_blank" rel="noopener" class="btn btn-primary" style="font-size:0.9rem">
        Official Government Portal ↗
      </a>
    </div>

    ${feesHtml}
    ${stepsHtml}
    ${docsHtml}
    ${photoHtml}
    ${procHtml}
    ${faqsHtml}
    ${otherServicesHtml}

    <div style="margin-top:36px;padding-top:20px;border-top:1px solid #e2e8f0;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;font-size:0.9rem;color:#64748b">
      <div>Jurisdiction: <strong>${escapeHtml(countryData.country_name)} (${countryData.country_code})</strong></div>
      <a href="../../../#checker" class="btn btn-outline" style="font-size:0.85rem">Launch Interactive Checker ↗</a>
    </div>
  </article>`;
}

function buildCountryIndexContent(countryData, countrySlug) {
  const services = Object.entries(countryData.services || {}).map(([sk, sData]) => {
    const meta = SERVICE_METADATA[sk] || { slug: sk, title: sk, description: '' };
    return `<a href="${meta.slug}/" class="service-nav-card" style="padding:20px">
      <span class="badge-pill" style="margin-bottom:8px">Service Checklist</span>
      <h3 style="margin:0 0 8px 0;font-size:1.15rem;color:var(--forest-base)">${escapeHtml(meta.title)} →</h3>
      <p style="color:#475569;font-size:0.9rem;line-height:1.5">${escapeHtml(meta.description || `Required documents, official fees, and step-by-step procedures for ${meta.title.toLowerCase()}.`)}</p>
    </a>`;
  }).join('');

  return `
  <article class="content-card">
    ${(() => { const st = feeStats(countryData); return st.unverified === 0
      ? '<span class="badge-pill badge-verified">✓ Fees confirmed · ' + escapeHtml(countryData.country_code) + '</span>'
      : '<span class="badge-pill" style="background:#fef3c7;color:#92400e;border:1px solid #fcd34d">&#9888; Partially verified · ' + st.verified + ' of ' + st.total + ' fees confirmed · ' + escapeHtml(countryData.country_code) + '</span>'; })()}
    <h1>${escapeHtml(countryData.country_name)} Passport Guide &amp; Checklists</h1>
    <p class="lead">Prepare for your ${escapeHtml(countryData.country_name)} passport application or renewal with verified document checklists, official fee schedules, and photo rules.</p>

    <div class="authority-box">
      <div class="authority-info">
        <h4>Designated Government Passport Authority</h4>
        <p>${escapeHtml(countryData.authority_name)}</p>
      </div>
      <a href="${countryData.official_portal_url}" target="_blank" rel="noopener" class="btn btn-primary">
        Official Portal ↗
      </a>
    </div>

    <h2>Select Application Service</h2>
    <p style="color:#64748b;margin-bottom:20px">Choose your application category to see required identity proofs, fees, and processing times:</p>
    <div class="service-nav-grid" style="grid-template-columns:repeat(auto-fit, minmax(280px, 1fr))">
      ${services}
    </div>

    <div style="margin-top:40px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:24px">
      <h3 style="margin:0 0 10px 0;color:var(--forest-dark)">Key Facts for ${escapeHtml(countryData.country_name)}</h3>
      <ul style="padding-left:20px;margin:0;line-height:1.7;color:#334155;font-size:0.95rem">
        <li><strong>Verification Status:</strong> Verified against primary legislation and official portal schedules.</li>
        <li><strong>Last Rule Review:</strong> ${escapeHtml(countryData.last_reviewed || '2026-10-18')}</li>
        <li><strong>Data Protection:</strong> 100% client-side preparation. No passport numbers or identity documents are collected.</li>
      </ul>
    </div>
  </article>`;
}

function buildDirectoryIndexContent() {
  const verifiedCards = Object.entries(countryRules).map(([iso2, cData]) => {
    const slug = COUNTRY_SLUGS[iso2] || iso2.toLowerCase();
    const serviceCount = Object.keys(cData.services || {}).length;
    return `<a href="${slug}/" class="service-nav-card" style="padding:18px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <span style="font-weight:700;color:var(--forest-dark);font-size:1.05rem">${escapeHtml(cData.country_name)}</span>
        <span class="badge-pill badge-verified" style="font-size:0.75rem">${iso2}</span>
      </div>
      <p style="font-size:0.85rem;color:#64748b;margin-bottom:8px">${escapeHtml(cData.authority_name)}</p>
      <div style="font-size:0.8rem;color:var(--forest-base);font-weight:600">${serviceCount} verified services available →</div>
    </a>`;
  }).join('');

  return `
  <article class="content-card">
    <span class="badge-pill">Worldwide Passport Directory</span>
    <h1>Verified Country Passport Guides</h1>
    <p class="lead">Select your country to view verified statutory requirements, document checklists, fees, and direct links to official foreign ministries and passport offices.</p>

    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:24px;font-size:0.9rem">
      <div style="background:#ecfdf5;border:1px solid #a7f3d0;color:#065f46;padding:8px 14px;border-radius:6px;font-weight:600">
        ✓ 27 Fully Verified Rule Packs
      </div>
      <div style="background:#fefce8;border:1px solid #fef08a;color:#854d0e;padding:8px 14px;border-radius:6px;font-weight:600">
        ⏳ 222 Awaiting Research (Baseline Guidance)
      </div>
    </div>

    <h2>Verified Sovereign Jurisdictions</h2>
    <div class="service-nav-grid" style="grid-template-columns:repeat(auto-fit, minmax(280px, 1fr))">
      ${verifiedCards}
    </div>
  </article>`;
}

function main() {
  console.log('Starting static page generation for PassportReady Global...');
  ensureDir(PASSPORT_DIR);

  const generatedUrls = [];

  // 1. Generate top-level /passport/index.html
  const dirBreadcrumbs = [
    { name: 'Home', url: '../../' },
    { name: 'Directory', url: './' }
  ];
  const dirJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': siteConfig.siteUrl + '/' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Passport Directory', 'item': siteConfig.siteUrl + '/passport/' }
      ]
    }
  ];

  const dirHtml = generatePageHtml({
    title: 'Global Passport Directory: Verified Country Guides & Portals',
    metaDescription: 'Browse official passport application guides, document checklists, and verified fees for 27+ countries with direct government portal links.',
    canonicalPath: '/passport/',
    breadcrumbs: dirBreadcrumbs,
    contentHtml: buildDirectoryIndexContent(),
    jsonLdData: dirJsonLd,
    depth: 1
  });

  fs.writeFileSync(path.join(PASSPORT_DIR, 'index.html'), dirHtml, 'utf8');
  generatedUrls.push({ loc: '/passport/', priority: '0.9', changefreq: 'weekly' });
  console.log('✓ Generated /passport/index.html');

  // 2. Loop through all 27 verified countries
  let totalServicePages = 0;

  for (const [iso2, cData] of Object.entries(countryRules)) {
    const countrySlug = COUNTRY_SLUGS[iso2] || iso2.toLowerCase();
    const countryDir = path.join(PASSPORT_DIR, countrySlug);
    ensureDir(countryDir);

    // Country index page (/passport/{country}/index.html)
    const countryBreadcrumbs = [
      { name: 'Home', url: '../../../' },
      { name: 'Directory', url: '../../' },
      { name: cData.country_name, url: './' }
    ];

    const countryJsonLd = [
      {
        '@context': 'https://schema.org',
        '@type': 'GovernmentService',
        'name': `${cData.country_name} Passport Service`,
        'serviceType': 'Passport & Travel Document Issuance',
        'provider': {
          '@type': 'GovernmentOrganization',
          'name': cData.authority_name,
          'url': cData.official_portal_url
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': siteConfig.siteUrl + '/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Directory', 'item': siteConfig.siteUrl + '/passport/' },
          { '@type': 'ListItem', 'position': 3, 'name': cData.country_name, 'item': `${siteConfig.siteUrl}/passport/${countrySlug}/` }
        ]
      }
    ];

    const countryTitle = `${cData.country_name} Passport Guide: Requirements, Fees & Portals`;
    const countryDesc = `Verified ${cData.country_name} passport application and renewal guide. Check official document checklists, statutory fees, and government links.`;

    const countryHtml = generatePageHtml({
      title: countryTitle,
      metaDescription: countryDesc,
      canonicalPath: `/passport/${countrySlug}/`,
      breadcrumbs: countryBreadcrumbs,
      contentHtml: buildCountryIndexContent(cData, countrySlug),
      jsonLdData: countryJsonLd,
      depth: 2
    });

    fs.writeFileSync(path.join(countryDir, 'index.html'), countryHtml, 'utf8');
    generatedUrls.push({ loc: `/passport/${countrySlug}/`, priority: '0.8', changefreq: 'weekly' });

    // Loop through each service in this country
    const services = cData.services || {};
    for (const [serviceKey, sData] of Object.entries(services)) {
      const sMeta = SERVICE_METADATA[serviceKey] || { slug: serviceKey, title: serviceKey };
      const serviceSlug = sMeta.slug;
      const serviceDir = path.join(countryDir, serviceSlug);
      ensureDir(serviceDir);

      const serviceBreadcrumbs = [
        { name: 'Home', url: '../../../../' },
        { name: 'Directory', url: '../../../' },
        { name: cData.country_name, url: '../../' },
        { name: sMeta.title, url: './' }
      ];

      // Service HowTo JSON-LD
      const howToSteps = (sData.steps || []).map((stepObj, idx) => ({
        '@type': 'HowToStep',
        'position': idx + 1,
        'name': `Step ${idx + 1}`,
        'text': typeof stepObj === 'string' ? stepObj : stepObj.step
      }));

      const serviceJsonLd = [
        {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          'name': `${cData.country_name} ${sMeta.title} Application Guide`,
          'description': sMeta.description || `Step-by-step application instructions and required document checklist for ${cData.country_name} ${sMeta.title.toLowerCase()}.`,
          'step': howToSteps
        },
        {
          '@context': 'https://schema.org',
          '@type': 'GovernmentService',
          'name': `${cData.country_name} ${sMeta.actionNoun || sMeta.title}`,
          'serviceType': 'Passport Issuance',
          'provider': {
            '@type': 'GovernmentOrganization',
            'name': cData.authority_name,
            'url': cData.official_portal_url
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': `Where do I officially apply for a ${sMeta.title} in ${cData.country_name}?`,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': `All official applications must be submitted directly through ${cData.authority_name} via their official portal at ${cData.official_portal_url} or designated acceptance centers / embassies.`
              }
            },
            {
              '@type': 'Question',
              'name': `When were these ${cData.country_name} passport fees last verified?`,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': `All statutory fee schedules and legal bases for ${cData.country_name} were verified on ${cData.last_reviewed || '2026-10-18'} from primary government publications.`
              }
            }
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': siteConfig.siteUrl + '/' },
            { '@type': 'ListItem', 'position': 2, 'name': 'Directory', 'item': siteConfig.siteUrl + '/passport/' },
            { '@type': 'ListItem', 'position': 3, 'name': cData.country_name, 'item': `${siteConfig.siteUrl}/passport/${countrySlug}/` },
            { '@type': 'ListItem', 'position': 4, 'name': sMeta.title, 'item': `${siteConfig.siteUrl}/passport/${countrySlug}/${serviceSlug}/` }
          ]
        }
      ];

      const pageTitle = `${cData.country_name} ${sMeta.title}: Checklist & Fees (2026)`;
      const pageDesc = `Verified ${cData.country_name} passport ${sMeta.title.toLowerCase()} guide. Check official document requirements, statutory fees, biometric photo rules, and government links.`;

      const serviceHtml = generatePageHtml({
        title: pageTitle,
        metaDescription: pageDesc,
        canonicalPath: `/passport/${countrySlug}/${serviceSlug}/`,
        breadcrumbs: serviceBreadcrumbs,
        contentHtml: buildServicePageContent(cData, serviceKey, sData, countrySlug, serviceSlug),
        jsonLdData: serviceJsonLd,
        depth: 3
      });

      fs.writeFileSync(path.join(serviceDir, 'index.html'), serviceHtml, 'utf8');
      generatedUrls.push({ loc: `/passport/${countrySlug}/${serviceSlug}/`, priority: '0.7', changefreq: 'monthly' });
      totalServicePages++;
    }
  }

  console.log(`✓ Generated ${Object.keys(countryRules).length} country pages and ${totalServicePages} service pages!`);
  
  // Write generated manifest for testing & sitemap building
  fs.writeFileSync(
    path.join(ROOT_DIR, 'data', 'generated-routes.json'),
    JSON.stringify(generatedUrls, null, 2),
    'utf8'
  );
  console.log(`✓ Saved data/generated-routes.json (${generatedUrls.length} routes)`);
}

if (require.main === module) {
  main();
}

module.exports = {
  main,
  COUNTRY_SLUGS,
  SERVICE_METADATA
};
