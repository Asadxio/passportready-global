/**
 * site.config.js
 * Central domain-agnostic configuration for PassportReady Global.
 * 
 * Used across static page generation, sitemap creation, canonical tagging, and client headers.
 * To change domain or deploy to staging/preview, override SITE_URL environment variable.
 */

const DEFAULT_SITE_URL = 'https://passport.myoss.in';

function getSiteUrl() {
  if (typeof process !== 'undefined' && process.env && process.env.SITE_URL) {
    return process.env.SITE_URL.replace(/\/+$/, '');
  }
  return DEFAULT_SITE_URL;
}

const siteConfig = {
  siteUrl: getSiteUrl(),
  defaultSiteUrl: DEFAULT_SITE_URL,
  siteName: 'PassportReady',
  defaultTitle: 'PassportReady — Global Passport Application & Validity Guide',
  defaultDescription: 'Independent global passport preparation guide. Build personalized document checklists, spot name & DOB mismatches, check entry validity, and link to portals.',
  socialImage: '/assets/preview.png',
  contactEmail: 'contact@myoss.in',
  githubRepo: 'https://github.com/Asadxio/passportready-global',
  canonicalUrl: function (path) {
    const cleanPath = (path || '').startsWith('/') ? path : '/' + (path || '');
    return this.siteUrl + cleanPath;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteConfig;
}
