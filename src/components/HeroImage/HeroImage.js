import classnames from 'classnames'
import Img from 'gatsby-image'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import React, { memo } from 'react'
import ReactMarkdown from 'react-markdown'

const useStyles = makeStyles(theme => ({
  gutterBottom: {
    marginBottom: theme.spacing(2),
  },
  base: {
    boxShadow: theme.shadows[1],
    borderRadius: theme.shape.borderRadius,
    userSelect: 'none',
  },
  fullWidth: {
    left: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    right: '50%',
    width: '100vw',
    maxHeight: 'calc(35vmax - 10vh)',
  },
}))

const HeroImage = memo(props => {
  const { gutterBottom, fluid, fixed, className, credit, fullWidth } = props
  const classes = useStyles()
  const imageClassName = classnames(className, {
    [classes.base]: !fullWidth,
    [classes.fullWidth]: fullWidth,
    [classes.gutterBottom]: gutterBottom && !credit,
  })
  const creditClassName = classnames({ [classes.gutterBottom]: gutterBottom })
  return (
    <>
      <Img fluid={fluid} fixed={fixed} className={imageClassName} />
      {credit && (
        <Typography
          component="div"
          variant="caption"
          align="right"
          className={creditClassName}
        >
          <ReactMarkdown source={credit} />
        </Typography>
      )}
    </>
  )
})

HeroImage.displayName = 'HeroImage'

export default HeroImage
