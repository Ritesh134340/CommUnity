
import * as types from "./actionTypes"
const initialState={
  loading:false,
  error :false,
  usersDocument:[]
}


const reducer = (state=initialState,action) => {
const {type,payload}=action;

 switch(type){

   case types.CREATE_USER_REQUEST : return  {...state,loading:true,error:false}
   case types.CREATE_USER_SUCCESS : return  {...state,loading:false,error:false}
   case types.CREATE_USER_FAILURE : return  {...state,loading:false,error:true}

   case types.GET_USER_REQUEST : return  {...state,loading:true,error:false}
   case types.GET_USER_SUCCESS : return  {...state,loading:false,error:false,usersDocument:payload.usersDocument}
   case types.GET_USER_FAILURE : return  {...state,loading:false,error:true}



   case types.UPDATE_USER_REQUEST : return  {...state,loading:true,error:false}
   case types.UPDATE_USER_SUCCESS : return  {...state,loading:false,error:false}
   case types.UPDATE_USER_FAILURE : return  {...state,loading:false,error:true}



   case types.DELETE_USER_REQUEST : return  {...state,loading:true,error:false}
   case types.DELETE_USER_SUCCESS : return  {...state,loading:false,error:false}
   case types.DELETE_USER_FAILURE : return  {...state,loading:false,error:true}


   case types.GET_USER_BY_ID_REQUEST : return  {...state,loading:true,error:false}
   case types.GET_USER_BY_ID_SUCCESS : return  {...state,loading:false,error:false}
   case types.GET_USER_BY_ID_FAILURE : return  {...state,loading:false,error:true}


    case types.GET_TOTAL_USER_REQUEST : return  {...state,loading:true,error:false}
   case types.GET_TOTAL_USER_SUCCESS : return  {...state,loading:false,error:false}
   case types.GET_TOTAL_USER_FAILURE : return  {...state,loading:false,error:true}


   case types.GET_ACTIVE_USER_REQUEST : return  {...state,loading:true,error:false}
   case types.GET_ACTIVE_USER_SUCCESS : return  {...state,loading:false,error:false}
   case types.GET_ACTIVE_USER_FAILURE : return  {...state,loading:false,error:true}

   default: return state
 }
}

export {reducer}