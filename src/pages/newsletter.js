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
          Si te gusta el contenido del blog vas a amar la newsletter
        </Typography>

        <NewsletterForm />
      </Container>
    </GeneralLayout>
  )
})

ContactPage.displayName = 'ContactPage'

export default ContactPage
