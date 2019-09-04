import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    marginBottom: theme.spacing(2),
    textAlign: 'left',
  },

  excerpt: {
    fontSize: 18,
  },
}))
