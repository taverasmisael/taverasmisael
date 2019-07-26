import React from 'react'
import Container from '@material-ui/core/Container'
import { graphql } from 'gatsby'

import BlogItem from '../components/BlogItem'
import GeneralLayout from '../layouts/general'
import { Grid } from '@material-ui/core'

const BlogPage = ({ data }) => (
  <GeneralLayout title="Blog" description="List of articles written by me">
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {data.allMdx.nodes.map(entry => (
          <Grid item sm="12" md="6">
            <BlogItem key={entry.frontmatter.slug} item={entry} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </GeneralLayout>
)

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
          banner {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
`

export default BlogPage
