import { makeStyles } from '@material-ui/core/styles'

export const useStyles = noGutterBottom =>
  makeStyles(theme => ({
    toolbar: {
      padding: 0,
    },
    root: {
      height: 90,
      justifyContent: 'center',
      marginBottom: noGutterBottom ? 0 : theme.spacing(2),
    },
    titleLink: {
      textDecoration: 'none',
      color: 'inherit',
    },
    title: {
      flexGrow: 1,
      fontFamily: theme.typography.h1.fontFamily,
    },
  }))()

export default useStyles
