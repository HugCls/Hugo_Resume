import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import colors from './foundations/colors'
import breakpoints from './foundations/breakpoints'
import radii from './foundations/radii'
import { fonts, fontSizes, fontWeights } from './foundations/fonts'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config, styles, colors, breakpoints, fonts, fontWeights, fontSizes, radii
})

export default theme;
