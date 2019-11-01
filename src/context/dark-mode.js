import React, {
  createContext,
  useEffect,
  useCallback,
  memo,
  useState,
  useContext,
} from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { LightTheme, DarkTheme } from '../shared/theme'

const DEFAULT_DARK_MODE_CONTEXT_VALUE = { darkMode: false, toggle: () => {} }

const DarkModeContext = createContext(DEFAULT_DARK_MODE_CONTEXT_VALUE)
export const useDarkModeContext = () => useContext(DarkModeContext)

const useLocalStoragetDarkMode = () => {
  const [mode, setMode] = useState(false)
  useEffect(() => {
    const lsMode = localStorage.getItem('darkMode') === 'true'
    setMode(lsMode)
  }, [])

  return [mode, setMode]
}

export const DarkModeProvider = memo(({ children }) => {
  const [darkMode, setDarkMode] = useLocalStoragetDarkMode()

  const toggle = useCallback(() => {
    const dark = !darkMode
    localStorage.setItem('darkMode', dark)
    setDarkMode(dark)
  }, [darkMode, setDarkMode])
  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  )
})
