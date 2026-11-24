(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.SiteConfig = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var DEFAULT_SITE_URL = 'https://passport.myoss.in';

  function resolveSiteUrl() {
    if (typeof process !== 'undefined' && process.env && process.env.SITE_URL) {
      return process.env.SITE_URL.replace(/\/+$/, '');
    }
    if (typeof window !== 'undefined' && window.location) {
      var hn = window.location.hostname;
      if (hn === 'localhost' || hn === '127.0.0.1') {
        return window.location.origin;
      }
    }
    return DEFAULT_SITE_URL;
  }

  var currentSiteUrl = resolveSiteUrl();

  return {
    siteUrl: currentSiteUrl,
    defaultSiteUrl: DEFAULT_SITE_URL,
    siteName: 'PassportReady',
    defaultTitle: 'PassportReady — Global Passport Application & Validity Guide',
    defaultDescription: 'Independent global passport preparation guide. Build personalized document checklists, spot name & DOB mismatches, check entry validity, and link to portals.',
    socialImage: '/assets/preview.png',
    canonicalUrl: function (path) {
      var clean = (path || '').startsWith('/') ? path : '/' + (path || '');
      return currentSiteUrl + clean;
    }
  };
}));
