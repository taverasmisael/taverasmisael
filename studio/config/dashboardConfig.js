export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Website',
            id: process.env.SANITY_STUDIO_NETLIFY_APP_ID,
            apiId: process.env.SANITY_STUDIO_NETLIFY_APP_ID,
            buildHookId: process.env.SANITY_STUDIO_NETLIFY_HOOK_ID,
            name: 'taverasmisael',
          },
        ],
      },
    },
  ],
}
