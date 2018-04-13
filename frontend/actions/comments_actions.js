import * as ApiCommentsUtil from '../util/comments_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment: comment
});

export const fetchComment = commentId => dispatch => (
  ApiCommentsUtil.fetchComment(commentId).then(
    comment => dispatch(receiveComment(comment))
  )
);

export const createComment = comment => dispatch => (
  ApiCommentsUtil.createComment(comment).then(
    resComment => dispatch(receiveComment(resComment))
  )
);

export const deleteComment = commentId => dispatch => (
  ApiCommentsUtil.deleteComment(commentId).then(
    comment => dispatch(removeComment(comment))
  )
);
