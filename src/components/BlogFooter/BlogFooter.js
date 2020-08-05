import React, { memo } from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import ShareButtons from '../ShareButtons'
import TagsList from '../TagsList'
import BlogItemMini from '../BlogItemMini'
import NewsletterForm from '../NewsletterForm'

const BlogFooter = ({ tags, path, title, description, relatedPosts }) => (
  <>
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={12} md={5}>
          <Typography variant="subtitle1">Etiquetas</Typography>
          <TagsList tags={tags} />
        </Grid>
        <Grid item xs={12} md={7}>
          <ShareButtons url={path} title={title} text={description} />
        </Grid>
      </Grid>
    </Container>
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Artículos Relacionados
      </Typography>
      <Grid container spacing={2}>
        {relatedPosts.map(related => (
          <Grid item key={related.id} xs={12}>
            <BlogItemMini item={related} />
          </Grid>
        ))}
      </Grid>
    </Container>
    <Container id="newsletter" maxWidth="md">
      <NewsletterForm path={path} />
    </Container>
  </>
)

export default memo(BlogFooter)
