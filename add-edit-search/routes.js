
import AddPage from './add/add.vue'
import EditPage from './edit/edit.vue'
import SearchPage from './search/search.vue'

const root = "/add-edit-search/"

export default [
  { path: '/add-edit-search/index.html', component: SearchPage },
  { path: '/add-edit-search/add/index.html', component: AddPage },
  { path: '/add-edit-search/edit/index.html', component: EditPage },
]
