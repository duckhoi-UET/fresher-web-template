<template>
  <Fragment>
    <a-layout
      id="components-layout-demo-custom-trigger "
      class="min-h-screen bg-gray-1 flex flex-col"
    >
      <Sidebar v-if="!isMobileScreen" :collapsed.sync="collapsed" />
      <SidebarMobile v-else :visibleSidebar.sync="visibleSidebar" />
      <a-layout
        :style="{
          marginLeft: !isMobileScreen
            ? collapsed
              ? '80px'
              : '256px'
            : 'unset',
          background: '#F6F8FF',
        }"
      >
        <Header :collapsed="collapsed" @handleOpenSidebar="handleOpenSidebar" />
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '16px',
            minHeight: '280px',
            marginTop: '84px',
            paddingTop: '16px',
          }"
        >
          <Nuxt />
        </a-layout-content>
      </a-layout>
    </a-layout>
    <Loading v-if="isLoading" />
  </Fragment>
</template>
<script>
import { Fragment } from "vue-frag";
import Sidebar from "@/components/layouts/Sidebar.vue";
import SidebarMobile from "@/components/layouts/SidebarMobile.vue";
import Header from "@/components/layouts/Header.vue";
import Loading from "@/components/common/Loading";
export default {
  name: "DefaultLayout",
  components: {
    Fragment,
    SidebarMobile,
    Sidebar,
    Header,
    Loading,
  },
  data() {
    return {
      collapsed: false,
      visibleSidebar: false,
    };
  },
  created() {
    if (sessionStorage.getItem("inforUser") && this.$auth.loggedIn) {
      this.$auth.setUser(JSON.parse(sessionStorage.getItem("inforUser")));
    }
  },

  methods: {
    handleOpenSidebar() {
      this.visibleSidebar = true;
    },
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
</style>
