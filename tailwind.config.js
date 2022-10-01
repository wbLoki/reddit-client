/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#D7DADC",
        orange: "#cc3700",
        blue: "#5a75CC",
        grey: "#818483",
        black: "#8080801f",
      },
    },
  },
  plugins: [],
};
