import React from 'react'

import GeneralLayout from '../layouts/general'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Typography, Container } from '@material-ui/core'

const BlogEntry = ({ data: { markdownRemark } }) => (
  <GeneralLayout
    title={markdownRemark.frontmatter.title}
    description={markdownRemark.excerpt}
  >
    <Container maxWidth="md">
      <Img fluid={markdownRemark.frontmatter.banner.childImageSharp.fluid} />
      <Typography variant="h1">{markdownRemark.frontmatter.title}</Typography>
      <Typography variant="caption">
        {markdownRemark.frontmatter.title}
      </Typography>
      <Typography
        component="div"
        dangerouslySetInnerHTML={{ __html: markdownRemark.tableOfContents }}
      />
      <Typography
        component="div"
        dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
      />
    </Container>
  </GeneralLayout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        banner {
          childImageSharp {
            fluid(maxWidth: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      tableOfContents
      html
      excerpt(format: PLAIN)
    }
  }
`

export default BlogEntry
