import {
  Box,
  Container,
  HStack,
  IconButton,
  Text,
  Menu,
  MenuButton,
  MenuList,
  Button
} from '@chakra-ui/react'
import { BiLogOut, BiUser } from 'react-icons/bi'
import Link from 'next/link'

export default function Header() {
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
            fontSize={'2xl'}
            fontWeight={'semibold'}
            cursor={'pointer'}
            color={'purple.200'}
          >
            Magic Help Desk
          </Text>
        </Link>

        <HStack>
          <Text as={'span'} color={'whiteAlpha.900'}>
            Username
          </Text>

          <Menu>
            <MenuButton>
              <IconButton
                as={'span'}
                colorScheme={'purple'}
                fontSize={'20px'}
                borderRadius={'full'}
                size={'sm'}
                icon={<BiUser />}
              />
            </MenuButton>

            <MenuList bg={'blackAlpha.900'} border={'none'} px={'2'}>
              <Button
                colorScheme={'purple'}
                w={'100%'}
                rightIcon={<BiLogOut />}
              >
                Logout
              </Button>
            </MenuList>
          </Menu>
        </HStack>
      </Container>
    </Box>
  )
}
