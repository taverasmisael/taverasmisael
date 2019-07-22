import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'gatsby'

import { useNavLinkStyles } from '../NavLink'
import NavLink from '../NavLink/NavLink'

import { useStyles } from './styles'

function Header() {
  const classes = useStyles()
  const navLinkStyles = useNavLinkStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className={classes.titleLink}>
              Material-UI
            </Link>
          </Typography>
          <nav>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Button
              className={navLinkStyles.root}
              onClick={console.log.bind(console)}
              variant="contained"
              color="secondary"
            >
              Hire Me!
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
