import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CssBaseline from '@material-ui/core/CssBaseline'

import SiteTheme from '../shared/theme'
import Header from '../components/Header'
import '../shared/styles.css'

const GeneralLayout = ({ children }) => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={SiteTheme}>
      <CssBaseline />
      <Header />
      <div className={classes.content}>{children}</div>
    </MuiThemeProvider>
  )
}

const useStyles = makeStyles(theme => ({
  content: {
    padding: `0 ${theme.spacing(3)}px`,
  },
}))

export default GeneralLayout
