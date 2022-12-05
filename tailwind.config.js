/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
  
        'textShadow':{
          'md':'-7px 7px 3px #CE1FA4',
          'lg':'7px -7px 3px #CE1FA4'
        }
     
  
  },
  plugins: [],

  
}