import { Button, Center, Heading, VStack } from '@chakra-ui/react'
import Link from 'next/link'

export function NotAuthorized() {
  return (
    <Center h={'100vh'} backgroundColor={'gray.200'}>
      <VStack spacing={'4'}>
        <Heading>Realize seu login para continuar</Heading>
        <Link href={'/'} passHref>
          <Button colorScheme={'purple'}>Voltar para a home</Button>
        </Link>
      </VStack>
    </Center>
  )
}
