const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const { normalizeTag } = require('./utils')

const createBlogPage = async (creator, graphql, reporter) => {
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
    reporter.panicOnBuild('[ERROR]: Creating blog pages')
    return
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

const createTagsPages = async (creator, graphql, reporter) => {
  const tagsTemplate = path.resolve('./src/templates/TagsList.js')
  const { data, errors } = await graphql(`
    query {
      allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild('[ERROR]: Creating tags pages')
    return
  }

  data.allMdx.group.forEach(tag => {
    creator({
      component: tagsTemplate,
      path: `/tags/${normalizeTag(tag.fieldValue)}`,
      context: {
        tag: tag.fieldValue,
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

const onCreatePages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  await Promise.all([
    createTagsPages(createPage, graphql, reporter),
    createBlogPage(createPage, graphql, reporter),
  ])
}

exports.onCreateNode = onCreateNode
exports.createPages = onCreatePages
