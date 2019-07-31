import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  activeLink: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
  root: {
    fontSize: 14,
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
}))
