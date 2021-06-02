/* eslint-disable no-console */
import { addComment, getComments, deleteComment, updateComment } from '../../http/commentAPI';
import { addCommentAction, commentsLoadingAction, getAllCommentsAction } from './actions';

export const addNewCommentOperation = newComment => dispatch => {
  dispatch(commentsLoadingAction(true));
  addComment(newComment).then(res => {
    dispatch(addCommentAction(res.data));
  });
  dispatch(commentsLoadingAction(false));
};

export const getAllCommentsOperation = () => dispatch => {
  dispatch(commentsLoadingAction(true));
  getComments().then(res => {
    dispatch(getAllCommentsAction(res.data));
  });
  dispatch(commentsLoadingAction(false));
};

export const deleteCommentOperation = commentID => dispatch => {
  dispatch(commentsLoadingAction(true));
  deleteComment(commentID);
  dispatch(commentsLoadingAction(false));
};

export const updateCommentOperation = (commentID, updatedComment) => dispatch => {
  dispatch(commentsLoadingAction(true));
  updateComment(commentID, updatedComment);
  dispatch(commentsLoadingAction(false));
};