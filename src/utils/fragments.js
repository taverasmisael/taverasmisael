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

export const BlogBannerFluidMax = graphql`
  fragment BlogBannerFluidMax on ImageSharp {
    fluid(
      maxWidth: 960
      traceSVG: { color: "#f04173", background: "#535c81" }
    ) {
      ...GatsbyImageSharpFluid_withWebp_tracedSVG
    }
  }
`
export const BlogBannerFluidMin = graphql`
  fragment BlogBannerFluidMin on ImageSharp {
    fluid(
      maxWidth: 480
      traceSVG: { color: "#f04173", background: "#535c81" }
    ) {
      ...GatsbyImageSharpFluid_withWebp_tracedSVG
    }
  }
`

export const BlogBannerFixed200 = graphql`
  fragment BlogBannerFixed200 on ImageSharp {
    fixed(
      width: 200
      height: 200
      traceSVG: { color: "#f04173", background: "#535c81" }
    ) {
      ...GatsbyImageSharpFixed_withWebp_tracedSVG
    }
  }
`

export const BlogBannerFixed100 = graphql`
  fragment BlogBannerFixed100 on ImageSharp {
    fixed(
      width: 100
      height: 100
      traceSVG: { color: "#f04173", background: "#535c81" }
    ) {
      ...GatsbyImageSharpFixed_withWebp_tracedSVG
    }
  }
`
