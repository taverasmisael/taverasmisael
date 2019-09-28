import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    minWidth: 275,
  },

  actionArea: {
    display: 'grid',
    gridTemplateColumns: '150px 1fr',
    gridTemplateRows: 150,
    minWidth: 275,
    textAlign: 'left',

    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },

  mediaLink: {
    display: 'block',
  },

  excerpt: {
    fontSize: 18,
  },

  media: {
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.light,
    display: 'flex',
    height: '100%',
    justifyContent: 'center',

    [theme.breakpoints.down('xs')]: {
      height: 0,
      position: 'relative',
      paddingTop: '57.62%',

      '&>*': {
        position: 'absolute',
        top: '50%',
        left: '50%',

        transform: 'translate(-50%, -50%)',
      },
    },
  },
  actions: {
    display: 'none',

    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}))
