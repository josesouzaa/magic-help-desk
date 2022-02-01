import { useState } from 'react'
import { Button, HStack } from '@chakra-ui/react'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'
import { UserHelpDeleteModal } from './UserHelpDeleteModal'
import { UserHelpEditModal } from './UserHelpEditModal'

export function UserHelpButtons({ help }) {
  const [deleteIsOpen, setDeleteIsOpen] = useState(false)
  const [editIsOpen, setEditIsOpen] = useState(false)

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
          onClick={() => setEditIsOpen(true)}
          disabled={help.answeredAt ? true : false}
        >
          Editar
        </Button>
      </HStack>

      <UserHelpDeleteModal
        isOpen={deleteIsOpen}
        changeIsOpen={setDeleteIsOpen}
        help={help}
      />
      <UserHelpEditModal
        isOpen={editIsOpen}
        changeIsOpen={setEditIsOpen}
        help={help}
      />
    </>
  )
}
