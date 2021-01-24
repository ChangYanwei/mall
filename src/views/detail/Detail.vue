<template>
  <div class="detail">
    <detail-nav-bar @title-click="titleClick" class="detail-nav"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @img-load="imgLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>

  </div>
</template>

<script>
  import DetailNavBar from "./detailComponents/DetailNavBar";
  import DetailSwiper from "./detailComponents/DetailSwiper";
  import DetailBaseInfo from "./detailComponents/DetailBaseInfo";
  import DetailShopInfo from "./detailComponents/DetailShopInfo";
  import DetailGoodsInfo from "./detailComponents/DetailGoodsInfo";
  import DetailParamInfo from "./detailComponents/DetailParamInfo";
  import DetailCommentInfo from "./detailComponents/DetailCommentInfo";
  import GoodsList from "components/content/goods/GoodsList";

  import Scroll from "components/common/scroll/Scroll";

  import {getDetail, GoodsInfo, Shop, GoodsParam, getRecommend} from "network/detail";

  export default {
    name: "Detail",
    data() {
      return {
        id: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopY: [0, -1000, -2000, -2500]
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList
    },
    created() {
      this.id = this.$route.params.id;

      this.getDetailData();
      this.getRecommendData();
    },
    methods: {
      //网络请求相关
      getDetailData() {
        getDetail(this.id).then(res => {

          const data = res.result;
          //1.获取顶部轮播图数据
          this.topImages = data.itemInfo.topImages;

          //2.获取商品信息
          this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services);

          //3.获取店铺信息
          this.shop = new Shop(data.shopInfo)

          //4.保存商品的详情数据
          this.detailInfo = data.detailInfo;

          //5.获取参数信息
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

          //6.获取评论信息
          if (data.rate.cRate !== 0) {
            this.commentInfo = data.rate.list[0];
          }

          //根据最新的数据,对应的DOM是已经被渲染出来
          //但是图片依然是没有加载完(目前获取到offsetTop不包含其中的图片).
          // offsetTop值不对的时候，大部分都是因为图片的问题

        })
      },
      getRecommendData() {
        getRecommend().then(res => {
          this.recommends = res.data.list;
        })
      },

      //事件监听相关
      imgLoad() {
        this.$refs.scroll.refresh();

        this.themeTopY = [];
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.params.$el.offsetTop);
        this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        console.log(this.themeTopY);
      },
      titleClick(index) {
        console.log(index);
        this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 300);
      }
    }
  }
</script>

<style scoped>
  .detail {
    position: relative;
    z-index: 9;
    background-color: white;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: white;
  }

  .content {
    height: calc(100% - 44px);
  }
</style>
