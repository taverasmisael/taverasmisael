import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
  },

  sectionTitle: {
    color: theme.palette.primary.contrastText,
    paddingLeft: '2rem',
  },
}))
