import React, { memo } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { graphql, Link } from 'gatsby'

import BlogItemMini from '../components/BlogItemMini'
import HeroIntro from '../components/HeroIntro'
import GeneralLayout from '../layouts/general'

const HomePage = memo(({ data }) => (
  <GeneralLayout noGutterBottom>
    <HeroIntro />
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        Último del blog
      </Typography>
      <Grid container spacing={2}>
        {data.allMdx.nodes.map(entry => (
          <Grid key={entry.id} item sm={12}>
            <BlogItemMini item={entry} />
          </Grid>
        ))}
      </Grid>
      <div className="MuiTypography-alignRight">
        <Button component={Link} to="/blog" size="small" color="primary">
          Ver todas
        </Button>
      </div>
    </Container>
  </GeneralLayout>
))

HomePage.displayName = 'HomePage'

export const query = graphql`
  query {
    allMdx(
      limit: 2
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { status: { eq: "published" } } }
    ) {
      nodes {
        ...BlogPostNode
      }
    }
  }
`

export default HomePage
