<template>
  <wordcloud
    :data="defaultWords"
    nameKey="name"
    valueKey="value"
    color="Category10"
    :fontSize="[10, 100]"
    :rotate="rotate"
    :wordClick="wordClickHandler"
  >
  </wordcloud>
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import wordcloud from "vue-wordcloud";
  @Component({
    components: { wordcloud },
  })
  export default class WordCloud extends Vue {
    myColors = ["#1f77b4", "#629fc9", "#94bedb", "#c9e0ef"];
    rotate = {
      from: 0,
      to: 0,
    };
    defaultWords = [
      {
        name: "Cat",
        value: 170,
      },
      {
        name: "fish",
        value: 80,
      },
      {
        name: "things",
        value: 50,
      },
      {
        name: "look",
        value: 30,
      },
      {
        name: "two",
        value: 65,
      },
      {
        name: "fun",
        value: 50,
      },
      {
        name: "know",
        value: 35,
      },
      {
        name: "good",
        value: 15,
      },
      {
        name: "play",
        value: 15,
      },
    ];
    wordClickHandler(name: string, value: number, vm: Vue) {
      console.log("wordClickHandler", name, value, vm);
    }
  }
</script>
<style scoped lang="scss"></style>
