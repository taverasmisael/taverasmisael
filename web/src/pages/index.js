import React, { memo } from 'react'
import { graphql } from 'gatsby'

import Footer from '../components/Footer'
import { HeroIntro, AboutMe, Projects, ContactMe } from '../containers/landing'
import BaseLayout from '../layouts/base'

const HEAD_PROPS = { title: 'Inicio' }

const HomePage = ({ data }) => {
  const { heroImage, testimonials, projects } = data
  return (
    <BaseLayout headProps={HEAD_PROPS}>
      <HeroIntro image={heroImage.childImageSharp.fluid} />
      <AboutMe testimonials={testimonials.nodes} />
      <Projects projects={projects.nodes} />
      <ContactMe />
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

    testimonials: allSanityTestimonial {
      nodes {
        _id
        name
        position
        _rawTestimony
        profilePicture {
          asset {
            fluid(maxWidth: 80) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }

    projects: allSanityProject {
      nodes {
        _id
        name
        url {
          current
        }
        isInternal
        techStack
        body
        banner {
          hotspot {
            x
            y
          }
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

export default memo(HomePage)
