import React from 'react'
import Button from '@material-ui/core/Button'
import { Link as GatsbyLink } from 'gatsby'

import { useStyles } from './styles'

const Link = React.forwardRef((props, ref) => (
  <GatsbyLink innerRef={ref} {...props} />
))

const NavLink = ({ to, children, color = 'inherit', variant = 'text' }) => {
  const classes = useStyles()
  return (
    <Button
      color={color}
      variant={variant}
      type="button"
      className={classes.root}
      component={Link}
      to={to}
      activeClassName={color === 'inherit' ? classes.activeLink : undefined}
    >
      {children}
    </Button>
  )
}

export default NavLink
