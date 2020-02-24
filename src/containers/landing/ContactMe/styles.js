import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
  },
  cell: {
    marginBottom: '2rem',
  },
  link: {
    color: theme.palette.secondary.contrastText,
    fontWeight: '500',
  },
  leftBlock: {
    padding: '3rem 2rem',
    paddingRight: '4rem',
    [theme.breakpoints.up('xl')]: {
      paddingRight: '10rem',
    },
  },
  rightBlock: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: '3rem 1rem',
  },

  sectionTitle: {
    fontFamily: theme.typography.h1.fontFamily,
    fontWeight: 500,
    marginBottom: '1em',
  },

  copy: {
    fontSize: 16,
    fontWeight: 300,
    marginBottom: '2rem',
  },

  testimonialsContainer: {
    marginTop: '1.75rem',
  },
}))
