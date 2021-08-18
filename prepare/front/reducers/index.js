const initialState = {
  user : {
    isLoggedin : false,
    id : null,
  },
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    default:
      console.log(state);
      return state;
  }
}
export default reducer;