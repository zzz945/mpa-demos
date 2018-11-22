<template lang="pug">
  extends ../../../mpa-common-library/ades/mixin/add/index

  block form-items
    el-form-item(
      label="Name",
      prop="name",
      :rules="validationRules.name",
    )
      el-input(v-model="info.name", placeholder="Name")
    el-form-item(
      prop="age",
      label="Age",
      :rules="validationRules.age",
    )
      el-input(v-model="info.age", placeholder="Age")
    el-form-item(
      prop="phone",
      label="Phone",
      :rules="validationRules.phone",
    )
      el-input(v-model="info.phone", placeholder="Phone")
    el-form-item(
      prop="email",
      label="Email",
      :rules="validationRules.email",
    )
      el-input(v-model="info.email", placeholder="Email")
    el-form-item(
      prop="referrer",
      label="Referrer",
    )
      search-select(:innerComponent="Search", v-model="info.referrer")

</template>

<script>

import AddMixin from 'mpa-common-library/ades/mixin/add'
import validationRules from '../validation-rules.js'
import api from 'api/_add-edit-search.api.js'
import SearchSelect from 'mpa-common-library/ades/component/search-select/search-select.vue'
import Search from '../search/search.vue'

export default {
  name: 'Add',
  mixins: [AddMixin],
  components: {
    SearchSelect
  },
  data () {
    return {
      validationRules,
      Search,
    }
  },
  methods: {
    getInfoProperties () {
      return {
        name: '',
        age: '',
        phone: '',
        email: '',
        referrer: '',
      }
    },
    addImpl (info) {
      return api.add({
        ...info,
        referrer: info.referrer.id,
      })
    },
  }
}
</script>