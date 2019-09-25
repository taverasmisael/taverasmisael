import React, { memo } from 'react'
import { graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
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
      <Container maxWidth="md" component="article" className="real-width">
        <BlogHeader
          date={frontmatter.date}
          title={frontmatter.title}
          timeToRead={timeToRead}
        />
        <HeroImage
          gutterBottom
          fluid={frontmatter.banner.childImageSharp.fluid}
        />
        <Container maxWidth="md" component="section">
          <MDXRenderer>{body}</MDXRenderer>

          <Grid container className="footer-tags">
            <Grid item xs={10}>
              <TagsList tags={frontmatter.tags || []} />
            </Grid>
          </Grid>
          <ShareButtons
            url={path}
            title={frontmatter.title}
            text={frontmatter.description}
          />
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
