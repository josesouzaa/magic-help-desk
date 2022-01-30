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
import { useState } from 'react'
import { useAuth } from '../../contexts/authContext'
import { api } from '../../services/api'

export function AddUserHelpModal({ isOpen, onChange }) {
  const { session } = useAuth()

  const [form, setForm] = useState({
    title: '',
    temperature: '',
    description: '',
    createdBy: session.email,
    createdByUid: session.uid
  })

  function handleChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value
    })
  }

  async function handleSumit(e) {
    e.preventDefault()
    const response = await api.post('/help', form)
    const data = response.data
    onChange(!isOpen)
    setForm({
      ...form,
      title: null,
      temperature: null,
      description: null
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={() => onChange(!isOpen)}>
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
            <Button type="button" mr={3} onClick={() => onChange(!isOpen)}>
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
