<template>
  <div>
    <detail-nav-bar />
  </div>
</template>

<script>

  import DetailNavBar from "./detailComponents/DetailNavBar";

  export default {
    name: "Detail",
    data() {
      return {
        iid: null
      }
    },
    components: {
      DetailNavBar
    },
    created() {
      console.log(this.$route.params.id);
    }
  }
</script>

<style scoped>

</style>
