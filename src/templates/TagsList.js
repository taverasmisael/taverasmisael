import React, { memo } from 'react'
import { Link, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import MaterialLink from '@material-ui/core/Link'

import GeneralLayout from '../layouts/general'
import BlogItem from '../components/BlogItem'

const TagsList = memo(({ pageContext, data }) => {
  const { tag } = pageContext
  const { nodes: entries } = data.allMdx
  const tagHeader = `Todos los post de "${tag}"`
  return (
    <GeneralLayout
      headProps={{ title: tagHeader, description: `Una lista de ${tagHeader}` }}
    >
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
          <MaterialLink align="right" component={Link} to="/blog/tags">
            Ver todos los tags
          </MaterialLink>
        </div>
      </Container>
    </GeneralLayout>
  )
})

TagsList.displayName = 'TagsList'
export default TagsList

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] }, status: { eq: "published" } }
      }
    ) {
      nodes {
        ...BlogPostNode
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
