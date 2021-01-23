<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control class="tab-control" :titles="['流行','新款','精选']"
                 @tab-click="getType" v-show="isFixed" ref="tabControl1"/>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @load-more="getMoreData">
      <home-swiper :banners="banners" @swiper-load="swiperImgLoad"/>
      <home-recommend :recommend-data="recommends"/>
      <home-popular-view/>
      <tab-control :titles="['流行','新款','精选']"
                   @tab-click="getType" ref="tabControl2"/>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-if="isShowBackTop"/>
  </div>
</template>

<script>
  import HomeSwiper from "./childComponents/HomeSwiper";
  import HomeRecommend from "./childComponents/HomeRecommend";
  import HomePopularView from "./childComponents/HomePopularView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";

  import {getHomeMultiData, getHomeGoods} from 'network/home';
  import {debounce} from "common/js/utils";

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        goodsType: ['pop', 'new', 'sell'],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isFixed:false
      }
    },
    components: {
      HomeSwiper,
      HomeRecommend,
      HomePopularView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    created() {
      //首页轮播图数据
      this.getHomeData();

      //首页商品数据
      this.getHomeGoodsData('pop');
      this.getHomeGoodsData('new');
      this.getHomeGoodsData('sell');

    },
    mounted() {
      //监听图片加载完成
      const refresh = debounce(this.$refs.scroll.refresh, 300)
      this.$bus.$on('imgLoad', () => {
        // this.$refs.scroll.refresh();
        refresh();
      })
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    methods: {

      //事件监听相关
      //获取点击的商品类型菜单
      getType(typeIndex) {
        this.currentType = this.goodsType[typeIndex];
        this.$refs.tabControl1.currentIndex = typeIndex;
        this.$refs.tabControl2.currentIndex = typeIndex;
      },

      //返回顶部
      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 500);
      },

      //监听滚动
      contentScroll(position) {
        //1.返回顶部按钮的显示与隐藏
        if (position.y < -1000) {
          this.isShowBackTop = true;
        } else {
          this.isShowBackTop = false;
        }

        //2.决定tabControl是否吸顶
        this.isFixed = -position.y >= this.tabOffsetTop;

      },

      //上拉加载更多
      getMoreData() {
        this.getHomeGoodsData(this.currentType);
      },

      //监听轮播图加载完成
      swiperImgLoad() {
        //获取tabControl的offsetTop
        //所有的组件都有是个属性，$el，用来获取组件中的根元素

        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      },

      //网络请求相关
      getHomeData() {
        getHomeMultiData().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoodsData(type) {
        let tempPage = this.goods[type].page + 1;
        getHomeGoods(type, tempPage).then(res => {
          console.log(type, '的商品数据', res);
          // this.goods[type].list = this.goods[type].list.concat(res.data.list)
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })

      }

    }
  }
</script>

<style scoped>
  .home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;
    /*position: fixed;*/
    /*left: 0;*/
    /*top: 0;*/
    /*right: 0;*/
    z-index: 9;
  }

  .content {
    overflow: hidden;
    background-color: white;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tab-control {
    position: relative;
    z-index: 99;
  }

  /*.fixed {*/
  /*  position: sticky;*/
  /*  top: 44px;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*}*/

</style>
