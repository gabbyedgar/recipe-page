/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bgz': "url('src/assets/images/background.jpeg')"
      },
      colors: {
        'primary': "#3A1C36",
        "secondary": "#F7F1EB",
      },
    },
  },
  plugins: [],
}