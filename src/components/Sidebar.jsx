import './Sidebar.css'
import {ProductSimple} from '../pages/productshow'
import InfiniteScroll from "react-infinite-scroll-component"
import { useEffect, useState } from 'react';


import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from  'react-loader-spinner'
import { Checkbox } from '@chakra-ui/react';
export const Sidebar=()=>{
  const [data,setdata]=useState([])



 const getData=()=>{
  let limit=10
  let page=Math.ceil(data.length/limit)+1
 axios.get(`http://localhost:8080/products`,{
  params:{
     _page:page,
     _limit:limit
  }
 })
 .then((res)=>
{
  const olddata=res?.data
  const mergedata=[...data,...olddata]
  setdata(mergedata)
  
}
 )
}
useEffect(()=>{
  getData()

},[])
console.log(data,"hell")
const fetchMoreData=()=>{
  getData()
 
}


    return(
        <div className="main">
          <div className="right">
            <h2 className='filterheading'>filter by category</h2>
       <Checkbox 
        className='checkbox' type="checkbox" />Books <br />
       <Checkbox
       className='checkbox'
        type="checkbox" />Laptop <br />
       <Checkbox
       className='checkbox'
        type="checkbox" /> Electronic<br />
       <Checkbox
       className='checkbox'
        type="checkbox" />freeze<br />
       <h2 className='filterheading' >filter by type</h2>
       <Checkbox
       className='checkbox'
        type="checkbox" />competitive exam books<br />
       <Checkbox
       className='checkbox'
        type="checkbox" />hp laptop<br />
       <Checkbox 
       className='checkbox'
        type="checkbox" />oppo mobile<br />
       <h2 className='filterheading'>filter by price</h2>
       <Checkbox
       className='checkbox'
        type="checkbox" />Rs.100-300 <br />
       <Checkbox
       className='checkbox'
        type="checkbox" />Rs.300-700<br />
       <Checkbox
       className='checkbox'
        type="checkbox" />above 700<br />
       
          </div>
          <div className="left">
         
          <InfiniteScroll
    dataLength={data.length}
    next={fetchMoreData}
    
    hasMore={true}
    loader={<div style={{"color":"white" ,fontSize:"30px" ,display:"flex" ,marginLeft:"400px"}}><p>load more data</p>
<div style={{paddingtop:"30px" }}>
<ThreeDots
    height="20"
    width="100"
    color='black'
    ariaLabel='loading'

  />
</div>
 </div>}
   
  >
    
            
    {data?.map((el)=> <ProductSimple 
         author={el.author} category={el.category} 
         title={el.title} price={el.price} original_price={el.original_price}
         image={el.image} type={el.type}
         rating={el.rating}/>)}
 
  </InfiniteScroll>


         {/* {products?.map((el)=> <ProductSimple 
         author={el.author} category={el.category} 
         title={el.title} price={el.price} original_price={el.original_price}
         image={el.image} type={el.type}/>)} */}
  
          </div>

        </div>
    )
}