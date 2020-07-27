import React, { memo } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import GeneralLayout from '../layouts/general'
import ContactForm from '../components/ContactForm'

const HEAD_PROPS = {
  title: 'Contacto',
  description:
    'Pónte en contacto conmigo con este sencillo formulario o a traves de mis redes sociales y hablemos',
}

const ContactPage = memo(() => {
  return (
    <GeneralLayout noGutterBottom headProps={HEAD_PROPS}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Contacto
        </Typography>

        <Typography variant="subtitle2" component="p" gutterBottom>
          Puedes encontrarme en todas mis redes sociales como{' '}
          <code>taverasmisael</code>.
        </Typography>
        <Typography variant="subtitle1" component="p" gutterBottom>
          Si deseas hablar de forma más personal, tienes algún proyecto en el
          que desees incluirme o solo quieres decir hola, completa el siguiente
          formulario y me estaré contactando contigo tan pronto como me sea
          posible.
        </Typography>

        <ContactForm />
      </Container>
    </GeneralLayout>
  )
})

ContactPage.displayName = 'ContactPage'

export default ContactPage
