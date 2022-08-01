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
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link, useNavigate } from 'react-router-dom';
  import { useDispatch, useSelector } from 'react-redux';
  import { registerUser, signupFailure, signupSuccess } from '../Redux/Signup/Actions';
  export const SignupCard=()=> {
    const [showPassword, setShowPassword] = useState(false);
    const [fullName,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cPassword,setCpassword] = useState("");
    const navigate =useNavigate()
    const {isSignUpSuccess,signUpLoading}= useSelector((state)=>state.signup)
    // console.log('skdfjlasdf',signUpLoading);
    const dispatch = useDispatch((s)=>s.signup);
  
    const handleSignup =()=>{
          const userData = {
          name:fullName,
          email:email,
          password:password,
          password_confirmation:cPassword,
          tc:true
          
        }
        // console.log(userData);
        dispatch(registerUser(userData));
      }
      
      if(isSignUpSuccess){
        navigate('/login');
      }
  
    // console.log(isSignUpSuccess,'after');
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
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
                    <FormLabel>Full Name</FormLabel>
                    <Input type="text" onChange={(e)=>setName(e.target.value)}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Email</FormLabel>
                    <Input type="email"  onChange={(e)=>setEmail(e.target.value)}/>
                  </FormControl>
                </Box>
              </HStack>
              
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  onChange={(e)=>setPassword(e.target.value)}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel> Confirm password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  onChange={(e)=>setCpassword(e.target.value)}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
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
                  }} onClick={handleSignup}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'} to="/login">Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }