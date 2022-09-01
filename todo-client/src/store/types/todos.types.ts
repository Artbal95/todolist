import {ITodo} from "../../types/todos.types";
import {ActionReturnType} from "./global.types";

export interface ITodosInitialState {
    todos: ITodo[],
    todosLoading: boolean
}

export type TodosActionType = ActionReturnType<ITodosInitialState, "todos">
export type TodosLoadingActionType = ActionReturnType<ITodosInitialState, "todosLoading">
