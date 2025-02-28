<template>
  <a-pagination
    show-size-changer
    showLessItems
    :default-current="current"
    :total="total"
    :size="size"
    @showSizeChange="onShowSizeChange"
  />
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "large",
    },
    current: {
      type: [String, Number],
      default: 1,
    },
    total: {
      type: [String, Number],
      default: 100,
    },
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    },
  },
};
</script>
