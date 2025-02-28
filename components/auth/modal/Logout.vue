<template>
  <Modal
    ref="modalLogout"
    title="Sign out"
    okText="Sign out"
    :confirmLoading="isLoadingBtn"
    @submit="handleLogout"
  >
    <template #content>
      <div class="text-base">Do you want sign out?</div>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/common/Modal";
import { mapActions } from "vuex";
export default {
  name: "ModalLogout",
  components: {
    Modal,
  },
  methods: {
    ...mapActions("authen", ["logout"]),
    open() {
      this.$refs.modalLogout.open();
    },
    async handleLogout() {
      this.setLoadingBtn(true);
      await this.logout();
      await this.$auth.logout();
      this.$refs.modalLogout.close();
      this.setLoadingBtn(false);
      this.$router.push("/login");
    },
  },
};
</script>
