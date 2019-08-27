import React from 'react'
import { graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import GeneralLayout from '../layouts/general'
import HeroImage from '../components/HeroImage'
import BlogHeader from '../components/BlogHeader'
import ShareButtons from '../components/ShareButtons'

const BlogEntry = ({ data: { mdx }, path }) => {
  const { frontmatter, body } = mdx
  return (
    <GeneralLayout
      headProps={{
        path,
        isPost: true,
        title: frontmatter.title,
        keywords: frontmatter.keywords.concat(['', ...frontmatter.tags]),
        description: frontmatter.description || mdx.excerpt,
        metaImage: frontmatter.banner.childImageSharp.fluid.src,
      }}
    >
      <Container maxWidth="md" component="article">
        <HeroImage
          gutterBottom
          fluid={frontmatter.banner.childImageSharp.fluid}
        />
        <BlogHeader
          date={frontmatter.date}
          title={frontmatter.title}
          tags={frontmatter.tags}
        />
        <MDXRenderer>{body}</MDXRenderer>
        <ShareButtons
          url={path}
          title={frontmatter.title}
          text={frontmatter.description}
        />
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
        keywords
        tags
        description
        banner {
          childImageSharp {
            fluid(maxWidth: 960) {
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
