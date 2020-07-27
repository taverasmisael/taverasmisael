import React, { memo, useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import { ThemeProvider } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { AltTheme } from '../../shared/theme'

import { useStyles } from './styles'

const STATES = {
  IDLE: 'IDLE',
  PROGRESS: 'PROGRESS',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
}

const NewsletterForm = ({ path }) => {
  const classes = useStyles()
  const [formState, setFormState] = useState(STATES.IDLE)

  const handleSubmit = async e => {
    e.preventDefault()
    const { target } = e

    // A bot submition
    if (target.elements['got-the-honey'].value) return

    try {
      setFormState(STATES.PROGRESS)
      const { email, name } = target.elements
      const response = await addToMailchimp(email.value, {
        fname: name.value,
        path,
      })

      if (response.result === 'error') throw new Error('INVALID FORM')
      setFormState(STATES.SUCCESS)
      target.reset()
    } catch (e) {
      setFormState(STATES.ERROR)
      console.error(e)
    } finally {
      setTimeout(() => {
        setFormState(STATES.IDLE)
      }, 3500)
    }
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Typography variant="h6" component="h4">
              Únete a la newsletter
            </Typography>
            <Typography
              gutterBottom
              className={classes.span}
              variant="caption"
              component="span"
            >
              NO SPAM. SOLO BUEN CONTENIDO.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            {formState === STATES.ERROR && (
              <Typography
                className={classes.span}
                variant="caption"
                component="p"
              >
                ¡Ups! Parece que algo salió mal (o tu correo ya está suscrito).
                Vuelve a intentarlo.
              </Typography>
            )}
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit}>
          <p className="hidden">
            <label>
              Prefieres que hablemos por fax (ignorame si eres humano y me
              encontraste ;) ): <input name="got-the-honey" />
            </label>
          </p>
          <ThemeProvider theme={AltTheme}>
            <Grid container spacing={2} alignItems="center">
              {formState !== STATES.SUCCESS && (
                <FormContent inProgress={formState !== STATES.IDLE} />
              )}
              {formState === STATES.SUCCESS && (
                <Grid item xs={12}>
                  <Typography variant="h6" component="h5" align="center">
                    ¡Bienvenido al club! Gracias por suscribirte.
                  </Typography>
                  <Typography variant="overline" component="p" align="center">
                    Revisa tu correo
                  </Typography>
                </Grid>
              )}
            </Grid>
          </ThemeProvider>
        </form>
      </CardContent>
    </Card>
  )
}

const FormContent = ({ inProgress }) => (
  <>
    <Grid item xs={12} md={5}>
      <TextField
        required
        fullWidth
        disabled={inProgress}
        id="name"
        name="name"
        label="Nombre"
        margin="normal"
        variant="filled"
      />
    </Grid>
    <Grid item xs={12} md={5}>
      <TextField
        required
        fullWidth
        disabled={inProgress}
        name="email"
        type="email"
        id="email"
        label="E-mail"
        margin="normal"
        variant="filled"
      />
    </Grid>
    <Grid item xs={12} md={2}>
      <Button disabled={inProgress} variant="contained" type="submit">
        Únirse
      </Button>
    </Grid>
  </>
)
NewsletterForm.displayName = 'NewsletterForm'
export default memo(NewsletterForm)
