import React from 'react'
import {
    Flex,

    Box,
    Image,

    Icon,
    chakra,
    Tooltip,
    Text,
  } from '@chakra-ui/react';
  import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useDispatch } from 'react-redux';

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { AddTocart } from '../Redux/cartActions';
export const Products = ({el}) => {

  const dispatch=useDispatch()
    
  // console.log("el",el)
  const handleAddcart=()=>{
      // console.log("hello cart")
       dispatch(AddTocart(el))
  }

  return (
   <>
     <Box 
    
    maxW="sm"
    borderWidth="1px"
    rounded="lg"
    shadow="lg"
    position="relative">
   

    <Image
      src={el.image}
      alt={''}
      roundedTop="lg"
      h={"300px"}
      width={"200px"}
    />

    <Box p="6">
      <Box d="flex" alignItems="baseline">
      
      </Box>
      <Flex mt="1" justifyContent="space-between" alignContent="center">
        <Box
          fontSize="sm"
          fontWeight="semibold"
          as="h1"
          lineHeight="tight"
          isTruncated>
       {el.type}
        </Box>
        <Tooltip
          label="Add to cart"
          bg="white"
          placement={'top'}
          color={'gray.800'}
          fontSize={'1.2em'} >
          <chakra.a href={'#'} display={'flex'}>
            <Icon h={10} w={7} alignSelf={'center'} 
            onClick={handleAddcart}><AiOutlineShoppingCart/></Icon>
          </chakra.a>
        </Tooltip>
      </Flex>

      <Flex justifyContent="space-between" alignContent="center">
        {/* <Rating rating={"3.5"} numReviews={data.numReviews} /> */}
        <Text color={"yellow.800"}><Rating rating={el.rating}/></Text>
        <Box fontSize="2xl" >
          <Box as="span" color={'gray.600'} fontSize="lg">
            £
          </Box>
          {el.price}
        </Box>
      </Flex>
    </Box>
  </Box>
  </>
    
     
   
    
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