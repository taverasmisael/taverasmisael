import React, { memo } from 'react'
import Carousel from '../Carousel'
import Project from '../Project'

import '@glidejs/glide/dist/css/glide.core.min.css'

const CAROUSEL_OPTIONS = {
  perView: 1,
  type: 'carousel',
  swipeThreshold: 60,
  breakpoints: {
    767: {
      perView: 1,
    },
    1023: {
      perView: 2,
    },

    1365: {
      perView: 3,
      gap: 16,
      peek: { before: 50, after: 100 },
    },

    19190: {
      perView: 4,
      perTouch: 3,
      gap: 16,
      peek: { before: 50, after: 150 },
    },
  },
}

const ProjectsCarousel = ({ projects }) => (
  <Carousel options={CAROUSEL_OPTIONS}>
    {projects.map(project => (
      <div key={project.id}>
        <Project
          imageFluid={project.imageFluid}
          description={project.description}
          name={project.name}
          href={project.url}
        />
      </div>
    ))}
  </Carousel>
)

export default memo(ProjectsCarousel)
