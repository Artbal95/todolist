import { ModalBody as Body } from '@chakra-ui/react'

import CustomInput from '../../../../../constants/CustomInput/CustomInput'
import { CreateTodosType } from '../../../../../../types/todos.types'
import CustomTextArea from '../../../../../constants/CustomTextArea/CustomTextArea'

interface IModalBodyProps {
  setTaskForm: (value: (prevState: CreateTodosType) => CreateTodosType) => void
}

const ModalBody = ({ setTaskForm }: IModalBodyProps): JSX.Element => {
  return (
        <Body display={'flex'} flexDir={'column'} gap={'20px'}>
            <CustomInput label={'Name'} valueKey={'name'} setValue={setTaskForm}/>
            <CustomInput label={'Email'} valueKey={'email'} setValue={setTaskForm}/>
            <CustomTextArea label={'Task'} valueKey={'task'} setValue={setTaskForm}/>
        </Body>
  )
}

export default ModalBody
