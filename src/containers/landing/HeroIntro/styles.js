import { makeStyles } from '@material-ui/styles'

const CONTENT_PADDING = theme => theme.spacing(3, 2)

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },

  container: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateRows: '0 1fr 70px',
    height: '100%',
    padding: CONTENT_PADDING(theme),
    position: 'relative',
  },

  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: '6.75rem',
    marginTop: 0,
    marginBottom: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: '5.75rem',
    },
  },
  text: {
    gridArea: '2/1',
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.up('md')]: {
      marginTop: '-2rem',
      marginLeft: '3rem',
    },
  },

  backdrop: {
    pointerEvents: 'none',
    zIndex: -1,
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

    '&>span': {
      fontSize: '1.5rem',
      color: 'rgba(255,255,255,.6)',
    },
  },

  contrastColor: {
    color: theme.palette.primary.contrastText,
  },

  ctaContainer: {
    marginTop: '5rem',
  },
}))
