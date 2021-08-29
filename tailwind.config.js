module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        zakgreen: {
          DEFAULT: "#83c8c4"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
