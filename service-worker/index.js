/* eslint-disable */
import App from './App.vue'
import { pageInit } from 'mpa-common-library/utils/_page-common.js'
import './index.styl'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker/sw.js')
      .then(function(registration) {
          // Registration was successful
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
        });
  });
}

pageInit({
  vue: {
    render: h => h(App)
  },
})