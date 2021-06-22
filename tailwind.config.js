module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      body: ["Vazir", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    rtl: true,
  },
};
