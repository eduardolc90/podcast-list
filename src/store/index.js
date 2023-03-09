import { createStore, compose, applyMiddleware } from "redux";
import reducer, { initState } from "./reducers";
import thunk from "redux-thunk";

const middleware = [thunk];

/* eslint-disable */
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

export default createStore(reducer, initState, enhancer);