import React, { memo } from 'react'
import classnames from 'classnames'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

import { useStyles } from './styles'

const Testimonial = ({
  profilePicture,
  name,
  position,
  testimony,
  highlight,
}) => {
  const classes = useStyles()
  return (
    <div
      className={classnames(classes.root, {
        [classes.hasBackgroundColor]: highlight,
      })}
    >
      <div className={classes.header}>
        <Avatar src={profilePicture} className={classes.profilePic} alt="" />
        <div>
          <Typography variant="h4" component="h3" className={classes.name}>
            {name}
          </Typography>
          <Typography variant="caption" className={classes.position}>
            {position}
          </Typography>
        </div>
      </div>
      <div className={classes.body}>
        <Typography variant="body1" className={classes.text}>
          {testimony}
        </Typography>
      </div>
    </div>
  )
}

export default memo(Testimonial)
