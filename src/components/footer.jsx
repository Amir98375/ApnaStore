import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    Heading,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
 
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  

  
  const SocialButton = () => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
      
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden></VisuallyHidden>
        {/* {children} */}
      </chakra.button>
    );
  };
  
  const ListHeader = () => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {/* {children} */}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        // bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={20}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Heading color={"blue.700"} fontStyle={"italic"}>ApnaStore</Heading>
                {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
              </Box>
              <Text fontSize={'sm'}>
                © 2022 Chakra Templates. All rights reserved
              </Text>
              <Stack direction={'row'} spacing={6}>
               
                <FaYoutube />
                  <FaInstagram />
                  <FaTwitter />
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link >About us</Link>
              <Link >Blog</Link>
              <Link >Contact us</Link>
              <Link >Pricing</Link>
              <Link >Testimonials</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Link>Help Center</Link>
              <Link >Terms of Service</Link>
              <Link >Legal</Link>
              <Link >Privacy Policy</Link>
              <Link>Satus</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }