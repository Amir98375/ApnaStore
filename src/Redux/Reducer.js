import* as types from './ActionType'

const initialState={
    laoding:false,
    isDataFetched:false,
    Error:false,
    electronicsData:[],
    products:[],
    currentProduct:{},
}

export const productReducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.fetch_Delhi_Request:
        return{
              ...state,
              laoding:true,
              Error:false
        }
        case types.fetch_Delhi_Success:
            return{
                ...state,
                laoding:false,
                products:payload,
                Error:false
            }
        case types.fetch_Delhi_Failure:
            return{
                ...state,
                laoding:false,
                Error:true
            }
            case types.fetch_Guj_Request:
                return{
                    ...state,
                    laoding:true,
                    Error:false
                }
           case types.fetch_Guj_Success:
            return{
                ...state,
                electronicsData:payload,
                Error:false

            }
            case types.fetch_Guj_Failure:
                return{
                    ...state,
                    laoding:false,
                    Error:true
                }

              case types.fetch_Goa_Request:
                return{
                    ...state,
                    laoding:true,
                    Error:false
                }  
                case types.fetch_Goa_Success:
                    return{
                        ...state,
                        products:payload,
                        Error:false
                    }
                    case types.fetch_Goa_Failure:
                        return{
                            ...state,
                            laoding:false,
                            Error:true
                        }
                     case types.Single_Data_Request:
                        return{
                            ...state,
                            laoding:true,
                            Error:false
                        } 
                      case types.Single_Data_Success:
                        return{
                            ...state,
                            laoding:false,
                            currentProduct:payload,
                            Error:false
                        }
                      case types.Single_Data_Failure:
                        return{
                            ...state,
                            laoding:false,
                            Error:true
                    
                        }
                      case types.fetch_Package_Request:
                        return{
                            ...state,
                            laoding:true,
                            Error:false
                        }  
                        case types.fetch_Package_Success:
                            return{
                                ...state,
                               
                                products:payload,
                                Error:false
                            }
                          case types.fetch_Package_Failure:
                            return{
                                ...state,
                                laoding:false,
                                Error:true
                        
                            }      
            default:
                return state;
        }
    }