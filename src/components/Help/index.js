import { Flex, Text, VStack } from '@chakra-ui/react'
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

      <VStack spacing={'0'} alignItems={'flex-start'}>
        <Text fontSize={'xs'}>ID: {help._id}</Text>
        <Text fontSize={'xs'}>Chamado de: {help.createdBy}</Text>
      </VStack>

      <Text
        p={'2'}
        bg={'blackAlpha.50'}
        textAlign={'justify'}
        borderRadius={'4'}
      >
        {help.description}
      </Text>

      {help.answer && (
        <VStack
          alignItems={'stretch'}
          bg={'blackAlpha.50'}
          borderRadius={'4'}
          p={'2'}
        >
          <Text textAlign={'justify'} borderRadius={'4'}>
            <Text as={'span'} fontWeight={'bold'} mr={'2'}>
              Resposta:
            </Text>
            {help.answer ? help.answer : 'Chamado em aberto...'}
          </Text>

          <Text fontSize={'xs'}>Respondido por: {help.answeredBy}</Text>
          <Text fontSize={'xs'}>
            Respondido em: {moment(help.answeredAt).format('ll')}
          </Text>
        </VStack>
      )}

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

      {help.answeredAt && (
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
            {moment(help.answeredAt).format('ll')}
          </Text>
        </Text>
      )}

      {session.isAdmin ? (
        <AdminHelpButtons help={help} />
      ) : (
        <UserHelpButtons help={help} />
      )}
    </Flex>
  )
}
