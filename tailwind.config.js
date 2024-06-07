/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:'40px',
      width:'1200px'
          },
    extend: {},
  },
  plugins: [],
}