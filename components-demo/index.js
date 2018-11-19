/* eslint-disable */
import { pageInit } from 'mpa-common-library/utils/_spa-common.js'
import './index.styl'

import MultiStateButton from 'mpa-common-library/components/multi-state-button.vue'

pageInit({
  vue: {
    name: 'components-demo',
    components: {
      MultiStateButton
    },
    data () {
      return {
        btn1States: {
          manual: {
            next: 'auto',
            images: {
              normal: {
                url: require('./img/button-mode-manual-0@2x.png'),
                width: 104,
                height: 118,
              },
              hover: {
                url: require('./img/button-mode-manual-1@2x.png'),
                width: 104,
                height: 118,
              },
              disabled: {
                url: require('./img/button-mode-disable-0@2x.png'),
                width: 104,
                height: 118,
              }
            }
          },
          auto: {
            next: 'manual',
            images: {
              normal: {
                url: require('./img/button-mode-auto-0@2x.png'),
                width: 104,
                height: 118,
              },
              hover: {
                url: require('./img/button-mode-auto-1@2x.png'),
                width: 104,
                height: 118,
              },
              disabled: {
                url: require('./img/button-mode-disable-0@2x.png'),
                width: 104,
                height: 118,
              }
            }
          },
        },
        btn1State: 'manual'
      }
    },
    mounted () {
    },
    methods: {
    }
  },
})