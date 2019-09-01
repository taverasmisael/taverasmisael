import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  activeLink: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  root: {
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: 14,
    fontWeight: 'bold',
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
}))
