---
---
'use strict';

const VERSION = 'cache-v{{site.time | replace:" ","" | replace:":","" | replace:"-",""}}';

const urls = [
  '/',
  '/favicon.ico',
  '/robots.txt',
  '/manifest.json',

  '/assets/images/apple-touch-icon.png',
  '/assets/images/chrome-touch-icon-192x192.png',
  '/assets/images/icon-128x128.png',
  '/assets/images/ms-touch-icon-144x144-precomposed.png',

  'https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/4.1.0/sanitize.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/github-gist.min.css',
  '/assets/styles/vinkla.css',

  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/highlight.min.js',
  '/assets/scripts/konami.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(caches.open(VERSION).then(function(cache) {
    return cache.addAll(urls);
  }));
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    if (response) {
      return response;
    }

    return fetch(event.request);
  }));
});
