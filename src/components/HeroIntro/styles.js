import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.background.paper
        : theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    minHeight: '56vh',
    padding: theme.spacing(3, 2),
    position: 'relative',
  },
  content: {
    maxWidth: '40%',
    margin: '0',
    marginLeft: '8em',
    marginTop: '8em',

    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      marginLeft: 0,
      marginTop: 0,
    },
  },

  image: {
    position: 'absolute',
    right: '10%',
    top: '25vh',
    width: 640,
  },

  title: {
    fontSize: '6.625rem',
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
  },

  contrastColor: {
    color: theme.palette.primary.contrastText,
  },
  cta: {
    marginTop: '5em',
  },
}))
