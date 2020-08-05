import React, { memo } from 'react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Link from '@material-ui/core/Link'
import ListItemText from '@material-ui/core/ListItemText'
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from 'react-share'

import Emoji from '../Emoji'

import useStyles from './styles'
import { createCanonicalURL } from '../../utils/social'

const ShareButtons = memo(({ title, text, url }) => {
  const classes = useStyles()
  const URL = createCanonicalURL(url)
  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
        Compartir
      </Typography>
      <List dense className={classes.list}>
        <ListSocialLink
          quote={text}
          url={URL}
          component={FacebookShareButton}
          className={classes.link}
        >
          <ListItemText primary="Facebook" />
        </ListSocialLink>
        <ListSocialLink
          via="taverasmisael"
          className={classes.link}
          title={title}
          component={TwitterShareButton}
          url={URL}
        >
          <ListItemText primary="Twitter" />
        </ListSocialLink>
        <ListSocialLink
          className={classes.link}
          component={LinkedinShareButton}
          url={URL}
        >
          <ListItemText primary="LinkedIn" />
        </ListSocialLink>
      </List>
    </div>
  )
})

ShareButtons.displayName = 'ShareButtons'

const ListSocialLink = memo(props => (
  <ListItem
    disableGutters
    component={Link}
    target="_blank"
    rel="nofollow"
    {...props}
  />
))

ListSocialLink.displayName = 'ListSocialLink'

export default ShareButtons
