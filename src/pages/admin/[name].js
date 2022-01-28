import { Container, SimpleGrid } from '@chakra-ui/react'
import { AdminHelp } from '../../components/Admin/AdminHelp'
import { Header } from '../../components/Header'

export default function AdminName() {
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
