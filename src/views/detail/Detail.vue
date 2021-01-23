<template>
  <div>
    <detail-nav-bar />
    <detail-swiper :top-images="topImages" />
  </div>
</template>

<script>
  import DetailNavBar from "./detailComponents/DetailNavBar";
  import DetailSwiper from "./detailComponents/DetailSwiper";

  import {getDetail} from "network/detail";

  export default {
    name: "Detail",
    data() {
      return {
        id: null,
        topImages: []
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper
    },
    created() {
      this.id = this.$route.params.id;

      this.getDetailData();
    },
    activated() {

    },
    methods: {
      //网络请求相关
      getDetailData() {
        getDetail(this.id).then(res => {
          console.log(res);
          //1.获取顶部轮播图数据
          this.topImages = res.result.itemInfo.topImages;
        })
      }
    }
  }
</script>

<style scoped>

</style>
