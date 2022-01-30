import { Flex, Text } from '@chakra-ui/react'
import { UserHelpButtons } from '../User/UserHelpButtons'
import { AdminHelpButtons } from '../Admin/AdminHelpButtons'
import { useAuth } from '../../contexts/authContext'
import moment from 'moment'

export function Help({ help }) {
  const { session } = useAuth()

  return (
    <Flex
      flexDir={'column'}
      bg={'blackAlpha.100'}
      borderRadius={'6'}
      p={'4'}
      gap={'4'}
    >
      <Text as={'h3'} fontSize={'2xl'} fontWeight={'bold'}>
        {help.title}
      </Text>

      <Text
        p={'2'}
        bg={'blackAlpha.50'}
        textAlign={'justify'}
        borderRadius={'4'}
      >
        Descrição do chamado. {help.description}
      </Text>

      <Text
        p={'2'}
        bg={'blackAlpha.50'}
        textAlign={'justify'}
        borderRadius={'4'}
      >
        <Text as={'span'} fontWeight={'bold'} mr={'2'}>
          Resposta:
        </Text>
        Descrição do chamado. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Magnam reprehenderit ipsam error aperiam non!
        Recusandae fugit inventore repellat, omnis eum sed rerum. Illo nostrum
        error quaerat tenetur earum quod dolorum.
      </Text>

      <Text
        as={'span'}
        display={'flex'}
        gap={'2'}
        fontWeight={'semibold'}
        color={'green.500'}
        fontSize={'smaller'}
      >
        Aberto em:
        <Text fontWeight={'normal'} color={'blackAlpha.900'}>
          {moment(help.createdAt).format('ll')}
        </Text>
      </Text>

      <Text
        as={'span'}
        display={'flex'}
        gap={'2'}
        fontWeight={'semibold'}
        color={'red.500'}
        fontSize={'smaller'}
      >
        Fechado em:
        <Text fontWeight={'normal'} color={'blackAlpha.900'}>
          {moment(help.updatedAt).format('ll')}
        </Text>
      </Text>

      {session.isAdmin ? <AdminHelpButtons /> : <UserHelpButtons />}
    </Flex>
  )
}
