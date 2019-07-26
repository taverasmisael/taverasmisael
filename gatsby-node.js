const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

const createBlogPage = async (creator, graphql) => {
  const blogTemplate = path.resolve('./src/templates/BlogEntry.js')
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    creator({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        slug,
      },
    })
  })
}

const onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
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
