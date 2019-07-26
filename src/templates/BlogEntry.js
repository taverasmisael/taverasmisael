import React from 'react'
import Img from 'gatsby-image'
import { Container, Paper, makeStyles } from '@material-ui/core'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import GeneralLayout from '../layouts/general'

const useStyles = makeStyles(theme => ({
  root: { padding: theme.spacing(3, 2), overflow: 'hidden' },
  banner: {
    left: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    right: '50%',
    width: '100vw',
  },
}))

const BlogEntry = ({ data: { mdx } }) => {
  const classes = useStyles()
  return (
    <GeneralLayout
      title={mdx.frontmatter.title}
      description={mdx.excerpt}
      noBottomGutter
    >
      <Container maxWidth="md">
        <Img
          fluid={mdx.frontmatter.banner.childImageSharp.fluid}
          className={classes.banner}
        />
        <div className={classes.root}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
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
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

export default BlogEntry
