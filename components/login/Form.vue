<template>
  <a-form-model
    ref="ruleForm"
    id="components-form-login"
    :model="form"
    :rules="rules"
    class="login-form"
    autocomplete="off"
  >
    <a-form-model-item prop="email">
      <a-input
        v-model="form.email"
        placeholder="Email"
        autocomplete="off"
        size="large"
        @input="resetValidateField('ruleForm', 'email')"
        @keyup.native.enter="handleSubmit"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>

    <a-form-model-item prop="password">
      <a-input-password
        v-model="form.password"
        type="password"
        placeholder="Password"
        autocomplete="off"
        size="large"
        @input="resetValidateField('ruleForm', 'password')"
        @keyup.native.enter="handleSubmit"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input-password>
    </a-form-model-item>

    <a-form-model-item>
      <div class="flex flex-col">
        <div class="flex justify-between">
          <a-checkbox v-model="form.remember"> Remember me </a-checkbox>
          <a class="login-form-forgot" @click="handleForgotPassword">
            Forgot password
          </a>
        </div>
        <Button
          class="my-4"
          text="Sign In"
          size="large"
          @click="handleSubmit"
        />
        <div>
          Or
          <a class="text-primary-90 font-bold" @click="goToRegister">
            register now!
          </a>
        </div>
      </div>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import Button from "@/components/common/Button";
export default {
  name: "LoginForm",
  components: {
    Button,
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
        remember: false,
      },
      rules: {
        email: [
          {
            required: true,
            message: "Please input email",
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
    handleSubmit() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          this.setLoading(true);
          await this.$auth
            .loginWith("local", {
              data: {
                ...this.form,
              },
            })
            .then(() => {
              this.$router.push("/admin");
              this.$message.success("Sign in successfully!");
            })
            .catch((error) => {
              this.$message.error(error.response.data.message);
            })
            .finally(() => {
              this.setLoading(false);
            });
        } else {
          return false;
        }
      });
    },
    goToRegister() {
      this.$router.push("/register");
    },
    handleForgotPassword() {
      this.$router.push("/forgot-password");
    },
  },
};
</script>
