import {extendTheme} from "@chakra-ui/react"
import breakpoints from "./breakpoints/breakpoints";
import colors from "./colors/colors";

const theme = extendTheme({
        breakpoints,
        colors,
    },
)

export default theme