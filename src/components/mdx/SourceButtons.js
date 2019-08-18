import makeStyles from '@material-ui/core/styles/makeStyles'
import Button from '@material-ui/core/Button'
import CodeIcon from '@material-ui/icons/Code'
import OpenExternalIcon from '@material-ui/icons/OpenInNew'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
  },
  button: {
    fontSize: theme.typography.body2.fontSize,
    [theme.breakpoints.up('sm')]: {
      '&+&': {
        marginLeft: theme.spacing(3),
      },
    },
  },

  icon: {
    marginLeft: theme.spacing(1),
  },
}))

const DEFAULT_BUTTON_PROPS = {
  rel: 'nofollow',
  target: '__blank',
}

const SourceButtons = ({ repoURL, demoURL }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {repoURL && <RepoButton href={repoURL} />}
      {demoURL && <DemoButton href={demoURL} />}
    </div>
  )
}

const DemoButton = ({ href }) => {
  const classes = useStyles()
  return (
    <Button
      {...DEFAULT_BUTTON_PROPS}
      href={href}
      color="secondary"
      variant="text"
      className={classes.button}
    >
      Lanzar demo
      <OpenExternalIcon className={classes.icon} />
    </Button>
  )
}

const RepoButton = ({ href }) => {
  const classes = useStyles()
  return (
    <Button
      {...DEFAULT_BUTTON_PROPS}
      href={href}
      color="primary"
      variant="text"
      className={classes.button}
    >
      Ver Código
      <CodeIcon className={classes.icon} />
    </Button>
  )
}

export default SourceButtons
