import { authActions } from "./Actions";
const initState = {
    loading:false,
    error:false,
    isAuthenticate: sessionStorage.getItem("isAuthenticate") || false,
    token:sessionStorage.getItem("token") || "",
}

 export  const authReduce  = (state=initState,{type,payload})=>{
    switch (type) {
        case authActions.LOADING:{
            return{
                ...state,
                loading:true,
                error:false,
                email:'',
                isAuthenticate:false,
                token:''
            }
        }
        case authActions.SUCCESS:{
            // console.log(payload.token,"rducer")
            sessionStorage.setItem("token",payload.token)

            sessionStorage.setItem("isAuthenticate",true)
       return{
                ...state,
                loading:false,
                error:false,
                isAuthenticate:true,
                token:payload.token
            }
        }
        case authActions.FAILURE:{
            return{
                ...state,
                loading:false,
                error:true,
                email:"",
                isAuthenticate:false,
                token:""
            }
        }
        case "LOGOUT":{
            console.log('logout,reduccer');
            sessionStorage.removeItem("isAuthenticate");
            sessionStorage.setItem("token","");
            sessionStorage.removeItem("loggedUserName");
            sessionStorage.removeItem("loggedUserEmail");

            return {
                loading:false,
                error:false,
                isAuthenticate:false,
                token:""

            }
        }
        default:
            return state;
    }
}