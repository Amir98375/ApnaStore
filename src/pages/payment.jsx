import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const PaymentPage = () => {
  const navigate=useNavigate()
  const[price,setprice]=useState(0)
  const cart_price=useSelector((state)=>state.cartReducer.cart)
  console.log(cart_price)
useEffect(()=>{
  if(cart_price){
    let p=0
    for(let i=0;i<cart_price.length;i++){
         p+=cart_price[i].price
    }
   let  final=Math.floor((p*90)/100)
   setprice(final+100)
  }
},[])

  return (
    <div
      style={{
        display: "flex",
        width: "60%",
        marginTop: "50px",
        margin: "auto",
        boxShadow: "5px 5px 15px gray",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          width: "40%",
          padding: "10px",
        //   boxShadow: "5px 5px 5px gray",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "2px",
            boxShadow: "0px 2px 0px whitesmoke",
          }}
        >
          <div
            style={{
              width: "50%",
              marginLeft: "50px",
              textAlign: "right",
            }}
          >
            <h3>Name App</h3>
          </div>
        </div>
        <div>
          <p style={{ fontSize: "30px", fontWeight: "500" }}>
            Choose a payment option
          </p>
          <p style={{ fontWeight: "500" }}>Total Payable Amount:{price} </p>
          {/* <p style={{ fontWeight: "0" }}>Transaction Id: 100110125</p> */}
        </div>
      </div>
      <div
        style={{
          width: "60%",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "2px",
            boxShadow: "0px 2px 0px whitesmoke",
          }}
        >
          <div
            style={{
              width: "50%",
              margin: "2px",
            }}
          >
            PAYMENT OPTIONS
          </div>
          <div
            style={{
              width: "50%",
              textAlign: "right",
            }}
          >
            <select id="language">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
        <div style={{ width: "75%", margin: "auto", padding: "15px",cursor:"pointer" }}>
          <div onClick={()=>navigate('/payamount')}>
            {/* <a style={{ textDecoration: "none" }} href="card-payment"> */}
              <h3 style={{ color: "black", marginBottom: "5px",cursor:"pointer" }}>
                Cards (Credit/Debit)
              </h3>
              <p style={{ color: "gray", marginTop: "5px" ,cursor:"pointer"}}>
                Visa, Mastercard, Diners Club, Rupay, Amex
              </p>
            {/* </a> */}
          </div>
          <hr style={{ border: "1px solid whitesmoke" }} />
          <div style={{ cursor: "pointer" }}>
            <h3 style={{ color: "black", marginBottom: "5px" }}>EMI</h3>
            <p style={{ color: "gray", marginTop: "5px" }}>
              Credit Card, Debit Card
            </p>
          </div>
          <hr style={{ border: "1px solid whitesmoke" }} />
          <div style={{cursor:"pointer"}}>
            <h3 style={{ color: "black", marginBottom: "5px" }}>Wallet</h3>
            <p style={{ color: "gray", marginTop: "5px" }}>
              Amazon Pay, Paytm, PhonePe & more
            </p>
          </div>
          <hr style={{ border: "1px solid whitesmoke" }} />
          <div style={{ cursor: "pointer" }}>
            <h3 style={{ color: "black", marginBottom: "5px" }}>Net Banking</h3>
            <p style={{ color: "gray", marginTop: "5px" }}>All India Banks</p>
          </div>
          <hr style={{ border: "1px solid whitesmoke" }} />
          <div>
            <a style={{ textDecoration: "none" }} href="UpiPayment">
              <h3 style={{ color: "black", marginBottom: "5px" }}>UPI</h3>
              <p style={{ color: "gray", marginTop: "5px" }}>
                Gpay, PhonePe, BHIM, Paytm
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};