import { React } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Box,
    Flex,
    // Text,
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
    Progress,
    Tooltip,
  } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

function Navbar(props) {
    const Links = [{title:'Home' , path:'/'},{title:'Profile' , path:'/update'},{title:'About' , path:'/'},] 
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    <>
    <Box h={'10vh'} bg={'blue.400'} px={{base: 4 ,sm: 4, md: 12}} bgGradient='linear(to-r, green.200, blue.500)' >
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
          <HStack as={'nav'} spacing={18} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link.title} to={link.path}>
                <Button 
                color={'white'} 
                fontWeight={'600'} 
                fontSize={17} 
                px={2}
                py={1}
                variant={'ghost'}
                _hover={{
                  bgColor : 'none'
                }}
                >
                  {link.title}
                  </Button>
            </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          {!props.log.isLoggedIn && 
          <>
          <Button
            variant={'solid'}
            colorScheme={'teal'}
            size={'sm'}
            mr={4}
            fontSize={15} 
            px={2}
            py={1}
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
            fontSize={15} 
            px={2}
            py={1}
            ><NavLink to='/login'>
                Log In
            </NavLink>
          </Button>
          </>}

          { props.log.isLoggedIn && 
          <HStack spacing={6}>
          <Tooltip hasArrow bg={'white'} color={'gray.500'} label='Almost there! Just a little more for your next achievement' textAlign={'center'}>
          <Progress colorScheme='green' size='md' width={'200px'} height={'20px'} zIndex={50} value={60} shadow={'dark-lg'} />
          </Tooltip>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Avatar
                size={'md'}
                src={''}
                mr={-6}
                cursor={'pointer'}
              />
            </MenuButton>
            <MenuList>
              <MenuItem><NavLink to='/update'>Update Profile</NavLink></MenuItem>
              <MenuDivider />
              <NavLink to='/'><MenuItem onClick={ () => {props.log.setisLoggedIn(false)}}>Log Out</MenuItem></NavLink>
            </MenuList>
          </Menu>
          </HStack>}

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