import React, { memo } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import GeneralLayout from '../layouts/general'
import NewsletterForm from '../components/NewsletterForm'

const ContactPage = memo(() => {
  return (
    <GeneralLayout noGutterBottom>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1">
          Newsletter
        </Typography>

        <Typography variant="subtitle2" component="p" gutterBottom>
          Recibe las últimas noticias sobre el blog, el podcast y todo en
          general. Solo contenido de calidad y relevante para ti.{' '}
          <strong>NUNCA SPAM</strong>
        </Typography>
        <Typography variant="subtitle1" component="p" gutterBottom>
          En esta newsletter podrás enterarte de noticias, cuando suba nuevo
          contenido al blog o{' '}
          <a href="https://www.instagram.com/releaseonfridays/">al podcast</a>.
          <br />
          <strong>
            Solo cosas buenas, no SPAM, no vender tu información
          </strong>{' '}
          <del>
            (a menos que sea por una cantidad tan considerable de dinero que
            literalmente pueda enviarle un porcentaje a cada uno de ustedes y
            quedarme con una parte tan grande que me desaparezca por completo
            del mapa)
          </del>
          .
        </Typography>

        <NewsletterForm />
      </Container>
    </GeneralLayout>
  )
})

ContactPage.displayName = 'ContactPage'

export default ContactPage
