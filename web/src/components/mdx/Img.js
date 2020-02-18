import React, { memo } from 'react'
import classnames from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

const Img = memo(({ className, alt, ...props }) => {
  const classes = useStyles()
  return (
    <img className={classnames(classes.root, className)} alt={alt} {...props} />
  )
})

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: theme.shadows[1],
    borderRadius: theme.shape.borderRadius,
    userSelect: 'none',
  },
}))

Img.displayName = 'Img'

export default Img
