import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Text,
  Textarea
} from '@chakra-ui/react'

export function AdminHelpAnswerModal({ isOpen, changeIsOpen }) {
  return (
    <AlertDialog isOpen={isOpen} onClose={() => changeIsOpen(!isOpen)}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Título do chamado
          </AlertDialogHeader>

          <AlertDialogBody>
            <Text
              p={'2'}
              fontSize={'smaller'}
              bg={'blackAlpha.50'}
              textAlign={'justify'}
              borderRadius={'4'}
              mb={'4'}
            >
              Descrição do chamado. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Magnam reprehenderit ipsam error aperiam non!
              Recusandae fugit inventore repellat, omnis eum sed rerum. Illo
              nostrum error quaerat tenetur earum quod dolorum.
            </Text>

            <Textarea minH={'10vh'} />
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={() => changeIsOpen(!isOpen)}>Cancelar</Button>
            <Button
              colorScheme="green"
              onClick={() => changeIsOpen(!isOpen)}
              ml={3}
            >
              Responder
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
