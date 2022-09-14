export interface IAuthLoginDTO {
  email: string
  password: string
}

export interface IReturnAuthMessage {
  email: string
  status: boolean
  message: string
}
