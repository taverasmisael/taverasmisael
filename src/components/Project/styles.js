import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    display: 'block',
    height: '100%',
    minHeight: 400,
    position: 'relative',
  },

  button: {
    height: '100%',
    width: '100%',
  },
  image: {
    height: '100%',
    pointerEvents: 'none',
    width: '100%',
  },

  content: {
    borderRadius: 0,
    display: 'grid',
    height: '100%',
    gridTemplateRows: '1fr 32px',
    padding: theme.spacing(1, 3),
    paddingBottom: theme.spacing(4),
    position: 'absolute',
    width: '100%',
    top: 0,
    transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateY(calc(70% - 16px))',
  },

  contentOpen: {
    transform: 'translateY(0)',
  },
  name: {
    ...theme.typography.h5,
    fontSize: 16,
    fontWeight: 500,
    fontFamily: theme.typography.body1.fontFamily,
    marginBottom: theme.spacing(1.5),
  },
  description: {
    fontSize: 14,
    fontWeight: 300,
  },

  text: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
}))
