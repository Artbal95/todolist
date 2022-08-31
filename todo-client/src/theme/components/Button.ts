import type { ComponentStyleConfig } from '@chakra-ui/theme'

const Button: ComponentStyleConfig = {
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
    _active: {
      bg: "inherit"
    },
    _hover: {
      bg: "inherit"
    },
    _focus: {
      bg: "inherit"
    }
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
        bg: "primary",
        opacity: ".8",
        transform: "translateY(2px)"
      },
      _hover: {
        bg: "primary",
        opacity: ".8",
      },
      _focus: {
        bg: "primary",
      }
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

export default Button