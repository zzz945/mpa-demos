/* eslint-disable */
import App from './App.vue'
import { pageInit } from 'mpa-common-library/utils/_spa-common.js'
import './index.styl'

pageInit({
  vue: {
    render: h => h(App),
    mounted () {
      document.dispatchEvent(new Event('render-event'))
    }
  },
})