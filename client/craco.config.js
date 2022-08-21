module.exports = {
    style: {
    //replaced postcss with postcssOptions due to match.loader.options.plugins is not a function error
     postcssOptions: {
       plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};