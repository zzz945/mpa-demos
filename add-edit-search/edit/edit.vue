<template lang="pug">
  extends ../../../mpa-common-library/ades/mixin/edit/index

  block form-items
    el-form-item(
      label="Name",
      prop="name"
    )
      el-input(v-model="info.name", placeholder="Name", :disabled="!editing")
    el-form-item(
      prop="age",
      label="Age",
      :rules="validationRules.age",
    )
      el-input(v-model="info.age", placeholder="Age", :disabled="!editing")
    el-form-item(
      prop="phone",
      label="Phone",
      :rules="validationRules.phone2",
    )
      el-input(v-model="info.phone", placeholder="Phone", :disabled="!editing")
    el-form-item(
      prop="email",
      label="Email",
      :rules="validationRules.email",
    )
      el-input(v-model="info.email", placeholder="Email", :disabled="!editing")
    el-form-item(
      prop="referrer",
      label="Referrer",
    )
      search-select(:innerComponent="Search", v-model="info.referrer", :disabled="!editing")
</template>

<script>

import EditMixin from 'mpa-common-library/ades/mixin/edit'
import validationRules from '../validation-rules.js'
import api from 'api/_add-edit-search.api.js'
import SearchSelect from 'mpa-common-library/ades/component/search-select/search-select.vue'
import Search from '../search/search.vue'

export default {
  name: 'Edit',
  mixins: [EditMixin],
  components: {
    SearchSelect
  },
  data () {
    return {
      validationRules,
      Search
    }
  },
  methods: {
    getItemImpl (id) {
      return api.getItem(id).then(info => {
        return api.getItem(info.referrer).then(referrerInfo => {
          info.referrer = referrerInfo
          return info
        })
      })
    },
    saveImpl (info) {
      return api.update(info)
    }
  }
}
</script>