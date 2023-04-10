import * as types from "./actionTypes"
import axios from "axios"


export const createUser=(payload)=>(dispatch)=>{

  dispatch({type:types.CREATE_USER_REQUEST})
 return  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/users`,payload)
  .then((res)=>{
    return dispatch({type:types.CREATE_USER_SUCCESS,payload:res.data,status:res.status})
  })
  .catch((err)=>{
    return dispatch({type:types.CREATE_USER_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
  })
 
  
}


export const getUser=()=>(dispatch)=>{
  dispatch({type:types.GET_USER_REQUEST});
  return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/users`)
  .then((res)=>{
    return dispatch({type:types.GET_USER_SUCCESS,payload:res.data,status:res.status})
  })
  .catch((err)=>{
   return dispatch({type:types.GET_USER_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
  })
}


export const updateUser=(id,payload)=>(dispatch)=>{
  dispatch({type:types.UPDATE_USER_REQUEST});
  return axios.put(`${process.env.REACT_APP_SERVER_ADDRESS}/users/${id}`,payload)
  .then((res)=>{
    return dispatch({type:types.UPDATE_USER_SUCCESS,payload:res.data,status:res.status})
  })
  .catch((err)=>{
   return dispatch({type:types.UPDATE_USER_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
  })
}



export const deleteUser=(id)=>(dispatch)=>{
  dispatch({type:types.DELETE_USER_REQUEST});
  return axios.delete(`${process.env.REACT_APP_SERVER_ADDRESS}/users/${id}`)
  .then((res)=>{
    return dispatch({type:types.DELETE_USER_SUCCESS,payload:res.data,status:res.status})
  })
  .catch((err)=>{
   return dispatch({type:types.DELETE_USER_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
  })
}


export const getUserById=(id)=>(dispatch)=>{
 
  dispatch({type:types.GET_USER_BY_ID_REQUEST});
  return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/users/${id}`)
  .then((res)=>{
    return dispatch({type:types.GET_USER_BY_ID_SUCCESS,payload:res.data,status:res.status})
  })
  .catch((err)=>{
   return dispatch({type:types.GET_USER_BY_ID_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
  })
}


export const getTotalUsers=()=>(dispatch)=>{
  dispatch({type:types.GET_TOTAL_USER_REQUEST})
 return  axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/analytics/users`)
  .then((res)=>{
return dispatch({type:types.GET_TOTAL_USER_SUCCESS,payload:res.data,status:res.status})
  })
  .catch((err)=>{
    return dispatch({type:types.GET_TOTAL_USER_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
  })
}

export const getActiveUsers=()=>(dispatch)=>{
  dispatch({type:types.GET_ACTIVE_USER_REQUEST})
 return  axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/analytics/users/top-active`)
  .then((res)=>{
return dispatch({type:types.GET_ACTIVE_USER_SUCCESS,payload:res.data,status:res.status})
  })
  .catch((err)=>{
    return dispatch({type:types.GET_ACTIVE_USER_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
  })
}



