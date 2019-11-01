import React, { memo } from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import CardActionArea from '@material-ui/core/CardActionArea'
import Hidden from '@material-ui/core/Hidden'

import { useStyles } from '../SeriesListItem/styles'
import { useStyles as useOwnStyles } from './styles'
import Img from 'gatsby-image'

import BlogHeader from '../BlogHeader'

const BlogItemMini = memo(({ item }) => {
  const classes = useStyles()
  const classesOverride = useOwnStyles()
  const entryLink = item.fields.slug
  console.log(item.frontmatter.banner.childImageSharp.fluid)
  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.actionArea}
        component={Link}
        to={entryLink}
      >
        <CardMedia className={classnames(classes.media, classesOverride.media)}>
          <Hidden smUp>
            <Img
              fluid={item.frontmatter.banner.childImageSharp.fluid}
              alt={item.frontmatter.title}
            />
          </Hidden>
          <Hidden xsDown>
            <Img
              fixed={item.frontmatter.banner.childImageSharp.fixed}
              alt={item.frontmatter.title}
            />
          </Hidden>
        </CardMedia>
        <CardContent>
          <BlogHeader
            variant="h6"
            component="h2"
            date={item.frontmatter.date}
            title={item.frontmatter.title}
            classes={HEADER_CLASSES}
          />
          <Typography variant="body2" component="p" className={classes.excerpt}>
            {item.shortExcerpt || item.excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button component={Link} to={entryLink} size="small">
          Leer más
        </Button>
      </CardActions>
    </Card>
  )
})

const HEADER_CLASSES = {
  metadata: 'no-margin',
}

BlogItemMini.displayName = 'BlogItemMini'

export default BlogItemMini
