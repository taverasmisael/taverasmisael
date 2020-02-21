const { resolve } = require('path')

const {
  api: { projectId, dataset },
} = requireSanityConfig('../../studio/sanity.json')

module.exports = [
  {
    resolve: 'gatsby-transformer-yaml',
    options: {
      typeName: 'Series',
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
        'gatsby-remark-vscode',

        'gatsby-remark-relative-images',
        {
          resolve: 'gatsby-remark-external-links',
          options: {
            target: '_blank',
            rel: 'nofollow',
          },
        },
        {
          resolve: 'gatsby-remark-images',
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
    resolve: 'gatsby-source-sanity',
    options: {
      projectId,
      dataset,
      // In case we need to use this feature
      token: process.env.SANITY_TOKEN,
      watchMode: true,
      overlayDrafts: true,
    },
  },
]

/**
 * We're requiring a file in the studio folder to make the monorepo
 * work "out-of-the-box". Sometimes you would to run this web frontend
 * in isolation (e.g. on codesandbox). This will give you an error message
 * with directions to enter the info manually or in the environment.
 */

function requireSanityConfig(path) {
  try {
    return require(path)
  } catch (e) {
    console.error(
      'Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js'
    )
    return {
      api: {
        projectId: process.env.SANITY_PROJECT_ID || '',
        dataset: process.env.SANITY_DATASET || '',
      },
    }
  }
}
