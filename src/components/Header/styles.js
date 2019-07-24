import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
  titleLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  title: {
    flexGrow: 1,
  },
}))

export default useStyles
