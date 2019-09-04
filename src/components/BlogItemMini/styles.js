import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '200px 1fr',
    gridTemplateRows: 200,
    marginBottom: theme.spacing(2),
    minWidth: 275,
    textAlign: 'left',

    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },

  excerpt: {
    fontSize: 18,
  },

  mediaFixed: {
    display: 'block',

    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  mediaFluid: {
    display: 'none',

    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  actions: {
    display: 'none',

    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}))
