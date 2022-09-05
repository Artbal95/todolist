import {useEffect} from "react";
import {Box} from "@chakra-ui/react";

import {getAllTodosEffect} from "../store/effects/todos.effects";

import useAppDispatch from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";

import Title from "../components/Title/Title";
import Settings from "../components/Settings/Settings";
import TasksSection from "../components/TasksSection/TasksSection";
import Loading from "../components/constants/Loading/Loading";
import NoTodo from "../components/NoTodo/NoTodo";

import scrollTheme from "../theme/scrollTheme";

const Home = (): JSX.Element => {

    const dispatch = useAppDispatch()

    const {todos, todosLoading} = useAppSelector(state => state.todo)

    useEffect(() => {
        if (!todos.length) {
            dispatch(getAllTodosEffect())
        }
    }, [])

    return (
        <Box px={{base: "15px", md: "20px", xl: "50px"}} h={"100vh"} overflow={"auto"} sx={scrollTheme}>
            <Title/>
            <Settings/>
            {
                todosLoading ? <Loading/> :
                    !todos.length ? <NoTodo/> :
                        <TasksSection/>
            }
        </Box>
    )
}

export default Home