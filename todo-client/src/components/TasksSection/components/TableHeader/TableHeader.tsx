import { useCallback } from 'react'
import { Text, Th, Thead, Tr } from '@chakra-ui/react'

import { ITodo } from '../../../../types/todos.types'
import useAppDispatch from '../../../../hooks/useAppDispatch'
import useAppSelector from '../../../../hooks/useAppSelector'
import { paginationEffect } from '../../../../store/effects/auth.effects'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'

const TableHeader = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const { isLoggedIn, pagination } = useAppSelector(state => state.auth)
  const { page, sort } = pagination

  const header: Array<keyof Omit<ITodo, 'isUpdated'>> = ['name', 'email', 'task', 'status']

  const handlerChangeSort = useCallback((key: keyof Omit<ITodo, 'isUpdated'>) => {
    if (key === sort[0]) {
      if (sort[1] === 1) {
        dispatch(paginationEffect(page, [key, -1]))
      } else {
        dispatch(paginationEffect(page, [key, 1]))
      }
    } else {
      dispatch(paginationEffect(page, [key, 1]))
    }
  }, [])

  return (
        <Thead>
            <Tr>
                {header.map(h => (
                    <Th
                        key={h}
                        fontSize={{ base: '16px', md: '18px', xl: '20px' }}
                        onClick={h !== 'status' ? () => handlerChangeSort(h) : undefined}
                    >
                        {h}
                        {sort[0] === h &&
                            <Text as={'span'} ml={'5px'}>
                                {sort[1] === 1 ? <ArrowUpIcon mb={'5px'}/> : <ArrowDownIcon mb={'5px'}/>}
                            </Text>}
                    </Th>
                ))}
                {isLoggedIn && <Th>###</Th>}
            </Tr>
        </Thead>
  )
}

export default TableHeader
