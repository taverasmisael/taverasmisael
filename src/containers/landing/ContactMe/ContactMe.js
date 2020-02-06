import React, { memo } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from '@material-ui/core/styles'

import { AltTheme } from '../../../shared/theme'
import ContactForm from '../../../components/ContactForm'

import { useStyles } from './styles'

const ContactMe = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12} md={5} className={classes.leftBlock}>
        <div>
          <Typography
            variant="h4"
            component="h2"
            className={classes.sectionTitle}
          >
            Hablemos
          </Typography>
          <Typography variant="body1" className={classes.copy}>
            Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me
            exige, sin tapujos, que añada cerveza al whisky. Jovencillo
            emponzoñado de whisky, ¡qué figurota exhibes! La cigüeña tocaba cada
            vez mejor el saxofón y el búho pedía kiwi y queso. El jefe buscó el
            éxtasis en un imprevisto baño de whisky y gozó como un duque.
            Exhíbanse politiquillos zafios, con orejas kilométricas y uñas de
            gavilán. El cadáver de Wamba, rey godo de España, fue exhumado y
            trasladado en una caja de zinc.
          </Typography>
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

export default memo(ContactMe)
