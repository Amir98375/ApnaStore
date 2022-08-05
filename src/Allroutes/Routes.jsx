
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
import { Otpsender } from "../pages/otpsender"
import { LipsComp } from "../ProductPages/LipsComp"
import { HairsComp } from "../ProductPages/HairsComp"
export const AlLRoutes=()=>{

    return (
       <>
       <Navbar/>
       <Routes>
     
        <Route path="/" element={<HomePage/>}/>
        <Route path="/allcategories" element={<Sidebar/>}/>
        <Route path="/searchcard" element={<SearchPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/payamount" element={<CardPayment/>}/>
        <Route  path="/engbooks" element={<BooksEngg/>}/>
        <Route  path="/combooks" element={<BooksComp/>}/>
        <Route  path="/led" element={<LedPage/>}/> 
        <Route  path="/laptop" element={<LapPage/>}/>
        <Route  path="/mobile" element={<MobPage/>}/>
        <Route path="/signin" element={<SignupCard/>}/>
        <Route path="/login" element={<SignInCard/>}/>
        <Route path="/Reset" element={<ResetPassword/>}/>
        <Route path="/otp" element={<Login/>}/>
      
        <Route path="/hairs" element={<LipsComp/>}/>
        <Route path="/brands" element={<HairsComp/>}/>
        <Route path="/thanks" element={<Main/>}/>
       </Routes>
       </>
    )
}