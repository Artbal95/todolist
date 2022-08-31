import {IAuthLoginDTO} from "../../types/auth.types";
import {Effect, ToastType} from "../types/global.types";
import {CreateToastFnReturn} from "@chakra-ui/toast";
import {loginAction} from "../actions/auth.actions";

const toastOption: ToastType = (title, description, status) => ({
    title,
    description,
    status,
    position: 'top-left',
    duration: 3000,
    isClosable: true,
})

export const loginEffect = (body: IAuthLoginDTO, toast: CreateToastFnReturn): Effect => {
    return async (dispatch, getState, {AuthServices}) => {
        try {
            const res = await AuthServices.loginService(body)
            const {status, message} = res.data
            if (status) {
                dispatch(loginAction(true))
                toast(toastOption("Account Login", message, "success"))
            } else {
                dispatch(loginAction(false))
                toast(toastOption("Account Login", message, "error"))
            }
        } catch (e: any) {
            console.log("loginEffect", e.message)
            toast(toastOption("Account Login", e.message, "error"))
        }
    }
}