import React from 'react'

import { Link } from 'gatsby'
import MaterialLink from '@material-ui/core/Link'
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
    fontFamily: theme.typography.h1.fontFamily,
  },
}))

const TagsList = ({ tags = [] }) => {
  const classes = useStyles()
  return (
    <ul className={classes.root} aria-label="Etiquetas: ">
      {tags.map(tag => (
        <li key={tag} className={classes.item}>
          <MaterialLink
            className={classes.link}
            component={Link}
            variant="subtitle2"
            to={`/tags/${normalizeTag(tag)}`}
          >
            {tag}
          </MaterialLink>
        </li>
      ))}
    </ul>
  )
}

export default TagsList
