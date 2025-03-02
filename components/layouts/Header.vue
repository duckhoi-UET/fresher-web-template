<template>
  <div>
    <a-layout-header
      :style="{ position: 'fixed', zIndex: 100, right: 0, left: 0 }"
      class="shadow-md flex items-center justify-between px-4"
      style="background: #fff"
    >
      <div class="flex items-center">
        <div
          class="flex items-center"
          v-if="isMobileScreen"
          @click="handleOpenSidebar"
        >
          <a-icon type="menu" />
        </div>
        <!-- <div
          class="flex items-center"
          :class="
            isMobileScreen
              ? 'pl-[20px]'
              : collapsed
              ? 'pl-[110px]'
              : 'pl-[290px]'
          "
        >
          <h1 class="font-medium text-2xl mb-0">
            {{ currentPage?.label || "" }}
          </h1>
        </div> -->
      </div>
      <div class="flex items-center justify-end">
        <div class="mr-8 flex items-center">
          <a-dropdown :trigger="['click']" placement="bottomRight">
            <div
              class="ant-dropdown-link flex justify-center"
              @click="(e) => e.preventDefault()"
            >
              <a-badge :count="1" class="cursor-pointer">
                <a-icon type="notification" />
              </a-badge>
            </div>
            <a-menu slot="overlay">
              <a-menu-item key="0">
                <div>
                  <h1>Thông báo 1</h1>
                  <span>Content thông báo 1</span>
                </div>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="2">
                <div>
                  <h1>Thông báo 2</h1>
                  <span>Content thông báo 2</span>
                </div>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="3">
                <div>
                  <h1>Thông báo 3</h1>
                  <span>Content thông báo 3</span>
                </div>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>

        <a-dropdown :trigger="['click']" placement="bottomRight">
          <a
            class="ant-dropdown-link flex items-center"
            @click="(e) => e.preventDefault()"
          >
            <span class="text-black text-base font-medium mr-2 hidden md:block">
              {{ authUser?.displayName || authUser?.email }}
            </span>
            <a-avatar
              v-if="authUser?.photoURL"
              :size="48"
              :src="authUser?.photoURL"
            />
            <div v-else>
              <div
                class="w-12 h-12 flex items-center justify-center rounded-full bg-primary-90 text-white text-xl font-medium"
              >
                {{ getName }}
              </div>
            </div>
          </a>
          <a-divider />
          <a-menu slot="overlay">
            <a-menu-item key="1" @click="handleOpenModalChangePassword">
              <a>Change password</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3" @click="confirmLogout">
              <a class="!flex items-center justify-end gap-4">
                <div class="text-base font-semibold">Sign out</div>
                <a-icon type="arrow-right" />
              </a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-layout-header>
    <ModalLogout ref="modalLogout" />
    <ModalChangePassword ref="modalChangePassword" />
  </div>
</template>

<script>
import ModalLogout from "@/components/auth/modal/Logout.vue";
import ModalChangePassword from "@/components/auth/modal/ChangePassword.vue";
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  name: "Header",
  components: {
    ModalLogout,
    ModalChangePassword,
  },

  computed: {
    authUser() {
      return (
        this.$auth?.user || {
          displayName: "Nguyễn Đức Khôi",
          photoURL:
            "https://lh3.googleusercontent.com/a/ACg8ocKc5Bs9X_6yjCgRkMQQXj6-UnIe5_eRtpJBfCb3zGtA6A=s96-c",
        }
      );
    },
    getName() {
      const arrayName = this.authUser?.displayName
        ? this.authUser?.displayName?.split(" ")
        : this.authUser?.email?.split("@");
      return (
        arrayName[0]?.charAt(0) + arrayName[arrayName.length - 1]?.charAt(0)
      );
    },
  },

  methods: {
    handleOpenModalChangePassword() {
      this.$refs.modalChangePassword.open();
    },
    confirmLogout() {
      this.$refs.modalLogout.open();
    },
    handleOpenSidebar() {
      this.$emit("handleOpenSidebar");
    },
  },
};
</script>
