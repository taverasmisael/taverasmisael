import React, { memo } from 'react'
import { Link as InternalLink } from 'gatsby'
import BaseLink from '@material-ui/core/Link'

const isExternalUrl = url => url && url.startsWith('/')
const Link = memo(({ href, ...props }) =>
  isExternalUrl(href) ? (
    <BaseLink color="secondary" component={InternalLink} to={href} {...props} />
  ) : (
    <BaseLink color="secondary" href={href} {...props} />
  )
)

Link.displayName = 'Link'

export default Link
