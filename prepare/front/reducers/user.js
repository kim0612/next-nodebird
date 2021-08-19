//액션타입 변수명으로 정의
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

//action creator 생성 및 배포
export const loginAction = (data) => {
  return {
    type : LOG_IN,
    data
  }
}
export const logoutAction = {
  type : LOG_OUT
}

// state 초기화
const initialState = {
  isLoggedin : false,
  user : null,
}

//reducer 생성 및 배포
const reducer = (state = initialState, action) => {
  switch(action.type){
    case LOG_IN:
      return {
        ...state,
        isLoggedin : true,
        user : action.data
      }
    case LOG_OUT:
      return {
        ...state,
        isLoggedin : false,
        user : null
      }
    default:
      console.log("user reducer 초기화 or !!해당 액션이 reducer에 존재하지 않음!!");
      return state;
  }
}
export default reducer;