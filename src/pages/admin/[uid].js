import { Container, SimpleGrid } from '@chakra-ui/react'
import { useAuth } from '../../contexts/authContext'
import { Header } from '../../components/Header'
import { Help as HelpComponent } from '../../components/Help'
import { NotAuthorized } from '../../components/NotAuthorized'
import dbConnect from '../../services/dbConnect'
import Help from '../../models/Help'

export default function AdminUid({ helps }) {
  const { session } = useAuth()

  if (!session.uid) return <NotAuthorized />
  return (
    <>
      <Header />
      <Container maxW={'container.lg'} mt={'70px'}>
        <SimpleGrid columns={['1', '1', '2']} spacing={'4'}>
          {helps.map((help) => (
            <HelpComponent key={help._id} help={help} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  await dbConnect()

  const helpsRaw = await Help.find()
  const helps = JSON.stringify(helpsRaw)

  return {
    props: {
      helps: JSON.parse(helps)
    }
  }
}
