import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

export default {
  a: ({ href, ...props }) =>
    href && href.startsWith('/') ? (
      <Link variant="body1" component={GatsbyLink} to={href} {...props} />
    ) : (
      <Link variant="body1" href={href} {...props} />
    ),
  Button: props => <Button {...props} />,
  em: props => <Typography variant="body2" component="em" {...props} />,
  h1: props => <Typography gutterBottom variant="h2" {...props} />,
  h2: props => <Typography gutterBottom variant="h3" {...props} />,
  h3: props => <Typography gutterBottom variant="h4" {...props} />,
  h4: props => <Typography variant="h5" {...props} />,
  h5: props => <Typography variant="h6" {...props} />,
  h6: props => <Typography variant="h6" component="p" {...props} />,
  li: props => (
    <ListItem>
      <ListItemText {...props} />
    </ListItem>
  ),
  ol: props => <List {...props} />,
  p: props => <Typography variant="body1" {...props} />,
  ul: props => <List {...props} />,
  hr: Divider,
  strong: props => (
    <Typography variant="subtitle2" component="strong" {...props} />
  ),
}
