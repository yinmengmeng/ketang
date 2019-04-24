import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import reduxLogger from "redux-logger";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(reduxLogger, reduxThunk, reduxPromise))
);
// window._store = store; //测试用
export default store;
