<template>
  <h1 class="text-2xl font-semibold" :class="customClass">{{ text }}</h1>
</template>

<script>
export default {
  name: "HeaderPage",
  props: {
    text: {
      type: String,
      default: "",
    },
    customClass: {
      type: String,
      default: "mb-8",
    },
  },
};
</script>
