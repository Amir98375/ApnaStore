const initState = 
{
    username: sessionStorage.getItem("loggedUserName") ||"",
    email: sessionStorage.getItem("loggedUserEmail") || ""
}

 export  const userReducer  = (state=initState,{type,payload})=>{
    switch (type) {
        case "SUCCESS":{
            console.log(payload,"rducer-user")
            sessionStorage.setItem("loggedUserName",payload.username)
            
            sessionStorage.setItem("loggedUserEmail",payload.email)
            return{
                ...state,
                username:payload.username,
                email:payload.email
            }
        }
        default:
            return state;
    }
}