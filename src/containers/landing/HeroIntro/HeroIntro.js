import React, { memo } from 'react'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import MaterialLink from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import BackgroundImage from 'gatsby-background-image'
import Div100vh from 'react-div-100vh'

import { useStyles } from './styles'

const CTA = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
    marginRight: '1em',

    '&:hover': {
      // Secondary color with 5% less Light (HSL)
      backgroundColor: '#8e0b30',
    },

    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  },
}))(Button)

const HeroIntro = ({ image }) => {
  const classes = useStyles()
  return (
    <Div100vh className={classes.root} as="section">
      <div className={classes.container}>
        <div className={classes.background}>
          <BackgroundImage
            fluid={image}
            backgroundColor="#1c294f"
            style={{ width: '100%', height: '100%' }}
          />
          <div className={classes.backdrop} />
        </div>
        <div className={classes.text}>
          <Typography variant="h2" component="h1" className={classes.title}>
            Hola
            <Typography
              variant="h2"
              component="span"
              className={classes.subtitle}
            >
              Soy <span className={classes.name}>Misael Taveras</span>
            </Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            component="h2"
            className={classes.description}
          >
            Quiero que tu marca crezca en línea
            <Typography variant="body2" component="span">
              proveyendo soluciones que suplen{' '}
              <span className={classes.highlight}>lo que necesitas.</span>
            </Typography>
          </Typography>
          <div className={classes.ctaContainer}>
            <CTA variant="contained" color="secondary" href="#hablemos">
              Hablemos
            </CTA>
            <MaterialLink
              color="inherit"
              component={Link}
              to="/blog"
              className={classes.secondaryCTA}
            >
              Leer el blog
            </MaterialLink>
          </div>
        </div>
      </div>
    </Div100vh>
  )
}

export default memo(HeroIntro)
