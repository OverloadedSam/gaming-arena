import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
}

// Extend the theme
const theme = extendTheme({ config })

export default theme
