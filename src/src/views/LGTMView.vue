<template>
  <div class="flex flex-col h-screen justify-center items-center">
    <div class="flex flex-row">
      <WordSelector key="pain" wordBank="l" />
      <WordSelector key="pain" wordBank="g" />
      <WordSelector key="pain" wordBank="t" />
      <WordSelector key="pain" wordBank="m" />
    </div>

    <div class="flex flex-row">
      <button class="rounded-lg bg-red-400 p-3 text-white">Generate</button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  name: "LGTMView",
};
</script>

WordSelector
