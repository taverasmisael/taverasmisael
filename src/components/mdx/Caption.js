import React, { memo } from 'react'
import Typography from '@material-ui/core/Typography'
import GithubSlugger from 'github-slugger'
import debur from 'lodash.deburr'

const slugger = new GithubSlugger()
const makeSafeId = obj => {
  slugger.reset()
  return slugger.slug(debur(obj.toString()))
}

const Caption = memo(({ children, ...props }) => (
  <Typography
    id={`caption-${makeSafeId(children)}`}
    variant="caption"
    color="primary"
    component="h6"
    {...props}
  >
    {children}
  </Typography>
))

Caption.displayName = 'Caption'

export default Caption
