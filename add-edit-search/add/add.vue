<template lang="pug">
  extends ../../../mpa-common-library/ades/mixin/add/index

  block add-form-items
    el-form-item(
      label="Name",
      prop="name"
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
</template>

<script>

import AddMixin from 'mpa-common-library/ades/mixin/add'
import validationRules from '../validation-rules.js'
import api from 'api/_add-edit-search.api.js'

export default {
  name: 'Add',
  mixins: [AddMixin],
  components: {
  },
  data () {
    return {
      validationRules
    }
  },
  methods: {
    getInfoProperties () {
      return {
        name: '',
        age: '',
        phone: '',
        email: ''
      }
    },
    getBasePath () {
      return '/add-edit-search'
    },
    addImpl (info) {
      return api.add(info)
    },
  }
}
</script>