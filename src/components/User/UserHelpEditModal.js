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
import { useForm } from '../../hooks/useForm'
import { api } from '../../services/api'

export function UserHelpEditModal({ isOpen, changeIsOpen, help }) {
  const { form, setForm, handleChange } = useForm({
    helpId: help._id,
    description: ''
  })

  async function handleSubmit(e) {
    e.preventDefault()
    const { data } = await api.put('/help', form)
    changeIsOpen(!isOpen)
    setForm({
      ...form,
      description: ''
    })
  }

  return (
    <AlertDialog isOpen={isOpen} onClose={() => changeIsOpen(!isOpen)}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Editar descrição
          </AlertDialogHeader>

          <form action="submit" onSubmit={handleSubmit}>
            <AlertDialogBody>
              <Textarea
                minH={'10vh'}
                name="description"
                value={form.description}
                onChange={handleChange}
              />
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={() => changeIsOpen(!isOpen)}>Cancelar</Button>
              <Button
                type="submit"
                colorScheme="green"
                onClick={() => changeIsOpen(!isOpen)}
                ml={3}
              >
                Confirmar
              </Button>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
