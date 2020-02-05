import React, { memo } from 'react'
import { graphql } from 'gatsby'

import Footer from '../components/Footer'
import { HeroIntro, AboutMe, Projects } from '../containers/landing'
import BaseLayout from '../layouts/base'

const HomePage = ({ data }) => {
  const { heroImage, testimonials, projects } = data
  return (
    <BaseLayout>
      <HeroIntro image={heroImage.childImageSharp.fluid} />
      <AboutMe testimonials={testimonials.edges} />
      <Projects projects={projects.edges} />
      <Footer />
    </BaseLayout>
  )
}

HomePage.displayName = 'HomePage'

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "mac-keyboard.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 920
          traceSVG: { color: "#1c294f", background: "#535c81" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    testimonials: allMdx(
      filter: {
        fileAbsolutePath: { regex: "//testimonials//" }
        frontmatter: { status: { eq: "published" } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            position
            profilePicture {
              childImageSharp {
                fluid(maxWidth: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          body
        }
      }
    }

    projects: allMdx(
      filter: {
        fileAbsolutePath: { regex: "//projects-list//" }
        frontmatter: { status: { eq: "published" } }
      }
      sort: { order: ASC, fields: frontmatter___title }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            url
            technologies
            bannerImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`

export default memo(HomePage)
