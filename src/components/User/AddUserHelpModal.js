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
import { useAuth } from '../../contexts/authContext'
import { api } from '../../services/api'
import { useForm } from '../../hooks/useForm'

export function AddUserHelpModal({ isOpen, changeIsOpen }) {
  const { session } = useAuth()

  const { form, setForm, handleChange } = useForm({
    title: '',
    temperature: '',
    description: '',
    createdBy: session.email,
    createdByUid: session.uid
  })

  async function handleSumit(e) {
    e.preventDefault()
    await api.post('/help', form)
    changeIsOpen(!isOpen)
    setForm({
      ...form,
      title: '',
      temperature: '',
      description: ''
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={() => changeIsOpen(!isOpen)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Abrir novo chamado</ModalHeader>
        <ModalCloseButton />

        <form action="submit" onSubmit={handleSumit}>
          <ModalBody
            display={'flex'}
            flexDir={'column'}
            gap={'4'}
            onSubmit={handleSumit}
          >
            <FormControl isRequired>
              <FormLabel htmlFor="title">Título do chamado</FormLabel>
              <Input
                name="title"
                id="title"
                type={'text'}
                value={form.title}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="temperature">
                Selecione a temperatura
              </FormLabel>
              <Select
                name="temperature"
                id="temperature"
                placeholder="Selecione uma temperatura"
                value={form.temperature}
                onChange={handleChange}
              >
                <option>Baixa</option>
                <option>Média</option>
                <option>Alta</option>
                <option>Urgente</option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="description">Descrição do chamado</FormLabel>
              <Textarea
                name="description"
                id="description"
                value={form.description}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type="button" mr={3} onClick={() => changeIsOpen(!isOpen)}>
              Close
            </Button>
            <Button colorScheme={'green'} type="submit">
              Abrir chamado
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
