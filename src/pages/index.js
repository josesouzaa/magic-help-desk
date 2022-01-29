import { Center, Button, VStack, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../contexts/authContext'

export default function Home() {
  const { signIn, session } = useAuth()
  const route = useRouter()
  console.log(session)

  useEffect(() => {
    if (session.id && session.isAdmin) {
      route.push(`/admin/${session.id}`)
    } else if (session.id && session.isAdmin === false) {
      route.push(`/user/${session.id}`)
    }
  }, [route, session])

  return (
    <Center w={'100vw'} h={'100vh'} backgroundColor={'gray.200'}>
      <VStack>
        <Heading as={'h1'} fontSize={'5xl'} fontWeight={'bold'}>
          Magic Help Desk
        </Heading>

        <Button colorScheme={'purple'} w={'100%'} onClick={signIn}>
          Login with Google
        </Button>
      </VStack>
    </Center>
  )
}
