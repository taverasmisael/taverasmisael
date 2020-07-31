import React, { memo } from 'react'
import { graphql } from 'gatsby'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import BlogItem from '../components/BlogItem'
import GeneralLayout from '../layouts/general'

const BlogPage = memo(({ data }) => (
  <GeneralLayout
    headProps={{
      title: 'Archivo: todas las entradas',
      description:
        'Lista de todas las entradas del blog organizadas por fecha en modo descendente',
    }}
  >
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Typography variant="h1">Todas las entradas</Typography>
          <Typography variant="subtitle2">
            {data.allMdx.nodes.length} entradas
          </Typography>
        </Grid>
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
