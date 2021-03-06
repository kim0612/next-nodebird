import produce from 'immer';
import faker from 'faker';
import { nanoid } from 'nanoid';

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

const dummyComment = (meNickname, content) => {
  return {
    User : {
      nickname : meNickname,
    },
    content : content,
  };
};

//state 초기화
const initialState = {
  mainPosts: [{
    id: 1,
    content: '첫 번째 게시글',
    User: {
      id: 1524,
      nickname: 'BoogieCho',
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
  deletePostLoading: false,
  deletePostDone: false,
  deletePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

let fakerDummyPosts = Array(10).fill().map(()=>{
  return(
    {
      id: nanoid(),
      content: faker.lorem.paragraph(),
      User: {
        id: nanoid(),
        nickname: faker.internet.userName(),
      },
      Images: [
        {src: faker.image.image(),},
        {src: faker.image.image(),},
      ],
      Comments: [
        {
          User: {
            nickname: faker.internet.userName(),
          },
          content: faker.lorem.sentence(),
        },
        {
          User: {
            nickname: faker.internet.userName(),
          },
          content: faker.lorem.sentence(),
        },
      ],
    }
  );
})
initialState.mainPosts = initialState.mainPosts.concat(fakerDummyPosts);

// action type 변수명으로 정의 및 배포
export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";
export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";
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
export const deletePostRequestAction = (data) => {
  return {
    type : DELETE_POST_REQUEST,
    targetPostId : data,
  };
};
export const addCommentRequestAction = (data) => {
  return{
    type : ADD_COMMENT_REQUEST,
    data, // data에 postId 넘겨줘야함!!! 그래야 saga에서 axios문 해결가능
  }
};


// reducer 생성 및 배포
const reducer = (state=initialState, action) => {
  return produce(state, (draft)=>{
    switch(action.type) {
      // ADD_POST
      case ADD_POST_REQUEST: {
        draft.addPostDone = false;
        draft.addPostError = null;
        draft.addPostLoading = true;
        break;
      }
      case ADD_POST_SUCCESS: {
        // action.data 이렇게 들어옴! {postId:nanoid(), content:content, meId:me.id, meNickname:me.nickname}
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data.postId, action.data.content, action.data.meId, action.data.meNickname));
        // return{
        //   ...state,
        //   addPostLoading: false,
        //   addPostDone: true,
        //   mainPosts : [
        //     dummyPost(action.data.postId, action.data.content, action.data.meId, action.data.meNickname),
        //     ...state.mainPosts,
        //   ],
        // };
        break;
      }
      case ADD_POST_FAILURE: {
        console.log(action.error);
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      }
      // DELETE_POST
      case DELETE_POST_REQUEST: {
        draft.deletePostDone = false;
        draft.deletePostError = null;
        draft.deletePostLoading = true;
        break;
      }
      case DELETE_POST_SUCCESS: {
        // action 이렇게 들어옴! { type:DELETE_POST_SUCCESS, targetPostId:action.targetPostId }
        draft.mainPosts = draft.mainPosts.filter((item)=>{return(item.id!==action.targetPostId)});
        draft.deletePostLoading = false;
        draft.deletePostDone = true;
        // let newMainPosts = state.mainPosts.filter((item)=>{return(item.id!==action.targetPostId)});
        // return {
        //   ...state,
        //   mainPosts: newMainPosts,
        //   deletePostLoading: false,
        //   deletePostDone: true,
        // };
        break;
      };
      case DELETE_POST_FAILURE: {
        draft.deletePostLoading = false;
        draft.deletePostError = action.error;
        break;
      }
      // ADD_COMENT
      case ADD_COMMENT_REQUEST: {
        draft.addCommentDone = false;
        draft.addCommentError = null;
        draft.addCommentLoading = true;
        break;
      }
      case ADD_COMMENT_SUCCESS: {
        // action.data 요렇게생김! {postId:post.id, content:newComment, meNickname:me.nickname}
        let targetPost = draft.mainPosts.find((item)=>{return(item.id === action.data.postId)});
        targetPost.Comments.unshift(dummyComment(action.data.meNickname, action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
        // const newComment = dummyComment(action.data.meNickname, action.data.content);
        // const targetPostIndex = state.mainPosts.findIndex((item)=>{return(item.id === action.data.postId)});
        // let targetPost = state.mainPosts.find((item)=>{return(item.id === action.data.postId)});
        // let newComments = Array.from(targetPost.Comments);
        // let newMainPosts = Array.from(state.mainPosts);
        // newComments = [newComment, ...newComments];
        // targetPost = {...targetPost, Comments:newComments};
        // newMainPosts[targetPostIndex] = targetPost;
        // return {
        //   ...state,
        //   mainPosts : newMainPosts,
        //   addCommentLoading: false,
        //   addCommentDone: true,
        // };
      };
      case ADD_COMMENT_FAILURE: {
        console.log(action.error);
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      }
      // default
      default: {
        console.log("post reducer 초기화 or !!해당 액션이 reducer에 존재하지 않음!!");
        break;
      }
    }
  });
}
export default reducer;