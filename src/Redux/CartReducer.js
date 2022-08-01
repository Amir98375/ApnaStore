import*as types from './ActionType'


let initialState={
    cart:[]
}

if(localStorage.getItem('cart')){
    initialState.cart=JSON.parse(localStorage.getItem('cart'))
}else {
    initialState.cart=[]
}

export const cartReducer=(state=initialState,action)=>{
      const {type,payload}=action;
    //   console.log("cartreducer",payload)
      switch(type){
        case types.Add_Cart_Success:
           return {
            cart:[...payload]
           }
           case types.fetch_Cart_Success:
            return{
                cart:payload
            }
           default: 
           return state
      }
}