<template>
  <Plotly :data="data" :layout="layout"></Plotly>
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  @Component({
    components: {},
  })
  export default class BarChart extends Vue {
    data = [
      {
        x: ["giraffes", "orangutans", "monkeys"],
        y: [20, 14, 23],
        name: "SF Zoo",
        type: "bar",
      },
      {
        x: ["giraffes", "orangutans", "monkeys"],
        y: [12, 18, 29],
        name: "LA Zoo",
        type: "bar",
      },
    ];
    layout = {
      title: "",
    };
  }
</script>
<style scoped lang="scss"></style>
