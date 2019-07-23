/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: 'https://taverasmisael.com',
    title: 'Misael Taveras Personal Website',
    author: 'Misael Taveras',
    socialHandler: '@taverasmisael',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/uploads`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        srcSetBreakpoints: [200, 340, 520, 890],
        defaultQuality: 75,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-material-ui',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: { color: 'green', showSpinner: false },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Roboto Mono:400,700:latin', // Titles
            'Roboto Condensed:200,400,700:latin', // Body
          ],
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_self',
              rel: 'nofollow',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
            },
          },
        ],
      },
    },
  ],
}
