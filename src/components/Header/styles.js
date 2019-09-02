import { makeStyles } from '@material-ui/core/styles'

const DRAWER_WIDTH = 240

export const useStyles = noGutterBottom =>
  makeStyles(theme => ({
    toolbar: {
      ...theme.mixins.toolbar,
      padding: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
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
      display: 'flex',
      flexGrow: 1,
      fontFamily: theme.typography.h1.fontFamily,
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
        textAlign: 'center',
      },
    },

    listIcon: {
      color: 'inherit',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },

    nav: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },

    mobileNav: {
      width: DRAWER_WIDTH,
      height: '100vh',
    },

    mobileMenu: {
      display: 'flex',
      flexFlow: 'column nowrap',
      height: 'calc(100% - 56px)', // The height of the  toolbar
      margin: '0!important',
    },

    itemGrow: {
      flex: 1,
    },
  }))()

export default useStyles
