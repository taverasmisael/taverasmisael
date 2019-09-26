import React, { memo } from 'react'
import { Link, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import MaterialLink from '@material-ui/core/Link'
import senteceCase from 'sentence-case'

import GeneralLayout from '../layouts/general'
import BlogItemMini from '../components/BlogItemMini'

const SeriesList = memo(({ pageContext, data, path }) => {
  const { serieSlug } = pageContext
  const { chapters, sectionImage } = data
  const serieName = senteceCase(serieSlug)
  return (
    <GeneralLayout
      noGutterBottom
      headProps={{
        path,
        isPost: false,
        title: `Serie: ${serieName} `,
        description:
          'Bienvenidos a esta guía para aprender Javascript. Durante los próximos capítulos, vamos a estar viendo Javascript como lenguaje, todo lo que podemos hacer con el sin usar librerías, ni frameworks, solo los fundamentos. ¿Por qué JavaScript? Desde su invención en 1995, JavaScript fue ganando popularidad, venciendo a los otros lenguajes que en su época eran utilizados en el navegador (Netscape para la fecha).',
        metaImage: sectionImage.childImageSharp.fluid.src,
      }}
    >
      <BackgroundImage
        fluid={sectionImage.childImageSharp.fluid}
        style={{ height: '45vh', marginBottom: '32px' }}
      />
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h1">
              {serieName}
            </Typography>
            <Typography>
              Bienvenidos a esta guía para aprender Javascript. Durante los
              próximos capítulos, vamos a estar viendo Javascript como lenguaje,
              todo lo que podemos hacer con el sin usar librerías, ni
              frameworks, solo los fundamentos. ¿Por qué JavaScript? Desde su
              invención en 1995, JavaScript fue ganando popularidad, venciendo a
              los otros lenguajes que en su época eran utilizados en el
              navegador (Netscape para la fecha).
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h2">
                  Índice
                </Typography>
              </Grid>
              {chapters.nodes.map(entry => (
                <Grid key={entry.id} item xs={12}>
                  <BlogItemMini item={entry} />
                </Grid>
              ))}
            </Grid>
            <div className="MuiTypography-alignRight">
              <MaterialLink align="right" component={Link} to="/series">
                Ver todas las series
              </MaterialLink>
            </div>
          </Grid>
        </Grid>
      </Container>
    </GeneralLayout>
  )
})

SeriesList.displayName = 'SeriesList'
export default SeriesList

export const pageQuery = graphql`
  query($serieSlug: String) {
    chapters: allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "//series//" }
        frontmatter: {
          serie: { in: [$serieSlug] }
          status: { eq: "published" }
        }
      }
    ) {
      nodes {
        ...BlogPostNode
      }
    }

    sectionImage: file(relativePath: { eq: "sample-section.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
