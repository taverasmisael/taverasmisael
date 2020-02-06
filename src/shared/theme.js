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

export const BRAND_BLUE = '#293462'
export const BRAND_PINK = '#ed1250'

const MainTheme = {
  typography: {
    fontFamily: bodyFontFamily,
    fontSize: 16,
    body1: { lineHeight: 1.75 },
    h1: { fontFamily: bodyFontFamily, fontSize: 3.25, lineHeight: 1.15 },
    h2: { fontFamily: headingFontFamily, fontSize: 2.75, lineHeight: 1.25 },
    h3: { fontFamily: headingFontFamily, fontSize: 2.5, lineHeight: 1.35 },
    h4: { fontFamily: headingFontFamily, fontSize: 1.75, lineHeight: 1.45 },
    h5: { fontFamily: headingFontFamily, fontSize: 1.5, lineHeight: 1.5 },
    button: { fontWeight: '500' },
  },

  palette: {
    primary: {
      main: BRAND_BLUE,
    },
    secondary: {
      main: BRAND_PINK,
    },
    type: 'light',
  },

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
    MuiTypography: {
      gutterBottom: { marginBottom: '1.75rem' },
      caption: { marginTop: '1.5em', marginBottom: '0.25em' },
      h2: { marginTop: '1.35em', marginBottom: '0.25em' },
      h3: { marginTop: '1em', marginBottom: '0.25em' },
      h4: { marginTop: '1em', marginBottom: '0.25em' },
    },
  },
  props: {
    MuiFilledInput: {
      disableUnderline: true,
    },
  },
}

const SecondaryTheme = merge(MainTheme, {
  palette: {
    primary: {
      main: BRAND_BLUE,
    },
    secondary: {
      main: BRAND_PINK,
    },
    background: { paper: '#1a1e27', default: '#13131f' },
    type: 'dark',
  },
})

const ThirdTheme = merge(MainTheme, {
  overrides: {
    MuiFormLabel: {
      root: {
        color: 'rgba(255,255,255,0.7)',
        '&$focused': {
          color: 'rgba(255,255,255,0.7)',
        },
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        color: '#fff',

        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        },
        '&$focused': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
})

const createResponsiveFontTheme = compose(
  theme => responsiveFontSizes(theme, { factor: 3 }),
  createMuiTheme
)

export const LightTheme = createResponsiveFontTheme(MainTheme)
export const DarkTheme = createResponsiveFontTheme(SecondaryTheme)
export const AltTheme = createResponsiveFontTheme(ThirdTheme)
