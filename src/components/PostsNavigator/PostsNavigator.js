import React, { memo } from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import MaterialLink from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LeftIcon from '@material-ui/Icons/KeyboardArrowLeft'
import RightIcon from '@material-ui/Icons/KeyboardArrowRight'

import makeStyles from '@material-ui/core/styles/makeStyles'

const PostsNavigator = memo(({ prevPost, nextPost }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={3} component="nav" className={classes.root}>
      <Grid item xs={12} sm={6}>
        {prevPost && (
          <MaterialLink
            className={classes.navigator}
            component={Link}
            to={prevPost.fields.slug}
          >
            <LeftIcon className={classes.icon} />
            <div className={classes.content}>
              <Typography
                variant="h4"
                component="span"
                className={classes.heading}
              >
                Anterior
              </Typography>

              {prevPost.frontmatter.title}
            </div>
          </MaterialLink>
        )}
      </Grid>
      <Grid item xs={12} sm={6}>
        {nextPost && (
          <MaterialLink
            align="right"
            className={classes.navigator}
            component={Link}
            to={nextPost.fields.slug}
          >
            <div className={classes.content}>
              <Typography
                variant="h4"
                component="span"
                className={classes.heading}
              >
                Siguiente
              </Typography>
              {nextPost.frontmatter.title}
            </div>
            <RightIcon
              className={classnames(classes.icon, classes.iconRight)}
            />
          </MaterialLink>
        )}
      </Grid>
    </Grid>
  )
})

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1.5),

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  navigator: {
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: theme.spacing(1.5, 3),

    '&:hover': {
      background: 'rgba(0,0,0,0.1)',
    },
  },

  divider: {
    marginBottom: theme.spacing(1),
  },

  icon: {
    fill: 'currentColor',
  },

  iconRight: {
    justifySelf: 'flex-end',
  },

  content: {
    display: 'inline-block',
    textAlign: 'left',
  },

  heading: {
    display: 'block',
    marginTop: 0,
  },
}))

export default PostsNavigator
