import { Flex, Text } from '@chakra-ui/react'
import Buttons from './Buttons'

export default function Chamado() {
  return (
    <Flex
      flexDir={'column'}
      bg={'blackAlpha.100'}
      borderRadius={'6'}
      p={'4'}
      gap={'4'}
    >
      <Text as={'h3'} fontSize={'2xl'} fontWeight={'bold'}>
        Título do chamado
      </Text>

      <Text
        p={'2'}
        bg={'blackAlpha.50'}
        textAlign={'justify'}
        borderRadius={'4'}
      >
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
          01/01/2022
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
          01/01/2022
        </Text>
      </Text>

      <Buttons />
    </Flex>
  )
}
