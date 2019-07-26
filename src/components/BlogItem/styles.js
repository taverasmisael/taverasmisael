import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    minWidth: 275,
  },
  date: {
    marginBottom: theme.spacing(1.5),
  },
  excerpt: {
    fontSize: 18,
  },
}))
