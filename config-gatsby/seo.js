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
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'TaverasMisael Web',
      short_name: 'TaverasMisael',
      start_url: '/',
      background_color: '#293462',
      theme_color: '#ed1250',
      // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
      // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
      display: 'standalone',
      icon: 'static/icon.png',
      crossOrigin: 'use-credentials',
    },
  },
  'gatsby-plugin-offline',
  {
    resolve: 'gatsby-plugin-mailchimp',
    options: {
      endpoint: process.env.GATSBY_MAILCHIMP_ENDPOINT,
      timeout: 3500,
    },
  },
  {
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      queries: require('../src/utils/algolia-queries'),
    },
  },

  // Keep me last
  'gatsby-plugin-client-side-redirect',
]
