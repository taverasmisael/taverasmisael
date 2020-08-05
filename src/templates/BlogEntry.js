import React, { memo } from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import GeneralLayout from '../layouts/general'
import BlogItemMini from '../components/BlogItemMini'
import NewsletterForm from '../components/NewsletterForm'
import HeroImage from '../components/HeroImage'
import BlogHeader from '../components/BlogHeader'
import ShareButtons from '../components/ShareButtons'
import TagsList from '../components/TagsList'
import Emoji from '../components/Emoji'

const BlogEntry = memo(({ data: { post, related }, path }) => {
  const { frontmatter, body, timeToRead } = post
  const relatedPosts = (related || {}).nodes || []
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
            tags={frontmatter.tags || []}
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
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12} md={5}>
              <Typography variant="subtitle1">Etiquetas</Typography>
              <TagsList tags={frontmatter.tags || []} />
            </Grid>
            <Grid item xs={12} md={7}>
              <ShareButtons
                url={path}
                title={frontmatter.title}
                text={frontmatter.description}
              />
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Artículos Relacionados
          </Typography>
          <Grid container spacing={2}>
            {relatedPosts.map(relatedPost => (
              <Grid item key={relatedPost.id} xs={12}>
                <BlogItemMini item={relatedPost} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container id="newsletter" maxWidth="md">
          <NewsletterForm path={path} />
        </Container>
      </Container>
    </GeneralLayout>
  )
})

BlogEntry.displayName = 'BlogEntry'

export default BlogEntry

export const pageQuery = graphql`
  query BlogPostQuery($id: String, $tags: [String]) {
    related: allMdx(
      filter: {
        frontmatter: { tags: { in: $tags }, status: { eq: "published" } }
      }
      limit: 3
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          date
          banner {
            childImageSharp {
              ...ImageSharpFluidMin
              ...ImageSharpFixed200
            }
          }
        }
      }
    }
    post: mdx(id: { eq: $id }) {
      ...BlogPostNode
      body
      timeToRead
      frontmatter {
        banner {
          childImageSharp {
            fluid(
              maxWidth: 1920
              traceSVG: { color: "#f04173", background: "#535c81" }
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
