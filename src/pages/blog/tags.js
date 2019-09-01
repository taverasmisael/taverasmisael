import React, { memo } from 'react'
import { Link, graphql } from 'gatsby'
import { normalizeTag } from '../../utils/normalizer'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import GeneralLayout from '../../layouts/general'

const TagsPage = memo(({ data }) => (
  <GeneralLayout
    headProps={{
      title: 'Tags del Blog',
      description:
        'Etiquetas del blog y listado de temas hablados en los articulos del blog',
    }}
  >
    <Container maxWidth="md">
      <Typography variant="h1">Tags</Typography>
      <List>
        {data.allMdx.group.map(tag => (
          <ListItem
            button
            dense
            component={Link}
            to={`/blog/tags/${normalizeTag(tag.fieldValue)}`}
            key={tag.fieldValue}
          >
            <ListItemText
              primary={tag.fieldValue}
              secondary={`${tag.totalCount} post${
                tag.totalCount === 1 ? '' : 's'
              } con este tag`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  </GeneralLayout>
))

TagsPage.displayName = 'TagsPage'
export default TagsPage

export const pageQuery = graphql`
  query {
    allMdx(
      limit: 2000
      filter: { frontmatter: { status: { eq: "published" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
