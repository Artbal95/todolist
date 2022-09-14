import { IAuthLoginDTO } from '../../types/auth.types'
import { Effect } from '../types/global.types'
import { CreateToastFnReturn } from '@chakra-ui/toast'
import { loginAction, paginationAction, userAction } from '../actions/auth.actions'
import { SortType } from '../../types/todos.types'
import { getAllTodosAction, loadingTodosAction } from '../actions/todos.actions'
import toastOptions from '../../theme/ToastOptions'

export const loginEffect = (body: IAuthLoginDTO, toast: CreateToastFnReturn): Effect => {
  return async (dispatch, _, { authService }) => {
    try {
      const res = await authService.loginService(body)
      const { email, status, message } = res.data
      if (status) {
        dispatch(loginAction(true))
        dispatch(userAction(email))
        toast(toastOptions('Account Auth', message, 'success'))
      } else {
        dispatch(loginAction(false))
        toast(toastOptions('Account Auth', message, 'error'))
      }
    } catch (e: any) {
      console.log('loginEffect', e.message)
      toast(toastOptions('Account Auth', e.message, 'error'))
    }
  }
}

export const signOutEffect = (toast: CreateToastFnReturn): Effect => {
  return async (dispatch, getState, { authService }) => {
    try {
      const { email } = getState().auth

      const res = await authService.signOutService(email)
      const { message } = res.data

      dispatch(loginAction(false))
      dispatch(userAction(''))

      toast(toastOptions('Account Auth', message, 'success'))
    } catch (e: any) {
      console.log('signOutEffect', e.message)
    }
  }
}

export const paginationEffect = (page: number, sort: SortType): Effect => {
  return async (dispatch, getState, { todosService }) => {
    dispatch(loadingTodosAction(true))
    try {
      const res = await todosService.getAllTodosService({ page, sort })
      const { todos, info } = res.data
      dispatch(paginationAction({ ...info, sort }))
      dispatch(getAllTodosAction(todos))
      dispatch(loadingTodosAction(false))
    } catch (e: any) {
      console.log('paginationEffect', e.message)
      dispatch(loadingTodosAction(false))
    }
  }
}
