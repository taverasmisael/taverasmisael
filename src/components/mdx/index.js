import React from 'react'
import Divider from '@material-ui/core/Divider'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Img from './Img'
import Blockquote from './Blockquote'
import SourceButtons from './SourceButtons'
import Caption from './Caption'
import Link from './Link'

export default {
  a: Link,
  blockquote: Blockquote,
  h1: props => <Container maxWidth="md" component={h1} {...props} />,
  h2: props => <Container maxWidth="md" component={h2} {...props} />,
  h3: props => <Container maxWidth="md" component={h3} {...props} />,
  h4: props => <Container maxWidth="md" component={h4} {...props} />,
  h5: props => <Container maxWidth="md" component={h5} {...props} />,
  h6: props => <Container maxWidth="md" component={h6} {...props} />,
  li: props => <Container maxWidth="md" component={li} {...props} />,
  ol: props => <Container maxWidth="md" component={ol} {...props} />,
  p: props => <Container maxWidth="md" component={p} {...props} />,
  ul: props => <Container maxWidth="md" component={ul} {...props} />,
  hr: Divider,
  img: Img,
  table: props => <Container maxWidth="md" component={Table} {...props} />,
  tbody: TableBody,
  thead: TableHead,
  tr: TableRow,
  td: ({ align, ...props }) => <TableCell align={align || 'left'} {...props} />,
  th: ({ align, ...props }) => (
    <TableCell align={align || 'left'} component="th" {...props} />
  ),

  // Custom Elements
  SourceButtons,
  Caption,

  // React renderer components
  link: Link,
  linkReference: Link,
  listItem: props => <Container maxWidth="md" component={li} {...props} />,
  list: props => <Container maxWidth="md" component={ol} {...props} />,
  paragraph: props => <Container maxWidth="md" component={p} {...props} />,
}

const h1 = props => <Typography variant="h2" component="h2" {...props} />
const h2 = props => <Typography variant="h3" component="h2" {...props} />
const h3 = props => <Typography variant="h4" component="h3" {...props} />
const h4 = props => <Typography variant="h5" component="h4" {...props} />
const h5 = props => <Typography variant="h6" component="h5" {...props} />
const h6 = props => <Typography variant="subtitle2" component="h6" {...props} />
const li = props => <Typography gutterBottom component="li" {...props} />
const ol = props => <Typography gutterBottom component="ol" {...props} />
const p = props => <Typography gutterBottom {...props} />
const ul = props => <Typography gutterBottom component="ul" {...props} />
