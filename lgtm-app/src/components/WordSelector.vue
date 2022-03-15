<template>
  <div>
    {{ word }}
  </div>
</template>
<script>
export default {
  name: "WordSelector",
  props: {
    wordBank: String,
  },
  data() {
    return {
      randomNumber: 0,
      LOL_BANK: [
        "lol",
        "lol2",
        "lol3",
        "lol4",
        "lol5",
        "lol6",
        "lol7",
        "lol8",
        "lol9",
      ],
      TEST_BANK: [
        "Lets",
        "Gamer",
        "Toast",
        "Yahoo",
        "Allo",
        "Jor",
        "Is",
        "The",
      ],
    };
  },
  computed: {
    word() {
      return this.bank[this.randomNumber];
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
  },
};
</script>
