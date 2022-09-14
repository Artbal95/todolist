import { ModalBody as Body } from '@chakra-ui/react'

import { ITodo } from '../../../../../../../../types/todos.types'

import CustomInput from '../../../../../../../constants/CustomInput/CustomInput'
import CustomTextArea from '../../../../../../../constants/CustomTextArea/CustomTextArea'
import CustomCheckbox from '../../../../../../../constants/CustomCheckbox/CustomCheckbox'

interface IModalBodyProps {
  todo: ITodo
  setTaskForm: (value: (prevState: ITodo) => ITodo) => void
}

const ModalBody = ({ todo, setTaskForm }: IModalBodyProps): JSX.Element => {
  const {
    name,
    email,
    task,
    status
  } = todo

  return (
        <Body display={'flex'} flexDir={'column'} gap={'20px'}>
            <CustomInput label={'Name'} valueKey={'name'} setValue={setTaskForm} defaultValue={name} isReadOnly/>
            <CustomInput label={'Email'} valueKey={'email'} setValue={setTaskForm} defaultValue={email} isReadOnly/>
            <CustomTextArea label={'Task'} valueKey={'task'} setValue={setTaskForm} defaultValue={task}/>
            <CustomCheckbox label={'Status'} valueKey={'status'} setValue={setTaskForm} isDefaultCheck={status} />
        </Body>
  )
}

export default ModalBody
