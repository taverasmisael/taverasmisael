import React, { memo } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'

import Typography from '@material-ui/core/Typography'

import AnchorIcon from '../Icons/Anchor'
import GithubIcon from '../Icons/Github'
import LinkedinIcon from '../Icons/Linkedin'
import TwitterIcon from '../Icons/Twitter'

import { useStyles } from './styles'
import { useDarkModeContext } from '../../context/dark-mode'

const Footer = () => {
  const year = new Date().getFullYear()
  const { darkMode } = useDarkModeContext()
  const classes = useStyles(darkMode)
  return (
    <footer className={classes.root}>
      <Container maxWidth="md">
        <Grid container spacing={0} justify="center">
          <Grid item xs={12} sm={10}>
            <Grid container spacing={0} justify="center">
              <Grid item xs={3} sm={1} className={classes.socialIconContainer}>
                <IconButton href="https://twitter.com/taverasmisael">
                  <TwitterIcon className={classes.socialIcon} />
                </IconButton>
              </Grid>
              <Grid item xs={3} sm={1} className={classes.socialIconContainer}>
                <IconButton href="https://github.com/taverasmisael">
                  <GithubIcon className={classes.socialIcon} />
                </IconButton>
              </Grid>
              <Grid item xs={3} sm={1} className={classes.socialIconContainer}>
                <IconButton href="https://linkedin.com/in/taverasmisael">
                  <LinkedinIcon className={classes.socialIcon} />
                </IconButton>
              </Grid>
              <Grid item xs={3} sm={1} className={classes.socialIconContainer}>
                <IconButton
                  href="https://anchor.fm/releaseonfridays"
                  className={classes.disabled}
                >
                  <AnchorIcon className={classes.socialIcon} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography
              variant="caption"
              className={classes.copy}
              component="h6"
              align="center"
            >
              Todos los derechos reservados {year}&copy; Misael Taveras –
              @taverasmisael anywhere else
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default memo(Footer)
