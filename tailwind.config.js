/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily : {
        lato : ['Lato',' sans-serif'],
      },
      colors : {
        'primary' : "#F85559",
        'gray' : "#A8A8A8",
      },
    },
  },
  plugins: [require("daisyui")],
}

