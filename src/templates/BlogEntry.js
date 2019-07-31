import React from 'react'
import { Container, Typography } from '@material-ui/core'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import GeneralLayout from '../layouts/general'
import HeroImage from '../components/HeroImage'

const BlogEntry = ({ data: { mdx } }) => {
  const { frontmatter, body } = mdx
  return (
    <GeneralLayout title={frontmatter.title} description={mdx.excerpt}>
      <Container maxWidth="md" component="article">
        <Typography gutterBottom variant="h1">
          {frontmatter.title}
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
        bannerCredit
        banner {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

export default BlogEntry
