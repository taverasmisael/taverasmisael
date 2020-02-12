import React, { memo, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

import { useStyles } from './styles'
import Testimonial from '../../../components/Testimonial'

const AboutMe = ({ testimonials = [] }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12} md={5} className={classes.aboutBlock}>
        <div>
          <Typography
            variant="h4"
            component="h2"
            className={classes.sectionTitle}
          >
            Sobre Mí
          </Typography>
          <Typography variant="body1" className={classes.aboutCopy}>
            Mi nombre es <strong>Misael Taveras</strong> y soy malo
            describiéndome a mi mismo. Desde muy joven me ha atraído la
            tecnología, y en el momento en el que cree mi primera calculadora
            supe que esto era lo que quería hacer de por vida.
          </Typography>
          <Typography variant="body1" className={classes.aboutCopy}>
            Varios años luego y un par de cursos online y ya me sentía en la
            cima del mundo; no obstante pasaría mucho tiempo antes de encontrar
            mi primer trabajo <strong>haciendo lo que me gusta.</strong>
          </Typography>
          <Typography variant="body1" className={classes.aboutCopy}>
            He trabajado para varias compañías y clientes adaptándome siempre a
            las tecnologías que usan llegando a conocer proyectos interesantes y
            personas <strong>maravillosas</strong>, de los cuales he aprendido
            más de lo que merezco.
          </Typography>
          <Typography variant="body1" className={classes.aboutCopy}>
            Ahora quiero trabajar en mi visión, y estar más activo de forma
            independiente. He decidido que este año (2020) es para mis proyectos
            personales, empezando con el <strong>Podcast</strong>, donde hablo
            de experiencias y comparto lo que he aprendido. Mi intensión es
            poder dar de lo que he recibido y ayudar a otros a través de los
            medios que tengo a mi disposición. Siento que este es el siguiente
            paso para mi carrera y el correcto para mí como persona.
          </Typography>

          <Button
            download
            onClick={event => setAnchorEl(event.currentTarget)}
            variant="outlined"
            className={classes.cta}
            aria-controls="resume-menu"
            aria-haspopup="true"
            endIcon={<ArrowDropDownIcon />}
          >
            Descargar CV
          </Button>

          <Menu
            id="resume-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem download component="a" href="/taveras-misael-cv.pdf">
              Español
            </MenuItem>
            <MenuItem
              download
              component="a"
              href="/taveras-misael-resume.pdf"
              lang="en"
            >
              English
            </MenuItem>
          </Menu>
        </div>
      </Grid>
      <Grid item xs={12} md={7} className={classes.testimonialsBlock}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          className={classes.sectionTitle}
        >
          Lo que otros dicen
        </Typography>
        <Grid container spacing={4} className={classes.testimonialsContainer}>
          {testimonials.map(({ node: testimony }, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              key={testimony.id}
              className={classes.cell}
            >
              <Testimonial
                name={testimony.frontmatter.title}
                position={testimony.frontmatter.position}
                profilePicture={
                  testimony.frontmatter.profilePicture.childImageSharp.fluid
                }
                testimony={testimony.body}
                highlight={(idx + 1) % 2 === 0}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default memo(AboutMe)
