<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" @load="swiperLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper"

  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type:Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods: {
      swiperLoad() {
        if (!this.isLoad) {
          this.$emit('swiper-load');
          this.isLoad = true;
        }
      }
    }
  }
</script>

<style scoped>

</style>
