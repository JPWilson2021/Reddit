module.exports = {
  purge: ['./src/*.js', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        reddit_dark:{
          DEFAULT: '#171717',
          brighter: '#272728',
        },
        reddit_border:{
          DEFAULT: '#343536',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
