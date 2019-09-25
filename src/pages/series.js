import React, { memo } from 'react'
import { Link, graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { sentenceCase } from 'change-case'

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
        {data.series.group.map(serie => (
          <ListItem
            button
            dense
            component={Link}
            to={`/series/${serie.fieldValue}`}
            key={serie.fieldValue}
          >
            <ListItemText
              primary={sentenceCase(serie.fieldValue)}
              secondary={`${serie.totalCount} post${
                serie.totalCount === 1 ? '' : 's'
              } en esta serie`}
            />
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
    series: allMdx(
      filter: {
        fileAbsolutePath: { regex: "//series//" }
        frontmatter: { status: { eq: "published" } }
      }
    ) {
      group(field: frontmatter___serie) {
        fieldValue
        totalCount
      }
    }
  }
`
