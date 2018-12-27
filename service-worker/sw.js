// 更新网站时，需要同时更新缓存版本，旧缓存资源才会被清理（新的html才能够展示）
var CACHE_NAME = 'service-worker-demo-v6';
var urlsToCache = [];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // 删除旧版本cache
          if (cacheName !== CACHE_NAME && /service-worker-demo/.test(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('notificationclose', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  console.log('Closed notification: ' + primaryKey);
});

self.addEventListener('notificationclick', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  var action = e.action;
  if (action === 'close') {
    console.log('action close')
    notification.close();
  } else {
    console.log('action explore')
    notification.close();
  }
});

// self.addEventListener('push', function(e) {
//   var options = {
//     body: 'This notification was generated from a push!',
//     // icon: 'images/example.png',
//     vibrate: [100, 50, 100],
//     data: {
//       dateOfArrival: Date.now(),
//       primaryKey: '2'
//     },
//     actions: [
//       {
//         action: 'explore',
//         title: 'Explore this new world',
//         // icon: 'images/checkmark.png'
//       },
//       {
//         action: 'close',
//         title: 'Close',
//         // icon: 'images/xmark.png'
//       },
//     ]
//   };
//   e.waitUntil(
//     self.registration.showNotification('Hello world!', options)
//   );
// });