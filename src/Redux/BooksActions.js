
import*as types from './ActionType.js'

import axios from 'axios'
 const fetchEngineeringReq=(payload)=>{
        return{
            type:types.fetch_engineering_Request,
            payload
        }
 }

 const fetchEngineeringSuc=(payload)=>{
    return{
        type:types.fetch_engineering_Success,
       payload
    }
 }

 const fetchEngineeringfai=(payload)=>{
    return{
        type:types.fetch_engineering_Failure,
        payload
    }
 }


 export const booksengineering=(payload)=>(dispatch)=>{
    dispatch(fetchEngineeringReq())
    console.log(payload,"fetchdata")
    axios.get(`https://apnastore123.herokuapp.com/engineering`,{
        params:{
            ...payload
        }
    })
    .then((res)=>{
       
        return dispatch(fetchEngineeringSuc(res.data))     
    })
    .catch((e)=>{
        return dispatch(fetchEngineeringfai(e.message))
    })
}

const fetchCompReq=(payload)=>{
    return{
        type:types.fetch_Comp_Request,
        payload
    }
}

const fetchCompSuc=(payload)=>{
return{
    type:types.fetch_Comp_Success,
   payload
}
}

const fetchCompfai=(payload)=>{
return{
    type:types.fetch_Comp_Failure,
    payload
}
}


export const booksComp=(payload)=>(dispatch)=>{
dispatch(fetchCompReq())
console.log(payload,"fetchdata")
axios.get(`https://apnastore123.herokuapp.com/compete`,{
    params:{
        ...payload
    }
})
.then((res)=>{
   
    return dispatch(fetchCompSuc(res.data))     
})
.catch((e)=>{
    return dispatch(fetchCompfai(e.message))
})
}

const fetchmobReq=(payload)=>{
    return{
        type:types.fetch_mob_Request,
        payload
    }
}

const fetchmobSuc=(payload)=>{
return{
    type:types.fetch_mob_Success,
   payload
}
}

const fetchmobfai=(payload)=>{
return{
    type:types.fetch_mob_Failure,
    payload
}
}


export const fetchmob=(payload)=>(dispatch)=>{
dispatch(fetchmobReq())
console.log(payload,"fetchdata")
axios.get(`https://apnastore123.herokuapp.com/mobile`,{
    params:{
        ...payload
    }
})
.then((res)=>{
   
    return dispatch(fetchmobSuc(res.data))     
})
.catch((e)=>{
    return dispatch(fetchmobfai(e.message))
})
}


const fetchlapReq=(payload)=>{
    return{
        type:types.fetch_lap_Request,
        payload
    }
}

const fetchlapSuc=(payload)=>{
return{
    type:types.fetch_lap_Success,
   payload
}
}

const fetchlapfai=(payload)=>{
return{
    type:types.fetch_lap_Failure,
    payload
}
}


export const fetchlap=(payload)=>(dispatch)=>{
dispatch(fetchlapReq())
console.log(payload,"fetchdata")
axios.get(`https://apnastore123.herokuapp.com/laptop`,{
    params:{
        ...payload
    }
})
.then((res)=>{
   
    return dispatch(fetchlapSuc(res.data))     
})
.catch((e)=>{
    return dispatch(fetchlapfai(e.message))
})
}


const fetchledReq=(payload)=>{
    return{
        type:types.fetch_led_Request,
        payload
    }
}

const fetchledSuc=(payload)=>{
return{
    type:types.fetch_led_Success,
   payload
}
}

const fetchledfai=(payload)=>{
return{
    type:types.fetch_led_Failure,
    payload
}
}


export const fetchled=(payload)=>(dispatch)=>{
dispatch(fetchledReq())
console.log(payload,"fetchdata")
axios.get(`https://apnastore123.herokuapp.com/headphone`,{
    params:{
        ...payload
    }
})
.then((res)=>{
   
    return dispatch(fetchledSuc(res.data))     
})
.catch((e)=>{
    return dispatch(fetchledfai(e.message))
})
}