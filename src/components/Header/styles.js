import { makeStyles } from '@material-ui/core/styles'

export const useStyles = noGutterBottom =>
  makeStyles(theme => ({
    toolbar: {
      padding: 0,
    },
    darkModeButton: {
      color: theme.palette.primary.contrastText,
    },
    darkModeIcon: {
      fontSize: '1.5rem',
    },
    root: {
      backgroundColor:
        theme.mode === 'dark'
          ? theme.palette.background.default
          : theme.palette.primary.dark,
      justifyContent: 'center',
      marginBottom: noGutterBottom ? 0 : theme.spacing(2),
    },
    titleLink: {
      display: 'inline-block',
      textDecoration: 'none',
      color: 'inherit',
    },
    logo: {
      display: 'block',
      userSelect: 'none',
      pointerEvents: 'none',
    },
    title: {
      flexGrow: 1,
      fontFamily: theme.typography.h1.fontFamily,
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
    },

    nav: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  }))()

export default useStyles
