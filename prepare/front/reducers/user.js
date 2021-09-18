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
  switch(action.type){
    // LOG_IN
    case LOG_IN_REQUEST:
      return {
        ...state,
        loginLoading : true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        loginLoading : false,
        isLoggedin : true,
        me : dummyUser,
        logInData : action.data,
      };
    case LOG_IN_FAILURE:
      console.log(action.error);
      return {
        ...state,
        loginLoading : false,
      };
    // LOG_OUT
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logoutLoading : true,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logoutLoading : false,
        isLoggedin : false,
        me : null,
        logInData : {},
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logoutLoading : false,
      };
    // SIGN_UP
    case SIGN_UP_REQUEST:
      return{
        ...state,
        signupLoading : true,
      };
    case SIGN_UP_SUCCESS:
      return{
        ...state,
        signupLoading : false,
        signUpData : action.data,
      };
    case SIGN_UP_FAILURE:
      return{
        ...state,
        signupLoading : false,
      };
    // CHANGE_NICKNAME
    case CHANGE_NICKNAME_REQUEST:
      return{
        ...state,
        changeNicknameDone : false,
        changeNicknameError : null,
        changeNicknameLoading : true,
      };
    case CHANGE_NICKNAME_SUCCESS:
      return{
        ...state,
        changeNicknameLoading : false,
        changeNicknameDone : true,
      };
    case CHANGE_NICKNAME_FAILURE:
      return{
        ...state,
        changeNicknameLoading : false,
        changeNicknameError : action.error,
      };
    // ADD_POST_TO_ME
    case ADD_POST_TO_ME:
      {
        // action.data 이렇게 들어옴! {postId:nanoid(), content:content, meId:me.id, meNickname:me.nickname}
        let newMePosts = Array.from(state.me.Posts);
        newMePosts = [{ id:action.data.postId }, ...newMePosts];
        return {
          ...state,
          me : {
            ...state.me,
            Posts : newMePosts,
          },
        };
      }
    // DELETE_POST_OF_ME
    case DELETE_POST_OF_ME:
      {
        // action 이렇게 들어옴! { type:DELETE_POST_OF_ME, targetPostId:action.targetPostId }
        let newMePosts = state.me.Posts.filter((item)=>{return(item.id !== action.targetPostId)});
        return {
          ...state,
          me : {
            ...state.me,
            Posts : newMePosts,
          },
        };
      }
    // default
    default:
      console.log("user reducer 초기화 or !!해당 액션이 reducer에 존재하지 않음!!");
      return state;
  }
}
export default reducer;