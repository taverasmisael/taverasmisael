const escapeStringRegexp = require('escape-string-regexp')
const pagePath = 'posts'
const indexName = 'Posts'

const pageQuery = `{
  posts: allMdx(filter: {
    frontmatter: { status: { eq: "published" } },
    fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" }
  }) {
    edges {
      node {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  }
}
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.posts.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]
module.exports = queries
