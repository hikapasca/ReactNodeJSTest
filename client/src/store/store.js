import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import jobsReducer from "./reducer/jobsReducer";

const reducers = combineReducers({
  jobsReducer,
});
const middlewares = applyMiddleware(thunk);

const store = createStore(reducers, middlewares);

export default store;
