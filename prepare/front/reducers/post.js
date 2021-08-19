const initialState = {
  mainPost : []
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    default:
      console.log("post reducer 초기화 or !!해당 액션이 reducer에 존재하지 않음!!");
      return state;
  }
}
export default reducer;