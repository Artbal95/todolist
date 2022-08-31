import {extendTheme} from "@chakra-ui/react"
import breakpoints from "./breakpoints/breakpoints";
import * as components from "./components"
import colors from "./colors/colors";

const theme = extendTheme({
  breakpoints,
  colors,
  components
})

export default theme