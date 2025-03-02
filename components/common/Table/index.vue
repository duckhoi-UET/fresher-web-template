<template>
  <a-table
    :columns="columns"
    :data-source="data"
    @change="onChange"
    :pagination="false"
    :bordered="bordered"
    :scroll="{ x: 800 }"
  >
    <slot name="content" />
  </a-table>
</template>

<script>
export default {
  name: "TableCommon",
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    bordered: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChange() {
      this.$emit("onChange");
    },
  },
};
</script>
