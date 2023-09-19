import* as types from './ActionType'
import Axios  from 'axios'
import axios from 'axios'

 const FetchAllpRequest=(payload)=>{
   return{
  type:types.fetch_AllP_Request,
  payload
   }
}
 const FetchAllpSuccess=(payload)=>{
    return{
        type:types.fetch_AllP__Success,
        payload
    }
}
 const FetchAllpFailure=(payload)=>{
    return{
        type:types.fetch_AllP__Failure,
        payload
    }
}

export const fetchData=(payload)=>(dispatch)=>{
    dispatch(FetchAllpRequest())
    // console.log(payload,"fetchdata")
    axios.get(`https://apna-store.onrender.com/products`,{
     params:{
        q:payload
     }
    })
    .then((res)=>{
       
        return dispatch(FetchAllpSuccess(res.data))     
    })
    .catch((e)=>{
        return dispatch(FetchAllpFailure(e.data))
    })
}


const FetchHomeBooksRequest=(payload)=>{
    return{
   type:types.fetch_HomeBooks_Request,
   payload
    }
 }
  const FetchHomeBooksSuccess=(payload)=>{
     return{
         type:types.fetch_HomeBooks_Success,
         payload
     }
 }
  const FetchHomeBooksFailure=(payload)=>{
     return{
         type:types.fetch_HomeBooks_Failure,
         payload
     }
 }
 
 export const fetchPackageData=(payload)=>(dispatch)=>{
     dispatch(FetchHomeBooksRequest())
    //  console.log(payload,"fetchdata")
     axios.get("https://apna-store.onrender.com/homebooks",{
        params:{
            ...payload,  
        }
     })
     .then((res)=>{
         return dispatch(FetchHomeBooksSuccess(res.data))     
     })
     .catch((e)=>{
         return dispatch(FetchHomeBooksFailure(e.data))
     })
 }


const FetchElectronicsRequest=(payload)=>{
    return{
   type:types.fetch_Electronics_Request,
   payload
    }
 }
  const FetchElectronicsSuccess=(payload)=>{
     return{
         type:types.fetch_Electronics_Success,
         payload
     }
 }
  const FetchElectronicsFailure=(payload)=>{
     return{
         type:types.fetch_Electronics_Failure,
         payload
     }
 }
 
 export const fetchGujData=(payload)=> (dispatch)=>{
     dispatch(FetchElectronicsRequest)
     axios.get("https://apna-store.onrender.com/productelctronics",{
        params:{
            ...payload
        }
     })
     .then((res)=>{
         return dispatch(FetchElectronicsSuccess(res.data))     
     })
     .catch((e)=>{
         return dispatch(FetchElectronicsFailure(e.data))
     })
 }

 const FetchSingleRequest=(payload)=>{
    return{
   type:types.Single_Data_Request,
   payload
    }
 }
  const FetchSingleSuccess=(payload)=>{
     return{
         type:types.Single_Data_Success,
         payload
     }
 }
  const FetchSingleFailure=(payload)=>{
     return{
         type:types.Single_Data_Failure,
         payload
     }
 }
 
 export const fetchSingleDelhiData=(id)=> (dispatch)=>{
     dispatch(FetchSingleRequest())
     axios.get(`https://apna-store.onrender.com//products/${id}`)
     .then((res)=>{
         return dispatch(FetchSingleSuccess(res.data))     
     })
     .catch((e)=>{
         return dispatch(FetchSingleFailure(e.data))
     })
 }
