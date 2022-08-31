import {Action} from "@reduxjs/toolkit";
import {ActionReturnType} from "./global.types";

export interface IAuthInitialState {
    isLoggedIn: boolean
}

export type LoginActionType = ActionReturnType<IAuthInitialState, "isLoggedIn">