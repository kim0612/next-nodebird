import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducer from "../reducers";
import rootSaga from '../sagas';

// redux-thunk 예시 (간단한 로거미들웨어 제작. redux-dev-tools 같은거....)
const loggerMiddleware = ({dispatch, getState}) => (next) => (action) => {
  console.log(action);
  return next(action);
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(reducer, enhancer);
  store.sagatask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, { debug : process.env.NODE_ENV === "development" });

export default wrapper;