/**
 * PassportReady Service Worker
 * Enables 100% offline checklist evaluation, photo guide, and calculators.
 */

const CACHE_NAME = 'passportready-v2026.11.28';

const PRECACHE_ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/styles.css?v=20261128_01',
  'js/site-config.js?v=20261128_01',
  'js/app.js?v=20261128_01',
  'js/i18n.js?v=20261128_01',
  'js/rules-engine.js?v=20261128_01',
  'js/tools.js?v=20261128_01',
  'js/guides-data.js?v=20261128_01',
  'data/country-data.js?v=20261128_01',
  'data/rule-packs.js?v=20261128_01',
  'assets/icon.svg',
  'assets/preview.png',
  'locales/en.json',
  'locales/hi.json',
  'locales/ur.json',
  'locales/fr.json',
  'locales/de.json',
  'locales/ar.json',
  'locales/es.json',
  'locales/pt.json',
  'locales/zh.json',
  'locales/ru.json',
  'locales/id.json',
  'locales/bn.json',
  'locales/tr.json',
  'about/',
  'methodology/',
  'privacy/',
  'terms/',
  'report/',
  'passport/'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        // Individual precache failure shouldn't break install
        console.warn('Pre-cache partial warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Handle same-origin requests
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
        if (cachedResponse) {
          // Fetch updated version in background to refresh cache
          fetch(event.request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse);
              });
            }
          }).catch(() => {});
          return cachedResponse;
        }

        return fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        }).catch(() => {
          // If offline and requesting navigation, return index.html
          if (event.request.mode === 'navigate') {
            return caches.match('index.html');
          }
        });
      })
    );
  }
});
