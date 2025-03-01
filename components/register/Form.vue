<template>
  <a-form-model
    ref="ruleForm"
    id="components-form-login"
    :model="form"
    :rules="rules"
    class="login-form"
    autocomplete="off"
  >
    <a-form-model-item prop="fullName">
      <a-input
        v-model="form.fullName"
        placeholder="Full Name"
        autocomplete="off"
        size="large"
        @input="resetValidateField('ruleForm', 'fullName')"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item prop="email">
      <a-input
        v-model="form.email"
        placeholder="Email"
        autocomplete="off"
        size="large"
        @input="resetValidateField('ruleForm', 'email')"
      >
        <a-icon slot="prefix" type="mail" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item prop="username">
      <a-input
        v-model="form.username"
        placeholder="Username"
        autocomplete="off"
        size="large"
        @input="resetValidateField('ruleForm', 'username')"
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
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input-password>
    </a-form-model-item>
    <a-form-model-item prop="rePassword">
      <a-input-password
        v-model="form.rePassword"
        type="password"
        placeholder="Re Password"
        autocomplete="off"
        size="large"
        @input="resetValidateField('ruleForm', 'rePassword')"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input-password>
    </a-form-model-item>

    <a-form-model-item>
      <div class="flex flex-col">
        <a-checkbox v-model="form.accept">
          By creating an account means you agree to the
          <b>Terms & Conditions</b> and our <b>Privacy Policy</b>
        </a-checkbox>

        <Button
          class="my-4"
          text="Sign Up"
          size="large"
          @click="handleSubmit"
        />
        <div>
          Already have an account?
          <a class="text-primary-90 font-bold" @click="goToLogin"> Log In </a>
        </div>
      </div>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import Button from "@/components/common/Button";
import { mapActions } from "vuex";
export default {
  name: "LoginForm",
  components: {
    Button,
  },

  data() {
    return {
      form: {
        fullName: "",
        email: "",
        username: "",
        password: "",
        rePassword: "",
        accept: false,
      },
      rules: {
        fullName: [
          {
            required: true,
            message: "Please input full name",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Please input Email",
            trigger: "blur",
          },
        ],
        username: [
          {
            required: true,
            message: "Please input Username",
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
        rePassword: [
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
    ...mapActions("authen", ["register"]),
    handleSubmit() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
        }
      });
    },
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss">
#components-form-login {
  .ant-input {
    @apply pl-9 #{!important};
  }
}
</style>
