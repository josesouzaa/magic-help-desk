import { Box, Container, HStack, Text, Button, Avatar } from '@chakra-ui/react'
import { BiLogOut } from 'react-icons/bi'
import Link from 'next/link'
import { useAuth } from '../../contexts/authContext'

export function Header() {
  const { session } = useAuth()

  return (
    <Box
      w={'100%'}
      h={'50px'}
      backgroundColor={'blackAlpha.900'}
      position={'fixed'}
      top={'0'}
      left={'0'}
      zIndex={1000}
    >
      <Container
        maxW={'container.lg'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        h={'100%'}
      >
        <Link href="/" passHref>
          <Text
            as={'h1'}
            fontSize={['lg', 'lg', '2xl']}
            fontWeight={'semibold'}
            cursor={'pointer'}
            color={'purple.200'}
            display={['none', 'block']}
          >
            Magic Help Desk
          </Text>
        </Link>

        <HStack w={['100%', 'auto']}>
          <Text as={'span'} color={'whiteAlpha.900'} flexGrow={'2'}>
            {session.name}
          </Text>

          <Avatar
            size={'sm'}
            name={session.name}
            src={session ? session.photo : 'https://bit.ly/broken-link'}
          />

          <Button
            variant={'outline'}
            colorScheme={'purple'}
            size={'sm'}
            rightIcon={<BiLogOut />}
          >
            Logout
          </Button>
        </HStack>
      </Container>
    </Box>
  )
}
