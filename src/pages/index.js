import React, { memo } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { graphql, Link } from 'gatsby'

import BlogItemMini from '../components/BlogItemMini'
import HeroIntro from '../components/HeroIntro'
import BaseLayout from '../layouts/base'

const HomePage = memo(({ data }) => (
  <BaseLayout>
    <HeroIntro />
  </BaseLayout>
))

HomePage.displayName = 'HomePage'

export const query = graphql`
  query {
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
