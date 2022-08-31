import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react"

const NewTask = (): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Add New Task</Button>
            <Modal isCentered closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg={"none"}
                    backdropFilter={"auto"}
                    backdropBlur={"2px"}
                />
                <ModalContent>
                    <ModalHeader>Add New Task</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet.
                    </ModalBody>
                    <ModalFooter>
                        <Button bg={"secondary"}>
                            Save
                        </Button>
                        <Button variant={"outline"} onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NewTask