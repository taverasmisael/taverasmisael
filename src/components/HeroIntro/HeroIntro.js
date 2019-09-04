import React, { memo } from 'react'
import Typography from '@material-ui/core/Typography'

import { useStyles } from './styles'

const HeroIntro = memo(() => {
  const classes = useStyles()
  return (
    <section className={classes.root}>
      <div className={classes.content}>
        <Typography
          gutterBottom
          variant="h2"
          component="h1"
          className={classes.title}
        >
          Hola, soy Misael Taveras
        </Typography>
        <Typography
          variant="subtitle1"
          component="h2"
          className={classes.content}
        >
          Soy un desarrollador FrontEnd que trabaja con React. Ayudo a otros
          desarrolladores a avanzar en su carrera.
        </Typography>
      </div>
    </section>
  )
})

HeroIntro.displayName = 'HeroIntro'

export default HeroIntro
