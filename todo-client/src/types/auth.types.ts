export interface IAuthLoginDTO {
    email: string
    password: string
}

export interface IReturnAuthMessage {
    status: boolean,
    message: string
}