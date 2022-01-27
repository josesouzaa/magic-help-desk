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
import React from 'react'

export default function EditModal({ isOpen, onChange }) {
  return (
    <AlertDialog isOpen={isOpen} onClose={() => onChange(!isOpen)}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Editar descrição
          </AlertDialogHeader>

          <AlertDialogBody>
            <Textarea height={'300px'}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              tempora recusandae assumenda vitae. Nemo cumque error deleniti ad
              deserunt distinctio dolore maiores ipsam necessitatibus illo,
              nobis ipsum adipisci ipsa excepturi.
            </Textarea>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={() => onChange(!isOpen)}>Cancelar</Button>
            <Button
              colorScheme="green"
              onClick={() => onChange(!isOpen)}
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
