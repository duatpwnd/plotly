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
      <span @click="goToPath('/eda-manager')" class="md-list-item-text"
        >EDA(Exploratory Data Analysis)</span
      >
    </md-list-item>
    <md-list-item>
      <span @click="goToPath('/model-suggestion')" class="md-list-item-text"
        >Model suggestion</span
      >
    </md-list-item>
    <md-list-item>
      <span @click="goToPath('/train-manager')" class="md-list-item-text"
        >Train manager</span
      >
    </md-list-item>
    <md-list-item>
      <span @click="goToPath('/admin')" class="md-list-item-text"
        >Administration</span
      >
    </md-list-item>
    <md-list-item>
      <span @click="goToPath('/info')" class="md-list-item-text"
        >About the software</span
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
    top: 88px;
    width: 300px;
    height: 100%;
    .not-exist {
      color: #ccc;
    }
  }
</style>
