import {Effect} from "../types/global.types";
import {createTodosAction, getAllTodosAction, loadingTodosAction, updateTodosAction} from "../actions/todos.actions";
import {CreateTodosType, SortType, UpdateTodosType} from "../../types/todos.types";

export const getAllTodosEffect = (page: number = 1, sort: SortType = {name: 1}): Effect => {
    return async (dispatch, getState, {TodosServices}) => {
        dispatch(loadingTodosAction(true))
        try {
            const res = await TodosServices.getAllTodosService({page, sort})
            dispatch(getAllTodosAction(res.data))
            dispatch(loadingTodosAction(false))
        } catch (e: any) {
            console.log("getAllTodosEffect", e.message)
            dispatch(loadingTodosAction(false))
        }
    }
}

export const createTodosEffect = (body: CreateTodosType): Effect => {
    return async (dispatch, getState, {TodosServices}) => {
        dispatch(loadingTodosAction(true))
        try {
            const res = await TodosServices.createTodosService(body)
            dispatch(createTodosAction(res.data))
            dispatch(loadingTodosAction(false))
        } catch (e: any) {
            console.log("createTodosEffect", e.message)
            dispatch(loadingTodosAction(false))
        }
    }
}

export const updateTodosEffect = (id: string, body: UpdateTodosType): Effect => {
    return async (dispatch, getState, {TodosServices}) => {
        dispatch(loadingTodosAction(true))
        try {
            const res = await TodosServices.updateTodosServices(id, body)
            dispatch(updateTodosAction(res.data))
            dispatch(loadingTodosAction(false))
        } catch (e: any) {
            console.log("updateTodosEffect", e.message)
            dispatch(loadingTodosAction(false))
        }
    }
}