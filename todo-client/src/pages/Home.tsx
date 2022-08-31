import {Box} from "@chakra-ui/react";

import Title from "../components/Title/Title";
import scrollTheme from "../theme/scrollTheme";
import Settings from "../components/Settings/Settings";

const Home = (): JSX.Element => {
    return (
        <Box h={"100vh"} overflow={"auto"} sx={scrollTheme}>
            <Title />
            <Settings />
        </Box>
    )
}

export default Home