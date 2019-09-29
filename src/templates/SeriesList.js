import React, { memo } from 'react'
import { Link, graphql } from 'gatsby'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import MaterialLink from '@material-ui/core/Link'
import ReactMarkdown from 'react-markdown'

import MDXComponentsMap from '../components/mdx'
import ShareButtons from '../components/ShareButtons'
import GeneralLayout from '../layouts/general'
import SeriesListItem from '../components/SeriesListItem'
import HeroImage from '../components/HeroImage'

const SeriesList = memo(({ pageContext, data, path }) => {
  const { chapters, serieInfo } = data
  const { title, banner, intro } = serieInfo

  return (
    <GeneralLayout
      noGutterBottom
      headProps={{
        path,
        isPost: false,
        title: `Serie: ${title} `,
        description: serieInfo.description,
        metaImage: banner.childImageSharp.fluid.src,
      }}
    >
      <HeroImage gutterBottom fullWidth fluid={banner.childImageSharp.fluid} />
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h1">
              {title}
            </Typography>
            <ReactMarkdown source={intro} renderers={MDXComponentsMap} />
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
                  <SeriesListItem
                    item={entry}
                    number={entry.frontmatter.chapter}
                  />
                </Grid>
              ))}
            </Grid>
            <div className="MuiTypography-alignRight">
              <MaterialLink align="right" component={Link} to="/series">
                Volver a la lista de series
              </MaterialLink>
            </div>
            <Grid item xs={12} md={7}>
              <ShareButtons
                url={path}
                title={title}
                text={serieInfo.description}
              />
            </Grid>
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
      sort: { fields: [frontmatter___chapter] }
      filter: {
        fileAbsolutePath: { regex: "//series//" }
        frontmatter: {
          serie: { in: [$serieSlug] }
          status: { eq: "published" }
        }
      }
    ) {
      nodes {
        id
        fields {
          slug
        }
        shortExcerpt: excerpt(pruneLength: 150)
        frontmatter {
          title
          chapter
          banner {
            childImageSharp {
              ...ImageSharpFixed100
              ...ImageSharpFluidMin
            }
          }
        }
      }
    }

    serieInfo: series(slug: { eq: $serieSlug }) {
      id
      description
      intro
      title
      banner {
        childImageSharp {
          fluid(traceSVG: { color: "#f04173", background: "#535c81" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }

    sectionImage: file(relativePath: { eq: "sample-section.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
