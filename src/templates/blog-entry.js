import React from 'react'

import Layout from '../layouts/general'
import { graphql } from 'gatsby'
import { Typography } from '@material-ui/core'

const BlogEntry = ({ data: { markdownRemark } }) => (
  <Layout>
    <Typography variant="h1">{markdownRemark.frontmatter.title}</Typography>
    <Typography variant="caption">
      {markdownRemark.frontmatter.title}
    </Typography>
    <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

export default BlogEntry
