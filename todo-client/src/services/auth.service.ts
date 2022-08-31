import {AxiosPromise} from "axios";
import axios from "../config/axios"
import {IAuthLoginDTO, IReturnAuthMessage} from "../types/auth.types";


export const loginService = (body: IAuthLoginDTO): AxiosPromise<IReturnAuthMessage> => {
    return axios.post("/auth/signin", body)
}