import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(-3),
  },
  list: {
    margin: '0!important',
    display: 'flex',
    flexDirection: 'row',
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
  },
}))

export default useStyles
