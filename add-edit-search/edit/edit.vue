<template lang="pug">
  extends ../../../mpa-common-library/ades/mixin/edit/index

  block edit-form-items
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
</template>

<script>

import EditMixin from 'mpa-common-library/ades/mixin/edit'
import validationRules from '../validation-rules.js'
import api from 'api/_add-edit-search.api.js'

export default {
  name: 'Edit',
  mixins: [EditMixin],
  components: {
  },
  data () {
    return {
      validationRules
    }
  },
  methods: {
    getItemImpl (id) {
      return api.getItem(id)
    },
    saveImpl (info) {
      return api.update(info)
    }
  }
}
</script>