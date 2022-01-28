import {
  Box,
  Container,
  HStack,
  IconButton,
  Text,
  Button
} from '@chakra-ui/react'
import { BiLogOut, BiUser } from 'react-icons/bi'
import Link from 'next/link'

export function Header() {
  return (
    <Box
      w={'100%'}
      h={'50px'}
      backgroundColor={'blackAlpha.900'}
      position={'fixed'}
      top={'0'}
      left={'0'}
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
            Username
          </Text>

          <IconButton
            colorScheme={'purple'}
            fontSize={'20px'}
            borderRadius={'full'}
            size={'sm'}
            cursor={'pointer'}
            icon={<BiUser />}
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
