import { makeStyles } from '@material-ui/styles'

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
