import produce from 'immer';

const dummyUser = {
  id: 1,
  nickname: '제로초',
  Posts: [],
  Followings: [{nickname:"김재호"}, {nickname:"장종구"},{nickname:"이동민"}],
  Followers: [{nickname:"김재호"}, {nickname:"장종구"},{nickname:"이동민"}],
};

// state 초기화
const initialState = {
  loginLoading : false,
  logoutLoading : false,
  signupLoading : false,
  isLoggedin : false,
  me : null,
  signUpData : null,
  logInData : {},
  changeNicknameLoading : false,
  changeNicknameDone : false,
  changeNicknameError : null,
};

// action type 변수명으로 정의
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
export const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
export const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const DELETE_POST_OF_ME = "DELETE_POST_OF_ME";

//(action) or (action creator) 생성 및 배포
export const loginRequestAction = (data) => {
  return {
    type : LOG_IN_REQUEST,
    data
  }
};
export const logoutRequestAction = {
  type : LOG_OUT_REQUEST
};
export const signupRequestAction = (data) => {
  return {
    type : SIGN_UP_REQUEST,
    data
  }
};
export const changeNicknameRequestAction = {
  type : CHANGE_NICKNAME_REQUEST,
};


//reducer 생성 및 배포
const reducer = (state = initialState, action) => {
  return produce(state, (draft)=>{
    switch(action.type){
      // LOG_IN
      case LOG_IN_REQUEST: {
        draft.loginLoading = true;
        break;
      }
      case LOG_IN_SUCCESS: {
        draft.loginLoading = false;
        draft.isLoggedin = true;
        draft.me = dummyUser;
        draft.logInData = action.data;
        break;
      }
      case LOG_IN_FAILURE: {
        console.log(action.error);
        draft.loginLoading = false;
        break;
      }
      // LOG_OUT
      case LOG_OUT_REQUEST: {
        draft.logoutLoading = true;
        break;
      }
      case LOG_OUT_SUCCESS: {
        draft.logoutLoading = false;
        draft.isLoggedin = false;
        draft.me = null;
        draft.logInData = {};
        break;
      }
      case LOG_OUT_FAILURE: {
        draft.logoutLoading = false;
        break;
      }
      // SIGN_UP
      case SIGN_UP_REQUEST: {
        draft.signupLoading = true;
        break;
      }
      case SIGN_UP_SUCCESS: {
        draft.signupLoading = false;
        draft.signUpData = action.data;
        break;
      }
      case SIGN_UP_FAILURE: {
        draft.signupLoading = false;
        break;
      }
      // CHANGE_NICKNAME
      case CHANGE_NICKNAME_REQUEST: {
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        draft.changeNicknameLoading = true;
        break;
      }
      case CHANGE_NICKNAME_SUCCESS: {
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      }
      case CHANGE_NICKNAME_FAILURE: {
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      }
      // ADD_POST_TO_ME
      case ADD_POST_TO_ME: {
        // action.data 이렇게 들어옴! {postId:nanoid(), content:content, meId:me.id, meNickname:me.nickname}
        draft.me.Posts.unshift({ id:action.data.postId });
        break;
        // let newMePosts = Array.from(state.me.Posts);
        // newMePosts = [{ id:action.data.postId }, ...newMePosts];
        // return {
        //   ...state,
        //   me : {
        //     ...state.me,
        //     Posts : newMePosts,
        //   },
        // };
      }
      // DELETE_POST_OF_ME
      case DELETE_POST_OF_ME: {
        // action 이렇게 들어옴! { type:DELETE_POST_OF_ME, targetPostId:action.targetPostId }
        draft.me.Posts = draft.me.Posts.filter((item)=>{return(item.id !== action.targetPostId)});
        break;
        // let newMePosts = state.me.Posts.filter((item)=>{return(item.id !== action.targetPostId)});
        // return {
        //   ...state,
        //   me : {
        //     ...state.me,
        //     Posts : newMePosts,
        //   },
        // };
      }
      // default
      default: {
        console.log("user reducer 초기화 or !!해당 액션이 reducer에 존재하지 않음!!");
        break;
      }
    }
  });
}
export default reducer;