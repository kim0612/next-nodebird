import { all, fork, call, takeLatest, delay, put } from "redux-saga/effects";
import axios from 'axios';

import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, } from '../reducers/user';


// 실제로 API를 불러오는 함수 (실제로 서버와 통신, axios 사용)
function logInAPI(data) {
  return axios.post('/api/login', data);
};
function logOutAPI(data) {
  return axios.post('/api/logout', data);
};
function signUpAPI(data) {
  return axios.post('api/signup', data);
};


// 비동기 액션을 실행하는 함수. (서버와통신한 값을 이용해서 여러동작을 실행하고, 액션을 dispatch한다.)
function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(2000);
    yield put({
      type : LOG_IN_SUCCESS,
      // data : result.data,
    });
  }
  catch(err) {
    yield put({
      type : LOG_IN_FAILURE,
      data : err.response.data,
    });
  }
};
function* logOut(action) {
  try {
    // const result = yield call(logOutAPI, action.data);
    yield delay(2000);
    yield put({
      type : LOG_OUT_SUCCESS,
      // data : result.data,
    });
  }
  catch(err) {
    yield put({
      type : LOG_OUT_FAILURE,
      data : err.response.data,
    });
  }
};
function* signUp(action) {
  try {
    // const result = yield call(SignUpAPI, action.data);
    yield delay(2000);
    yield put({
      type : SIGN_UP_SUCCESS,
      // data : result.data,
    });
  }
  catch(err) {
    yield put({
      type : SIGN_UP_FAILURE,
      data : err.response.data,
    });
  }
};


// 이벤트 리스너처럼 동작하는 제너레이터 함수. (REQUEST액션을 계속해서 watching 한다.)
function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
};
function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
};
function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
};


// rootSaga 
export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchSignup),
  ]);
};