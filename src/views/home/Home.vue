<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :banners="banners"/>
    <home-recommend :recommend-data="recommends"/>
    <home-popular-view/>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"/>

    <ul>
      <li>内容1</li>
      <li>内容2</li>
      <li>内容3</li>
      <li>内容4</li>
      <li>内容5</li>
      <li>内容6</li>
      <li>内容7</li>
      <li>内容8</li>
      <li>内容9</li>
      <li>内容10</li>
      <li>内容11</li>
      <li>内容12</li>
      <li>内容13</li>
      <li>内容14</li>
      <li>内容15</li>
      <li>内容16</li>
      <li>内容17</li>
      <li>内容18</li>
      <li>内容19</li>
      <li>内容20</li>
      <li>内容21</li>
      <li>内容22</li>
      <li>内容23</li>
      <li>内容24</li>
      <li>内容25</li>
      <li>内容26</li>
      <li>内容27</li>
      <li>内容28</li>
      <li>内容29</li>
      <li>内容30</li>
      <li>内容31</li>
      <li>内容32</li>
      <li>内容33</li>
      <li>内容34</li>
      <li>内容35</li>
      <li>内容36</li>
      <li>内容37</li>
      <li>内容38</li>
      <li>内容39</li>
      <li>内容40</li>
      <li>内容41</li>
      <li>内容42</li>
      <li>内容43</li>
      <li>内容44</li>
      <li>内容45</li>
      <li>内容46</li>
      <li>内容47</li>
      <li>内容48</li>
      <li>内容49</li>
      <li>内容50</li>
    </ul>
  </div>
</template>

<script>
  import HomeSwiper from "./childComponents/HomeSwiper";
  import HomeRecommend from "./childComponents/HomeRecommend";
  import HomePopularView from "./childComponents/HomePopularView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";

  import {getHomeMultiData, getHomeGoods} from 'network/home'

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        }
      }
    },
    components: {
      HomeSwiper,
      HomeRecommend,
      HomePopularView,
      NavBar,
      TabControl
    },
    created() {
      //首页轮播图数据
      this.getHomeData();
      //首页商品数据
      this.getHomeGoodsData('pop');
      this.getHomeGoodsData('new');
      this.getHomeGoodsData('sell');
    },
    methods: {
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
          console.log(type,'的商品数据', res);
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
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
