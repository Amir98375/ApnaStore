import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Products } from '../pages/Products'
import { booksengineering } from '../Redux/BooksActions'

export const BooksEngg = () => {
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.BooksReducer.books)
    useEffect(()=>{
  dispatch(booksengineering())
    },[dispatch])
    // console.log("data",data)
  return (
   <Flex flexWrap={"wrap"} gap={10} ml={"4rem"} box-shadow={"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"} >
    {data?.map((el)=><Products el={el}/>)}
   </Flex>
    
  
  )
}
