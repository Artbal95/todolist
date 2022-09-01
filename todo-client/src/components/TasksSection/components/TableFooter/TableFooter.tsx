import {Button, Flex, Td, Text, Tfoot, Tr} from "@chakra-ui/react";

import useAppDispatch from "../../../../hooks/useAppDispatch";
import useAppSelector from "../../../../hooks/useAppSelector";

import {paginationEffect} from "../../../../store/effects/auth.effects";

const TableFooter = (): JSX.Element => {

    const dispatch = useAppDispatch()

    const pagination = useAppSelector(state => state.auth.pagination)

    const handlerNextPage = () => {
        if(pagination.hasNextPage){
            dispatch(paginationEffect(pagination.page + 1, pagination.sort))
        }
    }

    const handlerPrevPage = () => {
        if(pagination.hasPrevPage){
            dispatch(paginationEffect(pagination.page - 1, pagination.sort))
        }
    }


    return (
        <Tfoot>
            <Tr>
                <Td textAlign={"right"} colSpan={4}>
                    <Flex alignItems={"center"} justifyContent={"flex-end"} gap={{base: "10px", md: "15px", xl: "20px"}}>
                        <Button variant={"secondary"} onClick={handlerPrevPage}>Prev</Button>
                        <Text fontSize={{base: "14px", md: "16px", xl: "18px"}}>{pagination.page} / {pagination.totalPages}</Text>
                        <Button variant={"secondary"} onClick={handlerNextPage}>Next</Button>
                    </Flex>
                </Td>
            </Tr>
        </Tfoot>
    )
}

export default TableFooter