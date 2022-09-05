import {Effect} from "../types/global.types";
import {createTodosAction, getAllTodosAction, loadingTodosAction, updateTodosAction} from "../actions/todos.actions";
import {CreateTodosType, UpdateTodosType} from "../../types/todos.types";
import {loginAction, paginationAction, userAction} from "../actions/auth.actions";
import {CreateToastFnReturn} from "@chakra-ui/toast";
import toastOptions from "../../theme/ToastOptions";

export const getAllTodosEffect = (): Effect => {
    return async (dispatch, getState, {todosService}) => {
        dispatch(loadingTodosAction(true))
        try {
            const {page, sort} = getState().auth.pagination
            const res = await todosService.getAllTodosService({page, sort})
            const {todos, info} = res.data
            dispatch(getAllTodosAction(todos))
            dispatch(paginationAction({...info, sort}))
            dispatch(loadingTodosAction(false))
        } catch (e: any) {
            console.log("getAllTodosEffect", e.message)
            dispatch(loadingTodosAction(false))
        }
    }
}

export const createTodosEffect = (body: CreateTodosType): Effect => {
    return async (dispatch, getState, Services) => {
        dispatch(loadingTodosAction(true))
        try {
            const {sort} = getState().auth.pagination
            const res = await Services.todosService.createTodosService(body)
            const {todos, info} = res.data
            dispatch(createTodosAction(todos))
            dispatch(paginationAction({...info, sort}))
            dispatch(loadingTodosAction(false))
        } catch (e: any) {
            console.log("createTodosEffect", e.message)
            dispatch(loadingTodosAction(false))
        }
    }
}

export const updateTodosEffect = (id: string, body: UpdateTodosType, toast: CreateToastFnReturn): Effect => {
    return async (dispatch, getState, {todosService}) => {
        dispatch(loadingTodosAction(true))
        try {
            const {todos} = getState().todo
            const updateTodo = [...todos]
            const updateTodosIndex = todos.findIndex(todo => todo._id === id)
            const res = await todosService.updateTodosServices(id, body)
            const {todo, message} = res.data
            if (todo) {
                updateTodo[updateTodosIndex] = todo
                dispatch(updateTodosAction(updateTodo))
                toast(toastOptions("Todo", message, "success"))
            } else {
                dispatch(loginAction(false))
                dispatch(userAction(""))
                toast(toastOptions("Todo", message, "error"))
            }
            dispatch(loadingTodosAction(false))
        } catch (e: any) {
            console.log("updateTodosEffect", e.message)
            dispatch(loadingTodosAction(false))
        }
    }
}