import React from 'react'
import Container from '@material-ui/core/Container'
import { graphql } from 'gatsby'

import BlogItem from '../components/BlogItem'
import GeneralLayout from '../layouts/general'
import Grid from '@material-ui/core/Grid'

const BlogPage = ({ data }) => (
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
)

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD [de] MMMM YYYY", locale: "es")
          banner {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt(pruneLength: 300)
        fields {
          slug
        }
      }
    }
  }
`

export default BlogPage
