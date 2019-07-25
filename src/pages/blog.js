import React from 'react'
import Container from '@material-ui/core/Container'
import { graphql } from 'gatsby'

import BlogItem from '../components/BlogItem'
import GeneralLayout from '../layouts/general'

const styles = { maxWidth: '720px' }
const BlogPage = ({ data }) => (
  <GeneralLayout title="Blog" description="List of articles written by me">
    <Container style={styles}>
      {data.allMarkdownRemark.nodes.map(entry => (
        <BlogItem key={entry.frontmatter.slug} item={entry} />
      ))}
    </Container>
  </GeneralLayout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          slug
          banner {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
        excerpt
      }
    }
  }
`

export default BlogPage
