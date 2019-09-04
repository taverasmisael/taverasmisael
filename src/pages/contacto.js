import React, { memo, useState, useCallback } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FilledInput from '@material-ui/core/FilledInput'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

import GeneralLayout from '../layouts/general'

const ContactPage = memo(() => {
  const [state, setState] = useState({
    name: '',
    email: '',
    reason: 'Consult',
    message: '',
  })

  const handleChange = useCallback(({ target = {} }) => {
    setState(state => ({ ...state, [target.name]: target.value }))
  }, [])

  return (
    <GeneralLayout noGutterBottom>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Contacto
        </Typography>

        <Typography variant="subtitle2" component="p" gutterBottom>
          Puedes encontrarme en todas mis redes sociales como{' '}
          <code>taverasmisael</code>.
        </Typography>
        <Typography variant="subtitle1" component="p" gutterBottom>
          Si deseas hablar de forma más personal, tienes algun proyecto en el
          que desees incluirme o solo quieres decir hola, completa el siguiente
          formulario y me estareé contactando contigo tan pronto como me sea
          posible.
        </Typography>

        <form
          action="/contacto-exito/"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <TextField
            fullWidth
            required
            onChange={handleChange}
            value={state.name}
            id="name"
            name="name"
            label="Nombre"
            margin="normal"
            variant="filled"
          />
          <TextField
            fullWidth
            required
            onChange={handleChange}
            value={state.email}
            name="email"
            type="email"
            id="email"
            label="E-mail"
            margin="normal"
            variant="filled"
          />
          <FormControl margin="normal" fullWidth variant="filled">
            <InputLabel htmlFor="reason">Razón del mensaje</InputLabel>
            <Select
              required
              onChange={handleChange}
              value={state.reason}
              name="reason"
              input={<FilledInput required name="reason" id="reason" />}
            >
              <MenuItem value="Inquire">Negocios</MenuItem>
              <MenuItem value="Help">Ayuda / Pregunta</MenuItem>
              <MenuItem value="Consult">Consulta</MenuItem>
              <MenuItem value="Other">
                <em>Otra</em>
              </MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            required
            multiline
            onChange={handleChange}
            value={state.message}
            rows={6}
            name="message"
            id="message"
            label="Mensaje"
            margin="normal"
            variant="filled"
          />
          <Button color="secondary" variant="contained" type="submit">
            Enviar
          </Button>
        </form>
      </Container>
    </GeneralLayout>
  )
})

ContactPage.displayName = 'ContactPage'

export default ContactPage
