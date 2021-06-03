/* eslint-disable no-underscore-dangle */
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_ALL_COMMENTS,
  GET_CUSTOMER_COMMENTS,
  GET_PRODUCT_COMMENTS,
  SET_COMMENTS_LOADING,
  UPDATE_COMMENT,
} from './types';

const initialState = {
  isLoading: false,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      return { ...state, data: [action.payload, ...state.data] };
    }
    case DELETE_COMMENT: {
      const { _id: deletedID } = action.payload.deletedCommentInfo;
      return { ...state, data: state.data.filter(c => c._id !== deletedID) };
    }
    case UPDATE_COMMENT: {
      const { _id: updatedID, content: updatedContent } = action.payload;
      const oldComment = state.data.find(c => c._id === updatedID);
      const updatedComment = { ...oldComment, content: updatedContent };
      const index = state.data.indexOf(oldComment);
      const newComments = [...state.data];
      newComments.splice(index, 1, updatedComment);
      return { ...state, data: newComments };
    }
    case GET_ALL_COMMENTS: {
      return { ...state, data: action.payload };
    }
    case GET_CUSTOMER_COMMENTS: {
      return { ...state, data: action.payload };
    }
    case GET_PRODUCT_COMMENTS: {
      return { ...state, data: action.payload };
    }
    case SET_COMMENTS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
