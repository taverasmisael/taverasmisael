import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor:
      theme.palette.secondary[theme.palette.type === 'dark' ? 'dark' : 'main'],
    color: theme.palette.secondary.contrastText,
    margin: theme.spacing(2, 0),
  },
  span: {
    color: 'rgba(255,255,255,0.8)',
  },
}))
