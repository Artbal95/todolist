import {ITodosInitialState} from "../types/todos.types";
import {ReducerType} from "../types/global.types";
import {TodosTypes} from "../actionTypes/actions.types";

const initialState: ITodosInitialState = {
    todos: [],
    todosLoading: false
}

const reducer: ReducerType<ITodosInitialState> = (state = initialState, action) => {
    switch (action.type){
        case TodosTypes.GET_ALL_TODOS:
            return {
                ...state,
                todos: action.todos
            }
        case TodosTypes.CREATE_NEW_TODO:
            return {
                ...state,
                todos: action.todos
            }
        case TodosTypes.UPDATE_TODO:
            return {
                ...state,
                todos: action.todos
            }
        case TodosTypes.LOADING_TODOS:
            return {
                ...state,
                todosLoading: action.todosLoading
            }
        default:
            return state
    }
}

export default reducer