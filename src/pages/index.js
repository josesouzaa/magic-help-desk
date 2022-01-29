import { Center, Button, VStack, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { useAuth } from '../contexts/authContext'

export default function Home() {
  const { signIn } = useAuth()
  return (
    <Center w={'100vw'} h={'100vh'} backgroundColor={'gray.200'}>
      <VStack>
        <Heading as={'h1'} fontSize={'5xl'} fontWeight={'bold'}>
          Magic Help Desk
        </Heading>

        <Link href="/user/teste" passHref>
          <Button colorScheme={'purple'} w={'100%'} onClick={signIn}>
            Login with Google
          </Button>
        </Link>
      </VStack>
    </Center>
  )
}
