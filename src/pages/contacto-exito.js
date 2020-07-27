import React, { memo } from 'react'
import { Link } from 'gatsby'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import GeneralLayout from '../layouts/general'

const HEAD_PROPS = {
  title: 'Gracias por Contactarme',
  description:
    'Estaré respondiéndote en la mayor brevedad posible. Muchas gracias por escribírme. Lo aprecio mucho.',
}

const SuccessContact = memo(() => {
  return (
    <GeneralLayout noGutterBottom headProps={HEAD_PROPS}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Gracias por contactar conmigo
        </Typography>

        <Typography variant="subtitle1" component="p" gutterBottom>
          Estaré revisando tu mensaje tan pronto como pueda, y te contestaré.
          Mientras tanto puedes leer{' '}
          <Link to="/blog">alguno de mis artículos recientes</Link>.
        </Typography>

        <Typography variant="subtitle2" component="p" gutterBottom>
          Puedes encontrarme en todas mis redes sociales como{' '}
          <code>taverasmisael</code>.
        </Typography>
      </Container>
    </GeneralLayout>
  )
})

SuccessContact.displayName = 'SuccessContact'

export default SuccessContact
