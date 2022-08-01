import*as types from './ActionType'

const initialState={
    loading:false,
    error:false,
    books:[]
}

export const BooksReducer=(state=initialState,action)=>{

    const {type,payload}=action

    switch(type){
       case types.fetch_engineering_Request:
            return{
                ...state,
                loading:true
            }
        
        case types.fetch_engineering_Success:
            return{
                ...state,
                books:payload
            }
            case types.fetch_engineering_Failure:
                return{
                    ...state,
                    error:true
                }
                case types.fetch_Comp_Request:
                    return{
                        ...state,
                        loading:true
                    }
             case types.fetch_Comp_Success:
                return{
                    ...state,
                    books:payload
                }
              case types.fetch_Comp_Failure:
                return{
                    ...state,
                    error:true
                }
             case types.fetch_mob_Request:
                return{
                    ...state,
                    loading:true
                } 
                case types.fetch_mob_Success:
                    return{
                        ...state,
                        books:payload
                    }
                  case types.fetch_mob_Failure:
                    return{
                        ...state,
                        error:true
                    } 
                    case types.fetch_led_Request:
                return{
                    ...state,
                    loading:true
                } 
                case types.fetch_led_Success:
                    return{
                        ...state,
                        books:payload
                    }
                  case types.fetch_led_Failure:
                    return{
                        ...state,
                        error:true
                    } 
                    case types.fetch_lap_Request:
                return{
                    ...state,
                    loading:true
                } 
                case types.fetch_lap_Success:
                    return{
                        ...state,
                        books:payload
                    }
                  case types.fetch_lap_Failure:
                    return{
                        ...state,
                        error:true
                    }       
                default:
                    return state
    }
    


}