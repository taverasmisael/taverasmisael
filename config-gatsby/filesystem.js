const { resolve } = require('path')

module.exports = [
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: resolve('./src/pages'),
      name: 'pages',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: resolve('./src/shared/assets'),
      name: 'assets',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: resolve('./posts'),
      name: 'posts',
    },
  },
]
