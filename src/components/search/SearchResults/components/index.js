import React from 'react'
import { Link as InternalLink } from 'gatsby'
import classnames from 'classnames'

import {
  connectStateResults,
  Highlight,
  connectHits,
  Snippet,
  connectPoweredBy,
} from 'react-instantsearch-dom'

import Typography from '@material-ui/core/Typography'
import BaseLink from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import Emoji from '../../../Emoji'

import { useStyles } from '../styles'

export const PoweredBy = connectPoweredBy(({ url }) => (
  <Typography variant="caption" component="span">
    Busqueda por{' '}
    <BaseLink href={url} rel="noopener" target="_blank">
      Algolia
    </BaseLink>
  </Typography>
))

export const Hits = connectHits(({ hits }) => (
  <List>
    {hits.map(hit => (
      <ListItem key={hit.slug} button component={InternalLink} to={hit.slug}>
        <PageHit hit={hit} />
      </ListItem>
    ))}
  </List>
))

export const HitCount = connectStateResults(({ searchResults, error }) => {
  const hitCount = searchResults && searchResults.nbHits
  const classes = useStyles()
  return (
    <div className={classes.header}>
      {error ? (
        <Typography variant="caption" component="span" color="error">
          Ocurrió un error
        </Typography>
      ) : (
        <Typography variant="caption" component="span">
          {hitCount > 0
            ? `${hitCount} resultado${hitCount !== 1 ? 's' : ''}`
            : 'No hay resultados para tu busqueda'}
        </Typography>
      )}
    </div>
  )
})
export const PageHit = ({ hit }) => (
  <ListItemText
    primary={
      <>
        <Typography color="secondary" variant="subtitle1" component="h4">
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </Typography>
      </>
    }
    secondary={<Snippet attribute="excerpt" hit={hit} tagName="mark" />}
  />
)
