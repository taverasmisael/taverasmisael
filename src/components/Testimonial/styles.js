import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    padding: '1em',
    transition:
      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    willChange: 'backgroundColor. box-shadow',

    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.2)',
      boxShadow: theme.shadows[5],
    },
  },

  hasBackgroundColor: {
    backgroundColor: 'rgba(0,0,0,0.15)',
    boxShadow: theme.shadows[5],
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
  },
  header: {
    display: 'grid',
    gridGap: 10,
    gridTemplateColumns: '40px 1fr',
  },
  name: {
    margin: 0,
    fontFamily: theme.typography.h1.fontFamily,
    lineHeight: 1,
    fontSize: '1rem',
    fontWeight: 500,
  },
  position: {
    margin: 0,
    lineHeight: 1,
    fontSize: '0.75rem',
  },
  body: {
    marginTop: '0.75rem',
  },
  text: {
    fontSize: 14,
  },
}))
