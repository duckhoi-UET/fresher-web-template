<template>
  <div class="flex justify-center gap-8 mt-6">
    <div
      class="flex items-center gap-2 border-gray-20 border px-8 py-3 rounded-lg text-base text-black font-medium cursor-pointer hover:border-primary-90"
      @click="loginWithGoogle"
    >
      <img src="~/assets/images/icons/google.png" alt="" />
      Google
    </div>
    <div
      class="flex items-center gap-2 border-gray-20 border px-8 py-3 rounded-lg text-base text-black font-medium cursor-pointer hover:border-primary-90"
    >
      <img src="~/assets/images/icons/facebook.png" alt="" />
      Facebook
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
  name: "SocialLogin",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    async loginWithGoogle() {
      try {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
          prompt: "select_account",
        });
        const auth = getAuth();

        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        sessionStorage.setItem("inforUser", JSON.stringify(user));
        await this.$auth.setUserToken(token);
        await this.$auth.setUser(user);
        this.$router.push("/");
      } catch (error) {}
    },
  },
};
</script>
