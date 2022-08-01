import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux"

import thunk from "redux-thunk"
import { BeautyReducer } from "./Redux/Beuty/Reducer";
import { BooksReducer } from "./Redux/BooksReducer";
import { cartReducer } from "./Redux/CartReducer";
import { userReducer } from "./Redux/GetUser/Reducer";
import { authReduce } from "./Redux/Login/Reducer";
// import { userReducer } from "./Redux/GetUser/reducer";
// import { authReduce } from "./Redux/Login/reducer";
import { productReducer } from "./Redux/Reducer"
import { signupReducer } from "./Redux/Signup/Reducer";
// import { signupReducer } from "./Redux/Signup/reducer";

const root = combineReducers({
    signup:signupReducer, 
    productReducer:productReducer,
    cartReducer:cartReducer,
    BooksReducer:BooksReducer,
    login:authReduce,
    user:userReducer,
    beauty:BeautyReducer
})

const composeEnhancer= window._REDUX_DEV_TOOLS_EXTENSION_COMPOSE||compose;
export const store=legacy_createStore(root,composeEnhancer(applyMiddleware(thunk)))
console.log(store.getState())