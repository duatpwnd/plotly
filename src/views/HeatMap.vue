<template>
  <Plotly :data="data" :layout="layout"></Plotly>
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  @Component({
    components: {},
  })
  export default class HeatMap extends Vue {
    layout = {
      title: "",
    };
    data = [
      {
        z: [
          [1, 20, 30],
          [20, 1, 60],
          [30, 60, 1],
        ],
        type: "heatmap",
      },
    ];
  }
</script>
<style scoped lang="scss"></style>
