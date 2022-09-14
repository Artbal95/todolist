import { AnyAction, combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import AuthReducer from './reducers/auth.reducer'
import TodosReducer from './reducers/todos.reducer'

import * as authService from '../services/auth.service'
import * as todosService from '../services/todos.service'

const extraArgument = {
  authService,
  todosService
}

const rootReducer = combineReducers({
  auth: AuthReducer,
  todo: TodosReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  blacklist: ['todo']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument
    },
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, ServiceType, AnyAction>
export type ServiceType = typeof extraArgument
