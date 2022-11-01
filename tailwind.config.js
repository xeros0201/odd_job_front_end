module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: {
        '100':100,
        '200':200,
        '300':300,
        '400':400,
        '500':500,
        '600':600
      },
      colors: {
      
        'whiteText':'#FFFFFF',
        'blackText':'#191919',
     
      },
      fontFamily:{

        U:['Ubuntu', 'sans-serif']
      },
    },
  },
  plugins: [],
}

