import {IAuthLoginDTO} from "../../types/auth.types";
import {Effect, ToastType} from "../types/global.types";
import {CreateToastFnReturn} from "@chakra-ui/toast";
import {loginAction, paginationAction} from "../actions/auth.actions";
import {SortType} from "../../types/todos.types";
import {getAllTodosAction, loadingTodosAction} from "../actions/todos.actions";
import {PaginationType} from "../types/auth.types";

const toastOption: ToastType = (title, description, status) => ({
    title,
    description,
    status,
    position: 'top-right',
    duration: 3000,
    isClosable: true,
})

export const loginEffect = (body: IAuthLoginDTO, toast: CreateToastFnReturn): Effect => {
    return async (dispatch, getState, {authService}) => {
        try {
            const res = await authService.loginService(body)
            const {status, message} = res.data
            if (status) {
                dispatch(loginAction(true))
                toast(toastOption("Account Auth", message, "success"))
            } else {
                dispatch(loginAction(false))
                toast(toastOption("Account Auth", message, "error"))
            }
        } catch (e: any) {
            console.log("loginEffect", e.message)
            toast(toastOption("Account Auth", e.message, "error"))
        }
    }
}

export const signOutEffect = (toast: CreateToastFnReturn): Effect => {
    return (dispatch) => {
        dispatch(loginAction(false))
        toast(toastOption("Account Auth", "You Successfully Sign Out", "success"))
    }
}

export const paginationEffect = (page: number, sort: SortType): Effect => {
    return async (dispatch, getState, {todosService}) => {
        dispatch(loadingTodosAction(true))
        try {
            const res = await todosService.getAllTodosService({page, sort})
            const {todos, info} = res.data
            dispatch(paginationAction({...info, sort}))
            dispatch(getAllTodosAction(todos))
            dispatch(loadingTodosAction(false))
        } catch (e: any) {
            console.log("paginationEffect", e.message)
            dispatch(loadingTodosAction(false))
        }
    }
}