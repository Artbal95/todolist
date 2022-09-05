import {LoginActionType, PaginationActionType, UserActionType} from "../types/auth.types";

import {AuthTypes} from "../actionTypes/actions.types"

export const loginAction: LoginActionType = (isLoggedIn) => ({
    type: AuthTypes.LOGIN,
    isLoggedIn,
})

export const userAction: UserActionType = (email) => ({
    type: AuthTypes.USER,
    email,
})

export const paginationAction: PaginationActionType = (pagination) => ({
    type: AuthTypes.PAGINATION,
    pagination
})