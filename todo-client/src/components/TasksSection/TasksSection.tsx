import {Box, Table} from "@chakra-ui/react";

import TableHeader from "./components/TableHeader/TableHeader";
import TableBody from "./components/TableBody/TableBody";
import TableFooter from "./components/TableFooter/TableFooter";

const TasksSection = (): JSX.Element => {

    return (
        <Box overflowX={"auto"}>
            <Table variant={"striped"} colorScheme={"cyan"}>
                <TableHeader />
                <TableBody />
                <TableFooter />
            </Table>
        </Box>
    )
}

export default TasksSection