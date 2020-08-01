import React, { memo, useCallback, useState, useRef } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

import { useStyles } from './styles'

const INPUT_PROPS = { 'aria-label': 'Buscar' }
const SearchBox = memo(({ refine, setFocus }) => {
  const classes = useStyles()

  const toggleFocus = useCallback(() => setFocus(focus => !focus), [setFocus])

  const delayRef = useRef(null)
  const [value, setValue] = useState('')
  const onChangeDebounced = useCallback(
    event => {
      const value = event.target.value
      if (delayRef) {
        clearTimeout(delayRef.current)
      }
      delayRef.current = setTimeout(() => refine(value), 350)

      setValue(value)
    },
    [refine]
  )
  return (
    <form autoComplete="false" className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        fullWidth
        variant="filled"
        autoComplete="false"
        placeholder="Buscar…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={INPUT_PROPS}
        onChange={onChangeDebounced}
        value={value}
        onBlur={toggleFocus}
        onFocus={toggleFocus}
      />
    </form>
  )
})

export default connectSearchBox(SearchBox)
