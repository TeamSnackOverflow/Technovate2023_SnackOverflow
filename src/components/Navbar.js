import { React } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Box,
    Flex,
    Text,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    Stack,
  } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

function Navbar(props) {
    const Links = [{title:'Home' , path:'/'},{title:'Find Carpoolers' , path:'/'},{title:'About' , path:'/'},] 
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    <>
    <Box h={'10vh'} bg={'blue.400'} px={{base: 4 ,sm: 4, md: 12}}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          variant={'ghost'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          _hover={{variant: 'ghost'}}
          _active={{variant: 'ghost'}}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box>Logo</Box>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link.title} to={link.path}>
                <Text color={'white'} fontWeight={'600'}>{link.title}</Text>
            </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Button
            variant={'solid'}
            colorScheme={'teal'}
            size={'sm'}
            mr={4}
            >
            <NavLink to='/signup'>
                Sign Up
            </NavLink>
          </Button>
          <Button
            variant={'solid'}
            colorScheme={'teal'}
            size={'sm'}
            mr={4}
            ><NavLink to='/login'>
                Log In
            </NavLink>
          </Button>

          { props.log.isLoggedIn && <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Avatar
                size={'sm'}
                src={''}
              />
            </MenuButton>
            <MenuList>
              <MenuItem>View Profile</MenuItem>
              <MenuItem>Update Profile</MenuItem>
              <MenuDivider />
              <NavLink to='/'><MenuItem onClick={ () => {props.log.setisLoggedIn(false)}}>Log Out</MenuItem></NavLink>
            </MenuList>
          </Menu>}

        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
    </>
  )
}

export default Navbar