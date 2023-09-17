import { Box, Button, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

function Fare() {
    let x= Math.floor(Math.random()*(200)) + 100
    return (
    <Box m={24}>
        <VStack spacing={6}>
        <Heading textAlign={'center'}>Your Fare for this ride is : Rs.{x}</Heading>
        <Button
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}> Pay via RazorPay
              </Button>
        </VStack>
    </Box>
  )
}

export default Fare