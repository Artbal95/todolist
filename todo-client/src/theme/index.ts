import { extendTheme } from '@chakra-ui/react'
import breakpoints from './breakpoints/breakpoints'
import colors from './colors/colors'

import Button from './components/Button'

const theme = extendTheme({
  breakpoints,
  colors,
  components: {
    Button
  }
})

export default theme
