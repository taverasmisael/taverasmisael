import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.background.paper
        : theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    height: '56vh',
    minHeight: 610,
    padding: theme.spacing(3, 2),
    [theme.breakpoints.down('md')]: {
      height: 400,
      minHeight: 'auto',
    },
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: 1920,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },

  textContent: {
    maxWidth: '40%',
    marginRight: '8em',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      marginRight: 0,
      marginTop: 0,
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
    },
  },

  image: {
    display: 'block',
    position: 'relative',
    top: '32%',
    width: 480,
    '@media (min-width: 1921px)': {
      top: 0,
    },
    [theme.breakpoints.down('xs')]: {
      width: 306,
      margin: '0 auto',
      marginRight: 0,
      top: '-15%',
    },
    [theme.breakpoints.down('md')]: {
      width: 306,
      margin: '0 auto',
      top: 0,
    },
  },

  title: {
    fontSize: '3.25rem',
    marginTop: 0,
    marginBottom: 0,
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
