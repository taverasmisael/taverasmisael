import React, { memo } from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import Container from '@material-ui/core/Container'

import GeneralLayout from '../layouts/general'
import HeroImage from '../components/HeroImage'
import BlogHeader from '../components/BlogHeader'

import BlogFooter from '../components/BlogFooter'

const BlogEntry = ({ data: { post, related }, path }) => {
  const { frontmatter, body, timeToRead } = post
  const relatedPosts = (related || {}).nodes || []
  const tags = frontmatter.tags || []
  return (
    <GeneralLayout
      headProps={{
        path,
        isPost: true,
        title: frontmatter.title,
        description: frontmatter.description || post.excerpt,
        metaImage: frontmatter.banner.childImageSharp.fluid.src,
      }}
    >
      <Container maxWidth="md" className="real-width">
        <article>
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
        </article>
        <BlogFooter
          tags={tags}
          path={path}
          title={frontmatter.title}
          description={frontmatter.description}
          relatedPosts={relatedPosts}
        />
      </Container>
    </GeneralLayout>
  )
}

export default memo(BlogEntry)

export const pageQuery = graphql`
  query BlogPostQuery($id: String, $tags: [String]) {
    related: allMdx(
      filter: {
        frontmatter: { tags: { in: $tags }, status: { eq: "published" } }
      }
      limit: 3
    ) {
      ...RelatedPostNodes
    }
    post: mdx(id: { eq: $id }) {
      ...BlogPostNode
      body
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
`
