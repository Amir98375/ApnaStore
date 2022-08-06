import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Box,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';


export const ResetPassword=()=>{
  const [password,setPassword] = useState("");
  const [cpassword,setC] = useState("");
 const {token}  = useSelector((s)=>s.login);
 const navigate = useNavigate();
  const handleReset = ()=>{
    // console.log(password,cpassword)
    const data  = {
      "password":password,
      "password_confirmation":cpassword
    }
    axios.post("https://amir-project.herokuapp.com/api/user/changepassword",{
      body:JSON.stringify(data),
      headers:{
        "Authorization" : `Bearer ${token}`
    }
    })
    .then((res)=>{
      alert("Password Changed successfully");
      navigate("/");

    })
    .catch((err)=>{
      alert(err.message);
    })
  }

  // console.log(token)
    return (
        <Box>
             <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Enter new password
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            _placeholder={{ color: 'gray.500' }}
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" onChange={(e)=>setC(e.target.value)} />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            onClick={handleReset}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
        </Box>
    )
}