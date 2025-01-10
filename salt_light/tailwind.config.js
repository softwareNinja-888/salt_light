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
        'header': "url('/bg/bgA1.webp')",
        'header1': "url('/bg/bgC1.webp')",
        'header2': "url('/bg/bgD1.webp')",
        'header3': "url('/bg/bgE1.webp')",
        'header4': "url('/bg/bgF1.webp')",
        
      },
      backgroundColor: {
        'theme': '#17282f'
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens')
  ],
}

