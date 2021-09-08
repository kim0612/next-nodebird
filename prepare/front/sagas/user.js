import { all, fork, call, takeLatest, delay, put } from "redux-saga/effects";
import axios from 'axios'


// 실제로 API를 불러오는 함수 (실제로 서버와 통신, axios 사용)
function logInAPI(data) {
  return axios.post('/api/login', data);
}
function logOutAPI(data) {
  return axios.post('/api/logout', data);
}


// 비동기 액션을 실행하는 함수. (서버와통신한 값을 이용해서 여러동작을 실행하고, 액션을 dispatch한다.)
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
    });
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
    });
  }
}


// 이벤트 리스너처럼 동작하는 제너레이터 함수. (REQUEST액션을 계속해서 watching 한다.)
function* watchLogin() {
  yield takeLatest('LOG_IN_REQUEST', logIn);
}
function* watchLogout() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
}


// rootSaga 
export default function* userSaga() {
  all([
    fork(watchLogin),
    fork(watchLogout),
  ]);
}