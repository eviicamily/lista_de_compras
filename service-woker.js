

self.addEventListener('install',(event) => {
    event.waitUntil(
caches.open('lista-de-compras-v1').then(cache) => {
    return cache.addAll([
        '/'
        '/index.html',
        '/style.css',
        '/app.js',
        '/manifest.json'     
   ])
  })
}) 

self.addEventListener('fetch',(event)=> {
 event.respondWith(
 caches.match(event.request).then((reponse)=> {
    return response || fetch(event.request);
  
   })
 );
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
  .then(() => {
    console.log('service Worker registrado com sucesso');
  })
  .catch((error) => {
    console.log('falha ao registrar o service worker:'.error);
  });
}