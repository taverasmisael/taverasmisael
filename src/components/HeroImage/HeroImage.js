import classnames from 'classnames'
import Img from 'gatsby-image'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const useStyles = makeStyles({
  fullWidth: {
    left: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    right: '50%',
    width: '100vw',
  },
})

const HeroImage = ({ fluid, fixed, className, credit, fullWidth }) => {
  const classes = useStyles()
  return (
    <>
      <Img
        fluid={fluid}
        fixed={fixed}
        className={classnames({ [classes.fullWidth]: fullWidth }, className)}
      />
      {credit && (
        <Typography component="div" variant="caption">
          <ReactMarkdown source={credit} />
        </Typography>
      )}
    </>
  )
}

export default HeroImage
