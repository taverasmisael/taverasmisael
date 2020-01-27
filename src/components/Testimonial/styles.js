import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    display: 'grid',
    gridGap: 10,
    gridTemplateColumns: '40px 1fr',
    marginBottom: '0.75rem',
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
  body: {},
  text: {
    fontSize: '0.8rem',
  },
}))
