/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainBgColor": "#49243E",
        "textColor": "#DBAFA0",
        "lineColor": "#030637",
        "contrastColor": "#DBAFA0"
        
      }
    },
  },
  plugins: [],
}

