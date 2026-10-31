// Service Worker - Cache-First for static assets, Network-First for HTML
const CACHE_NAME = 'portfolio-v3';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/assets/images/kartun.jpg',
  '/assets/images/kartun.png',
  '/assets/images/profile.jpg',
  '/assets/images/shadownclip-preview.png',
  '/assets/images/lifehub-icon.png',
  '/assets/images/horti-apps-preview.png',
  '/assets/images/shadownclip-icon.png',
  '/assets/docs/CV_Ryfaathir_Rahman.pdf'
];

// Install - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.log('[SW] Some assets failed to cache:', err);
      });
    })
  );
  self.skipWaiting();
});

// Activate - cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch - Cache-First for static, Network-First for HTML
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip cross-origin (CDN fonts, etc)
  if (url.origin !== location.origin) return;

  // HTML pages - Network-First (fresh content)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('/index.html')))
    );
    return;
  }

  // Static assets - Cache-First
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      });
    })
  );
});

// Background Sync for offline form submissions (future enhancement)
// self.addEventListener('sync', (event) => {
//   if (event.tag === 'contact-form') {
//     event.waitUntil(syncContactForm());
//   }
// });