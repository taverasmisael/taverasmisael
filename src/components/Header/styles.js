import { makeStyles } from '@material-ui/core/styles'

export const useStyles = noBottomGutter =>
  makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginBottom: noBottomGutter ? 0 : theme.spacing(2),
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
