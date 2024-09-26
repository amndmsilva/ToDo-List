/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {

      "danger": "#E25858",

      "blue-dark": "#1E6F9F",
      "blue-regular": "#4EA8DE",
      "purple-dark": "#5E60CE",
      "purple-regular": "#8284FA",
      
      "grey-100": "#F2F2F2",
      "grey-200": "#D9D9D9",
      "grey-300": "#808080",
      "grey-400": "#333333",
      "grey-500": "#262626",
      "grey-600": "#1A1A1A",
      "grey-700": "#0D0D0D",
    },
    fontFamily: {
      "sans":  '"Inter", sans-serif',
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}