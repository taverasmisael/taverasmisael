import makeStyles from '@material-ui/core/styles/makeStyles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import CodeIcon from '@material-ui/icons/Code'
import OpenExternalIcon from '@material-ui/icons/OpenInNew'
import React, { memo } from 'react'

const useStyles = makeStyles(theme => ({
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
  variant: 'text',
}

const SourceButtons = memo(({ repoURL, demoURL }) => (
  <Container maxWidth="md">
    {repoURL && <RepoButton href={repoURL} />}
    {demoURL && <DemoButton href={demoURL} />}
  </Container>
))

SourceButtons.displayName = 'SourceButtons'

const DemoButton = memo(({ href }) => {
  const classes = useStyles()
  return (
    <Button
      {...DEFAULT_BUTTON_PROPS}
      href={href}
      color="secondary"
      className={classes.button}
    >
      Lanzar demo
      <OpenExternalIcon className={classes.icon} />
    </Button>
  )
})

DemoButton.displayName = 'DemoButton'

const RepoButton = memo(({ href }) => {
  const classes = useStyles()
  return (
    <Button {...DEFAULT_BUTTON_PROPS} href={href} className={classes.button}>
      Ver Código
      <CodeIcon className={classes.icon} />
    </Button>
  )
})

RepoButton.displayName = 'RepoButton'

export default SourceButtons
