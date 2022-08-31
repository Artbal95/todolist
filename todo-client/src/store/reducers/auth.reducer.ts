import {AuthTypes} from "../actionTypes/actions.types";

import {IAuthInitialState} from "../types/auth.types";
import {ReducerType} from "../types/global.types";

const initialState: IAuthInitialState = {
    isLoggedIn: false
}

const reducer: ReducerType<IAuthInitialState> = (state = initialState, action) => {
    switch (action.type) {
        case AuthTypes.LOGIN:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        default:
            return state
    }
}

export default reducer
