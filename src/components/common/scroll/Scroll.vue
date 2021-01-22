<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props:{
      probeType: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        pullUpLoad: this.probeType
      })

      this.scroll.on('scroll', position => {
        this.$emit('scroll',position)
      })
    },
    methods: {
      scrollTo(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time);
      }
    }
  }
</script>

<style scoped>
  /*.wrapper {*/
  /*  height: 300px;*/
  /*}*/
</style>
