import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MDXProvider } from '@mdx-js/react'

import MDXComponentsMap from '../components/mdx'
import SiteTheme from '../shared/theme'
import Header from '../components/Header'
import '../shared/styles.css'
import Head from '../components/Head'
import Footer from '../components/Footer'

const GeneralLayout = ({ children, title, description, noGutterBottom }) => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={SiteTheme}>
      <CssBaseline />
      <Head title={title} description={description} />
      <Header noGutterBottom={noGutterBottom} />
      <main className={classes.content}>
        <MDXProvider components={MDXComponentsMap}>{children}</MDXProvider>
      </main>
      <Footer />
    </MuiThemeProvider>
  )
}

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(0, 3, 2),

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1),
    },
  },
}))

export default GeneralLayout
