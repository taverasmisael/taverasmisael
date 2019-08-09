import React from 'react'
import { Container, Typography } from '@material-ui/core'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import GeneralLayout from '../layouts/general'
import HeroImage from '../components/HeroImage'

const BlogEntry = ({ data: { mdx }, path }) => {
  const { frontmatter, body } = mdx
  return (
    <GeneralLayout
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
        <Typography gutterBottom variant="h1">
          {frontmatter.title}
          <Typography variant="caption" color="textSecondary">
            Publicado el {frontmatter.date}
          </Typography>
        </Typography>
        <HeroImage
          gutterBottom
          fluid={frontmatter.banner.childImageSharp.fluid}
          credit={frontmatter.bannerCredit}
        />

        <MDXRenderer>{body}</MDXRenderer>
      </Container>
    </GeneralLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "DD [de] MMMM YYYY", locale: "es")
        bannerCredit
        keywords
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

export default BlogEntry
