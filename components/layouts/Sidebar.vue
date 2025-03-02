<template>
  <a-layout-sider
    :width="'256px'"
    :style="{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
      left: 0,
      background: '#fff',
      zIndex: 101,
    }"
    class="shadow-md border-r-[1px] border-gray-10"
    :value="collapsed"
    collapsible
    @collapse="collapse"
  >
    <div class="flex flex-col justify-between h-full">
      <div>
        <div class="flex justify-center my-5">
          <img class="w-2/3" src="~/assets/images/logo/logo.jpg" alt="" />
        </div>
        <a-divider />
        <SidebarItems :collapsed="collapsed" />
      </div>
      <div v-if="!collapsed" class="text-center">
        <h1 v-html="copyRight"></h1>
      </div>
    </div>
  </a-layout-sider>
</template>

<script>
import SidebarItems from "./SidebarItems.vue";
export default {
  name: "Sidebar",
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SidebarItems,
  },

  methods: {
    collapse(e) {
      this.$emit("update:collapsed", e);
    },
  },
};
</script>
