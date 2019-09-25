import React, { memo } from 'react'
import { graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import GeneralLayout from '../layouts/general'
import HeroImage from '../components/HeroImage'
import BlogHeader from '../components/BlogHeader'
import ShareButtons from '../components/ShareButtons'
import TagsList from '../components/TagsList'

const BlogEntry = memo(({ data: { mdx }, path }) => {
  const { frontmatter, body, timeToRead } = mdx
  return (
    <GeneralLayout
      headProps={{
        path,
        isPost: true,
        title: frontmatter.title,
        description: frontmatter.description || mdx.excerpt,
        metaImage: frontmatter.banner.childImageSharp.fluid.src,
      }}
    >
      <Container maxWidth="md" className="real-width">
        <BlogHeader
          date={frontmatter.date}
          title={frontmatter.title}
          timeToRead={timeToRead}
        />
        <HeroImage
          gutterBottom
          fluid={frontmatter.banner.childImageSharp.fluid}
        />

        <MDXRenderer>{body}</MDXRenderer>

        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12} md={7}>
              <ShareButtons
                url={path}
                title={frontmatter.title}
                text={frontmatter.description}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="subtitle1" style={{ paddingBottom: '8px' }}>
                Etiquetas
              </Typography>
              <TagsList tags={frontmatter.tags || []} />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </GeneralLayout>
  )
})

BlogEntry.displayName = 'BlogEntry'

export default BlogEntry

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      ...BlogPostNode
      body
      timeToRead
    }
  }
`
