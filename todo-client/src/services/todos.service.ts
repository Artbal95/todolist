import { AxiosPromise } from 'axios'
import axios from '../config/axios'
import {
  CreateTodosType,
  GetTodosByQueries,
  ITodoService,
  ITodoUpdateService,
  UpdateTodosType
} from '../types/todos.types'

export const getAllTodosService = ({ page, sort }: GetTodosByQueries): AxiosPromise<ITodoService> => {
  return axios.get('/app/', {
    params: {
      page,
      sort
    }
  })
}

export const createTodosService = (createTodos: CreateTodosType): AxiosPromise<ITodoService> => {
  return axios.post('/app/create', createTodos)
}

export const updateTodosServices = (id: string, updateTodos: UpdateTodosType): AxiosPromise<ITodoUpdateService> => {
  return axios.put(`/app/update/${id}`, updateTodos)
}
