<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view class="wrap"></router-view>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Navigation from "@/components/layout/Navigation.vue";
  @Component({
    components: {
      Navigation,
    },
  })
  export default class App extends Vue {
    created() {}
  }
</script>
<style scoped lang="scss">
  .wrap {
    margin-left: 300px;
  }
</style>
