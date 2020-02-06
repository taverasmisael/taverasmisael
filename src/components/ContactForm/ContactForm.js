import React, { memo, useState } from 'react'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FilledInput from '@material-ui/core/FilledInput'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const INPUT_PROPS = { disableUnderline: true }

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    reason: 'Consult',
    message: '',
  })

  const handleChange = ({ target = {} }) => {
    setState(state => ({ ...state, [target.name]: target.value }))
  }

  return (
    <form
      action="/contacto-exito/"
      name="contact"
      netlify-honeypot="got-the-honey"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Prefieres que hablemos por fax (ignorame si eres humano y me
          encontraste ;) ): <input name="got-the-honey" />
        </label>
      </p>
      <TextField
        fullWidth
        required
        InputProps={INPUT_PROPS}
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
        InputProps={INPUT_PROPS}
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
          disableUnderline
          onChange={handleChange}
          value={state.reason}
          name="reason"
          input={<FilledInput required name="reason" id="reason" />}
        >
          <MenuItem value="Inquire">Negocios</MenuItem>
          <MenuItem value="Help">Ayuda / Pregunta</MenuItem>
          <MenuItem value="Consult">Consulta</MenuItem>
          <MenuItem value="Other">Otra</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        required
        InputProps={INPUT_PROPS}
        multiline
        onChange={handleChange}
        value={state.message}
        rows={15}
        name="message"
        id="message"
        label="Mensaje"
        margin="normal"
        variant="filled"
      />
      <Button variant="contained" type="submit">
        Enviar
      </Button>
    </form>
  )
}

export default memo(ContactForm)
