import { Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Chamado from '../../components/User/Chamado'
import Header from '../../components/Header'

export default function Name() {
  return (
    <>
      <Header />
      <Container maxW={'container.lg'} mt={'70px'}>
        <SimpleGrid columns={['1', '1', '2']} spacing={'4'}>
          <Chamado />
          <Chamado />
          <Chamado />
          <Chamado />
        </SimpleGrid>
      </Container>
    </>
  )
}
