import { makeStyles } from '@material-ui/core/styles'

const CONTENT_PADDING = theme => theme.spacing(3, 2)

export const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.background.paper
        : theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    height: '100vh',
  },
  container: {
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: '48% 1fr',
    height: '100%',
    margin: '0 auto',
    maxWidth: 1920,

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: CONTENT_PADDING(theme),
    position: 'relative',
  },
  title: {
    fontSize: '2.75rem',
    marginTop: 0,
    marginBottom: 0,
  },
  text: {
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.up('md')]: {
      marginTop: '-2rem',
      marginLeft: '3rem',
    },
  },

  backdrop: {
    pointerEvents: 'none',
    '&::before, &::after': {
      content: '""',
      backgroundImage: 'linear-gradient(to bottom, #1c294f 42%, #000000)',
      display: 'block',
      opacity: 0.6,
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    },
  },

  subtitle: {
    fontFamily: theme.typography.body1.fontFamily,
    fontSize: '0.75em',
    marginTop: '0!important',
    marginBottom: 0,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5em',
    },
  },

  name: {
    color: theme.palette.secondary.main,
  },

  highlight: {
    background: `linear-gradient(0, ${theme.palette.secondary.main} 10%, transparent 10%)`,
  },

  description: {
    fontSize: '2.5rem',
    fontWeight: 300,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.25em',
      marginTop: '0.75em',
    },
  },

  contrastColor: {
    color: theme.palette.primary.contrastText,
  },
}))
