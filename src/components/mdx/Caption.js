import classnames from 'classnames'
import React, { memo } from 'react'
import Typography from '@material-ui/core/Typography'
import GithubSlugger from 'github-slugger'
import debur from 'lodash.deburr'

const slugger = new GithubSlugger()
const makeSafeId = obj => {
  slugger.reset()
  return slugger.slug(debur(obj.toString()))
}

const Caption = memo(({ children, footNote, className, ...props }) => (
  <Typography
    id={`caption-${footNote || makeSafeId(children)}`}
    variant="caption"
    component="div"
    className={classnames({ 'close-caption': footNote }, className)}
    {...props}
  >
    {children}
  </Typography>
))

Caption.displayName = 'Caption'

export default Caption
