<template>
  <div class="sm:w-[400px] md:w-[300px] lg:w-[400px]">
    <div class="mb-8">
      <h1 class="text-black text-3xl font-bold">Sign In to your Account</h1>
      <h3 class="text-gray-40 mt-3">Welcome back! please enter your detail</h3>
    </div>
    <LoginForm />
    <div class="w-full">
      <div class="flex items-center gap-6">
        <div class="border-b-gray-10 border-b flex-1"></div>
        <span>Or sign in with</span>
        <div class="border-b-gray-10 border-b flex-1"></div>
      </div>
      <SocialLogin />
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/login/Form";
import SocialLogin from "@/components/common/SocialLogin";

export default {
  name: "Login",
  layout: "authLayout",
  components: {
    LoginForm,
    SocialLogin,
  },
};
</script>

<style>
#components-form-demo-normal-login .login-form {
  max-width: 500px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
