import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles(theme => ({
  media: {
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
}))
