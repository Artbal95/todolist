import { useState } from 'react'
import { Box, Modal, ModalContent, ModalOverlay, useDisclosure, useToast } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

import useAppDispatch from '../../../../../../hooks/useAppDispatch'
import useAppSelector from '../../../../../../hooks/useAppSelector'

import { updateTodosEffect } from '../../../../../../store/effects/todos.effects'
import { signOutEffect } from '../../../../../../store/effects/auth.effects'

import { ITodo, UpdateTodosType } from '../../../../../../types/todos.types'

import Loading from '../../../../../constants/Loading/Loading'
import ModalHeader from './components/ModalHeader/ModalHeader'
import ModalBody from './components/ModalBody/ModalBody'
import ModalFooter from './components/ModalFooter/ModalFooter'

interface IEditProps {
  todo: ITodo
}

const Edit = ({ todo }: IEditProps): JSX.Element => {
  const dispatch = useAppDispatch()

  const toast = useToast()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { todosLoading } = useAppSelector(state => state.todo)
  const { isLoggedIn } = useAppSelector(state => state.auth)

  const [taskForm, setTaskForm] = useState<ITodo>(todo)

  console.log(isLoggedIn)

  const handlerSubmit = (): void => {
    if (isLoggedIn) {
      const { _id, task, status } = taskForm
      const updateTodo: UpdateTodosType = {
        task,
        status
      }
      dispatch(updateTodosEffect(_id, updateTodo, toast))
    } else {
      dispatch(signOutEffect(toast))
    }
  }

  return (
        <>
            <Box onClick={onOpen}>
                <EditIcon/>
            </Box>
            <Modal scrollBehavior={'inside'} isCentered closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg={'none'} backdropFilter={'auto'} backdropBlur={'2px'}/>
                <ModalContent boxShadow={'dark-lg'}>
                    {
                        todosLoading
                          ? <Loading/>
                          : <>
                                <ModalHeader />
                                <ModalBody todo={taskForm} setTaskForm={setTaskForm}/>
                                <ModalFooter handlerSubmit={handlerSubmit} onClose={onClose}/>
                            </>
                    }
                </ModalContent>
            </Modal>
        </>
  )
}

export default Edit
