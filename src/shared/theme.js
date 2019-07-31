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
const headingFontFamily = { fontFamily: `Overpass Mono, ${systemFonts}` }

const SiteTheme = createMuiTheme({
  typography: {
    fontFamily: `Roboto, ${systemFonts}`,
    htmlFontSize: 12,
    fontSize: 14,
    body1: { lineHeight: 1.75 },
    h1: { ...headingFontFamily, fontSize: 3.75 },
    h2: { ...headingFontFamily, fontSize: 3.45 },
    h3: { ...headingFontFamily, fontSize: 3 },
    h4: { ...headingFontFamily, fontSize: 2.45 },
    h5: { ...headingFontFamily, fontSize: 2 },
    button: { fontWeight: '500' },
  },
  palette: {
    background: { default: '#ff' },
  },
})

export default responsiveFontSizes(SiteTheme)
