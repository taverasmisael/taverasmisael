import React, { memo } from 'react'
import classnames from 'classnames'
import makeStyles from '@material-ui/styles/makeStyles'
import Container from '@material-ui/core/Container'

const useStyles = props =>
  makeStyles(theme => {
    const hasBackground = !!props.type
    const { backgroundColor, color } = getColorsFromType(
      props.type,
      theme.palette
    )
    const accent = getAccentFromType(props.type, theme.palette)
    return {
      root: {
        backgroundColor,
        color,
        borderRadius: theme.shape.borderRadius,
        borderLeft: `${theme.spacing(0.5)}px solid ${accent}`,
        boxShadow: theme.shadows[1],
        margin: `1em auto`,
        padding: theme.spacing(2),

        '&>p.MuiTypography-gutterBottom': {
          marginBottom: 0,
          marginTop: 0,
          padding: 0,
        },

        '& a': hasBackground
          ? {
              color: 'inherit',
            }
          : {},
      },
    }
  })()

const Blockquote = memo(({ className, type, ...props }) => {
  const classes = useStyles({ type })
  return (
    <Container maxWidth="md">
      <blockquote className={classnames(className, classes.root)} {...props} />
    </Container>
  )
})

Blockquote.displayName = 'Blockquote'

const BLOCKQUOTE_TYPES = {
  INFO: 'info',
  DISCLAIMER: 'disclaimer',
  ALERT: 'alert',
}

const getColorsFromType = (type, palette) => {
  switch (type) {
    case BLOCKQUOTE_TYPES.INFO:
      return {
        backgroundColor: palette.primary.light,
        color: palette.primary.contrastText,
      }
    case BLOCKQUOTE_TYPES.DISCLAIMER:
      return {
        backgroundColor: palette.secondary.dark,
        color: palette.secondary.contrastText,
      }
    case BLOCKQUOTE_TYPES.ALERT:
      return {
        backgroundColor: palette.warning.dark,
        color: palette.warning.contrastText,
      }
    default:
      return {
        backgroundColor: palette.background.paper,
        color: palette.text.primary,
      }
  }
}
const getAccentFromType = (type, palette) => {
  switch (type) {
    case BLOCKQUOTE_TYPES.INFO:
      return palette.primary.dark
    case BLOCKQUOTE_TYPES.ALERT:
      return palette.warning.main
    case BLOCKQUOTE_TYPES.DISCLAIMER:
    default:
      return palette.secondary.dark
  }
}

export default Blockquote
