export default {
  name: 'project',
  label: 'Projects',
  type: 'document',

  fields: [
    { name: 'name', type: 'string', label: 'Name' },
    { name: 'url', type: 'slug', label: 'URL' },
    {
      name: 'isInternal',
      type: 'boolean',
      label: 'Is internal',
      description: 'Check if the URL is an internal URL',
    },
    {
      name: 'techStack',
      type: 'array',
      label: 'Tech Stack',
      options: {
        layout: 'tags',
      },
      of: [{ type: 'string' }],
    },
    { name: 'body', type: 'text', label: 'Description' },
    {
      name: 'banner',
      type: 'image',
      label: 'Image',
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'name',
      techStack: 'techStack',
      description: 'body',
      media: 'banner',
    },
    prepare(selection) {
      const { techStack = [] } = selection

      return {
        ...selection,
        subtitle: techStack.join('–'),
      }
    },
  },
}
