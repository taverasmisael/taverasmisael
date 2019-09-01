import React, { memo } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MDXProvider } from '@mdx-js/react'

import MDXComponentsMap from '../components/mdx'
import Header from '../components/Header'
import '../shared/styles.css'
import Head from '../components/Head'
import Footer from '../components/Footer'
import { DarkModeProvider } from '../context/dark-mode'

const GeneralLayout = memo(({ children, noGutterBottom, headProps }) => (
  <DarkModeProvider>
    <CssBaseline />
    <Head {...headProps} />
    <Header noGutterBottom={noGutterBottom} />
    <main>
      <MDXProvider components={MDXComponentsMap}>{children}</MDXProvider>
    </main>
    <Footer />
  </DarkModeProvider>
))

GeneralLayout.displayName = 'GeneralLayout'

export default GeneralLayout
