import {HTMLInputTypeAttribute} from "react";
import {Flex, Input, Text} from "@chakra-ui/react";

interface ICustomInputProps {
    type?: HTMLInputTypeAttribute
    label: string
    defaultValue?: string
    valueKey: string
    setValue: (value: (prev: any) => any) => void
}

const CustomInput = ({type = "text", label, defaultValue, valueKey, setValue}: ICustomInputProps): JSX.Element => {

    const handlerChangeInput = (value: string): void => {
        setValue(prevState =>({
            ...prevState,
            [valueKey]: value
        }))
    }

    return (
        <Flex flexDir={"column"} gap={{base: "6px", md: "8px", xl: "10px"}}>
            <Text fontSize={{base: "14px", md: "16px", xl: "18px"}}>{label}</Text>
            <Input type={type} borderColor={"pink"} boxShadow={"xl"} defaultValue={defaultValue} onChange={(e) => handlerChangeInput(e.target.value)}/>
        </Flex>
    )
}

export default CustomInput