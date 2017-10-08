'use strict';

self.addEventListener('install', e => {
  let time = Date.now();

  e.waitUntil(
    caches.open('vinkla').then(cache => {
      return cache.addAll([
        '/',
        `/index.html?timestamp=${time}`,
        `/robots.txt?timestamp=${time}`,
        `/manifest.json?timestamp=${time}`,
        `/assets/images/icon-128x128.png?timestamp=${time}`,
        `/assets/images/icon-144x144.png?timestamp=${time}`,
        `/assets/images/icon-152x152.png?timestamp=${time}`,
        `/assets/images/icon-192x192.png?timestamp=${time}`,
        `/assets/images/icon-512x512.png?timestamp=${time}`,
        `/assets/images/vinkla.png?timestamp=${time}`,
        `/assets/styles/vinkla.css?timestamp=${time}`,

      ]).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
