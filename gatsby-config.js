const { resolve } = require('path')
const siteMetadata = require('./site-metadata.json')
module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Series',
      },
    },
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve('./series'),
        name: 'series',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-145300876-1',
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
      options: { color: '#ed1250', showSpinner: false },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: { exclude: ['/contacto-exito'] },
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
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: false,
              enableCustomId: true,
              removeAccents: true,
            },
          },
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              colorTheme: 'Horizon Bold',
              extensions: [
                {
                  identifier: 'jolaleye.horizon-theme-vscode',
                  version: '2.0.2',
                },
              ],
              extensionDataDirectory: resolve('.vscode-extensions'),
            },
          },
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              withWebp: true,
              traceSVG: { color: 'transparent', background: '#535c81' },
            },
          },
        ],
        plugins: ['gatsby-remark-images', 'gatsby-remark-vscode'],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: siteMetadata.siteUrl,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-redirect-from',
      options: {
        query: 'allMdx',
      },
    },
    'gatsby-plugin-meta-redirect',
  ],
}
