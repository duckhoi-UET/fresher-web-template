<template>
  <a-modal
    v-model="visible"
    destroy-on-close
    :mask-closable="false"
    :title="`${user ? 'Edit' : 'Create'}`"
    width="650px"
  >
    <UserForm ref="userForm" :user="user" @submit="handleSubmit" />
    <div slot="footer" class="flex justify-center items-center gap-2">
      <a-button @click="close"> Cancel </a-button>
      <a-button type="primary" @click="$refs.userForm.submit()">
        Submit
      </a-button>
    </div>
  </a-modal>
</template>

<script>
import UserForm from "@/components/users/Form.vue";
import { mapActions } from "vuex";

export default {
  components: {
    UserForm,
  },

  data() {
    return {
      visible: false,
      user: null,
    };
  },

  mounted() {},

  methods: {
    ...mapActions(["createUser", "updateUser"]),
    open(user) {
      this.user = user;
      this.visible = true;
    },

    close() {
      this.visible = false;
    },

    async handleSubmit(form) {
      if (this.user) {
        await this.handleUpdateUser(form);
      } else {
        await this.handleCreateUser(form);
      }
      this.close();
      await this.$nuxt.refresh();
    },

    async handleCreateUser(form) {
      try {
        this.createUser(form);
        this.close();
        this.$message.success("Successfully created user");
      } catch (error) {
        this.$message.error("Create user failed");
      }
    },

    async handleUpdateUser(form) {
      try {
        this.updateUser({ id: this.user.id, data: { ...this.user, ...form } });
        this.close();
        this.$message.success("Updated successfully");
      } catch (error) {
        this.$message.error("Update failed");
      }
    },
  },
};
</script>
