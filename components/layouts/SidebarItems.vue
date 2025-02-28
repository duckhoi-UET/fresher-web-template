<template>
  <a-menu
    :key="currentActive"
    theme="light"
    mode="inline"
    :open-keys="openKeys"
    :default-selected-keys="currentActive"
    class="flex justify-center flex-col items-center text-black border-none"
    @click="handleClickMenu"
    @openChange="handleOpenChange"
  >
    <template v-for="item in menusSideBar">
      <a-menu-item
        v-if="!item?.child?.length"
        :key="item.router"
        class="flex items-center gap-2"
      >
        <a-icon :type="item.icon" />
        <span v-if="!collapsed" class="font-medium text-base truncate">{{
          item.label
        }}</span>
      </a-menu-item>

      <a-sub-menu v-if="item?.child?.length" :key="item.router">
        <template slot="title">
          <a-icon :type="item.icon" />
          <span v-if="!collapsed" class="font-medium text-base truncate">{{
            item.label
          }}</span>
        </template>
        <template v-for="sidebarItemChild in item.child">
          <a-menu-item
            v-if="sidebarItemChild.router"
            :key="sidebarItemChild.router"
          >
            <span class="truncate">{{ sidebarItemChild.label }}</span>
          </a-menu-item>
        </template>
      </a-sub-menu>
    </template>
  </a-menu>
</template>

<script>
export default {
  name: "SidebarItems",

  data() {
    return {
      openKeys: [],
    };
  },
  computed: {
    currentActive() {
      return [this.$route.path];
    },
  },

  mounted() {},

  methods: {
    handleClickMenu({ key }) {
      this.$router.push(key);
      this.$emit("handleClickMenu");
    },
    handleOpenChange(keys) {
      this.openKeys = keys?.length ? [keys?.pop()] : [];
    },
  },
};
</script>
