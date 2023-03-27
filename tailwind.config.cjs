/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#011D21",
        "sky-blue": "#DDE6F2",
        "light-blue": "#478CCC",
        "deep-blue": "#25313B",
        "theme-yellow": "#FBB000",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "header-body-vector": "url('/src/assets/img/header-body-vector.svg')",
        "long-img": "url('/src/assets/img/long-img.jpg')",
      },
    },
  },
  plugins: [],
};
