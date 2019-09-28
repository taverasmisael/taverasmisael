import React, { memo } from 'react'
import { graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import GeneralLayout from '../layouts/general'
import HeroImage from '../components/HeroImage'
import BlogHeader from '../components/BlogHeader'
import ShareButtons from '../components/ShareButtons'
import PostsNavigator from '../components/PostsNavigator'

const SeriesEntry = memo(({ data: { content, series }, path, pageContext }) => {
  const { frontmatter, body, timeToRead } = content
  const { prevChapter: prev, nextChapter: next } = pageContext
  const bannerImage = series.banner.childImageSharp.fluid
  const prevChapter = prev ? prev.node : null
  const nextChapter = next ? next.node : null
  return (
    <GeneralLayout
      headProps={{
        path,
        isPost: true,
        title: frontmatter.title,
        description: frontmatter.description || content.excerpt,
        metaImage: bannerImage.src,
      }}
    >
      <Container maxWidth="md" className="real-width">
        <BlogHeader
          date={frontmatter.date}
          title={frontmatter.title}
          timeToRead={timeToRead}
        />
        <HeroImage gutterBottom fluid={bannerImage} />

        <MDXRenderer>{body}</MDXRenderer>

        <Container maxWidth="md">
          <PostsNavigator prevPost={prevChapter} nextPost={nextChapter} />
          <Grid container>
            <Grid item xs={12} md={7}>
              <ShareButtons
                url={path}
                title={frontmatter.title}
                text={frontmatter.description}
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </GeneralLayout>
  )
})

SeriesEntry.displayName = 'SeriesEntry'

export default SeriesEntry

export const pageQuery = graphql`
  query SeriesEntryQuery($id: String, $serieSlug: String) {
    content: mdx(id: { eq: $id }) {
      ...BlogPostNode
      body
      timeToRead
    }

    series(slug: { eq: $serieSlug }) {
      banner {
        childImageSharp {
          ...ImageSharpFluidMax
        }
      }
    }
  }
`
