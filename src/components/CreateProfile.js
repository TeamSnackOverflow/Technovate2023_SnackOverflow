import React, { useState } from 'react'
import { Flex , HStack , Box, Heading, Button, Stack, VStack , FormControl ,FormLabel , Input  } from '@chakra-ui/react'
import Map from './Map'
import 'leaflet/dist/leaflet.css'
import { NavLink } from 'react-router-dom'

function CreateProfile() {
  const [toPosition , setToPosition] = useState({
    lat: 19.060,
    lng: 72.877
  })
  const [fromPosition , setFromPosition] = useState({
    lat: 19.060,
    lng: 72.877
  })
  const [zoom , setZoom] = useState(12)

  const deviceLoc = () => {
    setZoom(20)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFromPosition({ lat: latitude, lng: longitude });
          console.log(fromPosition)
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }
  
  return (
    <Box as='div' h={'auto'} my={2} mx={12} p={8} >
      <Stack spacing={24}>
        <HStack>
          <Flex gap={40} alignItems={'center'} justifyContent={'space-around'}>
            <Box as='div' w={'600px'} h={'600px'}  >
              <Heading mb={4} textAlign={'center'} bgGradient='linear(to-r, blue.500 ,green.200 )'bgClip='text'>Select your Pick-up Point</Heading>
              <Map zoom={zoom} pos={{position: fromPosition , setPosition: setFromPosition}} />
            </Box>
            <Box as='div' w={'600px'} h={'600px'}   >
              <Heading mb={4} textAlign={'center'} bgGradient='linear(to-r, blue.500 ,green.200 )'bgClip='text'>Select your Drop-Off Point</Heading>
              <Map zoom={zoom} pos={{position: toPosition , setPosition: setToPosition}}/>
            </Box>
          </Flex>
          
        </HStack>
        <VStack>
        <FormControl id="firstName" isRequired>
          <FormLabel ml={'550px'}>Enter your Pick-Up Time</FormLabel>
            <Input w={'300px'} ml={'550px'} type="text" placeholder='hh:mm' id='time' name='Time' isRequired/>
          </FormControl>
        <HStack>
        <Button
              w={'200px'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              mt={4}
              ml={'40px'}
              onClick={deviceLoc}>
                    Get Device Location
            </Button>
            <Button
              w={'200px'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              mt={4}
              ml={12}
              onClick={deviceLoc}
              >
                <NavLink to='/findothers'>Find Others</NavLink>
            </Button>
        </HStack>
        </VStack>
        </Stack>
      </Box>
  )
}

export default CreateProfile