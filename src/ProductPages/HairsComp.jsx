import { Flex,Box ,Button} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductsBeauty } from '../pages/ProductsBeauty'
import { fetchHairsticks } from '../Redux/Beuty/Actions'

export const HairsComp = () => {
  const [sortvalue,setsortvalue]=useState("asc")
    const dispatch=useDispatch()
    const hairs=useSelector((state)=>state.beauty.Hairs)
    useEffect(()=>{
        dispatch(fetchHairsticks())
    },[dispatch])
    // console.log(hairs,"hairs")
    const handleChange=(e)=>{
          setsortvalue(e.target.value)
    }
    // console.log(sortvalue)
    sortvalue=="asc"? hairs.sort((a,b)=>a.price-b.price):hairs.sort((a,b)=>b.price-a.price)
  return (
         <Box>
          <Box ml={"80em"}>
         <select name="" id="" value={sortvalue} onChange={handleChange}>sort by price
         <option value="">sort by price</option>
         <option value="asc" >low to high</option>
         <option value="desc" >high to low</option>
         </select>
        
          </Box>
          <Flex flexWrap={"wrap"} gap={10} ml={"4rem"}
    box-shadow={"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"} >
   {hairs?.map((el)=><ProductsBeauty el={el}/>)}
  </Flex>
         </Box>
  )
}
