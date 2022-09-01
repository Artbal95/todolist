import {Box, Flex} from "@chakra-ui/react";
import NewTask from "./components/NewTask/NewTask";
import Auth from "./components/Auth/Auth";

const Settings = (): JSX.Element => {
    return (
        <Flex alignItems={"center"} justifyContent={"space-between"} mb={"50px"}>
            <NewTask />
            <Auth />
        </Flex>
    )
}

export default Settings