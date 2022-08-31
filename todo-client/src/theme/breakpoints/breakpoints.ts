type BreakpointsKeyType = "sm" | "md" | "lg" | "xl" | "2xl"

type BreakpointsType = {
  [key in BreakpointsKeyType]: string
}

const breakpoints: BreakpointsType = {
  sm: '485px',
  md: '768px',
  lg: '992px',
  xl: '1366px',
  '2xl': '1536px',
}

export default breakpoints