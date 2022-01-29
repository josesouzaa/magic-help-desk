import { Center, Button, VStack, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../contexts/authContext'

import dbConnect from '../services/dbConnect'
import Admin from '../models/Admin'

export default function Home() {
  const { signIn, session } = useAuth()
  const route = useRouter()

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

export async function getServerSideProps() {
  await dbConnect()

  const adminExists = await Admin.find({ email: 'josee.souzaaa@gmail.com' })

  if (adminExists.length === 0) {
    const newAdmin = new Admin({ email: 'josee.souzaaa@gmail.com' })
    await newAdmin.save()
  }

  return {
    props: {
      admin: adminExists ? true : false
    }
  }
}
