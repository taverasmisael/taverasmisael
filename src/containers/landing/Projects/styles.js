import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
  },

  sectionTitle: {
    color: theme.palette.primary.contrastText,
    paddingLeft: '2rem',
  },

  projectsContainer: {
    padding: '0 2rem',
  },

  column: {
    '@media (min-width: 1400px)': {
      flexGrow: 0,
      maxWidth: '16.666667%',
      flexBasis: '16.666667%',
    },
  },
}))
