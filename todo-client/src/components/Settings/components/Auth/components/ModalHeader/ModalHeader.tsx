import { Box, ModalHeader as Header, Text } from '@chakra-ui/react'

interface IModalHeaderProps {
  authError: boolean
}

const ModalHeader = ({ authError }: IModalHeaderProps): JSX.Element => {
  return (
        <Header minH={'50px'}>
            <Text textAlign={'center'}>Sign In</Text>
            {authError && (
                <Box fontSize={{ base: '8px', md: '10px', xl: '12px' }} color={'red'}>
                    <Text textAlign={'center'}>1. All Fields are Required</Text>
                    <Text textAlign={'center'}>2. Please check the correctness of the credentials</Text>
                    <Text textAlign={'center'}>3. Password must not be less than 6 characters</Text>
                </Box>
            )}
        </Header>
  )
}

export default ModalHeader
