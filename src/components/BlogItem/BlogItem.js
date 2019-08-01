import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { useStyles } from './styles'
import Img from 'gatsby-image'

const BlogItem = ({ item }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia>
        <Link to={`/blog/${item.frontmatter.slug}`} className="link--no-style">
          <Img
            fluid={item.frontmatter.banner.childImageSharp.fluid}
            alt={item.frontmatter.title}
          />
        </Link>
      </CardMedia>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          <Link
            to={`/blog/${item.frontmatter.slug}`}
            className="link--no-style"
          >
            {item.frontmatter.title}
          </Link>
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Publicado el {item.frontmatter.date}
        </Typography>
        <Typography variant="body2" component="p" className={classes.excerpt}>
          {item.excerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/blog/${item.frontmatter.slug}`}
          size="small"
          color="primary"
        >
          Ver más
        </Button>
      </CardActions>
    </Card>
  )
}

export default BlogItem
