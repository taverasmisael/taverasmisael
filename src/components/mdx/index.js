import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

import Img from './img'
import Blockquote from './blockquote'
import SourceButtons from './SourceButtons'

export default {
  a: ({ href, ...props }) =>
    href && href.startsWith('/') ? (
      <Link variant="body1" component={GatsbyLink} to={href} {...props} />
    ) : (
      <Link variant="body1" href={href} {...props} />
    ),
  blockquote: props => <Blockquote {...props} />,
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
  table: Table,
  tbody: TableBody,
  thead: TableHead,
  tr: TableRow,
  td: ({ align, ...props }) => <TableCell align={align || 'left'} {...props} />,
  th: ({ align, ...props }) => (
    <TableCell align={align || 'left'} component="th" {...props} />
  ),

  // Custom Elements
  SourceButtons,
}
