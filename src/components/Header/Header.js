import React, { memo, useState, useCallback } from 'react'
import { Link } from 'gatsby'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import InputBase from '@material-ui/core/InputBase'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

import { useDarkModeContext } from '../../context/dark-mode'
import { useSiteTitle } from '../../shared/hooks/useSiteTitle'
import logoSrc from '../../shared/assets/logos/logo-white.svg'
import logoMobileSrc from '../../shared/assets/logos/logo-mobile-white.svg'

import { MoonIcon, SunIcon } from './icons'
import HideOnScroll from './HideOnScroll'
import { useStyles } from './styles'
import MobileMenu from './Navigation'

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
        <Container maxWidth="lg" className="real-width">
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
                <Hidden xsDown implementation="css">
                  <img
                    src={logoSrc}
                    className={classes.logo}
                    alt="Taveras Misael logo"
                    tite={siteTitle}
                  />
                </Hidden>
                <Hidden smUp implementation="css">
                  <img
                    src={logoMobileSrc}
                    className={classes.logo}
                    alt="Taveras Misael logo"
                    tite={siteTitle}
                  />
                </Hidden>
              </Link>
            </Typography>
            <span className={classes.itemGrow} />
            <Drawer
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
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Buscar…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'Buscar' }}
              />
            </div>
            <nav className={classes.nav}>
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
