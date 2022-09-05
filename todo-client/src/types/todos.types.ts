export interface ITodo {
    _id: string
    name: string
    email: string
    task: string
    status: boolean
    isUpdated: boolean
}

export type SortType = [keyof Partial<ITodo>, 1 | -1]

export type GetTodosByQueries = {
    page: number
    sort: SortType
}

export type CreateTodosType = Omit<ITodo, "status" | "isUpdated" | "_id">

export type UpdateTodosType = Pick<ITodo, "status" | "task">

export interface IInfo {
    "totalDocs": number,
    "limit": number,
    "totalPages": number,
    "page": number,
    "pagingCounter": number,
    "hasPrevPage": boolean,
    "hasNextPage": boolean,
    "prevPage": number | null,
    "nextPage": number | null
}

export interface ITodoService {
    todos: ITodo[],
    info: IInfo
}

export interface ITodoUpdateService {
    todo: ITodo | null
    message: string
}