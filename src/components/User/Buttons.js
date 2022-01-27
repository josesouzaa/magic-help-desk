import { Button, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'

export default function Buttons() {
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
        >
          Editar
        </Button>
      </HStack>

      <DeleteModal isOpen={deleteIsOpen} onChange={setDeleteIsOpen} />
      <EditModal isOpen={editIsOpen} onChange={setEditIsOpen} />
    </>
  )
}
