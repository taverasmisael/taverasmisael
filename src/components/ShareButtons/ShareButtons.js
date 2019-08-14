import React from 'react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Link from '@material-ui/core/Link'
import ListItemText from '@material-ui/core/ListItemText'

import useStyles from './styles'
import { createSocialShareURL } from '../../utils/social'

const ShareButtons = ({ title, text, url }) => {
  const classes = useStyles()
  const URLs = createSocialShareURL({ url, title, text })
  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" className={classes.title}>
        Compartir
      </Typography>
      <List dense className={classes.list}>
        <ListSocialLink
          disableGutters
          component={Link}
          className={classes.link}
          href={URLs.facebook}
        >
          <ListItemText primary="Facebook" />
        </ListSocialLink>
        <ListSocialLink
          disableGutters
          component={Link}
          className={classes.link}
          href={URLs.twitter}
        >
          <ListItemText primary="Twitter" />
        </ListSocialLink>
        <ListSocialLink
          disableGutters
          component={Link}
          className={classes.link}
          href={URLs.linkedin}
        >
          <ListItemText primary="LinkedIn" />
        </ListSocialLink>
      </List>
    </div>
  )
}

const ListSocialLink = props => (
  <ListItem
    disableGutters
    component={Link}
    target="_blank"
    rel="nofollow"
    {...props}
  />
)

export default ShareButtons
