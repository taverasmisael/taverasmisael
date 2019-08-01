import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Img from 'gatsby-image'

import { useStyles } from './styles'

const Footer = () => {
  const { site, file } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialHandler
          footerCopy
        }
      }
      file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <div className={classes.profileImageContainer}>
          <Img
            fluid={file.childImageSharp.fluid}
            className={classes.profileImg}
          />
        </div>
        <div>
          <Typography gutterBottom variant="h5" component="h6">
            Hi, I'm Misael
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.shortBio}
          >
            {site.siteMetadata.footerCopy}. Find me as{' '}
            <strong>{site.siteMetadata.socialHandler}</strong> anywehere else.
          </Typography>
        </div>
        <div className={classes.socialLinks}>
          <Button
            color="primary"
            href="https://twitter.com/taverasmisael"
            className={classes.socialLink}
          >
            twitter
          </Button>
          <Button
            color="primary"
            href="https://github.com/taverasmisael"
            className={classes.socialLink}
          >
            github
          </Button>
          <Button
            color="primary"
            href="https://linkedin.com/in/taverasmisael"
            className={classes.socialLink}
          >
            linkedin
          </Button>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
