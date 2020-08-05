import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  list: {
    margin: '0!important',
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },
  },

  link: {
    width: 'auto',
    cursor: 'pointer',

    '&+&': {
      marginLeft: theme.spacing(2),
    },
  },

  title: {
    fontFamily: theme.typography.h1.fontFamily,
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right',
    },
  },
}))

export default useStyles
