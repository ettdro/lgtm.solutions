<template>
  <div class="flex flex-col h-screen justify-center items-center">
    <div class="flex flex-row">
      <div class="flex flex-row" ref="customLGTM">
        <WordSelector :changeWord="shouldChangeWord.l" :wordBank="lBank" />
        <WordSelector :changeWord="shouldChangeWord.g" :wordBank="gBank" />
        <WordSelector :changeWord="shouldChangeWord.t" :wordBank="tBank" />
        <WordSelector :changeWord="shouldChangeWord.m" :wordBank="mBank" />
      </div>
      <div @click="copyToClipboard()" class="flex items-center rounded-lg">
        <i
          class="fas fa-copy fa-2xl hover:text-slate-50 hover:cursor-pointer"
        ></i>
      </div>
    </div>

    <div class="flex flex-row">
      <button
        class="rounded-lg bg-purple-400 p-3 text-white"
        @click="generateNewWords()"
      >
        Generate
      </button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  name: "LGTMView",
  data() {
    return {
      shouldChangeWord: {
        l: false,
        g: false,
        t: false,
        m: false,
      },
      lBank: ["Let's", "Lots", "Lame", "Lime", "Loaf"],
      gBank: ["Game", "Grind", "Ground", "Grim", "Guard"],
      tBank: ["Together", "Teen", "Tomato", "Transfer", "Turismo"],
      mBank: [
        "Man",
        "Mafia",
        "Morning",
        "Massive",
        "Mark",
        "Machine",
        "Makeup",
      ],
    };
  },
  methods: {
    copyToClipboard() {
      // Logic to copy the words to clipboard here.
      const newLineRegex = /(\r\n|\n|\r)/gm;
      const parsedCurrentText = this.$refs['customLGTM'].innerText.replace(newLineRegex,"").trimEnd();
      navigator.clipboard.writeText(parsedCurrentText);
    },
    generateNewWords() {
      this.shouldChangeWord.l = !this.shouldChangeWord.l;
      this.shouldChangeWord.g = !this.shouldChangeWord.g;
      this.shouldChangeWord.t = !this.shouldChangeWord.t;
      this.shouldChangeWord.m = !this.shouldChangeWord.m;
    },
  },
};
</script>
