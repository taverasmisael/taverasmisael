import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(8),
    overflow: 'hidden',

    [theme.breakpoints.down('sm')]: { marginTop: theme.spacing(4) },
  },

  container: {
    alignItems: 'center',
    borderTop: `1px solid ${theme.palette.action.disabledBackground}`,
    display: 'grid',
    gridGap: theme.spacing(2, 4),
    gridTemplateColumns: '18% 1fr',
    padding: theme.spacing(4, 2),

    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },

  profileImageContainer: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    height: '100%',
    padding: theme.spacing(4, 2),
    gridRow: '1/3',

    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },

  shortBio: {
    maxWidth: '80%',
  },

  socialLinks: {
    display: 'grid',
    gridGap: theme.spacing(2),
    gridTemplateColumns: 'repeat(7, 1fr)',
    listStyle: 'none',
    gridColumn: '2/3',

    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
    },
  },
  socialLink: {
    fontWeight: 'normal',
    borderRadius: 0,
    fontSize: '1rem',
    textTransform: 'lowercase',
  },
  profileImg: {
    borderRadius: '50%',
  },
}))
