import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  activeLink: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
  root: {
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
}))
