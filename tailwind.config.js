module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      yellow: "#f1cb69",
      nude: "#f1dca7",
      darkgray: "#797d62",
      skyblue: "#94d2bd",
    },
    extend: {},
    fontFamily: {
      heading: ["Allura", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
