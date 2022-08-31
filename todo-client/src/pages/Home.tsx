import {Box} from "@chakra-ui/react";

import Title from "../components/Title/Title";
import scrollTheme from "../theme/scrollTheme";

const Home = (): JSX.Element => {
    return (
        <Box h={"100vh"} overflow={"auto"} sx={scrollTheme}>
            <Title />
        </Box>
    )
}

export default Home