import { Flex, Text, Textarea } from '@chakra-ui/react'

interface ICustomTextAreaProps {
  label: string
  defaultValue?: string
  valueKey: string
  setValue: (arg: (prevState: any) => any) => void
}

const CustomTextArea = ({ label, defaultValue, valueKey, setValue }: ICustomTextAreaProps): JSX.Element => {
  const handlerChangeArea = (value: string): void => {
    setValue(prevState => ({
      ...prevState,
      [valueKey]: value
    }))
  }

  return (
        <Flex flexDir={'column'} gap={{ base: '6px', md: '8px', xl: '10px' }}>
            <Text fontSize={{ base: '14px', md: '16px', xl: '18px' }}>{label}</Text>
            <Textarea borderColor={'pink'} defaultValue={defaultValue} onChange={(e) => handlerChangeArea(e.target.value)}/>
        </Flex>
  )
}

export default CustomTextArea
