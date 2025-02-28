<template>
  <a-modal
    v-model="visible"
    @ok="submit"
    @cancel="close"
    :okText="okText"
    :cancelText="cancelText"
    :confirmLoading="confirmLoading"
    :destroyOnClose="destroyOnClose"
    :maskClosable="maskClosable"
  >
    <template #title>
      <h1 class="text-center text-xl">{{ title }}</h1>
    </template>
    <slot name="content" />
  </a-modal>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    okText: {
      type: String,
      default: "",
    },
    cancelText: {
      type: String,
      default: "Cancel",
    },
    confirmLoading: {
      type: Boolean,
      default: false,
    },
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
    maskClosable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
      this.$emit("close");
    },
    submit(e) {
      this.$emit("submit");
    },
  },
};
</script>
