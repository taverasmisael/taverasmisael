import React, { memo } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MDXProvider } from '@mdx-js/react'

import MDXComponentsMap from '../components/mdx'
import Header from '../components/Header'
import '../shared/styles.css'
import Head from '../components/Head'
import Footer from '../components/Footer'
import { DarkModeProvider } from '../context/dark-mode'

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(0, 3, 2),

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1),
    },
  },
}))

const GeneralLayout = memo(({ children, noGutterBottom, headProps }) => {
  const classes = useStyles()
  return (
    <DarkModeProvider>
      <CssBaseline />
      <Head {...headProps} />
      <Header noGutterBottom={noGutterBottom} />
      <main className={classes.content}>
        <MDXProvider components={MDXComponentsMap}>{children}</MDXProvider>
      </main>
      <Footer />
    </DarkModeProvider>
  )
})

GeneralLayout.displayName = 'GeneralLayout'

export default GeneralLayout
