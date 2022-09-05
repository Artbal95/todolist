import {ModalHeader as Header, Text} from "@chakra-ui/react";

const ModalHeader = (): JSX.Element => {
    return (
        <Header minH={"50px"}>
            <Text textAlign={"center"}>Create New Task</Text>
        </Header>
    )
}

export default ModalHeader