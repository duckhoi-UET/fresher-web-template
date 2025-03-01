import { mapState } from "vuex";

export default {
  data() {
    return {
      isMobileScreen: window.innerWidth <= 768,
    };
  },
  computed: {
    ...mapState(["isLoading"]),

    copyRight() {
      return `Copyright &copy; 2023 - ${new Date().getFullYear()}`;
    },
  },

  mounted() {
    window.addEventListener("resize", this.onResize);
  },

  methods: {
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
