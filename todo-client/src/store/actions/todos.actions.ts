import {TodosActionType, TodosLoadingActionType} from "../types/todos.types";
import {TodosTypes} from "../actionTypes/actions.types";

export const getAllTodosAction: TodosActionType = (todos) => ({
    type: TodosTypes.GET_ALL_TODOS,
    todos
})

export const createTodosAction: TodosActionType = (todos) => ({
    type: TodosTypes.CREATE_NEW_TODO,
    todos
})

export const updateTodosAction: TodosActionType = (todos) => ({
    type: TodosTypes.UPDATE_TODO,
    todos
})

export const loadingTodosAction: TodosLoadingActionType = (todosLoading) => ({
    type: TodosTypes.LOADING_TODOS,
    todosLoading
})