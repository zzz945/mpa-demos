/* eslint-disable */
import { pageInit } from 'mpa-common-library/utils/_spa-common.js'
import './index.styl'

import MultiStateButton from 'mpa-common-library/components/multi-state-button.vue'
import ButtonSelect from 'mpa-common-library/components/button-select.vue'

pageInit({
  vue: {
    name: 'components-demo',
    components: {
      MultiStateButton,
      ButtonSelect,
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
        btn1State: 'manual',
        buttonSelectValue: {},
        buttonSelectItems: [
          {
            label: 'All Frequent Teachers',
          },
          {
            label: 'Teacher 1',
            icon: require('./img/button-mode-manual-0@2x.png'),
            iconSize: 25,
          },
          {
            label: 'Teacher 2',
            icon: require('./img/button-mode-auto-0@2x.png'),
            iconSize: 25,
          },
          {
            label: 'All Teachers',
          }
        ],
      }
    },
    mounted () {
    },
    methods: {
    }
  },
})