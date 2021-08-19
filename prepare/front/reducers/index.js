import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

//쪼개진 reducer들 불러오기
import user from './user';
import post from './post';


//rootReducer 생성 및 배포
const rootReducer = combineReducers({
  index : (state={}, action) => {
    switch(action.type){
      case HYDRATE:
        console.log("HYDRATE",action)
        return {...state, ...action.payload}
      default:
        console.log("index rootReducer 초기화 or !!해당 액션이 rootReducer에 존재하지 않음!!");
        return state;
    }
  },
  user,
  post
})
export default rootReducer;