import React, { memo, useState, useEffect } from 'react'
import classnames from 'classnames'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import OpenInNewRounded from '@material-ui/icons/OpenInNewRounded'

import Image from 'gatsby-image'

import { truncateText } from '../../utils/normalizer'

import { useStyles } from './styles'

const truncate = truncateText(80)

const Project = ({ description, banner, name, href, stack }) => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState(description)

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
        <Image fluid={banner} alt={name} className={classes.image} />
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
            <Typography variant="caption" className={classes.stack}>
              <strong>Stack:</strong> {stack.join('-')}
            </Typography>
          </div>
          <div>
            <Button
              href={href}
              target="_blank"
              rel="noreferrer nofollow"
              color="primary"
              endIcon={<OpenInNewRounded />}
            >
              Visitar
            </Button>
          </div>
        </Paper>
      </ButtonBase>
    </Card>
  )
}
export default memo(Project)
