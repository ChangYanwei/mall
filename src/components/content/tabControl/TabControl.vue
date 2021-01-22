<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="tab-control-item"
         :class="{activeClass:currentIndex === index}"
         @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      tabClick(index) {
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: white;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span{
    padding:0 5px 3px;
  }

  .activeClass {
    color: var(--color-high-text);
  }

  .activeClass span{
    border-bottom: 3px solid var(--color-high-text);
  }
</style>
