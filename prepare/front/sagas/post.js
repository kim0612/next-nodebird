import { all, fork, call, takeLatest, put, delay } from "redux-saga/effects";
import axios from 'axios'

import { 
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
} from '../reducers/post';


// 실제로 API를 불러오는 함수 (실제로 서버와 통신, axios 사용)
function addPostAPI(data) {
  return axios.post('/api/post', data);
};
function deletePostAPI(data) {
  return axios.dlelete('/api/post', data);
};
function addCommentAPI(data) {
  return axios.post(`/api/post/${data.postId}/comment`, data);
};


// 비동기 액션을 실행하는 함수. (서버와통신한 값을 이용해서 여러동작을 실행하고, 액션을 dispatch한다.)
function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(2000);
    yield put({
      type : ADD_POST_SUCCESS,
      // data : result.data,
      data : action.data,
    });
  }
  catch(err) {
    yield put({
      type : ADD_POST_FAILURE,
      error : err.response.data,
    });
  }
};
function* deletePost(action) {
  try {
    // const result = yield call(deletePostAPI, action.data);
    yield delay(2000);
    yield put({
      type : DELETE_POST_SUCCESS,
      // data : result.data,
      targetPostId : action.targetPostId,
    });
  }
  catch(err) {
    yield put({
      type : DELETE_POST_FAILURE,
      // error : err.response.data,
      error : err,
    });
  }
};
function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield delay(2000);
    yield put({
      type : ADD_COMMENT_SUCCESS,
      // data : result.data,
      data : action.data,
    });
  }
  catch(err) {
    yield put({
      type : ADD_COMMENT_FAILURE,
      // error : err.response.data,
      error : err,
    });
  }
};


// 이벤트 리스너처럼 동작하는 제너레이터 함수. (REQUEST액션을 계속해서 watching 한다.)
function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
};
function* watchDeletePost() {
  yield takeLatest(DELETE_POST_REQUEST, deletePost);
}
function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
};


// rootSaga 
export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchDeletePost),
    fork(watchAddComment),
  ]);
};