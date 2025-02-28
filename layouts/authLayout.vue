<template>
  <div class="min-h-screen grid sm:grid-cols-1 md:grid-cols-2">
    <div class="bg-primary-90 !hidden md:!flex justify-between flex-col py-8">
      <div class="mx-auto">
        <img
          class="sm:w-[500px] md:w-[300px] lg:w-[400px] 2xl:w-[500px]"
          src="~/assets/images/login.png"
          alt=""
        />
      </div>
      <div class="text-center mb-16">
        <h1
          class="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-medium"
        >
          Customizable Multipurpose Dashboard
        </h1>
        <span class="text-xs lg:text-sm xl:text-base text-gray-5 mt-5 block">
          Everything you need in an easily customizable dashboard.
        </span>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <Nuxt />
    </div>
    <Loading v-if="isLoading" />
  </div>
</template>

<script>
import Loading from "@/components/common/Loading";
export default {
  name: "AuthLayout",
  components: {
    Loading,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
