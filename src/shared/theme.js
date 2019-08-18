import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

const systemFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',')
const headingFontFamily = `Overpass Mono, ${systemFonts}`
const bodyFontFamily = `Roboto, ${systemFonts}`

const SiteTheme = createMuiTheme({
  typography: {
    fontFamily: bodyFontFamily,
    htmlFontSize: 12,
    fontSize: 14,
    body1: { lineHeight: 1.75 },
    h1: { fontFamily: headingFontFamily, fontSize: 3.75 },
    h2: { fontFamily: headingFontFamily, fontSize: 3.45 },
    h3: { fontFamily: headingFontFamily, fontSize: 3 },
    h4: { fontFamily: headingFontFamily, fontSize: 2.45 },
    h5: { fontFamily: headingFontFamily, fontSize: 2 },
    button: { fontWeight: '500' },
  },

  palette: {
    primary: {
      main: '#293462',
    },
    secondary: {
      main: '#ed1250',
    },
  },

  overrides: {
    MuiTypography: {
      caption: { marginTop: '2em'},
      h2: { marginTop: '1.35em' },
      h3: { marginTop: '1em' },
      h4: { marginTop: '1em' },
    },
  },
})

export default responsiveFontSizes(SiteTheme)
