import { Button, ModalFooter as Footer } from '@chakra-ui/react'

interface IModalFooterProps {
  handlerSubmit: () => void
  onClose: () => void
}

const ModalFooter = ({ handlerSubmit, onClose }: IModalFooterProps): JSX.Element => {
  return (
        <Footer gap={'20px'}>
            <Button colorScheme={'teal'} onClick={handlerSubmit}>
                Save
            </Button>
            <Button colorScheme={'red'} variant={'outline'} onClick={onClose}>
                Cancel
            </Button>
        </Footer>
  )
}

export default ModalFooter
