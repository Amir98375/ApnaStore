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
        case types.fetch_AllP_Request:
        return{
              ...state,
              laoding:true,
              Error:false
        }
        case types.fetch_AllP__Success:
            return{
                ...state,
                laoding:false,
                products:payload,
                Error:false
            }
        case types.fetch_AllP__Failure:
            return{
                ...state,
                laoding:false,
                Error:true
            }
            case types.fetch_Electronics_Request:
                return{
                    ...state,
                    laoding:true,
                    Error:false
                }
           case types.fetch_Electronics_Success:
            return{
                ...state,
                electronicsData:payload,
                Error:false

            }
            case types.fetch_Electronics_Failure:
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
                      case types.fetch_HomeBooks_Request:
                        return{
                            ...state,
                            laoding:true,
                            Error:false
                        }  
                        case types.fetch_HomeBooks_Success:
                            return{
                                ...state,
                               
                                products:payload,
                                Error:false
                            }
                          case types.fetch_HomeBooks_Success:
                            return{
                                ...state,
                                laoding:false,
                                Error:true
                        
                            }      
            default:
                return state;
        }
    }