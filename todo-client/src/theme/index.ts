import {extendTheme} from "@chakra-ui/react"
import breakpoints from "./breakpoints/breakpoints";
import colors from "./colors/colors";

const theme = extendTheme({
    breakpoints,
    colors,
    components: {
        Button: {
            baseStyle: {
                outline: "unset",
                transition: ".08s",
                _active: {
                    transform: "translateY(2px)"
                }
            },
            sizes: {
                base: {
                    fontSize: "14px",
                    py: "10px",
                    px: "20px"
                },
                md: {
                    fontSize: "16px",
                    py: "15px",
                    px: "30px"
                },
                xl: {
                    fontSize: "16px",
                    py: "20px",
                    px: "40px"
                }
            },
            variants: {
                primary: {
                    bg: "orange"
                },
                secondary: {
                    bg: "teal",
                    color: "white"
                },
                success: {
                    bg: "green"
                },
                warnings: {
                    bg: "yellow"
                },
                error: {
                    bg: "red"
                },
                outline: {
                    bg: "transparent",
                    border: "1px solid"
                }
            },
            defaultProps: {
                size: "md",
                variant: "primary",
            }
        },
    }
})

export default theme