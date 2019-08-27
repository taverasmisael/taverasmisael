import compose from 'ramda/src/compose'
import merge from 'ramda/src/merge'
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

const MainTheme = {
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

  mode: 'light',

  overrides: {
    MuiDivider: {
      root: {
        backgroundColor: 'rgba(0,0,0, 0.45)',
      },
    },
    MuiTypography: {
      caption: { marginTop: '2em' },
      h2: { marginTop: '1.35em' },
      h3: { marginTop: '1em' },
      h4: { marginTop: '1em' },
    },
  },
}

const SecondaryTheme = merge(MainTheme, {
  palette: {
    primary: {
      main: '#f5f3f3',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ed1250',
      contrastText: '#fff',
    },

    background: { paper: '#1a1e27', default: '#13131f' },
    text: {
      disabled: 'rgba(255, 255, 255, 0.38)',
      hint: 'rgba(255, 255, 255, 0.38)',
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.54)',
    },
  },
  mode: 'dark',
  overrides: {
    MuiDivider: {
      root: {
        backgroundColor: 'rgba(255, 255, 255, 0.45)',
      },
    },
  },
})

const createResponsiveFontTheme = compose(
  responsiveFontSizes,
  createMuiTheme
)

export const LightTheme = createResponsiveFontTheme(MainTheme)
export const DarkTheme = createResponsiveFontTheme(SecondaryTheme)
