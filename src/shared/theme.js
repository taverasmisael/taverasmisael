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
const bodyFontFamily = { fontFamily: `Roboto, ${systemFonts}` }
const headingFontFamily = { fontFamily: `Space Mono, ${systemFonts}` }

const SiteTheme = createMuiTheme({
  typography: {
    ...bodyFontFamily,
    h1: headingFontFamily,
    h2: headingFontFamily,
    h3: headingFontFamily,
    h4: headingFontFamily,
    subtitle1: headingFontFamily,
    button: { fontWeight: 'bold' },
  },
})

export default responsiveFontSizes(SiteTheme)
