import React from 'react'
import { Typography } from '@material-ui/core'
import { graphql, Link } from 'gatsby'

import GeneralLayout from '../layout/general'

export default ({ data }) => {
  return (
    <GeneralLayout>
      <Typography variant="subtitle1">Blog</Typography>
      {data.allMarkdownRemark.nodes.map(entry => (
        <Link to={`/blog/${entry.frontmatter.slug}`}>
          <Typography variant="h2">{entry.frontmatter.title}</Typography>
          <Typography
            variant="caption"
            component="time"
            datetime={entry.frontmatter.date}
          >
            {new Date(entry.frontmatter.date).toLocaleDateString()}
          </Typography>
        </Link>
      ))}
    </GeneralLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          slug
        }
        html
        excerpt
      }
    }
  }
`
