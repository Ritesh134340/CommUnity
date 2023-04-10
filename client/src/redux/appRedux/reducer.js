
import * as types from "./actionTypes"
const initialState={
   loading:false,
   error:false,
   posts:[]
}


const reducer = (state=initialState,action) => {
const {type,payload}=action;

 switch(type){
  case types.CREATE_POST_REQUEST : return  {...state,loading:true,error:false}
  case types.CREATE_POST_SUCCESS : return  {...state,loading:false,error:false}
  case types.CREATE_POST_FAILURE : return  {...state,loading:false,error:true}


  case types.GET_POST_REQUEST : return  {...state,loading:true,error:false}
  case types.GET_POST_SUCCESS : return  {...state,posts:payload.postsDocument,loading:false,error:false}
  case types.GET_POST_FAILURE : return  {...state,loading:false,error:true}



  case types.UPDATE_POST_REQUEST : return  {...state,loading:true,error:false}
  case types.UPDATE_POST_SUCCESS : return  {...state,loading:false,error:false}
  case types.UPDATE_POST_FAILURE : return  {...state,loading:false,error:true}



  case types.DELETE_POST_REQUEST : return  {...state,loading:true,error:false}
  case types.DELETE_POST_SUCCESS : return  {...state,loading:false,error:false}
  case types.DELETE_POST_FAILURE : return  {...state,loading:false,error:true}


  case types.GET_POST_BY_ID_REQUEST : return  {...state,loading:true,error:false}
  case types.GET_POST_BY_ID_SUCCESS : return  {...state,loading:false,error:false}
  case types.GET_POST_BY_ID_FAILURE : return  {...state,loading:false,error:true}

  case types.GET_TOTAL_POST_REQUEST : return  {...state,loading:true,error:false}
  case types.GET_TOTAL_POST_SUCCESS : return  {...state,loading:false,error:false}
  case types.GET_TOTAL_POST_FAILURE : return  {...state,loading:false,error:true}


  case types.GET_MOST_LIKED_POST_REQUEST : return  {...state,loading:true,error:false}
  case types.GET_MOST_LIKED_POST_SUCCESS : return  {...state,loading:false,error:false}
  case types.GET_MOST_LIKED_POST_FAILURE : return  {...state,loading:false,error:true}



   default: return state
 }
}

export {reducer}