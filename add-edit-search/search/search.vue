<template lang="pug">
  extends ../../../mpa-common-library/ades/mixin/search/index

  block querybar-form-items
    el-form-item(
      prop="name"
    )
      el-input(v-model="queryParams.name", placeholder="Name")
    el-form-item(
      prop="age",
      :rules="queryParamRules.age",
    )
      el-input(v-model="queryParams.age", placeholder="Age")
    el-form-item(
      prop="phone",
      :rules="queryParamRules.phone",
    )
      el-input(v-model="queryParams.phone", placeholder="Phone")
    el-form-item(
      prop="email",
      :rules="queryParamRules.email",
    )
      el-input(v-model="queryParams.email", placeholder="Email")

  block querybar-operations
    +filter-btn()
    +add-btn()

  block table-columns
    el-table-column(label="ID", prop="id")
      template(slot-scope="scope")
        a(href="javascript:;", @click="$router.push(`/add-edit-search/edit/${scope.row.id}?disabled=true`)") {{scope.row.id}}
    el-table-column(label="Name", prop="name")
    el-table-column(label="Age", prop="age")
    el-table-column(label="Phone", prop="phone")
    el-table-column(label="Email", prop="email")

  block table-operations
    +edit-btn()
    +delete-btn()

</template>

<script>

import SearchMixin from 'mpa-common-library/ades/mixin/search'
import api from 'api/_add-edit-search.api.js'
import validationRules from '../validation-rules.js'

export default {
  name: 'Search',
  mixins: [SearchMixin],
  data () {
    return {
      queryParamRules: validationRules
    }
  },
  methods: {
    searchImpl (curPage, pageSize, params) {
      return api.search(curPage, pageSize, params)
    },
    deleteImpl (item) {
      return api.delete(item.id)
    },
  }
}
</script>
