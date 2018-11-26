<template lang="pug">
  .dynamic-form-validation
    el-form.dynamic-form-validation__form(v-for="(session, i) in classSettings", :key="i", :model="classSettings[i]", :inline="true", label-width="150px", ref="classSettingsForms")
      el-form-item(
        prop="courseType",
        :rules="{required: true}"
      )
        el-select(class="#{b}__class-setting-select", v-model="session.courseType", @change="handleCourseTypeChange(session, i)")
          el-option(v-for="(option, index) in courseTypeOptions", :key="option" , :label="option", :value="option")
      el-form-item(
        prop="version",
        :rules="{required: true}"
      )
        el-select(class="#{b}__class-setting-select", v-model="session.version", @change="handleVersionChange(session, i)")
          el-option(v-for="(version, index) in versionOptions", :key="version" , :label="version", :value="version")
      el-form-item(
        prop="serialNumber",
        :rules="{required: true}"
      )
        el-select(class="#{b}__class-setting-select", v-model="session.serialNumber", @change="handleSerialNumberChange(session, i)")
          el-option(v-for="(option, index) in serialNumberOptions", :key="option" , :label="option", :value="option")
      el-button(size="mini", @click="handleDeleteSession(i)") -
    el-button(size="small", @click="handleAddSession") +
    el-button(size="small", @click="handleConfirmClick") Confirm
</template>

<style lang="stylus" scoped>
.dynamic-form-validation
  padding: 100px
  &__form
    margin-bottom: 20px
</style>

<script>

  import MessageMixin from "mpa-common-library/mixin/message"

  export default {
    name: 'dynamic-form-validation',
    mixins: [MessageMixin],
    components: {},
    data () {
      return {
        classSettings: [],
        courseTypeOptions: ['course type 1', 'course type 2', 'course type 3'],
        versionOptions: ['version 1', 'version 2', 'version 3'],
        serialNumberOptions: ['Serial Number 1', 'Serial Number 2', 'Serial Number 3'],
      }
    },
    mounted () {
    },
    methods: {
      handleCourseTypeChange (session, i) {
      },
      handleVersionChange (session, i) {
      },
      handleSerialNumberChange (i) {
      },
      handleAddSession () {
        this.classSettings.push({
          courseType: '',
          version: '',
          serialNumber: ''
        })
      },
      handleDeleteSession (i) {
        this.classSettings.splice(i, 1)
      },
      validateForms () {
        return Promise.all([
          ...(this.$refs.classSettingsForms || []).map(form => {
            return new Promise((resolve, reject) => {
              form.validate(valid => {
                if (valid) resolve()
                else reject()
              })
            })
          })
        ])
      },
      handleConfirmClick () {
        this.validateForms().then(_ => {
          this.$success('comfirmed')
        }).catch(_ => null)
      }
    }
  }
</script>
