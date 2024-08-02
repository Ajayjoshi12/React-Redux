import { applyMiddleware, combineReducers, createStore } from "redux";
import {reducerOnlineUsers,reducerComments} from "./reducer"
import { createLogger } from "redux-logger";
// const defaultState = {total_online_user:0}


const loggerMiddleware = createLogger();

const mainReducer = combineReducers({
    reducerOnlineUsers,
    reducerComments
})

const store = createStore(mainReducer,
    applyMiddleware(loggerMiddleware));


export default store;
