import { ModalBody as Body } from '@chakra-ui/react'

import { IAuthLoginDTO } from '../../../../../../types/auth.types'

import CustomInput from '../../../../../constants/CustomInput/CustomInput'

interface IModalBodyProps {
  setAuthForm: (value: (prevState: IAuthLoginDTO) => IAuthLoginDTO) => void
}

const ModalBody = ({ setAuthForm }: IModalBodyProps): JSX.Element => {
  return (
        <Body display={'flex'} flexDir={'column'} gap={'20px'}>
            <CustomInput label={'Email'} valueKey={'email'} setValue={setAuthForm}/>
            <CustomInput type={'password'} label={'Password'} valueKey={'password'} setValue={setAuthForm}/>
        </Body>
  )
}

export default ModalBody
