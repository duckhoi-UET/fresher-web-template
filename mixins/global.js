import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      menusSideBar: [
        {
          icon: "home",
          label: "Dashboard",
          router: "/",
        },

        {
          icon: "user",
          label: "Users",
          router: "/users",
        },
      ],
      isMobileScreen: window.innerWidth <= 768,
    };
  },
  computed: {
    ...mapState(["isLoading"]),

    copyRight() {
      return `Copyright &copy; 2023 - ${new Date().getFullYear()}, <br/> KhoiND Corporation`;
    },
  },

  mounted() {
    window.addEventListener("resize", this.onResize);
  },

  methods: {
    ...mapActions(["setLoading"]),
    onResize() {
      if (innerWidth <= 768) {
        this.isMobileScreen = true;
      } else {
        this.isMobileScreen = false;
      }
    },
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
