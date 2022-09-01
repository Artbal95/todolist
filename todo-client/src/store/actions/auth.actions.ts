import {LoginActionType, PaginationActionType} from "../types/auth.types";

import {AuthTypes} from "../actionTypes/actions.types"

export const loginAction: LoginActionType = (isLoggedIn) => ({
    type: AuthTypes.LOGIN,
    isLoggedIn
})

export const paginationAction: PaginationActionType = (pagination) => ({
    type: AuthTypes.PAGINATION,
    pagination
})