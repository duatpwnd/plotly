<template>
  <Plotly :data="multipleData" :layout="pairLayout"></Plotly>
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  @Component({
    components: {},
  })
  export default class Splom extends Vue {
    pairPlot: { [key: string]: any }[] = [];
    get unpack() {
      return (key: string) => {
        return this.pairPlot.map((row) => {
          return row[key.replace(".", " ")];
        });
      };
    }
    multipleData = [
      {
        type: "splom",
        dimensions: [
          { label: "sepal length", values: [] as { [key: string]: any }[] },
          { label: "sepal width", values: [] as { [key: string]: any }[] },
          { label: "petal length", values: [] as { [key: string]: any }[] },
          { label: "petal width", values: [] as { [key: string]: any }[] },
        ],
        text: this.unpack("class"),
        marker: {
          color: [] as number[],
          colorscale: [
            [0.0, "#19d3f3"],
            [0.333, "#19d3f3"],
            [0.333, "#e763fa"],
            [0.666, "#e763fa"],
            [0.666, "#636efa"],
            [1, "#636efa"],
          ],
          size: 7,
          line: {
            color: "white",
            width: 0.5,
          },
        },
      },
    ];
    data = [
      {
        type: "splom",
        dimensions: [
          { label: "sepal length", values: [] as { [key: string]: any }[] },
          { label: "sepal width", values: [] as { [key: string]: any }[] },
          { label: "petal length", values: [] as { [key: string]: any }[] },
          { label: "petal width", values: [] as { [key: string]: any }[] },
        ],
        text: this.unpack("class"),
        marker: {
          color: [] as number[],
          colorscale: [
            [0.0, "#19d3f3"],
            [0.333, "#19d3f3"],
            [0.333, "#e763fa"],
            [0.666, "#e763fa"],
            [0.666, "#636efa"],
            [1, "#636efa"],
          ],
          size: 7,
          line: {
            color: "white",
            width: 0.5,
          },
        },
      },
    ];
    pairLayout = {
      title: "Iris Data set",
      height: 800,
      width: 1200,
      autosize: false,
      hovermode: "closest",
      dragmode: "select",
      plot_bgcolor: "rgba(240,240,240, 0.95)",
      xaxis: this.axis(),
      yaxis: this.axis(),
      xaxis2: this.axis(),
      xaxis3: this.axis(),
      xaxis4: this.axis(),
      yaxis2: this.axis(),
      yaxis3: this.axis(),
      yaxis4: this.axis(),
    };
    axis() {
      return {
        showline: false,
        zeroline: false,
        gridcolor: "#ffff",
        ticklen: 4,
      };
    }
    colorPush(colors: string[]) {
      colors.forEach((item, index) => {
        if (item == "Iris-setosa") {
          this.multipleData[0].marker.color.push(0);
        } else if (item == "Iris-versicolor") {
          this.multipleData[0].marker.color.push(0.5);
        } else if (item == "Iris-virginica") {
          this.multipleData[0].marker.color.push(1);
        }
      });
    }
    csvJSON(csvStr: string) {
      const lines = csvStr.split("\n");
      let result = [];
      // NOTE: If your columns contain commas in their values, you'll need
      // to deal with those before doing the next step
      // (you might convert them to &&& or something, then covert them back later)
      // jsfiddle showing the issue https://jsfiddle.net/
      const headers = lines[0].replace(/\r/g, "");
      const split = headers.split(",");
      for (let i = 1; i < lines.length; i++) {
        let obj: { [key: string]: any } = {};
        const currentline = lines[i].replace(/\r/g, "");
        const currentSplit = currentline.split(",");
        for (var j = 0; j < split.length; j++) {
          obj[split[j]] = currentSplit[j];
        }
        result.push(obj);
      }
      return result; //JavaScript object
    }
    loadData() {
      this.$axios
        .get(
          "https://raw.githubusercontent.com/plotly/datasets/master/iris-data.csv"
        )
        .then((result: { [key: string]: any }) => {
          console.log(result);
          this.pairPlot = this.csvJSON(result.data);
          this.colorPush(this.unpack("class"));
          this.multipleData[0].dimensions.forEach((item, index) => {
            item.values = this.unpack(item.label);
          });
        });
    }
    created() {
      this.loadData();
    }
  }
</script>
<style scoped lang="scss"></style>
