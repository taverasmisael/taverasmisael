module.exports = [
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
      plugins: ['gatsby-remark-images'],
    },
  },
  {
    resolve: 'gatsby-source-sanity',
    options: {
      projectId: process.env.GATSBY_SANITY_PROJECT_ID,
      dataset: process.env.GATSBY_SANITY_DATASET,
      // In case we need to use this feature
      token: process.env.GATSBY_SANITY_TOKEN,
      watchMode: true,
      overlayDrafts: true,
    },
  },
]
