import React, { memo } from 'react'
import classnames from 'classnames'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Image from 'gatsby-image'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

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
    <article
      className={classnames(classes.root, {
        [classes.hasBackgroundColor]: highlight,
      })}
    >
      <header className={classes.header}>
        <Avatar
          component={Image}
          fluid={profilePicture}
          className={classes.profilePic}
          alt=""
        />
        <div>
          <Typography variant="h4" component="h3" className={classes.name}>
            {name}
          </Typography>
          <Typography variant="caption" className={classes.position}>
            {position}
          </Typography>
        </div>
      </header>
      <div className={classes.body}>
        <MDXRenderer>{testimony}</MDXRenderer>
      </div>
    </article>
  )
}

export default memo(Testimonial)
