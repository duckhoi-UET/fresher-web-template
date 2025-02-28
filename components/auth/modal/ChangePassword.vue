<template>
  <Modal
    ref="changePassword"
    title="Change password"
    destroyOnClose
    @close="close"
    @submit="submit"
  >
    <template #content>
      <a-form-model
        ref="ruleForm"
        id="components-form-login"
        :model="form"
        :rules="rules"
        class="login-form"
        autocomplete="off"
      >
        <a-form-model-item label="Enter the password" prop="password">
          <a-input-password
            v-model="form.password"
            placeholder="Password"
            type="password"
            autocomplete="off"
            size="large"
            @input="resetValidateField('ruleForm', 'password')"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input-password>
        </a-form-model-item>

        <a-form-model-item label="Enter the new password" prop="newPassword">
          <a-input-password
            v-model="form.newPassword"
            type="password"
            placeholder="Password"
            autocomplete="off"
            size="large"
            @input="resetValidateField('ruleForm', 'newPassword')"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input-password>
        </a-form-model-item>
        <a-form-model-item label="Enter the new password" prop="reNewPassword">
          <a-input-password
            v-model="form.reNewPassword"
            type="password"
            placeholder="Password"
            autocomplete="off"
            size="large"
            @input="resetValidateField('ruleForm', 'reNewPassword')"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input-password>
        </a-form-model-item>
      </a-form-model>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/common/Modal";
import { cloneDeep } from "lodash";
import { mapActions } from "vuex";

const defaultForm = {
  password: "",
  newPassword: "",
  reNewPassword: "",
};

export default {
  name: "ModalChangePassword",
  components: {
    Modal,
  },
  data() {
    return {
      form: cloneDeep(defaultForm),
      rules: {
        newPassword: [
          {
            required: true,
            message: "Please input new Password",
            trigger: "blur",
          },
          {
            min: 6,
            max: 12,
            message: "Length should be 6 to 12",
            trigger: "blur",
          },
        ],
        reNewPassword: [
          {
            required: true,
            message: "Please input new Password",
            trigger: "blur",
          },
          {
            min: 6,
            max: 12,
            message: "Length should be 6 to 12",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please input Password",
            trigger: "blur",
          },
          {
            min: 6,
            max: 12,
            message: "Length should be 6 to 12",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions("authen", ["changePassword"]),
    open() {
      this.$refs.changePassword.open();
    },
    close() {
      this.form = cloneDeep(defaultForm);
    },
    submit() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          if (this.form.newPassword !== this.form.reNewPassword) {
            this.$message.error("New password is Invalid");
            return;
          }
          try {
            this.setLoading(true);
            const result = await this.changePassword({
              password: this.form.password,
              newPassword: this.form.newPassword,
            });
            if (result) {
              this.$message.success("Password changed successfully");
              this.$refs.changePassword.close();
              this.close();
            }
          } catch (error) {
            this.$message.error(error.response.data?.message);
          } finally {
            this.setLoading(false);
          }
        } else {
          return;
        }
      });
    },
  },
};
</script>
