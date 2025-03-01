<template>
  <a-menu
    theme="light"
    mode="inline"
    :default-selected-keys="['/']"
    :selected-keys="[current]"
    class="flex justify-center flex-col items-center text-black border-none"
    @click="handleClickMenu"
  >
    <a-menu-item
      v-for="(item, index) in menusSideBar"
      :key="index"
      class="flex items-center gap-2"
      @click="$router.push(item.route)"
    >
      <a-icon :type="item.icon" />
      <span v-if="!collapsed" class="font-medium text-base truncate">{{
        item.label
      }}</span>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  name: "SidebarItems",
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      menusSideBar: [
        {
          icon: "home",
          label: "Dashboard",
          route: "/",
          key: "/",
        },

        {
          icon: "user",
          label: "History login list",
          route: "/users",
          key: "/users",
        },
      ],
      current: 0,
    };
  },

  mounted() {},

  methods: {
    handleClickMenu(e) {
      this.current = e.key;
      this.$emit("handleClickMenu");
    },
  },
};
</script>
