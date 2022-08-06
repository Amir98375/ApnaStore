
import './Navbar.css'
import {ImMobile} from 'react-icons/im'
import {BsCart} from 'react-icons/bs'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/Actions'

import { getUser } from '../Redux/GetUser/Actions'
import { Avatar, Button, Center, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { logout } from '../Redux/Login/Actions'

export const Navbar=()=>{
    const [toggleCat,settogCat]=useState(false)
    const [toggle,setTog] = useState(false);
    const [toggleF,setTogF] = useState(false);
    const [toggleB,setTogB] = useState(false);
    const [toggleW,setTogW] = useState(false);
    const [value,searchvalue]=useState('')
    const [show,setshow]=useState(true)

    const {isAuthenticate,token} = useSelector((store)=>store.login);
    const {email} = useSelector((store)=>store.user);

    const username = useSelector((store)=>store.user.username);
    
  
  useEffect(()=>{
    if(isAuthenticate){
        getUser(token,dispatch);
    }
  },[])

  const handleLogout = ()=>{
    dispatch(logout());
   }
    const navigate=useNavigate()
// console.log(value)
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.productReducer.products)
    const cart=useSelector((state)=>state.cartReducer.cart)
    console.log("navbar",cart.length)

    function refreshpage(){
        window.location.reload(false);
        navigate('/home')
    }
  
    const handlesearch=(e)=>{
        e.preventDefault()
       
        // console.log(value)
        // console.log(value)
        dispatch(fetchData(value))
        setshow(false)
        navigate('/searchcard');

        // window.location.reload(false)

       
    }
  

//   console.log(data)
          
  
    return(
        
        <div className='Container'>
            <div className="Navbar-main">
               <div className="Navbar-right">
               <div className='Logo' onClick={()=>navigate('/')}><p className='LogoF'>ApnaStore</p></div>
      
               <div className='inputBox'>
                <input type="text" color='red' 
                placeholder='Search Here'
                 className='InputSearch' onChange={(e)=>searchvalue(e.target.value)}></input>
                <button className='buttonSearch'onClick={handlesearch}>search</button>
                
               </div>
               
               </div>
               <div className="Navbar-left">
                <div className='Item-left'><ImMobile/>downlaod app</div>
                <div className='Item-left'>
                {isAuthenticate?
              <Menu >
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={'https://avatars.githubusercontent.com/u/97455128?v=4'}
                />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    size={'2xl'}
                    src={'https://avatars.githubusercontent.com/u/97455128?v=4'}
                  />
                </Center>
                <br />
                <Center >
                 <Text bg={"black"} color={"black"}>{username}</Text>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem color={"black"}>{email}</MenuItem>
                <MenuItem color={"black"} onClick={()=>navigate('/Reset')}>Change Password</MenuItem>
                <MenuItem onClick={handleLogout} color={"black"}>Logout</MenuItem>
              </MenuList>
            </Menu>
            :
            <button onClick={()=>navigate('/login')}>Login</button>
            
            }
                </div>
               <div className='Item' onClick={()=>navigate('/cart')}><span>{cart.length}</span><BsCart/></div>
               </div>
            </div>
            <div className='subsection'>
                 <div id='subsection-left'>
                  
                    <div onMouseEnter={()=>settogCat(true)}
                     onMouseLeave={()=>settogCat(false)} 
                     className='electronics-section'>All categories
                    
                    </div>
                    <div onMouseEnter={()=>setTog(true)}
                     onMouseLeave={()=>setTog(false)} 
                     className='electronics-section'>Books
                    
                    </div>
                    <div onMouseEnter={()=>setTogF(true)}
                     onMouseLeave={()=>setTogF(false)} 
                     className='electronics-section'
                    >Electronic Accesories</div>
                    <div
                     onMouseEnter={()=>setTogB(true)}
                     onMouseLeave={()=>setTogB(false)} 
                     className='electronics-section'
                    >Beauty item</div>
                    <div
                     onMouseEnter={()=>setTogW(true)}
                     onMouseLeave={()=>setTogW(false)} 
                     className='electronics-section'
                    >Wearing item</div>
                 </div>
                 <div className='subsection-right'></div>
            
            </div>
              
            {toggleCat?<div onMouseEnter={()=>settogCat(true)} 
            onMouseLeave={()=>settogCat(false)}
             className='subsection-elctronics'>
                       <div onClick={()=>{
                        navigate("/allcategories")
                        refreshpage()
                       }}>All categories</div>
                       
                       </div>:""}

            {toggle?<div onMouseEnter={()=>setTog(true)} 
            onMouseLeave={()=>setTog(false)}
             className='subsection-elctronics'>
                       <div onClick={()=>navigate('/engbooks')} >Engineerinng</div>
                        <div onClick={()=>navigate('/combooks')}>Exam Prepration</div>
                        <div>History</div>
                        <div>Science</div>
                        <div>Award Winning</div>
                       </div>:""}

                       {toggleF?<div onMouseEnter={()=>setTogF(true)} 
            onMouseLeave={()=>setTogF(false)}
             className='subsection-elctronics'>
                       <div onClick={()=>navigate('/mobile')}>Mobile</div>
                        <div onClick={()=>navigate('/laptop')}>Laptop</div>
                        <div onClick={()=>navigate('/led')}>Headphones</div>
                        <div onClick={()=>navigate('/mobile')}>Mobile</div>
                        <div onClick={()=>navigate('/laptop')}>Laptop</div>
                        <div onClick={()=>navigate('/led')}>Headphones</div>
                        
                        
                       </div>:""}

                       {toggleB?<div onMouseEnter={()=>setTogB(true)} 
            onMouseLeave={()=>setTogB(false)}
             className='subsection-elctronics'>
                       <div  onClick={()=>navigate('/hairs')} >Lipsticks</div>
                        <div onClick={()=>navigate('/brands')}>Hair Care</div>
                        <div onClick={()=>navigate('/hairs')}>Eye Care </div>
                        <div onClick={()=>navigate('/brands')}>Oil Shampoo</div>
                        <div onClick={()=>navigate('/hairs')}>Branded Item</div>
                       </div >:""}

                       {toggleW?<div onMouseEnter={()=>setTogW(true)} 
            onMouseLeave={()=>setTogW(false)}
             className='subsection-elctronics'>
                       <div >Mens Clothe's</div>
                        <div>Women's Clothes</div>
                        <div>Child Baby</div>
                        <div>Girl Bags</div>
                        <div>Foot Wear</div>
                       </div>:""}

                       <div>
         
                       </div>

                       {/* {
            data?.map((el)=>  <SearchPage title={el.title}
            author={el.author} category={el.category} image={el.image}
           id={el.id} price={el.price} original_price={el.original_price}
            rating={el.rating} type={el.type}/>) } */}
        </div>
    )
}