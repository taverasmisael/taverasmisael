import React, { memo } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import webDesignerPictureSrc from '../../shared/assets/web-dev-working.svg'
import { useStyles } from './styles'

const CTA = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
    fontSize: '1.5em',
    marginTop: '3em',

    '&:hover': {
      // Secondary color with 5% less Light (HSL)
      backgroundColor: '#8e0b30',
    },

    [theme.breakpoints.down('md')]: {
      fontSize: '1em',
    },
  },
}))(Button)

const HeroIntro = memo(() => {
  const classes = useStyles()
  return (
    <section className={classes.root}>
      <div className={classes.content}>
        <div className={classes.textContent}>
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
          <CTA variant="contained" color="secondary" className={classes.cta}>
            Hablemos
          </CTA>
        </div>
      </div>
    </section>
  )
})

HeroIntro.displayName = 'HeroIntro'

export default HeroIntro
