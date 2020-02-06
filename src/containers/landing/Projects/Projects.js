import React, { memo } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Div100vh from 'react-div-100vh'

import Project from '../../../components/Project'
import { useStyles } from './styles'

const mapProjects = projects =>
  projects.map(({ node: project }) => ({
    id: project.id,
    name: project.frontmatter.title,
    banner: project.frontmatter.bannerImage.childImageSharp.fluid,
    stack: project.frontmatter.technologies,
    description: project.excerpt,
    url: project.frontmatter.url,
  }))

const Projects = ({ projects }) => {
  const classes = useStyles()
  return (
    <Div100vh className={classes.root} style={{ minHeight: '80rvh' }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.sectionTitle}>
            PROYECTOS
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
            />
          </Grid>
        ))}
      </Grid>
    </Div100vh>
  )
}

export default memo(Projects)
