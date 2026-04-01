// Service Worker for DropZone Elite
self.addEventListener('install', (e) => {
  console.log('DropZone App Installed!');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});