import {ActionReturnType} from "./global.types";
import {IInfo, SortType} from "../../types/todos.types";

export interface PaginationType extends IInfo {
    sort: SortType
}

export interface IAuthInitialState {
    isLoggedIn: boolean
    pagination: PaginationType
}

export type LoginActionType = ActionReturnType<IAuthInitialState, "isLoggedIn">
export type PaginationActionType = ActionReturnType<IAuthInitialState, "pagination">
