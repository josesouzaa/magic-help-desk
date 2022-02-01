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
import { useAuth } from '../../contexts/authContext'
import { useForm } from '../../hooks/useForm'
import { api } from '../../services/api'

export function AdminHelpAnswerModal({ isOpen, changeIsOpen, help }) {
  const { session } = useAuth()

  const { form, setForm, handleChange } = useForm({
    helpId: help._id,
    answer: '',
    answeredBy: session.email,
    answeredByUid: session.uid,
    answeredAt: ''
  })

  async function handleSubmit(e) {
    e.preventDefault()
    const { data } = await api.put('/admin', form)
    changeIsOpen(!isOpen)
    setForm({
      ...form,
      answer: '',
      answeredAt: ''
    })
  }

  return (
    <AlertDialog isOpen={isOpen} onClose={() => changeIsOpen(!isOpen)}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {help.title}
          </AlertDialogHeader>

          <form action="submit" onSubmit={handleSubmit}>
            <AlertDialogBody>
              <Text
                p={'2'}
                fontSize={'smaller'}
                bg={'blackAlpha.50'}
                textAlign={'justify'}
                borderRadius={'4'}
                mb={'4'}
              >
                {help.description}
              </Text>

              <Textarea
                minH={'10vh'}
                name="answer"
                onChange={handleChange}
                value={form.answer}
              />
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={() => changeIsOpen(!isOpen)}>Cancelar</Button>
              <Button type="submit" colorScheme="green" ml={3}>
                Responder
              </Button>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
