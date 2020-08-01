import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles(theme => {
  const isDarkTheme = theme.palette.type === 'dark'
  return {
    search: {
      backgroundColor: isDarkTheme
        ? 'rgb(250, 250, 250, 0.08)'
        : 'rgb(0, 0, 0, 0.2)',
      borderRadius: theme.shape.borderRadius,
      position: 'relative',
      '&:hover': {
        backgroundColor: isDarkTheme
          ? 'rgb(250, 250, 250, 0.1)'
          : 'rgb(0, 0, 0, 0.3)',
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
        width: '16ch',
        '&:focus': {
          width: '24ch',
        },
      },
    },
  }
})
