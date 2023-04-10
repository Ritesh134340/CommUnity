import {legacy_createStore, applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk";
import {reducer as AuthReducer} from "../redux/authRedux/reducer"
import {reducer as AppReducer} from "../redux/appRedux/reducer"

const rootReducer=combineReducers({AuthReducer,AppReducer});

const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

export {store}