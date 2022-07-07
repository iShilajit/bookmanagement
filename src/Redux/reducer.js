import * as types from './actionTypes'

const initialState={
    books:[],
    isLoading:false,
    isError:false
}
const reducer=(state= initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.GET_BOOKS_REQUEST:
            return {
                ...state,
                isLoading :true,
                isError:false
            }
            case types.GET_BOOKS_SUCCESS:
                return {
                    ...state,
                    books:payload,
                    isLoading :false,
                    isError:false
                }
                case types.GET_BOOKS_FAILURE:
                    return {
                        ...state,
                        isLoading :false,
                        isError: true  
                    }

        default:
            return state;
    }
}

export {reducer}