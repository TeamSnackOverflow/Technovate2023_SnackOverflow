import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

function SignUpuser( props ) {
  const [showPassword , setShowPassword] = useState(false)
  const [signUpInfo , setSignUpInfo] =useState({
    firstName: '',
    lastName: '',
    email: '',
    pass: ''
  })

  const changeHandler = (e) =>{
    setSignUpInfo({
      ...signUpInfo,
      [e.target.id]: e.target.value
    })
  }
  const submitHandler = () =>{
    console.log(signUpInfo)
    props.log.setisLoggedIn(true)
    console.log(props.log.isLoggedIn)
  }
  return (
    <Flex
    minH={'90vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'} textAlign={'center'} bgGradient='linear(to-r, green.200, blue.500)'bgClip='text'>
          Sign up
        </Heading>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>

          <HStack>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" placeholder='First Name' value={signUpInfo.firstName} id='firstName' name='Name' onChange={changeHandler} isRequired/>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input type="text" placeholder='Last Name' value={signUpInfo.lastName} id='lastName' name='last_name' onChange={changeHandler} isRequired/>
              </FormControl>
            </Box>
          </HStack>

          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder='Email' value={signUpInfo.email} id='email' name='Email' onChange={changeHandler} isRequired/>
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} placeholder='Password' id='pass' name='Password' value={signUpInfo.pass} onChange={changeHandler} isRequired/>
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() => setShowPassword((showPassword) => !showPassword)}
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Stack spacing={10} pt={2}>
            
              <Button
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={submitHandler}>
              <NavLink to='/createProfile'>Sign up</NavLink>
              </Button>
            
          </Stack>
          <Stack pt={6}>
            <Text align={'center'}>
              Already a user? <NavLink to='/login'><Link color={'blue.400'}>Login</Link></NavLink>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}

export default SignUpuser