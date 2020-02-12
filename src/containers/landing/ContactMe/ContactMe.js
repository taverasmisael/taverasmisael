import React, { memo } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import MaterialLink from '@material-ui/core/Link'
import { ThemeProvider } from '@material-ui/core/styles'
import { Link } from 'gatsby'

import { AltTheme } from '../../../shared/theme'
import ContactForm from '../../../components/ContactForm'
import Emoji from '../../../components/Emoji'

import { useStyles } from './styles'

const ContactMe = () => {
  const classes = useStyles()
  return (
    <Grid id="hablemos" container spacing={0} className={classes.root}>
      <Grid item xs={12} md={5} className={classes.leftBlock}>
        <div>
          <Typography
            variant="h4"
            component="h2"
            className={classes.sectionTitle}
          >
            Hablemos
          </Typography>
          <ContactCopy emoji="😌">
            Tienes una idea de quién soy y lo que hago, pero me gustaría
            conocerte a ti. Ponte en contacto conmigo usando el siguiente
            formulario y di Hola.
          </ContactCopy>
          <ContactCopy emoji="👨‍💻">
            Si tienes algún proyecto en el que creas que mis habilidades te
            podrían servir, puedes contactarme también y podemos agendar una
            reunión sin costo alguno.
          </ContactCopy>
          <ContactCopy emoji="🎤">
            Si tienes alguna idea para mi{' '}
            <MaterialLink
              target="_blank"
              href="/podcast"
              className={classes.link}
            >
              podcast
            </MaterialLink>
            , quieres ser invitado o quieres invitarme a tu programa o para una
            charla, escribeme también.
          </ContactCopy>
          <ContactCopy emoji="🤝">
            Si quieres contribuir, también escríbeme. Estoy trabajando en un
            Patreon para ayudar al podcast y otros proyectos de los que estaré
            comentando en el{' '}
            <MaterialLink component={Link} to="/blog" className={classes.link}>
              blog
            </MaterialLink>
            . Al igual que otros proyectos de código abierto en camino.
          </ContactCopy>
        </div>
      </Grid>
      <Grid item xs={12} md={7} className={classes.rightBlock}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          className={classes.sectionTitle}
        >
          Envía un mensaje
        </Typography>
        <ThemeProvider theme={AltTheme}>
          <ContactForm />
        </ThemeProvider>
      </Grid>
    </Grid>
  )
}

const Copy = ({ emoji, children }) => {
  const classes = useStyles()
  return (
    <Typography variant="body1" className={classes.copy}>
      <Emoji symbol={emoji} /> {children}
    </Typography>
  )
}
const ContactCopy = memo(Copy)

export default memo(ContactMe)
