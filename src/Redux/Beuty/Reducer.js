import*as types from './ActionsTypes'

const initialState={
    loading:false,
    error:false,
    Hairs:[],
    lipsticks:[],
    eyecare:[]

}


export const BeautyReducer=(state=initialState,action)=>{
   const {type,payload}=action
   switch(type){
    case types.fetch_Lipsticks_Request:
        return{
            ...state,
            loading:true,
            error:false
        }
        case types.fetch_Lipsticks_Success:
            return{
                ...state,
                loading:false,
                lipsticks:payload,
                error:false
            }

            case types.fetch_Lipsticks_Failure:
                return{
                    ...state,
                    error:true
                }

                case types.fetch_Hairs_Success:
                    return{
                        ...state,
                        Hairs:payload
                    }

                default:
                    return state
   }
}