/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./components/**/*.vue", "./pages/**/*.vue", "./layouts/**/*.vue"],
  theme: {
    extend: {
      spacing: {
        41: "41.5px",
      },
    },
    colors: {
      black: colors.black,
      white: colors.white,
      primary: {
        100: "#409EFF",
        90: "#2563EB",
        80: "#66B1FF",
        60: "#A0CFFF",
        40: "#4F80E1",
        20: "#D9ECFF",
        10: "#EFF6FF",
      },
      gray: {
        5: "#B9CDF7",
        10: "#DEDEDE",
        20: "#E2E8F0",
        40: "#F8FAFC",
        60: "#ACACAC",
        80: "#474953",
        90: "#30323E",
        95: "#252733",
        98: "#1D1F2C",
        100: "#191B28",
      },
      purple: {
        20: "#F4ECFB",
      },
      green: {
        10: "#E9FAF7",
        30: "#1A9882",
      },
      red: {
        100: "#E82727",
      },
      dark: {
        50: "#020202",
      },
    },
  },
  plugins: [],
};
