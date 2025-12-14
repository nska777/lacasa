/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
  extend: {
    colors: {
      bg: "#0D0D0F",
      bgSoft: "#131317",
      gold: "#C1A46C",
      text: "#EAEAEA",
      textMuted: "#9B9B9B",
    },
  },
},

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
