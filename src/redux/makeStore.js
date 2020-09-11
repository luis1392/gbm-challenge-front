import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducer from "./reducers";

export default function makeStore(initialState = {}) {
  let middleware;
  if (process.env.NODE_ENV === "development") {
    // add `redux-logger`
    middleware = applyMiddleware(logger, thunk);
  } else {
    middleware = applyMiddleware(thunk);
  }

  return createStore(reducer, initialState, middleware);
}
