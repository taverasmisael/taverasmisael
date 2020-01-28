import React, { memo } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Div100vh from 'react-div-100vh'

import ProjectsCarousel from '../../../components/ProjectsCarousel'
import { useStyles } from './styles'

import ProjectsData from './projects.json'

const AboutMe = () => {
  const classes = useStyles()
  return (
    <Div100vh className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.sectionTitle}>
            PROYECTOS
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.projectsContainer}>
        <ProjectsCarousel projects={ProjectsData} />
      </div>
    </Div100vh>
  )
}

export default memo(AboutMe)
