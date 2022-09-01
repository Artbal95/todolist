import {Checkbox, Tbody, Td, Tr} from "@chakra-ui/react";
import {CheckIcon, CloseIcon} from "@chakra-ui/icons";

import useAppSelector from "../../../../hooks/useAppSelector";

const TableBody = (): JSX.Element => {

    const {todos} = useAppSelector(state => state.todo)
    const {isLoggedIn} = useAppSelector(state => state.auth)

    const colBody = (label: string): JSX.Element => <Td fontSize={{base: "14px", md: "16px", xl: "18px"}}>{label}</Td>

    return (
        <Tbody>
            {todos.map(({_id, name, email, task, status}) => (
                <Tr key={_id}>
                    {colBody(name)}
                    {colBody(email)}
                    {colBody(task)}
                    <Td textAlign={"center"}>
                        <Checkbox icon={status ? <CheckIcon /> : <CloseIcon />} colorScheme={status ? "green" : "red"} defaultChecked={true} isReadOnly={!isLoggedIn} />
                    </Td>
                </Tr>
            ))}
        </Tbody>
    )
}

export default TableBody