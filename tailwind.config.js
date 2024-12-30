/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/FightView.js",
    "./src/components/Main.js",
    "./src/components/Contents.js",
    "./src/components/UserState.js",
    "./src/components/Menu.js",
    "./src/components/Store.js",
  ],
  theme: {
    extend: {
      colors : {
        "contBg" : "#3f3f3f",
        "mainBg" : "#2f2f2f",
        "menuBg" : "#202020",
        "btntext" : "#4f4f4f",
      },
      fontSize : {
      }
    },
  },
  plugins: [],
}

