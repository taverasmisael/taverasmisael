import React from 'react'
import classnames from 'classnames'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    borderLeft: `${theme.spacing(0.5)}px solid ${theme.palette.secondary.dark}`,
    boxShadow: theme.shadows[1],
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2),

    '&>*': {
      fontStyle: 'italic',
    },
    '&>p.MuiTypography-gutterBottom': {
      marginBottom: 0,
      marginTop: 0,
    },
  },
}))

const Blockquote = ({ className, ...props }) => {
  const classes = useStyles()
  return (
    <blockquote className={classnames(className, classes.root)} {...props} />
  )
}

export default Blockquote
