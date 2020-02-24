import React, { memo } from 'react'
import classnames from 'classnames'
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
    marginBottom: theme.spacing(1.25),

    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
      flexFlow: 'column',
    },
  },
}))

const BlogHeader = memo(
  ({
    date,
    title,
    tags = [],
    variant,
    component,
    titleLink,
    timeToRead,
    classes: propClasses = {},
  }) => {
    const classes = useStyles()

    return (
      <header className={classnames(propClasses.container)}>
        <Typography
          variant={variant || 'h1'}
          component={component}
          className={classnames(propClasses.title)}
        >
          {titleLink ? (
            <MaterialLink component={Link} to={titleLink} color="textPrimary">
              {title}
            </MaterialLink>
          ) : (
            title
          )}
        </Typography>
        <Typography
          variant="caption"
          color="textSecondary"
          className={classnames(classes.metadata, propClasses.metadata)}
        >
          Publicado el {date}
          {!!timeToRead && (
            <>
              <span className={classes.divider} />
              <span>{timeToRead} mins.</span>
            </>
          )}
          {!!tags.length && (
            <>
              <span className={classes.divider} />
              <TagsList tags={tags} />
            </>
          )}
        </Typography>
      </header>
    )
  }
)

BlogHeader.displayName = 'BlogHeader'

export default BlogHeader
