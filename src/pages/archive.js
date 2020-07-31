import React, { memo } from 'react'
import Container from '@material-ui/core/Container'
import { graphql } from 'gatsby'

import BlogItem from '../components/BlogItem'
import GeneralLayout from '../layouts/general'
import Grid from '@material-ui/core/Grid'

const BlogPage = memo(({ data }) => (
  <GeneralLayout headProps={{ title: 'Blog' }}>
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {data.allMdx.nodes.map(entry => (
          <Grid key={entry.id} item sm={12}>
            <BlogItem item={entry} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </GeneralLayout>
))

BlogPage.displayName = 'BlogPage'

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { status: { eq: "published" } } }
    ) {
      nodes {
        ...BlogPostNode
        timeToRead
        frontmatter {
          banner {
            childImageSharp {
              ...ImageSharpFluidMax
            }
          }
        }
      }
    }
  }
`

export default BlogPage
