import React, { memo } from 'react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Carousel from '../Carousel'

import '@glidejs/glide/dist/css/glide.core.min.css'

import { useStyles } from './styles'

const CAROUSEL_OPTIONS = {
  perView: 1,
  type: 'carousel',
  swipeThreshold: 60,
  breakpoints: {
    767: {
      perView: 1,
    },
    1023: {
      perView: 2,
    },

    1365: {
      perView: 4,
      gap: 16,
      peek: { before: 50, after: 100 },
    },

    19190: {
      perView: 4,
      perTouch: 3,
      gap: 16,
      peek: { before: 50, after: 150 },
    },
  },
}

const ProjectsCarousel = () => {
  const classes = useStyles()
  return (
    <Carousel className={classes.container} options={CAROUSEL_OPTIONS}>
      <Paper>Content</Paper>
      <Paper>Content</Paper>
      <Paper>Content</Paper>
      <Paper>Content</Paper>
      <Paper>Content</Paper>
      <Paper>Content</Paper>
      <Paper>Content</Paper>
    </Carousel>
  )
}

export default memo(ProjectsCarousel)
