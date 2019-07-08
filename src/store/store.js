import { createStore, combineReducers } from "redux";

import * as userList from "./user-list/reducer";

let store = createStore(combineReducers({ ...userList }));

export default store;
