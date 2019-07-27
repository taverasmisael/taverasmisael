import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import Img from './img'

export default {
  a: ({ href, ...props }) =>
    href && href.startsWith('/') ? (
      <Link variant="body1" component={GatsbyLink} to={href} {...props} />
    ) : (
      <Link variant="body1" href={href} {...props} />
    ),
  undefined: props => console.warn(props) || <Button {...props} />,
  em: props => <Typography variant="body2" component="em" {...props} />,
  h1: props => (
    <Typography gutterBottom component="h2" variant="h3" {...props} />
  ),
  h2: props => (
    <Typography gutterBottom component="h3" variant="h4" {...props} />
  ),
  h3: props => (
    <Typography gutterBottom component="h4" variant="h5" {...props} />
  ),
  h4: props => <Typography component="h5" variant="h6" {...props} />,
  h5: props => <Typography component="h6" variant="h6" {...props} />,
  h6: props => <Typography variant="h6" component="p" {...props} />,
  li: props => <Typography gutterBottom component="li" {...props} />,
  ol: props => <Typography gutterBottom component="ol" {...props} />,
  p: props => <Typography gutterBottom variant="body1" {...props} />,
  ul: props => <Typography gutterBottom component="ul" {...props} />,
  hr: Divider,
  strong: props => (
    <Typography variant="subtitle2" component="strong" {...props} />
  ),
  img: Img,
}
