import axios from "axios"
import { Navigate } from "react-router"

export const authActions={
    LOADING:"SIGNUP_LOADING",
    SUCCESS:"SIGNUP_SUCCESS",
    FAILURE:"SIGNUP_FAILURE"
    }

export const signupLoading=()=>({
     type:authActions.LOADING
})
export const signupSuccess=(payload)=>({
    type:authActions.SUCCESS,
    payload
})
export const signupFailure=()=>({
    type:authActions.FAILURE
})

export const registerUser=(payload)=>(dispatch)=>{
    dispatch(signupLoading());
    console.log('signup',payload);
    axios.post("https://amir-project.herokuapp.com/api/user/register",payload)
    .then((res)=>{
        dispatch(signupSuccess());
        console.log('ok');
    })
    .catch((err)=>{
        console.log('sighn err',err);
        dispatch(signupFailure());
    })
}