import React from 'react'
import Container from '@material-ui/core/Container'
import { graphql } from 'gatsby'

import BlogItem from '../components/BlogItem'
import GeneralLayout from '../layouts/general'
import { Grid } from '@material-ui/core'

const styles = { maxWidth: '720px' }
const BlogPage = ({ data }) => (
  <GeneralLayout title="Blog" description="List of articles written by me">
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {data.allMarkdownRemark.nodes.map(entry => (
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
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          slug
          banner {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
        excerpt
      }
    }
  }
`

export default BlogPage
