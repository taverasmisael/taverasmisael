import React, { memo, useState, useCallback } from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { AltTheme } from '../../shared/theme'

import { useStyles } from './styles'

const NewsletterForm = memo(() => {
  const [state, setState] = useState({ name: '', email: '' })

  const handleChange = useCallback(
    ({ target = {} }) => {
      setState(state => ({ ...state, [target.name]: target.value }))
    },
    [setState]
  )

  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
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
        </Grid>
        <form>
          <p className="hidden">
            <label>
              Prefieres que hablemos por fax (ignorame si eres humano y me
              encontraste ;) ): <input name="got-the-honey" />
            </label>
          </p>
          <ThemeProvider theme={AltTheme}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={5}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  value={state.name}
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
                  onChange={handleChange}
                  value={state.email}
                  name="email"
                  type="email"
                  id="email"
                  label="E-mail"
                  margin="normal"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Button variant="contained" type="submit">
                  Únirse
                </Button>
              </Grid>
            </Grid>
          </ThemeProvider>
        </form>
      </CardContent>
    </Card>
  )
})

NewsletterForm.displayName = 'NewsletterForm'
export default NewsletterForm
