<script setup>
import { WordSelector } from "@/components/WordSelector.vue";
</script>
<template>
  <div class="w-full h-full">
    <h1 class="text-3xl text-pink-700">Hello this is the LGTM View</h1>
    <div class="flex row justify-between">
      <WordSelector key="test" />
      <WordSelector key="pain" wordBank="lol" />
    </div>
  </div>
</template>
<script>
export default {
  name: "LGTMView",
  components: { WordSelector } 
}
</script>
