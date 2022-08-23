
import { Route,Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { SearchPage } from "../components/SearchPage"
import { Sidebar } from "../components/Sidebar"
import { Allcategories } from "../pages/Products"
import { CardPayment } from "../pages/CardPayment"
import { Cart } from "../pages/cart"
import { HomePage } from "../pages/HomePage"
import { PaymentPage } from "../pages/payment"
import { BooksEngg } from "../ProductPages/BooksEngg"
import { BooksComp } from "../ProductPages/BooksComp"
import { LedPage } from "../ProductPages/LedPage"
import { MobPage } from "../ProductPages/MobPage"
import { LapPage } from "../ProductPages/LapPage"
import { SignupCard } from "../pages/Signup"
import { SignInCard } from "../pages/Signin"
import { ResetPassword } from "../pages/Resetpassword"
import { Main } from "../pages/OrderPlaced"
import { Login } from "../pages/login"

import { LipsComp } from "../ProductPages/LipsComp"
import { HairsComp } from "../ProductPages/HairsComp"
import Footer from "../components/footer"
export const AlLRoutes=()=>{

    return (
       <>
       
       <Routes>
     
        <Route path="/" element={
        <>
        <Navbar/>
        <HomePage/>
        <Footer/>
        </>}/>
        <Route path="/allcategories" element={
        <>
        <Navbar/>
        <Sidebar/>
        <Footer/>
        </>
        
        }/>
        <Route path="/searchcard" element={
        <>
          <Navbar/>
        <SearchPage/>
        <Footer/>
        </>
        }/>
        <Route path="/cart" element={
        <>
         <Cart/></>
       }/>
        <Route path="/payment" element={
        <>
         <PaymentPage/>
        </>
       }/>
        <Route path="/payamount" element={
        <>
        <CardPayment/></>}/>
        <Route  path="/engbooks" element={
        <>
          <Navbar/>
        <BooksEngg/>
        <Footer/></>}/>
        <Route  path="/combooks" element={
        <>  <Navbar/>
        <BooksComp/>
        <Footer/>
        </>}/>
        <Route  path="/led" element={
        <>
          <Navbar/>
        <LedPage/>
        <Footer/></>}/> 
        <Route  path="/laptop" element={
            <>
              <Navbar/>
            <LapPage/>
            <Footer/></>
        }/>
        <Route  path="/mobile" element={
        <>
          <Navbar/><MobPage/>
          <Footer/></>}/>
        <Route path="/signin" element={<>  <Navbar/><SignupCard/>
        </>}/>
        <Route path="/login" element={<>  <Navbar/><SignInCard/></>}/>
        <Route path="/Reset" element={<>
            <Navbar/>   <ResetPassword/></>}/>
        <Route path="/otp" element={<Login/>}/>
      
        <Route path="/hairs" element={
        <>  <Navbar/><LipsComp/>
         <Footer/></>}/>
        <Route path="/brands" element={<>  <Navbar/><HairsComp/>
        <Footer/></>}/>
        <Route path="/thanks" element={<Main/>}/>
       </Routes>
       </>
    )
}