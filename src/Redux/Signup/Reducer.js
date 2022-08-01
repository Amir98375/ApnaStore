import { authActions } from "./Actions";

const initState = {
    signUpLoading:false,
    isSignUpSuccess:false
}

export const signupReducer = (state=initState,{type,payload})=>{
    switch (type) {
        case authActions.LOADING:{
            return{
                ...state,
                signUpLoading:true,
                isSignUpSuccess:false
            }
        }
        case authActions.SUCCESS:{
            // console.log(payload,"rducer")
            return{
                ...state,
                signUpLoading:false,
                isSignUpSuccess:true
                
            }
        }
        case authActions.FAILURE:{
            return{
                ...state,
                signUpLoading:false,
                isSignUpSuccess:false
            }
        }
        default:
            return state;
    }
}