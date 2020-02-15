import React, { memo } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Head from '../components/Head'
import { DarkModeProvider } from '../context/dark-mode'

const BaseLayout = memo(({ children, headProps }) => (
  <DarkModeProvider>
    <CssBaseline />
    <Head {...headProps} />
    {children}
  </DarkModeProvider>
))
BaseLayout.displayName = 'BaseLayout'

export default BaseLayout
