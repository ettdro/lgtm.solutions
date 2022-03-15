<template>
  <h1 class="text-2xl p-4">{{ word }}</h1>
</template>
<script>
export default {
  name: "WordSelector",
  props: {
    wordBank: String,
  },
  data() {
    return {
      L_BANK: ["Let's", "Lots", "Lame", "Lime", "Loaf"],
      G_BANK: ["Game", "Grind", "Ground", "Grim", "Guard"],
      T_BANK: ["Together", "Teen", "Tomato", "Transfer", "Turismo"],
      M_BANK: ["Man", "Mafia", "Morning", "Massive", "Mark"],
    };
  },
  computed: {
    word() {
      return this.bank[this.randomIntFromInterval(0, this.bank.length - 1)];
    },
    bank() {
      const bankName = `${this.wordBank.toUpperCase()}_BANK`;
      if (this[bankName]) return this[bankName];
      return this.TEST_BANK;
    },
  },
  methods: {
    refreshWord() {
      this.randomNumber = Math.floor(Math.random() * this.bank.length());
    },
    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
};
</script>
