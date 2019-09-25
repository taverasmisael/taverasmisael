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
    fontSize: 16,
    body1: { lineHeight: 1.75 },
    h1: { fontFamily: bodyFontFamily, fontSize: 3.25, lineHeight: 1.15 },
    h2: { fontFamily: headingFontFamily, fontSize: 7.75, lineHeight: 1.25 },
    h3: { fontFamily: headingFontFamily, fontSize: 2.5, lineHeight: 1.35 },
    h4: { fontFamily: headingFontFamily, fontSize: 1.75, lineHeight: 1.45 },
    h5: { fontFamily: headingFontFamily, fontSize: 1.25, lineHeight: 1.5 },
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
    MuiChip: {
      root: {
        borderRadius: 4,
        backgroundColor: 'rgba(230, 230, 230, 0.8)',
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: 'rgba(158, 158, 158, 0.09)',
      },
    },
    MuiTypography: {
      caption: { marginTop: '1.5em', marginBottom: '0' },
      h2: { marginTop: '1.35em', marginBottom: '0' },
      h3: { marginTop: '1em', marginBottom: '0' },
      h4: { marginTop: '1em', marginBottom: '0' },
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
    MuiChip: {
      root: {
        borderRadius: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      },
    },
    MuiTypography: {
      caption: { marginTop: '1.5em', marginBottom: '0' },
      h2: { marginTop: '1.35em', marginBottom: '0' },
      h3: { marginTop: '1em', marginBottom: '0' },
      h4: { marginTop: '1em', marginBottom: '0' },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: '#181827',
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: 'rgba(255, 255, 255, 0.45)',
      },
    },
  },
})

const createResponsiveFontTheme = compose(
  theme => responsiveFontSizes(theme, { factor: 4 }),
  createMuiTheme
)

export const LightTheme = createResponsiveFontTheme(MainTheme)
export const DarkTheme = createResponsiveFontTheme(SecondaryTheme)
