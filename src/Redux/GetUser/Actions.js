import axios from "axios"

export const userSuccess=(payload)=>({
    type:"SUCCESS",
    payload
})

export const getUser=(token,dispatch)=>{
    // console.log(token)
    axios.get(`https://amir-project.herokuapp.com/api/user/loggeduser`,{
        headers:{
            "Authorization" : `Bearer ${token}`
        }
    })
    .then((res)=>{
        // console.log('getuse details',res.data.user);
        dispatch(userSuccess({username:res.data.user.name,email:res.data.user.email}))
    })
    .catch((err)=> console.log(err));
}
