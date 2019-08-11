import React from 'react'
import { graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import GeneralLayout from '../layouts/general'
import HeroImage from '../components/HeroImage'
import BlogHeader from '../components/BlogHeader'

const BlogEntry = ({ data: { mdx }, path }) => {
  const { frontmatter, body } = mdx
  return (
    <GeneralLayout
      noGutterBottom
      headProps={{
        path,
        isPost: true,
        title: frontmatter.title,
        keywords: frontmatter.keywords,
        description: frontmatter.description || mdx.excerpt,
        metaImage: frontmatter.banner.childImageSharp.fluid.src,
      }}
    >
      <Container maxWidth="md" component="article">
        <HeroImage
          gutterBottom
          fullWidth
          fluid={frontmatter.banner.childImageSharp.fluid}
          credit={frontmatter.bannerCredit}
        />
        <BlogHeader
          date={frontmatter.date}
          title={frontmatter.title}
          tags={frontmatter.tags}
        />
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
    </GeneralLayout>
  )
}

export default BlogEntry
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "DD [de] MMMM YYYY", locale: "es")
        bannerCredit
        keywords
        tags
        description
        banner {
          childImageSharp {
            fluid(maxWidth: 1680) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt(pruneLength: 300)
      body
    }
  }
`
