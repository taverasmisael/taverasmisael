import React, { memo } from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import classnames from 'classnames'
import { useStyles } from './styles'
import Img from 'gatsby-image'

import BlogHeader from '../BlogHeader'

const BlogItemMini = memo(({ item }) => {
  const classes = useStyles()
  const entryLink = item.fields.slug
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.mediaFixed}>
        <Link
          to={entryLink}
          className={classnames(classes.mediaLink, 'link--no-style')}
        >
          <Img
            fixed={item.frontmatter.banner.childImageSharp.fixed}
            alt={item.frontmatter.title}
          />
        </Link>
      </CardMedia>
      <CardMedia className={classes.mediaFluid}>
        <Link to={entryLink} className="link--no-style">
          <Img
            fluid={item.frontmatter.banner.childImageSharp.fluid}
            alt={item.frontmatter.title}
          />
        </Link>
      </CardMedia>
      <CardContent>
        <BlogHeader
          variant="h6"
          component="h2"
          titleLink={entryLink}
          date={item.frontmatter.date}
          title={item.frontmatter.title}
          classes={HEADER_CLASSES}
        />
        <Typography variant="body2" component="p" className={classes.excerpt}>
          {item.shortExcerpt || item.excerpt}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button component={Link} to={entryLink} size="small" color="primary">
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
