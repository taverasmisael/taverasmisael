import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '25vh',
    padding: theme.spacing(1, 2),
  },

  title: {
    marginTop: 0,
  },

  content: {
    maxWidth: '60%',
    margin: '0 auto',

    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
}))
