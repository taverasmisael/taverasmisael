import React, { memo } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Head from '../components/Head'
import { DarkModeProvider } from '../context/dark-mode'

const BaseLayout = memo(({ children, headProps }) => (
  <DarkModeProvider>
    <CssBaseline />
    <Head {...headProps} />
    <p style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '1rem',
      backgroundColor: '#f44336',
      color: '#fff',
      zIndex: 9999,
      textAlign: 'center',
      fontSize: '1.5rem',
    }}>
      Este sitio web está archivado. Visite el nuevo en
      <a href="taverasmisael.com?from=oldsite" style={{ 
        fontWeight: 'bold',
        textDecoration: 'underline',
      }}>https://taverasmisael.com.</a>
    </p>
    {children}
  </DarkModeProvider>
))
BaseLayout.displayName = 'BaseLayout'

export default BaseLayout
