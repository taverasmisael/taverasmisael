import { makeStyles } from '@material-ui/styles'

const DRAWER_WIDTH = 240

export const useStyles = noGutterBottom =>
  makeStyles(theme => ({
    toolbar: {
      ...theme.mixins.toolbar,
      padding: 0,
    },
    activeLink: {
      backgroundColor: 'rgba(0, 0, 0, 0.25)',

      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    darkModeButton: {
      color: theme.palette.primary.contrastText,
      marginLeft: theme.spacing(2),
    },
    darkModeIcon: {
      fontSize: '1.5rem',
    },
    root: {
      backgroundColor:
        theme.palette.type === 'dark'
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
      fontFamily: theme.typography.h1.fontFamily,
      marginRight: theme.spacing(2),
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

    search: {
      backgroundColor: 'rgb(0, 0, 0, 0.08)',
      borderRadius: theme.shape.borderRadius,
      position: 'relative',
      '&:hover': {
        backgroundColor: 'rgb(0, 0, 0, 0.1)',
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      padding: theme.spacing(0, 2),
      pointerEvents: 'none',
      position: 'absolute',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }))()

export default useStyles
