import React, { memo } from 'react'
import { graphql, Link } from 'gatsby'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Pagination from '@material-ui/lab/Pagination'
import PaginationItem from '@material-ui/lab/PaginationItem'

import BlogItem from '../components/BlogItem'
import GeneralLayout from '../layouts/general'

const BlogListPage = memo(({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext
  return (
    <GeneralLayout
      headProps={{
        title: `Blog${currentPage !== 1 ? `: Página ${currentPage}` : ''}`,
        description: 'Lista de entradas en el blog de TaverasMisael.',
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Typography variant="h1">Últimas entradas</Typography>
            {currentPage !== 1 && (
              <Typography variant="subtitle2">Página {currentPage}</Typography>
            )}
          </Grid>
          {data.allMdx.nodes.map(entry => (
            <Grid key={entry.id} item sm={12}>
              <BlogItem item={entry} />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} justify="flex-end">
          <Pagination
            page={currentPage}
            count={numPages}
            shape="rounded"
            renderItem={item => (
              <PaginationItem
                component={Link}
                to={`/blog/${item.page === 1 ? '' : item.page}`}
                {...item}
              />
            )}
          />
        </Grid>
      </Container>
    </GeneralLayout>
  )
})

BlogListPage.displayName = 'BlogListPage'

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { status: { eq: "published" } } }
      limit: $limit
      skip: $skip
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
export default BlogListPage
