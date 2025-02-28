<template>
  <a-drawer placement="left" :visible="visibleSidebar" @close="onClose">
    <template #title>
      <div class="w-24"><img src="~/assets/images/logo/logo.png" alt="" /></div>
    </template>
    <SidebarItems @handleClickMenu="onClose" />
  </a-drawer>
</template>

<script>
import SidebarItems from "./SidebarItems.vue";
export default {
  name: "SidebarMobile",
  props: {
    visibleSidebar: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SidebarItems,
  },

  methods: {
    onClose() {
      this.$emit("update:visibleSidebar", false);
    },
  },
};
</script>
