import { Container, SimpleGrid } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { UserHelp } from '../../components/User/UserHelp'
import { AddUserHelpButton } from '../../components/User/AddUserHelpButton'
import { useAuth } from '../../contexts/authContext'
import { NotAuthorized } from '../../components/NotAuthorized'

export default function UserName() {
  const { session } = useAuth()

  if (!session.id) return <NotAuthorized />
  return (
    <>
      <Header />
      <Container maxW={'container.lg'} mt={'70px'}>
        <AddUserHelpButton />
        <SimpleGrid columns={['1', '1', '2']} spacing={'4'}>
          <UserHelp />
          <UserHelp />
          <UserHelp />
          <UserHelp />
        </SimpleGrid>
      </Container>
    </>
  )
}
