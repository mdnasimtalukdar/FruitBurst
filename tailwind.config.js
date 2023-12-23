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
        'gray' : "#12121219",
      },
    },
  },
  plugins: [require("daisyui")],
}

