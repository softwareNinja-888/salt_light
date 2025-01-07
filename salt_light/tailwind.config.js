/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      fontFamily: {
        geist: ['geist','sans-serif'],
        lora: ['lora','sans-serif'],
        nunito: ['nunito','sans-serif'],
        poppins: ['poppins','sans-serif'],
        source: ['source','sans-serif'],
        fira: ['fira','sans-serif'],
        inter: ['inter','sans-serif'],
        roboto: ['roboto','sans-serif'],
      },
      backgroundImage: {
        'header': "url('/bg/bg2.jpg')",
        'header2': "url('/bg/bg1.jpg')"
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens')
  ],
}

