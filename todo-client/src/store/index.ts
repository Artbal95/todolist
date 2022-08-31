import {combineReducers, configureStore} from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import * as serviceApi from "../services"
import AuthReducer from "./reducers/auth.reducer";
import TodosReducer from "./reducers/todos.reducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    todo: TodosReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["todo"],
    blacklist: ["auth"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                serviceApi
            }
        }
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type ServiceType = typeof serviceApi
