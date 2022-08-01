import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Box,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  
  import { useDispatch, useSelector } from 'react-redux';
  
import { login} from '../Redux/Login/Actions';
  
  export const SignInCard=()=>{
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {isAuthenticate,token} = useSelector((store)=>store.login)
  
  const dispatch = useDispatch((store)=>store.login);
  const navigate = useNavigate()
  const handleLogin = ()=>{
    const loginCridential = {
      email,
      password
    }
    // console.log(loginCridential);
    dispatch(login(loginCridential,dispatch));
  }
  
  // console.log(isAuthenticate,"token",token);
  if(isAuthenticate){navigate('/')}
    return (
        <Box>
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e)=>setEmail(e.target.value)}/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={(e)=>setPassword(e.target.value)}/>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'} to="/login">Forgot password?</Link>
              <Link color={'blue.500'} to="/signin">Don't have an account</Link>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'} onClick={handleLogin}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
   
    </Stack>
        </Box>
    )
  }