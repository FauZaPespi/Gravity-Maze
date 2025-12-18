const CACHE_NAME = 'neo-maze-v1';
const ASSETS = [
  'index.html',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;700&display=swap'
];

// Installation : mise en cache des fichiers
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Stratégie : Network First, fallback on Cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});
