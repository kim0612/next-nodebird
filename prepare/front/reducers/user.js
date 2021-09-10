const dummyUser = {
  id: 1,
  nickname: '제로초',
  Posts: [],
  Followings: [{nickname:"김재호"}, {nickname:"장종구"},{nickname:"이동민"}],
  Followers: [{nickname:"김재호"}, {nickname:"장종구"},{nickname:"이동민"}],
};

// state 초기화
const initialState = {
  isLoggedin : false,
  me : null,
  signUpData : {},
  logInData : {}
}

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


//(action) or (action creator) 생성 및 배포
export const loginRequestAction = (data) => {
  return {
    type : LOG_IN_REQUEST,
    data
  }
}
export const logoutRequestAction = {
  type : LOG_OUT_REQUEST
}


//reducer 생성 및 배포
const reducer = (state = initialState, action) => {
  switch(action.type){
    // LOG_IN
    case LOG_IN_REQUEST:
      return {
        ...state,
        isLoggedin : true,
        me : dummyUser,
        logInData : action.data
      }
    case LOG_IN_SUCCESS:
      return {
        ...state,
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
      }
    // LOG_OUT
    case LOG_OUT_REQUEST:
      return {
        ...state,
        isLoggedin : false,
        me : null,
        logInData : {}
      }
    case LOG_OUT_SUCCESS:
      return {
        ...state,
      }
    case LOG_OUT_FAILURE:
      return {
        ...state,
      }
    // SIGN_UP
    case SIGN_UP_REQUEST:
      return{
        ...state,
      }
    case SIGN_UP_SUCCESS:
      return{
        ...state,
      }
    case SIGN_UP_FAILURE:
      return{
        ...state,
      }
    // default
    default:
      console.log("user reducer 초기화 or !!해당 액션이 reducer에 존재하지 않음!!");
      return state;
  }
}
export default reducer;