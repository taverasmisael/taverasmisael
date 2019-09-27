import React, { memo } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

import GeneralLayout from '../layouts/general'

const SeriesPage = memo(({ data }) => (
  <GeneralLayout
    headProps={{
      title: 'Series & Tutoriales',
      description:
        'Lista de series y tutoriales para todos lo niveles. Aprende JavaScript, React, Angular y más',
    }}
  >
    <Container maxWidth="md">
      <Typography variant="h1">Series</Typography>
      <List>
        {data.series.nodes.map(serie => (
          <ListItem
            button
            dense
            component={Link}
            to={`/series/${serie.slug}`}
            key={serie.id}
          >
            <ListItemAvatar>
              <Img
                fixed={serie.banner.childImageSharp.fixed}
                className="img--avatar"
              />
            </ListItemAvatar>
            <ListItemText primary={serie.title} secondary={serie.description} />
          </ListItem>
        ))}
      </List>
    </Container>
  </GeneralLayout>
))

SeriesPage.displayName = 'SeriesPage'
export default SeriesPage

export const pageQuery = graphql`
  query {
    series: allSeries(
      filter: { status: { eq: "published" } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        id
        slug
        description
        title
        banner {
          childImageSharp {
            fixed(
              width: 48
              height: 48
              traceSVG: { color: "#f04173", background: "#535c81" }
            ) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
