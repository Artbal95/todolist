import {
    Button,
    Modal,
    ModalContent,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react"
import {useState} from "react";

import useAppDispatch from "../../../../hooks/useAppDispatch";
import {createTodosEffect} from "../../../../store/effects/todos.effects";

import isValidateHelper from "../../../../helpers/isValidateTodos.helper";

import ModalHeader from "./components/ModalHeader/ModalHeader";
import ModalBody from "./components/ModalBody/ModalBody";
import ModalFooter from "./components/ModalFooter/ModalFooter";

import {CreateTodosType} from "../../../../types/todos.types";
import useAppSelector from "../../../../hooks/useAppSelector";
import Loading from "../../../constants/Loading/Loading";

const NewTask = (): JSX.Element => {

    const dispatch = useAppDispatch()

    const {todosLoading} = useAppSelector(state => state.todo)

    const {isOpen, onOpen, onClose} = useDisclosure()

    const initialTaskForm: CreateTodosType = {
        name: "",
        email: "",
        task: ""
    }

    const [taskForm, setTaskForm] = useState<CreateTodosType>(initialTaskForm)

    const [formError, setFormError] = useState<boolean>(false)

    const handlerSubmit = () => {
        const isValidate = isValidateHelper(taskForm)
        setFormError(!isValidate)
        if (isValidate) {
            dispatch(createTodosEffect(taskForm))
            !todosLoading && onClose()
        }
    }

    const handlerCloseModal = () => {
        onClose()
        setFormError(false)
        setTaskForm(initialTaskForm)
    }

    return (
        <>
            <Button onClick={onOpen}>Add New Task</Button>
            <Modal scrollBehavior={"inside"} isCentered closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg={"none"} backdropFilter={"auto"} backdropBlur={"2px"}/>
                <ModalContent boxShadow={"dark-lg"}>
                    {
                        todosLoading ? <Loading/> :
                            <>
                                <ModalHeader formError={formError}/>
                                <ModalBody setTaskForm={setTaskForm}/>
                                <ModalFooter handlerSubmit={handlerSubmit} onClose={handlerCloseModal}/>
                            </>
                    }
                </ModalContent>
            </Modal>
        </>
    )
}

export default NewTask