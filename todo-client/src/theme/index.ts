import {theme as baseTheme, extendTheme, withDefaultColorScheme} from "@chakra-ui/react"
import breakpoints from "./breakpoints/breakpoints";
import colors from "./colors/colors";
import Button from "./components/Button";

console.log("baseTheme", baseTheme)
console.log("Button", Button)

const theme = extendTheme({
        breakpoints,
        colors,
        components: {
            Button: {
                baseStyle: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    borderRadius: '8px',
                    bg: "primary",
                    color: "whiteAlpha.900",
                    outline: "unset",
                },
                sizes: {
                    md: {
                        fontSize: "16px",
                        px: "30px",
                        py: "10px",
                    },
                },
                variants: {
                    solid: {
                        bg: "primary",
                        color: "whiteAlpha.900",
                        transition: ".15s",
                        _active: {
                            opacity: ".8",
                            transform: "translateY(2px)"
                        },
                        _hover: {
                            opacity: ".8",
                        },
                    },
                    outline: {
                        bg: "outline",
                        color: "blackAlpha.900",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "primary",
                    },
                },
                defaultProps: {
                    size: 'md',
                    variant: 'solid',
                },
            }
        }
    },
)

console.log(theme, "theme")

export default theme