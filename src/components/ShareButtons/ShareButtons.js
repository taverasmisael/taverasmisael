import React from 'react'
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

import useStyles from './styles'
import { createCanonicalURL } from '../../utils/social'

const ShareButtons = ({ title, text, url }) => {
  const classes = useStyles()
  const URL = createCanonicalURL(url)
  return (
    <div className={classes.root}>
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
