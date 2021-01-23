<template>
  <div>
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
  </div>
</template>

<script>
  import DetailNavBar from "./detailComponents/DetailNavBar";
  import DetailSwiper from "./detailComponents/DetailSwiper";
  import DetailBaseInfo from "./detailComponents/DetailBaseInfo";
  import DetailShopInfo from "./detailComponents/DetailShopInfo";

  import {getDetail, GoodsInfo, Shop} from "network/detail";

  export default {
    name: "Detail",
    data() {
      return {
        id: null,
        topImages: [],
        goods: {},
        shop: {}
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo
    },
    created() {
      this.id = this.$route.params.id;

      this.getDetailData();
    },
    methods: {
      //网络请求相关
      getDetailData() {
        getDetail(this.id).then(res => {
          console.log(res);

          const data = res.result;
          //1.获取顶部轮播图数据
          this.topImages = data.itemInfo.topImages;

          //2.获取商品信息
          this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services);

          //3.获取店铺信息
          this.shop = new Shop(data.shopInfo)
        })
      }
    }
  }
</script>

<style scoped>

</style>
