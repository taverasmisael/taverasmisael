import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    maxHeight: 0,
    overflow: 'auto',
    position: 'absolute',
    top: `calc(100% + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('max-height'),
    width: '100%',

    '& ul': {
      margin: '0!important',
      padding: '0!important',
    },
  },

  show: {
    maxHeight: '65vh',
  },

  content: {
    padding: theme.spacing(2, 0),
  },
  header: {
    padding: theme.spacing(0, 2, 1, 2),
  },
  footer: {
    padding: theme.spacing(1, 2, 0, 2),
  },
}))
