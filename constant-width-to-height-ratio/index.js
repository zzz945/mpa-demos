/* eslint-disable */
import App from './App.vue'
import { pageInit } from 'mpa-common-library/utils/_page-common.js'
import './index.styl'

pageInit({
  vue: {
    render: h => h(App)
  },
})