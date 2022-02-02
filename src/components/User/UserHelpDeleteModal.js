import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react'
import { api } from '../../services/api'

export function UserHelpDeleteModal({ isOpen, changeIsOpen, help }) {
  async function handleRemove() {
    await api.delete('/help', { helpId: help._id })
    changeIsOpen(!isOpen)
  }

  return (
    <AlertDialog isOpen={isOpen} onClose={() => changeIsOpen(!isOpen)}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Deletar chamado
          </AlertDialogHeader>

          <AlertDialogBody>
            Você tem certeza que deseja deletar esse chamado?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={() => changeIsOpen(!isOpen)}>Cancelar</Button>
            <Button colorScheme="red" onClick={handleRemove} ml={3}>
              Deletar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
