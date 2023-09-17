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
                <Heading className='fadeup' fontSize={'48px'} lineHeight={'65px'} bgGradient='linear(to-r, green.200,blue.500 )' bgClip='text' textAlign={'center'}>Unlock a Smarter Way to Commute</Heading>
                <Text fontSize={'lg'} className='fadeup' textAlign={"center"}>Are you tired of facing the daily grind of traffic jams, high gas prices, and the endless search for parking spots? CarpoolConnect is here to revolutionize your daily commute! Join our community of like-minded commuters and experience the benefits of carpooling like never before. Embrace a sustainable, stress-free, and cost-effective way to get where you need to go.</Text>
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