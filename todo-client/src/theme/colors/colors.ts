type ColorsKeyType = 'primary' | 'secondary' | 'success' | 'warnings' | 'error' | 'outline'

type ColorsType = {
  [key in ColorsKeyType]: string
}

const colors: ColorsType = {
  primary: '#C05621',
  secondary: '#2C7A7B',
  success: '#2F855A',
  warnings: '#ECC94B',
  error: '#E53E3E',
  outline: 'transparent'
}

export default colors
