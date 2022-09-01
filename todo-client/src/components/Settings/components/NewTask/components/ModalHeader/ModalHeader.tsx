import {Box, ModalHeader as Header, Text} from "@chakra-ui/react";

interface IModalHeaderProps {
    formError: boolean
}

const ModalHeader = ({formError}: IModalHeaderProps): JSX.Element => {
    return (
        <Header minH={"50px"}>
            <Text textAlign={"center"}>Create New Task</Text>
            {formError && (
                <Box fontSize={{base: "8px", md: "10px", xl: "12px"}} color={"red"}>
                    <Text textAlign={"center"}>1. All Fields are Required</Text>
                    <Text textAlign={"center"}>2. Please check the correctness of the data</Text>
                </Box>
            )}
        </Header>
    )
}

export default ModalHeader