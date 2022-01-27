import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react'
import React from 'react'

export default function DeleteModal({ isOpen, onChange }) {
  return (
    <AlertDialog isOpen={isOpen} onClose={() => onChange(!isOpen)}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Deletar chamado
          </AlertDialogHeader>

          <AlertDialogBody>
            Você tem certeza que deseja deletar esse chamado?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={() => onChange(!isOpen)}>Cancelar</Button>
            <Button colorScheme="red" onClick={() => onChange(!isOpen)} ml={3}>
              Deletar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
