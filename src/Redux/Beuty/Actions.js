import axios from 'axios'
import*as types from './ActionsTypes'

const fetchlipstickReq=(payload)=>{
    return{
       type:types.fetch_Lipsticks_Request,
       payload 
    }
}
const fetchlipstickSuc=(payload)=>{
    return{
       type:types.fetch_Lipsticks_Success,
       payload 
    }
}

const fetchlipstickFailure=(payload)=>{
    return{
       type:types.fetch_Lipsticks_Failure,
       payload 
    }
}


export const fetchLipsticks=(payload)=>(dispatch)=>{
         dispatch(fetchlipstickReq())

         axios.get(`https://purpleproject.herokuapp.com/lipsticks`,{
            params:{
              ...payload
            }
         }).then((res)=>dispatch(fetchlipstickSuc(res.data)))
}


const fetchHairsReq=(payload)=>{
   return{
      type:types.fetch_Hairs_Request,
      payload 
   }
}
const fetchHairsSuc=(payload)=>{
   return{
      type:types.fetch_Hairs_Success,
      payload 
   }
}

const fetchHairsFailure=(payload)=>{
   return{
      type:types.fetch_Hairs_Failure,
      payload 
   }
}


export const fetchHairsticks=(payload)=>(dispatch)=>{
        dispatch(fetchHairsReq)

        axios.get(`https://purpleproject.herokuapp.com/newBrands`,{
           params:{
             ...payload
           }
        }).then((res)=>dispatch(fetchHairsSuc(res.data)))

        .catch((e)=>dispatch(fetchHairsFailure(e)))
}
