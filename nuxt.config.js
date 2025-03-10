export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    title: "admin",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  generate: {
    fallback: true,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/ant/main.less",
    "@/assets/scss/main.scss",
    "@/assets/css/tailwind.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/antd-ui",
    "@/assets/css/tailwind.css",
    "@/plugins/mixins",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next", "@nuxtjs/firebase"],
  firebase: {
    config: {
      apiKey: "AIzaSyAm07YCWGs4mAVMPZ58XcdU8GIrujQ8mEs",
      authDomain: "ecommerce-224b0.firebaseapp.com",
      projectId: "ecommerce-224b0",
      storageBucket: "ecommerce-224b0.appspot.com",
      messagingSenderId: "972578205949",
      appId: "1:972578205949:web:9438cd8cf1fbbd5ad60e94",
      measurementId: "G-5GVMR28ZQ3",
    },
    services: {
      auth: true, // Just as example. Can be any other service.
    },
  },
  render: {
    http2: {
      push: true,
    },
  },
  auth: {
    strategies: {
      local: {
        autoLogout: false,
        user: { property: false },
        endpoints: {
          login: false,
          logout: false,
          user: false,
        },
        redirect: {
          login: "/login",
          logout: "/",
          callback: "/login",
          home: "/",
        },
      },
    },
  },
  router: {
    middleware: ["auth"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          math: "always",
        },
      },
    },
    babel: {
      plugins: [
        [
          "import",
          {
            libraryName: "ant-design-vue",
            libraryDirectory: "es",
            style: true,
          },
          "ant-design-vue",
        ],
      ],
    },
  },
};
