import {Box, Text} from "@chakra-ui/react";

const Title = (): JSX.Element => {
    return (
        <Box my={"20px"} textAlign={"center"}>
            <Text fontSize={{base: "20px", md: "30px", xl: "40px"}}>ToDo List</Text>
        </Box>
    )
}

export default Title