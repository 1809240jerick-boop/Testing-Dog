const CACHE_NAME = 'barangay-k9-v3';
const ASSETS = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/icon.png',
  '/manifest.json'
];

// Install Event
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch Event (Offline Capability)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );

});

