<template lang="pug">
  center.main
    a(href="/permissions/page1") page1
    <br>
    a(href="/permissions/page2") page2
    <br><br><br><br><br>
    .container(v-if="hasPermission")
      router-view
    .no-permission(v-else)
      p Warning: you have no permission viewing this page
</template>

<style lang="stylus" scoped>
  .main
    padding: 50px
</style>

<script>
  import LoginAPI from 'api/_login.api.js'
  import { initPermissions, hasPermission } from 'mpa-common-library/utils/_permissions.js'
  import MessageMixin from "mpa-common-library/mixin/message"

  const pathPermissionMap = {
    '/page1': 'page1',
    '/page2': 'page2',
  }

  export default {
    name: 'permissions',
    mixins: [MessageMixin],
    components: {},
    data () {
      return {
        hasPermission: false,
      }
    },
    watch: {
      '$route.path' () {
        this.hasPermission = hasPermission(location.pathname)
      }
    },
    mounted () {
      LoginAPI.getPermissions().then(data => {
        initPermissions(data.permissions)
        this.hasPermission = hasPermission(location.pathname)
      }).catch(this.$apiError)
    },
    methods: {
    }
  }
</script>
