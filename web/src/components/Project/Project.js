import React, { memo, useState, useEffect } from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import OpenInNewRounded from '@material-ui/icons/OpenInNewRounded'

import BackgroundImage from 'gatsby-background-image'

import { truncateText } from '../../utils/normalizer'

import { useStyles } from './styles'

const truncate = truncateText(80)

const Project = ({
  description,
  banner,
  name,
  href,
  stack,
  isInternal,
  backgroundPosition,
}) => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState(description)
  console.warn(backgroundPosition)
  useEffect(() => {
    setText(isOpen ? description : truncate(description))
  }, [setText, isOpen, description])
  return (
    <Card
      component="article"
      className={classes.root}
      onClick={() => setIsOpen(state => !state)}
    >
      <ButtonBase component="div" className={classes.button}>
        <BackgroundImage
          fluid={banner}
          className={classes.image}
          style={{ backgroundPosition }}
        />
        <Paper
          className={classnames(classes.content, {
            [classes.contentOpen]: isOpen,
          })}
        >
          <div className={classes.text}>
            <Typography className={classes.name}>{name}</Typography>
            <Typography gutterBottom className={classes.description}>
              {text}
            </Typography>
            <Typography
              variant="caption"
              className={classnames(classes.stack, {
                [classes.dnone]: !isOpen,
              })}
            >
              <strong>Stack:</strong> {stack.join('-')}
            </Typography>
          </div>
          <div>
            <ProjectButton href={href} isInternal={isInternal}>
              Visitar
            </ProjectButton>
          </div>
        </Paper>
      </ButtonBase>
    </Card>
  )
}

const OpenProject = ({ href, isInternal }) =>
  isInternal ? (
    <Button
      to={href}
      component={Link}
      color="primary"
      endIcon={<OpenInNewRounded />}
    >
      Visitar
    </Button>
  ) : (
    <Button
      href={href}
      target="_blank"
      rel="noreferrer nofollow"
      color="primary"
      endIcon={<OpenInNewRounded />}
    >
      Visitar
    </Button>
  )

const ProjectButton = memo(OpenProject)

export default memo(Project)
