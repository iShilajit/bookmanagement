import axios from 'axios'
import * as types from './actionTypes'
const getBooks=(params)=> dispatch=>{
    dispatch({type:types.GET_BOOKS_REQUEST})
    axios.get("/books",params)
    .then(r=>dispatch({type:types.GET_BOOKS_SUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:types.GET_BOOKS_FAILURE}))
}
export{getBooks}