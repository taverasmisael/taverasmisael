import React, { memo } from 'react'
import { Link } from 'gatsby'

import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import useStyles from './styles'

const MobileMenu = memo(({ DarkModeIcon, toggleDarkMode }) => {
  const classes = useStyles()

  return (
    <nav className={classes.mobileNav}>
      <div className={classes.toolbar} />
      <List className={classes.mobileMenu}>
        <ListItem
          button
          component={Link}
          activeClassName={classes.activeLink}
          to="/"
        >
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem
          button
          component={Link}
          activeClassName={classes.activeLink}
          to="/blog"
        >
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem
          button
          component={Link}
          activeClassName={classes.activeLink}
          to="/newsletter"
        >
          <ListItemText primary="Newsletter" />
        </ListItem>
        <ListItem
          button
          component={Link}
          activeClassName={classes.activeLink}
          to="/contacto"
        >
          <ListItemText primary="Contacto" />
        </ListItem>
        <ListItem className={classes.itemGrow} />
        <Hidden smUp implementation="css">
          <Divider />
          <ListItem button onClick={toggleDarkMode}>
            <ListItemText primary="Cambiar modo" />
            <ListItemIcon classes={{ root: classes.listIcon }}>
              <DarkModeIcon className={classes.darkModeIcon} />
            </ListItemIcon>
          </ListItem>
        </Hidden>
      </List>
    </nav>
  )
})

MobileMenu.displayName = 'MobileMenu'

export default MobileMenu
