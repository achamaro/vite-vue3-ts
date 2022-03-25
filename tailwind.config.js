module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        nav: 10,
        floating: 20,
        modal: 30,
        loading: 40,
        dialog: 50,
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
