import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  controls: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    pointerEvents: 'none',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    userSelect: 'none',
    width: '100%',
    height: '100%',
  },

  control: {
    pointerEvents: 'all',
  },
}))
