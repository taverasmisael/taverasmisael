import React from 'react'
import Img from 'gatsby-image'
import { Container, Paper, makeStyles } from '@material-ui/core'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import GeneralLayout from '../layouts/general'

const useStyles = makeStyles(theme => ({
  root: { padding: theme.spacing(3, 2) },
}))

const BlogEntry = ({ data: { mdx } }) => {
  const classes = useStyles()
  return (
    <GeneralLayout title={mdx.frontmatter.title} description={mdx.excerpt}>
      <Container maxWidth="md">
        <Paper>
          <Img fixed={mdx.frontmatter.banner.childImageSharp.fixed} />
          <div className={classes.root}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </div>
        </Paper>
      </Container>
    </GeneralLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        banner {
          childImageSharp {
            fixed(width: 896) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      body
    }
  }
`

export default BlogEntry
