import React, { memo } from 'react'

import { Link } from 'gatsby'
import Chip from '@material-ui/core/Chip'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { normalizeTag } from '../../utils/normalizer'

const useStyles = makeStyles(theme => ({
  root: {
    listStyle: 'none',
    margin: '0!important',
  },

  item: {
    display: 'inline-block',
    margin: theme.spacing(0, 1),
  },

  link: {
    cursor: 'pointer',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.h1.fontFamily,
  },
}))

const TagsList = memo(({ tags = [] }) => {
  const classes = useStyles()
  return (
    <ul className={classes.root} aria-label="Etiquetas: ">
      {tags.map(tag => (
        <li key={tag} className={classes.item}>
          <Tag className={classes.link} tag={tag} />
        </li>
      ))}
    </ul>
  )
})

TagsList.displayName = 'TagsList'

const Tag = memo(({ tag, ...props }) => (
  <Chip
    variant="outlined"
    to={`/tags/${normalizeTag(tag)}`}
    component={Link}
    label={tag}
    {...props}
  />
))

Tag.displayName = 'Tag'

export default TagsList
