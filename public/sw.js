const CACHE_NAME = 'nzassa-cache-v1';

// Fichiers à mettre en cache immédiatement
const ASSETS = [
  '/',
  '/globals.css',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Stratégie : Réseau d'abord, sinon Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
