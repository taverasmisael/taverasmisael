import React, { memo } from 'react'
import { Link, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import MaterialLink from '@material-ui/core/Link'

import GeneralLayout from '../layouts/general'
import BlogItem from '../components/BlogItem'

const SeriesList = memo(({ pageContext, data }) => {
  const { serieSlug } = pageContext
  console.warn(pageContext, data)
  const { nodes: entries } = data.allMdx
  const tagHeader = `Todos los post de "${serieSlug}"`
  return (
    <GeneralLayout>
      <Container maxWidth="md">
        <Typography gutterBottom component="h1" variant="h3">
          {tagHeader}
        </Typography>
        <Grid container spacing={2} component="ul">
          {entries.map(entry => (
            <Grid key={entry.id} item sm={12} component="li">
              <BlogItem item={entry} />
            </Grid>
          ))}
        </Grid>
        <div className="MuiTypography-alignRight">
          <MaterialLink align="right" component={Link} to="/series">
            Ver todas las series
          </MaterialLink>
        </div>
      </Container>
    </GeneralLayout>
  )
})

SeriesList.displayName = 'SeriesList'
export default SeriesList

export const pageQuery = graphql`
  query($serieSlug: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "//series//" }
        frontmatter: {
          serie: { in: [$serieSlug] }
          status: { eq: "published" }
        }
      }
    ) {
      nodes {
        ...BlogPostNode
      }
    }
  }
`
