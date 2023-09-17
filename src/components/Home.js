import { Box, Flex, HStack, Heading , Image , Stack, Text, Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import React from 'react'


function Home( props ) {
  return (
    <>
      <Box h={'80%'} my={12} mx={12} p={8} >
        <HStack>
          <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
            <Box w={'50%'} h={'full'} >
              <Image as='img' className='faderight' src={require('../landingimage.jpg')} alt='landing-image' h={'full'}/>
            </Box>
            <Box w={'50%'} px={12}>
              <Stack spacing={6} align={'center'}>
                <Heading className='fadeup' fontSize={'48px'} lineHeight={'65px'} bgGradient='linear(to-r,blue.500 , green.200)' bgClip='text'>Heading</Heading>
                <Text fontSize={'lg'} className='fadeup'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Button
                  variant={'solid'}
                  bgColor={'blue.400'}
                  _hover={{
                    bgColor: 'blue.500'
                  }}
                  color={'white'}
                  size={'md'}
                  w={'125px'}
                  padding={4}
                  className='fadeup'
                >
                  <NavLink to={ props.log.isLoggedIn ? '/location' : '/signup'}>
                    Find Others
                  </NavLink>
                </Button>
              </Stack>
            </Box>
          </Flex>
        </HStack>
      </Box>
    </>
  )
}

export default Home