/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    colors: {
      "green-900": "#0a5344",
      "green-800": "#0d6d5a",
      "green-700": "#108d74",
      "green-600": "#15b494",
      "green-500": "#17c6a3",
      "green-400": "#45d1b5",
      "green-300": "#64d9c1",
      "green-200": "#94e5d5",
      "green-100": "#b7ede2",
      "green-50": "#e8f9f6",

      "grey-10": "#FBFBFB",
      "grey-50": "#e9e9e9",
      "grey-100": "#b9b9b9",
      "grey-200": "#989898",
      "grey-300": "#686868",
      "grey-400": "#4b4b4b",
      "grey-500": "#1e1e1e",
      "grey-600": "#1b1b1b",
      "grey-700": "#151515",
      "grey-800": "#111111",
      "grey-900": "#0d0d0d",

      negative: "#FC4547",
      "negative-25": "#FED0D1",
      warning: "#FEA53F",
      "warning-25": "#FEE8CF",
      link: "#3EAFFF",
      "link-25": "#CEEBFF",
      positive: "#37C976",
      "positive-25": "#37C976",
    },
  },
  plugins: [],
};
