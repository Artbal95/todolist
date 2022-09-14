import { shallowEqual, TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../store'

const useAppSelector: TypedUseSelectorHook<RootState> = (selector) => {
  return useSelector(selector, shallowEqual)
}

export default useAppSelector
