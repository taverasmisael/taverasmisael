import React, { memo, useState, useCallback } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'gatsby'

import NavLink from '../NavLink/NavLink'

import { useDarkModeContext } from '../../context/dark-mode'
import { useSiteTitle } from '../../shared/hooks/useSiteTitle'
import logoSrc from '../../shared/assets/logos/logo-white.svg'

import SunIcon from './sun'
import MoonIcon from './moon'
import HideOnScroll from './HideOnScroll'
import { useStyles } from './styles'
import MobileMenu from './MobileMenu'

function Header({ noGutterBottom }) {
  const classes = useStyles(noGutterBottom)
  const siteTitle = useSiteTitle()
  const { darkMode, toggle: toggleDarkMode } = useDarkModeContext()

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = useCallback(
    () => setMobileOpen(isOpen => !isOpen),
    []
  )

  const DarkModeIcon = darkMode ? SunIcon : MoonIcon
  return (
    <HideOnScroll>
      <AppBar position="sticky" className={classes.root}>
        <Container maxWidth="md" className="real-width">
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
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
            <Hidden smUp implementation="css">
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
              >
                <MobileMenu
                  DarkModeIcon={DarkModeIcon}
                  toggleDarkMode={toggleDarkMode}
                  darkMode={darkMode}
                />
              </Drawer>
            </Hidden>
            <nav className={classes.nav}>
              <NavLink to="/blog" partiallyActive>
                Blog
              </NavLink>
              <NavLink to="/series" partiallyActive>
                Series
              </NavLink>
              <NavLink to="/contacto">Contacto</NavLink>
              <IconButton
                onClick={toggleDarkMode}
                className={classes.darkModeButton}
                title={`${darkMode ? 'Apagar' : 'Encender'} tema oscuro`}
              >
                <DarkModeIcon className={classes.darkModeIcon} />
              </IconButton>
            </nav>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  )
}

const MemoHeader = memo(Header)
MemoHeader.displayName = 'Header'

export default MemoHeader
