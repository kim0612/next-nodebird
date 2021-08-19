
//액션타입 정의
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

//action creator
export const loginAction = (data) => {
  return {
    type : LOG_IN,
    data
  }
}
export const logoutAction = {
  type : LOG_OUT
}


//state 초기화
const initialState = {
  user : {
    isLoggedin : false,
    user : null,
  },
};


//reducer 생성
const reducer = (state = initialState, action) => {
  switch(action.type){
    case LOG_IN:
      return {
        ...state,
        user : {
          ...state.user,
          isLoggedin : true,
          user : action.data
        }
      }
    case LOG_OUT:
      return {
        ...state,
        user : {
          ...state.user,
          isLoggedin : false,
          user : null
        }
      }
    default:
      console.log("해당 액션이 reducer에 존재하지 않음!");
      return state;
  }
}
export default reducer;