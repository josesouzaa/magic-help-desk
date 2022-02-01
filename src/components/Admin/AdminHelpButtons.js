import { useState } from 'react'
import { Button, HStack } from '@chakra-ui/react'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'
import { AdminHelpAnswerModal } from './AdminHelpAnswerModal'
import { AdminHelpDeleteModal } from './AdminHelpDeleteModal'

export function AdminHelpButtons({ help }) {
  const [deleteIsOpen, setDeleteIsOpen] = useState(false)
  const [answerIsOpen, setAnswerIsOpen] = useState(false)

  return (
    <>
      <HStack>
        <Button
          bg={'red.500'}
          w={'100%'}
          sx={{ _hover: { background: 'red.600' } }}
          color={'whiteAlpha.900'}
          rightIcon={<BiTrash fontSize={'20px'} />}
          onClick={() => setDeleteIsOpen(true)}
        >
          Excluir
        </Button>

        <Button
          w={'100%'}
          colorScheme={'purple'}
          rightIcon={<AiOutlineEdit fontSize={'20px'} />}
          onClick={() => setAnswerIsOpen(true)}
          disabled={help.answeredAt ? true : false}
        >
          Responder
        </Button>
      </HStack>

      <AdminHelpDeleteModal
        isOpen={deleteIsOpen}
        changeIsOpen={setDeleteIsOpen}
        help={help}
      />
      <AdminHelpAnswerModal
        isOpen={answerIsOpen}
        changeIsOpen={setAnswerIsOpen}
        help={help}
      />
    </>
  )
}
