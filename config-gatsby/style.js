module.exports = [
  'gatsby-plugin-material-ui',
  {
    resolve: 'gatsby-plugin-nprogress',
    options: { color: '#ed1250', showSpinner: false },
  },
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: [
          'Overpass Mono:400,700', // Titles
          'Roboto:300,400,500&display=swap', // Body
        ],
      },
    },
  },
]
