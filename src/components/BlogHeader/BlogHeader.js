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
    width: theme.spacing(2.5),
  },
  metadata: {
    alignItems: 'center',
    display: 'flex',
  },
}))

const BlogHeader = ({ date, title, tags = [], variant, component }) => {
  const classes = useStyles()
  return (
    <header>
      <Typography
        variant="caption"
        color="textSecondary"
        className={classes.metadata}
      >
        Publicado el {date}
        {tags.length && (
          <>
            <span className={classes.divider} />
            <TagsList tags={tags} />
          </>
        )}
      </Typography>
      <Typography gutterBottom variant={variant || 'h1'} component={component}>
        {title}
      </Typography>
    </header>
  )
}

export default BlogHeader
