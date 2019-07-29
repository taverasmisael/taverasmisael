import React from 'react'
import classnames from 'classnames'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles(
  theme =>
    console.warn(theme) || {
      root: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        borderLeft: `${theme.spacing(0.5)}px solid ${
          theme.palette.secondary.dark
        }`,
        margin: theme.spacing(2, 0),
        padding: theme.spacing(2),
      },
    }
)

const Blockquote = ({ children, className, ...props }) => {
  const classes = useStyles()
  return (
    <blockquote
      elevation={0}
      className={classnames(className, classes.root)}
      component=""
      {...props}
    >
      {children}
    </blockquote>
  )
}

export default Blockquote
