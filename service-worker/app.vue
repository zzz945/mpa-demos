<template lang="pug">
  .service-worker
    h1.title I'm a service worker
    p.desc I can work off line
    el-button.request-notification-btn(@click="handleRequestNotifyPermission") Request Notify Permission
    el-button.notification-btn(@click="handleNotify") Notify
    //- el-button.subscribe-push-btn(@click="handleSubcribePush") Subscribe Push
</template>

<script>

  export default {
    name: 'service-worker',
    components: {},
    data () {
      return {
      }
    },
    beforeCreate () {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('/service-worker/sw.js').then(
            function(registration) {
              // Registration was successful
              console.log('ServiceWorker registration successful with scope: ', registration.scope);

            //   registration.pushManager.getSubscription().then(
            //     function(sub) {
            //       if (sub === null) {
            //         // Update UI to ask user to register for Push
            //         console.log('Not subscribed to push service!');
            //       } else {
            //         // We have a subscription, update the database
            //         console.log('Subscription object: ', sub);
            //       }
            //     }
            //   );
            }
          ).catch(
            function(err) {
              // registration failed :(
              console.log('ServiceWorker registration failed: ', err);
            }
          );

        });
      }
    },
    mounted () {
    },
    methods: {
      // handleSubcribePush() {
      //   if ('serviceWorker' in navigator) {
      //     navigator.serviceWorker.ready.then(function(reg) {
      //       reg.pushManager.subscribe({
      //         userVisibleOnly: true
      //       }).then(function(sub) {
      //         console.log('Endpoint URL: ', sub.endpoint);
      //       }).catch(function(e) {
      //         if (Notification.permission === 'denied') {
      //           console.warn('Permission for notifications was denied');
      //         } else {
      //           console.error('Unable to subscribe to push', e);
      //         }
      //       });
      //     })
      //   }
      // },
      handleRequestNotifyPermission() {
        // It's best practice to call the requestPermission() function in response to a user action signalling
        if ('Notification' in window) {
          Notification.requestPermission(function(status) {
            console.log('Notification permission status:', status);
          });
        }
      },
      handleNotify() {
        if (Notification.permission == 'granted') {
          navigator.serviceWorker.getRegistration().then(function(reg) {
            var options = {
              body: 'Here is a notification body!',
              // icon: 'images/example.png',
              vibrate: [100, 50, 100],
              data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
              },
              actions: [
                {
                  action: 'explore',
                  title: 'Explore this new world',
                  // icon: 'images/checkmark.png'
                },
                {
                  action: 'close',
                  title: 'Close notification',
                  // icon: 'images/xmark.png'
                },
              ]
            };
            reg.showNotification('Hello world!', options);
          });
        }
      }
    }
  }
</script>
