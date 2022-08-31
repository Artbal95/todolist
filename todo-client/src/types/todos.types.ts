export interface ITodo {
    name: string
    email: string
    task: string
    status: boolean
    isUpdated: boolean
}

export type SortType = {
    [key in keyof Partial<ITodo>]: 1 | -1
}

export type GetTodosByQueries = {
    page: number
    sort: SortType
}

export type CreateTodosType = Omit<ITodo, "status" & "isUpdated">

export type UpdateTodosType = Pick<ITodo, "status" & "task">