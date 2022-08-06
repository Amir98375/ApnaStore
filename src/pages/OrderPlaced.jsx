
import {Button} from '@chakra-ui/react'
import './Orderplaced.css'
import { useNavigate } from "react-router-dom";
export const Main = ()=>{
  const navigate=useNavigate()
  const date =new Date()
  const today = date.getDate()+2;
  const currentYear = date.getFullYear()
  const currentMonth = date.getMonth() + 1

    return (
        <>
         <div className="containersummary">
          <p className='backhome' onClick={()=>navigate('/')}> Back to Home</p>
           <p className='parasummary'>  Order summary</p>
         </div>
         <div>
         
          <img className='imgagethanks' src="https://cdn-icons.flaticon.com/png/128/4436/premium/4436481.png?token=exp=1658689038~hmac=a97b4fbe6695e40fb0c6de0652ed04d0" alt="" />
          <p className='parasummary' id='thanks'>Thank You</p>
          <p className='parasummary' id='thanks1'>Order successfully placed</p>
          <p className='parasummary' id='thanks1'>Estimated Delivery Date...</p>
          <p className='datepara'>{`${today}/${currentMonth}/${currentYear}`}</p>
          <br />
          <p className='parasummary' id='thanks'>Pay Method</p>
          <p className='parasummary' id='thanks1'>Online payment Accepted</p>
          
         </div>
         <br /><br />
         <div className='para'>
   <p>       We will keep you posted about the status of delivery of the order via SMS
          .We will send  you the exact tracking status of your product time to time via
          SMS ..And We are very pleased to thank you for being our important customer .Thank you 
          for connecting with us.</p>
         </div>
         <div>
         <p className='parasummary' id='thanks1'>Refer and get Rs50 per friend</p>
         </div>
         <Button bg={"#90ee90"} marginLeft={"39.5em"} width={"200px"}>Refer</Button>
        </>
    )
}