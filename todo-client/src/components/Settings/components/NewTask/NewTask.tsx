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
            <Button colorScheme={"orange"} onClick={onOpen}>Add New Task</Button>
            <Modal isCentered closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg={"none"}
                    backdropFilter={"auto"}
                    backdropBlur={"2px"}
                />
                <ModalContent boxShadow={"dark-lg"}>
                    <ModalHeader textAlign={"center"}>Add New Task</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet.
                    </ModalBody>
                    <ModalFooter gap={"20px"}>
                        <Button colorScheme={"teal"}>
                            Save
                        </Button>
                        <Button colorScheme={"red"} variant={"outline"} onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NewTask