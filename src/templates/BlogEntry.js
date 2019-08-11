import React from 'react'
import { Container, Typography, makeStyles } from '@material-ui/core'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import GeneralLayout from '../layouts/general'
import HeroImage from '../components/HeroImage'

const useStyles = makeStyles(theme => ({
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 100px',
    gridColumnGap: theme.spacing(2),
  },
}))

const BlogEntry = ({ data: { mdx }, path }) => {
  const { frontmatter, body } = mdx
  const classes = useStyles()
  return (
    <GeneralLayout
    noGutterBottom
      headProps={{
        path,
        isPost: true,
        title: frontmatter.title,
        keywords: frontmatter.keywords,
        description: frontmatter.description || mdx.excerpt,
        metaImage: frontmatter.banner.childImageSharp.fluid.src,
      }}
    >
      <Container maxWidth="md">
        <HeroImage
          gutterBottom
          fullWidth
          fluid={frontmatter.banner.childImageSharp.fluid}
          credit={frontmatter.bannerCredit}
        />

        <Typography gutterBottom variant="h1">
          <Typography variant="caption" color="textSecondary">
            Publicado el {frontmatter.date}
          </Typography>
          {frontmatter.title}
        </Typography>
        <MDXRenderer>{body}</MDXRenderer>
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
        date(formatString: "DD [de] MMMM YYYY", locale: "es")
        bannerCredit
        keywords
        description
        banner {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt(pruneLength: 300)
      body
    }
  }
`

export default BlogEntry
