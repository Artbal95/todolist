import {Box} from "@chakra-ui/react";

import Title from "../components/Title/Title";
import scrollTheme from "../theme/scrollTheme";
import Settings from "../components/Settings/Settings";
import TasksSection from "../components/TasksSection/TasksSection";
import useAppDispatch from "../hooks/useAppDispatch";
import {useEffect} from "react";
import useAppSelector from "../hooks/useAppSelector";
import {getAllTodosEffect} from "../store/effects/todos.effects";
import Loading from "../components/constants/Loading/Loading";

const Home = (): JSX.Element => {

    const dispatch = useAppDispatch()

    const {todos, todosLoading} = useAppSelector(state => state.todo)

    useEffect(() => {
        if(!todos.length){
            dispatch(getAllTodosEffect())
        }
    }, [])

    return (
        <Box px={{base: "15px", md: "20px", xl: "50px"}} h={"100vh"} overflow={"auto"} sx={scrollTheme}>
            <Title />
            <Settings />
            {
                todosLoading ? <Loading /> : <TasksSection />

            }
        </Box>
    )
}

export default Home