import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  aboutBlock: {
    padding: '3rem 2rem',
    paddingRight: '4rem',
    [theme.breakpoints.up('xl')]: {
      paddingRight: '10rem',
    },
  },
  testimonialsBlock: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: '3rem 1rem',
  },

  sectionTitle: {
    fontFamily: theme.typography.h1.fontFamily,
    fontWeight: 500,
    marginBottom: '1em',
  },

  aboutCopy: {
    fontSize: 16,
    fontWeight: 300,
    marginBottom: '2rem',
  },

  testimonialsContainer: {
    marginTop: '1.75rem',
  },
}))
