import { makeStyles } from '@material-ui/core/styles'

export const useStyles = noGutterBottom =>
  makeStyles(theme => ({
    toolbar: {
      margin: '0 auto',
      width: 720,
    },
    root: {
      flexGrow: 1,
      marginBottom: noGutterBottom ? 0 : theme.spacing(2),
    },
    titleLink: {
      textDecoration: 'none',
      color: 'inherit',
    },
    title: {
      flexGrow: 1,
    },
  }))()

export default useStyles
