import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react'

export function AdminHelpDeleteModal({ isOpen, changeIsOpen }) {
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
            <Button
              colorScheme="red"
              onClick={() => changeIsOpen(!isOpen)}
              ml={3}
            >
              Deletar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
