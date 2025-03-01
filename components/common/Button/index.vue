<template>
  <a-button
    :type="type"
    :size="size"
    :loading="loading"
    :ghost="ghost"
    @click="handleClick"
  >
    {{ text }}
  </a-button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    text: {
      type: String,
      default: "Primary",
    },
    size: {
      type: String,
      default: "small",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
  },

  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
