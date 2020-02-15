import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(4),
  },

  sectionTitle: {
    color: theme.palette.primary.contrastText,
    marginBottom: '1em',
  },

  column: {
    '@media (min-width: 1400px)': {
      flexGrow: 0,
      maxWidth: '16.666667%',
      flexBasis: '16.666667%',
    },
  },
}))
