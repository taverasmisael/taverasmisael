import React from 'react'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import TagsList from '../TagsList'

const useStyles = makeStyles(theme => ({
  divider: {
    background: theme.palette.divider,
    display: 'inline-block',
    height: 1,
    margin: theme.spacing(0, 1.5),
    width: theme.spacing(3),
  },
  metadata: {
    alignItems: 'center',
    display: 'flex',
  },
}))

const BlogHeader = ({ date, title, tags }) => {
  const classes = useStyles()
  return (
    <header>
      <Typography gutterBottom variant="h1">
        <Typography
          variant="caption"
          color="textSecondary"
          className={classes.metadata}
        >
          Publicado el {date} <span className={classes.divider} />
          <TagsList tags={tags} />
        </Typography>
        {title}
      </Typography>
    </header>
  )
}

export default BlogHeader
