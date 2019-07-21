import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import SiteTheme from '../shared/theme'

const GeneralLayout = ({ children }) => (
  <MuiThemeProvider theme={SiteTheme}>{children}</MuiThemeProvider>
)

export default GeneralLayout
