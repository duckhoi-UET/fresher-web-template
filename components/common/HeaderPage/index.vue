<template>
  <h1 class="mb-8 text-2xl font-semibold">{{ text }}</h1>
</template>

<script>
export default {
  name: "HeaderPage",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
