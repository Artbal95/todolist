import {AuthTypes} from "../actionTypes/actions.types";

import {IAuthInitialState} from "../types/auth.types";
import {ReducerType} from "../types/global.types";

const initialState: IAuthInitialState = {
    email: "",
    isLoggedIn: false,
    pagination: {
        page: 1,
        limit: 3,
        hasNextPage: false,
        hasPrevPage: false,
        nextPage: null,
        prevPage: null,
        pagingCounter: 0,
        totalDocs: 0,
        totalPages: 0,
        sort: ["name", 1]
    }
}

const reducer: ReducerType<IAuthInitialState> = (state = initialState, action) => {
    switch (action.type) {
        case AuthTypes.LOGIN:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        case AuthTypes.USER:
            return {
                ...state,
                email: action.email
            }
        case AuthTypes.PAGINATION:
            return {
                ...state,
                pagination: action.pagination
            }
        default:
            return state
    }
}

export default reducer
