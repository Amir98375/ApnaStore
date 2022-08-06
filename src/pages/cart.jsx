import { Box, Heading, Text, Stack, Image, 
    Input,useColorModeValue, Button, Radio, RadioGroup } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import { Checkout } from './Checkout';

import {GrAdd,GrFormSubtract} from 'react-icons/gr'

import {useState } from 'react';
import { useSelector } from 'react-redux';

export const Cart = () => {
  const [value,setvalue]=useState(0)
  const [coupon,setcoupon]=useState('')
  const [Total,setTotal]=useState(0)

    const cart = useSelector((store) => store.cartReducer.cart);





    let val=(+value)
   
   let total=0
 for(let i=0;i<cart.length;i++){
    total+=cart[i].price
 }
 let subtotal=total+(+val)

var final=subtotal
function HandleCoupon() {
 

    if((coupon=="Masai" && subtotal>1000) || (coupon=="masai" && subtotal>1000)){
        final=Math.floor((subtotal*90)/100)
      setTotal(final)
   }else {
    setTotal(final)
   }
//   console.log(final,"final")
 
}


    return (
        <Box display={"flex"}>
            
            <Box width={"60%"} >
            <Heading as='h2' size='xl' ml={"80%"} textAlign='center'>
               My Cart
            </Heading>
          
            
            {cart.length && cart.map((product) =>  <CartItem 
                     key={product.id} 
                     title={product.title} 
                     id={product.id}
                     price={product.price} 
                     desc={product.author} 
                     image={product.image}
                     />
               
            )}
            
           
        </Box>
            <Box width={"30%"} 
            mr={"5%"} height={"450px"}
            border={"1px grey"}
            bg={"white"}
            mt={"40px"}>
                <Box display={"flex"} justifyContent={"space-around"} mt={"10px"}>
                    <Text>Subtotal</Text><Text>Rs.{total}</Text></Box>
                    <hr />
  
                    <Box display={"flex"} justifyContent={"space-around"} mt={"10px"}>
                    <p>Delivery</p><p>Free</p></Box>
                    <hr />
                       <Box display={"flex"} justifyContent={"space-around"} mt={"10px"}>
                       <Box mt={"40px"}>Shipping</Box>
                       <Box>
                       <RadioGroup defaultValue='1'>
  <Stack onChange={(e)=>setvalue(e.target.value)}>
    
          <Radio value='0'>free</Radio>
       <Radio value='70'>flat rate Rs.70</Radio>
       <Radio value='100'>pickup Rs.100</Radio>
  </Stack>
</RadioGroup>

                       </Box>
                     
                       </Box>
                       <hr />
                       <br />
                       Apply coupon (Masai)
                       <Box display={"flex"} >
                        
                      <Input placeholder='Get 10% Flat Discount On <1000'
                     name='null'
                      onChange={(e)=>setcoupon(e.target.value)}/>
                      {/* <Button bg={"blue"} color={"white"}>Apply coupon</Button> */}
                       </Box>
                       <br />
                      <Box color={"lightgray"} ml={"5em"}>Shipping update calculate during total</Box>
                      <br />
                    <Button as={"button"}  onClick={HandleCoupon} ml={"19em"} mb={"10px"} 
                >Calculate</Button>
                    <br />
                    <hr />
                    <Box p={"10px"} fontSize={"2xl"} display={"flex"} justifyContent={"space-around"} mt={"10px"}>
                       
                    <p>Total</p><p>Rs.{Total}</p></Box>
            <Checkout cart={cart} />
           
            </Box>
        </Box>
    );
};

function CartItem({ title, image, price, desc, removeProduct, id}) {
    const [count,setcount]=useState(1)
    const [cartdata,setcart] = useState(JSON.parse(localStorage.getItem("cart")));

    const countAdd=()=>{
        setcount(count+1)
        // if(count<10){
           
        // }else alert("limited quantity")

    }
    const countSub=()=>{
        
        if(count>=2){
            alert("only limited quantity available")
        }
    }
    const removefromCart =()=>{
        // const cartItems = JSON.parse(localStorage.getItem("cart"));
            let data = cartdata.filter((el)=> el.id !== id);
    
            // cartItems.splice(id,1);
            console.log(cartdata,id,data);
        
            localStorage.removeItem('cart');
            localStorage.setItem('cart',JSON.stringify(data));
            setcart(data);
            window.location.reload();


    }

    return (
        <Box rounded='lg' width={'fit-content'} margin='auto' marginBottom='2rem'>
            <Stack direction={{base: 'column', md: 'row'}} justifyContent='center' alignItems='center'>
                <Box 
              height={'300px'} 
              width='300px' 
              
              position='relative'
              padding='0 1rem'
              _after={{
              transition: 'all .3s ease',
              content: '""',
              w: '80%',
              h: '80%',
              pos: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%)`,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}>
                <Image
              rounded={'lg'}
              height={300}
              width={300}
              objectFit={'contain'}
              src={image}
            />
                </Box>
                <Box height={'300px'} width='300px'>
                    <Stack p={2}>
                        <Heading as='h3' size='lg'>
                        {desc}
                             
                        </Heading>
                       
                        <Box overflow={'hidden'} whiteSpace='nowrap'>
                        <Text> 
                           
                          
                        </Text>
                        </Box>
                        <Box>
                            <Text color={"red"}>Quantity</Text>
                            <Button bg={"white"} 
                            onClick={()=>countAdd()}><GrAdd/>
                            </Button> 1 <Button bg={"white"}>
                                <GrFormSubtract/></Button>
                        </Box>
                        <Text 
                        color={useColorModeValue('gray.500', 'gray.400')}
                        fontSize={'2xl'}
                        fontWeight={'300'}>
                            
                            {price}
                        </Text>
                        <Button variant={'solid'} leftIcon={<DeleteIcon/>} 
                        colorScheme='teal' onClick={() => removefromCart(id)}>Remove</Button>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    ) 
}