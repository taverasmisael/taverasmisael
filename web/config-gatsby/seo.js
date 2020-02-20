const { siteUrl } = require('./siteMetadata')
module.exports = [
  'gatsby-plugin-netlify',
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-145300876-1',
    },
  },
  {
    resolve: 'gatsby-plugin-sitemap',
    options: { exclude: ['/contacto-exito'] },
  },
  {
    resolve: 'gatsby-plugin-canonical-urls',
    options: { siteUrl },
  },
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-redirect-from',
    options: {
      query: 'allMdx',
    },
  },
  'gatsby-plugin-meta-redirect',
]
