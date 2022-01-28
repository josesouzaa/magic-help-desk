import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea
} from '@chakra-ui/react'

export function AddUserHelpModal({ isOpen, onChange }) {
  return (
    <Modal isOpen={isOpen} onClose={() => onChange(!isOpen)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Abrir novo chamado</ModalHeader>
        <ModalCloseButton />

        <ModalBody display={'flex'} flexDir={'column'} gap={'4'}>
          <FormControl isRequired>
            <FormLabel htmlFor="title">Título do chamado</FormLabel>
            <Input id="title" type={'text'} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="temperature">Selecione a temperatura</FormLabel>
            <Select id="temperature" placeholder="Selecione uma temperatura">
              <option>Baixa</option>
              <option>Média</option>
              <option>Alta</option>
              <option>Urgente</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="description">Descrição do chamado</FormLabel>
            <Textarea id="description" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={() => onChange(!isOpen)}>
            Close
          </Button>
          <Button colorScheme={'green'}>Abrir chamado</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
