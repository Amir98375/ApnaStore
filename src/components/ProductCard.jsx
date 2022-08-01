
import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Button,
    Image,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import { AddTocart } from '../Redux/cartActions';

export const ProductCard = ({el}) => {
    const dispatch=useDispatch()
    
    // console.log("el",el)
    const handleAddcart=()=>{
        console.log("hello")
         dispatch(AddTocart(el))
    }
  return (
    <Center py={2}>
    <Box display={"flex"}>
  <Box width={"20%"}>
    <Image src={el.image} backgroundImage={el.image} height={"100%"}></Image>

  </Box>
  <Box width={"80%"} display={"flex"}
    role={'group'}
    p={6}
    maxW={'100%'}
    w={'full'}
    bg={"whitesmoke"}
    boxShadow={'2xl'}
    rounded={'lg'}
    pos={'relative'}
    zIndex={1}>
    <Box
      rounded={'lg'}
      mt={-12}
      pos={'relative'}
      height={'230px'}
      _after={{
        transition: 'all .3s ease',
        content: '""',
        w: 'full',
        h: 'full',
        pos: 'absolute',
        top: 5,
        left: 0,
        
        filter: 'blur(15px)',
        zIndex: -1,
      }}
      _groupHover={{
        _after: {
          filter: 'blur(20px)',
        },
      }}>
      <Image
        rounded={'lg'}
        height={230}
        width={282}
        mt={"50px"}
        
        objectFit={'contain'}
        src={el.image}
      />
    </Box>
    <Box width={"400px"}>
   
      <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
        {el.title}
      </Heading>
      <Text mt={"30px"} color={'black.500'} fontSize={'l'} textTransform={'uppercase'}>
        {el.author}
      </Text>
    </Box>
   <Box width={"400px"} height={"100px"}> <Stack pt={10} marginLeft={"10rem"} align={'center'}>
    {/* <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
        {author}
      </Heading> */}
       <Heading  fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
        {el.type}
      </Heading>
      <Text color={"#ff9529"}fontSize={'sm'} textTransform={'uppercase'}>
  <Rating rating={el.rating}/>
      </Text>
    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
        {el.category}
      </Text>
  
      <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
        {el.id}
      </Text>
    
      <Stack direction={'row'} align={'center'}>
        <Text fontWeight={800} fontSize={'xl'}>
        {el.price}
        </Text>
        <Text textDecoration={'line-through'} color={'gray.600'}>
       {el.original_price}
        </Text>
      </Stack>
    </Stack>

   </Box >
    <Button ml={"100px"} width={"100px"} borderRadius={"10px"} mt={"200px"} bg={"blue"} color={"white"}>Buy</Button>
    <Button ml={"30px"} borderRadius={"10px"} mt={"200px"} bg={"black"} color={"white"}
    onClick={handleAddcart}>Add cart</Button>
    {/* onClick={()=>navigate(`/delhi/${id}`)} */}
  </Box>
 </Box>

 </Center>
  )
  
}

function Rating({ rating}) {
    return (
      <Box display="flex" >
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        {/* <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box> */}
      </Box>
    );
  }