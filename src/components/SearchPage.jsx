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
import { useSelector ,useDispatch } from 'react-redux';
import { fetchSingleDelhiData } from '../Redux/Actions';
import { AddTocart } from '../Redux/cartActions';
import { ProductCard } from './ProductCard';

// import { useNavigate } from 'react-router';
  

  export const SearchPage=()=> {
   
    const products = useSelector((s)=>s.productReducer.products);
    // const current=useSelector(state=>state.productReducer.currentProduct)
const dispatch=useDispatch()
    console.log('serch===',products);

    const handleAddcart=()=>{
         
    }
    
    // const navigate = useNavigate()
    
    return (
      <>
      {products?.map((el)=>{
        return(
          <ProductCard key={el.id} el={el}/>
        )
      })}
      </>
    );
  }

