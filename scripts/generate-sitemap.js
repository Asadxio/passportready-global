/**
 * scripts/generate-sitemap.js
 * Generates sitemap.xml and robots.txt for PassportReady Global.
 * 
 * Uses site.config.js for domain-agnostic base URL.
 * Includes root, legal pages, directory, country index pages, and service checklist pages,
 * with xhtml:link hreflang annotations for supported languages.
 */

const fs = require('fs');
const path = require('path');
const siteConfig = require('../site.config');

const ROOT_DIR = path.resolve(__dirname, '..');
const SITEMAP_PATH = path.join(ROOT_DIR, 'sitemap.xml');
const ROBOTS_PATH = path.join(ROOT_DIR, 'robots.txt');
const GENERATED_ROUTES_PATH = path.join(ROOT_DIR, 'data', 'generated-routes.json');

const TODAY = new Date().toISOString().split('T')[0];

const SUPPORTED_LANGUAGES = [
  'en', 'hi', 'ur', 'fr', 'de', 'ar',
  'es', 'pt', 'zh', 'ru', 'id', 'bn', 'tr'
];

function generateSitemapXml() {
  const baseUrl = siteConfig.siteUrl;
  
  // Read generated country/service routes if available
  let dynamicRoutes = [];
  if (fs.existsSync(GENERATED_ROUTES_PATH)) {
    dynamicRoutes = JSON.parse(fs.readFileSync(GENERATED_ROUTES_PATH, 'utf8'));
  }

  const staticRoutes = [
    { loc: '/', priority: '1.0', changefreq: 'weekly', isMain: true },
    { loc: '/about/', priority: '0.8', changefreq: 'monthly' },
    { loc: '/methodology/', priority: '0.8', changefreq: 'monthly' },
    { loc: '/privacy/', priority: '0.7', changefreq: 'monthly' },
    { loc: '/terms/', priority: '0.7', changefreq: 'monthly' },
    { loc: '/report/', priority: '0.8', changefreq: 'monthly' }
  ];

  // Combine and deduplicate
  const allRoutes = [...staticRoutes];
  for (const r of dynamicRoutes) {
    if (!allRoutes.some(existing => existing.loc === r.loc)) {
      allRoutes.push(r);
    }
  }

  // XML construction
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const route of allRoutes) {
    const locUrl = baseUrl + (route.loc.startsWith('/') ? route.loc : '/' + route.loc);
    xml += `  <url>\n`;
    xml += `    <loc>${locUrl}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq || 'weekly'}</changefreq>\n`;
    xml += `    <priority>${route.priority || '0.7'}</priority>\n`;

    // Add hreflang links for the home page
    if (route.isMain) {
      for (const lang of SUPPORTED_LANGUAGES) {
        xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}/?lang=${lang}"/>\n`;
      }
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/"/>\n`;
    }

    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
  console.log(`✓ Generated sitemap.xml with ${allRoutes.length} URLs (Domain: ${baseUrl})`);

  // Generate robots.txt
  const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
  fs.writeFileSync(ROBOTS_PATH, robotsTxt, 'utf8');
  console.log(`✓ Generated robots.txt`);
}

if (require.main === module) {
  generateSitemapXml();
}

module.exports = {
  generateSitemapXml
};
