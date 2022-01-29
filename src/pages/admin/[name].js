import { Container, SimpleGrid } from '@chakra-ui/react'
import { useAuth } from '../../contexts/authContext'
import { Header } from '../../components/Header'
import { AdminHelp } from '../../components/Admin/AdminHelp'
import { NotAuthorized } from '../../components/NotAuthorized'

export default function AdminName() {
  const { session } = useAuth()

  if (!session.id) return <NotAuthorized />
  return (
    <>
      <Header />
      <Container maxW={'container.lg'} mt={'70px'}>
        <SimpleGrid columns={['1', '1', '2']} spacing={'4'}>
          <AdminHelp />
          <AdminHelp />
          <AdminHelp />
          <AdminHelp />
        </SimpleGrid>
      </Container>
    </>
  )
}
