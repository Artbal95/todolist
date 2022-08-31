import {LoginActionType} from "../types/auth.types";

import {AuthTypes} from "../actionTypes/actions.types"

export const loginAction: LoginActionType = (isLoggedIn) => ({
    type: AuthTypes.LOGIN,
    isLoggedIn
})