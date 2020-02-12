import React, { memo, useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FilledInput from '@material-ui/core/FilledInput'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import { useStyles } from './styles'

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    reason: 'Consult',
    message: '',
  })
  const classes = useStyles()

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
      className={classes.root}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Prefieres que hablemos por fax (ignorame si eres humano y me
          encontraste ;) ): <input name="got-the-honey" />
        </label>
      </p>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
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
              <MenuItem value="Hello">Hola</MenuItem>
              <MenuItem value="Inquire">Negocios</MenuItem>
              <MenuItem value="Participate">Podcast / Charla</MenuItem>
              <MenuItem value="Contribuite">Contribuir</MenuItem>
              <MenuItem value="Consult">Consultar</MenuItem>
              <MenuItem value="Other">Otra</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" type="submit" className={classes.submit}>
            Enviar
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            required
            multiline
            onChange={handleChange}
            value={state.message}
            rows={9}
            name="message"
            id="message"
            label="Mensaje"
            margin="normal"
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="overline">
            <sup>*</sup> Todos los campos son requeridos
          </Typography>
        </Grid>
      </Grid>
    </form>
  )
}

export default memo(ContactForm)
