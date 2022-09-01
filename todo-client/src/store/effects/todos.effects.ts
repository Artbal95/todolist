import {Effect} from "../types/global.types";
import {createTodosAction, getAllTodosAction, loadingTodosAction, updateTodosAction} from "../actions/todos.actions";
import {CreateTodosType, SortType, UpdateTodosType} from "../../types/todos.types";
import {paginationAction} from "../actions/auth.actions";

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

export const updateTodosEffect = (id: string, body: UpdateTodosType): Effect => {
    return async (dispatch, getState, {todosService}) => {
        dispatch(loadingTodosAction(true))
        try {
            const res = await todosService.updateTodosServices(id, body)
            dispatch(updateTodosAction(res.data))
            dispatch(loadingTodosAction(false))
        } catch (e: any) {
            console.log("updateTodosEffect", e.message)
            dispatch(loadingTodosAction(false))
        }
    }
}