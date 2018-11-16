
import Page1 from './page1.vue'
import Page2 from './page2.vue'

const root = "/permissions/"

export default [
  { path: root, component: Page1 },
  { path: root + 'page1', component: Page2 },
  { path: root + 'page2', component: Page2 },
]
