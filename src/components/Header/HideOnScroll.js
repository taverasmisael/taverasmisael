import React, { memo } from 'react'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

const HideOnScroll = memo(props => {
  const { children } = props

  const trigger = useScrollTrigger({ threshold: 300 })
  console.log(trigger)
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
})

HideOnScroll.displayName = 'HideOnScroll'

export default HideOnScroll
