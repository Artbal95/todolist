import {AxiosPromise} from "axios";
import axios from "../config/axios";
import {CreateTodosType, GetTodosByQueries, ITodo, UpdateTodosType} from "../types/todos.types";

export const getAllTodosService = ({page, sort}: GetTodosByQueries): AxiosPromise<ITodo[]> => {
    return axios.get("/app/", {
        params: {
            page,
            sort
        }
    })
}

export const createTodosService = (createTodos: CreateTodosType): AxiosPromise<ITodo[]> => {
    return axios.post("/app/create", createTodos)
}

export const updateTodosServices = (id: string, updateTodos: UpdateTodosType): AxiosPromise<ITodo[]> => {
    return axios.put(`/app/update/${id}`, updateTodos)
}