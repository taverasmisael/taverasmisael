import { graphql } from 'gatsby'

export const BlogPostNode = graphql`
  fragment BlogPostNode on Mdx {
    id
    shortExcerpt: excerpt(pruneLength: 100)
    excerpt(pruneLength: 300)
    fields {
      slug
    }
    frontmatter {
      title
      tags
      date(formatString: "DD [de] MMMM YYYY", locale: "es")
      banner {
        childImageSharp {
          fixed(
            width: 200
            height: 200
            traceSVG: { color: "#f04173", background: "#535c81" }
          ) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
          fluid(
            maxWidth: 960
            traceSVG: { color: "#f04173", background: "#535c81" }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`
