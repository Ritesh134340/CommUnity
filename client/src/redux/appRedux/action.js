
import * as types from "./actionTypes"
import axios from "axios"




export const createPost=(payload)=>(dispatch)=>{

    dispatch({type:types.CREATE_POST_REQUEST})
   return  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/posts`,payload)
    .then((res)=>{
      return dispatch({type:types.CREATE_POST_SUCCESS,payload:res.data,status:res.status})
    })
    .catch((err)=>{
      return dispatch({type:types.CREATE_POST_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
    })
   
    
  }


  export const getPost=()=>(dispatch)=>{
    dispatch({type:types.GET_POST_REQUEST})
   return  axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/posts`)
    .then((res)=>{
     return  dispatch({type:types.GET_POST_SUCCESS,status:res.status,payload:res.data})
    })
    .catch((err)=>{
      return dispatch({type:types.GET_POST_FAILURE,mesg:err.response.data.mesg,status:err.response.status})
    })
  }



  export const updatePost=(id,payload)=>(dispatch)=>{
    dispatch({type:types.UPDATE_POST_REQUEST});
    return axios.put(`${process.env.REACT_APP_SERVER_ADDRESS}/posts/${id}`,payload)
    .then((res)=>{
      return dispatch({type:types.UPDATE_POST_SUCCESS,status:res.status,payload:res.data})
    })
    .catch((err)=>{
      return dispatch({type:types.UPDATE_POST_FAILURE,mesg:err.response.data.mesg,status:err.response.status})
    })
  }



  export const deletePost=(id)=>(dispatch)=>{
    dispatch({type:types.DELETE_POST_REQUEST});
    return axios.delete(`${process.env.REACT_APP_SERVER_ADDRESS}/posts/${id}`)
    .then((res)=>{
      return dispatch({type:types.DELETE_POST_SUCCESS,status:res.status,payload:res.data})
    })
    .catch((err)=>{
      return dispatch({type:types.DELETE_POST_FAILURE,mesg:err.response.data.mesg,status:err.response.status})
    })
 
  }


  export const getPostById=(id)=>(dispatch)=>{
    dispatch({type:types.GET_POST_BY_ID_REQUEST})
    return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/posts/${id}`)
    .then((res)=>{
      return dispatch({type:types.GET_POST_BY_ID_SUCCESS,payload:res.data,status:res.status})
    })
    .catch((err)=>{
      return dispatch({type:types.GET_POST_BY_ID_FAILURE,mesg:err.response.data.mesg,status:err.response.status})
    })
  }


  export const likePost=(id,currentLikes)=>(dispatch)=>{
    dispatch({type:types.LIKE_POST_REQUEST})
    return axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/posts/${id}/like`,{currentLikes})
    .then((res)=>{
     return dispatch({type:types.LIKE_POST_SUCCESS,status:res.status})
    })
    .catch((err)=>{
      return dispatch({type:types.LIKE_POST_FAILURE,mesg:err.response.data.mesg,status:err.response.status})
    })
  }

  export const disLikePost=(id,currentLikes)=>(dispatch)=>{
    dispatch({type:types.DISLIKE_POST_REQUEST})
    return axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/posts/${id}/unlike`,{currentLikes})
    .then((res)=>{
     return dispatch({type:types.DISLIKE_POST_SUCCESS,status:res.status})
    })
    .catch((err)=>{
      return dispatch({type:types.DISLIKE_POST_FAILURE,mesg:err.response.data.mesg,status:err.response.status})
    })
  }



  export const getTotalPosts=()=>(dispatch)=>{
    dispatch({type:types.GET_TOTAL_POST_REQUEST})
    return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/analytics/posts`)
    .then((res)=>{
      return dispatch({type:types.GET_TOTAL_POST_SUCCESS,status:res.status,payload:res.data})
    })
    .catch((err)=>{
      return dispatch({type:types.GET_TOTAL_POST_FAILURE,status:err.response.staus,mesg:err.response.data.mesg})
    })
  }



  export const getMostLikedPosts=()=>(dispatch)=>{
    dispatch({type:types.GET_MOST_LIKED_POST_REQUEST})
    return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/analytics/posts/top-liked`)
    .then((res)=>{
      return dispatch({type:types.GET_MOST_LIKED_POST_SUCCESS,status:res.status,payload:res.data})
    })
    .catch((err)=>{
      return dispatch({type:types.GET_MOST_LIKED_POST_FAILURE,status:err.response.staus,mesg:err.response.data.mesg})
    })
  }
