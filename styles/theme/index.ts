import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";


// Global style overrides
import styles from './styles'

// Foundational style overrides
import colors from './foundations/colors'
import breakpoints from './foundations/breakpoints'
import radii from './foundations/radii'
import { fonts, fontSizes, fontWeights } from './foundations/fonts'
import { type ThemeConfig } from '@chakra-ui/theme'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config, styles, colors, breakpoints, fonts, fontWeights, fontSizes, radii, body: { bg: mode('gray.50', 'white') },
})

export default theme;
