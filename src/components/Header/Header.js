import React, { memo } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import SunIcon from './sun'
import MoonIcon from './moon'
import { Link } from 'gatsby'

import NavLink from '../NavLink/NavLink'

import { useSiteTitle } from '../../shared/hooks/useSiteTitle'
import logoSrc from '../../shared/assets/logos/logo-white.svg'

import { useStyles } from './styles'
import { useDarkModeContext } from '../../context/dark-mode'
function Header({ noGutterBottom }) {
  const classes = useStyles(noGutterBottom)
  const siteTitle = useSiteTitle()
  const { darkMode, toggle: toggleDarMode } = useDarkModeContext()

  const DarkModeIcon = darkMode ? SunIcon : MoonIcon
  return (
    <AppBar position="static" className={classes.root}>
      <Container maxWidth="md">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className={classes.titleLink}>
              <img
                src={logoSrc}
                className={classes.logo}
                alt="Taveras Misael logo"
                tite={siteTitle}
              />
            </Link>
          </Typography>
          <nav className={classes.nav}>
            <NavLink
              color="secondary"
              variant="contained"
              target="__blank"
              href="https://twitter.com/taverasmisael"
            >
              Hablemos
            </NavLink>
            <NavLink
              onClick={toggleDarMode}
              component={IconButton}
              className={classes.darkModeButton}
              title={`${darkMode ? 'Apagar' : 'Encender'} tema oscuro`}
            >
              <DarkModeIcon className={classes.darkModeIcon} />
            </NavLink>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

const MemoHeader = memo(Header)
MemoHeader.displayName = 'Header'

export default MemoHeader
