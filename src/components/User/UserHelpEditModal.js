import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Textarea
} from '@chakra-ui/react'

export function UserHelpEditModal({ isOpen, changeIsOpen }) {
  return (
    <AlertDialog isOpen={isOpen} onClose={() => changeIsOpen(!isOpen)}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Editar descrição
          </AlertDialogHeader>

          <AlertDialogBody>
            <Textarea minH={'10vh'} />
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={() => changeIsOpen(!isOpen)}>Cancelar</Button>
            <Button
              colorScheme="green"
              onClick={() => changeIsOpen(!isOpen)}
              ml={3}
            >
              Confirmar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
