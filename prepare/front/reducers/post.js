const dummyPost = (postId, content, meId, meNickname) => ({ 
  id: postId,
  content: content,
  User: {
    id: meId,
    nickname: meNickname,
  },
  Images: [],
  Comments: [], 
});


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
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};


// action type 변수명으로 정의 및 배포
export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";
export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";


// (action) or (action Creator) 생성 및 배포
export const addPostRequestAction = (data) => (
  {
    type : ADD_POST_REQUEST,
    data,
  }
);
export const addCommentRequestAction = (data) => {
  return{
    type : ADD_COMMENT_REQUEST,
    data, // data에 postId 넘겨줘야함!!! 그래야 saga에서 axios문 해결가능
  }
};

// reducer 생성 및 배포
const reducer = (state=initialState, action) => {
  switch(action.type){
    // ADD_POST
    case ADD_POST_REQUEST: 
      return {
        ...state,
        addPostDone: false,
        addPostError: null,
        addPostLoading: true,
      };
    case ADD_POST_SUCCESS:
      return{
        ...state,
        addPostLoading: false,
        addPostDone: true,
        mainPosts : [
          dummyPost(action.data.postId, action.data.content, action.data.meId, action.data.meNickname),
          ...state.mainPosts,
        ],
      };
    case ADD_POST_FAILURE:
      return{
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    // ADD_COMENT
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentDone: false,
        addCommentError: null,
        addCommentLoading: true,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    // default
    default:
      console.log("post reducer 초기화 or !!해당 액션이 reducer에 존재하지 않음!!");
      return state;
  }
}
export default reducer;