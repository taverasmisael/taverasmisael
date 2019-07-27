import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'

import NavLink from '../NavLink/NavLink'

import { useStyles } from './styles'
import { useSiteTitle } from '../../shared/hooks/useSiteTitle'

function Header({ noBottomGutter }) {
  const classes = useStyles(noBottomGutter)
  const siteTitle = useSiteTitle()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className={classes.titleLink}>
              {siteTitle}
            </Link>
          </Typography>
          <nav>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
