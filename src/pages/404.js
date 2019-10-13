import React, { memo } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import MaterialLink from '@material-ui/core/Link'
import { graphql, Link } from 'gatsby'

import BlogItemMini from '../components/BlogItemMini'
import GeneralLayout from '../layouts/general'
import { useStyles } from '../components/HeroIntro/styles'

const NotFoundPage = memo(({ data }) => {
  const entry = data.allMdx.nodes[0]

  return (
    <GeneralLayout
      noGutterBottom
      headProps={{ title: 'No se ha encontrado lo que buscas' }}
    >
      <Content entry={entry} />
    </GeneralLayout>
  )
})

function Content({ entry }) {
  const classes = useStyles()
  return (
    <>
      <section className={classes.root}>
        <div className={classes.content}>
          <Typography component="h1" variant="h3" gutterBottom>
            Lo que buscas no está aquí
          </Typography>
          <Typography variant="overline" component="h2" gutterBottom>
            Es posible que la página se haya movido, no se haya creado o
            simplemente no exista en esta dimensión.
          </Typography>
          <Typography>
            Mientras, puedes{' '}
            <MaterialLink component={Link} to="/" color="secondary">
              volver al inicio
            </MaterialLink>
            ,{' '}
            <MaterialLink component={Link} to="/blog" color="secondary">
              visitar el blog
            </MaterialLink>{' '}
            o ponerte en{' '}
            <MaterialLink component={Link} to="/contacto" color="secondary">
              contacto conmigo
            </MaterialLink>
            .
          </Typography>
        </div>
      </section>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Aquí está el ultimo post del blog
        </Typography>
        <Grid container spacing={2}>
          <Grid key={entry.id} item sm={12}>
            <BlogItemMini item={entry} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} className="MuiTypography-alignRight">
            <Button component={Link} to="/blog" size="small">
              Ver blog
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

NotFoundPage.displayName = 'NotFoundPage'

export const query = graphql`
  query {
    allMdx(
      limit: 1
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { status: { eq: "published" } }
        fileAbsolutePath: { regex: "//posts//" }
      }
    ) {
      nodes {
        ...BlogPostNode
        frontmatter {
          banner {
            childImageSharp {
              ...ImageSharpFluidMin
              ...ImageSharpFixed200
            }
          }
        }
      }
    }
  }
`

export default NotFoundPage
