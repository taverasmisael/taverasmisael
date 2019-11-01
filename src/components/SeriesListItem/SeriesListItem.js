import React, { memo } from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

import { useStyles } from './styles'

const SeriesListItem = memo(({ item, number }) => {
  const classes = useStyles()
  const entryLink = item.fields.slug
  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.actionArea}
        component={Link}
        to={entryLink}
      >
        <CardMedia className={classes.media}>
          <Typography variant="h1" component="span">
            {number}
          </Typography>
        </CardMedia>
        <CardContent>
          <Typography variant="h6" component="h2">
            {item.frontmatter.title}
          </Typography>
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

SeriesListItem.displayName = 'SeriesListItem'

export default SeriesListItem
