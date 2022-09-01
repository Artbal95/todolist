import {Button, Modal, ModalContent, ModalOverlay, useDisclosure, useToast} from "@chakra-ui/react";

import useAppDispatch from "../../../../hooks/useAppDispatch";
import useAppSelector from "../../../../hooks/useAppSelector";
import ModalHeader from "./components/ModalHeader/ModalHeader";
import ModalBody from "./components/ModalBody/ModalBody";
import ModalFooter from "./components/ModalFooter/ModalFooter";
import {IAuthLoginDTO} from "../../../../types/auth.types";
import {useState} from "react";
import isValidateAuthHelper from "../../../../helpers/isValidateAuth.helper";
import {loginEffect, signOutEffect} from "../../../../store/effects/auth.effects";

const Auth = (): JSX.Element => {

    const toast = useToast()

    const dispatch = useAppDispatch()

    const {isLoggedIn} = useAppSelector(state => state.auth)

    const {isOpen, onOpen, onClose} = useDisclosure()

    const initialAuthForm: IAuthLoginDTO = {
        email: "",
        password: ""
    }

    const [authForm, setAuthForm] = useState<IAuthLoginDTO>(initialAuthForm)

    const [authError, setAuthError] = useState<boolean>(false)

    const handlerCloseModal = () => {
        onClose()
        setAuthForm(initialAuthForm)
        setAuthError(false)
    }

    const handlerSignIn = () => {
        const isValidate = isValidateAuthHelper(authForm)
        if(isValidate){
            dispatch(loginEffect(authForm, toast))
            onClose()
        } else {
            setAuthError(true)
        }
    }

    const handlerSignOut = () => {
        dispatch(signOutEffect(toast))
    }

    return (
        <>
            <Button onClick={isLoggedIn ? handlerSignOut : onOpen} variant={"secondary"}>{isLoggedIn ? "Sign Out" : "Sign In"}</Button>
            <Modal scrollBehavior={"inside"} isCentered closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg={"none"} backdropFilter={"auto"} backdropBlur={"2px"}/>
                <ModalContent boxShadow={"dark-lg"}>
                    <ModalHeader authError={authError}/>
                    <ModalBody setAuthForm={setAuthForm}/>
                    <ModalFooter handlerSubmit={handlerSignIn} onClose={handlerCloseModal}/>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Auth