import {Action, AnyAction, Reducer, ThunkAction} from "@reduxjs/toolkit";
import {RootState, ServiceType} from "../index";
import {CreateToastFnReturn, UseToastOptions} from "@chakra-ui/toast";
import {AlertStatus} from "@chakra-ui/alert";

type ValueOf<T> = T[keyof T]

export type ActionReturnType<T, K extends keyof T> = (arg: ValueOf<Pick<T, K>>) => Pick<T, K> & Action<string>

export type ReducerType<State> = Reducer<State, State & Action<string>>

export type Effect = ThunkAction<void, RootState, ServiceType, AnyAction>

export type ToastType = (title?: string, description?: string, status?: AlertStatus) => UseToastOptions