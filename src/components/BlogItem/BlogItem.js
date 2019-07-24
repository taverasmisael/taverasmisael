import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { useStyles } from './styles'

const BlogItem = ({ item }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={item.frontmatter.banner.publicURL}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="h4" component="h2" gutterBottom>
          <Link
            to={`/blog/${item.frontmatter.slug}`}
            className="link--no-style"
          >
            {item.frontmatter.title}
          </Link>
        </Typography>
        <Typography className={classes.date} color="textSecondary">
          Published on: {new Date(item.frontmatter.date).toLocaleDateString()}
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
          Read more
        </Button>
      </CardActions>
    </Card>
  )
}

export default BlogItem
