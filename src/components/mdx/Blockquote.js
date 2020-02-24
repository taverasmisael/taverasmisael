import React, { memo } from 'react'
import classnames from 'classnames'
import makeStyles from '@material-ui/styles/makeStyles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    borderLeft: `${theme.spacing(0.5)}px solid ${theme.palette.secondary.dark}`,
    boxShadow: theme.shadows[1],
    margin: `1em auto`,
    padding: theme.spacing(2),

    '&>p.MuiTypography-gutterBottom': {
      marginBottom: 0,
      marginTop: 0,
      padding: 0,
    },
  },
}))

const Blockquote = memo(({ className, ...props }) => {
  const classes = useStyles()
  return (
    <Container maxWidth="md">
      <blockquote className={classnames(className, classes.root)} {...props} />
    </Container>
  )
})

Blockquote.displayName = 'Blockquote'

export default Blockquote
