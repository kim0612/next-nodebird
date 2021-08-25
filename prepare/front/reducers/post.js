const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '제로초',
  },
  Images: [],
  Comments: [],
};

//state 초기화
const initialState = {
  mainPosts: [{
    id: 1,
    content: '첫 번째 게시글',
    User: {
      id: 1,
      nickname: '제로초',
    },
    Images: [{
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    }],
    Comments: [{
      User: {
        nickname: 'nero',
      },
      content: '우와 개정판이 나왔군요~',
    }, {
      User: {
        nickname: 'hero',
      },
      content: '얼른 사고싶어요~',
    }]
  }],
  imagePaths: [],
  postAdded: false,
};

// action type 변수명으로 정의
const ADD_POST = "ADD_POST";

// (action) or (action Creator) 생성 및 배포
export const addPostAction = {
  type : ADD_POST,
}

// reducer 생성 및 배포
const reducer = (state=initialState, action) => {
  switch(action.type){
    case ADD_POST:
      let newState = {
        ...state,
        mainPosts : [
          dummyPost,
          ...state.mainPosts
        ]
      }
      return newState;
    default:
      console.log("post reducer 초기화 or !!해당 액션이 reducer에 존재하지 않음!!");
      return state;
  }
}
export default reducer;