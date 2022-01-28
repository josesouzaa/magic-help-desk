import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import { RiAddLine } from 'react-icons/ri'
import { AddUserHelpModal } from './AddUserHelpModal'

export function AddUserHelpButton() {
  const [addHelpIsOpen, setAddHelpIsOpen] = useState(false)

  return (
    <>
      <Button
        colorScheme={'purple'}
        mb={'4'}
        rightIcon={<RiAddLine />}
        onClick={() => setAddHelpIsOpen(!addHelpIsOpen)}
      >
        Abrir novo chamado
      </Button>

      <AddUserHelpModal isOpen={addHelpIsOpen} onChange={setAddHelpIsOpen} />
    </>
  )
}
