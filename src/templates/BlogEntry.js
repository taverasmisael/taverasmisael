import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import GeneralLayout from '../layouts/general'
import HeroImage from '../components/HeroImage'

const useStyles = makeStyles(theme => ({
  root: { padding: theme.spacing(3, 2), overflow: 'hidden' },
}))

const BlogEntry = ({ data: { mdx } }) => {
  const classes = useStyles()
  const { frontmatter, body } = mdx
  return (
    <GeneralLayout title={frontmatter.title} description={mdx.excerpt}>
      <Container maxWidth="md">
        <Typography gutterBottom variant="h1">
          {frontmatter.title}
        </Typography>
        <HeroImage
          fluid={frontmatter.banner.childImageSharp.fluid}
          credit={frontmatter.bannerCredit}
        />

        <div className={classes.root}>
          <MDXRenderer>{body}</MDXRenderer>
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
        bannerCredit
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
