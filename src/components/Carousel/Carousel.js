import React, { memo, useState, useEffect } from 'react'
import Glide from '@glidejs/glide'
import IconButton from '@material-ui/core/IconButton'
import PrevIcon from '@material-ui/icons/KeyboardArrowLeftRounded'
import NextIcon from '@material-ui/icons/KeyboardArrowRightRounded'

import { useStyles } from './styles'

const Carousel = ({ element = 'glide', options, children }) => {
  const classes = useStyles()
  const [slider] = useState(new Glide(`.${element}`, options))
  useEffect(() => {
    slider.mount()

    // cleanup when unmounting component
    return () => slider.destroy()
  }, [slider])

  return (
    <div className={element}>
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
          {children.map((slide, index) => {
            return React.cloneElement(slide, {
              key: index,
              className: `${slide.props.className} glide__slide`,
            })
          })}
        </div>
      </div>
      <div data-glide-el="controls" className={classes.controls}>
        <IconButton data-glide-dir="<" className={classes.control}>
          <PrevIcon fontSize="large" />
        </IconButton>
        <IconButton data-glide-dir=">" className={classes.control}>
          <NextIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  )
}

export default memo(Carousel)
