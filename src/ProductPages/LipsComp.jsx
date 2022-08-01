import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ProductsBeauty } from '../pages/ProductsBeauty'
import { fetchLipsticks } from '../Redux/Beuty/Actions'
import {Flex ,Box,Checkbox,Text} from '@chakra-ui/react'

export const LipsComp = () => {
  const [sortvalue,setsortvalue]=useState('asc')

    const dispatch=useDispatch()
  const data=useSelector((state)=>state.beauty.lipsticks)
    
  useEffect(()=>{
    dispatch(fetchLipsticks())
  },[dispatch])
const handleChange=(e)=>{
setsortvalue(e.target.value)
}

sortvalue=="asc"? data.sort((a,b)=>a.price-b.price):data.sort((a,b)=>b.price-a.price)
const handlefilter=(e)=>{
           console.log(e.target.value)
}

  return (
 <Box>
  <Box ml={"10em"} display={"flex"}>
    <Text>filter by price</Text>
    <Checkbox value="100" onChange={handlefilter}>100-300</Checkbox>
    <Checkbox value="above" onChange={handlefilter}>above 300</Checkbox>
  </Box>
  <Box ml={"80em"}>
  <select name="" id="" value={sortvalue} onChange={handleChange}>sort by price
         <option value="">sort by price</option>
         <option value="asc" >low to high</option>
         <option value="desc" >high to low</option>
         </select>
  </Box>
  <Flex flexWrap={"wrap"} gap={10} ml={"4rem"}
     box-shadow={"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"} >
    {data?.map((el)=><ProductsBeauty el={el}/>)}
   </Flex>
 </Box>
  )
}
