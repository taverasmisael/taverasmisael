import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.background.paper
        : theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    height: '100vh',
    padding: theme.spacing(3, 2),
  },
  content: {
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: '12em 40% 1fr',
    height: '100%',
    margin: '0 auto',
    maxWidth: 1920,
    [theme.breakpoints.down('sm')]: {},
  },

  textContent: {
    gridColumn: 2,
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
