import { IAuthLoginDTO } from '../types/auth.types'
import validator from 'validator'

const isValidateAuthHelper = (form: IAuthLoginDTO): boolean => {
  const isLength = form.password.length > 6
  const isEmail = validator.isEmail(form.email)
  return isLength && isEmail
}

export default isValidateAuthHelper
