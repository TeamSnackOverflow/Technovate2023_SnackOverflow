import {React , useState} from 'react'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { NavLink , Link } from 'react-router-dom'

function Login( props ) {
  const [logInInfo , setLogInInfo] =useState({
    email: '',
    pass: ''
  })

  const changeHandler = (e) =>{
    setLogInInfo({
      ...logInInfo,
      [e.target.id]: e.target.value
    })
  }
  const submitHandler = () =>{
    console.log(logInInfo)
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
          <Heading fontSize={'4xl'}>Log in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder='Email' id='email' onChange={changeHandler} required/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder='Password' id='pass' onChange={changeHandler} required/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                >
                <Text>Dont have an account?</Text>
                <Link to='/signup'><Text color={'blue.400'}>Sign Up</Text></Link>
              </Stack>
              
                <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={submitHandler}>
                <NavLink to='/createProfile'>Log In</NavLink>
                </Button>
              
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Login