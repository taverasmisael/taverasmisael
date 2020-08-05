import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  list: {
    margin: '0!important',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 0,
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
    textAlign: 'right',
  },
}))

export default useStyles
