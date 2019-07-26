import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MDXProvider } from '@mdx-js/react'

import mdxComponentsMap from './mdxComponentsMap'
import SiteTheme from '../shared/theme'
import Header from '../components/Header'
import '../shared/styles.css'
import Head from '../components/Head'

const GeneralLayout = ({ children, title, description, noBottomGutter }) => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={SiteTheme}>
      <CssBaseline />
      <Head title={title} description={description} />
      <Header noBottomGutter />
      <div className={classes.content}>
        <MDXProvider components={mdxComponentsMap} r>
          {children}
        </MDXProvider>
      </div>
    </MuiThemeProvider>
  )
}

const useStyles = makeStyles(theme => ({
  content: {
    padding: `0 ${theme.spacing(3)}px`,
  },
}))

export default GeneralLayout
