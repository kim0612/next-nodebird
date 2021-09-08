import { all, take, fork, call, takeEvery, throttle, put, delay, takeLatest,  } from "redux-saga/effects";
import axios from 'axios'


function logInAPI(data) {
  return axios.post('/api/login', data);
}
function logOutAPI(data) {
  return axios.post('/api/logout', data);
}
function addPostAPI(data) {
  return axios.post('/api/post', data);
}


function* logIn(action) {
  try {
    // const result = yield call(logInAPI);
    yield delay(1000);
    yield put({
      type : 'LOG_IN_SUCCESS',
      // data : result.data,
    });
  }
  catch(err) {
    yield put({
      type : 'LOG_IN_FAILURE',
      data : err.response.data,
    })
  }
}
function* logOut(action) {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type : 'LOG_OUT_SUCCESS',
      // data : result.data,
    });
  }
  catch(err) {
    yield put({
      type : 'LOG_OUT_FAILURE',
      data : err.response.data,
    })
  }
}
function* addPost(action) {
  try {
    // const result = yield call(addPostAPI);
    yield delay(1000);
    yield put({
      type : 'ADD_POST_SUCCESS',
      // data : result.data,
    });
  }
  catch(err) {
    yield put({
      type : 'ADD_POST_FAILURE',
      data : err.response.data,
    })
  }
}


function* watchLogin() {
  yield takeLatest('LOG_IN', logIn);
}
function* watchLogout() {
  yield takeLatest('LOG_OUT', logOut);
}
function* watchAddPost() {
  yield takeLatest('ADD_POST', addPost);
}


export default function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchAddPost)
  ]);
}