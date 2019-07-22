import { createStore, combineReducers } from "redux";
import * as Frame from "./Frame/Reducer";

let store = createStore(combineReducers({ ...Frame }));

export default store;
