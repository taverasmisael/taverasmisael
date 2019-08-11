import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import MaterialLink from '@material-ui/core/Link'
import makeStyles from '@material-ui/core/styles/makeStyles'
import TagsList from '../TagsList'

const useStyles = makeStyles(theme => ({
  divider: {
    background: theme.palette.divider,
    display: 'inline-block',
    height: 1,
    margin: theme.spacing(0, 1.5),
    width: theme.spacing(2.5),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  metadata: {
    alignItems: 'center',
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
      flexFlow: 'column',
      marginBottom: theme.spacing(1.25),
    },
  },
}))

const BlogHeader = ({
  date,
  title,
  tags = [],
  variant,
  component,
  titleLink,
}) => {
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
        {titleLink ? (
          <MaterialLink component={Link} to={titleLink} color="textPrimary">
            {title}
          </MaterialLink>
        ) : (
          title
        )}
      </Typography>
    </header>
  )
}

export default BlogHeader
