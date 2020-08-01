import React, { memo, useState } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'

import { SearchResults, SearchBox } from '../'

import { useStyles } from './styles'

const algoliaClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const searchClient = {
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          processingTimeMS: 0,
        })),
      })
    }

    return algoliaClient.search(requests)
  },
}

const SearchForm = memo(({ indices }) => {
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => {
          if (window.ga) {
            const page = `?query=${searchState.query}`
            window.ga('send', 'pageView', page)
          }
          setQuery(query)
        }}
      >
        <SearchBox setFocus={setFocus} hasFocus={hasFocus} />
        <SearchResults
          show={query && query.length > 0 && hasFocus}
          indices={indices}
        />
      </InstantSearch>
    </div>
  )
})

export default SearchForm
