import React, { memo } from 'react'

import { Link } from 'gatsby'
import Chip from '@material-ui/core/Chip'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { normalizeTag } from '../../utils/normalizer'

const useStyles = makeStyles(theme => ({
  root: {
    listStyle: 'none',
    margin: '0!important',

    [theme.breakpoints.down('xs')]: {
      display: 'grid',
      gridGap: theme.spacing(1),
    },
  },

  item: {
    display: 'inline-block',

    '&+&': {
      marginLeft: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        margin: 0,
      },
    },
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
    to={`/blog/tags/${normalizeTag(tag)}`}
    component={Link}
    label={tag}
    {...props}
  />
))

Tag.displayName = 'Tag'

export default TagsList
