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
    }
  }
`

export const ImageSharpFluidMax = graphql`
  fragment ImageSharpFluidMax on ImageSharp {
    fluid(
      maxWidth: 960
      traceSVG: { color: "#f04173", background: "#535c81" }
    ) {
      ...GatsbyImageSharpFluid_withWebp_tracedSVG
    }
  }
`
export const ImageSharpFluidMin = graphql`
  fragment ImageSharpFluidMin on ImageSharp {
    fluid(
      maxWidth: 480
      traceSVG: { color: "#f04173", background: "#535c81" }
    ) {
      ...GatsbyImageSharpFluid_withWebp_tracedSVG
    }
  }
`

export const ImageSharpFixed200 = graphql`
  fragment ImageSharpFixed200 on ImageSharp {
    fixed(
      width: 200
      height: 200
      traceSVG: { color: "#f04173", background: "#535c81" }
    ) {
      ...GatsbyImageSharpFixed_withWebp_tracedSVG
    }
  }
`

export const ImageSharpFixed100 = graphql`
  fragment ImageSharpFixed100 on ImageSharp {
    fixed(
      width: 100
      height: 100
      traceSVG: { color: "#f04173", background: "#535c81" }
    ) {
      ...GatsbyImageSharpFixed_withWebp_tracedSVG
    }
  }
`
