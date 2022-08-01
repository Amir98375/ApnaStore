import { Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react"
import './main.css'
import {useNavigate} from 'react-router-dom'

export const Login = ({isAuthenticate,setAuth})=>{
    const navigate=useNavigate()
    const [Name,setName] = useState(String);
    const [Mobile,setMobile] = useState(Number);
    const [cMobile,setcMobile] = useState(Number);
    const [getOtp,setGetotp] = useState("");


    const [otpEnter,setEnter] = useState(true);
    
    const [otploading,setOtploading] = useState(false);


    const [dis,setDis] = useState(false);
    const handleOtp = ()=>{
        // console.log(Name,'moj',Mobile);
        setDis(true);
        if(Mobile.toString().length==10 || cMobile.toString().length==10){
            if(Mobile==cMobile){
                setOtploading(true);
                const api_key = "sbLhzweiqoCS3WI5ntBO7pPuvgAjV6HKN2am0JfcdG91yYXZR452cPmTtsrADQkOuoFvH38nSWG7qYZb";
                let genOtp = Math.floor(Math.random() * (9999 - 1000)) + 1000;
                sessionStorage.setItem("otp",(genOtp+1));
                axios.get(`https://www.fast2sms.com/dev/bulkV2?authorization=${api_key}&variables_values=${genOtp}&route=otp&numbers=${Mobile}`)
                .then((res)=>{
                    setOtploading(false);
                    alert(`otp send to ${Mobile}`);
                    setEnter(false);
                    
                })

            }else alert("Mobile Number not Match");
        }
        else{
            alert("Please provide a valid number")
        }
    }

    const handleLogin =()=>{
        let otp = sessionStorage.getItem("otp");
        if(otp-1==(+getOtp)){
            alert(`Welcome ${Name}`);
            setAuth(true);
            navigate('/thanks')
        }
        else{
            alert(`otp not match`);
        }
    }

    return (
        <div className="topmain">
        <h1 className="heading">Confirm otp to pay</h1>
        <img className="loginLogo" src="data:image/png;base64,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"/>
            <input type="text" disabled={dis} onChange={(e)=>setName(e.target.value)} 
            placeholder="Enter Your name"
            className=".inputclass" /><br></br><br />

            <input className=".inputclass" type="number" disabled={dis} 
            onChange={(e)=>setMobile(e.target.valueAsNumber)}
             placeholder="Enter Your mobile no.(enter only 10 digit no)"/>
             <br /><br />
            <input className=".inputclass" type="number" disabled={dis}
             onChange={(e)=>setcMobile(e.target.valueAsNumber)}
              placeholder="Confirm mobile no."/>
              ,<br />
            {cMobile.toString().length==10?
                Mobile==cMobile?
                    <span className="mobileCheck">Matched!</span>

                    :
                    <span className="mobileCheck" style={{'color':'red'}}>Not Matched!</span>   
            :""}
           <br />
            <input type='submit' disabled={Mobile!=cMobile} value={"Send OTP"} onClick={handleOtp}/>
          <br /><br />
          
            <br />
            <input type="text" disabled={otpEnter} onChange={(e)=>setGetotp(e.target.value)}  placeholder="Enter OTP"/>
            <br /><br />
            <input type="button" disabled={otpEnter} value={"confirm otp"} onClick={handleLogin} style={{'backgroundColor':'lightskyblue'}}/>
                

                {otploading?
                <div className="otploading">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="" />
                </div>:""}


        </div>
    )
}