<template>
  <div class="max-w-[400px] min-w-[400px]">
    <div class="mb-8">
      <h1 class="text-black text-3xl font-bold">Sign Up for an Account</h1>
    </div>
    <RegisterForm />
    <div class="w-full">
      <div class="flex items-center gap-6">
        <div class="border-b-gray-10 border-b flex-1"></div>
        <span>Or sign up with</span>
        <div class="border-b-gray-10 border-b flex-1"></div>
      </div>
      <SocialLogin />
    </div>
  </div>
</template>

<script>
import RegisterForm from "@/components/register/Form";
import SocialLogin from "@/components/common/SocialLogin";

export default {
  name: "Login",
  layout: "authLayout",
  auth: false,
  components: {
    RegisterForm,
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
