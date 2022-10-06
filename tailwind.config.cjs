/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        abu: "#848688",
        merah: "#ED3237",
        "biru-2": "#2D9CDB",
        placeholder: "#BDBDBD",
        "input-border": "#ECEFF1",
        "modals-bg": "rgba(0,0,0,0.65)",
        "toggle-bg": "#1976D2",
        "toggle-button": "#1976D2",
      },
      padding: {
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        full: "100%",
      },
      borderColor: {
        tipis: "rgba(0,0,0,0.25)",
      },
      maxWidth: {
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/2": "50%",
      },
      maxHeight: {
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
