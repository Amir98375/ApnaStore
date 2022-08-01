import axios from "axios"

export const authActions={
    LOADING:"LOGIN_LOADING",
    SUCCESS:"LOGIN_SUCCESS",
    FAILURE:"LOGIN_FAILURE"
    }

export const loginLoading=()=>({
     type:authActions.LOADING
})
export const loginSuccess=(payload)=>({
    type:authActions.SUCCESS,
    payload
})
export const loginFailure=()=>({
    type:authActions.FAILURE
})

export const logout=()=>({
    type:"LOGOUT"
})


export const login=(payload)=>(dispatch)=>{
    dispatch(loginLoading());

    // console.log(payload,'from payload action');
    axios.post(`https://amir-project.herokuapp.com/api/user/login`,payload)
    .then((res)=>{
        // console.log(res,"action")
        dispatch(loginSuccess({token:res.data.token}))
    })
    .catch((err)=> dispatch(loginFailure()))
}