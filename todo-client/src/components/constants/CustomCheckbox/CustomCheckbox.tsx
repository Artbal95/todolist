import {Checkbox, CheckboxProps, Flex, Input, Text} from "@chakra-ui/react";
import {CheckIcon, CloseIcon} from "@chakra-ui/icons";

interface ICustomCheckboxProps extends CheckboxProps {
    label: string
    isDefaultCheck?: boolean
    valueKey: string
    setValue: (value: (prev: any) => any) => void
}

const CustomCheckbox = ({label, isDefaultCheck, valueKey, setValue, ...rest}: ICustomCheckboxProps): JSX.Element => {

    const handlerChangeCheckBox = (value: boolean): void => {
        setValue(prevState => ({
            ...prevState,
            [valueKey]: value
        }))
    }

    return (
        <Flex flexDir={"column"} gap={{base: "6px", md: "8px", xl: "10px"}}>
            <Text fontSize={{base: "14px", md: "16px", xl: "18px"}}>{label}</Text>
            <Checkbox
                w={"fit-content"}
                {...rest}
                icon={<CheckIcon/>}
                colorScheme={"green"}
                border={"1px solid orange"}
                defaultChecked={isDefaultCheck}
                onChange={(e) => handlerChangeCheckBox(e.target.checked)}
            />
        </Flex>
    )
}

export default CustomCheckbox