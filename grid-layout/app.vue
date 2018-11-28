<template lang="pug">
  .grid-layout
    h1 nowrap + space-around (last row wierd)
    .grid-layout__content1
      - for (var i = 0; i < 8; i++)
        .grid-layout__item-wrapper1
          img(src="./zip@2x.min.png", width='40')
    h1 nowrap + flex-start + fix margin-right
    .grid-layout__content-wrapper2
      .grid-layout__content2
        - for (var i = 0; i < 8; i++)
          .grid-layout__item-wrapper2
            img(src="./zip@2x.min.png", width='40')
    h1 grid space between
    .grid-layout__content3
      - for (var i = 0; i < 8; i++)
        .grid-layout__item-wrapper3
          img(src="./zip@2x.min.png", width='40')
    h1 grid space arround
    .grid-layout__content4
      - for (var i = 0; i < 8; i++)
        .grid-layout__item-wrapper4
          img(src="./zip@2x.min.png", width='40')
</template>

<style lang="stylus" scoped>

.grid-layout
  background gray
  padding: 100px
  h1
    line-height 35px
    margin: 20px
    font-size: 28px
    text-align center
    color white
  &__content1
    background white
    display flex
    flex-wrap: wrap
    justify-content: space-around
  &__item-wrapper1
    padding: 15px
    margin-bottom 15px
    background black
  &__content-wrapper2
    background white
  &__content2
    display flex
    flex-wrap: wrap
    margin-right: -40px
  &__item-wrapper2
    padding: 15px
    margin-right: 40px
    margin-bottom: 20px
    background black
  &__content3
    background white
    display grid
    grid-template-columns: repeat(auto-fit, 70px);
    justify-content: space-between;
    grid-gap: 15px
  &__item-wrapper3
    padding: 15px
    background black
  &__content4
    background white
    display grid
    grid-template-columns: repeat(auto-fill, minmax(70px,1fr));
    justify-items: center;
    grid-gap: 15px
  &__item-wrapper4
    padding: 15px
    background black

</style>

<script>

  export default {
    name: 'grid-layout',
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
