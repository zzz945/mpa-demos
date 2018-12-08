<template lang="pug">
  .constant-width-to-height-ratio-wrapper
    .constant-width-to-height-ratio.card
      .constant-width-to-height-ratio__inner
        p constant width to height ratio
    <br><br><br><br>
    .constant-width-to-height-ratio2.card
      p constant width to height ratio
    <br><br><br><br>
    h2 use custom property
    .card(style="--aspect-ratio:16/9;")
      p constant width to height ratio
</template>

<style lang="stylus" scoped>

.constant-width-to-height-ratio-wrapper
  padding: 100px
h2
  font-size 24px
  font-weight bold
  line-height 40px
p
  color white
.card
  width: 40%
  padding: 4px
  background: #333;

.constant-width-to-height-ratio
  position: relative;
  &::before
    content: '';
    padding-top: 56.25%; // 9/16
    display: block;
    width: 0;
  &__inner
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

.constant-width-to-height-ratio2
  &::before
    content: '';
    padding-top: 56.25%; // 9/16
    float: left;
  &::after
    content: '';
    display: block;
    clear: both;

@supports (--custom:property) {
  [style*="--aspect-ratio"]::before {
    content: '';
    padding-top: calc(100% / (var(--aspect-ratio)));
    float: left;
  }
  [style*="--aspect-ratio"]::after {
    content: '';
    display: block;
    clear: both;
  }
}

</style>

<script>

  export default {
    name: 'constant-width-to-height-ratio',
    components: {},
    data () {
      return {
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
