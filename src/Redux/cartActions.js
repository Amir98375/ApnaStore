import* as types from './ActionType'
import { cartReducer } from './CartReducer'
import { productReducer } from './Reducer'

export const AddTocart=(product)=>(dispatch)=>{
    
    const cart=JSON.parse(localStorage.getItem('cart'))||[]
    
    const dupliactes=cart.filter((cartItem)=>cartItem.id===product.id)
    if(dupliactes.length===0){
        const productToAdd={
            ...product,
            count:1
        }
        // console.log(cart,"cart")
        cart.push(productToAdd)

        localStorage.setItem('cart',JSON.stringify(cart))

        dispatch({
            type:types.Add_Cart_Success,
            payload:cart
        })
    }
}
