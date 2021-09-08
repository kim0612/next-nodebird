import { all, fork, call, takeLatest, put, delay } from "redux-saga/effects";
import axios from 'axios'


// 실제로 API를 불러오는 함수 (실제로 서버와 통신, axios 사용)
function addPostAPI(data) {
  return axios.post('/api/post', data);
}


// 비동기 액션을 실행하는 함수. (서버와통신한 값을 이용해서 여러동작을 실행하고, 액션을 dispatch한다.)
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
    });
  }
}


// 이벤트 리스너처럼 동작하는 제너레이터 함수. (REQUEST액션을 계속해서 watching 한다.)
function* watchAddPost() {
  yield takeLatest('ADD_POST_REQUEST', addPost);
}


// rootSaga 
export default function* postSaga() {
  all([
    fork(watchAddPost),
  ]);
}