import React, { memo } from 'react'
import Container from '@material-ui/core/Container'
import { graphql } from 'gatsby'

import BlogItem from '../components/BlogItem'
import GeneralLayout from '../layouts/general'
import Grid from '@material-ui/core/Grid'

const HomePage = memo(({ data }) => (
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

HomePage.displayName = 'HomePage'

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { status: { eq: "published" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          tags
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

export default HomePage
