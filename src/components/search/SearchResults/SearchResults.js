import React from 'react'
import classnames from 'classnames'
import { Index } from 'react-instantsearch-dom'

import Paper from '@material-ui/core/Paper'

import { PoweredBy, Hits, HitCount, PageHit } from './components'
import { useStyles } from './styles'

const SearchResult = ({ indices, show }) => {
  const classes = useStyles()
  return (
    <Paper
      className={classnames(classes.root, { [classes.show]: show })}
      elevation={4}
    >
      <div className={classes.content}>
        {indices.map(index => (
          <Index key={index.name} indexName={index.name}>
            <HitCount />
            <Hits hitComponent={PageHit} />
          </Index>
        ))}
        <div className={classes.footer}>
          <PoweredBy />
        </div>
      </div>
    </Paper>
  )
}
export default SearchResult
