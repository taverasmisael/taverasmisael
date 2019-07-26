const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

const createBlogPage = async (creator, graphql) => {
  const blogTemplate = path.resolve('./src/templates/BlogEntry.js')
  const { data, errors } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (errors) {
    console.error(errors)
    throw errors
  }

  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    creator({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        id: edge.node.id,
      },
    })
  })
}

const onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: 'posts' }).replace(
      /\//g,
      ''
    )
    createNodeField({ node, name: 'slug', value: slug })
  }
}

const onCreatePages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await createBlogPage(createPage, graphql)
}

exports.onCreateNode = onCreateNode
exports.createPages = onCreatePages
