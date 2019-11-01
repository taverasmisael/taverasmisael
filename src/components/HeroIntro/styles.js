import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.background.paper
        : theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '35vh',
    padding: theme.spacing(3, 2),
  },

  title: {
    marginTop: 0,
  },

  contrastColor: {
    color: theme.palette.primary.contrastText,
  },

  content: {
    maxWidth: '60%',
    margin: '0 auto',

    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
}))
