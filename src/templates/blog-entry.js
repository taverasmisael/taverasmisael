import React from 'react'

import GeneralLayout from '../layouts/general'
import { graphql } from 'gatsby'
import { Typography } from '@material-ui/core'

const BlogEntry = ({ data: { markdownRemark } }) => (
  <GeneralLayout
    title={markdownRemark.frontmatter.title}
    description={markdownRemark.excerpt}
  >
    <Typography variant="h1">{markdownRemark.frontmatter.title}</Typography>
    <Typography variant="caption">
      {markdownRemark.frontmatter.title}
    </Typography>
    <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
  </GeneralLayout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
      excerpt(format: PLAIN)
    }
  }
`

export default BlogEntry
