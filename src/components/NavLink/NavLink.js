import React from 'react'
import Button from '@material-ui/core/Button'
import { Link as GatsbyLink } from 'gatsby'

import { useStyles } from './styles'

const Link = React.forwardRef((props, ref) => (
  <GatsbyLink innerRef={ref} {...props} />
))

const NavLink = ({ to, color = 'inherit', variant = 'text', ...props }) => {
  const classes = useStyles()
  return (
    <Button
      color={color}
      variant={variant}
      type="button"
      className={classes.root}
      component={to ? Link : undefined}
      to={to}
      {...props}
    />
  )
}

export default NavLink
