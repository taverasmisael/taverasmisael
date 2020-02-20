import React, { memo } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Div100vh from 'react-div-100vh'

import Project from '../../../components/Project'
import { calculateBackgroundPosition } from '../../../utils/normalizer'
import { useStyles } from './styles'

const mapProjects = projects =>
  projects.map(project => ({
    id: project._id,
    name: project.name,
    banner: project.banner.asset.fluid,
    backgroundPosition: calculateBackgroundPosition(
      project.banner.hotspot.x,
      project.banner.hotspot.y
    ),
    stack: project.techStack,
    isInternal: project.isInternal,
    description: project.body,
    url: project.url.current,
  }))

const Projects = ({ projects }) => {
  const classes = useStyles()
  return (
    <Div100vh
      className={classes.root}
      style={{ minHeight: '80rvh' }}
      as="section"
    >
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.sectionTitle}>
            Proyectos
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {mapProjects(projects).map(project => (
          <Grid
            key={project.id}
            item
            xs={12}
            sm={4}
            lg={3}
            className={classes.column}
          >
            <Project
              banner={project.banner}
              description={project.description}
              name={project.name}
              href={project.url}
              stack={project.stack}
              backgroundPosition={project.backgroundPosition}
              isInternal={project.isInternal}
            />
          </Grid>
        ))}
      </Grid>
    </Div100vh>
  )
}

export default memo(Projects)
