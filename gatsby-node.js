const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const { normalizeTag } = require('./utils')

const TEMPLATES = {
  blog: path.resolve('./src/templates/BlogEntry.js'),
  blogList: path.resolve('./src/templates/BlogList.js'),
  tags: path.resolve('./src/templates/TagsList.js'),
}

const createBlogPage = async (creator, graphql, reporter) => {
  const { data, errors } = await graphql(`
    query {
      posts: allMdx(filter: { frontmatter: { status: { eq: "published" } } }) {
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

  const { posts } = data

  posts.edges.forEach(edge => {
    const path = edge.node.fields.slug
    creator({
      path,
      component: TEMPLATES.blog,
      context: { id: edge.node.id },
    })
  })
}

const createTagsPages = async (creator, graphql, reporter) => {
  const { data, errors } = await graphql(`
    query {
      allMdx(filter: { frontmatter: { status: { eq: "published" } } }) {
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
      component: TEMPLATES.tags,
      path: `/blog/tags/${normalizeTag(tag.fieldValue)}`,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

const createBlogListPage = async (creator, graphql, reporter) => {
  const { data, errors } = await graphql(`
    query {
      posts: allMdx(
        filter: { frontmatter: { status: { eq: "published" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
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

  const posts = data.posts.edges

  const postsPerPage = 5
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    const INFO = {
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: TEMPLATES.blogList,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    }
    creator(INFO)
  })
}

const onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const { fileAbsolutePath } = node
    const isPost = fileAbsolutePath.includes('/posts/')

    const postName = createFilePath({
      node,
      getNode,
      basePath: isPost ? 'posts' : path.resolve(fileAbsolutePath, '../../'),
      trailingSlash: false,
    }).replace(/\/\//g, '/')

    const slug = 'blog'

    const value = `/${slug}${postName}`
    createNodeField({ node, name: 'slug', value })
  }
}

const onCreatePages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  await Promise.all([
    createTagsPages(createPage, graphql, reporter),
    createBlogPage(createPage, graphql, reporter),
    createBlogListPage(createPage, graphql, reporter),
  ])
}

exports.onCreateNode = onCreateNode
exports.createPages = onCreatePages
