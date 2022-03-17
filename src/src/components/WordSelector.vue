<template>
  <h1 class="text-6xl pr-2 pb-3">{{ word }}&nbsp;</h1>
</template>
<script>
export default {
  name: "WordSelector",
  props: {
    changeWord: Boolean,
    wordBank: Array,
  },
  data() {
    return {
      word: "",
    };
  },
  watch: {
    changeWord: {
      handler() {
        this.randomizeWord();
      },
    },
  },
  methods: {
    randomizeWord() {
      this.word =
        this.wordBank[this.randomIntFromInterval(0, this.wordBank.length - 1)];
    },
    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
  mounted() {
    this.randomizeWord();
  },
};
</script>
