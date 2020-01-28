import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridGap: 16,
    gridTemplateColumns: 'repeat(5, minmax(275px, 1fr))',
    gridTemplateRows: 'repeat(auto-fill, 424px)',
  },
}))
