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
        @keyup.native.enter="handleSubmit"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input-password>
    </a-form-model-item>

    <a-form-model-item>
      <div class="flex flex-col">
        <div class="flex justify-between">
          <a-checkbox v-model="form.remember"> Remember me </a-checkbox>
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
      user: {
        displayName: "Nguyễn Đức Khôi",
        photoURL:
          "https://lh3.googleusercontent.com/a/ACg8ocKc5Bs9X_6yjCgRkMQQXj6-UnIe5_eRtpJBfCb3zGtA6A=s96-c",
      },
    };
  },

  methods: {
    handleSubmit() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          const response = await this.$axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAm07YCWGs4mAVMPZ58XcdU8GIrujQ8mEs`,
            { ...this.form, returnSecureToken: true }
          );
          if (response) {
            const { idToken } = response.data;
            this.$auth.setUserToken(idToken);
            this.$auth.setStrategy("local");
            this.$auth.setUser(response.data);
            sessionStorage.setItem("inforUser", JSON.stringify(this.user));
            this.$router.push("/");
            this.$message.success("Đăng nhập thành công");
          }
        } else {
          return false;
        }
      });
    },
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
