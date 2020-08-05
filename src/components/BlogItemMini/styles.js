import { makeStyles } from '@material-ui/styles'

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

  mediaContainer: {
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.light,
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      display: 'block',
      position: 'relative',
      paddingTop: '0',

      '&>*': {
        position: 'relative',
        top: 'auto',
        left: 'auto',

        transform: 'none',
      },
    },
  },
  media: {
    height: '100%',
    width: '100%',
  },
  actions: {
    display: 'none',

    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}))
