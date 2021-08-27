<template>
  <div>
    <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
  </div>
</template>
<script lang="ts">
  import { Plotly } from "vue-plotly";
  import { Component, Vue, Prop } from "vue-property-decorator";
  @Component({
    components: {
      Plotly,
    },
  })
  export default class className extends Vue {
    @Prop(Array) private data!: { [key: string]: any }[];
    @Prop(Object) private layout!: { [key: string]: any };
    mounted() {
      console.log(Plotly);
      // setTimeout(() => {
      //   Plotly.d3.csv(
      //     "https://raw.githubusercontent.com/plotly/datasets/master/gapminderDataFiveYear.csv",
      //     (err: any, data: any) => {
      //       console.log(err, data);
      //     }
      //   );
      // }, 1000);
    }
  }
</script>
<style scoped lang="scss"></style>
