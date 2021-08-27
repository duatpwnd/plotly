<template>
  <md-list class="">
    <md-list-item>
      <span @click="goToPath('/3dChart')" class="md-list-item-text"
        >3D CHART</span
      >
    </md-list-item>
    <md-list-item>
      <span @click="goToPath('/scatter')" class="md-list-item-text"
        >SCATTER</span
      >
    </md-list-item>
    <md-list-item>
      <span @click="goToPath('/splom')" class="md-list-item-text">SPLOM</span>
    </md-list-item>
    <md-list-item>
      <span @click="goToPath('/wordCloud')" class="md-list-item-text"
        >WORDCLUD</span
      >
    </md-list-item>
  </md-list>
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { mapState } from "vuex";

  @Component({
    components: {},
  })
  export default class className extends Vue {
    goToPath(path: string): void {
      this.$router.push(path);
    }
  }
</script>
<style scoped lang="scss">
  .md-list {
    position: fixed;
    top: 0;
    width: 300px;
    height: 100%;
    .not-exist {
      color: #ccc;
    }
  }
</style>
