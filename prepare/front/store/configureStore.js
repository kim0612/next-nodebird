import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk';

import reducer from "../reducers";

// redux-thunk 예시 (간단한 로거미들웨어 제작. redux-dev-tools 같은거....)
const loggerMiddleware = ({dispatch, getState}) => (next) => (action) => {
  console.log(action);
  return next(action);
}

const configureStore = () => {
  const middlewares = [thunkMiddleware, loggerMiddleware];
  const enhancer = process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, { debug : process.env.NODE_ENV === "development" });

export default wrapper;