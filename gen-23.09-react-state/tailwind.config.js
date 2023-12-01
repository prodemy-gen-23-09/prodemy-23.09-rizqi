/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#F9F1E7",
        color1_selected: "#B88E2F",
        color2: "#816DFA",
        color3: "#F4F5F7",
        color_selected: "#B88E2F",
        color_home : "#FFF3E3"
      },
    },
  },
  plugins: [],
}

