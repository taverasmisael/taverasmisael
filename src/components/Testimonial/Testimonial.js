import React, { memo } from 'react'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

import { useStyles } from './styles'

const Testimonial = memo(() => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Avatar
          src="https://randomuser.me/api/portraits/women/48.jpg"
          className={classes.profilePic}
          alt=""
        />
        <div>
          <Typography variant="h4" component="h3" className={classes.name}>
            Efraín Peralta
          </Typography>
          <Typography variant="caption" className={classes.position}>
            GBH FrontEnd Developer
          </Typography>
        </div>
      </div>
      <div className={classes.body}>
        <Typography variant="body1" className={classes.text}>
          Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige,
          sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de
          whisky, ¡qué figurota exhibes! La cigüeña tocaba cada vez.
        </Typography>
      </div>
    </div>
  )
})

export default Testimonial
