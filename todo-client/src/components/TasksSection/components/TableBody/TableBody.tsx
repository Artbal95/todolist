import { Checkbox, Tbody, Td, Tr } from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

import Edit from './components/Edit/Edit'

import useAppSelector from '../../../../hooks/useAppSelector'

const TableBody = (): JSX.Element => {
  const { todos } = useAppSelector(state => state.todo)
  const { isLoggedIn } = useAppSelector(state => state.auth)

  const colBody = (label: string): JSX.Element => <Td fontSize={{ base: '14px', md: '16px', xl: '18px' }}>{label}</Td>

  return (
        <Tbody>
            {todos.map((todo) => (
                <Tr key={todo._id}>
                    {colBody(todo.name)}
                    {colBody(todo.email)}
                    {colBody(todo.task)}
                    <Td textAlign={'center'}>
                        <Checkbox icon={todo.status ? <CheckIcon /> : <CloseIcon />} colorScheme={todo.status ? 'green' : 'red'} defaultChecked={true} isReadOnly />
                    </Td>
                    {isLoggedIn && (
                        <Td>
                            <Edit todo={todo}/>
                        </Td>
                    )}
                </Tr>
            ))}
        </Tbody>
  )
}

export default TableBody
