import React, { memo } from 'react'
import { graphql } from 'gatsby'

import Footer from '../components/Footer'
import { HeroIntro, AboutMe } from '../containers/landing'
import BaseLayout from '../layouts/base'

const HomePage = memo(({ data, ...args }) => (
  <BaseLayout>
    <HeroIntro image={data.heroImage.childImageSharp.fluid} />
    <AboutMe />
    <Footer />
  </BaseLayout>
))

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

    allMdx(
      limit: 2
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { status: { eq: "published" } }
        fileAbsolutePath: { regex: "//posts//" }
      }
    ) {
      nodes {
        ...BlogPostNode
        frontmatter {
          banner {
            childImageSharp {
              ...ImageSharpFluidMin
              ...ImageSharpFixed200
            }
          }
        }
      }
    }
  }
`

export default HomePage
