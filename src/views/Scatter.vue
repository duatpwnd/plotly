<template>
  <Plotly :data="data" :layout="layout"></Plotly>
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  @Component({
    components: {},
  })
  export default class Scatter extends Vue {
    data = [
      {
        x: [
          1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 1, 2,
          3, 4, 5, 1, 2, 3, 4, 5, 6,
        ],
        y: [
          1, 6, 3, 6, 1, 1, 6, 3, 6, 1, 1, 6, 3, 6, 1, 5, 1, 2, 3, 4, 5, 1, 2,
          3, 4, 5, 1, 2, 3, 4, 5, 6,
        ],
        mode: "markers",
        type: "scatter",
        name: "Team A",
        text: ["A-1", "A-2", "A-3", "A-4", "A-5"],
        marker: { size: 12 },
      },
      {
        x: [
          1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5,
          1.5, 1.5,
        ],
        y: [
          4, 3, 5, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6,
          2.7, 2.8,
        ],
        mode: "markers",
        type: "scatter",
        name: "Team B",
        text: ["B-a", "B-b", "B-c", "B-d", "B-e"],
        marker: { size: 12 },
      },
    ];
    layout = {
      autosize: true,
      height: 480,
      scene: {
        aspectratio: {
          x: 1,
          y: 1,
          z: 1,
        },
        camera: {
          center: {
            x: 0,
            y: 0,
            z: 0,
          },
          eye: {
            x: 1.25,
            y: 1.25,
            z: 1.25,
          },
          up: {
            x: 0,
            y: 0,
            z: 1,
          },
        },
        xaxis: {
          type: "linear",
          zeroline: false,
        },
        yaxis: {
          type: "linear",
          zeroline: false,
        },
        zaxis: {
          type: "linear",
          zeroline: false,
        },
      },
      title: "3d point clustering",
      width: 1,
    };
  }
</script>
<style scoped lang="scss"></style>
